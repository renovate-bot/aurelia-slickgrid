(self.webpackChunkaurelia_slickgrid_demo=self.webpackChunkaurelia_slickgrid_demo||[]).push([[403],{79010:function(e,t){var i,r;i=function(e,t){"use strict";var i=5e3,r="callback";function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function l(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,s=t.timeout||i,a=t.jsonpCallback||r,c=void 0;return new Promise((function(i,r){var d=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),u=a+"_"+d;window[d]=function(e){i({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),l(u),n(d)},o+=-1===o.indexOf("?")?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+o+a+"="+d),t.charset&&h.setAttribute("charset",t.charset),t.nonce&&h.setAttribute("nonce",t.nonce),t.referrerPolicy&&h.setAttribute("referrerPolicy",t.referrerPolicy),t.crossorigin&&h.setAttribute("crossorigin","true"),h.id=u,document.getElementsByTagName("head")[0].appendChild(h),c=setTimeout((function(){r(new Error("JSONP request to "+e+" timed out")),n(d),l(u),window[d]=function(){n(d)}}),s),h.onerror=function(){r(new Error("JSONP request to "+e+" failed")),n(d),l(u),c&&clearTimeout(c)}}))}},void 0===(r=i.apply(t,[t,e]))||(e.exports=r)},81251:(e,t,i)=>{"use strict";i.d(t,{z:()=>n});var r=i(65246);class n{_clearFilterTriggered=!1;_shouldTriggerQuery=!0;filterElm;grid;searchTerms=[];columnDef;callback;operator=r.$MC.equal;get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,r.EUQ)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const n=document.createElement("input");n.className="form-control search-filter",n.placeholder=i;const l=e;return n.value=l,n.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(n),n}}},62403:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Example3:()=>T});var r={};i.r(r),i.d(r,{default:()=>a,dependencies:()=>c,name:()=>o,register:()=>u,template:()=>s});var n=i(22970),l=i(26207);const o="example3",s='<template>\n  <h2>\n    ${title}\n    <span class="float-end">\n      <a style="font-size: 18px"\n         target="_blank"\n         href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/examples/slickgrid/example3.ts">\n        <span class="fa fa-link"></span> code\n      </a>\n    </span>\n  </h2>\n  <div class="subtitle"\n       innerhtml.bind="subTitle"></div>\n\n  <div class="row">\n    <div class="col-sm-6">\n      <label>autoEdit setting</label>\n      <br />\n      <span id="radioAutoEdit">\n        <div class="row">\n\n          <label class="radio-inline control-label"\n                 for="radioTrue">\n            <input type="radio"\n                   name="inlineRadioOptions"\n                   id="radioTrue"\n                   checked\n                   value.bind="isAutoEdit"\n                   click.trigger="setAutoEdit(true)"> ON\n            (single-click)\n          </label>\n          <label class="radio-inline control-label"\n                 for="radioFalse">\n            <input type="radio"\n                   name="inlineRadioOptions"\n                   id="radioFalse"\n                   value.bind="isAutoEdit"\n                   click.trigger="setAutoEdit(false)"> OFF\n            (double-click)\n          </label>\n        </div>\n        <div class="row col-sm-12">\n          <span>\n            <button class="btn btn-outline-secondary btn-sm" click.trigger="undo()" data-test="undo-btn">\n              <i class="fa fa-undo"></i>\n              Undo last edit(s)\n            </button>\n            <label class="checkbox-inline control-label"\n                   for="autoCommitEdit">\n              <input type="checkbox"\n                     id="autoCommitEdit"\n                     data-test="auto-commit"\n                     value.bind="gridOptions.autoCommitEdit"\n                     click.trigger="changeAutoCommit()">\n              Auto Commit Edit\n            </label>\n          </span>\n        </div>\n      </span>\n      <div class="row" style="margin-top: 5px">\n        <div class="col-sm-12">\n          <button class="btn btn-outline-secondary btn-sm" click.trigger="aureliaGrid.filterService.clearFilters()">Clear\n            Filters</button>\n          <button class="btn btn-outline-secondary btn-sm" click.trigger="aureliaGrid.sortService.clearSorting()">Clear\n            Sorting</button>\n          <button class="btn btn-outline-primary btn-sm" data-test="add-item-btn" click.trigger="addItem()"\n                  title="Clear Filters &amp; Sorting to see it better">\n            Add item\n          </button>\n          <button class="btn btn-outline-danger btn-sm" data-test="delete-item-btn" click.trigger="deleteItem()">Delete\n            item</button>\n        </div>\n      </div>\n      <div class="row" style="margin-top: 5px">\n        <div class="col-sm-12">\n          <button class="btn btn-outline-secondary btn-sm" data-test="add-title-column"\n                  click.trigger="dynamicallyAddTitleHeader()">\n            <i class="fa fa-plus"></i>\n            Dynamically Duplicate Title Column\n          </button>\n          <button class="btn btn-outline-secondary btn-sm" data-test="remove-title-column"\n                  click.trigger="dynamicallyRemoveLastColumn()">\n            <i class="fa fa-minus"></i>\n            Dynamically Remove Last Column\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class="col-sm-6">\n      <div class="alert alert-info"\n           show.bind="updatedObject">\n        <strong>Updated Item:</strong> ${updatedObject | stringify}\n      </div>\n      <div class="alert alert-warning"\n           show.bind="alertWarning">\n        ${alertWarning}\n      </div>\n    </div>\n  </div>\n\n  <div id="grid-container" class="col-sm-12">\n    <aurelia-slickgrid grid-id="grid3"\n                       column-definitions.bind="columnDefinitions"\n                       grid-options.bind="gridOptions"\n                       dataset.bind="dataset"\n                       instances.bind="aureliaGrid"\n                       on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"\n                       on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"\n                       on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)">\n    </aurelia-slickgrid>\n  </div>\n</template>\n',a=s,c=[];let d;function u(e){d||(d=l.b_N.define({name:o,template:s,dependencies:c})),e.register(d)}var h=i(42957),m=i(37819),p=i(76711),f=i(79010),g=i.n(f),y=i(65246);class b{args;_lastInputEvent;inputElm;defaultValue;constructor(e){this.args=e,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.internalColumnEditor??{}}get validator(){return this.columnEditor?.validator||this.columnDef?.validator}init(){const e=this.columnEditor?.placeholder||"";this.inputElm=document.createElement("input"),this.inputElm.className="editor-text",this.inputElm.placeholder=e,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.handleKeydown.bind(this)),setTimeout((()=>{this.inputElm.focus(),this.inputElm.select()}),50)}handleKeydown(e){this._lastInputEvent=e,"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.handleKeydown.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(e){this.inputElm.value=e}loadValue(e){this.defaultValue=e[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(e,t){const i=this.validate(t);e[this.args.column.field]=i&&i.valid?t:""}isValueChanged(){const e=this._lastInputEvent?.key;return!(!this.columnEditor?.alwaysSaveOnEnterKey||"Enter"!==e)||!(""===this.inputElm.value&&null===this.defaultValue)&&this.inputElm.value!==this.defaultValue}validate(e){if(this.validator){const t=void 0!==e?e:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}}var v=i(81251);i(41414);const C="assets/data/collection_100_numbers.json",E="assets/data/countries.json",w="assets/data/country_names.json",O=e=>null!=e&&e.length?/^Task\s\d+$/.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'}:{valid:!1,msg:"This is a required field"},k=(e,t,i)=>{if(i&&Array.isArray(i)){const e=i.map((e=>`Task ${e}`)).join(", ");return`<span title="${e}">${e}</span>`}return""};let T=class{http;i18n;title="Example 3: Editors / Delete";subTitle='\n  Grid with Inline Editors and onCellClick actions (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/editors" target="_blank">Wiki docs</a>).\n  <ul>\n    <li>When using "enableCellNavigation: true", clicking on a cell will automatically make it active &amp; selected.</li>\n    <ul><li>If you don\'t want this behavior, then you should disable "enableCellNavigation"</li></ul>\n    <li>Inline Editors requires "enableCellNavigation: true" (not sure why though)</li>\n    <li>\n        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag.\n        Note that it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExcelExportOptions" or "TextExportOptions" or the column definition)\n    </li>\n    <li>Support of "collectionAsync" is possible, click on "Clear Filters/Sorting" then add/delete item(s) and look at "Prerequisites" Select Filter</li>\n  </ul>\n  ';_commandQueue=[];aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];updatedObject;isAutoEdit=!0;alertWarning;duplicateTitleHeaderCount=1;constructor(e,t){this.http=e,this.i18n=t,this.defineGrid()}async attached(){this.dataset=this.mockData(100)}defineGrid(){this.columnDefinitions=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:y.UgU.icon,params:{iconCssClass:"fa fa-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,t)=>{console.log(t),this.alertWarning=`Editing: ${t.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500),this.aureliaGrid.gridService.setSelectedRow(t.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:y.UgU.icon,params:{iconCssClass:"fa fa-trash pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:y.fSu.string,editor:{model:y.Kob.longText,placeholder:"something",title:"some title",validator:O},minWidth:100,onCellChange:(e,t)=>{console.log(t),this.alertWarning=`Updated Title: ${t.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",filterable:!0,sortable:!0,type:y.fSu.string,editor:{model:b,placeholder:"custom",validator:O},filter:{model:v.z,placeholder:"🔎︎ custom"},minWidth:70},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:y.fSu.number,filter:{model:y.x$p.slider,filterOptions:{hideSliderNumber:!1}},editor:{model:y.Kob.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:y.UgU.multiple,type:y.fSu.number,editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map((e=>({value:e,label:e,symbol:'<i class="fa fa-percent" style="color:cadetblue"></i>'}))),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:y.$MC.notEqual},model:y.Kob.singleSelect},minWidth:100,params:{formatters:[y.UgU.collectionEditor,y.UgU.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:y.x$p.compoundDate},formatter:y.UgU.dateIso,sortable:!0,minWidth:100,type:y.fSu.date,editor:{model:y.Kob.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:y.x$p.compoundDate},formatter:y.UgU.dateIso,sortable:!0,minWidth:100,type:y.fSu.date,saveOutputType:y.fSu.dateUtc,editor:{model:y.Kob.date,editorOptions:{minDate:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,sortable:!0,minWidth:100,editor:{model:y.Kob.autocompleter,placeholder:"🔎︎ search city",editorOptions:{minLength:3,forceUserInput:!0,fetch:(e,t)=>{g()(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}},filter:{model:y.x$p.autocompleter,filterOptions:{minLength:3,fetch:(e,t)=>{g()(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:y.UgU.complexObject,dataKey:"code",labelKey:"name",type:y.fSu.object,sortComparer:y.Q8E.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:y.Kob.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(E)},filter:{model:y.x$p.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(E)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:y.Kob.autocompleter,collectionAsync:this.http.fetch(w)},filter:{model:y.x$p.autocompleter,collectionAsync:this.http.fetch(w)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",filterable:!0,type:y.fSu.boolean,filter:{model:y.x$p.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:y.UgU.checkmark,editor:{model:y.Kob.checkbox},minWidth:70},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:k,exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,type:y.fSu.string,editor:{collectionAsync:this.http.fetch(C),collectionSortBy:{property:"value",sortDesc:!0,fieldType:y.fSu.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:y.Kob.multipleSelect},filter:{collectionAsync:this.http.fetch(C),collectionSortBy:{property:"value",sortDesc:!0,fieldType:y.fSu.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:y.x$p.multipleSelect,operator:y.$MC.inContains}}],this.gridOptions={autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(e,t,i)=>{this._commandQueue.push(i),i.execute()},i18n:this.i18n}}addItem(){const e=this.dataset.length,t=this.mockData(1,e);setTimeout((()=>{const i=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(i){const r=i.editor.collection,n=i.filter.collection;Array.isArray(r)&&Array.isArray(n)&&(this.aureliaGrid.gridService.addItem(t[0],{highlightRow:!1}),r.push({value:e,label:e,prefix:"Task",suffix:"days"}),n.push({value:e,label:e,prefix:"Task",suffix:"days"}))}}),250)}deleteItem(){const e=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(e){const t=e.editor.collection,i=e.filter.collection;if(Array.isArray(t)&&Array.isArray(i)){const e=this.sortCollectionDescending(t).pop();this.sortCollectionDescending(i).pop(),this.aureliaGrid.gridService.deleteItemById(e.value)}}}sortCollectionDescending(e){return e.sort(((e,t)=>e.value-t.value))}mockData(e,t=0){const i=[];for(let r=t;r<t+e;r++){const e=2e3+Math.floor(10*Math.random()),t=(new Date).getFullYear()-3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),l=Math.floor(29*Math.random()),o=Math.round(100*Math.random()),s=new Date(t,n+1,l);i.push({id:r,title:"Task "+r,duration:Math.round(100*Math.random())+"",percentComplete:o,percentCompleteNumber:o,start:new Date(e,n,l),finish:s<new Date?"":s,effortDriven:r%5==0,prerequisites:r%2==0&&0!==r&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:r%2?"Canada":"United States",cityOfOrigin:r%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return i}onCellChanged(e,t){console.log("onCellChange",t),this.updatedObject={...t.item}}onCellClicked(e,t){const i=this.aureliaGrid.gridService.getColumnFromEventArguments(t);console.log(i),"edit"===i.columnDef.id?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500)):"delete"===i.columnDef.id&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(i.dataContext.id),this.alertWarning=`Deleted: ${i.dataContext.title}`)}onCellValidationError(e,t){t.validationResults&&alert(t.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){const e={id:"title"+this.duplicateTitleHeaderCount++,name:"Title",field:"title",editor:{model:y.Kob.text,required:!0,validator:O},sortable:!0,minWidth:100,filterable:!0};this.columnDefinitions.push(e)}dynamicallyRemoveLastColumn(){this.columnDefinitions.pop()}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&y.I3M.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}};T=(0,n.gn)([(0,l.MoW)(r),(0,n.fM)(0,(0,m.pZ)(h.tL)),(0,n.fM)(1,p.mb),(0,n.w6)("design:paramtypes",[Object,Object])],T)},42957:(e,t,i)=>{"use strict";i.d(t,{AV:()=>n,tL:()=>h});var r=i(37819);function n(e,t){return JSON.stringify(void 0!==e?e:{},t)}const l={maxRetries:3,interval:1e3,strategy:0};class o{constructor(e){if(this.retryConfig={...l,...void 0!==e?e:{}},2===this.retryConfig.strategy&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return Reflect.deleteProperty(t,"retryConfig"),e}responseError(e,t,i){const{retryConfig:r}=t,{requestClone:n}=r;return Promise.resolve().then((()=>{if(r.counter<r.maxRetries){const l=void 0===r.doRetry||r.doRetry(e,t);return Promise.resolve(l).then((l=>{if(l){r.counter++;const e=s(r);return new Promise((t=>setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=n.clone();return"function"==typeof r.beforeRetry?r.beforeRetry(e,i):e})).then((e=>{const t={...e,retryConfig:r};return i.fetch(t)}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}}function s(e){const{interval:t,strategy:i,minRandomInterval:r,maxRandomInterval:n,counter:l}=e;if("function"==typeof i)return e.strategy(l);switch(i){case 0:return a[0](t);case 1:return a[1](l,t);case 2:return a[2](l,t);case 3:return a[3](l,t,r,n);default:throw new Error("Unrecognized retry strategy")}}const a=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,i=0,r=6e4)=>Math.random()*(r-i)+i];class c{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:d})}withRetry(e){const t=new o(e);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function d(e){if(!e.ok)throw e;return e}const u=/^([a-z][a-z0-9+\-.]*:)?\/\//i,h=r.DI.createInterface("IHttpClient",(e=>e.singleton(m)));class m{constructor(){this.dispatcher=null,this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[]}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config");{t=new c,t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.interceptors,t.dispatcher=this.dispatcher;const i=e(t);Object.prototype.isPrototypeOf.call(c.prototype,i)&&(t=i)}}const i=t.defaults;if(void 0!==i&&Object.prototype.isPrototypeOf.call(Headers.prototype,i.headers))throw new Error("Default headers must be a plain object.");const r=t.interceptors;if(void 0!==r&&r.length){if(r.filter((e=>Object.prototype.isPrototypeOf.call(o.prototype,e))).length>1)throw new Error("Only one RetryInterceptor is allowed.");const e=r.findIndex((e=>Object.prototype.isPrototypeOf.call(o.prototype,e)));if(e>=0&&e!==r.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=t.baseUrl,this.defaults=i,this.interceptors=void 0!==t.interceptors?t.interceptors:[],this.dispatcher=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.trackRequestStart();let i=this.buildRequest(e,t);return this.processRequest(i,this.interceptors).then((e=>{let t;if(Object.prototype.isPrototypeOf.call(Response.prototype,e))t=Promise.resolve(e);else{if(!Object.prototype.isPrototypeOf.call(Request.prototype,e))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${e}]`);i=e,t=fetch(i)}return this.processResponse(t,this.interceptors,i)})).then((e=>Object.prototype.isPrototypeOf.call(Request.prototype,e)?this.fetch(e):e)).then((e=>(this.trackRequestEnd(),e)),(e=>{throw this.trackRequestEnd(),e}))}buildRequest(e,t){const i=null!==this.defaults?this.defaults:{};let r,n,l;const o=function(e){const t={},i=void 0!==e?e:{};for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]="function"==typeof i[e]?i[e]():i[e]);return t}(i.headers);if(Object.prototype.isPrototypeOf.call(Request.prototype,e))r=e,l=new Headers(r.headers).get("Content-Type");else{t||(t={}),n=t.body;const o=void 0!==n?{body:n}:null,s={...i,headers:{},...t,...o};l=new Headers(s.headers).get("Content-Type"),r=new Request(p(this.baseUrl,e),s)}return l||(new Headers(o).has("content-type")?r.headers.set("Content-Type",new Headers(o).get("content-type")):void 0!==n&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(n)&&r.headers.set("Content-Type","application/json")),function(e,t){const i=void 0!==t?t:{};for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&!e.has(t)&&e.set(t,i[t])}(r.headers,o),void 0!==n&&Object.prototype.isPrototypeOf.call(Blob.prototype,n)&&n.type&&r.headers.set("Content-Type",n.type),r}get(e,t){return this.fetch(e,t)}post(e,t,i){return this.callFetch(e,t,i,"POST")}put(e,t,i){return this.callFetch(e,t,i,"PUT")}patch(e,t,i){return this.callFetch(e,t,i,"PATCH")}delete(e,t,i){return this.callFetch(e,t,i,"DELETE")}trackRequestStart(){if(this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}trackRequestEnd(){if(this.isRequesting=!! --this.activeRequestCount,!this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}processRequest(e,t){return this.applyInterceptors(e,t,"request","requestError",this)}processResponse(e,t,i){return this.applyInterceptors(e,t,"response","responseError",i,this)}applyInterceptors(e,t,i,r,...n){return(void 0!==t?t:[]).reduce(((e,t)=>{const l=t[i],o=t[r];return e.then(l?e=>l.call(t,e,...n):f,o?e=>o.call(t,e,...n):g)}),Promise.resolve(e))}callFetch(e,t,i,r){return i||(i={}),i.method=r,t&&(i.body=t),this.fetch(e,i)}}function p(e,t){return u.test(t)?t:(void 0!==e?e:"")+t}function f(e){return e}function g(e){throw e}}}]);