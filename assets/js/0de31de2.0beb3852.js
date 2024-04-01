"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9480],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,f=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),l=["components"],u={id:"virtual-table",title:"virtual_table"},c=void 0,s={unversionedId:"reference/db-layer/virtual-table",id:"reference/db-layer/virtual-table",title:"virtual_table",description:"Definition",source:"@site/docs/reference/db-layer/virtual-table.md",sourceDirName:"reference/db-layer",slug:"/reference/db-layer/virtual-table",permalink:"/docs/reference/db-layer/virtual-table",draft:!1,tags:[],version:"current",frontMatter:{id:"virtual-table",title:"virtual_table"},sidebar:"reference",previous:{title:"\u2699\ufe0f join",permalink:"/docs/reference/kb-layer/general/join"},next:{title:"Discovery",permalink:"/docs/reference/discovery/"}},d={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Example: Changing a Table to a Virtual Table",id:"example-changing-a-table-to-a-virtual-table",level:3}],b={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," is a powerful tool to define views based on existing tables by modifying, aggregating, or filtering the data in some way, all within the Veezoo Knowledge Graph."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," allows you to define a new view/table using SQL that manipulates or extends the original data. You can then reference this virtual table like any other table when creating classes or defining columns."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Virtual tables should mostly be used for prototyping more complex logic. As a best practice, once the definition is finalized, it should be moved to dbt or a similar tool for long-term maintainability and better performance.")),(0,i.kt)("h3",{id:"example-changing-a-table-to-a-virtual-table"},"Example: Changing a Table to a Virtual Table"),(0,i.kt)("p",null,"Suppose we have a dataset with order data, including the order date and customer ID. We want to create a virtual table that adds a column with the order number (e.g. the first order, second, etc.) for each customer, based on the order date."),(0,i.kt)("p",null,"To do that you will first need to switch the sidebar in Studio to show the file tree instead:"),(0,i.kt)("img",{alt:"Switch to file tree",width:"250",src:(0,o.Z)("/img/tutorials/historized-tables/01-open-file-tree.png")}),(0,i.kt)("p",null,"Then open the table definition file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"orders")," table."),(0,i.kt)("img",{alt:"Switch to file tree",width:"250",src:(0,o.Z)("/img/tutorials/historized-tables/02-open-table-file-2.png")}),(0,i.kt)("p",null,"We can change an existing table definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.orders_db.public {\n    table orders {\n        identifier: "orders"      \n        \n        ...\n    }\n}\n')),(0,i.kt)("p",null,"...to use ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," and include a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table_sql")," instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import: [\n    db.postgres.orders_db.public.ORDERS\n]\n\ndb.orders_db.public {\n    virtual_table orders {\n        identifier: "orders"\n\n        virtual_table_sql:\n         """\n            SELECT\n                o.*,\n                ROW_NUMBER() OVER (\n                    PARTITION BY o."customer_id"\n                    ORDER BY o."order_date" ASC\n                ) as "customer_order_number"\n            FROM\n                "orders_db"."public"."orders" o\n         """\n\n        // Define the new column\n        column customer_order_number {\n            identifier: "customer_order_number"\n            primitive_type: "INTEGER"\n        }\n\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Now you can reference it in a new integer attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer_Order_Number")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Order")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n\n    class Order {\n        ...\n        \n        // Reference the new column\n        integer Customer_Order_Number {\n            name.en: "Customer Order Number"\n            sql: "${orders.customer_order_number}"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"For another example, check ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/historized-tables"},"our tutorial on historized tables"),"."))}m.isMDXComponent=!0}}]);