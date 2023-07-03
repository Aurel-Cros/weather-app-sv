/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(a)?a:String(a)),o)}var a}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;var n=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Array.isArray(e))throw new Exception("Wrong format");return this.makeOne(e)}var e,n;return e=t,(n=[{key:"makeOne",value:function(t){var e,r=this;if("TEXTNODE"===t.tag)return t.content;var n=document.createElement(t.tag);for(var o in t.attrs)n.setAttribute(o,t.attrs[o]);return n.textContent=t.content||"",null===(e=t.children)||void 0===e||e.forEach((function(t){n.append(r.makeOne(t))})),n}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(a)?a:String(a)),n)}var a}var i=function(){function t(e,r){var o=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.exists)return t.instance.close(),{empty:!0};t.exists=!0,t.instance=this,this.mouseCoordinates=r;var a={tag:"div",attrs:{class:"popup-overlay theme-fill-ui"},children:[{tag:"button",content:"X",attrs:{class:"popup-close-btn"}},e,{tag:"div",attrs:{class:"background"}}]};return this.element=new n(a),this.position(),this.closeBtn=this.element.querySelector(".popup-close-btn"),this.closeBtn.addEventListener("click",(function(){return o.close()})),this.element}var e,r;return e=t,(r=[{key:"position",value:function(){var t=this,e=this.mouseCoordinates.x,r=this.mouseCoordinates.y;this.element.style.left=e,setTimeout((function(){t.element.style.top=r,t.element.style.translate="-50% -30%"}))}},{key:"close",value:function(){var e=this;t.exists=!1,t.instance=null,this.element.style.top="-10%",this.element.style.translate="-50% -100%",setTimeout((function(){e.element.remove()}),1e3)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrapper=document.querySelector(".current-weather"),this.openWheel()}var e,r;return e=t,(r=[{key:"closeWheel",value:function(){this.wheelHub.remove()}},{key:"openWheel",value:function(){var t=this;this.wheelHub=new n({tag:"div",attrs:{class:"wheel-hub"}}),["sunny","partly-cloudy","cloudy","rain","thunderstorm","snow","fog","hail"].forEach((function(e,r){var o=new n({tag:"div",attrs:{class:"wheel-element",style:"rotate:".concat(45*r,"deg")}}),a=new n({tag:"button",attrs:{class:"wheel-element-background"}});a.style.backgroundImage="url('weather-".concat(e,".svg"),a.style.rotate="-".concat(45*r,"deg"),a.addEventListener("click",(function(){return t.closeWheel()})),o.appendChild(a),t.wheelHub.appendChild(o)}));var e=new n({tag:"div",attrs:{class:"wheel-hub-background"}});this.wheelHub.appendChild(e),this.$wrapper.appendChild(this.wheelHub)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrapper=document.querySelector(e),this.clockLeg=new n({tag:"div",attrs:{class:"clock-leg"}}),this.clockBall=new n({tag:"div",attrs:{class:"clock-ball"}}),this.clockLeg.appendChild(this.clockBall),this.$wrapper.appendChild(this.clockLeg),this.startClock()}var e,r;return e=t,(r=[{key:"startClock",value:function(){var t=this;this.updateTime(),setInterval((function(){return t.updateTime()}),3e5)}},{key:"updateTime",value:function(){var t=new Date,e=t.getHours(),r=90;r+=30*(e>11?e-12:e),r+=t.getMinutes()/2,this.clockLeg.style.rotate="".concat(r,"deg")}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),p={searchPopup:{tag:"div",attrs:{class:"search-popup"},children:[{tag:"div",children:[{tag:"input",attrs:{id:"country-check",type:"checkbox"}},{tag:"label",content:"Country",attrs:{class:"country-lock",for:"country-check"}}]},{tag:"div",children:[{tag:"input",attrs:{id:"county-check",type:"checkbox"}},{tag:"label",content:"Country",attrs:{class:"country-lock",for:"county-check"}}]},{tag:"input",attrs:{placeholder:"Search"}}]},filterPopup:{tag:"div",attrs:{class:"filter-popup"},children:[{tag:"div",children:[{tag:"img",attrs:{src:"max-temp.svg"}},{tag:"p",content:"34°C",attrs:{contentEditable:!0}},{tag:"img",attrs:{src:"min-temp.svg"}},{tag:"p",content:"24°C",attrs:{contentEditable:!0}}]},{tag:"div",children:[{tag:"img",attrs:{src:"details-wind.svg"}},{tag:"p",content:"00",attrs:{class:"filter-wind-min",contentEditable:!0}},{tag:"p",content:" - "},{tag:"p",content:"00",attrs:{class:"filter-wind-max",contentEditable:!0}},{tag:"input",attrs:{type:"radio",name:"speedUnit",id:"kmh",value:"kmh",checked:!0}},{tag:"label",content:"km/h",attrs:{for:"kmh"}},{tag:"p",content:" / "},{tag:"input",attrs:{type:"radio",name:"speedUnit",id:"mph",value:"mph"}},{tag:"label",content:"mph",attrs:{for:"mph"}}]},{tag:"div",children:[{tag:"img",attrs:{src:"details-humidity.svg"}},{tag:"p",content:"00",attrs:{class:"filter-humi-min",contentEditable:!0}},{tag:"p",content:" - "},{tag:"p",content:"00",attrs:{class:"filter-humi-max",contentEditable:!0}},{tag:"p",content:"%"}]},{tag:"div",attrs:{class:"temp-unit"},children:[{tag:"input",attrs:{type:"radio",name:"tempUnit",id:"celsius",value:"celsius",checked:!0}},{tag:"label",content:"°C",attrs:{for:"celsius"}},{tag:"p",content:" / "},{tag:"input",attrs:{type:"radio",name:"tempUnit",id:"faren",value:"faren"}},{tag:"label",content:"°F",attrs:{for:"faren"}}]}]}},y={tag:"div",attrs:{class:"pred-card"},children:[{tag:"p",attrs:{class:"day"}},{tag:"img"},{tag:"p",attrs:{class:"min-max-temps"}},{tag:"p",attrs:{class:"chanceOfRain",title:"Probability of precipitation"}}]};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function f(){}function p(){}function y(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==e&&r.call(w,a)&&(v=w);var b=y.prototype=f.prototype=Object.create(v);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,a,i,c){var s=l(t[n],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==d(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},k(S.prototype),s(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(b),s(b,c,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function v(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){v(a,n,o,i,c,"next",t)}function c(t){v(a,n,o,i,c,"throw",t)}i(void 0)}))}}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function b(t,e,r){return(e=k(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"root",document.querySelector("#root")),b(this,"$",{currentWeatherName:document.querySelector(".current-weather p"),currentWeatherIcon:document.querySelector(".current-weather img"),cityName:document.querySelector(".city-name p"),countryInfo:document.querySelector(".country"),countyName:document.querySelector(".country span"),highTemp:document.querySelector(".temp-hi"),lowTemp:document.querySelector(".temp-lo"),mainTemp:document.querySelector(".main-temp"),mainWind:document.querySelector(".weather-graph-values .wind"),mainHumi:document.querySelector(".weather-graph-values .humidity"),todayDate:document.querySelector(".today-date"),fiveDays:document.querySelector(".five-days-pred"),shortText:document.querySelector(".short-text"),randomBtn:document.querySelector(".randomize button")}),this.buildApp(),this.initListeners(),this.refreshDisplay()}var e,r,o,a,c,s;return e=t,r=[{key:"buildApp",value:function(){this.clock=new f(".weather-graph-values"),this.todayDate=new Date,this.$.todayDate.textContent="".concat(this.todayDate.toLocaleString("en-GB",{weekday:"long"})," ").concat(this.todayDate.getMonth()+1,"/").concat(this.todayDate.getDate())}},{key:"initListeners",value:function(){var t=this;this.$.currentWeatherIcon.addEventListener("click",(function(){new u})),this.$.countryInfo.addEventListener("click",(function(t){makePopup(t,"searchPopup")})),this.$.mainTemp.addEventListener("click",(function(t){makePopup(t,"filterPopup")})),this.$.randomBtn.addEventListener("click",(function(){t.refreshDisplay()}))}},{key:"makePopup",value:function(t,e){var r="".concat(t.clientY-t.offsetY,"px");console.log(t,"50%",r);var n=new i(p[e],{x:"50%",y:r});n.empty||this.root.append(n)}},{key:"refreshDisplay",value:(s=g(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getOneRandom();case 2:return t.next=4,this.getWeatherData();case 4:return this.insertCurrentData(),this.insertForecastData(),t.next=8,this.InsertWikiShortText();case 8:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"getOneRandom",value:(c=g(m().mark((function t(){var e,r,n,o;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.round(27632*Math.random()),r="https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=".concat(e,"&limit=1&hateoasMode=false"),n={method:"GET",headers:{"X-RapidAPI-Key":"fddcdcdabamsh1a737fdd7aa5f24p169ccbjsnec9c78c409a3","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}},t.next=5,fetch(r,n).then((function(t){return t.json()})).then((function(t){return t.data[0]})).catch((function(){return"No data"}));case 5:o=t.sent,this.city={name:o.name,countryName:o.country,countryCode:o.countryCode,regionName:o.region,wikiDataId:o.wikiDataId,coord:{lat:o.latitude,lon:o.longitude},weather:{current:{},forecast5Days:{}}},console.log(this.city);case 8:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"getWeatherData",value:(a=g(m().mark((function t(){var e,r,n,o,a,i=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.openweathermap.org/data/2.5/",r="?appid=".concat("5d376246ec5123d7e576ffd3bb8a5db4"),n="&units=metric&lat=".concat(this.city.coord.lat,"&lon=").concat(this.city.coord.lon),o=fetch(e+"weather"+r+n).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)})),a=fetch(e+"forecast"+r+n).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)})),t.next=10,Promise.all([o,a]).then((function(t){console.log(t),i.city.weather.current=t[0],i.city.weather.forecast5Days=t[1]}));case 10:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"insertCurrentData",value:function(){this.$.currentWeatherName.textContent=this.city.weather.current.weather[0].main,this.$.cityName.textContent=this.city.name;var t=new n({tag:"img",attrs:{src:"https://flagsapi.com/".concat(this.city.countryCode,"/flat/32.png"),alt:"Flag of ".concat(this.city.countryName),class:"flag"}}),e=new n({tag:"span",content:this.city.regionName}),r=new n({tag:"p",content:this.city.countryName+", "});r.appendChild(e),this.$.countryInfo.replaceChildren(t,r),this.$.mainTemp.textContent=Math.trunc(this.city.weather.current.main.temp)+"°",this.$.highTemp.textContent=Math.trunc(this.city.weather.current.main.temp_max)+"°",this.$.lowTemp.textContent=Math.trunc(this.city.weather.current.main.temp_min)+"°",this.$.mainWind.textContent=Math.round(10*this.city.weather.current.wind.speed/3.6)/10+" km/h",this.$.mainHumi.textContent=this.city.weather.current.main.humidity+"%",this.$.currentWeatherIcon.alt="Current weather : ".concat(this.city.weather.current.weather[0].main," (").concat(this.city.weather.current.weather[0].description,")");var o=this.getWeatherAssets(this.city.weather.current.weather[0].main);this.$.currentWeatherIcon.src=o.icon;var a=Math.round(5*Math.random())||1;this.root.className=o.rootClass+" bg".concat(a)}},{key:"insertForecastData",value:function(){var t=this,e=[];this.$.fiveDays.replaceChildren(),this.city.weather.forecast5Days.list.forEach((function(t){var r,n=new Date(1e3*t.dt),o=n.getDate(),a=n.toLocaleString("en-GB",{weekday:"short"}),i=e.findLast((function(t){return t.day===o}));i||(e.push({day:o,dayName:a}),(i=e.findLast((function(t){return t.day===o}))).temps=[],i.chanceOfRain=[],i.weather={}),i.temps.push(t.main.temp),i.chanceOfRain.push(t.pop),i.weather[t.weather[0].main]=(null!==(r=i.weather[t.weather[0].main])&&void 0!==r?r:0)+1})),e.forEach((function(e){if(e.day!==(new Date).getDate()){var r=e.temps.sort((function(t,e){return t-e})),o=Math.trunc(r[0]),a=Math.trunc(r.findLast((function(t){return 1}))),i=Math.trunc(e.chanceOfRain.reduce((function(t,e){return t+100*e}),0)/e.chanceOfRain.length),c=new n(y),s=Object.entries(e.weather).reduce((function(t,e){return e[1]>=t[1]?e:t}),[0,-1/0]);c.querySelector(".day").textContent="".concat(e.dayName),c.querySelector(".min-max-temps").textContent=o+"° / "+a+"°",c.querySelector(".chanceOfRain").textContent=i+"%",c.querySelector("img").src=t.getWeatherAssets(s[0]).icon,c.querySelector("img").alt=s[0],t.$.fiveDays.appendChild(c)}}))}},{key:"InsertWikiShortText",value:(o=g(m().mark((function t(){var e,r,o=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.wikidata.org/w/api.php?origin=*&action=wbgetentities&props=sitelinks/urls&ids=".concat(this.city.wikiDataId,"&format=json&sitefilter=enwiki")).then((function(t){return t.json()})).then((function(t){return t.entities[o.city.wikiDataId].sitelinks.enwiki.url}));case 2:e=t.sent,r=e.split("/").findLast((function(){return!0})),console.log(r),fetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+r).then((function(t){return t.json()})).then((function(t){if("Not found."!==t.title){console.log(t.extract.length);var e=t.extract.length>300?t.extract.slice(0,300)+"...":t.extract_html,r=t.content_urls.mobile.page;o.$.shortText.innerHTML=e;var a=new n({tag:"a",attrs:{href:r,target:"_blank"},content:"+"});o.$.shortText.append(a)}})).catch((function(){}));case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"getWeatherAssets",value:function(t){var e={icon:null,rootClass:null};switch(t){case"Clear":e.icon="weather-sunny.svg",e.rootClass="sunny";break;case"Drizzle":case"Rain":e.icon="weather-rain.svg",e.rootClass="rainy";break;case"Thunderstorm":e.icon="weather-thunderstorm.svg",e.rootClass="stormy";break;case"Snow":e.icon="weather-snow.svg",e.rootClass="snowy";break;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":case"Squall":case"Tornado":e.icon="weather-fog.svg",e.rootClass="foggy";break;case"Clouds":this.city.weather.current.clouds.all<11?e.icon="weather-sunny.svg":this.city.weather.current.clouds.all<30?(e.icon="weather-partly-cloudy.svg",e.rootClass="p-sunny"):(e.icon="weather-cloudy.svg",e.rootClass="cloudy")}return e}}],r&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())})();