"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5227:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"default_date",title:"default_date",sidebar_label:"default_date",slug:"/reference/kb-layer/class/default_date"},d=void 0,s={unversionedId:"reference/kb-layer/class/default_date",id:"reference/kb-layer/class/default_date",title:"default_date",description:"Definition",source:"@site/docs/reference/kb-layer/class/default_date.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/class/default_date",permalink:"/docs/reference/kb-layer/class/default_date",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/default_date.md",tags:[],version:"current",frontMatter:{id:"default_date",title:"default_date",sidebar_label:"default_date",slug:"/reference/kb-layer/class/default_date"},sidebar:"docs",previous:{title:"sql / name_sql / synonym_sql",permalink:"/docs/reference/kb-layer/class/sql"},next:{title:"default_order",permalink:"/docs/reference/kb-layer/class/default_order"}},u={},c=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"default_date")," defines which ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/date"},"date attribute")," you want Veezoo to use by default when a user asks a question involving time."),(0,l.kt)("p",null,"Example: A class ",(0,l.kt)("inlineCode",{parentName:"p"},"kb.Order")," may have an ",(0,l.kt)("inlineCode",{parentName:"p"},"Order_Date")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"Returned_Date"),'. When the user asks "how many orders per month", Veezoo should take by default ',(0,l.kt)("inlineCode",{parentName:"p"},"Order_Date"),"."),(0,l.kt)("p",null,'The user can still ask "how many orders per month of Returned Date" or "how many orders were returned per month" and get the result using another Date attribute.'),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"In our example above, we will need to add the property ",(0,l.kt)("inlineCode",{parentName:"p"},"default_date")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"kb.Order"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n        \n        default_date: Order_Date\n\n        ...\n\n\n        date Order_Date {\n            name.en: "Order Date"\n\n            sql: "${ORDERS.order_date}"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"default_date")," doesn't need to be set to a date attribute that is inside the same class though."),(0,l.kt)("p",null,"Let's say there is another class called ",(0,l.kt)("inlineCode",{parentName:"p"},"kb.Fulfillment")," which has a ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," defined."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n        \n        default_date: kb.Fulfillment.Date\n\n        ...\n    }\n}\n')),(0,l.kt)("p",null,"Notice here that we need to refer to it using its fully-qualified name ",(0,l.kt)("inlineCode",{parentName:"p"},"kb.Fulfillment.Date"),", since it is not in the same context as Order, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," is not inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"class Order")," definition."),(0,l.kt)("p",null,'In this case, when the user asks "how many orders per month", Veezoo will try to join ',(0,l.kt)("inlineCode",{parentName:"p"},"kb.Order")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kb.Fulfillment")," and count the orders by the month of the Fulfillment date attribute."))}m.isMDXComponent=!0}}]);