"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[877],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(i),h=l,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return i?r.createElement(m,o(o({ref:t},d),{},{components:i})):r.createElement(m,o({ref:t},d))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,o=new Array(n);o[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7280:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var r=i(7462),l=(i(7294),i(3905));const n={},o="Sprite",a={unversionedId:"client/lua-api/sprite",id:"client/lua-api/sprite",title:"Sprite",description:"sprite:create_node()",source:"@site/docs/01-client/02-lua-api/07-sprite.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/sprite",permalink:"/documentation-website/client/lua-api/sprite",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/07-sprite.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Animation",permalink:"/documentation-website/client/lua-api/animation"},next:{title:"Entity",permalink:"/documentation-website/client/lua-api/entity"}},s={},p=[{value:"<code>sprite:create_node()</code>",id:"spritecreate_node",level:3},{value:"<code>sprite:remove_node(sprite)</code>",id:"spriteremove_nodesprite",level:3},{value:"<code>sprite:texture()</code>",id:"spritetexture",level:3},{value:"<code>sprite:set_texture(path)</code>",id:"spriteset_texturepath",level:3},{value:"<code>sprite:palette()</code>",id:"spritepalette",level:3},{value:"<code>sprite:set_palette(path)</code>",id:"spriteset_palettepath",level:3},{value:"<code>sprite:visible()</code>",id:"spritevisible",level:3},{value:"<code>sprite:set_visible(visible)</code>",id:"spriteset_visiblevisible",level:3},{value:"<code>sprite:reveal()</code>",id:"spritereveal",level:3},{value:"<code>sprite:hide()</code>",id:"spritehide",level:3},{value:"<code>sprite:layer()</code>",id:"spritelayer",level:3},{value:"<code>sprite:set_layer(layer)</code>",id:"spriteset_layerlayer",level:3},{value:"<code>sprite:offset()</code>",id:"spriteoffset",level:3},{value:"<code>sprite:set_offset(x, y)</code>",id:"spriteset_offsetx-y",level:3},{value:"<code>sprite:origin()</code>",id:"spriteorigin",level:3},{value:"<code>sprite:set_origin(x, y)</code>",id:"spriteset_originx-y",level:3},{value:"<code>sprite:scale()</code>",id:"spritescale",level:3},{value:"<code>sprite:set_scale(x, y)</code>",id:"spriteset_scalex-y",level:3},{value:"<code>sprite:size()</code>",id:"spritesize",level:3},{value:"<code>sprite:set_size(x, y)</code>",id:"spriteset_sizex-y",level:3},{value:"<code>sprite:width()</code>",id:"spritewidth",level:3},{value:"<code>sprite:set_width(width)</code>",id:"spriteset_widthwidth",level:3},{value:"<code>sprite:height()</code>",id:"spriteheight",level:3},{value:"<code>sprite:set_height(height)</code>",id:"spriteset_heightheight",level:3},{value:"<code>sprite:color()</code>",id:"spritecolor",level:3},{value:"<code>sprite:set_color(color)</code>",id:"spriteset_colorcolor",level:3},{value:"<code>sprite:color_mode()</code>",id:"spritecolor_mode",level:3},{value:"<code>sprite:set_color_mode(color_mode)</code>",id:"spriteset_color_modecolor_mode",level:3},{value:"<code>sprite:never_flip(never_flip?)</code>",id:"spritenever_flipnever_flip",level:3},{value:"<code>sprite:use_root_shader(enable?)</code>",id:"spriteuse_root_shaderenable",level:3},{value:"Color",id:"color",level:2},{value:"<code>Color.new(r, g, b, a?)</code>",id:"colornewr-g-b-a",level:3},{value:"<code>Color.mix(color_a, color_b, progress)</code>",id:"colormixcolor_a-color_b-progress",level:3},{value:"SyncNode",id:"syncnode",level:2},{value:"<code>sync_node:sprite()</code>",id:"sync_nodesprite",level:3},{value:"<code>sync_node:animation()</code>",id:"sync_nodeanimation",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sprite"},"Sprite"),(0,l.kt)("h3",{id:"spritecreate_node"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:create_node()")),(0,l.kt)("p",null,"Returns a new child Sprite instance that renders relative to the parent sprite's origin."),(0,l.kt)("h3",{id:"spriteremove_nodesprite"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:remove_node(sprite)")),(0,l.kt)("p",null,"Deletes the passed sprite if it's a child of the parent."),(0,l.kt)("h3",{id:"spritetexture"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:texture()")),(0,l.kt)("p",null,"Returns the path to the sprite's texture."),(0,l.kt)("h3",{id:"spriteset_texturepath"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_texture(path)")),(0,l.kt)("p",null,"Use values returned from ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/resources#resourcesload_texturepath"},"Resources.load_texture()")," for better performance."),(0,l.kt)("h3",{id:"spritepalette"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:palette()")),(0,l.kt)("p",null,"Returns the path to the sprite's palette or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("h3",{id:"spriteset_palettepath"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_palette(path)")),(0,l.kt)("p",null,"Sets the palette for the texture to reference."),(0,l.kt)("p",null,"Palettes are 256x1 images. Colors on the sprite's texture will be remapped by taking the red value of the texture to grab a color from the palette."),(0,l.kt)("p",null,"Use values returned from ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/resources#resourcesload_texturepath"},"Resources.load_texture()")," for better performance."),(0,l.kt)("h3",{id:"spritevisible"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:visible()")),(0,l.kt)("p",null,"Returns true if the sprite is visible."),(0,l.kt)("h3",{id:"spriteset_visiblevisible"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_visible(visible)")),(0,l.kt)("h3",{id:"spritereveal"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:reveal()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"sprite:set_visible(true)")),(0,l.kt)("h3",{id:"spritehide"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:hide()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"sprite:set_visible(false)")),(0,l.kt)("h3",{id:"spritelayer"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:layer()")),(0,l.kt)("p",null,"Returns an integer used for sorting during render."),(0,l.kt)("h3",{id:"spriteset_layerlayer"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_layer(layer)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer"),": integer, negative values render in front of the parent sprite.")),(0,l.kt)("p",null,"Used for sorting during render."),(0,l.kt)("h3",{id:"spriteoffset"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:offset()")),(0,l.kt)("p",null,"Returns a table with ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," keys, represents the parent relative offset."),(0,l.kt)("h3",{id:"spriteset_offsetx-y"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_offset(x, y)")),(0,l.kt)("p",null,"Sets the parent relative offset."),(0,l.kt)("h3",{id:"spriteorigin"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:origin()")),(0,l.kt)("p",null,"Returns a table with ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,l.kt)("h3",{id:"spriteset_originx-y"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_origin(x, y)")),(0,l.kt)("p",null,"Sets the origin, ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/animation"},"Animations")," will overwrite this value."),(0,l.kt)("h3",{id:"spritescale"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:scale()")),(0,l.kt)("p",null,"Returns a table with ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,l.kt)("h3",{id:"spriteset_scalex-y"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_scale(x, y)")),(0,l.kt)("p",null,"Sets the scale of the sprite."),(0,l.kt)("h3",{id:"spritesize"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:size()")),(0,l.kt)("p",null,"Returns a table with ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," keys, representing the size of the sprite. Scale is accounted."),(0,l.kt)("h3",{id:"spriteset_sizex-y"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_size(x, y)")),(0,l.kt)("p",null,"Sets the size of the sprite, updates the scale."),(0,l.kt)("h3",{id:"spritewidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:width()")),(0,l.kt)("p",null,"Returns the width of the sprite, scale is acounted."),(0,l.kt)("h3",{id:"spriteset_widthwidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_width(width)")),(0,l.kt)("p",null,"Sets the width of the sprite, updates the scale."),(0,l.kt)("h3",{id:"spriteheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:height()")),(0,l.kt)("p",null,"Returns the height of the sprite, scale is acounted."),(0,l.kt)("h3",{id:"spriteset_heightheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_height(height)")),(0,l.kt)("p",null,"Sets the height of the sprite, updates the scale."),(0,l.kt)("h3",{id:"spritecolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:color()")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"#color"},"Color")),(0,l.kt)("h3",{id:"spriteset_colorcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_color(color)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color"),": ",(0,l.kt)("a",{parentName:"li",href:"#color"},"Color"))),(0,l.kt)("p",null,"The color will be reset to black at the start of the next frame for root sprites."),(0,l.kt)("h3",{id:"spritecolor_mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:color_mode()")),(0,l.kt)("p",null,"Returns the color mode."),(0,l.kt)("h3",{id:"spriteset_color_modecolor_mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:set_color_mode(color_mode)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color_mode"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ColorMode.Additive")," each pixel will be added by the sprite's color, alpha will be multiplied."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ColorMode.Multiply")," each pixel will be multiplied by the sprite's color.")))),(0,l.kt)("p",null,"The color mode will be reset to ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorMode.Additive")," at the start of the next frame for root sprites."),(0,l.kt)("h3",{id:"spritenever_flipnever_flip"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:never_flip(never_flip?)")),(0,l.kt)("p",null,"Prevents player team from flipping the sprite."),(0,l.kt)("h3",{id:"spriteuse_root_shaderenable"},(0,l.kt)("inlineCode",{parentName:"h3"},"sprite:use_root_shader(enable?)")),(0,l.kt)("p",null,"Temporarily adopts the color, color mode, and palette of the root sprite during render."),(0,l.kt)("h2",{id:"color"},"Color"),(0,l.kt)("p",null,"Colors are tables with an ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," key, with each value set to a 0-255 integer."),(0,l.kt)("p",null,"There's a global table named ",(0,l.kt)("inlineCode",{parentName:"p"},"Color")," with helpers for making new color tables."),(0,l.kt)("h3",{id:"colornewr-g-b-a"},(0,l.kt)("inlineCode",{parentName:"h3"},"Color.new(r, g, b, a?)")),(0,l.kt)("p",null,"Each component is a 0-255 value, ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," defaults to 255."),(0,l.kt)("p",null,"Returns a color."),(0,l.kt)("h3",{id:"colormixcolor_a-color_b-progress"},(0,l.kt)("inlineCode",{parentName:"h3"},"Color.mix(color_a, color_b, progress)")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"progress")," of 0.0 will return a table with the same values as ",(0,l.kt)("inlineCode",{parentName:"p"},"color_a"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"progress")," of 1.0 will return a table with the same values as ",(0,l.kt)("inlineCode",{parentName:"p"},"color_b"),"."),(0,l.kt)("p",null,"Other values of ",(0,l.kt)("inlineCode",{parentName:"p"},"progress")," will linearly interpolate each component between ",(0,l.kt)("inlineCode",{parentName:"p"},"color_a")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"color_b"),"."),(0,l.kt)("p",null,"Returns a color."),(0,l.kt)("h2",{id:"syncnode"},"SyncNode"),(0,l.kt)("p",null,"SyncNodes are a sprite animation pair that sync settings, state, and progress with an entity's root animation."),(0,l.kt)("h3",{id:"sync_nodesprite"},(0,l.kt)("inlineCode",{parentName:"h3"},"sync_node:sprite()")),(0,l.kt)("p",null,"Returns a reference to the sync node's sprite."),(0,l.kt)("h3",{id:"sync_nodeanimation"},(0,l.kt)("inlineCode",{parentName:"h3"},"sync_node:animation()")),(0,l.kt)("p",null,"Returns a reference to the sync node's ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/animation"},"Animation")))}u.isMDXComponent=!0}}]);