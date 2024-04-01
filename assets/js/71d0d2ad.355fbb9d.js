"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6070],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"display_with",title:"display_with",sidebar_label:"\u2699\ufe0f display_with"},s=void 0,c={unversionedId:"reference/kb-layer/class/display_with",id:"reference/kb-layer/class/display_with",title:"display_with",description:"Definition",source:"@site/docs/reference/kb-layer/class/display_with.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/class/display_with",permalink:"/docs/reference/kb-layer/class/display_with",draft:!1,tags:[],version:"current",frontMatter:{id:"display_with",title:"display_with",sidebar_label:"\u2699\ufe0f display_with"},sidebar:"reference",previous:{title:"\u2699\ufe0f default_filter",permalink:"/docs/reference/kb-layer/class/default_filter"},next:{title:"Hierarchy Class",permalink:"/docs/reference/kb-layer/class/hierarchy-class"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p},y="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"When you ask a question involving a class, sometimes you will want to see additional information to it by default."),(0,o.kt)("p",null,"Example: When you ask 'show me all orders in the last 2 weeks', you may want to see the customer name that ordered it, the total amount, etc."),(0,o.kt)("p",null,"By default, Veezoo will choose automatically what it believes is the most relevant information that should be shown together with it."),(0,o.kt)("p",null,"However, you may define what you want Veezoo to always display by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"display_with")," property."),(0,o.kt)("iframe",{width:"800",height:"500",src:"https://www.youtube.com/embed/MeX8f7maRiU?si=1Wgy54qvK91nN8ro",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"display_with")," property takes an array of attributes and relationships that you want displayed by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n\n        sql: "${ORDERS.id}"\n        \n        display_with: [\n            with_Customer,\n            Total_Amount,\n            Order_Date\n        ]\n\n        ...\n    }\n}\n')),(0,o.kt)("p",null,"In the case above, whenever you ask about orders, Veezoo will show you a table with the Order ID (see ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")," of Orders) followed by the Customer, the total amount and the order date."),(0,o.kt)("p",null,"If you don't want to see the Order ID, you can hide it by adding the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"KB_ShowOnlyRepresenters"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n\n        // Add this when the class itself shouldn\'t be shown in the table\n        // only the ones from display_with\n        // Useful when there is no `sql` defined\n        tag: KB_ShowOnlyRepresenters\n\n        sql: "${ORDERS.id}"\n        \n        display_with: [\n            with_Customer,\n            Total_Amount,\n            Order_Date\n        ]\n\n        ...\n    }\n}\n')))}f.isMDXComponent=!0}}]);