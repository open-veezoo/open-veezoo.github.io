"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[6248],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||s;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2633:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=["components"],o={id:"subclass",title:"subclass",sidebar_label:"Subclass",slug:"/reference/kb-layer/subclass"},l=void 0,c={unversionedId:"reference/kb-layer/class/subclass",id:"reference/kb-layer/class/subclass",title:"subclass",description:"Definition",source:"@site/docs/reference/kb-layer/class/subclass.md",sourceDirName:"reference/kb-layer/class",slug:"/reference/kb-layer/subclass",permalink:"/docs/reference/kb-layer/subclass",draft:!1,tags:[],version:"current",frontMatter:{id:"subclass",title:"subclass",sidebar_label:"Subclass",slug:"/reference/kb-layer/subclass"},sidebar:"reference",previous:{title:"Ordinal Class",permalink:"/docs/reference/kb-layer/class/ordinal-class"},next:{title:"Entity",permalink:"/docs/reference/kb-layer/entity/"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p},f="wrapper";function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)(f,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"definition"},"Definition"),(0,s.kt)("p",null,"A subclass designates a subset of a class with some special property.\nSubclasses in Veezoo are similar to subclassing (and inheritance) in object-oriented programming, but for your data."),(0,s.kt)("p",null,"Some typical examples of subclasses are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Company Customer")," as a subclass of ",(0,s.kt)("inlineCode",{parentName:"li"},"Customer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Cancellation")," as a subclass of ",(0,s.kt)("inlineCode",{parentName:"li"},"Transaction")," (with a transaction being any change of a contract like an insurance policy)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Phone Call")," as a subclass of ",(0,s.kt)("inlineCode",{parentName:"li"},"Customer Contact"))),(0,s.kt)("p",null,"A subclass is defined by a filter on the class that holds for all subclass instances using VQL (Veezoo Query Language).\nIt shares the attributes of its parent class, but can also have its own attributes."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"The main purpose is to group related attributes together that only make sense for a subset of data.\nFor example, a ",(0,s.kt)("inlineCode",{parentName:"p"},"CUSTOMER")," table can contain both private and company customers.\nBut there may be columns that are only relevant for private customers (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"BIRTHDATE"),"), while others are only relevant for company customers (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"COMPANY_SIZE"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"INDUSTRY"),")."),(0,s.kt)("p",null,"A good subclass definition helps Veezoo understand questions better by excluding nonsensical interpretations of a question, groups related attributes together so that users can more easily understand the data and makes autocomplete more precise."),(0,s.kt)("p",null,"Now, let's have a look at an example definition!"),(0,s.kt)("p",null,"File: ",(0,s.kt)("em",{parentName:"p"},"hitchhiker/knowledge-base/classes/Customer/class.vkl")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'kb {\n    class Customer {\n        name.en: "Customer"\n        /* ... */\n\n\n        // Class indicating whether a customer is a private or company customer,\n        //  used to define the subclasses\n        class Segment { /* ... */ }\n\n        // Subclass for companies\n        subclass Company_Customer {\n            // Subclasses often use a display_name instead of name\n            //  to avoid conflicts with existing concepts,\n            //  in this case the "Company" segment entity\n            display_name.en: "Company Customer"\n\n            // The subclass is defined as all customers that are in the "Company" segment\n            definition: "this.Segment = kb.Customer.Segment.Company"\n\n\n            // Nested attributes in the subclass are\n            //  only available if the condition in definition holds\n            number CompanySize { /* ... */ }\n            class Industry { /* ... */ }\n        }\n\n        // Subclass for private customers\n        subclass Private_Customer {\n            display_name.en: "Private Customer"\n\n            definition: "this.Segment = kb.Customer.Segment.Private"\n\n            date Birthdate { /* ... */ }\n        }\n    }\n}\n')),(0,s.kt)("p",null,"The main part of a subclass definitions are the ",(0,s.kt)("inlineCode",{parentName:"p"},"definition")," and the nested attributes, with the ",(0,s.kt)("inlineCode",{parentName:"p"},"definition")," determining for which entities of the class the attributes make sense."))}d.isMDXComponent=!0}}]);