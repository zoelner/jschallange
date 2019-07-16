(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),l=t(16),c=t(25),u=(t(73),t(85),t(86),t(6)),d=t(7);t(87);function p(){var n=Object(u.a)(["\n  * {\n    margin:0;\n    padding:0;\n    outline:0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    background: #141f35;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body,input,button {\n    color: #222;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  button{\n    cursor: pointer;\n  }\n"]);return p=function(){return n},n}var s=Object(d.a)(p()),m=t(21),f=t(17),x=t(61),b=t(28);function g(){var n=Object(u.a)(["\n  list-style: none;\n  margin-top: 30px;\n\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    & + li {\n      border-top: 1px solid #eee;\n    }\n\n    span {\n      color: #999;\n    }\n\n    div {\n      align-items: center;\n      display: flex;\n\n      a {\n        color: #9966ff;\n        text-decoration: none;\n        margin-right: 15px;\n      }\n    }\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return v=function(){return n},n}function E(){var n=Object(u.a)(["\n  background: #141f35;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return E=function(){return n},n}function h(){var n=Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(u.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return j=function(){return n},n}var O=d.c.form(j()),y=Object(d.d)(h()),w=d.c.button.attrs(function(n){return{type:"submit",disabled:n.loading}})(E(),function(n){return n.loading&&Object(d.b)(v(),y)}),k=d.c.ul(g());function z(){var n=Object(u.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]);return z=function(){return n},n}var D=d.c.div(z()),F="@movie/ADD_REQUEST",R="@movie/ADD_SUCCESS",S="@movie/ADD_FAILED",T="@movie/REMOVE";function C(n){return{type:F,title:n}}function A(n){return{type:S,movie:n}}function I(){var n=Object(r.useState)(""),e=Object(x.a)(n,2),t=e[0],o=e[1],i=Object(l.c)(function(n){return n.movie.data}),c=Object(l.c)(function(n){return n.movie.loading}),u=Object(l.b)();return a.a.createElement(D,null,a.a.createElement("h1",null,a.a.createElement(b.a,null),"Filmes"),a.a.createElement(O,{onSubmit:function(n){n.preventDefault(),u(C(t)),o("")}},a.a.createElement("input",{type:"text",placeholder:"Procurar Filme",value:t,onChange:function(n){o(n.target.value)}}),a.a.createElement(w,{loading:c},c?a.a.createElement(b.c,{color:"#FFF",size:14}):a.a.createElement(b.b,{color:"#FFF",size:14}))),a.a.createElement(k,null,i.map(function(n){return a.a.createElement("li",{key:n.Title},a.a.createElement("span",null,n.Title),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/movie/".concat(encodeURIComponent(n.Title))},"Detalhes"),a.a.createElement(b.d,{size:14,color:"#9966ff",onClick:function(){return u((e=n.Title,{type:T,title:e}));var e}})))})))}function U(){var n=Object(u.a)(["\n  padding-top: 15px;\n  margin-top: 30px;\n  border-top: 1px solid #eee;\n  list-style: none;\n\n  h1 {\n    display: block;\n    margin-bottom: 15px;\n  }\n\n  li {\n    display: flex;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n\n    & + li {\n      margin-top: 10px;\n    }\n\n    div {\n      flex: 1;\n      margin-left: 15px;\n\n      strong {\n        font-size: 16px;\n        color: #333;\n\n          &:hover {\n            color: #9966ff;\n          }\n        }\n\n        span {\n          background: #eee;\n          color: #333;\n          border-radius: 2px;\n          font-size: 12px;\n          font-weight: 600;\n          height: 20px;\n          padding: 4px 5px;\n          margin-left: 10px;\n        }\n      }\n      p {\n        margin-top: 5px;\n        font-size: 12px;\n        background: #eee;\n        color: #333;\n        border-radius: 4px;\n        padding: 2px 3px;\n      }\n    }\n  }\n"]);return U=function(){return n},n}function L(){var n=Object(u.a)(["\n  margin-top: 40px;\n\n  table {\n    border: 1px solid #eee;\n    border-radius: 4px;\n\n    tr th,\n    tr td {\n      text-align: left;\n      padding: 2px 6px;\n    }\n  }\n"]);return L=function(){return n},n}function P(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: #9966ff;\n    font-size: 16px;\n    text-decoration: none;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    flex: 1;\n\n    img {\n      width: 120px;\n      border-radius: 4px;\n      margin-top: 20px;\n      margin-right: 15px;\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        font-size: 24px;\n        margin-top: 10px;\n      }\n\n      p {\n        margin-top: 5px;\n        font-size: 14px;\n        color: #666;\n        line-height: 1.4;\n        text-align: center;\n        max-width: 400px;\n      }\n    }\n  }\n"]);return P=function(){return n},n}function V(){var n=Object(u.a)(["\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return V=function(){return n},n}var _=d.c.div(V()),B=d.c.header(P()),J=d.c.div(L()),M=d.c.ul(U());function W(n){var e=n.match,t=decodeURIComponent(e.params.movie),o=Object(l.c)(function(n){return n.movie.data.find(function(n){return n.Title===t})}),i=Object(l.b)();return Object(r.useEffect)(function(){o||i(C(t))}),o?a.a.createElement(D,null,a.a.createElement(B,null,a.a.createElement(m.b,{to:"/"},"Voltar aos filmes"),a.a.createElement("div",null,a.a.createElement("img",{src:o.Poster,alt:o.Title}),a.a.createElement("div",null,a.a.createElement("h1",null,o.Title," - ",o.Year),a.a.createElement("p",null,o.Plot))),a.a.createElement(J,null,a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Diretor"),a.a.createElement("td",null,o.Director)),a.a.createElement("tr",null,a.a.createElement("th",null,"Estrelas"),a.a.createElement("td",null,o.Actors)),a.a.createElement("tr",null,a.a.createElement("th",null,"Lan\xe7amento"),a.a.createElement("td",null,o.Released)),a.a.createElement("tr",null,a.a.createElement("th",null,"Dura\xe7\xe3o"),a.a.createElement("td",null,o.Runtime)))))),a.a.createElement(M,null,a.a.createElement("h1",null," Rating "),o.Ratings.map(function(n){return a.a.createElement("li",{key:String(n.Source)},a.a.createElement("div",null,a.a.createElement("strong",null,n.Source,a.a.createElement("span",null,n.Value))))}))):a.a.createElement(_,null,"Carregando")}function H(){return a.a.createElement(m.a,null,a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:I}),a.a.createElement(f.a,{path:"/movie/:movie",component:W})))}var Q=t(14),Y=t(60),$=t(26),q={data:[],loading:!1};var G=Object(Q.c)({movie:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object($.a)(n,function(n){n.loading=!0});case R:return Object($.a)(n,function(n){var t=e.movie;n.data.push(t),n.loading=!1});case S:return Object($.a)(n,function(n){n.loading=!1});case T:return Object($.a)(n,function(n){var t=n.data.findIndex(function(n){return n.Title===e.title});t>=0&&n.data.splice(t,1)});default:return n}}}),K=t(22),N=t.n(K),X=t(13),Z=t(57),nn=t.n(Z).a.create({baseURL:"http://www.omdbapi.com"}),en=N.a.mark(tn);function tn(n){var e,t;return N.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.title,r.next=3,Object(X.select)(function(n){return n.movie.data.find(function(n){return n.title===e})});case 3:if(!r.sent){r.next=6;break}return r.abrupt("return");case 6:return r.prev=6,r.next=9,Object(X.call)(nn.get,"?apikey=eebcf44c&t=".concat(e));case 9:if(!(t=r.sent).data.Error){r.next=13;break}return c.b.warning("Filme n\xe3o encontrado!"),r.abrupt("return");case 13:return r.next=15,Object(X.put)((a=t.data,{type:R,movie:a}));case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(6),c.b.error("Oopps... Alguma coisa deu errado.");case 20:return r.prev=20,r.next=23,Object(X.put)(A());case 23:return r.finish(20);case 24:case"end":return r.stop()}var a},en,null,[[6,17,20,24]])}var rn=Object(X.all)([Object(X.takeLatest)(F,tn)]),an=N.a.mark(on);function on(){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(X.all)([rn]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},an)}var ln=Object(Y.a)({sagaMonitor:null}),cn=Object(Q.a)(ln),un=Object(Q.e)(G,cn);ln.run(on);var dn=un;var pn=function(){return a.a.createElement(l.a,{store:dn},a.a.createElement(H,null),a.a.createElement(s,null),a.a.createElement(c.a,{autoClose:3e3}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(pn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},64:function(n,e,t){n.exports=t(108)}},[[64,1,2]]]);
//# sourceMappingURL=main.e301cac2.chunk.js.map