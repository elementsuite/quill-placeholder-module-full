!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PlaceholderModule",[],t):"object"==typeof exports?exports.PlaceholderModule=t():e.PlaceholderModule=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=n.PlaceholderModule},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),l=Quill.import("parchment");Quill.register(o.default);var i=function e(t,r){var i=this;n(this,e),this.quill=t,this.onTextChange=function(e,t,r){if(r===Quill.sources.USER){var n=i.quill.getContents(),o=n.diff(t);o.ops.filter(function(e){return e.insert&&e.insert.placeholder&&e.insert.placeholder.required}).length&&i.quill.updateContents(o,Quill.sources.SILENT)}},this.onClick=function(e){var t=l.find(e.target.parentNode);if(t instanceof o.default){var r=i.quill.getIndex(t);i.quill.setSelection(r,t.length(),Quill.sources.USER)}},this.toolbarHandler=function(e){var t=i.quill.getSelection(),r=i.placeholders.find(function(t){return t.id===e});if(!r)throw new Error("Missing placeholder for "+e);i.quill.deleteText(t.index,t.length),i.quill.insertEmbed(t.index,"placeholder",r,Quill.sources.USER),i.quill.setSelection(t.index+1,0)},this.placeholders=r.placeholders,o.default.className=r.className||"ql-placeholder-content",o.default.delimiters=r.delimiters||["{","}"],this.quill.getModule("toolbar").addHandler("placeholder",this.toolbarHandler),this.quill.root.addEventListener("click",this.onClick),this.quill.on("text-change",this.onTextChange)};t.PlaceholderModule=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var l=Object.getPrototypeOf(t);return null===l?void 0:e(l,r,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)};Object.defineProperty(t,"__esModule",{value:!0}),t.Embed=Quill.import("blots/embed");var a=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"length",value:function(){return 1}},{key:"deleteAt",value:function(e,r){this.domNode.dataset.required||u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"deleteAt",this).call(this,e,r)}}],[{key:"create",value:function(e){var r=u(t.__proto__||Object.getPrototypeOf(t),"create",this).call(this,e);e.required&&r.setAttribute("data-required","true"),r.setAttribute("data-id",e.id),r.setAttribute("data-label",e.label),r.setAttribute("spellcheck","false");var n=t.delimiters,o="string"==typeof n?""+n+e.label+n:""+n[0]+e.label+(n[1]||n[0]),l=document.createTextNode(o),i=document.createElement("span");return i.setAttribute("contenteditable","false"),i.appendChild(l),r.appendChild(i),r}},{key:"value",value:function(e){return e.dataset}}]),t}(t.Embed);a.blotName="placeholder",a.tagName="span",t.default=a}])});