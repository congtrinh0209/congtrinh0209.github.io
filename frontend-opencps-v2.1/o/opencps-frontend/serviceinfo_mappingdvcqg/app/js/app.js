(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)s=r[p],n[s]&&u.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function s(t){return r.p+"../../docs/o/opencps-frontend-cli/serviceinfo_mappingdvcqg/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=n[t]=[e,i]});e.push(a[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,a[1](s)}n[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("0f18");var i=a("a026"),n=a("bb71");a("74ef");i["a"].use(n["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{border:"1px solid #dedede","max-width":"1300px",margin:"0 auto"},attrs:{id:"app_serviceinfo_mapping"}},[a("v-content",[a("router-view")],1),t.isMobile?a("go-top",{attrs:{size:42,"bg-color":"#0064c7"}}):t._e()],1)},s=[],r=a("bc3a"),l=a.n(r),c=a("49ec"),p=a.n(c),d={data:function(){return{}},components:{GoTop:p.a},computed:{},beforeDestroy:function(){},mounted:function(){},created:function(){},watch:{$route:function(t,e){t.params,t.query}},methods:{}},u=d,v=a("2877"),h=a("6544"),g=a.n(h),f=a("7496"),m=a("549c"),y=Object(v["a"])(u,o,s,!1,null,null,null),_=y.exports;g()(y,{VApp:f["a"],VContent:m["a"]});var x=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},C=[],w={},k=w,T=a("a523"),S=a("0e8f"),P=a("a722"),D=a("490a"),L=Object(v["a"])(k,b,C,!1,null,null,null),V=L.exports;g()(L,{VContainer:T["a"],VFlex:S["a"],VLayout:P["a"],VProgressCircular:D["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isMobile?t._e():a("div",{staticClass:"list-thu-tuc"},[a("div",{staticClass:"row-header no__hidden_class"},[null!==t.trangThaiHoSoList?a("div",{staticClass:"background-triangle-big"},[a("span",[t._v("DANH SÁCH THỦ TỤC HÀNH CHÍNH")])]):t._e(),a("div",{staticClass:"layout row wrap header_tools row-blue"},[a("div",{staticClass:"flex pl-3 text-ellipsis text-bold",staticStyle:{position:"relative"}},[a("v-text-field",{attrs:{placeholder:"Tìm kiếm theo tên thủ tục, mã thủ tục ...",solo:"",chips:"",multiple:"","deletable-chips":"","item-value":"value","item-text":"text","content-class":"adv__search__select","return-object":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterServiceName(e):null}},model:{value:t.serviceNameKey,callback:function(e){t.serviceNameKey=e},expression:"serviceNameKey"}})],1),a("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto","max-width":"50px"}},[a("v-btn",{staticClass:"my-0 mx-2",attrs:{icon:""},nativeOn:{click:function(e){return t.filterServiceName(e)}}},[a("v-icon",{attrs:{size:"16"}},[t._v("search")])],1)],1)])]),t.loading?a("content-placeholders",{staticClass:"mt-3"},[a("content-placeholders-text",{attrs:{lines:10}})],1):a("div",{staticClass:"service__info__table"},[a("v-data-table",{staticClass:"table-landing table-bordered",attrs:{headers:t.headers,items:t.serviceInfoList,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{class:{active:e.index%2==1},staticStyle:{cursor:"pointer"}},[a("td",{staticClass:"text-xs-center"},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(15*t.thutucPage-15+e.index+1))]),a("br")])],1),a("td",{staticClass:"text-xs-left"},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",{staticClass:"text-bold"},[t._v(t._s(e.item.serviceCode))]),t._v(" - "),a("span",[t._v(t._s(e.item.serviceName))])])],1),a("td",{staticClass:"text-xs-left"},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",t._l(e.item.similarity,function(i,n){return a("div",{key:n},[a("v-tooltip",{attrs:{top:""}},[a("v-checkbox",{staticStyle:{display:"inline-block",width:"25px"},attrs:{slot:"activator",primary:"","hide-details":"",color:"primary"},on:{input:function(a){t.doActionMapping(e.item,i,n)}},slot:"activator",model:{value:i.mapped,callback:function(e){t.$set(i,"mapped",e)},expression:"itemDvc.mapped"}}),i.mapped?a("span",[t._v("Chọn để hủy đồng bộ")]):a("span",[t._v("Chọn để đồng bộ")])],1),a("span",{staticClass:"text-bold"},[t._v(t._s(i.serviceCodeDVCQG))]),t._v(" - "),a("span",[t._v(t._s(i.serviceNameDVCQG))])],1)}),0)],1)])]}}])},[a("template",{slot:"no-data"},[a("div",{staticClass:"text-xs-center mt-2"},[t._v("\n            Không có thủ tục nào được tìm thấy\n          ")])])],2),a("div",{staticClass:"text-xs-right layout wrap mt-2",staticStyle:{position:"relative"}},[a("div",{staticClass:"flex pagging-table px-2"},[a("tiny-pagination",{attrs:{total:t.totalThuTuc,page:t.thutucPage,"custom-class":"custom-tiny-class"},on:{"tiny:change-page":t.paggingData}})],1)])],1)],1)])},I=[],N=(a("1157"),a("854a")),H=a.n(N),A=(a("bbd0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isMobile?t._e():a("div",{staticStyle:{"text-align":"left",position:"absolute","line-height":"46px"}},[t._v("Tổng số "),a("span",{staticClass:"text-bold primary--text"},[t._v(t._s(t.total))]),t._v(" thủ tục. ")]),t.total>0?a("div",{staticClass:"vue-tiny-pagination pagination layout",style:t.isMobile?"":"justify-content: flex-end; -webkit-justify-content: flex-end;"},[a("div",{class:t.isMobile?"pr-3 xs4 flex":"px-3 xs4 flex"},[a("v-select",{attrs:{items:t.totalPagesData,"item-text":"text","item-value":"value",autocomplete:""},on:{input:t.goToPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),a("ul",{staticClass:"tiny-pagination",class:t.customClass},[a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,on:{click:function(e){return e.preventDefault(),t.lastPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("first_page")])])]),a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.lastPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_left")])])]),a("li",{staticClass:"page-item",staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation pagination__navigation--disabled text-bold primary--text",staticStyle:{"border-right":"0","border-left":"0"}},[t._v("\n          "+t._s(t.titlePage)+"\n        ")])]),a("li",{staticClass:"page-item",class:t.classLastPage,staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_right")])])]),a("li",{staticClass:"page-item",class:t.classLastPage},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,on:{click:function(e){return e.preventDefault(),t.nextPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("last_page")])])])])]):t._e()])}),M=[],$="TinyPagination",E={name:$,props:{total:{type:Number,required:!0},page:{type:Number,default:1},lang:{type:String,default:"en"},customClass:{type:String},limits:{type:Array,default:function(){return[10,15,20,50,100]}},showLimit:{type:Boolean,default:!0}},data:function(){return{version:"0.2.1",currentPage:1,currentLimit:15,translations:{en:{prev:"Previous",title:"Page",next:"Next"}},availableLanguages:["en"]}},created:function(){this.currentPage=this.page},watch:{page:function(t){this.currentPage=parseInt(t)}},computed:{translation:function(){return this.availableLanguages.includes(this.lang)?this.translations[this.lang]:this.translations["en"]},totalPages:function(){return Math.ceil(this.total/this.currentLimit)},totalPagesData:function(){for(var t=[],e={},a=1;a<=this.totalPages;++a)e={value:a,text:"Trang "+a},t.push(e);return t},titlePage:function(){return"".concat(this.currentPage)},classFirstPage:function(){return{"c-not-allowed pagination__navigation--disabled":1===this.currentPage}},classLastPage:function(){return{"c-not-allowed pagination__navigation--disabled":this.currentPage===this.totalPages}},isMobile:function(){return this.$store.getters.getIsMobile}},methods:{nextPage:function(){this.currentPage!==this.totalPages&&(this.currentPage+=1,this.$emit("tiny:change-page",{page:this.currentPage}))},lastPage:function(){this.currentPage>1&&(this.currentPage-=1,this.$emit("tiny:change-page",{page:this.currentPage}))},nextPageLast:function(){this.currentPage=this.totalPages,this.$emit("tiny:change-page",{page:this.totalPages})},lastPageLast:function(){this.currentPage=1,this.$emit("tiny:change-page",{page:1})},goToPage:function(){this.$emit("tiny:change-page",{page:this.currentPage})},onLimitChange:function(){this.currentPage=1}}},O=E,z=a("b56d"),q=Object(v["a"])(O,A,M,!1,null,null,null),j=q.exports;g()(q,{VSelect:z["a"]}),i["a"].use(H.a);var B={props:["index"],components:{"tiny-pagination":j},data:function(){return{dialog_createDossier:!1,dialogVerifycation:!1,dialogLogin:!1,valid:!1,userName:"",passWord:"",loadingLogin:!1,pathRouter:"/thu-tuc-hanh-chinh/",serviceInfoList:[],totalThuTuc:0,thutucPage:1,govAgencySelected:{},govAgencyThucHienSelected:{},domainListCurrent:[],domainSelected:{},levelSelected:{},serviceNameKey:"",serviceDetail:"",dialogGuide:!1,loading:!0,headers:[{text:"STT",align:"center",sortable:!1},{text:"Thủ tục hành chính Bộ giao thông vận tải",align:"center",sortable:!1},{text:"Thủ tục hành chính Dịch vụ công quốc gia",align:"center",sortable:!1}],isLogin:!1,verificationApplicantCreateDossier:!1,serviceSelected:"",hasCoQuanThucHien:!1,configUrl:""}},computed:{},created:function(){var t=this;t.$nextTick(function(){t.doLoadingThuTuc()})},updated:function(){var t=this;t.$nextTick(function(){})},watch:{$route:function(t,e){var a=this;t.params,t.query;a.doLoadingThuTuc()}},methods:{filterServiceName:function(){var t=this;setTimeout(function(){var e=t.$router.history.current,a=e.query,i="?";for(var n in a["page"]=1,a["keyword"]=t.serviceNameKey,a)""!==a[n]&&"undefined"!==a[n]&&void 0!==a[n]&&null!==a[n]&&(i+=n+"="+a[n]+"&");t.$router.push({path:t.pathRouter+i,query:{renew:Math.floor(100*Math.random())+1}})},100)},doLoadingThuTuc:function(){var t=this;t.serviceInfoList=[],t.loading=!0;var e=t.$router.history.current.query,a=null;a={page:e.page?e.page:1},t.$store.dispatch("getServiceLists",a).then(function(a){t.loading=!1,a.data?(t.serviceInfoList=a.data,t.thutucPage=Number(e.page)?Number(e.page):1,t.totalThuTuc=a.total):(t.totalThuTuc=0,t.serviceInfoList=[]),t.serviceItemTotal=a.total}).catch(function(e){t.loading=!1,t.serviceInfoList=[],t.totalThuTuc=0,t.thutucPage=1})},doActionMapping:function(t,e,a){console.log(t,e,a),setTimeout(function(){e["mapped"]?vm.mappingDvcqg(t,e,a):vm.removeMapping(t,e,a)},300)},mappingDvcqg:function(t,e,a){var i=this,n={serviceCode:t.serviceCode,serviceCodeDVCQG:e.serviceCodeDVCQG};i.$store.dispatch("mappingDvcqg",n).then(function(n){i.syncServiceinfo(t,e,a)}).catch(function(){H.a.error("Đồng bộ thất bại")})},removeMapping:function(t,e,a){var i=this,n={serviceCode:t.serviceCode};i.$store.dispatch("removeMappingDvcqg",n).then(function(t){H.a.clear(),H.a.success("Hủy đồng bộ thành công")}).catch(function(){H.a.error("Hủy đồng bộ thất bại")})},syncServiceinfo:function(t,e,a){var i=this,n={serviceCode:t.serviceCode};i.$store.dispatch("syncServiceinfo",n).then(function(t){H.a.clear(),H.a.success("Đồng bộ thành công")}).catch(function(){H.a.error("Đồng bộ thất bại")})},paggingData:function(t){var e=this,a=e.$router.history.current,i=a.query,n="?";for(var o in i["page"]="",i)""!==i[o]&&"undefined"!==i[o]&&void 0!==i[o]&&null!==i[o]&&"null"!==i[o]&&(n+=o+"="+i[o]+"&");n+="page="+t.page,e.$router.push({path:a.path+n})},getColor:function(t){return 2===t?"green":3===t?"orange darken-1":4===t?"red":void 0}}},G=B,U=a("8336"),K=a("ac7c"),R=a("8fea"),Q=a("132d"),J=a("2677"),X=a("3a2f"),W=Object(v["a"])(G,F,I,!1,null,null,null),Y=W.exports;g()(W,{VBtn:U["a"],VCheckbox:K["a"],VDataTable:R["a"],VIcon:Q["a"],VTextField:J["a"],VTooltip:X["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  13123\n")])},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-chitiet"},[a("div",[a("v-tabs",{attrs:{"icons-and-text":""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tabs-slider",{attrs:{color:"primary"}}),a("v-tab",{key:1,attrs:{href:"#tabs-1"},on:{click:function(e){t.getNextActions()}}},[a("v-btn",{staticClass:"px-0 py-0 mx-0 my-0",attrs:{flat:""}},[3===t.originality?a("span",[t._v("XỬ LÝ HỒ SƠ")]):a("span",[t._v("CHUẨN BỊ HỒ SƠ")])])],1),a("v-tabs-items",{staticStyle:{overflow:"visible!important"},attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-tab-item",{key:1,attrs:{value:"tabs-1","reverse-transition":"fade-transition",transition:"fade-transition"}},[0!==t.checkInput&&t.filterNextActionEnable(t.btnDossierDynamics)?a("div",{staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0]}},[a("v-expansion-panel-content",{key:1,attrs:{"hide-actions":""}},[t._v("\n                123\n              ")])],1)],1):t._e(),t.btnStateVisible?a("div",{staticClass:"px-4 py-3",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t._l(t.btnPlugins,function(e,i){return a("v-btn",{key:i,staticClass:"ml-0 mr-2",attrs:{color:"primary",loading:t.loadingPlugin,disabled:t.loadingPlugin},nativeOn:{click:function(a){t.processPullBtnplugin(e,i)}}},[t._v("\n              "+t._s(e.pluginName)+"\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])}),t.btnStepsDynamics.length>0&&t.thongTinChiTietHoSo["permission"].indexOf("write")>=0?a("v-menu",{staticStyle:{display:"inline-block",position:"relative !important"},attrs:{bottom:"","offset-y":""}},[a("v-btn",{staticClass:"deactive__btn",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Khác   "),a("v-icon",{attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),a("v-list",t._l(t.btnStepsDynamics,function(e,i){return a("v-list-tile",{key:i,on:{click:function(a){t.btnActionEvent(e,i)}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)}),1)],1):t._e()],2):t._e()])],1)],1)],1)])},at=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[t._l(t.dossierTemplateItems,function(e,i){return t.partTypes.includes(e.partType)&&t.checkVisibleTemp(e,i)?a("div",{key:e.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[a("v-expansion-panel",{staticClass:"expaned__list__data",attrs:{expand:"",value:[t.currentFormView==="formAlpaca"+e.partNo+t.id]}},[a("v-expansion-panel-content",{attrs:{"hide-actions":""}},[a("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(e){t.stateView=!1}},slot:"header"},[a("div",{staticStyle:{"align-items":"center",background:"#fff","padding-left":"25px"},style:{width:t.checkStyle(e)}},[a("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex"},on:{click:function(a){t.onlyView&&e.hasForm?t.viewFile2(e):t.loadAlpcaForm(e)}}},[a("div",{staticClass:"header__tphs"},[a("span",{staticClass:"text-bold"},[t._v(t._s(i+1)+".")]),t._v("  ")]),a("div",{staticClass:"header__tphs"},[a("v-tooltip",{staticStyle:{"max-width":"100% !important"},attrs:{top:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                      "+t._s(e.partName)+"  \n                      "),e.required?a("span",{staticStyle:{color:"red"}},[t._v(" (*) ")]):t._e(),t._v("\n                        \n                    ")]),e.partTip["tip"]?a("span",[t._v(t._s(e.partTip["tip"]))]):t._e()]),e.hasForm&&e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Đã khai)")])]):t._e(),e.hasForm&&!e.daKhai&&(1===t.originality&&2!==e.partType||1!==t.originality)?a("v-tooltip",{attrs:{top:""}},[a("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),a("span",[t._v("Biểu mẫu trực tuyến (Chưa khai)")])]):t._e(),t._v("\n                    \n                  "),!e.hasForm&&e.hasFileTemp?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(a){a.stopPropagation(),t.downloadFileTemplate(e,i)}},slot:"activator"},[t._v("save_alt")]),a("span",[t._v("Biểu mẫu điền thủ công")])],1):t._e()],1)]),a("div",{staticStyle:{display:"flex"}},[1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(t){return!!t||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.changeFileComment(e,i)}},model:{value:e.fileComment,callback:function(a){t.$set(e,"fileComment",a)},expression:"item.fileComment"}}):t._e(),1===t.checkInput&&2===e.fileCheck&&e.stateEditFileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){a.stopPropagation(),t.changeFileComment(e,i)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("send")])],1),a("span",[t._v("Gửi")])],1):t._e()],1),e.fileComment&&!e.stateEditFileCheck?a("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[t._v(t._s(e.fileComment))]):t._e(),e.fileComment&&!e.stateEditFileCheck&&1===t.checkInput?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(t){t.stopPropagation(),e.stateEditFileCheck=!e.stateEditFileCheck}},slot:"activator"},[t._v("edit")]),a("span",[t._v("Chỉnh sửa ý kiến")])],1):t._e(),t._l(t.dossierFilesItems,function(i,n){return e.partNo!==i.dossierPartNo||i.eForm?t._e():a("div",{key:n},[a("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.viewFile2(i)}}},[0!==i.fileSize?a("v-icon",[t._v("attach_file")]):t._e(),t._v("\n                    "+t._s(i.displayName)+" - \n                    "),a("i",[t._v(t._s(i.modifiedDate))])],1),t.onlyView||1===t.checkInput?t._e():a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(e){e.stopPropagation(),t.deleteSingleFile(i,n)}}},[a("v-icon",{staticStyle:{color:"red"}},[t._v("delete_outline")])],1)],1)])}),a("div",{staticClass:"mr-3 my-1 py-2",staticStyle:{display:"none",border:"1px solid #f3ae75"},attrs:{id:"fileApplicant-"+e.partNo}},t._l(t.dossierFilesApplicant,function(i,n){return i.dossierTemplateNo===t.thongTinHoSo["dossierTemplateNo"]&&e.partNo===i.dossierPartNo?a("div",{key:n},[i.eForm?a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[a("i",{staticClass:"ml-1 fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"}}),t._v("  \n                        "+t._s(i.referenceUid)+"."+t._s(i.fileType)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])]),a("span",[t._v("Bản khai trực tuyến")])])],1):a("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[a("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[a("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[0!==i.fileSize?a("v-icon",{staticStyle:{color:"#0d71bb"}},[t._v("attach_file")]):t._e(),t._v("\n                        "+t._s(i.displayName)+" - \n                        "),a("i",[t._v(t._s(i.modifiedDate))])],1),a("span",[t._v("Đính kèm")])])],1)]):t._e()}),0)],2)]),e.hasForm&&!t.onlyView?a("v-card",[a("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[a("v-layout",{attrs:{wrap:""}},[t.stateView?t._e():a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("div",{style:t.pstFixed>t.pstEl&&t.pstFixed<t.endEl+t.pstEl?"position:fixed;top:5px;z-index:101":"",attrs:{id:"wrapForm"+e.partNo+t.id}},[e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.saveAlpacaForm(e,i)}}},[t._v("Lưu lại")]):t._e(),e.daKhai&&e.hasForm&&!t.onlyView&&1!==t.checkInput?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.deleteSingleFileEform(e,i)}}},[t._v("Xóa")]):t._e(),e.daKhai&&e.hasForm?a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.previewFileEfom(e,i)}}},[t._v("In")]):t._e()],1),!t.onlyView||e.daKhai?a("div",{class:{no_acction__event:t.onlyView},attrs:{id:"formAlpaca"+e.partNo+t.id}}):t._e()])],1)],1)],1):t._e()],1)],1),a("div",{staticClass:"absolute__btn group__thanh_phan mr-1"},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("v-layout",{attrs:{row:"",wrap:""}},[1===t.originality||1!==e.partType||t.thongTinHoSo.online||1===t.checkInput?t._e():a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[a("v-select",{attrs:{items:t.fileMarkItems,disabled:t.onlyView},on:{change:function(e){t.changeFileMark(e,i)}},model:{value:t.dossierTemplateItems[i].fileMark,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileMark",e)},expression:"dossierTemplateItems[index].fileMark"}})],1),1===t.checkInput?a("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[a("v-select",{attrs:{items:t.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(e){t.changeFileCheck(e,i)}},model:{value:t.dossierTemplateItems[i].fileCheck,callback:function(e){t.$set(t.dossierTemplateItems[i],"fileCheck",e)},expression:"dossierTemplateItems[index].fileCheck"}})],1):e.fileCheck>0?a("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":t.thongTinHoSo.online?"10px":"0px"}},[1===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("done")]),a("span",[t._v("Đạt")])],1):2===e.fileCheck?a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("close")]),a("span",[t._v("Không đạt")])],1):t._e()],1):t._e(),1!==t.checkInput?a("v-flex",{class:{"text-xs-right":t.onlyView},style:{width:t.onlyView?"auto":"90px"}},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+e.partNo},on:{change:function(a){t.onUploadSingleFile(a,e,i)}}}),3!==e.partType||3!==t.originality||t.onlyView?t._e():a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.addFileOther(e)}},slot:"activator"},[a("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("add")])],1),a("span",[t._v("Thêm giấy tờ khác")])],1),t.progressUploadPart===e.partNo?a("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):t.progressUploadPart===e.partNo||t.onlyView?t._e():a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.pickFile(e)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("cloud_upload")])],1)],1),e.partTip["extensions"]||e.partTip["maxSize"]?a("span",[t._v("Chấp nhận tải lên các định dạng: "+t._s(e.partTip["extensions"])+". Tối đa "+t._s(e.partTip["maxSize"])+" MB ")]):a("span",[t._v("Tải file lên")])],1),t.partNoApplicantHasFile(e.partNo)&&!t.onlyView?a("v-tooltip",{attrs:{top:""}},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(a){t.showFilesApplicant(e.partNo)}},slot:"activator"},[a("v-badge",[a("v-icon",{attrs:{size:"16",color:"orange darken-3"}},[t._v("warning")])],1)],1),a("span",[t._v("Giấy tờ đã nộp")])],1):t._e()],1):t._e()],1)],1)],1):t._e()}),t.partTypes.includes(2)?t._e():a("div",[a("v-layout",{staticClass:"mx-4",attrs:{wrap:""}},[!t.onlyView||t.onlyView&&t.applicantNoteDossier?a("v-flex",{staticClass:"my-0 py-2 text-bold",staticStyle:{width:"60px"}},[t._v("Ghi chú:")]):t._e(),a("v-flex",{staticStyle:{width:"calc(100% - 80px)"}},[t.onlyView?t._e():a("div",{staticClass:"pl-2"},[a("v-text-field",{staticClass:"py-0",attrs:{"multi-line":"",rows:"3"},on:{input:t.changeApplicantNote},model:{value:t.applicantNoteDossier,callback:function(e){t.applicantNoteDossier=e},expression:"applicantNoteDossier"}})],1),t.onlyView&&t.applicantNoteDossier?a("p",{staticClass:"my-0 py-2"},[t._v("\n            "+t._s(t.applicantNoteDossier)+" \n          ")]):t._e()])],1)],1),a("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:t.dialogAddOtherTemp,callback:function(e){t.dialogAddOtherTemp=e},expression:"dialogAddOtherTemp"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticClass:"headline"},[t._v("Tên giấy tờ")]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[a("v-icon",[t._v("clear")])],1),t.loadingAddOther?a("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):t._e(),a("v-card-text",{staticClass:"pb-0 pt-4"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"px-2 pb-3 fix__label",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(t){return!!t||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:t.otherDossierTemplate,callback:function(e){t.otherDossierTemplate=e},expression:"otherDossierTemplate"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(e){return t.cancelDialog(e)}}},[t._v("\n              Quay lại\n            ")]),a("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loadingAddOther},nativeOn:{click:function(e){return t.addOtherTemplate(e)}}},[t._v("\n              Đồng ý\n              "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])],1)],1)],1)],1)],2),a("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:t.dialogPDF,callback:function(e){t.dialogPDF=e},expression:"dialogPDF"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t.pdfEform?a("span",[t._v("Bản khai trực tuyến")]):a("span",[t._v("File đính kèm")])]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogPDF=!1}}},[a("v-icon",[t._v("clear")])],1),t.dialogPDFLoading?a("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):t._e(),a("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+t.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},nt=[],ot={data:function(){return{}}},st=ot,rt=a("4ca6"),lt=a("b0af"),ct=a("99d9"),pt=a("12b2"),dt=a("169a"),ut=a("cd55"),vt=a("49e2"),ht=a("4bd4"),gt=a("8e36"),ft=a("9910"),mt=Object(v["a"])(st,it,nt,!1,null,null,null),yt=mt.exports;g()(mt,{VBadge:rt["a"],VBtn:U["a"],VCard:lt["a"],VCardActions:ct["a"],VCardText:ct["b"],VCardTitle:pt["a"],VDialog:dt["a"],VExpansionPanel:ut["a"],VExpansionPanelContent:vt["a"],VFlex:S["a"],VForm:ht["a"],VIcon:Q["a"],VLayout:P["a"],VProgressCircular:D["a"],VProgressLinear:gt["a"],VSelect:z["a"],VSpacer:ft["a"],VTextField:J["a"],VTooltip:X["a"]});var _t={props:["index","id"],components:{"thanh-phan-ho-so":yt},data:function(){return{}}},xt=_t,bt=a("8860"),Ct=a("ba95"),wt=a("5d23"),kt=a("e449"),Tt=a("71a3"),St=a("c671"),Pt=a("fe57"),Dt=a("aac8"),Lt=a("9a96"),Vt=Object(v["a"])(xt,et,at,!1,null,null,null),Ft=Vt.exports;g()(Vt,{VBtn:U["a"],VExpansionPanel:ut["a"],VExpansionPanelContent:vt["a"],VIcon:Q["a"],VList:bt["a"],VListTile:Ct["a"],VListTileTitle:wt["b"],VMenu:kt["a"],VTab:Tt["a"],VTabItem:St["a"],VTabs:Pt["a"],VTabsItems:Dt["a"],VTabsSlider:Lt["a"]});var It={props:["id","formCode"],components:{"xem-chi-tiet-ho-so-detail-can-bo":Ft},data:function(){return{initData:null,step:""}}},Nt=It,Ht=Object(v["a"])(Nt,Z,tt,!1,null,null,null),At=Ht.exports,Mt=[{path:"/",name:"LandingServiceInfo",component:Y,props:!0},{path:"/danh-sach-ho-so/:index",name:"Landing",component:function(){return a.e("Landing").then(a.bind(null,"306c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return a.e("TiepNhanHoSoDetail").then(a.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return a.e("HoanThienBoSungHoSoDetail").then(a.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/ho-so/:id/:formCode",name:"DetailForward",component:At,props:!0},{path:"*",name:"NotFound",component:V}];i["a"].use(x["a"]);var $t=new x["a"]({routes:Mt}),Et=$t,Ot=a("2f62");i["a"].use(H.a),i["a"].use(Ot["a"]);var zt=new Ot["a"].Store({state:{initData:{},endPoint:"/o/rest/v2",loading:!1,index:0,agencyList:[],agencyListThucHien:[],domainList:[],levelList:[],isMobile:!1,userLogin:""},actions:{loadInitResource:function(t){t.commit;var e=t.state;return new Promise(function(t,a){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData["groupId"]=window.themeDisplay.getScopeGroupId(),e.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData["groupId"]=0,e.initData["user"]={userName:"",userEmail:"",userId:20103}),t(e.initData)})},getServiceLists:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){zt.dispatch("loadInitResource").then(function(n){var o={start:15*e.page-15,end:15*e.page},s={headers:{groupId:a.initData.groupId},params:o};l.a.get(a.endPoint+"/serviceinfos/mappingsuggest",s).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),i(t)})})})},getServiceDetail:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){zt.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:a.initData.groupId}};l.a.get(a.endPoint+"/serviceinfos/"+e.index,o).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),i(t)})})})},mappingDvcqg:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){zt.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:a.initData.groupId}},s=new URLSearchParams;s.append("serviceCode",e.serviceCode),s.append("serviceCodeDVCQG",e.serviceCodeDVCQG),l.a.post("/o/rest/v2/nps/mappingserviceinfo",s,o).then(function(e){e.data?t(e.data):t("")}).catch(function(t){i(t)})})})},removeMappingDvcqg:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){zt.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:a.initData.groupId}},s=new URLSearchParams;s.append("serviceCode",e.serviceCode),l.a.delete("/o/rest/v2/nps/removemappingserviceinfo",s,o).then(function(e){e.data?t(e.data):t("")}).catch(function(t){i(t)})})})},syncServiceinfo:function(t,e){t.commit;var a=t.state;return new Promise(function(t,i){zt.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:a.initData.groupId}},s=new URLSearchParams;s.append("serviceCode",e.serviceCode),l.a.post("/o/rest/v2/nps/syncserviceinfo",s,o).then(function(e){e.data?t(e.data):t("")}).catch(function(t){i(t)})})})}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e},setAgencyList:function(t,e){t.agencyList=e},setAgencyListThucHien:function(t,e){t.agencyListThucHien=e},setDomainList:function(t,e){t.domainList=e},setLevelList:function(t,e){t.levelList=e},setIsMobile:function(t,e){t.isMobile=e},setUserLogin:function(t,e){t.userLogin=e}},getters:{loading:function(t){return t.loading},index:function(t){return t.index},getAgencyList:function(t){return t.agencyList},getAgencyListThucHien:function(t){return t.agencyListThucHien},getDomainList:function(t){return t.domainList},getLevelList:function(t){return t.levelList},getIsMobile:function(t){return t.isMobile},getUserLogin:function(t){return t.userLogin}}}),qt=a("967d");i["a"].use(qt["default"]);var jt=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;l.a.defaults.withCredentials=!0,l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",l.a.defaults.headers.common["groupId"]=jt,i["a"].config.productionTip=!0,i["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new i["a"]({router:Et,store:zt,created:function(){var t=this;t.$nextTick(function(){})},render:function(t){return t(_)}}).$mount("#app_serviceinfo_mapping")},"74ef":function(t,e,a){},bbd0:function(t){t.exports={}}});
//# sourceMappingURL=app.js.map