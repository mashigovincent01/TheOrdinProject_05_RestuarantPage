(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"\nbody{\n    margin: 0;\n    padding: 0;\n}\nheader{\n    /* background-color: #405D72; */\n    background-color: #EEEEEE;\n}\n*{\n    box-sizing: border-box;\n}\nnav{\n    \n    justify-content: center;\n    display: flex;\n    gap: 30px;\n    padding: 10px;\n    align-items: center;\n}\nnav button{\n    font-size: 20px;\n    border: none;\n    /* background-color: white; */\n    background-color: #EEEEEE;\n    /* color: white; */\n    /* border-color: #405D72; */\n    /* background-color: #405D72; */\n}\nhr{\n    margin: 0;\n}\n\n#content{\n    padding-bottom: 20px;\n    \n    /* height: calc(100vh - 80px); */\n}\nfooter{\n    padding: 15px;\n    text-align: center;\n    background-color: white;\n    /* background-color: #405D72; */\n}\n\n#hero{\n    display: grid;\n    padding: 20px;\n    background-color: #EEEEEE;\n    grid-template-columns: 1fr 1fr;\n}\n\n@media  screen and (max-width: 600px) {\n    #hero{\n        grid-template-columns: 1fr;\n    }\n    #buttons{\n        flex-direction: column;\n    }\n    \n}\n\n#hero-left div{\n    width: 100%;\n}\n#hero-left p{\n    font-size: large;\n}\n#hero-left{\n    /* background-color: blue; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#hero-right{\n    \n    padding: 20px;\n    text-align: center;\n    /* background-color: pink; */\n    \n}\n\n#hero-right img{\n    width: min(100%, 500px);\n    border-radius: 19px;\n}\n#hero-right{\n    display: flex;\n    align-items: center;\n}\n#hero p{\n\n}\n#hero h1{\n    font-size: 40px;\n    \n}\n#buttons button{\n    padding: 5px 10px;\n    border-radius: 10px;\n    width: 120px;\n    border-color: #173B45;\n    color: #EEEEEE;\n    font-size: large;\n    background-color: #173B45;\n    \n}\n#buttons{\n    \n    gap: 10px;\n    padding-top: 40px;\n    display: flex;\n    /* justify-content: center; */\n    /* background-color: lightblue; */\n}\n#menu{\n    background-color: white;\n    text-align: center;\n    padding: 40px 0px;\n}\nh3{\n    text-align: center;\n    margin: 0;\n}\n#menu-container{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    width: 90%;\n    margin: auto;\n    justify-content: center;\n}\n.menu-card img{\n    border: solid 3px #405D72;\n    border-radius: 10px;\n}\n.menu-card{\n    width: 200px;\n}\n\n#menu h2{\n    font-size: 35px;\n    margin-bottom: 40px;\n}\n#about-h1{\n    text-align: center;\n    font-size: 40px;\n}\n#about{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 20px;\n}\n#about img{\n    border-radius: 20px;\n    width: 400px;\n}\nnav button{\n    font-weight: 600;\n    color: #005C78;\n    \n}\nnav button:hover{\n    cursor: pointer;\n}\n#quote{\n    text-align: center;\n    margin-top: 20px;\n    width: 80%;\n    margin: 40px auto;\n    background-color: #405D72;\n    color: white;\n    padding: 20px;\n}\n#quote{\n    font-size: 20px;\n}\n@media screen and (max-width: 600px) {\n    #about{\n        grid-template-columns: 1fr;\n    }\n}\n#about p, #about h2{\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.container {\n    max-width: 500px;\n    margin: 50px auto;\n    background-color: #fff;\n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh2 {\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.form-group {\n    margin-bottom: 15px;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 5px;\n}\n\n.form-group input,\n.form-group textarea {\n    width: 100%;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.form-group textarea {\n    resize: vertical;\n}\n\n.container button {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    background-color: #3C5B6F;\n    color: #fff;\n    border: none;\n    cursor: pointer;\n}\nlabel{\n    font-size: 25px;\n}\n.container button:hover {\n    background-color: #088395;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var u=0;u<n.length;u++){var s=[].concat(n[u]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],u=r.base?d[0]+r.base:d[0],s=i[u]||0,l="".concat(u," ").concat(s);i[u]=s+1;var p=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),u=0;u<i.length;u++){var s=t(i[u]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),d=t.n(c),u=t(56),s=t.n(u),l=t(540),p=t.n(l),m=t(113),h=t.n(m),g=t(365),f={};f.styleTagTransform=h(),f.setAttributes=s(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),o()(g.A,f),g.A&&g.A.locals&&g.A.locals;const b=(()=>{let n=document.createElement("div");n.id="hero-left";let e=document.createElement("div"),t=document.createElement("h1");t.textContent="Vince's Restuarant";let r=document.createElement("p");r.textContent="Hungry? You've come to the right place. Enjoy our delicious, mouth-watering dishes.";let o=document.createElement("div");return o.id="buttons",o.innerHTML="<button onclick=\"location.href='#menu'\">Menu</button><button>Special</button>",e.appendChild(t),e.appendChild(r),e.appendChild(o),n.appendChild(e),n})(),v=t.p+"bf0a07ff052bafde9a30.jpg",x=(()=>{let n=document.createElement("div");return n.id="hero-right",n.innerHTML=`<img src="${v}" alt="Image"></img>`,n})(),y=(()=>{const n=document.createElement("section");return n.id="hero",n.appendChild(b),n.appendChild(x),n})(),E=(()=>{const n=document.createElement("section");return n.id="menu",n.innerHTML=`\n    \n            <h2>Our Menu</h2>\n            <div id="menu-container">\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n                <div class="menu-card">\n                    <img src=${v} alt="" width="200">\n                    <h3>Burger</h3>\n                </div>\n            </div>\n       \n    `,n})(),w=()=>{const n=document.querySelector("#content");n.innerHTML="",n.appendChild(y),n.appendChild(E)};w(),document.querySelector("#home").addEventListener("click",w),document.querySelector("#about").addEventListener("click",(()=>{const n=document.createElement("div");n.innerHTML=`\n        <h1 id="about-h1">About</h1>\n        <div id="about">\n            <div>\n                <h2>Our story</h2>\n                <p>\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cumque animi, odit voluptates expedita inventore distinctio tempore aspernatur est sed error vero placeat accusamus et. Quis repellendus libero perferendis asperiores!\n                    Eius, ea iusto ipsum exercitationem at consectetur quas dicta hic natus nostrum molestias facere. Dolor dolores similique quasi ea, consequatur facere et debitis officiis dolorem tempore ipsam vitae facilis quod.\n                </p>\n            </div>\n            <div id="about-img">\n                <img src=${v} alt="">\n            </div>\n        </div>\n        <p id="quote">\n            Note, this website was to built to apply WEBPACK SKILLS. that's why it looks bad in terms of presentation.\n        </p>\n    `,document.querySelector("#content").innerHTML="",document.querySelector("#content").appendChild(n)})),document.querySelector("#contact").addEventListener("click",(()=>{const n=document.createElement("div");n.innerHTML='\n        <div class="container">\n            <h2>Contact Us</h2>\n            <form action="" method="post">\n                <div class="form-group">\n                    <label for="name">Name</label>\n                    <input type="text" id="name" name="name" required>\n                </div>\n                <div class="form-group">\n                    <label for="email">Email</label>\n                    <input type="email" id="email" name="email" required>\n                </div>\n                <div class="form-group">\n                    <label for="message">Message</label>\n                    <textarea id="message" name="message" rows="5" required></textarea>\n                </div>\n                <button type="submit">Submit</button>\n            </form>\n        </div>\n    ',document.querySelector("#content").innerHTML="",document.querySelector("#content").appendChild(n)}))})();