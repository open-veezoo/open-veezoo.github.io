"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[791],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?i.createElement(h,o(o({ref:t},d),{},{components:a})):i.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9681:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=a(4996),l=["components"],s={title:"Configure a Knowledge Graph from Scratch"},p=void 0,d={unversionedId:"tutorials/kg-from-scratch",id:"tutorials/kg-from-scratch",title:"Configure a Knowledge Graph from Scratch",description:"Overview",source:"@site/docs/tutorials/kg-from-scratch.md",sourceDirName:"tutorials",slug:"/tutorials/kg-from-scratch",permalink:"/docs/tutorials/kg-from-scratch",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure a Knowledge Graph from Scratch"},sidebar:"docs",previous:{title:"Knowledge Base Layer",permalink:"/docs/kb-layer"},next:{title:"Add Veezoo to your browser",permalink:"/docs/tutorials/add-veezoo-to-your-browser"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Step 0: Preparation",id:"step-0-preparation",level:2},{value:"Step 1: Naming",id:"step-1-naming",level:2},{value:"Step 2: Defining Relationships",id:"step-2-defining-relationships",level:2},{value:"Step 3: Verifying Types",id:"step-3-verifying-types",level:2},{value:"Step 4: Removing Ambiguity",id:"step-4-removing-ambiguity",level:2},{value:"Step 5: Adding Synonyms",id:"step-5-adding-synonyms",level:2},{value:"Step 6: Defining Defaults",id:"step-6-defining-defaults",level:2},{value:"Default Date",id:"default-date",level:3},{value:"Default Filters",id:"default-filters",level:3},{value:"Step 7: Defining Measures and new Dimensions",id:"step-7-defining-measures-and-new-dimensions",level:2},{value:"Step 8: Improving Explainability",id:"step-8-improving-explainability",level:2},{value:"Adding Descriptions",id:"adding-descriptions",level:3},{value:"Adding Display Names",id:"adding-display-names",level:3},{value:"Step 9: Improving How Answers are Displayed",id:"step-9-improving-how-answers-are-displayed",level:2},{value:"Displaying only relevant fields",id:"displaying-only-relevant-fields",level:3},{value:"Displaying on Maps",id:"displaying-on-maps",level:3},{value:"Displaying Links",id:"displaying-links",level:3},{value:"Step 10: Improving On-Boarding Experience",id:"step-10-improving-on-boarding-experience",level:2},{value:"Creating and Sharing Boards",id:"creating-and-sharing-boards",level:3},{value:"Setting Up a Discovery Page",id:"setting-up-a-discovery-page",level:3},{value:"Customizing the Colors of Veezoo",id:"customizing-the-colors-of-veezoo",level:3},{value:"Maintenance &amp; Observability",id:"maintenance--observability",level:2},{value:"Identifying Issues with MetaVeezoo",id:"identifying-issues-with-metaveezoo",level:3},{value:"Development Branches",id:"development-branches",level:3}],m={toc:c},h="wrapper";function y(e){var t,a,s,p,d,u,c,y,g,w,f,b,k,v,C=e.components,N=(0,n.Z)(e,l);return(0,r.kt)(h,(0,i.Z)({},m,N,{components:C,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This tutorial will guide you through the necessary steps to configure a Knowledge Graph from scratch to provide a great self-service analytics experience."),(0,r.kt)("h2",{id:"step-0-preparation"},"Step 0: Preparation"),(0,r.kt)("p",null,"First, you will have to select which data you will start with and which questions you want to answer."),(0,r.kt)("p",null,"Always start small, prioritizing the most important data and questions. You can always add more later!"),(0,r.kt)("p",null,"We recommend starting with a single fact table (e.g. Orders / Order Items) and the related dimension tables (e.g. Customers, Products)."),(0,r.kt)("p",null,"Create a list of 10 questions you want to be able to answer in Veezoo and make sure you have the data to answer them."),(0,r.kt)("p",null,"Once you have this mapped out, create a new Knowledge Graph over Studio, select the tables and columns needed (and only those needed!) and let Veezoo create a first Knowledge Graph for you."),(0,r.kt)("p",null,'Remember to ignore columns that are "technical" in nature, e.g. a timestamp column ',(0,r.kt)("inlineCode",{parentName:"p"},"Updated_At")," may not really matter for the business user, but ",(0,r.kt)("inlineCode",{parentName:"p"},"Created_At")," may be important."),(0,r.kt)("iframe",((t={width:"560",height:"315",src:"https://www.youtube.com/embed/Hj4MaFPxZow?si=xDhe7eMw6mukzMjm",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",t)),(0,r.kt)("h2",{id:"step-1-naming"},"Step 1: Naming"),(0,r.kt)("p",null,"After you have selected the tables and columns and Veezoo created the first version of the Knowledge Graph, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Knowledge Graph")," in the sidebar and click to see it visually."),(0,r.kt)("p",null,"The first thing we will want to address is the naming of the concepts in the Knowledge Graph."),(0,r.kt)("p",null,"We want to make sure we don't have any \"technical names\", e.g. 'Fact Orders', 'Dim Customers', 'Order Data', 'Created At', 'Sales Product', etc."),(0,r.kt)("p",null,'Instead, you want to "think semantically". What do these things mean? What do they map to in the business domain?'),(0,r.kt)("p",null,"Example: instead of 'Fact Orders', call it 'Orders'. Instead of 'Created At', call it 'Creation Date' or 'Order Date' (if on the order)."),(0,r.kt)("center",null,(0,r.kt)("b",null,"Instead of this:")),(0,r.kt)("img",{alt:"Don't",width:"400",src:(0,o.Z)("/img/tutorials/kg-from-scratch/naming-dont.png")}),(0,r.kt)("center",null,(0,r.kt)("b",null,"Do this:")),(0,r.kt)("img",{alt:"Do",width:"400",src:(0,o.Z)("/img/tutorials/kg-from-scratch/naming-do.png")}),(0,r.kt)("p",null,"Veezoo may provide you with suggestions that you can simply click to accept. But some things will require your domain knowledge."),(0,r.kt)("p",null,"So, go over the nodes in the Knowledge Graph (or over the sidebar) and rename them for your business users."),(0,r.kt)("iframe",((a={width:"560",height:"315",src:"https://www.youtube.com/embed/v7Cu342dnGo?si=m-NRk4UGb6JpQRwt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",a)),(0,r.kt)("h2",{id:"step-2-defining-relationships"},"Step 2: Defining Relationships"),(0,r.kt)("p",null,"The next step is to check the relationships between the nodes. The best way to do this is again by inspecting the Knowledge Graph visually."),(0,r.kt)("p",null,'If your Knowledge Graph has many disconnected "clusters", you will very likely have to define relationships for it.'),(0,r.kt)("p",null,"Remember that ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship")," needs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," the foreign key column to the other table, so you should always use ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," (database) resources in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"kb")," ones. Example: use ",(0,r.kt)("inlineCode",{parentName:"p"},'sql: "${orders.customer_id}"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'sql: "${db.database.schema.table.column}"')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'sql: "${kb.Customer}"')),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.loom.com/embed/854623b472ee4fc1b0fd1cd9bbbbbd77?sid=9b5c6567-bf0f-43fb-9d4f-aa40159b8e51",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,allow:"fullscreen;"}),(0,r.kt)("h2",{id:"step-3-verifying-types"},"Step 3: Verifying Types"),(0,r.kt)("p",null,"Common things to verify here are that attributes that are rather free-text are defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,r.kt)("p",null,"Examples would be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name, Full Name, Last Name, First Name"),(0,r.kt)("li",{parentName:"ul"},"Descriptions, Comments, URLs, Email"),(0,r.kt)("li",{parentName:"ul"},"Certain IDs, e.g. if you have a table for Customers, you should model Customer as a class, but you may still want the Customer ID as a string attribute")),(0,r.kt)("p",null,"Other common cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify that booleans are actually modelled as ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," and not as ",(0,r.kt)("inlineCode",{parentName:"li"},"class")," with values like 'Yes' / 'No'."),(0,r.kt)("li",{parentName:"ol"},"Verify that dates are modelled as ",(0,r.kt)("inlineCode",{parentName:"li"},"date"),". This may require a transformation/casting in the ",(0,r.kt)("inlineCode",{parentName:"li"},"sql"),"."),(0,r.kt)("li",{parentName:"ol"},"Sometimes columns that represent years are imported as ",(0,r.kt)("inlineCode",{parentName:"li"},"integer"),", but we recommend modelling it as ",(0,r.kt)("inlineCode",{parentName:"li"},"date")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},"datetime_format")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"YearFormat")," instead.")),(0,r.kt)("p",null,"If you have a number/integer that should never be summed up, because it acts more like a categorical attribute, you may consider modelling it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," instead or adding at least a ",(0,r.kt)("inlineCode",{parentName:"p"},"tag: KB_NotSummable"),". One example would be things like 'Zip Code' or certain (personal) identification numbers."),(0,r.kt)("p",null,"For other numbers that may make no sense to sum up, but it would be ok to average it, consider adding ",(0,r.kt)("inlineCode",{parentName:"p"},"default_aggregation: average"),"."),(0,r.kt)("h2",{id:"step-4-removing-ambiguity"},"Step 4: Removing Ambiguity"),(0,r.kt)("p",null,"The Knowledge Graph works best if you remove ambiguity, which is why we prefer working with normalized/dimensional modelling."),(0,r.kt)("p",null,"Look at your Knowledge Graph and see if you have attributes that appear repeated in different tables, but mean actually the same thing."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"You have a dataset with Orders, Customers and Products. But in the Orders table, you see again the Customer Name, Customer Age, Customer Country, apart from the Customer ID. In this case, you only need the relationship between Orders and Customers, using the Customer ID foreign key. You can manually remove the redundant attributes over Studio (or set them to ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden: true"),")."),(0,r.kt)("p",null,"Sometimes though, you may not have a dedicated table with the values, but still they appear in multiple tables. Example: You have Countries in different tables (e.g. Customer, Orders, Shipping), but no ",(0,r.kt)("inlineCode",{parentName:"p"},"dim_countries")," table. Or you have Status values that reappear consistently in different tables."),(0,r.kt)("p",null,"You can still normalize it in your Knowledge Graph. Just follow the steps here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/attribute/class#normalizing-your-kg"},"Normalizing the KG"),"."),(0,r.kt)("h2",{id:"step-5-adding-synonyms"},"Step 5: Adding Synonyms"),(0,r.kt)("p",null,"In the knowledge graph, we can define synonyms to aid Veezoo in understanding user questions involving business-specific terms. For instance, suppose we have a measure called ",(0,r.kt)("inlineCode",{parentName:"p"},"Cost per Revenue"),". If a user asks ",(0,r.kt)("em",{parentName:"p"},"'What was our CPR last week,'")," Veezoo may not recognize what is meant by ",(0,r.kt)("em",{parentName:"p"},"CPR"),". To address this, we can define ",(0,r.kt)("em",{parentName:"p"},"CPR")," as a synonym for ",(0,r.kt)("em",{parentName:"p"},"Cost per Revenue"),". As a result, Veezoo will correctly interpret questions about ",(0,r.kt)("em",{parentName:"p"},"CPR"),", while continuing to refer to them as ",(0,r.kt)("em",{parentName:"p"},"Cost per Revenue"),"."),(0,r.kt)("iframe",((s={width:"560",height:"315",src:"https://www.youtube.com/embed/eU3-fnW05Rw?si=BBs-kIquIoSJYqQt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",s)),(0,r.kt)("h2",{id:"step-6-defining-defaults"},"Step 6: Defining Defaults"),(0,r.kt)("h3",{id:"default-date"},"Default Date"),(0,r.kt)("p",null,"If a concept has multiple timestamps associated with it, questions about points in time may be ambiguous. For instance, an ",(0,r.kt)("em",{parentName:"p"},"Order")," can have an ",(0,r.kt)("em",{parentName:"p"},"Order Date"),", a ",(0,r.kt)("em",{parentName:"p"},"Shipping Date"),", and a ",(0,r.kt)("em",{parentName:"p"},"Payment Date"),". In this case, when Veezoo is asked ",(0,r.kt)("em",{parentName:"p"},"Show me Orders last month"),", it might not be clear which is meant. To clarify this, we can define a default date for a concept as follows."),(0,r.kt)("iframe",((p={width:"560",height:"315",src:"https://www.youtube.com/embed/UV4ZA3A3MxQ?si=eKjFy4VZxW94QRZd",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",p)),(0,r.kt)("h3",{id:"default-filters"},"Default Filters"),(0,r.kt)("iframe",((d={width:"560",height:"315",src:"https://www.youtube.com/embed/jIdIdXz9_O4?si=LjsPceT3pj87pDdZ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",d)),(0,r.kt)("h2",{id:"step-7-defining-measures-and-new-dimensions"},"Step 7: Defining Measures and new Dimensions"),(0,r.kt)("iframe",((u={width:"560",height:"315",src:"https://www.youtube.com/embed/gPRsWEJFmQM?si=3Ro-w9S_m6BPxFzk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",u)),(0,r.kt)("h2",{id:"step-8-improving-explainability"},"Step 8: Improving Explainability"),(0,r.kt)("h3",{id:"adding-descriptions"},"Adding Descriptions"),(0,r.kt)("p",null,"Adding descriptions helps with Data Literacy, as business users get presented with definitions in multiple places:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sidebar"),(0,r.kt)("li",{parentName:"ol"},"Knowledge Graph Visual Mode"),(0,r.kt)("li",{parentName:"ol"},"AutoComplete when typing"),(0,r.kt)("li",{parentName:"ol"},"Answers (e.g. title and filters)")),(0,r.kt)("p",null,"Check how to add descriptions here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/general/description"},"description")),(0,r.kt)("h3",{id:"adding-display-names"},"Adding Display Names"),(0,r.kt)("p",null,"Especially for relationships, it helps to add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"display_name")," that explains what the relationship is about."),(0,r.kt)("p",null,"Example: A relationship between Customer and Country could mean multiple things like 'lives in' or 'born in'."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/general/display_name"},"display_name"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/relationship"},"relationships")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/relationship/to_name"},"to_name")," to learn more."),(0,r.kt)("h2",{id:"step-9-improving-how-answers-are-displayed"},"Step 9: Improving How Answers are Displayed"),(0,r.kt)("h3",{id:"displaying-only-relevant-fields"},"Displaying only relevant fields"),(0,r.kt)("p",null,"In Veezoo Studio, you have the flexibility to define which attributes of a concept to be displayed by default. This is particularly useful when dealing with concepts that have numerous attributes, some of which being more relevant than others. For instance, when asking about ",(0,r.kt)("em",{parentName:"p"},"Customers"),", you might prefer to display attributes like ",(0,r.kt)("em",{parentName:"p"},"name")," and ",(0,r.kt)("em",{parentName:"p"},"address")," by default and hide less relevant details such as ",(0,r.kt)("em",{parentName:"p"},"customer id"),". "),(0,r.kt)("iframe",((c={width:"560",height:"315",src:"https://www.youtube.com/embed/MeX8f7maRiU?si=1Wgy54qvK91nN8ro",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",c)),(0,r.kt)("h3",{id:"displaying-on-maps"},"Displaying on Maps"),(0,r.kt)("p",null,"Veezoo can visualize data associated with locations on a map. Here is how you configure it:"),(0,r.kt)("iframe",((y={width:"560",height:"315",src:"https://www.youtube.com/embed/PKeYOmYXiMg?si=Up_B5tDe6Re4bZNC",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",y)),(0,r.kt)("h3",{id:"displaying-links"},"Displaying Links"),(0,r.kt)("p",null,"Integrating direct links from Veezoo answers to your CRM or other external applications simplifies the workflow of users. See below how this feature can be configured in Veezoo Studio."),(0,r.kt)("iframe",((g={width:"560",height:"315",src:"https://www.youtube.com/embed/IKvDspJ-pRg?si=a-l5dQUtlMbojASH",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",g)),(0,r.kt)("h2",{id:"step-10-improving-on-boarding-experience"},"Step 10: Improving On-Boarding Experience"),(0,r.kt)("h3",{id:"creating-and-sharing-boards"},"Creating and Sharing Boards"),(0,r.kt)("iframe",((w={width:"560",height:"315",src:"https://www.youtube.com/embed/GeAWM89zADM?si=QY6zGuBapH338StE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",w)),(0,r.kt)("h3",{id:"setting-up-a-discovery-page"},"Setting Up a Discovery Page"),(0,r.kt)("iframe",((f={width:"560",height:"315",src:"https://www.youtube.com/embed/TOcs7kOIaTg?si=3WBgIIYQJw6nFBwP",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",f)),(0,r.kt)("h3",{id:"customizing-the-colors-of-veezoo"},"Customizing the Colors of Veezoo"),(0,r.kt)("p",null,"If you want Veezoo to visually better match the style of your company, you can easily adjust the look by changing the colour scheme or replacing the Veezoo logo with your own."),(0,r.kt)("iframe",((b={width:"560",height:"315",src:"https://www.youtube.com/embed/gb2Fo0UOlSw?si=XutuEpVHCAQMiree",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",b)),(0,r.kt)("h2",{id:"maintenance--observability"},"Maintenance & Observability"),(0,r.kt)("h3",{id:"identifying-issues-with-metaveezoo"},"Identifying Issues with MetaVeezoo"),(0,r.kt)("p",null,"Meta Veezoo allows administrators to observe and investigate the usage of Veezoo by business users. For instance, it allows inspecting commonly asked questions, detecting recurring challenges, and identifying missing configuration."),(0,r.kt)("iframe",((k={width:"560",height:"315",src:"https://www.youtube.com/embed/VaQfqWKKw2k?si=kmCFhdDYUEpxCBEn",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",k)),(0,r.kt)("h3",{id:"development-branches"},"Development Branches"),(0,r.kt)("p",null,"It's essential to maintain a continuous workflow for your business users even while you are actively enhancing your models or integrating new functionalities. To facilitate this, Veezoo enables the creation of development branches for your knowledge graph. This allows creators to independently work on the knowledge graph, without affecting the live version currently in use. Additionally, Veezoo has testing capabilities to ensure that your changes do not disrupt any existing boards or answers."),(0,r.kt)("iframe",((v={width:"560",height:"315",src:"https://www.youtube.com/embed/r3OretzyK4g?si=eGRBp5EIUs0-TLwX",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}).allow="fullscreen;",v)))}y.isMDXComponent=!0}}]);