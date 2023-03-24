"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Encounter",o={unversionedId:"client/lua-api/encounter",id:"client/lua-api/encounter",title:"Encounter",description:"encounter:createspawner(packageid, rank)",source:"@site/docs/01-client/02-lua-api/02-encounter.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/encounter",permalink:"/documentation-website/client/lua-api/encounter",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/02-encounter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Engine",permalink:"/documentation-website/client/lua-api/engine"},next:{title:"Field",permalink:"/documentation-website/client/lua-api/field"}},u={},p=[{value:"<code>encounter:create_spawner(package_id, rank)</code>",id:"encountercreate_spawnerpackage_id-rank",level:3},{value:"<code>encounter:spawn_player(player_index, col, row)</code>",id:"encounterspawn_playerplayer_index-col-row",level:3},{value:"<code>encounter:set_background(texture_path, animation_path, vel_x?, vel_y?)</code>",id:"encounterset_backgroundtexture_path-animation_path-vel_x-vel_y",level:3},{value:"<code>encounter:set_panels(texture_paths, animation_path, tile_width, tile_height)</code>",id:"encounterset_panelstexture_paths-animation_path-tile_width-tile_height",level:3},{value:"<code>encounter:get_field()</code>",id:"encounterget_field",level:3},{value:"<code>encounter:enable_automatic_turn_end(enabled?)</code>",id:"encounterenable_automatic_turn_endenabled",level:3},{value:"<code>encounter:set_turn_limit(limit)</code>",id:"encounterset_turn_limitlimit",level:3},{value:"<code>encounter:enable_flipping(enable?, player_index?)</code>",id:"encounterenable_flippingenable-player_index",level:3},{value:"<code>encounter:enable_boss_battle(enabled?)</code>",id:"encounterenable_boss_battleenabled",level:3},{value:"Spawner",id:"spawner",level:2},{value:"<code>spawner:spawn(col, row)</code>",id:"spawnerspawncol-row",level:3},{value:"Mutator",id:"mutator",level:2},{value:"<code>mutator:mutate(function(entity))</code>",id:"mutatormutatefunctionentity",level:3}],c={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encounter"},"Encounter"),(0,i.kt)("h3",{id:"encountercreate_spawnerpackage_id-rank"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:create_spawner(package_id, rank)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package_id"),": string, the package id for a character package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rank"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/character#battlecharacterfrom_packagepackage_id-team-rank"},"Rank"))),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("a",{parentName:"p",href:"#spawner"},"Spawner")),(0,i.kt)("h3",{id:"encounterspawn_playerplayer_index-col-row"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:spawn_player(player_index, col, row)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"player_index"),": number, starts at 0")),(0,i.kt)("p",null,"Sets the spawn position for this player."),(0,i.kt)("h3",{id:"encounterset_backgroundtexture_path-animation_path-vel_x-vel_y"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:set_background(texture_path, animation_path, vel_x?, vel_y?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vel_x"),': if unset, uses the "VELOCITY" point on the first frame of the animation.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vel_y"),': if unset, uses the "VELOCITY" point on the first frame of the animation.')),(0,i.kt)("h3",{id:"encounterset_panelstexture_paths-animation_path-tile_width-tile_height"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:set_panels(texture_paths, animation_path, tile_width, tile_height)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"texture_paths"),": a list of path strings, expects a path for ",(0,i.kt)("inlineCode",{parentName:"li"},"Team.Red"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Team.Blue"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Team.Other")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"animation_path"),": an animation file used by tiles, applies to all team textures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tile_width"),": width used to resolve spacing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tile_height"),": height used to resolve spacing.")),(0,i.kt)("p",null,"Experimental. Replacement / removal is under consideration."),(0,i.kt)("h3",{id:"encounterget_field"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:get_field()")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/field"},"Field")),(0,i.kt)("h3",{id:"encounterenable_automatic_turn_endenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:enable_automatic_turn_end(enabled?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled"),": defaults to true.")),(0,i.kt)("p",null,"Causes turns to end without needing the player to press the EndTurn button."),(0,i.kt)("h3",{id:"encounterset_turn_limitlimit"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:set_turn_limit(limit)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"limit"),": max number of turns players can take.")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," is hit, the battle will end as a failure."),(0,i.kt)("h3",{id:"encounterenable_flippingenable-player_index"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:enable_flipping(enable?, player_index?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable"),": defaults to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"player_index"),": starts at 0, if unset applies to all players.")),(0,i.kt)("p",null,"When enabled, players can flip using the FaceLeft and FaceRight buttons."),(0,i.kt)("p",null,"If this function is never called, it is automatically decided by checking for non team panels on the end row behind the player."),(0,i.kt)("h3",{id:"encounterenable_boss_battleenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"encounter:enable_boss_battle(enabled?)")),(0,i.kt)("p",null,"Affects the score in ",(0,i.kt)("a",{parentName:"p",href:"/server/lua-api/events#battle_results"},"battle_results"),"."),(0,i.kt)("h2",{id:"spawner"},"Spawner"),(0,i.kt)("h3",{id:"spawnerspawncol-row"},(0,i.kt)("inlineCode",{parentName:"h3"},"spawner:spawn(col, row)")),(0,i.kt)("p",null,"Spawns the character at this position."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("a",{parentName:"p",href:"#mutator"},"Mutator")),(0,i.kt)("h2",{id:"mutator"},"Mutator"),(0,i.kt)("h3",{id:"mutatormutatefunctionentity"},(0,i.kt)("inlineCode",{parentName:"h3"},"mutator:mutate(function(entity))")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entity"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity"},"Entity"))))}s.isMDXComponent=!0}}]);