!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1067)}({0:function(e,t,o){"use strict";function r(e,t,o,r,n,i,u,a,l,c){var s,d="function"==typeof e?e.options:e;if(l){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in l)p.call(l,f)&&!p.call(d.components,f)&&(d.components[f]=l[f])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},d._ssrRegister=s):n&&(s=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var b=d.render;d.render=function(e,t){return s.call(t),b(e,t)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,s):[s]}return{exports:e,options:d}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},10:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},1067:function(e,t,o){"use strict";o.r(t);o(8),o(10);var r=o(340);r.default.mpType="page",r.default.route="pages/componentsC/codeInput/codeInput",r.default.el="#root",new Vue(r.default)},1068:function(e,t,o){"use strict";o.r(t);var r=o(788),n=o(591);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);var u=o(0);var a=Object(u.a)(n.default,r.b,r.c,!1,null,"765bf953","5d49308c",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(923).default,this.options.style):Object.assign(this.options.style,o(923).default)}).call(a),t.default=a.exports},1069:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{maxlength:{type:[String,Number],default:uni.$u.props.codeInput.maxlength},dot:{type:Boolean,default:uni.$u.props.codeInput.dot},mode:{type:String,default:uni.$u.props.codeInput.mode},hairline:{type:Boolean,default:uni.$u.props.codeInput.hairline},space:{type:[String,Number],default:uni.$u.props.codeInput.space},value:{type:[String,Number],default:uni.$u.props.codeInput.value},focus:{type:Boolean,default:uni.$u.props.codeInput.focus},bold:{type:Boolean,default:uni.$u.props.codeInput.bold},color:{type:String,default:uni.$u.props.codeInput.color},fontSize:{type:[String,Number],default:uni.$u.props.codeInput.fontSize},size:{type:[String,Number],default:uni.$u.props.codeInput.size},disabledKeyboard:{type:Boolean,default:uni.$u.props.codeInput.disabledKeyboard},borderColor:{type:String,default:uni.$u.props.codeInput.borderColor},disabledDot:{type:Boolean,default:uni.$u.props.codeInput.disabledDot}}};t.default=r},340:function(e,t,o){"use strict";var r=o(743),n=o(594),i=o(0);var u=Object(i.a)(n.default,r.b,r.c,!1,null,null,"fdff4db8",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(u),t.default=u.exports},51:function(e,t,o){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(e,t){switch(r(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];console[e].apply(console,o)},t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[u].apply(console,t);var a=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=r(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),l="";if(a.length>1){var c=a.pop();l=a.join("---COMMA---"),0===c.indexOf(" at ")?l+=c:l+="---COMMA---"+c}else l=a[0];console[u](l)}},591:function(e,t,o){"use strict";o.r(t);var r=o(592),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},592:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=o(1069))&&r.__esModule?r:{default:r};var i={name:"u-code-input",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{inputValue:"",isFocus:this.focus}},watch:{value:{immediate:!0,handler:function(e){this.inputValue=String(e).substring(0,this.maxlength)}}},computed:{codeLength:function(){return new Array(Number(this.maxlength))},itemStyle:function(){var e=this;return function(t){var o=uni.$u.addUnit,r={width:o(e.size),height:o(e.size)};return"box"===e.mode&&(r.border="".concat(e.hairline?.5:1,"px solid ").concat(e.borderColor),0===uni.$u.getPx(e.space)&&(0===t&&(r.borderTopLeftRadius="3px",r.borderBottomLeftRadius="3px"),t===e.codeLength.length-1&&(r.borderTopRightRadius="3px",r.borderBottomRightRadius="3px"),t!==e.codeLength.length-1&&(r.borderRight="none"))),t!==e.codeLength.length-1?r.marginRight=o(e.space):r.marginRight=0,r}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var e={};return e.height=this.hairline?"2px":"4px",e.width=uni.$u.addUnit(this.size),e.backgroundColor=this.borderColor,e}},methods:{inputHandler:function(e){var t=this,o=e.detail.value;this.inputValue=o,this.disabledDot&&this.$nextTick((function(){t.inputValue=o.replace(".","")})),this.$emit("change",o),this.$emit("input",o),String(o).length>=Number(this.maxlength)&&this.$emit("finish",o)}}};t.default=i},593:function(e,t){e.exports={"u-code-input":{flexDirection:"row",position:"relative",overflow:"hidden"},"u-code-input__item":{flexDirection:"row",justifyContent:"center",alignItems:"center",position:"relative"},"u-code-input__item__text":{fontSize:"15",color:"#606266"},"u-code-input__item__dot":{width:"7",height:"7",borderRadius:"100",backgroundColor:"#606266"},"u-code-input__item__line":{position:"absolute",bottom:0,height:"4",borderRadius:"100",width:"40",backgroundColor:"#606266"},"u-code-input__input":{position:"absolute",left:"-750rpx",width:"1500rpx",top:0,backgroundColor:"rgba(0,0,0,0)",textAlign:"left"},"@VERSION":2}},594:function(e,t,o){"use strict";var r=o(595),n=o.n(r);t.default=n.a},595:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"123",value10:"34"}},methods:{change:function(t){e("log","change",t," at pages/componentsC/codeInput/codeInput.nvue:142")},finish:function(t){e("log","finish",t," at pages/componentsC/codeInput/codeInput.nvue:145")}}};t.default=o}).call(this,o(51).default)},743:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={uCodeInput:o(1068).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u7840\u4f7f\u7528")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{maxlength:4},on:{change:e.change,finish:e.finish},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6a2a\u7ebf\u6a21\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"line",maxlength:4,bold:!0},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u957f\u5ea6")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{maxlength:6},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u95f4\u8ddd")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7ec6\u8fb9\u6846")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1),o("view",{staticClass:["u-demo-block__content"],staticStyle:{marginTop:"10px"}},[o("u-code-input",{attrs:{mode:"line",space:10,maxlength:4,hairline:!0},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8c03\u6574\u989c\u8272")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0,color:"#f56c6c",borderColor:"#f56c6c"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),o("view",{staticClass:["u-demo-block__content"],staticStyle:{marginTop:"10px"}},[o("u-code-input",{attrs:{mode:"line",size:"30",maxlength:4,hairline:!0,color:"#3c9cff",borderColor:"#3c9cff"},model:{value:e.value10,callback:function(t){e.value10=t},expression:"value10"}})],1)],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u70b9\u6a21\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",dot:!0,space:0,maxlength:4,hairline:!0},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u9884\u7f6e\u5185\u5bb9")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0,fontSize:"17"},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1)])])])},i=[]},788:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-code-input"]},[e._l(e.codeLength,(function(t,r){return o("view",{key:r,staticClass:["u-code-input__item"],style:[e.itemStyle(r)]},[e.dot&&e.codeArray.length>r?o("view",{staticClass:["u-code-input__item__dot"]}):o("u-text",{style:{fontSize:e.$u.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.codeArray[r]))]),"line"===e.mode?o("view",{staticClass:["u-code-input__item__line"],style:[e.lineStyle]}):e._e()])})),o("u-input",{staticClass:["u-code-input__input"],style:{height:e.$u.addUnit(e.size)},attrs:{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:e.inputValue,maxlength:e.maxlength},on:{input:e.inputHandler,focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1}}})],2)},n=[]},8:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(9).default,Vue.prototype.__$appStyle__)},9:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},923:function(e,t,o){"use strict";o.r(t);var r=o(593),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a}});