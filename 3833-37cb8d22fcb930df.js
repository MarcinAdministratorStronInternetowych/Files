(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3833],{14880:function(e,t,n){"use strict";var r=n(52322),o=n(2784),i=n(96122);let l=(0,o.forwardRef)((e,t)=>(0,r.jsx)("iframe",{ref:t,src:void 0===window.navigator||window.navigator.onLine?void 0:i.t,id:"navattic-player",tabIndex:-1,...e}));l.displayName="PlayerIframe",t.Z=l},71999:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(52322),o=n(84120),i=n.n(o);n(69977),n(2784);var l=n(14880);function a(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{id:"5fed39512f60f006",children:'html{overflow:hidden}body{background:unset;overflow:hidden;margin:0;height:100vh;width:100vw;font-family:-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}#app,#navattic-player,#__next{height:100%;width:100%}#navattic-player{-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0;border:none}#navattic-player.scale-compat{top:0;left:0;min-width:0;min-height:0;max-width:none;max-height:none;z-index:9999999;height:100vh;width:100vw;position:absolute}'}),(0,r.jsxs)("div",{id:"app",className:"jsx-5fed39512f60f006",children:[(0,r.jsx)(l.Z,{}),e.children]})]})}globalThis.__navatticControlled=!0},67974:function(e,t,n){"use strict";n.d(t,{H8:function(){return h},HO:function(){return a},K7:function(){return m},X1:function(){return p},gz:function(){return d},k0:function(){return s},lm:function(){return f},oH:function(){return l},v6:function(){return _},vQ:function(){return c}});var r=n(86559);n(77872);var o=n(6676),i=n.n(o);let l=(e,t)=>{Array.isArray(e)&&e.forEach(e=>l(e,t)),"object"==typeof e&&e&&Object.keys(e).forEach(n=>{t(e,n),l(e[n],t)})},a=e=>(e&&l(e,(e,t)=>{null===e[t]&&delete e[t]}),e),u=(e,t,n)=>{Array.isArray(e)?e.forEach((e,r)=>{n.push(r.toString()),u(e,t,n),n.pop()}):"object"==typeof e&&e&&Object.keys(e).forEach(r=>{let[o]=n.slice(-1);t(e,r,o),n.push(r),u(e[r],t,n),n.pop()})},s=(e,t)=>{u(e,t,[])},d=(e,t)=>{var n;let r=null!==(n=null==t?void 0:t.whitelist)&&void 0!==n?n:[];s(e,(e,n,o)=>{e&&("id"!==n||r.includes(o)||((null==t?void 0:t.remove)?delete e[n]:e[n]=i()()))})},c=e=>{let t=document.createElement("div");t.textContent=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);let n=document.getSelection(),r=document.createRange();r.selectNodeContents(t),n&&(n.removeAllRanges(),n.addRange(r)),document.execCommand("copy"),document.body.removeChild(t)},f=e=>{let t=e.headers.get("content-disposition"),n=t?t.split("filename=")[1]:"download";e.blob().then(function(e){let t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),r.remove()})},m=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";if(e){if(e instanceof Array)switch(n){case"first":t=e[0];break;case"last":t=e[e.length-1];break;case"null":t=void 0}else t=e;return t}},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";return e?Object.fromEntries(Object.entries(e).map(e=>{let[n,r]=e;return[n,m(r,t)]})):{}},p=e=>({includeScore:!1,threshold:r.o0,keys:e}),_=(e,t)=>e},86559:function(e,t,n){"use strict";n.d(t,{Fn:function(){return d},G1:function(){return i},P6:function(){return h},PD:function(){return o},TQ:function(){return f},V:function(){return a},Vt:function(){return r},Xy:function(){return m},cv:function(){return u},o0:function(){return l},sg:function(){return s},uI:function(){return c}});let r="Admin",o="Launchpad Rep",i=200,l=.35,a=191,u=20,s=25,d=10,c=1,f={ENTITY_TAG_MISMATCH:"ENTITY_TAG_MISMATCH",DANGLING_FLOW_REF:"DANGLING_FLOW_REF",FORBIDDEN:"FORBIDDEN",NOT_FOUND:"NOT_FOUND",BAD_INPUT:"BAD_INPUT",SLUG_CONFLICT:"SLUG_CONFLICT",SLUG_REDIRECT_CONFLICT:"SLUG_REDIRECT_CONFLICT"},m="success@navattic.com",h={WORKSPACE_ONBOARDING:"introducing-workspace-onboarding",PLAYBOOKS:"introducing-playbooks",INSTALL_EXTENSION:"install-extension",INVITE_USERS:"invite-users",PRODUCT_DEMOS:"introducing-product-demos",TEAMS_MEMBERS_UPSELL:"teams-members-upsell",BOARDS_DEMOS_UPSELL:"boards-demos-upsell"}},67328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},noSSR:function(){return l}});let r=n(43219);n(52322),n(2784);let o=r._(n(56800));function i(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let a=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=a?a().then(i):Promise.resolve(i(()=>null))}):(delete r.webpack,delete r.modules,l(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},46085:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=n(43219)._(n(2784)).default.createContext(null)},56800:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let r=n(43219)._(n(2784)),o=n(46085),i=[],l=[],a=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function u(){if(!i){let t=new s(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!a){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return u()})}function d(e,t){!function(){u();let e=r.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=r.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return d.preload=()=>u(),d.displayName="LoadableComponent",r.default.forwardRef(d)}(u,e)}function c(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(i).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(a=!0,t());c(l,e).then(n,n)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},69977:function(){},96122:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});let r="/offline/player-frame.html"},25237:function(e,t,n){e.exports=n(67328)}}]);
//# sourceMappingURL=3833-37cb8d22fcb930df.js.map