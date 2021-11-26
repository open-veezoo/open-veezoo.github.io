"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[5381],{3905:function(e,n,t){t.d(n,{kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4352:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],s={id:"person",title:"onto.Person",sidebar_label:"Person",slug:"/reference/ontology/person"},l=void 0,c={unversionedId:"reference/ontology/person",id:"reference/ontology/person",isDocsHomePage:!1,title:"onto.Person",description:"Definition",source:"@site/docs/reference/ontology/person.md",sourceDirName:"reference/ontology",slug:"/reference/ontology/person",permalink:"/docs/reference/ontology/person",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/ontology/person.md",tags:[],version:"current",frontMatter:{id:"person",title:"onto.Person",sidebar_label:"Person",slug:"/reference/ontology/person"},sidebar:"docs",previous:{title:"string",permalink:"/docs/reference/kb-layer/attribute/string"},next:{title:"Location",permalink:"/docs/reference/ontology/location"}},u=[{value:"Definition",id:"definition",children:[{value:"Examples",id:"examples",children:[],level:3},{value:"Limitations",id:"limitations",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,'Some classes may refer to people and these are usually asked using "who".'),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Who sold most car insurance policies in my agency?" means "Which employee sold ..."'),(0,i.kt)("li",{parentName:"ul"},'"Who asked the most questions yesterday?" means "Which user asked the most questions..."')),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"If you define multiple classes as People, it may be harder for Veezoo to disambiguate.\nAlso, it could be that the behavior is not very consistent for the users, e.g. sometimes I see a customer, sometimes an employee."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"For this to work, you will have to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Person"),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb {\n    class User {\n        name.en: "User"\n        \n        from_table: USERS\n        sql: "${USERS.USER_ID}"\n        name_sql.en: "${USERS.USER_NAME}"\n        \n        // Make User extend a Person\n        extends: onto.Person\n\n        ...\n    }\n}        \n')),(0,i.kt)("p",null,"Notice that sometimes your class will already be extending a concept from our ontology (",(0,i.kt)("inlineCode",{parentName:"p"},"onto"),"). Many times this will already allow you to ask 'who' questions directly, e.g. for ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Employee")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"extends: onto.Customer"),"."))}d.isMDXComponent=!0}}]);