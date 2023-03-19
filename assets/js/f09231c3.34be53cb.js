"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[221],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),N=r,d=s["".concat(u,".").concat(N)]||s[N]||k[N]||i;return a?l.createElement(d,n(n({ref:t},m),{},{components:a})):l.createElement(d,n({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=N;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:r,n[1]=p;for(var o=2;o<i;o++)n[o]=a[o];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var l=a(7462),r=(a(7294),a(3905));const i={},n="Areas",p={unversionedId:"server/areas",id:"server/areas",title:"Areas",description:"Maps for areas are stored in ./areas. The first area players will see is default.tmx (required).",source:"@site/docs/02-server/02-areas.md",sourceDirName:"02-server",slug:"/server/areas",permalink:"/docs/server/areas",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Minimal Setup",permalink:"/docs/server/minimal-setup"},next:{title:"Assets",permalink:"/docs/server/assets"}},u={},o=[{value:"Suggested Settings",id:"suggested-settings",level:2},{value:"Custom properties",id:"custom-properties",level:2},{value:"Object and Tile Classes",id:"object-and-tile-classes",level:2},{value:"Home Warp",id:"home-warp",level:3},{value:"Position Warp",id:"position-warp",level:3},{value:"Server Warp",id:"server-warp",level:3},{value:"Custom Server Warp",id:"custom-server-warp",level:3},{value:"Custom Warp",id:"custom-warp",level:3},{value:"Stairs",id:"stairs",level:3},{value:"Conveyor",id:"conveyor",level:3},{value:"Ice",id:"ice",level:3},{value:"Treadmill",id:"treadmill",level:3},{value:"Board",id:"board",level:3},{value:"Shop",id:"shop",level:3},{value:"Arrow",id:"arrow",level:3},{value:"Invisible",id:"invisible",level:3}],m={toc:o},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"areas"},"Areas"),(0,r.kt)("p",null,"Maps for areas are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"./areas"),". The first area players will see is ",(0,r.kt)("inlineCode",{parentName:"p"},"default.tmx")," (required)."),(0,r.kt)("h2",{id:"suggested-settings"},"Suggested Settings"),(0,r.kt)("p",null,"Editor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fine grid divisions: 2 (Edit -> Preferences -> Interface)"),(0,r.kt)("li",{parentName:"ul"},"Snap To Fine Grid (View -> Snapping)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When working with Object Layer"))),(0,r.kt)("li",{parentName:"ul"},"Snap To Pixels (View -> Snapping)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When working with Collision shapes")))),(0,r.kt)("p",null,"Map:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Width: 64"),(0,r.kt)("li",{parentName:"ul"},"Tile Height: 32"),(0,r.kt)("li",{parentName:"ul"},"Tile Layer Format: CSV (required)"),(0,r.kt)("li",{parentName:"ul"},"Create map in assets")),(0,r.kt)("p",null,"Tilesets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: Based on Tileset Image (other types are not currently supported)"),(0,r.kt)("li",{parentName:"ul"},"Object Alignment:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Top - For tile objects stuck to the floor such as warps",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set drawing offset to 0,0"))),(0,r.kt)("li",{parentName:"ul"},"Bottom - For tile objects that act as a wall"))),(0,r.kt)("li",{parentName:"ul"},"Place in a Tile Layer to tune drawing offset")),(0,r.kt)("p",null,"Layers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Horizontal Offset: 0"),(0,r.kt)("li",{parentName:"ul"},"Vertical Offset: (number of layers below this one) ","*"," -16")),(0,r.kt)("h2",{id:"custom-properties"},"Custom properties"),(0,r.kt)("p",null,"Map:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Area name to display in the PersonalMenu"))),(0,r.kt)("li",{parentName:"ul"},"Song: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to ogg file"))),(0,r.kt)("li",{parentName:"ul"},"Background Texture: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to background image file"))),(0,r.kt)("li",{parentName:"ul"},"Background Animation: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to background .animation file"),(0,r.kt)("li",{parentName:"ul"},'One animation state "BG"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First frame of this animation determines background repetition"))),(0,r.kt)("li",{parentName:"ul"},"Excluding this will use texture size for background repetition"))),(0,r.kt)("li",{parentName:"ul"},"Background Vel X: float"),(0,r.kt)("li",{parentName:"ul"},"Background Vel Y: float"),(0,r.kt)("li",{parentName:"ul"},"Background Parallax: float"),(0,r.kt)("li",{parentName:"ul"},"Foreground Texture: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to foreground image file"))),(0,r.kt)("li",{parentName:"ul"},"Foreground Animation: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to foreground .animation file"),(0,r.kt)("li",{parentName:"ul"},'One animation state "BG"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First frame of this animation determines foreground repetition"))),(0,r.kt)("li",{parentName:"ul"},"Excluding this will use texture size for foreground repetition"))),(0,r.kt)("li",{parentName:"ul"},"Foreground Vel X: float"),(0,r.kt)("li",{parentName:"ul"},"Foreground Vel Y: float"),(0,r.kt)("li",{parentName:"ul"},"Foreground Parallax: float")),(0,r.kt)("p",null,"Tiles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shadow: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Always"'),(0,r.kt)("li",{parentName:"ul"},'"Never"'),(0,r.kt)("li",{parentName:"ul"},"Unset - Automatic")))),(0,r.kt)("h2",{id:"object-and-tile-classes"},"Object and Tile Classes"),(0,r.kt)("p",null,"Classes are used to denote special tiles or objects understood by the client."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Warps",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#home-warp"},"Home Warp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#position-warp"},"Position Warp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#server-warp"},"Server Warp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-server-warp"},"Custom Server Warp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-warp"},"Custom Warp")))),(0,r.kt)("li",{parentName:"ul"},"Movement",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stairs"},"Stairs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conveyor"},"Conveyor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ice"},"Ice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#treadmill"},"Treadmill")))),(0,r.kt)("li",{parentName:"ul"},"Plain Markers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#board"},"Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shop"},"Shop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#arrow"},"Arrow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#invisible"},"Invisible"))))),(0,r.kt)("h3",{id:"home-warp"},"Home Warp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map"),(0,r.kt)("li",{parentName:"ul"},"Players will be warped home if colliding with the warp"),(0,r.kt)("li",{parentName:"ul"},"Custom properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"position-warp"},"Position Warp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map"),(0,r.kt)("li",{parentName:"ul"},"Players will be warped to the set position if colliding with the warp"),(0,r.kt)("li",{parentName:"ul"},"Custom properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"X: float"),(0,r.kt)("li",{parentName:"ul"},"Y: float"),(0,r.kt)("li",{parentName:"ul"},"Z: float"),(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"server-warp"},"Server Warp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map"),(0,r.kt)("li",{parentName:"ul"},"Players will be transferred to a different server if colliding with the warp"),(0,r.kt)("li",{parentName:"ul"},"Custom properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Address: string"),(0,r.kt)("li",{parentName:"ul"},"Data: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Custom data to pass to the other server"),(0,r.kt)("li",{parentName:"ul"},"Can be read through handle_player_request on the other server"),(0,r.kt)("li",{parentName:"ul"},"Try to keep it short! Long data strings may get ignored"))),(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"custom-server-warp"},"Custom Server Warp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map"),(0,r.kt)("li",{parentName:"ul"},"Players will be warped out if colliding with the warp, the result of the warp can be resolved in handle_custom_warp"),(0,r.kt)("li",{parentName:"ul"},"Custom Properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"custom-warp"},"Custom Warp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map"),(0,r.kt)("li",{parentName:"ul"},"Players will be warped out if colliding with the warp, the result of the warp can be resolved in handle_custom_warp",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"stairs"},"Stairs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiles only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visible in map")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows players to walk up or down a layer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Makes tile directly above become treated as a hole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Marks the direction the player will travel up"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"conveyor"},"Conveyor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiles only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visible in map")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Marks the direction the player will travel"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right"))),(0,r.kt)("li",{parentName:"ul"},"Speed: number? (Tiles per second, default: 6)"),(0,r.kt)("li",{parentName:"ul"},"Sound Effect: string")))),(0,r.kt)("h3",{id:"ice"},"Ice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiles only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Speed: number? (Tiles per second, default: 6)"),(0,r.kt)("li",{parentName:"ul"},"Sound Effect: string")))),(0,r.kt)("h3",{id:"treadmill"},"Treadmill"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiles only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Marks the direction the player will travel"),(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right"))),(0,r.kt)("li",{parentName:"ul"},"Speed: number? (Tiles per second, default: 1.875)")))),(0,r.kt)("h3",{id:"board"},"Board"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map")),(0,r.kt)("h3",{id:"shop"},"Shop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tile Objects only"),(0,r.kt)("li",{parentName:"ul"},"Visible in map")),(0,r.kt)("h3",{id:"arrow"},"Arrow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiles only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visible in map")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Direction: string",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Up Left"),(0,r.kt)("li",{parentName:"ul"},"Up Right"),(0,r.kt)("li",{parentName:"ul"},"Down Left"),(0,r.kt)("li",{parentName:"ul"},"Down Right")))))),(0,r.kt)("h3",{id:"invisible"},"Invisible"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tiles only"),(0,r.kt)("li",{parentName:"ul"},"Hides the tile from players, great for invisible pathways")))}k.isMDXComponent=!0}}]);