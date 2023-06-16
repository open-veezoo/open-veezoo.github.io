"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[1614],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"arguments",title:"arguments"},s=void 0,u={unversionedId:"reference/kb-layer/function/arguments",id:"reference/kb-layer/function/arguments",title:"arguments",description:"Definition",source:"@site/docs/reference/kb-layer/function/arguments.md",sourceDirName:"reference/kb-layer/function",slug:"/reference/kb-layer/function/arguments",permalink:"/docs/reference/kb-layer/function/arguments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/function/arguments.md",tags:[],version:"current",frontMatter:{id:"arguments",title:"arguments"},sidebar:"docs",previous:{title:"What is a function?",permalink:"/docs/reference/kb-layer/function/"},next:{title:"dynamic_autocomplete",permalink:"/docs/reference/kb-layer/function/dynamic_autocomplete"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Guidelines",id:"guidelines",level:2}],m={toc:c},f="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," is a property used in Veezoo's function configuration to specify the types and properties of the arguments that the function accepts. This property provides a framework to define the input parameters, thereby enabling the function to interact with various parts of the Knowledge Graph."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," is an array where each element describes an argument the function accepts. The order of the elements in the array corresponds to the order of the arguments. Each argument can be defined in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Directly as a type, like ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"."),(0,i.kt)("li",{parentName:"ul"},"As an object with ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"single_value_only")," properties.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property is either a single type or an array of types that the argument can accept. For example, if an argument can be a number or a date, its type would be ",(0,i.kt)("inlineCode",{parentName:"p"},"[number, date]"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"single_value_only")," property is a boolean that indicates whether the argument accepts only single values. If ",(0,i.kt)("inlineCode",{parentName:"p"},"single_value_only")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the function accepts only literal values for this argument, not columns. This is useful for functions that require a constant value, such as a fixed date or a specific string."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"matches_regex")," function from our ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/function"},"examples here"),". Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," is used to define two arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function matches_regex {\n   name: "matches regex"\n   // Rest of function definition...\n   arguments: [ \n      { type: [string, class] },\n      { type: string, single_value_only: true}\n   ]\n   // Rest of function definition...\n}\n')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"matches_regex")," function takes two arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The first argument is either a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"class"),". Therefore, ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is defined as an array with two elements: ",(0,i.kt)("inlineCode",{parentName:"li"},"[string, class]"),"."),(0,i.kt)("li",{parentName:"ol"},"The second argument is a ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", but it must be a single value, not a column. Therefore, it's defined as an object with ",(0,i.kt)("inlineCode",{parentName:"li"},"type: string")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"single_value_only: true"),".")),(0,i.kt)("p",null,"When using the function, these arguments are provided in the same order as they are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," array."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("p",null,"When defining ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the arguments match the placeholders in the ",(0,i.kt)("inlineCode",{parentName:"li"},"sql_select")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sql_where")," properties."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"single_value_only")," property for arguments that need to be literal values."),(0,i.kt)("li",{parentName:"ul"},"If an argument can accept multiple types, define its ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," as an array of those types. ")),(0,i.kt)("p",null,"Remember, the ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," property is a key part of function definition, determining the types of data a function can operate on."))}d.isMDXComponent=!0}}]);