"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6070],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"display_with",title:"display_with",sidebar_label:"display_with",slug:"/reference/kb-layer/class/display_with"},s=void 0,c={unversionedId:"reference/kb-layer/class/display_with",id:"reference/kb-layer/class/display_with",title:"display_with",description:"Definition",source:"@site/docs/reference/kb-layer/class/display_with.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/class/display_with",permalink:"/docs/reference/kb-layer/class/display_with",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/display_with.md",tags:[],version:"current",frontMatter:{id:"display_with",title:"display_with",sidebar_label:"display_with",slug:"/reference/kb-layer/class/display_with"},sidebar:"docs",previous:{title:"default_order",permalink:"/docs/reference/kb-layer/class/default_order"},next:{title:"creation_date",permalink:"/docs/reference/kb-layer/class/creation_date"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"When you ask a question involving a class, sometimes you will want to see additional information to it by default."),(0,i.kt)("p",null,"Example: When you ask 'show me all orders in the last 2 weeks', you may want to see the customer name that ordered it, the total amount, etc."),(0,i.kt)("p",null,"By default, Veezoo will choose automatically what it believes is the most relevant information that should be shown together with it."),(0,i.kt)("p",null,"However, you may define what you want Veezoo to always display by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"display_with")," property."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"display_with")," property takes an array of attributes and relationships that you want displayed by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n        \n        display_with: [\n            with_Customer,\n            Total_Amount,\n            Order_Date\n        ]\n\n        ...\n    }\n}\n')))}y.isMDXComponent=!0}}]);