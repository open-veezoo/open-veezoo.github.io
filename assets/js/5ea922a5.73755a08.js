"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[450],{3905:function(e,n,t){t.d(n,{kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2354:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],l={},s=void 0,p={unversionedId:"reference/kb-layer/relationship/to",id:"reference/kb-layer/relationship/to",isDocsHomePage:!1,title:"to",description:"Definition",source:"@site/docs/reference/kb-layer/relationship/to.md",sourceDirName:"reference/kb-layer/relationship",slug:"/reference/kb-layer/relationship/to",permalink:"/docs/reference/kb-layer/relationship/to",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/relationship/to.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is a relationship?",permalink:"/docs/reference/kb-layer/relationship/relationship"},next:{title:"sql",permalink:"/docs/reference/kb-layer/relationship/sql"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A relationship is always between the outer class where it is defined and another class, specified in the property ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,o.kt)("p",null,"For example, the relationship ",(0,o.kt)("inlineCode",{parentName:"p"},"lives_in")," goes from ",(0,o.kt)("em",{parentName:"p"},"person")," ",(0,o.kt)("strong",{parentName:"p"},"to")," a ",(0,o.kt)("em",{parentName:"p"},"country"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's say we have the following tables: ",(0,o.kt)("inlineCode",{parentName:"p"},"PERSON(id, name, country_id)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNTRY(id, name)"),"."),(0,o.kt)("p",null,"In this case the relationship ",(0,o.kt)("inlineCode",{parentName:"p"},"lives_in")," is going to be defined inside ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.Person")," and contains the property ",(0,o.kt)("inlineCode",{parentName:"p"},"to: kb.Country"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.world.public.PERSON\n]\n\nkb {\n\n    class Person {\n        name.en: "Person"\n        sql: "${PERSON.id}"\n\n        relationship lives_in {\n            display_name: "lives in"\n            to: kb.Country\n            \n            sql: "${PERSON.country_id}"\n        }\n\n        ...\n    }\n}\n')))}f.isMDXComponent=!0}}]);