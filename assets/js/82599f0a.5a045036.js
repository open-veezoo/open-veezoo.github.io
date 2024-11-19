"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[2758],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(4996),["components"]),s={id:"jwt",title:"JWT",sidebar_label:"JWT"},u=void 0,c={unversionedId:"single-sign-on/jwt",id:"single-sign-on/jwt",title:"JWT",description:"The JWT page in Veezoo Admin lets you configure Veezoo to use JSON Web Tokens (JWT) to authenticate users.",source:"@site/docs/single-sign-on/jwt.mdx",sourceDirName:"single-sign-on",slug:"/single-sign-on/jwt",permalink:"/docs/single-sign-on/jwt",draft:!1,tags:[],version:"current",frontMatter:{id:"jwt",title:"JWT",sidebar_label:"JWT"},sidebar:"docs",previous:{title:"Okta - Identity and Access Management",permalink:"/docs/single-sign-on/saml/okta"},next:{title:"User attributes",permalink:"/docs/single-sign-on/user-attributes"}},l={},p=[{value:"Configure the parameter",id:"configure-the-parameter",level:2},{value:"Provide your public key",id:"provide-your-public-key",level:2},{value:"Configure user attributes",id:"configure-user-attributes",level:2}],f={toc:p},g="wrapper";function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)(g,(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://app.veezoo.com/admin/sso/jwt"},"JWT page")," in Veezoo Admin lets you configure Veezoo to use JSON Web Tokens (JWT) to authenticate users."),(0,i.kt)("p",null,"Single sign-on with JWT is only available for ",(0,i.kt)("strong",{parentName:"p"},"Enterprise")," subscription plans. Check our ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/pricing"},"pricing")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"get in touch")," with us to enable it!"),(0,i.kt)("h2",{id:"configure-the-parameter"},"Configure the parameter"),(0,i.kt)("p",null,"There are two modes to pass the JWT to Veezoo for the authentication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"as a URL parameter: add the JWT as parameter to the Veezoo URL"),(0,i.kt)("li",{parentName:"ul"},"as a cookie: include the JWT in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Cookie")," request header")),(0,i.kt)("p",null,"You can change the parameter mode and the parameter name (i.e. URL parameter or cookie name)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parameter subsection",src:n(9558).Z,width:"1580",height:"356"})),(0,i.kt)("h2",{id:"provide-your-public-key"},"Provide your public key"),(0,i.kt)("p",null,"JWTs are secured via a digital signature based on an RSA public/private key pair. You need to sign the JWTs you generate and provide to Veezoo with your private key and configure the corresponding public key here. Veezoo can subsequently verify your signed JWTs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Public key subsection",src:n(1517).Z,width:"2266",height:"696"})),(0,i.kt)("h2",{id:"configure-user-attributes"},"Configure user attributes"),(0,i.kt)("p",null,"When a user authenticates via single sign-on with JWT, a corresponding user gets automatically created in Veezoo. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"User attributes"))," subsection lets you configure some of the user attributes by defining user attribute mappings:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User attributes subsection",src:n(7925).Z,width:"2274",height:"1010"})),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/single-sign-on/user-attributes"},"user attributes")," documentation for more information."))}d.isMDXComponent=!0},9558:function(e,t,n){t.Z=n.p+"assets/images/parameter-aefac7832d8b302923bed8f34bf9169b.png"},1517:function(e,t,n){t.Z=n.p+"assets/images/public-key-14358849e2c8078030b88394274f0101.png"},7925:function(e,t,n){t.Z=n.p+"assets/images/user-attributes-db2f31e53c4757a7e370c6de433b465e.png"}}]);