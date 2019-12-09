!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var r="second_minute_hour_day_week_month_year".split("_"),o="秒_分钟_小时_天_周_个月_年".split("_"),a=function(e,t){if(0===t)return["just now","right now"];var n=r[parseInt(t/2)];return e>1&&(n+="s"),["".concat(e," ").concat(n," ago"),"in ".concat(e," ").concat(n)]},i={en_US:a,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var n=o[parseInt(t/2)];return["".concat(e," ").concat(n,"前"),"".concat(e," ").concat(n,"后")]}};t.register=function(e,t){i[e]=t};t.getLocale=function(e){return i[e]||a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var r=[60,60,24,7,365/7/12,12],o=function(e){return parseInt(e)};t.toInt=o;var a=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(o(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=a;t.formatDiff=function(e,t){for(var n=0,a=e<0?1:0,i=e=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n];return(e=o(e))>(0==(n*=2)?9:1)&&(n+=1),t(e,n,i)[a].replace("%s",e)};t.diffSec=function(e,t){return((t=t?a(t):new Date)-a(e))/1e3};t.nextInterval=function(e){for(var t=1,n=0,o=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n],t*=r[n];return o=(o%=t)?t-o:t,Math.ceil(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"format",{enumerable:!0,get:function(){return r.format}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return o.render}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return o.cancel}}),Object.defineProperty(t,"register",{enumerable:!0,get:function(){return a.register}}),t.version=void 0;var r=n(5),o=n(6),a=n(0);t.version="4.0.0-beta.2"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;var r=n(1),o=n(0);t.format=function(e,t,n){var a=(0,r.diffSec)(e,n);return(0,r.formatDiff)(a,(0,o.getLocale)(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.cancel=void 0;var r=n(7),o=n(1),a=n(0),i={},c=function(e){clearTimeout(e),delete i[e]},d=function e(t,n,a,d){c((0,r.getTimerId)(t));var s=(0,o.diffSec)(n,d);t.innerHTML=(0,o.formatDiff)(s,a);var u=setTimeout(function(){e(t,n,a,d)},1e3*(0,o.nextInterval)(s),2147483647);i[u]=0,(0,r.saveTimerId)(t,u)};t.cancel=function(e){if(e)c((0,r.getTimerId)(e));else for(var t in i)c(t)};t.render=function(e,t,n){var o;void 0===e.length&&(e=[e]);for(var i=0;i<e.length;i++){o=e[i];var c=(0,r.getDateAttribute)(o),s=(0,a.getLocale)(t);d(o,c,s,n)}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimerId=t.saveTimerId=t.getDateAttribute=void 0;var r=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0};t.getDateAttribute=function(e){return r(e,"datetime")};t.saveTimerId=function(e,t){return e.setAttribute?e.setAttribute("timeago-tid",t):e.attr?e.attr("timeago-tid",t):void 0};t.getTimerId=function(e){return r(e,"timeago-tid")}},function(e,t,n){"use strict";n.r(t);n(3),n(4);var r=n(2);const o=new class{constructor(){this.URI="http://localhost:3000/api/books"}async getBooks(){const e=await fetch(this.URI);return await e.json()}async postBook(e){const t=await fetch(this.URI,{method:"POST",body:e});await t.json()}async deleteBook(e){const t=await fetch(`${this.URI}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}),n=await t.json();console.log(n)}};var a=class{async renderBooks(){const e=await o.getBooks(),t=document.getElementById("books_cards");t.innerHTML="",e.forEach(e=>{const n=document.createElement("div");n.className="",n.innerHTML=`\n                <div class="card m-2">\n                    <div class="row">\n                        <div class="col-md-4">\n                            <img src="${e.imagePath}" alt="" class="img-fluid" />\n                        </div>\n                        <div class="col-md-8">\n                            <div class="card-block px-2">\n                                <h4 class="card-title">${e.title}</h4>\n                                <p class="card-text">${e.author}</p>\n                                <a href="#" class="btn btn-danger delete" _id="${e._id}">X</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-footer">${Object(r.format)(e.created_at)}</div>\n                </div>\n            `,t.appendChild(n)})}async addNewBook(e){await o.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("frm_book").reset()}renderMessage(e,t,n){const r=document.createElement("div");r.className=`alert alert-${t} message`,r.appendChild(document.createTextNode(e));const o=document.querySelector(".col-md-4"),a=document.querySelector("#frm_book");o.insertBefore(r,a),setTimeout(()=>{document.querySelector(".message").remove()},n)}async deleteBook(e){await o.deleteBook(e),this.renderBooks()}};document.addEventListener("DOMContentLoaded",()=>{(new a).renderBooks()}),document.getElementById("frm_book").addEventListener("submit",e=>{const t=document.getElementById("title").value,n=document.getElementById("author").value,r=document.getElementById("isbn").value,o=document.getElementById("image").files,i=new FormData;i.append("image",o[0]),i.append("title",t),i.append("author",n),i.append("isbn",r);const c=new a;c.addNewBook(i),c.renderMessage("New Book Added","success",3e3),e.preventDefault()}),document.getElementById("books_cards").addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.getAttribute("_id");const n=new a;n.deleteBook(t),n.renderMessage("Book Deleted","danger",2e3)}e.preventDefault()})}]);
//# sourceMappingURL=bundle.js.map