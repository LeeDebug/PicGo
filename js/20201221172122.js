(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("lee-component",[],t):"object"===typeof exports?exports["lee-component"]=t():e["lee-component"]=t()})(window,(function(){return function(e){function t(t){for(var o,a,u=t[0],i=t[1],f=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonplee_component"]=window["webpackJsonplee_component"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=i;return c.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("41f5")},"3da6":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"h3[data-v-547dcf17]{margin:40px 0 0}ul[data-v-547dcf17]{list-style-type:none;padding:0}li[data-v-547dcf17]{display:inline-block;margin:0 10px}a[data-v-547dcf17]{color:#42b983}",""]),e.exports=t},"41f5":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["i"])("data-v-547dcf17");Object(o["g"])("data-v-547dcf17");var c={class:"hello"},a={key:0};Object(o["f"])();var u=r((function(e,t,n,r,u,i){return Object(o["e"])(),Object(o["a"])("div",c,[Object(o["c"])("h1",null,Object(o["h"])(u.msg),1),n.propMsg?(Object(o["e"])(),Object(o["a"])("h1",a,Object(o["h"])(n.propMsg),1)):Object(o["b"])("",!0)])})),i={name:"LeeComponent",data:function(){return{msg:"我是组件内部的私有属性"}},props:{propMsg:String},created:function(){console.log("组件引入成功")}};n("eb9c");i.render=u,i.__scopeId="data-v-547dcf17";var f=i;f.install=function(e){e||(window.Vue=e=o["default"]),e.component(f.name,f)};t["default"]=f},"896e":function(e,t,n){var o=n("3da6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("7c019bfa",o,!0,{sourceMap:!1,shadowMode:!1})},eb9c:function(e,t,n){"use strict";n("896e")}})}));