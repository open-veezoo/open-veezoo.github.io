"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[281],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},954:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=(a(4996),["components"]),s={title:"Embedded Analytics with Veezoo"},l=void 0,d={unversionedId:"embedded/embedded-guide",id:"embedded/embedded-guide",title:"Embedded Analytics with Veezoo",description:"Veezoo's Embedded Analytics offers an integration solution that enhances your applications with our sophisticated, natural language querying (NLQ) data analytics and visualization capabilities.",source:"@site/docs/embedded/embedded-guide.md",sourceDirName:"embedded",slug:"/embedded/embedded-guide",permalink:"/docs/embedded/embedded-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/embedded/embedded-guide.md",tags:[],version:"current",frontMatter:{title:"Embedded Analytics with Veezoo"},sidebar:"docs",previous:{title:"Row-Level Permission",permalink:"/docs/authorization/row-level-permission"},next:{title:"Customizing Veezoo's Look",permalink:"/docs/themes/"}},c={},u=[{value:"Value Proposition",id:"value-proposition",level:2},{value:"Characteristics",id:"characteristics",level:2},{value:"How to Get Started with Embedding Veezoo",id:"how-to-get-started-with-embedding-veezoo",level:2},{value:"1. Contact Us to Enable Embedded Analytics",id:"1-contact-us-to-enable-embedded-analytics",level:3},{value:"2. Configure Allowed Hosts",id:"2-configure-allowed-hosts",level:3},{value:"3. Configure a Public Key to setup JWT (JSON Web Tokens)",id:"3-configure-a-public-key-to-setup-jwt-json-web-tokens",level:3},{value:"4. Configure Tenants in Veezoo",id:"4-configure-tenants-in-veezoo",level:3},{value:"5. Provide Access to a Knowledge Graph for a Tenant",id:"5-provide-access-to-a-knowledge-graph-for-a-tenant",level:3},{value:"6. Publish Changes to Tenants",id:"6-publish-changes-to-tenants",level:3},{value:"7. Define Authorization Logic for Tenants",id:"7-define-authorization-logic-for-tenants",level:3},{value:"What are Variables?",id:"what-are-variables",level:4},{value:"A. Authorization over virtual_table",id:"a-authorization-over-virtual_table",level:4},{value:"B. Authorization over Database Connection",id:"b-authorization-over-database-connection",level:4},{value:"8. Configure Shared and Non-Shared Entities",id:"8-configure-shared-and-non-shared-entities",level:3},{value:"9. Embed Veezoo into Your Application (iFrame + JWT)",id:"9-embed-veezoo-into-your-application-iframe--jwt",level:3},{value:"10. Message Passing between iFrame and Your Application",id:"10-message-passing-between-iframe-and-your-application",level:3},{value:"Receiving Messages from Veezoo (boards)",id:"receiving-messages-from-veezoo-boards",level:4},{value:"Sending Messages to Veezoo",id:"sending-messages-to-veezoo",level:4}],p={toc:u},h="wrapper";function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)(h,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Veezoo's Embedded Analytics offers an integration solution that enhances your applications with our sophisticated, natural language querying (NLQ) data analytics and visualization capabilities."),(0,i.kt)("h2",{id:"value-proposition"},"Value Proposition"),(0,i.kt)("p",null,"You can integrate Veezoo\u2019s conversational, Self-Service Analytics interface directly into your software or portal. With Embedded Veezoo, you give your users the flexibility to explore the data they want without making your software more complicated nor wasting development resources."),(0,i.kt)("p",null,"Our robust security, permission, and multi-tenancy architecture ensures that your users or customers only have access to what they\u2019re allowed to see."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{src:"https://player.vimeo.com/video/815040762?app_id=122963&h=8c11281837",width:"640",height:"360",style:{border:0},allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("h2",{id:"characteristics"},"Characteristics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seamless integration into your application for an improved user experience."),(0,i.kt)("li",{parentName:"ul"},"Supports multi-tenant architectures, providing personalized data experiences."),(0,i.kt)("li",{parentName:"ul"},"Utilizes JWT (JSON Web Tokens) for secure user authentication.")),(0,i.kt)("h2",{id:"how-to-get-started-with-embedding-veezoo"},"How to Get Started with Embedding Veezoo"),(0,i.kt)("h3",{id:"1-contact-us-to-enable-embedded-analytics"},"1. Contact Us to Enable Embedded Analytics"),(0,i.kt)("p",null,"The first step is to ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"contact us")," if you are interested in the embedded functionality of Veezoo. This feature is not part of the Free tier and comes with a tailored pricing on request."),(0,i.kt)("h3",{id:"2-configure-allowed-hosts"},"2. Configure Allowed Hosts"),(0,i.kt)("p",null,"On the ",(0,i.kt)("em",{parentName:"p"},"Embedding Configuration")," page, make sure the Toggle Switch is ON (Embedding is enabled)."),(0,i.kt)("p",null,"For secure embedding, you need to specify the allowed hosts in Veezoo's admin settings. This ensures that your Veezoo content is only accessible from your designated, trusted domains."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Configuration",src:a(7054).Z,width:"1465",height:"1006"})),(0,i.kt)("h3",{id:"3-configure-a-public-key-to-setup-jwt-json-web-tokens"},"3. Configure a Public Key to setup JWT (JSON Web Tokens)"),(0,i.kt)("p",null,"Veezoo uses JWT for user authentication within Embedded Analytics. To enable secure access to relevant data and analytics, your application will have to generate a JWT on your server and pass it to Veezoo. For that to work, you will need to configure in Veezoo Admin the public key for a private key that will be used by your application to sign the token."),(0,i.kt)("p",null,"If you don't know how to create a key pair, follow the instructions provided in Veezoo Admin."),(0,i.kt)("h3",{id:"4-configure-tenants-in-veezoo"},"4. Configure Tenants in Veezoo"),(0,i.kt)("p",null,"Veezoo's Embedded Analytics supports multi-tenant architectures. A tenant corresponds usually to a customer of yours, which may have multiple users in your application. Veezoo needs to know about the existence of these tenants, so that when a user accesses Veezoo through your application it will access the Knowledge Graph with the right authorization logic."),(0,i.kt)("p",null,"To configure Tenants in Veezoo, go to ",(0,i.kt)("a",{parentName:"p",href:"https://app.veezoo.com/admin/embedded/tenants"},"Veezoo Admin > Embedded > Tenants"),". "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently these need to be manually added over the UI, but we plan to release a Veezoo Admin API to do this programatically.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Tenants",src:a(8985).Z,width:"1480",height:"472"})),(0,i.kt)("p",null,"You will have to give it a name and a Tenant ID, which is the ID your application uses to identify a tenant. This will be important for mapping a user to the right tenant as part of the JWT authentication."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Embedded Create Tenant",src:a(7561).Z,width:"618",height:"370"})),(0,i.kt)("h3",{id:"5-provide-access-to-a-knowledge-graph-for-a-tenant"},"5. Provide Access to a Knowledge Graph for a Tenant"),(0,i.kt)("p",null,"Choose the Knowledge Graph that will be available for your tenants and configure Tenant Access in Studio."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access",src:a(5688).Z,width:"1699",height:"624"})),(0,i.kt)("p",null,"Veezoo will generate a different view of the same Knowledge Graph for each tenant. You will still manage only the main Knowledge Graph, but in the next steps you will configure how the authorization logic works for each tenant. This way, users will see different data in their answers and dashboards and different entities in the AutoComplete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Create",src:a(2232).Z,width:"617",height:"236"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently these need to be manually added over the UI, but we plan to release a Veezoo Admin API to do this programatically.")),(0,i.kt)("h3",{id:"6-publish-changes-to-tenants"},"6. Publish Changes to Tenants"),(0,i.kt)("p",null,"While you develop your Knowledge Graph further, you will want to eventually publish the changes to your tenants. "),(0,i.kt)("p",null,"To do that, you will have to 'update' them over the UI in ",(0,i.kt)("inlineCode",{parentName:"p"},"Studio > Tenant Access"),". Select which ones to update (or all) and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Update"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Update",src:a(103).Z,width:"1153",height:"334"})),(0,i.kt)("h3",{id:"7-define-authorization-logic-for-tenants"},"7. Define Authorization Logic for Tenants"),(0,i.kt)("p",null,"Veezoo supports granular control over data access through variables and row-level permissions. This allows you to define which rows of data within a KG are accessible by a specific tenant."),(0,i.kt)("h4",{id:"what-are-variables"},"What are Variables?"),(0,i.kt)("p",null,"You can think of variables as placeholders defined in the Knowledge Graph and which can have a different value assigned per tenant. These variables can be used in SQL queries or for the database connection, so you can tell Veezoo how to restrict the data for each tenant."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, you can already access the content of the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id")," with the ID you've configured for your tenant in the step 4 above. This is the most common way to do row-level authorization for your tenants. But if you need to create other variables, follow the next steps.")),(0,i.kt)("p",null,"To create variables for your Knowledge Graph, you will have to create a new file of type 'Variable' in Studio."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Files &gt; Variables",src:a(3643).Z,width:"301",height:"561"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Files &gt; Variables &gt; Modal",src:a(2678).Z,width:"458",height:"294"})),(0,i.kt)("p",null,"Example content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"variable company_id {\n  # Leave blank\n}\n\n# You can also have multiple in the same file\nvariable date_cutoff {\n  # Leave blank\n}\n")),(0,i.kt)("p",null,"If you declare a new variable, you will have to first publish these changes to your tenant views of the Knowledge Graph, before you are able to assign values. Follow the same steps as in the section 'Publish Changes to Tenants' above."),(0,i.kt)("p",null,"Now you can assign a value to these variables for each tenant, incl. for the main Knowledge Graph, by going on the Tenant Access page and clicking on the pencil at the Variables column."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Tenant Access &gt; Variables",src:a(6062).Z,width:"925",height:"197"})),(0,i.kt)("p",null,"Now let's see how we can use these variables to restrict data access."),(0,i.kt)("h4",{id:"a-authorization-over-virtual_table"},"A. Authorization over virtual_table"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/db-layer/virtual-table"},"virtual_table")," you can define SQL with special templating to specify ",(0,i.kt)("a",{parentName:"p",href:"/docs/authorization/row-level-permission"},"row-level authorization")," needed for your tenants. Read the related articles linked to understand more about how to work with it."),(0,i.kt)("p",null,"Here is how an example on how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual_table")," in combination with variables (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id")," here) to restrict access to the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.storage.hiring_app {\n\n    virtual_table candidates {\n\n        identifier: "candidates"\n        \n        # Only show candidates from the current tenant (veezoo.Tenant.Id)\n        virtual_table_sql: \n         """\n            SELECT\n              *\n            FROM\n              candidates c\n            WHERE\n              c.company_id = ${quote(veezoo.Tenant.Id)}\n            """\n        \n        \n        column ID {\n            identifier: "ID"\n            is_primary_key: true\n            primitive_type: "varchar"\n        }\n\n        ...\n   }\n}\n')),(0,i.kt)("p",null,"In this case, we used the default ",(0,i.kt)("inlineCode",{parentName:"p"},"veezoo.Tenant.Id"),", which comes pre-defined. But you could have used any other variable that you've defined in the Knowledge Graph as well."),(0,i.kt)("h4",{id:"b-authorization-over-database-connection"},"B. Authorization over Database Connection"),(0,i.kt)("p",null,"Alternatively, you may have a different way of handling your customer's data. One common approach is to have separate schemas for each client."),(0,i.kt)("p",null,"Veezoo allows you to configure this by using variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Database Connection"),"."),(0,i.kt)("p",null,"Here is an example using MySQL:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studio &gt; Configuration &gt; Database Connection",src:a(5981).Z,width:"920",height:"992"})),(0,i.kt)("h3",{id:"8-configure-shared-and-non-shared-entities"},"8. Configure Shared and Non-Shared Entities"),(0,i.kt)("p",null,"Once you've configured the authorization logic for the tenants, you will want to check which ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/kb-layer/entity"},"Entities")," should be shared / common to all tenants and which ones are tenant-specific."),(0,i.kt)("p",null,"As an example, let's say you have an HR application with information about the hiring process, where there is a status for it. It could be that ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," is a class with entities that are common to all tenants. In this case, you don't have to do anything specifically for it."),(0,i.kt)("p",null,"But let's say you have another class called ",(0,i.kt)("inlineCode",{parentName:"p"},"Candidate"),". In this case, each tenant will want to see its own candidates. For that, apart from configuring the authorization logic described in the previous section, you will have to delete the entities of the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Candidate")," and select it as a class to be synced (cf. ",(0,i.kt)("a",{parentName:"p",href:"/docs/kg-sync"},"Knowledge Graph Synchronization"),"). "),(0,i.kt)("p",null,'Don\'t forget to "Update" the tenant Knowledge Graphs as described in step 6.'),(0,i.kt)("h3",{id:"9-embed-veezoo-into-your-application-iframe--jwt"},"9. Embed Veezoo into Your Application (iFrame + JWT)"),(0,i.kt)("p",null,"You can integrate Veezoo into your software by incorporating an iframe that points to Veezoo's domain and uses the generated JWT for user authentication."),(0,i.kt)("p",null,"To embed Veezoo into your application, you will first need to generate a JSON Web Token (JWT). This token will then be included in the URL used to load the Veezoo interface into an iframe."),(0,i.kt)("p",null,"Here's a simplified example of how to accomplish this using Python and Flask (you will need the libraries ",(0,i.kt)("em",{parentName:"p"},"cryptography")," and ",(0,i.kt)("em",{parentName:"p"},"pyjwt"),", both of which you can get via ",(0,i.kt)("em",{parentName:"p"},"pip"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, render_template\nimport jwt\nfrom datetime import datetime, timedelta\nimport uuid\n\napp = Flask(__name__)\n\ndef generate_jwt(payload, private_key, expiration_minutes=5):\n    headers = {\n        "typ": "JWT",\n        "alg": "RS256"\n    }\n\n    # "iat" (Issued At) claim\n    iat = datetime.utcnow()\n\n    # "exp" (Expiration Time) claim\n    exp = iat + timedelta(minutes=expiration_minutes)\n\n    # Update the payload with "iat" and "exp" claims\n    payload.update({\n        "iat": iat,\n        "exp": exp,\n    })\n\n    # Generate JWT\n    encoded_jwt = jwt.encode(payload, private_key, algorithm="RS256", headers=headers)\n    \n    return encoded_jwt\n\n@app.route("/")\ndef home():\n    jti = uuid.uuid1()\n    payload = {\n        # This is the ID for the tenant you configured in Veezoo Admin in a previous step\n        "tenantId": "1234-5678-1020-3040",\n        "jti": jti,\n        # This is an ID for the user (has to be changed for new users)\n        "sub": "12345",\n        "email": "user@example.com",\n        "firstName": "John",\n        "lastName": "Doe",\n    }\n\n    # Note: private_key should be a string in PEM format. It typically starts with\n    # \'-----BEGIN PRIVATE KEY-----\' and ends with \'-----END PRIVATE KEY-----\'.\n    private_key = "<your-private-key-here>"\n    jwt = generate_jwt(payload, private_key)\n\n    # substitute \'company\' by your Veezoo subdomain\n    veezoo_url = f"https://company.app.veezoo.com?jwt={jwt}&embedded=true"\n\n    return render_template("index.html", veezoo_url=veezoo_url)\n')),(0,i.kt)("p",null,"In this example, your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file, placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory, would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body style="background-color: #f8f8f8; margin: 0; display: flex; align-items: center; justify-content: center; padding: 50px;">\n    <iframe\n      id="veezoo-iframe"\n      src="{{ veezoo_url }}"\n      frameborder="0"\n      style="width: 100%; height: 100%; border: 1px solid #ddd;"\n    >\n    </iframe>\n  </body>\n</html>\n')),(0,i.kt)("h3",{id:"10-message-passing-between-iframe-and-your-application"},"10. Message Passing between iFrame and Your Application"),(0,i.kt)("p",null,"Veezoo's Embedded Analytics also supports a feature where you can leverage JavaScript's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"Window.postMessage()")," method for cross-document messaging. This feature facilitates communication between the Veezoo iFrame (embedded application) and your application."),(0,i.kt)("p",null,"Currently, the only communication possible is related to listing which boards are available to the user (Veezoo -> Your Application) and opening a specific board in Veezoo (Your Application -> Veezoo)."),(0,i.kt)("h4",{id:"receiving-messages-from-veezoo-boards"},"Receiving Messages from Veezoo (boards)"),(0,i.kt)("p",null,"Veezoo sends a message of type 'boards' to your application, which provides information about the available dashboards in Veezoo. This way, your application becomes aware of which dashboards (by id and name) are available inside Veezoo."),(0,i.kt)("p",null,"Here's an example of how you can listen to the 'boards' message from Veezoo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('message', function(event) {\n    // We only accept messages from Veezoo\n    // substitute 'company' by your Veezoo subdomain\n    if (event.origin !== \"https://company.app.veezoo.com\") \n        return;\n\n    var message = event.data;\n\n    if (message.type === 'boards') {\n        console.log('Received list of available dashboards:', message);\n    }\n});\n")),(0,i.kt)("p",null,"In the above code, ",(0,i.kt)("inlineCode",{parentName:"p"},"message.data")," will be an array of dashboard objects, each containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of a dashboard."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // the id for opening it\n    "id": "abcd-1234-efgh-5678",\n\n    // the name of the dashboard\n    "name": "My Dashboard",\n\n    // whether the dashboard is a private (owned) one or shared\n    "isOwned": true \n}\n')),(0,i.kt)("h4",{id:"sending-messages-to-veezoo"},"Sending Messages to Veezoo"),(0,i.kt)("p",null,"You can also tell Veezoo to open a specific dashboard by sending a message to Veezoo's iFrame. This can be done by calling the postMessage() method on the iFrame's contentWindow."),(0,i.kt)("p",null,"Here's an example of how you can tell Veezoo to open a specific dashboard (replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<DASHBOARD_ID>")," with the id of the dashboard you want to open):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var veezooIframe = document.getElementById('veezoo-iframe'); // Replace with your iFrame's id\nvar message = {\n    boardId: '<DASHBOARD_ID>'\n};\n// substitute 'company' by your Veezoo subdomain\nveezooIframe.contentWindow.postMessage(message, '*');\n")),(0,i.kt)("p",null,"In the above example, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"'veezoo-iframe'")," with the actual ID of your iframe element. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"'<DASHBOARD_ID>'")," with the id of the dashboard you want to open."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter any issues or have questions about embedding Veezoo into your application, don't hesitate to ",(0,i.kt)("a",{parentName:"p",href:"https://www.veezoo.com/contact"},"contact us")," for support.")),(0,i.kt)("p",null,"With Veezoo's Embedded Analytics, you can enhance the value of your application by providing an integrated, dynamic, and interactive data analytics experience, powered by our sophisticated NLQ capabilities. This ensures your users have immediate access to insights and data-driven decision-making tools right within your application, improving user engagement and overall satisfaction."))}m.isMDXComponent=!0},7054:function(e,t,a){t.Z=a.p+"assets/images/admin-embedded-config-23661a1ca8245c2a00b89c62f0fabfab.png"},7561:function(e,t,a){t.Z=a.p+"assets/images/admin-embedded-create-tenant-48815cc929a93ccab6edeb1a35939e4c.png"},8985:function(e,t,a){t.Z=a.p+"assets/images/admin-embedded-tenants-36358332ca208aa84016b19220dfd87b.png"},5981:function(e,t,a){t.Z=a.p+"assets/images/studio-configuration-db-variables-6ee6f8d0a45ca7a9cf3cf6a791106e0b.png"},2232:function(e,t,a){t.Z=a.p+"assets/images/studio-create-tenant-kg-4875831d0e540af7b98c0537387681ca.png"},2678:function(e,t,a){t.Z=a.p+"assets/images/studio-create-variables-modal-1c4d32b2b3622a3cf33773e4b1904606.png"},3643:function(e,t,a){t.Z=a.p+"assets/images/studio-create-variables-a91a7383cf0bf2cae25247cd9726a030.png"},6062:function(e,t,a){t.Z=a.p+"assets/images/studio-edit-variables-dab447a31ee758be6df5a65f3a195dec.png"},5688:function(e,t,a){t.Z=a.p+"assets/images/studio-tenant-access-24387b37b80867f98e0e5c3df9594a90.png"},103:function(e,t,a){t.Z=a.p+"assets/images/studio-update-tenants-e3c7288c92fb0c338a64be67110d50e3.png"}}]);