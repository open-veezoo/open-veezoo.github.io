"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[4612],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Row-Level Permission"},s=void 0,u={unversionedId:"authorization/row-level-permission",id:"authorization/row-level-permission",title:"Row-Level Permission",description:"In Veezoo, we provide a method to achieve row-level authorization using SQL templating with the virtual_table feature. This allows for custom data access restrictions down to the row level based on user-specific values.",source:"@site/docs/authorization/row-level-permission.md",sourceDirName:"authorization",slug:"/authorization/row-level-permission",permalink:"/docs/authorization/row-level-permission",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/authorization/row-level-permission.md",tags:[],version:"current",frontMatter:{title:"Row-Level Permission"},sidebar:"docs",previous:{title:"Column-Level Permission",permalink:"/docs/authorization/column-level-permission"},next:{title:"Why and how to sync?",permalink:"/docs/kg-sync/"}},p={},c=[{value:"SQL Templating",id:"sql-templating",level:2},{value:"Support",id:"support",level:3},{value:"Templating Language",id:"templating-language",level:3},{value:"User Attributes",id:"user-attributes",level:3},{value:"Row-Level Authorization",id:"row-level-authorization",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Veezoo, we provide a method to achieve row-level authorization using SQL templating with the ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual_table")," feature. This allows for custom data access restrictions down to the row level based on user-specific values."),(0,a.kt)("h2",{id:"sql-templating"},"SQL Templating"),(0,a.kt)("p",null,"SQL templating allows parts of your SQL properties to be adjusted dynamically based on user-specific values. For example, you can use it to compare a user's email with a column in your table. "),(0,a.kt)("h3",{id:"support"},"Support"),(0,a.kt)("p",null,"Currently, SQL templating is supported in the following locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifiers of database/schema/table/column"),(0,a.kt)("li",{parentName:"ul"},"Including database identifier in DB connection"),(0,a.kt)("li",{parentName:"ul"},"Virtual table SQL")),(0,a.kt)("h3",{id:"templating-language"},"Templating Language"),(0,a.kt)("p",null,"Template sections are marked using ",(0,a.kt)("inlineCode",{parentName:"p"},"${...}")," and will be transformed to SQL on execution. The templating expression inside ",(0,a.kt)("inlineCode",{parentName:"p"},"${...}")," consists of a small DSL supporting:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accessing user attributes using syntax ",(0,a.kt)("inlineCode",{parentName:"li"},'user_attribute("attribute_name")')),(0,a.kt)("li",{parentName:"ul"},"String literals enclosed in double quotes, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'"I\'m a string"')),(0,a.kt)("li",{parentName:"ul"},"Functions with syntax ",(0,a.kt)("inlineCode",{parentName:"li"},"fun(...)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"quote")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"raw")," functions are used to convert strings to SQL code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string_list")," is used for lists of strings, mapping them to an expression usable with ",(0,a.kt)("inlineCode",{parentName:"li"},"IN")," in SQL")))),(0,a.kt)("h3",{id:"user-attributes"},"User Attributes"),(0,a.kt)("p",null,"The following user attributes can be accessed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"user_attribute")," function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"veezoo.user.firstName"),(0,a.kt)("li",{parentName:"ul"},"veezoo.user.fullName"),(0,a.kt)("li",{parentName:"ul"},"veezoo.user.email"),(0,a.kt)("li",{parentName:"ul"},"veezoo.user.roles")),(0,a.kt)("p",null,"In addition, you can access custom user attributes as specified by SAML or JWT."),(0,a.kt)("h2",{id:"row-level-authorization"},"Row-Level Authorization"),(0,a.kt)("p",null,"To implement row-level authorization, you can transform a table into a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/db-layer/virtual-table"},"virtual_table")," and include user-specific SQL templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.orders_db.public.ORDERS\n]\n\ndb.orders_db.public {\n    virtual_table orders {\n        identifier: "orders"\n\n        virtual_table_sql:\n         """\n            SELECT\n                o.*\n            FROM\n                "orders_db"."public"."orders" o\n            WHERE\n                o."customer_email" = ${quote(user_attribute("veezoo.user.email"))}\n         """\n\n        ...\n    }\n}\n')),(0,a.kt)("p",null,"In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual_table_sql")," will only return the rows of the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"customer_email")," matches the logged-in user's email."),(0,a.kt)("p",null,"By using row-level authorization, you can enhance your data security and maintain a high degree of data access control within Veezoo. Remember to always review your SQL templates to ensure that they are accurate and efficient."))}f.isMDXComponent=!0}}]);