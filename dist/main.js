(()=>{"use strict";var t,e,n,r,o={215:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(551);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(a)?a:String(a)),r)}var a}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrapper=document.querySelector(e),this.clockLeg=new r.Z({tag:"div",attrs:{class:"clock-leg"}}),this.clockBall=new r.Z({tag:"div",attrs:{class:"clock-ball"}}),this.clockLeg.appendChild(this.clockBall),this.$wrapper.appendChild(this.clockLeg),this.startClock()}var e,n;return e=t,(n=[{key:"startClock",value:function(){var t=this;this.updateTime(),setInterval((function(){return t.updateTime()}),3e5)}},{key:"updateTime",value:function(){var t=new Date,e=t.getHours(),n=90;n+=30*(e>11?e-12:e),n+=t.getMinutes()/2,this.clockLeg.style.rotate="".concat(n,"deg")}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},551:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(a)?a:String(a)),o)}var a}n.d(e,{Z:()=>a});var a=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Array.isArray(e))throw new Exception("Wrong format");return this.makeOne(e)}var e,n;return e=t,(n=[{key:"makeOne",value:function(t){var e,n=this;if("TEXTNODE"===t.tag)return t.content;var r=document.createElement(t.tag);for(var o in t.attrs)r.setAttribute(o,t.attrs[o]);return r.textContent=t.content||"",null===(e=t.children)||void 0===e||e.forEach((function(t){r.append(n.makeOne(t))})),r}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},449:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(551);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(a)?a:String(a)),r)}var a}var c=function(){function t(e,n){var o=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.exists)return t.instance.close(),{empty:!0};t.exists=!0,t.instance=this,this.mouseCoordinates=n;var a={tag:"div",attrs:{class:"popup-overlay theme-fill-ui"},children:[{tag:"button",content:"X",attrs:{class:"popup-close-btn"}},e,{tag:"div",attrs:{class:"background"}}]};return this.element=new r.Z(a),this.position(),this.closeBtn=this.element.querySelector(".popup-close-btn"),this.closeBtn.addEventListener("click",(function(){return o.close()})),this.element}var e,n;return e=t,(n=[{key:"position",value:function(){var t=this,e=this.mouseCoordinates.x,n=this.mouseCoordinates.y;this.element.style.left=e,setTimeout((function(){t.element.style.top=n,t.element.style.translate="-50% -30%"}))}},{key:"close",value:function(){var e=this;t.exists=!1,t.instance=null,this.element.style.top="-10%",this.element.style.translate="-50% -100%",setTimeout((function(){e.element.remove()}),1e3)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},495:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(551);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(a)?a:String(a)),r)}var a}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrapper=document.querySelector(".current-weather"),this.openWheel()}var e,n;return e=t,(n=[{key:"closeWheel",value:function(){this.wheelHub.remove()}},{key:"openWheel",value:function(){var t=this;this.wheelHub=new r.Z({tag:"div",attrs:{class:"wheel-hub"}}),["sunny","partly-cloudy","cloudy","rain","thunderstorm","snow","fog","hail"].forEach((function(e,n){var o=new r.Z({tag:"div",attrs:{class:"wheel-element",style:"rotate:".concat(45*n,"deg")}}),a=new r.Z({tag:"button",attrs:{class:"wheel-element-background"}});a.style.backgroundImage="url('weather-".concat(e,".svg"),a.style.rotate="-".concat(45*n,"deg"),a.addEventListener("click",(function(){return t.closeWheel()})),o.appendChild(a),t.wheelHub.appendChild(o)}));var e=new r.Z({tag:"div",attrs:{class:"wheel-hub-background"}});this.wheelHub.appendChild(e),this.$wrapper.appendChild(this.wheelHub)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},887:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var r=n(449),o=n(495),a=n(215),c=n(504),i=n(551),s=document.querySelector("#root"),l=(new a.Z(".weather-graph-values"),{currentWeatherName:document.querySelector(".current-weather p"),currentWeatherIcon:document.querySelector(".current-weather img"),cityName:document.querySelector(".city-name p"),countryName:document.querySelector(".country"),countryFlag:document.querySelector(".country img"),countyName:document.querySelector(".country span"),highTemp:document.querySelector(".temp-hi"),lowTemp:document.querySelector(".temp-lo"),mainTemp:document.querySelector(".main-temp"),mainWind:document.querySelector(".weather-graph-values .wind"),mainHumi:document.querySelector(".weather-graph-values .humidity"),todayDate:document.querySelector(".today-date"),fiveDays:document.querySelector(".five-days-pred"),shortText:document.querySelector(".short-text")});l.currentWeatherIcon.addEventListener("click",(function(){new o.Z}));var u=new Date;l.todayDate.textContent="".concat(u.toLocaleString("en-GB",{weekday:"long"})," ").concat(u.getMonth()+1,"/").concat(u.getDate()),l.countryName.addEventListener("click",(function(t){p(t,"searchPopup")})),l.mainTemp.addEventListener("click",(function(t){p(t,"filterPopup")}));var p=function(t,e){var n="".concat(t.clientY-t.offsetY,"px");console.log(t,"50%",n);var o=new r.Z(c.L[e],{x:"50%",y:n});o.empty||s.append(o)},h=await fetch("city.list.json").then((function(t){return t.json()})).then((function(t){return t[Math.trunc(Math.random()*t.length)]})).catch((function(t){console.error(t)})),m="https://api.openweathermap.org/data/2.5/",f="?appid=".concat("5d376246ec5123d7e576ffd3bb8a5db4"),y="&units=metric&lat=".concat(h.coord.lat,"&lon=").concat(h.coord.lon),d=await fetch(m+"weather"+f+y).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)})),v=await fetch(m+"forecast"+f+y).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)})),g=await fetch("country_dial_info.json").then((function(t){return t.json()})).then((function(t){return t.find((function(t){return t.code==d.sys.country}))})),b=Math.round(5*Math.random())||1;function S(t){var e={icon:null,rootClass:null};switch(t){case"Clear":e.icon="weather-sunny.svg",e.rootClass="sunny";break;case"Drizzle":case"Rain":e.icon="weather-rain.svg",e.rootClass="rainy";break;case"Thunderstorm":e.icon="weather-thunderstorm.svg",e.rootClass="stormy";break;case"Snow":e.icon="weather-snow.svg",e.rootClass="snowy";break;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":case"Squall":case"Tornado":e.icon="weather-fog.svg",e.rootClass="foggy";break;case"Clouds":d.clouds.all<11?e.icon="weather-sunny.svg":d.clouds.all<30?(e.icon="weather-partly-cloudy.svg",e.rootClass="p-sunny"):(e.icon="weather-cloudy.svg",e.rootClass="cloudy")}return e}l.currentWeatherIcon.alt="Current weather : ".concat(d.weather[0].main," (").concat(d.weather[0].description,")"),l.currentWeatherIcon.src=S(d.weather[0].main).icon,s.className=S(d.weather[0].main).rootClass+" bg".concat(b),l.currentWeatherName.textContent=d.weather[0].main,l.cityName.textContent=d.name,l.countryName.append(g.name),l.countryFlag.src="https://flagsapi.com/".concat(d.sys.country,"/flat/32.png"),l.mainTemp.textContent=Math.trunc(d.main.temp)+"°",l.highTemp.textContent=Math.trunc(d.main.temp_max)+"°",l.lowTemp.textContent=Math.trunc(d.main.temp_min)+"°",l.mainWind.textContent=Math.round(10*d.wind.speed/3.6)/10+" km/h",l.mainHumi.textContent=d.main.humidity+"%";var w=[];v.list.forEach((function(t){var e,n=new Date(1e3*t.dt),r=n.getDate(),o=n.toLocaleString("en-GB",{weekday:"short"}),a=w.findLast((function(t){return t.day===r}));a||(w.push({day:r,dayName:o}),(a=w.findLast((function(t){return t.day===r}))).temps=[],a.chanceOfRain=[],a.weather={}),a.temps.push(t.main.temp),a.chanceOfRain.push(t.pop),a.weather[t.weather[0].main]=(null!==(e=a.weather[t.weather[0].main])&&void 0!==e?e:0)+1})),w.forEach((function(t){if(t.day!==(new Date).getDate()){var e=t.temps.sort((function(t,e){return t-e})),n=Math.trunc(e[0]),r=Math.trunc(e.findLast((function(t){return 1}))),o=Math.trunc(t.chanceOfRain.reduce((function(t,e){return t+100*e}),0)/t.chanceOfRain.length),a=new i.Z(c.v),s=Object.entries(t.weather).reduce((function(t,e){return e[1]>=t[1]?e:t}),[0,-1/0]);a.querySelector(".day").textContent="".concat(t.dayName),a.querySelector(".min-max-temps").textContent=n+"° / "+r+"°",a.querySelector(".chanceOfRain").textContent=o+"%",a.querySelector("img").src=S(s[0]).icon,a.querySelector("img").alt=s[0],l.fiveDays.append(a)}})),fetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+d.name).then((function(t){return t.json()})).then((function(t){if("Not found."!==t.title){console.log(t.extract.length);var e=t.extract.length>300?t.extract.slice(0,300)+"...":t.extract_html,n=t.content_urls.mobile.page;l.shortText.innerHTML=e;var r=new i.Z({tag:"a",attrs:{href:n},content:"+",target:"_blank"});l.shortText.append(r)}})).catch((function(t){return console.log(t),t})),e()}catch(k){e(k)}}),1)},504:(t,e,n)=>{n.d(e,{L:()=>r,v:()=>o});var r={searchPopup:{tag:"div",attrs:{class:"search-popup"},children:[{tag:"div",children:[{tag:"input",attrs:{id:"country-check",type:"checkbox"}},{tag:"label",content:"Country",attrs:{class:"country-lock",for:"country-check"}}]},{tag:"div",children:[{tag:"input",attrs:{id:"county-check",type:"checkbox"}},{tag:"label",content:"Country",attrs:{class:"country-lock",for:"county-check"}}]},{tag:"input",attrs:{placeholder:"Search"}}]},filterPopup:{tag:"div",attrs:{class:"filter-popup"},children:[{tag:"div",children:[{tag:"img",attrs:{src:"max-temp.svg"}},{tag:"p",content:"34°C",attrs:{contentEditable:!0}},{tag:"img",attrs:{src:"min-temp.svg"}},{tag:"p",content:"24°C",attrs:{contentEditable:!0}}]},{tag:"div",children:[{tag:"img",attrs:{src:"details-wind.svg"}},{tag:"p",content:"00",attrs:{class:"filter-wind-min",contentEditable:!0}},{tag:"p",content:" - "},{tag:"p",content:"00",attrs:{class:"filter-wind-max",contentEditable:!0}},{tag:"input",attrs:{type:"radio",name:"speedUnit",id:"kmh",value:"kmh",checked:!0}},{tag:"label",content:"km/h",attrs:{for:"kmh"}},{tag:"p",content:" / "},{tag:"input",attrs:{type:"radio",name:"speedUnit",id:"mph",value:"mph"}},{tag:"label",content:"mph",attrs:{for:"mph"}}]},{tag:"div",children:[{tag:"img",attrs:{src:"details-humidity.svg"}},{tag:"p",content:"00",attrs:{class:"filter-humi-min",contentEditable:!0}},{tag:"p",content:" - "},{tag:"p",content:"00",attrs:{class:"filter-humi-max",contentEditable:!0}},{tag:"p",content:"%"}]},{tag:"div",attrs:{class:"temp-unit"},children:[{tag:"input",attrs:{type:"radio",name:"tempUnit",id:"celsius",value:"celsius",checked:!0}},{tag:"label",content:"°C",attrs:{for:"celsius"}},{tag:"p",content:" / "},{tag:"input",attrs:{type:"radio",name:"tempUnit",id:"faren",value:"faren"}},{tag:"label",content:"°F",attrs:{for:"faren"}}]}]}},o={tag:"div",attrs:{class:"pred-card"},children:[{tag:"p",attrs:{class:"day"}},{tag:"img"},{tag:"p",attrs:{class:"min-max-temps"}},{tag:"p",attrs:{class:"chanceOfRain",title:"Probability of precipitation"}}]}},579:(t,e,n)=>{n.a(t,(async(t,e)=>{try{n(13),n(996),n(183),n(278),n(705),n(291),n(582),n(711),n(5),n(245),n(165),n(978),n(65),n(262),n(813),n(353),n(292);var r=n(887),o=t([r]);r=(o.then?(await o)():o)[0],e()}catch(t){e(t)}}))},13:(t,e,n)=>{t.exports=n.p+"Orbitron-VariableFont_wght.ttf"},183:(t,e,n)=>{t.exports=n.p+"Sansation_Bold.ttf"},996:(t,e,n)=>{t.exports=n.p+"Sansation_Regular.ttf"},978:(t,e,n)=>{t.exports=n.p+"lock-closed.svg"},65:(t,e,n)=>{t.exports=n.p+"lock-open.svg"},262:(t,e,n)=>{t.exports=n.p+"search.svg"},813:(t,e,n)=>{t.exports=n.p+"swipe-left.svg"},278:(t,e,n)=>{t.exports=n.p+"weather-cloudy.svg"},705:(t,e,n)=>{t.exports=n.p+"weather-fog.svg"},291:(t,e,n)=>{t.exports=n.p+"weather-hail.svg"},711:(t,e,n)=>{t.exports=n.p+"weather-partly-cloudy.svg"},5:(t,e,n)=>{t.exports=n.p+"weather-rain.svg"},245:(t,e,n)=>{t.exports=n.p+"weather-snow.svg"},582:(t,e,n)=>{t.exports=n.p+"weather-sunny.svg"},165:(t,e,n)=>{t.exports=n.p+"weather-thunderstorm.svg"},353:(t,e,n)=>{t.exports=n.p+"city.list.json"},292:(t,e,n)=>{t.exports=n.p+"country_dial_info.json"}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={exports:{}};return o[t](n,n.exports,c),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var s,l,u,p=new Set,h=o.exports,m=new Promise(((t,e)=>{u=e,l=t}));m[e]=h,m[t]=t=>(i&&t(i),p.forEach(t),m.catch((t=>{}))),o.exports=m,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{c[e]=t,r(a)}),(t=>{c[n]=t,r(a)}));var c={};return c[t]=t=>t(a),c}}var i={};return i[t]=t=>{},i[e]=o,i})))(o);var c=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),l=new Promise((e=>{(a=()=>e(c)).r=0;var n=t=>t!==i&&!p.has(t)&&(p.add(t),t&&!t.d&&(a.r++,t.push(a)));s.map((e=>e[t](n)))}));return a.r?l:c()}),(t=>(t?u(m[n]=t):l(h),r(i)))),i&&i.d<0&&(i.d=0)},c.d=(t,e)=>{for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;c.g.importScripts&&(t=c.g.location+"");var e=c.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=t})(),c(579)})();