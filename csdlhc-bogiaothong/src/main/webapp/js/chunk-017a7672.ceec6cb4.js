(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017a7672"],{"0e8f":function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("flex")},"20f6":function(t,e,i){},"36a7":function(t,e,i){},"3c93":function(t,e,i){},7958:function(t,e,i){},"7a7d":function(t,e,i){},"8a79":function(t,e,i){"use strict";var n=i("23e7"),a=i("e330"),s=i("06cf").f,o=i("50c4"),r=i("577e"),c=i("5a34"),l=i("1d80"),h=i("ab13"),u=i("c430"),d=a("".endsWith),p=a("".slice),v=Math.min,f=h("endsWith"),m=!u&&!f&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!m&&!f},{endsWith:function(t){var e=r(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,a=void 0===i?n:v(o(i),n),s=r(t);return d?d(e,s,a):p(e,a-s.length,a)===s}})},"8efc":function(t,e,i){},"952e":function(t,e,i){"use strict";i("a4e3")},a4e3:function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85");var n=i("e8f2"),a=i("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,s=e.data,o=e.children,r=s.attrs;return r&&(s.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(a["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}})},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},adda:function(t,e,i){"use strict";var n=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),s=(i("36a7"),i("24b2")),o=i("58df"),r=Object(o["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=r,l=i("7560"),h=i("d9f7"),u=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(h["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b5b6:function(t,e,i){},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("AppBar"),i("v-main",[i("div",{staticClass:"container"},[i("router-view")],1)]),i("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",t._b({attrs:{id:"core-navigation-drawer",dark:"rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)"!==t.barColor,"expand-on-hover":t.expandOnHover,right:t.$vuetify.rtl,src:"","mobile-breakpoint":"960",app:"",width:"xs"===t.breakpointName||"sm"===t.breakpointName?260:0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1))},o=[],r={name:"Drawer",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{items:[]}},created:function(){},mounted:function(){},computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("SET_DRAWER",t)}}},watch:{},methods:{}},c=r,l=i("2877"),h=i("6544"),u=i.n(h),d=i("5530"),p=(i("a9e3"),i("c7cd"),i("99af"),i("7958"),i("adda")),v=i("fe6c"),f=i("58df");function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(f["a"])(Object(v["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var g=i("a9ad"),b=i("b848"),y=i("e4cd"),w=i("e707"),_=i("2b0e"),S=_["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),$=i("7560"),O=i("a293"),x=i("dc22"),C=i("c3f0"),A=i("80d2"),k=Object(f["a"])(m("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),g["a"],b["a"],y["a"],w["a"],S,$["a"]),E=k.extend({name:"v-navigation-drawer",directives:{ClickOutside:O["a"],Resize:x["a"],Touch:C["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(d["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&y["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(A["h"])(this.height),top:this.isBottom?"auto":Object(A["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(A["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(A["h"])(this.computedTransform,"%"),")"),width:Object(A["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(p["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(A["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(A["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),B=Object(l["a"])(c,s,o,!1,null,null,null),j=B.exports;u()(B,{VNavigationDrawer:E});var N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"header-app"}},[i("header",{attrs:{id:"banner"}},[i("div",{staticClass:"container layout wrap"},[i("a",{staticClass:"py-0 px-0",attrs:{href:""}},[i("img",{staticClass:"logo-banner",attrs:{src:t.publicPath+"/images/logo-banner.png"}}),i("span",{staticClass:"title-banner"},[t._v(t._s(t.title))])])])])]),i("div",{attrs:{id:"header-nav"}},[i("nav",{staticClass:"sort-pages modify-pages",attrs:{id:"navigation"}},[i("ul",{staticClass:"container",attrs:{"aria-label":"Site Pages",role:"menubar"}},t._l(t.items,(function(e,n){return i("li",{key:n,class:t.indexTab==n?"selected":"",attrs:{id:"layout_"+n,role:"presentation"}},["donvi-tab-id"==e.id?i("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[i("a",t._g(t._b({class:e["class"],attrs:{id:e["id"],"aria-labelledby":"layout_"+n,"aria-haspopup":"true",href:"javascript:;",role:"menuitem"},on:{click:function(i){return t.redirectTo(e,n)}}},"a",o,!1),s),[i("span",[t._v(" "+t._s(e.title))]),t._v("  "),i("v-icon",{attrs:{right:"",color:"#2161B1"}},[t._v("mdi-chevron-down")])],1)]}}],null,!0)},[i("v-list",[i("v-list-item",{staticStyle:{"border-bottom":"1px dotted #b2b2b2",cursor:"pointer"},on:{click:function(e){return t.redirectToChild("/phong-ban",n)}}},[i("v-list-item-title",[t._v("Phòng ban")])],1),i("v-list-item",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.redirectToChild("/vi-tri-chuc-danh",n)}}},[i("v-list-item-title",[t._v("Vị trí chức danh")])],1)],1)],1):i("a",{class:e["class"],attrs:{id:e["id"],"aria-labelledby":"layout_"+n,"aria-haspopup":"true",href:"javascript:;",role:"menuitem"},on:{click:function(i){return t.redirectTo(e,n)}}},[i("span",[t._v(" "+t._s(e.title))])])],1)})),0)]),i("v-btn",{staticClass:"btn-login my-0 white--text mr-3",staticStyle:{position:"absolute",top:"7px",right:"0px"},attrs:{small:"",color:"#2161B1"},on:{click:t.submitLogout}},[i("div",{staticClass:"v-btn__content"},[i("v-icon",{attrs:{size:"18"}},[t._v("mdi-logout-variant")]),t._v("  "),i("span",[t._v("Đăng xuất")])],1)])],1)])},T=[],M={name:"AppBar",components:{},props:{},data:function(){return{appName:"production",title:"Cơ sở dữ liệu hành chính - Bộ Giao thông vận tải",publicPath:"",items:[{icon:"",title:"Quản lý đơn vị",class:"donvi-tab",id:"donvi-tab-id",to:"/don-vi"},{icon:"",title:"Cán bộ",class:"canbo-tab",id:"canbo-tab-id",to:"/can-bo"},{icon:"",title:"Cá nhân",class:"congdan-tab",id:"congdan-tab-id",to:"/ca-nhan"},{icon:"",title:"Đơn vị kinh doanh",class:"doanhnghiep-tab",id:"doanhnghiep-tab-id",to:"/doanh-nghiep"},{icon:"",title:"Danh mục",class:"danhmuc-tab",id:"danhmuc-tab-id",to:"/danh-muc"},{icon:"",title:"Tài khoản",class:"taikhoan-tab",id:"taikhoan-tab-id",to:"/tai-khoan"},{icon:"",title:"Quản trị",class:"quantri-tab",id:"quantri-tab-id",to:"/quan-tri"}]}},created:function(){},mounted:function(){},computed:{indexTab:function(){return this.$store.getters.getIndexTab}},watch:{},methods:{redirectTo:function(t,e){this.$store.commit("SET_INDEXTAB",e),this.$router.push({path:t.to})},redirectToChild:function(t,e){this.$store.commit("SET_INDEXTAB",e),this.$router.push({path:t})},submitLogout:function(){var t=this;t.$store.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null),t.$cookies.set("Token",""),t.$cookies.set("RefreshToken",""),t.$store.dispatch("logoutKeyCloak").then((function(t){var e="http://119.17.200.69:19981/index.html";window.location.href=t.endpoint+"?redirect_uri="+e})).catch((function(){window.location.href=window.location.origin+window.location.pathname+"#/login"}))}}},L=M,I=(i("952e"),i("8336")),z=i("132d"),R=i("8860"),W=i("da13"),P=i("5d23"),H=i("e449"),V=Object(l["a"])(L,N,T,!1,null,null,null),X=V.exports;u()(V,{VBtn:I["a"],VIcon:z["a"],VList:R["a"],VListItem:W["a"],VListItemTitle:P["b"],VMenu:H["a"]});var Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"py-0 pl-0",attrs:{id:"footer"}},[i("v-container",{staticClass:"pt-1"},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"text-1"},[i("v-icon",{attrs:{size:"18",color:"#1767DF"}},[t._v("mdi-alpha-c-circle-outline")]),t._v("  "),i("span",[t._v("TRUNG TÂM CÔNG NGHỆ THÔNG TIN - BỘ GIAO THÔNG VẬN TẢI")])],1),i("v-flex",{staticClass:"text-2"},[i("v-icon",{attrs:{size:"18",color:"#1767DF"}},[t._v("mdi-phone-in-talk")]),t._v("  "),i("span",[t._v("Hotline: 1900 0318 - Điện thoại: (024) 3.822.2979 ")])],1),i("v-flex",{staticClass:"text-3"},[i("v-icon",{attrs:{size:"18",color:"#1767DF"}},[t._v("mdi-email")]),t._v("  "),i("span",[t._v("Email: bophanhotro@mt.gov.vn")])],1)],1)],1)],1)],1)],1)},D=[],F={name:"Footer",data:function(){return{appName:"production",publicPath:""}},created:function(){},computed:{}},U=F,G=(i("ef9e"),i("a523")),q=i("0e8f"),Z=(i("b5b6"),i("8dd9")),J=Object(f["a"])(Z["a"],m("footer",["height","inset"]),S).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},Z["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},Z["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(A["h"])(t),left:Object(A["h"])(this.computedLeft),right:Object(A["h"])(this.computedRight),bottom:Object(A["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),K=i("a722"),Q=Object(l["a"])(U,Y,D,!1,null,null,null),tt=Q.exports;u()(Q,{VContainer:G["a"],VFlex:q["a"],VFooter:J,VIcon:z["a"],VLayout:K["a"]});var et={name:"Home",components:{Drawer:j,AppBar:X,Footer:tt},data:function(){return{}},created:function(){var t=this.$router.history.current;"/"===t.path&&this.$router.push({path:"/login"})}},it=et,nt=i("7496"),at=(i("bd0c"),S.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,s=t.insetFooter,o=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(a+s+o,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),st=Object(l["a"])(it,n,a,!1,null,null,null);e["default"]=st.exports;u()(st,{VApp:nt["a"],VMain:at})},bd0c:function(t,e,i){},c3f0:function(t,e,i){"use strict";i("d3b7"),i("159b");var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,s=.5,o=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<n-o&&t.up(t),t.down&&a>n+o&&t.down(t))};function s(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function l(t,e,i){var a=e.value,s=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(s){var r=c(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=r,Object(n["y"])(r).forEach((function(t){s.addEventListener(t,r[t],o)}))}}function h(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var s=a._touchHandlers[i.context._uid];Object(n["y"])(s).forEach((function(t){a.removeEventListener(t,s[t])})),delete a._touchHandlers[i.context._uid]}}var u={inserted:l,unbind:h};e["a"]=u},e4cd:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("b0c0");var n=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,a=t.mobileBreakpoint;if(a===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),o=!isNaN(s);return o?i<s:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),a=(i("3c93"),i("a9ad")),s=i("7560"),o=i("f2e7"),r=i("58df"),c=Object(r["a"])(a["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=c,h=i("80d2"),u=i("2b0e");e["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["x"].up,h["x"].pageup],i=[h["x"].down,h["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,a=e.shiftKey||e.deltaX?"x":"y",s="y"===a?e.deltaY:e.deltaX||e.deltaY;"y"===a?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=s<0,r=s>0;return!(i||!o)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(h["g"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var a=0;a<e.length;a++){var s=e[a];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("498a"),i("99af"),i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("a15b");var n=i("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(a.staticClass+=" ".concat(r.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,s)}})}},ef9e:function(t,e,i){"use strict";i("7a7d")}}]);