(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(109)),i={id:"string",title:"string"},c={unversionedId:"reference/kb-layer/attribute/string",id:"reference/kb-layer/attribute/string",isDocsHomePage:!1,title:"string",description:"Definition",source:"@site/docs/reference/kb-layer/attribute/string.md",slug:"/reference/kb-layer/attribute/string",permalink:"/docs/reference/kb-layer/attribute/string",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/attribute/string.md",version:"current",sidebar:"docs",previous:{title:"class",permalink:"/docs/reference/kb-layer/attribute/class"},next:{title:"onto.Person",permalink:"/docs/reference/ontology/person"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"string")," is used whenever you have a column or SQL expression that returns free-text, a URL, Email or any other textual information that you may want to search on, but not refer to its values explicitly."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Let's take the example of an e-commerce shop and look at a column in our database for ",Object(a.b)("inlineCode",{parentName:"p"},"returned_comment"),", so whenever customers return an order, they can specify why in free-text. In this case, it is not natural to model it as a class with entities. A comment doesn't have a name for you to refer to it in a question. But still you may want to explore its contents. "),Object(a.b)("p",null,"This is how we would model it in the Knowledge Graph:"),Object(a.b)("p",null,"File: ",Object(a.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Order.vkl")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        string Comment {\n            name.en: "Comment"\n            synonym.en: ["Returned Comment", "Complaint", "Feedback"]\n\n            sql: "${ORDERS.returned_comment}"\n        }\n    }\n}\n')),Object(a.b)("p",null,"That's it. Like this, you can ask questions involving text search operations, e.g. \"how many customers complained about 'damaged' orders last week?\"."))}u.isMDXComponent=!0}}]);