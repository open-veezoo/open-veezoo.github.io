"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[5890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"string",title:"string"},c=void 0,l={unversionedId:"reference/kb-layer/attribute/string",id:"reference/kb-layer/attribute/string",title:"string",description:"Definition",source:"@site/docs/reference/kb-layer/attribute/string.md",sourceDirName:"reference/kb-layer/attribute",slug:"/reference/kb-layer/attribute/string",permalink:"/docs/reference/kb-layer/attribute/string",draft:!1,tags:[],version:"current",frontMatter:{id:"string",title:"string"},sidebar:"reference",previous:{title:"class",permalink:"/docs/reference/kb-layer/attribute/class"},next:{title:"date_interval",permalink:"/docs/reference/kb-layer/attribute/date_interval"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is used whenever you have a column or SQL expression that returns free-text, a URL, Email or any other textual information that you may want to search on, but not refer to its values explicitly."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's take the example of an e-commerce shop and look at a column in our database for ",(0,a.kt)("inlineCode",{parentName:"p"},"returned_comment"),", so whenever customers return an order, they can specify why in free-text. In this case, it is not natural to model it as a class with entities. A comment doesn't have a name for you to refer to it in a question. But still you may want to explore its contents. "),(0,a.kt)("p",null,"This is how we would model it in the Knowledge Graph:"),(0,a.kt)("p",null,"File: ",(0,a.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Order.vkl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        string Comment {\n            name.en: "Comment"\n            synonym.en: ["Returned Comment", "Complaint", "Feedback"]\n\n            sql: "${ORDERS.returned_comment}"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"That's it. Like this, you can ask questions involving text search operations, e.g. \"how many customers complained about 'damaged' orders last week?\"."))}d.isMDXComponent=!0}}]);