(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),r=(t(0),t(92)),o={id:"to-class",title:"to: Class",sidebar_label:"to: Class",slug:"/reference/kb-layer/relation/semantic_link/class"},l={unversionedId:"reference/kb-layer/relation/semantic_link/to-class",id:"reference/kb-layer/relation/semantic_link/to-class",isDocsHomePage:!1,title:"to: Class",description:"Definition",source:"@site/docs/reference/kb-layer/relation/semantic_link/to-class.md",slug:"/reference/kb-layer/relation/semantic_link/class",permalink:"/docs/reference/kb-layer/relation/semantic_link/class",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/relation/semantic_link/to-class.md",version:"current",sidebar_label:"to: Class",sidebar:"docs",previous:{title:"What is a relation?",permalink:"/docs/reference/kb-layer/relation"},next:{title:"to: Date",permalink:"/docs/reference/kb-layer/relation/semantic_link/date"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[{value:"Within the same table",id:"within-the-same-table",children:[]},{value:"Foreign Keys",id:"foreign-keys",children:[]}]}],c={rightToc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"definition"},"Definition"),Object(r.b)("p",null,"A Class relation is a relation that goes from a class (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Order"),") to another class (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Customer"),")."),Object(r.b)("p",null,"We usually have 2 kinds of class relations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"when both classes are in the same table"),Object(r.b)("li",{parentName:"ul"},"when they are in different tables.")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"within-the-same-table"},"Within the same table"),Object(r.b)("p",null,"Let's take the example of a table ",Object(r.b)("inlineCode",{parentName:"p"},"CUSTOMER(id, name, status)"),"."),Object(r.b)("p",null,"Assuming that ",Object(r.b)("inlineCode",{parentName:"p"},"status")," is just a text column and not a foreign key, Veezoo will in this case generate two classes (",Object(r.b)("inlineCode",{parentName:"p"},"kb.Customer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Status"),") and the relation ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Customer.with_Status")," from customer to status."),Object(r.b)("p",null,"File: ",Object(r.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Status.vkl")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER\n]\n\nkb {\n\n    class Status {\n        name.en: "Status"\n        semantic_link: {\n            ...\n            id_sql: "${CUSTOMER.status}"\n        }\n    }\n}\n')),Object(r.b)("p",null,"File: ",Object(r.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        semantic_link: {\n            ...\n            id_sql: "${CUSTOMER.id}"\n        }\n\n        relation with_Status {\n            display_name.en: "with"\n            tag: KB_Many2One\n            to: kb.Status\n        }\n    }\n}\n')),Object(r.b)("p",null,"As you can see above, the relation ",Object(r.b)("inlineCode",{parentName:"p"},"with_Status")," doesn't need any ",Object(r.b)("inlineCode",{parentName:"p"},"semantic_link")," explicitly defined."),Object(r.b)("p",null,"The reason for this is that ",Object(r.b)("inlineCode",{parentName:"p"},"with_Status")," goes from ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Customer")," to ",Object(r.b)("inlineCode",{parentName:"p"},"kb.Status")," and both their ",Object(r.b)("inlineCode",{parentName:"p"},"id_sql")," are defined within the same table (",Object(r.b)("inlineCode",{parentName:"p"},"CUSTOMER"),"). So Veezoo doesn't need any further information to understand how to write the correct SQL."),Object(r.b)("p",null,"This isn't always the case as we will see next."),Object(r.b)("h3",{id:"foreign-keys"},"Foreign Keys"),Object(r.b)("p",null,"In the case of Foreign Keys, the classes' ",Object(r.b)("inlineCode",{parentName:"p"},"id_sql")," are not both in the same table."),Object(r.b)("p",null,"Let's modify the example above in the following way: ",Object(r.b)("inlineCode",{parentName:"p"},"CUSTOMER(id, name, status_id)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"STATUS(id, name)"),"."),Object(r.b)("p",null,"Now, ",Object(r.b)("inlineCode",{parentName:"p"},"status_id")," is a foreign key pointing to the ",Object(r.b)("inlineCode",{parentName:"p"},"STATUS")," table. This is how our new classes and relation will look like."),Object(r.b)("p",null,"File: ",Object(r.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Status.vkl")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.STATUS\n]\n\nkb {\n\n    class Status {\n        name.en: "Status"\n        semantic_link: {\n            ...\n            id_sql: "${STATUS.id}"\n        }\n    }\n}\n')),Object(r.b)("p",null,"File: ",Object(r.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        semantic_link: {\n            ...\n            id_sql: "${CUSTOMER.id}"\n        }\n\n        relation with_Status {\n            display_name.en: "with"\n            tag: KB_Many2One\n            to: kb.Status\n            semantic_link: {\n                to_sql: "${CUSTOMER.status_id}"\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"The relation ",Object(r.b)("inlineCode",{parentName:"p"},"with_Status")," has now an explicitly defined ",Object(r.b)("inlineCode",{parentName:"p"},"semantic_link")," with the foreign key column in the ",Object(r.b)("inlineCode",{parentName:"p"},"to_sql"),". Like this, Veezoo can now correctly do the join on ",Object(r.b)("inlineCode",{parentName:"p"},'"${CUSTOMER.status_id}" = ${STATUS.id}'),", whenever it needs to. It is important to notice that still Veezoo will in general avoid doing unnecessary joins, if no information is needed from the referenced table."))}b.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);