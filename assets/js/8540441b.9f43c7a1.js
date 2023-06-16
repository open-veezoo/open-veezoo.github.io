"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6118],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"url",title:"onto.URL",sidebar_label:"URL"},c=void 0,s={unversionedId:"reference/ontology/url",id:"reference/ontology/url",title:"onto.URL",description:"Definition",source:"@site/docs/reference/ontology/url.md",sourceDirName:"reference/ontology",slug:"/reference/ontology/url",permalink:"/docs/reference/ontology/url",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/ontology/url.md",tags:[],version:"current",frontMatter:{id:"url",title:"onto.URL",sidebar_label:"URL"},sidebar:"docs",previous:{title:"Birthdate",permalink:"/docs/reference/ontology/birthdate"},next:{title:"What is Discovery?",permalink:"/docs/reference/discovery/"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage",id:"usage-1",level:2},{value:"Limitations",id:"limitations",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onto.URL")," ontology type in Veezoo allows you to add hyperlinks to classes when displayed in tables. This makes the respective fields clickable, redirecting you to the URL when they are clicked."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Suppose you have a product catalog where each product has a corresponding URL to its page on your website. You can make the product name itself clickable in Veezoo, leading to its respective webpage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class Product {\n        name.en: "Product"\n        \n        from_table: product\n        sql: "${product.product_id}"\n        name_sql.en: "${product.product_name}"\n        \n        extends: onto.Product\n        \n        display_with: [\n           Product_Url\n        ]\n        \n        // We need a string attribute with the URL\n        string Product_Url {\n            name.en: "Product URL"\n\n            sql: "${product.url}"\n            \n            extends: onto.URL\n        }\n    }\n}\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Product_Url")," string attribute that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"onto.URL"),", meaning its values are interpreted as URLs. By defining ",(0,a.kt)("inlineCode",{parentName:"p"},"Product_Url")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"display_with"),", the product name in Veezoo will appear as a clickable hyperlink that leads to the corresponding product page on your website. The URL itself does not appear as a separate column."),(0,a.kt)("p",null,"Sometimes you may not have the full URL in the database, but you can derive it from an id. In this case, use ",(0,a.kt)("inlineCode",{parentName:"p"},"sql")," to generate the right URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string Product_Url {\n    name.en: "Product URL"\n\n    // We concatenate a base URL with an ID argument to generate the URL        \n    sql: "\'https://example.com/catalog?product_id=\' || ${product.id}"\n\n    extends: onto.URL\n}\n')),(0,a.kt)("h2",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"onto.URL"),", you need to define a string attribute in your class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"onto.URL")," and use it in ",(0,a.kt)("inlineCode",{parentName:"p"},"display_with"),". This attribute's values will then be interpreted as URLs and displayed as clickable hyperlinks in Veezoo."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"The URL must be valid and should start with ",(0,a.kt)("inlineCode",{parentName:"p"},"http://"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto:")," to work correctly. If the URL is not valid or improperly formatted, the hyperlink functionality may not work as expected."))}f.isMDXComponent=!0}}]);