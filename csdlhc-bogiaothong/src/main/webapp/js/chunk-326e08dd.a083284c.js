(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326e08dd"],{"0e8f":function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("flex")},"1abc":function(t,e,i){"use strict";var n=i("a797");e["a"]=n["a"]},"20f6":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||Object(o["a"])(t)||r()}},"36a7":function(t,e,i){},"3c93":function(t,e,i){},7958:function(t,e,i){},"7a7d":function(t,e,i){},"8a79":function(t,e,i){"use strict";var n=i("23e7"),a=i("06cf").f,s=i("50c4"),o=i("577e"),r=i("5a34"),c=i("1d80"),u=i("ab13"),l=i("c430"),h="".endsWith,d=Math.min,p=u("endsWith"),v=!l&&!p&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var e=o(c(this));r(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,a=void 0===i?n:d(s(i),n),u=o(t);return h?h.call(e,u,a):e.slice(a-u.length,a)===u}})},"8efc":function(t,e,i){},"952e":function(t,e,i){"use strict";i("a4e3")},a293:function(t,e,i){"use strict";var n=i("53ca"),a=i("dd89");function s(){return!0}function o(t,e,i){if(!t||!1===r(t,i))return!1;var s=Object(a["a"])(e);if("undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&s.host===t.target)return!1;var o=("object"===Object(n["a"])(i.value)&&i.value.include||function(){return[]})();return o.push(e),!o.some((function(e){return e.contains(t.target)}))}function r(t,e){var i="object"===Object(n["a"])(e.value)&&e.value.closeConditional||s;return i(t)}function c(t,e,i){var n="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&o(t,e,i)&&setTimeout((function(){r(t,i)&&n&&n(t)}),0)}function u(t,e){var i=Object(a["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var l={inserted:function(t,e){var i=function(i){return c(i,t,e)},n=function(i){t._clickOutside.lastMousedownWasOutside=o(i,t,e)};u(t,(function(t){t.addEventListener("click",i,!0),t.addEventListener("mousedown",n,!0)})),t._clickOutside={lastMousedownWasOutside:!0,onClick:i,onMousedown:n}},unbind:function(t){t._clickOutside&&(u(t,(function(e){e&&t._clickOutside&&(e.removeEventListener("click",t._clickOutside.onClick,!0),e.removeEventListener("mousedown",t._clickOutside.onMousedown,!0))})),delete t._clickOutside)}};e["a"]=l},a4e3:function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85");var n=i("e8f2"),a=i("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,s=e.data,o=e.children,r=s.attrs;return r&&(s.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(a["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}})},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},a797:function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("3c93"),i("a9ad")),s=i("7560"),o=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(a["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},adda:function(t,e,i){"use strict";var n=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),s=(i("36a7"),i("24b2")),o=i("58df"),r=Object(o["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=r,u=i("7560"),l=i("d9f7"),h=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(c,u["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b5b6:function(t,e,i){},b848:function(t,e,i){"use strict";var n=i("2909"),a=i("58df");function s(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(n["a"])(s(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("AppBar"),i("v-main",[i("div",{staticClass:"container"},[i("router-view")],1)]),i("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",t._b({attrs:{id:"core-navigation-drawer",dark:"rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)"!==t.barColor,"expand-on-hover":t.expandOnHover,right:t.$vuetify.rtl,src:"","mobile-breakpoint":"960",app:"",width:"xs"===t.breakpointName||"sm"===t.breakpointName?260:0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1))},o=[],r={name:"Drawer",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{items:[]}},created:function(){},mounted:function(){},computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("SET_DRAWER",t)}}},watch:{},methods:{}},c=r,u=i("2877"),l=i("6544"),h=i.n(l),d=i("5530"),p=(i("a9e3"),i("c7cd"),i("99af"),i("7958"),i("adda")),v=i("fe6c"),f=i("58df");function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(f["a"])(Object(v["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var g=i("a9ad"),b=i("b848"),y=i("e4cd"),w=i("e707"),O=i("2b0e"),S=O["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),_=i("7560"),$=i("a293"),x=i("dc22"),C=i("c3f0"),A=i("80d2"),k=Object(f["a"])(m("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),g["a"],b["a"],y["a"],w["a"],S,_["a"]),j=k.extend({name:"v-navigation-drawer",directives:{ClickOutside:$["a"],Resize:x["a"],Touch:C["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(d["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&y["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(A["h"])(this.height),top:this.isBottom?"auto":Object(A["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(A["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(A["h"])(this.computedTransform,"%"),")"),width:Object(A["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(p["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(A["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(A["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),E=Object(u["a"])(c,s,o,!1,null,null,null),B=E.exports;h()(E,{VNavigationDrawer:j});var N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"header-app"}},[i("header",{attrs:{id:"banner"}},[i("div",{staticClass:"container layout wrap"},[i("a",{staticClass:"py-0 px-0",attrs:{href:""}},[i("img",{staticClass:"logo-banner",attrs:{src:t.publicPath+"/images/logo-banner.png"}}),i("span",{staticClass:"title-banner"},[t._v(t._s(t.title))])])])])]),i("div",{attrs:{id:"header-nav"}},[i("nav",{staticClass:"sort-pages modify-pages",attrs:{id:"navigation"}},[i("ul",{staticClass:"container",attrs:{"aria-label":"Site Pages",role:"menubar"}},t._l(t.items,(function(e,n){return i("li",{key:n,class:t.indexTab==n?"selected":"",attrs:{id:"layout_"+n,role:"presentation"}},[i("a",{class:e["class"],attrs:{id:e["id"],"aria-labelledby":"layout_"+n,"aria-haspopup":"true",href:"javascript:;",role:"menuitem"},on:{click:function(i){return t.redirectTo(e,n)}}},[i("span",[t._v(" "+t._s(e.title))])])])})),0)]),i("v-btn",{staticClass:"btn-login my-0 white--text mr-3",staticStyle:{position:"absolute",top:"7px",right:"0px"},attrs:{small:"",color:"#940404"},on:{click:t.submitLogout}},[i("div",{staticClass:"v-btn__content"},[i("v-icon",{attrs:{size:"18"}},[t._v("mdi-logout-variant")]),t._v("  "),i("span",[t._v("Đăng xuất")])],1)])],1)])},M=[],R={name:"AppBar",components:{},props:{},data:function(){return{appName:"production",title:"Hệ thống xác thực tài khoản công dân doanh nghiệp tỉnh Hậu Giang",publicPath:"",items:[{icon:"",title:"Danh mục",class:"danhmuc-tab",id:"danhmuc-tab-id",to:"/danh-muc"},{icon:"",title:"Công dân",class:"congdan-tab",id:"congdan-tab-id",to:"/cong-dan"},{icon:"",title:"Tổ chức doanh nghiệp",class:"doanhnghiep-tab",id:"doanhnghiep-tab-id",to:"/doanh-nghiep"},{icon:"",title:"Tài khoản",class:"taikhoan-tab",id:"taikhoan-tab-id",to:"/tai-khoan"},{icon:"",title:"Quản trị",class:"quantri-tab",id:"quantri-tab-id",to:"/quan-tri"}]}},created:function(){},mounted:function(){},computed:{indexTab:function(){return this.$store.getters.getIndexTab}},watch:{},methods:{redirectTo:function(t,e){this.$store.commit("SET_INDEXTAB",e),this.$router.push({path:t.to})},submitLogout:function(){var t=this;t.$store.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null),t.$cookies.set("Token",""),t.$cookies.set("RefreshToken",""),t.$store.dispatch("logoutKeyCloak").then((function(t){var e="https://quantritaikhoan.haugiang.gov.vn/index.html";window.location.href=t.endpoint+"?redirect_uri="+e})).catch((function(){window.location.href=window.location.origin+window.location.pathname+"#/login"}))}}},T=R,L=(i("952e"),i("8336")),z=i("132d"),I=Object(u["a"])(T,N,M,!1,null,null,null),P=I.exports;h()(I,{VBtn:L["a"],VIcon:z["a"]});var W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"py-0 pl-0",attrs:{id:"footer"}},[i("v-container",{staticClass:"pt-1"},[i("v-layout",{staticStyle:{"padding-top":"7px"},attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",md8:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"text-1"},[i("span",[t._v("Cơ quan chủ quản: UBND tỉnh Hậu Giang")])]),i("v-flex",{staticClass:"text-2"},[i("span",[t._v("Tổng đài giải đáp: 1900 86.68.95")])]),i("v-flex",{staticClass:"text-3"},[i("span",[t._v("Email: dichvucong@haugiang.gov.vn")])])],1)],1),i("v-flex",{staticClass:"image-footer",attrs:{xs12:"",md4:""}},[i("img",{staticClass:"img-1",attrs:{src:t.publicPath+"/images/logo-fds.png"}}),i("img",{staticClass:"img-2",attrs:{src:t.publicPath+"/images/logo-flex.png"}})])],1)],1)],1)},H=[],D={name:"Footer",data:function(){return{appName:"production",publicPath:""}},created:function(){},computed:{}},X=D,V=(i("ef9e"),i("a523")),Y=i("0e8f"),F=(i("b5b6"),i("8dd9")),q=Object(f["a"])(F["a"],m("footer",["height","inset"]),S).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},F["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},F["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(A["h"])(t),left:Object(A["h"])(this.computedLeft),right:Object(A["h"])(this.computedRight),bottom:Object(A["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),U=i("a722"),G=Object(u["a"])(X,W,H,!1,null,null,null),Z=G.exports;h()(G,{VContainer:V["a"],VFlex:Y["a"],VFooter:q,VLayout:U["a"]});var J={name:"Home",components:{Drawer:B,AppBar:P,Footer:Z},data:function(){return{}},created:function(){var t=this.$router.history.current;"/"===t.path&&this.$router.push({path:"/login"})}},K=J,Q=i("7496"),tt=(i("bd0c"),S.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,s=t.insetFooter,o=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(a+s+o,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),et=Object(u["a"])(K,n,a,!1,null,null,null);e["default"]=et.exports;h()(et,{VApp:Q["a"],VMain:tt})},bd0c:function(t,e,i){},c3f0:function(t,e,i){"use strict";i("159b");var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,s=.5,o=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<n-o&&t.up(t),t.down&&a>n+o&&t.down(t))};function s(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function u(t,e,i){var a=e.value,s=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(s){var r=c(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=r,Object(n["y"])(r).forEach((function(t){s.addEventListener(t,r[t],o)}))}}function l(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var s=a._touchHandlers[i.context._uid];Object(n["y"])(s).forEach((function(t){a.removeEventListener(t,s[t])})),delete a._touchHandlers[i.context._uid]}}var h={inserted:u,unbind:l};e["a"]=h},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function a(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var s={inserted:n,unbind:a};e["a"]=s},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e4cd:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("b0c0");var n=i("d9bd"),a=i("2b0e");e["a"]=a["default"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,a=t.mobileBreakpoint;if(a===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),o=!isNaN(s);return o?i<s:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("1abc"),a=i("80d2"),s=i("2b0e");e["a"]=s["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new n["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(a["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(a["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[a["x"].up,a["x"].pageup],i=[a["x"].down,a["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight,a=e<0,s=e>0;return!(i||!a)||(!(n||!s)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(a["g"])(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||!this.shouldScroll(n,i)}for(var o=0;o<e.length;o++){var r=e[o];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,i)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(a["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("498a"),i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("a15b");var n=i("2b0e");function a(t){return n["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(a.staticClass+=" ".concat(r.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,s)}})}},ef9e:function(t,e,i){"use strict";i("7a7d")}}]);