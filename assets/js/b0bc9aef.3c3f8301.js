"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9891],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4996),l=["components"],s={id:"boards",title:"Boards"},d=void 0,u={unversionedId:"reference/boards/boards",id:"reference/boards/boards",title:"Boards",description:"Overview",source:"@site/docs/reference/boards/boards.md",sourceDirName:"reference/boards",slug:"/reference/boards/",permalink:"/docs/reference/boards/",draft:!1,tags:[],version:"current",frontMatter:{id:"boards",title:"Boards"},sidebar:"reference",previous:{title:"Discovery",permalink:"/docs/reference/discovery/"},next:{title:"Evolutions",permalink:"/docs/reference/evolutions/"}},h={},p=[{value:"Overview",id:"overview",level:2},{value:"Advantages of defining as VKL code",id:"advantages-of-defining-as-vkl-code",level:2},{value:"How to create it",id:"how-to-create-it",level:2},{value:"VKL Structure",id:"vkl-structure",level:2},{value:"board",id:"board",level:3},{value:"widget",id:"widget",level:3},{value:"visualization",id:"visualization",level:4},{value:"Example",id:"example",level:2}],c={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Boards in Veezoo are custom dashboards that display selected data insights through various types of visualizations. They provide a structured and interactive view of your data, which is particularly useful for monitoring key metrics, performing high-level data analysis, and presenting data insights."),(0,i.kt)("p",null,"A board can be created over the Chat UI or defined through a ",(0,i.kt)("inlineCode",{parentName:"p"},"board")," declaration containing one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"widget"),"s. Each widget represents a data insight, typically in the form of a question, displayed in a specific visualization format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'qb {\n    board Sales_Analysis {\n        name.en: "Sales Analysis"\n        \n        for_user_role: "Sales Manager"\n        \n        widget Revenue_Overview {\n            name.en: "Revenue per Category"\n            \n            board_row: 0\n            board_column: 0\n\n            height: 3\n            width: 6\n\n            question.en: "Revenue per category this year"\n            visualization: BarChart\n        }\n        \n        widget Sales_Trends {\n            name.en: "Sales Trends"\n            \n            board_row: 0\n            board_column: 6\n\n            height: 3\n            width: 6\n\n            question.en: "Revenue per month this year"\n            visualization: LineChart\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"advantages-of-defining-as-vkl-code"},"Advantages of defining as VKL code"),(0,i.kt)("p",null,"By defining it as VKL code, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"collaborate more easily with other team members"),(0,i.kt)("li",{parentName:"ul"},"have it version controlled"),(0,i.kt)("li",{parentName:"ul"},"because it is based on questions, it evolves more naturally with the changes to your schema without you having to adapt it"),(0,i.kt)("li",{parentName:"ul"},"see in one view how it is defined")),(0,i.kt)("h2",{id:"how-to-create-it"},"How to create it"),(0,i.kt)("p",null,"To create a board, open Studio and click to create a new Board file in the Sidebar. When the modal appears, give it a name, e.g. Board."),(0,i.kt)("img",{alt:"Studio Sidebar",width:"300",src:(0,o.Z)("/img/reference/boards/create-file.png")}),(0,i.kt)("p",null,"Switch to the file view on the sidebar so you can explore the boards you defined."),(0,i.kt)("img",{alt:"Studio Sidebar",width:"300",src:(0,o.Z)("/img/reference/boards/open-in-sidebar.png")}),(0,i.kt)("p",null,"Check the documentation below for more information on how to define your Board experience."),(0,i.kt)("h2",{id:"vkl-structure"},"VKL Structure"),(0,i.kt)("p",null,"Here's a brief overview of the structure of the VKL file with the Board definition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"board"),": The highest level of grouping in the board. Each board contains several widgets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"widget"),": Each widget represents a data insight displayed in a specific visualization format.")),(0,i.kt)("p",null,"Each of these elements has several properties:"),(0,i.kt)("h3",{id:"board"},"board"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The name of the board, displayed to the users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"for_user_role"),": (Optional) A user role with which the board is shared. If not set, the board is shared with all users.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Depending on whether ",(0,i.kt)("inlineCode",{parentName:"p"},"for_user_role")," is set, VKL boards are shared with a given list of roles or the whole organization. In both cases, they are added to all users' sidebars by default. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/share-boards"},"here")," for more details about shared boards.")),(0,i.kt)("h3",{id:"widget"},"widget"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The name of the widget, displayed to the users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"board_row"),": The row number where the widget is displayed on the board."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"board_column"),": The column number where the widget is displayed on the board. Defined between 1 and 12."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height"),": The height of the widget."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width"),": The width of the widget, between 1 and 12."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"question"),": The data insight that the widget displays."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visualization"),": The type of visualization used to display the data insight.")),(0,i.kt)("h4",{id:"visualization"},"visualization"),(0,i.kt)("p",null,"This is the type of visualization used to display the data insight. You can set this for every widget. If unset, Veezoo chooses the most appropriate visualization.\nYou can choose from a number of available charts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AreaChart\nMultiAreaChart\nStackedAreaChart\nPercentStackedAreaChart\n\nBarChart\nMultiBarChart\nStackedBarChart\nPercentStackedBarChart\n\nColumnChart\nMultiColumnChart\nDrillDownColumnChart\nMultiDrillDownColumnChart\nStackedColumnChart\nPercentStackedColumnChart\n\nPieChart\nDrillDownPieChart\n\nLineChart\nMultiLineChart\nMultiAxesLineChart\nRangeMultiLineChart\n\nBubbleChart\nMultiBubbleChart\nLabeledMultiBubbleChart\n\nScatterChart\nMultiScatterChart\nLabeledMultiScatterChart\n\nTreeMap\n\nChoroplethMap\n\nHeatMatrixChart\n\nTableChart\n\nSimpleNumberChart\nTwoNumberChart\nNumberComparisonChart\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is an example of how a board can be structured in Veezoo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'qb {\n    board Sales_Analysis {\n        name.en: "Sales Analysis"\n        \n        for_user_role: "Sales Manager"\n        \n        widget Revenue_Overview {\n            name.en: "Revenue per Category"\n            \n            board_row: 0\n            board_column: 0\n\n            height: 3\n            width: 6\n\n            question.en: "Revenue per category this year"\n            visualization: BarChart\n        }\n        \n        widget Sales_Trends {\n            name.en: "Sales Trends"\n            \n            board_row: 0\n            board_column: 6\n\n            height: 3\n            width: 6\n\n            question.en: "Revenue per month this year"\n            visualization: LineChart\n        }\n    }\n}\n')),(0,i.kt)("p",null,"In this example, there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sales Analysis"),' board designed for the "Sales Manager" role. It contains two widgets: ',(0,i.kt)("inlineCode",{parentName:"p"},"Revenue Overview")," displaying total revenue by product category this year as a BarChart, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sales Trends")," showing the sales trend over the past year as a LineChart. The ",(0,i.kt)("inlineCode",{parentName:"p"},"board_column"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"board_row"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," properties define the placement and size of each widget on the board."),(0,i.kt)("p",null,"Boards in Veezoo offer a robust and user-friendly way to present your data insights. By combining multiple related widgets into one dashboard, you can create a comprehensive and visually appealing overview of your data."))}f.isMDXComponent=!0}}]);