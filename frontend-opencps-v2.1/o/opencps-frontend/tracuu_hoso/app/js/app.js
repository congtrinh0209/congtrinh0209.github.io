(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function o(t){return r.p+"../../docs/o/opencps-frontend-cli/tracuu_hoso/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),n=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,a[1](o)}i[t]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;n.push(["56d7","chunk-vendors"]),a()})({"56d7":function(t,e,a){"use strict";a.r(e);a("0f18");var s=a("a026"),i=a("bb71");a("74ef");s["a"].use(i["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"#fff !important"},attrs:{id:"app_tracuu_hoso"}},[a("v-content",{staticStyle:{width:"100%","max-width":"1300px",margin:"0 auto"}},[a("router-view")],1)],1)},o=[],r={data:function(){return{isMobile:!1}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;t.$nextTick((function(){}))},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},watch:{$route:function(t,e){t.params,t.query}},methods:{onResize:function(){var t=this;t.isMobile=window.innerWidth<1024}}},l=r,c=a("2877"),d=a("6544"),u=a.n(d),p=a("7496"),g=a("549c"),h=Object(c["a"])(l,n,o,!1,null,null,null),v=h.exports;u()(h,{VApp:p["a"],VContent:g["a"]});var f=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},x=[],b={},y=b,_=a("a523"),C=a("0e8f"),w=a("a722"),D=a("490a"),P=Object(c["a"])(y,m,x,!1,null,null,null),I=P.exports;u()(P,{VContainer:_["a"],VFlex:C["a"],VLayout:w["a"],VProgressCircular:D["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{class:t.isMobile?"pt-3":"pt-2",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("div",{class:t.isMobile?"px-2 text-xs-center":"px-2",staticStyle:{"font-size":"20px","font-weight":"500",color:"#0167d3"}},[t._v("TRA CỨU HỒ SƠ")]),a("v-card",{staticClass:"px-2 py-2",attrs:{flat:"",color:"#ffffff"}},[a("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Mã số hồ sơ",box:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.changeDataSearch(e):null}},model:{value:t.dossierNoKey,callback:function(e){t.dossierNoKey=e},expression:"dossierNoKey"}})],1),a("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Số CMND/ hộ chiếu",box:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.changeDataSearch(e):null}},model:{value:t.applicantIdNo,callback:function(e){t.applicantIdNo=e},expression:"applicantIdNo"}})],1),a("v-flex",{class:t.isMobile?"mb-2 right":"mb-2",attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-2 ml-0",attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.changeDataSearch}},[a("v-icon",[t._v("search")]),t._v("  \n            Tìm kiếm\n            "),a("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1),a("v-btn",{attrs:{outline:"",color:"#0072bc"},nativeOn:{click:function(e){return t.goBack(e)}}},[a("v-icon",[t._v("reply")]),t._v("  \n            Quay lại\n          ")],1)],1)],1)],1),a("v-flex",{class:t.isMobile?"pt-1":"pl-3 pt-1",attrs:{xs12:"",sm9:""}},[t.detail?a("v-card",{attrs:{flat:""}},[a("chi-tiet-ho-so",{attrs:{detail:t.dossierDetail}})],1):a("v-card",{attrs:{flat:""}},[t.totalDossier>0?a("div",{},[a("div",{staticClass:"mx-2"},[t._v("Có "),a("span",{staticClass:"text-bold",staticStyle:{color:"#0167d3"}},[t._v(t._s(t.totalDossier))]),t._v(" hồ sơ được tìm thấy")]),a("v-data-table",{staticClass:"table-landing table-bordered mt-3 mx-2",staticStyle:{"border-left":"1px solid #dedede"},attrs:{headers:t.headers,items:t.dossierList,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{class:{active:e.index%2==1},staticStyle:{cursor:"pointer"},on:{click:function(a){t.viewDetail(e.item)}}},[a("td",{staticClass:"text-xs-center py-2"},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(10*t.dossierPage-10+e.index+1))]),a("br")])],1),a("td",{staticClass:"text-xs-left py-2",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(e.item.dossierNo))])])],1),a("td",{staticClass:"text-xs-left py-2",on:{click:function(a){t.viewDetail(e.item)}}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[t._v(t._s(e.item.dossierName))])])],1),a("td",{staticClass:"text-xs-left py-2",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.applicantName))])])])],1),a("td",{staticClass:"text-xs-left py-2",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.receiveDate))])])])],1),a("td",{staticClass:"text-xs-left py-2",staticStyle:{"min-width":"135px"}},[t.loading?a("content-placeholders",[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",[a("span",[a("span",[t._v(t._s(e.item.dossierStatusText))])])])],1)])]}}])}),t.totalDossier>10?a("div",{staticClass:"text-xs-right layout wrap mt-3 px-2",staticStyle:{position:"relative"}},[a("div",{staticClass:"flex pagging-table"},[a("tiny-pagination",{attrs:{total:t.totalDossier,page:t.dossierPage,"custom-class":"custom-tiny-class"},on:{"tiny:change-page":t.paggingData}})],1)]):t._e()],1):a("div",{staticClass:"no-data",staticStyle:{"min-heiht":"350px","text-align":"center",opacity:"0.7"}},[a("img",{staticStyle:{"max-width":"500px","max-height":"350px"},attrs:{src:"/o/opencps-store/js/cli/tracuu_hoso/app/img/browser.svg",alt:"",srcset:""}}),a("br"),a("span",[t._v("Không có hồ sơ nào được tìm thấy")]),a("br"),a("span",[t._v("Vui lòng nhập thông tin tra cứu hồ sơ")])])])],1)],1),a("v-dialog",{attrs:{"max-width":"450"},model:{value:t.dialogCheckPass,callback:function(e){t.dialogCheckPass=e},expression:"dialogCheckPass"}},[a("v-card",{staticClass:"px-0"},[a("v-card-title",{staticClass:"headline",attrs:{color:"primary"}},[t._v("XÁC THỰC TRA CỨU THÔNG TIN HỒ SƠ")]),a("v-divider",{staticClass:"my-0"}),a("v-card-text",{staticClass:"pt-4"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{box:"",label:"Mã tra cứu",height:"42",rules:[function(t){return!!t||"Mã tra cứu là bắt buộc"}],required:""},model:{value:t.secretKey,callback:function(e){t.secretKey=e},expression:"secretKey"}})],1),a("div",{staticClass:"flex primary--text mb-3"},[t._v("Mã tra cứu là dãy số gồm 4 ký tự được in trên giấy tiếp nhận hồ sơ và hẹn trả kết quả, mail thông báo tiếp nhận hồ sơ.")]),a("v-flex",{staticClass:"text-xs-left text-xs-center mt-2",attrs:{xs12:""}},[a("v-btn",{staticClass:"ml-0 mr-1 my-0 white--text",attrs:{color:"#0b72ba",loading:t.loading,disabled:t.loading},on:{click:t.submitPass}},[a("v-icon",[t._v("search")]),t._v(" \n              Tra cứu\n            ")],1),a("v-btn",{staticClass:"ml-1 my-0 white--text",attrs:{color:"#0b72ba",loading:t.loading,disabled:t.loading},on:{click:function(e){t.dialogCheckPass=!1}}},[a("v-icon",[t._v("reply")]),t._v(" \n              Quay lại\n            ")],1)],1)],1)],1)],1)],1)],1)},S=[],k=a("1157"),T=a.n(k),V=a("854a"),M=a.n(V),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.viewMobile?"":"text-align: left;position: absolute;line-height: 46px;"},[t._v("Tổng số "),a("span",{staticClass:"text-bold primary--text"},[t._v(t._s(t.total))]),t._v(" hồ sơ. ")]),t.total>0?a("div",{staticClass:"vue-tiny-pagination pagination layout",style:t.viewMobile?"":"justify-content: flex-end; -webkit-justify-content: flex-end;"},[a("div",{class:t.viewMobile?"pr-3 xs4 flex":"px-3 xs4 flex"},[a("v-autocomplete",{attrs:{items:t.totalPagesData,"item-text":"text","item-value":"value"},on:{input:t.goToPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),a("ul",{staticClass:"tiny-pagination",class:t.customClass},[a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,on:{click:function(e){return e.preventDefault(),t.lastPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("first_page")])])]),a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.lastPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_left")])])]),a("li",{staticClass:"page-item",staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation pagination__navigation--disabled text-bold primary--text",staticStyle:{"border-right":"0","border-left":"0"}},[t._v("\n          "+t._s(t.titlePage)+"\n        ")])]),a("li",{staticClass:"page-item",class:t.classLastPage,staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_right")])])]),a("li",{staticClass:"page-item",class:t.classLastPage},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,on:{click:function(e){return e.preventDefault(),t.nextPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("last_page")])])])])]):t._e()])},R=[],A=a("9029"),O="TinyPagination",E={name:O,props:{total:{type:Number,required:!0},page:{type:Number,default:1},lang:{type:String,default:"en"},customClass:{type:String},limits:{type:Array,default:function(){return[10,15,20,50,100]}},showLimit:{type:Boolean,default:!0}},data:function(){return{version:"0.2.1",currentPage:1,currentLimit:10,translations:{en:{prev:"Previous",title:"Page",next:"Next"}},availableLanguages:["en"]}},created:function(){this.currentPage=this.page},watch:{page:function(t){this.currentPage=parseInt(t)}},computed:{translation:function(){return this.availableLanguages.includes(this.lang)?this.translations[this.lang]:this.translations["en"]},totalPages:function(){return Math.ceil(this.total/this.currentLimit)},totalPagesData:function(){for(var t=[],e={},a=1;a<=this.totalPages;++a)e={value:a,text:"Trang "+a},t.push(e);return t},titlePage:function(){return"".concat(this.currentPage)},classFirstPage:function(){return{"c-not-allowed pagination__navigation--disabled":1===this.currentPage}},classLastPage:function(){return{"c-not-allowed pagination__navigation--disabled":this.currentPage===this.totalPages}},viewMobile:function(){return A["isMobile"]}},methods:{nextPage:function(){this.currentPage!==this.totalPages&&(this.currentPage+=1,this.$emit("tiny:change-page",{page:this.currentPage}))},lastPage:function(){this.currentPage>1&&(this.currentPage-=1,this.$emit("tiny:change-page",{page:this.currentPage}))},nextPageLast:function(){this.currentPage=this.totalPages,this.$emit("tiny:change-page",{page:this.totalPages})},lastPageLast:function(){this.currentPage=1,this.$emit("tiny:change-page",{page:1})},goToPage:function(){this.$emit("tiny:change-page",{page:this.currentPage})},onLimitChange:function(){this.currentPage=1}}},H=E,q=a("c6a6"),z=Object(c["a"])(H,L,R,!1,null,null,null),K=z.exports;u()(z,{VAutocomplete:q["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("content-placeholders",{staticClass:"mt-3"},[a("content-placeholders-text",{attrs:{lines:10}})],1):a("div",[a("v-layout",{staticClass:"wrap"},[a("v-flex",{class:t.isMobile?"pb-2 pl-2":"pb-2"},[t.isMobile?a("h3",{staticStyle:{color:"#0167d3"}},[a("span",{staticClass:"text-bold"},[t._v("Thủ tục hành chính: ")]),t._v(t._s(t.dossierDetail.serviceName))]):a("h3",{staticStyle:{color:"#0167d3"}},[a("span",{staticClass:"text-bold"},[t._v("Tên hồ sơ: ")]),t._v(t._s(t.dossierDetail.dossierName?t.dossierDetail.dossierName:t.dossierDetail.serviceName))])])],1),a("div",{staticClass:"pt-1"},[a("v-tabs",{attrs:{color:"#0167d3",dark:"","slider-color":"yellow","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-tab",{key:"1",staticClass:"mx-2",attrs:{ripple:""}},[t._v(" Thông tin chung ")]),a("v-tab",{key:"2",staticClass:"mx-2",attrs:{ripple:""}},[t._v(" Tiến trình thụ lý ")]),"done"===t.dossierDetail["dossierStatus"]?a("v-tab",{key:"3",staticClass:"mx-2",attrs:{ripple:""},on:{click:function(e){t.loadVoting()}}},[t._v(" Đánh giá chất lượng dịch vụ")]):t._e(),a("v-tab-item",{key:"1"},[a("v-card",{staticStyle:{border:"1px solid #dedede","border-top":"none"}},[a("v-card-text",{staticClass:"px-0 py-0"},[a("v-layout",{staticClass:"px-2 py-2",attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-3",attrs:{xs12:"",sm4:""}},[t.isMobile?a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Tên hồ sơ: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.dossierDetail.dossierName?t.dossierDetail.dossierName:t.dossierDetail.serviceName)+" ")])]):t._e(),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Mã hồ sơ: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.dossierDetail.dossierNo)+" ")])]),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Hình thức nộp: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.dossierDetail.online?"Nộp trực tuyến":"Nộp trực tiếp")+" ")])]),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Đơn vị tiếp nhận: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.dossierDetail.govAgencyName)+" ")])]),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Trạng thái: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.dossierDetail.dossierStatusText)+" ")])])]),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Chủ hồ sơ: ")]),a("span",{staticClass:"pl-0 text-bold"},[t._v(" "+t._s(t.dossierDetail.applicantName)+" ")])]),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Điện thoại: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.dossierDetail.contactTelNo))])]),t.isMobile?a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v(t._s("citizen"===t.dossierDetail.applicantIdType?"Số CMND/ căn cước":"Mã số thuế")+" : ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.dossierDetail.applicantIdNo)+" ")])]):t._e(),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Thư điện tử: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.dossierDetail.contactEmail))])])]),a("v-flex",{attrs:{xs12:"",sm4:""}},[t.dossierDetail.online?a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Ngày gửi: ")]),t.dossierDetail.online?a("span",{staticClass:"pl-0 text-bold"},[t._v(" "+t._s(t.dossierDetail.submitDate)+" ")]):t._e()]):t._e(),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Ngày tiếp nhận: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.dossierDetail.receiveDate))])]),a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pr-2"},[t._v("Ngày hẹn trả: ")]),a("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.dossierDetail.dueDate?t.dossierDetail.dueDate:"Chưa có ngày hẹn trả"))])])]),a("v-flex",{attrs:{xs12:"",sm4:""}},[t.dossierDetail.dossierNote&&"null"!==t.dossierDetail.dossierNote&&t.dossierDetail.dossierNote.indexOf("<br/>")<0?a("div",{staticClass:"xs12 sm12 pb-1",staticStyle:{color:"#0b72ba"}},[t._v("Ghi chú:")]):t._e(),t.dossierDetail.dossierNote&&"null"!==t.dossierDetail.dossierNote&&t.dossierDetail.dossierNote.indexOf("<br/>")<0?a("div",{staticClass:"xs12 sm12 pb-1 overHidden"},[a("v-tooltip",{attrs:{top:""}},[a("span",{staticClass:"text-bold ",attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.dossierDetail.dossierNote)+" ")]),a("span",{staticClass:"pl-0",domProps:{innerHTML:t._s(t.dossierDetail.dossierNote)}})])],1):t._e(),t.dossierDetail.extendDate?a("div",{staticClass:"xs12 sm12 pb-1"},[a("span",{staticClass:"pl-0 text-bold"},[t._v("Hẹn lại: "+t._s(t.dossierDetail.extendDate))])]):t._e()])],1)],1)],1)],1),a("v-tab-item",{key:"2"},[a("v-card",{staticStyle:{border:"1px solid #dedede","border-top":"none"}},[a("v-card-text",{staticClass:"px-0 py-0"},[a("div",[a("v-data-table",{staticClass:"table-landing table-bordered",attrs:{headers:t.isMobile?t.headersMobile:t.headers,items:t.dossierActions,"hide-actions":"","no-data-text":"Không có dữ liệu"},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                        "+t._s(e.header.text)+"\n                      ")]),a("span",[t._v("\n                        "+t._s(e.header.text)+"\n                      ")])])]}},{key:"items",fn:function(e){return t.isMobile?void 0:[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.index+1))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.sequenceRole))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.sequenceName))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.durationCount)+" ngày")]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(t._f("dateTimeView")(e.item.startDate)))]),a("td",{staticClass:"text-xs-left"},t._l(e.item.assignUsers,(function(e){return a("div",{key:e.userId},[t._v("\n                        "+t._s(e.userName)+" "),a("br")])})),0),a("td",{staticClass:"text-xs-left"},[t._l(e.item.actions,(function(e,s){return a("div",{key:s},[t._v("\n                        "+t._s(t._f("dateTimeView")(e.createDate))+" : "),a("span",{staticStyle:{color:"#0b72ba"}},[t._v(t._s(e.actionName))])])})),e.item.statusText?a("div",[a("span",{staticStyle:{color:"green"}},[t._v(t._s(e.item.statusText))])]):t._e()],2)]}}])})],1)])],1)],1),a("v-tab-item",{key:"3"},[a("v-card",{staticStyle:{border:"1px solid #dedede","border-top":"none"}},[a("v-card-text",{staticClass:"px-2 py-2"},[a("div",[t._l(t.votingItems,(function(e,s){return t.votingItems.length>0?a("div",{key:s},[a("div",{staticClass:"text-bold"},[t._v("\n                    "+t._s(s+1)+".  "+t._s(e.subject)+"\n                  ")]),a("v-radio-group",{staticClass:"ml-3 pt-2",attrs:{row:""},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"item.selected"}},t._l(e.choices,(function(t,e){return a("v-radio",{key:e,attrs:{label:t,value:e+1}})})),1),a("v-layout",{staticClass:"ml-3",staticStyle:{"margin-top":"-10px"},attrs:{wrap:""}},t._l(e.answers,(function(s,i){return a("v-flex",{key:i,staticStyle:{"margin-left":"45px"}},[a("span",{staticClass:"text-bold",staticStyle:{color:"green"}},[t._v(t._s(s)+"/"+t._s(e.answersCount))])])})),1)],1):t._e()})),0===t.votingItems.length?a("div",{staticClass:"mx-3"},[a("v-alert",{attrs:{outline:"",color:"warning",icon:"priority_high",value:!0}},[t._v("\n                    Không có đánh giá\n                  ")])],1):t._e(),t.votingItems.length>0?a("div",{staticClass:"ml-3"},[a("v-btn",{attrs:{color:"primary",loading:t.loadingVoting,disabled:t.loadingVoting},on:{click:t.submitVoting}},[t._v("Gửi đánh giá")])],1):t._e()],2)])],1)],1)],1)],1)],1)],1)},F=[],U=(a("a18c"),{props:["index","detail"],components:{},data:function(){return{loading:!1,loadingAction:!1,dossierDetail:{},listHistoryProcessing:[],dossierActions:[],tailieuNop:[],tailieuKeyQua:[],votingItems:[],loadingVoting:!1,headers:[{text:"#",align:"center",sortable:!1},{text:"Vai trò",align:"center",sortable:!1,class:"vaitro_column"},{text:"Công việc",align:"center",sortable:!1,class:"congviec_column"},{text:"Thời hạn quy định",align:"center",sortable:!1,class:"thoihanquydinh_column"},{text:"Ngày bắt đầu",align:"center",sortable:!1,class:"ngaybatdau_column"},{text:"Người thực hiện",align:"center",sortable:!1,class:"nguoithuchien_column"},{text:"Kết quả",align:"center",sortable:!1,class:"ketqua_column"}],headersMobile:[{text:"TT",align:"center",sortable:!1},{text:"Công việc",align:"center",sortable:!1,class:"congviec_column"},{text:"Bộ phận xử lý",align:"center",sortable:!1,class:"vaitro_column"},{text:"Ngày bắt đầu",align:"center",sortable:!1,class:"ngaybatdau_column"},{text:"Kết quả",align:"center",sortable:!1,class:"ketqua_column"}],isMobile:!1,two_system:!1}},computed:{},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){var t=this;t.onResize(),window.addEventListener("resize",t.onResize,{passive:!0}),console.log("isMobile",t.isMobile),t.isMobile&&$("section#content").css("padding-left","0px")},created:function(){var t=this;t.$nextTick((function(){try{t.two_system=two_system_config}catch(n){}if(t.dossierDetail=t.detail,t.dossierDetail.submissionNote){var e=t.dossierDetail.submissionNote?JSON.parse(t.dossierDetail.submissionNote):"",a=e?e.data:"";if(a){for(var s=0;s<a.length;s++)if(a[s].hasOwnProperty("actions")&&null!==a[s]["actions"]&&void 0!==a[s]["actions"]&&!Array.isArray(a[s]["actions"])){var i=[];i.push(a[s]["actions"]),a[s]["actions"]=i}t.dossierActions=a}}}))},watch:{},methods:{loadDossierActions:function(){var t=this,e={dossierId:t.dossierDetail.dossierId};0===t.dossierDetail.originality||"0"===t.dossierDetail.originality||t.$store.dispatch("loadDossierActions",e).then((function(e){if(e.data){for(var a=e.data,s=0;s<a.length;s++)if(a[s].hasOwnProperty("actions")&&null!==a[s]["actions"]&&void 0!==a[s]["actions"]&&!Array.isArray(a[s]["actions"])){var i=[];i.push(a[s]["actions"]),a[s]["actions"]=i}t.dossierActions=a}}))},loadLogs:function(){var t=this,e={dossierId:t.dossierDetail.dossierId};t.$store.dispatch("getListHistoryProcessingItems",e).then((function(e){t.listHistoryProcessing=[],t.listHistoryProcessing=e}))},loadVoting:function(){var t=this,e={className:"dossier",classPK:t.dossierDetail.dossierId};t.two_system?t.$store.dispatch("loadVoting",e).then((function(e){t.votingItems=e,console.log("votingItems",t.votingItems)})).catch((function(t){})):t.$store.dispatch("loadVotingMC",e).then((function(e){t.votingItems=e,console.log("votingItems",t.votingItems)})).catch((function(t){}))},submitVoting:function(){var t=this,e=[];if(t.votingItems.length>0){for(var a in t.loadingVoting=!0,t.votingItems)t.votingItems[a]["className"]="dossier",t.votingItems[a]["classPk"]=t.dossierDetail.dossierId,t.votingItems[a]["serverCode"]="SERVER_"+t.dossierDetail["govAgencyCode"],t.two_system?e.push(t.$store.dispatch("submitVotingMC",t.votingItems[a])):e.push(t.$store.dispatch("submitVoting",t.votingItems[a]));Promise.all(e).then((function(e){t.loadingVoting=!1,t.loadVoting()})).catch((function(e){t.loadingVoting=!1}))}},goBack:function(){window.history.back()},onResize:function(){var t=this;t.isMobile=window.innerWidth<1024}},filters:{dateTimeView:function(t){if(t){var e=new Date(Number(t));return"".concat(e.getDate().toString().padStart(2,"0"),"/").concat((e.getMonth()+1).toString().padStart(2,"0"),"/").concat(e.getFullYear()," ").concat(e.getHours().toString().padStart(2,"0"),":").concat(e.getMinutes().toString().padStart(2,"0"))}return""}}}),B=U,G=a("0798"),J=a("8336"),Q=a("b0af"),W=a("99d9"),Y=a("8fea"),X=a("67b6"),Z=a("43a6"),tt=a("71a3"),et=a("c671"),at=a("fe57"),st=a("3a2f"),it=Object(c["a"])(B,j,F,!1,null,null,null),nt=it.exports;u()(it,{VAlert:G["a"],VBtn:J["a"],VCard:Q["a"],VCardText:W["a"],VDataTable:Y["a"],VFlex:C["a"],VLayout:w["a"],VRadio:X["a"],VRadioGroup:Z["a"],VTab:tt["a"],VTabItem:et["a"],VTabs:at["a"],VTooltip:st["a"]}),s["a"].use(M.a),M.a.options={closeButton:!0,timeOut:"3000"};var ot={props:[],components:{"tiny-pagination":K,"chi-tiet-ho-so":nt},data:function(){return{dossierList:[],dossierSelected:"",detail:!1,dossierDetail:"",dossierNoKey:"",applicantIdNo:"",totalDossier:0,dossierPage:1,loading:!1,valid:!1,secretKey:"",dialogCheckPass:!1,headers:[{text:"STT",align:"center",sortable:!1},{text:"Mã hồ sơ",align:"center",sortable:!1},{text:"Tên hồ sơ",align:"center",sortable:!1},{text:"Chủ hồ sơ",align:"center",sortable:!1},{text:"Ngày nộp",align:"center",sortable:!1},{text:"Trạng thái",align:"center",sortable:!1}],isMobile:!1}},computed:{originality:function(){var t=this;return t.getOriginality()}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){var t=this;t.onResize(),window.addEventListener("resize",t.onResize,{passive:!0}),console.log("isMobile",t.isMobile),t.isMobile&&T()("section#content").css("padding-left","0px")},created:function(){var t=this;t.$nextTick((function(){var t=this,e=t.$router.history.current,a=e.query;(a.dossierNo||a.applicantIdNo)&&t.doSearchDossier()}))},updated:function(){var t=this;t.$nextTick((function(){}))},watch:{$route:function(t,e){var a=this;t.params,t.query;a.doSearchDossier()}},methods:{doSearchDossier:function(){var t=this;t.detail=!1;var e=t.$router.history.current,a=e.query;t.loading=!0,t.dossierList=[],t.dossierNoKey=a.hasOwnProperty("dossierNo")?a.dossierNo:"",t.applicantIdNo=a.hasOwnProperty("applicantIdNo")?a.applicantIdNo:"",t.dossierPage=a.hasOwnProperty("page")?Number(a.page):1;var s={page:t.dossierPage,dossierNo:t.dossierNoKey,applicantIdNo:t.applicantIdNo};t.$store.dispatch("loadingDataHoSo",s).then((function(e){t.loading=!1,t.totalDossier=e.total,t.dossierList=e.data?e.data:[]})).catch((function(e){t.loading=!1}))},changeDataSearch:function(){var t=this;(String(t.dossierNoKey).length>3||String(t.applicantIdNo).length>3)&&setTimeout((function(){var e=t.$router.history.current,a=e.query,s="?";for(var i in a["page"]=t.dossierPage,a["dossierNo"]=t.dossierNoKey,a["applicantIdNo"]=t.applicantIdNo,a)""!==a[i]&&"undefined"!==a[i]&&void 0!==a[i]&&null!==a[i]&&(s+=i+"="+a[i]+"&");t.$router.push({path:e.path+s,query:{renew:Math.floor(100*Math.random())+1}})}),100)},viewDetail:function(t){var e=this;e.dossierSelected=t,e.dialogCheckPass=!0},submitPass:function(){var t=this;t.$router.history.current;if(t.$refs.form.validate()){var e={password:t.secretKey,dossierId:t.dossierSelected.dossierId};t.$store.dispatch("getDossierDetailPass",e).then((function(e){t.loading=!1,e.status&&"203"===e.status.toString()?M.a.error("Mã tra cứu không chính xác. Vui lòng thử lại."):e.status&&"200"===e.status.toString()&&(t.dialogCheckPass=!1,t.dossierDetail=e.data,t.detail=!0)})).catch((function(e){t.loading=!1,M.a.error("Lỗi hệ thống")}))}},onResize:function(){var t=this;t.isMobile=window.innerWidth<1024},paggingData:function(t){var e=this,a=e.$router.history.current,s=a.query,i="?";for(var n in s["page"]="",s)""!==s[n]&&"undefined"!==s[n]&&void 0!==s[n]&&null!==s[n]&&"null"!==s[n]&&(i+=n+"="+s[n]+"&");i+="page="+t.page,e.$router.push({path:a.path+i})},goBack:function(){window.history.back()}}},rt=ot,lt=a("12b2"),ct=a("169a"),dt=a("ce7e"),ut=a("4bd4"),pt=a("132d"),gt=a("2677"),ht=Object(c["a"])(rt,N,S,!1,null,null,null),vt=ht.exports;u()(ht,{VBtn:J["a"],VCard:Q["a"],VCardText:W["a"],VCardTitle:lt["a"],VDataTable:Y["a"],VDialog:ct["a"],VDivider:dt["a"],VFlex:C["a"],VForm:ut["a"],VIcon:pt["a"],VLayout:w["a"],VTextField:gt["a"]});var ft=[{path:"/",name:"Landing",component:vt,props:!1},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return a.e("TiepNhanHoSoDetail").then(a.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return a.e("HoanThienBoSungHoSoDetail").then(a.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"*",name:"NotFound",component:I}];s["a"].use(f["a"]);var mt=new f["a"]({routes:ft}),xt=mt,bt=a("2f62"),yt=a("bc3a"),_t=a.n(yt);s["a"].use(M.a),s["a"].use(bt["a"]),M.a.options={closeButton:!0,timeOut:"3000"};var Ct=new bt["a"].Store({state:{initData:{},loading:!1,user:{role:""},endPointApi:"/o/rest/v2",dossierDetail:""},actions:{loadInitResource:function(t){var e=t.commit,a=t.state;return new Promise((function(t,s){null!==window.themeDisplay&&void 0!==window.themeDisplay?(a.initData["groupId"]=window.themeDisplay.getScopeGroupId(),a.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(a.initData["groupId"]=0,a.initData["user"]={userName:"",userEmail:"",userId:20103}),""===a["user"].role?Ct.dispatch("getRoleUser").then((function(s){a["user"].role=s,e("setInitData",a.initData),t(a.initData)})).catch((function(s){a["user"].role=["default"],e("setInitData",a.initData),t(a.initData),console.log(s)})):(e("setInitData",a.initData),t(a.initData))}))},loadingDataHoSo:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n={headers:{groupId:a.initData.groupId},params:{start:10*e.page-10,end:10*e.page,dossierNo:e.dossierNo?e.dossierNo:"",applicantIdNo:e.applicantIdNo?e.applicantIdNo:""}};_t.a.get(a.endPointApi+"/dossiers",n).then((function(e){var a=e.data;t(a)})).catch((function(t){console.log(t),s(t)}))}))}))},getRoleUser:function(t,e){t.commit;var a=t.state;return new Promise((function(t,e){var s={headers:{groupId:window.themeDisplay?window.themeDisplay.getScopeGroupId():""}};_t.a.get(a.endPointApi+"/users/login",s).then((function(e){var a=e.data;if(a&&a.length>0){var s=[];for(var i in a)a[i]["role"]&&s.push(a[i]["role"]);t(s)}else t(["default"])})).catch((function(t){e("default")}))}))},getDossierDetailPass:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n={headers:{groupId:a.initData.groupId,secretCode:e.password},params:{}};_t.a.get(a.endPointApi+"/dossiers/"+e.dossierId,n).then((function(e){console.log("response",e),t(e)})).catch((function(t){s(t)}))}))}))},loadDossierActions:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n={headers:{groupId:a.initData.groupId}};_t.a.get(a.endPointApi+"/dossiers/"+e.dossierId+"/sequences",n).then((function(e){t(e.data)})).catch((function(t){s(t)}))}))}))},getListHistoryProcessingItems:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n={headers:{groupId:a.initData.groupId}},o=[];_t.a.get(a.endPointApi+"/dossierlogs/"+e.dossierId+"/logs",n).then((function(e){var a=e.data;for(var s in a.data)"PROCESS_TYPE"===a.data[s].notificationType&&o.push(a.data[s]);t(o)})).catch((function(t){s(t)}))}))}))},loadDetailDossierMC:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){var i={headers:{groupId:a.initData.groupId}},n=new URLSearchParams;n.append("method","GET"),n.append("url","/dossiers/"+e["referenceUid"]),n.append("data",""),n.append("serverCode","SERVER_"+e["govAgencyCode"]),_t.a.post("/o/rest/v2/proxy",n,i).then((function(e){t(e.data)})).catch((function(t){s(t)}))}))},loadVoting:function(t,e){var a=t.commit,s=t.state;return new Promise((function(t,i){a("setLoading",!0),Ct.dispatch("loadInitResource").then((function(a){var n={headers:{groupId:s.initData.groupId}};_t.a.get(s.endPointApi+"/postal/votings/"+e.className+"/"+e.classPK,n).then((function(e){e.data?t(e.data.data):t([])})).catch((function(t){i(t)}))}))}))},loadVotingMC:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadDetailDossierMC",e["dossierDetail"]).then((function(i){var n={headers:{groupId:a.initData.groupId}},o=new URLSearchParams;o.append("method","GET"),o.append("url","/postal/votings/"+e.className+"/"+i["dossierId"]),o.append("data",""),o.append("serverCode","SERVER_"+i["govAgencyCode"]),_t.a.post("/o/rest/v2/proxy",o,n).then((function(e){e.data?t(e.data.data):t([])})).catch((function(t){s(t)}))})).catch((function(t){}))}))},submitVoting:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n=new URLSearchParams,o={headers:{groupId:a.initData.groupId}};n.append("className",e.className),n.append("classPk",e.classPk),n.append("selected",e.selected),"dossier"===e.className&&n.append("votingCode",e.votingCode?e.votingCode:""),_t.a.post(a.endPointApi+"/postal/votings/"+e.votingId+"/results",n,o).then((function(e){t(e.data)})).catch((function(t){M.a.error("Gửi đánh giá thất bại"),s(t)}))}))}))},submitVotingMC:function(t,e){t.commit;var a=t.state;return new Promise((function(t,s){Ct.dispatch("loadInitResource").then((function(i){var n={headers:{groupId:a.initData.groupId}},o={className:e.className,classPk:e.classPk,selected:e.selected};"dossier"===e.className&&(o["votingCode"]=e.votingCode?e.votingCode:"");var r=new URLSearchParams;r.append("method","POST"),r.append("url","/postal/votings/"+e.votingId+"/results"),r.append("data",JSON.stringify(o)),r.append("serverCode",e.serverCode),_t.a.post("/o/rest/v2/proxy",r,n).then((function(e){t(e.data)})).catch((function(t){M.a.clear(),M.a.error("Gửi đánh giá thất bại"),s(t)}))}))}))}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e},setDossierDetail:function(t,e){t.dossierDetail=e}},getters:{loading:function(t){return t.loading},getDetailDossier:function(t){return t.dossierDetail}}}),wt=a("967d"),Dt=(a("d304"),void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0);_t.a.defaults.withCredentials=!0,_t.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",_t.a.defaults.headers.common["groupId"]=Dt,s["a"].config.productionTip=!0,s["a"].use(wt["default"]),s["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new s["a"]({router:xt,store:Ct,render:function(t){return t(v)}}).$mount("#app_tracuu_hoso")},"74ef":function(t,e,a){},a18c:function(t,e){}});
//# sourceMappingURL=app.js.map