"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[2146],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"location",title:"onto.Location",sidebar_label:"Location",slug:"/reference/ontology/location"},c=void 0,s={unversionedId:"reference/ontology/location",id:"reference/ontology/location",title:"onto.Location",description:"Definition",source:"@site/docs/reference/ontology/location.md",sourceDirName:"reference/ontology",slug:"/reference/ontology/location",permalink:"/docs/reference/ontology/location",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/ontology/location.md",tags:[],version:"current",frontMatter:{id:"location",title:"onto.Location",sidebar_label:"Location",slug:"/reference/ontology/location"},sidebar:"docs",previous:{title:"Person",permalink:"/docs/reference/ontology/person"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Examples",id:"examples",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Usage",id:"usage",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(d,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,'Some classes may refer to locations and these are usually asked using "where". To accomplish this you will set your class to extend the ontology concept of ',(0,i.kt)("inlineCode",{parentName:"p"},"onto.Location"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Where do we have the oldest customer?" could mean "In which city do we have the oldest customer?"')),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"If you define multiple classes as Location, it may be harder for Veezoo to disambiguate.\nAlso, it could be that the behavior is not very consistent for the users, e.g. sometimes I see a country, sometimes a city."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"For this to work, you will have to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Location"),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb {\n    class Store {\n        name.en: "Store"\n        \n        from_table: STORES\n        sql: "${STORES.ID}"\n        name_sql.en: "${STORES.NAME}"\n        \n        // Make Store extend a Location\n        extends: onto.Location\n\n        ...\n    }\n}        \n')),(0,i.kt)("p",null,"Notice that sometimes your class will already be extending a concept from our ontology (",(0,i.kt)("inlineCode",{parentName:"p"},"onto"),"). Many times this will already allow you to ask 'where' questions directly. Here is a list of some of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"onto.Country"),(0,i.kt)("li",{parentName:"ul"},"onto.State"),(0,i.kt)("li",{parentName:"ul"},"onto.City"),(0,i.kt)("li",{parentName:"ul"},"onto.PostalCode")))}m.isMDXComponent=!0}}]);