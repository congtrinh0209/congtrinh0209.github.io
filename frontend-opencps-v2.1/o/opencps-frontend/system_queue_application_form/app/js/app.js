(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],p=0,u=[];p<s.length;p++)r=s[p],o[r]&&u.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={app:0},n=[];function r(t){return s.p+"../../docs/o/opencps-frontend-cli/system_queue_application_form/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=o[t]=[e,i]});e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t),n=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=o[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,a[1](r)}o[t]=void 0}};var l=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("1356"),o=a.n(i);o.a},1356:function(t,e,a){},"3f9f":function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026"),jquery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1157"),jquery__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__),toastr__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("854a"),toastr__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),_store_support_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("bbd0"),_store_support_json__WEBPACK_IMPORTED_MODULE_4___namespace=__webpack_require__.t("bbd0",1);vue__WEBPACK_IMPORTED_MODULE_0__["a"].use(toastr__WEBPACK_IMPORTED_MODULE_2___default.a),__webpack_exports__["a"]={props:[],components:{},data:function(){return{serviceInfoList:[],eformNoSearch:""}},computed:{serviceinfoSelected:function(){return this.$store.getters.getServiceinfoSelected},formScriptEform:function(){return this.$store.getters.getFormScriptEform},formDataEform:function(){return this.$store.getters.getFormDataEform},fileTemplateSelected:function(){return this.$store.getters.getFileTemplateSelected}},created:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current;e.query})},updated:function(){var t=this;t.$nextTick(function(){})},watch:{$route:function(t,e){t.params,t.query},formScriptEform:function formScriptEform(valFormScript){var vm=this,formScript,formData;window.$("#formAlpacaEform").empty(),formScript=valFormScript?eval("("+valFormScript+")"):{},formData={},formScript.data=formData,window.$("#formAlpacaEform").alpaca(formScript)}},methods:{filterEform:function(){},postEform:function(){var t=this,e={headers:{groupId:window.themeDisplay?window.themeDisplay.getScopeGroupId():""}};try{var a=window.$("#formAlpacaEform").alpaca("get"),i=a.getValue();console.log("formData post",i);var o=window.$("#formAlpacaEform").alpaca("get").childrenByPropertyId;if(o)for(var n in o)if(o[n].isRequired()&&""===o[n].getValue())return toastr__WEBPACK_IMPORTED_MODULE_2___default.a.clear(),void toastr__WEBPACK_IMPORTED_MODULE_2___default.a.error(o[n].options.placeholder?o[n].options.placeholder+" là trường dữ liệu bắt buộc":o[n].options["name"]+" là trường dữ liệu bắt buộc");var r=new URLSearchParams;r.append("eFormData",JSON.stringify(i)),r.append("serviceInfoId",t.serviceinfoSelected.serviceInfoId),r.append("fileTemplateNo",t.fileTemplateSelected.fileTemplateNo),r.append("email",""),axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/o/rest/v2/eforms",r,e).then(function(t){}).catch(function(t){})}catch(s){}},deleteAlpacaForm:function(){}}}},"56d7":function(t,e,a){"use strict";a.r(e);a("0f18");var i=a("a026"),o=a("bb71");a("74ef");i["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{border:"1px solid #dedede","border-top":"0","max-width":"1300px",margin:"0 auto"},attrs:{id:"app_application_form"}},[a("v-content",[a("router-view")],1)],1)},r=[],s=a("49ec"),c=a.n(s),l={data:function(){return{active:null,activeAll:!1,activeTab:0,activeService:"",pathRouter:"/thu-tuc-hanh-chinh",currentAgency:"",currentDomain:"",currentLevel:"",currentMethod:"",countAllService:0,isDetail:!1,text:"",menuServiceInfos:[{id:1,name:"Thủ tục nhóm 1",code:"13213",count:2,children:[]},{id:2,name:"Thủ tục nhóm 2",code:"132113",count:2,children:[]},{id:3,name:"Thủ tục nhóm 3",code:"1321313",count:2,children:[]},{id:4,name:"Thủ tục nhóm 4",code:"132413",count:2,children:[]}],serviceInfoList:[]}},components:{GoTop:c.a},computed:{},created:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current;e.query})},watch:{$route:function(t,e){t.params,t.query}},methods:{doLoadingThuTuc:function(){var t=this;t.serviceInfoList=[],t.loading=!0;var e=t.$router.history.current.query,a=null;a={page:e.page?e.page:1},t.$store.dispatch("getServiceLists",a).then(function(e){t.loading=!1,e.data?(t.serviceInfoList=e.data,t.totalThuTuc=e.total,t.menuServiceInfos[0]["children"]=[t.serviceInfoList[0],t.serviceInfoList[1]],t.menuServiceInfos[1]["children"]=[t.serviceInfoList[2],t.serviceInfoList[3]],t.menuServiceInfos[2]["children"]=[t.serviceInfoList[4],t.serviceInfoList[5]],t.menuServiceInfos[3]["children"]=[t.serviceInfoList[6],t.serviceInfoList[7]]):(t.totalThuTuc=0,t.serviceInfoList=[]),t.serviceItemTotal=e.total}).catch(function(e){t.loading=!1,t.serviceInfoList=[]})},getEformServiceInfo:function(t,e){var a=this;a.activeService=e.serviceInfoId,a.$store.commit("setServiceinfoSelected",e),a.$store.dispatch("getFileTemplateEform",e).then(function(t){if(t.data){var i=Object.assign({},t.data[0],{serviceInfoId:e.serviceInfoId});a.$store.commit("setFileTemplateSelected",i),a.$store.dispatch("loadFormScript",i).then(function(t){a.$store.commit("setFormScriptEform",t),t&&setTimeout(function(){var t=$("#formAlpacaEform").offset().top+100,e=$("#eform-btn").offset().left;$(window).scroll(function(){$(window).scrollTop()>t?$("#eform-btn").css({position:"fixed",top:0,left:"".concat(e,"px")}):$("#eform-btn").css({position:"relative",top:0,left:0})})},300),a.$store.dispatch("loadFormData",i).then(function(t){})})}})},goBack:function(){window.history.back()}}},p=l,d=(a("034f"),a("2877")),u=a("6544"),f=a.n(u),m=a("7496"),v=a("549c"),_=Object(d["a"])(p,n,r,!1,null,null,null),h=_.exports;f()(_,{VApp:m["a"],VContent:v["a"]});var g=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  13123\n")])},x=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-chitiet"},[a("div",[a("v-tabs",{attrs:{"icons-and-text":""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tabs-slider",{attrs:{color:"primary"}}),a("v-tab",{key:1,attrs:{href:"#tabs-1"},on:{click:function(e){t.getNextActions()}}},[a("v-btn",{staticClass:"px-0 py-0 mx-0 my-0",attrs:{flat:""}},[3===t.originality?a("span",[t._v("XỬ LÝ HỒ SƠ")]):a("span",[t._v("CHUẨN BỊ HỒ SƠ")])])],1),a("v-tabs-items",{staticStyle:{overflow:"visible!important"},attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tab-item",{key:1,attrs:{value:"tabs-1","reverse-transition":"fade-transition",transition:"fade-transition"}},[0!==t.checkInput&&t.filterNextActionEnable(t.btnDossierDynamics)?a("div",{staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0]}},[a("v-expansion-panel-content",{key:1,attrs:{"hide-actions":""}},[t._v("\n                123\n              ")])],1)],1):t._e(),t.btnStateVisible?a("div",{staticClass:"px-4 py-3",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t._l(t.btnPlugins,function(e,i){return a("v-btn",{key:i,staticClass:"ml-0 mr-2",attrs:{color:"primary",loading:t.loadingPlugin,disabled:t.loadingPlugin},nativeOn:{click:function(a){t.processPullBtnplugin(e,i)}}},[t._v("\n              "+t._s(e.pluginName)+"\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])}),t.btnStepsDynamics.length>0&&t.thongTinChiTietHoSo["permission"].indexOf("write")>=0?a("v-menu",{staticStyle:{display:"inline-block",position:"relative !important"},attrs:{bottom:"","offset-y":""}},[a("v-btn",{staticClass:"deactive__btn",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Khác   "),a("v-icon",{attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),a("v-list",t._l(t.btnStepsDynamics,function(e,i){return a("v-list-tile",{key:i,on:{click:function(a){t.btnActionEvent(e,i)}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)}),1)],1):t._e()],2):t._e()])],1)],1)],1)])},w=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[t._l(t.dossierTemplateItems,function(e,i){return t.partTypes.includes(e.partType)&&t.checkVisibleTemp(e,i)?a("div",{key:e.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expaned__list__data",attrs:{expand:"",value:[t.currentFormView==="formAlpaca"+e.partNo+t.id]}},[a("v-expansion-panel-content",{attrs:{"hide-actions":""}},[a("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(e){t.stateView=!1}},slot:"header"},[a("div",{staticStyle:{"align-items":"center",background:"#fff","padding-left":"25px"},style:{width:t.checkStyle(e)}},[a("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex"},on:{click:function(a){t.onlyView&&e.hasForm?t.viewFile2(e):t.loadAlpcaForm(e)}}},[a("div",{staticClass:"header__tphs"},[a("span",{staticClass:"text-bold"},[t._v(t._s(i+1)+".")]),t._v("  ")]),a("div",{staticClass:"header__tphs"},[a("v-tooltip",{staticStyle:{"max-width":"100% !important"},attrs:{top:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                      "+t._s(e.partName)+"  \n                      "),e.required?a("span",{staticStyle:{color:"red"}},[t._v(" (*) ")]):t._e(),t._v("\n                        \n                    ")]),e.partTip["tip"]?a("span",[t._v(t._s(e.partTip["tip"]))]):t._e()]),e.hasForm&&e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Đã khai)")])]):t._e(),e.hasForm&&!e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Chưa khai)")])]):t._e(),t._v("\n                    \n                  "),!e.hasForm&&e.hasFileTemp?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(a){a.stopPropagation(),t.downloadFileTemplate(e,i)}},slot:"activator"},[t._v("save_alt")]),a("span",[t._v("Biểu mẫu điền thủ công")])],1):t._e()],1)]),a("div",{staticStyle:{display:"flex"}},[1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(t){return!!t||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.changeFileComment(e,i)}},model:{value:e.fileComment,callback:function(a){t.$set(e,"fileComment",a)},expression:"item.fileComment"}}):t._e(),1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){a.stopPropagation(),t.changeFileComment(e,i)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("send")])],1),a("span",[t._v("Gửi")])],1):t._e()],1),e.fileComment&&!e.stateEditFileCheck?a("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[t._v(t._s(e.fileComment))]):t._e(),e.fileComment&&!e.stateEditFileCheck&&1===t.checkInput?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(t){t.stopPropagation(),e.stateEditFileCheck=!e.stateEditFileCheck}},slot:"activator"},[t._v("edit")]),a("span",[t._v("Chỉnh sửa ý kiến")])],1):t._e(),t._l(t.dossierFilesItems,function(i,o){return e.partNo!==i.dossierPartNo||i.eForm?t._e():a("div",{key:o},[a("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.viewFile2(i)}}},[0!==i.fileSize?a("v-icon",[t._v("attach_file")]):t._e(),t._v("\n                    "+t._s(i.displayName)+" - \n                    "),a("i",[t._v(t._s(i.modifiedDate))])],1),t.onlyView||1===t.checkInput?t._e():a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(e){e.stopPropagation(),t.deleteSingleFile(i,o)}}},[a("v-icon",{staticStyle:{color:"red"}},[t._v("delete_outline")])],1)],1)])}),a("div",{staticClass:"mr-3 my-1 py-2",staticStyle:{display:"none",border:"1px solid #f3ae75"},attrs:{id:"fileApplicant-"+e.partNo}},t._l(t.dossierFilesApplicant,function(i,o){return i.dossierTemplateNo===t.thongTinHoSo["dossierTemplateNo"]&&e.partNo===i.dossierPartNo?a("div",{key:o},[i.eForm?a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[a("i",{staticClass:"ml-1 fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"}}),t._v("  \n                        "+t._s(i.referenceUid)+"."+t._s(i.fileType)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])]),a("span",[t._v("Bản khai trực tuyến")])])],1):a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[0!==i.fileSize?a("v-icon",{staticStyle:{color:"#0d71bb"}},[t._v("attach_file")]):t._e(),t._v("\n                        "+t._s(i.displayName)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])],1),a("span",[t._v("Đính kèm")])])],1)]):t._e()}),0)],2)]),e.hasForm&&!t.onlyView?a("v-card",[a("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[a("v-layout",{attrs:{wrap:""}},[t.stateView?t._e():a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("div",{style:t.pstFixed>t.pstEl&&t.pstFixed<t.endEl+t.pstEl?"position:fixed;top:5px;z-index:101":"",attrs:{id:"wrapForm"+e.partNo+t.id}},[e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.saveAlpacaForm(e,i)}}},[t._v("Lưu lại")]):t._e(),e.daKhai&&e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.deleteSingleFileEform(e,i)}}},[t._v("Xóa")]):t._e(),e.daKhai&&e.hasForm?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.previewFileEfom(e,i)}}},[t._v("In")]):t._e()],1),!t.onlyView||e.daKhai?a("div",{class:{no_acction__event:t.onlyView},attrs:{id:"formAlpaca"+e.partNo+t.id}}):t._e()])],1)],1)],1):t._e()],1)],1),a("div",{staticClass:"absolute__btn group__thanh_phan mr-1"},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("v-layout",{attrs:{row:"",wrap:""}},[1===t.originality||1!==e.partType||t.thongTinHoSo.online||1===t.checkInput?t._e():a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[a("v-select",{attrs:{items:t.fileMarkItems,disabled:t.onlyView},on:{change:function(e){t.changeFileMark(e,i)}},model:{value:t.dossierTemplateItems[i].fileMark,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileMark",e)},expression:"dossierTemplateItems[index].fileMark"}})],1),1===t.checkInput?a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[a("v-select",{attrs:{items:t.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(e){t.changeFileCheck(e,i)}},model:{value:t.dossierTemplateItems[i].fileCheck,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileCheck",e)},expression:"dossierTemplateItems[index].fileCheck"}})],1):e.fileCheck>0?a("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":t.thongTinHoSo.online?"10px":"0px"}},[1===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("done")]),a("span",[t._v("Đạt")])],1):2===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("close")]),a("span",[t._v("Không đạt")])],1):t._e()],1):t._e(),1!==t.checkInput?a("v-flex",{class:{"text-xs-right":t.onlyView},style:{width:t.onlyView?"auto":"90px"}},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+e.partNo},on:{change:function(a){t.onUploadSingleFile(a,e,i)}}}),3!==e.partType||3!==t.originality||t.onlyView?t._e():a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.addFileOther(e)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("add")])],1),a("span",[t._v("Thêm giấy tờ khác")])],1),t.progressUploadPart===e.partNo?a("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):t.progressUploadPart===e.partNo||t.onlyView?t._e():a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.pickFile(e)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("cloud_upload")])],1)],1),e.partTip["extensions"]||e.partTip["maxSize"]?a("span",[t._v("Chấp nhận tải lên các định dạng: "+t._s(e.partTip["extensions"])+". Tối đa "+t._s(e.partTip["maxSize"])+" MB ")]):a("span",[t._v("Tải file lên")])],1),t.partNoApplicantHasFile(e.partNo)&&!t.onlyView?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.showFilesApplicant(e.partNo)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"orange darken-3"}},[t._v("warning")])],1)],1),a("span",[t._v("Giấy tờ đã nộp")])],1):t._e()],1):t._e()],1)],1)],1):t._e()}),t.partTypes.includes(2)?t._e():a("div",[a("v-layout",{staticClass:"mx-4",attrs:{wrap:""}},[!t.onlyView||t.onlyView&&t.applicantNoteDossier?a("v-flex",{staticClass:"my-0 py-2 text-bold",staticStyle:{width:"60px"}},[t._v("Ghi chú:")]):t._e(),a("v-flex",{staticStyle:{width:"calc(100% - 80px)"}},[t.onlyView?t._e():a("div",{staticClass:"pl-2"},[a("v-text-field",{staticClass:"py-0",attrs:{"multi-line":"",rows:"3"},on:{input:t.changeApplicantNote},model:{value:t.applicantNoteDossier,callback:function(e){t.applicantNoteDossier=e},expression:"applicantNoteDossier"}})],1),t.onlyView&&t.applicantNoteDossier?a("p",{staticClass:"my-0 py-2"},[t._v("\n            "+t._s(t.applicantNoteDossier)+" \n          ")]):t._e()])],1)],1),a("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:t.dialogAddOtherTemp,callback:function(e){t.dialogAddOtherTemp=e},expression:"dialogAddOtherTemp"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticClass:"headline"},[t._v("Tên giấy tờ")]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[a("v-icon",[t._v("clear")])],1),t.loadingAddOther?a("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):t._e(),a("v-card-text",{staticClass:"pb-0 pt-4"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"px-2 pb-3 fix__label",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(t){return!!t||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:t.otherDossierTemplate,callback:function(e){t.otherDossierTemplate=e},expression:"otherDossierTemplate"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[t._v("\n              Quay lại\n            ")]),a("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loadingAddOther},nativeOn:{click:function(e){return t.addOtherTemplate(e)}}},[t._v("\n              Đồng ý\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])],1)],1)],1)],1)],2),a("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:t.dialogPDF,callback:function(e){t.dialogPDF=e},expression:"dialogPDF"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t.pdfEform?a("span",[t._v("Bản khai trực tuyến")]):a("span",[t._v("File đính kèm")])]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogPDF=!1}}},[a("v-icon",[t._v("clear")])],1),t.dialogPDFLoading?a("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):t._e(),a("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+t.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},T=[],k={data:function(){return{}}},C=k,I=a("4ca6"),E=a("8336"),D=a("b0af"),F=a("99d9"),L=a("12b2"),P=a("169a"),V=a("cd55"),O=a("49e2"),N=a("0e8f"),A=a("4bd4"),M=a("132d"),B=a("a722"),R=a("490a"),q=a("8e36"),U=a("b56d"),j=a("9910"),z=a("2677"),K=a("3a2f"),H=Object(d["a"])(C,S,T,!1,null,null,null),W=H.exports;f()(H,{VBadge:I["a"],VBtn:E["a"],VCard:D["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:L["a"],VDialog:P["a"],VExpansionPanel:V["a"],VExpansionPanelContent:O["a"],VFlex:N["a"],VForm:A["a"],VIcon:M["a"],VLayout:B["a"],VProgressCircular:R["a"],VProgressLinear:q["a"],VSelect:U["a"],VSpacer:j["a"],VTextField:z["a"],VTooltip:K["a"]});var G={props:["index","id"],components:{"thanh-phan-ho-so":W},data:function(){return{}}},J=G,X=a("8860"),Y=a("ba95"),Q=a("5d23"),Z=a("e449"),tt=a("71a3"),et=a("c671"),at=a("fe57"),it=a("aac8"),ot=a("9a96"),nt=Object(d["a"])(J,b,w,!1,null,null,null),rt=nt.exports;f()(nt,{VBtn:E["a"],VExpansionPanel:V["a"],VExpansionPanelContent:O["a"],VIcon:M["a"],VList:X["a"],VListTile:Y["a"],VListTileTitle:Q["b"],VMenu:Z["a"],VTab:tt["a"],VTabItem:et["a"],VTabs:at["a"],VTabsItems:it["a"],VTabsSlider:ot["a"]});var st={props:["id","formCode"],components:{"xem-chi-tiet-ho-so-detail-can-bo":rt},data:function(){return{initData:null,step:""}}},ct=st,lt=Object(d["a"])(ct,y,x,!1,null,null,null),pt=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},ut=[],ft={},mt=ft,vt=a("a523"),_t=Object(d["a"])(mt,dt,ut,!1,null,null,null),ht=_t.exports;f()(_t,{VContainer:vt["a"],VFlex:N["a"],VLayout:B["a"],VProgressCircular:R["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row-header no__hidden_class"},[t._m(0),a("div",{staticClass:"layout row wrap header_tools row-blue"},[a("div",{staticClass:"flex pl-3 text-ellipsis text-bold",staticStyle:{position:"relative"}},[a("v-text-field",{attrs:{placeholder:"Tìm kiếm tờ khai đã tạo theo mã",solo:"",chips:"",multiple:"","deletable-chips":"","item-value":"eFormNo","item-text":"eFormName","content-class":"adv__search__select","return-object":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterEform(e):null}},model:{value:t.eformNoSearch,callback:function(e){t.eformNoSearch=e},expression:"eformNoSearch"}})],1),a("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto","max-width":"50px"}},[a("v-btn",{staticClass:"my-0 mx-2",attrs:{icon:""},nativeOn:{click:function(e){return t.filterEform(e)}}},[a("v-icon",{attrs:{size:"16"}},[t._v("search")])],1)],1)])]),a("v-card",{staticClass:"mt-3"},[a("v-card-text",{staticClass:"grey lighten-3 px-0 py-0"},[a("v-expansion-panel",{staticClass:"expand__select__domain",attrs:{expand:""},model:{value:t.panelServiceList,callback:function(e){t.panelServiceList=e},expression:"panelServiceList"}},t._l(t.serviceInfoListRender,function(e,i){return a("v-expansion-panel-content",{key:i,staticClass:"blue darken-3",attrs:{value:!0}},[a("div",{staticClass:"text-bold blue--text",staticStyle:{"margin-left":"14px"},attrs:{slot:"header"},slot:"header"},[a("v-icon",{staticClass:"pr-2",attrs:{color:"blue"}},[t._v("navigate_next")]),a("span",{staticStyle:{position:"absolute","margin-top":"1px"}},[t._v(t._s(e.serviceCode)+"  - "+t._s(e.serviceName)+" ")])],1),a("v-card",t._l(e.templateList,function(i,o){return a("v-card-text",{key:o,staticClass:"card__text__gov"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pt-1",attrs:{xs12:"",sm10:""}},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(o+1)+".")]),t._v("  \n                  "),a("span",[t._v(t._s(i.templateName))])]),a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[a("v-menu",{attrs:{left:"","offset-x":""}},[a("v-btn",{staticClass:"mx-0 my-0 white--text",attrs:{slot:"activator",color:"primary",small:""},on:{click:function(a){t.selectTemplate(o,i,e)}},slot:"activator"},[t._v("\n                      Chọn\n                    ")])],1)],1)],1)],1)}),1)],1)}),1)],1)],1)],1)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-triangle-big"},[a("span",[t._v("DANH SÁCH MẪU TỜ KHAI TRỰC TUYẾN")])])}],xt=(a("1157"),a("854a")),bt=a.n(xt),wt=a("bc3a"),St=a.n(wt);a("bbd0");i["a"].use(bt.a);var Tt={props:[],components:{},data:function(){return{serviceInfoList:[],eformNoSearch:"",panelServiceList:[]}},computed:{serviceinfoSelected:function(){return this.$store.getters.getServiceinfoSelected},formScriptEform:function(){return this.$store.getters.getFormScriptEform},formDataEform:function(){return this.$store.getters.getFormDataEform},fileTemplateSelected:function(){return this.$store.getters.getFileTemplateSelected},serviceInfoListRender:function(){console.log("serviceInfoList",this.serviceInfoList);var t=this.serviceInfoList.filter(function(t){return t.templateList});return console.log("serviceInfoListRender",t),t}},created:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current;e.query;t.doLoadingThuTuc()})},updated:function(){var t=this;t.$nextTick(function(){})},watch:{$route:function(t,e){t.params,t.query}},methods:{doLoadingThuTuc:function(){var t=this;t.serviceInfoList=[],t.loading=!0;var e=t.$router.history.current.query,a=null;a={page:e.page?e.page:1},t.$store.dispatch("getServiceLists",a).then(function(e){if(t.loading=!1,e.data)for(var a in t.serviceInfoList=e.data,t.serviceInfoList)t.getFileTemplate(a,t.serviceInfoList[a]),t.panelServiceList.push[!0];else t.serviceInfoList=[]}).catch(function(e){t.loading=!1,t.serviceInfoList=[]})},getFileTemplate:function(t,e){var a=this;a.$store.dispatch("getFileTemplateEform",e).then(function(e){e.data&&(a.serviceInfoList[t].templateList=e.data)})},selectTemplate:function(){},goBack:function(){window.history.back()}}},kt=Tt,Ct=Object(d["a"])(kt,gt,yt,!1,null,null,null),It=Ct.exports;f()(Ct,{VBtn:E["a"],VCard:D["a"],VCardText:F["b"],VExpansionPanel:V["a"],VExpansionPanelContent:O["a"],VFlex:N["a"],VIcon:M["a"],VLayout:B["a"],VMenu:Z["a"],VTextField:z["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row-header no__hidden_class"},[t._m(0),a("div",{staticClass:"layout row wrap header_tools row-blue"},[a("div",{staticClass:"flex pl-3 text-ellipsis text-bold",staticStyle:{position:"relative"}},[a("v-text-field",{attrs:{placeholder:"Tìm kiếm tờ khai theo mã",solo:"",chips:"",multiple:"","deletable-chips":"","item-value":"eFormNo","item-text":"eFormName","content-class":"adv__search__select","return-object":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterEform(e):null}},model:{value:t.eformNoSearch,callback:function(e){t.eformNoSearch=e},expression:"eformNoSearch"}})],1),a("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto","max-width":"50px"}},[a("v-btn",{staticClass:"my-0 mx-2",attrs:{icon:""},nativeOn:{click:function(e){return t.filterEform(e)}}},[a("v-icon",{attrs:{size:"16"}},[t._v("search")])],1)],1)])]),a("div",[t.serviceinfoSelected?a("v-card",{attrs:{flat:"",color:"#fff"}},[a("h3",{staticClass:"py-3 pl-3",staticStyle:{color:"#036edb"}},[t._v(t._s(t.serviceinfoSelected.serviceName))]),a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-3",attrs:{id:"eform-btn",color:"primary"},on:{click:function(e){e.stopPropagation(),t.postEform()}}},[a("v-icon",{attrs:{color:"white"}},[t._v("save")]),t._v(" \n          Tạo tờ khai\n        ")],1)],1),a("div",{staticClass:"mb-5",attrs:{id:"formAlpacaEform"}})],1):a("div",{staticClass:"pt-5 text-xs-center"},[a("h2",{staticClass:"mb-3",staticStyle:{opacity:"0.2","font-style":"italic"}},[t._v("Vui lòng chọn thủ tục để tạo tờ khai trực tuyến !")]),a("img",{staticStyle:{opacity:"0.1"},attrs:{src:"https://i1.wp.com/www.onsitebristol.co.uk/wp-content/uploads/2016/06/application-form-icon-school-admission-form-512.png?fit=300%2C300&ssl=1",alt:""}})])],1)])},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-triangle-big"},[a("span",[t._v("TẠO TỜ KHAI TRỰC TUYẾN")])])}],Ft=a("3f9f"),Lt=Ft["a"],Pt=Object(d["a"])(Lt,Et,Dt,!1,null,null,null),Vt=Pt.exports;f()(Pt,{VBtn:E["a"],VCard:D["a"],VFlex:N["a"],VIcon:M["a"],VTextField:z["a"]});var Ot=[{path:"/",name:"Landing",component:It,props:!0},{path:"/thong-tin-to-khai",name:"ChiTietToKhai",component:Vt,props:!0},{path:"/danh-sach-ho-so/:index",name:"Landing",component:function(){return a.e("Landing").then(a.bind(null,"306c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return a.e("TiepNhanHoSoDetail").then(a.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return a.e("HoanThienBoSungHoSoDetail").then(a.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/ho-so/:id/:formCode",name:"DetailForward",component:pt,props:!0},{path:"*",name:"NotFound",component:ht}];i["a"].use(g["a"]);var Nt=new g["a"]({routes:Ot}),$t=Nt,At=a("2f62");i["a"].use(bt.a),i["a"].use(At["a"]);var Mt=new At["a"].Store({state:{initData:{},endPoint:"/o/rest/v2",serviceinfoSelected:"",fileTemplateSelected:"",formScriptEform:"",formDataEform:"",loading:!1,index:0,agencyList:[],domainList:[],levelList:[],isMobile:!1},actions:{loadInitResource:function(t){t.commit;var e=t.state;return new Promise(function(t,a){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData["groupId"]=window.themeDisplay.getScopeGroupId(),e.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData["groupId"]=0,e.initData["user"]={userName:"",userEmail:"",userId:20103}),t(e.initData)})},getServiceLists:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){Mt.dispatch("loadInitResource").then(function(o){var n={start:15*e.page-15,end:15*e.page},r={headers:{groupId:a.initData.groupId},params:n};St.a.get(a.endPoint+"/serviceinfos",r).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),i(t)})})})},getServiceDetail:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){Mt.dispatch("loadInitResource").then(function(o){var n={headers:{groupId:a.initData.groupId}};St.a.get(a.endPoint+"/serviceinfos/"+e.index,n).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),i(t)})})})},getFileTemplateEform:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){Mt.dispatch("loadInitResource").then(function(o){var n={headers:{groupId:a.initData.groupId},params:{eForm:!0}};St.a.get(a.endPoint+"/serviceinfos/"+e.serviceInfoId+"/filetemplates",n).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),i(t)})})})},loadFormScript:function(t,e){var a=t.state;t.commit;return new Promise(function(t,i){Mt.dispatch("loadInitResource").then(function(o){$.ajax({url:"/o/rest/v2/serviceinfos/"+e.serviceInfoId+"/filetemplates/"+e.fileTemplateNo+"/formscript",type:"GET",headers:{groupId:a.initData.groupId,Token:window.Liferay?window.Liferay.authToken:""},dataType:"text",success:function(e){var a=e;t(a)},error:function(e){console.log(e),t(e),i(e)}})})})},loadFormData:function(t,e){var a=t.state;t.commit;return new Promise(function(t,i){Mt.dispatch("loadInitResource").then(function(o){$.ajax({url:"/o/rest/v2/serviceinfos/"+e.serviceInfoId+"/filetemplates/"+e.fileTemplateNo+"/formreport",type:"GET",headers:{groupId:a.initData.groupId,Token:window.Liferay?window.Liferay.authToken:""},dataType:"text",success:function(e){var a=e;t(a)},error:function(e){console.log(e),t(e),i(e)}})})})}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e},setServiceinfoSelected:function(t,e){t.serviceinfoSelected=e},setFormScriptEform:function(t,e){t.formScriptEform=e},setFormDataEform:function(t,e){t.formDataEform=e},setFileTemplateSelected:function(t,e){t.fileTemplateSelected=e}},getters:{loading:function(t){return t.loading},index:function(t){return t.index},getServiceinfoSelected:function(t){return t.serviceinfoSelected},getFormScriptEform:function(t){return t.formScriptEform},getFormDataEform:function(t){return t.formDataEform},getFileTemplateSelected:function(t,e){return t.fileTemplateSelected}}}),Bt=a("967d");a("9029");i["a"].use(Bt["default"]);var Rt=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;St.a.defaults.withCredentials=!0,St.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",St.a.defaults.headers.common["groupId"]=Rt,i["a"].config.productionTip=!0,i["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new i["a"]({router:$t,store:Mt,created:function(){var t=this;t.$nextTick(function(){})},render:function(t){return t(h)}}).$mount("#app_application_form")},"74ef":function(t,e,a){},bbd0:function(t){t.exports={}}});
//# sourceMappingURL=app.js.map