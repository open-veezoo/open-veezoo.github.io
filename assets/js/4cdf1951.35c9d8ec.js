"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9713],{3905:function(e,t,n){n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"db-layer",title:"Database Layer",sidebar_label:"Database Layer",slug:"/db-layer"},s=void 0,c={unversionedId:"getting-started/db-layer",id:"getting-started/db-layer",title:"Database Layer",description:"The database layer (db) is a very thin layer that contains exactly how the data is stored in the underlying database system.",source:"@site/docs/getting-started/db-layer.md",sourceDirName:"getting-started",slug:"/db-layer",permalink:"/docs/db-layer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/db-layer.md",tags:[],version:"current",frontMatter:{id:"db-layer",title:"Database Layer",sidebar_label:"Database Layer",slug:"/db-layer"},sidebar:"docs",previous:{title:"Intro to the Knowledge Graph",permalink:"/docs/intro-to-kg"},next:{title:"Knowledge Base Layer",permalink:"/docs/kb-layer"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," layer (db) is a very thin layer that contains exactly how the data is stored in the underlying database system."),(0,i.kt)("p",null,"It involves concepts like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schema"),(0,i.kt)("li",{parentName:"ul"},"Tables"),(0,i.kt)("li",{parentName:"ul"},"Columns"),(0,i.kt)("li",{parentName:"ul"},"Primary and foreign keys")),(0,i.kt)("p",null,"Here is an example of a table definition in VKL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'db.postgres.movie_db.public {\n    table ORDERS {\n        identifier: "ORDERS"\n        \n        column id {\n            primitive_type: "INTEGER"\n            identifier: "id"\n            is_primary_key: true\n        }\n\n        column customer_id {\n            primitive_type: "INTEGER"\n            identifier: "customer_id"\n        }\n\n        column customer_firstname {\n            primitive_type: "VARCHAR"\n            identifier: "customer_firstname"\n        }\n\n        column customer_lastname {\n            primitive_type: "VARCHAR"\n            identifier: "customer_lastname"\n        }            \n        \n        column country {\n            primitive_type: "VARCHAR"\n            identifier: "country"\n        }\n        \n        column date {\n            primitive_type: "DATE"\n            identifier: "date"\n        }\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," is a SQL identifier, i.e. a column/table/schema/database name. These identifiers are used by Veezoo to generate SQL code."),(0,i.kt)("p",null,"Let's see what's next."))}p.isMDXComponent=!0}}]);