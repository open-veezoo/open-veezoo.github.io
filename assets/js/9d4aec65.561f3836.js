"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[2776],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=n(4996),l=["components"],s={id:"okta",title:"Okta - Identity and Access Management",sidebar_label:"Okta - Identity and Access Management"},p=void 0,c={unversionedId:"authentication/single-sign-on/okta",id:"authentication/single-sign-on/okta",title:"Okta - Identity and Access Management",description:"The following guide shows how to configure Okta as a SAML identity provider for Veezoo.",source:"@site/docs/authentication/single-sign-on/okta.mdx",sourceDirName:"authentication/single-sign-on",slug:"/authentication/single-sign-on/okta",permalink:"/docs/authentication/single-sign-on/okta",draft:!1,tags:[],version:"current",frontMatter:{id:"okta",title:"Okta - Identity and Access Management",sidebar_label:"Okta - Identity and Access Management"},sidebar:"docs",previous:{title:"Microsoft Azure Identity Provider",permalink:"/docs/authentication/single-sign-on/microsoft-azure-idp"},next:{title:"User Roles and Access Management",permalink:"/docs/authorization/user-roles"}},d={},u=[{value:"Create an enterprise application",id:"create-an-enterprise-application",level:2},{value:"Configure Veezoo",id:"configure-veezoo",level:2},{value:"Provide access to users",id:"provide-access-to-users",level:2},{value:"Access for people",id:"access-for-people",level:3},{value:"Access for groups",id:"access-for-groups",level:3}],g={toc:u},k="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(k,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following guide shows how to configure Okta as a SAML identity provider for Veezoo."),(0,a.kt)("h2",{id:"create-an-enterprise-application"},"Create an enterprise application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into Okta.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the sidebar, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications")," then to ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications"),". Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Create App Integration"),"."))),(0,a.kt)("img",{alt:"Okta Sidebar",width:"200",src:(0,r.Z)("/img/authentication/single-sign-on/okta/okta-sidebar.png"),style:{border:"1px solid #000"}}),(0,a.kt)("img",{alt:"Create App",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/create-app.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Chose the option ",(0,a.kt)("inlineCode",{parentName:"li"},"SAML 2.0"),"  ")),(0,a.kt)("img",{alt:"chose SAML 2.0",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/saml.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Enter a name for the application and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),"  ")),(0,a.kt)("img",{alt:"name",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/name.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Configure SAM")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"Single sign-on URL")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.app.veezoo.com/saml/callback")," where ",(0,a.kt)("em",{parentName:"p"},"<subdomain",">")," is your Veezoo-subdomain.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"Audience URI (SP Entity ID)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://veezoo.com/saml")))),(0,a.kt)("p",null,"Scroll further down."),(0,a.kt)("img",{alt:"urls",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/urls.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"(optional) Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Attribute Statements")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Group Attribute Statements"),".\nThis is additonal information about the user that will be shared with Veezoo.\nWhen configuring Veezoo later, this information can be used, to automatically set usernames, set group memberships (which then can be used to assign roles e.g.), etc.")),(0,a.kt)("p",null,"The following is simply an example, values and filters (probably) will differ in your usecase."),(0,a.kt)("p",null,"Scroll down and and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"  "),(0,a.kt)("img",{alt:"attributes",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/attributes.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Give feedback and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Finish"))),(0,a.kt)("h2",{id:"configure-veezoo"},"Configure Veezoo"),(0,a.kt)("p",null,"Configure and enable single sign-on in Veezoo Admin according to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/authentication/single-sign-on"},"documentation"),". "),(0,a.kt)("p",null,"You can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity Provider Metadata")," here:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Okta-sidebar, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," then to ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications"),". Click on your newly created ",(0,a.kt)("inlineCode",{parentName:"li"},"veezoo")," application (or what you called it).")),(0,a.kt)("img",{alt:"Okta Sidebar",width:"200",src:(0,r.Z)("/img/authentication/single-sign-on/okta/okta-sidebar.png"),style:{border:"1px solid #000"}}),(0,a.kt)("img",{alt:"click-veezoo",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/veezoo-app.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign On")," and copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"Metadata URL"))),(0,a.kt)("img",{alt:"urls",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/sign-on.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Paste this URL into your browser. You can now copy and paste the displayed text into Veezoo as ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity Provider Metadata"))),(0,a.kt)("h2",{id:"provide-access-to-users"},"Provide access to users"),(0,a.kt)("h3",{id:"access-for-people"},"Access for people"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the sidebar, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Directory")," then to ",(0,a.kt)("inlineCode",{parentName:"li"},"People"),". Click on the person you want grant access to Veezoo.")),(0,a.kt)("img",{alt:"directory-people",width:"200",src:(0,r.Z)("/img/authentication/single-sign-on/okta/directory-people.png"),style:{border:"1px solid #000"}}),(0,a.kt)("img",{alt:"Lukas",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/lukas.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Assign Applications")," and select Veezoo")),(0,a.kt)("img",{alt:"Assign Applications",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/aa.png"),style:{border:"1px solid #000"}}),(0,a.kt)("h3",{id:"access-for-groups"},"Access for groups"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the sidebar, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Directory")," then to ",(0,a.kt)("inlineCode",{parentName:"li"},"Groups"),". Click on the group you want grant access to Veezoo.")),(0,a.kt)("img",{alt:"directory-groupe",width:"200",src:(0,r.Z)("/img/authentication/single-sign-on/okta/directory-groups.png"),style:{border:"1px solid #000"}}),(0,a.kt)("img",{alt:"Create App",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/groups.png"),style:{border:"1px solid #000"}}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Assingn applications"),". Select Veezoo.")),(0,a.kt)("img",{alt:"assign veezoo",width:"800",src:(0,r.Z)("/img/authentication/single-sign-on/okta/av.png"),style:{border:"1px solid #000"}}))}m.isMDXComponent=!0}}]);