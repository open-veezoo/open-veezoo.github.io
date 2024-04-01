"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9642],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5433:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"ordinal-class",title:"Ordinal Class",slug:"/reference/kb-layer/class/ordinal-class"},s=void 0,c={unversionedId:"reference/kb-layer/class/ordinal-class",id:"reference/kb-layer/class/ordinal-class",title:"Ordinal Class",description:"Overview",source:"@site/docs/reference/kb-layer/class/ordinal-class.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/class/ordinal-class",permalink:"/docs/reference/kb-layer/class/ordinal-class",draft:!1,tags:[],version:"current",frontMatter:{id:"ordinal-class",title:"Ordinal Class",slug:"/reference/kb-layer/class/ordinal-class"},sidebar:"reference",previous:{title:"Hierarchy Class",permalink:"/docs/reference/kb-layer/class/hierarchy-class"},next:{title:"Subclass",permalink:"/docs/reference/kb-layer/subclass"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Modeling Ordinal Classes",id:"modeling-ordinal-classes",level:2},{value:"Annotating Entities with Order",id:"annotating-entities-with-order",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:u},f="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)(f,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In Veezoo, you can model ordinal classes, which have a defined ordering for their entities. Examples of ordinal classes include age groups, difficulties, or priorities. Modeling ordinal classes helps create more intuitive visualizations and, in the future, will allow answering questions that involve ordering."),(0,a.kt)("iframe",{width:"800",height:"500",src:"https://www.youtube.com/embed/HerVHwmwDjw?si=0bbsan7k0l94DMsD",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"modeling-ordinal-classes"},"Modeling Ordinal Classes"),(0,a.kt)("p",null,"To model an ordinal class, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"tag: KB_Ordinal")," to the class definition. For example, here is the definition for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Priority")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class Priority {\n   name.en: "Priority"\n   tag: KB_Ordinal\n   sql: "${issue.priority}"\n}\n')),(0,a.kt)("h3",{id:"annotating-entities-with-order"},"Annotating Entities with Order"),(0,a.kt)("p",null,"For each entity in the ordinal class, you need to manually annotate them with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sort_id")," that determines their order. Here's an example for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Priority")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'kb.Priority {\n\n  entity Low {\n    name.en: "Low"\n    id: "Low"\n    sort_id: 0\n  }\n\n  entity Medium {\n    name.en: "Medium"\n    id: "Medium"\n    sort_id: 1\n  }\n  \n  entity High {\n    name.en: "High"\n    id: "High"\n    sort_id: 2\n  }\n\n}\n')),(0,a.kt)("p",null,"In this example, we assign a ",(0,a.kt)("inlineCode",{parentName:"p"},"sort_id")," to each entity within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Priority")," class. Lower ",(0,a.kt)("inlineCode",{parentName:"p"},"sort_id")," values indicate lower priority, and higher values indicate higher priority. This ordering will be used when visualizing data in charts."),(0,a.kt)("h2",{id:"benefits"},"Benefits"),(0,a.kt)("p",null,"Modeling ordinal classes in Veezoo provides the following benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Intuitive visualizations"),": By defining a natural ordering for ordinal classes, the visualizations created in Veezoo will be more intuitive and easier to interpret."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Future question-answering capabilities"),': In the future, Veezoo aims to support answering questions that involve the ordinal ordering, such as "Show me all issues with priority higher than Low."')),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Currently, Veezoo does not support the following features for ordinal classes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Answering questions involving ordinal ordering (e.g., "Show me all issues with priority higher than Low").'),(0,a.kt)("li",{parentName:"ol"},"Reversing the ordinal ordering in the frontend, such as in tables.")))}m.isMDXComponent=!0}}]);