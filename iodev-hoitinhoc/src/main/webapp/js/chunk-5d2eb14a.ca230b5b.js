(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d2eb14a"],{"0e8f":function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("flex")},"3c93":function(t,e,i){},"3d19":function(t,e,i){"use strict";i("ea0a")},"4b85":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var s=i("58df"),a=i("7e2b"),n=i("3206");e["a"]=Object(s["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("e8f2"),a=i("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},a55b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap-login"},[i("v-container",{staticClass:"px-0 pt-0",attrs:{id:"login-page",fluid:"",tag:"section"}},[i("div",{staticClass:"container-wrap"},[i("div",{staticClass:"wrap-title"},[i("v-flex",{staticStyle:{"text-align":"center"}},[i("img",{staticClass:"img-login-logo",attrs:{src:t.publicPath+"/images/image-logo.png?t=93111413"}})]),i("v-flex",{staticClass:"wrap-title pt-1 mb-2 mt-3"},[i("div",{staticClass:"text-1"},[t._v("HỆ THỐNG THÔNG TIN IODEV")])])],1),t.signed?t._e():i("div",{staticClass:"wrap-form px-4 py-3"},[i("div",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-flex",{staticClass:"action-title mb-5",staticStyle:{"text-align":"center","font-size":"22px","font-family":"'Roboto Slab'",color:"#fff","font-weight":"700"},attrs:{xs12:""}},[i("div",[t._v("ĐĂNG NHẬP")])]),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Tên đăng nhập",rules:[function(t){return!!t||"Tên đăng nhập là bắt buộc"}],required:"","prepend-inner-icon":"mdi-account","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("v-flex",{staticStyle:{"margin-top":"30px"},attrs:{xs12:""}},[i("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Mật khẩu",type:"password",rules:[function(t){return!!t||"Mật khẩu là bắt buộc"}],required:"","prepend-inner-icon":"mdi-key","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-flex",{staticClass:"wrap-btn-login",staticStyle:{"margin-top":"30px","margin-bottom":"20px"},attrs:{xs12:""}},[i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.login}},[i("v-icon",{attrs:{size:"20"}},[t._v("mdi-login")]),t._v("  Đăng nhập ")],1)],1)],1)],1)]),t.signed?i("div",{staticClass:"wrap-form px-3 py-3"},[i("div",{staticClass:"text-login"},[t._v("TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG")]),i("v-flex",{staticStyle:{margin:"20px 0","text-align":"center"},attrs:{xs12:""}},[i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.submitLogout}},[i("div",{staticClass:"v-btn__content"},[i("v-icon",{attrs:{size:"18"}},[t._v("mdi-logout-variant")]),t._v("  "),i("span",[t._v("Đăng xuất")])],1)]),i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.goToPage}},[i("v-icon",{attrs:{size:"20"}},[t._v("mdi-home-circle-outline")]),t._v("  "),i("span",[t._v("Truy cập hệ thống")])],1)],1)],1):t._e()])]),i("div",{staticClass:"text-center"},[i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)},a=[],n=i("2b0e"),o=i("bc3a"),r=i.n(o),l=i("854a"),c=i.n(l);c.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"};var d={name:"Login",data:()=>({publicPath:"",apiSso:"http://103.9.211.82:8080",overlay:!1,loading:!1,valid:!0,userName:"",password:"",client_secret:"",code:"",signed:!1}),created(){let t=this;n["a"].$cookies.get("Token")?t.signed=!0:t.signed=!1},computed:{},methods:{login(){let t=this;if(t.loading||!t.userName||!t.password)return;t.loading=!0;let e={data:{username:t.userName,password:t.password}};t.$store.dispatch("login",e).then((function(e){if(t.loading=!1,e&&e.access_token)try{let i=String(e.access_token.split(".")[1]).replace(/_/g,"/"),s=JSON.parse(atob(i)),a=s&&s.hasOwnProperty("vaiTros")&&s.vaiTros?s.vaiTros:"",n=!!a&&a.find((function(t){return"VAITRO_QUANTRIHETHONG"===t.ten}));if(a&&a.length)if(t.$cookies.set("Token",e.access_token,e.expires_in),t.$cookies.set("RefreshToken",e.refresh_token,e.refresh_expires_in),r.a.defaults.headers["Authorization"]="Bearer "+e.access_token,t.$store.commit("SET_ISSIGNED",!0),n){t.$cookies.set("admin",!0,e.expires_in);let i={hoVaTen:"Quản trị",maSoCanBo:"",viTriChucDanh:"Quản trị hệ thống",vaiTroSuDung:"",email:e.email};t.$cookies.set("UserInfo",i,e.expires_in),t.$cookies.set("Roles","",e.expires_in),t.goToPage()}else{let i={token:"Bearer "+e.access_token,email:s.email};t.$store.dispatch("getThongTinUserDangNhap",i).then((function(e){let i="",a={hoVaTen:"Người dùng",maSoCanBo:"",viTriChucDanh:"",vaiTroSuDung:"",email:e.email};if(e.vaiTros&&e.vaiTros.length){i=[],i=Array.from(e.vaiTros,(function(t){return t.ten})),s.vaiTroSuDung=i;let n=i.find((function(t){return"QUANTRIHETHONG"==t}));n?t.$cookies.set("admin",!0,e.expires_in):t.$cookies.set("admin","",e.expires_in),t.$cookies.set("UserInfo",a,e.expires_in),t.$cookies.set("Roles",i,e.expires_in)}else t.$cookies.set("admin","",e.expires_in),t.$cookies.set("UserInfo",a,e.expires_in),t.$cookies.set("Roles",i,e.expires_in);setTimeout((function(){t.goToPage()}),200)})).catch((function(){t.loading=!1,c.a.error("TÀI KHOẢN CHƯA ĐƯỢC CẤP QUYỀN CÁN BỘ"),setTimeout((function(){t.submitLogout()}),500)}))}else t.loading=!1,t.overlay=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}catch(i){t.loading=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}else c.a.remove(),c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")})).catch((function(e){t.loading=!1,c.a.remove(),c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")}))},submitLogout(){let t=this;t.signed=!1,t.$store.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null),t.$cookies.set("Token",""),t.$cookies.set("RefreshToken","")},goToPage(){let t=this;t.$router.push({path:"/"})}}},u=d,p=(i("3d19"),i("2877")),h=i("6544"),g=i.n(h),m=i("8336"),v=i("a523"),f=i("0e8f"),y=i("4bd4"),x=i("132d"),_=i("a797"),b=i("490a"),k=i("8654"),T=Object(p["a"])(u,s,a,!1,null,null,null);e["default"]=T.exports;g()(T,{VBtn:m["a"],VContainer:v["a"],VFlex:f["a"],VForm:y["a"],VIcon:x["a"],VOverlay:_["a"],VProgressCircular:b["a"],VTextField:k["a"]})},a797:function(t,e,i){"use strict";i("3c93");var s=i("a9ad"),a=i("7560"),n=i("f2e7"),o=i("58df");e["a"]=Object(o["a"])(s["a"],a["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},ea0a:function(t,e,i){}}]);