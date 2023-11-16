"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[4612],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Row-Level Permission"},s=void 0,u={unversionedId:"authorization/row-level-permission",id:"authorization/row-level-permission",title:"Row-Level Permission",description:"In Veezoo, we provide a method to achieve row-level authorization using SQL templating with the virtual_table feature. This allows for custom data access restrictions down to the row level based on user-specific values.",source:"@site/docs/authorization/row-level-permission.md",sourceDirName:"authorization",slug:"/authorization/row-level-permission",permalink:"/docs/authorization/row-level-permission",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/authorization/row-level-permission.md",tags:[],version:"current",frontMatter:{title:"Row-Level Permission"},sidebar:"docs",previous:{title:"Column-Level Permission",permalink:"/docs/authorization/column-level-permission"},next:{title:"Embedded Analytics with Veezoo",permalink:"/docs/embedded/embedded-guide"}},p={},c=[{value:"SQL Templating",id:"sql-templating",level:2},{value:"Support",id:"support",level:3},{value:"Templating Language",id:"templating-language",level:3},{value:"Pre-Defined Attributes and Variables",id:"pre-defined-attributes-and-variables",level:3},{value:"Row-Level Authorization",id:"row-level-authorization",level:2}],d={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Veezoo, we provide a method to achieve row-level authorization using SQL templating with the ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," feature. This allows for custom data access restrictions down to the row level based on user-specific values."),(0,i.kt)("h2",{id:"sql-templating"},"SQL Templating"),(0,i.kt)("p",null,"SQL templating allows parts of your SQL properties to be adjusted dynamically based on user-specific values. For example, you can use it to compare a user's email with a column in your table. "),(0,i.kt)("h3",{id:"support"},"Support"),(0,i.kt)("p",null,"Currently, SQL templating is supported in the following locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifiers of database/schema/table/column"),(0,i.kt)("li",{parentName:"ul"},"Including database identifier in DB connection"),(0,i.kt)("li",{parentName:"ul"},"Virtual table SQL")),(0,i.kt)("h3",{id:"templating-language"},"Templating Language"),(0,i.kt)("p",null,"Template sections are marked using ",(0,i.kt)("inlineCode",{parentName:"p"},"${...}")," and will be transformed to SQL on execution. The templating expression inside ",(0,i.kt)("inlineCode",{parentName:"p"},"${...}")," consists of a small DSL supporting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessing user attributes using syntax ",(0,i.kt)("inlineCode",{parentName:"li"},'user_attribute("attribute_name")')),(0,i.kt)("li",{parentName:"ul"},"Direct variables, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"veezoo.Tenant.Id"),"."),(0,i.kt)("li",{parentName:"ul"},"Functions with syntax ",(0,i.kt)("inlineCode",{parentName:"li"},"function(...)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"quote")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"raw")," functions are used to convert strings to SQL code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string_list")," is used for lists of strings, mapping them to an expression usable with ",(0,i.kt)("inlineCode",{parentName:"li"},"IN")," in SQL")))),(0,i.kt)("h3",{id:"pre-defined-attributes-and-variables"},"Pre-Defined Attributes and Variables"),(0,i.kt)("p",null,"The following user attributes can be accessed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_attribute")," function, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'${user_attribute("veezoo.User.Email")}'),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"veezoo.User.First_Name"),(0,i.kt)("li",{parentName:"ul"},"veezoo.User.Full_Name"),(0,i.kt)("li",{parentName:"ul"},"veezoo.User.Email"),(0,i.kt)("li",{parentName:"ul"},"veezoo.User.Roles (list of values, which may require ",(0,i.kt)("inlineCode",{parentName:"li"},"string_list")," for SQL)")),(0,i.kt)("p",null,"In addition, you can access custom user attributes as specified by SAML or JWT."),(0,i.kt)("p",null,"The following attributes can be accessed directly, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"${veezoo.Tenant.Id}"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/embedded/embedded-guide#7-define-authorization-logic-for-tenants"},"veezoo.Tenant.Id"))),(0,i.kt)("h2",{id:"row-level-authorization"},"Row-Level Authorization"),(0,i.kt)("p",null,"To implement row-level authorization, you can transform a table into a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/db-layer/virtual-table"},"virtual_table")," and include user-specific SQL templates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.orders_db.public.ORDERS\n]\n\ndb.orders_db.public {\n    virtual_table orders {\n        identifier: "orders"\n\n        virtual_table_sql:\n         """\n            SELECT\n                o.*\n            FROM\n                "orders_db"."public"."orders" o\n            WHERE\n                o."customer_email" = ${quote(user_attribute("veezoo.User.Email"))}\n         """\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table_sql")," will only return the rows of the ",(0,i.kt)("inlineCode",{parentName:"p"},"orders")," table where the ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_email")," matches the logged-in user's email."),(0,i.kt)("p",null,"As another example in the case of ",(0,i.kt)("a",{parentName:"p",href:"/docs/embedded/embedded-guide"},"Multi-Tenant Self-Service Analytics"),", we can restrict the data based on the tenant ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.storage.hiring_app {\n\n    virtual_table candidates {\n\n        identifier: "candidates"\n        \n        # Only show candidates from the current tenant\n        virtual_table_sql: \n         """\n            SELECT\n              *\n            FROM\n              candidates c\n            WHERE\n              c.company_id = ${quote(veezoo.Tenant.Id)}\n            """\n        \n        \n        column ID {\n            identifier: "ID"\n            is_primary_key: true\n            primitive_type: "varchar"\n        }\n\n        ...\n   }\n}\n')),(0,i.kt)("p",null,"By using row-level authorization, you can enhance your data security and maintain a high degree of data access control within Veezoo. Remember to always review your SQL templates to ensure that they are accurate and efficient."))}f.isMDXComponent=!0}}]);