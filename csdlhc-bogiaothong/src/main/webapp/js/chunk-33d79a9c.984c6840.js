(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33d79a9c"],{"0ccb":function(t,a,e){var n=e("50c4"),i=e("577e"),o=e("1148"),c=e("1d80"),r=Math.ceil,u=function(t){return function(a,e,u){var l,s,h=i(c(a)),d=n(e),g=h.length,m=void 0===u?" ":i(u);return d<=g||""==m?h:(l=d-g,s=o.call(m,r(l/m.length)),s.length>l&&(s=s.slice(0,l)),t?h+s:s+h)}};t.exports={start:u(!1),end:u(!0)}},"0fd9":function(t,a,e){"use strict";var n=e("ade3"),i=e("5530"),o=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),c=e("d9f7"),r=e("80d2"),u=["sm","md","lg","xl"],l=["start","end","center"];function s(t,a){return u.reduce((function(e,n){return e[t+Object(r["E"])(n)]=a(),e}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=s("align",(function(){return{type:String,default:null,validator:h}})),g=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},m=s("justify",(function(){return{type:String,default:null,validator:g}})),f=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},T=s("alignContent",(function(){return{type:String,default:null,validator:f}})),p={align:Object.keys(d),justify:Object.keys(m),alignContent:Object.keys(T)},v={align:"align",justify:"justify",alignContent:"align-content"};function y(t,a,e){var n=v[t];if(null!=e){if(a){var i=a.replace(t,"");n+="-".concat(i)}return n+="-".concat(e),n.toLowerCase()}}var b=new Map;a["a"]=o["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:g}},m),{},{alignContent:{type:String,default:null,validator:f}},T),render:function(t,a){var e=a.props,i=a.data,o=a.children,r="";for(var u in e)r+=String(e[u]);var l=b.get(r);return l||function(){var t,a;for(a in l=[],p)p[a].forEach((function(t){var n=e[t],i=y(a,t,n);i&&l.push(i)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),b.set(r,l)}(),t(e.tag,Object(c["a"])(i,{staticClass:"row",class:l}),o)}})},"4d90":function(t,a,e){"use strict";var n=e("23e7"),i=e("0ccb").start,o=e("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"62ad":function(t,a,e){"use strict";var n=e("ade3"),i=e("5530"),o=(e("a9e3"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("caad"),e("159b"),e("2ca0"),e("4b85"),e("2b0e")),c=e("d9f7"),r=e("80d2"),u=["sm","md","lg","xl"],l=function(){return u.reduce((function(t,a){return t[a]={type:[Boolean,String,Number],default:!1},t}),{})}(),s=function(){return u.reduce((function(t,a){return t["offset"+Object(r["E"])(a)]={type:[String,Number],default:null},t}),{})}(),h=function(){return u.reduce((function(t,a){return t["order"+Object(r["E"])(a)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(s),order:Object.keys(h)};function g(t,a,e){var n=t;if(null!=e&&!1!==e){if(a){var i=a.replace(t,"");n+="-".concat(i)}return"col"!==t||""!==e&&!0!==e?(n+="-".concat(e),n.toLowerCase()):n.toLowerCase()}}var m=new Map;a["a"]=o["default"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},s),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,a){var e=a.props,i=a.data,o=a.children,r=(a.parent,"");for(var u in e)r+=String(e[u]);var l=m.get(r);return l||function(){var t,a;for(a in l=[],d)d[a].forEach((function(t){var n=e[t],i=g(a,t,n);i&&l.push(i)}));var i=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!i||!e.cols},Object(n["a"])(t,"col-".concat(e.cols),e.cols),Object(n["a"])(t,"offset-".concat(e.offset),e.offset),Object(n["a"])(t,"order-".concat(e.order),e.order),Object(n["a"])(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),m.set(r,l)}(),t(e.tag,Object(c["a"])(i,{class:l}),o)}})},"71fc":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{attrs:{"align-content":"center"}},[e("v-col",{staticClass:"mt-0 pb-2",attrs:{cols:"12"}},[e("div",{staticClass:"title-page d-inline-block pt-2"},[t._v("TÌM KIẾM THÔNG TIN CÔNG DÂN")]),e("v-btn",{staticClass:"mx-0 mt-2",staticStyle:{float:"right"},attrs:{small:"",color:"primary"},on:{click:function(a){return t.showAdvanceSearch()}}},[t.advanceSearch?e("v-icon",{attrs:{size:"18"}},[t._v("mdi-filter-variant")]):e("v-icon",{attrs:{size:"18"}},[t._v("mdi-filter-variant-plus")]),t._v("   Tìm kiếm nâng cao ")],1)],1),t.advanceSearch?t._e():e("v-col",{staticClass:"my-0 py-0 mb-2",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Tìm kiếm theo từ khóa")]),e("v-text-field",{staticClass:"input-form mt-2",attrs:{solo:"",dense:"",clearable:"","hide-details":"auto",placeholder:"Nhập họ tên, số cmnd/ cccd, số điện thoại"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getDanhMuc()}},model:{value:t.keywordSearch,callback:function(a){t.keywordSearch=a},expression:"keywordSearch"}})],1),t.advanceSearch?e("v-col",{staticClass:"my-0 py-0 mb-2",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Họ tên công dân")]),e("v-text-field",{staticClass:"input-form mt-2",attrs:{solo:"",dense:"",clearable:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getDanhMuc()}},model:{value:t.applicantNameSearch,callback:function(a){t.applicantNameSearch=a},expression:"applicantNameSearch"}})],1):t._e(),e("v-col",{staticClass:"py-0 mb-2",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Trạng thái thông tin")]),e("v-autocomplete",{staticClass:"flex input-form mt-2",attrs:{"hide-no-data":"",items:t.itemsTrangThai,"item-text":"tenMuc","item-value":"maMuc",dense:"",solo:"","hide-details":"auto",clearable:""},on:{change:function(a){return t.getDanhMuc()}},model:{value:t.trangThaiSearch,callback:function(a){t.trangThaiSearch=a},expression:"trangThaiSearch"}})],1),e("v-col",{staticClass:"py-0 mb-2",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Tình trạng tài khoản")]),e("v-autocomplete",{staticClass:"flex input-form mt-2",attrs:{"hide-no-data":"",items:t.itemsTinhTrang,"item-text":"tenMuc","item-value":"maMuc",dense:"",solo:"","hide-details":"auto",clearable:""},on:{change:function(a){return t.getDanhMuc()}},model:{value:t.tinhTrangSearch,callback:function(a){t.tinhTrangSearch=a},expression:"tinhTrangSearch"}})],1),t.advanceSearch?e("v-row",{staticClass:"mx-0 my-0",attrs:{"align-content":"center"}},[e("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Số CMND/CCCD")]),e("v-text-field",{staticClass:"input-form",attrs:{solo:"",dense:"",clearable:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getDanhMuc()}},model:{value:t.applicantIdSearch,callback:function(a){t.applicantIdSearch=a},expression:"applicantIdSearch"}})],1),e("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Điện thoại")]),e("v-text-field",{staticClass:"input-form",attrs:{solo:"",dense:"",clearable:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getDanhMuc()}},model:{value:t.contactSearch,callback:function(a){t.contactSearch=a},expression:"contactSearch"}})],1),e("v-col",{staticClass:"my-0 py-0 mb-3",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Email")]),e("v-text-field",{staticClass:"input-form",attrs:{solo:"",dense:"",clearable:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getDanhMuc()}},model:{value:t.emailSearch,callback:function(a){t.emailSearch=a},expression:"emailSearch"}})],1),e("v-col",{staticClass:"py-0 mb-2",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Địa chỉ thường trú: Tỉnh/ thành")]),e("v-autocomplete",{staticClass:"flex input-form",attrs:{"hide-no-data":"",items:t.itemsTinhThanh,"item-text":"tenMuc","item-value":"maMuc",dense:"",solo:"","hide-details":"auto","return-object":"",clearable:""},model:{value:t.thuongTruTinhThanh,callback:function(a){t.thuongTruTinhThanh=a},expression:"thuongTruTinhThanh"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Quận / Huyện")]),e("v-autocomplete",{staticClass:"flex input-form",attrs:{"hide-no-data":"",items:t.itemsThuongTruQuanHuyen,"item-text":"tenMuc","item-value":"maMuc",dense:"",solo:"","hide-details":"auto","return-object":"",clearable:""},model:{value:t.thuongTruQuanHuyen,callback:function(a){t.thuongTruQuanHuyen=a},expression:"thuongTruQuanHuyen"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e("label",[t._v("Phường / Xã")]),e("v-autocomplete",{staticClass:"flex input-form",attrs:{"hide-no-data":"",items:t.itemsThuongTruPhuongXa,"item-text":"tenMuc","item-value":"maMuc",dense:"",solo:"","hide-details":"auto","return-object":"",clearable:""},model:{value:t.thuongTruPhuongXa,callback:function(a){t.thuongTruPhuongXa=a},expression:"thuongTruPhuongXa"}})],1)],1):t._e()],1),e("v-row",{staticClass:"mt-0",attrs:{justify:"center"}},[e("v-col",{staticClass:"py-4",attrs:{cols:"12",md:"6"}},[e("v-btn",{staticClass:"mx-0",attrs:{small:"",color:"primary"},on:{click:function(a){return t.showForm()}}},[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-plus")]),t._v("  Thêm mới ")],1)],1),e("v-col",{staticClass:"d-flex align-center justify-end",attrs:{cols:"12",md:"6"}},[e("v-btn",{staticClass:"mx-0 text-white",attrs:{color:"primary",small:""},on:{click:function(a){return t.getDanhMuc()}}},[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-magnify")]),t._v("  Tìm kiếm ")],1)],1)],1),e("v-row",[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto pa-3",attrs:{outlined:"",flat:""}},[e("v-flex",{staticClass:"mb-2"},[e("strong",[t._v("Số lượng: "+t._s(t.total))])]),e("v-data-table",{staticClass:"elevation-1 mt-2",attrs:{headers:t.headers,items:t.itemsApplicant,"items-per-page":t.itemsPerPage,"item-key":"primKey","hide-default-footer":"","no-data-text":"Không có",loading:t.loadingData,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(a){a.item;var n=a.index;return[e("div",[t._v(t._s((t.page+1)*t.itemsPerPage-t.itemsPerPage+n+1))])]}},{key:"item.hoVaTen",fn:function(a){var n=a.item;return[e("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(n.hoVaTen)+" ")]),e("div",[t._v(" "+t._s(t.dateLocale(n.ngaySinh))+" ")])]}},{key:"item.danhBaLienLac",fn:function(a){var n=a.item;return[e("div",[e("v-icon",{attrs:{size:"16"}},[t._v("mdi-phone-in-talk-outline")]),t._v("  "+t._s(n.danhBaLienLac["soDienThoai"])+" ")],1),e("div",[e("v-icon",{attrs:{size:"16"}},[t._v("mdi-email-fast-outline")]),t._v("  "+t._s(n.danhBaLienLac["thuDienTu"])+" ")],1)]}},{key:"item.diaChiThuongTru",fn:function(a){var n=a.item;return[e("div",{staticStyle:{width:"300px","max-width":"300px"}},[n["diaChiThuongTru"]["soNhaChiTiet"]?e("span",[t._v(t._s(n["diaChiThuongTru"]["soNhaChiTiet"])+", ")]):t._e(),t._v(" "+t._s(n["diaChiThuongTru"]["phuongXa"]["tenMuc"])+" - "+t._s(n["diaChiThuongTru"]["quanHuyen"]["tenMuc"])+" - "+t._s(n["diaChiThuongTru"]["tinhThanh"]["tenMuc"])+" ")])]}},{key:"item.trangThaiDuLieu",fn:function(a){var n=a.item;return[e("div",{style:2==n.trangThaiDuLieu.maMuc?"color: green":"color: red"},[t._v(" "+t._s(n.trangThaiDuLieu.tenMuc)+" ")])]}},{key:"item.danhTinhDienTu",fn:function(a){var n=a.item;return[e("div",{style:t.getColor(n.danhTinhDienTu)},[t._v(" "+t._s(t.getStatus(n.danhTinhDienTu))+" ")])]}},{key:"item.action",fn:function(a){var n=a.item;return[e("div",{staticStyle:{width:"95px"}},[e("router-link",{attrs:{to:"/thong-tin-ca-nhan/"+n.primKey,custom:""}},[e("span",[t._v("Xem chi tiết")])])],1)]}}])}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,pageCount:t.pageCount},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1)],1)],1)},i=[],o=(e("99af"),e("4d90"),e("d3b7"),e("25f0"),e("e20e")),c={components:{Pagination:o["a"]},props:["type"],data:function(){return{selected:[],keywordSearch:"",loadingData:!1,itemsTinhTrang:[],itemsTrangThai:[{tenMuc:"Đang sử dụng",maMuc:"2"},{tenMuc:"Đánh dấu xóa",maMuc:"1"}],tinhTrangSearch:"",trangThaiSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"index"},{sortable:!1,text:"Họ tên / ngày sinh",align:"left",value:"hoVaTen"},{sortable:!1,text:"CMND/CCCD",align:"left",value:"maSoCaNhan"},{sortable:!1,text:"Điện thoại/ Email",align:"left",value:"danhBaLienLac"},{sortable:!1,text:"Địa chỉ thường chú",align:"left",value:"diaChiThuongTru"},{sortable:!1,text:"Trạng thái thông tin",align:"left",value:"trangThaiDuLieu"},{sortable:!1,text:"Tình trạng tài khoản",align:"left",value:"danhTinhDienTu"},{sortable:!1,text:"Thao tác",align:"center",value:"action"}],itemsApplicant:[],page:0,itemsPerPage:15,total:0,chuaCapTaiKhoan:!1,daCapTaiKhoan:!1,pageCount:0,advanceSearch:!1,applicantNameSearch:"",applicantIdSearch:"",contactSearch:"",emailSearch:"",itemsTinhThanh:[],diaChiThuongTruCuThe:"",thuongTruTinhThanh:"",itemsThuongTruQuanHuyen:[],thuongTruQuanHuyen:"",itemsThuongTruPhuongXa:[],thuongTruPhuongXa:""}},created:function(){var t=this;t.$store.commit("SET_INDEXTAB",1),t.getDanhMuc("reset"),t.getDanhMucTinhThanh(),t.getDanhMucSearch("tinhtrangsudungtaikhoan")},watch:{$route:function(t,a){var e=this;e.$store.commit("SET_INDEXTAB",1)},thuongTruTinhThanh:function(t){var a=this;t||(a.itemsThuongTruQuanHuyen=[],a.thuongTruQuanHuyen="",a.itemsThuongTruPhuongXa=[],a.thuongTruPhuongXa=""),a.changeTinhThanh("thuongtru")},thuongTruQuanHuyen:function(t){var a=this;t||(a.itemsThuongTruPhuongXa=[],a.thuongTruPhuongXa=""),a.changeQuanHuyen("thuongtru")}},methods:{showForm:function(){var t=this;t.$router.push({path:"/cong-dan/0"})},getDanhMuc:function(t){var a=this;if("reset"===t&&(a.keywordSearch="",a.total=0,a.pageCount=0,a.page=0,a.applicantNameSearch="",a.applicantIdSearch="",a.contactSearch="",a.emailSearch=""),!a.loadingData){a.loadingData=!0;var e={collectionName:"canhan",data:{keyword:a.keywordSearch,page:a.page,size:a.itemsPerPage,orderFields:"hoVaTen",orderTypes:"asc",danhTinhDienTu_tinhTrangSuDungTaiKhoan_maMuc:a.tinhTrangSearch,trangThaiDuLieu_maMuc:a.trangThaiSearch,hoVaTen:a.applicantNameSearch,maSoCaNhan:a.applicantIdSearch,danhBaLienLac_soDienThoai:a.contactSearch,danhBaLienLac_thuDienTu:a.emailSearch,diaChiThuongTru_phuongXa_maMuc:a.thuongTruPhuongXa?a.thuongTruPhuongXa["maMuc"]:"",diaChiThuongTru_quanHuyen_maMuc:a.thuongTruQuanHuyen?a.thuongTruQuanHuyen["maMuc"]:"",diaChiThuongTru_tinhThanh_maMuc:a.thuongTruTinhThanh?a.thuongTruTinhThanh["maMuc"]:""}};a.$store.dispatch("collectionFilter",e).then((function(t){a.itemsApplicant=t.content,a.total=t.totalElements,a.pageCount=t.totalPages,a.loadingData=!1})).catch((function(){a.loadingData=!1}))}},getDanhMucSearch:function(t){var a=this,e={collectionName:t,data:{keyword:"",page:0,size:100,orderFields:"maMuc",orderTypes:"asc",tinhTrang:"1",thamChieu_maMuc:""}};a.$store.dispatch("collectionFilter",e).then((function(t){a.itemsTinhTrang=t.content})).catch((function(){}))},getStatus:function(t){return t[0]?t[0].tinhTrangSuDungTaiKhoan["tenMuc"]:"Chưa tạo tài khoản"},getColor:function(t){var a=t[0]?String(t[0].tinhTrangSuDungTaiKhoan["maMuc"]):"0";switch(a){case"1":return"color: blue";case"2":return"color: green";case"3":return"color: orange";case"4":return"color: red";default:return"color: black"}},dateLocale:function(t){var a=new Date(t);return"".concat(a.getDate().toString().padStart(2,"0"),"/").concat((a.getMonth()+1).toString().padStart(2,"0"),"/").concat(a.getFullYear())},changePage:function(t){var a=this;a.page=t.page,a.getDanhMuc()},showAdvanceSearch:function(){var t=this;t.advanceSearch=!t.advanceSearch,t.advanceSearch?t.keywordSearch="":(t.applicantNameSearch="",t.applicantIdSearch="",t.contactSearch="",t.emailSearch="",t.thuongTruPhuongXa="",t.thuongTruQuanHuyen="",t.thuongTruTinhThanh="",t.itemsThuongTruQuanHuyen=[],t.itemsThuongTruPhuongXa=[])},getDanhMucTinhThanh:function(){var t=this,a={collectionName:"tinhthanh",data:{keyword:"",page:0,size:100,orderFields:"maMuc",orderTypes:"asc",tinhTrang:"1",thamChieu_maMuc:""}};t.$store.dispatch("collectionFilter",a).then((function(a){t.itemsTinhThanh=a.content})).catch((function(){}))},changeTinhThanh:function(t){var a=this,e="";if(a.thuongTruTinhThanh){"thuongtru"===t&&(e=a.thuongTruTinhThanh["maMuc"]),"noiohientai"===t&&(e=a.noiOHienTaiTinhThanh["maMuc"]);var n={collectionName:"quanhuyen",data:{keyword:"",page:0,size:100,orderFields:"maMuc",orderTypes:"asc",tinhTrang:"1",thamChieu_maMuc:e}};a.$store.dispatch("collectionFilter",n).then((function(e){"thuongtru"===t&&(a.itemsThuongTruQuanHuyen=e.content),"noiohientai"===t&&(a.itemsNoiOHienTaiQuanHuyen=e.content)})).catch((function(){}))}},changeQuanHuyen:function(t){var a=this,e="";if(a.thuongTruQuanHuyen){"thuongtru"===t&&(e=a.thuongTruQuanHuyen["maMuc"]),"noiohientai"===t&&(e=a.noiOHienTaiQuanHuyen["maMuc"]);var n={collectionName:"phuongxa",data:{keyword:"",page:0,size:100,orderFields:"maMuc",orderTypes:"asc",tinhTrang:"1",thamChieu_maMuc:e}};a.$store.dispatch("collectionFilter",n).then((function(e){"thuongtru"===t&&(a.itemsThuongTruPhuongXa=e.content),"noiohientai"===t&&(a.itemsNoiOHienTaiPhuongXa=e.content)})).catch((function(){}))}}}},r=c,u=e("2877"),l=e("6544"),s=e.n(l),h=e("c6a6"),d=e("8336"),g=e("b0af"),m=e("62ad"),f=e("8fea"),T=e("0e8f"),p=e("132d"),v=e("0fd9"),y=e("8654"),b=Object(u["a"])(r,n,i,!1,null,null,null);a["default"]=b.exports;s()(b,{VAutocomplete:h["a"],VBtn:d["a"],VCard:g["a"],VCol:m["a"],VDataTable:f["a"],VFlex:T["a"],VIcon:p["a"],VRow:v["a"],VTextField:y["a"]})},"9a0c":function(t,a,e){var n=e("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)}}]);