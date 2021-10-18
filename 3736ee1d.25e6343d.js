(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return y}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),m=t,y=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(y,l(l({ref:n},s),{},{components:r})):a.a.createElement(y,l({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(109)),i={id:"synonym",title:"synonym",sidebar_label:"synonym",slug:"/reference/kb-layer/general/synonym"},l={unversionedId:"reference/kb-layer/general/synonym",id:"reference/kb-layer/general/synonym",isDocsHomePage:!1,title:"synonym",description:"Definition",source:"@site/docs/reference/kb-layer/general/synonym.md",slug:"/reference/kb-layer/general/synonym",permalink:"/docs/reference/kb-layer/general/synonym",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/general/synonym.md",version:"current",sidebar_label:"synonym",sidebar:"docs",previous:{title:"display_name",permalink:"/docs/reference/kb-layer/general/display_name"},next:{title:"description",permalink:"/docs/reference/kb-layer/general/description"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"Every concept in the Knowledge Base layer can have a ",Object(o.b)("inlineCode",{parentName:"p"},"synonym")," defined."),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"name"}),"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"synonym")," allows the user to define (alternative) ways to refer to the concept over questions."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The property ",Object(o.b)("inlineCode",{parentName:"p"},"synonym")," can be used in ",Object(o.b)("inlineCode",{parentName:"p"},"class"),", ",Object(o.b)("inlineCode",{parentName:"p"},"relationship"),", ",Object(o.b)("inlineCode",{parentName:"p"},"entity")," and all ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/reference/kb-layer/attribute"}),"attributes"),". It is a single String value or multiple String values (as an Array) per language and is defined with a language tag (",Object(o.b)("inlineCode",{parentName:"p"},"en")," for English, ",Object(o.b)("inlineCode",{parentName:"p"},"it")," for Italian, ",Object(o.b)("inlineCode",{parentName:"p"},"de")," for German, ",Object(o.b)("inlineCode",{parentName:"p"},"fr")," for French or ",Object(o.b)("inlineCode",{parentName:"p"},"all")," for all languages)."),Object(o.b)("p",null,"Example:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Single synonym in English for a class.")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'kb {\n    class Customer {\n        name.en: "Customer" \n        \n        synonym.en: "Client"\n        ...\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Multiple synonyms in English for a class.")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'kb {\n    class Customer {\n        name.en: "Customer" \n        \n        synonym.en: ["Client", "Consumer"]\n        ...\n    }\n}\n')),Object(o.b)("p",null,"In the case of Entities, the ",Object(o.b)("inlineCode",{parentName:"p"},"synonym")," property can be derived dynamically from the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../class/sql"}),"synonym_sql")," specified in the class or manually added for each ",Object(o.b)("inlineCode",{parentName:"p"},"entity"),"."))}p.isMDXComponent=!0}}]);