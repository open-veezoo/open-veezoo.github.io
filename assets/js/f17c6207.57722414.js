"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[3203],{3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return g}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=n(4996),o=["components"],s={id:"single-sign-on",title:"Single Sign-on",sidebar_label:"Single Sign-on"},p=void 0,d={unversionedId:"studio/single-sign-on",id:"studio/single-sign-on",title:"Single Sign-on",description:"The Single Sign-on section in Veezoo Studio lets you configure Veezoo to use Security Assertion Markup Language (SAML) to authenticate users.",source:"@site/docs/studio/single-sign-on.mdx",sourceDirName:"studio",slug:"/studio/single-sign-on",permalink:"/docs/studio/single-sign-on",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/studio/single-sign-on.mdx",tags:[],version:"current",frontMatter:{id:"single-sign-on",title:"Single Sign-on",sidebar_label:"Single Sign-on"},sidebar:"docs",previous:{title:"Location",permalink:"/docs/reference/ontology/location"}},u=[{value:"Configure your identity provider",id:"configure-your-identity-provider",children:[{value:"Entity id",id:"entity-id",children:[],level:4},{value:"Assertion consumer service URL",id:"assertion-consumer-service-url",children:[],level:4},{value:"Metadata",id:"metadata",children:[],level:4}],level:2},{value:"Enter your identity provider information",id:"enter-your-identity-provider-information",children:[{value:"Metadata",id:"metadata-1",children:[],level:4},{value:"Maximum authentication lifetime",id:"maximum-authentication-lifetime",children:[],level:4}],level:2},{value:"Define user attributes",id:"define-user-attributes",children:[{value:"Attributes",id:"attributes",children:[],level:3},{value:"User attribute mapping",id:"user-attribute-mapping",children:[{value:"Value",id:"value",children:[],level:4},{value:"Condition",id:"condition",children:[],level:4},{value:"Description",id:"description",children:[],level:4}],level:3},{value:"Mapping language",id:"mapping-language",children:[{value:"String",id:"string",children:[],level:4},{value:"Array",id:"array",children:[],level:4},{value:"Variable",id:"variable",children:[],level:4},{value:"Condition",id:"condition-1",children:[],level:4},{value:"Remarks",id:"remarks",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"Test and save the SAML configuration",id:"test-and-save-the-saml-configuration",children:[],level:2}],m={toc:u};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://app.veezoo.com/studio/sso"},"Single Sign-on section")," in Veezoo Studio lets you configure Veezoo to use Security Assertion Markup Language (SAML) to authenticate users."),(0,r.kt)("p",null,"Single sign-on using SAML is only available for ",(0,r.kt)("strong",{parentName:"p"},"Enterprise")," subscription plans. Check our ",(0,r.kt)("a",{parentName:"p",href:"https://www.veezoo.com/pricing"},"pricing")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"get in touch")," with us to enable it!"),(0,r.kt)("h2",{id:"configure-your-identity-provider"},"Configure your identity provider"),(0,r.kt)("p",null,"In a first step, you need to configure Veezoo as a service provider at your identity provider. The information required and terminology used by your identity provider may slightly differ depending on the specific implementation used. You can view and extract Veezoo's service provider information from the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Service Provider"))," subsection:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Service provider subsection",src:n(1390).Z})),(0,r.kt)("h4",{id:"entity-id"},"Entity id"),(0,r.kt)("p",null,"The entity id of the service provider, i.e. Veezoo."),(0,r.kt)("p",null,"This is a globally unique name identifying Veezoo as a service provider. Some identity providers might also call this the ",(0,r.kt)("em",{parentName:"p"},"identifier"),", ",(0,r.kt)("em",{parentName:"p"},"audience")," or similar."),(0,r.kt)("p",null,"Some identity providers might also call this the ",(0,r.kt)("em",{parentName:"p"},"identifier"),", ",(0,r.kt)("em",{parentName:"p"},"audience")," or similar."),(0,r.kt)("p",null,"Value: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://veezoo.com/saml")),(0,r.kt)("h4",{id:"assertion-consumer-service-url"},"Assertion consumer service URL"),(0,r.kt)("p",null,"The URL of the assertion consumer service (ACS) of the service provider, i.e. Veezoo."),(0,r.kt)("p",null,"This is the URL of the Veezoo endpoint where the identity provider should send SAML assertions to after an authentication. Some identity providers might also call this the ",(0,r.kt)("em",{parentName:"p"},"callback URL"),", ",(0,r.kt)("em",{parentName:"p"},"reply URL"),", ",(0,r.kt)("em",{parentName:"p"},"destination")," or similar."),(0,r.kt)("p",null,"Value: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.app.veezoo.com/saml/callback")),(0,r.kt)("h4",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"The metadata of the service provider, i.e. Veezoo."),(0,r.kt)("p",null,"This is an XML object containing all the necessary information to describe Veezoo as a service provier."),(0,r.kt)("h2",{id:"enter-your-identity-provider-information"},"Enter your identity provider information"),(0,r.kt)("p",null,"Veezoo needs to know about your identity provider, so it can send authentication requests to the right place. You can configure this information in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Identity provider"))," subsection:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity provider subsection",src:n(4374).Z})),(0,r.kt)("h4",{id:"metadata-1"},"Metadata"),(0,r.kt)("p",null,"The metadata of the identity provider."),(0,r.kt)("p",null,"This is an XML object containing all the necessary information to describe the identity provider. Identity providers typically let you download the metadata as a file."),(0,r.kt)("h4",{id:"maximum-authentication-lifetime"},"Maximum authentication lifetime"),(0,r.kt)("p",null,"The maximum lifetime of an authentication at the identity provider, specified in seconds."),(0,r.kt)("p",null,"SAML assertions returned by identity providers contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthnStatement")," with an ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthnInstant")," attribute. The value of this attribute specifies the time at which the authentication took place at the identity provider. Veezoo rejects SAML assertions with an ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthnInstant")," value that is older than the configured maximum authentication lifetime."),(0,r.kt)("h2",{id:"define-user-attributes"},"Define user attributes"),(0,r.kt)("p",null,"When a user authenticates via single sign-on using SAML, a corresponding user gets automatically created in Veezoo. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"User attributes"))," subsection lets you configure some of the attributes of these users by defining user attribute mappings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User attributes subsection",src:n(4380).Z})),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"The following attributes can be configured:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Multi-valued"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's type, i.e. if the user is a Creator or a Viewer"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"First name")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's first name"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Last name")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's last name"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"E-mail")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's e-mail address"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Language")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's preferred language, if supported by a given knowledge graph"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Roles")),(0,r.kt)("td",{parentName:"tr",align:null},"The user's roles"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("h3",{id:"user-attribute-mapping"},"User attribute mapping"),(0,r.kt)("p",null,"For each user attribute, you can define one or more mappings. After each user authentication, the mappings are evaluated and the corresponding user attributes ",(0,r.kt)("strong",{parentName:"p"},"updated")," accordingly."),(0,r.kt)("p",null,"Mappings are evaluated in order from top to bottom. For ",(0,r.kt)("strong",{parentName:"p"},"single-valued")," user attributes, the first matching mapping is applied. For ",(0,r.kt)("strong",{parentName:"p"},"multi-valued")," user attributes, all matching mappings are applied."),(0,r.kt)("p",null,"Each mapping consists of the following fields:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User attribute mapping",src:n(6193).Z})),(0,r.kt)("h4",{id:"value"},"Value"),(0,r.kt)("p",null,"The value to assign for the user attribute, if the condition holds"),(0,r.kt)("p",null,"For some user attributes (e.g. type), the permitted values are predefined and can be selected using the provided dropdown. For other attributes (e.g. first name), the specified value must be either a ",(0,r.kt)("a",{parentName:"p",href:"#string"},"string")," or a ",(0,r.kt)("a",{parentName:"p",href:"#variable"},"variable")," using the syntax of the ",(0,r.kt)("a",{parentName:"p",href:"#mapping-language"},"mapping language"),"."),(0,r.kt)("h4",{id:"condition"},"Condition"),(0,r.kt)("p",null,"The condition which determines if the mapping matches and should be applied (optional)"),(0,r.kt)("p",null,"If set, then the mapping's value is only assigned to the user attribute if the condition is fulfilled, else the mapping is ignored. The specified ",(0,r.kt)("a",{parentName:"p",href:"#condition-1"},"condition")," uses the syntax of the ",(0,r.kt)("a",{parentName:"p",href:"#mapping-language"},"mapping language"),"."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The description for the mapping (optional)"),(0,r.kt)("h3",{id:"mapping-language"},"Mapping language"),(0,r.kt)("p",null,"The mapping language uses a simple syntax to express values and conditions and allows referencing attributes included in the SAML assertions returned by the identity provider."),(0,r.kt)("h4",{id:"string"},"String"),(0,r.kt)("p",null,"A string is enclosed in single quotes."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"'abc'")),(0,r.kt)("h4",{id:"array"},"Array"),(0,r.kt)("p",null,"An array encloses a comma-separated list of strings in brackets."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"['a', 'b', 'c']")),(0,r.kt)("h4",{id:"variable"},"Variable"),(0,r.kt)("p",null,"A name references an attribute from the SAML assertion."),(0,r.kt)("p",null,"Simple variables start with an alphabetical character, followed by alphanumerical characters. If the name contains other characters, variables need to be enclosed in backticks."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firstName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"`first-name`")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`"))),(0,r.kt)("h4",{id:"condition-1"},"Condition"),(0,r.kt)("p",null,"A condition consists of a lefthand-side, an operator and a righthand-side."),(0,r.kt)("p",null,"The following operators are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"Equality"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if the lefthand-side is equal to the righthand-side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"Non-equality"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if the lefthand-side is not equal to the righthand-side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"IN")),(0,r.kt)("td",{parentName:"tr",align:null},"Containment"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if the lefthand-side is contained in the righthand-side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOT IN")),(0,r.kt)("td",{parentName:"tr",align:null},"Non-containment"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if the lefthand-side is not contained in the righthand-side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AND"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"&&")),(0,r.kt)("td",{parentName:"tr",align:null},"Conjunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if both the lefthand-side and righthand-side evaluate to true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OR"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"|","|")),(0,r.kt)("td",{parentName:"tr",align:null},"Disjunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to true if either of the lefthand-side and righthand-side evaluate to true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOT"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"Negation"),(0,r.kt)("td",{parentName:"tr",align:null},"Negates the result of the condition")))),(0,r.kt)("p",null,"Conditions can be enclosed in parentheses, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Equality",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"language == 'fr'"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"departmentCodes == ['D1', 'D2']")),(0,r.kt)("li",{parentName:"ul"},"Non-equality",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"language != 'fr'"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"departmentCodes != ['D1', 'D2']")),(0,r.kt)("li",{parentName:"ul"},"Containment",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"departmentCode IN ['D1', 'D2', 'D3']"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"'D1' IN departmentCodes")),(0,r.kt)("li",{parentName:"ul"},"Non-containment",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"departmentCode NOT IN ['D1', 'D2', 'D3']"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"'D1' NOT IN departmentCodes")),(0,r.kt)("li",{parentName:"ul"},"Conjunction",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"language == 'fr' && departmentCode IN ['D1', 'D2', 'D3']")),(0,r.kt)("li",{parentName:"ul"},"Disjunction",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"language == 'fr' || departmentCode IN ['D1', 'D2', 'D3']")),(0,r.kt)("li",{parentName:"ul"},"Negation",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"NOT language == 'fr'"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"! language == 'fr'")),(0,r.kt)("li",{parentName:"ul"},"Parentheses\n",(0,r.kt)("inlineCode",{parentName:"li"},"!(language == 'fr')"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"((a == '1' OR a == '2') AND NOT(b == '3'))"))),(0,r.kt)("h4",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string is considered to be equal to an array holding exactly that string",(0,r.kt)("br",{parentName:"li"}),"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'a' == ['a']")," holds true"),(0,r.kt)("li",{parentName:"ul"},"The lefthand-side of a (non-)containment condition can be an array",(0,r.kt)("br",{parentName:"li"}),"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"['b', 'a'] IN ['a', 'b', 'c']")," holds true")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the following SAML assertion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<samlp:Response ...>\n  ...\n    <saml:AttributeStatement>\n      <saml:Attribute Name="firstName" ...>\n        <saml:AttributeValue ...>John</saml:AttributeValue>\n      </saml:Attribute>\n      <saml:Attribute Name="departmentCode" ...>\n        <saml:AttributeValue ...>D1</saml:AttributeValue>\n      </saml:Attribute>\n      <saml:Attribute Name="language" ...>\n        <saml:AttributeValue ...>fr</saml:AttributeValue>\n      </saml:Attribute>\n      <saml:Attribute Name="roles" ...>\n        <saml:AttributeValue ...>internal-admin</saml:AttributeValue>\n        <saml:AttributeValue ...>veezoo-admin</saml:AttributeValue>\n      </saml:Attribute>\n    </saml:AttributeStatement>\n  ...\n</samlp:Response>\n')),(0,r.kt)("p",null,"The following examples illustrate some mappings and what they evaluate to given the above SAML assertion:"),(0,r.kt)("img",{alt:"Mapping example 1",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-1.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"abc")),(0,r.kt)("img",{alt:"Mapping example 2",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-2.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"John")),(0,r.kt)("img",{alt:"Mapping example 3",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-3.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"John")),(0,r.kt)("img",{alt:"Mapping example 4",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-4.png")}),(0,r.kt)("p",null,"\u2192 The mapping doesn't match"),(0,r.kt)("img",{alt:"Mapping example 5",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-5.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"Creator")),(0,r.kt)("img",{alt:"Mapping example 6",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-6.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"Creator")),(0,r.kt)("img",{alt:"Mapping example 7",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-7.png")}),(0,r.kt)("p",null,"\u2192 The mapping doesn't match"),(0,r.kt)("img",{alt:"Mapping example 8",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-8.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"Fran\xe7ais")),(0,r.kt)("img",{alt:"Mapping example 9",width:"700",src:(0,l.Z)("/img/studio/single-sign-on/mapping-example-9.png")}),(0,r.kt)("p",null,"\u2192 The mapping matches and evaluates to the empty string"),(0,r.kt)("h2",{id:"test-and-save-the-saml-configuration"},"Test and save the SAML configuration"),(0,r.kt)("p",null,"After having completed the above steps to configure SAML, you can test and save your configuration. Click on the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Test & Save"))," button to perform an authentication test with the SAML configuration."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The authentication test is performed in an authentication ",(0,r.kt)("strong",{parentName:"p"},"popup window"),". Please make sure to instruct your browser to allow popups."))),(0,r.kt)("p",null,"After a ",(0,r.kt)("strong",{parentName:"p"},"successful")," authentication test, a dialog displays the user attributes that resulted from applying the configured user attribute mappings:"),(0,r.kt)("img",{alt:"Authentication test result",width:"600",src:(0,l.Z)("/img/studio/single-sign-on/authentication-test-result.png")}),(0,r.kt)("p",null,"You can now go ahead and save the configuration."),(0,r.kt)("p",null,"If the authentication test ",(0,r.kt)("strong",{parentName:"p"},"failed"),", please make sure your configuration is correct or ",(0,r.kt)("a",{href:"https://www.veezoo.com/contact",target:"_blank"},"contact us")," for support."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you save a configuration which you enabled/disabled, or which is already enabled, the page will ",(0,r.kt)("strong",{parentName:"p"},"reload")," after the saving has completed. This is in order for the new authentication method to take effect (if you enabled/disabled the config) or to apply the user attribute mappings to your user (if the config is already enabled)."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you save an enabled configuration which doesn't assign your user the ",(0,r.kt)("strong",{parentName:"p"},"Creator")," user type, you won't be able save the configuration. This is because after saving, the page would reload and your user (not being a Creator) would not have access to Veezoo Studio anymore."))))}g.isMDXComponent=!0},4374:function(e,t,n){t.Z=n.p+"assets/images/identity-provider-ee1743f4789dae7429bee08eeed67009.png"},1390:function(e,t,n){t.Z=n.p+"assets/images/service-provider-c73912f53c94d5a97780d772f39be4f2.png"},6193:function(e,t,n){t.Z=n.p+"assets/images/user-attribute-mapping-d27a69d45b32e67df8432c3b6061680f.png"},4380:function(e,t,n){t.Z=n.p+"assets/images/user-attributes-db2f31e53c4757a7e370c6de433b465e.png"}}]);