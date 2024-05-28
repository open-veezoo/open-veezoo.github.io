"use strict";(self.webpackChunkveezoo_docs=self.webpackChunkveezoo_docs||[]).push([[9885],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(o),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2655:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=o(4996),l=["components"],s={title:"Customizing Veezoo's Look"},c=void 0,u={unversionedId:"themes/themes",id:"themes/themes",title:"Customizing Veezoo's Look",description:"The look of Veezoo's main interface can be customized with a theme in order to align user experience with your corporate design and strengthen the recognition of your brand.",source:"@site/docs/themes/themes.md",sourceDirName:"themes",slug:"/themes/",permalink:"/docs/themes/",draft:!1,tags:[],version:"current",frontMatter:{title:"Customizing Veezoo's Look"},sidebar:"docs",previous:{title:"How to embed Veezoo: a Demonstration",permalink:"/docs/embedded/hyperstore-guide"},next:{title:"Why and how to sync?",permalink:"/docs/kg-sync/"}},h={},p=[{value:"Configure the Theme",id:"configure-the-theme",level:2},{value:"UI Element Colors",id:"ui-element-colors",level:3},{value:"Chart Colors",id:"chart-colors",level:3},{value:"Logos",id:"logos",level:3},{value:"Result",id:"result",level:3},{value:"Resetting the Theme",id:"resetting-the-theme",level:2}],d={toc:p},m="wrapper";function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The look of Veezoo's main interface can be customized with a theme in order to align user experience with your corporate design and strengthen the recognition of your brand."),(0,i.kt)("p",null,"In particular, the ",(0,i.kt)("a",{parentName:"p",href:"https://app.veezoo.com/admin/settings"},"Settings page")," in Veezoo Admin provides a simple interface to configure the main colors and logos used in the Veezoo app."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The theme does not affect Veezoo Admin or Veezoo Studio pages.")),(0,i.kt)("h2",{id:"configure-the-theme"},"Configure the Theme"),(0,i.kt)("p",null,'Assume we would like to customize Veezoo\'s look to match the colors of our hypothetical "star" company:'),(0,i.kt)("img",{alt:"Star Main Logo",width:"200",src:(0,a.Z)("/img/themes/star-main.png")}),(0,i.kt)("p",null,"To this end, we navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://app.veezoo.com/admin/settings"},"Settings page")," in Veezoo Admin, where we find the theme configurator:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Theme configurator",src:o(3398).Z,width:"866",height:"767"})),(0,i.kt)("h3",{id:"ui-element-colors"},"UI Element Colors"),(0,i.kt)("p",null,"First, we configure the primary color by clicking on the corresponding color edit button. In our example, we set it to the dark red color used in our logo."),(0,i.kt)("img",{alt:"Star Main Logo",width:"200",src:(0,a.Z)("/img/themes/color-configuration.png")}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'You can directly paste colors in hexadecimal RGB format into the "Hex" edit box if you have these handy.')),(0,i.kt)("p",null,"Next, we continue to set the secondary color and follow-up colors analogously. The theme preview instantly reflects our changes, allowing us to quickly get a feeling of the result."),(0,i.kt)("h3",{id:"chart-colors"},"Chart Colors"),(0,i.kt)("p",null,'When creating a single-item chart (such as a plot containing a single line), Veezoo uses the "Chart Color 1" configurable in the theme editor. We recommend setting this color to be identical to the primary color. When producing charts with more items, Veezoo uses colors from a predefined color palette rotation. You can optionally override the colors used for the second, third, etc. item by adding additional colors in the theme configurator.'),(0,i.kt)("p",null,'For example, by clicking the "Add" button, we add two additional colors matching our brand to the configuration. You can always delete additional colors using the remove button.'),(0,i.kt)("h3",{id:"logos"},"Logos"),(0,i.kt)("p",null,"Finally, we upload our main logo (to be shown in the top left corner of Veezoo) and a smaller chat logo (to be used as an avatar in the chat view) using the two controls at the bottom. You can simply drag-and-drop image files from your file explorer into the controls."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only jpeg, png and bmp file formats are supported.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Adding a small amount of additional padding around the chat logo typically gives a better visual result.")),(0,i.kt)("p",null,"Because our chat logo doesn't go well together with the predefined Chat Icon Background, we adapt the color appropriately."),(0,i.kt)("p",null,"The resulting configuration looks as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Theme configurator",src:o(7770).Z,width:"879",height:"914"})),(0,i.kt)("p",null,'Once we are happy with the configuration, we use the "Save" button to apply the changes.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Changes are effective immediately, however you will need to refresh your Veezoo chat window in order to see the results.")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,"Our users will be stunned by the result!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot",src:o(1890).Z,width:"1608",height:"866"})),(0,i.kt)("h2",{id:"resetting-the-theme"},"Resetting the Theme"),(0,i.kt)("p",null,'You can reset the theme to the default configuration using the "Reset to Defaults" button at the bottom of the theme configurator.'))}g.isMDXComponent=!0},7770:function(e,t,o){t.Z=o.p+"assets/images/theme-configuration-final-e1b38d8bfb821450441a3d30799ac3ce.png"},3398:function(e,t,o){t.Z=o.p+"assets/images/theme-configuration-original-9b02b12d52ac77203a6de33217c1e41d.png"},1890:function(e,t,o){t.Z=o.p+"assets/images/theme-screenshot-71dc3f13c134e470a3ef440d02e79801.png"}}]);