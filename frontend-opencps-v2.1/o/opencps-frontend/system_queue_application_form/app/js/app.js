(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)r=s[p],o[r]&&u.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},o={app:0},n=[];function r(t){return s.p+"../../docs/o/opencps-frontend-cli/system_queue_application_form/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(t){var e=[],i=o[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,a){i=o[t]=[e,a]});e.push(i[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t),n=function(e){l.onerror=l.onload=null,clearTimeout(c);var i=o[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");r.type=a,r.request=n,i[1](r)}o[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("1356"),o=i.n(a);o.a},1356:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("0f18");var a=i("a026"),o=i("bb71");i("74ef");a["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticStyle:{border:"1px solid #dedede","border-top":"0","max-width":"1300px",margin:"0 auto"},attrs:{id:"app_application_form"}},[i("v-navigation-drawer",{attrs:{app:"",clipped:"",floating:"",width:"265"}},[i("v-list",{staticClass:"py-0"},t._l(t.menuServiceInfos,function(e,a){return i("v-list-group",{key:a,attrs:{"prepend-icon":"insert_drive_file","append-icon":"expand_less",value:a===t.activeTab}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",{},[t._v(t._s(e.name))])],1),t._l(e["children"],function(e,o){return i("v-list-tile",{key:o},[i("v-list-tile-action",[t.activeService===e.serviceInfoId?i("v-icon",{attrs:{color:"#00aeef"}},[t._v("play_arrow")]):t._e()],1),i("v-list-tile-content",{on:{click:function(i){t.getEformServiceInfo(a,e)}}},[i("v-list-tile-title",{staticStyle:{width:"calc(100% - 45px)"},attrs:{title:e.serviceName},domProps:{textContent:t._s(e.serviceName)}})],1)],1)})],2)}),1)],1),i("v-content",[i("router-view")],1)],1)},r=[],s=i("49ec"),l=i.n(s),c={data:function(){return{active:null,activeAll:!1,activeTab:0,activeService:"",pathRouter:"/thu-tuc-hanh-chinh",currentAgency:"",currentDomain:"",currentLevel:"",currentMethod:"",countAllService:0,isDetail:!1,text:"",menuServiceInfos:[{id:1,name:"Thủ tục nhóm 1",code:"13213",count:2,children:[]},{id:2,name:"Thủ tục nhóm 2",code:"132113",count:2,children:[]},{id:3,name:"Thủ tục nhóm 3",code:"1321313",count:2,children:[]},{id:4,name:"Thủ tục nhóm 4",code:"132413",count:2,children:[]}],serviceInfoList:[]}},components:{GoTop:l.a},computed:{},created:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current;e.query;t.doLoadingThuTuc()})},watch:{$route:function(t,e){t.params,t.query}},methods:{doLoadingThuTuc:function(){var t=this;t.serviceInfoList=[],t.loading=!0;var e=t.$router.history.current.query,i=null;i={page:e.page?e.page:1},t.$store.dispatch("getServiceLists",i).then(function(e){t.loading=!1,e.data?(t.serviceInfoList=e.data,t.totalThuTuc=e.total,t.menuServiceInfos[0]["children"]=[t.serviceInfoList[0],t.serviceInfoList[1]],t.menuServiceInfos[1]["children"]=[t.serviceInfoList[2],t.serviceInfoList[3]],t.menuServiceInfos[2]["children"]=[t.serviceInfoList[4],t.serviceInfoList[5]],t.menuServiceInfos[3]["children"]=[t.serviceInfoList[6],t.serviceInfoList[7]]):(t.totalThuTuc=0,t.serviceInfoList=[]),t.serviceItemTotal=e.total}).catch(function(e){t.loading=!1,t.serviceInfoList=[]})},getEformServiceInfo:function(t,e){var i=this;i.activeService=e.serviceInfoId,i.$store.commit("setServiceinfoSelected",e),i.$store.dispatch("getFileTemplateEform",e).then(function(t){if(t.data){var a=Object.assign({},t.data[0],{serviceInfoId:e.serviceInfoId});i.$store.commit("setFileTemplateSelected",a),i.$store.dispatch("loadFormScript",a).then(function(t){i.$store.commit("setFormScriptEform",t),t&&setTimeout(function(){var t=$("#formAlpacaEform").offset().top+100,e=$("#eform-btn").offset().left;$(window).scroll(function(){$(window).scrollTop()>t?$("#eform-btn").css({position:"fixed",top:0,left:"".concat(e,"px")}):$("#eform-btn").css({position:"relative",top:0,left:0})})},300),i.$store.dispatch("loadFormData",a).then(function(t){})})}})},goBack:function(){window.history.back()}}},p=c,d=(i("034f"),i("2877")),u=i("6544"),f=i.n(u),m=i("7496"),v=i("549c"),_=i("132d"),h=i("8860"),y=i("56b0"),g=i("ba95"),x=i("40fe"),b=i("5d23"),w=i("f774"),T=Object(d["a"])(p,n,r,!1,null,null,null),S=T.exports;f()(T,{VApp:m["a"],VContent:v["a"],VIcon:_["a"],VList:h["a"],VListGroup:y["a"],VListTile:g["a"],VListTileAction:x["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:w["a"]});var k=i("8c4f"),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n  13123\n")])},D=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-chitiet"},[i("div",[i("v-tabs",{attrs:{"icons-and-text":""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-tabs-slider",{attrs:{color:"primary"}}),i("v-tab",{key:1,attrs:{href:"#tabs-1"},on:{click:function(e){t.getNextActions()}}},[i("v-btn",{staticClass:"px-0 py-0 mx-0 my-0",attrs:{flat:""}},[3===t.originality?i("span",[t._v("XỬ LÝ HỒ SƠ")]):i("span",[t._v("CHUẨN BỊ HỒ SƠ")])])],1),i("v-tabs-items",{staticStyle:{overflow:"visible!important"},attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-tab-item",{key:1,attrs:{value:"tabs-1","reverse-transition":"fade-transition",transition:"fade-transition"}},[0!==t.checkInput&&t.filterNextActionEnable(t.btnDossierDynamics)?i("div",{staticStyle:{position:"relative"}},[i("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0]}},[i("v-expansion-panel-content",{key:1,attrs:{"hide-actions":""}},[t._v("\n                123\n              ")])],1)],1):t._e(),t.btnStateVisible?i("div",{staticClass:"px-4 py-3",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t._l(t.btnPlugins,function(e,a){return i("v-btn",{key:a,staticClass:"ml-0 mr-2",attrs:{color:"primary",loading:t.loadingPlugin,disabled:t.loadingPlugin},nativeOn:{click:function(i){t.processPullBtnplugin(e,a)}}},[t._v("\n              "+t._s(e.pluginName)+"\n              "),i("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])}),t.btnStepsDynamics.length>0&&t.thongTinChiTietHoSo["permission"].indexOf("write")>=0?i("v-menu",{staticStyle:{display:"inline-block",position:"relative !important"},attrs:{bottom:"","offset-y":""}},[i("v-btn",{staticClass:"deactive__btn",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Khác   "),i("v-icon",{attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),i("v-list",t._l(t.btnStepsDynamics,function(e,a){return i("v-list-tile",{key:a,on:{click:function(i){t.btnActionEvent(e,a)}}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}),1)],1):t._e()],2):t._e()])],1)],1)],1)])},E=[],F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",[t._l(t.dossierTemplateItems,function(e,a){return t.partTypes.includes(e.partType)&&t.checkVisibleTemp(e,a)?i("div",{key:e.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[i("v-expansion-panel",{staticClass:"expaned__list__data",attrs:{expand:"",value:[t.currentFormView==="formAlpaca"+e.partNo+t.id]}},[i("v-expansion-panel-content",{attrs:{"hide-actions":""}},[i("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(e){t.stateView=!1}},slot:"header"},[i("div",{staticStyle:{"align-items":"center",background:"#fff","padding-left":"25px"},style:{width:t.checkStyle(e)}},[i("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex"},on:{click:function(i){t.onlyView&&e.hasForm?t.viewFile2(e):t.loadAlpcaForm(e)}}},[i("div",{staticClass:"header__tphs"},[i("span",{staticClass:"text-bold"},[t._v(t._s(a+1)+".")]),t._v("  ")]),i("div",{staticClass:"header__tphs"},[i("v-tooltip",{staticStyle:{"max-width":"100% !important"},attrs:{top:""}},[i("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                      "+t._s(e.partName)+"  \n                      "),e.required?i("span",{staticStyle:{color:"red"}},[t._v(" (*) ")]):t._e(),t._v("\n                        \n                    ")]),e.partTip["tip"]?i("span",[t._v(t._s(e.partTip["tip"]))]):t._e()]),e.hasForm&&e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?i("v-tooltip",{attrs:{top:""}},[i("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),i("span",[t._v("Biểu mẫu trực tuyến (Đã khai)")])]):t._e(),e.hasForm&&!e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?i("v-tooltip",{attrs:{top:""}},[i("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),i("span",[t._v("Biểu mẫu trực tuyến (Chưa khai)")])]):t._e(),t._v("\n                    \n                  "),!e.hasForm&&e.hasFileTemp?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(i){i.stopPropagation(),t.downloadFileTemplate(e,a)}},slot:"activator"},[t._v("save_alt")]),i("span",[t._v("Biểu mẫu điền thủ công")])],1):t._e()],1)]),i("div",{staticStyle:{display:"flex"}},[1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?i("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(t){return!!t||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.changeFileComment(e,a)}},model:{value:e.fileComment,callback:function(i){t.$set(e,"fileComment",i)},expression:"item.fileComment"}}):t._e(),1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){i.stopPropagation(),t.changeFileComment(e,a)}},slot:"activator"},[i("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("send")])],1),i("span",[t._v("Gửi")])],1):t._e()],1),e.fileComment&&!e.stateEditFileCheck?i("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[t._v(t._s(e.fileComment))]):t._e(),e.fileComment&&!e.stateEditFileCheck&&1===t.checkInput?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(t){t.stopPropagation(),e.stateEditFileCheck=!e.stateEditFileCheck}},slot:"activator"},[t._v("edit")]),i("span",[t._v("Chỉnh sửa ý kiến")])],1):t._e(),t._l(t.dossierFilesItems,function(a,o){return e.partNo!==a.dossierPartNo||a.eForm?t._e():i("div",{key:o},[i("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[i("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.viewFile2(a)}}},[0!==a.fileSize?i("v-icon",[t._v("attach_file")]):t._e(),t._v("\n                    "+t._s(a.displayName)+" - \n                    "),i("i",[t._v(t._s(a.modifiedDate))])],1),t.onlyView||1===t.checkInput?t._e():i("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(e){e.stopPropagation(),t.deleteSingleFile(a,o)}}},[i("v-icon",{staticStyle:{color:"red"}},[t._v("delete_outline")])],1)],1)])}),i("div",{staticClass:"mr-3 my-1 py-2",staticStyle:{display:"none",border:"1px solid #f3ae75"},attrs:{id:"fileApplicant-"+e.partNo}},t._l(t.dossierFilesApplicant,function(a,o){return a.dossierTemplateNo===t.thongTinHoSo["dossierTemplateNo"]&&e.partNo===a.dossierPartNo?i("div",{key:o},[a.eForm?i("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[i("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[i("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(a)}},slot:"activator"},[i("i",{staticClass:"ml-1 fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"}}),t._v("  \n                        "+t._s(a.referenceUid)+"."+t._s(a.fileType)+" - \n                        "),i("i",[t._v(t._s(a.modifiedDate))])]),i("span",[t._v("Bản khai trực tuyến")])])],1):i("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[i("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[i("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(a)}},slot:"activator"},[0!==a.fileSize?i("v-icon",{staticStyle:{color:"#0d71bb"}},[t._v("attach_file")]):t._e(),t._v("\n                        "+t._s(a.displayName)+" - \n                        "),i("i",[t._v(t._s(a.modifiedDate))])],1),i("span",[t._v("Đính kèm")])])],1)]):t._e()}),0)],2)]),e.hasForm&&!t.onlyView?i("v-card",[i("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[i("v-layout",{attrs:{wrap:""}},[t.stateView?t._e():i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[i("div",{style:t.pstFixed>t.pstEl&&t.pstFixed<t.endEl+t.pstEl?"position:fixed;top:5px;z-index:101":"",attrs:{id:"wrapForm"+e.partNo+t.id}},[e.hasForm&&!t.onlyView&&1!==t.checkInput?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){t.saveAlpacaForm(e,a)}}},[t._v("Lưu lại")]):t._e(),e.daKhai&&e.hasForm&&!t.onlyView&&1!==t.checkInput?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){t.deleteSingleFileEform(e,a)}}},[t._v("Xóa")]):t._e(),e.daKhai&&e.hasForm?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){t.previewFileEfom(e,a)}}},[t._v("In")]):t._e()],1),!t.onlyView||e.daKhai?i("div",{class:{no_acction__event:t.onlyView},attrs:{id:"formAlpaca"+e.partNo+t.id}}):t._e()])],1)],1)],1):t._e()],1)],1),i("div",{staticClass:"absolute__btn group__thanh_phan mr-1"},[t.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-layout",{attrs:{row:"",wrap:""}},[1===t.originality||1!==e.partType||t.thongTinHoSo.online||1===t.checkInput?t._e():i("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[i("v-select",{attrs:{items:t.fileMarkItems,disabled:t.onlyView},on:{change:function(e){t.changeFileMark(e,a)}},model:{value:t.dossierTemplateItems[a].fileMark,callback:function(e){t.$set(t.dossierTemplateItems[a],"fileMark",e)},expression:"dossierTemplateItems[index].fileMark"}})],1),1===t.checkInput?i("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[i("v-select",{attrs:{items:t.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(e){t.changeFileCheck(e,a)}},model:{value:t.dossierTemplateItems[a].fileCheck,callback:function(e){t.$set(t.dossierTemplateItems[a],"fileCheck",e)},expression:"dossierTemplateItems[index].fileCheck"}})],1):e.fileCheck>0?i("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":t.thongTinHoSo.online?"10px":"0px"}},[1===e.fileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("done")]),i("span",[t._v("Đạt")])],1):2===e.fileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("close")]),i("span",[t._v("Không đạt")])],1):t._e()],1):t._e(),1!==t.checkInput?i("v-flex",{class:{"text-xs-right":t.onlyView},style:{width:t.onlyView?"auto":"90px"}},[i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+e.partNo},on:{change:function(i){t.onUploadSingleFile(i,e,a)}}}),3!==e.partType||3!==t.originality||t.onlyView?t._e():i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){t.addFileOther(e)}},slot:"activator"},[i("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("add")])],1),i("span",[t._v("Thêm giấy tờ khác")])],1),t.progressUploadPart===e.partNo?i("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):t.progressUploadPart===e.partNo||t.onlyView?t._e():i("v-tooltip",{attrs:{left:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){t.pickFile(e)}},slot:"activator"},[i("v-badge",[i("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("cloud_upload")])],1)],1),e.partTip["extensions"]||e.partTip["maxSize"]?i("span",[t._v("Chấp nhận tải lên các định dạng: "+t._s(e.partTip["extensions"])+". Tối đa "+t._s(e.partTip["maxSize"])+" MB ")]):i("span",[t._v("Tải file lên")])],1),t.partNoApplicantHasFile(e.partNo)&&!t.onlyView?i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){t.showFilesApplicant(e.partNo)}},slot:"activator"},[i("v-badge",[i("v-icon",{attrs:{size:"16",color:"orange darken-3"}},[t._v("warning")])],1)],1),i("span",[t._v("Giấy tờ đã nộp")])],1):t._e()],1):t._e()],1)],1)],1):t._e()}),t.partTypes.includes(2)?t._e():i("div",[i("v-layout",{staticClass:"mx-4",attrs:{wrap:""}},[!t.onlyView||t.onlyView&&t.applicantNoteDossier?i("v-flex",{staticClass:"my-0 py-2 text-bold",staticStyle:{width:"60px"}},[t._v("Ghi chú:")]):t._e(),i("v-flex",{staticStyle:{width:"calc(100% - 80px)"}},[t.onlyView?t._e():i("div",{staticClass:"pl-2"},[i("v-text-field",{staticClass:"py-0",attrs:{"multi-line":"",rows:"3"},on:{input:t.changeApplicantNote},model:{value:t.applicantNoteDossier,callback:function(e){t.applicantNoteDossier=e},expression:"applicantNoteDossier"}})],1),t.onlyView&&t.applicantNoteDossier?i("p",{staticClass:"my-0 py-2"},[t._v("\n            "+t._s(t.applicantNoteDossier)+" \n          ")]):t._e()])],1)],1),i("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:t.dialogAddOtherTemp,callback:function(e){t.dialogAddOtherTemp=e},expression:"dialogAddOtherTemp"}},[i("v-card",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-title",{staticClass:"headline"},[t._v("Tên giấy tờ")]),i("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[i("v-icon",[t._v("clear")])],1),t.loadingAddOther?i("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):t._e(),i("v-card-text",{staticClass:"pb-0 pt-4"},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"px-2 pb-3 fix__label",attrs:{xs12:""}},[i("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(t){return!!t||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:t.otherDossierTemplate,callback:function(e){t.otherDossierTemplate=e},expression:"otherDossierTemplate"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[t._v("\n              Quay lại\n            ")]),i("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loadingAddOther},nativeOn:{click:function(e){return t.addOtherTemplate(e)}}},[t._v("\n              Đồng ý\n              "),i("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])],1)],1)],1)],1)],2),i("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:t.dialogPDF,callback:function(e){t.dialogPDF=e},expression:"dialogPDF"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t.pdfEform?i("span",[t._v("Bản khai trực tuyến")]):i("span",[t._v("File đính kèm")])]),i("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogPDF=!1}}},[i("v-icon",[t._v("clear")])],1),t.dialogPDFLoading?i("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[i("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):t._e(),i("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+t.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},P=[],V={data:function(){return{}}},L=V,O=i("4ca6"),N=i("8336"),A=i("b0af"),M=i("99d9"),B=i("12b2"),U=i("169a"),q=i("cd55"),R=i("49e2"),z=i("0e8f"),j=i("4bd4"),K=i("a722"),H=i("490a"),W=i("8e36"),G=i("b56d"),J=i("9910"),X=i("2677"),Q=i("3a2f"),Y=Object(d["a"])(L,F,P,!1,null,null,null),Z=Y.exports;f()(Y,{VBadge:O["a"],VBtn:N["a"],VCard:A["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:B["a"],VDialog:U["a"],VExpansionPanel:q["a"],VExpansionPanelContent:R["a"],VFlex:z["a"],VForm:j["a"],VIcon:_["a"],VLayout:K["a"],VProgressCircular:H["a"],VProgressLinear:W["a"],VSelect:G["a"],VSpacer:J["a"],VTextField:X["a"],VTooltip:Q["a"]});var tt={props:["index","id"],components:{"thanh-phan-ho-so":Z},data:function(){return{}}},et=tt,it=i("e449"),at=i("71a3"),ot=i("c671"),nt=i("fe57"),rt=i("aac8"),st=i("9a96"),lt=Object(d["a"])(et,I,E,!1,null,null,null),ct=lt.exports;f()(lt,{VBtn:N["a"],VExpansionPanel:q["a"],VExpansionPanelContent:R["a"],VIcon:_["a"],VList:h["a"],VListTile:g["a"],VListTileTitle:b["b"],VMenu:it["a"],VTab:at["a"],VTabItem:ot["a"],VTabs:nt["a"],VTabsItems:rt["a"],VTabsSlider:st["a"]});var pt={props:["id","formCode"],components:{"xem-chi-tiet-ho-so-detail-can-bo":ct},data:function(){return{initData:null,step:""}}},dt=pt,ut=Object(d["a"])(dt,C,D,!1,null,null,null),ft=ut.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[i("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},vt=[],_t={},ht=_t,yt=i("a523"),gt=Object(d["a"])(ht,mt,vt,!1,null,null,null),xt=gt.exports;f()(gt,{VContainer:yt["a"],VFlex:z["a"],VLayout:K["a"],VProgressCircular:H["a"]});var bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row-header no__hidden_class"},[t._m(0),i("div",{staticClass:"layout row wrap header_tools row-blue"},[i("div",{staticClass:"flex pl-3 text-ellipsis text-bold",staticStyle:{position:"relative"}},[i("v-text-field",{attrs:{placeholder:"Tìm kiếm tờ khai theo mã",solo:"",chips:"",multiple:"","deletable-chips":"","item-value":"eFormNo","item-text":"eFormName","content-class":"adv__search__select","return-object":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterEform(e):null}},model:{value:t.eformNoSearch,callback:function(e){t.eformNoSearch=e},expression:"eformNoSearch"}})],1),i("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto","max-width":"50px"}},[i("v-btn",{staticClass:"my-0 mx-2",attrs:{icon:""},nativeOn:{click:function(e){return t.filterEform(e)}}},[i("v-icon",{attrs:{size:"16"}},[t._v("search")])],1)],1)])]),i("div",[t.serviceinfoSelected?i("v-card",{attrs:{flat:"",color:"#fff"}},[i("h3",{staticClass:"py-3 pl-3",staticStyle:{color:"#036edb"}},[t._v(t._s(t.serviceinfoSelected.serviceName))]),i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[i("v-btn",{staticClass:"mr-3",attrs:{id:"eform-btn",color:"primary"},on:{click:function(e){e.stopPropagation(),t.postEform()}}},[i("v-icon",{attrs:{color:"white"}},[t._v("save")]),t._v(" \n          Tạo tờ khai\n        ")],1)],1),i("div",{staticClass:"mb-5",attrs:{id:"formAlpacaEform"}})],1):i("div",{staticClass:"pt-5 text-xs-center"},[i("h2",{staticClass:"mb-3",staticStyle:{opacity:"0.2","font-style":"italic"}},[t._v("Vui lòng chọn thủ tục để tạo tờ khai trực tuyến !")]),i("img",{staticStyle:{opacity:"0.1"},attrs:{src:"https://i1.wp.com/www.onsitebristol.co.uk/wp-content/uploads/2016/06/application-form-icon-school-admission-form-512.png?fit=300%2C300&ssl=1",alt:""}})])],1)])},wt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-triangle-big"},[i("span",[t._v("TẠO TỜ KHAI TRỰC TUYẾN")])])}],Tt=i("e3ce"),St=Tt["a"],kt=Object(d["a"])(St,bt,wt,!1,null,null,null),Ct=kt.exports;f()(kt,{VBtn:N["a"],VCard:A["a"],VFlex:z["a"],VIcon:_["a"],VTextField:X["a"]});var Dt=[{path:"/",name:"Landing",component:Ct,props:!0},{path:"/danh-sach-ho-so/:index",name:"Landing",component:function(){return i.e("Landing").then(i.bind(null,"306c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return i.e("TiepNhanHoSoDetail").then(i.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return i.e("HoanThienBoSungHoSoDetail").then(i.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/ho-so/:id/:formCode",name:"DetailForward",component:ft,props:!0},{path:"*",name:"NotFound",component:xt}];a["a"].use(k["a"]);var It=new k["a"]({routes:Dt}),Et=It,Ft=i("2f62"),Pt=i("854a"),Vt=i.n(Pt),Lt=i("bc3a"),Ot=i.n(Lt);i("bbd0");a["a"].use(Vt.a),a["a"].use(Ft["a"]);var Nt=new Ft["a"].Store({state:{initData:{},endPoint:"/o/rest/v2",serviceinfoSelected:"",fileTemplateSelected:"",formScriptEform:"",formDataEform:"",loading:!1,index:0,agencyList:[],domainList:[],levelList:[],isMobile:!1},actions:{loadInitResource:function(t){t.commit;var e=t.state;return new Promise(function(t,i){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData["groupId"]=window.themeDisplay.getScopeGroupId(),e.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData["groupId"]=0,e.initData["user"]={userName:"",userEmail:"",userId:20103}),t(e.initData)})},getServiceLists:function(t,e){t.commit;var i=t.state;return new Promise(function(t,a){Nt.dispatch("loadInitResource").then(function(o){var n={start:15*e.page-15,end:15*e.page},r={headers:{groupId:i.initData.groupId},params:n};Ot.a.get(i.endPoint+"/serviceinfos",r).then(function(e){var i=e.data;t(i)}).catch(function(t){console.log(t),a(t)})})})},getServiceDetail:function(t,e){t.commit;var i=t.state;return new Promise(function(t,a){Nt.dispatch("loadInitResource").then(function(o){var n={headers:{groupId:i.initData.groupId}};Ot.a.get(i.endPoint+"/serviceinfos/"+e.index,n).then(function(e){var i=e.data;t(i)}).catch(function(t){console.log(t),a(t)})})})},getFileTemplateEform:function(t,e){t.commit;var i=t.state;return new Promise(function(t,a){Nt.dispatch("loadInitResource").then(function(o){var n={headers:{groupId:i.initData.groupId},params:{eForm:!0}};Ot.a.get(i.endPoint+"/serviceinfos/"+e.serviceInfoId+"/filetemplates",n).then(function(e){var i=e.data;t(i)}).catch(function(t){console.log(t),a(t)})})})},loadFormScript:function(t,e){var i=t.state;t.commit;return new Promise(function(t,a){Nt.dispatch("loadInitResource").then(function(o){$.ajax({url:"/o/rest/v2/serviceinfos/"+e.serviceInfoId+"/filetemplates/"+e.fileTemplateNo+"/formscript",type:"GET",headers:{groupId:i.initData.groupId,Token:window.Liferay?window.Liferay.authToken:""},dataType:"text",success:function(e){var i=e;t(i)},error:function(e){console.log(e),t(e),a(e)}})})})},loadFormData:function(t,e){var i=t.state;t.commit;return new Promise(function(t,a){Nt.dispatch("loadInitResource").then(function(o){$.ajax({url:"/o/rest/v2/serviceinfos/"+e.serviceInfoId+"/filetemplates/"+e.fileTemplateNo+"/formreport",type:"GET",headers:{groupId:i.initData.groupId,Token:window.Liferay?window.Liferay.authToken:""},dataType:"text",success:function(e){var i=e;t(i)},error:function(e){console.log(e),t(e),a(e)}})})})}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e},setServiceinfoSelected:function(t,e){t.serviceinfoSelected=e},setFormScriptEform:function(t,e){t.formScriptEform=e},setFormDataEform:function(t,e){t.formDataEform=e},setFileTemplateSelected:function(t,e){t.fileTemplateSelected=e}},getters:{loading:function(t){return t.loading},index:function(t){return t.index},getServiceinfoSelected:function(t){return t.serviceinfoSelected},getFormScriptEform:function(t){return t.formScriptEform},getFormDataEform:function(t){return t.formDataEform},getFileTemplateSelected:function(t,e){return t.fileTemplateSelected}}}),At=i("967d");i("9029");a["a"].use(At["default"]);var Mt=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;Ot.a.defaults.withCredentials=!0,Ot.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",Ot.a.defaults.headers.common["groupId"]=Mt,a["a"].config.productionTip=!0,a["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new a["a"]({router:Et,store:Nt,created:function(){var t=this;t.$nextTick(function(){})},render:function(t){return t(S)}}).$mount("#app_application_form")},"74ef":function(t,e,i){},bbd0:function(t){t.exports={}},e3ce:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026"),jquery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1157"),jquery__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__),toastr__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("854a"),toastr__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),_store_support_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("bbd0"),_store_support_json__WEBPACK_IMPORTED_MODULE_4___namespace=__webpack_require__.t("bbd0",1);vue__WEBPACK_IMPORTED_MODULE_0__["a"].use(toastr__WEBPACK_IMPORTED_MODULE_2___default.a),__webpack_exports__["a"]={props:[],components:{},data:function(){return{serviceInfoList:[],eformNoSearch:""}},computed:{serviceinfoSelected:function(){return this.$store.getters.getServiceinfoSelected},formScriptEform:function(){return this.$store.getters.getFormScriptEform},formDataEform:function(){return this.$store.getters.getFormDataEform},fileTemplateSelected:function(){return this.$store.getters.getFileTemplateSelected}},created:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current;e.query})},updated:function(){var t=this;t.$nextTick(function(){})},watch:{$route:function(t,e){t.params,t.query},formScriptEform:function formScriptEform(valFormScript){var vm=this,formScript,formData;window.$("#formAlpacaEform").empty(),formScript=valFormScript?eval("("+valFormScript+")"):{},formData={},formScript.data=formData,window.$("#formAlpacaEform").alpaca(formScript)}},methods:{filterEform:function(){},postEform:function(){var t=this,e={headers:{groupId:window.themeDisplay?window.themeDisplay.getScopeGroupId():""}};try{var i=window.$("#formAlpacaEform").alpaca("get"),a=i.getValue();console.log("formData post",a);var o=window.$("#formAlpacaEform").alpaca("get").childrenByPropertyId;if(o)for(var n in o)if(o[n].isRequired()&&""===o[n].getValue())return toastr__WEBPACK_IMPORTED_MODULE_2___default.a.clear(),void toastr__WEBPACK_IMPORTED_MODULE_2___default.a.error(o[n].options.placeholder?o[n].options.placeholder+" là trường dữ liệu bắt buộc":o[n].options["name"]+" là trường dữ liệu bắt buộc");var r=new URLSearchParams;r.append("eFormData",JSON.stringify(a)),r.append("serviceInfoId",t.serviceinfoSelected.serviceInfoId),r.append("fileTemplateNo",t.fileTemplateSelected.fileTemplateNo),r.append("email",""),axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/o/rest/v2/eforms",r,e).then(function(t){}).catch(function(t){})}catch(s){}},deleteAlpacaForm:function(){}}}}});
//# sourceMappingURL=app.js.map