(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(112),s=t(104),r=t(42),i=t(118),o=t(106),m=t.n(o),u=t(108),d=t(91),h=t.n(d);const b=24;function p({item:e,onItemClick:a,collapsible:t}){const{items:c,href:s,label:r,type:i}=e,[o,d]=Object(n.useState)(e.collapsed),[h,b]=Object(n.useState)(null);e.collapsed!==h&&(b(e.collapsed),d(e.collapsed));const E=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return c.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":o}),key:r},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?E:void 0},r),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(p,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:s,onClick:a},r))}}var E=function(e){const[a,t]=Object(n.useState)(!1),{docsSidebars:c,location:s,sidebar:r,sidebarCollapsible:i}=e;if(!r)return null;const o=c[r];if(!o)throw new Error(`Cannot find the sidebar "${r}" in the sidebar config!`);return i&&o.forEach(e=>(function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t.pathname.replace(/\/$/,"")}})(e,s)),l.a.createElement("div",{className:h.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:m()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:b,width:b,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},o.map(e=>l.a.createElement(p,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:i})))))},f=t(1),k=t(136);t(93);var v=e=>({id:a,...t})=>a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:a}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${a}`,title:"Direct link to heading"},"#"),t.children):l.a.createElement(e,t),N=t(94),_=t.n(N),w={code:e=>{const{children:a}=e;return"string"==typeof a?l.a.createElement(k.a,e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(u.a,e),pre:e=>l.a.createElement("pre",Object(f.a)({className:_.a.mdxCodeBlock},e)),h1:v("h1"),h2:v("h2"),h3:v("h3"),h4:v("h4"),h5:v("h5"),h6:v("h6")},g=t(122),C=t(123),y=t(95),M=t.n(y);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,{permalinkToSidebar:o,docsSidebars:m,version:u}=t,d=o[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:h={}}={}}=Object(s.a)(),{sidebarCollapsible:b=!0}=h;return p=a.routes,f=n.pathname,p.some(e=>Object(C.a)(f,e))?l.a.createElement(i.a,{version:u},l.a.createElement("div",{className:M.a.docPage},d&&l.a.createElement("div",{className:M.a.docSidebarContainer},l.a.createElement(E,{docsSidebars:m,location:n,sidebar:d,sidebarCollapsible:b})),l.a.createElement("main",{className:M.a.docMainContainer},l.a.createElement(c.a,{components:w},Object(r.a)(a.routes))))):l.a.createElement(g.default,e);var p,f}},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(118);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);