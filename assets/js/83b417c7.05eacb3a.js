"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6916],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4463:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"description_sql",title:"\u2699\ufe0f description_sql"},c=void 0,s={unversionedId:"reference/kb-layer/class/description_sql",id:"reference/kb-layer/class/description_sql",title:"\u2699\ufe0f description_sql",description:"Definition",source:"@site/docs/reference/kb-layer/class/description_sql.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/class/description_sql",permalink:"/docs/reference/kb-layer/class/description_sql",draft:!1,tags:[],version:"current",frontMatter:{id:"description_sql",title:"\u2699\ufe0f description_sql"},sidebar:"reference",previous:{title:"\u2699\ufe0f sql / name_sql / synonym_sql",permalink:"/docs/reference/kb-layer/class/sql"},next:{title:"\u2699\ufe0f creation_date",permalink:"/docs/reference/kb-layer/class/creation_date"}},p={},d=[{value:"Definition",id:"definition",level:2},{value:"Examples",id:"examples",level:3},{value:"Example 1: Simple One-Liner",id:"example-1-simple-one-liner",level:4},{value:"Example 2: Advanced Markdown Description",id:"example-2-advanced-markdown-description",level:4}],u={toc:d},m="wrapper";function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"name_sql"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description_sql")," specifies how descriptions for entities are generated. You can use it to provide a detailed and structured description of an entity, either as a simple one-liner or a more advanced markdown-based format."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"example-1-simple-one-liner"},"Example 1: Simple One-Liner"),(0,o.kt)("p",null,"This example shows a basic ",(0,o.kt)("inlineCode",{parentName:"p"},"description_sql")," for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Product"),", using just the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"kb {\n    class Product {\n        name.en: \"Product\"\n        from_table: product\n        // e.g. P1234\n        sql: \"${product.id}\"\n        // e.g. [P1234] Apple iPhone 13\n        name_sql.en: \"'[' || ${product.id} || '] ' || ${product.name}\"        \n        // Simple one-liner description\n        description_sql.en: \"${product.name} || ' is in the ' || ${product.category} || ' category.'\"\n        ...\n    }\n}\n")),(0,o.kt)("p",null,"The entities will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'kb.Product {\n    entity P1234_Apple_iPhone_13 {         \n        name.en: "[P1234] Apple iPhone 13"\n\n        description.en: "Apple iPhone 13 is in the Electronics category."\n\n        id: "P1234"\n    }\n...\n}\n')),(0,o.kt)("h4",{id:"example-2-advanced-markdown-description"},"Example 2: Advanced Markdown Description"),(0,o.kt)("p",null,"This example generates a more detailed description using multiple attributes like ",(0,o.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subcategory"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"stock_level"),", formatted as markdown for better readability:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"kb {\n    class Product {\n        name.en: \"Product\"\n        from_table: product\n        // e.g. P1234\n        sql: \"${product.id}\"\n        // e.g. [P1234] Apple iPhone 13\n        name_sql.en: \"'[' || ${product.id} || '] ' || ${product.name}\"        \n        // Advanced markdown description\n        description_sql.en: \"\"\"\n            '**Product**: ' || ${product.name} || '\n            \n            **Category**: ' || ${product.category} || '\n            \n            **Subcategory**: ' || ${product.subcategory} || '\n            \n            **Stock Level**: ' || ${product.stock_level} || ' units in stock'\n        \"\"\"\n        ...\n    }\n}\n")),(0,o.kt)("p",null,"The entities will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'kb.Product {\n    entity P1234_Apple_iPhone_13 {         \n        name.en: "[P1234] Apple iPhone 13"\n\n        description.en: """\n          **Product**: Apple iPhone 13  \n          \n          **Category**: Electronics  \n          \n          **Subcategory**: Smartphones  \n          \n          **Stock Level**: 24 units in stock\n        """\n\n        id: "P1234"\n    }\n...\n}\n')),(0,o.kt)("p",null,"In the second example, markdown formatting is used to make the description more structured and visually appealing, providing clear information on key product attributes."))}f.isMDXComponent=!0}}]);