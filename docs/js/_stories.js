var _stories=function(exports){"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}return exports.insertStorie=function(t){var e,r=t.stories,o=n(r);try{for(o.s();!(e=o.n()).done;){var i=e.value,a="data/"+i.avatar,c='\n\t\t\t<div class="stories" id="stories-'.concat(r.indexOf(i),'">\n\t\t\t\t<div class="sto-border" id="sto-border-').concat(r.indexOf(i),'"><img src="').concat(a,'" class="sto-img" id="sto-img-').concat(r.indexOf(i),'"></div>\n\t\t\t\t<span class="sto-title" id="sto-title-').concat(r.indexOf(i),'">').concat(i.nombre,"</span>\n\t\t\t</div>");document.getElementById("stories").insertAdjacentHTML("beforeend",c)}}catch(t){o.e(t)}finally{o.f()}},Object.defineProperty(exports,"__esModule",{value:!0}),exports}({});
//# sourceMappingURL=_stories.js.map