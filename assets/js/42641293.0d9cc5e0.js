"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=l,h=c["".concat(r,".").concat(u)]||c[u]||s[u]||a;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[c]="string"==typeof e?e:l,o[1]=d;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=n(7462),l=(n(7294),n(3905));const a={},o="Entity",d={unversionedId:"client/lua-api/entity",id:"client/lua-api/entity",title:"Entity",description:"Most of these functions will throw if the entity has been erased. entitydeleted() will never throw and can be used to see if the entity is still safe to use.",source:"@site/docs/01-client/02-lua-api/09-entity.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/entity",permalink:"/documentation-website/client/lua-api/entity",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/09-entity.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Sprite",permalink:"/documentation-website/client/lua-api/sprite"},next:{title:"Living",permalink:"/documentation-website/client/lua-api/living"}},r={},p=[{value:"<code>entity:id()</code>",id:"entityid",level:3},{value:"<code>entity:name()</code>",id:"entityname",level:3},{value:"<code>entity:set_name(name)</code>",id:"entityset_namename",level:3},{value:"<code>entity:element()</code>",id:"entityelement",level:3},{value:"<code>entity:set_element(element)</code>",id:"entityset_elementelement",level:3},{value:"<code>entity:facing()</code>",id:"entityfacing",level:3},{value:"<code>entity:facing_away()</code>",id:"entityfacing_away",level:3},{value:"<code>entity:set_facing(direction)</code>",id:"entityset_facingdirection",level:3},{value:"<code>entity:team()</code>",id:"entityteam",level:3},{value:"<code>entity:set_team(team)</code>",id:"entityset_teamteam",level:3},{value:"<code>entity:is_team(team)</code>",id:"entityis_teamteam",level:3},{value:"<code>entity:get_tile(direction?, count?)</code>",id:"entityget_tiledirection-count",level:3},{value:"<code>entity:current_tile()</code>",id:"entitycurrent_tile",level:3},{value:"<code>entity:field()</code>",id:"entityfield",level:3},{value:"<code>entity:sharing_tile()</code>",id:"entitysharing_tile",level:3},{value:"<code>entity:enable_sharing_tile(share?)</code>",id:"entityenable_sharing_tileshare",level:3},{value:"<code>entity:set_float_shoe(enabled)</code>",id:"entityset_float_shoeenabled",level:3},{value:"<code>entity:set_air_shoe(enabled)</code>",id:"entityset_air_shoeenabled",level:3},{value:"<code>entity:tile_offset()</code>",id:"entitytile_offset",level:3},{value:"<code>entity:offset()</code>",id:"entityoffset",level:3},{value:"<code>entity:set_offset(x, y)</code>",id:"entityset_offsetx-y",level:3},{value:"<code>entity:elevation()</code>",id:"entityelevation",level:3},{value:"<code>entity:set_elevation(elevation)</code>",id:"entityset_elevationelevation",level:3},{value:"<code>entity:height()</code>",id:"entityheight",level:3},{value:"<code>entity:set_height(height)</code>",id:"entityset_heightheight",level:3},{value:"<code>entity:sprite()</code>",id:"entitysprite",level:3},{value:"<code>entity:texture()</code>",id:"entitytexture",level:3},{value:"<code>entity:set_texture(path)</code>",id:"entityset_texturepath",level:3},{value:"<code>entity:palette()</code>",id:"entitypalette",level:3},{value:"<code>entity:set_palette(path)</code>",id:"entityset_palettepath",level:3},{value:"<code>entity:hide()</code>",id:"entityhide",level:3},{value:"<code>entity:reveal()</code>",id:"entityreveal",level:3},{value:"<code>entity:color()</code>",id:"entitycolor",level:3},{value:"<code>entity:set_color(color)</code>",id:"entityset_colorcolor",level:3},{value:"<code>entity:create_node()</code>",id:"entitycreate_node",level:3},{value:"<code>entity:create_sync_node()</code>",id:"entitycreate_sync_node",level:3},{value:"<code>entity:remove_sync_node(sync_node)</code>",id:"entityremove_sync_nodesync_node",level:3},{value:"<code>entity:set_shadow(path)</code>",id:"entityset_shadowpath",level:3},{value:"<code>entity:show_shadow(visible?)</code>",id:"entityshow_shadowvisible",level:3},{value:"<code>entity:animation()</code>",id:"entityanimation",level:3},{value:"<code>entity:load_animation(path)</code>",id:"entityload_animationpath",level:3},{value:"<code>entity:create_component(lifetime)</code>",id:"entitycreate_componentlifetime",level:3},{value:"<code>entity:context()</code>",id:"entitycontext",level:3},{value:"<code>entity:queue_action(action)</code>",id:"entityqueue_actionaction",level:3},{value:"<code>entity:can_move_to(tile)</code>",id:"entitycan_move_totile",level:3},{value:"<code>entity:teleport(tile?, function())</code>",id:"entityteleporttile-function",level:3},{value:"<code>entity:slide(tile?, duration, function())</code>",id:"entityslidetile-duration-function",level:3},{value:"<code>entity:jump(tile?, height, duration, function())</code>",id:"entityjumptile-height-duration-function",level:3},{value:"<code>entity:queue_movement(movement)</code>",id:"entityqueue_movementmovement",level:3},{value:"<code>entity:is_moving()</code>",id:"entityis_moving",level:3},{value:"<code>entity:is_sliding()</code>",id:"entityis_sliding",level:3},{value:"<code>entity:is_jumping()</code>",id:"entityis_jumping",level:3},{value:"<code>entity:is_teleporting()</code>",id:"entityis_teleporting",level:3},{value:"<code>entity:deleted()</code>",id:"entitydeleted",level:3},{value:"<code>entity:will_erase_eof()</code>",id:"entitywill_erase_eof",level:3},{value:"<code>entity:erase()</code>",id:"entityerase",level:3},{value:"<code>entity:delete()</code>",id:"entitydelete",level:3},{value:"<code>entity:default_player_delete()</code>",id:"entitydefault_player_delete",level:3},{value:"<code>entity:default_character_delete()</code>",id:"entitydefault_character_delete",level:3},{value:"<code>entity:on_delete(function(entity))</code>",id:"entityon_deletefunctionentity",level:3},{value:"<code>entity.on_spawn_func = function(self)</code>",id:"entityon_spawn_func--functionself",level:3},{value:"<code>entity.on_update_func = function(self)</code>",id:"entityon_update_func--functionself",level:3},{value:"<code>entity.on_delete_func = function(self)</code>",id:"entityon_delete_func--functionself",level:3},{value:"<code>entity.on_battle_start_func = function(self)</code>",id:"entityon_battle_start_func--functionself",level:3},{value:"<code>entity.on_battle_end_func = function(self)</code>",id:"entityon_battle_end_func--functionself",level:3},{value:"<code>entity.can_move_to_func = function(self, tile)</code>",id:"entitycan_move_to_func--functionself-tile",level:3},{value:"Component",id:"component",level:2},{value:"<code>component:owner()</code>",id:"componentowner",level:3},{value:"<code>component:eject()</code>",id:"componenteject",level:3},{value:"<code>component.on_init_func = function(self)</code>",id:"componenton_init_func--functionself",level:3},{value:"<code>component.on_update_func = function(self)</code>",id:"componenton_update_func--functionself",level:3},{value:"Movement",id:"movement",level:2},{value:"<code>Movement.new()</code>",id:"movementnew",level:3},{value:"<code>movement.elapsed</code>",id:"movementelapsed",level:3},{value:"<code>movement.delta</code>",id:"movementdelta",level:3},{value:"<code>movement.delay</code>",id:"movementdelay",level:3},{value:"<code>movement.endlag</code>",id:"movementendlag",level:3},{value:"<code>movement.height</code>",id:"movementheight",level:3},{value:"<code>movement:animation_progress()</code>",id:"movementanimation_progress",level:3},{value:"<code>movement:is_sliding()</code>",id:"movementis_sliding",level:3},{value:"<code>movement:is_jumping()</code>",id:"movementis_jumping",level:3},{value:"<code>movement:is_teleporting()</code>",id:"movementis_teleporting",level:3},{value:"<code>movement.on_begin_func = function()</code>",id:"movementon_begin_func--function",level:3}],m={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"entity"},"Entity"),(0,l.kt)("p",null,"Most of these functions will throw if the entity has been erased. ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:will_erase_eof()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:deleted()")," will never throw and can be used to see if the entity is still safe to use."),(0,l.kt)("h3",{id:"entityid"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:id()")),(0,l.kt)("p",null,"Returns the id for the entity."),(0,l.kt)("h3",{id:"entityname"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:name()")),(0,l.kt)("p",null,"Returns the displayed name for the entity."),(0,l.kt)("h3",{id:"entityset_namename"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_name(name)")),(0,l.kt)("p",null,"Sets the displayed name for the entity."),(0,l.kt)("p",null,"Automatically set for ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Players"),"."),(0,l.kt)("h3",{id:"entityelement"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:element()")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell#element"},"Element")," for the entity."),(0,l.kt)("h3",{id:"entityset_elementelement"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_element(element)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/spell#element"},"Element"))),(0,l.kt)("p",null,"Sets the Element for the entity, affects super effectiveness of incoming attacks."),(0,l.kt)("p",null,"Automatically set for ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Players"),"."),(0,l.kt)("h3",{id:"entityfacing"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:facing()")),(0,l.kt)("p",null,"Returns the facing ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/direction"},"Direction")," of the entity, used by attacks to decide which direction to move in."),(0,l.kt)("h3",{id:"entityfacing_away"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:facing_away()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Direction.reverse(entity:facing())")),(0,l.kt)("h3",{id:"entityset_facingdirection"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_facing(direction)")),(0,l.kt)("p",null,"Returns the facing ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/direction"},"Direction")," of the entity, used by attacks to decide which direction to move in."),(0,l.kt)("h3",{id:"entityteam"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:team()")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityset_teamteam"},"Team")," of the entity"),(0,l.kt)("h3",{id:"entityset_teamteam"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_team(team)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"team"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Team.Other")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Team.Red")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Team.Blue"))))),(0,l.kt)("p",null,"Modifies which team the entity is on. If the entity is a ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Player")," the perspective may flip."),(0,l.kt)("h3",{id:"entityis_teamteam"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:is_team(team)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:team() == team")),(0,l.kt)("h3",{id:"entityget_tiledirection-count"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:get_tile(direction?, count?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/direction"},"Direction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count"),": integer")),(0,l.kt)("p",null,"Returns a tile ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," many tiles in ",(0,l.kt)("inlineCode",{parentName:"p"},"direction"),"'s direction.\nReturns the current tile if any parameters are unset."),(0,l.kt)("h3",{id:"entitycurrent_tile"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:current_tile()")),(0,l.kt)("p",null,"Returns the tile at the same position as the entity."),(0,l.kt)("h3",{id:"entityfield"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:field()")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/field"},"Field")),(0,l.kt)("h3",{id:"entitysharing_tile"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:sharing_tile()")),(0,l.kt)("p",null,"Returns true if other entities can stand on this tile."),(0,l.kt)("h3",{id:"entityenable_sharing_tileshare"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:enable_sharing_tile(share?)")),(0,l.kt)("p",null,"Allows other entities to stand on tiles reserved by this entity."),(0,l.kt)("h3",{id:"entityset_float_shoeenabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_float_shoe(enabled)")),(0,l.kt)("p",null,"The entity will ignore tile effects when active."),(0,l.kt)("p",null,"Automatically set for ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell"},"Spells")," and ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/artifact"},"Artifacts"),"."),(0,l.kt)("h3",{id:"entityset_air_shoeenabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_air_shoe(enabled)")),(0,l.kt)("p",null,"Allows the entity to walk on tiles that normally can't be walked on."),(0,l.kt)("p",null,"Automatically set for ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell"},"Spells")," and ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/artifact"},"Artifacts"),"."),(0,l.kt)("h3",{id:"entitytile_offset"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:tile_offset()")),(0,l.kt)("p",null,"Returns a table with ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,l.kt)("p",null,"This table represents the offset applied to the entity by movement."),(0,l.kt)("h3",{id:"entityoffset"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:offset()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():offset()")),(0,l.kt)("h3",{id:"entityset_offsetx-y"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_offset(x, y)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():set_offset(x, y)")),(0,l.kt)("h3",{id:"entityelevation"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:elevation()")),(0,l.kt)("p",null,"Returns the elevation of the entity."),(0,l.kt)("h3",{id:"entityset_elevationelevation"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_elevation(elevation)")),(0,l.kt)("p",null,"Vertical offset for the entity. When the elevation changes the sprite moves, but health will stay in the same position."),(0,l.kt)("p",null,"Positive elevation moves the entity upwards."),(0,l.kt)("h3",{id:"entityheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:height()")),(0,l.kt)("p",null,"Returns the height of the entity, used to determine the range where hit artifacts should appear."),(0,l.kt)("h3",{id:"entityset_heightheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_height(height)")),(0,l.kt)("p",null,"Sets the height of the entity."),(0,l.kt)("h3",{id:"entitysprite"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:sprite()")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/sprite"},"Sprite"),", can be used to modify the entity's appearance."),(0,l.kt)("h3",{id:"entitytexture"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:texture()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():texture()")),(0,l.kt)("h3",{id:"entityset_texturepath"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_texture(path)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():set_texture(path)")),(0,l.kt)("h3",{id:"entitypalette"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:palette()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():palette()")),(0,l.kt)("h3",{id:"entityset_palettepath"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_palette(path)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():set_palette(path)")),(0,l.kt)("h3",{id:"entityhide"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:hide()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():hide()")),(0,l.kt)("h3",{id:"entityreveal"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:reveal()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():reveal()")),(0,l.kt)("h3",{id:"entitycolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:color()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():color()")),(0,l.kt)("h3",{id:"entityset_colorcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_color(color)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():set_color(color)")),(0,l.kt)("h3",{id:"entitycreate_node"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:create_node()")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:sprite():create_node()")),(0,l.kt)("h3",{id:"entitycreate_sync_node"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:create_sync_node()")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/sprite#syncnode"},"SyncNode"),"."),(0,l.kt)("h3",{id:"entityremove_sync_nodesync_node"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:remove_sync_node(sync_node)")),(0,l.kt)("p",null,"Removes the sync node from the entity."),(0,l.kt)("h3",{id:"entityset_shadowpath"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:set_shadow(path)")),(0,l.kt)("p",null,"Sets the texture for the shadow. Shadows are not visible by default, use ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:show_shadow()")," to make the shadow visible."),(0,l.kt)("p",null,"Use values returned from ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/resources#resourcesload_texturepath"},"Resources.load_texture()")," for better performance."),(0,l.kt)("p",null,"There are built-in shadow textures that can be used as well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Shadow.None")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Shadow.Small")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Shadow.Big"))),(0,l.kt)("h3",{id:"entityshow_shadowvisible"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:show_shadow(visible?)")),(0,l.kt)("p",null,"Sets whether the shadow is visible or not."),(0,l.kt)("h3",{id:"entityanimation"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:animation()")),(0,l.kt)("p",null,"Returns an ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/animation"},"Animation"),", can be used to modify the entity's animation data."),(0,l.kt)("h3",{id:"entityload_animationpath"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:load_animation(path)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:animation():load(path)")),(0,l.kt)("h3",{id:"entitycreate_componentlifetime"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:create_component(lifetime)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"lifetime")," affects when the component's update callback is called."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Lifetimes.Local")," when the entity update callback is called (affected by time freeze and status effects)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Lifetimes.Battle")," after every entity has updated and battle is active as long as time is not frozen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Lifetimes.Scene")," near the end of every tick.")),(0,l.kt)("p",{parentName:"li"},"Returns a ",(0,l.kt)("a",{parentName:"p",href:"#component"},"Component")))),(0,l.kt)("h3",{id:"entitycontext"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:context()")),(0,l.kt)("p",null,"Returns a value that can be used to decide if an attack can counter an opponent, and to resolve the owner of an attack."),(0,l.kt)("h3",{id:"entityqueue_actionaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:queue_action(action)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"action"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/action"},"Action"))),(0,l.kt)("h3",{id:"entitycan_move_totile"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:can_move_to(tile)")),(0,l.kt)("p",null,"Returns true if the entity can move to the target tile."),(0,l.kt)("h3",{id:"entityteleporttile-function"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:teleport(tile?, function())")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile")," if unset nothing happens."),(0,l.kt)("li",{parentName:"ul"},"callback is called when the movement begins processing")),(0,l.kt)("h3",{id:"entityslidetile-duration-function"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:slide(tile?, duration, function())")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile")," if unset nothing happens."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," is in game frames."),(0,l.kt)("li",{parentName:"ul"},"callback is called when the movement begins processing")),(0,l.kt)("h3",{id:"entityjumptile-height-duration-function"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:jump(tile?, height, duration, function())")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile")," if unset nothing happens."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"height")," how many pixels to offset the entity at the peak of the jump"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," is in game frames."),(0,l.kt)("li",{parentName:"ul"},"callback is called when the movement begins processing")),(0,l.kt)("h3",{id:"entityqueue_movementmovement"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:queue_movement(movement)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"movement"),": ",(0,l.kt)("a",{parentName:"li",href:"#movement"},"Movement"))),(0,l.kt)("h3",{id:"entityis_moving"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:is_moving()")),(0,l.kt)("p",null,"Returns true if the entity is moving."),(0,l.kt)("h3",{id:"entityis_sliding"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:is_sliding()")),(0,l.kt)("p",null,"Returns true if the entity is sliding."),(0,l.kt)("h3",{id:"entityis_jumping"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:is_jumping()")),(0,l.kt)("p",null,"Returns true if the entity is jumping."),(0,l.kt)("h3",{id:"entityis_teleporting"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:is_teleporting()")),(0,l.kt)("p",null,"Returns true if the entity is teleporting."),(0,l.kt)("h3",{id:"entitydeleted"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:deleted()")),(0,l.kt)("p",null,"Returns true if the entity has been marked for deletion, or has been erased."),(0,l.kt)("h3",{id:"entitywill_erase_eof"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:will_erase_eof()")),(0,l.kt)("p",null,"Returns true if the entity will be completely deleted at the end of the frame, or already has been erased."),(0,l.kt)("h3",{id:"entityerase"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:erase()")),(0,l.kt)("p",null,"Skips delete animations, marks the entity to be erased at the end of the frame."),(0,l.kt)("p",null,"Clears ",(0,l.kt)("inlineCode",{parentName:"p"},"entity.on_delete_func")," and calls ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:delete()")),(0,l.kt)("h3",{id:"entitydelete"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:delete()")),(0,l.kt)("p",null,"Calls delete callbacks, the entity won't be truly deleted unleses ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:erase()")," is called."),(0,l.kt)("p",null,"Ignored if ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:delete()")," was already called."),(0,l.kt)("h3",{id:"entitydefault_player_delete"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:default_player_delete()")),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:delete()"),", then plays an animation."),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:erase()")," at the end of the animation."),(0,l.kt)("h3",{id:"entitydefault_character_delete"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:default_character_delete()")),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:delete()"),", then plays an animation."),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:erase()")," at the end of the animation."),(0,l.kt)("h3",{id:"entityon_deletefunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity:on_delete(function(entity))")),(0,l.kt)("p",null,"Adds a callback listener for entity deletion."),(0,l.kt)("h3",{id:"entityon_spawn_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.on_spawn_func = function(self)")),(0,l.kt)("p",null,"Called when the entity is spawned by ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/field/#fieldspawnentity-tile"},"field:spawn()")),(0,l.kt)("h3",{id:"entityon_update_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.on_update_func = function(self)")),(0,l.kt)("p",null,"Called during battle, when not frozen from time freeze or blocked by statuses."),(0,l.kt)("h3",{id:"entityon_delete_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.on_delete_func = function(self)")),(0,l.kt)("p",null,"Called when health is 0 or ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:delete()")," is called. ",(0,l.kt)("inlineCode",{parentName:"p"},"entity:erase()")," must be called to truly delete the entity."),(0,l.kt)("p",null,"This function is pre-set for all entities."),(0,l.kt)("h3",{id:"entityon_battle_start_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.on_battle_start_func = function(self)")),(0,l.kt)("p",null,"Called when battle starts for the first time, or when the entity is spawned if battle has already started."),(0,l.kt)("h3",{id:"entityon_battle_end_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.on_battle_end_func = function(self)")),(0,l.kt)("p",null,"Called when the battle has completed (win or loss)."),(0,l.kt)("p",null,"Not implemented."),(0,l.kt)("h3",{id:"entitycan_move_to_func--functionself-tile"},(0,l.kt)("inlineCode",{parentName:"h3"},"entity.can_move_to_func = function(self, tile)")),(0,l.kt)("p",null,"A bool is expected as a return value."),(0,l.kt)("p",null,"This function is pre-set for all entities."),(0,l.kt)("h2",{id:"component"},"Component"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entitycreate_componentlifetime"},"entity:create_component()")),(0,l.kt)("h3",{id:"componentowner"},(0,l.kt)("inlineCode",{parentName:"h3"},"component:owner()")),(0,l.kt)("p",null,"Returns an ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")),(0,l.kt)("h3",{id:"componenteject"},(0,l.kt)("inlineCode",{parentName:"h3"},"component:eject()")),(0,l.kt)("p",null,"Removes the component from the owner."),(0,l.kt)("h3",{id:"componenton_init_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"component.on_init_func = function(self)")),(0,l.kt)("p",null,"Called when the entity is spawned, or immediately if the entity has already spawned."),(0,l.kt)("h3",{id:"componenton_update_func--functionself"},(0,l.kt)("inlineCode",{parentName:"h3"},"component.on_update_func = function(self)")),(0,l.kt)("p",null,"Called when the lifetime is relevant."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entitycreate_componentlifetime"},"entity:create_component()")),(0,l.kt)("h2",{id:"movement"},"Movement"),(0,l.kt)("h3",{id:"movementnew"},(0,l.kt)("inlineCode",{parentName:"h3"},"Movement.new()")),(0,l.kt)("p",null,"Returns a new Movement value for passing to ",(0,l.kt)("a",{parentName:"p",href:"#entityqueue_movementmovement"},"entity:queue_movement")),(0,l.kt)("h3",{id:"movementelapsed"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.elapsed")),(0,l.kt)("p",null,"The elapsed time in game frames since the movement began."),(0,l.kt)("h3",{id:"movementdelta"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.delta")),(0,l.kt)("p",null,"The duration in game frames for the movement animation to play."),(0,l.kt)("p",null,"If the delta is greater than zero the entity will slide. If ",(0,l.kt)("a",{parentName:"p",href:"#movementheight"},"height")," isn't 0, the entity will jump instead."),(0,l.kt)("h3",{id:"movementdelay"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.delay")),(0,l.kt)("p",null,"The required duration in game frames for the movement animation to start."),(0,l.kt)("h3",{id:"movementendlag"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.endlag")),(0,l.kt)("p",null,"The duration in game frames for the movement to drop after delta + delay."),(0,l.kt)("h3",{id:"movementheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.height")),(0,l.kt)("p",null,"The distance above the ground for the entity to jump."),(0,l.kt)("h3",{id:"movementanimation_progress"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement:animation_progress()")),(0,l.kt)("p",null,"Returns the movement's animation progress as a value between 0 and 1."),(0,l.kt)("h3",{id:"movementis_sliding"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement:is_sliding()")),(0,l.kt)("p",null,"Returns true if the movement is processed as a slide."),(0,l.kt)("h3",{id:"movementis_jumping"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement:is_jumping()")),(0,l.kt)("p",null,"Returns true if the movement is processed as a jump."),(0,l.kt)("h3",{id:"movementis_teleporting"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement:is_teleporting()")),(0,l.kt)("p",null,"Returns true if the movement is processed as a teleport."),(0,l.kt)("h3",{id:"movementon_begin_func--function"},(0,l.kt)("inlineCode",{parentName:"h3"},"movement.on_begin_func = function()")),(0,l.kt)("p",null,"Called when the movement begins processing. If the movement is cancelled before executing it won't be called."))}s.isMDXComponent=!0}}]);