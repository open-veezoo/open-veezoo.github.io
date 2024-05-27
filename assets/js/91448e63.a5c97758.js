"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[4947],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7844:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_label:"\u2699\ufe0f description"},c=void 0,s={unversionedId:"reference/kb-layer/general/description",id:"reference/kb-layer/general/description",title:"description",description:"Definition",source:"@site/docs/reference/kb-layer/general/description.md",sourceDirName:"reference/kb-layer/general",slug:"/reference/kb-layer/general/description",permalink:"/docs/reference/kb-layer/general/description",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u2699\ufe0f description"},sidebar:"reference",previous:{title:"\u2699\ufe0f synonym",permalink:"/docs/reference/kb-layer/general/synonym"},next:{title:"\u2699\ufe0f join",permalink:"/docs/reference/kb-layer/general/join"}},p={},u=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u},f="wrapper";function m(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(f,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," is a short text that explains to the business user what a given concept (e.g. class, relationship, entity, attribute) means."),(0,a.kt)("p",null,"This is presented to the user in the sidebar, when the user clicks on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Knowledge Graph")," tab and hovers over the concepts."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The property ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"entity")," and all ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute"},"attributes"),". It is a single String value per language (no Array is allowed) and is defined with a language tag (",(0,a.kt)("inlineCode",{parentName:"p"},"en")," for English, ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," for Italian, ",(0,a.kt)("inlineCode",{parentName:"p"},"de")," for German, ",(0,a.kt)("inlineCode",{parentName:"p"},"fr")," for French or ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," for all languages)."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class User {\n        name.en: "User" \n\n        description.en: "All users that ever used our product, including those that eventually cancelled their subscription."\n\n        ...\n\n        boolean is_Owner {\n            name.en: "Owner"\n\n            // hint: use triple quotes for multi-line\n            description.en: """\n                A user is an owner if it was the user that created the organization.\n                Every organization has exactly one owner.\n            """\n\n            sql: "${user.is_owner} = 1"\n        }\n        \n        ...\n    }\n}\n')))}m.isMDXComponent=!0}}]);