"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[2326],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"entity",title:"What is an entity?"},s=void 0,c={unversionedId:"reference/kb-layer/entity/entity",id:"reference/kb-layer/entity/entity",isDocsHomePage:!1,title:"What is an entity?",description:"Definition",source:"@site/docs/reference/kb-layer/entity/entity.md",sourceDirName:"reference/kb-layer/entity",slug:"/reference/kb-layer/entity/entity",permalink:"/docs/reference/kb-layer/entity/entity",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/entity/entity.md",tags:[],version:"current",frontMatter:{id:"entity",title:"What is an entity?"},sidebar:"docs",previous:{title:"extends",permalink:"/docs/reference/kb-layer/class/extends"},next:{title:"What is a relationship?",permalink:"/docs/reference/kb-layer/relationship/relationship"}},u=[{value:"Definition",id:"definition",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"An entity is an instantiation or an individual of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/class/class"},"class"),"."),(0,i.kt)("p",null,"A class could be something like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Customer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Country")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Order")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Movie"))),(0,i.kt)("p",null,'Now, each of these classes may have instantiations of it. In programming, we call these "objects". In VKL, we call them ',(0,i.kt)("inlineCode",{parentName:"p"},"entities"),".\nSo following our example, we may have entities like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Till_Haug")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Customer")," "),(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Brazil")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Country")),(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Batman")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Movie"))),(0,i.kt)("p",null,"But what about ",(0,i.kt)("inlineCode",{parentName:"p"},"Order"),"? For classes like ",(0,i.kt)("inlineCode",{parentName:"p"},"Order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", it makes sense usually to model it as a class without entities. Prefer to use classes with entities when there is a way to refer to an individual of this class in a question."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Entities are generated based on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/class/sql"},"sql of a class"),". Check its reference page to learn more about it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb.Customer {\n    entity 00042_Arthur_Dent_1234 {         \n        name.en: "[00042] Arthur Dent"\n\n        synonym.en: "Arthur Dent"\n\n        id: "00042"\n    }\n    ...\n}\n\n')),(0,i.kt)("p",null,"It is important to notice that entities, like any other Knowledge Graph concept, lives only in your Knowledge Graph. This means that whatever changes you make to its properties, like ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/general/name"},"name")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/general/synonym"},"synonym"),", will not be written to your database."),(0,i.kt)("p",null,"In fact, Veezoo does not require any write access to your database and we recommend using read-only database credentials."))}d.isMDXComponent=!0}}]);