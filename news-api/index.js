(()=>{"use strict";var e={96:(e,n,t)=>{t.d(n,{c:()=>a});var o=t(500),r=t.n(o),s=t(312),i=t.n(s)()(r());i.push([e.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const a=i},376:(e,n,t)=>{t.d(n,{c:()=>a});var o=t(500),r=t.n(o),s=t(312),i=t.n(s)()(r());i.push([e.id,".sources {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    width: 100%;\n    max-height: 10000px;\n    overflow: hidden;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n    transition: 1s ease-in-out;\n}\n\n.sources.collapse {\n    max-height: 65px;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",""]);const a=i},688:(e,n,t)=>{t.d(n,{c:()=>p});var o=t(500),r=t.n(o),s=t(312),i=t.n(s),a=t(536),c=t.n(a),l=new URL(t(696),t.b),d=i()(r()),u=c()(l);d.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    transition: 0.3s ease-in-out;\n    box-sizing: border-box;\n  }\n\nhtml {\n    scroll-behavior: smooth;\n    overflow-x: hidden;\n}\n\nbody {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n    min-height: 100vh;\n}\n\nheader {\n    padding: 20px 30px;\n    display: flex;\n    justify-content: center;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nmain {\n    height: 100%;\n    margin-bottom: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.button-more {\n    width: 60px;\n    height: 60px;\n    border-radius: 100px;\n    border: 1px solid white;\n    background-color: transparent;\n    display: block;\n}\n\nfooter {\n    background-color: #12121280;\n    backdrop-filter: blur(10px);\n    height: 100px;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    bottom: 0;\n    padding: 20px;\n    width: 100%;\n}\n\n.footer-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rss {\n    background-image: url(${u});\n    width: 121px;\n    height: 45px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    display: block;\n    color: transparent;\n}\n\n.github {\n    text-decoration: none;\n    color: #9aa0a6;\n    line-height: 45px;\n    font-size: 20px;\n    font-weight: 300;\n    transition: .3s;\n\n    &:hover {\n        color: white;\n    }\n}\n\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n`,""]);const p=d},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},308:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),p=t.n(u),f=t(936),m=t.n(f),_=t(96),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},70:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),p=t.n(u),f=t(936),m=t.n(f),_=t(376),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},504:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),p=t.n(u),f=t(936),m=t.n(f),_=t(688),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},596:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=t(s[i]);n[a].references--}for(var c=o(e,r),l=0;l<s.length;l++){var d=t(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},176:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},444:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(132)),s=t(180);n.default=class{constructor(){this.controller=new r.default,this.view=new s.AppView}start(){document.querySelector(".sources").addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},508:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(716));class s extends r.default{constructor(){super("https://newsapi.org/v2/",{apiKey:"dc648de6741749cf90b280362a75a9f2"})}}n.default=s},132:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(508));class s extends r.default{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,n){let t=e.target;const o=e.currentTarget;for(;t!==o;){if(t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==e&&e&&(o.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},n)))}t=t.parentNode}}}n.default=s},716:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});const o=t(76);n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw e.status!==o.StatusCodes.Unauthorized&&e.status!==o.StatusCodes.NotFound||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),n);let o=`${this.baseLink}${e}?`;return Object.keys(t).forEach((e=>{o+=`${e}=${t[e]}&`})),o.slice(0,-1)}load(e,n,t,o){fetch(this.makeUrl(n,o),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},180:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const r=o(t(984)),s=o(t(392));class i{constructor(){this.news=new r.default,this.sources=new s.default}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}}n.AppView=i,n.default=i},984:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(308),n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");if(null===o)throw new Error("newsItemTemp is null");n.forEach(((e,n)=>{var r;const s=o.content.cloneNode(!0);n%2&&(null===(r=s.querySelector(".news__item"))||void 0===r||r.classList.add("alt")),s.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`,s.querySelector(".news__meta-author").textContent=e.author||e.source.name,s.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),s.querySelector(".news__description-title").textContent=e.title,s.querySelector(".news__description-source").textContent=e.source.name,s.querySelector(".news__description-content").textContent=e.description,s.querySelector(".news__read-more a").setAttribute("href",e.url),t.append(s)}));const r=document.querySelector(".news");r.innerHTML="",r.appendChild(t)}}},392:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(70),n.default=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");e.forEach((e=>{const o=t.content.cloneNode(!0);if(null===o)throw new Error("sourceClone is null");o.querySelector(".source__item-name").textContent=e.name,o.querySelector(".source__item").setAttribute("data-source-id",e.id),n.append(o)}));const o=document.querySelector(".sources");o.append(n),document.querySelector(".button-more").addEventListener("click",(()=>o.classList.toggle("collapse")))}}},740:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(444));t(504),(new r.default).start()},76:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.StatusCodes=void 0,function(e){e[e.Unauthorized=401]="Unauthorized",e[e.NotFound=404]="NotFound"}(t||(n.StatusCodes=t={}))},696:(e,n,t)=>{e.exports=t.p+"ad178c0df28bc133be34.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={id:o,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,t(740)})();