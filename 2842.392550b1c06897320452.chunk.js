"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[2842],{21:(e,t,a)=>{var n=a(3832),i=a.n(n),l=a(7225);a.n(l)()(i()).push([e.id,"#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}",""])},2842:(e,t,a)=>{a.r(t),a.d(t,{Example27:()=>E});var n={};a.r(n),a.d(n,{bindables:()=>c,default:()=>s,dependencies:()=>d,name:()=>r,register:()=>p,template:()=>o});var i=a(5959),l=a(8391);a(21);const r="example27",o='<h2>\n  <span innerhtml.bind="title"></span>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example27.ts">\n      <span class="mdi mdi-link mdi-v-align-sub"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row" style="margin-bottom: 4px;">\n  <div class="col-md-12">\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-500-rows-btn" click.trigger="loadData(500)">\n      500 rows\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-50k-rows-btn" click.trigger="loadData(25000)">\n      25k rows\n    </button>\n    <button click.trigger="dynamicallyChangeFilter()" class="btn btn-outline-secondary btn-xs btn-icon"\n            data-test="change-filter-dynamically">\n      <span class="mdi mdi-filter-outline"></span>\n      <span>Dynamically Change Filter (% complete &lt; 40)</span>\n    </button>\n    <button click.trigger="collapseAllWithoutEvent()" class="btn btn-outline-secondary btn-xs btn-icon"\n            data-test="collapse-all-noevent-btn">\n      <span class="mdi mdi-arrow-collapse"></span>\n      <span>Collapse All (without triggering event)</span>\n    </button>\n    <button click.trigger="dynamicallyToggledFirstParent()" class="btn btn-outline-secondary btn-xs btn-icon"\n            data-test="dynamically-toggle-first-parent-btn">\n      <span>Dynamically Toggle First Parent</span>\n    </button>\n    <button click.trigger="reapplyToggledItems()" data-test="reapply-toggled-items-btn"\n            class="btn btn-outline-secondary btn-xs btn-icon"\n            disabled.bind="hasNoExpandCollapseChanged">\n      <span class="mdi mdi-history"></span>\n      <span>Reapply Previous Toggled Items</span>\n    </button>\n    <div class.bind="loadingClass"></div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <button click.trigger="addNewRow()" data-test="add-item-btn" class="btn btn-primary btn-xs btn-icon">\n      <span class="mdi mdi-plus color-white"></span>\n      <span>Add New Item to "Task 1" group</span>\n    </button>\n    <button click.trigger="updateFirstRow()" data-test="update-item-btn" class="btn btn-outline-secondary btn-xs btn-icon">\n      <span class="icon mdi mdi-pencil"></span>\n      <span>Update 1st Row Item</span>\n    </button>\n    <button click.trigger="collapseAll()" data-test="collapse-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">\n      <span class="mdi mdi-arrow-collapse"></span>\n      <span>Collapse All</span>\n    </button>\n    <button click.trigger="expandAll()" data-test="expand-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">\n      <span class="mdi mdi-arrow-expand"></span>\n      <span>Expand All</span>\n    </button>\n    <button click.trigger="logFlatStructure()" class="btn btn-outline-secondary btn-xs btn-icon"\n            title="console.log of the Flat dataset">\n      <span>Log Flat Structure</span>\n    </button>\n    <button click.trigger="logHierarchicalStructure()" class="btn btn-outline-secondary btn-xs btn-icon"\n            title="console.log of the Hierarchical Tree dataset">\n      <span>Log Hierarchical Structure</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div id="grid-container" class="col-sm-12">\n  <aurelia-slickgrid grid-id="grid27"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      instances.bind="aureliaGrid"\n                      on-before-filter-change.trigger="showSpinner()"\n                      on-filter-changed.trigger="hideSpinner()"\n                      on-before-filter-clear.trigger="showSpinner()"\n                      on-filter-cleared.trigger="hideSpinner()"\n                      on-before-sort-change.trigger="showSpinner()"\n                      on-sort-changed.trigger="hideSpinner()"\n                      on-before-toggle-tree-collapse.trigger="showSpinner()"\n                      on-toggle-tree-collapsed.trigger="hideSpinner()"\n                      on-tree-full-toggle-start.trigger="showSpinner()"\n                      on-tree-full-toggle-end.trigger="handleOnTreeFullToggleEnd($event.detail)"\n                      on-tree-item-toggled.trigger="handleOnTreeItemToggled($event.detail)">\n  </aurelia-slickgrid>\n</div>\n',s=o,d=[],c={};let m;function p(e){m||(m=l.K9.define({name:r,template:o,dependencies:d,bindables:c})),e.register(m)}var g=a(9444),u=a(405),h=a(8907),b=a.n(h),f=a(2736),C=a.n(f),y=a(6556),v=a.n(y),x=a(2635),w=a.n(x),T=a(5487),D=a.n(T),S=a(6956),I=a.n(S),k=a(8655),F={};F.styleTagTransform=I(),F.setAttributes=w(),F.insert=v().bind(null,"head"),F.domAPI=C(),F.insertStyleElement=D(),b()(k.A,F),k.A&&k.A.locals&&k.A.locals,a(1829);let E=(()=>{let e,t,a=[(0,l.EM)(n)],r=[];return class{static{t=this}static{const n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,i.G4)(null,e={value:t},a,{kind:"class",name:t.name,metadata:n},null,r),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,i.zF)(t,r)}title='Example 27: Tree Data <small> <span class="mdi mdi-file-tree mdi-27px"></span> (from a flat dataset with <code>parentId</code> references - <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/tree-data-grid" target="_blank">Wiki</a>)</small>';subTitle='<ul>\n    <li>It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.</li>\n    <ul>\n      <li>If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call "convertHierarchicalViewToParentChildArray()"</li>\n      <li>You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the next Hierarchical Example</li>\n    </ul>\n  </ul>';aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];datasetHierarchical=[];loadingClass="";isLargeDataset=!1;hasNoExpandCollapseChanged=!0;treeToggleItems=[];constructor(){this.defineGrid()}attached(){this.dataset=this.loadData(500)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:"id",type:u.PUO.string,formatter:u._tQ.tree,exportCustomFormatter:u._tQ.treeExport},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:u.CuW.compoundSlider,operator:">="},formatter:u._tQ.percentCompleteBarWithText,type:u.PUO.number},{id:"start",name:"Start",field:"start",minWidth:60,type:u.PUO.dateIso,filterable:!0,sortable:!0,filter:{model:u.CuW.compoundDate},formatter:u._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:u.PUO.dateIso,filterable:!0,sortable:!0,filter:{model:u.CuW.compoundDate},formatter:u._tQ.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",exportWithFormatter:!1,formatter:u._tQ.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:u.CuW.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableFiltering:!0,enableTreeData:!0,treeDataOptions:{columnId:"title",parentPropName:"parentId",levelPropName:"treeLevel",indentMarginLeft:15,initiallyCollapsed:!0,titleFormatter:(e,t,a,n,i)=>{let l="";return i.treeLevel>0&&(l='<span class="mdi mdi-subdirectory-arrow-right mdi-v-align-sub color-se-secondary"></span>'),`${l}<span class="bold">${a}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${i.parentId})</span>`}},multiColumnSort:!1,showCustomFooter:!0,headerRowHeight:45,rowHeight:40,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new g.N],contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}}}addNewRow(){const e=this.aureliaGrid.dataView.getItemCount(),t=this.aureliaGrid.dataView?.getItemById(1);if(t?.__hasChildren){const a={id:e,parentId:t.id,title:`Task ${e}`,duration:"1 day",percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.aureliaGrid.gridService.addItem(a)}}updateFirstRow(){const e=this.aureliaGrid.dataView.getItemById(0);this.aureliaGrid.gridService.updateItem({...e,duration:"11 days",percentComplete:77,start:new Date,finish:new Date,effortDriven:!1})}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:"<",searchTerms:[40]}])}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}hideSpinner(){window.setTimeout((()=>this.loadingClass=""),200)}showSpinner(){this.isLargeDataset&&(this.loadingClass="mdi mdi-load mdi-spin-1s mdi-24px color-alt-success")}loadData(e){this.isLargeDataset=e>5e3;let t=0;const a=[],n=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),l=Math.floor(11*Math.random()),r=Math.floor(29*Math.random()),o=n[i]={};let s;1!==i&&0!==i||(t=0,a.pop()),3===i?t=1:2===i||4===i||Math.random()>.8&&i>0&&t<3&&i-1!=0&&i-1!=2?(t++,a.push(i-1)):Math.random()<.3&&t>0&&(t--,a.pop()),s=a.length>0?a[a.length-1]:null,o.id=i,o.parentId=s,o.title=`Task ${i}`,o.duration="5 days",o.percentComplete=Math.round(100*Math.random()),o.start=new Date(e,l,r),o.finish=new Date(e,l+1,r),o.effortDriven=i%5==0}return this.dataset=n,n}handleOnTreeFullToggleEnd(e){console.log("Tree Data changes",e),this.hideSpinner()}handleOnTreeItemToggled(e){this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=e.toggledItems,console.log("Tree Data changes",e)}handleOnGridStateChanged(e){this.hasNoExpandCollapseChanged=!1,e?.change?.type===u.yf6.treeData&&(console.log("Tree Data gridStateChange",e?.gridState?.treeData),this.treeToggleItems=e?.gridState?.treeData?.toggledItems)}logTreeDataToggledItems(){console.log(this.aureliaGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){const e=this.dataset.find((e=>1===e.treeLevel)),t=this.aureliaGrid.dataView.getItemByIdx(e.parentId);e&&t&&this.aureliaGrid.treeDataService.dynamicallyToggleItemState([{itemId:t.id,isCollapsed:!t.__collapsed}])}reapplyToggledItems(){this.aureliaGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}},t})()},8655:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(3832),i=a.n(n),l=a(7225),r=a.n(l)()(i());r.push([e.id,"#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}",""]);const o=r}}]);