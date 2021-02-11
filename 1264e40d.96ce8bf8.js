(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(96)),i={id:"default_date",title:"default_date",sidebar_label:"default_date",slug:"/reference/kb-layer/class/default_date"},l={unversionedId:"reference/kb-layer/class/default_date",id:"reference/kb-layer/class/default_date",isDocsHomePage:!1,title:"default_date",description:"Definition",source:"@site/docs/reference/kb-layer/class/default_date.md",slug:"/reference/kb-layer/class/default_date",permalink:"/docs/reference/kb-layer/class/default_date",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/default_date.md",version:"current",sidebar_label:"default_date",sidebar:"docs",previous:{title:"semantic_link",permalink:"/docs/reference/kb-layer/class/semantic_link"},next:{title:"default_order",permalink:"/docs/reference/kb-layer/class/default_order"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],d={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"default_date")," defines which ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../relation/semantic_link/date"}),"date relation")," you want Veezoo to use by default when a user asks a question involving time."),Object(o.b)("p",null,"Example: A class ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Order")," may have an ",Object(o.b)("inlineCode",{parentName:"p"},"Order_Date")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"Returned_Date"),'. When the user asks "how many orders per month", Veezoo should take by default ',Object(o.b)("inlineCode",{parentName:"p"},"Order_Date"),"."),Object(o.b)("p",null,'The user can still ask "how many orders per month of Returned Date" or "how many orders were returned per month" and get the result using another Date relation.'),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"In our example above, we will need to add the property ",Object(o.b)("inlineCode",{parentName:"p"},"default_date")," to ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Order"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n        \n        default_date: Order_Date\n\n        ...\n\n\n        relation Order_Date {\n            name.en: "Order Date"\n            tag: KB_Many2One\n            to: Date\n\n            semantic_link: {\n                to_sql: "${ORDERS.order_date}"\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"default_date")," doesn't need to be set to a date relation that is inside the same class though."),Object(o.b)("p",null,"Let's say there is another class called ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Fulfillment")," which has a ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," defined."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Order {\n        name.en: "Order"\n        \n        default_date: kb.Fulfillment.Date\n\n        ...\n    }\n}\n')),Object(o.b)("p",null,"Notice here that we need to refer to it using its fully-qualified name ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Fulfillment.Date"),", since it is not in the same context as Order, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," is not inside the ",Object(o.b)("inlineCode",{parentName:"p"},"class Order")," definition."),Object(o.b)("p",null,'In this case, when the user asks "how many orders per month", Veezoo will try to join ',Object(o.b)("inlineCode",{parentName:"p"},"kb.Order")," and ",Object(o.b)("inlineCode",{parentName:"p"},"kb.Fulfillment")," and count the orders by the month of the Fulfillment date relation."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?a.a.createElement(f,l(l({ref:t},d),{},{components:n})):a.a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);