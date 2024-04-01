"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[281],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=(n(4996),["components"]),l={title:"Embedded Analytics with Veezoo"},s=void 0,d={unversionedId:"embedded/embedded-guide",id:"embedded/embedded-guide",title:"Embedded Analytics with Veezoo",description:"Veezoo's Embedded Analytics offers an integration solution that enhances your applications with our sophisticated, natural language querying (NLQ) data analytics and visualization capabilities.",source:"@site/docs/embedded/embedded-guide.md",sourceDirName:"embedded",slug:"/embedded/embedded-guide",permalink:"/docs/embedded/embedded-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Embedded Analytics with Veezoo"},sidebar:"docs",previous:{title:"Row-Level Permission",permalink:"/docs/authorization/row-level-permission"},next:{title:"How to embed Veezoo: a Demonstration",permalink:"/docs/embedded/hyperstore-guide"}},u={},p=[{value:"About",id:"about",level:2},{value:"Value Proposition",id:"value-proposition",level:3},{value:"Characteristics",id:"characteristics",level:3},{value:"1. Contact Us to Enable Embedded Analytics",id:"1-contact-us-to-enable-embedded-analytics",level:2},{value:"2. Configure Allowed Hosts",id:"2-configure-allowed-hosts",level:2},{value:"3. Configure a Public Key to setup JWT (JSON Web Tokens)",id:"3-configure-a-public-key-to-setup-jwt-json-web-tokens",level:2},{value:"4. Configure Tenants in Veezoo",id:"4-configure-tenants-in-veezoo",level:2},{value:"5. Provide Access to a Knowledge Graph for a Tenant",id:"5-provide-access-to-a-knowledge-graph-for-a-tenant",level:2},{value:"6. Publish Changes to Tenants",id:"6-publish-changes-to-tenants",level:2},{value:"7. Define Authorization Logic for Tenants",id:"7-define-authorization-logic-for-tenants",level:2},{value:"What are Variables?",id:"what-are-variables",level:3},{value:"Authorization over virtual_table",id:"authorization-over-virtual_table",level:3},{value:"Authorization over Database Connection",id:"authorization-over-database-connection",level:3},{value:"8. Configure Shared and Non-Shared Entities",id:"8-configure-shared-and-non-shared-entities",level:2},{value:"9. Embed Veezoo into Your Application",id:"9-embed-veezoo-into-your-application",level:2},{value:"JSON Web Token (JWT)",id:"json-web-token-jwt",level:3},{value:"iFrame",id:"iframe",level:3},{value:"Sample code",id:"sample-code",level:3},{value:"10. Message Passing between iFrame and Your Application",id:"10-message-passing-between-iframe-and-your-application",level:2},{value:"Receiving Messages from Veezoo",id:"receiving-messages-from-veezoo",level:3},{value:"Sending Messages to Veezoo",id:"sending-messages-to-veezoo",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},h="wrapper";function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)(h,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veezoo's Embedded Analytics offers an integration solution that enhances your applications with our sophisticated, natural language querying (NLQ) data analytics and visualization capabilities."),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("h3",{id:"value-proposition"},"Value Proposition"),(0,i.kt)("p",null,"You can integrate Veezoo\u2019s conversational, Self-Service Analytics interface directly into your software or portal. With Embedded Veezoo, you give your users the flexibility to explore the data they want without making your software more complicated nor wasting development resources."),(0,i.kt)("p",null,"Our robust security, permission, and multi-tenancy architecture ensures that your users or customers only have access to what they\u2019re allowed to see."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{src:"https://player.vimeo.com/video/815040762?app_id=122963&h=8c11281837",width:"640",height:"360",style:{border:0},allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("h3",{id:"characteristics"},"Characteristics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seamless integration into your application for an improved user experience."),(0,i.kt)("li",{parentName:"ul"},"Supports multi-tenant architectures, providing personalized data experiences."),(0,i.kt)("li",{parentName:"ul"},"Utilizes JWT (JSON Web Tokens) for secure user authentication.")),(0,i.kt)("h2",{id:"1-contact-us-to-enable-embedded-analytics"},"1. Contact Us to Enable Embedded Analytics"),(0,i.kt)("p",null,"The first step is to ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"contact us")," if you are interested in the embedded functionality of Veezoo. This feature is not part of the Free tier and comes with a tailored pricing on request."),(0,i.kt)("h2",{id:"2-configure-allowed-hosts"},"2. Configure Allowed Hosts"),(0,i.kt)("p",null,"On the ",(0,i.kt)("em",{parentName:"p"},"Embedding Configuration")," page, make sure the Toggle Switch is ON (Embedding is enabled)."),(0,i.kt)("p",null,"For secure embedding, you need to specify the allowed hosts in Veezoo's admin settings. This ensures that your Veezoo content is only accessible from your designated, trusted domains."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Configuration",src:n(6755).Z,width:"1465",height:"1006"})),(0,i.kt)("h2",{id:"3-configure-a-public-key-to-setup-jwt-json-web-tokens"},"3. Configure a Public Key to setup JWT (JSON Web Tokens)"),(0,i.kt)("p",null,"Veezoo uses JWT for user authentication within Embedded Analytics. To enable secure access to relevant data and analytics, your application will have to generate a JWT on your server and pass it to Veezoo. For that to work, you will need to configure in Veezoo Admin the public key for a private key that will be used by your application to sign the token."),(0,i.kt)("p",null,"If you don't know how to create a key pair, follow the instructions provided in Veezoo Admin."),(0,i.kt)("h2",{id:"4-configure-tenants-in-veezoo"},"4. Configure Tenants in Veezoo"),(0,i.kt)("p",null,"Veezoo's Embedded Analytics supports multi-tenant architectures. A tenant corresponds usually to a customer of yours, which may have multiple users in your application. Veezoo needs to know about the existence of these tenants, so that when a user accesses Veezoo through your application it will access the Knowledge Graph with the right authorization logic."),(0,i.kt)("p",null,"To configure Tenants in Veezoo, go to ",(0,i.kt)("a",{parentName:"p",href:"https://app.veezoo.com/admin/embedded/tenants"},"Veezoo Admin > Embedded > Tenants"),". "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently these need to be manually added over the UI, but we plan to release a Veezoo Admin API to do this programatically.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Tenants",src:n(2048).Z,width:"1480",height:"472"})),(0,i.kt)("p",null,"You will have to give it a name and a Tenant ID, which is the ID your application uses to identify a tenant. This will be important for mapping a user to the right tenant as part of the JWT authentication."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Create Tenant",src:n(3648).Z,width:"618",height:"370"})),(0,i.kt)("h2",{id:"5-provide-access-to-a-knowledge-graph-for-a-tenant"},"5. Provide Access to a Knowledge Graph for a Tenant"),(0,i.kt)("p",null,"Choose the Knowledge Graph that will be available for your tenants and configure Tenant Access in Studio."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access",src:n(2324).Z,width:"1699",height:"624"})),(0,i.kt)("p",null,"Veezoo will generate a different view of the same Knowledge Graph for each tenant. You will still manage only the main Knowledge Graph, but in the next steps you will configure how the authorization logic works for each tenant. This way, users will see different data in their answers and dashboards and different entities in the AutoComplete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Create",src:n(8581).Z,width:"617",height:"236"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently these need to be manually added over the UI, but we plan to release a Veezoo Admin API to do this programatically.")),(0,i.kt)("h2",{id:"6-publish-changes-to-tenants"},"6. Publish Changes to Tenants"),(0,i.kt)("p",null,"While you develop your Knowledge Graph further, you will want to eventually publish the changes to your tenants. "),(0,i.kt)("p",null,"To do that, you will have to 'update' them over the UI in ",(0,i.kt)("inlineCode",{parentName:"p"},"Studio > Tenant Access"),". Select which ones to update (or all) and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Update"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Update",src:n(1192).Z,width:"1153",height:"334"})),(0,i.kt)("h2",{id:"7-define-authorization-logic-for-tenants"},"7. Define Authorization Logic for Tenants"),(0,i.kt)("p",null,"Veezoo supports granular control over data access through variables and row-level permissions. This allows you to define which rows of data within a KG are accessible by a specific tenant."),(0,i.kt)("h3",{id:"what-are-variables"},"What are Variables?"),(0,i.kt)("p",null,"You can think of variables as placeholders defined in the Knowledge Graph and which can have a different value assigned per tenant. These variables can be used in SQL queries or for the database connection, so you can tell Veezoo how to restrict the data for each tenant."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, you can already access the content of the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id")," with the ID you've configured for your tenant in the step 4 above. This is the most common way to do row-level authorization for your tenants. But if you need to create other variables, follow the next steps.")),(0,i.kt)("p",null,"To create variables for your Knowledge Graph, you will have to create a new file of type 'Variable' in Studio."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Files &gt; Variables",src:n(1828).Z,width:"301",height:"561"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Files &gt; Variables &gt; Modal",src:n(7811).Z,width:"458",height:"294"})),(0,i.kt)("p",null,"Example content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"variable company_id {\n  # Leave blank\n}\n\n# You can also have multiple in the same file\nvariable date_cutoff {\n  # Leave blank\n}\n")),(0,i.kt)("p",null,"If you declare a new variable, you will have to first publish these changes to your tenant views of the Knowledge Graph, before you are able to assign values. Follow the same steps as in the section 'Publish Changes to Tenants' above."),(0,i.kt)("p",null,"Now you can assign a value to these variables for each tenant, incl. for the main Knowledge Graph, by going on the Tenant Access page and clicking on the pencil at the Variables column."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Variables",src:n(1584).Z,width:"925",height:"197"})),(0,i.kt)("p",null,"Now let's see how we can use these variables to restrict data access."),(0,i.kt)("h3",{id:"authorization-over-virtual_table"},"Authorization over virtual_table"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/db-layer/virtual-table"},"virtual_table")," you can define SQL with special templating to specify ",(0,i.kt)("a",{parentName:"p",href:"/docs/authorization/row-level-permission"},"row-level authorization")," needed for your tenants. Read the related articles linked to understand more about how to work with it."),(0,i.kt)("p",null,"Here is how an example on how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," in combination with variables (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id")," here) to restrict access to the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.storage.hiring_app {\n\n    virtual_table candidates {\n\n        identifier: "candidates"\n        \n        # Only show candidates from the current tenant (veezoo.Tenant.Id)\n        virtual_table_sql: \n         """\n            SELECT\n              *\n            FROM\n              candidates c\n            WHERE\n              c.company_id = ${quote(veezoo.Tenant.Id)}\n            """\n        \n        \n        column ID {\n            identifier: "ID"\n            is_primary_key: true\n            primitive_type: "varchar"\n        }\n\n        ...\n   }\n}\n')),(0,i.kt)("p",null,"In this case, we used the default ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id"),", which comes pre-defined. But you could have used any other variable that you've defined in the Knowledge Graph as well."),(0,i.kt)("h3",{id:"authorization-over-database-connection"},"Authorization over Database Connection"),(0,i.kt)("p",null,"Alternatively, you may have a different way of handling your customer's data. One common approach is to have separate schemas for each client."),(0,i.kt)("p",null,"Veezoo allows you to configure this by using variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Database Connection"),"."),(0,i.kt)("p",null,"Here is an example using MySQL:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Configuration &gt; Database Connection",src:n(9541).Z,width:"920",height:"992"})),(0,i.kt)("h2",{id:"8-configure-shared-and-non-shared-entities"},"8. Configure Shared and Non-Shared Entities"),(0,i.kt)("p",null,"Once you've configured the authorization logic for the tenants, you will want to check which ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/entity"},"Entities")," should be shared / common to all tenants and which ones are tenant-specific."),(0,i.kt)("p",null,"As an example, let's say you have an HR application with information about the hiring process, where there is a status for it. It could be that ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," is a class with entities that are common to all tenants. In this case, you don't have to do anything specifically for it."),(0,i.kt)("p",null,"But let's say you have another class called ",(0,i.kt)("inlineCode",{parentName:"p"},"Candidate"),". In this case, each tenant will want to see its own candidates. For that, apart from configuring the authorization logic described in the previous section, you will have to delete the entities of the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Candidate")," and select it as a class to be synced (cf. ",(0,i.kt)("a",{parentName:"p",href:"/docs/kg-sync"},"Knowledge Graph Synchronization"),"). "),(0,i.kt)("p",null,'Don\'t forget to "Update" the tenant Knowledge Graphs as described in step 6.'),(0,i.kt)("h2",{id:"9-embed-veezoo-into-your-application"},"9. Embed Veezoo into Your Application"),(0,i.kt)("p",null,"You can integrate Veezoo into your software by incorporating an iframe that points to Veezoo's domain and uses the generated JWT for user authentication."),(0,i.kt)("h3",{id:"json-web-token-jwt"},"JSON Web Token (JWT)"),(0,i.kt)("p",null,"To embed Veezoo into your application, you will first need to generate a JSON web token (JWT). This token will then be included in the URL used to load the Veezoo interface into an iframe."),(0,i.kt)("p",null,"The JWT makes use of the following ",(0,i.kt)("strong",{parentName:"p"},"claims"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iat")),(0,i.kt)("td",{parentName:"tr",align:null},"Issued at"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the time at which the JWT was issued")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"exp")),(0,i.kt)("td",{parentName:"tr",align:null},"Expiration time"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the expiration time on and after which the JWT must not be accepted for processing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"jti")),(0,i.kt)("td",{parentName:"tr",align:null},"JWT ID"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique identifier for the JWT to avoid replay attacks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tenantId")),(0,i.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the tenant in Veezoo the user belongs to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sub")),(0,i.kt)("td",{parentName:"tr",align:null},"Subject"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the subject of the JWT, i.e. the user to be authenticated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The email address of the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"firstName")),(0,i.kt)("td",{parentName:"tr",align:null},"First Name"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The first name of the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lastName")),(0,i.kt)("td",{parentName:"tr",align:null},"Last Name"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The last name of the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"language")),(0,i.kt)("td",{parentName:"tr",align:null},"Language"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"The default language of the user, specified as a ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/IETF_language_tag"},"BCP 47 language tag")," (currently supported are ",(0,i.kt)("inlineCode",{parentName:"td"},"en-US"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"de-DE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"fr-FR"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"it-IT")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"pt-BR"),").")))),(0,i.kt)("p",null,"The JWT needs to be ",(0,i.kt)("strong",{parentName:"p"},"signed")," with the ",(0,i.kt)("strong",{parentName:"p"},"RSA private key")," from the public/private key pair of which you have configured the public key in Veezoo Admin."),(0,i.kt)("h3",{id:"iframe"},"iFrame"),(0,i.kt)("p",null,"To embed Veezoo in your application, you will need to include an iframe in your application's HTML code. The iframe must point to Veezoo using your subdomain and include the JWT in the URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://<subdomain>.app.veezoo.com?jwt=<jwt>&embedded=true"></iframe>\n')),(0,i.kt)("h3",{id:"sample-code"},"Sample code"),(0,i.kt)("p",null,"Here's a simplified example of how to accomplish this using Python and Flask (you will need the libraries ",(0,i.kt)("em",{parentName:"p"},"cryptography")," and ",(0,i.kt)("em",{parentName:"p"},"pyjwt"),", both of which you can get via ",(0,i.kt)("em",{parentName:"p"},"pip"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, render_template\nimport jwt\nfrom datetime import datetime, timedelta\nimport uuid\n\napp = Flask(__name__)\n\ndef generate_jwt(payload, private_key, expiration_minutes=5):\n    headers = {\n        "typ": "JWT",\n        "alg": "RS256"\n    }\n\n    # Update the payload with "iat" and "exp" claims\n    iat = datetime.utcnow()\n    exp = iat + timedelta(minutes=expiration_minutes)\n    payload.update({\n        "iat": iat,\n        "exp": exp,\n    })\n\n    # Generate JWT\n    encoded_jwt = jwt.encode(payload, private_key, algorithm="RS256", headers=headers)    \n    return encoded_jwt\n\n@app.route("/")\ndef home():\n    jti = uuid.uuid1()\n    payload = {\n        "tenantId": "64bc23cc-cc6e-4387-9f7d-fc125b132895",\n        "jti": jti,\n        "sub": "a529a344-7b43-46e1-bd56-2a722abd683b",\n        "email": "john.doe@company.com",\n        "firstName": "John",\n        "lastName": "Doe",\n        "language": "en-US",\n    }\n\n    # Note: private_key should be a string in PEM format. It typically starts with\n    # \'-----BEGIN PRIVATE KEY-----\' and ends with \'-----END PRIVATE KEY-----\'.\n    private_key = "<your-private-key-here>"\n    jwt = generate_jwt(payload, private_key)\n\n    # substitute \'company\' by your Veezoo subdomain\n    veezoo_url = f"https://company.app.veezoo.com?jwt={jwt}&embedded=true"\n\n    return render_template("index.html", veezoo_url=veezoo_url)\n')),(0,i.kt)("p",null,"In this example, your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file, placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory, would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body style="background-color: #f8f8f8; margin: 0; display: flex; align-items: center; justify-content: center; padding: 50px;">\n    <iframe\n      id="veezoo-iframe"\n      src="{{ veezoo_url }}"\n      frameborder="0"\n      style="width: 100%; height: 100%; border: 1px solid #ddd;"\n    >\n    </iframe>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"10-message-passing-between-iframe-and-your-application"},"10. Message Passing between iFrame and Your Application"),(0,i.kt)("p",null,"Veezoo's Embedded Analytics also supports message passing between the iFrame embedding Veezoo and your application, leveraging JavaScript's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"Window.postMessage()")," method for cross-document messaging."),(0,i.kt)("h3",{id:"receiving-messages-from-veezoo"},"Receiving Messages from Veezoo"),(0,i.kt)("p",null,"The following code shows how you can listen to messages from Veezoo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('message', event => {\n  // check the event's origin in order only to process messages sent by Veezoo\n  if (event.origin === 'https://<subdomain>.app.veezoo.com') {\n    const message = event.data;\n    if (message.type === '<type>') {\n      // process message of type <type>\n    }\n  }\n});\n")),(0,i.kt)("p",null,"Veezoo currently sends the following messages:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"),(0,i.kt)("th",null,"Example"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"boards")),(0,i.kt)("td",null,"Provides information about the dashboards which are available to the user. Contains the following data:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boards"),(0,i.kt)("br",{parentName:"li"}),"an array of board objects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boards[*].id"),(0,i.kt)("br",{parentName:"li"}),"the ID of the board"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boards[*].name"),(0,i.kt)("br",{parentName:"li"}),"the name of the board"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boards[*].isOwned"),"\nspecifies whether the board is owned by the user or shared with them"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "boards",\n  "boards": [\n    {\n      "id": "b56bd191-7a22-4ba6-8703-b26ee7fd719a",\n      "name": "Sales 360",\n      "isOwned": true\n    },\n    ...\n  ]\n}\n')))))),(0,i.kt)("h3",{id:"sending-messages-to-veezoo"},"Sending Messages to Veezoo"),(0,i.kt)("p",null,"The following code shows how you can send messages to Veezoo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// replace <id> with the ID of your Veezoo iframe\nconst veezooIframe = document.getElementById('<id>');\nconst message = {\n  type: \"<type>\",\n  // provide additional data\n  ...\n};\nveezooIframe.contentWindow.postMessage(message, '*');\n")),(0,i.kt)("p",null,"Veezoo currently accepts the following messages:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"),(0,i.kt)("th",null,"Example"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"openBoard")),(0,i.kt)("td",null,"Opens a board in the chat. Provide the following data:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),(0,i.kt)("br",{parentName:"li"}),"the ID of the board to open"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  type: "openBoard",\n  boardId: "b56bd191-7a22-4ba6-8703-b26ee7fd719a"\n}\n')))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"setLanguage")),(0,i.kt)("td",null,"Sets the language of the knowledge graph. Provide the following data:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language"),(0,i.kt)("br",{parentName:"li"}),"the language to set for the knowledge graph, specified as a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IETF_language_tag"},"BCP 47 language tag")))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  type: "setLanguage",\n  language: "de-DE"\n}\n')))))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"With Veezoo's Embedded Analytics, you can enhance the value of your application by providing an integrated, dynamic, and interactive data analytics experience, powered by our sophisticated NLQ capabilities. This ensures your users have immediate access to insights and data-driven decision-making tools right within your application, improving user engagement and overall satisfaction."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter any issues or have questions about embedding Veezoo into your application, don't hesitate to ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"contact us")," for support.")))}m.isMDXComponent=!0},6755:function(e,t,n){t.Z=n.p+"assets/images/admin-embedded-config-23661a1ca8245c2a00b89c62f0fabfab.png"},3648:function(e,t,n){t.Z=n.p+"assets/images/admin-embedded-create-tenant-48815cc929a93ccab6edeb1a35939e4c.png"},2048:function(e,t,n){t.Z=n.p+"assets/images/admin-embedded-tenants-36358332ca208aa84016b19220dfd87b.png"},9541:function(e,t,n){t.Z=n.p+"assets/images/studio-configuration-db-variables-6ee6f8d0a45ca7a9cf3cf6a791106e0b.png"},8581:function(e,t,n){t.Z=n.p+"assets/images/studio-create-tenant-kg-4875831d0e540af7b98c0537387681ca.png"},7811:function(e,t,n){t.Z=n.p+"assets/images/studio-create-variables-modal-1c4d32b2b3622a3cf33773e4b1904606.png"},1828:function(e,t,n){t.Z=n.p+"assets/images/studio-create-variables-a91a7383cf0bf2cae25247cd9726a030.png"},1584:function(e,t,n){t.Z=n.p+"assets/images/studio-edit-variables-dab447a31ee758be6df5a65f3a195dec.png"},2324:function(e,t,n){t.Z=n.p+"assets/images/studio-tenant-access-24387b37b80867f98e0e5c3df9594a90.png"},1192:function(e,t,n){t.Z=n.p+"assets/images/studio-update-tenants-e3c7288c92fb0c338a64be67110d50e3.png"}}]);