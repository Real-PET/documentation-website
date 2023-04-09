"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6],{3905:(e,a,t)=>{t.d(a,{Zo:()=>_,kt:()=>u});var r=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),d=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},_=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),s=d(t),c=l,u=s["".concat(o,".").concat(c)]||s[c]||y[c]||i;return t?r.createElement(u,n(n({ref:a},_),{},{components:t})):r.createElement(u,n({ref:a},_))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,n=new Array(i);n[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:l,n[1]=p;for(var d=2;d<i;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2798:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(7462),l=(t(7294),t(3905));const i={},n="Players",p={unversionedId:"server/lua-api/players",id:"server/lua-api/players",title:"Players",description:"Positions are in tile space. To get the center of a tile add 0.5",source:"@site/docs/02-server/04-lua-api/07-players.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/players",permalink:"/documentation-website/server/lua-api/players",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/02-server/04-lua-api/07-players.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Widgets",permalink:"/documentation-website/server/lua-api/widgets"},next:{title:"Player Data",permalink:"/documentation-website/server/lua-api/player-data"}},o={},d=[{value:"<code>Net.list_players(area_id)</code>",id:"netlist_playersarea_id",level:3},{value:"<code>Net.is_player(player_id)</code>",id:"netis_playerplayer_id",level:3},{value:"<code>Net.get_player_area(player_id)</code>",id:"netget_player_areaplayer_id",level:3},{value:"<code>Net.get_player_ip(player_id)</code>",id:"netget_player_ipplayer_id",level:3},{value:"<code>Net.get_player_name(player_id)</code>",id:"netget_player_nameplayer_id",level:3},{value:"<code>Net.set_player_name(player_id, name)</code>",id:"netset_player_nameplayer_id-name",level:3},{value:"<code>Net.get_player_direction(player_id)</code>",id:"netget_player_directionplayer_id",level:3},{value:"<code>Net.get_player_position(player_id)</code>",id:"netget_player_positionplayer_id",level:3},{value:"<code>Net.get_player_mugshot(player_id)</code>",id:"netget_player_mugshotplayer_id",level:3},{value:"<code>Net.get_player_avatar(player_id)</code>",id:"netget_player_avatarplayer_id",level:3},{value:"<code>Net.set_player_avatar(player_id, texture_path, animation_path)</code>",id:"netset_player_avatarplayer_id-texture_path-animation_path",level:3},{value:"<code>Net.get_player_avatar_name(player_id)</code>",id:"netget_player_avatar_nameplayer_id",level:3},{value:"<code>Net.set_player_emote(player_id, emote_id, use_custom_emotes?)</code>",id:"netset_player_emoteplayer_id-emote_id-use_custom_emotes",level:3},{value:"<code>Net.exclusive_player_emote(player_id, emoter_id, emote_id, use_custom_emotes?)</code>",id:"netexclusive_player_emoteplayer_id-emoter_id-emote_id-use_custom_emotes",level:3},{value:"<code>Net.animate_player(player_id, state_name, loop?)</code>",id:"netanimate_playerplayer_id-state_name-loop",level:3},{value:"<code>Net.animate_player_properties(player_id, keyframes)</code>",id:"netanimate_player_propertiesplayer_id-keyframes",level:3},{value:"<code>Net.provide_asset_for_player(player_id, path)</code>",id:"netprovide_asset_for_playerplayer_id-path",level:3},{value:"<code>Net.play_sound_for_player(player_id, path)</code>",id:"netplay_sound_for_playerplayer_id-path",level:3},{value:"<code>Net.exclude_object_for_player(player_id, object_id)</code>",id:"netexclude_object_for_playerplayer_id-object_id",level:3},{value:"<code>Net.include_object_for_player(player_id, object_id)</code>",id:"netinclude_object_for_playerplayer_id-object_id",level:3},{value:"<code>Net.exclude_actor_for_player(player_id, actor_id)</code>",id:"netexclude_actor_for_playerplayer_id-actor_id",level:3},{value:"<code>Net.include_actor_for_player(player_id, actor_id)</code>",id:"netinclude_actor_for_playerplayer_id-actor_id",level:3},{value:"<code>Net.enable_camera_controls(player_id, range_x?, range_y?) -- range is in pixels</code>",id:"netenable_camera_controlsplayer_id-range_x-range_y----range-is-in-pixels",level:3},{value:"<code>Net.move_player_camera(player_id, x, y, z, holdTimeInSeconds?)</code>",id:"netmove_player_cameraplayer_id-x-y-z-holdtimeinseconds",level:3},{value:"<code>Net.slide_player_camera(player_id, x, y, z, durationInSeconds)</code>",id:"netslide_player_cameraplayer_id-x-y-z-durationinseconds",level:3},{value:"<code>Net.shake_player_camera(player_id, strength, durationInSeconds)</code>",id:"netshake_player_cameraplayer_id-strength-durationinseconds",level:3},{value:"<code>Net.fade_player_camera(player_id, color, durationInSeconds)</code>",id:"netfade_player_cameraplayer_id-color-durationinseconds",level:3},{value:"<code>Net.track_with_player_camera(player_id, actor_id)</code>",id:"nettrack_with_player_cameraplayer_id-actor_id",level:3},{value:"<code>Net.unlock_player_camera(player_id)</code>",id:"netunlock_player_cameraplayer_id",level:3},{value:"<code>Net.is_player_input_locked(player_id)</code>",id:"netis_player_input_lockedplayer_id",level:3},{value:"<code>Net.lock_player_input(player_id)</code>",id:"netlock_player_inputplayer_id",level:3},{value:"<code>Net.unlock_player_input(player_id)</code>",id:"netunlock_player_inputplayer_id",level:3},{value:"<code>Net.teleport_player(player_id, warp, x, y, z, direction?)</code>",id:"netteleport_playerplayer_id-warp-x-y-z-direction",level:3},{value:"<code>Net.offer_package(player_id, package_path)</code>",id:"netoffer_packageplayer_id-package_path",level:3},{value:"<code>Net.set_mod_whitelist_for_player(player_id, path)</code>",id:"netset_mod_whitelist_for_playerplayer_id-path",level:3},{value:"<code>Net.set_mod_blacklist_for_player(player_id, path)</code>",id:"netset_mod_blacklist_for_playerplayer_id-path",level:3},{value:"<code>Net.is_player_busy(player_id)</code>",id:"netis_player_busyplayer_id",level:3},{value:"<code>Net.is_player_battling(player_id)</code>",id:"netis_player_battlingplayer_id",level:3},{value:"<code>Net.initiate_encounter(player_id, package_path, data?)</code>",id:"netinitiate_encounterplayer_id-package_path-data",level:3},{value:"<code>Net.initiate_pvp(player_1_id, player_2_id, package_path?, data?)</code>",id:"netinitiate_pvpplayer_1_id-player_2_id-package_path-data",level:3},{value:"<code>Net.initiate_netplay(player_ids, package_path?, data?)</code>",id:"netinitiate_netplayplayer_ids-package_path-data",level:3},{value:"<code>Net.transfer_player(player_id, area_id, warp_in?, x?, y?, z?, direction?)</code>",id:"nettransfer_playerplayer_id-area_id-warp_in-x-y-z-direction",level:3},{value:"<code>Net.transfer_server(player_id, address, warp_out?, data?)</code>",id:"nettransfer_serverplayer_id-address-warp_out-data",level:3},{value:"<code>Net.request_authorization(player_id, address, data?)</code>",id:"netrequest_authorizationplayer_id-address-data",level:3},{value:"<code>Net.kick_player(player_id, reason, warp_out?)</code>",id:"netkick_playerplayer_id-reason-warp_out",level:3}],_={toc:d},s="wrapper";function y(e){let{components:a,...t}=e;return(0,l.kt)(s,(0,r.Z)({},_,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"players"},"Players"),(0,l.kt)("p",null,"Positions are in tile space. To get the center of a tile add ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")),(0,l.kt)("h3",{id:"netlist_playersarea_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.list_players(area_id)")),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"player_id"),"s."),(0,l.kt)("h3",{id:"netis_playerplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.is_player(player_id)")),(0,l.kt)("p",null,"Returns true if the server is aware of a player with the provided id."),(0,l.kt)("h3",{id:"netget_player_areaplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_area(player_id)")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("inlineCode",{parentName:"p"},"area_id")," for the area the player is currently in."),(0,l.kt)("h3",{id:"netget_player_ipplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_ip(player_id)")),(0,l.kt)("p",null,"Returns the IP address of the player as a string. Useful for creating connection whitelists/blacklists."),(0,l.kt)("p",null,"If you want to track data use ",(0,l.kt)("a",{parentName:"p",href:"/server/lua-api/player-data#netget_player_secretplayer_id"},"Net.get_player_secret()"),". Otherwise you'll have issues when multiple players live within the same house."),(0,l.kt)("h3",{id:"netget_player_nameplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_name(player_id)")),(0,l.kt)("p",null,'Gets the name of the player. "Nickname" in config.'),(0,l.kt)("h3",{id:"netset_player_nameplayer_id-name"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.set_player_name(player_id, name)")),(0,l.kt)("p",null,"Sets the name of the player for all players to see."),(0,l.kt)("h3",{id:"netget_player_directionplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_direction(player_id)")),(0,l.kt)("p",null,"Gets the facing direction of the player."),(0,l.kt)("h3",{id:"netget_player_positionplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_position(player_id)")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"{ x, y, z }")),(0,l.kt)("h3",{id:"netget_player_mugshotplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_mugshot(player_id)")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"{ texture_path, animation_path }")),(0,l.kt)("h3",{id:"netget_player_avatarplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_avatar(player_id)")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"{ texture_path, animation_path }")),(0,l.kt)("h3",{id:"netset_player_avatarplayer_id-texture_path-animation_path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.set_player_avatar(player_id, texture_path, animation_path)")),(0,l.kt)("p",null,"Sets the texture file and animation file used to display the player."),(0,l.kt)("h3",{id:"netget_player_avatar_nameplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.get_player_avatar_name(player_id)")),(0,l.kt)("p",null,"Returns the name of the playable character used by the player."),(0,l.kt)("h3",{id:"netset_player_emoteplayer_id-emote_id-use_custom_emotes"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.set_player_emote(player_id, emote_id, use_custom_emotes?)")),(0,l.kt)("p",null,"Displays an emote above the player. ",(0,l.kt)("inlineCode",{parentName:"p"},"emote_id")," is a number."),(0,l.kt)("p",null,"Subject to change."),(0,l.kt)("h3",{id:"netexclusive_player_emoteplayer_id-emoter_id-emote_id-use_custom_emotes"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.exclusive_player_emote(player_id, emoter_id, emote_id, use_custom_emotes?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emoter_id"),": a ",(0,l.kt)("inlineCode",{parentName:"li"},"bot_id")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"player_id"))),(0,l.kt)("p",null,"Displays an emote exclusively to this player."),(0,l.kt)("p",null,"Subject to change."),(0,l.kt)("h3",{id:"netanimate_playerplayer_id-state_name-loop"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.animate_player(player_id, state_name, loop?)")),(0,l.kt)("p",null,"Sets the animation state for the player, the default states will be used if the player moves."),(0,l.kt)("h3",{id:"netanimate_player_propertiesplayer_id-keyframes"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.animate_player_properties(player_id, keyframes)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'keyframes: {\n  properties: {\n    property: "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop",\n    ease?: "Linear" | "In" | "Out" | "InOut" | "Floor",\n    value: number | string\n  }[],\n  duration: number\n}[]\n')),(0,l.kt)("p",null,"Interpolated animation for fancy effects."),(0,l.kt)("p",null,'If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the player\'s current position, and "Sound Effect" would use blank / play no sounds.'),(0,l.kt)("p",null,"If the position is not animated, the player can control their actor while the animations play."),(0,l.kt)("p",null,"The final state of the animation will stick to the player, excluding sounds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Net:on("tile_interaction", function(event)\n  local position = Net.get_player_position(event.player_id)\n\n  -- a stretched jump. if the player disappears, you may need to add a new tile layer\n  local keyframes = {\n    {\n      properties = {\n        { property = "Z",      value = position.z + 1, ease = "Out" },\n        { property = "ScaleY", value = 1.5,            ease = "Out" }\n      },\n      duration = 0.5\n    },\n    {\n      properties = {\n        { property = "Z",      value = position.z, ease = "In" },\n        { property = "ScaleY", value = 1,          ease = "In" }\n      },\n      duration = 0.5\n    }\n  }\n\n  Net.animate_player_properties(event.player_id, keyframes)\nend)\n')),(0,l.kt)("p",null,"If you need something to happen when the animation ends, you should use ",(0,l.kt)("a",{parentName:"p",href:"/server/lua-api/async#Async.sleep(seconds)"},"Async.sleep()")),(0,l.kt)("h3",{id:"netprovide_asset_for_playerplayer_id-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.provide_asset_for_player(player_id, path)")),(0,l.kt)("p",null,"Allows for assets to be sent ahead of time to reduce apparent server hiccups."),(0,l.kt)("h3",{id:"netplay_sound_for_playerplayer_id-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.play_sound_for_player(player_id, path)")),(0,l.kt)("p",null,"Allows for assets to be sent ahead of time to reduce apparent server hiccups."),(0,l.kt)("h3",{id:"netexclude_object_for_playerplayer_id-object_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.exclude_object_for_player(player_id, object_id)")),(0,l.kt)("p",null,"Disables collisions, interactions, and hides the object for this player."),(0,l.kt)("h3",{id:"netinclude_object_for_playerplayer_id-object_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.include_object_for_player(player_id, object_id)")),(0,l.kt)("p",null,"Brings back functionality removed by ",(0,l.kt)("inlineCode",{parentName:"p"},"Net.exclude_object_for_player()")," for this player."),(0,l.kt)("h3",{id:"netexclude_actor_for_playerplayer_id-actor_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.exclude_actor_for_player(player_id, actor_id)")),(0,l.kt)("p",null,"Disables collisions, interactions, and hides the actor for this player."),(0,l.kt)("h3",{id:"netinclude_actor_for_playerplayer_id-actor_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.include_actor_for_player(player_id, actor_id)")),(0,l.kt)("p",null,"Brings back functionality removed by ",(0,l.kt)("inlineCode",{parentName:"p"},"Net.exclude_actor_for_player()")," for this player."),(0,l.kt)("h3",{id:"netenable_camera_controlsplayer_id-range_x-range_y----range-is-in-pixels"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.enable_camera_controls(player_id, range_x?, range_y?) -- range is in pixels")),(0,l.kt)("p",null,"Not implemented. Subject to change."),(0,l.kt)("h3",{id:"netmove_player_cameraplayer_id-x-y-z-holdtimeinseconds"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.move_player_camera(player_id, x, y, z, holdTimeInSeconds?)")),(0,l.kt)("p",null,"Snaps the camera to a specific position."),(0,l.kt)("p",null,"Locks the camera."),(0,l.kt)("h3",{id:"netslide_player_cameraplayer_id-x-y-z-durationinseconds"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.slide_player_camera(player_id, x, y, z, durationInSeconds)")),(0,l.kt)("p",null,"Slides the camera to a specific position."),(0,l.kt)("p",null,"Locks the camera."),(0,l.kt)("h3",{id:"netshake_player_cameraplayer_id-strength-durationinseconds"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.shake_player_camera(player_id, strength, durationInSeconds)")),(0,l.kt)("p",null,"Shakes the camera. Useful for impact (explosions, landing, earthquakes)"),(0,l.kt)("h3",{id:"netfade_player_cameraplayer_id-color-durationinseconds"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.fade_player_camera(player_id, color, durationInSeconds)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }"))),(0,l.kt)("h3",{id:"nettrack_with_player_cameraplayer_id-actor_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.track_with_player_camera(player_id, actor_id)")),(0,l.kt)("p",null,"Changes which actor the camera follows. Initially this will be set to the player."),(0,l.kt)("h3",{id:"netunlock_player_cameraplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.unlock_player_camera(player_id)")),(0,l.kt)("p",null,"Unlocks the player's camera, allowing it to follow the tracked actor again."),(0,l.kt)("h3",{id:"netis_player_input_lockedplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.is_player_input_locked(player_id)")),(0,l.kt)("p",null,"Returns true if there's any locks on the player's input."),(0,l.kt)("h3",{id:"netlock_player_inputplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.lock_player_input(player_id)")),(0,l.kt)("p",null,"Prevents the player from moving, interacting, and opening menus. Multiple locks can exist at a time."),(0,l.kt)("h3",{id:"netunlock_player_inputplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.unlock_player_input(player_id)")),(0,l.kt)("p",null,"Removes a lock on the player's input."),(0,l.kt)("h3",{id:"netteleport_playerplayer_id-warp-x-y-z-direction"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.teleport_player(player_id, warp, x, y, z, direction?)")),(0,l.kt)("p",null,"Teleports the player to a new position."),(0,l.kt)("h3",{id:"netoffer_packageplayer_id-package_path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.offer_package(player_id, package_path)")),(0,l.kt)("p",null,"Gets permission from the player to permanently install a package on their client, allowing for the package to be used when disconnected and while on other servers."),(0,l.kt)("p",null,"If the player accepts, the package will be installed."),(0,l.kt)("p",null,"Not implemented."),(0,l.kt)("h3",{id:"netset_mod_whitelist_for_playerplayer_id-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.set_mod_whitelist_for_player(player_id, path)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Whitelists have this format: ",(0,l.kt)("inlineCode",{parentName:"li"},"[md5] [package_id]\\n"))))),(0,l.kt)("p",null,"Not implemented. Subject to change."),(0,l.kt)("h3",{id:"netset_mod_blacklist_for_playerplayer_id-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.set_mod_blacklist_for_player(player_id, path)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Blacklists have this format: ",(0,l.kt)("inlineCode",{parentName:"li"},"[md5] [package_id]\\n"))))),(0,l.kt)("p",null,"Not implemented. Subject to change."),(0,l.kt)("h3",{id:"netis_player_busyplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.is_player_busy(player_id)")),(0,l.kt)("p",null,"Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open."),(0,l.kt)("h3",{id:"netis_player_battlingplayer_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.is_player_battling(player_id)")),(0,l.kt)("p",null,"Returns true if the player is in battle."),(0,l.kt)("h3",{id:"netinitiate_encounterplayer_id-package_path-data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.initiate_encounter(player_id, package_path, data?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": anything that could be represented as JSON.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read as second param in encounter_init for the encounter package")))),(0,l.kt)("h3",{id:"netinitiate_pvpplayer_1_id-player_2_id-package_path-data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.initiate_pvp(player_1_id, player_2_id, package_path?, data?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": anything that could be represented as JSON.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read as second param in encounter_init for the encounter package")))),(0,l.kt)("h3",{id:"netinitiate_netplayplayer_ids-package_path-data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.initiate_netplay(player_ids, package_path?, data?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": anything that could be represented as JSON.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read as second param in encounter_init for the encounter package")))),(0,l.kt)("h3",{id:"nettransfer_playerplayer_id-area_id-warp_in-x-y-z-direction"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.transfer_player(player_id, area_id, warp_in?, x?, y?, z?, direction?)")),(0,l.kt)("p",null,"Sends the player to a different area."),(0,l.kt)("h3",{id:"nettransfer_serverplayer_id-address-warp_out-data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.transfer_server(player_id, address, warp_out?, data?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Readable in ",(0,l.kt)("a",{parentName:"li",href:"/server/lua-api/events#player_request"},"player_request")," on the remote server")))),(0,l.kt)("h3",{id:"netrequest_authorizationplayer_id-address-data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.request_authorization(player_id, address, data?)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Readable in ",(0,l.kt)("a",{parentName:"li",href:"/server/lua-api/events#authorization"},"authorization")," on the remote server")))),(0,l.kt)("h3",{id:"netkick_playerplayer_id-reason-warp_out"},(0,l.kt)("inlineCode",{parentName:"h3"},"Net.kick_player(player_id, reason, warp_out?)")))}y.isMDXComponent=!0}}]);