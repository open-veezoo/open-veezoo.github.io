(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),p=r,O=s["".concat(i,".").concat(p)]||s[p]||d[p]||o;return t?a.a.createElement(O,c(c({ref:n},b),{},{components:t})):a.a.createElement(O,c({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=(t(0),t(108));const o={id:"double-integer",title:"double/integer"},i={unversionedId:"reference/kb-layer/attribute/double-integer",id:"reference/kb-layer/attribute/double-integer",isDocsHomePage:!1,title:"double/integer",description:"Definition",source:"@site/docs/reference/kb-layer/attribute/double-integer.md",slug:"/reference/kb-layer/attribute/double-integer",permalink:"/docs/reference/kb-layer/attribute/double-integer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/attribute/double-integer.md",version:"current",sidebar:"docs",previous:{title:"date",permalink:"/docs/reference/kb-layer/attribute/date"},next:{title:"boolean",permalink:"/docs/reference/kb-layer/attribute/boolean"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:c};function b({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"A Numeric attribute is used whenever you have a column or SQL expression that returns a number, e.g. an integer or a double."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"File: ",Object(a.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Order.vkl")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        double Order_Total {\n            name.en: "Order Total"\n            synonym.en: ["Price", "Revenue", "Amount"]\n\n            unit: onto.Currency.USD\n\n            sql: "${ORDERS.order_total}"\n        }    \n    }\n}\n')),Object(a.b)("p",null,"Notice the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"."}),"unit")," parameter, which allows Veezoo to display the value in the appropriate format to the user."),Object(a.b)("p",null,"As with the other kinds of attributes, you can also apply any kind of compatible SQL transformation inside ",Object(a.b)("inlineCode",{parentName:"p"},"sql"),"."),Object(a.b)("p",null,"Let's say instead that your attribute ",Object(a.b)("inlineCode",{parentName:"p"},"kb.Order.Order_Total")," contains values in different currencies (USD, CHF, EUR), specified in the column ",Object(a.b)("inlineCode",{parentName:"p"},"ORDERS.currency")," (imported as class ",Object(a.b)("inlineCode",{parentName:"p"},"kb.Order.Currency"),").\nNow, summing these values up wouldn't make any sense. So we define a new attribute ",Object(a.b)("inlineCode",{parentName:"p"},"Order_Total_EUR"),", which converts the values according to a fixed exchange rate."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        double Order_Total_EUR {\n            name.en: "Order Total (EUR)"\n            synonym.en: ["Price", "Revenue", "Order Total"]\n\n            unit: onto.Currency.EUR\n\n            sql: """\n                CASE ${kb.Order.Currency}\n                   WHEN \'USD\' THEN ${kb.Order.Order_Total} * 0.83\n                   WHEN \'CHF\' THEN ${kb.Order.Order_Total} * 0.92\n                   ELSE ${kb.Order.Order_Total}\n                END   \n            """\n\n        }    \n    }\n}\n')),Object(a.b)("p",null,"Notice here that we have referred inside the curly brackets ",Object(a.b)("inlineCode",{parentName:"p"},"${...}")," to a ",Object(a.b)("inlineCode",{parentName:"p"},"kb")," concept, instead of a ",Object(a.b)("inlineCode",{parentName:"p"},"db")," concept. This allows us to use recursively the definitions in the ",Object(a.b)("inlineCode",{parentName:"p"},"sql")," from these ",Object(a.b)("inlineCode",{parentName:"p"},"kb")," concepts. "),Object(a.b)("p",null,"For example, we could now build on top of ",Object(a.b)("inlineCode",{parentName:"p"},"kb.Order.Order_Total_EUR")," like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n\n    class Order {\n\n        ...\n\n        boolean Awesome {\n            name.en: "Awesome"\n\n            sql: "${kb.Order.Order_Total_EUR} > 1000"\n\n        }    \n    }\n}\n')),Object(a.b)("p",null,"This is a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"boolean"}),"boolean"),', defining "awesome" orders as those with a total order value normalized in Euro above 1000. How awesome is that!'))}b.isMDXComponent=!0}}]);