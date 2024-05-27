"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[5204],{3905:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return b}});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),h=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},l=function(e){var r=h(e.components);return t.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=o,b=u["".concat(d,".").concat(p)]||u[p]||c[p]||i;return a?t.createElement(b,n(n({ref:r},l),{},{components:a})):t.createElement(b,n({ref:r},l))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:o,n[1]=s;for(var h=2;h<i;h++)n[h]=a[h];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7665:function(e,r,a){a.r(r),a.d(r,{assets:function(){return u},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var t=a(7462),o=a(3366),i=(a(7294),a(3905)),n=a(4996),s=["components"],d={title:"Share boards with other users"},h=void 0,l={unversionedId:"tutorials/share-boards",id:"tutorials/share-boards",title:"Share boards with other users",description:"To facilitate re-use, boards can be shared with other users in Veezoo. As we describe below, you can share any board you have created with individual users, roles, or the whole organization.",source:"@site/docs/tutorials/share-boards.md",sourceDirName:"tutorials",slug:"/tutorials/share-boards",permalink:"/docs/tutorials/share-boards",draft:!1,tags:[],version:"current",frontMatter:{title:"Share boards with other users"},sidebar:"docs",previous:{title:"Display answers in a map",permalink:"/docs/tutorials/display-answers-in-a-map"},next:{title:"Working with historized tables",permalink:"/docs/tutorials/historized-tables"}},u={},c=[{value:"Sharing a board",id:"sharing-a-board",level:2},{value:"Sharing with individual users",id:"sharing-with-individual-users",level:3},{value:"Sharing with the organization",id:"sharing-with-the-organization",level:3},{value:"Stopping or updating a sharing",id:"stopping-or-updating-a-sharing",level:3},{value:"Boards shared with you",id:"boards-shared-with-you",level:2},{value:"Adding a shared board to the sidebar",id:"adding-a-shared-board-to-the-sidebar",level:3},{value:"Removing shared boards from the sidebar",id:"removing-shared-boards-from-the-sidebar",level:3},{value:"Special features for creators",id:"special-features-for-creators",level:2},{value:"Sharing with roles",id:"sharing-with-roles",level:3},{value:"Adding boards to sidebars by default",id:"adding-boards-to-sidebars-by-default",level:3},{value:"Defining Boards in VKL",id:"defining-boards-in-vkl",level:3}],p={toc:c},b="wrapper";function g(e){var r=e.components,a=(0,o.Z)(e,s);return(0,i.kt)(b,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To facilitate re-use, boards can be shared with other users in Veezoo. As we describe below, you can share any board you have created with individual users, roles, or the whole organization."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PVNTaJkHw0g?si=xxyPUo_jvlPvtaB_",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"sharing-a-board"},"Sharing a board"),(0,i.kt)("p",null,'To share a board, open the board and click the "Share" button in the footer:'),(0,i.kt)("img",{alt:"Share Board via Footer",src:(0,n.Z)("/img/tutorials/share-boards/share-via-footer.png")}),(0,i.kt)("p",null,'Alternatively, you can select the "Share" item of the three-dot dropdown menu in the sidebar:'),(0,i.kt)("img",{alt:"Share Board via Sidebar",width:"300",src:(0,n.Z)("/img/tutorials/share-boards/share-via-sidebar.png")}),(0,i.kt)("p",null,"This opens a sharing dialog, which looks as follows:"),(0,i.kt)("img",{alt:"Initial Share Dialog",width:"400",src:(0,n.Z)("/img/tutorials/share-boards/share-dialog-initial.png")}),(0,i.kt)("p",null,"As we discuss next, you can share your board with individual users or with the whole organization. You can even combine both sharing methods. Creators have additional options as described ",(0,i.kt)("a",{parentName:"p",href:"#special-features-for-creators"},"below"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Sharing only provides ",(0,i.kt)("strong",{parentName:"p"},"read access"),", meaning that only the creator of a board can edit it. Currently, Veezoo does not support providing write access for shared boards.")),(0,i.kt)("h3",{id:"sharing-with-individual-users"},"Sharing with individual users"),(0,i.kt)("p",null,"To share the board with individual users, use the upper section of the dialog and add as many users as you wish. You can search for individual users by name in the text box."),(0,i.kt)("p",null,'For example, we can share the given board with a user named "Super User" as follows:'),(0,i.kt)("img",{alt:"Board Shared with User",width:"400",src:(0,n.Z)("/img/tutorials/share-boards/share-dialog-user.png")}),(0,i.kt)("p",null,'The sharing becomes effective once you click the "Share" button. The Super User will then find the shared board "Revenue Overview" in their sidebar:'),(0,i.kt)("img",{alt:"Shared board in Sidebar",width:"250",src:(0,n.Z)("/img/tutorials/share-boards/sidebar-with-shared-board.png")}),(0,i.kt)("h3",{id:"sharing-with-the-organization"},"Sharing with the organization"),(0,i.kt)("p",null,'You can share your board with the whole organization using the "General access" section of the dialog. To this end, use the dropdown menu to change "Restricted" to "Organization", and click the "Share" button to activate the sharing:'),(0,i.kt)("img",{alt:"Board Shared with Organization",width:"450",src:(0,n.Z)("/img/tutorials/share-boards/share-dialog-organization.png")}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because boards are specific to a ",(0,i.kt)("strong",{parentName:"p"},"knowledge graph"),', these are only accessible for users with access to the corresponding knowledge graph, even when shared with "everyone in your organization."')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Boards shared with the whole organization do not automatically appear in all users' sidebars. Instead, such boards are listed in the ",(0,i.kt)("strong",{parentName:"p"},"Browse Shared Boards window"),", as we demonstrate ",(0,i.kt)("a",{parentName:"p",href:"#boards-shared-with-you"},"below"),"."),(0,i.kt)("p",{parentName:"admonition"},"When combining organization-wide sharing with user-based sharing, the board will be added to the sidebars of all explicitly listed users.")),(0,i.kt)("h3",{id:"stopping-or-updating-a-sharing"},"Stopping or updating a sharing"),(0,i.kt)("p",null,"To stop sharing a board or edit its sharing settings, use the corresponding buttons in the footer of the board:"),(0,i.kt)("img",{alt:"Stop Sharing Board via Footer",src:(0,n.Z)("/img/tutorials/share-boards/stop-sharing-via-footer.png")}),(0,i.kt)("p",null,"Alternatively, you can also find these options in the three-dot dropdown menu in the sidebar:"),(0,i.kt)("img",{alt:"Stop Sharing Board via Sidebar",width:"300",src:(0,n.Z)("/img/tutorials/share-boards/stop-sharing-via-sidebar.png")}),(0,i.kt)("h2",{id:"boards-shared-with-you"},"Boards shared with you"),(0,i.kt)("p",null,"Boards that are shared explicitly with your user are added to your sidebar by default. To avoid cluttering everyone's sidebars, this is different for boards shared with the whole organization. In particular, you need to manually subscribe to such boards as we described next."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Because sharing only provides read access, you cannot edit boards shared with you. "),(0,i.kt)("p",{parentName:"admonition"},'Still, using the "Create Copy" option in the three-dot dropdown menu, you can always create your own copy of a board that is shared with you. This copy is independent and can be edited freely.')),(0,i.kt)("h3",{id:"adding-a-shared-board-to-the-sidebar"},"Adding a shared board to the sidebar"),(0,i.kt)("p",null,"Using the corresponding icon in the sidebar, you can open the Browse Shared Boards window:"),(0,i.kt)("img",{alt:"Open Browse Boards Window via Sidebar",width:"300",src:(0,n.Z)("/img/tutorials/share-boards/open-browse-boards.png")}),(0,i.kt)("p",null,"This window lists all boards shared with you, including those shared with your user explicitly and those shared with the whole organization. The window provides sorting and filtering options allowing you to browse effortlessly through the list of available boards. While the list only displays metadata such as the board title or author name, you can hover on a list entry and use the preview button to peek at the board:"),(0,i.kt)("img",{alt:"Preview in Browse Boards Window",src:(0,n.Z)("/img/tutorials/share-boards/browse-boards-preview.png")}),(0,i.kt)("p",null,"In order to add a board of the list to your sidebar, you need to subscribe to it by clicking the corresponding button:"),(0,i.kt)("img",{alt:"Browse Boards Window",src:(0,n.Z)("/img/tutorials/share-boards/browse-boards-subscribe.png")}),(0,i.kt)("p",null,"All shared boards you are subscribed to are included in your sidebar."),(0,i.kt)("h3",{id:"removing-shared-boards-from-the-sidebar"},"Removing shared boards from the sidebar"),(0,i.kt)("p",null,'You can use the Browse Shared Boards window to remove shared boards from your sidebar. In particular, click the "Unsubscribe" button for any board you want to remove:'),(0,i.kt)("img",{alt:"Unsubscribe in Browse Boards Window",src:(0,n.Z)("/img/tutorials/share-boards/browse-boards-unsubscribe.png")}),(0,i.kt)("p",null,"Alternatively, you can also unsubscribe from shared boards using the three-dot dropdown menu:"),(0,i.kt)("img",{alt:"Unsubscribe via Sidebar",width:"350",src:(0,n.Z)("/img/tutorials/share-boards/unsubscribe-via-sidebar.png")}),(0,i.kt)("h2",{id:"special-features-for-creators"},"Special features for creators"),(0,i.kt)("p",null,"Creators are provided additional sharing options."),(0,i.kt)("h3",{id:"sharing-with-roles"},"Sharing with roles"),(0,i.kt)("p",null,"As a creator, you can share boards with specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/authorization/user-roles"},"roles"),". This lets you share analytical insights and dashboards with the right groups of users, enhancing collaboration while ensuring data security."),(0,i.kt)("p",null,"In particular, you can search for a role name using the text box and select it from the dropdown menu in the upper section of the sharing dialog. For example, we can share the Creator's Board with the Management role as follows:"),(0,i.kt)("img",{alt:"Board Shared with Role",width:"400",src:(0,n.Z)("/img/tutorials/share-boards/share-dialog-creator-role.png")}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Boards shared with roles automatically appear in the corresponding users' sidebars.")),(0,i.kt)("h3",{id:"adding-boards-to-sidebars-by-default"},"Adding boards to sidebars by default"),(0,i.kt)("p",null,"When sharing boards with the whole organization, the boards are not included in all users' sidebars by default. However, as a creator, you have the option to override this and make sure all users are subscribed to the respective board by default. To this end, simply check the corresponding checkmark:"),(0,i.kt)("img",{alt:"Board Default Subscription",width:"450",src:(0,n.Z)("/img/tutorials/share-boards/share-dialog-creator-organization.png")}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Users can still manually unsubscribe from the board again.")),(0,i.kt)("h3",{id:"defining-boards-in-vkl"},"Defining Boards in VKL"),(0,i.kt)("p",null,"As we describe in more detail ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/boards"},"here"),', boards can also be defined as part of the knowledge graph, in VKL. Such VKL boards are shared with the whole organization or a specific set of roles, and appear in the respective users\' sidebars by default. In the Browse Shared Boards window, they are listed as being "Defined in Knowledge Graph."'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Like for regular boards, users can manually unsubscribe from VKL boards.")))}g.isMDXComponent=!0}}]);