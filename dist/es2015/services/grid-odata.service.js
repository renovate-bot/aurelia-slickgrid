var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './global-utilities';
import { inject } from 'aurelia-framework';
import * as moment from 'moment';
import { CaseType } from './../models/caseType';
import { FieldType } from './../models/fieldType';
let GridOdataService = class GridOdataService {
    constructor(odataService) {
        this.odataService = odataService;
        this.defaultSortBy = '';
        this.minUserInactivityOnFilter = 700;
    }
    buildQuery() {
        return this.odataService.buildQuery();
    }
    initOptions(options) {
        this.odataService.options = options;
    }
    removeColumnFilter(fieldName) {
        this.odataService.removeColumnFilter(fieldName);
    }
    /*
     * Reset the pagination options
     */
    resetPaginationOptions() {
        this.odataService.updateOptions({
            skip: 0
        });
    }
    saveColumnFilter(fieldName, value, terms) {
        this.odataService.saveColumnFilter(fieldName, value, terms);
    }
    /*
     * FILTERING
     */
    onFilterChanged(event, args) {
        let searchBy = '';
        const searchByArray = [];
        // loop through all columns to inspect filters
        for (const columnId in args.columnFilters) {
            if (args.columnFilters.hasOwnProperty(columnId)) {
                const columnFilter = args.columnFilters[columnId];
                const columnDef = columnFilter.columnDef;
                const fieldName = columnDef.field || columnDef.name;
                const fieldType = columnDef.type || 'string';
                let fieldSearchValue = columnFilter.searchTerm;
                if (typeof fieldSearchValue === 'undefined') {
                    fieldSearchValue = '';
                }
                if (typeof fieldSearchValue !== 'string') {
                    throw new Error(`OData filter term property must be provided type "string", if you use filter with options then make sure your ids are also string. For example: filter: {type: FormElementType.select, selectOptions: [{ id: "0", value: "0" }, { id: "1", value: "1" }]`);
                }
                const searchTerms = columnFilter.listTerm || null;
                fieldSearchValue = '' + fieldSearchValue; // make sure it's a string
                const matches = fieldSearchValue.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/); // group 1: Operator, 2: searchValue, 3: last char is '*' (meaning starts with, ex.: abc*)
                const operator = columnFilter.operator || ((matches) ? matches[1] : '');
                let searchValue = (!!matches) ? matches[2] : fieldSearchValue;
                const lastValueChar = (!!matches) ? matches[3] : '';
                const bypassOdataQuery = columnFilter.bypassBackendQuery || false;
                // no need to query if search value is empty
                if (searchValue === '') {
                    this.removeColumnFilter(fieldName || '');
                    continue;
                }
                // escaping the search value
                searchValue = searchValue.replace(`'`, `''`); // escape single quotes by doubling them
                searchValue = encodeURIComponent(searchValue); // encode URI of the final search value
                // extra query arguments
                if (bypassOdataQuery) {
                    // push to our temp array and also trim white spaces
                    if (searchBy !== '') {
                        this.saveColumnFilter(fieldName || '', fieldSearchValue, searchTerms || undefined);
                    }
                }
                else {
                    let searchBy = '';
                    // titleCase the fieldName so that it matches the WebApi names
                    const fieldNameTitleCase = String.titleCase(fieldName || '');
                    // when having more than 1 search term (then check if we have a "IN" or "NOT IN" filter search)
                    if (searchTerms) {
                        let tmpSearchTerms = [];
                        if (operator === 'IN') {
                            // example:: (Stage eq "Expired" or Stage eq "Renewal")
                            for (let j = 0, lnj = searchTerms.length; j < lnj; j++) {
                                tmpSearchTerms.push(`${fieldNameTitleCase} eq '${searchTerms[j]}'`);
                            }
                            searchBy = tmpSearchTerms.join(' or ');
                            searchBy = `(${searchBy})`;
                        }
                        else if (operator === 'NIN' || operator === 'NOTIN' || operator === 'NOT IN') {
                            // example:: (Stage ne "Expired" and Stage ne "Renewal")
                            for (let k = 0, lnk = searchTerms.length; k < lnk; k++) {
                                tmpSearchTerms.push(`${fieldNameTitleCase} ne '${searchTerms[k]}'`);
                            }
                            searchBy = tmpSearchTerms.join(' and ');
                            searchBy = `(${searchBy})`;
                        }
                    }
                    else if (operator === '*' || lastValueChar !== '') {
                        // first/last character is a '*' will be a startsWith or endsWith
                        searchBy = operator === '*'
                            ? `endswith(${fieldNameTitleCase}, '${searchValue}')`
                            : `startswith(${fieldNameTitleCase}, '${searchValue}')`;
                    }
                    else if (fieldType === FieldType.date) {
                        // date field needs to be UTC and within DateTime function
                        const dateFormatted = this.parseUtcDate(searchValue, true);
                        if (dateFormatted) {
                            searchBy = `${fieldNameTitleCase} ${this.mapOperator(operator)} DateTime'${dateFormatted}'`;
                        }
                    }
                    else if (fieldType === FieldType.string) {
                        // string field needs to be in single quotes
                        searchBy = `substringof('${searchValue}', ${fieldNameTitleCase})`;
                    }
                    else {
                        // any other field type (or undefined type)
                        searchValue = fieldType === FieldType.number ? searchValue : `'${searchValue}'`;
                        searchBy = `${fieldNameTitleCase} ${this.mapOperator(operator)} ${searchValue}`;
                    }
                    // push to our temp array and also trim white spaces
                    if (searchBy !== '') {
                        searchByArray.push(String.trim(searchBy));
                        this.saveColumnFilter(fieldName || '', fieldSearchValue, searchTerms || undefined);
                    }
                }
            }
        }
        // build the filter query
        this.odataService.updateOptions({
            filter: (searchByArray.length > 0) ? searchByArray.join(' and ') : '',
            skip: undefined
        });
        // reset Pagination, then build the OData query which we will use in the WebAPI callback
        this.resetPaginationOptions();
        return this.odataService.buildQuery();
    }
    /*
     * PAGINATION
     */
    onPaginationChanged(event, args) {
        this.odataService.updateOptions({
            top: args.pageSize,
            skip: (args.newPage - 1) * args.pageSize
        });
        // build the OData query which we will use in the WebAPI callback
        return this.odataService.buildQuery();
    }
    /*
     * SORTING
     */
    onSortChanged(event, args) {
        let sortByArray = [];
        const sortColumns = (args.multiColumnSort) ? args.sortCols : new Array({ sortCol: args.sortCol, sortAsc: args.sortAsc });
        // build the SortBy string, it could be multisort, example: customerNo asc, purchaserName desc
        if (!sortColumns || sortColumns.length === 0) {
            sortByArray = new Array(this.defaultSortBy); // when empty, use the default sort
        }
        else {
            for (let column of sortColumns) {
                let fieldName = column.sortCol.field || column.sortCol.id;
                if (this.odataService.options.caseType === CaseType.pascalCase) {
                    fieldName = String.titleCase(fieldName);
                }
                const direction = column.sortAsc ? 'asc' : 'desc';
                const sortByColumnString = `${fieldName} ${direction}`;
                sortByArray.push(sortByColumnString);
            }
        }
        // transform the sortby array into a CSV string
        const csvArray = sortByArray.join(',');
        this.odataService.updateOptions({
            orderBy: (this.odataService.options.caseType === CaseType.pascalCase) ? String.titleCase(csvArray) : csvArray
        });
        // build the OData query which we will use in the WebAPI callback
        return this.odataService.buildQuery();
    }
    /**
     * Mapper for mathematical operators (ex.: <= is "le", > is "gt")
     * @param string operator
     * @returns string map
     */
    mapOperator(operator) {
        let map = '';
        switch (operator) {
            case '<':
                map = 'lt';
                break;
            case '<=':
                map = 'le';
                break;
            case '>':
                map = 'gt';
                break;
            case '>=':
                map = 'ge';
                break;
            case '<>':
            case '!=':
                map = 'ne';
                break;
            case '=':
            case '==':
            default:
                map = 'eq';
                break;
        }
        return map;
    }
    /**
     * Parse a date passed as a string and return a Date object (if valid)
     * @param string inputDateString
     * @returns object Date
     */
    parseUtcDate(inputDateString, useUtc) {
        let date = null;
        if (/^[0-9\-\/]*$/.test(inputDateString)) {
            // get the UTC datetime with moment.js but we need to decode the value so that's it's valid text
            const dateString = decodeURIComponent(inputDateString);
            const dateMoment = moment(new Date(dateString));
            if (dateMoment.isValid() && dateMoment.year().toString().length === 4) {
                date = (useUtc) ? dateMoment.utc().format() : dateMoment.format();
            }
        }
        return date;
    }
};
GridOdataService = __decorate([
    inject()
], GridOdataService);
export { GridOdataService };
