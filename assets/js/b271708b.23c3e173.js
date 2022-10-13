"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6248],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(3117),s=n(102),r=(n(7294),n(3905)),i=["components"],o={id:"subclass",title:"subclass",sidebar_label:"What is a subclass?",slug:"/reference/kb-layer/subclass"},l=void 0,c={unversionedId:"reference/kb-layer/class/subclass",id:"reference/kb-layer/class/subclass",title:"subclass",description:"Definition",source:"@site/docs/reference/kb-layer/class/subclass.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/subclass",permalink:"/docs/reference/kb-layer/subclass",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/class/subclass.md",tags:[],version:"current",frontMatter:{id:"subclass",title:"subclass",sidebar_label:"What is a subclass?",slug:"/reference/kb-layer/subclass"},sidebar:"docs",previous:{title:"extends",permalink:"/docs/reference/kb-layer/class/extends"},next:{title:"What is an entity?",permalink:"/docs/reference/kb-layer/entity/"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A subclass designates a subset of a class with some special property.\nSubclasses in Veezoo are similar to subclassing (and inheritance) in object-oriented programming, but for your data."),(0,r.kt)("p",null,"Some typical examples of subclasses are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Company Customer")," as a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Customer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cancellation")," as a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Transaction")," (with a transaction being any change of a contract like an insurance policy)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Phone Call")," as a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Customer Contact"))),(0,r.kt)("p",null,"A subclass is defined by a filter on the class that holds for all subclass instances using VQL (Veezoo Query Language).\nIt shares the attributes of its parent class, but can also have its own attributes."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The main purpose is to group related attributes together that only make sense for a subset of data.\nFor example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"CUSTOMER")," table can contain both private and company customers.\nBut there may be columns that are only relevant for private customers (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"BIRTHDATE"),"), while others are only relevant for company customers (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPANY_SIZE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INDUSTRY"),")."),(0,r.kt)("p",null,"A good subclass definition helps Veezoo understand questions better by excluding nonsensical interpretations of a question, groups related attributes together so that users can more easily understand the data and makes autocomplete more precise."),(0,r.kt)("p",null,"Now, let's have a look at an example definition!"),(0,r.kt)("p",null,"File: ",(0,r.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer/class.vkl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class Customer {\n        name.en: "Customer"\n        /* ... */\n\n\n        // Class indicating whether a customer is a private or company customer,\n        //  used to define the subclasses\n        class Segment { /* ... */ }\n\n        // Subclass for companies\n        subclass Company_Customer {\n            // Subclasses often use a display_name instead of name\n            //  to avoid conflicts with existing concepts,\n            //  in this case the "Company" segment entity\n            display_name.en: "Company Customer"\n\n            // The subclass is defined as all customers that are in the "Company" segment\n            definition: "this.Segment = kb.Customer.Segment.Company"\n\n\n            // Nested attributes in the subclass are\n            //  only available if the condition in definition holds\n            number CompanySize { /* ... */ }\n            class Industry { /* ... */ }\n        }\n\n        // Subclass for private customers\n        subclass Private_Customer {\n            display_name.en: "Private Customer"\n\n            definition: "this.Segment = kb.Customer.Segment.Private"\n\n            date Birthdate { /* ... */ }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The main part of a subclass definitions are the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition")," and the nested attributes, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition")," determining for which entities of the class the attributes make sense."))}d.isMDXComponent=!0}}]);