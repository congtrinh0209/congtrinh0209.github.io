(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)o=r[p],n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function o(t){return r.p+"../../docs/o/opencps-frontend-cli/tracuu_hoso/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),s=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");o.type=i,o.request=s,a[1](o)}n[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;s.push(["56d7","chunk-vendors"]),a()})({"56d7":function(t,e,a){"use strict";a.r(e);a("0f18");var i=a("a026"),n=a("bb71");a("74ef");i["a"].use(n["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"#fff !important"},attrs:{id:"app_tracuu_hoso"}},[a("v-content",{staticStyle:{width:"100%","max-width":"1300px",margin:"0 auto"}},[a("router-view")],1)],1)},o=[],r={data:function(){return{}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;t.$nextTick((function(){}))},watch:{$route:function(t,e){t.params,t.query}},methods:{}},l=r,c=a("2877"),p=a("6544"),d=a.n(p),u=a("7496"),v=a("549c"),f=Object(c["a"])(l,s,o,!1,null,null,null),m=f.exports;d()(f,{VApp:u["a"],VContent:v["a"]});var h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  13123\n")])},y=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-chitiet"},[a("div",[a("v-tabs",{attrs:{"icons-and-text":""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tabs-slider",{attrs:{color:"primary"}}),a("v-tab",{key:1,attrs:{href:"#tabs-1"},on:{click:function(e){t.getNextActions()}}},[a("v-btn",{staticClass:"px-0 py-0 mx-0 my-0",attrs:{flat:""}},[3===t.originality?a("span",[t._v("XỬ LÝ HỒ SƠ")]):a("span",[t._v("CHUẨN BỊ HỒ SƠ")])])],1),a("v-tabs-items",{staticStyle:{overflow:"visible!important"},attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tab-item",{key:1,attrs:{value:"tabs-1","reverse-transition":"fade-transition",transition:"fade-transition"}},[0!==t.checkInput&&t.filterNextActionEnable(t.btnDossierDynamics)?a("div",{staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0]}},[a("v-expansion-panel-content",{key:1,attrs:{"hide-actions":""}},[t._v("\n                123\n              ")])],1)],1):t._e(),t.btnStateVisible?a("div",{staticClass:"px-4 py-3",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t._l(t.btnPlugins,(function(e,i){return a("v-btn",{key:i,staticClass:"ml-0 mr-2",attrs:{color:"primary",loading:t.loadingPlugin,disabled:t.loadingPlugin},nativeOn:{click:function(a){t.processPullBtnplugin(e,i)}}},[t._v("\n              "+t._s(e.pluginName)+"\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])})),t.btnStepsDynamics.length>0&&t.thongTinChiTietHoSo["permission"].indexOf("write")>=0?a("v-menu",{staticStyle:{display:"inline-block",position:"relative !important"},attrs:{bottom:"","offset-y":""}},[a("v-btn",{staticClass:"deactive__btn",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Khác   "),a("v-icon",{attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),a("v-list",t._l(t.btnStepsDynamics,(function(e,i){return a("v-list-tile",{key:i,on:{click:function(a){t.btnActionEvent(e,i)}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)})),1)],1):t._e()],2):t._e()])],1)],1)],1)])},_=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[t._l(t.dossierTemplateItems,(function(e,i){return t.partTypes.includes(e.partType)&&t.checkVisibleTemp(e,i)?a("div",{key:e.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expaned__list__data",attrs:{expand:"",value:[t.currentFormView==="formAlpaca"+e.partNo+t.id]}},[a("v-expansion-panel-content",{attrs:{"hide-actions":""}},[a("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(e){t.stateView=!1}},slot:"header"},[a("div",{staticStyle:{"align-items":"center",background:"#fff","padding-left":"25px"},style:{width:t.checkStyle(e)}},[a("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex"},on:{click:function(a){t.onlyView&&e.hasForm?t.viewFile2(e):t.loadAlpcaForm(e)}}},[a("div",{staticClass:"header__tphs"},[a("span",{staticClass:"text-bold"},[t._v(t._s(i+1)+".")]),t._v("  ")]),a("div",{staticClass:"header__tphs"},[a("v-tooltip",{staticStyle:{"max-width":"100% !important"},attrs:{top:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                      "+t._s(e.partName)+"  \n                      "),e.required?a("span",{staticStyle:{color:"red"}},[t._v(" (*) ")]):t._e(),t._v("\n                        \n                    ")]),e.partTip["tip"]?a("span",[t._v(t._s(e.partTip["tip"]))]):t._e()]),e.hasForm&&e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Đã khai)")])]):t._e(),e.hasForm&&!e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Chưa khai)")])]):t._e(),t._v("\n                    \n                  "),!e.hasForm&&e.hasFileTemp?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(a){a.stopPropagation(),t.downloadFileTemplate(e,i)}},slot:"activator"},[t._v("save_alt")]),a("span",[t._v("Biểu mẫu điền thủ công")])],1):t._e()],1)]),a("div",{staticStyle:{display:"flex"}},[1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(t){return!!t||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.changeFileComment(e,i)}},model:{value:e.fileComment,callback:function(a){t.$set(e,"fileComment",a)},expression:"item.fileComment"}}):t._e(),1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){a.stopPropagation(),t.changeFileComment(e,i)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("send")])],1),a("span",[t._v("Gửi")])],1):t._e()],1),e.fileComment&&!e.stateEditFileCheck?a("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[t._v(t._s(e.fileComment))]):t._e(),e.fileComment&&!e.stateEditFileCheck&&1===t.checkInput?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(t){t.stopPropagation(),e.stateEditFileCheck=!e.stateEditFileCheck}},slot:"activator"},[t._v("edit")]),a("span",[t._v("Chỉnh sửa ý kiến")])],1):t._e(),t._l(t.dossierFilesItems,(function(i,n){return e.partNo!==i.dossierPartNo||i.eForm?t._e():a("div",{key:n},[a("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.viewFile2(i)}}},[0!==i.fileSize?a("v-icon",[t._v("attach_file")]):t._e(),t._v("\n                    "+t._s(i.displayName)+" - \n                    "),a("i",[t._v(t._s(i.modifiedDate))])],1),t.onlyView||1===t.checkInput?t._e():a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(e){e.stopPropagation(),t.deleteSingleFile(i,n)}}},[a("v-icon",{staticStyle:{color:"red"}},[t._v("delete_outline")])],1)],1)])})),a("div",{staticClass:"mr-3 my-1 py-2",staticStyle:{display:"none",border:"1px solid #f3ae75"},attrs:{id:"fileApplicant-"+e.partNo}},t._l(t.dossierFilesApplicant,(function(i,n){return i.dossierTemplateNo===t.thongTinHoSo["dossierTemplateNo"]&&e.partNo===i.dossierPartNo?a("div",{key:n},[i.eForm?a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[a("i",{staticClass:"ml-1 fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"}}),t._v("  \n                        "+t._s(i.referenceUid)+"."+t._s(i.fileType)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])]),a("span",[t._v("Bản khai trực tuyến")])])],1):a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[0!==i.fileSize?a("v-icon",{staticStyle:{color:"#0d71bb"}},[t._v("attach_file")]):t._e(),t._v("\n                        "+t._s(i.displayName)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])],1),a("span",[t._v("Đính kèm")])])],1)]):t._e()})),0)],2)]),e.hasForm&&!t.onlyView?a("v-card",[a("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[a("v-layout",{attrs:{wrap:""}},[t.stateView?t._e():a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("div",{style:t.pstFixed>t.pstEl&&t.pstFixed<t.endEl+t.pstEl?"position:fixed;top:5px;z-index:101":"",attrs:{id:"wrapForm"+e.partNo+t.id}},[e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.saveAlpacaForm(e,i)}}},[t._v("Lưu lại")]):t._e(),e.daKhai&&e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.deleteSingleFileEform(e,i)}}},[t._v("Xóa")]):t._e(),e.daKhai&&e.hasForm?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.previewFileEfom(e,i)}}},[t._v("In")]):t._e()],1),!t.onlyView||e.daKhai?a("div",{class:{no_acction__event:t.onlyView},attrs:{id:"formAlpaca"+e.partNo+t.id}}):t._e()])],1)],1)],1):t._e()],1)],1),a("div",{staticClass:"absolute__btn group__thanh_phan mr-1"},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("v-layout",{attrs:{row:"",wrap:""}},[1===t.originality||1!==e.partType||t.thongTinHoSo.online||1===t.checkInput?t._e():a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[a("v-select",{attrs:{items:t.fileMarkItems,disabled:t.onlyView},on:{change:function(e){t.changeFileMark(e,i)}},model:{value:t.dossierTemplateItems[i].fileMark,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileMark",e)},expression:"dossierTemplateItems[index].fileMark"}})],1),1===t.checkInput?a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[a("v-select",{attrs:{items:t.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(e){t.changeFileCheck(e,i)}},model:{value:t.dossierTemplateItems[i].fileCheck,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileCheck",e)},expression:"dossierTemplateItems[index].fileCheck"}})],1):e.fileCheck>0?a("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":t.thongTinHoSo.online?"10px":"0px"}},[1===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("done")]),a("span",[t._v("Đạt")])],1):2===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("close")]),a("span",[t._v("Không đạt")])],1):t._e()],1):t._e(),1!==t.checkInput?a("v-flex",{class:{"text-xs-right":t.onlyView},style:{width:t.onlyView?"auto":"90px"}},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+e.partNo},on:{change:function(a){t.onUploadSingleFile(a,e,i)}}}),3!==e.partType||3!==t.originality||t.onlyView?t._e():a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.addFileOther(e)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("add")])],1),a("span",[t._v("Thêm giấy tờ khác")])],1),t.progressUploadPart===e.partNo?a("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):t.progressUploadPart===e.partNo||t.onlyView?t._e():a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.pickFile(e)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("cloud_upload")])],1)],1),e.partTip["extensions"]||e.partTip["maxSize"]?a("span",[t._v("Chấp nhận tải lên các định dạng: "+t._s(e.partTip["extensions"])+". Tối đa "+t._s(e.partTip["maxSize"])+" MB ")]):a("span",[t._v("Tải file lên")])],1),t.partNoApplicantHasFile(e.partNo)&&!t.onlyView?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.showFilesApplicant(e.partNo)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"orange darken-3"}},[t._v("warning")])],1)],1),a("span",[t._v("Giấy tờ đã nộp")])],1):t._e()],1):t._e()],1)],1)],1):t._e()})),t.partTypes.includes(2)?t._e():a("div",[a("v-layout",{staticClass:"mx-4",attrs:{wrap:""}},[!t.onlyView||t.onlyView&&t.applicantNoteDossier?a("v-flex",{staticClass:"my-0 py-2 text-bold",staticStyle:{width:"60px"}},[t._v("Ghi chú:")]):t._e(),a("v-flex",{staticStyle:{width:"calc(100% - 80px)"}},[t.onlyView?t._e():a("div",{staticClass:"pl-2"},[a("v-text-field",{staticClass:"py-0",attrs:{"multi-line":"",rows:"3"},on:{input:t.changeApplicantNote},model:{value:t.applicantNoteDossier,callback:function(e){t.applicantNoteDossier=e},expression:"applicantNoteDossier"}})],1),t.onlyView&&t.applicantNoteDossier?a("p",{staticClass:"my-0 py-2"},[t._v("\n            "+t._s(t.applicantNoteDossier)+" \n          ")]):t._e()])],1)],1),a("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:t.dialogAddOtherTemp,callback:function(e){t.dialogAddOtherTemp=e},expression:"dialogAddOtherTemp"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticClass:"headline"},[t._v("Tên giấy tờ")]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[a("v-icon",[t._v("clear")])],1),t.loadingAddOther?a("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):t._e(),a("v-card-text",{staticClass:"pb-0 pt-4"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"px-2 pb-3 fix__label",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(t){return!!t||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:t.otherDossierTemplate,callback:function(e){t.otherDossierTemplate=e},expression:"otherDossierTemplate"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[t._v("\n              Quay lại\n            ")]),a("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loadingAddOther},nativeOn:{click:function(e){return t.addOtherTemplate(e)}}},[t._v("\n              Đồng ý\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])],1)],1)],1)],1)],2),a("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:t.dialogPDF,callback:function(e){t.dialogPDF=e},expression:"dialogPDF"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t.pdfEform?a("span",[t._v("Bản khai trực tuyến")]):a("span",[t._v("File đính kèm")])]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogPDF=!1}}},[a("v-icon",[t._v("clear")])],1),t.dialogPDFLoading?a("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):t._e(),a("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+t.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},w=[],C={data:function(){return{}}},k=C,S=a("4ca6"),T=a("8336"),P=a("b0af"),D=a("99d9"),V=a("12b2"),F=a("169a"),N=a("cd55"),I=a("49e2"),L=a("0e8f"),A=a("4bd4"),O=a("132d"),E=a("a722"),$=a("490a"),z=a("8e36"),B=a("b56d"),H=a("9910"),j=a("2677"),M=a("3a2f"),q=Object(c["a"])(k,b,w,!1,null,null,null),K=q.exports;d()(q,{VBadge:S["a"],VBtn:T["a"],VCard:P["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:V["a"],VDialog:F["a"],VExpansionPanel:N["a"],VExpansionPanelContent:I["a"],VFlex:L["a"],VForm:A["a"],VIcon:O["a"],VLayout:E["a"],VProgressCircular:$["a"],VProgressLinear:z["a"],VSelect:B["a"],VSpacer:H["a"],VTextField:j["a"],VTooltip:M["a"]});var U={props:["index","id"],components:{"thanh-phan-ho-so":K},data:function(){return{}}},G=U,Q=a("8860"),R=a("ba95"),J=a("5d23"),X=a("e449"),W=a("71a3"),Y=a("c671"),Z=a("fe57"),tt=a("aac8"),et=a("9a96"),at=Object(c["a"])(G,x,_,!1,null,null,null),it=at.exports;d()(at,{VBtn:T["a"],VExpansionPanel:N["a"],VExpansionPanelContent:I["a"],VIcon:O["a"],VList:Q["a"],VListTile:R["a"],VListTileTitle:J["b"],VMenu:X["a"],VTab:W["a"],VTabItem:Y["a"],VTabs:Z["a"],VTabsItems:tt["a"],VTabsSlider:et["a"]});var nt={props:["id","formCode"],components:{"xem-chi-tiet-ho-so-detail-can-bo":it},data:function(){return{initData:null,step:""}}},st=nt,ot=Object(c["a"])(st,g,y,!1,null,null,null),rt=(ot.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)}),lt=[],ct={},pt=ct,dt=a("a523"),ut=Object(c["a"])(pt,rt,lt,!1,null,null,null),vt=ut.exports;d()(ut,{VContainer:dt["a"],VFlex:L["a"],VLayout:E["a"],VProgressCircular:$["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("div",{staticStyle:{"font-size":"22px","font-weight":"500",color:"#0167d3"}},[t._v("TRA CỨU HỒ SƠ")]),a("v-card",{staticClass:"px-2 py-2",attrs:{flat:"",color:"#ffffff"}},[a("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Mã số hồ sơ",box:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.changeDossierNoKey(e):null},"click:append":t.changeDossierNoKey},model:{value:t.dossierNoKey,callback:function(e){t.dossierNoKey=e},expression:"dossierNoKey"}})],1),a("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Số CMND/ hộ chiếu",box:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.changeApplicantIdNo(e):null},"click:append":t.changeApplicantIdNo},model:{value:t.applicantIdNo,callback:function(e){t.applicantIdNo=e},expression:"applicantIdNo"}})],1),a("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-2",attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.doSearchDossier}},[a("v-icon",[t._v("search")]),t._v("  \n            Tìm kiếm\n            "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.goBack(e)}}},[a("v-icon",[t._v("reply")]),t._v("  \n            Quay lại\n          ")],1)],1)],1)],1),a("v-flex",{staticClass:"pl-3",attrs:{xs12:"",sm9:""}},[a("v-card",{attrs:{flat:""}},[a("div",{},[a("div",{staticClass:"pt-3 mx-2"},[t._v("Có "),a("span",{staticClass:"text-bold",staticStyle:{color:"#0167d3"}},[t._v("12")]),t._v(" hồ sơ được tìm thấy")]),a("v-data-table",{staticClass:"table-landing table-bordered mt-3 mx-2",staticStyle:{"border-left":"1px solid #dedede"},attrs:{headers:t.headers,items:t.dossierList,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{class:{active:e.index%2==1},staticStyle:{cursor:"pointer"}},[a("td",{staticClass:"text-xs-center"},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(10*t.dossierPage-10+e.index+1))]),a("br")])],1),a("td",{staticClass:"text-xs-left",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(e.item.dossierNo))])])],1),a("td",{staticClass:"text-xs-left",on:{click:function(a){t.viewDetail(e.item)}}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(e.item.dossierName))])])],1),a("td",{staticClass:"text-xs-left",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.applicantName))])])])],1),a("td",{staticClass:"text-xs-left",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.receiveDate))])])])],1),a("td",{staticClass:"text-xs-left",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.dossierSubstatus))])])])],1)])]}}])})],1),t.totalDossier>0?a("div",{staticClass:"text-xs-right layout wrap mt-4",staticStyle:{position:"relative"}},[a("div",{staticClass:"flex pagging-table"},[a("tiny-pagination",{attrs:{total:t.totalDossier,page:t.dossierPage,"custom-class":"custom-tiny-class"},on:{"tiny:change-page":t.paggingData}})],1)]):t._e()])],1)],1)],1)},mt=[],ht=(a("1157"),a("854a")),gt=a.n(ht),yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.viewMobile?"":"text-align: left;position: absolute;line-height: 46px;"},[t._v("Tổng số "),a("span",{staticClass:"text-bold primary--text"},[t._v(t._s(t.total))]),t._v(" câu hỏi. ")]),t.total>0?a("div",{staticClass:"vue-tiny-pagination pagination layout",style:t.viewMobile?"":"justify-content: flex-end; -webkit-justify-content: flex-end;"},[a("div",{class:t.viewMobile?"pr-3 xs4 flex":"px-3 xs4 flex"},[a("v-autocomplete",{attrs:{items:t.totalPagesData,"item-text":"text","item-value":"value"},on:{input:t.goToPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),a("ul",{staticClass:"tiny-pagination",class:t.customClass},[a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,on:{click:function(e){return e.preventDefault(),t.lastPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("first_page")])])]),a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.lastPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_left")])])]),a("li",{staticClass:"page-item",staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation pagination__navigation--disabled text-bold primary--text",staticStyle:{"border-right":"0","border-left":"0"}},[t._v("\n          "+t._s(t.titlePage)+"\n        ")])]),a("li",{staticClass:"page-item",class:t.classLastPage,staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_right")])])]),a("li",{staticClass:"page-item",class:t.classLastPage},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,on:{click:function(e){return e.preventDefault(),t.nextPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("last_page")])])])])]):t._e()])},xt=[],_t=a("9029"),bt="TinyPagination",wt={name:bt,props:{total:{type:Number,required:!0},page:{type:Number,default:1},lang:{type:String,default:"en"},customClass:{type:String},limits:{type:Array,default:function(){return[10,15,20,50,100]}},showLimit:{type:Boolean,default:!0}},data:function(){return{version:"0.2.1",currentPage:1,currentLimit:20,translations:{en:{prev:"Previous",title:"Page",next:"Next"}},availableLanguages:["en"]}},created:function(){this.currentPage=this.page},watch:{page:function(t){this.currentPage=parseInt(t)}},computed:{translation:function(){return this.availableLanguages.includes(this.lang)?this.translations[this.lang]:this.translations["en"]},totalPages:function(){return Math.ceil(this.total/this.currentLimit)},totalPagesData:function(){for(var t=[],e={},a=1;a<=this.totalPages;++a)e={value:a,text:"Trang "+a},t.push(e);return t},titlePage:function(){return"".concat(this.currentPage)},classFirstPage:function(){return{"c-not-allowed pagination__navigation--disabled":1===this.currentPage}},classLastPage:function(){return{"c-not-allowed pagination__navigation--disabled":this.currentPage===this.totalPages}},viewMobile:function(){return _t["isMobile"]}},methods:{nextPage:function(){this.currentPage!==this.totalPages&&(this.currentPage+=1,this.$emit("tiny:change-page",{page:this.currentPage}))},lastPage:function(){this.currentPage>1&&(this.currentPage-=1,this.$emit("tiny:change-page",{page:this.currentPage}))},nextPageLast:function(){this.currentPage=this.totalPages,this.$emit("tiny:change-page",{page:this.totalPages})},lastPageLast:function(){this.currentPage=1,this.$emit("tiny:change-page",{page:1})},goToPage:function(){this.$emit("tiny:change-page",{page:this.currentPage})},onLimitChange:function(){this.currentPage=1}}},Ct=wt,kt=a("c6a6"),St=Object(c["a"])(Ct,yt,xt,!1,null,null,null),Tt=St.exports;d()(St,{VAutocomplete:kt["a"]}),i["a"].use(gt.a),gt.a.options={closeButton:!0,timeOut:"3000"};var Pt={props:[],components:{"tiny-pagination":Tt},data:function(){return{dossierList:[],dossierNoKey:"",applicantIdNo:"",totalDossier:0,dossierPage:1,loading:!1,headers:[{text:"STT",align:"center",sortable:!1},{text:"Mã hồ sơ",align:"center",sortable:!1},{text:"Tên hồ sơ",align:"center",sortable:!1},{text:"Chủ hồ sơ",align:"center",sortable:!1},{text:"Ngày nộp",align:"center",sortable:!1},{text:"Trạng thái",align:"center",sortable:!1}]}},computed:{loading:function(){return this.$store.getters.loading},originality:function(){var t=this;return t.getOriginality()}},created:function(){var t=this;t.$nextTick((function(){var t=this,e=t.$router.history.current;e.query}))},updated:function(){var t=this;t.$nextTick((function(){}))},mounted:function(){},watch:{$route:function(t,e){t.params,t.query}},methods:{getAnswers:function(t,e){var a=this;a.openQuestion===e?a.openQuestion="":a.openQuestion=e,t["loading"]=!0;var i={questionId:t.questionId};a.$store.dispatch("getAnswers",i).then((function(i){t["loading"]=!1;var n=[];n=Array.isArray(i)?i:[i],a.questionList[e]["answers"]=i?n:a.answers[e]?a.answers[e]:[]})).catch((function(i){t["loading"]=!1,a.questionList[e]["answers"]=a.answers[e]?a.answers[e]:[]}))},doSearchDossier:function(){},changeApplicantIdNo:function(){},changeDossierNoKey:function(){},paggingData:function(){},goBack:function(){window.location.history()}}},Dt=Pt,Vt=a("8fea"),Ft=Object(c["a"])(Dt,ft,mt,!1,null,null,null),Nt=Ft.exports;d()(Ft,{VBtn:T["a"],VCard:P["a"],VDataTable:Vt["a"],VFlex:L["a"],VIcon:O["a"],VLayout:E["a"],VTextField:j["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"mb-3",attrs:{wrap:""}},[a("v-card",{staticStyle:{width:"100%"},attrs:{flat:""}})],1)],1)},Lt=[];a("bbd0");i["a"].use(gt.a),gt.a.options={closeButton:!0,timeOut:"5000"};var At={props:["index"],components:{},data:function(){return{}},computed:{loading:function(){return this.$store.getters.loading},originality:function(){var t=this;return t.getOriginality()}},created:function(){var t=this;t.$nextTick((function(){var t=this;t.getAnswers()}))},updated:function(){var t=this;t.$nextTick((function(){}))},watch:{$route:function(t,e){t.params,t.query}},methods:{}},Ot=At,Et=Object(c["a"])(Ot,It,Lt,!1,null,"12424e55",null),$t=Et.exports;d()(Et,{VCard:P["a"],VLayout:E["a"]});var zt=[{path:"/",name:"Landing",component:Nt,props:!1},{path:"/:index",name:"DetailQuestion",component:$t,props:!0},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return a.e("TiepNhanHoSoDetail").then(a.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return a.e("HoanThienBoSungHoSoDetail").then(a.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"*",name:"NotFound",component:vt}];i["a"].use(h["a"]);var Bt=new h["a"]({routes:zt}),Ht=Bt,jt=a("2f62"),Mt=a("bc3a"),qt=a.n(Mt);i["a"].use(gt.a),i["a"].use(jt["a"]),gt.a.options={closeButton:!0,timeOut:"3000"};var Kt=new jt["a"].Store({state:{initData:{},loading:!1,user:{role:""},endPointApi:"/o/rest/v2"},actions:{loadInitResource:function(t){var e=t.commit,a=t.state;return new Promise((function(t,i){null!==window.themeDisplay&&void 0!==window.themeDisplay?(a.initData["groupId"]=window.themeDisplay.getScopeGroupId(),a.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(a.initData["groupId"]=0,a.initData["user"]={userName:"",userEmail:"",userId:20103}),""===a["user"].role?Kt.dispatch("getRoleUser").then((function(t){a["user"].role=t,e("setInitData",a.initData)})).catch((function(i){a["user"].role=["default"],e("setInitData",a.initData),t(a.initData),console.log(i)})):(e("setInitData",a.initData),t(a.initData))}))}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e}},getters:{loading:function(t){return t.loading}}}),Ut=a("967d"),Gt=(a("d304"),void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0);qt.a.defaults.withCredentials=!0,qt.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",qt.a.defaults.headers.common["groupId"]=Gt,i["a"].config.productionTip=!0,i["a"].use(Ut["default"]),i["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new i["a"]({router:Ht,store:Kt,render:function(t){return t(m)}}).$mount("#app_tracuu_hoso")},"74ef":function(t,e,a){},bbd0:function(t){t.exports={}}});
//# sourceMappingURL=app.js.map