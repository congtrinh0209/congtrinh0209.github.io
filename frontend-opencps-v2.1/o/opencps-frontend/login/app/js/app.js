(function(e){function t(t){for(var i,s,r=t[0],l=t[1],d=t[2],p=0,u=[];p<r.length;p++)s=r[p],o[s]&&u.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},o={app:0},n=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=l;n.push(["56d7","chunk-vendors"]),a()})({"1b71":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return templateDefault});const templateDefault={template:'\n        <div @click="doReadEvent(item[\'eventId\'])" style="display: flex;cursor: pointer;">\n            <div class="v-avatar white--text" style="height: 36px;width: 36px;margin-right: 8px;margin-top: 3px;">\n                <img :src="item[\'avatar\']" :alt="item[\'userName\']">\n            </div>\n            <p style="margin-bottom: 0px;">\n                <strong>{{item["userName"]}}</strong> {{item["title"]}}\n                <a href="javascript:;" style="\n                    color: #0072c2;\n                    font-weight: bold;\n                    border-bottom: 1px dotted;\n                ">\n                    {{dossier["dossierNo"]}}\n                </a>\n                <br/>\n                <span style="color: rgb(90, 90, 90) !important;font-size: 11px;">\n                    <i aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 15px; color: rgb(0, 114, 194);">event</i>\n                        {{new Date(item["notificationDate"]).toLocaleString(\'vi-VN\')}}\n                </span>\n            </p>\n        </div>\n    ',data:{item:{},dossier:{}},created:function(){let vm=this;if(void 0!==vm.$parent.item&&null!==vm.$parent.item&&(vm.item=vm.$parent.item,vm.item.hasOwnProperty("data"))){let dataObject=eval(" ( "+vm.item["data"]+" ) ");vm.dossier=dataObject["Dossier"]}},methods:{doReadEvent:function(e){var t=this;t.$parent.markReadEventId(e,t.item["viewRootURI"],t.dossier["dossierId"],t.dossier["originality"])}}},testData=[{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""},{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""}]},"56d7":function(e,t,a){"use strict";a.r(t);a("0f18");var i=a("a026"),o=a("bb71");i["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app_login"}},[e.drawerLogin?a("div",{staticStyle:{position:"fixed",width:"100%",height:"100vh",left:"0",top:"0","z-index":"9999"},on:{click:function(t){e.drawerLogin=!1}}}):e._e(),e.drawer?a("div",{staticStyle:{position:"fixed",width:"100%",height:"100vh",left:"0",top:"0"}}):e._e(),e.isSignedIn?a("div",[a("div",{staticClass:"login_wrap_app_panel",staticStyle:{"text-align":"right","max-width":"1366px","margin-top":"15px"}},[e.notificationCount>0?a("span",{staticClass:"v-badge",staticStyle:{"margin-left":"-42px",position:"absolute",top:"21px"}},[a("button",{staticClass:"mx-0 my-0 v-btn v-btn--icon theme--light",staticStyle:{position:"absolute",left:"0"},attrs:{type:"button"},on:{click:e.showNoti}},[e._m(0)]),a("span",{staticClass:"v-badge__badge red darken-3",staticStyle:{"z-index":"2",position:"relative","border-radius":"6px",height:"18px",padding:"0 12px"}},[a("span",{staticStyle:{"font-size":"10px",color:"#fff !important","font-weight":"bold",height:"14px"}},[e._v(e._s(e.notificationCount>5?"5+":e.notificationCount))])])]):a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:""},on:{click:e.showNoti}},[a("v-icon",{staticClass:"swing animated",staticStyle:{"-webkit-animation":"swing 0.8s infinite",animation:"swing 0.8s infinite"},attrs:{size:"20",color:"blue darken-3"}},[e._v("notifications")])],1),a("v-menu",{attrs:{"offset-y":"","nudge-bottom":5}},[a("v-chip",{attrs:{slot:"activator"},on:{click:function(t){e.isShowUserMenu=!e.isShowUserMenu}},slot:"activator"},[""!==e.avatarURL?a("v-avatar",[a("img",{staticStyle:{width:"32px",height:"32px",margin:"0 !important"},attrs:{src:e.avatarURL}})]):a("v-avatar",{staticClass:"white--text",style:{background:"#"+e.colorBG}},[a("span",{staticClass:"white--text"},[e._v(e._s(e.userNameLogin.slice(0,1).toUpperCase()))])]),e._v("\n          "+e._s(e.userNameLogin)+"\n          "),e.isShowUserMenu?a("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[e._v("expand_less")]):a("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[e._v("expand_more")])],1),a("v-list",[a("v-list-tile",{on:{click:e.doUserInfo}},[a("v-list-tile-action",[a("v-icon",{attrs:{size:"16"}},[e._v("person")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Thông tin tài khoản")])],1)],1),a("v-list-tile",{on:{click:e.doExitApp}},[a("v-list-tile-action",[a("v-icon",{attrs:{size:"16",color:"red darken-3"}},[e._v("exit_to_app")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Đăng xuất")])],1)],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"login_drawer",staticStyle:{"-webkit-box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","z-index":"9999"},attrs:{fixed:"",right:"","hide-overlay":"",temporary:""},model:{value:e.drawerLogin,callback:function(t){e.drawerLogin=t},expression:"drawerLogin"}},[a("article",{staticClass:"glass down"},[a("v-layout",{staticClass:"px-3",staticStyle:{display:"flex","border-bottom":"1px solid #fff"},attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0","border-top-left-radius":"8px","border-bottom-left-radius":"8px"},attrs:{block:"",small:""}},[e._v("Thông báo")])],1),a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{background:"#d0d0d0","border-top-left-radius":"0","border-bottom-left-radius":"0","border-top-right-radius":"8px","border-bottom-right-radius":"8px"},attrs:{block:"",small:""},on:{click:e.markRead}},[e._v("Đánh dấu đã đọc")])],1)],1),e.notificationCount>0?a("div",{staticClass:"layout row wrap px-3",staticStyle:{display:"flex"}},[a("div",{staticClass:"flex xs12 mt-3",staticStyle:{background:"#ffffff66","border-radius":"8px"}},[a("div",{staticStyle:{padding:"5px 10px",background:"#fff0","text-transform":"uppercase","font-weight":"bold"}},[a("v-icon",{attrs:{size:"15",color:"red accent-4"}},[e._v("mail")]),e._v(" Mới\n            ")],1),a("div",{staticClass:"notification_wrap",staticStyle:{padding:"5px 10px",background:"#ffffffb3","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px",overflow:"auto","max-height":"300px"}},e._l(e.testData,function(t,i){return a("template-rendering",{key:i,attrs:{item:t,layout_view:t["notifyMessage"],template_default:e.templateDefault},on:{"mark-as-read":e.markReadEventId}})}),1)])]):e._e(),a("div",{staticClass:"layout row wrap px-3",staticStyle:{display:"flex"}},[a("div",{staticClass:"flex xs12 mt-3",staticStyle:{background:"#ffffff66","border-radius":"8px"}},[a("div",{staticStyle:{padding:"5px 10px",background:"#fff0","text-transform":"uppercase","font-weight":"bold"}},[a("v-icon",{attrs:{size:"15",color:"red accent-4"}},[e._v("mail")]),e._v(" Trước đó\n            ")],1),a("div",{staticClass:"notification_wrap",staticStyle:{padding:"5px 10px",background:"#ffffffb3","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px",overflow:"auto","max-height":"300px"}},e._l(e.testDataSeen,function(t,i){return a("template-rendering",{key:i,attrs:{item:t,layout_view:t["notifyMessage"],template_default:e.templateDefault},on:{"mark-as-read":e.markReadEventId}})}),1)])])],1)])],1):a("div",{staticStyle:{position:"relative",height:"50px"}},[a("div",{staticClass:"login-wrapper"},[a("div",{staticClass:"login-input"},[a("div",{staticClass:"ico ico-user"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"Địa chỉ email đăng nhập"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),a("div",{staticClass:"ico ico-pass"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"Mật khẩu"},domProps:{value:e.passWord},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.goToDangNhapPress(t):null},input:function(t){t.target.composing||(e.passWord=t.target.value)}}})])]),a("div",{staticClass:"login-input"},[a("div",{staticStyle:{width:"100%"}},[a("a",{staticClass:"text-hover-blue",staticStyle:{"line-height":"30px","font-size":"12px",color:"#005792","text-decoration":"underline","padding-left":"10px"},attrs:{href:e.forgottenURLStr}},[e._v("Quên mật khẩu?")])]),a("div",{staticStyle:{width:"100%","text-align":"right"}},[a("button",{staticClass:"btn-register",attrs:{type:"button"},on:{click:e.goToDangKyPage}},[e._v("Đăng ký")]),a("button",{staticClass:"btn-login",attrs:{type:"button"},on:{click:e.goToDangNhap}},[e._v("Đăng nhập")])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-btn__content"},[a("i",{staticClass:"v-icon swing animated material-icons theme--light blue--text text--darken-3",staticStyle:{"font-size":"20px",animation:"swing 0.8s ease 0s infinite normal none running"},attrs:{"aria-hidden":"true"}},[e._v("notifications_active")])])}],r=a("bc3a"),l=a.n(r),d=a("854a"),c=a.n(d),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return null!==e.template_default&&void 0!==e.template_default&&"undefined"!==e.template_default?a("my-dynamic-view"):e._e()},u=[],m=a("da1e"),g=m["a"],f=a("2877"),h=Object(f["a"])(g,p,u,!1,null,null,null);h.options.__file="template_rendering.vue";var v=h.exports,w=a("1b71");c.a.options={closeButton:!0,timeOut:"15000"};var y={components:{"template-rendering":v},data:{isSignedIn:!1,userNameLogin:"",drawerLogin:!1,avatarURL:"http://via.placeholder.com/350x150",notificationCount:0,isShowUserMenu:!1,toggle_exclusive:0,forgottenURLStr:"",userName:"",passWord:"",userData:{},colorBG:"009688",templateDefault:w["a"],testData:[],testDataSeen:[]},created(){let e=this;e.$nextTick(function(){e.isSignedIn=window.themeDisplay.isSignedIn(),e.userNameLogin=window.themeDisplay.getUserName(),e.colorBG=e.intToRGB(e.hashCode(e.userNameLogin));let t=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));e.forgottenURLStr=""!==t?t+"/register/#/cap-lai-mat-khau":window.themeDisplay.getURLHome()+"/register/#/cap-lai-mat-khau",e.isSignedIn&&(e.userData={},e.pullNotificationCount(),setTimeout(()=>{l.a.get("/o/v1/opencps/users/"+window.themeDisplay.getUserId()).then(function(t){e.userData=t.data;let a={className:"org.opencps.usermgt.model.Applicant"===e.userData["className"]?"org.opencps.usermgt.model.ApplicantAvatar":e.userData["className"],classPK:e.userData["classPK"]};e.getImageAvatar(a),e.userNameLogin=e.userData["userName"],e.colorBG=e.intToRGB(e.hashCode(e.userNameLogin))}).catch(function(t){e.avatarURL=""})},1e3))})},watch:{$route:function(e,t){let a=this;a.notificationCount<5&&a.pullNotificationCount()}},methods:{getImageAvatar:function(e){let t=this,a={headers:{groupId:window.themeDisplay?window.themeDisplay.getScopeGroupId():""}};l.a.get("/o/v1/opencps/users/avatar/"+e["className"]+"/"+e["classPK"],a).then(function(e){if(e.data){let a=String(e.data);t.avatarURL=window.themeDisplay.getPortalURL()+a}else t.avatarURL=""}).catch(function(e){t.avatarURL=""})},markRead:function(){let e=this;for(let t in e.testData)l.a.post("/o/rest/v2/notifications/"+e.testData[t]["eventId"]+"/mark").then(function(e){});e.drawerLogin=!1},markReadEventId:function(e){let t=this,a="";a=String(t.userData["className"]).indexOf("Employee")>=0?"employee":"applicant";let i=window.themeDisplay.getSiteAdminURL().split("/~")[0].replace("group","web");l.a.post("/o/rest/v2/notifications/"+e["eventId"]+"/mark").then(function(t){let o=i+"/dich-vu-cong#/danh-sach-ho-so/0/chi-tiet-ho-so/"+e["dossierId"]+"?t="+(new Date).getTime();"employee"===a&&(o=i+"#/danh-sach-ho-so/0/chi-tiet-ho-so/"+e["dossierId"]+"?t="+(new Date).getTime()),window.location.href=o}).catch(function(t){let o=i+"/dich-vu-cong#/danh-sach-ho-so/0/chi-tiet-ho-so/"+e["dossierId"]+"?t="+(new Date).getTime();"employee"===a&&(o=i+"#/danh-sach-ho-so/0/chi-tiet-ho-so/"+e["dossierId"]+"?t="+(new Date).getTime()),window.location.href=o})},pullNotificationCount:function(){let e=this,t={};l.a.get("/o/rest/v2/notifications/count?archived=false",t).then(function(t){let a=t.data;e.notificationCount=a["total"]}).catch(function(t){e.notificationCount=0})},pullNotificationData:function(){let e=this,t={};e.testData=[],e.testDataSeen=[],l.a.get("/o/rest/v2/notifications?archived=false",t).then(function(t){let a=t.data;e.notificationCount=a["total"],e.testData=a["data"]}).catch(function(e){}),l.a.get("/o/rest/v2/notifications?archived=true&start=0&end=10",t).then(function(t){e.testDataSeen=t.data["data"]}).catch(function(e){})},showNoti:function(){let e=this;e.drawerLogin=!e.drawerLogin,e.pullNotificationData()},doRegisterRedirect:function(){let e=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register":window.themeDisplay.getURLHome()+"/register"},doUserInfo:function(){if(null!==window.themeDisplay&&void 0!==window.themeDisplay){let e=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=e+"/profile"}else window.location.href="/profile"},doExitApp:function(){let e=this;"undefined"!==typeof Storage&&(sessionStorage.removeItem("userLogout"),String(e.userData["className"]).indexOf("Employee")>=0?sessionStorage.setItem("userLogout","employee"):sessionStorage.setItem("userLogout","applicant")),window.location.href="/c/portal/logout"},goToDangKyPage:function(){if(null!==window.themeDisplay&&void 0!==window.themeDisplay){let e=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register":window.themeDisplay.getURLHome()+"/register"}else window.location.href="/register"},goToDangNhap:function(){let e=this;l.a.post("/o/v1/opencps/login",{},{headers:{Authorization:"BASIC "+window.btoa(e.userName+":"+e.passWord)}}).then(function(e){if(""!==e.data&&"ok"!==e.data&&"captcha"!==e.data)if("pending"===e.data){let e=window.themeDisplay.getSiteAdminURL().split("/~")[0].replace("group","web");window.location.href=e+"/register#/xac-thuc-tai-khoan?active_user_id="+window.themeDisplay.getUserId()+"&redirectURL="+e}else window.location.href=e.data;else if("ok"===e.data)window.location.href=window.themeDisplay.getURLHome();else if("captcha"===e.data){let e=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register#/login":window.themeDisplay.getURLHome()+"/register#/login"}else c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")}).catch(function(e){c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")})},goToDangNhapPress:function(e){let t=this;13==e.keyCode&&l.a.post("/o/v1/opencps/login",{},{headers:{Authorization:"BASIC "+window.btoa(t.userName+":"+t.passWord)}}).then(function(e){if(console.log(e.data),""!==e.data&&"ok"!==e.data&&"captcha"!==e.data)"pending"===e.data?window.location.href=window.themeDisplay.getURLHome()+"/register#/xac-thuc-tai-khoan?active_user_id="+window.themeDisplay.getUserId()+"&redirectURL="+window.themeDisplay.getURLHome():window.location.href=e.data;else if("ok"===e.data)window.location.href=window.themeDisplay.getURLHome();else if("captcha"===e.data){let e=window.themeDisplay.getLayoutRelativeURL().substring(0,window.themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register#/login":window.themeDisplay.getURLHome()+"/register#/login"}else c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")}).catch(function(e){c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")})},hashCode:function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);return t},intToRGB:function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}}},b=y,_=a("6544"),x=a.n(_),D=a("8212"),N=a("8336"),C=a("cc20"),S=a("0e8f"),I=a("132d"),L=a("a722"),k=a("8860"),T=a("ba95"),R=a("40fe"),U=a("5d23"),V=a("e449"),A=a("f774"),O=Object(f["a"])(b,n,s,!1,null,null,null);O.options.__file="App.vue";var P=O.exports;x()(O,{VAvatar:D["a"],VBtn:N["a"],VChip:C["a"],VFlex:S["a"],VIcon:I["a"],VLayout:L["a"],VList:k["a"],VListTile:T["a"],VListTileAction:R["a"],VListTileContent:U["a"],VListTileTitle:U["b"],VMenu:V["a"],VNavigationDrawer:A["a"]}),l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",i["a"].config.productionTip=!0,new i["a"]({el:"#app_login",components:{App:P},template:"<App/>"})},da1e:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026");__webpack_exports__["a"]={props:{item:{type:Object,default(){return{dossierId:0}}},layout_view:{type:Object},template_default:{type:Object}},created(){let vm=this,template="",data="{}",created="{}",updated="{}",methods="{}";null!==vm.layout_view&&void 0!==vm.layout_view&&"undefined"!==vm.layout_view&&""!==vm.layout_view?vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.layout_view["template"],data:eval(" ( "+vm.layout_view["data"]+" ) "),created:eval(" ( "+vm.layout_view["created"]+" ) "),updated:eval(" ( "+vm.layout_view["updated"]+" ) "),methods:vm.layout_view["methods"]}):null!==vm.template_default&&void 0!==vm.template_default&&"undefined"!==vm.template_default&&vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.template_default["template"],data:eval(" ( "+vm.template_default["data"]+" ) "),created:eval(" ( "+vm.template_default["created"]+" ) "),updated:eval(" ( "+vm.template_default["updated"]+" ) "),methods:vm.template_default["methods"]})},methods:{markReadEventId(e,t,a,i){let o=this,n={eventId:e,viewRootURI:t,dossierId:a,originality:i};o.$emit("mark-as-read",n)}}}}});
//# sourceMappingURL=app.js.map