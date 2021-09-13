(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(108)),o={id:"attribute",title:"What is an attribute?",sidebar_label:"What is an attribute?",slug:"/reference/kb-layer/attribute"},b={unversionedId:"reference/kb-layer/attribute/attribute",id:"reference/kb-layer/attribute/attribute",isDocsHomePage:!1,title:"What is an attribute?",description:"Definition",source:"@site/docs/reference/kb-layer/attribute/attribute.md",slug:"/reference/kb-layer/attribute",permalink:"/docs/reference/kb-layer/attribute",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/attribute/attribute.md",version:"current",sidebar_label:"What is an attribute?",sidebar:"docs",previous:{title:"sql",permalink:"/docs/reference/kb-layer/relationship/sql"},next:{title:"date",permalink:"/docs/reference/kb-layer/attribute/date"}},c=[{value:"Definition",id:"definition",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"Attributes are data properties (or dimensions/measures) of a class and they can be of the following types: ",Object(i.b)("inlineCode",{parentName:"p"},"double"),", ",Object(i.b)("inlineCode",{parentName:"p"},"integer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"date"),", ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(i.b)("inlineCode",{parentName:"p"},"string")," and ",Object(i.b)("inlineCode",{parentName:"p"},"class")," as well."),Object(i.b)("p",null,"There is no keyword ",Object(i.b)("inlineCode",{parentName:"p"},"attribute")," in VKL, you just use directly the type."),Object(i.b)("p",null,"Example:"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," attribute of the class ",Object(i.b)("inlineCode",{parentName:"p"},"Order"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        boolean Returned {\n            name.en: "Returned"\n\n            sql: "${ORDERS.returned} = \'yes\'"\n        }\n    }\n}\n')),Object(i.b)("p",null,"Check out the docs for each kind of attribute:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"attribute/date"}),"date")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"attribute/double-integer"}),"double/integer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"attribute/boolean"}),"boolean")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"attribute/class"}),"class")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"attribute/string"}),"string"))))}u.isMDXComponent=!0},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return r?a.a.createElement(f,b(b({ref:t},l),{},{components:r})):a.a.createElement(f,b({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);