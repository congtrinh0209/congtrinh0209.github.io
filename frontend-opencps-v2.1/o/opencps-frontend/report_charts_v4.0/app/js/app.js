(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push(["56d7","chunk-vendors"]),a()})({"56d7":function(t,e,a){"use strict";a.r(e);var s=a("a026"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{padding:"10px"},attrs:{id:"app_report_charts"}},[a("v-content",[a("Landing")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"1300px",margin:"0 auto"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[a("div",{staticClass:"background-triangle-big1"},[t._v("THỐNG KÊ THEO NĂM")]),a("div",{staticStyle:{width:"200px"}},[a("v-select",{attrs:{width:"200px",items:t.yearList,"item-value":"value","item-text":"name"},model:{value:t.yearSelected,callback:function(e){t.yearSelected=e},expression:"yearSelected"}})],1)]),a("v-layout",{attrs:{wrap:"","align-center":""}},[a("v-flex",{attrs:{md6:"",xs12:""}},[a("apexchart",{staticClass:"pieChartTotal",attrs:{type:"pie",width:"350",height:"250",options:t.chartOptionsYear,series:t.statisticalYear}})],1),a("v-flex",{attrs:{md6:"",xs12:""}},[a("v-layout",{staticClass:"run-down",attrs:{wrap:""}},[a("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[a("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processCount))]),a("p",[t._v("Tổng số đã giải quyết")])]),a("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[a("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.releaseCount))]),a("p",[t._v("Hoàn thành")])]),a("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[a("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processingCount))]),a("p",[t._v("Đang xử lý")])]),a("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[a("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.cancelledCount))]),a("p",[t._v("Rút hồ sơ")])])],1)],1)],1)],1)]),a("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[a("div",{staticClass:"background-triangle-big1"},[t._v("THỐNG KÊ THỦ TỤC HÀNH CHÍNH")])]),a("v-card-text",{staticClass:"px-0 py-4 pt-5"},[a("v-layout",{staticClass:"custom-class",attrs:{wrap:""}},[a("v-flex",{staticClass:"px-2 pb-3",attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"white--text",staticStyle:{"border-radius":"4px"},attrs:{color:"green lighten-1",height:"70px"}},[a("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[a("v-flex",{staticClass:"xs3 pt-1"},[a("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[a("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),a("v-flex",{staticClass:"xs9 pl-4 pt-2"},[a("p",[a("span",[t._v("Thủ tục ")]),a("span",{staticClass:"text-bold"},[t._v("mức độ 2")])]),a("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[0]["count"]))])])],1)],1)],1),a("v-flex",{staticClass:"px-2 pb-3",attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"white--text",staticStyle:{"border-radius":"4px"},attrs:{color:"orange lighten-1",height:"70px"}},[a("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[a("v-flex",{staticClass:"xs3 pt-1"},[a("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[a("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),a("v-flex",{staticClass:"xs9 pl-4 pt-2"},[a("p",[a("span",[t._v("Thủ tục ")]),a("span",{staticClass:"text-bold"},[t._v("mức độ 3")])]),a("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[1]["count"]))])])],1)],1)],1),a("v-flex",{staticClass:"px-2 pt-2 pb-3",attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"red lighten-1",height:"70px"}},[a("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[a("v-flex",{staticClass:"xs3 pt-1"},[a("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[a("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),a("v-flex",{staticClass:"xs9 pl-4 pt-2"},[a("p",[a("span",[t._v("Thủ tục ")]),a("span",{staticClass:"text-bold"},[t._v("mức độ 4")])]),a("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[2]["count"]))])])],1)],1)],1),a("v-flex",{staticClass:"px-2 pt-2 pb-3",attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"#00bcd5",height:"70px"}},[a("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[a("v-flex",{staticClass:"xs3 pt-1"},[a("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[a("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),a("v-flex",{staticClass:"xs9 pl-4 pt-2"},[a("p",[a("span",{staticClass:"text-bold"},[t._v("TỔNG SỐ THỦ TỤC")])]),a("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.totalTTHC))])])],1)],1)],1)],1)],1)],1)]),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[a("div",{staticClass:"background-triangle-big1"},[t._v("SỞ BAN NGÀNH")])]),a("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"350",height:"250",options:t.chartOptionsSoQuanXa,series:t.statisticalSBN}})],1)]),a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big1"},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")])]),a("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"350",height:"250",options:t.chartOptionsSoQuanXa,series:t.statisticalQUAN_HUYEN}})],1)]),a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big1"},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])]),a("div",{staticStyle:{width:"100%"}},[a("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"350",height:"250",options:t.chartOptionsSoQuanXa,series:t.statisticalXA_PHUONG}})],1)])])],1)],1),a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("div",{staticClass:"pa-2 v-sheet theme--light"},[a("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[a("div",{staticClass:"background-triangle-big1",staticStyle:{width:"228px"}},[t._v("THỐNG KÊ THEO THÁNG")]),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md7:""}},[a("div",{staticStyle:{display:"flex","align-items":"center",height:"40px"}},[a("span",{staticClass:"mx-3",class:{"groupcode-active":"SBN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="SBN"}}},[t._v("SỞ BAN NGÀNH")]),a("span",{staticClass:"mx-3",class:{"groupcode-active":"QUAN_HUYEN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="QUAN_HUYEN"}}},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")]),a("span",{staticClass:"mx-3",class:{"groupcode-active":"XA_PHUONG"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="XA_PHUONG"}}},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])])]),a("v-flex",{staticClass:"text-right",attrs:{md5:""}},[a("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.monthList,"item-text":"name","item-value":"value"},model:{value:t.monthSelected,callback:function(e){t.monthSelected=e},expression:"monthSelected"}}),a("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.yearList,"item-text":"name","item-value":"value"},model:{value:t.yearSelected2,callback:function(e){t.yearSelected2=e},expression:"yearSelected2"}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mx-2",attrs:{text:t.isTable,small:"",color:"#1976d2"},on:{click:function(e){t.isTable=!1}}},s),[a("i",{staticClass:"fa fa-pie-chart white--text",attrs:{"aria-hidden":"true"}})])]}}])},[a("span",[t._v("Xem dạng biểu đồ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mx-2",attrs:{text:!t.isTable,small:"",color:"#1976d2"},on:{click:function(e){t.isTable=!0}}},s),[a("i",{staticClass:"fa fa-table white--text",attrs:{"aria-hidden":"true"}})])]}}])},[a("span",[t._v("Xem dạng bảng biểu")])])],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md3:""}},["XA_PHUONG"===t.groupCode?a("v-select",{staticClass:"my-2",attrs:{items:t.listDoiTuong,"item-text":"itemName","item-value":"itemCode"},model:{value:t.distGroupSelected,callback:function(e){t.distGroupSelected=e},expression:"distGroupSelected"}}):t._e()],1),a("v-flex",{attrs:{xs12:""}},[t.isTable||t.isLoading?t._e():a("apexchart",{attrs:{height:t.heightChart,options:t.chartOptionsMonth,series:t.statisticalMonth}}),t.isTable?a("v-data-table",{staticClass:"my-2",attrs:{"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(e){return[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[a("span",[t._v("STT")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[a("span",[t._v("Đơn vị")])]),a("th",{staticClass:"text-center",attrs:{colspan:"5"}},[a("span",[t._v("Nhận giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"7"}},[a("span",[t._v("Kết quả nhận giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Đang giải quyết")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Tạm dừng bổ sung điều kiện")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Rút không giải quyết")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Tỉ lệ sớm và đúng hạn")])])]),a("tr",[a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tồn trước")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Nhận trong kì")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Tình hình thực hiện")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Từ chối giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"2"}},[a("span",[t._v("Trả kết quả")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Còn hạn")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Quá hạn")])])]),a("tr",[a("th",{staticClass:"text-center"},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Một cửa")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Trực tuyến")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Trước hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Đúng hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Quá hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Đã trả")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Chưa trả")])])])])]}},{key:"body",fn:function(e){return[a("tbody",[a("tr",{staticClass:"note__column"},[a("td",{attrs:{align:"center"}},[t._v("(1)")]),a("td",{attrs:{align:"center"}},[t._v("(2)")]),a("td",{attrs:{align:"center"}},[t._v("(3)")]),a("td",{attrs:{align:"center"}},[t._v("(4)")]),a("td",{attrs:{align:"center"}},[t._v("(5)")]),a("td",{attrs:{align:"center"}},[t._v("(6)")]),a("td",{attrs:{align:"center"}},[t._v("(7)")]),a("td",{attrs:{align:"center"}},[t._v("(8)")]),a("td",{attrs:{align:"center"}},[t._v("(9)")]),a("td",{attrs:{align:"center"}},[t._v("(10)")]),a("td",{attrs:{align:"center"}},[t._v("(11)")]),a("td",{attrs:{align:"center"}},[t._v("(12)")]),a("td",{attrs:{align:"center"}},[t._v("(13)")]),a("td",{attrs:{align:"center"}},[t._v("(14)")]),a("td",{attrs:{align:"center"}},[t._v("(15)")]),a("td",{attrs:{align:"center"}},[t._v("(16)")]),a("td",{attrs:{align:"center"}},[t._v("(17)")]),a("td",{attrs:{align:"center"}},[t._v("(18)")]),a("td",{attrs:{align:"center"}},[t._v("(19)")]),a("td",{attrs:{align:"center"}},[t._v("(20)")])]),t._l(t.danhSachThongKeThang,(function(e,s){return a("tr",{key:s},[a("td",{attrs:{align:"center"}},[t._v(t._s(s))]),a("td",{staticStyle:{padding:"8px 10px"},attrs:{align:"left"}},[t._v(t._s(e.govAgencyName))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.processCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.remainingCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.receivedCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.onegateCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.onlineCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.releaseCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.betimesCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.ontimeCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.overtimeCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.unresolvedCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.doneCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.releasingCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.processingCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.undueCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.overdueCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.waitingCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.cancelledCount))]),a("td",{attrs:{align:"center"}},[t._v(t._s(e.ontimePercentage))])])}))],2)]}}],null,!1,3674598138)}):t._e()],1)],1)],1)])],1)],1)},r=[],c=a("bc3a"),l=a.n(c),d={components:{},data:function(){return{levelList:[{level:2,count:"0",levelName:2},{level:3,count:"0",levelName:3},{level:4,count:"0",levelName:4}],totalTTHC:0,groupCode:"SBN",isLoading:!1,yearSelected:(new Date).getFullYear(),yearSelected2:(new Date).getFullYear(),monthSelected:(new Date).getMonth()+1,distGroupSelected:"",isTable:!1,statisticalYear:[44,50],statisticalSBN:[44,44,44,44,44,44],statisticalQUAN_HUYEN:[44,44,44,44,44,44],statisticalXA_PHUONG:[44,44,44,44,44,44],statisticalMonth:[{name:"Hồ sơ nộp trực tiếp",data:[20,23]},{name:"Hồ sơ nộp trực tuyến",data:[20,23]}],chartOptionsYear:{labels:["Xử lý đúng hạn","Xử lý quá hạn"],legend:{position:"bottom"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},colors:["#00E396","#FF4560"]},chartOptionsMonth:{grid:{padding:{top:0,right:0,bottom:0,left:0}},chart:{type:"bar",locales:[{name:"en",options:{toolbar:{exportToSVG:"Tải xuống SVG",exportToPNG:"Tải xuống PNG"}}}]},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1,offsetX:-12,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[]}},chartOptionsSoQuanXa:{labels:["Trong hạn","Quá hạn","Hoàn thành đúng hạn","Hoàn thành quá hạn","Xin rút","Chờ bổ sung"],colors:["#00E396","#FF4560","#008FFB","#775DD0","#2f8512","#FEB019"],states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}}},monthList:[{name:"Tháng 1",value:1},{name:"Tháng 2",value:2},{name:"Tháng 3",value:3},{name:"Tháng 4",value:4},{name:"Tháng 5",value:5},{name:"Tháng 6",value:6},{name:"Tháng 7",value:7},{name:"Tháng 8",value:8},{name:"Tháng 9",value:9},{name:"Tháng 10",value:10},{name:"Tháng 11",value:11},{name:"Tháng 12",value:12}],listDoiTuong:[],statistics:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:1,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020},danhSachThongKeThang:[]}},computed:{yearList:function(){for(var t=[],e=(new Date).getFullYear(),a=0;a<=3;a++)t.push({name:"Năm "+(e-a),value:e-a});return t},heightChart:function(){return this.statisticalMonth[0].data.length<5?"300":"auto"}},created:function(){var t=this;this.$nextTick((function(){t.getDictgroups("QUAN_HUYEN"),t.getStatisticsYear(),t.getStatisticsYearSBN(),t.getStatisticsYearQUAN_HUYEN(),t.getStatisticsYearXA_PHUONG(),t.getStatisticsMonth(t.groupCode),t.getLevelService()}))},watch:{yearSelected:function(){this.getStatisticsYear(),this.getStatisticsYearSBN(),this.getStatisticsYearQUAN_HUYEN(),this.getStatisticsYearXA_PHUONG()},yearSelected2:function(){this.getStatisticsMonth(this.groupCode)},monthSelected:function(){this.getStatisticsMonth(this.groupCode)},distGroupSelected:function(){this.getStatisticsMonth(this.groupCode)},groupCode:function(t){this.getStatisticsMonth(t)}},methods:{getLevelService:function(){var t=this,e={headers:{groupId:window.themeDisplay.getScopeGroupId()}};l.a.get("/o/rest/v2/serviceinfos/statistics/levels",e).then((function(e){var a=e.data;if(a.data){var s=0,n=a.data;for(var i in n)s+=parseInt(n[i]["count"]),2===n[i]["level"]?t.levelList[0]["count"]=n[i]["count"]:3===n[i]["level"]?t.levelList[1]["count"]=n[i]["count"]:4===n[i]["level"]&&(t.levelList[2]["count"]=n[i]["count"]);t.totalTTHC=s}})).catch((function(t){console.log(t),reject(t)}))},getDictgroups:function(t){var e=this,a=window.location.origin,s={url:a+"/o/rest/v2/dictcollections/REPORT_GROUP/dictgroups/"+t+"/dictitems",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"}};l.a.request(s).then((function(t){t.data.data&&(e.listDoiTuong=t.data.data,e.distGroupSelected=t.data.data[0].itemCode)})).catch()},getStatisticsYear:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0}};l.a.request(a).then((function(e){e.data.data&&(t.statistics=e.data.data[0],t.statisticalYear=[e.data.data[0].waitingCount,e.data.data[0].ontimeCount])})).catch()},getStatisticsYearSBN:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,groupCode:"SBN"}};l.a.request(a).then((function(e){e.data.data&&(t.statisticalSBN=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount])})).catch()},getStatisticsYearQUAN_HUYEN:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,groupCode:"QUAN_HUYEN"}};l.a.request(a).then((function(e){e.data.data&&(t.statisticalQUAN_HUYEN=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount])})).catch()},getStatisticsYearXA_PHUONG:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:t.yearSelected,month:0,groupCode:"XA_PHUONG"}};l.a.request(a).then((function(e){e.data.data&&(t.statisticalXA_PHUONG=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount])})).catch()},getStatisticsMonth:function(t){var e=this;e.isLoading=!0;var a=window.location.origin,s={};s="XA_PHUONG"===t?{url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t,parentAgency:e.distGroupSelected}}:{url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t}},l.a.request(s).then((function(t){if(e.statisticalMonth[0].data=[],e.statisticalMonth[1].data=[],e.chartOptionsMonth.xaxis.categories=[],t.data.data){e.danhSachThongKeThang=t.data.data;for(var a=0;a<t.data.data.length;a++)e.statisticalMonth[0].data.push(t.data.data[a+1].onegateCount),e.statisticalMonth[1].data.push(t.data.data[a+1].onlineCount),e.chartOptionsMonth.xaxis.categories.push(t.data.data[a+1].govAgencyName),e.isLoading=!1}})).catch()}}},p=d,u=a("2877"),h=a("6544"),v=a.n(h),g=a("8336"),f=a("b0af"),C=a("99d9"),m=a("8fea"),x=a("0e8f"),_=a("132d"),y=a("a722"),S=a("b56d"),w=a("3a2f"),b=Object(u["a"])(p,o,r,!1,null,null,null),T=b.exports;v()(b,{VBtn:g["a"],VCard:f["a"],VCardText:C["a"],VDataTable:m["a"],VFlex:x["a"],VIcon:_["a"],VLayout:y["a"],VSelect:S["a"],VTooltip:w["a"]});var N={name:"App",components:{Landing:T},data:function(){return{}}},H=N,O=a("7496"),A=a("549c"),G=Object(u["a"])(H,n,i,!1,null,null,null),k=G.exports;v()(G,{VApp:O["a"],VContent:A["a"]});var U=a("bb71");a("74ef");s["a"].use(U["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var Y=a("1321"),P=a.n(Y);s["a"].use(P.a),s["a"].component("apexchart",P.a),s["a"].config.productionTip=!1;var D=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():223437;l.a.defaults.withCredentials=!0,l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",l.a.defaults.headers.common["groupId"]=D,new s["a"]({vuetify:void 0,render:function(t){return t(k)}}).$mount("#app_report_charts")},"74ef":function(t,e,a){}});
//# sourceMappingURL=app.js.map