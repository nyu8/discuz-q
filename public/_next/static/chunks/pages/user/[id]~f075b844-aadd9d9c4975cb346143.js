_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},"4Brf":function(e,t,r){"use strict";var n=r("I+eb"),a=r("g6v/"),o=r("2oRo"),i=r("UTVS"),s=r("hh1v"),c=r("m/L8").f,u=r("6JNq"),f=o.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof l?new f(e):void 0===e?f():f(e);return""===e&&(d[t]=!0),t};u(l,f);var p=l.prototype=f.prototype;p.constructor=l;var h=p.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=h.call(e);if(i(d,e))return"";var r=v?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:l})}},"4xcg":function(e,t,r){"use strict";r("pNMO"),r("4Brf"),r("ma9I");var n,a=r("nKUr"),o=r("lwsE"),i=r.n(o),s=r("W8MJ"),c=r.n(s),u=r("7W2i"),f=r.n(u),d=r("a1gu"),l=r.n(d),p=r("Nsbk"),h=r.n(p),v=r("q1tI"),g=r.n(v),m=r("kMSe"),y=r("+3IH"),b=r("g4pe"),j=r.n(b),w=(r("yXV3"),r("rB9j"),function(e,t,r,n){var a=O(e+t),o=[],i=[];if(r||!U(a,o)){r&&document.getElementById(a)&&document.getElementById(a).parentNode.removeChild(document.getElementById(a)),o.push(a);var s=document.createElement("script");s.type="text/javascript",s.id=a;try{e?(s.src=e,s.onloadDone=!1,s.onload=function(){s.onloadDone=!0,i[e]=1},s.onreadystatechange=function(){"loaded"!==s.readyState&&"complete"!==s.readyState||s.onloadDone||(s.onloadDone=!0,i[e]=1)}):t&&(s.text=t),document.getElementsByTagName("head")[0].appendChild(s)}catch(c){console.log(c)}}}),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,r=0,n=0,a="",o="";for(o=t-e.length%t,n=0;n<o;n+=1)e+="0";for(;r<e.length;)a=x(a,e.substr(r,t)),r+=t;return a},x=function(e,t){for(var r="",n=Math.max(e.length,t.length),a=0;a<n;a++){var o=e.charCodeAt(a)^t.charCodeAt(a);r+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(o%52)}return r},U=function(e,t){if("string"===typeof e||"number"===typeof e)for(var r in t)if(t[r]===e)return!0;return!1};function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var k=Object(m.c)("site")(n=Object(m.d)(n=function(e){f()(r,e);var t=S(r);function r(e){return i()(this,r),t.call(this,e)}return c()(r,[{key:"componentDidMount",value:function(){var e,t,r;!function(e){if(-1===e.indexOf("<script"))return e;for(var t=/<script[^\>]*?>([^\x00]*?)<\/script>/gi,r=[];r=t.exec(e);){var n=/<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i,a=[];(a=n.exec(r[0]))?w(a[1],"",a[2],a[3]):(a=(n=/<script(.*?)>([^\x00]+?)<\/script>/i).exec(r[0]),w("",a[2],-1!==a[1].indexOf("reload=")))}}((null===(e=this.props.site)||void 0===e||null===(t=e.webConfig)||void 0===t||null===(r=t.setSite)||void 0===r?void 0:r.siteStat)||"")}},{key:"formatTitle",value:function(){var e=this.props,t=e.site,r=e.title,n=e.showSiteName,a=void 0===n||n,o=Object(y.a)(t,"webConfig.setSite.siteName","\u6b22\u8fce\u60a8");return r&&""!==r&&(o="".concat(r).concat(a?" - ".concat(o):"")),o}},{key:"formatKeywords",value:function(){var e=this.props,t=e.site,r=e.keywords,n=Object(y.a)(t,"webConfig.setSite.siteKeywords","\u6b22\u8fce\u60a8");return r&&""!==r&&(n="".concat(r," - ").concat(n)),n}},{key:"formatDescription",value:function(){var e=this.props,t=e.site,r=e.description,n=Object(y.a)(t,"webConfig.setSite.siteIntroduction","\u6b22\u8fce\u60a8");return r&&""!==r&&(n=r),n}},{key:"render",value:function(){var e,t,r,n=(null===(e=this.props.site)||void 0===e||null===(t=e.webConfig)||void 0===t||null===(r=t.setSite)||void 0===r?void 0:r.siteFavicon)||"";return Object(a.jsxs)(j.a,{children:[Object(a.jsx)("meta",{name:"keywords",content:this.formatKeywords()}),Object(a.jsx)("meta",{name:"description",content:this.formatDescription()}),n&&Object(a.jsx)("link",{rel:"icon",href:n}),Object(a.jsx)("title",{children:this.formatTitle()})]})}}]),r}(g.a.Component))||n)||n;t.a=k},"5Tg+":function(e,t,r){var n=r("tiKp");t.f=n},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),s=r("FYa8"),c=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var f=l[c];if(a.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?o=!1:r.add(f);else{var d=a.props[f],p=n[f]||new Set;"name"===f&&i||!p.has(d)?(p.add(d),n[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)}h.rewind=function(){};var v=h;t.default=v},"BX/b":function(e,t,r){var n=r("/GqU"),a=r("JBy8").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(t){return i.slice()}}(e):a(n(e))}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},IDDC:function(e,t,r){"use strict";r.r(t);var n,a=r("nKUr"),o=r("lwsE"),i=r.n(o),s=r("W8MJ"),c=r.n(s),u=r("7W2i"),f=r.n(u),d=r("a1gu"),l=r.n(d),p=r("Nsbk"),h=r.n(p),v=r("q1tI"),g=r("kMSe"),m=r("zrgt"),y=r("QL3K"),b=r("QcND"),j=r("J0pL");function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var O=Object(g.c)("site")(n=Object(g.c)("user")(n=Object(g.d)(n=function(e){f()(r,e);var t=w(r);function r(){return i()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e,t;return Object(a.jsx)(j.a,{h5:Object(a.jsx)(m.a,{}),pc:Object(a.jsx)(y.a,{}),title:null!==(e=this.props.user)&&void 0!==e&&e.targetUserNickname?"".concat(null===(t=this.props.user)||void 0===t?void 0:t.targetUserNickname,"\u7684\u9996\u9875"):"\u4ed6\u4eba\u9996\u9875"})}}]),r}(v.Component))||n)||n)||n;t.default=Object(b.a)(O)},J0pL:function(e,t,r){"use strict";r("pNMO"),r("4Brf");var n,a=r("nKUr"),o=r("lwsE"),i=r.n(o),s=r("W8MJ"),c=r.n(s),u=r("7W2i"),f=r.n(u),d=r("a1gu"),l=r.n(d),p=r("Nsbk"),h=r.n(p),v=r("q1tI"),g=r.n(v),m=r("kMSe"),y=r("4xcg");function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var j=Object(m.c)("site")(n=Object(m.c)("search")(n=Object(m.d)(n=function(e){f()(r,e);var t=b(r);function r(){return i()(this,r),t.apply(this,arguments)}return c()(r,[{key:"renderView",value:function(){var e=this.props,t=e.pc,r=e.h5,n=e.title,o=void 0===n?"":n,i=e.keywords,s=void 0===i?"":i,c=e.description,u=void 0===c?"":c,f=e.showSiteName,d=void 0===f||f,l="pc"===this.props.site.platform?t||null:r||null;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{title:o,keywords:s,description:u,showSiteName:d}),l]})}},{key:"render",value:function(){return this.renderView()}}]),r}(g.a.Component))||n)||n)||n;t.a=j},Q8RO:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return r("IDDC")}])},QL3K:function(e,t,r){"use strict";r("ma9I"),r("E9XD"),r("tkto"),r("B6y2"),r("rB9j"),r("UxlC");var n,a=r("nKUr"),o=r("RIqP"),i=r.n(o),s=r("o0o1"),c=r.n(s),u=(r("ls82"),r("yXPU")),f=r.n(u),d=r("lwsE"),l=r.n(d),p=r("W8MJ"),h=r.n(p),v=r("7W2i"),g=r.n(v),m=r("a1gu"),y=r.n(m),b=r("Nsbk"),j=r.n(b),w=r("q1tI"),O=r.n(w),x=r("QV9d"),U=r("kMSe"),S=r("pN5v"),k=r("WNcC"),T=(r("z/8X"),r("wXCO")),I=r("20a2"),C=r("9XgB"),M=r("7KEy"),P=(r("Iygk"),r("b+pO"),r("B5JU")),R=r.n(P),D=r("Niza");r("VVxn");function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j()(e);if(t){var a=j()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var B=Object(U.c)("site")(n=Object(U.c)("user")(n=Object(U.d)(n=function(e){g()(r,e);var t=N(r);function r(e){var n;return l()(this,r),(n=t.call(this,e)).targetUserId=null,n.componentDidMount=f()(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,a=null===(t=n.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||R.a.replace({url:"/"}),String(a)!==r.id){e.next=6;break}return R.a.replace({url:"/my"}),e.abrupt("return");case 6:if(!r.id){e.next=11;break}return n.targetUserId=r.id,e.next=10,n.props.user.getTargetUserInfo(r.id);case 10:n.setState({fetchUserInfoLoading:!1});case 11:case"end":return e.stop()}}),e)}))),n.componentDidUpdate=f()(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,a=null===(t=n.props.user)||void 0===t?void 0:t.id,String(a)!==r.id){e.next=5;break}return R.a.replace({url:"/my"}),e.abrupt("return");case 5:if(String(n.targetUserId)!==String(r.id)){e.next=7;break}return e.abrupt("return");case 7:if(n.targetUserId=r.id,!r.id){e.next=16;break}return n.setState({fetchUserInfoLoading:!0,fetchUserThreadsLoading:!0}),n.props.user.removeTargetUserInfo(),e.next=13,n.props.user.getTargetUserInfo(r.id);case 13:return n.setState({fetchUserInfoLoading:!1}),e.next=16,n.fetchTargetUserThreads();case 16:case"end":return e.stop()}}),e)}))),n.fetchTargetUserThreads=f()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.props.router.query).id){e.next=5;break}return e.next=4,n.props.user.getTargetUserThreads(t.id);case 4:n.setState({fetchUserThreadsLoading:!1});case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)}))),n.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(i()(e),i()(t))}))},n.moreFans=function(){n.setState({showFansPopup:!0})},n.moreFollow=function(){n.setState({showFollowPopup:!0})},n.onSearch=function(e){n.props.router.replace("/search?keyword=".concat(e))},n.renderRight=function(){var e=n.props.router.query,t=null===e||void 0===e?void 0:e.id;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{userId:t}),Object(a.jsx)(M.a,{userId:t}),Object(a.jsx)(T.a,{})]})},n.renderContent=function(){var e,t=n.state.fetchUserThreadsLoading,r=n.props.user,o=r.targetUserThreads,i=r.targetUserThreadsTotalCount;r.targetUserThreadsPage,r.targetUserThreadsTotalPage;return Object(a.jsx)("div",{className:x.a.userContent,children:Object(a.jsx)(k.a,{title:"\u4e3b\u9898",type:"normal",bigSize:!0,isShowMore:!1,isLoading:t,leftNum:"".concat(i,"\u4e2a\u4e3b\u9898"),noData:!(null!==(e=n.formatUserThreadsData(o))&&void 0!==e&&e.length),mold:"plane",children:n.formatUserThreadsData(o)&&n.formatUserThreadsData(o).length>0&&Object(a.jsx)(D.a,{data:n.formatUserThreadsData(o)})})})},n.props.user.cleanTargetUserThreads(),n.state={showFansPopup:!1,showFollowPopup:!1,fetchUserInfoLoading:!0,fetchUserThreadsLoading:!0},n}return h()(r,[{key:"componentWillUnmount",value:function(){this.props.user.removeTargetUserInfo()}},{key:"render",value:function(){var e,t=this.state.fetchUserInfoLoading,r=this.props.user,n=r.targetUserThreadsPage,o=r.targetUserThreadsTotalPage,i=r.targetUserThreads;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(S.a,{isOtherPerson:!0,allowRefresh:!1,onRefresh:this.fetchTargetUserThreads,noMore:o<n,showRefresh:!1,onSearch:this.onSearch,right:this.renderRight,immediateCheck:!0,showLayoutRefresh:!(null===(e=this.formatUserThreadsData(i))||void 0===e||!e.length)&&!t,showHeaderLoading:t,children:this.renderContent()})})}}]),r}(O.a.Component))||n)||n)||n;t.a=Object(I.withRouter)(B)},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),o=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),s=r("a1gu"),c=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var f=r("q1tI"),d=function(e){i(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=d},"dG/n":function(e,t,r){var n=r("Qo9l"),a=r("UTVS"),o=r("5Tg+"),i=r("m/L8").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});a(t,e)||i(t,e,{value:o.f(e)})}},g4pe:function(e,t,r){e.exports=r("8Kt/")},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},pNMO:function(e,t,r){"use strict";var n=r("I+eb"),a=r("2oRo"),o=r("0GbY"),i=r("xDBR"),s=r("g6v/"),c=r("STAE"),u=r("/b8u"),f=r("0Dky"),d=r("UTVS"),l=r("6LWA"),p=r("hh1v"),h=r("glrk"),v=r("ewvW"),g=r("/GqU"),m=r("wE6v"),y=r("XGwC"),b=r("fHMY"),j=r("33Wh"),w=r("JBy8"),O=r("BX/b"),x=r("dBg+"),U=r("Bs8V"),S=r("m/L8"),k=r("0eef"),T=r("kRJp"),I=r("busE"),C=r("VpIT"),M=r("93I0"),P=r("0BK2"),R=r("kOOl"),D=r("tiKp"),N=r("5Tg+"),B=r("dG/n"),_=r("1E5z"),E=r("afO8"),L=r("tycR").forEach,q=M("hidden"),J="Symbol",W=D("toPrimitive"),A=E.set,K=E.getterFor(J),F=Object.prototype,H=a.Symbol,V=o("JSON","stringify"),X=U.f,Q=S.f,G=O.f,z=k.f,Y=C("symbols"),$=C("op-symbols"),Z=C("string-to-symbol-registry"),ee=C("symbol-to-string-registry"),te=C("wks"),re=a.QObject,ne=!re||!re.prototype||!re.prototype.findChild,ae=s&&f((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=X(F,t);n&&delete F[t],Q(e,t,r),n&&e!==F&&Q(F,t,n)}:Q,oe=function(e,t){var r=Y[e]=b(H.prototype);return A(r,{type:J,tag:e,description:t}),s||(r.description=t),r},ie=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},se=function(e,t,r){e===F&&se($,t,r),h(e);var n=m(t,!0);return h(r),d(Y,n)?(r.enumerable?(d(e,q)&&e[q][n]&&(e[q][n]=!1),r=b(r,{enumerable:y(0,!1)})):(d(e,q)||Q(e,q,y(1,{})),e[q][n]=!0),ae(e,n,r)):Q(e,n,r)},ce=function(e,t){h(e);var r=g(t),n=j(r).concat(le(r));return L(n,(function(t){s&&!ue.call(r,t)||se(e,t,r[t])})),e},ue=function(e){var t=m(e,!0),r=z.call(this,t);return!(this===F&&d(Y,t)&&!d($,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,q)&&this[q][t])||r)},fe=function(e,t){var r=g(e),n=m(t,!0);if(r!==F||!d(Y,n)||d($,n)){var a=X(r,n);return!a||!d(Y,n)||d(r,q)&&r[q][n]||(a.enumerable=!0),a}},de=function(e){var t=G(g(e)),r=[];return L(t,(function(e){d(Y,e)||d(P,e)||r.push(e)})),r},le=function(e){var t=e===F,r=G(t?$:g(e)),n=[];return L(r,(function(e){!d(Y,e)||t&&!d(F,e)||n.push(Y[e])})),n};(c||(I((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=R(e),r=function(e){this===F&&r.call($,e),d(this,q)&&d(this[q],t)&&(this[q][t]=!1),ae(this,t,y(1,e))};return s&&ne&&ae(F,t,{configurable:!0,set:r}),oe(t,e)}).prototype,"toString",(function(){return K(this).tag})),I(H,"withoutSetter",(function(e){return oe(R(e),e)})),k.f=ue,S.f=se,U.f=fe,w.f=O.f=de,x.f=le,N.f=function(e){return oe(D(e),e)},s&&(Q(H.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),i||I(F,"propertyIsEnumerable",ue,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),L(j(te),(function(e){B(e)})),n({target:J,stat:!0,forced:!c},{for:function(e){var t=String(e);if(d(Z,t))return Z[t];var r=H(t);return Z[t]=r,ee[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(d(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(e,t){return void 0===t?b(e):ce(b(e),t)},defineProperty:se,defineProperties:ce,getOwnPropertyDescriptor:fe}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:de,getOwnPropertySymbols:le}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(v(e))}}),V)&&n({target:"JSON",stat:!0,forced:!c||f((function(){var e=H();return"[null]"!=V([e])||"{}"!=V({a:e})||"{}"!=V(Object(e))}))},{stringify:function(e,t,r){for(var n,a=[e],o=1;arguments.length>o;)a.push(arguments[o++]);if(n=t,(p(t)||void 0!==e)&&!ie(e))return l(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),a[1]=t,V.apply(null,a)}});H.prototype[W]||T(H.prototype,W,H.prototype.valueOf),_(H,J),P[q]=!0},zrgt:function(e,t,r){"use strict";r("ma9I"),r("E9XD"),r("tkto"),r("B6y2"),r("rB9j"),r("UxlC");var n,a=r("nKUr"),o=r("RIqP"),i=r.n(o),s=r("o0o1"),c=r.n(s),u=(r("ls82"),r("yXPU")),f=r.n(u),d=r("lwsE"),l=r.n(d),p=r("W8MJ"),h=r.n(p),v=r("7W2i"),g=r.n(v),m=r("a1gu"),y=r.n(m),b=r("Nsbk"),j=r.n(b),w=r("q1tI"),O=r.n(w),x=r("/YC7"),U=r("x2xJ"),S=r.n(U),k=r("jqTq"),T=r.n(k),I=r("Jw8/"),C=r.n(I),M=r("GuWI"),P=r("QLYM"),R=r("kMSe"),D=(r("E+SJ"),r("JhUJ"),r("Niza")),N=r("INMq"),B=(r("HoAE"),r("20a2")),_=r("B5JU"),E=r.n(_);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j()(e);if(t){var a=j()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var q=Object(R.c)("site")(n=Object(R.c)("user")(n=Object(R.d)(n=function(e){g()(r,e);var t=L(r);function r(e){var n;return l()(this,r),(n=t.call(this,e)).targetUserId=null,n.componentDidMount=f()(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,a=null===(t=n.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||E.a.replace({url:"/"}),String(a)!==r.id){e.next=6;break}return E.a.replace({url:"/my"}),e.abrupt("return");case 6:if(!r.id){e.next=11;break}return e.next=9,n.props.user.getTargetUserInfo(r.id);case 9:n.targetUserId=r.id,n.setState({fetchUserInfoLoading:!1});case 11:case"end":return e.stop()}}),e)}))),n.componentDidUpdate=f()(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,a=null===(t=n.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||E.a.replace({url:"/"}),String(a)!==r.id){e.next=6;break}return E.a.replace({url:"/my"}),e.abrupt("return");case 6:if(String(n.targetUserId)!==String(r.id)){e.next=8;break}return e.abrupt("return");case 8:if(n.targetUserId=r.id,!r.id){e.next=17;break}return n.setState({fetchUserInfoLoading:!0,fetchUserThreadsLoading:!0}),n.props.user.removeTargetUserInfo(),e.next=14,n.props.user.getTargetUserInfo(r.id);case 14:return n.setState({fetchUserInfoLoading:!1}),e.next=17,n.fetchTargetUserThreads();case 17:case"end":return e.stop()}}),e)}))),n.fetchTargetUserThreads=f()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.props.router.query).id){e.next=4;break}return e.next=4,n.props.user.getTargetUserThreads(t.id);case 4:return e.abrupt("return");case 5:case"end":return e.stop()}}),e)}))),n.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(i()(e),i()(t))}))},n.handlePreviewBgImage=function(e){e&&e.stopPropagation(),n.setState({isPreviewBgVisible:!n.state.isPreviewBgVisible})},n.getBackgroundUrl=function(){var e,t,r=null;null!==(e=n.props.user)&&void 0!==e&&e.targetOriginalBackGroundUrl&&(r=null===(t=n.props.user)||void 0===t?void 0:t.targetOriginalBackGroundUrl);return r||!1},n.props.user.cleanTargetUserThreads(),n.state={fetchUserInfoLoading:!0,isPreviewBgVisible:!1},n}return h()(r,[{key:"componentWillUnmount",value:function(){this.props.user.removeTargetUserInfo()}},{key:"render",value:function(){var e=this.props,t=e.site,r=e.user,n=t.platform,o=r.targetUserThreads,i=r.targetUserThreadsTotalCount,s=r.targetUserThreadsPage,c=r.targetUserThreadsTotalPage;return Object(a.jsxs)(N.a,{showHeader:!0,showTabBar:!1,immediateCheck:!0,onRefresh:this.fetchTargetUserThreads,noMore:c<s,showRefresh:!this.state.fetchUserInfoLoading,children:[Object(a.jsxs)("div",{className:x.a.mobileLayout,children:[this.state.fetchUserInfoLoading&&Object(a.jsx)("div",{className:x.a.loadingSpin,children:Object(a.jsx)(T.a,{type:"spinner",children:"\u52a0\u8f7d\u4e2d..."})}),!this.state.fetchUserInfoLoading&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{onClick:this.handlePreviewBgImage,children:Object(a.jsx)(M.a,{isOtherPerson:!0})}),Object(a.jsx)(P.a,{platform:n,isOtherPerson:!0})]}),Object(a.jsxs)("div",{className:x.a.unit,children:[Object(a.jsxs)("div",{className:x.a.threadUnit,children:[Object(a.jsx)("div",{className:x.a.threadTitle,children:"\u4e3b\u9898"}),Object(a.jsxs)("div",{className:x.a.threadCount,children:[i,"\u4e2a\u4e3b\u9898"]})]}),Object(a.jsx)("div",{className:x.a.dividerContainer,children:Object(a.jsx)(S.a,{className:x.a.divider})}),Object(a.jsx)("div",{className:x.a.threadItemContainer,children:this.formatUserThreadsData(o)&&this.formatUserThreadsData(o).length>0&&Object(a.jsx)(D.a,{data:this.formatUserThreadsData(o)})})]})]}),this.getBackgroundUrl()&&this.state.isPreviewBgVisible&&Object(a.jsx)(C.a,{visible:this.state.isPreviewBgVisible,onClose:this.handlePreviewBgImage,imgUrls:[this.getBackgroundUrl()],currentUrl:this.getBackgroundUrl()})]})}}]),r}(O.a.Component))||n)||n)||n;t.a=Object(B.withRouter)(q)}},[["Q8RO",1,0,3,5,4,6,2]]]);