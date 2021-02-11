(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(96)),o={id:"db-layer",title:"Database Layer",sidebar_label:"Database Layer",slug:"/db-layer"},c={unversionedId:"fundamentals/db-layer",id:"fundamentals/db-layer",isDocsHomePage:!1,title:"Database Layer",description:"The database layer (db) is a very thin layer that contains exactly how the data is stored in the underlying database system.",source:"@site/docs/fundamentals/db-layer.md",slug:"/db-layer",permalink:"/docs/db-layer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fundamentals/db-layer.md",version:"current",sidebar_label:"Database Layer",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Knowledge Base Layer",permalink:"/docs/kb-layer"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"database")," layer (db) is a very thin layer that contains exactly how the data is stored in the underlying database system."),Object(i.b)("p",null,"It involves concepts like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Schema"),Object(i.b)("li",{parentName:"ul"},"Tables"),Object(i.b)("li",{parentName:"ul"},"Columns"),Object(i.b)("li",{parentName:"ul"},"Primary and foreign keys")),Object(i.b)("p",null,"Here is an example of a table definition in VKL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'db.postgres.movie_db.public {\n    table ORDERS {\n        identifier: "ORDERS"\n        \n        column id {\n            primitive_type: "INTEGER"\n            identifier: "id"\n            is_primary_key: true\n        }\n\n        column customer_id {\n            primitive_type: "INTEGER"\n            identifier: "customer_id"\n        }\n\n        column customer_firstname {\n            primitive_type: "VARCHAR"\n            identifier: "customer_firstname"\n        }\n\n        column customer_lastname {\n            primitive_type: "VARCHAR"\n            identifier: "customer_lastname"\n        }            \n        \n        column country {\n            primitive_type: "VARCHAR"\n            identifier: "country"\n        }\n        \n        column date {\n            primitive_type: "DATE"\n            identifier: "date"\n        }\n        ...\n    }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"identifier")," is a SQL identifier, i.e. a column/table/schema/database name. These identifiers are used by Veezoo to generate SQL code."),Object(i.b)("p",null,"Let's see what's next."))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);