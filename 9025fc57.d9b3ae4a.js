(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(96)),i={id:"to-date",title:"to: Date",sidebar_label:"to: Date",slug:"/reference/kb-layer/relation/sql/date"},l={unversionedId:"reference/kb-layer/relation/sql/to-date",id:"reference/kb-layer/relation/sql/to-date",isDocsHomePage:!1,title:"to: Date",description:"Definition",source:"@site/docs/reference/kb-layer/relation/sql/to-date.md",slug:"/reference/kb-layer/relation/sql/date",permalink:"/docs/reference/kb-layer/relation/sql/date",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/relation/sql/to-date.md",version:"current",sidebar_label:"to: Date",sidebar:"docs",previous:{title:"to: Class",permalink:"/docs/reference/kb-layer/relation/sql/class"},next:{title:"to: Double/Integer",permalink:"/docs/reference/kb-layer/relation/sql/double-integer"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"A Date relation is used whenever you have a column or SQL expression that returns a partial (e.g. Year) or fully qualfied date (e.g. 2020-01-06) or datetime."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"For Date relations, Veezoo assumes that the ",Object(o.b)("inlineCode",{parentName:"p"},"sql")," is a SQL date/datetime expression. This means that in case it is not, you should change ",Object(o.b)("inlineCode",{parentName:"p"},"sql")," to be a casting operation in your SQL dialect, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"sql: \"TO_DATE(${ORDERS.date_str}, 'YYYYMMDD')\"")," or directly in your database."),Object(o.b)("p",null,"It is also required to specify the granularity by setting ",Object(o.b)("inlineCode",{parentName:"p"},"datetime_format"),". This is usually inferred by Veezoo when importing your schema. The most common are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"YearFormat")," (e.g. 2020)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DayFormat")," (e.g. 2020-10-01)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TimeFormat")," (e.g. 2020-10-01 13:00:00)")),Object(o.b)("p",null,"File: ",Object(o.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Order.vkl")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        relation Order_Date {\n            name.en: "Order Date"\n            to: Date\n\n            sql: "${ORDERS.order_date}"\n\n            datetime_format: DayFormat\n        }\n    }\n}\n')))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);