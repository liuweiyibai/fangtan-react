(this["webpackJsonpreact-h5-starter"]=this["webpackJsonpreact-h5-starter"]||[]).push([[9],{179:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(179);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},182:function(e,t,r){"use strict";var n=r(8),c=r(0),a=r(186),s=r.n(a);t.a=function(e){var t=e.children,r=e.leftIcon,a=e.rightIcon,o=e.text;return Object(n.jsx)(c.Fragment,{children:t||Object(n.jsxs)("div",{className:s.a["page-header--wrapper"],children:[r,Object(n.jsx)("p",{children:o}),a]})})}},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(181);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(i){c=!0,a=i}finally{try{n||null==o.return||o.return()}finally{if(c)throw a}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},185:function(e,t,r){e.exports={"user-login--content":"user-login--content--3RDy_","user-register--content":"user-register--content--1XlO6","user-form--btn":"user-form--btn--3Xmxx","user-form--bottom":"user-form--bottom--2u_nJ"}},217:function(e,t,r){"use strict";r.r(t);r(164);var n=r(165),c=(r(80),r(167)),a=(r(163),r(166)),s=(r(79),r(60)),o=r(183),i=r(8),u=r(0),l=r(9),b=r(35),j=r(180),f=r(182),d=r(184),h=r(185),O=r.n(h),m=function(){var e=Object(u.useRef)(null),t=Object(u.useState)(0),r=Object(o.a)(t,2),n=r[0],c=r[1];Object(u.useEffect)((function(){return function(){clearInterval(e.current)}}),[]),Object(u.useEffect)((function(){59===n?e.current=setInterval((function(){c((function(e){return e-1}))}),1e3):0===n&&clearInterval(e.current)}),[n]);var a=Object(u.useCallback)((function(){c(59)}),[]);return Object(i.jsx)(s.a,{size:"small",disabled:!!n,onClick:a,children:n?"".concat(n," s"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})};t.default=function(){var e=Object(l.g)();return Object(i.jsxs)(u.Fragment,{children:[Object(i.jsx)(f.a,{text:"\u767b\u5f55",leftIcon:Object(i.jsx)("a",{href:"#",onClick:function(){e.goBack()},children:Object(i.jsx)(j.d,{})})}),Object(i.jsx)(d.a,{children:Object(i.jsxs)("div",{className:O.a["user-register--content"],children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)(a.a,{type:"phone",labelNumber:4,placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",children:"\u624b\u673a\u53f7"}),Object(i.jsx)(a.a,{type:"number",labelNumber:4,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",extra:Object(i.jsx)(m,{}),children:"\u9a8c\u8bc1\u7801"}),Object(i.jsx)(a.a,{type:"password",labelNumber:4,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",children:"\u5bc6\u7801"}),Object(i.jsx)(a.a,{type:"password",labelNumber:4,placeholder:"\u8bf7\u786e\u8ba4\u5bc6\u7801",children:"\u786e\u8ba4\u5bc6\u7801"})]}),Object(i.jsx)(n.a,{}),Object(i.jsx)("div",{className:O.a["user-form--btn"],children:Object(i.jsx)(s.a,{children:"\u6ce8\u518c"})}),Object(i.jsx)(n.a,{}),Object(i.jsx)(n.a,{}),Object(i.jsx)("div",{className:O.a["user-form--bottom"],children:Object(i.jsxs)("p",{children:["\u5df2\u6709\u8d26\u53f7\uff1f",Object(i.jsx)(b.b,{to:"/user/login",children:"\u7acb\u5373\u767b\u5f55"})]})})]})})]})}}}]);