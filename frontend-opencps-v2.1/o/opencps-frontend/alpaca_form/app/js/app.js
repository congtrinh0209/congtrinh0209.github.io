(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)n=s[d],a[n]&&p.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);_&&_(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=o[0]))}return t}var r={},a={app:0},i=[];function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var _=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("1356"),a=o.n(r);a.a},1356:function(t,e,o){},4360:function(t,e){},"56d7":function(t,e,o){"use strict";o.r(e);o("0f18");var r=o("a026"),a=o("bb71");o("74ef");r["a"].use(a["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app_alpaca_form"}},[o("v-content",[o("router-view")],1),t.isMobile?o("go-top",{attrs:{size:42,"bg-color":"#0064c7"}}):t._e()],1)},n=[],s={data:function(){return{}},components:{},computed:{},beforeDestroy:function(){},mounted:function(){$("header").css("display","none !important"),$("nav").not(".v-toolbar").css("display","none !important"),$("footer").css("display","none !important"),$("body").removeClass("page-theme")},created:function(){$("header").css("display","none !important"),$("nav").not(".v-toolbar").css("display","none !important"),$("footer").css("display","none !important"),$("body").removeClass("page-theme")},watch:{$route:function(t,e){$("header").css("display","none !important"),$("nav").not(".v-toolbar").css("display","none !important"),$("footer").css("display","none !important"),$("body").removeClass("page-theme")}},methods:{}},c=s,l=(o("034f"),o("2877")),_=o("6544"),d=o.n(_),p=o("7496"),f=o("549c"),u=Object(l["a"])(c,i,n,!1,null,null,null),m=u.exports;d()(u,{VApp:p["a"],VContent:f["a"]});var v=o("8c4f"),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"form-script",class:t.fullScreenScript?"sm3":"sm6",attrs:{xs12:""}},[t.scriptShow?o("div",[o("v-toolbar",{staticClass:"toolbar-script",attrs:{flat:"",height:"36",dark:"",color:"#222"}},[o("v-btn",{staticClass:"mr-0",attrs:{icon:"",title:"Json viewer"},on:{click:function(e){t.formatScript(!0)}}},[o("v-icon",{class:"1"===t.formatS?"blue--text":"white--text",attrs:{size:"16"}},[t._v("format_align_right")])],1),o("v-btn",{staticClass:"ml-0",attrs:{icon:"",title:"String viewer"},on:{click:function(e){t.formatScript(!1)}}},[o("v-icon",{class:"-1"===t.formatS?"blue--text":"white--text",attrs:{size:"16"}},[t._v("format_align_left")])],1),o("v-toolbar-title",{staticClass:"white--text"},[t._v("Form script")]),o("v-spacer"),o("v-btn",{attrs:{round:"",dark:"",small:"",color:"blue"},on:{click:function(e){t.scriptShow=!1}}},[o("v-icon",{staticClass:"white--text",attrs:{size:"18"}},[t._v("swap_horiz")]),t._v("   Form Data\n          ")],1)],1),o("v-jsoneditor",{ref:"editorScript",staticClass:"content-script",attrs:{options:t.options,plus:!0,height:"100%"},on:{error:t.onError},model:{value:t.form_script,callback:function(e){t.form_script=e},expression:"form_script"}})],1):o("div",[o("v-toolbar",{staticClass:"toolbar-data",attrs:{flat:"",height:"36",dark:"",color:"#222"}},[o("v-btn",{staticClass:"mr-0",attrs:{icon:"",title:"Json viewer"},on:{click:function(e){t.formatData(!0)}}},[o("v-icon",{class:"1"===t.formatD?"blue--text":"white--text",attrs:{size:"16"}},[t._v("format_align_right")])],1),o("v-btn",{staticClass:"ml-0",attrs:{icon:"",title:"String viewer"},on:{click:function(e){t.formatData(!1)}}},[o("v-icon",{class:"-1"===t.formatD?"blue--text":"white--text",attrs:{size:"16"}},[t._v("format_align_left")])],1),o("v-toolbar-title",{staticClass:"white--text"},[t._v("Form data")]),o("v-spacer"),o("v-btn",{attrs:{round:"",dark:"",small:"",color:"blue"},on:{click:function(e){t.scriptShow=!0}}},[o("v-icon",{staticClass:"white--text",attrs:{size:"18"}},[t._v("swap_horiz")]),t._v("   Form Script\n          ")],1)],1),o("v-jsoneditor",{ref:"editorData",staticClass:"content-data",attrs:{options:t.options,plus:!0,height:"100%"},on:{error:t.onError},model:{value:t.form_data,callback:function(e){t.form_data=e},expression:"form_data"}})],1)]),o("v-flex",{staticClass:"form-report",class:t.fullScreenScript?"sm9":"sm6",attrs:{xs12:"",sm4:""}},[o("v-toolbar",{staticClass:"toolbar-report",attrs:{flat:"",height:"36",dark:"",color:"#222"}},[o("v-toolbar-title",{staticClass:"white--text"},[t._v("Form report")]),o("v-spacer"),o("v-btn",{attrs:{round:"",dark:"",small:"",color:"blue",loading:t.loading,disabled:t.loading},on:{click:t.viewForm}},[o("v-icon",{staticClass:"white--text",attrs:{size:"18"}},[t._v("description")]),t._v("   View form\n        ")],1),o("v-btn",{attrs:{round:"",dark:"",small:"",color:"green",loading:t.loading,disabled:t.loading},on:{click:t.viewPdf}},[o("v-icon",{staticClass:"white--text",attrs:{size:"16"}},[t._v("fa fa-file-pdf-o")]),t._v("   View pdf\n          "),o("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1),t.fullScreenScript?o("v-btn",{attrs:{icon:""},on:{click:function(e){t.fullScreenScript=!t.fullScreenScript}}},[o("v-icon",[t._v("zoom_out_map")])],1):o("v-btn",{attrs:{icon:""},on:{click:function(e){t.fullScreenScript=!t.fullScreenScript}}},[o("v-icon",[t._v("fullscreen_exit")])],1)],1),o("codemirror",{attrs:{options:t.cmOptions},model:{value:t.form_report,callback:function(e){t.form_report=e},expression:"form_report"}})],1)],1),o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("div",{staticClass:"mb-4"},[o("v-toolbar",{staticClass:"toolbar-script",attrs:{flat:"",height:"36",dark:"",color:"#1867c0"}},[o("v-toolbar-title",{staticClass:"white--text"},[t.viewFormInput?o("span",[t._v("Form input")]):o("span",[t._v("Form pdf")])]),o("v-spacer"),t.viewFormInput?o("v-btn",{staticClass:"mr-2",attrs:{round:"",dark:"",small:"",color:"green",loading:t.loading,disabled:t.loading},on:{click:function(e){t.viewPdf(t.form)}}},[o("v-icon",{staticClass:"white--text",attrs:{size:"16"}},[t._v("fa fa-file-pdf-o")]),t._v("   View pdf\n          "),o("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1):o("v-btn",{attrs:{round:"",dark:"",small:"",color:"blue",loading:t.loading,disabled:t.loading},on:{click:t.viewForm}},[o("v-icon",{staticClass:"white--text",attrs:{size:"18"}},[t._v("description")]),t._v("   View form\n        ")],1),o("v-btn",{attrs:{flat:"",small:"",color:"blue",icon:""},on:{click:t.closeDialog}},[o("v-icon",{staticClass:"white--text",attrs:{size:"28"}},[t._v("clear")])],1)],1),!0===t.viewFormInput?o("div",{attrs:{id:"formInput"}}):o("iframe",{staticStyle:{overflow:"auto",height:"100vh"},attrs:{id:"pdfPreview",src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)])],1)},h=[],g=o("e3ce"),b=g["a"],D=o("8336"),E=o("169a"),y=o("0e8f"),S=o("132d"),O=o("a722"),P=o("9910"),C=o("71d9"),x=o("2a7f"),k=Object(l["a"])(b,w,h,!1,null,null,null),M=k.exports;d()(k,{VBtn:D["a"],VDialog:E["a"],VFlex:y["a"],VIcon:S["a"],VLayout:O["a"],VSpacer:P["a"],VToolbar:C["a"],VToolbarTitle:x["a"]});var I=[{path:"/",name:"Landing",component:M,props:!0}];r["a"].use(v["a"]);var T=new v["a"]({routes:I}),L=T,A=o("4360"),U=o("967d"),R=o("bc3a"),F=o.n(R);r["a"].use(U["default"]);var B=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;F.a.defaults.withCredentials=!0,F.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",F.a.defaults.headers.common["groupId"]=B,r["a"].config.productionTip=!0,r["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new r["a"]({router:L,store:A["store"],created:function(){var t=this;t.$nextTick(function(){})},render:function(t){return t(m)}}).$mount("#app_alpaca_form")},"74ef":function(t,e,o){},e3ce:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026"),jquery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1157"),jquery__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__),v_jsoneditor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("dcf4"),v_jsoneditor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(v_jsoneditor__WEBPACK_IMPORTED_MODULE_2__),toastr__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("854a"),toastr__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__),vue_codemirror__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("8f94"),vue_codemirror__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_5__);vue__WEBPACK_IMPORTED_MODULE_0__["a"].use(toastr__WEBPACK_IMPORTED_MODULE_3___default.a),vue__WEBPACK_IMPORTED_MODULE_0__["a"].use(v_jsoneditor__WEBPACK_IMPORTED_MODULE_2___default.a),__webpack_exports__["a"]={props:[],components:{VJsoneditor:v_jsoneditor__WEBPACK_IMPORTED_MODULE_2___default.a,codemirror:vue_codemirror__WEBPACK_IMPORTED_MODULE_5__["codemirror"]},data:function(){return{loading:!1,scriptShow:!0,form_script:{Name:"trinhtc@fds.vn",Age:"28",Number:"200OK",FC:"FDS Corp",Position:"Midfielder","Attacking Prowess":"99","Defend Prowess":"75","Ball Winning":"98",Speed:"95",Agility:"100",Acceleration:"99",Response:"100"},form_data:{},form_report:"",formatS:0,formatD:0,fullScreenScript:!0,fullScreenData:!1,dialog:!1,viewFormInput:!0,options:{mode:"code"},cmOptions:{tabSize:4,mode:"text/javascript",theme:"base16-light",lineNumbers:!0,line:!0}}},computed:{},created:function(){var t=this;t.$nextTick(function(){})},updated:function(){var t=this;t.$nextTick(function(){})},watch:{$route:function(t,e){}},methods:{formatScript:function(t){var e=this;console.log("editorScript",e.$refs.editorScript),t?(e.formatS="1",e.$refs.editorScript.editor.format()):(e.formatS="-1",e.$refs.editorScript.editor.compact())},formatData:function(t){var e=this;t?(e.formatD="1",e.$refs.editorData.editor.format()):(e.formatD="-1",e.$refs.editorData.editor.compact())},viewForm:function viewForm(){var vm=this,formScript,formData;try{formScript=eval("("+vm.$refs.editorScript.editor.getText()+")")}catch(error){return formScript={},void console.log("formScript emty or error parse")}formData={};try{formScript.data=vm.$refs.editorData.editor.get(),vm.viewFormInput=!0,vm.dialog=!0,setTimeout(function(){window.$("#formInput").empty(),window.$("#formInput").alpaca(formScript)},200)}catch(error){formScript.data={},console.log("formData emty or error parse"),""===vm.$refs.editorData.editor.getText()&&(vm.viewFormInput=!0,vm.dialog=!0,setTimeout(function(){window.$("#formInput").empty(),window.$("#formInput").alpaca(formScript)},200))}},viewPdf:function(t){var e,o=this;if(""!==o.form_report){try{if(t){var r=window.$("#formInput").alpaca("get");e=r.getValue()}else e=o.$refs.editorData.editor.getText()?o.$refs.editorData.editor.get():{}}catch(n){if(o.$refs.editorData.editor.getText())return void console.log("formData error")}o.loading=!0;var a={headers:{groupId:window.themeDisplay?window.themeDisplay.getScopeGroupId():"","Content-Type":"application/x-www-form-urlencoded"},responseType:"blob"},i=new URLSearchParams;i.append("scriptStr",o.form_report),i.append("jsonDataStr",JSON.stringify(e)),axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/o/rest/v2/jaspers/preview",i,a).then(function(t){o.loading=!1,o.dialog=!0,o.viewFormInput=!1,console.log("respond create pdf",t.data);var e=t.data,r=window.URL.createObjectURL(e);setTimeout(function(){document.getElementById("pdfPreview").src=r},200)}).catch(function(t){o.loading=!1,o.dialog=!0,o.viewFormInput=!1,console.log("respond create pdf 2",t);var e=t.data,r=window.URL.createObjectURL(e);setTimeout(function(){document.getElementById("pdfPreview").src=r},200)})}},closeDialog:function(){var t=this;try{var e=window.$("#formInput").alpaca("get"),o=e.getValue();o&&(t.form_data=o)}catch(r){}t.dialog=!1},onError:function(){}}}}});
//# sourceMappingURL=app.js.map