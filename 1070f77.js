(window.webpackJsonp=window.webpackJsonp||[]).push([[0,408,409,410,411],{1373:function(t,e,n){t.exports={}},1383:function(t,e,n){"use strict";n.r(e);n(49),n(57);var o=n(2);e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"javascript";return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?'<span class="comment">'.concat(t,"</span>"):o.a[e].keywords.includes(t)?'<span class="keyword">'.concat(t,"</span>"):o.a.operators.includes(t)?'<span class="operator">'.concat(t,"</span>"):o.a.brackets.includes(t)?'<span class="bracket">'.concat(t,"</span>"):t}},1419:function(t,e,n){"use strict";n(1373)},1420:function(t,e,n){t.exports={}},1452:function(t,e,n){"use strict";n.r(e);n(67),n(51);var o=n(1),r=n(1383),l=o.default.extend({props:{textArray:{type:Array,required:!0},typingDelay:{type:Number,required:!1,default:30},newLineDelay:{type:Number,required:!1,default:10},language:{type:String,required:!1,default:"javascript"},fontStyle:{type:String,required:!1,default:"code"}},data:function(){return{textArrayIndex:0,charIndex:0,typedText:"",lineCount:0,isTyping:!1,timeout:null,isFinished:!1}},watch:{textArray:function(){var t=this;this.charIndex=0,this.textArrayIndex=0,this.typedText="",clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.type()}),this.newLineDelay+250)}},mounted:function(){var t=this;this.textArray.length&&(this.timeout=setTimeout((function(){t.type()}),this.typingDelay+250))},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{type:function(){var t=this;if(this.charIndex<this.textArray[this.textArrayIndex].length){this.isTyping=!0;var e=this.textArray[this.textArrayIndex].charAt(this.charIndex);this.typedText+=Object(r.default)(e,this.language,!0),this.charIndex++,this.timeout=setTimeout((function(){t.type()}),this.typingDelay)}else this.isTyping=!1,this.timeout=setTimeout((function(){t.addNewLine()}),this.newLineDelay)},addNewLine:function(){var t=this;if(this.typedText+="\n",this.textArrayIndex++,this.lineCount++,this.lineCount>=this.numberOfLines)return this.isTyping=!1,void(this.isFinished=!0);this.textArrayIndex<this.textArray.length?(this.charIndex=0,this.timeout=setTimeout((function(){t.type()}),this.typingDelay+1100)):this.timeout=setTimeout((function(){t.$emit("finished-typing")}),1e3)}}}),c=(n(1419),n(0)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"code"===t.fontStyle?e("pre",{key:t.textArray[0],staticClass:"wrapper",class:{typing:t.isTyping},domProps:{innerHTML:t._s(t.typedText)}}):e("div",{key:t.textArray[0],staticClass:"wrapper",class:{typing:t.isTyping},domProps:{innerHTML:t._s(t.typedText)}})}),[],!1,null,"c778e470",null);e.default=component.exports},1572:function(t,e,n){"use strict";n.r(e);n(382),n(64),n(29),n(17),n(11),n(31),n(40),n(115),n(15);var o=n(1),r=n(1452),l=n(1573),c=n(1383),d=/\r\n|\r|\n/,h=/(\s|[(){}[\]])/g,f=o.default.extend({name:"CodeEditor",components:{TypingAnimation:r.default,AutomateCodeIcon:l.default},props:{codeBlocks:{type:Object,required:!0},languageSelected:{type:String,required:!1,default:"python"},gaData:{type:String,required:!1,default:null}},data:function(){return{componentId:Math.random(),showSuggested:!1,showTyped:!1,languages:[{key:"python",value:"translate.py"},{key:"go",value:"get_unique_int.go"},{key:"javascript",value:"numbersArray.js"}],typedArray:[],suggestedCode:"",selected:"python",selectedFile:"translate.py"}},computed:{outputTypedArray:function(){return this.codeBlocks[this.selected].typedArray},outputSuggested:function(){var code=this.codeBlocks[this.selected].suggested;return this.parseCode(code)},numberOfLines:function(){return this.outputTypedArray.length+this.codeBlocks[this.selected].suggested.split(d).length+1}},beforeUnmount:function(){var t;this.showSuggested=!1,this.showTyped=!1,null===(t=this.observer)||void 0===t||t.disconnect()},mounted:function(){var t,e=this;"python"!==this.languageSelected&&(this.selected=this.languageSelected);var n=this.$refs["code-suggestions-".concat(this.componentId)];null===(t=this.observer)||void 0===t||t.disconnect();this.observer=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e.showTyped=!0)}))}),{rootMargin:"0px",threshold:.8}),this.observer.observe(n)},methods:{range:function(t,e){return Array(e-t+1).fill().map((function(e,n){return t+n}))},parseCode:function(code){var t=this.highlightTokens(code);return t=this.wrapLinesWithSpan(t)},replayAnimation:function(){var t=this,e=this.$refs.replayBtn;e.classList.remove("rotate-btn"),this.showSuggested=!1,this.showTyped=!1;var n=JSON.parse(JSON.stringify(this.outputTypedArray)),o=this.outputSuggested;this.typedArray=[],this.suggestedCode="",this.$nextTick((function(){requestAnimationFrame((function(){e.classList.add("rotate-btn")})),t.typedArray=n,t.suggestedCode=o,t.showTyped=!0}))},switchTabs:function(t){var e=this;this.selected!==t.key&&(this.showSuggested=!1,this.showTyped=!1,this.$nextTick((function(){e.selected=t.key,e.showTyped=!0}))),this.selectedFile=t.value},highlightTokens:function(code){var t=this;return code.split(h).map((function(e){return Object(c.default)(e,t.selected)})).join("")},wrapLinesWithSpan:function(text){return text.replace(/(.*?)(\n|$)/g,'<span class="highlight">$1</span>$2')},finishedTyping:function(){this.showSuggested=!0}}}),y=(n(1588),n(0)),component=Object(y.a)(f,(function(){var t,e=this,n=e._self._c;e._self._setupProxy;return n("div",{ref:"code-suggestions-".concat(e.componentId),staticClass:"container"},[n("ul",{staticClass:"tabs-menu"},e._l(e.languages,(function(t){var o;return n("li",{key:t.key,staticClass:"tab",class:{active:e.selected===t.key},attrs:{"data-ga-name":t.value,"data-ga-location":null!==(o=e.gaData)&&void 0!==o?o:"body"},on:{click:function(n){return e.switchTabs(t)}}},[e._v("\n      "+e._s(t.value)+"\n    ")])})),0),e._v(" "),e.selected?n("div",{staticClass:"code"},[n("div",{staticClass:"code-container"},[n("div",{staticClass:"lines-container"},e._l(e.range(1,e.numberOfLines),(function(t,o){return n("div",{key:o,staticClass:"line-number"},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),e.showTyped?n("div",{staticClass:"typed-code"},[n("TypingAnimation",{ref:"typingAnimation",attrs:{"text-array":e.outputTypedArray,language:e.selected,"number-of-lines":2},on:{"finished-typing":e.finishedTyping}})],1):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSuggested,expression:"showSuggested"}]},[n("pre",{ref:"suggested",staticClass:"suggested-code",domProps:{innerHTML:e._s(e.outputSuggested)}}),e._v(" "),e._m(0)]),e._v(" "),n("button",{ref:"replayBtn",staticClass:"replay-btn",attrs:{"data-ga-name":"replay ".concat(e.selectedFile),"data-ga-location":null!==(t=e.gaData)&&void 0!==t?t:"body"},on:{click:e.replayAnimation}},[n("AutomateCodeIcon")],1)])]):e._e()])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"suggestion-pill"},[e("img",{attrs:{src:"/nuxt-images/icons/tanuki-code-suggestion.svg",alt:"Tanuki icon"}}),t._v("\n          code suggestion\n        ")])}],!1,null,"1d67cd56",null);e.default=component.exports},1573:function(t,e,n){"use strict";n.r(e);var o={name:"AutomateCodeIcon"},r=n(0),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.5 18H2V21.5",stroke:"white","stroke-miterlimit":"10"}}),t._v(" "),e("path",{attrs:{d:"M19.5 7H23V3.5",stroke:"white","stroke-miterlimit":"10"}}),t._v(" "),e("path",{attrs:{d:"M1 12.5C1 6.15 6.15 1 12.5 1C16.85 1 20.63 3.41 22.58 6.97",stroke:"white","stroke-miterlimit":"10"}}),t._v(" "),e("path",{attrs:{d:"M24 12.5C24 18.85 18.85 24 12.5 24C8.13999 24 4.34999 21.57 2.39999 18",stroke:"white","stroke-miterlimit":"10"}})])}),[],!1,null,"6e4e1ecf",null);e.default=component.exports},1588:function(t,e,n){"use strict";n(1420)},2507:function(t,e,n){t.exports={}},2611:function(t,e,n){"use strict";n.r(e);n(14),n(51);var o=n(1),r=n(1572),l=n(20),c=o.default.extend({name:"TabbedFeatures",components:{CodeEditor:r.default,DemoModal:l.DemoModal},props:{data:{type:Object,required:!0,default:function(){return{}}},codeBlocks:{type:Object,required:!1,default:null},demo:{type:Object,required:!1,default:null}},data:function(){return{tabs:[],firstTab:null,lastTab:null,tabpanels:[],selectedTab:0,modal:{open:!1}}},methods:{onTabChange:function(t){this.selectedTab=t},getCodeblocks:function(t){return null!=t?t:this.codeBlocks},openModal:function(){this.modal.open=!0,setTimeout((function(){window.__vimeoRefresh()}),3e3),document.querySelector(".nav-hoc").style.zIndex="0"},closeModal:function(){this.modal.open=!1,document.querySelector(".nav-hoc").style.zIndex="1025"}}}),d=(n(2674),n(0)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"tabbed-features"},[e("SlpContainer",[e("div",{staticClass:"tabbed-features__wrapper"},[e("div",{staticClass:"tabbed-features__header"},[e("SlpTypography",{attrs:{variant:"heading4-bold",tag:"h2"}},[t._v("\n          "+t._s(t.data.header)+"\n        ")])],1),t._v(" "),e("SlpTypography",{staticClass:"slp-mt-16 tabbed-features__blurb",attrs:{variant:"heading2-bold",tag:"p"}},[t._v("\n        "+t._s(t.data.blurb)+"\n      ")]),t._v(" "),e("div",{staticClass:"tabbed-features__tabs",attrs:{role:"tablist","aria-labelledby":"tablist-1"}},t._l(t.data.tabs,(function(n,o){return e("button",{key:n.header,ref:"tab",refInFor:!0,staticClass:"tabbed-features__tab",class:t.selectedTab==o?"tabbed-features__tab--active":"",attrs:{id:"tab-".concat(o),type:"button",role:"tab","aria-selected":"true","aria-controls":"tabpanel-".concat(o),"data-ga-name":n.data_ga_name,"data-ga-location":n.data_ga_location},on:{click:function(e){return t.onTabChange(o)}}},[e("SlpTypography",{attrs:{variant:"heading5-bold",tag:"span"}},[e("span",{staticClass:"tabbed-features__header-desktop"},[t._v(t._s(n.header)+"\n            ")]),t._v(" "),e("span",{staticClass:"tabbed-features__header-mobile"},[t._v("\n              "+t._s(n.header_mobile)+"\n            ")])])],1)})),0),t._v(" "),t._l(t.data.tabs,(function(n,o){return e("div",{directives:[{name:"show",rawName:"v-show",value:o===t.selectedTab,expression:"tabContentIndex === selectedTab"}],key:"tab-content-".concat(o),staticClass:"tabbed-features__content",class:t.selectedTab==o?"tabbed-features__content--active":"",attrs:{id:"tabpanel-".concat(o),role:"tabpanel",tabindex:"0","aria-labelledby":"tab-".concat(o)}},[e("SlpRow",{staticClass:"tabbed-features__row"},[e("SlpColumn",{staticClass:"tabbed-features__col",attrs:{col:6}},[e("SlpTypography",{staticClass:"slp-mb-8 tabbed-features__feature-header",attrs:{variant:"body2-bold",tag:"p"}},[t._v("\n              "+t._s(n.header)+"\n            ")]),t._v(" "),e("SlpTypography",{staticClass:"slp-mb-48",attrs:{variant:"heading5",tag:"p"}},[t._v("\n              "+t._s(n.blurb)+"\n            ")]),t._v(" "),e("ul",t._l(n.features,(function(n){var o;return e("li",{key:n.text,staticClass:"tabbed-features__feature"},[null!==(o=n.icon)&&void 0!==o&&o.name?e("SlpIcon",{staticClass:"slp-mr-16 tabbed-features__button-icon",class:{"tabbed-features__icon-stroke":"clipboard-check-alt"==n.icon.name},attrs:{name:n.icon.name,variant:n.icon.variant,size:n.icon.size,"slp-color":"accent-400"}}):t._e(),t._v(" "),e("SlpButton",{staticClass:"tabbed-features__feature__button",attrs:{variant:"tertiary",href:n.href,"data-ga-name":n.data_ga_name,"data-ga-location":n.data_ga_location}},[t._v("\n                  "+t._s(n.text)+"\n                  "),e("SlpIcon",{staticClass:"hero-scroll-gallery__content-icon",attrs:{name:"arrow-right",variant:"product",size:"medium"}})],1)],1)})),0)],1),t._v(" "),e("SlpColumn",{staticClass:"tabbed-features__col tabbed-features__col--media",attrs:{col:6}},[n.image?e("div",{staticClass:"tabbed-features__img-container"},[e("img",{attrs:{src:n.image.src,alt:n.image.text,loading:"lazy"}})]):n.code_blocks||t.codeBlocks?e("CodeEditor",{attrs:{"code-blocks":t.getCodeblocks(n.code_blocks),"ga-data":n.data_ga_location}}):null!=n.demo?e("div",{staticClass:"demo-modal"},[e("div",{staticClass:"image__container",attrs:{"data-ga-location":n.demo.launchButton.data_ga_location,"data-ga-name":n.demo.launchButton.data_ga_name},on:{click:t.openModal}},[e("img",{staticClass:"demo-thumbnail",attrs:{src:n.demo.video.thumbnail,alt:n.demo.video.altText}}),t._v(" "),e("SlpButton",{staticClass:"slp-mt-32 demo-button",attrs:{variant:"secondary"}},[e("SlpIcon",{attrs:{name:n.demo.launchButton.icon_name,variant:n.demo.launchButton.icon_variant,alt:"laptop-play-video"}}),t._v(t._s(n.demo.launchButton.text))],1)],1)]):t._e()],1)],1)],1)}))],2)]),t._v(" "),t.data.tabs[t.selectedTab].demo?e("DemoModal",{directives:[{name:"show",rawName:"v-show",value:t.modal.open,expression:"modal.open"}],attrs:{data:t.data.tabs[t.selectedTab].demo,visible:t.modal.open},on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"3c0f70bb",null);e.default=component.exports},2674:function(t,e,n){"use strict";n(2507)}}]);