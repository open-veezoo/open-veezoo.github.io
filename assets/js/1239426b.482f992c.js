"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[448],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return v}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(i),y=r,v=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return i?n.createElement(v,a(a({ref:t},d),{},{components:i})):n.createElement(v,a({ref:t},d))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},7293:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=i(4996),c=["components"],s={id:"discovery",title:"Discovery"},l=void 0,d={unversionedId:"reference/discovery/discovery",id:"reference/discovery/discovery",title:"Discovery",description:"Overview",source:"@site/docs/reference/discovery/discovery.md",sourceDirName:"reference/discovery",slug:"/reference/discovery/",permalink:"/docs/reference/discovery/",draft:!1,tags:[],version:"current",frontMatter:{id:"discovery",title:"Discovery"},sidebar:"reference",previous:{title:"virtual_table",permalink:"/docs/reference/db-layer/virtual-table"},next:{title:"Boards",permalink:"/docs/reference/boards/"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"How to create it",id:"how-to-create-it",level:2},{value:"How to access it",id:"how-to-access-it",level:2},{value:"VKL Structure",id:"vkl-structure",level:2},{value:"discovery_category",id:"discovery_category",level:3},{value:"discovery_topic",id:"discovery_topic",level:3},{value:"discovery_question",id:"discovery_question",level:3},{value:"Example",id:"example",level:2}],y={toc:p},v="wrapper";function h(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)(v,(0,n.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Discovery in Veezoo is a unique and powerful feature designed to facilitate the exploration of data in an intuitive, question-oriented manner. It allows the grouping of relevant questions into various topics and categories, providing a guided pathway to uncover meaningful insights, use cases, and functionalities."),(0,o.kt)("iframe",{width:"800",height:"500",src:"https://www.youtube.com/embed/mauCXfSdzJo?si=yNHPqre_Pl6iJBDF",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"how-to-create-it"},"How to create it"),(0,o.kt)("p",null,"First, open Studio and click to create a new Discovery file in the Sidebar. When the modal appears, give it a name, e.g. Discovery."),(0,o.kt)("img",{alt:"Studio Sidebar",width:"300",src:(0,a.Z)("/img/reference/discovery/create-file.png")}),(0,o.kt)("p",null,"The new file generated will already have an example for you to modify."),(0,o.kt)("img",{alt:"Studio Sidebar",width:"1000",src:(0,a.Z)("/img/reference/discovery/example-file.png")}),(0,o.kt)("p",null,"The discovery functionality is defined through a ",(0,o.kt)("inlineCode",{parentName:"p"},"discovery_category")," containing one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"discovery_topic"),"s, each of which may have a number of ",(0,o.kt)("inlineCode",{parentName:"p"},"discovery_question"),"s."),(0,o.kt)("p",null,"You can navigate through the sidebar to explore the categories and topics you defined."),(0,o.kt)("img",{alt:"Studio Sidebar",width:"300",src:(0,a.Z)("/img/reference/discovery/open-in-sidebar.png")}),(0,o.kt)("p",null,"Check the documentation below for more information on how to define your Discovery experience."),(0,o.kt)("h2",{id:"how-to-access-it"},"How to access it"),(0,o.kt)("p",null,"In the Chat UI, you can access Discovery over the Autocomplete under 'What can I ask?'."),(0,o.kt)("img",{alt:"Studio Sidebar",width:"500",src:(0,a.Z)("/img/reference/discovery/what-can-i-ask.png")}),(0,o.kt)("p",null,"You will see Discovery with the categories and topics you have defined in Studio."),(0,o.kt)("img",{alt:"Discovery",width:"1000",src:(0,a.Z)("/img/reference/discovery/discovery-ui.png")}),(0,o.kt)("img",{alt:"Discovery Topic",width:"1000",src:(0,a.Z)("/img/reference/discovery/discovery-topic.png")}),(0,o.kt)("p",null,"You can click on 'Open in Chat' to bring any answer to your Chat history and continue exploring."),(0,o.kt)("img",{alt:"Discovery",width:"1000",src:(0,a.Z)("/img/reference/discovery/open-in-chat.png")}),(0,o.kt)("h2",{id:"vkl-structure"},"VKL Structure"),(0,o.kt)("p",null,"Here's a brief overview of the structure of the VKL file with the Discovery definition:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discovery_category"),": The highest level of grouping in the discovery. Each category contains several topics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discovery_topic"),": Each topic belongs to a specific category and contains a number of related questions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discovery_question"),": These are the actual questions that users can ask, grouped under a specific topic.")),(0,o.kt)("p",null,"Each of these elements has several properties:"),(0,o.kt)("h3",{id:"discovery_category"},"discovery_category"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position"),": An integer that determines the order in which the categories are displayed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The title of the category, displayed to the users.")),(0,o.kt)("h3",{id:"discovery_topic"},"discovery_topic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position"),": An integer that determines the order in which the topics are displayed within their category."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The title of the topic, displayed to the users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"topic_description"),": A brief description of the topic, displayed to the users.")),(0,o.kt)("h3",{id:"discovery_question"},"discovery_question"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position"),": (Optional) An integer that determines the order in which the questions are displayed within their topic. If not provided, questions are ordered by their natural order in the code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"question"),": The actual question, displayed to the users.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of how discovery can be structured in Veezoo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'qb {\n    discovery_category Sales_Analytics {\n        position: 1\n        title: "Sales Analytics"\n        \n        discovery_topic Revenue_Analysis {\n            position: 1\n            title: "Revenue Analysis"\n            topic_description: "Explore key metrics about revenue generation and performance."\n            \n            discovery_question 1 {\n                question: "What is the total revenue by product category?"\n            }\n\n            discovery_question 2 {\n                question: "What is the average transaction value per customer?"\n            }\n        }\n\n        discovery_topic Sales_Trends {\n            position: 2\n            title: "Sales Trends"\n            topic_description: "Identify sales trends and patterns over time."\n            \n            ...\n        }\n    }\n\n    discovery_category Customer_Insights {\n        position: 2\n        title: "Customer Insights"\n        \n        ...\n    }\n}\n\n')),(0,o.kt)("p",null,"In this example, there's a ",(0,o.kt)("inlineCode",{parentName:"p"},"Sales Analytics")," category containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Revenue Analysis"),' topic, which itself contains two questions: "What is the total revenue by product category?" and "What is the average transaction value per customer?". The ordering of the categories, topics, and questions is defined by the ',(0,o.kt)("inlineCode",{parentName:"p"},"position")," property. "),(0,o.kt)("p",null,"Remember, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery")," functionality in Veezoo is an excellent way to guide your users in their data exploration journey by providing a set of predefined questions grouped in a logical and intuitive way."))}h.isMDXComponent=!0}}]);