"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[2484],{3905:function(e,n,r){r.d(n,{kt:function(){return u}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},y),{},{components:r})):t.createElement(f,i({ref:n},y))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},965:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var t=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"synonym",title:"synonym",sidebar_label:"synonym",slug:"/reference/kb-layer/general/synonym"},s=void 0,c={unversionedId:"reference/kb-layer/general/synonym",id:"reference/kb-layer/general/synonym",title:"synonym",description:"Definition",source:"@site/docs/reference/kb-layer/general/synonym.md",sourceDirName:"reference/kb-layer/general",slug:"/reference/kb-layer/general/synonym",permalink:"/docs/reference/kb-layer/general/synonym",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/general/synonym.md",tags:[],version:"current",frontMatter:{id:"synonym",title:"synonym",sidebar_label:"synonym",slug:"/reference/kb-layer/general/synonym"},sidebar:"docs",previous:{title:"display_name",permalink:"/docs/reference/kb-layer/general/display_name"},next:{title:"description",permalink:"/docs/reference/kb-layer/general/description"}},p=[{value:"Definition",id:"definition",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],y={toc:p};function u(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Every concept in the Knowledge Base layer can have a ",(0,o.kt)("inlineCode",{parentName:"p"},"synonym")," defined."),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"name"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"synonym")," allows the user to define (alternative) ways to refer to the concept over questions."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The property ",(0,o.kt)("inlineCode",{parentName:"p"},"synonym")," can be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"entity")," and all ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute"},"attributes"),". It is a single String value or multiple String values (as an Array) per language and is defined with a language tag (",(0,o.kt)("inlineCode",{parentName:"p"},"en")," for English, ",(0,o.kt)("inlineCode",{parentName:"p"},"it")," for Italian, ",(0,o.kt)("inlineCode",{parentName:"p"},"de")," for German, ",(0,o.kt)("inlineCode",{parentName:"p"},"fr")," for French or ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," for all languages)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Single synonym in English for a class.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class Customer {\n        name.en: "Customer" \n        \n        synonym.en: "Client"\n        ...\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Multiple synonyms in English for a class.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class Customer {\n        name.en: "Customer" \n        \n        synonym.en: ["Client", "Consumer"]\n        ...\n    }\n}\n')),(0,o.kt)("p",null,"In the case of Entities, the ",(0,o.kt)("inlineCode",{parentName:"p"},"synonym")," property can be derived dynamically from the ",(0,o.kt)("a",{parentName:"p",href:"../class/sql"},"synonym_sql")," specified in the class or manually added for each ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),"."))}u.isMDXComponent=!0}}]);