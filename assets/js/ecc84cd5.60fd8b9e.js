"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[468],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=i,s=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(s,r(r({ref:t},c),{},{components:a})):n.createElement(s,r({ref:t},c))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const l={},r="Breaking Changes",o={unversionedId:"client/breaking-changes",id:"client/breaking-changes",title:"Breaking Changes",description:"https://github.com/Real-PET/mod-upgrade-tool",source:"@site/docs/01-client/breaking-changes.md",sourceDirName:"01-client",slug:"/client/breaking-changes",permalink:"/documentation-website/client/breaking-changes",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/breaking-changes.md",tags:[],version:"current",frontMatter:{},sidebar:"clientSidebar",previous:{title:"TurnGauge",permalink:"/documentation-website/client/lua-api/turn-gauge"}},p={},m=[{value:"0.3",id:"03",level:2},{value:"0.2",id:"02",level:2},{value:"0.1",id:"01",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Real-PET/mod-upgrade-tool"},"https://github.com/Real-PET/mod-upgrade-tool")),(0,i.kt)("h2",{id:"03"},"0.3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Renamed "enemies" folder to "encounters"'),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"battle_init")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"encounter_init")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"battle")," mod category to ",(0,i.kt)("inlineCode",{parentName:"li"},"encounter")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"include")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"require")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"is_")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"get_")," prefix for direct getters"),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"Engine")," to ","[Resources]"," (/client/lua-api/resources#resourcesplay_music)"),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"Engine.stream_music()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/resources"},"Resources.play_music()")),(0,i.kt)("li",{parentName:"ul"},"Move ",(0,i.kt)("inlineCode",{parentName:"li"},"Engine")," turn gauge functions to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/turn-gauge"},"TurnGauge")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"Battle.")," prefix"),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"Battle.CardAction")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/action"},"Action")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"card_properties.short_name")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"card_properties.short_name")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:card_action_event()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityqueue_actionaction"},"entity:queue_action()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"action:get_actor()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/action#actionowner"},"action:owner()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"action:copy_metadata()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/action#actioncopy_card_properties"},"action:copy_card_properties()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Replacement / removal is under consideration."))),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"action:set_metadata()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/action#actionset_card_propertiesproperties"},"action:set_card_properties()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Replacement / removal is under consideration."))),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"spell:highlight_tile()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/spell/#spellset_tile_highlightmode"},"spell:set_tile_highlight()")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"tile:is_cracked()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tile:is_hidden()"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"tile:is_hole()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not tile:is_walkable()")," can be used where ",(0,i.kt)("inlineCode",{parentName:"li"},"tile:is_hole()")," is called"))),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"tile:reserve_entity_by_id()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/field#tilereserve_for_identity_id"},"tile:reserve_for_id()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/field#tilereserve_forentity"},"tile:reserve_for(entity)")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/field#tileremove_reservation_for_identity_id"},"tile:remove_reservation_for_id(entity_id)")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/field#tileremove_reservation_forentity"},"tile:remove_reservation_for(entity)")))),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"TileState.Empty")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"TileState.PermaHole")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"MoveAction")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#movement"},"Movement")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:raw_move_event()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityqueue_movementmovement"},"entity:queue_movement()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:share_tile()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityenable_sharing_tileenabled"},"entity:enable_sharing_tile()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:get_current_palette()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entitypalette"},"entity:palette()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:set_animation(path)")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityload_animationpath"},"entity:load_animation(path)")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"sprite:show()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/sprite#spritereveal"},"sprite:reveal()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"sprite:enable_parent_shader()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/sprite#spriteuse_root_shaderenable"},"sprite:use_root_shader()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"animation:refresh(sprite)")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/animation#animationapplysprite"},"animation:apply(sprite)")),(0,i.kt)("li",{parentName:"ul"},"Moved ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:shake_camera()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/field#fieldshakestrength-duration"},"field:shake()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Also accepts game frames instead of seconds"))),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"living:toggle_hitbox()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#livingenable_hitboxenabled"},"living:enabled_hitbox()")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"living:toggle_counter()")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#livingset_counterableenabled"},"living:set_counterable()")),(0,i.kt)("li",{parentName:"ul"},"Moved ",(0,i.kt)("inlineCode",{parentName:"li"},"IntangibleRule")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#intangiblerule"},"IntangibleRule")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"Lifetime.Battlestep")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Lifetime.Battle"))),(0,i.kt)("h2",{id:"02"},"0.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package_init")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"package_requires_scripts")," removed, replaced with ",(0,i.kt)("a",{parentName:"li",href:"/client/packages"},"package.toml"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mods/blocks -> mods/augments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block:set_mutator()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"function augment_init(augment)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"charge_boost")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"attack_boost")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"rapid_boost")," in ",(0,i.kt)("a",{parentName:"li",href:"/client/packages"},"package.toml")," for blocks"))),(0,i.kt)("li",{parentName:"ul"},"For battles: ",(0,i.kt)("inlineCode",{parentName:"li"},"package_build")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"battle_init")),(0,i.kt)("li",{parentName:"ul"},"For characters: ",(0,i.kt)("inlineCode",{parentName:"li"},"package_init")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"character_init"))),(0,i.kt)("h2",{id:"01"},"0.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityon_delete_func--functionself"},"entity.on_delete_func"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Requires call to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityerase"},"entity:erase()"),", ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entitydefault_character_delete"},"entity:default_character_delete()"),", or ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entitydefault_player_delete"},"entity:default_player_delete()")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"charged_time_table_func")," -> ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/player/#playercalculate_charge_time_func--functionself"},"calculate_charge_time_func")),(0,i.kt)("li",{parentName:"ul"},"Simplified ",(0,i.kt)("inlineCode",{parentName:"li"},"Battle.Step.new()")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"card_action:add_step(step)")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/action#actioncreate_step"},"card_action:create_step()")),(0,i.kt)("li",{parentName:"ul"},"Simplified ",(0,i.kt)("inlineCode",{parentName:"li"},"Battle.Component.new(lifetime)")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"entity:register_component(component)")," to ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entitycreate_componentlifetime"},"entity:create_component(lifetime)")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"frames(number)"),", just use the number directly"),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"make_frame_data(data)"),", just use the data directly"),(0,i.kt)("li",{parentName:"ul"},"Removed the ",(0,i.kt)("inlineCode",{parentName:"li"},"dt")," param from ",(0,i.kt)("inlineCode",{parentName:"li"},"entity.on_update_func()"))))}d.isMDXComponent=!0}}]);