(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee98b5ba"],{"17b3":function(t,e,a){},"5e1e":function(t,e,a){},"891e":function(t,e,a){"use strict";var i=a("2909"),n=a("5530"),s=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),r=a("dc22"),o=a("a9ad"),l=a("de2c"),u=a("7560"),c=a("58df");e["a"]=Object(c["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),u["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+a;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-a;return[1,"..."].concat(Object(i["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-a;return[].concat(Object(i["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var u=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(u,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":n},on:a?{}:{click:i}},[t(s["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"93ed":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticStyle:{"padding-top":"75px"},attrs:{id:"users",fluid:"",tag:"section"}},[a("base-material-card",{staticClass:"px-5 py-3",staticStyle:{"margin-top":"20px"},attrs:{icon:"mdi-clipboard-text",title:"Danh sách phiếu bảo hành"}},[a("v-card-text",{class:"lg"!==t.breakpointName?"px-0":""},[a("div",{class:"xs"===t.breakpointName?"mb-3":"d-flex mb-3"},["xs"===t.breakpointName?a("div",{staticClass:"mr-auto pt-2 mb-3"},[t._v(" Tổng số: "),a("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" phiếu bảo hành ")]):a("span",{staticClass:"mr-auto pt-2"},[t._v(" Tổng số: "),a("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" phiếu bảo hành ")])]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":"","no-data-text":"Không có phiếu bảo hành nào",loading:t.loadingData,"loading-text":"Đang tải... "},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.index",fn:function(e){e.item;var i=e.index;return[a("span",[t._v(t._s(i+1))])]}},{key:"item.customerName",fn:function(e){var i=e.item;e.index;return[a("p",{staticClass:"mb-2"},[t._v(t._s(i.customerName))]),a("p",{staticClass:"mb-2",staticStyle:{color:"blue"}},[t._v(t._s(i.customerTelNo))])]}},{key:"item.branchName",fn:function(e){var i=e.item;e.index;return[a("p",{staticClass:"mb-2"},[t._v(t._s(i.branchName))]),a("p",{staticClass:"mb-2",staticStyle:{color:"blue"}},[t._v(t._s(i.branchTelNo))]),a("p",{staticClass:"mb-2",staticStyle:{color:"blue"}},[t._v(t._s(i.branchAddress))])]}},{key:"item.noithatProducts",fn:function(e){var i=e.item;e.index;return[t._l(i["noithatProducts"],(function(e,i){return a("div",{key:i},[a("p",{staticClass:"mb-2"},[t._v(t._s(i+1)+". "+t._s(e.productName)+" - "+t._s(e.quycach)+" (sl. "),a("span",{staticStyle:{"font-weight":"bold",color:"blue"}},[t._v(t._s(e.soluong))]),t._v(")")])])})),i["noithatProducts"]&&i["noithatProducts"].length>0?a("p",{staticClass:"mb-2"},[a("span",[t._v("Thời gian bảo hành: Từ ngày ")]),t._v(" "),a("span",{staticStyle:{color:"blue"}},[t._v(t._s(i["noiThatMfgDateLocal"]))]),t._v(" đến ngày "),a("span",{staticStyle:{color:"blue"}},[t._v(" "+t._s(i["noiThatExpDateLocal"]))])]):t._e()]}},{key:"item.ngoaithatProducts",fn:function(e){var i=e.item;e.index;return[t._l(i["ngoaithatProducts"],(function(e,i){return a("div",{key:i},[a("p",{staticClass:"mb-2"},[t._v(t._s(i+1)+". "+t._s(e.productName)+" - "+t._s(e.quycach)+" (sl. "),a("span",{staticStyle:{"font-weight":"bold",color:"blue"}},[t._v(t._s(e.soluong))]),t._v(")")])])})),i["ngoaithatProducts"]&&i["ngoaithatProducts"].length>0?a("p",{staticClass:"mb-2"},[a("span",[t._v("Thời gian bảo hành: Từ ngày ")]),t._v(" "),a("span",{staticStyle:{color:"blue"}},[t._v(t._s(i["ngoaiThatMfgDateLocal"]))]),t._v(" đến ngày "),a("span",{staticStyle:{color:"blue"}},[t._v(" "+t._s(i["ngoaiThatExpDateLocal"]))])]):t._e()]}}])}),a("div",{staticClass:"text-center mt-4"},[a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)},n=[],s=(a("159b"),{name:"Warranty",data:function(){return{loading:!1,loadingData:!1,dialogAddMember:!1,totalItem:0,page:1,pageCount:0,itemsPerPage:5,typeAction:"",userUpdate:"",items:[],headers:[{sortable:!1,text:"STT",align:"center",value:"index"},{sortable:!1,text:"Mã thẻ bảo hành",align:"left",value:"codeNumber"},{sortable:!1,text:"Tên khách hàng",align:"left",value:"customerName"},{sortable:!1,text:"Địa chỉ công trình",align:"left",value:"customerAddress"},{sortable:!1,text:"Đại lý bán hàng",align:"left",value:"branchName"},{sortable:!1,text:"Ngày kích hoạt",align:"left",value:"createDateLocal"},{sortable:!1,text:"Nội thất",align:"left",value:"noithatProducts"},{sortable:!1,text:"Ngoại thất",align:"left",value:"ngoaithatProducts"}]}},created:function(){var t=this;t.getWarranty()},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName}},methods:{getWarranty:function(){var t=this;t.loadingData=!0,db.collection("warranty").get().then((function(e){t.loadingData=!1;var a=[];e.size?(e.docs.forEach((function(t){a.push(t.data())})),t.items=a,t.totalItem=e.size,t.pageCount=Math.ceil(e.size/t.itemsPerPage)):t.items=[]})).catch((function(){t.loadingData=!1}))},addMember:function(t,e){var a=this;a.typeAction=t,a.userUpdate=e,a.dialogAddMember=!0,"add"===t?setTimeout((function(){a.account="",a.passWord="",a.userName="",a.telNo="",a.address="",a.$refs.formAddMember.resetValidation()}),200):setTimeout((function(){a.account=e.account,a.userName=e.userName,a.telNo=e.telNo,a.address=e.address,a.$refs.formAddMember.resetValidation()}),200)},updateStatusUser:function(t,e){var a=this;a.userUpdate=e}}}),r=s,o=(a("f549"),a("2877")),l=a("6544"),u=a.n(l),c=a("99d9"),h=a("a523"),g=a("8fea"),d=a("891e"),p=Object(o["a"])(r,i,n,!1,null,"32202910",null);e["default"]=p.exports;u()(p,{VCardText:c["b"],VContainer:h["a"],VDataTable:g["a"],VPagination:d["a"]})},f549:function(t,e,a){"use strict";a("5e1e")}}]);
//# sourceMappingURL=chunk-ee98b5ba.eccc60b7.js.map