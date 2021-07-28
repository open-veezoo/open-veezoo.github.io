(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),s=(t(0),t(96)),l={id:"sql",title:"sql / name_sql / synonym_sql",sidebar_label:"sql / name_sql / synonym_sql",slug:"/reference/kb-layer/class/sql"},r={unversionedId:"reference/kb-layer/class/sql",id:"reference/kb-layer/class/sql",isDocsHomePage:!1,title:"sql / name_sql / synonym_sql",description:"Definition",source:"@site/docs/reference/kb-layer/class/sql.md",slug:"/reference/kb-layer/class/sql",permalink:"/docs/reference/kb-layer/class/sql",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/sql.md",version:"current",sidebar_label:"sql / name_sql / synonym_sql",sidebar:"docs",previous:{title:"What is a class?",permalink:"/docs/reference/kb-layer/class"},next:{title:"default_date",permalink:"/docs/reference/kb-layer/class/default_date"}},o=[{value:"Definition",id:"definition",children:[]},{value:"Usage",id:"usage",children:[{value:"Class defined by Table",id:"class-defined-by-table",children:[]},{value:"Class defined by Column",id:"class-defined-by-column",children:[]},{value:"Advanced: Class defined by a SQL",id:"advanced-class-defined-by-a-sql",children:[]}]}],c={rightToc:o};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"definition"},"Definition"),Object(s.b)("p",null,"The Semantic Link is the SQL definition of a ",Object(s.b)("inlineCode",{parentName:"p"},"knowledge-base")," concept."),Object(s.b)("p",null,"In the case of a class, it defines if this class comes from a table or a column, what a unique key (",Object(s.b)("inlineCode",{parentName:"p"},"sql"),") for this class is and how its ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../entity"}),"entities")," are generated from SQL, if it should have any."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"A class can be defined by a table, a column or a SQL. Let's take the example of a table ",Object(s.b)("inlineCode",{parentName:"p"},"customer(id, name, status)"),"."),Object(s.b)("p",null,"In this example, Veezoo will generate two classes: ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Customer")," and ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Customer.Status"),"."),Object(s.b)("h3",{id:"class-defined-by-table"},"Class defined by Table"),Object(s.b)("p",null,"In the case of ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Customer"),", we have a class defined by a table ",Object(s.b)("inlineCode",{parentName:"p"},"customer"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.customer\n]\n\nkb {\n    class Customer {\n        name.en: "Customer"\n\n        from_table: customer\n        // e.g. 00042\n        sql: "${customer.id}"\n        // e.g. [00042] Arthur Dent\n        name_sql.en: "\'[\' || ${customer.id} || \'] \' || ${customer.name}"        \n        // e.g. Arthur Dent\n        synonym_sql.en: "${customer.name}"\n\n        ...\n    }\n}\n')),Object(s.b)("p",null,"Table Classes need to have"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"a reference to the table ",Object(s.b)("inlineCode",{parentName:"li"},"from_table: customer")," and "),Object(s.b)("li",{parentName:"ul"},"a SQL expression that uniquely identifies it ",Object(s.b)("inlineCode",{parentName:"li"},'sql: "${customer.id}"'),", used for Joins as a key.")),Object(s.b)("p",null,"Optionally, if it is a class with values that you may want to refer to in questions (e.g. a specific customer), it makes sense to define the name for the entities of this class."),Object(s.b)("p",null,"To do this you will add a ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql")," with a language tag (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},".en")," for English), specifying how the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../general/name"}),"name")," of the entity will be generated. If no ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql")," is defined, Veezoo will use the ",Object(s.b)("inlineCode",{parentName:"p"},"sql")," as the default ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql")," expression."),Object(s.b)("p",null,"There may be ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../general/synonym"}),"synonyms")," in the table that you also want to use for the entities. These you will define using the property ",Object(s.b)("inlineCode",{parentName:"p"},"synonym_sql")," with the appropriate language tag.\nIn our example, after clicking on the ",Object(s.b)("inlineCode",{parentName:"p"},"Sync Entities")," button in the Editor when you have the class file open, you will get entities like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'kb.Customer {\n    entity 00042_Arthur_Dent_1234 {         \n        name.en: "[00042] Arthur Dent"\n\n        synonym.en: "Arthur Dent"\n\n        id: "00042"\n    }\n    ...\n}\n\n')),Object(s.b)("p",null,"In the case of a class called ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Order"),", you may prefer not to have any entities defined. This means ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql")," and ",Object(s.b)("inlineCode",{parentName:"p"},"synonym_sql")," will be left out."),Object(s.b)("h3",{id:"class-defined-by-column"},"Class defined by Column"),Object(s.b)("p",null,"In our example, the class ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Status")," was defined by the column ",Object(s.b)("inlineCode",{parentName:"p"},"status")," in the ",Object(s.b)("inlineCode",{parentName:"p"},"customer")," table. Let's take a look at how it would be defined in VKL."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.customer\n]\n\nkb {\n    // inside the file for the class Customer\n    class Customer {\n\n        ...\n\n\n        class Status {\n            name.en: "Status"\n        \n            // e.g. ACTIVE\n            sql: "${customer.status}"\n        }\n    }\n}\n')),Object(s.b)("p",null,"Each entity of the class ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Customer.Status")," is uniquely defined by the ",Object(s.b)("inlineCode",{parentName:"p"},"sql")," expression, which also happens to be the default ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql")," for the entities.\nIn this case, there is no ",Object(s.b)("inlineCode",{parentName:"p"},"synonym_sql")," defined."),Object(s.b)("h3",{id:"advanced-class-defined-by-a-sql"},"Advanced: Class defined by a SQL"),Object(s.b)("p",null,"The last way you can define a class is over a SQL query that follows a specific form."),Object(s.b)("p",null,"Let's take the example of two tables ",Object(s.b)("inlineCode",{parentName:"p"},"customer(id, email)")," and ",Object(s.b)("inlineCode",{parentName:"p"},"profile(id, customer_id, name)"),". For whatever reason, we have now two tables with information about a customer. For simplicity sake, let's assume that ",Object(s.b)("inlineCode",{parentName:"p"},"profile")," only has one entry per customer."),Object(s.b)("p",null,"Now, we don't want to make ",Object(s.b)("inlineCode",{parentName:"p"},"profile")," accessible over Veezoo, since it is just extra information that was separated technically in different tables. Our business users have no clue why it is separated and they don't want to care about it."),Object(s.b)("p",null,"What we will do instead now is to join both these tables so we can generate entities of the class ",Object(s.b)("inlineCode",{parentName:"p"},"kb.Customer")," with nice-looking names."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'import: [\n    db.postgres.movie_db.public.customer\n]\n\nkb {\n    class Customer {\n        name.en: "Customer"\n        \n        // e.g. 00042\n        sql: "${customer.id}"\n        from_table: customer\n\n        entities_custom_sql: """\n            SELECT\n                c.id AS ID,\n                \'[\' || c.id || \'] \' || p.name AS LABEL_EN_MAIN,\n                p.name AS LABEL_EN_1\n            FROM\n                customer c JOIN profile p ON c.id = p.customer_id\n        """\n    }\n}\n')),Object(s.b)("p",null,"As you can notice, instead of a ",Object(s.b)("inlineCode",{parentName:"p"},"name_sql"),", we defined an ",Object(s.b)("inlineCode",{parentName:"p"},"entities_custom_sql"),"."),Object(s.b)("p",null,"Let's take a closer look at the SQL:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n    c.id AS ID,\n    '[' || c.id || '] ' || p.name AS LABEL_EN_MAIN,\n    p.name AS LABEL_EN_1\nFROM\n    customer c JOIN profile p ON c.id = p.customer_id\n")),Object(s.b)("p",null,"An ",Object(s.b)("inlineCode",{parentName:"p"},"entities_custom_sql")," always needs to have in the SELECT:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"one ",Object(s.b)("inlineCode",{parentName:"li"},"ID")," column, coinciding with the ",Object(s.b)("inlineCode",{parentName:"li"},"sql"),", and "),Object(s.b)("li",{parentName:"ul"},"a ",Object(s.b)("inlineCode",{parentName:"li"},"LABEL_{LANGUAGE-TAG}_MAIN"),", which will define the ",Object(s.b)("inlineCode",{parentName:"li"},"name")," of entities, similar to a ",Object(s.b)("inlineCode",{parentName:"li"},"name_sql")," in the previous cases.")),Object(s.b)("p",null,"Optionally, every other ",Object(s.b)("inlineCode",{parentName:"p"},"LABEL_{LANGUAGE-TAG}_*")," defined is used the same way as ",Object(s.b)("inlineCode",{parentName:"p"},"synonym_sql")," is used in the previous sections."),Object(s.b)("p",null,"It is important to notice that this SQL is only used to generate entities during Sync time, not query time. If you are interested in using custom SQLs during query time, please refer to virtual_table in the ",Object(s.b)("inlineCode",{parentName:"p"},"database")," part."))}b.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return t?i.a.createElement(m,r(r({ref:n},c),{},{components:t})):i.a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);