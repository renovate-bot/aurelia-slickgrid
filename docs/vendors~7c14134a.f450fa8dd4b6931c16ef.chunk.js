(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"93ew":function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return h}));var r=i("xhvs"),s=i("sjEL"),o=i.n(s),n=i("fj9p");const a=o.a||s,l={filename:"export",format:n.M.xlsx};class h{constructor(){this._fileFormat=n.M.xlsx,this._hasGroupedItems=!1,this.className="ExcelExportService"}get _datasetIdPropName(){var t,e;return null!==(e=null===(t=this._gridOptions)||void 0===t?void 0:t.datasetIdPropertyName)&&void 0!==e?e:"id"}get _dataView(){var t;return null===(t=this._grid)||void 0===t?void 0:t.getData()}get _gridOptions(){return this._grid&&this._grid.getOptions?this._grid.getOptions():{}}init(t,e){var i,r,s;if(this._grid=t,this._pubSubService=e.get("PubSubService"),this._locales=null!==(r=null===(i=this._gridOptions)||void 0===i?void 0:i.locales)&&void 0!==r?r:n.t.locales,this._translaterService=null===(s=this._gridOptions)||void 0===s?void 0:s.translater,this._gridOptions.enableTranslate&&(!this._translaterService||!this._translaterService.translate))throw new Error('[Slickgrid-Universal] requires a Translate Service to be passed in the "translater" Grid Options when "enableTranslate" is enabled. (example: this.gridOptions = { enableTranslate: true, translater: this.translaterService })')}exportToExcel(e){if(!this._grid||!this._dataView||!this._pubSubService)throw new Error('[Slickgrid-Universal] it seems that the SlickGrid & DataView objects and/or PubSubService are not initialized did you forget to enable the grid option flag "enableExcelExport"?');return new t(t=>{var i;null===(i=this._pubSubService)||void 0===i||i.publish("onBeforeExportToExcel",!0),this._excelExportOptions=Object(n.rc)(Object.assign(Object.assign(Object.assign({},l),this._gridOptions.excelExportOptions),e)),this._fileFormat=this._excelExportOptions.format||n.M.xlsx;const s={name:this._excelExportOptions.sheetName||"Sheet1"};this._workbook=r.Workbook?new r.Workbook:r.createWorkbook(),this._sheet=r.Worksheet?new r.Worksheet(s):this._workbook.createWorksheet(s),this._stylesheet=this._workbook.getStyleSheet();const o=this._stylesheet.createFormat({font:{bold:!0}}),a=this._stylesheet.createFormat({format:"@"}),h=this._stylesheet.createFormat({format:"0"}),d=this._stylesheet.createFormat({format:"$#,##0.00"});this._stylesheetFormats={boldFormatter:o,dollarFormatter:d,numberFormatter:h,stringFormatter:a};const u=this.getDataOutput();setTimeout(async()=>{var e;this._gridOptions&&this._gridOptions.excelExportOptions&&this._gridOptions.excelExportOptions.customExcelHeader&&this._gridOptions.excelExportOptions.customExcelHeader(this._workbook,this._sheet);const i=this._grid&&this._grid.getColumns&&this._grid.getColumns()||[];this._sheet.setColumns(this.getColumnStyles(i));const s=this._sheet.data;let o=s;Array.isArray(s)&&Array.isArray(u)&&(o=this._sheet.data.concat(u)),this._sheet.setData(o),this._workbook.addWorksheet(this._sheet);const a=r.Builder&&r.Builder.createFile?r.Builder.createFile:r.createFile,l=this._fileFormat===n.M.xls?"application/vnd.ms-excel":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet ",h=await a(this._workbook,{type:"blob",mimeType:l}),d={filename:`${this._excelExportOptions.filename}.${this._fileFormat}`,format:this._fileFormat};this.startDownloadFile(Object.assign(Object.assign({},d),{blob:h,data:this._sheet.data})),null===(e=this._pubSubService)||void 0===e||e.publish("onAfterExportToExcel",d),t(!0)})})}startDownloadFile(t){if("function"==typeof navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(t.blob,t.filename);else{const e=document&&document.createElement("a"),i=URL.createObjectURL(t.blob);e&&document&&(e.textContent="download",e.href=i,e.setAttribute("download",t.filename),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e))}}useCellFormatByFieldType(t,e){let i=t;switch(e){case n.L.dateTime:case n.L.dateTimeIso:case n.L.dateTimeShortIso:case n.L.dateTimeIsoAmPm:case n.L.dateTimeIsoAM_PM:case n.L.dateEuro:case n.L.dateEuroShort:case n.L.dateTimeEuro:case n.L.dateTimeShortEuro:case n.L.dateTimeEuroAmPm:case n.L.dateTimeEuroAM_PM:case n.L.dateTimeEuroShort:case n.L.dateTimeEuroShortAmPm:case n.L.dateUs:case n.L.dateUsShort:case n.L.dateTimeUs:case n.L.dateTimeShortUs:case n.L.dateTimeUsAmPm:case n.L.dateTimeUsAM_PM:case n.L.dateTimeUsShort:case n.L.dateTimeUsShortAmPm:case n.L.dateUtc:case n.L.date:case n.L.dateIso:if(i=t,t){const r=Object(n.Vc)(e),s=a(t,r,!1).isValid();i={value:t&&s?a(t).format(r):t,metadata:{style:this._stylesheet.createFormat({format:r}).id}}}break;case n.L.number:i={value:isNaN(+t)?null:t,metadata:{style:this._stylesheetFormats.numberFormatter.id}};break;default:i=t}return i}getDataOutput(){const t=this._grid&&this._grid.getColumns&&this._grid.getColumns()||[],e=[],i=this._gridOptions&&this._gridOptions.excelExportOptions&&this._gridOptions.excelExportOptions.columnHeaderStyle;let r=this._stylesheetFormats.boldFormatter.id;if(i&&(r=this._stylesheet.createFormat(i).id),this._gridOptions.createPreHeaderPanel&&this._gridOptions.showPreHeaderPanel&&!this._gridOptions.enableDraggableGrouping){const i=this._stylesheet.createFormat({alignment:{horizontal:"center"},font:{bold:!0}});e.push(this.getColumnGroupedHeaderTitlesData(t,{style:null==i?void 0:i.id}))}return e.push(this.getColumnHeaderData(t,{style:r})),this.pushAllGridRowDataToArray(e,t),e}getColumnStyles(t){var e,i,r;const s=this._dataView.getGrouping(),o=[];return Array.isArray(s)&&s.length>0&&o.push({bestFit:!0,columnStyles:null!==(r=null===(i=null===(e=this._gridOptions)||void 0===e?void 0:e.excelExportOptions)||void 0===i?void 0:i.customColumnWidth)&&void 0!==r?r:10}),t.forEach(t=>{var e,i,r,s,n;const a=null!==(e=t.excludeFromExport)&&void 0!==e&&e;(void 0===t.width||t.width>0)&&!a&&o.push({bestFit:!0,width:null!==(n=null!==(i=t.exportColumnWidth)&&void 0!==i?i:null===(s=null===(r=this._gridOptions)||void 0===r?void 0:r.excelExportOptions)||void 0===s?void 0:s.customColumnWidth)&&void 0!==n?n:10})}),o}getColumnGroupedHeaderTitlesData(t,e){let i=[];this._groupedColumnHeaders=this.getColumnGroupedHeaderTitles(t)||[],this._groupedColumnHeaders&&Array.isArray(this._groupedColumnHeaders)&&this._groupedColumnHeaders.length>0&&(i=this._groupedColumnHeaders.map(t=>({value:t.title,metadata:e})));const r="A".charCodeAt(0);let s="A",o="",n=0;const a=this._groupedColumnHeaders.length;for(let t=0;t<a;t++)if(t+1===a||t+1<a&&this._groupedColumnHeaders[t].title!==this._groupedColumnHeaders[t+1].title){const e=Math.floor(n/26%26),i=String.fromCharCode(r+e-1),a=Math.floor(t/26%26),l=String.fromCharCode(r+a-1);o=String.fromCharCode(r+t%26);const h=`${n>26?i:""}${s}1`,d=`${t>26?l:""}${o}1`;this._sheet.mergeCells(h,d),s=String.fromCharCode(o.charCodeAt(0)+1),n=t}return i}getColumnHeaderData(t,e){let i=[];this._columnHeaders=this.getColumnHeaders(t)||[],this._columnHeaders&&Array.isArray(this._columnHeaders)&&this._columnHeaders.length>0&&(i=this._columnHeaders.map(t=>({value:t.title,metadata:e})));const r=this.getGroupColumnTitle();return r&&i.unshift({value:r,metadata:e}),i}getGroupColumnTitle(){var t;let e=this._excelExportOptions.groupingColumnHeaderTitle;!e&&this._gridOptions.enableTranslate&&(null===(t=this._translaterService)||void 0===t?void 0:t.translate)?e=this._translaterService.translate(Object(n.Kc)(this._gridOptions)+"GROUP_BY"):e||(e=this._locales&&this._locales.TEXT_GROUP_BY);const i=this._dataView.getGrouping();return Array.isArray(i)&&i.length>0?(this._hasGroupedItems=!0,e):(this._hasGroupedItems=!1,null)}getColumnGroupedHeaderTitles(t){const e=[];return t&&Array.isArray(t)&&t.forEach(t=>{var i;let r="";r=t.columnGroupKey&&this._gridOptions.enableTranslate&&(null===(i=this._translaterService)||void 0===i?void 0:i.translate)?this._translaterService.translate(t.columnGroupKey):t.columnGroup||"";const s=t.excludeFromExport||!1;(void 0===t.width||t.width>0)&&!s&&e.push({key:t.field||t.id,title:r||""})}),e}getColumnHeaders(t){const e=[];return t&&Array.isArray(t)&&t.forEach(t=>{var i;let r="";r=(t.nameKey||t.nameKey)&&this._gridOptions.enableTranslate&&(null===(i=this._translaterService)||void 0===i?void 0:i.translate)?this._translaterService.translate(t.nameKey||t.nameKey):t.name||Object(n.Gd)(t.field);const s=t.excludeFromExport||!1;(void 0===t.width||t.width>0)&&!s&&e.push({key:(t.field||t.id)+"",title:r})}),e}pushAllGridRowDataToArray(t,e){const i=this._dataView.getLength();for(let r=0;r<i;r++){const i=this._dataView.getItem(r);i&&(null!==i[this._datasetIdPropName]&&void 0!==i[this._datasetIdPropName]?t.push(this.readRegularRowData(e,r,i)):this._hasGroupedItems&&void 0===i.__groupTotals?t.push([this.readGroupedRowTitle(i)]):i.__groupTotals&&t.push(this.readGroupedTotalRows(e,i)))}return t}readRegularRowData(t,e,i){let r=0;const s=[];for(let o=0,a=t.length;o<a;o++){const a=t[o],l=a.outputType||a.type||n.L.string;if(a.excludeFromExport)continue;this._hasGroupedItems&&0===r&&s.push("");let h=Object(n.Cc)(e,o,i,a,this._grid,this._excelExportOptions);(a.sanitizeDataExport||this._excelExportOptions.sanitizeDataExport)&&(h=Object(n.rd)(h)),a.exportWithFormatter||(h=this.useCellFormatByFieldType(h,l)),s.push(h),r++}return s}readGroupedRowTitle(t){const e=Object(n.rd)(t.title);if(this._excelExportOptions&&this._excelExportOptions.addGroupIndentation){const i=this._excelExportOptions&&this._excelExportOptions.groupCollapsedSymbol||"▹",r=this._excelExportOptions&&this._excelExportOptions.groupExpandedSymbol||"▿";return(t.collapsed?i:r)+" "+Object(n.Qb)(5*t.level)+e}return e}readGroupedTotalRows(t,e){const i=[this._excelExportOptions.groupingAggregatorRowText||""];return t.forEach(t=>{let r="";const s=t.excludeFromExport||!1;t.exportCustomGroupTotalsFormatter?r=t.exportCustomGroupTotalsFormatter(e,t,this._grid):t.groupTotalsFormatter&&(r=t.groupTotalsFormatter(e,t,this._grid)),(t.sanitizeDataExport||this._excelExportOptions.sanitizeDataExport)&&(r=Object(n.rd)(r)),(void 0===t.width||t.width>0)&&!s&&i.push(r)}),i}}}).call(this,i("CW7D"))},nPMK:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i("fj9p");class s{constructor(t,e){if(this.queryFnName=t,this.head=[],"string"==typeof e)this.alias=e;else if("object"==typeof e)this.filter(e);else{if(void 0===e&&2===arguments.length)throw new TypeError('You have passed undefined as Second argument to "Query"');if(void 0!==e)throw new TypeError('Second argument to "Query" should be an alias name(String) or filter arguments(Object). What was passed is: '+e)}}filter(t){for(const e of Object.keys(t)){if("function"==typeof t[e])continue;const i=this.getGraphQLValue(t[e]);"{}"!==i&&this.head.push(`${e}:${i}`)}return this}find(...t){if(!t||!Array.isArray(t)||0===t.length)throw new TypeError("find value can not be >>falsy<<");const e=1===t.length&&Array.isArray(t[0])?t[0]:t;return this.body=this.parceFind(e),this}setAlias(t){this.alias=t}toString(){if(void 0===this.body)throw new ReferenceError("return properties are not defined. use the 'find' function to defined them");return`${this.alias?this.alias+":":""} ${this.queryFnName} ${this.head.length>0?"("+this.head.join(",")+")":""}  { ${this.body} }`}parceFind(t){return t.map((e,i)=>{const r=t[i];if(r instanceof s)return r.toString();if(Array.isArray(r)||"object"!=typeof r){if("string"==typeof r)return r;throw new RangeError("cannot handle Find value of "+r)}{const t=Object.keys(r);if(1!==t.length)throw new RangeError("Alias objects should only have one value. was passed: "+JSON.stringify(r));const e=t[0],i=r[e];return Array.isArray(i)?new s(e).find(i):`${e} : ${i} `}}).join(",")}getGraphQLValue(t){return"string"==typeof t?t=JSON.stringify(t):Array.isArray(t)?t=`[${t=t.map(t=>this.getGraphQLValue(t)).join()}]`:t instanceof Date?t=JSON.stringify(t):null!==t&&"object"==typeof t&&(t=this.objectToString(t)),t}objectToString(t){const e=[];for(const i of Object.keys(t))"function"!=typeof t[i]&&e.push(`${i}:${this.getGraphQLValue(t[i])}`);return`{${e.join()}}`}}class o{constructor(){this._currentFilters=[],this._currentSorters=[],this._datasetIdPropName="id",this.defaultPaginationOptions={first:25,offset:0}}get columnDefinitions(){return this._columnDefinitions}get _gridOptions(){var t;return(null===(t=this._grid)||void 0===t?void 0:t.getOptions)?this._grid.getOptions():{}}init(t,e,i){this._grid=i,this.options=t||{datasetName:""},this.pagination=e,this._datasetIdPropName=this._gridOptions.datasetIdPropertyName||"id",i&&i.getColumns&&(this._columnDefinitions=i.getColumns()||[])}buildQuery(){var t;if(!this.options||!this.options.datasetName||!Array.isArray(this._columnDefinitions))throw new Error('GraphQL Service requires the "datasetName" property to properly build the GraphQL query');let e=this._columnDefinitions||[];e=e.filter(t=>!t.excludeFromQuery);const i=new s("query"),r=new s(this.options.datasetName),o=new s("nodes"),n=[];if(e&&Array.isArray(e))for(const t of e)n.push(t.field),t.fields&&n.push(...t.fields);-1===n.indexOf(this._datasetIdPropName)&&n.unshift(this._datasetIdPropName);const a=this.buildFilterQuery(n);let l=[];if(!1!==this._gridOptions.enablePagination){if(this.options.isWithCursor){const t=new s("edges"),e=new s("pageInfo");e.find("hasNextPage","hasPreviousPage","endCursor","startCursor"),o.find(a),t.find(["cursor"]),l=["totalCount",o,e,t]}else o.find(a),l=["totalCount",o];r.find(l)}else r.find(a);let h={};if(!1!==this._gridOptions.enablePagination&&(h=Object.assign(Object.assign({},this.options.paginationOptions),{first:(this.options.paginationOptions&&this.options.paginationOptions.first?this.options.paginationOptions.first:this.pagination&&this.pagination.pageSize?this.pagination.pageSize:null)||this.defaultPaginationOptions.first}),this.options.isWithCursor||(h.offset=this.options.paginationOptions&&this.options.paginationOptions.hasOwnProperty("offset")?+this.options.paginationOptions.offset:0)),this.options.sortingOptions&&Array.isArray(this.options.sortingOptions)&&this.options.sortingOptions.length>0&&(h.orderBy=this.options.sortingOptions),this.options.filteringOptions&&Array.isArray(this.options.filteringOptions)&&this.options.filteringOptions.length>0&&(h.filterBy=this.options.filteringOptions),this.options.addLocaleIntoQuery&&(h.locale=(null===(t=this._gridOptions.translater)||void 0===t?void 0:t.getCurrentLanguage())||this._gridOptions.locale||"en"),this.options.extraQueryArguments)for(const t of this.options.extraQueryArguments)h[t.field]=t.value;r.filter(h),i.find(r);return this.trimDoubleQuotesOnEnumField(i.toString(),["direction:","field:","operator:"],this.options.keepArgumentFieldDoubleQuotes||!1)}buildFilterQuery(t){const e=(t={},i)=>{const r=i.shift();return t[r]=i.length?e(t[r],i):null,t},i=t.reduce((t,i)=>e(t,i.split(".")),{});return JSON.stringify(i).replace(/\"|\:|null/g,"").replace(/^\{/,"").replace(/\}$/,"")}clearFilters(){this._currentFilters=[],this.updateOptions({filteringOptions:[]})}clearSorters(){this._currentSorters=[],this.updateOptions({sortingOptions:[]})}getInitPaginationOptions(){var t;const e=this.pagination?this.pagination.pageSize:25;return(null===(t=this.options)||void 0===t?void 0:t.isWithCursor)?{first:e}:{first:e,offset:0}}getDatasetName(){var t;return(null===(t=this.options)||void 0===t?void 0:t.datasetName)||""}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}resetPaginationOptions(){let t;this.options&&this.options.isWithCursor?t={after:"",before:void 0,last:void 0}:(t=this.options&&this.options.paginationOptions||this.getInitPaginationOptions(),t.offset=0),this._currentPagination={pageNumber:1,pageSize:t.first||20},!this._gridOptions||!this._gridOptions.enablePagination&&this._gridOptions.hasOwnProperty("enablePagination")||this.updateOptions({paginationOptions:t})}updateOptions(t){this.options=Object.assign(Object.assign({},this.options),t)}processOnFilterChanged(t,e){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GraphqlService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(e.columnFilters),!e||!e.grid)throw new Error('Something went wrong when trying create the GraphQL Backend Service, it seems that "args" is not populated correctly');return this.updateFilters(e.columnFilters,!1),this.resetPaginationOptions(),this.buildQuery()}processOnPaginationChanged(t,e){const i=+(e.pageSize||(this.pagination?this.pagination.pageSize:20));return this.updatePagination(e.newPage,i),this.buildQuery()}processOnSortChanged(t,e){const i=e.multiColumnSort?e.sortCols:new Array({columnId:e.sortCol.id,sortCol:e.sortCol,sortAsc:e.sortAsc});return this.updateSorters(i),this.buildQuery()}updateFilters(t,e){var i,s;const o=[];let n;e&&(this._currentFilters=this.castFilterToColumnFilters(t));for(const a in t)if(t.hasOwnProperty(a)){const l=t[a];let h;if(h=e&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find(t=>t.id===l.columnId):l.columnDef,!h)throw new Error("[GraphQL Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");const d=(null===(i=h.filter)||void 0===i?void 0:i.queryField)||h.queryFieldFilter||h.queryField||h.field||h.name||"",u=h.type||r.L.string;let p=null!==(s=null==l?void 0:l.searchTerms)&&void 0!==s?s:[],c=Array.isArray(p)&&1===p.length?p[0]:"";if(void 0===c&&(c=""),!d)throw new Error('GraphQL filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');c=""+c;const g=c.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/);let m=l.operator||(g?g[1]:"");n=g?g[2]:"";const f=g?g[3]:"*z"===m?"*":"";if(d&&""===n&&0===p.length)continue;if(Array.isArray(p)&&1===p.length&&"string"==typeof p[0]&&p[0].indexOf("..")>=0&&(m||(m=this._gridOptions.defaultFilterRangeOperator),p=p[0].split("..",2),""===p[0]?(m=m===r.sb.rangeInclusive?"<=":m===r.sb.rangeExclusive?"<":m,p=p.slice(1),n=p[0]):""===p[1]&&(m=m===r.sb.rangeInclusive?">=":m===r.sb.rangeExclusive?">":m,p=p.slice(0,1),n=p[0])),"string"==typeof n&&("*"!==m&&"a*"!==m&&"*z"!==m&&"*"!==f||(m="*"===m||"*z"===m?"EndsWith":"StartsWith")),!m&&h.filter&&h.filter.operator&&(m=h.filter.operator),!m&&Array.isArray(p)&&2===p.length&&p[0]&&p[1]&&(m=this._gridOptions.defaultFilterRangeOperator),(m===r.sb.rangeInclusive||r.sb.rangeExclusive)&&Array.isArray(p)&&1===p.length&&u===r.L.date&&(m=r.sb.equal),n=this.normalizeSearchValue(u,n),Array.isArray(p)&&p.forEach((t,e)=>{p[e]=this.normalizeSearchValue(u,p[e])}),p&&p.length>1&&("IN"===m||"NIN"===m||"NOT_IN"===m))n=p.join(",");else if(p&&2===p.length&&(m===r.sb.rangeExclusive||m===r.sb.rangeInclusive)){o.push({field:d,operator:m===r.sb.rangeInclusive?"GE":"GT",value:p[0]}),o.push({field:d,operator:m===r.sb.rangeInclusive?"LE":"LT",value:p[1]});continue}m||(m=Object(r.Wc)(u)),o.push({field:d,operator:Object(r.Yc)(m),value:n})}this.updateOptions({filteringOptions:o})}updatePagination(t,e){let i;this._currentPagination={pageNumber:t,pageSize:e},i=this.options&&this.options.isWithCursor?{first:e}:{first:e,offset:t>1?(t-1)*e:0},this.updateOptions({paginationOptions:i})}updateSorters(t,e){let i=[];const s=[];if(!t&&e){i=e,i.forEach(t=>t.direction=t.direction.toUpperCase());const t=i.map(t=>{const e=this._columnDefinitions.find(e=>e.id===t.columnId);return s.push({field:e?(e.queryFieldSorter||e.queryField||e.field)+"":t.columnId+"",direction:t.direction}),e?{columnId:t.columnId,sortAsc:t.direction.toUpperCase()===r.Hb.ASC}:null});Array.isArray(t)&&this._grid&&this._grid.setSortColumns(t.filter(t=>t)||[])}else if(t&&!e&&Array.isArray(t)&&t.length>0)for(const e of t)if(e&&e.sortCol){i.push({columnId:e.sortCol.id+"",direction:e.sortAsc?r.Hb.ASC:r.Hb.DESC});const t=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field||"")+"";t&&s.push({field:t,direction:e.sortAsc?r.Hb.ASC:r.Hb.DESC})}this._currentSorters=i,this.updateOptions({sortingOptions:s})}trimDoubleQuotesOnEnumField(t,e,i){let r=e.join('s?((field:s*)?".*?")|');r+='s?((field:s*)?".*?")';const s=new RegExp(r,"g");return t.replace(s,t=>{let e=!0;t.startsWith("field:")&&i&&(e=!1);return e?t.replace(/"/g,""):t})}castFilterToColumnFilters(t){const e="object"==typeof t?Object.keys(t).map(e=>t[e]):t;return Array.isArray(e)?e.map(t=>{const e={columnId:t.columnId||""};return t.operator&&(e.operator=t.operator),Array.isArray(t.searchTerms)&&(e.searchTerms=t.searchTerms),e}):[]}normalizeSearchValue(t,e){switch(t){case r.L.date:case r.L.string:case r.L.text:case r.L.readonly:"string"==typeof e&&(e=e.replace(/'/g,"''"));break;case r.L.integer:case r.L.number:case r.L.float:"string"==typeof e&&(""!==(e=(e=(e=(e=(e=e.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^\-+\.+/g,"-0.")).replace(/(?!^\-)[^\d\.]/g,""))&&"-"!==e||(e="0"))}return e}}},p0cc:function(t,e,i){"use strict";var r=i("93ew");i.d(e,"a",(function(){return r.a}))}}]);
//# sourceMappingURL=vendors~7c14134a.f450fa8dd4b6931c16ef.bundle.map