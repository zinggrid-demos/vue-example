webpackJsonp([1],{"6NlX":function(t,e){},H3Ml:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Read Only")]),t._v(" "),a("router-link",{attrs:{to:"/attribute-change"}},[t._v("One Way Data Binding")]),t._v(" "),a("router-link",{attrs:{to:"/data-change"}},[t._v("Two Way Data Binding")]),t._v(" "),a("router-link",{attrs:{to:"/ajax"}},[t._v("Ajax")]),t._v(" "),a("router-link",{attrs:{to:"/ssr"}},[t._v("SSR")]),t._v(" "),a("router-link",{attrs:{to:"/methods"}},[t._v("Methods")]),t._v(" "),a("router-link",{attrs:{to:"/events"}},[t._v("Events")])],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(t){a("H3Ml")},null,null).exports,i=a("/ocq"),s=(a("rHV6"),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("zing-grid",{ref:"firstGrid",attrs:{caption:"Hello World",theme:t.theme}},[a("zg-colgroup",[a("zg-column",{attrs:{index:"0",header:"Column 1"}}),t._v(" "),a("zg-column",{attrs:{index:"1",header:"Column 2"}}),t._v(" "),a("zg-column",{attrs:{index:"2",header:"Column 3"}})],1)],1),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.theme=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),a("option",{attrs:{value:"android"}},[t._v("Android")]),t._v(" "),a("option",{attrs:{value:"ios"}},[t._v("IOS")]),t._v(" "),a("option",{attrs:{value:"dark"}},[t._v("Dark")]),t._v(" "),a("option",{attrs:{value:"black"}},[t._v("Black")])])],1)},staticRenderFns:[]});var d=a("VU/8")({data:function(){return{theme:"default",datastore:[[1,2,3],[4,5,6]]}},mounted:function(){this.$refs.firstGrid.setData(this.datastore)}},s,!1,function(t){a("jQub")},"data-v-44d185cb",null).exports,l=a("mvHQ"),c=a.n(l),g={data:function(){return{captionText:"Change Me Please!",pagerOn:!0,dataIndex:1,dataset:[],stringData:"",theme:"default"}},mounted:function(){this.dataset=[[[1,2,3],[4,5,6]],[{breed:"Chow Chow",name:"Butter"},{breed:"Dachshund",name:"Sousage"},{breed:"Pug",name:"Potat"},{breed:"Corgi",name:"Plop"},{breed:"Pomeranian",name:"Floof"}]]},methods:{changeData:function(t){0===this.dataIndex?this.dataIndex=1:this.dataIndex=0}},watch:{dataset:function(t){this.stringData=c()(this.dataset[this.dataIndex])},dataIndex:function(t){this.stringData=c()(this.dataset[t])}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("zing-grid",{ref:"oneWayGrid",attrs:{caption:t.captionText,data:t.stringData,pager:t.pagerOn,theme:t.theme,"page-size":"5","page-size-options":"2,5,15,25,50"}}),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Stored Data")]),t._v(" "),a("p",[t._v("Paste your JSON data here")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.stringData,expression:"stringData"}],attrs:{name:"ds",cols:"50",rows:"8"},domProps:{value:t.stringData},on:{input:function(e){e.target.composing||(t.stringData=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:"pager-toggle"}},[t._v("Toggle Pager")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pagerOn,expression:"pagerOn"}],attrs:{id:"pager-toggle",type:"checkbox"},domProps:{checked:Array.isArray(t.pagerOn)?t._i(t.pagerOn,null)>-1:t.pagerOn},on:{change:function(e){var a=t.pagerOn,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=t._i(a,null);n.checked?r<0&&(t.pagerOn=a.concat([null])):r>-1&&(t.pagerOn=a.slice(0,r).concat(a.slice(r+1)))}else t.pagerOn=o}}}),t._v(" "),a("br"),t._v(" "),a("label",[t._v("Change Data")]),t._v(" "),a("button",{attrs:{id:"cdBtn"},on:{click:t.changeData}},[t._v("Toggle Datasets")]),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:"caption-text"}},[t._v("Change Caption")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.captionText,expression:"captionText"}],attrs:{id:"caption-text",type:"text",placeholder:"Caption"},domProps:{value:t.captionText},on:{input:function(e){e.target.composing||(t.captionText=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:"theme-text"}},[t._v("Change Theme")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],attrs:{id:"theme-text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.theme=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),a("option",{attrs:{value:"android"}},[t._v("Android")]),t._v(" "),a("option",{attrs:{value:"ios"}},[t._v("IOS")]),t._v(" "),a("option",{attrs:{value:"dark"}},[t._v("Dark")]),t._v(" "),a("option",{attrs:{value:"black"}},[t._v("Black")])])],1)},staticRenderFns:[]};var h=a("VU/8")(g,v,!1,function(t){a("lWns")},"data-v-3b765ce4",null).exports,u={data:function(){return{theme:"default",datastore:[{breed:"Cane Corso",name:"Ziva"},{breed:"Dachshund",name:"Rick"},{breed:"Corgi",name:"Phillis"},{breed:"Pomeranian",name:"Koda"}],stringData:""}},mounted:function(){this.stringifyData(),this.$refs.twoWayGrid.addEventListener("data:recordchange",this.dataChanged.bind(this)),this.$refs.twoWayGrid.addEventListener("data:cellchange",this.dataChanged.bind(this)),this.$refs.twoWayGrid.addEventListener("data:recordinsert",this.dataInsert.bind(this)),this.$refs.twoWayGrid.addEventListener("data:recorddelete",this.dataDelete.bind(this))},methods:{dataChanged:function(t){console.log("--- data:changed fired ---",t.detail);var e=t.detail.ZGData.rowIndex,a={breed:t.detail.ZGData.data.breed,name:t.detail.ZGData.data.name};this.datastore[e]=a,this.stringifyData()},dataInsert:function(t){console.log("--- data:insert fired ---",t.detail);var e={breed:t.detail.ZGData.data.breed,name:t.detail.ZGData.data.name};this.datastore.push(e),this.stringifyData()},dataDelete:function(t){console.log("--- data:delete fired ---",t);var e=t.detail.ZGData.data.nOriginalIndex;this.datastore=this.datastore.filter(function(t,a){return a!=e}),this.stringifyData()},stringifyData:function(t){this.stringData=c()(this.datastore)}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("zing-grid",{ref:"twoWayGrid",attrs:{data:t.stringData,caption:"Edit Cells in Grid OR update data in input field","editor-controls":""}}),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Stored Data")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.stringData,expression:"stringData"}],attrs:{name:"ds",cols:"50",rows:"8"},domProps:{value:t.stringData},on:{input:function(e){e.target.composing||(t.stringData=e.target.value)}}}),t._v(" "),a("br")],1)},staticRenderFns:[]};var m=a("VU/8")(u,p,!1,function(t){a("YlCc")},"data-v-3a61f2ee",null).exports,f={data:function(){return{dataset:[{breed:"Chow Chow",name:"Butter"},{breed:"Dachshund",name:"Sousage"},{breed:"Pug",name:"Potat"},{breed:"Corgi",name:"Plop"},{breed:"Pomeranian",name:"Floof"}],stringData:"",pagerOn:!1,captionText:"",eventText:""}},mounted:function(){this.stringData=c()(this.dataset)},methods:{setPager:function(t){this.$refs.methodGrid.setPager(this.pagerOn)},setCaption:function(t){this.$refs.methodGrid.setCaption(this.captionText)}},watch:{stringData:function(t){this.$refs.methodGrid.setData(t)}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("zing-grid",{ref:"methodGrid"}),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:"pager-toggle"}},[t._v("Toggle Pager")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pagerOn,expression:"pagerOn"}],attrs:{id:"pager-toggle",type:"checkbox"},domProps:{checked:Array.isArray(t.pagerOn)?t._i(t.pagerOn,null)>-1:t.pagerOn},on:{change:[function(e){var a=t.pagerOn,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=t._i(a,null);n.checked?r<0&&(t.pagerOn=a.concat([null])):r>-1&&(t.pagerOn=a.slice(0,r).concat(a.slice(r+1)))}else t.pagerOn=o},t.setPager]}}),t._v(" "),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.captionText,expression:"captionText"}],attrs:{type:"text",placeholder:"Caption"},domProps:{value:t.captionText},on:{input:function(e){e.target.composing||(t.captionText=e.target.value)}}}),t._v(" "),a("button",{on:{click:t.setCaption}},[t._v("Set Caption")]),t._v(" "),a("br"),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.stringData,expression:"stringData"}],attrs:{name:"ds",cols:"50",rows:"8"},domProps:{value:t.stringData},on:{input:function(e){e.target.composing||(t.stringData=e.target.value)}}}),a("br")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Read more about ZingGrid methods "),e("a",{attrs:{href:"https://www.zinggrid.com/docs/api-methods",target:"_blank"}},[this._v("here.")])])}]};var b=a("VU/8")(f,x,!1,function(t){a("6NlX")},"data-v-0d3ac7a4",null).exports,_={data:function(){return{datastore:[{name:"Kevin",age:"22"},{name:"Joe",age:"40"},{name:"Liz",age:"25"},{name:"Tim",age:"24"},{name:"Ron",age:"30"},{name:"Jane",age:"31"}],stringData:[],events:["grid:ready","cell:click","header:click","grid:pagechange"],eventText:""}},beforeDestroy:function(){for(var t=0;t<this.events.length;t++)this.$refs.eventGrid.removeEventListener(this.events[t],this.logEvent.bind(this))},mounted:function(){this.stringData=c()(this.datastore);for(var t=0;t<this.events.length;t++)this.$refs.eventGrid.addEventListener(this.events[t],this.logEvent.bind(this))},methods:{logEvent:function(t){console.log(t);t.detail.ZGTarget&&t.detail.ZGData?(console.log(t.type+" from "+t.detail.ZGTarget.localName),this.eventText+=t.type+" from "+t.detail.ZGTarget.localName+"\n",this.eventText+=""+c()(t.detail.ZGData)+"\n".repeat(2)):t.detail.ZGData?(this.eventText+=t.type+" from zing-grid \n",this.eventText+=""+c()(t.detail.ZGData)+"\n".repeat(2)):(console.log(t.type+" from zing-grid"),this.eventText+=t.type+" from zing-grid "+"\n".repeat(2))}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("zing-grid",{ref:"eventGrid",attrs:{caption:"Events",data:t.stringData,pager:"","page-size":"3"}}),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Event Log")]),t._v(" "),a("div",{staticClass:"wordwrap",attrs:{id:"eventLog"}},[t._v(t._s(t.eventText))])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Click around on the grid to trigger events in the console. Read more about ZingGrid events "),e("a",{attrs:{href:"https://www.zinggrid.com/docs/api-events",target:"_blank"}},[this._v("here.")])])}]};var w=a("VU/8")(_,z,!1,function(t){a("tLPf")},"data-v-35ca3fa6",null).exports,k={mounted:function(){var t=this;fetch("/static/shows.json",{headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})}).then(function(t){if(200!==t.status)throw new Error("Status was not 200");return t.json()}).then(function(e){console.log(e),setTimeout(function(){t.$refs.ajaxGrid.setData(e.shows)},2e3)}).catch(function(t){console.log(t)})},methods:{}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("zing-grid",{ref:"ajaxGrid",attrs:{caption:"Shows",editor:"",loading:""}})],1)},staticRenderFns:[]};var D=a("VU/8")(k,y,!1,function(t){a("bUUV")},"data-v-2a605e3b",null).exports,C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("zing-grid",{attrs:{"server-render":"",role:"grid",viewport:"desktop",caption:"SSR Grid"}},[a("zg-colgroup",{attrs:{slot:"gridcolgroup"},slot:"gridcolgroup"},[a("zg-column",{staticStyle:{width:"643px"},attrs:{type:"text",index:"breed"}}),a("zg-column",{staticStyle:{width:"619px"},attrs:{type:"text",index:"name"}})],1),a("zg-header",{attrs:{slot:"header"},slot:"header"},[a("zg-control-bar",{attrs:{slot:"control-bar",hidden:""},slot:"control-bar"},[a("zg-button",{attrs:{slot:"action",action:"createrecord",hidden:"",tabindex:"0"},slot:"action"},[a("zg-icon",{attrs:{slot:"zgicon",name:"createrecord"},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--376218",viewBox:"0 0 24 24"},slot:"icon"},[a("path",{attrs:{d:"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"}})])]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",action:"checkbox",hidden:""},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1)],1),a("zg-caption",{attrs:{slot:"caption"},slot:"caption"},[a("zg-button",{attrs:{slot:"tool",action:"removerecord",hidden:"",tabindex:"0"},slot:"tool"},[a("zg-icon",{attrs:{slot:"zgicon",name:"removerecord","internal-caption":""},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--930384",viewBox:"0 0 24 24"},slot:"icon"},[a("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}})])]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",action:"checkbox",hidden:""},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1),a("zg-search",{attrs:{slot:"tool",hidden:""},slot:"tool"},[a("zg-button",{attrs:{slot:"button",action:"search",tabindex:"0"},slot:"button"},[a("zg-icon",{attrs:{slot:"zgicon",name:"search","internal-caption":""},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--693382",viewBox:"0 0 24 24"},slot:"icon"},[a("path",{attrs:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}),a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",action:"checkbox",hidden:""},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1),a("input",{attrs:{slot:"input",type:"search",placeholder:"Search"},slot:"input"})],1),a("zg-button",{attrs:{slot:"tool",action:"fixedmenu",tabindex:"0",hidden:""},slot:"tool"},[a("zg-icon",{attrs:{slot:"zgicon",name:"fixedmenu","internal-caption":""},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--455948",viewBox:"0 0 24 24"},slot:"icon"},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})])]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",action:"checkbox",hidden:""},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1),a("zg-button",{attrs:{slot:"tool",action:"menu",tabindex:"1",hidden:""},slot:"tool"},[a("zg-icon",{attrs:{slot:"zgicon",name:"menu","internal-caption":""},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--21605",viewBox:"0 0 24 24"},slot:"icon"},[a("path",{attrs:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}})])]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",action:"checkbox",hidden:""},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1),a("div",{attrs:{id:"zg-caption-user-text"}},[t._v("SSR Grid")])],1)],1),a("zg-head",{attrs:{slot:"gridhead",role:"rowgroup"},slot:"gridhead"},[a("zg-row",{attrs:{role:"row"}},[a("zg-head-cell",{staticStyle:{left:"0px","line-height":"40px",position:"absolute",width:"643px",height:"40px"},attrs:{cellindex:"0",role:"rowheader",depth:"1",type:"text",title:"Breed"}},[a("zg-icon",{staticClass:"zg-head-icon"}),a("div",{attrs:{"data-field-index":"breed"}},[a("span",[t._v("Breed")])])],1),a("zg-head-cell",{staticStyle:{left:"643px","line-height":"40px",position:"absolute",width:"619px",height:"40px"},attrs:{cellindex:"1",role:"rowheader",depth:"1",type:"text",title:"Name"}},[a("zg-icon",{staticClass:"zg-head-icon"}),a("div",{attrs:{"data-field-index":"name"}},[a("span",[t._v("Name")])])],1)],1)],1),a("zg-body",{attrs:{slot:"gridbody",role:"rowgroup"},slot:"gridbody"},[a("zg-row",{attrs:{role:"row"}},[a("zg-cell",{attrs:{role:"gridcell",value:"Chow Chow","data-field-index":"breed",type:"text",text:"Breed"}},[a("div",{attrs:{"data-field-index":"breed"}},[t._v("Chow Chow")])]),a("zg-cell",{attrs:{role:"gridcell",value:"Butter","data-field-index":"name",type:"text",text:"Name"}},[a("div",{attrs:{"data-field-index":"name"}},[t._v("Butter")])])],1),a("zg-row",{attrs:{role:"row"}},[a("zg-cell",{attrs:{role:"gridcell",value:"Dachshund","data-field-index":"breed",type:"text",text:"Breed"}},[a("div",{attrs:{"data-field-index":"breed"}},[t._v("Dachshund")])]),a("zg-cell",{attrs:{role:"gridcell",value:"Sousage","data-field-index":"name",type:"text",text:"Name"}},[a("div",{attrs:{"data-field-index":"name"}},[t._v("Sousage")])])],1),a("zg-row",{attrs:{role:"row"}},[a("zg-cell",{attrs:{role:"gridcell",value:"Pug","data-field-index":"breed",type:"text",text:"Breed"}},[a("div",{attrs:{"data-field-index":"breed"}},[t._v("Pug")])]),a("zg-cell",{attrs:{role:"gridcell",value:"Potat","data-field-index":"name",type:"text",text:"Name"}},[a("div",{attrs:{"data-field-index":"name"}},[t._v("Potat")])])],1),a("zg-row",{attrs:{role:"row"}},[a("zg-cell",{attrs:{role:"gridcell",value:"Corgi","data-field-index":"breed",type:"text",text:"Breed"}},[a("div",{attrs:{"data-field-index":"breed"}},[t._v("Corgi")])]),a("zg-cell",{attrs:{role:"gridcell",value:"Plop","data-field-index":"name",type:"text",text:"Name"}},[a("div",{attrs:{"data-field-index":"name"}},[t._v("Plop")])])],1),a("zg-row",{attrs:{role:"row"}},[a("zg-cell",{attrs:{role:"gridcell",value:"Pomeranian","data-field-index":"breed",type:"text",text:"Breed"}},[a("div",{attrs:{"data-field-index":"breed"}},[t._v("Pomeranian")])]),a("zg-cell",{attrs:{role:"gridcell",value:"Floof","data-field-index":"name",type:"text",text:"Name"}},[a("div",{attrs:{"data-field-index":"name"}},[t._v("Floof")])])],1)],1),a("zg-dialog",{attrs:{internal:""}}),a("zg-foot",{attrs:{slot:"gridfoot"},slot:"gridfoot"}),a("zg-footer",{attrs:{slot:"footer"},slot:"footer"}),a("zg-editor-row",{attrs:{slot:"editrow"},slot:"editrow"}),a("zg-status"),a("zg-load-mask",{attrs:{"default-load-mask":"",hidden:""}}),a("zg-menu",{attrs:{id:"columnMenu",hidden:""}},[a("zg-menuitem",[a("zg-button",{attrs:{action:"checkbox",tabindex:"0",hastext:""}},[t._v("Breed"),a("zg-icon",{attrs:{slot:"zgicon",name:"checkbox"},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--440084",viewBox:"0 0 24 24"},slot:"icon"})]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",checked:"",action:"checkbox"},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1)],1),a("zg-menuitem",[a("zg-button",{attrs:{action:"checkbox",tabindex:"0",hastext:""}},[t._v("Name"),a("zg-icon",{attrs:{slot:"zgicon",name:"checkbox"},slot:"zgicon"},[a("svg",{attrs:{slot:"icon",id:"svg--89984",viewBox:"0 0 24 24"},slot:"icon"})]),a("zg-checkbox",{attrs:{slot:"zgcheckbox",checked:"",action:"checkbox"},slot:"zgcheckbox"}),a("button",{attrs:{slot:"button",hidden:""},slot:"button"})],1)],1)],1)],1)],1)},staticRenderFns:[]};var G=a("VU/8")({},C,!1,function(t){a("T4Yj")},"data-v-2210255c",null).exports;n.a.use(i.a);var P=new i.a({routes:[{path:"/",name:"read-only",component:d},{path:"/attribute-change",name:"one-way-data-binding",component:h},{path:"/data-change",name:"two-way-data-binding",component:m},{path:"/ajax",name:"ajax",component:D},{path:"/ssr",name:"ssr",component:G},{path:"/methods",name:"methods",component:b},{path:"/events",name:"events",component:w}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:P,components:{App:r},template:"<App/>"})},T4Yj:function(t,e){},YlCc:function(t,e){},bUUV:function(t,e){},jQub:function(t,e){},lWns:function(t,e){},tLPf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a853ff1afde6d73e44c8.js.map