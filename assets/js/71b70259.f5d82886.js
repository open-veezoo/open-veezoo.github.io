"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[1531],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3207:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=t(4996),s=["components"],l={id:"evolutions",title:"Evolutions"},u=void 0,c={unversionedId:"reference/evolutions/evolutions",id:"reference/evolutions/evolutions",title:"Evolutions",description:"Definition",source:"@site/docs/reference/evolutions/evolutions.md",sourceDirName:"reference/evolutions",slug:"/reference/evolutions/",permalink:"/docs/reference/evolutions/",draft:!1,tags:[],version:"current",frontMatter:{id:"evolutions",title:"Evolutions"},sidebar:"reference",previous:{title:"Ground Truths",permalink:"/docs/reference/ground-truths/"},next:{title:"Person",permalink:"/docs/reference/ontology/person"}},d={},p=[{value:"Definition",id:"definition",level:2},{value:"Creating Evolutions",id:"creating-evolutions",level:2},{value:"Evolution Types",id:"evolution-types",level:2},{value:"Moving",id:"moving",level:3},{value:"Advanced: Moving across classes",id:"advanced-moving-across-classes",level:4},{value:"Advanced: Moving across classes over relationships",id:"advanced-moving-across-classes-over-relationships",level:4}],m={toc:p},h="wrapper";function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)(h,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"As your business changes and your data model evolves with it, changes in your Knowledge Graph (KG) are inevitable. This could be due to simple renaming operations or more complex restructuring where you relocate attributes from one class to another."),(0,i.kt)("p",null,"However, these changes can disrupt the functionality of your existing dashboards by breaking widgets and shared answers. This is because they contain references to your KG attributes and classes, which can become stale or incorrect after modifications."),(0,i.kt)("p",null,"Evolutions in Veezoo serve to maintain the integrity of your dashboards by updating these references whenever there are changes in your KG. They act as a bridge that connects your old KG structure to the new one, ensuring that your widgets and shared answers continue to function correctly."),(0,i.kt)("h2",{id:"creating-evolutions"},"Creating Evolutions"),(0,i.kt)("p",null,"Evolutions are necessary when you perform changes in your KG that could potentially disrupt your existing widgets or shared answers. They ensure that the references in these components are updated and aligned with the new KG structure."),(0,i.kt)("p",null,"For the following change, ",(0,i.kt)("strong",{parentName:"p"},"you do NOT need an evolution"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'# Before\nclass Dim_Customer {\n    name: "Dim Customer"\n    ...\n}\n\n# After\n// Same identifier\nclass Dim_Customer {\n    // Name property changed for readability\n    name: "Customer"\n}\n')),(0,i.kt)("p",null,"For the following example, ",(0,i.kt)("strong",{parentName:"p"},"you need an evolution")," if you have dashboards that use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"# Before\nclass Dim_Customer {\n    ...\n}\n\n# After\n// Identifier changed\nclass Customer {\n    ...\n}\n\n")),(0,i.kt)("p",null,"In this example, you've changed the identifier of the class from ",(0,i.kt)("inlineCode",{parentName:"p"},"Dim_Customer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," in your KG. Any widgets that reference ",(0,i.kt)("inlineCode",{parentName:"p"},"Dim_Customer")," will break."),(0,i.kt)("p",null,"You will see an error message like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"Error loading widget: Could not find in the Knowledge Graph: kb.Dim_Customers")),(0,i.kt)("img",{alt:"Breaking Change",width:"700",src:(0,a.Z)("/img/reference/evolutions/error.png")}),(0,i.kt)("p",null,"To avoid this, you have to create an evolution step to update these references from ",(0,i.kt)("inlineCode",{parentName:"p"},"Dim_Customer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer"),"."),(0,i.kt)("p",null,"First, create an evolutions file in Studio, if you don't have one already:"),(0,i.kt)("img",{alt:"Create File",width:"300",src:(0,a.Z)("/img/reference/evolutions/create-file.png")}),(0,i.kt)("p",null,"To access the file next time, you will need to switch to the file view on the Sidebar and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"evolutions"),"."),(0,i.kt)("img",{alt:"Evolutions Sidebar",width:"300",src:(0,a.Z)("/img/reference/evolutions/evolutions-sidebar.png")}),(0,i.kt)("p",null,"This is the file that was created for you:"),(0,i.kt)("img",{alt:"Empty Evolutions File",width:"500",src:(0,a.Z)("/img/reference/evolutions/evolutions-file.png")}),(0,i.kt)("p",null,"Now define evolutions by ",(0,i.kt)("strong",{parentName:"p"},"appending to the end of the list")," of evolution steps in the evolutions file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'evolutions {\n    evolution_list: [\n        // past evolutions\n        ...,\n        // add at the end the new evolution\n        {\n            type: EvolutionType.Moving\n            from: "kb.Dim_Customer"\n            to: "kb.Customer"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},'from: "kb.Dim_Customer"')," refers to the original class identifier, and ",(0,i.kt)("inlineCode",{parentName:"p"},'to: "kb.Customer"')," refers to the new class identifier."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The order of the evolution steps is critical, as they are applied sequentially!"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Do NOT reorder, remove or modify past evolutions!"))),(0,i.kt)("p",null,"We plan to improve the UX for you to create evolutions in a more controlled way and validate the changes before applying. But for now use evolutions with caution and contact us, if you need help."),(0,i.kt)("h2",{id:"evolution-types"},"Evolution Types"),(0,i.kt)("h3",{id:"moving"},"Moving"),(0,i.kt)("p",null,"The 'Moving' evolution type comes into play when you rename a resource or move an attribute to a different outer class. In our example, we changed the identifier from ",(0,i.kt)("inlineCode",{parentName:"p"},"Dim_Customer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer"),". This operation would require a 'Moving' evolution."),(0,i.kt)("p",null,"The structure of a 'Moving' evolution is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    type: EvolutionType.Moving\n    \n    from: "kb.Dim_Customer"\n\n    to: "kb.Customer"\n}\n')),(0,i.kt)("h4",{id:"advanced-moving-across-classes"},"Advanced: Moving across classes"),(0,i.kt)("p",null,"In more complex scenarios where the attribute is being moved to a class that is connected via another class, the ",(0,i.kt)("inlineCode",{parentName:"p"},"connection")," field is used. "),(0,i.kt)("p",null,"Let's say you have the following state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"kb {\n    class Order {\n        ...\n\n        // identifier is kb.Order.Product\n        class Product {\n            ...\n        }\n\n        // identifier is kb.Order.Category\n        class Category {\n            ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Now, you may want to move ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," to more accurately represent the business domain, as it is a product category, not an order category. This is how you modified it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"kb {\n    class Order {\n        ...\n\n        // identifier is kb.Order.Product\n        class Product {\n            ...\n\n            // identifier is now kb.Order.Product.Category\n            class Category {\n                ...\n            }\n        }\n\n    }\n}\n")),(0,i.kt)("p",null,"To evolve all widgets accordingly, you will have to add the following evolution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  type: EvolutionType.Moving\n\n  from: "kb.Order.Category"\n\n  to: "kb.Order.Product.Category"\n\n  connection: [\n    "kb.Order.Product.relation", // this is an implicit relationship that connects Order to Product\n    "kb.Order.Product" // this is the end class\n  ]\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"connection"),' field specifies the relationship-class path from the original domain ("Order") to the new domain ("Product"). This ensures that the references in your widgets and shared answers are updated correctly.'),(0,i.kt)("p",null,"Remember, 'Moving' evolution does not physically alter the structure of your KG. It merely updates the references in your widgets and shared answers to reflect the new KG structure. The actual KG restructuring should be performed separately."),(0,i.kt)("h4",{id:"advanced-moving-across-classes-over-relationships"},"Advanced: Moving across classes over relationships"),(0,i.kt)("p",null,"Let's build on top of the previous example with some slight modifications."),(0,i.kt)("p",null,"We start with the following state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="knowledge-base/classes/Order/class.vkl"',title:'"knowledge-base/classes/Order/class.vkl"'},"kb {\n    class Order {\n        ...\n\n        relationship with_Product {\n            to: kb.Product\n            sql: ...\n        }\n\n        // identifier is kb.Order.Category\n        class Category {\n            ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"And another file for ",(0,i.kt)("inlineCode",{parentName:"p"},"kb.Product"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="knowledge-base/classes/Product/class.vkl"',title:'"knowledge-base/classes/Product/class.vkl"'},"kb {\n    class Product {\n        ...\n    }\n}\n")),(0,i.kt)("p",null,"Now, let's say the database schema changed and the information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," is now in the Product table. This is how you modified the Knowledge Graph:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="knowledge-base/classes/Order/class.vkl"',title:'"knowledge-base/classes/Order/class.vkl"'},"kb {\n    class Order {\n        ...\n\n        relationship with_Product {\n            to: kb.Product\n            sql: ...\n        }\n\n        // removed Category from inside here\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="knowledge-base/classes/Product/class.vkl"',title:'"knowledge-base/classes/Product/class.vkl"'},"kb {\n    class Product {\n        ...\n\n        // added it here\n        // the identifier is now kb.Product.Category\n        class Category {\n            ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"To evolve all widgets accordingly, you will have to add the following evolution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  type: EvolutionType.Moving\n\n  from: "kb.Order.Category"\n\n  to: "kb.Product.Category"\n\n  connection: [\n    "kb.Order.with_Product", // this is the explicit relationship that connects Order to Product\n    "kb.Product" // this is the end class\n  ]\n}\n')))}g.isMDXComponent=!0}}]);