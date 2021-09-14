(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(u,s(s({ref:n},c),{},{components:t})):i.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(2),i=(t(0),t(108));const o={},r={unversionedId:"reference/kb-layer/general/join",id:"reference/kb-layer/general/join",isDocsHomePage:!1,title:"join",description:"Definition",source:"@site/docs/reference/kb-layer/general/join.md",slug:"/reference/kb-layer/general/join",permalink:"/docs/reference/kb-layer/general/join",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/general/join.md",version:"current",sidebar:"docs",previous:{title:"description",permalink:"/docs/reference/kb-layer/general/description"},next:{title:"class",permalink:"/docs/reference/kb-layer/class/class"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[{value:"Intermediate Table",id:"intermediate-table",children:[]},{value:"Multi-Joins",id:"multi-joins",children:[]},{value:"Advanced Joins",id:"advanced-joins",children:[]}]}],l={rightToc:s};function c({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"In some situations, your data schema may contain intermediate tables (a.k.a. junction tables), which represent many-to-many relationships."),Object(i.b)("p",null,"However, these tables can be confusing for Business Users to understand, since they only serve a purely relational modelling purpose and not a business concept per se."),Object(i.b)("p",null,"In these cases, you may want to define a ",Object(i.b)("inlineCode",{parentName:"p"},"join")," to go over these tables and hide them from your business users."),Object(i.b)("p",null,"Let's look into some example of schemas that we would like to simplify to our business users over Veezoo using the property ",Object(i.b)("inlineCode",{parentName:"p"},"join"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"join")," can be used inside ",Object(i.b)("inlineCode",{parentName:"p"},"relationship"),", ",Object(i.b)("inlineCode",{parentName:"p"},"integer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"double"),", ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(i.b)("inlineCode",{parentName:"p"},"string")," and ",Object(i.b)("inlineCode",{parentName:"p"},"date"),". It is always defined as an Array of SQL Expressions, even if there is only one join needed."),Object(i.b)("h3",{id:"intermediate-table"},"Intermediate Table"),Object(i.b)("p",null,"A very common kind of modelling in relational databases is that of an intermediate table with two foreign keys (and optionally a primary key)."),Object(i.b)("p",null,"Example: A table ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE(customer_id, language_id)")," that specifies the languages that a customer speaks, by using two foreign keys."),Object(i.b)("p",null,"In this case, this is how we would model it in Veezoo:"),Object(i.b)("p",null,"File: ",Object(i.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_LANGUAGE\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n        \n        relationship speaks_Language {\n            display_name.en: "speaks"\n            \n            tag: KB_Many2Many\n\n            to: kb.Language\n\n            // CUSTOMER -> CUSTOMER_LANGUAGE\n            join: [\n              "${CUSTOMER.id} = ${CUSTOMER_LANGUAGE.customer_id}"\n            ]\n\n            // this is used to join with LANGUAGE.id (the sql for kb.Language)\n            sql: "${CUSTOMER_LANGUAGE.language_id}"\n        }\n    }\n}\n')),Object(i.b)("p",null,"First of all, we needed to add to our ",Object(i.b)("inlineCode",{parentName:"p"},"import")," another table reference, namely to ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE"),", so we can use its shorthand form."),Object(i.b)("p",null,"Similarly to the case of Foreign Keys described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../class/class"}),"sql Overview for Class Relations"),", we also need to specify the ",Object(i.b)("inlineCode",{parentName:"p"},"sql")," here."),Object(i.b)("p",null,"Additionally, we see for the first time the usage of ",Object(i.b)("inlineCode",{parentName:"p"},"join"),". A relationship always goes from the parent class (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Customer"),") to another class (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"kb.Language"),"). Since the join path goes over an intermediate table, we need to specify how we get to the final ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE")," table, namely first over the ",Object(i.b)("inlineCode",{parentName:"p"},"customer_id")," foreign key."),Object(i.b)("p",null,"Finally, notice that this relationship has an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," set, in contrast to most of our relationships. ",Object(i.b)("inlineCode",{parentName:"p"},"KB_Many2Many")," specifies that this is a many-to-many relationship, i.e. that customers may speak multiple languages and that languages may be spoken by multiple customers. The default is ",Object(i.b)("inlineCode",{parentName:"p"},"KB_Many2One")," and is used when nothing is set."),Object(i.b)("p",null,"Now, there is nothing special about this two foreign keys case. Maybe your intermediate table contains actually a numeric column, a date, boolean, instead of a second foreign key."),Object(i.b)("p",null,"Let's say we have a table like ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_EXTRA(customer_id, age)"),". Following the same idea, we can have a new attribute defined like this:"),Object(i.b)("p",null,"File: ",Object(i.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_EXTRA\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        integer Age {\n            name.en: "Age"\n\n            // CUSTOMER -> CUSTOMER_EXTRA\n            join: [\n              "${CUSTOMER.id} = ${CUSTOMER_EXTRA.customer_id}"\n            ]\n\n            sql: "${CUSTOMER_EXTRA.age}"\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"multi-joins"},"Multi-Joins"),Object(i.b)("p",null,"If the schema is more complicated, we may need to go over several intermediate tables to find the information we need."),Object(i.b)("p",null,"Let's look at the following artificial example with tables ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER(id, name)"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_INFO(customer_id, customer_extra_id)"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_EXTRA(id, age)"),"."),Object(i.b)("p",null,"In this case, we will need to define how the path of ",Object(i.b)("inlineCode",{parentName:"p"},"join")," needs to be performed."),Object(i.b)("p",null,"File: ",Object(i.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_INFO,\n    db.postgres.movie_db.public.CUSTOMER_EXTRA\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        integer Age {\n            name.en: "Age"\n\n            // CUSTOMER -> CUSTOMER_INFO -> CUSTOMER_EXTRA\n            join: [\n             "${CUSTOMER.id} = ${CUSTOMER_INFO.customer_id}", \n             "${CUSTOMER_INFO.customer_extra_id} = ${CUSTOMER_EXTRA.id}"\n            ]\n\n            sql: "${CUSTOMER_EXTRA.age}"\n        }\n    }\n}\n')),Object(i.b)("p",null,"If you need even more joins, just define them inside the array. Also, don't forget to add the table to the ",Object(i.b)("inlineCode",{parentName:"p"},"import")," statement at the top."),Object(i.b)("h3",{id:"advanced-joins"},"Advanced Joins"),Object(i.b)("p",null,"Finally, your Join may not be of the form 'column A = column B'. Still, with VKL you can put whatever fancy SQL expression you want for the join."),Object(i.b)("p",null,"Let's take the following example."),Object(i.b)("p",null,"We have the tables ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER(id, name, private_id, company_id, segment_valid)")," and ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_SEGMENT_INFO(id, website)"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"private_id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"company_id")," are foreign keys to ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOMER_SEGMENT_INFO"),", but only one is set at a time and the reference only makes sense if ",Object(i.b)("inlineCode",{parentName:"p"},"segment_valid")," is set to 1, because... why not. And we want in the end to get the website."),Object(i.b)("p",null,"This is how it will look like:"),Object(i.b)("p",null,"File: ",Object(i.b)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_SEGMENT_INFO\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        string Website {\n            name.en: "Website"\n\n            // CUSTOMER -> CUSTOMER_SEGMENT_INFO\n            join: [\n              "COALESCE(${CUSTOMER.private_id}, ${CUSTOMER.company_id}) = ${CUSTOMER_SEGMENT_INFO.id} AND ${CUSTOMER.segment_valid} = 1"\n            ]\n\n            sql: "${CUSTOMER_SEGMENT_INFO.website}"\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);