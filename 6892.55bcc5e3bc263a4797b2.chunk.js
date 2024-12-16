"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[6892],{1287:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(3267),a=i.n(s),n=i(3484),r=i.n(n)()(a());r.push([e.id,".editable-field{background-color:rgba(227,240,251,.57) !important}.unsaved-editable-field{background-color:#fbfdd1 !important}.button-style{cursor:pointer;background-color:#fff;border:1px solid #ababab;border-radius:2px;justify-content:center;text-align:center}.button-style:hover{border-color:rgb(145.5,145.5,145.5)}",""]);const o=r},3165:(e,t,i)=>{var s=i(3267),a=i.n(s),n=i(3484);i.n(n)()(a()).push([e.id,".editable-field{background-color:rgba(227,240,251,.57) !important}.unsaved-editable-field{background-color:#fbfdd1 !important}.button-style{cursor:pointer;background-color:#fff;border:1px solid #ababab;border-radius:2px;justify-content:center;text-align:center}.button-style:hover{border-color:rgb(145.5,145.5,145.5)}",""])},6892:(e,t,i)=>{i.r(t),i.d(t,{Example32:()=>E});var s={};i.r(s),i.d(s,{bindables:()=>c,default:()=>l,dependencies:()=>d,name:()=>r,register:()=>u,template:()=>o});var a=i(5959),n=i(7414);i(3165);const r="example32",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example32.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h4 class="ml-3">Container Width (950px)</h4>\n\n<div class="row">\n  <div class="ml-2 mb-2 mr-2">\n    <div class="btn-group btn-group-toggle" data-bs-toggle="buttons">\n      <label class="btn btn-sm btn-outline-secondary btn-icon" class.bind="isUsingDefaultResize ? \'active\' : \'\'"\n              data-test="autosize-columns-btn">\n        <input type="radio" class="btn-check" name="options"\n                checked.bind="isUsingDefaultResize"\n                click.trigger="handleDefaultResizeColumns()">\n        <i class="mdi mdi-arrow-expand"></i> (default resize) by "autosizeColumns"\n      </label>\n      <label class="btn btn-sm btn-outline-secondary btn-icon" class.bind="isUsingDefaultResize ? \'\' : \'active\'"\n              data-test="resize-by-content-btn">\n        <input type="radio" class="btn-check" name="options"\n                checked.bind="!isUsingDefaultResize"\n                click.trigger="handleNewResizeColumns()">\n        <i class="mdi mdi-arrow-expand"></i> Resize by Cell Content\n      </label>\n    </div>\n  </div>\n\n  <div class="mb-2">\n    <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">\n      <button type="button" class="btn btn-outline-secondary btn-icon" click.trigger="setSelectedRowIds()"\n              data-test="set-dynamic-rows-btn"\n              title="Change Row Selection across multiple pages">\n        <span>Change Row Selection</span>\n      </button>\n      <button type="button" class="btn btn-outline-secondary btn-icon" data-test="toggle-readonly-btn"\n              click.trigger="toggleGridEditReadonly()">\n        <i class="mdi mdi-table-edit"></i> Toggle Readonly\n      </button>\n      <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-last-edit-btn"\n              click.trigger="undoLastEdit()">\n        <i class="mdi mdi-undo"></i> Undo Last Edit\n      </button>\n      <button type="button" class="btn btn-outline-secondary btn-icon" data-test="save-all-btn"\n              click.trigger="saveAll()">\n          <span>Save All</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div id="smaller-container" style="width: 950px">\n  <aurelia-slickgrid grid-id="grid32"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                      on-selected-row-ids-changed.trigger="handleOnSelectedRowIdsChanged($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',l=o,d=[],c={};let h;function u(e){h||(h=n.K9.define({name:r,template:o,dependencies:d,bindables:c})),e.register(h)}var m=i(7694),p=i(6824),f=i(6074),g=i(971),b=i(5388),y=i.n(b),C=i(1125),v=i.n(C),w=i(5687),R=i.n(w),k=i(8644),x=i.n(k),S=i(9552),T=i.n(S),I=i(3325),P=i.n(I),O=i(1287),z={};z.styleTagTransform=P(),z.setAttributes=x(),z.insert=R().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=T(),y()(O.A,z),O.A&&O.A.locals&&O.A.locals,i(1376);const N=(e,t,i,s,a,n)=>(i=null==i?"":i,n.getOptions().editable&&s.editor?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i),U=e=>null!=e&&e.length?/^(task\s\d+)*$/i.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'}:{valid:!1,msg:"This is a required field."};let E=(()=>{let e,t,i=[(0,n.EM)(s)],r=[];return class{static{t=this}static{const s="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,a.G4)(null,e={value:t},i,{kind:"class",name:t.name,metadata:s},null,r),t=e.value,s&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s}),(0,a.zF)(t,r)}http;title="Example 32: Columns Resize by Content";subTitle='The grid below uses the optional resize by cell content (with a fixed 950px for demo purposes), you can click on the 2 buttons to see the difference. The "autosizeColumns" is really the default option used by SlickGrid-Universal, the resize by cell content is optional because it requires to read the first thousand rows and do extra width calculation.';aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];editQueue=[];editedItems={};isUsingDefaultResize=!1;isGridEditable=!0;isMassSelectionDisabled=!0;complexityLevelList=[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}];constructor(e=(0,p.hd)((0,p.pn)(m.xl))){this.http=e,this.initializeGrid()}attached(){this.dataset=this.loadData(400)}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,type:g.PUO.string,minWidth:65,resizeExtraWidthPadding:4,resizeCharWidthInPx:7.6,resizeCalcWidthRatio:1,resizeMaxWidthThreshold:200,columnGroup:"Common Factor",cssClass:"text-uppercase fw-bold",filterable:!0,filter:{model:g.CuW.inputText,filterPredicate:(e,t)=>{const i=t.parsedSearchTerms||[];if(i?.length){const s=t.columnId,a=i[0],n=e[s].toLowerCase(),r=a.matchAll(/^%([^%\r\n]+)[^%\r\n]*$|(.*)%(.+)%(.*)|(.+)%(.+)|([^%\r\n]+)%$/gi),o=Array.from(r),l=o.length?o[0]:[],[d,c,h,u,m,p,f,g]=l;return c?n.endsWith(c.toLowerCase()):h&&u?n.startsWith(h.toLowerCase())&&n.includes(u.toLowerCase()):u&&m?n.includes(u)&&n.endsWith(m.toLowerCase()):u&&!m?n.includes(u.toLowerCase()):p&&f?n.startsWith(p.toLowerCase())&&n.endsWith(f.toLowerCase()):g?n.startsWith(g.toLowerCase()):n.includes(a.toLowerCase())}return!0}},editor:{model:g.R8o.longText,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,editorOptions:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:U}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:65,type:g.PUO.number,columnGroup:"Common Factor",formatter:(e,t,i)=>null==i||""===i?"":i>1?`${i} days`:`${i} day`,editor:{model:g.R8o.float,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",minWidth:65,sortable:!0,filterable:!0,type:g.PUO.number,columnGroup:"Analysis",filter:{model:g.CuW.compoundInputNumber},formatter:g._tQ.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:g.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:g.CuW.compoundSlider,operator:">="},editor:{model:g.R8o.slider,minValue:0,maxValue:100}},{id:"complexity",name:"Complexity",field:"complexity",resizeCalcWidthRatio:.9,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,t,i)=>this.complexityLevelList[i]?.label,exportCustomFormatter:(e,t,i)=>this.complexityLevelList[i]?.label,filter:{model:g.CuW.multipleSelect,collection:this.complexityLevelList},editor:{model:g.R8o.singleSelect,collection:this.complexityLevelList}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:g._tQ.dateUs,columnGroup:"Period",exportCustomFormatter:g._tQ.dateUs,type:g.PUO.date,outputType:g.PUO.dateUs,saveOutputType:g.PUO.dateUtc,filterable:!0,filter:{model:g.CuW.compoundDate},editor:{model:g.R8o.date,params:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,cssClass:"text-center",columnGroup:"Period",formatter:g._tQ.checkmarkMaterial,exportWithFormatter:!1,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:g.CuW.singleSelect},editor:{model:g.R8o.checkbox}},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:g._tQ.dateUs,columnGroup:"Period",type:g.PUO.date,outputType:g.PUO.dateUs,saveOutputType:g.PUO.dateUtc,filterable:!0,filter:{model:g.CuW.compoundDate},exportCustomFormatter:g._tQ.dateUs,editor:{model:g.R8o.date,editorOptions:{range:{min:"today"}},validator:(e,t)=>{const i=t&&t.item;return i&&i.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,resizeCharWidthInPx:8,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:g._tQ.complexObject,exportCustomFormatter:g._tQ.complex,type:g.PUO.object,sortComparer:g.Luy.objectString,editor:{model:g.R8o.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,editorOptions:{minLength:1,fetch:(e,t)=>{t(this.mockProducts().filter((t=>t.itemName.toLowerCase().includes(e.toLowerCase()))))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:g.CuW.inputText,type:g.PUO.string,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:g._tQ.complexObject,columnGroup:"Item",exportCustomFormatter:g._tQ.complex,dataKey:"code",labelKey:"name",type:g.PUO.object,sortComparer:g.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:g.R8o.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch("assets/data/countries.json")},filter:{model:g.CuW.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"help",title:"Help!",iconCssClass:"mdi mdi-help-circle",positionOrder:66,action:()=>alert("Please Help!")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,t)=>{const i=t.dataContext;confirm(`Do you really want to delete row (${(t?.row??0)+1}) with "${i.title}"`)&&this.aureliaGrid.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={editable:!0,autoAddCustomEditorFormatter:N,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,autoResize:{container:"#smaller-container",rightPadding:10},gridWidth:"100%",enableAutoResize:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,500,5e3]},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0,resizeByContentOptions:{defaultRatioForStringType:.92,formatterPaddingWidthInPx:8},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new f.N],enableFiltering:!0,enableRowSelection:!0,enableCheckboxSelector:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},rowSelectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,rowHeight:33,headerRowHeight:35,editCommandHandler:(e,t,i)=>{const s=Array.isArray(i.prevSerializedValue)?i.prevSerializedValue:[i.prevSerializedValue],a=Array.isArray(i.serializedValue)?i.serializedValue:[i.serializedValue],n=this.columnDefinitions.filter((e=>void 0!==e.editor)),r=[];s.forEach(((o,l)=>{if(s[l]!==a[l]){const s=Array.isArray(i.prevSerializedValue)?n[l]:t;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),i.execute(),this.renderUnsavedCellStyling(e,s,i),r.push(s)}})),this.editQueue.push({item:e,columns:r,editCommand:i})},enableCellMenu:!0}}loadData(e){const t=[];for(let i=0;i<e;i++){const e=Math.floor(Math.random()*this.mockProducts().length),s=2e3+Math.floor(10*Math.random()),a=(new Date).getFullYear()+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),r=Math.floor(29*Math.random()),o=Math.floor(59*Math.random()),l=new Date(a,n+1,r,o,o,o),d=Math.floor(100*Math.random())+15,c=d>100?i>5?100:88:d,h=100===c;t[i]={id:i,title:"Task "+i,duration:Math.floor(100*Math.random())+10,percentComplete:c,analysis:{percentComplete:c},complexity:i%3?0:2,start:new Date(s,n,r,r,o,o,o),finish:h||i%3==0&&l>new Date&&i>3?h?new Date:l:"",cost:i%33==0?null:Math.round(1e4*Math.random())/100,completed:h||i%3==0&&l>new Date&&i>3,product:{id:this.mockProducts()[e]?.id,itemName:this.mockProducts()[e]?.itemName},origin:i%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},i%8||(delete t[i].finish,delete t[i].percentComplete)}return t}handleDefaultResizeColumns(){const e=this.aureliaGrid.slickGrid.getColumns();e.forEach((e=>e.width=e.originalWidth)),this.aureliaGrid.slickGrid.setColumns(e),this.aureliaGrid.slickGrid.autosizeColumns(),this.isUsingDefaultResize=!0}handleNewResizeColumns(){this.aureliaGrid.resizerService.resizeColumnsByCellContent(!0),this.isUsingDefaultResize=!1}handleOnSelectedRowIdsChanged(e){console.log("Selected Ids:",e.selectedRowIds)}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}removeUnsavedStylingFromCell(e,t,i){this.aureliaGrid.slickGrid.removeCellCssStyles(`unsaved_highlight_${[t.id]}${i}`)}removeAllUnsavedStylingFromCell(){for(const e of this.editQueue){const t=e?.editCommand;if(t)for(const i of e.columns)this.removeUnsavedStylingFromCell(e.item,i,t.row)}}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:t,columns:i,editCommand:s}=e;Array.isArray(i)&&i.forEach((e=>{this.renderUnsavedCellStyling(t,e,s)}))}}renderUnsavedCellStyling(e,t,i){if(i&&e&&t){const i=this.aureliaGrid.dataView.getRowByItem(e);if(i>=0){const e={[i]:{[t.id]:"unsaved-editable-field"}};this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[t.id]}${i}`,e)}}}setSelectedRowIds(){this.aureliaGrid.dataView?.setSelectedIds([3,4,11])}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const t=this.editQueue.pop(),i=t?.editCommand;if(t&&i&&g.W9y.cancelCurrentEdit()){i.undo();for(const e of t.columns)this.removeUnsavedStylingFromCell(t.item,e,i.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid?.slickGrid.gotoCell(i.row,i.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const t=e?.editCommand;if(t&&g.W9y.cancelCurrentEdit()){t.undo();for(const i of e.columns)this.removeUnsavedStylingFromCell(e.item,i,t.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(0)}`},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(1)}`},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(2)}`},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(3)}`},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(4)}`},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(5)}`},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(6)}`},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(7)}`},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(8)}`}]}getRandomIcon(e){const t=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],i=Math.floor(Math.random()*t.length-1);return t[e??i]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">\n      <div class="autocomplete-left">\n        \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n        <span class="mdi ${e.icon}"></span>\n      </div>\n      <div>\n        <span class="autocomplete-top-left">\n          <span class="mdi ${"I"===e.itemTypeName?"mdi-information-outline":"mdi-content-copy"}"></span>\n          ${e.itemName}\n        </span>\n      <div>\n    </div>\n    <div>\n      <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">\n          <div class="autocomplete-left">\n            \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n            <span class="mdi ${e.icon}"></span>\n          </div>\n          <div>\n            <span class="autocomplete-top-left">\n              <span class="mdi ${"I"===e.itemTypeName?"mdi-information-outline":"mdi-content-copy"}"></span>\n              ${e.itemName}\n            </span>\n            <span class="autocomplete-top-right">${(0,g.ZVp)(e.listPrice,2,2,!1,"$")}</span>\n          <div>\n        </div>\n        <div>\n          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n          <span class="autocomplete-bottom-right">Type: <b>${"I"===e.itemTypeName?"Item":"C"===e.itemTypeName?"PdCat":"Cat"}</b></span>\n        </div>`}},t})()},7694:(e,t,i)=>{i.d(t,{Pq:()=>a,xl:()=>u});var s=i(6824);function a(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const r=s.DI.createInterface((e=>e.singleton(n)));class o{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,s.hd)(s.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:l})}withRetry(e){const t=this.c.invoke(I,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function l(e){if(!e.ok)throw e;return e}const d=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),c=/^([a-z][a-z0-9+\-.]*:)?\/\//i,h=s.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw d(5e3);return e.instance(fetch)})),u=s.DI.createInterface("IHttpClient",(e=>e.aliasTo(m)));class m{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,s.hd)((0,s.P9)(o)),this.u=(0,s.hd)(h)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw d(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const i=e(t);if(null!=i){if("object"!=typeof i)throw d(5001,typeof i);t=i}}}const i=t.defaults;if(i?.headers instanceof Headers)throw d(5003);const s=t.interceptors;if(s?.length>0){if(s.filter((e=>e instanceof I)).length>1)throw d(5004);const e=s.findIndex((e=>e instanceof I));if(e>=0&&e!==s.length-1)throw d(5005)}return this.baseUrl=t.baseUrl,this.defaults=i,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let i=this.buildRequest(e,t);return this.processRequest(i,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw d(5006,e);i=e,t=this.u.call(void 0,i)}return this.processResponse(t,this.t,i)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const i=this.defaults??{};let s,a,n;const r=function(e){const t={},i=e??{};for(const e of Object.keys(i))t[e]="function"==typeof i[e]?i[e]():i[e];return t}(i.headers);if(e instanceof Request)s=e,n=new Headers(s.headers).get("Content-Type");else{t||(t={}),a=t.body;const r=void 0!==a?{body:a}:null,o={...i,headers:{},...t,...r};n=new Headers(o.headers).get("Content-Type"),s=new Request(p(this.baseUrl,e),o)}return n||(new Headers(r).has("content-type")?s.headers.set("Content-Type",new Headers(r).get("content-type")):void 0!==a&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(a)&&s.headers.set("Content-Type","application/json")),function(e,t){const i=t??{};for(const t of Object.keys(i))e.has(t)||e.set(t,i[t])}(s.headers,r),a instanceof Blob&&a.type&&s.headers.set("Content-Type",a.type),s}get(e,t){return this.fetch(e,t)}post(e,t,i){return this.I(e,t,i,"POST")}put(e,t,i){return this.I(e,t,i,"PUT")}patch(e,t,i){return this.I(e,t,i,"PATCH")}delete(e,t,i){return this.I(e,t,i,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,y.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,y.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,i){return this.B(e,t,"response","responseError",Response,i,this)}B(e,t,i,s,a,...n){return(t??[]).reduce(((e,t)=>{const r=t[i],o=t[s];return e.then(r?e=>e instanceof a?r.call(t,e,...n):e:f,o?e=>o.call(t,e,...n):g)}),Promise.resolve(e))}I(e,t,i,s){return i||(i={}),i.method=s,null!=t&&(i.body=t),this.fetch(e,i)}}function p(e,t){return c.test(t)?t:(e??"")+t}function f(e){return e}function g(e){throw e}function b(e,t){const i=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(i)}),1)}const y=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),C=s.DI.createInterface((e=>e.singleton(w))),v=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class w{constructor(){this.storage=(0,s.hd)(r),this.p=(0,s.hd)(s.r_),this.ea=(0,s.hd)(s.xe),this.q=(0,s.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const i=this.ea.subscribe(e,t);return this.H.push(i),i}subscribeOnce(e,t){const i=this.ea.subscribeOnce(e,t);return this.H.push(i),i}setStaleTimer(e,t,i){const s=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(i);const t=this.getItem(e);this.ea.publish(v.CacheStaleRefreshed,{key:e,value:t}),this.N(s)}),t);this.j.push(s)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(v.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(v.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(v.CacheBackgroundStopped)}set(e,t,i,s){const a={data:t,...i};this.setItem(e,a,s)}get(e){return this.getItem(e)?.data}setItem(e,t,i){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,i),this.ea.publish(v.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(v.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(v.CacheHit,{key:e,value:t}),t;const i=Date.now();if(i>t.lastCached+(t.staleTime??0))this.ea.publish(v.CacheStale,{key:e,value:t});else{if(!(i>t.lastCached+(t.cacheTime??0)))return this.ea.publish(v.CacheHit,{key:e,value:t}),t;this.ea.publish(v.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(v.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(v.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(v.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const R={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class k{constructor(e){this.P=(0,s.hd)(C),this.cf={...R,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(k.cacheHeader))return e;const i=this.key(t);return this.P.setItem(i,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(i,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${k.prefix}${e.url}`}mark(e){return e?.headers.set(k.cacheHeader,"hit"),e}}k.prefix="au:interceptor:",k.cacheHeader="x-au-fetch-cache";class x{constructor(){this.cache=(0,s.hd)(s.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(x.cacheName,"readwrite").objectStore(x.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(x.cacheName).result}}x.cacheName="au-cache";const S=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),T={maxRetries:3,interval:1e3,strategy:S.fixed};class I{constructor(e){if(this.p=(0,s.hd)(s.r_),this.retryConfig={...T,...e??{}},this.retryConfig.strategy===S.exponential&&this.retryConfig.interval<=1e3)throw d(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,i){const{retryConfig:s}=t,{requestClone:a}=s;return Promise.resolve().then((()=>{if(s.counter<s.maxRetries){const n=null==s.doRetry||s.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){s.counter++;const e=function(e){const{interval:t,strategy:i,minRandomInterval:s,maxRandomInterval:a,counter:n}=e;if("function"==typeof i)return e.strategy(n);switch(i){case S.fixed:return P[S.fixed](t);case S.incremental:return P[S.incremental](n,t);case S.exponential:return P[S.exponential](n,t);case S.random:return P[S.random](n,t,s,a);default:throw d(5008,i)}}(s);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=a.clone();return"function"==typeof s.beforeRetry?s.beforeRetry(e,i):e})).then((e=>{const t={...e,retryConfig:s};return i.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const P=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,i=0,s=6e4)=>Math.random()*(s-i)+i]}}]);