"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[7678],{3905:function(e,t,a){a.d(t,{kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5317:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={id:"connect-new-dataset",title:"Connect a Dataset",sidebar_label:"Connect a Dataset",slug:"/"},c=void 0,s={unversionedId:"getting-started/connect-new-dataset",id:"getting-started/connect-new-dataset",title:"Connect a Dataset",description:"The first step to start getting answers from your data is to connect Veezoo to it. For that you will need to create a free account here, if you haven't already.",source:"@site/docs/getting-started/connect-new-dataset.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/connect-new-dataset.md",tags:[],version:"current",frontMatter:{id:"connect-new-dataset",title:"Connect a Dataset",sidebar_label:"Connect a Dataset",slug:"/"},sidebar:"docs",next:{title:"Connecting to BigQuery",permalink:"/docs/connect-to-bigquery"}},u=[{value:"Choose a Knowledge Graph Name",id:"choose-a-knowledge-graph-name",children:[],level:2},{value:"Choose the Language",id:"choose-the-language",children:[],level:2},{value:"Connect to a SQL database",id:"connect-to-a-sql-database",children:[],level:2},{value:"Connect to an Excel sheet",id:"connect-to-an-excel-sheet",children:[],level:2},{value:"Select Data",id:"select-data",children:[],level:2}],d={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The first step to start getting answers from your data is to connect Veezoo to it. For that you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://app.veezoo.com/signup"},"create a free account here"),", if you haven't already."),(0,r.kt)("p",null,"If you are signing up now, you can follow the onboarding steps to either choose a demo dataset or connect Veezoo to your own data. If you have already signed up before, just click on Studio on the Sidebar in Veezoo and then on '+ New Knowledge Graph' on the Sidebar in Studio to import a new dataset."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open Studio",src:a(9495).Z})," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New Knowledge Graph",src:a(8140).Z})),(0,r.kt)("p",null,"Usually you will get the most value of Veezoo with a live SQL database, but we also support Excel/CSV files. Here are all the currently supported data sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon Redshift"),(0,r.kt)("li",{parentName:"ul"},"BigQuery"),(0,r.kt)("li",{parentName:"ul"},"Snowflake"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"Microsoft SQL Server"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"Oracle"),(0,r.kt)("li",{parentName:"ul"},"SAP HANA"),(0,r.kt)("li",{parentName:"ul"},"IBM DB2"),(0,r.kt)("li",{parentName:"ul"},"Exasol"),(0,r.kt)("li",{parentName:"ul"},"Excel or CSV"),(0,r.kt)("li",{parentName:"ul"},"Shopify"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Google Sheets (coming soon)"))),(0,r.kt)("p",null,"Select from the tiles your data source and let's see what's next."),(0,r.kt)("h2",{id:"choose-a-knowledge-graph-name"},"Choose a Knowledge Graph Name"),(0,r.kt)("p",null,'Once you have selected your data source, you will need to choose a name for your Knowledge Graph. You will want to choose a name that corresponds to the data you are importing, such that your business users can understand, e.g. "Sales" or "Product Analytics".'),(0,r.kt)("h2",{id:"choose-the-language"},"Choose the Language"),(0,r.kt)("p",null,"Additionally, you will have to select the language you want to use to ask questions in Veezoo for this dataset. Veezoo understands currently English, German, French and Italian. Keep in mind that it works best if your data is also on the same language, but you can manually configure it if needed."),(0,r.kt)("p",null,"You may add additional languages later to the same Knowledge Graph."),(0,r.kt)("h2",{id:"connect-to-a-sql-database"},"Connect to a SQL database"),(0,r.kt)("p",null,"In the case of a SQL database, you will need to whitelist the IP ",(0,r.kt)("strong",{parentName:"p"},"18.158.77.139")," from the Veezoo application so it can access it securely."),(0,r.kt)("p",null,"Additionally, you may also want to connect over an SSH Tunnel by clicking on the checkbox at the end of the form."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect SQL",src:a(9666).Z})),(0,r.kt)("h2",{id:"connect-to-an-excel-sheet"},"Connect to an Excel sheet"),(0,r.kt)("p",null,"In the case of an Excel sheet, Veezoo will upload your Excel sheet securely to a PostgreSQL database managed by Veezoo, so that it is accessible only to your organization."),(0,r.kt)("p",null,"You can upload an Excel sheet with multiple worksheets, however pay attention to the limitations listed below the drop zone."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Excel",src:a(7727).Z})),(0,r.kt)("h2",{id:"select-data"},"Select Data"),(0,r.kt)("p",null,"Here you can select the tables (or worksheets in the case of Excel) and the columns you are interested in to explore. Don't worry about selecting them all at once, you can always add more later."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In fact, we recommend to start with a first set of interesting tables and columns and iteratively add more. For a specific table, make sure to import its primary key / ID and name columns and avoid rather technical columns. "),(0,r.kt)("p",{parentName:"div"},"Example: For ",(0,r.kt)("inlineCode",{parentName:"p"},"users(ID, NAME, CREATED_AT, UPDATED_AT)")," I would definitely import ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME"),", probably also ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED_AT"),", but would leave ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATED_AT")," (which may be a more technical column) for later."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Data",src:a(6826).Z})))}p.isMDXComponent=!0},7727:function(e,t,a){t.Z=a.p+"assets/images/connect-excel-480b298b66e6a25f0561e6cf119962c6.png"},9666:function(e,t,a){t.Z=a.p+"assets/images/connect-sql-3eaff29ac05eb485c4189b62e86dc8ed.png"},8140:function(e,t,a){t.Z=a.p+"assets/images/new-knowledge-graph-4ac3db8f42b45fef89dc26f16bdbdb51.png"},9495:function(e,t,a){t.Z=a.p+"assets/images/open-studio-d87768cfa6af8bde9b4e26171325727d.png"},6826:function(e,t,a){t.Z=a.p+"assets/images/select-data-12d8e00d5b9f2037c46af9c0065407ed.png"}}]);