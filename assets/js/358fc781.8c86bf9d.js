"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[5381],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return t?o.createElement(d,a(a({ref:n},u),{},{components:t})):o.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4352:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"person",title:"onto.Person",sidebar_label:"Person",slug:"/reference/ontology/person"},l=void 0,c={unversionedId:"reference/ontology/person",id:"reference/ontology/person",title:"onto.Person",description:"Definition",source:"@site/docs/reference/ontology/person.md",sourceDirName:"reference/ontology",slug:"/reference/ontology/person",permalink:"/docs/reference/ontology/person",draft:!1,tags:[],version:"current",frontMatter:{id:"person",title:"onto.Person",sidebar_label:"Person",slug:"/reference/ontology/person"},sidebar:"reference",previous:{title:"Evolutions",permalink:"/docs/reference/evolutions/"},next:{title:"Location",permalink:"/docs/reference/ontology/location"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Examples",id:"examples",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Usage",id:"usage",level:2}],f={toc:p},m="wrapper";function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)(m,(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,'Some classes may refer to people and these are usually asked using "who".'),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Who sold most car insurance policies in my agency?" means "Which employee sold ..."'),(0,i.kt)("li",{parentName:"ul"},'"Who asked the most questions yesterday?" means "Which user asked the most questions..."')),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"If you define multiple classes as People, it may be harder for Veezoo to disambiguate.\nAlso, it could be that the behavior is not very consistent for the users, e.g. sometimes I see a customer, sometimes an employee."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"For this to work, you will have to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Person"),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb {\n    class User {\n        name.en: "User"\n        \n        from_table: USERS\n        sql: "${USERS.USER_ID}"\n        name_sql.en: "${USERS.USER_NAME}"\n        \n        // Make User extend a Person\n        extends: onto.Person\n\n        ...\n    }\n}        \n')),(0,i.kt)("p",null,"Notice that sometimes your class will already be extending a concept from our ontology (",(0,i.kt)("inlineCode",{parentName:"p"},"onto"),"). Many times this will already allow you to ask 'who' questions directly, e.g. for ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Employee")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Customer"),"."))}d.isMDXComponent=!0}}]);