webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7zck"),a("zlKd");var o=a("7+uW"),s=a("3EgV"),n=a.n(s),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("owCz")},null,null).exports,l=a("/ocq"),c=a("mvHQ"),d=a.n(c),u=a("mtWM"),v=a.n(u),p=a("gEea"),m=a.n(p);o.default.use(m.a);var h={props:[],components:{},data:function(){return{loading:!1,methods:[{name:"GET",value:"GET"},{name:"POST",value:"POST"},{name:"PUT",value:"PUT"},{name:"DELETE",value:"DELETE"}],method:"GET",urlRequest:"",showHistory:!1,showConfig:!1,showResult:!1,recordStorage:"",configItems:[{name:"HEADER",value:"HEADER"},{name:"PARAM",value:"PARAM"},{name:"DATA",value:"DATA"}],itemsTable:[],itemsTableSet:[],headersOption:[{name:"groupId",value:window.themeDisplay?window.themeDisplay.getScopeGroupId():""},{name:"Token",value:window.Liferay?window.Liferay.authToken:""}],paramOption:[],dataOption:[],configItem:"",editedIndex:"",editedItem:{name:"",value:""},jsonHeaders:"",jsonData:"",e1:!0,e2:!0,rules:{required:function(t){return!!t||"Trường dữ liệu bắt buộc"},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Địa chỉ Email không hợp lệ"},telNo:function(t){return/^(([0-9]{0,}))$/.test(t)||"Gồm các ký tự 0-9"},passWord:function(t){return/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])([0-9a-zA-Z@$!%*#?&]{8,}))$/.test(t)||"Ít nhất 8 ký tự và có chữ hoa, chữ thường, ký tự đặc biệt @$!%*#?&"}}}},computed:{},created:function(){this.$nextTick(function(){})},updated:function(){this.$nextTick(function(){})},watch:{itemsTable:function(){var t=this;"HEADER"===t.configItem?t.headersOption=t.itemsTable:"PARAM"===t.configItem?t.paramOption=t.itemsTable:"DATA"===t.configItems&&(t.dataOption=t.itemsTable)}},methods:{changeConfig:function(t,e){var a=this;a.configItem=t.name,"HEADER"===t.name?a.itemsTable=a.headersOption:"PARAM"===t.name?a.itemsTable=a.paramOption:a.itemsTable=a.dataOption,a.itemsTable&&a.itemsTable!==[]||(a.itemsTable=[{name:"key",value:"value"},{name:"key",value:"value"},{name:"key",value:"value"}]),a.showResult=!1,a.showHistory=!1,a.showConfig=!0},sendRequest:function(){var t=this;t.loading=!0,t.showConfig=!1,t.showResult=!1,t.showHistory=!1;var e={},a={},o=new URLSearchParams;for(var s in t.headersOption)t.headersOption[s].name&&"key"!==t.headersOption[s].name&&(e[t.headersOption[s].name]=t.headersOption[s].value);for(var n in t.paramOption)t.paramOption[n].name&&"key"!==t.paramOption[n].name&&(a[t.paramOption[n].name]=t.paramOption[n].value);for(var i in t.dataOption)t.dataOption[i].name&&"key"!==t.dataOption[i].name&&o.append(t.dataOption[i].name,t.dataOption[i].value);var r=t.urlRequest,l=t.method,c=e,d=a,u=o;v()({method:l,url:r,headers:c,params:d,data:u}).then(function(e){if(e){var a={General:{"Request URL":e.config.url,"Request Method":e.config.method,"Status Code":e.status},"Response Header":{"cache-control":e.headers["cache-control"],"content-type":e.headers["content-type"]},"Request Headers":e.config.headers};t.jsonHeaders=a}e.data&&(t.jsonData=e.data),setTimeout(function(){t.loading=!1,t.showConfig=!1,t.showHistory=!1,t.showResult=!0},2e3)}).catch(function(e){console.log("errorResponse",e.response);var a=e.response;if(a){var o={General:{"Request URL":a.config.url,"Request Method":a.config.method,"Status Code":a.status},"Response Header":{"content-type":a.headers["content-type"]},"Request Headers":a.config.headers};t.jsonHeaders=o}a.data&&(t.jsonData=a.data),setTimeout(function(){t.loading=!1,t.showConfig=!1,t.showHistory=!1,t.showResult=!0},2e3)})},addField:function(){this.itemsTable.push({name:"key",value:"value"})},deleteField:function(t){this.itemsTable.splice(t,1)},saveRequest:function(){var t=this,e=localStorage.length+1,a="cord_"+(new Date).getTime()+"_"+e,o={url:t.urlRequest,method:t.method,headersOption:t.headersOption,paramOption:t.paramOption,dataOption:t.dataOption,time:(new Date).getTime()};localStorage.setItem(a,d()(o))},showRecord:function(){var t=this;t.loading=!1,t.showConfig=!1,t.showResult=!1,t.showHistory=!0,t.recordStorage=[];for(var e=localStorage.length,a=0;a<e;a++)localStorage.key(a).indexOf("cord_")>=0&&t.recordStorage.push(JSON.parse(localStorage.getItem(localStorage.key(a))))},sendCord:function(t){var e=this;e.urlRequest=t.url,e.method=t.method,e.headersOption=t.headersOption,e.paramOption=t.paramOption,e.dataOption=t.dataOption,setTimeout(function(){e.sendRequest()},1e3)},removeCord:function(t,e){this.recordStorage.splice(e,1),localStorage.removeItem(localStorage.key(e))},dateTimeView:function(t){if(t){var e=new Date(Number(t));return e.getDate().toString().padStart(2,"0")+"/"+(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getFullYear()+"-"+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}return""}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-2 my-0 container"},[a("v-btn",{staticClass:"mx-0 my-0",staticStyle:{position:"absolute",top:"2px",right:"2px","z-index":"501"},attrs:{icon:"",color:"#f19d27",title:"Save request"},on:{click:t.saveRequest}},[a("v-icon",{attrs:{color:"white",size:"18px"}},[t._v("bookmark")])],1),t._v(" "),a("v-layout",{staticClass:"px-2 py-4",attrs:{wrap:""}},[a("v-card",{staticStyle:{"background-color":"transparent"},attrs:{flat:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticStyle:{width:"100%"}},[a("v-layout",{attrs:{wrap:""}},[a("v-autocomplete",{staticClass:"mx-2 methods-select",attrs:{box:"",label:"methods",items:t.methods,"item-value":"value","item-text":"name"},model:{value:t.method,callback:function(e){t.method=e},expression:"method"}}),t._v(" "),a("v-text-field",{staticClass:"mx-2",attrs:{box:"",label:"url",clearable:""},model:{value:t.urlRequest,callback:function(e){t.urlRequest=e},expression:"urlRequest"}})],1)],1),t._v(" "),a("v-flex",{staticClass:"text-xs-right"},[a("div",{staticClass:"d-inline-block"},[a("v-btn",{staticClass:"white--text",attrs:{small:"",color:"#e67e22"},on:{click:t.showRecord}},[t._v("\n              Saved  \n              "),a("v-icon",{attrs:{size:"18"}},[t._v("save")])],1),t._v(" "),a("v-menu",{attrs:{right:""}},[a("v-btn",{staticClass:"white--text",attrs:{slot:"activator",small:"",color:"#e67e22"},slot:"activator"},[t._v("Config  \n                "),a("v-icon",{attrs:{size:"18"}},[t._v("settings")])],1),t._v(" "),a("v-list",t._l(t.configItems,function(e,o){return a("v-list-tile",{key:o,on:{click:function(a){t.changeConfig(e,o)}}},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)}),1)],1),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{small:"",color:"blue"},on:{click:t.sendRequest}},[t._v("\n              Send  \n              "),a("v-icon",{attrs:{size:"18"}},[t._v("send")])],1)],1)]),t._v(" "),t.loading?a("v-flex",{staticClass:"my-4",staticStyle:{width:"100%"}},[a("v-progress-circular",{staticClass:"mt-2",attrs:{size:50,color:"white",indeterminate:""}})],1):t._e(),t._v(" "),t.showConfig?a("v-flex",{staticClass:"wrap-config mt-2 py-2"},[a("div",[a("v-flex",{staticClass:"text-xs-right"},["HEADER"===t.configItem?a("span",{staticClass:"text-bold"},[t._v("Header option")]):t._e(),t._v(" "),"PARAM"===t.configItem?a("span",{staticClass:"text-bold"},[t._v("Params option")]):t._e(),t._v(" "),"DATA"===t.configItem?a("span",{staticClass:"text-bold"},[t._v("Data option")]):t._e(),t._v(" "),a("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(e){t.addField()}},slot:"activator"},[a("v-icon",{attrs:{color:"white",size:"22px"}},[t._v("add")])],1)],1),t._v(" "),a("v-data-table",{staticClass:"elevation-1 mx-2 mt-2",attrs:{"hide-actions":"","hide-headers":"",items:t.itemsTable,"no-data-text":"No data"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticStyle:{"border-right":"1px solid #dedede",width:"100px"}},[a("v-edit-dialog",{attrs:{lazy:""}},[t._v(" "+t._s(e.item.name)+"\n                    "),a("v-text-field",{attrs:{slot:"input",label:"Edit","single-line":"",clearable:""},slot:"input",model:{value:e.item.name,callback:function(a){t.$set(e.item,"name",a)},expression:"props.item.name"}})],1)],1),t._v(" "),a("td",[a("v-edit-dialog",{attrs:{lazy:""}},[t._v(" "+t._s(e.item.value)+"\n                    "),a("v-text-field",{attrs:{slot:"input",label:"Edit","single-line":"",clearable:""},slot:"input",model:{value:e.item.value,callback:function(a){t.$set(e.item,"value",a)},expression:"props.item.value"}})],1)],1),t._v(" "),a("v-btn",{staticStyle:{position:"absolute",right:"5px"},attrs:{slot:"activator",icon:""},on:{click:function(a){t.deleteField(e.index)}},slot:"activator"},[a("v-icon",{attrs:{color:"red",size:"22px"}},[t._v("clear")])],1)]}}])})],1)]):t._e(),t._v(" "),t.showResult?a("v-flex",{staticClass:"mt-2 wrap-result"},[a("div",[a("v-tabs",{attrs:{"slider-color":"blue"}},[a("v-tab",{key:1,attrs:{ripple:""}},[t._v("\n                Headers\n              ")]),t._v(" "),a("v-tab",{key:2,attrs:{ripple:""}},[t._v("\n                Preview\n              ")]),t._v(" "),a("v-tab",{key:3,attrs:{ripple:""}},[t._v("\n                Response\n              ")]),t._v(" "),a("v-tab-item",{key:1},[a("v-card",{attrs:{flat:""}},[a("json-viewer",{attrs:{value:t.jsonHeaders,"expand-depth":2,copyable:"",boxed:""}})],1)],1),t._v(" "),a("v-tab-item",{key:2},[a("v-card",{attrs:{flat:""}},[a("json-viewer",{attrs:{value:t.jsonData,"expand-depth":2,copyable:"",boxed:""}})],1)],1),t._v(" "),a("v-tab-item",{key:3},[a("div",{staticClass:"px-2 py-2 reponse-item"},[a("span",[t._v(t._s(JSON.stringify(t.jsonData)))])])])],1)],1)]):t._e(),t._v(" "),t.showHistory?a("v-flex",{staticClass:"mt-2 wrap-history"},t._l(t.recordStorage,function(e,o){return a("v-layout",{key:o,staticClass:"py-1",attrs:{wrap:""}},[a("v-flex",{staticClass:"pt-2 cord-time"},[a("span",{staticClass:"text-bold"},[t._v(t._s(t.dateTimeView(e.time)))])]),t._v(" "),a("v-flex",{staticClass:"pt-2 cord-url"},[a("v-tooltip",{attrs:{top:""}},[a("span",{staticStyle:{color:"blue"},attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(e.url))]),t._v(" "),a("span",[t._v(t._s(e.url))])])],1),t._v(" "),a("v-flex",{staticClass:"cord-action"},[a("v-icon",{attrs:{color:"green",title:"send"},on:{click:function(a){t.sendCord(e)}}},[t._v("play_arrow")]),t._v(" "),a("v-icon",{staticClass:"ml-2",attrs:{color:"red",title:"clear"},on:{click:function(a){t.removeCord(e,o)}}},[t._v("clear")])],1)],1)}),1):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(h,f,!1,function(t){a("u3bE")},null,null).exports;o.default.use(l.a);var _=new l.a({routes:[{path:"/",name:"MainContent",component:g}]});o.default.config.productionTip=!1,o.default.use(n.a),new o.default({el:"#app",router:_,components:{App:r},template:"<App/>"})},owCz:function(t,e){},u3bE:function(t,e){},zlKd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cf24959c8515c759628f.js.map