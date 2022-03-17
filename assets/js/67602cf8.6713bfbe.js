"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6048],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1998:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"name",title:"name",sidebar_label:"name",slug:"/reference/kb-layer/general/name"},p=void 0,s={unversionedId:"reference/kb-layer/general/name",id:"reference/kb-layer/general/name",title:"name",description:"Definition",source:"@site/docs/reference/kb-layer/general/name.md",sourceDirName:"reference/kb-layer/general",slug:"/reference/kb-layer/general/name",permalink:"/docs/reference/kb-layer/general/name",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/general/name.md",tags:[],version:"current",frontMatter:{id:"name",title:"name",sidebar_label:"name",slug:"/reference/kb-layer/general/name"},sidebar:"docs",previous:{title:"Transform Your Data and Simplify The Knowledge Graph",permalink:"/docs/recipes/transform-data"},next:{title:"display_name",permalink:"/docs/reference/kb-layer/general/display_name"}},c={},u=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Every concept in the Knowledge Base layer has either a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," or a ",(0,i.kt)("a",{parentName:"p",href:"display_name"},"display_name"),"."),(0,i.kt)("p",null,"The way you should think about ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is as a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"display_name")," and ",(0,i.kt)("a",{parentName:"p",href:"synonym"},"synonym"),"."),(0,i.kt)("p",null,"In other words, like ",(0,i.kt)("inlineCode",{parentName:"p"},"display_name"),", it is the name that gets displayed to the user in titles, filters, autocomplete and the Knowledge Graph view.\nAnd like ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," defines how users can refer to this concept in questions."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entity")," and all ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute"},"attributes"),". It is a single String value per language (no Array is allowed) and is defined with a language tag (",(0,i.kt)("inlineCode",{parentName:"p"},"en")," for English, ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," for Italian, ",(0,i.kt)("inlineCode",{parentName:"p"},"de")," for German, ",(0,i.kt)("inlineCode",{parentName:"p"},"fr")," for French or ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," for all languages)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb {\n    class Customer {\n        name.en: "Customer" \n        name.de: "Kunde"\n        \n        ...\n    }\n}\n')),(0,i.kt)("p",null,"In the case of Entities, the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute is derived dynamically from the ",(0,i.kt)("a",{parentName:"p",href:"../class/sql"},"name_sql")," specified in the class."))}d.isMDXComponent=!0}}]);