(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32e669a2"],{"2bfd":function(t,e,a){},"316e":function(t,e,a){},"4a21":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Pagination_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("e20e"),toastr__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("854a"),toastr__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_1__);toastr__WEBPACK_IMPORTED_MODULE_1___default.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"},__webpack_exports__["a"]={name:"CuocThi",components:{Pagination:_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__["a"]},props:["type","id"],data(){return{readonlyForm:!1,mauNhapForm:"",dataInput:"",formData:"",chiTietCuocThi:{id:"adac1aec-41ac-4e92-be04-52dc99d9fd85",tenGoi:"Olympic tin học sinh viên Việt Nam",tiengAnh:null,serieCuocThi:"OLP",lanToChuc:21,donViToChuc:"Hội tin học Việt Nam",toChucId:"02123",ngayBatDau:"06-11-2021",ngayKetThuc:"19-03-2022",thongTinMoTa:"Olympic Tin học Sinh viên Việt Nam (OLP) là sáng kiến của Hội Tin học Việt Nam, Hội Sinh viên Việt Nam và Bộ giáo dục và Đào tạo nhằm động viên phong trào học tập tin học và khuyến khích các tài năng tin học trẻ. Bắt đầu từ năm 1992, Kỳ thi đã được tổ chức định kỳ hàng năm với sự tham gia của đông đảo sinh viên các trường Đại học và Cao đẳng trong cả nước. Từ năm 2005, sau những năm thử nghiệm với tiêu chuẩn thi lập trình quốc tế ACM/ICPC cho quy trình chấm thi và thi trực tuyến cho khối thi tập thể ”lều chõng”, từ năm 2006 Việt Nam chính thức được chấp thuận tổ chức Kỳ thi lập trình sinh viên quốc tế ACM/ICPC (ACM International Collegiate Programming Contest) Khu vực Châu Á. Từ năm 2007, Olympic Tin học sinh viên Việt Nam đã kết nối với Kỳ thi ACM/ICPC thành một Hội thi tin học cho sinh viên Việt Nam và Khu vực Châu Á. Từ năm 2018, ACM/ICPC đổi thành Kỳ thi lập trình sinh viên quốc tế ICPC (International Collegiate Programming Contest).",website:"https://www.olp.vn/",hinhAnh:"https://oj.vnoi.info/martor/16698f71-9463-4556-91f2-d9aa7acdfa96.png",tinhTrang:1},itemsPerPage:15,keywordSearch:"",danhSachTongHopDangKy:[],headersTongHopDangKy:[],loadingDataTongHopDangKy:!1,pageTongHopDangKy:0,totalTongHopDangKy:0,pageCountTongHopDangKy:0,danhSachKetQuaCaNhan:[],headersKetQuaCaNhan:[{sortable:!1,text:"STT",align:"center",value:"index",width:50},{sortable:!1,text:"Tên thí sinh",align:"left",value:"hoTen",class:"th-center py-2"},{sortable:!1,text:"Số báo danh",align:"left",value:"soBaoDanh",class:"th-center"},{sortable:!1,text:"Đoàn thi",align:"left",value:"doanThiId",class:"th-center py-2"},{sortable:!1,text:"Giải thưởng",align:"center",value:"datGiaiThuong",class:"th-center",width:200}],loadingDataKetQuaCaNhan:!1,pageKetQuaCaNhan:0,totalKetQuaCaNhan:0,pageCountKetQuaCaNhan:0,danhSachKetQuaDongDoi:[],headersKetQuaDongDoi:[{sortable:!1,text:"STT",align:"center",value:"index",width:50},{sortable:!1,text:"Tên đội thi",align:"left",value:"tenGoi",class:"th-center py-2"},{sortable:!1,text:"Số báo danh",align:"left",value:"soBaoDanh",class:"th-center"},{sortable:!1,text:"Đoàn thi",align:"left",value:"doanThiId",class:"th-center py-2"},{sortable:!1,text:"Giải thưởng",align:"center",value:"hangGiaiThuong",class:"th-center",width:200}],loadingDataKetQuaDongDoi:!1,pageKetQuaDongDoi:0,totalKetQuaDongDoi:0,pageCountKetQuaDongDoi:0,dialogThemThanhPhan:!1,editThanhPhan:!1,thanhPhanEdit:"",loadingAction:!1}},created(){let t=this;t.getChiTietCuocThi(),t.getdanhSachKetQuaCaNhan(),t.getdanhSachKetQuaDongDoi()},computed:{breakpointName(){return this.$store.getters.getBreakpointName},isSigned(){return!!this.$cookies.get("Token")}},watch:{$route:function(t,e){let a=this;a.getChiTietCuocThi()}},methods:{getChiTietCuocThi(){let t=this;if(t.loadingData)return;t.loadingData=!0;let e={collectionName:"cuocthis",id:t.id};t.actionItems=[],t.loadingData=!0,t.$store.dispatch("collectionDetail",e).then((function(e){t.loadingData=!1})).catch((function(){t.loadingData=!1}))},getdanhSachKetQuaCaNhan(t){let e=this;if("reset"===t&&(e.totalKetQuaCaNhan=0,e.pageCountKetQuaCaNhan=0,e.pageKetQuaCaNhan=0),e.loadingDataKetQuaCaNhan)return;e.loadingDataKetQuaCaNhan=!0;let a={collectionName:"cuocthis",collectionId:e.id,collectionNameChild:"thisinhs",data:{page:e.pageKetQuaCaNhan,size:e.itemsPerPage}};e.$store.dispatch("collectionFilterLevel2",a).then((function(t){e.danhSachKetQuaCaNhan=t.content,e.totalKetQuaCaNhan=t.totalElements,e.pageCountKetQuaCaNhan=t.totalPages,e.loadingDataKetQuaCaNhan=!1})).catch((function(){e.loadingDataKetQuaCaNhan=!1}))},getdanhSachKetQuaDongDoi(t){let e=this;if("reset"===t&&(e.totalKetQuaDongDoi=0,e.pageCountKetQuaDongDoi=0,e.pageKetQuaDongDoi=0),e.loadingDataKetQuaDongDoi)return;e.loadingDataKetQuaDongDoi=!0;let a={collectionName:"cuocthis",collectionId:e.id,collectionNameChild:"doithis",data:{page:e.pageKetQuaDongDoi,size:e.itemsPerPage}};e.$store.dispatch("collectionFilterLevel2",a).then((function(t){e.danhSachKetQuaDongDoi=t.content,e.totalKetQuaDongDoi=t.totalElements,e.pageCountKetQuaDongDoi=t.totalPages,e.loadingDataKetQuaDongDoi=!1})).catch((function(){e.loadingDataKetQuaDongDoi=!1}))},dangKyThi(t){let e=this;if(e.isSigned)e.$router.push({path:"/dang-ky/"+t.id});else{let a="/dang-ky/"+t.id;e.$router.push({path:"/dang-nhap?redirect="+a})}},statusContest(t){return 1==t?"Mở đăng kí":2==t?"Đóng đăng kí":"Đã kết thúc"},checkRoleAction(t){let e=this,a=e.$cookies.get("Roles","");if(!t||!a)return!1;let i=a.split(","),n=i.find((function(e){return e==t}));return!!n},convertDataView(itemHeader,item){let output="";try{let calu=itemHeader["calculator"].replace(/dataInput/g,"item");output=eval(calu)}catch(error){output=""}return output},convertDataArray(t,e){let a="";return e&&(a=Array.from(e,(function(e){return e[t["mapping"]]}))),a=a.toString().replace(/,/g,", "),a},currency(t){if(t){let e=(t/1).toFixed(0).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return""},convertDate(t){if(!t)return"";const[e,a,i]=t.split("-");let n=`${e.padStart(2,"0")}/${a.padStart(2,"0")}/${i}`;return n},dateLocale(t){if(!t)return"";let e=new Date(t);return`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`},dateLocaleTime(t){let e=new Date(t);return`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`},changePage(t){let e=this;e.page=t.page,e.getdanhSachThanhPhan()},resetFormTimKiem(){let t=this;t.$refs.formTimKiem.reset(),t.$refs.formTimKiem.resetValidation()},changeDate(t){let e=this;e.menuDate1=!1,"1"===t?e.fromReceiveDateFormatted=e.formatDate(e.fromReceiveDate):"2"===t&&(e.toReceiveDateFormatted=e.formatDate(e.toReceiveDate))},formatDate(t){if(!t)return"";const[e,a,i]=t.split("-");return`${i}/${a}/${e}`},parseDate(t){if(!t)return"";if(String(t).indexOf("/")>0){const[e,a,i]=t.split("/");return`${i}-${a.padStart(2,"0")}-${e.padStart(2,"0")}`}if(String(t).indexOf("-")>0){const[e,a,i]=t.split("-");return`${i}-${a.padStart(2,"0")}-${e.padStart(2,"0")}`}{let e=new Date(Number(t));return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}},getMinMax(t){if(!t)return null;const[e,a,i]=t.split("/");return`${i}-${a}-${e}`},goBack(){window.history.back()}}}},"4dd0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto pa-3",staticStyle:{"padding-bottom":"36px !important"},attrs:{flat:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"py-0"},[a("div",[a("a",{staticClass:"py-0 px-0",attrs:{href:t.chiTietCuocThi.website,target:"_blank"}},[a("img",{staticClass:"img-cuocthi",staticStyle:{width:"100%"},attrs:{src:t.chiTietCuocThi.hinhAnh}})]),a("v-row",{staticClass:"my-0 mx-0",staticStyle:{"border-bottom":"1px solid #2161B1"},attrs:{justify:"end"}},[a("v-col",{staticClass:"d-flex align-center justify-start py-0 px-0",staticStyle:{color:"#2161B1","font-weight":"500"}},[a("div",{staticClass:"header-content"},[t._v(" Thông tin cuộc thi ")]),a("div",{staticClass:"triangle-header"})]),a("v-spacer"),a("v-col",{staticClass:"d-flex align-center justify-end py-0 px-0",staticStyle:{"max-width":"150px","margin-bottom":"-3px"}},[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{depressed:"",small:"",color:"primary"},on:{click:function(e){return t.goBack()}}},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-reply-all")]),t._v("   Quay lại ")],1)],1)],1),a("div",[a("v-row",{staticClass:"mx-0 my-0 py-0",staticStyle:{border:"1px solid #D9D9D9","border-top":"0px"}},[a("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[a("div",{staticClass:"font-weight-bold",staticStyle:{color:"#2161B1","font-size":"18px"}},[t._v(t._s(t.chiTietCuocThi.tenGoi))]),a("div",{staticStyle:{"text-align":"justify"}},[t._v(t._s(t.chiTietCuocThi.thongTinMoTa))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"3"}},[a("span",{staticClass:"label-header"},[t._v("Đơn vị tổ chức: ")]),a("span",{staticClass:"blue-text font-weight-bold"},[t._v(t._s(t.chiTietCuocThi.donViToChuc))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"3"}},[a("span",{staticClass:"label-header"},[t._v("Thời gian tổ chức: ")]),a("span",{staticClass:"blue-text font-weight-bold"},[t._v("Từ ngày "+t._s(t.convertDate(t.chiTietCuocThi.ngayBatDau)))]),a("span",{staticClass:"blue-text font-weight-bold"},[t._v(" - Đến ngày "+t._s(t.convertDate(t.chiTietCuocThi.ngayKetThuc)))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"3"}},[a("span",{staticClass:"label-header"},[t._v("Trang web: ")]),a("a",{staticClass:"blue-text font-weight-bold"},[t._v(t._s(t.chiTietCuocThi.website))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"3"}},[a("span",{staticClass:"label-header"},[t._v("Tình trạng: ")]),a("span",{staticClass:"font-weight-bold",style:1==t.chiTietCuocThi.tinhTrang?"color: green":2==t.chiTietCuocThi.tinhTrang?"color: blue":"color: red"},[t._v(" "+t._s(t.statusContest(t.chiTietCuocThi.tinhTrang))+" ")])]),1==t.chiTietCuocThi.tinhTrang?a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"3"}},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){return t.dangKyThi(t.chiTietCuocThi)}}},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")]),t._v("  Đăng ký ")],1)],1):t._e()],1)],1)],1),a("div",[a("v-row",{staticClass:"my-0 mx-0 mt-3",staticStyle:{"border-bottom":"1px solid #2161B1"},attrs:{justify:"end"}},[a("v-col",{staticClass:"d-flex align-center justify-start py-0 px-0",staticStyle:{color:"#2161B1","font-weight":"500"}},[a("div",{staticClass:"header-content"},[t._v(" Tổng hợp thí sinh đăng ký tham dự ")]),a("div",{staticClass:"triangle-header"})]),a("v-spacer")],1),a("v-row",{staticClass:"my-0 py-0 pt-3"},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headersTongHopDangKy,items:t.danhSachTongHopDangKy,"items-per-page":t.itemsPerPage,"item-key":"primKey","hide-default-footer":"","no-data-text":"Không có",loading:t.loadingDataTongHopDangKy,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(e){e.item;var i=e.index;return[a("div",[t._v(t._s((t.pageTongHopDangKy+1)*t.itemsPerPage-t.itemsPerPage+i+1))])]}}])}),t.pageCountTongHopDangKy?a("pagination",{attrs:{pageInput:t.pageTongHopDangKy,total:t.totalTongHopDangKy,pageCount:t.pageCountTongHopDangKy},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1)],1),a("div",[a("v-row",{staticClass:"my-0 mx-0 mt-3",staticStyle:{"border-bottom":"1px solid #2161B1"},attrs:{justify:"end"}},[a("v-col",{staticClass:"d-flex align-center justify-start py-0 px-0",staticStyle:{color:"#2161B1","font-weight":"500"}},[a("div",{staticClass:"header-content"},[t._v(" Kết quả cuộc thi ")]),a("div",{staticClass:"triangle-header"})]),a("v-spacer")],1),a("v-row",{staticClass:"my-0 py-0 pt-3 mx-0"},[a("v-col",{staticClass:"py-0 px-0 mb-2 col col-12 my-2",staticStyle:{color:"#2161b1","font-weight":"bold"},attrs:{cols:"12"}},[a("div",{staticClass:"background-triangle-small"},[a("v-icon",{attrs:{size:"20",color:"white"}},[t._v("mdi-view-dashboard-outline")])],1),t._v(" NỘI DUNG CÁ NHÂN ")]),a("v-col",{staticClass:"pt-0 px-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headersKetQuaCaNhan,items:t.danhSachKetQuaCaNhan,"items-per-page":t.itemsPerPage,"item-key":"primKey","hide-default-footer":"","no-data-text":"Không có",loading:t.loadingDataKetQuaCaNhan,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(e){e.item;var i=e.index;return[a("div",[t._v(t._s((t.pageKetQuaCaNhan+1)*t.itemsPerPage-t.itemsPerPage+i+1))])]}}])}),t.pageCountKetQuaCaNhan?a("pagination",{attrs:{pageInput:t.pageKetQuaCaNhan,total:t.totalKetQuaCaNhan,pageCount:t.pageCountKetQuaCaNhan},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1),a("v-row",{staticClass:"my-0 py-0 pt-3 mx-0"},[a("v-col",{staticClass:"py-0 px-0 mb-2 col col-12 my-2",staticStyle:{color:"#2161b1","font-weight":"bold"},attrs:{cols:"12"}},[a("div",{staticClass:"background-triangle-small"},[a("v-icon",{attrs:{size:"20",color:"white"}},[t._v("mdi-view-dashboard-outline")])],1),t._v(" NỘI DUNG ĐỒNG ĐỘI ")]),a("v-col",{staticClass:"pt-0 px-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headersKetQuaDongDoi,items:t.danhSachKetQuaDongDoi,"items-per-page":t.itemsPerPage,"item-key":"primKey","hide-default-footer":"","no-data-text":"Không có",loading:t.loadingDataKetQuaDongDoi,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(e){e.item;var i=e.index;return[a("div",[t._v(t._s((t.pageKetQuaDongDoi+1)*t.itemsPerPage-t.itemsPerPage+i+1))])]}}])}),t.pageCountKetQuaDongDoi?a("pagination",{attrs:{pageInput:t.pageKetQuaDongDoi,total:t.totalKetQuaDongDoi,pageCount:t.pageCountKetQuaDongDoi},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1)],1)])],1)],1)},n=[],s=a("4a21"),o=s["a"],l=(a("c59e"),a("2877")),r=a("6544"),c=a.n(r),h=a("8336"),u=a("b0af"),g=a("62ad"),d=a("8fea"),p=a("0e8f"),m=a("132d"),v=a("a722"),C=a("0fd9"),f=a("2fa4"),D=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=D.exports;c()(D,{VBtn:h["a"],VCard:u["a"],VCol:g["a"],VDataTable:d["a"],VFlex:p["a"],VIcon:m["a"],VLayout:v["a"],VRow:C["a"],VSpacer:f["a"]})},"974d":function(t,e,a){},c369:function(t,e,a){"use strict";a("316e")},c59e:function(t,e,a){"use strict";a("974d")},e20e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"mt-4",attrs:{wrap:""}},[t.showTong?a("div",{staticClass:"flex",staticStyle:{"max-width":"200px",color:"#2161B1","font-weight":"500"}},[a("span",[t._v("TỔNG SỐ:")]),t._v("  "),a("span",[t._v(t._s(t.total))])]):t._e(),a("div",{staticClass:"flex text-center"},[a("nav",{staticStyle:{position:"relative"},attrs:{role:"navigation","aria-label":"Pagination Navigation"}},[a("ul",{staticClass:"v-pagination theme--light"},[a("li",[a("button",{class:0==t.currentPage?"v-pagination__navigation v-pagination__navigation--disabled":"v-pagination__navigation",attrs:{type:"button","aria-label":"Previous page"},on:{click:t.prevPage}},[a("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--light",attrs:{"aria-hidden":"true"}})])]),a("li",[a("button",{staticClass:"v-pagination__item v-pagination__item--active primary",attrs:{type:"button","aria-current":"true"}},[t._v(" "+t._s(t.currentPage+1)+" / "+t._s(t.pageCount)+" ")])]),a("li",[a("button",{class:t.currentPage==t.pageCount-1?"v-pagination__navigation v-pagination__navigation--disabled":"v-pagination__navigation",attrs:{type:"button","aria-label":"Next page"},on:{click:t.nextPage}},[a("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--light",attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"flex",staticStyle:{"max-width":"120px"}},[a("v-autocomplete",{staticClass:"autocomplete-form-input",attrs:{"hide-no-data":"",items:t.listPage,"item-text":"name","item-value":"value",dense:"",outlined:"","hide-details":"auto"},model:{value:t.currentPagePagination,callback:function(e){t.currentPagePagination=e},expression:"currentPagePagination"}})],1)])},n=[],s={name:"Search",props:{pageInput:{type:Number,default:0},pageCount:{type:Number,default:0},total:{type:Number,default:0},showTong:{type:Boolean,default:!0}},data(){return{currentPage:0,currentPagePagination:1,listPage:[],type:""}},created(){let t=this;t.currentPage=t.pageInput,t.currentPagePagination=t.currentPage+1;for(let e=1;e<=t.pageCount;e++){let a={name:"Trang "+e,value:e};t.listPage.push(a)}},watch:{pageInput(){},pageCount(t){let e=this;for(let a=1;a<=t;a++){let t={name:"Trang "+a,value:a};e.listPage.push(t)}},currentPagePagination(t){let e=this;e.currentPage=t-1,e.$emit("tiny:change-page",{page:e.currentPage})}},computed:{breakpointName(){return this.$store.getters.getBreakpointName}},methods:{prevPage(){let t=this;t.currentPage-=1,t.currentPagePagination=t.currentPage+1,t.$emit("tiny:change-page",{page:t.currentPage}),console.log("vm.currentPage1",t.currentPage)},nextPage(){let t=this;t.currentPage+=1,t.currentPagePagination=t.currentPage+1,t.$emit("tiny:change-page",{page:t.currentPage}),console.log("vm.currentPage2",t.currentPage)}}},o=s,l=(a("c369"),a("2877")),r=a("6544"),c=a.n(r),h=(a("2bfd"),a("b974")),u=a("8654"),g=a("d9f7"),d=a("80d2");const p={...h["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var m=h["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:h["a"].options.props.menuProps.type,default:()=>p},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...h["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(d["r"])(t,this.itemText),a=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=h["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...p,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=h["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const a=e[this.$refs.menu.listIndex];a?this.setMenuIndex(t.findIndex(t=>t===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===d["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d["x"].backspace&&t!==d["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const i=this.selectedItems.length,n=t!==i-1?t:t-1,s=this.selectedItems[n];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,h["a"].options.methods.clearableCallback.call(this)},genInput(){const t=u["a"].options.methods.genInput.call(this);return t.data=Object(g["a"])(t.data,{attrs:{"aria-activedescendant":Object(d["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(d["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=h["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?h["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[d["x"].home,d["x"].end].includes(e)||h["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){h["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){h["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){h["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,a;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}),v=a("a722"),C=Object(l["a"])(o,i,n,!1,null,"1e850aee",null);e["a"]=C.exports;c()(C,{VAutocomplete:m,VLayout:v["a"]})}}]);