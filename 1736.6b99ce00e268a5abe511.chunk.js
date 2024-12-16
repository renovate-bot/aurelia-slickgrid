"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[1736],{4071:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(3267),o=n.n(i),l=n(3484),r=n.n(l)()(o());r.push([t.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""]);const a=r},4510:(t,e,n)=>{var i=n(3267),o=n.n(i),l=n(3484);n.n(l)()(o()).push([t.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""])},1736:(t,e,n)=>{n.r(e),n.d(e,{Example20:()=>M});var i={};n.r(i),n.d(i,{bindables:()=>m,default:()=>s,dependencies:()=>d,name:()=>r,register:()=>c,template:()=>a});var o=n(5959),l=n(7414);n(4510);const r="example20",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example20.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<br>\n\n<div class="row">\n  <div class="col-sm-12">\n    <span>\n      <label for="">Pinned Rows: </label>\n      <input type="number"\n              value.bind="frozenRowCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenRowCount()">\n        Set\n      </button>\n    </span>\n    <span style="margin-left: 10px">\n      <label for="">Pinned Columns: </label>\n      <input type="number"\n              value.bind="frozenColumnCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenColumnCount()">\n        Set\n      </button>\n    </span>\n  </div>\n</div>\n\n<div class="row mt-2">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(-1)"\n            data-test="remove-frozen-column-button">\n      <i class="mdi mdi-close"></i> Remove Frozen Columns\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(2)"\n            data-test="set-3frozen-columns">\n      <i class="mdi mdi-pin-outline"></i> Set 3 Frozen Columns\n    </button>\n    <span style="margin-left: 15px">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFrozenBottomRows()">\n        <i class="mdi mdi-flip-vertical"></i> Toggle Pinned Rows\n      </button>\n      <span style="font-weight: bold;">: ${ isFrozenBottom ? \'Bottom\' : \'Top\' }</span>\n    </span>\n  </div>\n</div>\n\n<div class="col-sm-12">\n  <hr>\n</div>\n\n<aurelia-slickgrid grid-id="grid20"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',s=a,d=[],m={};let u;function c(t){u||(u=l.K9.define({name:r,template:a,dependencies:d,bindables:m})),t.register(u)}var b=n(971),h=n(5388),f=n.n(h),g=n(1125),p=n.n(g),v=n(5687),w=n.n(v),z=n(8644),C=n.n(z),k=n(9552),O=n.n(k),y=n(3325),F=n.n(y),R=n(4071),x={};x.styleTagTransform=F(),x.setAttributes=C(),x.insert=w().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=O(),f()(R.A,x),R.A&&R.A.locals&&R.A.locals,n(1376);let M=(()=>{let t,e,n=[(0,l.EM)(i)],r=[];return class{static{e=this}static{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,o.G4)(null,t={value:e},n,{kind:"class",name:e.name,metadata:i},null,r),e=t.value,i&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),(0,o.zF)(e,r)}title="Example 20: Pinned (frozen) Columns/Rows";subTitle='\n    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/frozen-columns-rows" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Option to pin any number of columns (left only) or rows</li>\n      <li>Option to pin the rows at the bottom instead of the top (default)</li>\n      <li>You can also dynamically any of these options, through SlickGrid "setOptions()"</li>\n      <li>Possibility to change the styling of the line border between pinned columns/rows</li>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];gridObj;gridOptions;frozenColumnCount=2;frozenRowCount=3;isFrozenBottom=!1;dataset=[];slickEventHandler;constructor(){this.defineGrid(),this.slickEventHandler=new b.JD8}aureliaGridReady(t){this.aureliaGrid=t,this.gridObj=t&&t.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,(t=>this.colorizeHoveringRow(t,!0))),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,(t=>this.colorizeHoveringRow(t,!1)))}colorizeHoveringRow(t,e){const n=this.gridObj.getCellFromEvent(t),i=e?[n?.row??0]:[];this.gridObj.setSelectedRows(i),t.preventDefault()}attached(){this.getData()}detaching(){this.slickEventHandler.unsubscribeAll()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:b._tQ.percentCompleteBar,type:b.PUO.number,filterable:!0,filter:{model:b.CuW.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:b._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:b._tQ.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:b.CuW.compoundSlider},editor:{model:b.R8o.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:b._tQ.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.CuW.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},gridWidth:920,enableCellNavigation:!0,editable:!0,autoEdit:!0,enableExcelCopyBuffer:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(){const t=[];for(let e=0;e<500;e++)t[e]={id:e,title:"Task "+e,cost:e%33==0?null:1e4*Math.random(),duration:e%8?Math.round(100*Math.random())+"":null,percentComplete:Math.round(100*Math.random()),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:e%5==0,title1:`Some Text ${Math.round(25*Math.random())}`,title2:`Some Text ${Math.round(25*Math.random())}`,title3:`Some Text ${Math.round(25*Math.random())}`,title4:`Some Text ${Math.round(25*Math.random())}`};this.dataset=t}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(t,e,n,i,o){const l=this.isNullUndefinedOrEmpty(o.cost)?"n/a":(0,b.ZVp)(o.cost,0,2,!1,"$","",".",",");let r="n/a";return!this.isNullUndefinedOrEmpty(o.duration)&&o.duration>=0&&(r=`${o.duration} ${o.duration>1?"days":"day"}`),`<b>${l}</b> | ${r}`}isNullUndefinedOrEmpty(t){return""===t||null==t}onCellValidationError(t,e){alert(e.validationResults.msg)}setFrozenColumns(t){this.gridObj.setOptions({frozenColumn:t}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}},e})()}}]);