(window["webpackJsonpfont-preview"]=window["webpackJsonpfont-preview"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),s=(a(22),a(3)),l=a.n(s),i=a(4),u=a(2),m=(a(24),a(15)),p=a.n(m),v=a(16),f=a.n(v).a.create({baseURL:"https://font-glyphs-preview.herokuapp.com/api"}),d=(a(42),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"circle"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("50"),s=Object(u.a)(o,2),m=s[0],v=s[1],b=Object(n.useState)(1),w=Object(u.a)(b,2),h=w[0],E=w[1],g=Object(n.useState)("The first line of text\nThe second line of text\nThe third line of text"),x=Object(u.a)(g,2),N=x[0],j=x[1],O=Object(n.useState)(!1),k=Object(u.a)(O,2),y=k[0],S=k[1],T=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,f({method:"get",url:"images",responseType:"blob",params:{fontSize:m,handwritingStyleId:h,text:N}});case 4:t=e.sent,a=t.data,p()(a,"preview.png"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.message);case 12:S(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("fonts");case 3:t=e.sent,a=t.data,c(a.fonts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"form"},r.a.createElement("h1",null,"Font Preview"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"label"},"Font Size"),r.a.createElement("input",{className:"input",type:"text",value:m,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"label"},"Font Family"),r.a.createElement("select",{className:"select",value:h,onChange:function(e){return E(e.target.value)}},a.map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.label)})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"label"},"Text"),r.a.createElement("textarea",{className:"textarea",value:N,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",{className:"row row-button"},y?r.a.createElement(d,null):r.a.createElement("button",{className:"button",type:"button",onClick:T},"Download Image"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.3b02fc8e.chunk.js.map