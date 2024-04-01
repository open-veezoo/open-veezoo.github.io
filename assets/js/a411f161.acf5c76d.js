"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[4217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"date",title:"date"},s=void 0,p={unversionedId:"reference/kb-layer/attribute/date",id:"reference/kb-layer/attribute/date",title:"date",description:"Definition",source:"@site/docs/reference/kb-layer/attribute/date.md",sourceDirName:"reference/kb-layer/attribute",slug:"/reference/kb-layer/attribute/date",permalink:"/docs/reference/kb-layer/attribute/date",draft:!1,tags:[],version:"current",frontMatter:{id:"date",title:"date"},sidebar:"reference",previous:{title:"Attributes",permalink:"/docs/reference/kb-layer/attribute/"},next:{title:"number",permalink:"/docs/reference/kb-layer/attribute/number"}},u={},d=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Better Explanation",id:"better-explanation",level:3},{value:"event_date",id:"event_date",level:4},{value:"phrase_name",id:"phrase_name",level:4}],c={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Date is used whenever you have a column or SQL expression that returns a partial (e.g. Year) or fully qualfied date (e.g. 2020-01-06) or datetime."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),", Veezoo assumes that the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," is a SQL date/datetime expression. This means that in case it is not, you should change ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," to be a casting operation in your SQL dialect, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"sql: \"TO_DATE(${ORDERS.date_str}, 'YYYYMMDD')\"")," or directly in your database."),(0,i.kt)("p",null,"It is also required to specify the granularity by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime_format"),". This is usually inferred by Veezoo when importing your schema. The most common are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YearFormat")," (e.g. 2020)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DayFormat")," (e.g. 2020-10-01)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TimeFormat")," (e.g. 2020-10-01 13:00:00)")),(0,i.kt)("p",null,"File: ",(0,i.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Order.vkl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        date Order_Date {\n            name.en: "Order Date"\n\n            sql: "${ORDERS.order_date}"\n\n            datetime_format: DayFormat\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"better-explanation"},"Better Explanation"),(0,i.kt)("p",null,'Veezoo will explain dates by default as for example "Signup Date of User in 2020", which can be clunky at times.'),(0,i.kt)("h4",{id:"event_date"},"event_date"),(0,i.kt)("p",null,"Often, the specific date is not required. In these cases, use ",(0,i.kt)("inlineCode",{parentName:"p"},"event_date: Date"),', to get for example "Order in 2020" instead of "Order Date of Order in 2020". This is most appropriate for classes that model an event, like an order.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"kb {\n\n    class Order {\n\n        event_date: Order_Date\n\n        date Order_Date {\n            ...\n        }\n    }\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This has the additional effect of setting the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/class/default_date"},"default_date"),".")),(0,i.kt)("h4",{id:"phrase_name"},"phrase_name"),(0,i.kt)("p",null,"In other cases, a date might relate to an event different from a class, for example the signup date of a user. Then it can be appropriate to set e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'phrase_name: "signed up"'),' on the date, which will make Veezoo explain date filters as "User signed up in 2020".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'kb {\n\n    class User {\n        ...\n\n        date Signup_Date {\n            phrase_name: "signed up"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/is_snapshot_date"},"snapshot dates"),', it can also be appropriate to use an adjective here, e.g. "active" to get "Subscription active by the end of 2020".'))}m.isMDXComponent=!0}}]);