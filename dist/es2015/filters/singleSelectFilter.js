var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { I18N } from 'aurelia-i18n';
import { inject } from 'aurelia-framework';
import * as $ from 'jquery';
let SingleSelectFilter = class SingleSelectFilter {
    constructor(i18n) {
        this.i18n = i18n;
        // default options used by this Filter, user can overwrite any of these by passing "otions"
        this.defaultOptions = {
            container: 'body',
            filter: false,
            maxHeight: 200,
            single: true
        };
    }
    /**
     * Initialize the Filter
     */
    init(args) {
        if (!args) {
            throw new Error('[Aurelia-SlickGrid] A filter must always have an "init()" with valid arguments.');
        }
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerm = args.searchTerm || '';
        // step 1, create HTML string template
        const filterTemplate = this.buildTemplateHtmlString();
        // step 2, create the DOM Element of the filter & pre-load search term
        this.createDomElement(filterTemplate);
        // step 3, subscribe to the change event and run the callback when that happens
        // also add/remove "filled" class for styling purposes
        this.$filterElm.change((e) => {
            if (e && e.target && e.target.value) {
                this.$filterElm.addClass('filled').siblings('div .search-filter').addClass('filled');
            }
            else {
                this.$filterElm.removeClass('filled').siblings('div .search-filter').removeClass('filled');
            }
            this.callback(e, { columnDef: this.columnDef, operator: 'EQ' });
        });
    }
    /**
     * Clear the filter values
     */
    clear(triggerFilterChange = true) {
        if (this.$filterElm && this.$filterElm.multipleSelect) {
            // reload the filter element by it's id, to make sure it's still a valid element (because of some issue in the GraphQL example)
            // this.$filterElm = $(`#${this.$filterElm[0].id}`);
            this.$filterElm.multipleSelect('setSelects', []);
            if (triggerFilterChange) {
                this.callback(undefined, { columnDef: this.columnDef, operator: 'IN', searchTerm: undefined });
            }
        }
    }
    /**
     * destroy the filter
     */
    destroy() {
        if (this.$filterElm) {
            this.$filterElm.off().remove();
        }
    }
    //
    // private functions
    // ------------------
    /**
     * Create the HTML template as a string
     */
    buildTemplateHtmlString() {
        if (!this.columnDef || !this.columnDef.filter || !this.columnDef.filter.collection) {
            throw new Error(`[Aurelia-SlickGrid] You need to pass a "collection" for the SingleSelect Filter to work correctly. Also each option should include a value/label pair (or value/labelKey when using Locale). For example:: { filter: type: FilterType.singleSelect, collection: [{ value: true, label: 'True' }, { value: false, label: 'False'}] }`);
        }
        const optionCollection = this.columnDef.filter.collection || [];
        const labelName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.label : 'label';
        const valueName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.value : 'value';
        const isEnabledTranslate = (this.columnDef.filter.enableTranslateLabel) ? this.columnDef.filter.enableTranslateLabel : false;
        let options = '';
        optionCollection.forEach((option) => {
            if (!option || (option[labelName] === undefined && option.labelKey === undefined)) {
                throw new Error(`A collection with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: type: FilterType.singleSelect, collection: [ { value: '1', label: 'One' } ]')`);
            }
            const labelKey = (option.labelKey || option[labelName]);
            const selected = (option[valueName] === this.searchTerm) ? 'selected' : '';
            const textLabel = ((option.labelKey || isEnabledTranslate) && this.i18n && typeof this.i18n.tr === 'function') ? this.i18n.tr(labelKey || ' ') : labelKey;
            // html text of each select option
            options += `<option value="${option[valueName]}" ${selected}>${textLabel}</option>`;
        });
        return `<select class="ms-filter search-filter">${options}</select>`;
    }
    /**
     * From the html template string, create a DOM element
     * Subscribe to the onClose event and run the callback when that happens
     * @param filterTemplate
     */
    createDomElement(filterTemplate) {
        const $headerElm = this.grid.getHeaderRowColumn(this.columnDef.id);
        $($headerElm).empty();
        // create the DOM element & add an ID and filter class
        this.$filterElm = $(filterTemplate);
        if (typeof this.$filterElm.multipleSelect !== 'function') {
            throw new Error(`multiple-select.js was not found, make sure to modify your "angular-cli.json" file and include "../node_modules/angular-slickgrid/lib/multiple-select/multiple-select.js" and it's css or SASS file`);
        }
        this.$filterElm.attr('id', `filter-${this.columnDef.id}`);
        this.$filterElm.data('columnId', this.columnDef.id);
        // append the new DOM element to the header row
        if (this.$filterElm && typeof this.$filterElm.appendTo === 'function') {
            this.$filterElm.appendTo($headerElm);
        }
        // merge options & attach multiSelect
        const filterOptions = (this.columnDef.filter) ? this.columnDef.filter.filterOptions : {};
        const options = Object.assign({}, this.defaultOptions, filterOptions);
        this.$filterElm = this.$filterElm.multipleSelect(options);
    }
    subscribeOnClose() {
        this.$filterElm.multipleSelect({
            onClose: () => {
                const selectedItems = this.$filterElm.multipleSelect('getSelects');
                this.callback(undefined, { columnDef: this.columnDef, operator: 'IN', searchTerms: selectedItems });
            }
        });
    }
};
SingleSelectFilter = __decorate([
    inject(I18N)
], SingleSelectFilter);
export { SingleSelectFilter };
//# sourceMappingURL=singleSelectFilter.js.map