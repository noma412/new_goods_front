(this.webpackJsonpnew_goods_view=this.webpackJsonpnew_goods_view||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(4),i=n.n(s),r=(n(16),n(17),n(5)),o=n(41),l=(n(18),n(1)),j=function(e){var t=Object(c.useState)(),n=Object(r.a)(t,2),s=n[0],i=n[1],j=Object(c.useState)(1),u=Object(r.a)(j,2),b=u[0],d=u[1],m=Object(c.useState)(1),h=Object(r.a)(m,2),f=h[0],O=h[1];Object(c.useEffect)((function(){e.name&&p(1)}),[e.name]);var p=function(e){O(e),x(e)},x=function(t){window.scrollTo({top:0}),fetch("".concat("https://3ld1dn462c.execute-api.ap-northeast-1.amazonaws.com/","/default/new-goods-get-prod-func?name=").concat(e.name,"&offset=").concat(50*(t-1)),{method:"GET"}).then((function(e){return e.json()})).then((function(e){d(Math.ceil(e.num/50)),i(e.data)}))};return Object(l.jsxs)(a.a.Fragment,{children:[s&&Object(l.jsx)(o.a,{count:b,color:"primary",onChange:function(e,t){return p(t)},page:f,className:"topPagenation"}),Object(l.jsx)("ul",{className:"food-list",children:s&&s.map((function(e){return Object(l.jsx)("li",{className:e.name,children:Object(l.jsxs)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:e.img,alt:"",loading:"lazy"})}),Object(l.jsx)("p",{className:"name",children:e.name}),Object(l.jsx)("p",{className:"ttl",children:e.title}),Object(l.jsx)("p",{className:"kcal",children:e.kcal}),Object(l.jsx)("p",{className:"price",children:e.price}),Object(l.jsxs)("p",{className:"date",children:[Object(l.jsx)("span",{children:"\u66f4\u65b0\u65e5"}),Object(l.jsx)("span",{children:e.date.substring(0,10).replaceAll("-","/")})]})]})},e.id)}))}),s&&Object(l.jsx)(o.a,{count:b,color:"primary",onChange:function(e,t){return p(t)},page:f,className:"bottomPagenation"})]})};n(24);var u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=function(e){n!==e&&a(e)};return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{children:"\u65b0\u5546\u54c1"}),Object(l.jsxs)("section",{className:"btn-area",children:[Object(l.jsx)("button",{onClick:function(){return s("SEVEN-ELEVEN")},className:"seven-eleven",children:"\u30bb\u30d6\u30f3\u30a4\u30ec\u30d6\u30f3"}),Object(l.jsx)("button",{onClick:function(){return s("LAWSON")},className:"lawson",children:"\u30ed\u30fc\u30bd\u30f3"}),Object(l.jsx)("button",{onClick:function(){return s("FamilyMart")},className:"familymart",children:"\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8"})]}),Object(l.jsx)(j,{name:n})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()}},[[25,1,2]]]);
//# sourceMappingURL=main.43d17a85.chunk.js.map