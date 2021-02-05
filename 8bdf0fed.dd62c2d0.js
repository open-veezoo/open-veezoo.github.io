(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),i=(t(0),t(92)),o={id:"display_name",title:"display_name",sidebar_label:"display_name",slug:"/reference/kb-layer/general/display_name"},l={unversionedId:"reference/kb-layer/general/display_name",id:"reference/kb-layer/general/display_name",isDocsHomePage:!1,title:"display_name",description:"Definition",source:"@site/docs/reference/kb-layer/general/display_name.md",slug:"/reference/kb-layer/general/display_name",permalink:"/docs/reference/kb-layer/general/display_name",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/general/display_name.md",version:"current",sidebar_label:"display_name",sidebar:"docs",previous:{title:"name",permalink:"/docs/reference/kb-layer/general/name"},next:{title:"synonym",permalink:"/docs/reference/kb-layer/general/synonym"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"Every concept in the Knowledge Base layer has either a ",Object(i.b)("inlineCode",{parentName:"p"},"display_name")," or a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"name"}),"name"),"."),Object(i.b)("p",null,"The way you should think about ",Object(i.b)("inlineCode",{parentName:"p"},"display_name")," is as a ",Object(i.b)("inlineCode",{parentName:"p"},"name")," that gets displayed to the user in titles, filters, autocomplete and the Knowledge Graph view.\nHowever, unlike ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", if a user uses it in a question, it won't get necessarily picked as this concept."),Object(i.b)("p",null,"Let's go over one example: a relation ",Object(i.b)("inlineCode",{parentName:"p"},"from_Customer")," between ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Order")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Customer"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'kb {\n\n    class Order {\n\n        ...\n\n        relation from_Customer {\n            display_name.en: "from"\n            \n            tag: KB_Many2One\n            to: kb.Customer\n            ...\n        }\n    }\n\n}\n\n')),Object(i.b)("p",null,'If we ask a question like "How many orders did JP make last year?", we want to see the filter ',Object(i.b)("inlineCode",{parentName:"p"},"Order from Customer JP")," in the answer. With ",Object(i.b)("inlineCode",{parentName:"p"},"display_name")," (and ",Object(i.b)("inlineCode",{parentName:"p"},"name"),") you can achieve that."),Object(i.b)("p",null,'However, if we ask a question like "How many orders from Brazil?", the fact that we use the word "from" should not make Veezoo pick this relation. This is why in this case we prefer the usage of ',Object(i.b)("inlineCode",{parentName:"p"},"display_name")," than ",Object(i.b)("inlineCode",{parentName:"p"},"name"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The attribute ",Object(i.b)("inlineCode",{parentName:"p"},"display_name")," can be used in ",Object(i.b)("inlineCode",{parentName:"p"},"class"),", ",Object(i.b)("inlineCode",{parentName:"p"},"relation")," and ",Object(i.b)("inlineCode",{parentName:"p"},"entity"),", but often it is only used for ",Object(i.b)("inlineCode",{parentName:"p"},"relation")," between two classes."),Object(i.b)("p",null,"It is a single String value per language (no Array is allowed) and is defined with a language tag (",Object(i.b)("inlineCode",{parentName:"p"},"en")," for English, ",Object(i.b)("inlineCode",{parentName:"p"},"it")," for Italian, ",Object(i.b)("inlineCode",{parentName:"p"},"de")," for German, ",Object(i.b)("inlineCode",{parentName:"p"},"fr")," for French or ",Object(i.b)("inlineCode",{parentName:"p"},"all")," for all languages)."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'kb {\n\n    class Order {\n\n        ...\n\n        relation from_Customer {\n            display_name.en: "from"\n            \n            tag: KB_Many2One\n            to: kb.Customer\n            ...\n        }\n    }\n\n}\n')))}s.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return t?r.a.createElement(u,l(l({ref:n},p),{},{components:t})):r.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);