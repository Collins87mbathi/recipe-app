(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),r=t(6),a=t.n(r),o=(t(12),t(4)),s=t.n(o),l=t(7),u=t(2),d=t(5),f=t.n(d),h=t(0),p=function(e){var n=e.title,t=e.calories,c=e.image,i=e.ingredients;return Object(h.jsxs)("div",{className:f.a.recipe,children:[Object(h.jsx)("h1",{children:n}),Object(h.jsx)("ol",{children:i.map((function(e){return Object(h.jsx)("li",{children:e.text})}))}),Object(h.jsx)("p",{children:t}),Object(h.jsx)("img",{className:f.a.image,src:c,alt:""})]})};var b=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),o=a[0],d=a[1],f=Object(c.useState)("chicken"),b=Object(u.a)(f,2),g=b[0],j=b[1],v=function(){var e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("24db878f","&app_key=").concat("8f2be69a71c33ec80095fadb5dbed756"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,i(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[g]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(o),d("")},className:"search-form",children:[Object(h.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(h.jsx)("div",{className:"container",children:t.map((function(e){return Object(h.jsx)(p,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):j(n,e)}))}}(),v()},5:function(e,n,t){e.exports={recipe:"recipe_recipe__29FAz",image:"recipe_image__1uKUz"}}},[[15,1,2]]]);
//# sourceMappingURL=main.65170559.chunk.js.map