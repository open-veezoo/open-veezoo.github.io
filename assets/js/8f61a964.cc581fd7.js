"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9916],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"kb-layer",title:"Knowledge Base Layer",sidebar_label:"Knowledge Base Layer",slug:"/kb-layer"},s=void 0,u={unversionedId:"getting-started/kb-layer",id:"getting-started/kb-layer",title:"Knowledge Base Layer",description:"The knowledge-base layer (kb) is where the magic happens. The idea behind the kb layer is to model your data semantically, i.e. as if you would be explaining to a person what your database is really about.",source:"@site/docs/getting-started/kb-layer.md",sourceDirName:"getting-started",slug:"/kb-layer",permalink:"/docs/kb-layer",draft:!1,tags:[],version:"current",frontMatter:{id:"kb-layer",title:"Knowledge Base Layer",sidebar_label:"Knowledge Base Layer",slug:"/kb-layer"},sidebar:"docs",previous:{title:"Database Layer",permalink:"/docs/db-layer"},next:{title:"Configure a Knowledge Graph from Scratch",permalink:"/docs/tutorials/kg-from-scratch"}},p={},m=[{value:"Classes and Entities",id:"classes-and-entities",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Numeric attributes",id:"numeric-attributes",level:3},{value:"Date attributes",id:"date-attributes",level:3},{value:"Boolean attributes",id:"boolean-attributes",level:3},{value:"Class attributes",id:"class-attributes",level:3},{value:"String attributes",id:"string-attributes",level:3}],d={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"knowledge-base")," layer (",(0,i.kt)("inlineCode",{parentName:"p"},"kb"),") is where the magic happens. The idea behind the ",(0,i.kt)("inlineCode",{parentName:"p"},"kb")," layer is to model your data semantically, i.e. as if you would be explaining to a person what your database is really about."),(0,i.kt)("p",null,"The idea sounds familiar? You have probably heard about ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"},"Entity-Relationship modelling"),". Well, that's pretty much what we are doing here.\nInstead of talking about views/tables/columns, which is just the physical representation of information, we will model it closer to the business domain."),(0,i.kt)("p",null,"For this modelling, we have to introduce the vocabulary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classes (in ER-modelling they are known as Entity Types)"),(0,i.kt)("li",{parentName:"ul"},"Entities"),(0,i.kt)("li",{parentName:"ul"},"Relationships"),(0,i.kt)("li",{parentName:"ul"},"Attributes")),(0,i.kt)("p",null,"Let's see in detail what each of these things actually mean."),(0,i.kt)("h2",{id:"classes-and-entities"},"Classes and Entities"),(0,i.kt)("p",null,"If you come from a software background, you may be familiar with the idea of a class as defined in object-oriented programming. In some sense, we are making your data more object-oriented.\nSo, a class can be defined as a category of things. The best way to understand it is to go over some examples."),(0,i.kt)("p",null,"A class could be something like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Customer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Country")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Order")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Movie"))),(0,i.kt)("p",null,'Now, each of these classes may have instantiations of it. In programming, we call these "objects". In VKL, we call them ',(0,i.kt)("inlineCode",{parentName:"p"},"entities"),".\nSo following our example, we may have entities like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Till_Haug")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Customer")," "),(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Brazil")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Country")),(0,i.kt)("li",{parentName:"ul"},"entity ",(0,i.kt)("inlineCode",{parentName:"li"},"Batman")," of class ",(0,i.kt)("inlineCode",{parentName:"li"},"Movie"))),(0,i.kt)("p",null,"But what about ",(0,i.kt)("inlineCode",{parentName:"p"},"Order"),"? For classes like ",(0,i.kt)("inlineCode",{parentName:"p"},"Order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", it makes sense usually to model it as a class without entities. Prefer to use classes with entities when there is a way to refer to an individual of this class in a question."),(0,i.kt)("p",null,"Here is an example of a class in VKL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.ORDERS\n]\n\nkb {\n    class Customer {\n        name.en: "Customer"     \n        synonym.en: "Client"\n        extends: onto.Customer\n        \n        sql: "${ORDERS.customer_id}"\n        name_sql.en:\n          "${ORDERS.customer_firstname} || \' \' || ${ORDERS.customer_lastname}"\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"To learn more about how classes and entities are defined in VKL here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/kb-layer/class"},"What is a class?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/kb-layer/entity"},"What is an entity?"))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"A relationship in VKL describes how classes relate to each other."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Till_Haug")," ",(0,i.kt)("em",{parentName:"li"},"works at")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Veezoo_AG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JP_Monteiro")," ",(0,i.kt)("em",{parentName:"li"},"is from the segment")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Rio_de_Janeiro")," ",(0,i.kt)("em",{parentName:"li"},"is located in")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Brazil"))),(0,i.kt)("p",null,"In other words, we have the following relationships:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"works_at")," is a relationship that goes from ",(0,i.kt)("inlineCode",{parentName:"li"},"Employee")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Company")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from_segment")," is a relationship that goes from ",(0,i.kt)("inlineCode",{parentName:"li"},"Customer")," to the class ",(0,i.kt)("inlineCode",{parentName:"li"},"Segment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"located_in")," is a relationship that goes from ",(0,i.kt)("inlineCode",{parentName:"li"},"City")," to the class ",(0,i.kt)("inlineCode",{parentName:"li"},"Country"))),(0,i.kt)("p",null,"Here is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")," in VKL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.movie_db.public.ORDER\n]\n\nkb {\n\n    class Order {\n        name.en: "Order"\n        sql: "${ORDER.id}"\n\n        ...\n\n        relationship from_Customer {\n            to: kb.Customer\n\n            sql: "${ORDER.customer_id}"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Learn about how relationships are defined in VKL here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/kb-layer/relationship"},"What is a relationship?"))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"Attributes are properties of a class and they can be of the following types: ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," as well."),(0,i.kt)("h3",{id:"numeric-attributes"},"Numeric attributes"),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Country {\n\n        ...\n\n        /** e.g. Brazil has a population of 209,500,000 inhabitants. */\n        integer Population {\n            name.en: "Population"\n            \n            sql: "${COUNTRY.population}"\n        }\n\n        /** e.g. USA has a GDP of 21.43 trillion USD. */\n        number Gross_Domestic_Product {\n            name.en: "Gross Domestic Product"\n            synonym.en: "GDP"\n            unit: onto.Currency.USD\n            \n            sql: "${COUNTRY.gdp_in_usd}"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/number"},"numeric attributes here"),"."),(0,i.kt)("h3",{id:"date-attributes"},"Date attributes"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Customer {\n\n        ...\n\n        /** e.g. JP was born on 30th of March 1993. */\n        date Birthdate {\n            name.en: "Birthdate"\n            extends: onto.Birthdate\n            datetime_format: DayFormat\n            \n            sql: "${CUSTOMER.birthdate}"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/date"},"date attributes here"),"."),(0,i.kt)("h3",{id:"boolean-attributes"},"Boolean attributes"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Order {\n\n        ...\n\n        boolean Returned {\n            name.en: "Returned"\n\n            sql: "${ORDERS.returned} = \'yes\'"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/boolean"},"boolean attributes here"),"."),(0,i.kt)("h3",{id:"class-attributes"},"Class attributes"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Customer {\n\n        ...\n\n        /** e.g. JP is from the segment Young&Professionals. */\n        class Segment {\n            name.en: "Segment"\n            \n            sql: "${CUSTOMER.segment}"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"This may strike at first as weird. Why not just model it as a string?"),(0,i.kt)("p",null,"By modelling as a class with entities, you get to refer to the individual values (entities) in a question, since Veezoo will index them to understand you. This way you can ask 'How many Corporate customers do we have?' and Veezoo will recognize the entity 'Corporate' of class 'Segment', while helping you with AutoComplete."),(0,i.kt)("p",null,"The way you have to think about it is: is it actual text (e.g. that you would want to search inside)? If not, it's probably a class."),(0,i.kt)("p",null,"A free-text comment field? It's a string in Veezoo."),(0,i.kt)("p",null,"A customer? It's a class."),(0,i.kt)("p",null,"The first name of a customer? If this is relevant as a standalone concept for your business users, then sure, it's a string. Otherwise, just use it as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"name_sql"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"\"${CUSTOMER.first_name} || ' ' || ${CUSTOMER.last_name}\""),"."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/class"},"class attributes here"),"."),(0,i.kt)("h3",{id:"string-attributes"},"String attributes"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Company {\n\n        ...\n\n        /** e.g. Veezoo has the URL "https://www.veezoo.com". */\n        string Website_URL {\n            name.en: "Website"\n            extends: onto.URL\n            \n            sql: "${COMPANY.website_url}"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/string"},"string attributes here"),"."))}k.isMDXComponent=!0}}]);