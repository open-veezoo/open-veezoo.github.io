(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,O=d["".concat(o,".").concat(p)]||d[p]||s[p]||l;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(102)),o={id:"intro-to-vkl",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"fundamentals/intro-to-vkl",id:"fundamentals/intro-to-vkl",isDocsHomePage:!1,title:"Introduction",description:"What is a Knowledge Graph?",source:"@site/docs/fundamentals/intro-to-vkl.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fundamentals/intro-to-vkl.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Database Layer",permalink:"/docs/db-layer"}},b=[{value:"What is a Knowledge Graph?",id:"what-is-a-knowledge-graph",children:[]},{value:"An Example",id:"an-example",children:[]}],i={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"what-is-a-knowledge-graph"},"What is a Knowledge Graph?"),Object(l.b)("p",null,"A Knowledge Graph is a version-controlled semantic model of a dataset, which is used by Veezoo to understand your question and generate the correct SQL query that answers it."),Object(l.b)("p",null,"It is represented as a set of files using a modelling language called VKL, the Veezoo Knowledge Language. The Veezoo Knowledge Language is a semantic modelling language that is based on SQL, allowing you to model and document your data in a way that business users and Veezoo can understand."),Object(l.b)("p",null,"Let's go over a simple example to explore the basics of VKL and how you can use it to answer your questions."),Object(l.b)("h2",{id:"an-example"},"An Example"),Object(l.b)("p",null,"Let's say you are a data analyst at Hitchhiker, a small sci-fi movie e-commerce website, and you have the following flat table, called ORDERS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_id"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_firstname"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_lastname"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"country"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"movie"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"date"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"returned"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Haug"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CH"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Hitchhiker's Guide to the Galaxy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-10-29"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Albert"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Einstein"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clockwork Orange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2019-08-09"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Haug"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CH"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2001: A Space Odyssey"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-10-30"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1003"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Michael"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jackson"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interstellar"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-09-20"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(l.b)("p",null,"You want to make it available to your manager in an easy way, so you can work on some cool prediction models, instead of answering his reporting questions."),Object(l.b)("p",null,"Thankfully, you have Veezoo."),Object(l.b)("p",null,"You open Veezoo, go to Studio and connect it to this flat table on your PostgreSQL database. In 1 click, Studio creates the following Knowledge Graph for you."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"hitchhiker\n\u251c\u2500\u2500 database\n\u2502\xa0\xa0 \u2514\u2500\u2500 postgres\n\u2502\xa0\xa0     \u2514\u2500\u2500 movie_db\n\u2502\xa0\xa0         \u251c\u2500\u2500 database.vkl\n\u2502\xa0\xa0         \u2514\u2500\u2500 ORDERS\n\u2502\xa0\xa0             \u2514\u2500\u2500 table.vkl\n\u2514\u2500\u2500 knowledge-base\n    \u2514\u2500\u2500 classes  \n    \xa0\xa0  \u2514\u2500\u2500 Order\n    \xa0\xa0      \u251c\u2500\u2500 entities  \n    \xa0\xa0      |     \u251c\u2500\u2500 Country.vkl\n    \xa0\xa0      |     \u251c\u2500\u2500 Customer.vkl\n    \xa0\xa0      |     \u2514\u2500\u2500 Movie.vkl\n    \xa0\xa0      \u2514\u2500\u2500 class.vkl\n")),Object(l.b)("p",null,"Now, first of all: ",Object(l.b)("em",{parentName:"p"},"Don't Panic!")," "),Object(l.b)("p",null,"We will explore together the essence of this Knowledge Graph layer-by-layer, so you can get quickly up and running."),Object(l.b)("p",null,"The Knowledge Graph is divided into different layers. We will focus here on the two most important ones: ",Object(l.b)("inlineCode",{parentName:"p"},"knowledge-base")," and ",Object(l.b)("inlineCode",{parentName:"p"},"database")," layers."))}u.isMDXComponent=!0}}]);