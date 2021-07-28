(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),o=(t(0),t(96)),i={id:"class",title:"What is a class?",sidebar_label:"What is a class?",slug:"/reference/kb-layer/class"},s={unversionedId:"reference/kb-layer/class/class",id:"reference/kb-layer/class/class",isDocsHomePage:!1,title:"What is a class?",description:"Definition",source:"@site/docs/reference/kb-layer/class/class.md",slug:"/reference/kb-layer/class",permalink:"/docs/reference/kb-layer/class",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/class.md",version:"current",sidebar_label:"What is a class?",sidebar:"docs",previous:{title:"synonym",permalink:"/docs/reference/kb-layer/general/synonym"},next:{title:"sql / name_sql / synonym_sql",permalink:"/docs/reference/kb-layer/class/sql"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"If you come from a software background, you may be familiar with the idea of a class as defined in object-oriented programming. In some sense, we are making your data more object-oriented. "),Object(o.b)("p",null,"So, a class can be defined as a category of things. The best way to understand it is to go over some examples."),Object(o.b)("p",null,"A class could be something like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Customer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Country")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Order")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Movie"))),Object(o.b)("p",null,"A class can be defined by a SQL table, column or SQL query. For instance, for a table ",Object(o.b)("inlineCode",{parentName:"p"},"customer(id, name, status)"),", Veezoo will generate 2 classes (",Object(o.b)("inlineCode",{parentName:"p"},"kb.Customer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Status"),") and a relation ",Object(o.b)("inlineCode",{parentName:"p"},"with_Status")," between them."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Let's see how classes are defined in VKL."),Object(o.b)("p",null,"File: ",Object(o.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer/class.vkl")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Customer {\n        name.en: "Customer"     \n        synonym.en: "Client"\n        extends: onto.Customer\n        \n        sql: "${ORDERS.customer_id}"\n        name_sql.en:\n          "${ORDERS.customer_firstname} || \' \' || ${ORDERS.customer_lastname}"\n    }\n}\n')),Object(o.b)("p",null,"Let's break it down in parts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"general/name"}),"name"),": The name of the class in the specified language (",Object(o.b)("inlineCode",{parentName:"li"},"en")," for English). This is the primary way to refer to this concept in a question and what gets displayed to the user in an answer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"general/synonym"}),"synonym"),': Synonyms specify alternative ways to refer to this concept in a question. In our example, we can say "how many customers", but also "how many clients" and it will mean the same.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"class/extends"}),"extends"),": By using this optional attribute, you can point your class to a pre-defined ontology class and inherit labels and other functionalities from it. Studio already does this automatically to the best of its knowledge.")),Object(o.b)("p",null,"The glue between the ",Object(o.b)("inlineCode",{parentName:"p"},"knowledge-base")," layer and the ",Object(o.b)("inlineCode",{parentName:"p"},"database")," layer is in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"class/sql"}),"sql"),". Check its reference page to learn more about it."),Object(o.b)("p",null,"There are more properties you can add to a ",Object(o.b)("inlineCode",{parentName:"p"},"class")," in VKL. Check the next pages to learn more about them."))}b.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?r.a.createElement(d,s(s({ref:n},c),{},{components:t})):r.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);