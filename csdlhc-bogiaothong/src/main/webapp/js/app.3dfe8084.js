(function(n){function t(t){for(var a,o,r=t[0],u=t[1],h=t[2],s=0,p=[];s<r.length;s++)o=r[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,h||[]),e()}function e(){for(var n,t=0;t<c.length;t++){for(var e=c[t],a=!0,o=1;o<e.length;o++){var r=e[o];0!==i[r]&&(a=!1)}a&&(c.splice(t--,1),n=u(u.s=e[0]))}return n}var a={},o={app:0},i={app:0},c=[];function r(n){return u.p+"js/"+({}[n]||n)+"."+{"chunk-14acf181":"061747c2","chunk-43658026":"de5b4fc4","chunk-017a7672":"9c67255d","chunk-70c67224":"abfd1cdf","chunk-e416f71a":"d72cef95","chunk-0678fad1":"a0a1f63c","chunk-08654781":"98c789e5","chunk-17bd301e":"7576989b","chunk-1d460ec4":"e6480cc6","chunk-1f0ba402":"05c35211","chunk-29388e7f":"0bca8cc8","chunk-346b47aa":"19edc10c","chunk-3e336b24":"b18be0bd","chunk-5875fddf":"32446a25","chunk-71d0e3a4":"cf8b69e3","chunk-73fad6d8":"8ed98e87","chunk-77545334":"736a1fcb","chunk-7c02c285":"ec1ac301","chunk-82bd1fea":"9eec4d97","chunk-91181d18":"3c1910a8","chunk-9c365d2a":"55a501dd","chunk-c5f02f4e":"022ad77a","chunk-e27af610":"debdaca5","chunk-82aa8488":"d7d04c6b","chunk-8de1793e":"ca523dcd"}[n]+".js"}function u(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(n){var t=[],e={"chunk-14acf181":1,"chunk-43658026":1,"chunk-017a7672":1,"chunk-70c67224":1,"chunk-e416f71a":1,"chunk-0678fad1":1,"chunk-08654781":1,"chunk-17bd301e":1,"chunk-1d460ec4":1,"chunk-1f0ba402":1,"chunk-29388e7f":1,"chunk-346b47aa":1,"chunk-3e336b24":1,"chunk-5875fddf":1,"chunk-71d0e3a4":1,"chunk-73fad6d8":1,"chunk-77545334":1,"chunk-7c02c285":1,"chunk-82bd1fea":1,"chunk-91181d18":1,"chunk-9c365d2a":1,"chunk-c5f02f4e":1,"chunk-e27af610":1,"chunk-82aa8488":1,"chunk-8de1793e":1};o[n]?t.push(o[n]):0!==o[n]&&e[n]&&t.push(o[n]=new Promise((function(t,e){for(var a="css/"+({}[n]||n)+"."+{"chunk-14acf181":"8e31d627","chunk-43658026":"0b6cbd88","chunk-017a7672":"18c19dab","chunk-70c67224":"79f26b3d","chunk-e416f71a":"aab78287","chunk-0678fad1":"6bf48032","chunk-08654781":"28a6d90d","chunk-17bd301e":"546dad61","chunk-1d460ec4":"5b20bacb","chunk-1f0ba402":"d4cc793c","chunk-29388e7f":"6c3e69ec","chunk-346b47aa":"72923a64","chunk-3e336b24":"06086f2d","chunk-5875fddf":"06086f2d","chunk-71d0e3a4":"aebc278b","chunk-73fad6d8":"6187d885","chunk-77545334":"61610e65","chunk-7c02c285":"61610e65","chunk-82bd1fea":"61610e65","chunk-91181d18":"7530e26d","chunk-9c365d2a":"9b956c7a","chunk-c5f02f4e":"d77b99c3","chunk-e27af610":"28a6d90d","chunk-82aa8488":"ee7a6a78","chunk-8de1793e":"faf94455"}[n]+".css",i=u.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var h=c[r],s=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(s===a||s===i))return t()}var p=document.getElementsByTagName("style");for(r=0;r<p.length;r++){h=p[r],s=h.getAttribute("data-href");if(s===a||s===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[n],d.parentNode.removeChild(d),e(c)},d.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(d)})).then((function(){o[n]=0})));var a=i[n];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,e){a=i[n]=[t,e]}));t.push(a[2]=c);var h,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(n);var p=new Error;h=function(t){s.onerror=s.onload=null,clearTimeout(d);var e=i[n];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,e[1](p)}i[n]=void 0}};var d=setTimeout((function(){h({type:"timeout",target:s})}),12e4);s.onerror=s.onload=h,document.head.appendChild(s)}return Promise.all(t)},u.m=n,u.c=a,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)u.d(e,a,function(t){return n[t]}.bind(null,a));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="/",u.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],s=h.push.bind(h);h.push=t,h=h.slice();for(var p=0;p<h.length;p++)t(h[p]);var d=s;c.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"1f55":function(n,t,e){},2752:function(n,t,e){"use strict";e("2a7e")},"2a7e":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("d3b7");var a=e("2b0e"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",[e("confirm-dialog"),e("router-view")],1)},i=[],c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"fade"}},[n.isShow?e("div",{staticClass:"vc-overlay",attrs:{id:"vueConfirm"},on:{click:n.handleClickOverlay}},[e("transition",{attrs:{name:"zoom"}},[n.isShow?e("div",{ref:"vueConfirmDialog",staticClass:"vc-container"},[e("span",{staticClass:"vc-text-grid"},[n.dialog.title?e("h4",{staticClass:"vc-title",domProps:{innerHTML:n._s(n.dialog.title)}}):n._e(),n.dialog.message?e("p",{staticClass:"vc-text",domProps:{innerHTML:n._s(n.dialog.message)}}):n._e(),n.dialog.auth?e("span",[e("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:n.password,expression:"password"}],staticClass:"vc-input",attrs:{type:"password",name:"vc-password",placeholder:"Password",autocomplete:"off"},domProps:{value:n.password},on:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?function(t){return n.handleClickButton(t,!0)}.apply(null,arguments):null},input:function(t){t.target.composing||(n.password=t.target.value)}}})]):n._e()]),e("div",{staticClass:"vc-btn-grid",class:{isMono:!n.dialog.button.no||!n.dialog.button.yes}},[n.dialog.button.no?e("button",{staticClass:"vc-btn left",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),function(t){return n.handleClickButton(t,!1)}.apply(null,arguments)}}},[n._v(" "+n._s(n.dialog.button.no)+" ")]):n._e(),n.dialog.button.yes?e("button",{staticClass:"vc-btn",attrs:{disabled:!!n.dialog.auth&&!n.password,type:"button"},on:{click:function(t){return t.stopPropagation(),function(t){return n.handleClickButton(t,!0)}.apply(null,arguments)}}},[n._v(" "+n._s(n.dialog.button.yes)+" ")]):n._e()])]):n._e()])],1):n._e()])},r=[],u={name:"VueConfirmDialog",data:function(){return{password:null}},props:{params:{type:Object,default:function(){return{}}}},methods:{handleClickButton:function(n,t){n.target;t?this.dialog.callback():this.$store.commit("SET_CONFIG_CONFIRM_DIALOG",{auth:!1,title:"",message:"",button:{},callback:function(){}}),this.$store.commit("SET_SHOWCONFIRM",!1)},handleClickOverlay:function(n){n.target}},computed:{isShow:function(){return this.$store.getters.getIsShowConfirm},dialog:function(){return this.$store.getters.getDialogConfirm}},mounted:function(){},beforeDestroy:function(){}},h=u,s=h,p=(e("2752"),e("2877")),d=Object(p["a"])(s,c,r,!1,null,null,null),l=d.exports,f={name:"App",components:{"confirm-dialog":l},data:function(){return{}}},m=f,g=e("6544"),k=e.n(g),y=e("7496"),T=Object(p["a"])(m,o,i,!1,null,null,null),v=T.exports;k()(T,{VApp:y["a"]});var C=e("f309");e("1f55");a["a"].use(C["a"]);var b=new C["a"]({theme:{themes:{light:{primary:"#2161B1"}}}}),D=(e("3ca3"),e("ddb0"),e("8c4f"));a["a"].use(D["a"]);var S=new D["a"]({mode:"hash",base:"/",routes:[{path:"/",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-017a7672")]).then(e.bind(null,"bb51"))},children:[{path:"/don-vi",name:"DonVi",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-17bd301e")]).then(e.bind(null,"b091"))},props:!0},{path:"/phong-ban",name:"PhongBan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-9c365d2a")]).then(e.bind(null,"6929"))},props:!0},{path:"/phong-ban/:id",name:"EditPhongBan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-77545334")]).then(e.bind(null,"1d86"))},props:!0},{path:"/vi-tri-chuc-danh",name:"ViTriChucDanh",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-0678fad1")]).then(e.bind(null,"29f3"))},props:!0},{path:"/vi-tri-chuc-danh/:id",name:"EditViTriChucDanh",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-7c02c285")]).then(e.bind(null,"14fe"))},props:!0},{path:"/don-vi/:id",name:"EditDonVi",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-1d460ec4")]).then(e.bind(null,"fa44"))},props:!0},{path:"/thong-tin-don-vi/:id",name:"ThongTinDonVi",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-91181d18")]).then(e.bind(null,"d8c4"))},props:!0},{path:"/can-bo",name:"CanBo",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-71d0e3a4")]).then(e.bind(null,"f15a"))},props:!0},{path:"/can-bo/:id",name:"EditCanBo",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-82bd1fea")]).then(e.bind(null,"81e4"))},props:!0},{path:"/danh-muc",name:"DanhMuc",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-73fad6d8")]).then(e.bind(null,"87f4"))},props:!0},{path:"/ca-nhan",name:"CongDan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-e27af610")]).then(e.bind(null,"71fc"))},props:!0},{path:"/doanh-nghiep",name:"DoanhNghiep",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-08654781")]).then(e.bind(null,"b0f8"))},props:!0},{path:"/thong-tin-ca-nhan/:id",name:"ChiTietCongDan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-346b47aa")]).then(e.bind(null,"bfe1"))},props:!0},{path:"/thong-tin-doanh-nghiep/:id",name:"ChiTietDoanhNghiep",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-29388e7f")]).then(e.bind(null,"3327"))},props:!0},{path:"/ca-nhan/:id",name:"ChinhSuaCongDan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-5875fddf")]).then(e.bind(null,"dec6"))},props:!0},{path:"/doanh-nghiep/:id",name:"ChinhSuaDoanhNghiep",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-3e336b24")]).then(e.bind(null,"33274"))},props:!0},{name:"KichHoatTaiKhoan",path:"/kich-hoat-tai-khoan",component:function(){return e.e("chunk-8de1793e").then(e.bind(null,"8e87"))}},{name:"QuanTri",path:"/quan-tri",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-c5f02f4e")]).then(e.bind(null,"44ef"))}},{path:"/tai-khoan",name:"TaiKhoan",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-43658026"),e.e("chunk-70c67224"),e.e("chunk-e416f71a"),e.e("chunk-1f0ba402")]).then(e.bind(null,"438d"))},props:!0}]},{name:"Login",path:"/login",component:function(){return Promise.all([e.e("chunk-14acf181"),e.e("chunk-70c67224"),e.e("chunk-82aa8488")]).then(e.bind(null,"a55b"))}}]}),M=(e("e9c4"),e("2f62")),w=e("bc3a"),P=e.n(w),N=e("1157"),j=e.n(N);a["a"].use(M["a"]);var A=new M["a"].Store({state:{indexTab:0,apiSso:"http://119.17.200.69:19904",apiCData:"http://119.17.200.69:19980",isShowConfirm:!1,dialogConfirm:{auth:!1,title:"",message:"",button:{},callback:function(){}}},getters:{getIndexTab:function(n){return n.indexTab},getIsSigned:function(n){return n.isSigned},getIsShowConfirm:function(n){return n.isShowConfirm},getDialogConfirm:function(n){return n.dialogConfirm}},mutations:{SET_INDEXTAB:function(n,t){n.indexTab=t},SET_ISSIGNED:function(n,t){n.isSigned=t},SET_SHOWCONFIRM:function(n,t){n.isShowConfirm=t},SET_CONFIG_CONFIRM_DIALOG:function(n,t){n.dialogConfirm=t}},actions:{collectionCreate:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o=JSON.stringify(t.data),i={method:"post",url:"/officer/internal/"+t.collectionName+"/1.0",headers:{Accept:"application/json","Content-Type":"application/json"},data:o};t.hasOwnProperty("typeMode")&&"C_DATA"==t.typeMode&&(i.url=e.apiCData+"/cmon/internal/"+t.collectionName+"/1.0"),P()(i).then((function(t){var e=t.data;n(e)})).catch((function(n){a(n.response)}))}))},collectionUpdate:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o=JSON.stringify(t.data),i={method:"post",url:"/officer/internal/"+t.collectionName+"/1.0/"+t.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:o};t.hasOwnProperty("typeMode")&&"C_DATA"==t.typeMode&&(i.url=e.apiCData+"/cmon/internal/"+t.collectionName+"/1.0/"+t.id),P()(i).then((function(t){var e=t.data;n(e)})).catch((function(n){a(n)}))}))},collectionDelete:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={method:"delete",url:"/officer/internal/"+t.collectionName+"/1.0/"+t.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:{}};t.hasOwnProperty("typeMode")&&"C_DATA"==t.typeMode&&(o.url=e.apiCData+"/cmon/internal/"+t.collectionName+"/1.0/"+t.id),P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){a(n)}))}))},collectionFilter:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={method:"get",url:"/officer/internal/"+t.collectionName+"/1.0/filter",headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:t.data};t.hasOwnProperty("typeMode")&&"C_DATA"==t.typeMode&&(o.url=e.apiCData+"/cmon/internal/"+t.collectionName+"/1.0/filter"),P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){a(n)}))}))},collectionDetail:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={method:"get",url:"/officer/internal/"+t.collectionName+"/1.0/"+t.id,data:{},headers:{Accept:"application/json","Content-Type":"application/json"}};t.hasOwnProperty("typeMode")&&"C_DATA"==t.typeMode&&(o.url=e.apiCData+"/cmon/internal/"+t.collectionName+"/1.0/"+t.id),P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){a(n)}))}))},loginKeyCloak:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={url:e.apiSso+"/flex/oauth2/authorization_endpoint?redirect_uri="+t.uri,method:"GET",headers:{Secret:"GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ","Content-Type":"application/json"}};j.a.ajax(o).done((function(t){n(t)})).fail((function(n){a(n)}))}))},logoutKeyCloak:function(n,t){n.commit;var e=n.state;return new Promise((function(n,t){var a={url:e.apiSso+"/flex/oauth2/logout_endpoint",method:"GET",headers:{"Content-Type":"application/json"}};j.a.ajax(a).done((function(t){n(t)})).fail((function(n){t(n)}))}))},getTokenKeyCloak:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={url:e.apiSso+"/flex/oauth2/token",method:"POST",headers:{Authorization:"Basic ZmxleDpzc28=",secret:"GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},data:{code:t.code,redirect_uri:t.redirect_uri}};j.a.ajax(o).done((function(t){var e=t;n(e)})).fail((function(n){a(n)}))}))},getRefreshTokenKeyCloak:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={url:e.apiSso+"/flex/oauth2/refreshtoken",method:"POST",headers:{Authorization:"Basic ZmxleDpzc28=",secret:"GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},data:{refresh_token:t.code,redirect_uri:t.redirect_uri}};j.a.ajax(o).done((function(t){var e=t;n(e)})).fail((function(n){a(n)}))}))},createAccountCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.data.type,headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},changePass:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/resetpwd",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},changeAcc:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.type+"/"+t.maDinhDanh+"/tendinhdanh",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},activeCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.data.type+"/active",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},blockCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.data.type+"/lock",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},unBlockCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.data.type+"/unlock",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},restoreCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/datasharing/idp/account/"+t.data.type+"/restore",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},deleteCaNhan:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"delete",url:"/v1/datasharing/idp/account/"+t.data.type+"/delete",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},importDanhMuc:function(n,t){n.commit;var e=n.state;return new Promise((function(n,a){var o={headers:{},params:{}},i=new FormData;i.append("file",t.file),P.a.post(e.apiSso+"/v1/datasharing/importdata/"+t.danhMuc,i,o).then((function(t){n(t)})).catch((function(n){a(n)}))}))},createBieuMau:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/admin/dynamiccontent",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},updateBieuMau:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/admin/dynamiccontent/"+t.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},deleteBieuMau:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a={method:"delete",url:"/v1/admin/dynamiccontent/"+t.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:{}};P()(a).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n)}))}))},getBieuMau:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a={method:"get",url:"/v1/admin/dynamiccontent/filter",headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:t.data};P()(a).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n)}))}))},getLogChangeStatusAcc:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a={method:"get",url:"/v1/admin/activity/filter",headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:t.data};P()(a).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n)}))}))},updateLog:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/v1/admin/activity/"+t.uuid,headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},printPhieu:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify({}),o={method:"post",url:"/v1/datasharing/idp/account/"+t.madinhdanh+"/printcontent",headers:{"Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))},getDanhTinhDienThu:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a={method:"get",url:"/v1/datasharing/danhtinhdientu/filter",headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:t.data};P()(a).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n)}))}))},createChungThuSo:function(n,t){n.commit,n.state;return new Promise((function(n,e){var a=JSON.stringify(t.data),o={method:"post",url:"/certificate/sign/e-form",headers:{Accept:"application/json","Content-Type":"application/json"},data:a};P()(o).then((function(t){var e=t.data;n(e)})).catch((function(n){e(n.response)}))}))}}}),_=e("2b27"),O=e.n(_),x=e("854a"),B=e.n(x),G=(e("d304"),e("f962"));B.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"},a["a"].use(O.a),a["a"].config.productionTip=!1;var E="http://119.17.200.69:19904";"undefined"!==typeof E&&(P.a.defaults.baseURL=E),P.a.interceptors.response.use((function(n){return n}),(function(n){if(401==n.response.status&&(A.commit("SET_ISSIGNED",""),a["a"].$cookies.set("Token",""),a["a"].$cookies.get("RefreshToken"))){var t={code:a["a"].$cookies.get("RefreshToken"),redirect_uri:"http://119.17.200.69:19981/index.html"};A.dispatch("getRefreshTokenKeyCloak",t).then((function(n){a["a"].$cookies.set("Token",n.access_token,n.expires_in),a["a"].$cookies.set("RefreshToken",n.refresh_token,n.refresh_expires_in),P.a.defaults.headers["Authorization"]="Bearer "+n.access_token,B.a.remove(),B.a.error("Thao tác thất bại. Vui lòng thử lại.")})).catch((function(){A.dispatch("logoutKeyCloak").then((function(n){var t="http://119.17.200.69:19981/index.html";window.location.href=n.endpoint+"?redirect_uri="+t})).catch((function(){S.push({path:"/login"})}))}))}return n.response?parseError(n.response.data):Promise.reject(n)})),a["a"].$cookies.get("Token")?(A.commit("SET_ISSIGNED",!0),P.a.defaults.headers["Authorization"]="Bearer "+a["a"].$cookies.get("Token")):(A.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null)),a["a"].mixin({data:function(){return{mockData:G}},methods:{},computed:{isSigned:function(){return this.$store.getters.getIsSigned},userLogin:function(){var n="";try{n=JSON.parse(localStorage.getItem("user"))}catch(t){}return n}}}),new a["a"]({vuetify:b,router:S,store:A,render:function(n){return n(v)}}).$mount("#app")},f962:function(n){n.exports=JSON.parse('{"danhSachDonVi":[{"primKey":"1","maHanhChinh":"DTND-90339123","tenGoi":"Cục Đường thủy nội địa","tenTiengAnh":"","tenVietTat":"","diaChiHoatDong":{"soNhaChiTiet":"123 Cao Bá Quát","tinhThanh":{"maMuc":"","tenMuc":"Hà Nội"},"quanHuyen":{"maMuc":"","tenMuc":"Cầu Giấy"},"phuongXa":{"maMuc":"","tenMuc":"Dịch Vọng Hậu"}},"ngayThanhLap":"2020-10-10","soQuyetDinh":"QĐ-9834123","maSoNganSach":"12394123123","capDuToan":"3","khoiCoQuan":"Chính phủ","nguoiDaiDien":{"maSoCaNhan":"","hoVaTen":"Nguyễn Văn Nam"},"danhBaLienLac":{"thuDienTu":"dtnd.gov.vn","soDienThoai":"0989898898","soFax":""},"tinhTrangToChuc":{"maMuc":"1","tenMuc":"Đang hoạt động"},"toChucCapTren":{"maHanhChinh":"BGTVT","tenGoi":"Bộ Giao thông vận tải","tenTiengAnh":"","tenVietTat":""},"giayDangKyHoatDong":[{"loaiGiayTo":{"maMuc":"A-013123","tenMuc":"Giấy đăng ký hoạt động"},"soGiay":"A-983123","ngayCap":"2020-10-08"},{"loaiGiayTo":{"maMuc":"B-013123","tenMuc":"Giấy đăng ký hoạt động"},"soGiay":"B-983123","ngayCap":"2021-11-18"}]},{"primKey":"2","maHanhChinh":"CDS-90339123","tenGoi":"Cục Đường sắt","tenTiengAnh":"","tenVietTat":"","diaChiHoatDong":{"soNhaChiTiet":"123 Cao Bá Quát","tinhThanh":{"maMuc":"","tenMuc":"Hà Nội"},"quanHuyen":{"maMuc":"","tenMuc":"Cầu Giấy"},"phuongXa":{"maMuc":"","tenMuc":"Dịch Vọng Hậu"}},"ngayThanhLap":"2020-12-08","soQuyetDinh":"QĐ0934123","maSoNganSach":"1898312","nguoiDaiDien":{"maSoCaNhan":"","hoVaTen":"Nguyễn Văn Nam"},"danhBaLienLac":{"thuDienTu":"dsvn.gov.vn","soDienThoai":"0989831298","soFax":""},"tinhTrangToChuc":{"maMuc":"2","tenMuc":"Dừng hoạt động"},"toChucCapTren":{"maHanhChinh":"","tenGoi":"Bộ Giao thông vận tải","tenTiengAnh":"","tenVietTat":""}}],"danhSachPhongBan":[{"MaDinhDanh":"string","TenGoi":"string","MaPhongBan":"string","CoQuanDonVi":{"primKey":"string","uuid":"string","@type":"string","ThoiGianTao":"2022-06-23T17:04:28.899Z","ThoiGianCapNhat":"2022-06-23T17:04:28.899Z","NguoiTaoLap":{"@type":"string","MaDinhDanh":"string","TenDinhDanh":"string","MaSoID":"string"},"NguoiCapNhat":{"@type":"string","MaDinhDanh":"string","TenDinhDanh":"string","MaSoID":"string"},"NhatKiSuaDoi":{"@type":"string","ThoiGian":"2022-06-23T17:04:28.899Z","TacGia":"string","NoiDungSuaDoi":"string","MaSoBanTin":"string"},"TrangThaiDuLieu":{"@type":"string","MaMuc":"string","TenMuc":"string"},"PhapLyDuLieu":{"@type":"string","MaMuc":"string","TenMuc":"string"},"MaDinhDanh":"string","TenGoi":"string","TenVietTat":"string","TenTiengAnh":"string","CapDuToan":0,"SoQuyetDinh":"string","HinhThucSoHuu":{"@type":"string","TenMuc":"string","MaMuc":"string"},"ToChucCapTren":{"@type":"string","MaDinhDanh":"string","TenGoi":"string","TenTiengAnh":"string","TenVietTat":"string"},"MaSoNganSach":"string","NgayThanhLap":"2022-06-23T17:04:28.899Z","DanhBaLienLac":{"@type":"string","SoFax":"string","ThuDienTu":"string","SoDienThoai":"string"},"TinhTrangToChuc":{"@type":"string","TenMuc":"string","MaMuc":"string"},"DiaChiHoatDong":{"@type":"string","SoNhaChiTiet":"string","PhuongXa":{"@type":"string","MaMuc":"string","TenMuc":"string"},"QuanHuyen":{"@type":"string","MaMuc":"string","TenMuc":"string"},"TinhThanh":{"@type":"string","MaMuc":"string","TenMuc":"string"}},"KhoiCoQuan":{"@type":"string","TenMuc":"string","MaMuc":"string"},"NguoiDaiDien":{"@type":"string","MaDinhDanh":"string","HoVaTen":"string","MaSoCaNhan":"string"},"GiayDangKyHoatDong":[{"@type":"string","MaDinhDanh":"string","SoGiay":"string","NgayCap":"2022-06-23T17:04:28.899Z","LoaiGiayDangKyHoatDong":{"@type":"string","MaMuc":"string","TenMuc":"string"}}],"DanhTinhDienTu":[{"@type":"string","MaDinhDanh":"string","TenDinhDanh":"string","TinhTrangSuDungTaiKhoan":{"@type":"string","MaMuc":"string","TenMuc":"string"}}]},"DanhBaLienLac":{"ThuDienTu":"string","SoDienThoai":"string","SoFax":"string"}}],"danhSachCanBo":[{"primKey":"1","maSoCanBo":"EMP-90339123","hoVaTen":"Nguyễn Văn Nam","ngaySinh":"1991-08-20","coQuanChuQuan":{"maHanhChinh":"BGTVT","tenGoi":"Bộ Giao thông vận tải"}}]}')}});