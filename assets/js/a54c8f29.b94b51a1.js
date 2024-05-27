"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[4498],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1632:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_label:"\u2699\ufe0f join"},s=void 0,p={unversionedId:"reference/kb-layer/general/join",id:"reference/kb-layer/general/join",title:"join",description:"Definition",source:"@site/docs/reference/kb-layer/general/join.md",sourceDirName:"reference/kb-layer/general",slug:"/reference/kb-layer/general/join",permalink:"/docs/reference/kb-layer/general/join",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u2699\ufe0f join"},sidebar:"reference",previous:{title:"\u2699\ufe0f description",permalink:"/docs/reference/kb-layer/general/description"},next:{title:"virtual_table",permalink:"/docs/reference/db-layer/virtual-table"}},d={},u=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Intermediate Table",id:"intermediate-table",level:3},{value:"Multi-Joins",id:"multi-joins",level:3},{value:"Advanced Joins",id:"advanced-joins",level:3}],m={toc:u},c="wrapper";function k(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"In some situations, your data schema may contain intermediate tables (a.k.a. junction tables), which represent many-to-many relationships."),(0,o.kt)("p",null,"However, these tables can be confusing for Business Users to understand, since they only serve a purely relational modelling purpose and not a business concept per se."),(0,o.kt)("p",null,"In these cases, you may want to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," to go over these tables and hide them from your business users."),(0,o.kt)("p",null,"Let's look into some example of schemas that we would like to simplify to our business users over Veezoo using the property ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," can be used inside ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"date"),". It is always defined as an Array of SQL Expressions, even if there is only one join needed."),(0,o.kt)("h3",{id:"intermediate-table"},"Intermediate Table"),(0,o.kt)("p",null,"A very common kind of modelling in relational databases is that of an intermediate table with two foreign keys (and optionally a primary key)."),(0,o.kt)("p",null,"Example: A table ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE(customer_id, language_id)")," that specifies the languages that a customer speaks, by using two foreign keys."),(0,o.kt)("p",null,"In this case, this is how we would model it in Veezoo:"),(0,o.kt)("p",null,"File: ",(0,o.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_LANGUAGE\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n        \n        relationship speaks_Language {\n            display_name.en: "speaks"\n            \n            tag: KB_Many2Many\n\n            to: kb.Language\n\n            // CUSTOMER -> CUSTOMER_LANGUAGE\n            join: [\n              "${CUSTOMER.id} = ${CUSTOMER_LANGUAGE.customer_id}"\n            ]\n\n            // this is used to join with LANGUAGE.id (the sql for kb.Language)\n            sql: "${CUSTOMER_LANGUAGE.language_id}"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"First of all, we needed to add to our ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," another table reference, namely to ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE"),", so we can use its shorthand form."),(0,o.kt)("p",null,"Similarly to the case of Foreign Keys described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/class"},"sql Overview for Class Relations"),", we also need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")," here."),(0,o.kt)("p",null,"Additionally, we see for the first time the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),". A relationship always goes from the parent class (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.Customer"),") to another class (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.Language"),"). Since the join path goes over an intermediate table, we need to specify how we get to the final ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_LANGUAGE")," table, namely first over the ",(0,o.kt)("inlineCode",{parentName:"p"},"customer_id")," foreign key."),(0,o.kt)("p",null,"Finally, notice that this relationship has an explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," set, in contrast to most of our relationships. ",(0,o.kt)("inlineCode",{parentName:"p"},"KB_Many2Many")," specifies that this is a many-to-many relationship, i.e. that customers may speak multiple languages and that languages may be spoken by multiple customers. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"KB_Many2One")," and is used when nothing is set."),(0,o.kt)("p",null,"Now, there is nothing special about this two foreign keys case. Maybe your intermediate table contains actually a numeric column, a date, boolean, instead of a second foreign key."),(0,o.kt)("p",null,"Let's say we have a table like ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_EXTRA(customer_id, age)"),". Following the same idea, we can have a new attribute defined like this:"),(0,o.kt)("p",null,"File: ",(0,o.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_EXTRA\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        integer Age {\n            name.en: "Age"\n\n            // CUSTOMER -> CUSTOMER_EXTRA\n            join: [\n              "${CUSTOMER.id} = ${CUSTOMER_EXTRA.customer_id}"\n            ]\n\n            sql: "${CUSTOMER_EXTRA.age}"\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"multi-joins"},"Multi-Joins"),(0,o.kt)("p",null,"If the schema is more complicated, we may need to go over several intermediate tables to find the information we need."),(0,o.kt)("p",null,"Let's look at the following artificial example with tables ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER(id, name)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_INFO(customer_id, customer_extra_id)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_EXTRA(id, age)"),"."),(0,o.kt)("p",null,"In this case, we will need to define how the path of ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," needs to be performed."),(0,o.kt)("p",null,"File: ",(0,o.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_INFO,\n    db.postgres.movie_db.public.CUSTOMER_EXTRA\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        integer Age {\n            name.en: "Age"\n\n            // CUSTOMER -> CUSTOMER_INFO -> CUSTOMER_EXTRA\n            join: [\n             "${CUSTOMER.id} = ${CUSTOMER_INFO.customer_id}", \n             "${CUSTOMER_INFO.customer_extra_id} = ${CUSTOMER_EXTRA.id}"\n            ]\n\n            sql: "${CUSTOMER_EXTRA.age}"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"If you need even more joins, just define them inside the array. Also, don't forget to add the table to the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement at the top."),(0,o.kt)("h3",{id:"advanced-joins"},"Advanced Joins"),(0,o.kt)("p",null,"Finally, your Join may not be of the form 'column A = column B'. Still, with VKL you can put whatever fancy SQL expression you want for the join."),(0,o.kt)("p",null,"Let's take the following example."),(0,o.kt)("p",null,"We have the tables ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER(id, name, private_id, company_id, segment_valid)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_SEGMENT_INFO(id, website)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"private_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"company_id")," are foreign keys to ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_SEGMENT_INFO"),", but only one is set at a time and the reference only makes sense if ",(0,o.kt)("inlineCode",{parentName:"p"},"segment_valid")," is set to 1, because... why not. And we want in the end to get the website."),(0,o.kt)("p",null,"This is how it will look like:"),(0,o.kt)("p",null,"File: ",(0,o.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer.vkl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.CUSTOMER,\n    db.postgres.movie_db.public.CUSTOMER_SEGMENT_INFO\n]\n\nkb {\n\n    class Customer {\n        name.en: "Customer"\n        sql: "${CUSTOMER.id}"\n\n        string Website {\n            name.en: "Website"\n\n            // CUSTOMER -> CUSTOMER_SEGMENT_INFO\n            join: [\n              "COALESCE(${CUSTOMER.private_id}, ${CUSTOMER.company_id}) = ${CUSTOMER_SEGMENT_INFO.id} AND ${CUSTOMER.segment_valid} = 1"\n            ]\n\n            sql: "${CUSTOMER_SEGMENT_INFO.website}"\n        }\n    }\n}\n')))}k.isMDXComponent=!0}}]);