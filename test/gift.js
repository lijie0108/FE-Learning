!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="//i.zhenai.com/m/portal/add_replace_resources_specify_misc/",o(o.s="738651b583dfdbfb7943")}({"15a6ac61a616e891f2a8":function(e,t,o){},"3a070c9e6e2eb7e89655":function(e,t){var o={utf8:{stringToBytes:function(e){return o.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(o.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],o=0;o<e.length;o++)t.push(255&e.charCodeAt(o));return t},bytesToString:function(e){for(var t=[],o=0;o<e.length;o++)t.push(String.fromCharCode(e[o]));return t.join("")}}};e.exports=o},"511f7ea3275f9fe7258a":function(e,t,o){var n=o("809f651f4a82c57978d0");e.exports=function(e){"use strict";e=e||{};var t="";return t+='<span class="toast" style="max-width:180px">',t+=(0,n.$escape)(e.text),t+="</span>"}},"56ae98f5a822b22371c5":function(e,t,o){},"57f4505c1b5deedba90d":function(e,t){var o,n;o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],o=0,n=0;o<e.length;o++,n+=8)t[n>>>5]|=e[o]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],o=0;o<32*e.length;o+=8)t.push(e[o>>>5]>>>24-o%32&255);return t},bytesToHex:function(e){for(var t=[],o=0;o<e.length;o++)t.push((e[o]>>>4).toString(16)),t.push((15&e[o]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],o=0;o<e.length;o+=2)t.push(parseInt(e.substr(o,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var r=e[n]<<16|e[n+1]<<8|e[n+2],i=0;i<4;i++)8*n+6*i<=8*e.length?t.push(o.charAt(r>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,r=0;n<e.length;r=++n%4)0!=r&&t.push((o.indexOf(e.charAt(n-1))&Math.pow(2,-2*r+8)-1)<<2*r|o.indexOf(e.charAt(n))>>>6-2*r);return t}},e.exports=n},"698d75b157f24ae829cc":function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},"6c2e43dccf71c63cfabd":function(e,t,o){"use strict";(function(t){
/*! art-template@runtime | https://github.com/aui/art-template */
var o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=Object.create(o),r=/["&'<>]/;n.$escape=function(e){return function(e){var t=""+e,o=r.exec(t);if(!o)return e;var n="",i=void 0,a=void 0,s=void 0;for(i=o.index,a=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==i&&(n+=t.substring(a,i)),a=i+1,n+=s}return a!==i?n+t.substring(a,i):n}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},n.$each=function(e,t){if(Array.isArray(e))for(var o=0,n=e.length;o<n;o++)t(e[o],o);else for(var r in e)t(e[r],r)},e.exports=n}).call(this,o("698d75b157f24ae829cc"))},"738651b583dfdbfb7943":function(e,t,o){"use strict";o.r(t);var n,r=o("78090de113261f19d421"),i=o.n(r),s=Z.getParam("channelId"),c="".concat(location.protocol,"//api.zhenai.com"),d=["/statusInfo/getFootTabStatusInfo","/login/loginByTempToken.do","/login/applyTempToken.do","/profile/getBasicProfile.do","/payment/productList.do","/payment/courierList.do"],l=function(e){if(function(e){return!(-1===e.indexOf("/banner/getBanners")||!/\/mobileVerify\.html$/.test(window.location.pathname))}(e))return!0;for(var t=0;t<d.length;t++){var o=d[t];if(-1!==e.indexOf(o))return!0}return!1},u={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o="";return o=!1===t?"".concat(c).concat(e):e,new Promise((function(t,n){Z.ajax({url:o,type:"GET",dataType:"json",xhrFields:{withCrendentials:"true"},success:function(o){!0===o.isError?(!1!==l(e)||"-00003"!==o.errorCode&&"-00004"!==o.errorCode&&"-00015"!==o.errorCode||Z.user.login(location.href),t(o)):t(o)},error:function(e){n(e)}})}))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="";return n=!1===o?"".concat(c).concat(e):e,new Promise((function(o,r){Z.ajax({url:n,data:t,type:"post",xhrFields:{withCrendentials:"true"},success:function(t){!0===t.isError?(!1!==l(e)||"-00003"!==t.errorCode&&"-00004"!==t.errorCode&&"-00015"!==t.errorCode||Z.user.login(location.href),o(t)):o(t)},error:function(e){r(e)}})}))},storage:{setItem:function(e,t){try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){return!1}},getItem:function(e){try{var t=localStorage.getItem(e)||"";return t.length>0?JSON.parse(t):null}catch(e){return null}},removeItem:function(e){try{return localStorage.removeItem(e)}catch(e){return!1}}},sessionStorage:{setItem:function(e,t){try{sessionStorage.setItem(e,JSON.stringify(t))}catch(e){return!1}},getItem:function(e){try{var t=sessionStorage.getItem(e)||"";return t.length>0?JSON.parse(t):null}catch(e){return null}},removeItem:function(e){try{sessionStorage.removeItem(e)}catch(e){return!1}}},downloadNativeApp:function(e){var t=navigator.userAgent;if(/(iphone|ipod|ipad)/gi.test(t)){var o="itms-apps://itunes.apple.com/cn/app/zhen-ai-wang/id575846819?mt=1";/weibo/gi.test(t)&&(o="https://itunes.apple.com/cn/app/zhen-ai-wang/id575846819?mt=1"),window.location.href=o}else/micromessenger/gi.test(t)?window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zhenai.android":(window.location.href="zhenaiapp://platformapi/startApp?appId=20000001&fromPage=0&memberId=105388926",setTimeout((function(){window.location.href="https://images.zastatic.com/apk/zhenai/zhenai_".concat(e,".apk?1=1")}),1e3))},events:{MENU_UNREADMESSAGE:"MENU_UNREADMESSAGE",MENU_UNREADMESSAGE_REQUIRE_UPDATE:"MENU_UNREADMESSAGE_REQUIRE_UPDATE",PHONE_VERI_SET:"PHONE_VERI_SET"},TAP:!0===/(MacIntel|Win32)/.test(navigator.platform)?"click":/(android|iphone|ipad)/gi.test(navigator.userAgent)?"tap":"click",TouchMove:"touchmove",preventDefault:function(e){e.preventDefault(),e.stopPropagation(),e.returnValue=!1},px2rem:function(e){var t=parseFloat(e)/window.lib.flexible.rem;return"string"==typeof e&&a.match(/px$/)&&(t+="rem"),t},getUserGUID:function(){var e=u.storage.getItem("V-GUID")||"";if(0===e.length){var t=i()(Date.now()+navigator.userAgent+Math.floor(1e3*Math.random()));return u.storage.setItem("V-GUID",t),t}return e},growingIO:function(e){var t=t||[];t.push(["setAccountId","ad9ebca2e114729a"]),t.push(["setCS1","memberId",e.memberId||""]),t.push(["setCS2","sex",e.sex||""]),t.push(["setCS3","age",e.age||""]),t.push(["setCS4","workcity",e.workCity||""]),t.push(["setCS5","salary",e.salary||""]),t.push(["setCS6","registerTimeSection",e.registerTimeSection||""]),t.push(["setCS7","isZhenxinVip",e.isZhenxinVip||""]),window._vds=t;var o=document.createElement("script"),n=document.querySelector("head");o.type="text/javascript",o.async=!0,o.src=("https:"==document.location.protocol?"https://":"http://")+"dn-growing.qbox.me/vds.js",n.appendChild(o)}};1==(n=u.storage.getItem("user-mobile-verify"))&&(u.storage.setItem("user-mobile-verify",!1),!0!==/login\.html/gi.test(location.href)&&Z.user.login(location.href)),(4==n||6==n)&&!0!==/mobileVerify\.html/gi.test(location.href)&&!0!==/login\.html/gi.test(location.href)&&location.replace("./mobileVerify.html?type=".concat(n));var g=null,f=null,h=function(){return g?new Promise((function(e,t){e(g)})):f=f||new Promise((function(e,t){u.post("/profile/getBasicProfile.do").then((function(o){!1===o.isError?(f=null,e(g=o)):t(g)})).catch((function(){t(),f=null}))}))};"915313"!==s&&!0===Z.user.isLogin()&&h().then((function(e){if(!1===e.isError){var t=e.data.memberID%1193;if(t>=397&&t<1193)return;u.growingIO({memberId:e.data.memberID,sex:e.data.gender,age:e.data.age,workCity:e.data.workCityString,salary:e.data.salaryString,registerTimeSection:"",isZhenxinVip:e.data.isZhenaiMail})}})),!0!==window.__manualReportPV__&&function(){try{Z.tj.reportWap({logInterface:"t_fw_00080",data:[{data_type:1001,channel_id:Z.getParam("channelId")||Z.getChannelId().channelId||902759,subid:Z.getParam("subChannelId")||Z.getChannelId().subChannelId||0,data1:location.href,data2:document.referrer}]})}catch(e){console.log(e)}}();var p=u,m=(location.protocol,function(e){return p.post("/login/userLogin.do",e)}),v=function(){return p.post("/login/getGeetestCaptcha.do")},b=o("92d2a83d8798fe365c88"),w=o.n(b),C=function(e,t){t=t||!1,$(e).html(w()({logoutVisible:t})),$("#footer-app").on(p.TAP,(function(){p.downloadNativeApp("902803_26")})),$("#footer-logout").on(p.TAP,(function(){p.get("/login/userLogout.do").then((function(e){location.href="./welcome.html"}))}))},_=o("bf6eae35e123c6b22a1b"),y=o.n(_),x=function(e){return p.post("/login/sendLoginMessageCode.do",e)},I=function(e){return p.post("/login/messageCodeLogin.do",e)},P=function(e){return p.post("/login/weChatPublicLogin",e)},T=function(e){return p.post("/login/weChatPublicCodeLogin",e)},S="./welcome.html",k=o("511f7ea3275f9fe7258a"),A=o.n(k),j=function(e,t,o){$(document.body).append(A()({text:e})),setTimeout((function(){$(".toast").remove(),o&&o()}),t||3e3)},M=null;function B(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E,D=Z.getParam("ext8"),z="registerPhonePre"===Z.getParam("from")&&D,O=(E=Z.getParam("phone"),z&&/\d+/.test(E||"")?E:""),V="uploadIDCard"===Z.getParam("from"),L=function(){var e=Z.getParam("phone");return V&&/\d+/.test(e||"")?e:""}(),U="micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i),N="zhenaiOfficial"===Z.getParam("from",decodeURIComponent(Z.getParam("redirect"))),R=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initEnvironment(),this.data(),this.autoCompletePhone(),this.initEvents(),this.showFork(),Z.user.loadEncryptJs(),this.setCountDown(),this.passwordFocus()}var t,o,n;return t=e,(o=[{key:"autoCompletePhone",value:function(){O?$("#account").val(O):L&&$("#account").val(L)}},{key:"data",value:function(){var e=this;this.submit=$("#submit"),this.disableSubmit=$("#disableSubmit"),this.countSec=$("#countSec"),this.account=$("#account"),this.$passwordBox=$("#j-passwordBox"),this.$password=$("#j-password"),this.$geetestBox=$("#geetest_box"),this.imageCodeBox=$("#j-imageCodeBox"),this.imageCode=$("#imageCode"),this.$loginWithPassword=$("#j-loginWithPassword"),this.$loginWithMsgCode=$("#j-loginWithMsgCode"),this.$phoneMsgCodeBox=$("#j-phoneMsgCodeBox"),this.$phoneMsgCode=$("#j-phoneMsgCode"),this.$userIdText=$("#j-userIdText"),this.$msgBtn=$("#j-msgBtn"),this.msgCodeCountDownTimer=null,this.countTime=30,this.errorCount=0,this.gtObj={},this.captchaType=1,this.geetValidate=!1,this.msgBtngeetValidate=!1,this.captchaObj=null,this.captchaObjMsgCode={},this.redirectUrl=Z.getParam("redirect",location.href),this.isMsgCodeLogin=!1,this.disableSubmit.hide(),Z.loadUrl("".concat(location.protocol,"//").concat(location.hostname,"/common/m/js/module/gt.js"),(function(){v().then((function(t){if(!1===t.isError){var o=t.data;if(0==o.success)return e.geetValidate=!0,e.captchaType=2,e.errorCount++,e.imageCodeBox.show(),$("#geetest_box").hide(),void e.refreshCodeImg();initGeetest({gt:o.gt,challenge:o.challenge,offline:!o.success,new_captcha:o.new_captcha},(function(t){e.captchaObj=t,$("#gt_loading").hide(),t.appendTo("#gt_box"),t.onSuccess((function(){var o=t.getValidate();e.gtObj.challenge=o.geetest_challenge,e.gtObj.validate=o.geetest_validate,e.gtObj.seccode=o.geetest_seccode,e.geetValidate=!0})),t.onError((function(){t.reset(),e.geetValidate=!1}))}))}else e.geetValidate=!0,e.captchaType=2,e.errorCount++,e.imageCodeBox.show(),$("#geetest_box").hide(),e.refreshCodeImg()})),v().then((function(t){if(!1===t.isError){var o=t.data;if(0==o.success)return e.msgBtngeetValidate=!0,e.captchaType=2,e.errorCount++,e.imageCodeBox.show(),$("#geetest_box").hide(),void e.refreshCodeImg();initGeetest({gt:o.gt,challenge:o.challenge,offline:!o.success,new_captcha:o.new_captcha,product:"bind"},(function(t){e.captchaObjMsgCode=t,e.$msgBtn.on("click",(function(){2!=e.captchaType&&(e.msgCodeCountDownTime>0||(Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:204,accessPointDesc:"免密登录-发送验证码按钮点击"}),e.formValidate(!0)&&t.verify()))})),t.onSuccess((function(){var o=t.getValidate();x({phone:e.account.val(),imageCode:e.imageCode.val(),challenge:o.geetest_challenge,validate:o.geetest_validate,seccode:o.geetest_seccode,captchaType:e.captchaType}).then((function(t){var o=t.isError,n=t.errorCode,r=t.errorMessage;if(o)return"-8001005"!==n&&"-8001021"!==n&&"-8001022"!==n||($("#geetest_box").hide(),e.captchaType=2,e.errorCount++,e.refreshCodeImg(),e.imageCodeBox.show()),void j(r);e.msgCodeCountDown()})).catch((function(e){}))})),t.onError((function(){e.msgBtngeetValidate=!1}))}))}else e.msgBtngeetValidate=!0,e.captchaType=2,e.errorCount++,e.imageCodeBox.show(),$("#geetest_box").hide(),e.refreshCodeImg()}))}))}},{key:"initEnvironment",value:function(){var e;p.post("/login/checkLogin.do",e).then((function(e){if(e.isError)console.log(e.errorMessage);else if(e.data.isLogin){var t=decodeURIComponent(Z.getParam("redirect"));t&&location.replace(t)}else if(U&&N&&!Z.cookie.get("zhenai_openid")){var o=Z.getParam("code");if(o)(function(e){return p.post("/login/weChatPublicAutoLogin",e)})({weChatCode:o}).then((function(e){if(!e.isError)if(e.data.hasLogin){var t=decodeURIComponent(Z.getParam("redirect"));t&&location.replace(t)}else Z.cookie.set("zhenai_openid",e.data.openId,".zhenai.com")})).catch((function(e){console.log("err from apiWeChatPublicAutoLogin",e)}));else{var n=encodeURIComponent(location.href);location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9010cdfe96709e2c&redirect_uri=".concat(n,"&response_type=code&scope=snsapi_base#wechat_redirect"))}}})).catch((function(e){console.log("err from checkLogin",e)}))}},{key:"initEvents",value:function(){var e=this;(function(){if(M)return M;M=new Promise((function(e){window._fmOpt={partner:"zhenai",appName:"appName",token:"zhenai-"+(new Date).getTime()+"-"+Math.random().toString(16).substr(2),fpHost:"https://secdfinger.zhenai.com",fmb:!0,cub:!0,success:function(t){e(t)}}}));var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=window._fmOpt.fpHost+"/static/fm.js?ver=0.1&t="+((new Date).getTime()/36e5).toFixed(0);var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),M})().then((function(e){Z.tj.reportMagic({data:{iid:"t_dc_00091",biz:"4",data6:e}})}));var t=null,o=this;this.account.on("click",(function(){e.isMsgCodeLogin&&Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:203,accessPointDesc:"免密登录-手机号输入框点击"})})),this.$phoneMsgCode.on("click",(function(){Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:205,accessPointDesc:"免密登录-短信验证码输入框点点击"})})),this.$msgBtn.on("click",(function(){1!=e.captchaType&&(e.msgCodeCountDownTime>0||(Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:204,accessPointDesc:"免密登录-发送验证码按钮点击"}),e.formValidate(!0)&&x({phone:e.account.val(),imageCode:e.imageCode.val(),captchaType:2}).then((function(t){var o=t.isError,n=t.errorMessage;t.messageCode,o?(e.refreshCodeImg(),e.imageCodeBox.show(),j(n)):e.msgCodeCountDown()})).catch((function(e){}))))})),this.submit.on(p.TAP,(function(){e.report(10,"WAP登录时，点击登录的用户数和次数");var n=$("#account").val(),r={account:n,password:$("#j-password").val(),captchaType:e.captchaType};$.extend(r,e.gtObj);var i=Z.cookie.get("zhenai_openid"),a=e.isMsgCodeLogin?I:m,s=e.isMsgCodeLogin?{phone:n,messageCode:e.$phoneMsgCode.val()}:r;U&&N&&i&&(r.openId=i,a=e.isMsgCodeLogin?T:P,s=e.isMsgCodeLogin?{phone:n,messageCode:e.$phoneMsgCode.val(),openId:i}:r);var c=function(){t=a(s).then((function(n){t=null;var r=n.isError,i=n.errorMessage,a=n.errorCode;if(p.storage.setItem("user-mobile-verify",!1),r)if("-8001001"===a)e.captchaObj&&e.captchaObj.reset(),e.refreshCodeImg(),j(i||"账号或密码输入错误，请检查后重试");else if("-8001025"===a){var s=parseInt(i.split("|")[1]),c=i.split("|")[0];e.captchaObj&&e.captchaObj.reset(),e.geetValidate=!1,e.refreshCodeImg(),isNaN(s)||0===s?j(c||"账号或密码错误"):(j(c||"密码输入错误5次，请30秒后再试"),Z.cookie.set("loginCountSec",s,"zhenai.com"),e.setCountDown())}else"-8001005"===a||"-8001022"===a||"-8001021"===a?($("#geetest_box").hide(),e.captchaType=2,j(i),e.errorCount++,e.imageCodeBox.show(),e.refreshCodeImg()):"-8011003"===a?(j(i),e.refreshCodeImg()):"-8011002"===a?(j("验证码错误"),e.refreshCodeImg()):"-8001017"===a?j("请使用手机号登录"):"-8001013"===a?(p.storage.setItem("user-mobile-verify",6),location.href="./mobileVerify.html?type=6"):"-8001049"===a?(p.storage.setItem("user-mobile-verify",7),location.href="./mobileVerify.html?type=7"):"-8001026"===a?location.href="./login_sms_valid.html?channelId=".concat(Z.getParam("channelId")):"-8001003"===a?(j(i||"该账户已注销"),Z.tj.kibana({resourceKey:"SpecialState",accessPoint:2,accessPointDesc:"注销状态拦截登录后toast提示曝光：“你的账号已注销”"})):j(i);else U&&N&&Z.cookie.del("zhenai_openid",".zhenai.com"),e.from=Z.getParam("from"),e.from&&Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:51,ext8:D,accessPointDesc:e.from,ext9:Z.getParam("ext9")||void 0,ext16:Z.getParam("ext16")||void 0,ext17:Z.getParam("ext17")||void 0,ext18:Z.getParam("ext18")||void 0}),z&&Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:144,accessPointDesc:"完成登录",ext8:D,channelId:Z.getParam("channelId"),subId:Z.getParam("subChannelId"),platform:2}),setTimeout((function(){p.post("/system/appConfig.do").then((function(e){if(e.isError)j(e.errorMessage);else if(e.data.interceptList.indexOf(13)>=0)p.storage.setItem("user-mobile-verify",4),location.href="./mobileVerify.html?type=4";else if(o.redirectUrl&&!0!==/home\.html/gi.test(o.redirectUrl))location.replace(o.redirectUrl);else{if("916678"===Z.getParam("channelId"))return void location.replace("https://i.zhenai.com/m/wap/index/index.html");p.post("/log/logTransferDc.do").then((function(e){e.isError?(window.localStorage.removeItem("uniqueCover"),location.replace(S)):e.data.switches.wapScreenGuideSwitch?(window.localStorage.setItem("uniqueCover",!0),location.replace("https://i.zhenai.com/m/wap/index/index.html")):(window.localStorage.removeItem("uniqueCover"),location.replace(S))}))}}))}),100)})).catch((function(){t=null}))};if(e.isMsgCodeLogin){if(t)return;c()}else if(e.errorCount>0&&(r.imageCode=e.imageCode.val()),e.formValidate())return e.geetValidate||1!=e.captchaType?void(t||Z.user.loadEncryptJs((function(){r.password=Z.user.encryptPassword(r.password),c()}))):(j("请点击按钮进行验证！"),!1)})),$(document).on("click","#codeImg,#getCodeAgain",(function(){return e.refreshCodeImg(),!1})),$("#j-forgetPassword").on("click",(function(){Z.tj.kibana({resourceKey:"passwordError",accessPoint:3,accessPointDesc:"点击忘记密码的次数/人数"}),setTimeout((function(){window.location.href="./findpwd.html"}),300)})),this.$loginWithMsgCode.on("click",(function(){e.isMsgCodeLogin=!0,e.$loginWithMsgCode.hide(),e.$userIdText.hide(),e.$loginWithPassword.show(),e.$passwordBox.hide().removeClass("show"),e.$geetestBox.hide().removeClass("show"),e.$phoneMsgCodeBox.addClass("show"),Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:201,accessPointDesc:"使用手机验证码登录点击"})})),this.$loginWithPassword.on("click",(function(){e.isMsgCodeLogin=!1,e.$loginWithPassword.hide(),e.$loginWithMsgCode.show(),e.$userIdText.show(),e.geetValidate||e.$geetestBox.addClass("show"),e.$phoneMsgCodeBox.hide().removeClass("show"),e.$passwordBox.addClass("show"),Z.tj.kibana({resourceKey:"新注册流程2.0",accessPoint:202,accessPointDesc:"使用密码登录点击"})}));var n,r={channelId:Z.getParam("channelId")||"902759",subChannelId:Z.getParam("subChannelId")||"0"},i=Z.getParam("from");"gender"!==i&&"remask"!==i||(r.from="gender"===i?"logintoregister":"covertoregister"),n="/m/portal/register/index.html?".concat($.param(r)),$("#j-register").on("tap",(function(){window.location.href=n}))}},{key:"passwordLoginInit",value:function(){}},{key:"refreshCodeImg",value:function(){$("#codeImg").attr("src","//api.zhenai.com/security/imageCode.do?t=".concat(Math.random()))}},{key:"formValidate",value:function(e){var t=this.account.val();if(!t)return j("请输入账号"),!1;if(!this.isMsgCodeLogin||/^1\d{10}$/.test(t)){if(this.isMsgCodeLogin){if(this.errorCount>0&&!this.imageCode.val())return j("请输入验证码"),!1;if(!e&&!this.$phoneMsgCode.val())return j("请输入手机验证码"),!1}else{if(!this.$password.val())return j("请输入密码"),!1;if(this.errorCount>0&&!this.imageCode.val())return j("请输入验证码"),!1}return!0}j("手机号格式错误")}},{key:"showFork",value:function(){var e=$(".req_input"),t=$(".input_fork");e.on("focus",(function(){var e=$(this),t=e.val();t&&""!==t&&e.next().show(),e.parent("div").siblings().find("i").hide()})).on("input",(function(){var e=$(this),t=e.val();t&&""!==t&&e.next().show()})),t.on("touchend",(function(e){e.preventDefault();var t=$(this);t.prev().val(""),t.prev().focus(),t.hide()}))}},{key:"resetMsgCodeBtn",value:function(){this.msgCodeCountDownTime=0,this.$msgBtn.html("发送验证码")}},{key:"msgCodeCountDown",value:function(){var e=this;this.msgCodeCountDownTimer&&clearInterval(this.msgCodeCountDownTimer),this.msgCodeCountDownTime=60,this.$msgBtn.html("".concat(60,"s")),this.msgCodeCountDownTimer=setInterval((function(){e.$msgBtn.html("".concat(--e.msgCodeCountDownTime,"s")),e.msgCodeCountDownTime<1&&(e.$msgBtn.html("重新发送"),clearInterval(e.msgCodeCountDownTimer))}),1e3)}},{key:"setCountDown",value:function(){var e=parseInt(Z.cookie.get("loginCountSec"));e&&e>1&&(this.submit.hide(),this.disableSubmit.show(),this.countDown(e))}},{key:"countDown",value:function(e){var t=this;if(e<1)return this.submit.show(),this.disableSubmit.hide(),void Z.cookie.set("loginCountSec",e,"zhenai.com");this.countSec.html(e),e--,setTimeout((function(){t.countDown(e),Z.cookie.set("loginCountSec",e,"zhenai.com")}),1e3)}},{key:"report",value:function(e,t){Z.tj.kibana({resourceKey:"ICP",accessPoint:e,accessPointDesc:t})}},{key:"passwordFocus",value:function(){var e=this;this.$password.on("focus",(function(){e.report(7,"WAP登录时，点击输入密码的用户数和次数")}))}}])&&B(t.prototype,o),n&&B(t,n),e}(),W=(o("56ae98f5a822b22371c5"),o("ea51c7e1b0c09d0313b0"),o("15a6ac61a616e891f2a8"),Z.tips);Z.tips=function(e){W({message:e})};t.default=(new R,C("#foot"),function(){$(document.body).append(y()());var e=$("#appAd_2"),t=($("#appAd_open_2"),$("#appAd_close_btn_2"));/Android/gi.test(navigator.userAgent)||/adr/gi.test(navigator.userAgent),navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),/MicroMessenger/gi.test(navigator.userAgent),t.on(p.TAP,(function(t){p.preventDefault(t),e.remove()})),e.on(p.TAP,(function(){p.downloadNativeApp("902803_27")})),e.css("display","")}(),$(document.body).css("height","".concat(document.documentElement.clientHeight+1,"px")),void setTimeout((function(){window.scrollTo(0,document.documentElement.clientHeight+100)}),500))},"78090de113261f19d421":function(e,t,o){var n,r,i,a,s;n=o("57f4505c1b5deedba90d"),r=o("3a070c9e6e2eb7e89655").utf8,i=o("9256da835e72a7a6f260"),a=o("3a070c9e6e2eb7e89655").bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):r.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var o=n.bytesToWords(e),c=8*e.length,d=1732584193,l=-271733879,u=-1732584194,g=271733878,f=0;f<o.length;f++)o[f]=16711935&(o[f]<<8|o[f]>>>24)|4278255360&(o[f]<<24|o[f]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var h=s._ff,p=s._gg,m=s._hh,v=s._ii;for(f=0;f<o.length;f+=16){var b=d,w=l,C=u,_=g;d=h(d,l,u,g,o[f+0],7,-680876936),g=h(g,d,l,u,o[f+1],12,-389564586),u=h(u,g,d,l,o[f+2],17,606105819),l=h(l,u,g,d,o[f+3],22,-1044525330),d=h(d,l,u,g,o[f+4],7,-176418897),g=h(g,d,l,u,o[f+5],12,1200080426),u=h(u,g,d,l,o[f+6],17,-1473231341),l=h(l,u,g,d,o[f+7],22,-45705983),d=h(d,l,u,g,o[f+8],7,1770035416),g=h(g,d,l,u,o[f+9],12,-1958414417),u=h(u,g,d,l,o[f+10],17,-42063),l=h(l,u,g,d,o[f+11],22,-1990404162),d=h(d,l,u,g,o[f+12],7,1804603682),g=h(g,d,l,u,o[f+13],12,-40341101),u=h(u,g,d,l,o[f+14],17,-1502002290),d=p(d,l=h(l,u,g,d,o[f+15],22,1236535329),u,g,o[f+1],5,-165796510),g=p(g,d,l,u,o[f+6],9,-1069501632),u=p(u,g,d,l,o[f+11],14,643717713),l=p(l,u,g,d,o[f+0],20,-373897302),d=p(d,l,u,g,o[f+5],5,-701558691),g=p(g,d,l,u,o[f+10],9,38016083),u=p(u,g,d,l,o[f+15],14,-660478335),l=p(l,u,g,d,o[f+4],20,-405537848),d=p(d,l,u,g,o[f+9],5,568446438),g=p(g,d,l,u,o[f+14],9,-1019803690),u=p(u,g,d,l,o[f+3],14,-187363961),l=p(l,u,g,d,o[f+8],20,1163531501),d=p(d,l,u,g,o[f+13],5,-1444681467),g=p(g,d,l,u,o[f+2],9,-51403784),u=p(u,g,d,l,o[f+7],14,1735328473),d=m(d,l=p(l,u,g,d,o[f+12],20,-1926607734),u,g,o[f+5],4,-378558),g=m(g,d,l,u,o[f+8],11,-2022574463),u=m(u,g,d,l,o[f+11],16,1839030562),l=m(l,u,g,d,o[f+14],23,-35309556),d=m(d,l,u,g,o[f+1],4,-1530992060),g=m(g,d,l,u,o[f+4],11,1272893353),u=m(u,g,d,l,o[f+7],16,-155497632),l=m(l,u,g,d,o[f+10],23,-1094730640),d=m(d,l,u,g,o[f+13],4,681279174),g=m(g,d,l,u,o[f+0],11,-358537222),u=m(u,g,d,l,o[f+3],16,-722521979),l=m(l,u,g,d,o[f+6],23,76029189),d=m(d,l,u,g,o[f+9],4,-640364487),g=m(g,d,l,u,o[f+12],11,-421815835),u=m(u,g,d,l,o[f+15],16,530742520),d=v(d,l=m(l,u,g,d,o[f+2],23,-995338651),u,g,o[f+0],6,-198630844),g=v(g,d,l,u,o[f+7],10,1126891415),u=v(u,g,d,l,o[f+14],15,-1416354905),l=v(l,u,g,d,o[f+5],21,-57434055),d=v(d,l,u,g,o[f+12],6,1700485571),g=v(g,d,l,u,o[f+3],10,-1894986606),u=v(u,g,d,l,o[f+10],15,-1051523),l=v(l,u,g,d,o[f+1],21,-2054922799),d=v(d,l,u,g,o[f+8],6,1873313359),g=v(g,d,l,u,o[f+15],10,-30611744),u=v(u,g,d,l,o[f+6],15,-1560198380),l=v(l,u,g,d,o[f+13],21,1309151649),d=v(d,l,u,g,o[f+4],6,-145523070),g=v(g,d,l,u,o[f+11],10,-1120210379),u=v(u,g,d,l,o[f+2],15,718787259),l=v(l,u,g,d,o[f+9],21,-343485551),d=d+b>>>0,l=l+w>>>0,u=u+C>>>0,g=g+_>>>0}return n.endian([d,l,u,g])})._ff=function(e,t,o,n,r,i,a){var s=e+(t&o|~t&n)+(r>>>0)+a;return(s<<i|s>>>32-i)+t},s._gg=function(e,t,o,n,r,i,a){var s=e+(t&n|o&~n)+(r>>>0)+a;return(s<<i|s>>>32-i)+t},s._hh=function(e,t,o,n,r,i,a){var s=e+(t^o^n)+(r>>>0)+a;return(s<<i|s>>>32-i)+t},s._ii=function(e,t,o,n,r,i,a){var s=e+(o^(t|~n))+(r>>>0)+a;return(s<<i|s>>>32-i)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var o=n.wordsToBytes(s(e,t));return t&&t.asBytes?o:t&&t.asString?a.bytesToString(o):n.bytesToHex(o)}},"809f651f4a82c57978d0":function(e,t,o){"use strict";e.exports=o("6c2e43dccf71c63cfabd")},"9256da835e72a7a6f260":function(e,t){function o(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(o(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))}(e)||!!e._isBuffer)}},"92d2a83d8798fe365c88":function(e,t,o){o("809f651f4a82c57978d0");e.exports=function(e){"use strict";var t="";return t+='<div class="footer">\r\n    <div class="foot_bottom">\r\n        <a href="./bridge.html" rel="nofollow">红娘</a>\r\n        <a id="footer-app" rel="nofollow">客户端</a>\r\n        <a href="./feedback.html" rel="nofollow">意见反馈</a>\r\n        ',(e=e||{}).logoutVisible&&(t+='\r\n        <a id="footer-logout">退出</a>\r\n        '),t+='\r\n    </div>\r\n    <div class="foot_deal">\r\n        <a href="./register/prDeal.html">珍爱网服务协议</a>\r\n        <a href="./register/serverDeal.html">个人隐私保护政策</a>\r\n    </div>\r\n    <div class="service_tel">\r\n        <span>客服电话：4001-520-520</span>\r\n    </div>\r\n    <div class="add_zp">\r\n    </div>\r\n    <div class="copy_right">Copyright © 2005-2018 珍爱网</div>\r\n</div>'}},bf6eae35e123c6b22a1b:function(e,t,o){o("809f651f4a82c57978d0");e.exports=function(e){"use strict";e=e||{};return'<div class="ggyBox" id="appAd_1" style="display: none;">\r\n    <div class="bottomBox">\r\n        <div class="tmBox"></div>\r\n        <a rel="nofollow" href="http://m.zhenai.com/v2/client/wakeupapp.do?uid=null&amp;v=1&amp;channelId=902759&amp;subChannelId=2&amp;signId=-1&amp;logmid=70499174&amp;l=10107&amp;source=9"></a>\r\n        <div class="too_L">\r\n            <a rel="nofollow" class="close_X" id="appAd_close_btn_1">\r\n                <img alt="top" ','src="http://images.zastatic.com/imwap/wap2015/images/icon/close_gb_ee33104_c84d0e0.png"',' class="mian_img">\r\n            </a>\r\n            <img alt="top" ','src="http://images.zastatic.com/imwap/wap2015/images/icon/bottom_android_za_df98321_bed9a0a.png"',' class="mian_img">\r\n            <span class="mian_img_03">\r\n                与TA沟通更及时\r\n                <br>\r\n                <a class="hhhj">马上打开,幸福握在手!</a>\r\n            </span>\r\n        </div>\r\n        <div class="too_R">\r\n            <a rel="nofollow" class="blue_btn" id="appAd_open_1">\r\n                <img alt="top" ','src="http://images.zastatic.com/imwap/wap2015/images/icon/blue_btn_712a2ea_3032b0a.png"',' class="mian_img_02">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="bottom_ggyBox" id="appAd_2" style="display: none; z-index:9;">\r\n    <div class="box_left">\r\n        <div class="bottom_close_btn" id="appAd_close_btn_2"></div>\r\n    </div>\r\n    <div class="box_right" id="box_right">\r\n        <div class="logo_bg"></div>\r\n        <div class="bottom_text">\r\n            <p class="first_text">沟通更便捷，匹配更精准</p>\r\n            <p class="second_text">使用珍爱APP，提升64%的脱单率</p>\r\n        </div>\r\n        <div class="bottom_btn" id="appAd_open_2"></div>\r\n    </div>\r\n</div>','<div class="ggyBox" id="appAd_1" style="display: none;">\r\n    <div class="bottomBox">\r\n        <div class="tmBox"></div>\r\n        <a rel="nofollow" href="http://m.zhenai.com/v2/client/wakeupapp.do?uid=null&amp;v=1&amp;channelId=902759&amp;subChannelId=2&amp;signId=-1&amp;logmid=70499174&amp;l=10107&amp;source=9"></a>\r\n        <div class="too_L">\r\n            <a rel="nofollow" class="close_X" id="appAd_close_btn_1">\r\n                <img alt="top" src="http://images.zastatic.com/imwap/wap2015/images/icon/close_gb_ee33104_c84d0e0.png" class="mian_img">\r\n            </a>\r\n            <img alt="top" src="http://images.zastatic.com/imwap/wap2015/images/icon/bottom_android_za_df98321_bed9a0a.png" class="mian_img">\r\n            <span class="mian_img_03">\r\n                与TA沟通更及时\r\n                <br>\r\n                <a class="hhhj">马上打开,幸福握在手!</a>\r\n            </span>\r\n        </div>\r\n        <div class="too_R">\r\n            <a rel="nofollow" class="blue_btn" id="appAd_open_1">\r\n                <img alt="top" src="http://images.zastatic.com/imwap/wap2015/images/icon/blue_btn_712a2ea_3032b0a.png" class="mian_img_02">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="bottom_ggyBox" id="appAd_2" style="display: none; z-index:9;">\r\n    <div class="box_left">\r\n        <div class="bottom_close_btn" id="appAd_close_btn_2"></div>\r\n    </div>\r\n    <div class="box_right" id="box_right">\r\n        <div class="logo_bg"></div>\r\n        <div class="bottom_text">\r\n            <p class="first_text">沟通更便捷，匹配更精准</p>\r\n            <p class="second_text">使用珍爱APP，提升64%的脱单率</p>\r\n        </div>\r\n        <div class="bottom_btn" id="appAd_open_2"></div>\r\n    </div>\r\n</div>'}},ea51c7e1b0c09d0313b0:function(e,t,o){}});