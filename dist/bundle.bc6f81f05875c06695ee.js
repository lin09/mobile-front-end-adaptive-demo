!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports={pxToRemRootValue:16}},function(e,t,n){"use strict";n.r(t);n(2);var o=n(0);const r=e=>`width=device-width, initial-scale=${e}, maximum-scale=${e}, user-scalable=no`,u=document.createElement("meta");u.name="viewport",u.content=r(1),document.head.append(u),u.content=r(document.documentElement.clientWidth/750);const i=()=>{let e=document.documentElement.clientWidth/750*o.pxToRemRootValue;e=e<12?12:e,document.documentElement.style.fontSize=e+"px"},c=window.onresize,l="function"==typeof c;window.onresize=(()=>{l&&c(),i()}),i()},function(e,t,n){}]);