(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(102)),l={id:"relation",title:"What is a relation?",sidebar_label:"What is a relation?",slug:"/reference/kb-layer/relation"},o={unversionedId:"reference/kb-layer/relation/relation",id:"reference/kb-layer/relation/relation",isDocsHomePage:!1,title:"What is a relation?",description:"Definition",source:"@site/docs/reference/kb-layer/relation/relation.md",slug:"/reference/kb-layer/relation",permalink:"/docs/reference/kb-layer/relation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/relation/relation.md",version:"current",sidebar_label:"What is a relation?",sidebar:"docs",previous:{title:"What is an entity?",permalink:"/docs/reference/kb-layer/entity"},next:{title:"to: Class",permalink:"/docs/reference/kb-layer/relation/sql/class"}},b=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"A relation in VKL describes how classes and other classes or literal types relate to each other. "),Object(i.b)("p",null,"Example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Till_Haug")," ",Object(i.b)("em",{parentName:"li"},"works at")," ",Object(i.b)("inlineCode",{parentName:"li"},"Veezoo_AG")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JP_Monteiro")," ",Object(i.b)("em",{parentName:"li"},"was born on")," ",Object(i.b)("inlineCode",{parentName:"li"},"30th of March 1993")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Brazil")," ",Object(i.b)("em",{parentName:"li"},"has a population of")," ",Object(i.b)("inlineCode",{parentName:"li"},"209'500'000"))),Object(i.b)("p",null,"In other words, we have the following relations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"works_at")," is a relation that goes from ",Object(i.b)("inlineCode",{parentName:"li"},"Employee")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Company")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"birthdate")," is a relation that goes from ",Object(i.b)("inlineCode",{parentName:"li"},"Person")," to the literal type ",Object(i.b)("inlineCode",{parentName:"li"},"Date")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"population")," is a relation that goes from ",Object(i.b)("inlineCode",{parentName:"li"},"Country")," to the literal type ",Object(i.b)("inlineCode",{parentName:"li"},"Integer"))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Veezoo generates automatically relations and puts them in the file of its domain class, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"population")," can be found inside ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Country")," class definition."),Object(i.b)("p",null,"Relations, as we have seen, are binary and can be between:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"class")," and ",Object(i.b)("inlineCode",{parentName:"li"},"class")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"class")," and a literal type (",Object(i.b)("inlineCode",{parentName:"li"},"Date"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Integer"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Double"),")")),Object(i.b)("p",null,"In general, the syntax is the same, but we will analyze them individually."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"relation/sql/class"}),"Class Relations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"relation/sql/boolean"}),"Boolean Relations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"relation/sql/double-integer"}),"Double/Integer Relations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"relation/sql/string"}),"String Relations"))))}p.isMDXComponent=!0}}]);