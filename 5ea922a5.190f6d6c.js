(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return t?i.a.createElement(f,c(c({ref:n},p),{},{components:t})):i.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),i=(t(0),t(108));const o={},a={unversionedId:"reference/kb-layer/relationship/to",id:"reference/kb-layer/relationship/to",isDocsHomePage:!1,title:"to",description:"Definition",source:"@site/docs/reference/kb-layer/relationship/to.md",slug:"/reference/kb-layer/relationship/to",permalink:"/docs/reference/kb-layer/relationship/to",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/relationship/to.md",version:"current",sidebar:"docs",previous:{title:"What is a relationship?",permalink:"/docs/reference/kb-layer/relationship/relationship"},next:{title:"sql",permalink:"/docs/reference/kb-layer/relationship/sql"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:c};function p({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"A relationship is always between the outer class where it is defined and another class, specified in the property ",Object(i.b)("inlineCode",{parentName:"p"},"to"),"."),Object(i.b)("p",null,"For example, the relationship ",Object(i.b)("inlineCode",{parentName:"p"},"lives_in")," goes from ",Object(i.b)("em",{parentName:"p"},"person")," ",Object(i.b)("strong",{parentName:"p"},"to")," a ",Object(i.b)("em",{parentName:"p"},"country"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Let's say we have the following tables: ",Object(i.b)("inlineCode",{parentName:"p"},"PERSON(id, name, country_id)")," and ",Object(i.b)("inlineCode",{parentName:"p"},"COUNTRY(id, name)"),"."),Object(i.b)("p",null,"In this case the relationship ",Object(i.b)("inlineCode",{parentName:"p"},"lives_in")," is going to be defined inside ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Person")," and contains the property ",Object(i.b)("inlineCode",{parentName:"p"},"to: kb.Country"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.world.public.PERSON\n]\n\nkb {\n\n    class Person {\n        name.en: "Person"\n        sql: "${PERSON.id}"\n\n        relationship lives_in {\n            display_name: "lives in"\n            to: kb.Country\n            \n            sql: "${PERSON.country_id}"\n        }\n\n        ...\n    }\n}\n')))}p.isMDXComponent=!0}}]);