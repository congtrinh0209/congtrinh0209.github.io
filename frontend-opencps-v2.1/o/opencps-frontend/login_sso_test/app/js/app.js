(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function s(t){return c.p+"../../docs/o/opencps-frontend-cli/login_sso/app/js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={TiepNhanHoSoDetail:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="../../docs/o/opencps-frontend-cli/login_sso/app/css/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+".css",a=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.request=o,delete i[t],p.parentNode.removeChild(p),n(r)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,n[1](r)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("0f18");var o=n("a026"),i=n("bb71");n("74ef");o["a"].use(i["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app_login_sso"}},[t._e(),n("v-content",[n("router-view")],1)],1)},r=[],s={data:function(){return{}},computed:{currentIndex:function(){return this.$store.getters.index}},created:function(){var t=this;t.$nextTick((function(){var e=t.$router.history.current;e.query}))},watch:{$route:function(t,e){t.params,t.query}},methods:{}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),p=n("7496"),h=n("549c"),g=n("f774"),f=Object(l["a"])(c,a,r,!1,null,null,null);f.options.__file="App.vue";var m=f.exports;d()(f,{VApp:p["a"],VContent:h["a"],VNavigationDrawer:g["a"]});var v=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},y=[],b={},x=b,D=n("a523"),k=n("0e8f"),_=n("a722"),C=n("490a"),S=Object(l["a"])(x,w,y,!1,null,null,null);S.options.__file="NotFound.vue";var L=S.exports;d()(S,{VContainer:D["a"],VFlex:k["a"],VLayout:_["a"],VProgressCircular:C["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{staticClass:"my-0",staticStyle:{width:"100%","max-height":"100%"},attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog_loginDVCQG,callback:function(e){t.dialog_loginDVCQG=e},expression:"dialog_loginDVCQG"}},[n("v-card",[n("v-card-text",{staticClass:"px-0 py-0",staticStyle:{position:"relative"}},[n("div",{staticStyle:{position:"absolute",right:"15px"}},[n("v-btn",{staticStyle:{height:"36px",width:"42px"},attrs:{fab:"",color:"#913938"},on:{click:t.goBack}},[n("v-icon",{staticClass:"white--text"},[t._v("fas fa fa-reply")])],1)],1),n("iframe",{staticStyle:{width:"100%",height:"650px",border:"none"},attrs:{id:"iframeLoginDVCQG",src:t.tempDVCQG}})])],1)],1),n("v-dialog",{attrs:{persistent:"","max-width":"550"},model:{value:t.dialogLogin,callback:function(e){t.dialogLogin=e},expression:"dialogLogin"}},[n("v-card",{staticClass:"px-0"},[n("v-card-text",{staticClass:"px-0 py-0"},[t.isSigned?t._e():n("v-flex",{attrs:{xs12:""}},[n("nav",{staticClass:"toolbar theme--dark primary py-2",attrs:{"data-booted":"true"}},[n("div",{staticClass:"toolbar__content",staticStyle:{"justify-content":"center"}},[n("h3",{staticClass:"white--text"},[t._v("ĐĂNG NHẬP")])]),n("v-spacer"),n("v-btn",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.goBack(e)}}},[n("v-icon",{staticClass:"white--text"},[t._v("close")])],1)],1),n("v-flex",{staticClass:"px-2 pb-2",staticStyle:{border:"1px solid #dddddd"},attrs:{xs12:""}},[n("v-form",{ref:"form",staticClass:"mt-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{box:"",placeholder:"Email đăng nhập",rules:[function(t){return!!t||"Email đăng nhập là bắt buộc"}],required:"","prepend-inner-icon":"person_outline"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitConfirmLogin(e):null}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{box:"",placeholder:"Mật khẩu",type:"password",rules:[function(t){return!!t||"Mật khẩu là bắt buộc"}],required:"","prepend-inner-icon":"vpn_key"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitConfirmLogin(e):null}},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1),n("v-layout",{staticClass:"ml-2",attrs:{wrap:""}},[n("v-flex",{staticStyle:{"font-size":"12px",cursor:"pointer",padding:"7px"},on:{click:t.getPassword}},[n("div",{staticClass:"primary--text right"},[t._v("\n                    Quên mật khẩu?\n                  ")])])],1),n("v-flex",{staticClass:"text-xs-left text-xs-center",attrs:{xs12:""}},[n("v-btn",{staticClass:"ml-0 mr-1 my-0 white--text",attrs:{color:"#0b72ba",loading:t.loadingLogin,disabled:t.loadingLogin},on:{click:t.submitConfirmLogin}},[n("v-icon",[t._v("how_to_reg")]),t._v(" \n                  Đăng nhập\n                ")],1),n("v-btn",{staticClass:"ml-1 my-0 white--text",attrs:{color:"#0b72ba",loading:t.loadingLogin,disabled:t.loadingLogin},on:{click:t.register}},[n("v-icon",[t._v("create")]),t._v(" \n                  Đăng ký\n                ")],1)],1)],1)],1)],1)],1)],1)],1)],1)},V=[],N=(n("1157"),n("bbd0"),n("854a")),I=n.n(N);o["a"].use(I.a),I.a.options={closeButton:!0,timeOut:"5000"};var H={props:[],components:{},data:function(){return{dialog_loginDVCQG:!1,dialogLogin:!1,tempDVCQG:"",configUrl:"",isSigned:!!window.themeDisplay&&window.themeDisplay.isSignedIn(),userName:"",passWord:"",loadingLogin:!1,valid:!1,userInfoDvcqg:""}},computed:{},created:function(){var t=this;t.$nextTick((function(){var t=this;try{t.configUrl=configSso}catch(e){}t.$nextTick((function(){t.$router.history.current,t.$router.history.current.query;window.callback_dvcqg=t.callback_dvcqg,t.isSigned||t.checkVNConect()}))}))},updated:function(){var t=this;t.$nextTick((function(){}))},mounted:function(){},watch:{$route:function(t,e){t.params,t.query}},methods:{checkVNConect:function(){var t=this,e=(t.$router.history.current,t.$router.history.current.query,{state:"auth"});t.$store.dispatch("getVNConect",e).then((function(e){e&&(t.dialog_loginDVCQG=!0,setTimeout((function(){t.tempDVCQG=e}),200))})).catch((function(){}))},callback_dvcqg:function(t){var e=this;e.$router.history.current;if("0"!==String(t["userId"])){var n=window.themeDisplay.getURLHome();setTimeout((function(){window.location.href=n}),300),e.dialog_loginDVCQG=!1}else e.dialog_loginDVCQG=!1,e.dialogLogin=!0,e.userInfoDvcqg=t,console.log("user dvcqg",e.userInfoDvcqg)},submitConfirmLogin:function(){var t=this,e=(t.$router.history.current,{npmreactlogin_login:t.userName,npmreactlogin_password:t.passWord});t.userName&&t.passWord&&(t.loadingLogin=!0,t.$store.dispatch("goToDangNhap",e).then((function(e){if(t.loadingLogin=!1,"success"===e){t.dialogLogin=!1;var n=window.themeDisplay.getURLHome()+"/profile#/?sync=true";setTimeout((function(){window.location.href=n}),300)}})).catch((function(){t.loadingLogin=!1})))},goBack:function(){window.history.back()},register:function(){var t=this;window.location.href=t.configUrl.hasOwnProperty("registerUrl")?t.configUrl["registerUrl"]:window.themeDisplay.getPortalURL()+"/web/cong-dich-vu-cong/register"},getPassword:function(){var t=this;window.location.href=t.configUrl.hasOwnProperty("registerUrl")?t.configUrl["registerUrl"]+"/#/cap-lai-mat-khau":window.themeDisplay.getPortalURL()+"/web/cong-dich-vu-cong/register/#/cap-lai-mat-khau"}}},U=H,P=n("8336"),q=n("b0af"),$=n("99d9"),O=n("169a"),B=n("4bd4"),E=n("132d"),G=n("9910"),j=n("2677"),A=Object(l["a"])(U,T,V,!1,null,null,null);A.options.__file="Landing.vue";var F=A.exports;d()(A,{VBtn:P["a"],VCard:q["a"],VCardText:$["a"],VDialog:O["a"],VFlex:k["a"],VForm:B["a"],VIcon:E["a"],VLayout:_["a"],VSpacer:G["a"],VTextField:j["a"]});var Q=[{path:"/",name:"LandingRegister",component:F,props:!1},{path:"/danh-sach-ho-so/:index",name:"Landing",component:function(){return n.e("Landing").then(n.bind(null,"306c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return n.e("TiepNhanHoSoDetail").then(n.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return n.e("HoanThienBoSungHoSoDetail").then(n.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"*",name:"NotFound",component:L}];o["a"].use(v["a"]);var R=new v["a"]({routes:Q}),M=R,W=n("2f62"),z=n("bc3a"),J=n.n(z);o["a"].use(I.a),o["a"].use(W["a"]),I.a.options={closeButton:!0,timeOut:"5000"};var K=new W["a"].Store({state:{initData:{},loading:!1,index:0,agencyList:[],domainList:[],levelList:[]},actions:{loadInitResource:function(t){t.commit;var e=t.state;return new Promise((function(t,n){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData["groupId"]=window.themeDisplay.getScopeGroupId(),e.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData["groupId"]=0,e.initData["user"]={userName:"",userEmail:"",userId:20103}),t(e.initData)}))},getVNConect:function(t,e){t.commit;var n=t.state;return new Promise((function(t,o){K.dispatch("loadInitResource").then((function(i){var a={headers:{groupId:n.initData.groupId},params:{state:e.state}};J.a.get("/o/rest/v2/dvcqgsso/authurl",a).then((function(e){var n=e.data;t(n)})).catch((function(t){console.log(t),o(t)}))}))}))},goToDangNhap:function(t,e){t.commit,t.state;return new Promise((function(t,n){K.dispatch("loadInitResource").then((function(o){var i={headers:{Authorization:"BASIC "+window.btoa(e["npmreactlogin_login"]+":"+e["npmreactlogin_password"])}},a=new URLSearchParams;J.a.post("/o/v1/opencps/login",a,i).then((function(e){""!==e.data&&"ok"!==e.data?"pending"===e.data?window.location.href=window.themeDisplay.getURLHome()+"/register#/xac-thuc-tai-khoan?active_user_id="+window.themeDisplay.getUserId()+"&redirectURL="+window.themeDisplay.getURLHome():window.location.href=e.data:"ok"===e.data?t("success"):(I.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.",{autoClose:2e3}),t("error"))})).catch((function(t){I.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.",{autoClose:2e3}),n(t)}))}))}))}},mutations:{setLoading:function(t,e){t.loading=e},setInitData:function(t,e){t.initData=e}},getters:{loading:function(t){return t.loading}}}),X=(n("d304"),void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0);J.a.defaults.withCredentials=!0,J.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",J.a.defaults.headers.common["groupId"]=X,o["a"].config.productionTip=!0,o["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new o["a"]({router:M,store:K,render:function(t){return t(m)}}).$mount("#app_login_sso")},"74ef":function(t,e,n){},bbd0:function(t){t.exports={}}});
//# sourceMappingURL=app.js.map