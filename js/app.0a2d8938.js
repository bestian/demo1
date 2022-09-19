(function(){"use strict";var t={2876:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"ui menu inverted"},[e("a",{staticClass:"item",on:{click:function(e){t.visible=!t.visible}}},[e("i",{staticClass:"bars icon"})]),e("div",{staticClass:"right menu"},[e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/about"}},[e("i",{staticClass:"info icon thin-only"}),e("span",{staticClass:"fat-only"},[t._v("關於本公司")])]),e("router-link",{staticClass:"item",attrs:{to:"/news"}},[e("i",{staticClass:"bullhorn icon"}),e("span",{staticClass:"fat-only"},[t._v("最新消息")])]),e("router-link",{staticClass:"item",attrs:{to:"/projects"}},[e("i",{staticClass:"edit icon"}),e("span",{staticClass:"fat-only"},[t._v("熱銷新案")])]),e("router-link",{staticClass:"item",attrs:{to:"/classics"}},[e("i",{staticClass:"file alternate icon"}),e("span",{staticClass:"fat-only"},[t._v("經典作品")])]),e("router-link",{staticClass:"item",attrs:{to:"/contact"}},[e("i",{staticClass:"phone icon"}),e("span",{staticClass:"fat-only"},[t._v("聯絡方式")])])],1)]),e("sui-sidebar-pushable",[e("sui-sidebar",{tag:"sui-menu",attrs:{visible:t.visible,animation:"overlay",width:"thin",icon:"labeled",inverted:"",vertical:""}},[e("sui-menu-item",[e("router-link",{attrs:{to:"/"}},[e("sui-icon",{attrs:{name:"home"}}),t._v(" 首頁 ")],1)],1),e("sui-menu-item",[e("router-link",{attrs:{to:"/about"}},[e("sui-icon",{attrs:{name:"info"}}),t._v(" 關於本公司 ")],1)],1),e("sui-menu-item",[e("router-link",{attrs:{to:"/news"}},[e("sui-icon",{attrs:{name:"bullhorn"}}),t._v(" 最新消息 ")],1)],1),e("sui-menu-item",[e("router-link",{attrs:{to:"/projects"}},[e("sui-icon",{attrs:{name:"edit"}}),t._v(" 熱銷新案 ")],1)],1),e("sui-menu-item",[e("router-link",{attrs:{to:"/classics"}},[e("sui-icon",{attrs:{name:"file alternate"}}),t._v(" 經典作品 ")],1)],1),e("sui-menu-item",[e("router-link",{attrs:{to:"/contact"}},[e("sui-icon",{attrs:{name:"phone"}}),t._v(" 聯絡方式 ")],1)],1)],1),e("sui-sidebar-pusher",[e("router-view")],1)],1)],1)},i=[],s={name:"DemoApp",data(){return{visible:!1}},mounted(){console.log(window.innerWidth),window.innerWidth}},a=s,u=n(1001),c=(0,u.Z)(a,r,i,!1,null,null,null),l=c.exports,f=n(5431);(0,f.z)("/demo1/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var d=n(2631),m=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("img",{staticClass:"logo fat-only",attrs:{alt:"logo",src:"https://picsum.photos/id/866/1200/800"}}),e("img",{staticClass:"logo2 thin-only",attrs:{alt:"logo2",src:"https://picsum.photos/id/866/400/600"}})])}],h={name:"HomeView",components:{}},v=h,b=(0,u.Z)(v,m,p,!1,null,"60df99b5",null),g=b.exports;o.ZP.use(d.ZP);const y=[{path:"/",name:"HoMe",component:g},{path:"/about",name:"AbouT",component:()=>n.e(443).then(n.bind(n,4752))},{path:"/news",name:"NewS",component:()=>n.e(443).then(n.bind(n,2634))},{path:"/projects",name:"ProJects",component:()=>n.e(443).then(n.bind(n,1880))},{path:"/classics",name:"ClasSics",component:()=>n.e(443).then(n.bind(n,9964))},{path:"/contact",name:"ConTact",component:()=>n.e(443).then(n.bind(n,21))}],C=new d.ZP({routes:y});var w=C,k=n(6431),_=n.n(k),j=n(6265),O=n.n(j),P=n(6423);o.ZP.use(P.Z,O()),o.ZP.use(_()),o.ZP.config.productionTip=!1,new o.ZP({router:w,render:t=>t(l)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.6f8bb244.js"}}(),function(){n.miniCssF=function(t){return"css/about.ecba8ccf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="demo1:";n.l=function(o,r,i,s){if(t[o])t[o].push(r);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/demo1/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(e(s,a))return r();t(o,a,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(e),a=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],u=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(e&&e(o);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2876)}));o=n.O(o)})();
//# sourceMappingURL=app.0a2d8938.js.map