"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[8362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"sql_select",title:"sql_select"},c=void 0,s={unversionedId:"reference/kb-layer/function/sql_select",id:"reference/kb-layer/function/sql_select",title:"sql_select",description:"Definition",source:"@site/docs/reference/kb-layer/function/sql_select.md",sourceDirName:"reference/kb-layer/function",slug:"/reference/kb-layer/function/sql_select",permalink:"/docs/reference/kb-layer/function/sql_select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/kb-layer/function/sql_select.md",tags:[],version:"current",frontMatter:{id:"sql_select",title:"sql_select"},sidebar:"docs",previous:{title:"dynamic_display_name",permalink:"/docs/reference/kb-layer/function/dynamic_display_name"},next:{title:"sql_where",permalink:"/docs/reference/kb-layer/function/sql_where"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Guidelines",id:"guidelines",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sql_select")," is a property used in Veezoo's configuration to specify the SQL equivalent of a ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," when it appears in the SELECT clause of an SQL query. This property is crucial in translating Veezoo's language to SQL, enabling users to execute advanced database functions without needing to know SQL."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sql_select")," is a string that holds the actual SQL code, with placeholders (",(0,a.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$3"),", etc.) representing the arguments that the function accepts. These placeholders correspond to the first, second, third, etc., arguments and will be replaced with the actual values when the function is called."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's consider the ",(0,a.kt)("inlineCode",{parentName:"p"},"Length")," function from our ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/function"},"examples here"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"sql_select")," property is used to define the SQL operation that calculates the length of a string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Length {\n    name: "Length"\n    // Rest of function definition...\n    sql_select: "LENGTH($1)"\n}\n')),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"LENGTH($1)")," is an SQL function that calculates the length of a string. The ",(0,a.kt)("inlineCode",{parentName:"p"},"$1"),' is a placeholder for the first argument, which in this case would be a string. If the function is called with an argument "email", ',(0,a.kt)("inlineCode",{parentName:"p"},"LENGTH(email)")," will be inserted in the SELECT clause of the SQL query."),(0,a.kt)("h2",{id:"guidelines"},"Guidelines"),(0,a.kt)("p",null,"When defining ",(0,a.kt)("inlineCode",{parentName:"p"},"sql_select"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use valid SQL syntax corresponding to your database engine."),(0,a.kt)("li",{parentName:"ul"},"Make sure to correctly map the function's arguments to the placeholders."),(0,a.kt)("li",{parentName:"ul"},"The resulting SQL function should return a value that matches the function's specified return type.")),(0,a.kt)("p",null,"Remember, ",(0,a.kt)("inlineCode",{parentName:"p"},"sql_select")," is essential for the correct transformation of Veezoo's natural language questions into SQL queries. It enables the use of advanced database functions directly within Veezoo, enhancing the analytical capabilities offered to the user."))}m.isMDXComponent=!0}}]);