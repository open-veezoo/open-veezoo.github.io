(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),l=a(6),r=(a(0),a(77)),b={id:"intro-to-vkl",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"fundamentals/intro-to-vkl",id:"fundamentals/intro-to-vkl",isDocsHomePage:!1,title:"Introduction",description:"What is a Knowledge Graph?",source:"@site/docs/fundamentals/intro-to-vkl.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fundamentals/intro-to-vkl.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Database Layer",permalink:"/docs/db-layer"}},o=[{value:"What is a Knowledge Graph?",id:"what-is-a-knowledge-graph",children:[]},{value:"An Example",id:"an-example",children:[]}],i={rightToc:o};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-a-knowledge-graph"},"What is a Knowledge Graph?"),Object(r.b)("p",null,"A Knowledge Graph is a version-controlled semantic model of a dataset, which is used by Veezoo to understand your question and generate the correct SQL query that answers it."),Object(r.b)("p",null,"It is represented as a set of files using a modelling language called VKL, the Veezoo Knowledge Language. The Veezoo Knowledge Language is a semantic modelling language that is based on SQL, allowing you to model and document your data in a way that business users and Veezoo can understand."),Object(r.b)("p",null,"Let's go over a simple example to explore the basics of VKL and how you can use it to answer your questions."),Object(r.b)("h2",{id:"an-example"},"An Example"),Object(r.b)("p",null,"Let's say you are a data analyst at Hitchhiker, a small sci-fi movie e-commerce website, and you have the following flat table, called ORDERS."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_id"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_firstname"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"customer_lastname"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"country"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"movie"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"date"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"returned"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Haug"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CH"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Hitchhiker's Guide to the Galaxy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-10-29"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Albert"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Einstein"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clockwork Orange"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2019-08-09"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Haug"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CH"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2001: A Space Odyssey"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-10-30"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1003"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Michael"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jackson"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interstellar"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-09-20"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(r.b)("p",null,"You want to make it available to your manager in an easy way, so you can work on some cool prediction models, instead of answering his reporting questions."),Object(r.b)("p",null,"Thankfully, you have Veezoo."),Object(r.b)("p",null,"You open Veezoo, go to Studio and connect it to this flat table on your MySQL database. In 1 click, Studio creates the following Knowledge Graph for you."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"hitchhiker\n\u251c\u2500\u2500 database\n\u2502\xa0\xa0 \u2514\u2500\u2500 mysql\n\u2502\xa0\xa0     \u2514\u2500\u2500 movie_db\n\u2502\xa0\xa0         \u251c\u2500\u2500 database.vkl\n\u2502\xa0\xa0         \u2514\u2500\u2500 ORDERS\n\u2502\xa0\xa0             \u2514\u2500\u2500 table.vkl\n\u2514\u2500\u2500 knowledge-base\n    \u2514\u2500\u2500 classes\n     \xa0\xa0 \u251c\u2500\u2500 Country\n    \xa0 \xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 class.vkl\n    \xa0 \xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 entities.vkl\n    \xa0 \xa0 \u251c\u2500\u2500 Customer\n    \xa0 \xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 class.vkl\n    \xa0 \xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 entities.vkl\n    \xa0\xa0  \u251c\u2500\u2500 Movie\n    \xa0\xa0  \u2502\xa0\xa0 \u251c\u2500\u2500 class.vkl\n    \xa0\xa0  \u2502\xa0\xa0 \u2514\u2500\u2500 entities.vkl    \n    \xa0\xa0  \u2514\u2500\u2500 Order\n    \xa0\xa0      \u2514\u2500\u2500 class.vkl\n")),Object(r.b)("p",null,"Now, first of all: ",Object(r.b)("em",{parentName:"p"},"Don't Panic!")," "),Object(r.b)("p",null,"We will explore together the essence of this Knowledge Graph layer-by-layer, so you can get quickly up and running."),Object(r.b)("p",null,"The Knowledge Graph is divided into different layers. We will focus here on the two most important ones: ",Object(r.b)("inlineCode",{parentName:"p"},"knowledge-base")," and ",Object(r.b)("inlineCode",{parentName:"p"},"database")," layers."))}d.isMDXComponent=!0}}]);