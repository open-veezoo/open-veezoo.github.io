(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,f=p["".concat(i,".").concat(y)]||p[y]||d[y]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(102)),i={id:"display_with",title:"When I say X (e.g. customers), I want to see Y (e.g. nationality) as well",sidebar_label:"When I say X (e.g. customers), I want to see Y (e.g. nationality) as well",slug:"/recipes/display_with"},s={unversionedId:"recipes/display_with",id:"recipes/display_with",isDocsHomePage:!1,title:"When I say X (e.g. customers), I want to see Y (e.g. nationality) as well",description:"When to Use It",source:"@site/docs/recipes/display_with.md",slug:"/recipes/display_with",permalink:"/docs/recipes/display_with",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/recipes/display_with.md",version:"current",sidebar_label:"When I say X (e.g. customers), I want to see Y (e.g. nationality) as well"},c=[{value:"When to Use It",id:"when-to-use-it",children:[]},{value:"How to Use It",id:"how-to-use-it",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"when-to-use-it"},"When to Use It"),Object(a.b)("p",null,"When you ask a question involving a class, sometimes you will want to see additional information to it by default."),Object(a.b)("p",null,"Example: When you ask 'show me all orders in the last 2 weeks', you may want to see the customer name that ordered it, the total amount, etc."),Object(a.b)("h2",{id:"how-to-use-it"},"How to Use It"),Object(a.b)("p",null,"Please check our docs on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../reference/kb-layer/class/display_with"}),"display_with"),"."))}u.isMDXComponent=!0}}]);