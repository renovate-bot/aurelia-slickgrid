"use strict";(self.webpackChunkaurelia_slickgrid_demo=self.webpackChunkaurelia_slickgrid_demo||[]).push([[754],{96754:(i,t,e)=>{e.r(t),e.d(t,{Example1:()=>f});var n={};e.r(n),e.d(n,{default:()=>o,dependencies:()=>l,name:()=>d,register:()=>h,template:()=>r});var a=e(43112),s=e(1285);const d="example1",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n      href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example1.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h3>Grid 1</h3>\n<aurelia-slickgrid grid-id="grid1-1" column-definitions.bind="columnDefinitions1" grid-options.bind="gridOptions1"\n  dataset.bind="dataset1">\n</aurelia-slickgrid>\n\n<hr />\n\n<h3>Grid 2 <small>(with local Pagination)</small></h3>\n<aurelia-slickgrid grid-id="grid1-2" column-definitions.bind="columnDefinitions2" grid-options.bind="gridOptions2"\n  dataset.bind="dataset2">\n</aurelia-slickgrid>\n',o=r,l=[];let m;function h(i){m||(m=s.b_N.define({name:d,template:r,dependencies:l})),i.register(m)}var c=e(2875);e(34885);let f=class{title="Example 1: Basic Grids";subTitle="Simple Grids with Fixed Sizes (800 x 225)";gridOptions1;gridOptions2;columnDefinitions1=[];columnDefinitions2=[];dataset1=[];dataset2=[];constructor(){this.defineGrids()}attached(){this.dataset1=this.mockData(995),this.dataset2=this.mockData(995)}defineGrids(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:c.UgU.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:c.UgU.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableSorting:!0},this.columnDefinitions2=this.columnDefinitions1,this.gridOptions2={...this.gridOptions1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}}}mockData(i){const t=[];for(let e=0;e<i;e++){const i=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),s=Math.round(100*Math.random());t[e]={id:e,title:"Task "+e,duration:Math.round(100*Math.random())+"",percentComplete:s,start:new Date(i,n+1,a),finish:new Date(i+1,n+1,a),effortDriven:e%5==0}}return t}};f=(0,a.gn)([(0,s.MoW)(n),(0,a.w6)("design:paramtypes",[])],f)}}]);