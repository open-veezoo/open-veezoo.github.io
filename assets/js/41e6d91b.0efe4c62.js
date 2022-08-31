"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[3292],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=n(4996),s=["components"],p={id:"microsoft-azure-idp",title:"Microsoft Azure Identity Provider",sidebar_label:"Microsoft Azure Identity Provider"},l=void 0,c={unversionedId:"admin/single-sign-on/microsoft-azure-idp",id:"admin/single-sign-on/microsoft-azure-idp",title:"Microsoft Azure Identity Provider",description:"The following guide shows how to configure Microsoft Azure as a SAML identity provider for Veezoo.",source:"@site/docs/admin/single-sign-on/microsoft-azure-idp.mdx",sourceDirName:"admin/single-sign-on",slug:"/admin/single-sign-on/microsoft-azure-idp",permalink:"/docs/admin/single-sign-on/microsoft-azure-idp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/admin/single-sign-on/microsoft-azure-idp.mdx",tags:[],version:"current",frontMatter:{id:"microsoft-azure-idp",title:"Microsoft Azure Identity Provider",sidebar_label:"Microsoft Azure Identity Provider"},sidebar:"docs",previous:{title:"Single Sign-on",permalink:"/docs/admin/single-sign-on"},next:{title:"Why and how to sync?",permalink:"/docs/kg-sync/"}},d={},m=[{value:"Create an enterprise application",id:"create-an-enterprise-application",level:2},{value:"Configure single sign-on",id:"configure-single-sign-on",level:2},{value:"Provide access to users",id:"provide-access-to-users",level:2},{value:"Configure Veezoo",id:"configure-veezoo",level:2}],u={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following guide shows how to configure Microsoft Azure as a SAML identity provider for Veezoo."),(0,o.kt)("h2",{id:"create-an-enterprise-application"},"Create an enterprise application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into the Microsoft Azure ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Microsoft Azure Portal"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the sidebar, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure Active Directory")," then to ",(0,o.kt)("inlineCode",{parentName:"p"},"Enterprise Applications")),(0,o.kt)("img",{alt:"Azure Active Directory",width:"200",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/azure-active-directory.png")}),(0,o.kt)("img",{alt:"Enterprise Applications",width:"200",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/enterprise-applications.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"New Application")," then on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create your own application"),"  "),(0,o.kt)("img",{alt:"New application",width:"150",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/new-application.png")}),(0,o.kt)("img",{alt:"Create your own application",width:"220",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/create-your-own-application.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name for the application and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),"  "),(0,o.kt)("img",{alt:"Enter a name",width:"500",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/enter-name.png")}))),(0,o.kt)("h2",{id:"configure-single-sign-on"},"Configure single sign-on"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the enterprise application created above and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup single sign on")," then on ",(0,o.kt)("inlineCode",{parentName:"p"},"SAML"),"  "),(0,o.kt)("img",{alt:"Setup single sign-on",width:"350",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/setup-sso.png")}),(0,o.kt)("img",{alt:"SAML",width:"350",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/saml.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic SAML Configuration")," section, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," to edit the configuration  "),(0,o.kt)("img",{alt:"Basic SAML Configuration",width:"700",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/basic-saml-configuration.png")}),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"set the Identifier to: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://veezoo.com/saml")),(0,o.kt)("li",{parentName:"ul"},"set the Reply URL to: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<subdomain>.app.veezoo.com/saml/callback")),(0,o.kt)("li",{parentName:"ul"},"set Sign on URL to: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<subdomain>.app.veezoo.com/"))),(0,o.kt)("p",{parentName:"li"},"Don't forget to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<subdomain>")," by the actual subdomain attributed to your organization. The above information is available in and can be copied from Veezoo Admin, see ",(0,o.kt)("a",{parentName:"p",href:"../single-sign-on#configure-your-identity-provider"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes & Claims")," section you can optionally configure the attributes to be included in the SAML assertions that are sent to Veezoo  "),(0,o.kt)("img",{alt:"Attributes & Claims",width:"700",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/attributes-and-claims.png")}),(0,o.kt)("p",{parentName:"li"},"  These attributes can be used when ",(0,o.kt)("a",{parentName:"p",href:"../single-sign-on#configure-user-attributes"},"configuring user attributes")," in Veezoo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and close the editing form  "),(0,o.kt)("img",{alt:"Save",width:"80",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/save.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"Federation Metadata XML")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAML Signing Certificate"),"  "),(0,o.kt)("img",{alt:"Federation Metadata XML",width:"700",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/federation-metadata-xml.png")}),(0,o.kt)("p",{parentName:"li"},"  The contents of this file need to be entered when ",(0,o.kt)("a",{parentName:"p",href:"../single-sign-on#enter-your-identity-provider-information"},"configuring the identity provider")," in Veezoo."))),(0,o.kt)("h2",{id:"provide-access-to-users"},"Provide access to users"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the enterprise application created above and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Assign users and groups"),"  "),(0,o.kt)("img",{alt:"Assign users and groups",width:"350",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/assign-users-and-groups.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add user/group"),"  "),(0,o.kt)("img",{alt:"Add user/group",width:"150",src:(0,a.Z)("/img/admin/single-sign-on/microsoft-azure-idp/add-user-group.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the users or groups to grant access to Veezoo and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Assign")))),(0,o.kt)("h2",{id:"configure-veezoo"},"Configure Veezoo"),(0,o.kt)("p",null,"Configure and enable single sign-on in Veezoo Admin according to the ",(0,o.kt)("a",{parentName:"p",href:"../single-sign-on"},"documentation"),"."))}g.isMDXComponent=!0}}]);