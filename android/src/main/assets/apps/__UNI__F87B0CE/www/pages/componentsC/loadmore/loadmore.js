!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1114)}({0:function(t,e,o){"use strict";function r(t,e,o,r,n,i,a,l,u,s){var d,c="function"==typeof t?t.options:t;if(u){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(c.components,p)&&(c.components[p]=u[p])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(c.mixins||(c.mixins=[])).push(s)),e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=d):n&&(d=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(c.functional){c._injectStyles=d;var g=c.render;c.render=function(t,e){return d.call(e),g(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,d):[d]}return{exports:t,options:c}}o.d(e,"a",(function(){return r}))},1:function(t,e){t.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},10:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},11:function(t,e,o){"use strict";o.r(e);var r=o(12),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},1114:function(t,e,o){"use strict";o.r(e);o(8),o(10);var r=o(354);r.default.mpType="page",r.default.route="pages/componentsC/loadmore/loadmore",r.default.el="#root",new Vue(r.default)},1115:function(t,e,o){"use strict";o.r(e);var r=o(803),n=o(678);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var a=o(0);var l=Object(a.a)(n.default,r.b,r.c,!1,null,"4fd5f1fd","4f7ea6cc",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(950).default,this.options.style):Object.assign(this.options.style,o(950).default)}).call(l),e.default=l.exports},1116:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{status:{type:String,default:uni.$u.props.loadmore.status},bgColor:{type:String,default:uni.$u.props.loadmore.bgColor},icon:{type:Boolean,default:uni.$u.props.loadmore.icon},fontSize:{type:[String,Number],default:uni.$u.props.loadmore.fontSize},color:{type:String,default:uni.$u.props.loadmore.color},loadingIcon:{type:String,default:uni.$u.props.loadmore.loadingIcon},loadmoreText:{type:String,default:uni.$u.props.loadmore.loadmoreText},loadingText:{type:String,default:uni.$u.props.loadmore.loadingText},nomoreText:{type:String,default:uni.$u.props.loadmore.nomoreText},isDot:{type:Boolean,default:uni.$u.props.loadmore.isDot},iconColor:{type:String,default:uni.$u.props.loadmore.iconColor},marginTop:{type:[String,Number],default:uni.$u.props.loadmore.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.loadmore.marginBottom},height:{type:[String,Number],default:uni.$u.props.loadmore.height},line:{type:Boolean,default:uni.$u.props.loadmore.line}}};e.default=r},12:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=o(58))&&r.__esModule?r:{default:r};var i={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"===this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.dashed?"dashed":"solid",t.width=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.dashed?"dashed":"solid",t.height=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=i},13:function(t,e){t.exports={"@VERSION":2}},14:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["u-line"],style:[this.lineStyle]})},n=[]},18:function(t,e,o){"use strict";o.r(e);var r=o(19),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},19:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=o(72))&&r.__esModule?r:{default:r};var i=weex.requireModule("animation"),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){var e=this;t&&!this.loading&&setTimeout((function(){e.startAnimate()}),30)}},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t.show&&t.nvueAnimate(),t.show&&t.addEventListenerToWebview()}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),o=e[e.length-1].$getAppWebview();o.addEventListener("hide",(function(){t.webviewHide=!0})),o.addEventListener("show",(function(){t.webviewHide=!1}))},nvueAnimate:function(){"spinner"!==this.mode&&this.startAnimate()},startAnimate:function(){var t=this;this.loading=!0;var e=this.$refs.ani;e&&i.transition(e,{styles:{transform:"rotate(".concat(this.aniAngel,"deg)"),transformOrigin:"center center"},duration:this.duration,timingFunction:this.timingFunction},(function(){t.aniAngel+=360,t.show&&!t.webviewHide?t.startAnimate():t.loading=!1}))}}};e.default=a},20:function(t,e){t.exports={"u-loading-icon":{flexDirection:"row",alignItems:"center",justifyContent:"center",color:"#c8c9cc"},"u-loading-icon__text":{marginLeft:"4",color:"#606266",fontSize:"14",lineHeight:"20"},"u-loading-icon__spinner":{width:"30",height:"30",position:"relative"},"u-loading-icon__spinner--semicircle":{borderWidth:"2",borderColor:"rgba(0,0,0,0)",borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderStyle:"solid"},"u-loading-icon__spinner--circle":{borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderWidth:"2",borderTopColor:"#e5e5e5",borderRightColor:"#e5e5e5",borderBottomColor:"#e5e5e5",borderLeftColor:"#e5e5e5",borderStyle:"solid"},"u-loading-icon--vertical":{flexDirection:"column"},"@VERSION":2}},22:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("view",{staticClass:["u-loading-icon"],class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():o("view",{ref:"ani",staticClass:["u-loading-icon__spinner"],class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?o("block",[t.webviewHide?t._e():o("loading-indicator",{staticClass:["u-loading-indicator"],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size)},attrs:{animating:!0}})]):t._e()],1),t.text?o("u-text",{staticClass:["u-loading-icon__text"],style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))]):t._e()]):t._e()},n=[]},34:function(t,e,o){"use strict";o.r(e);var r=o(13),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},35:function(t,e,o){"use strict";o.r(e);var r=o(14),n=o(11);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var a=o(0);var l=Object(a.a)(n.default,r.b,r.c,!1,null,"408c4a9a","5d7b260c",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(34).default,this.options.style):Object.assign(this.options.style,o(34).default)}).call(l),e.default=l.exports},354:function(t,e,o){"use strict";var r=o(757),n=o(681),i=o(0);var a=Object(i.a)(n.default,r.b,r.c,!1,null,null,"1a4b4074",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),e.default=a.exports},41:function(t,e,o){"use strict";o.r(e);var r=o(20),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},51:function(t,e,o){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var a=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var l=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=r(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),u="";if(l.length>1){var s=l.pop();u=l.join("---COMMA---"),0===s.indexOf(" at ")?u+=s:u+="---COMMA---"+s}else u=l[0];console[a](u)}},58:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};e.default=r},67:function(t,e,o){"use strict";o.r(e);var r=o(22),n=o(18);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var a=o(0);var l=Object(a.a)(n.default,r.b,r.c,!1,null,"770e8abd","f107138c",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(41).default,this.options.style):Object.assign(this.options.style,o(41).default)}).call(l),e.default=l.exports},678:function(t,e,o){"use strict";o.r(e);var r=o(679),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},679:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=o(1116))&&r.__esModule?r:{default:r};var i={name:"u-loadmore",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{dotText:"\u25cf"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){return"loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=i},680:function(t,e){t.exports={"u-loadmore":{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1},"u-loadmore__content":{marginTop:0,marginRight:"15",marginBottom:0,marginLeft:"15",flexDirection:"row",alignItems:"center",justifyContent:"center"},"u-loadmore__content__icon-wrap":{marginRight:"8"},"u-loadmore__content__text":{fontSize:"14",color:"#606266"},"u-loadmore__content__dot-text":{fontSize:"15",color:"#909193"},"@VERSION":2}},681:function(t,e,o){"use strict";var r=o(682),n=o.n(r);e.default=n.a},682:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},methods:{loadmore:function(){t("log","loadmore"," at pages/componentsC/loadmore/loadmore.nvue:73"),uni.$u.toast("\u52a0\u8f7d\u66f4\u591a")}}};e.default=o}).call(this,o(51).default)},72:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=r},757:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return r}));var r={uLoadmore:o(1115).default},n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["u-page"]},[e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u7840\u4f7f\u7528")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{status:"loading",isDot:!0}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u65e0\u66f4\u591a\u6570\u636e")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{line:!0,status:"nomore"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u52a0\u8f7d\u66f4\u591a(\u70b9\u51fb\u89e6\u53d1\u4e8b\u4ef6)")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{line:!0,status:"loadmore"},on:{loadmore:this.loadmore}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u56fe\u6807")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{status:"loading",loadingIcon:"circle"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u663e\u793a\u70b9")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{status:"nomore",isDot:!0,line:!0,color:"#909399"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u63d0\u793a\u8bed")]),e("view",{staticClass:["u-demo-block__content"]},[e("u-loadmore",{attrs:{status:"loading",loadingText:"\u52aa\u529b\u52a0\u8f7d\u4e2d,\u5148\u559d\u676f\u8336",color:"#909399"}})],1)])])])},i=[]},8:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(9).default,Vue.prototype.__$appStyle__)},803:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return r}));var r={uLine:o(35).default,uLoadingIcon:o(67).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["u-loadmore"],style:[t.$u.addStyle(t.customStyle),{backgroundColor:t.bgColor,marginBottom:t.$u.addUnit(t.marginBottom),marginTop:t.$u.addUnit(t.marginTop),height:t.$u.addUnit(t.height)}]},[t.line?o("u-line",{attrs:{length:"140rpx",color:"#E6E8EB",hairline:!1}}):t._e(),o("view",{staticClass:["u-loadmore__content"],class:"loadmore"==t.status||"nomore"==t.status?"u-more":""},["loading"===t.status&&t.icon?o("view",{staticClass:["u-loadmore__content__icon-wrap"]},[o("u-loading-icon",{attrs:{color:t.iconColor,size:"17",mode:t.loadingIcon}})],1):t._e(),o("u-text",{staticClass:["u-line-1"],class:["nomore"==t.status&&1==t.isDot?"u-loadmore__content__dot-text":"u-loadmore__content__text"],style:[t.loadTextStyle],appendAsTree:!0,attrs:{append:"tree"},on:{click:t.loadMore}},[t._v(t._s(t.showText))])]),t.line?o("u-line",{attrs:{length:"140rpx",color:"#E6E8EB",hairline:!1}}):t._e()],1)},i=[]},9:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},950:function(t,e,o){"use strict";o.r(e);var r=o(680),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a}});