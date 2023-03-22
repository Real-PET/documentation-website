"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"clientSidebar":[{"type":"link","label":"Packages","href":"/documentation-website/docs/client/packages","docId":"client/packages"},{"type":"category","label":"Lua API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Engine","href":"/documentation-website/docs/client/lua-api/engine","docId":"client/lua-api/engine"},{"type":"link","label":"Battle","href":"/documentation-website/docs/client/lua-api/battle","docId":"client/lua-api/battle"},{"type":"link","label":"Field","href":"/documentation-website/docs/client/lua-api/field","docId":"client/lua-api/field"},{"type":"link","label":"Direction","href":"/documentation-website/docs/client/lua-api/direction","docId":"client/lua-api/direction"},{"type":"link","label":"Animation","href":"/documentation-website/docs/client/lua-api/animation","docId":"client/lua-api/animation"},{"type":"link","label":"Sprite","href":"/documentation-website/docs/client/lua-api/sprite","docId":"client/lua-api/sprite"},{"type":"link","label":"Entity","href":"/documentation-website/docs/client/lua-api/entity","docId":"client/lua-api/entity"},{"type":"link","label":"Living","href":"/documentation-website/docs/client/lua-api/living","docId":"client/lua-api/living"},{"type":"link","label":"Player","href":"/documentation-website/docs/client/lua-api/player","docId":"client/lua-api/player"},{"type":"link","label":"Character","href":"/documentation-website/docs/client/lua-api/character","docId":"client/lua-api/character"},{"type":"link","label":"Spell","href":"/documentation-website/docs/client/lua-api/spell","docId":"client/lua-api/spell"},{"type":"link","label":"Obstacle","href":"/documentation-website/docs/client/lua-api/obstacle","docId":"client/lua-api/obstacle"},{"type":"link","label":"Artifact","href":"/documentation-website/docs/client/lua-api/artifact","docId":"client/lua-api/artifact"},{"type":"link","label":"Action","href":"/documentation-website/docs/client/lua-api/action","docId":"client/lua-api/action"}]},{"type":"link","label":"Breaking Changes","href":"/documentation-website/docs/client/breaking-changes","docId":"client/breaking-changes"}],"serverSidebar":[{"type":"link","label":"Minimal Setup","href":"/documentation-website/docs/server/minimal-setup","docId":"server/minimal-setup"},{"type":"link","label":"Areas","href":"/documentation-website/docs/server/areas","docId":"server/areas"},{"type":"link","label":"Assets","href":"/documentation-website/docs/server/assets","docId":"server/assets"},{"type":"category","label":"Lua API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lua Version And Changes","href":"/documentation-website/docs/server/lua-api/lua-version-and-changes","docId":"server/lua-api/lua-version-and-changes"},{"type":"link","label":"Event Emitters","href":"/documentation-website/docs/server/lua-api/event-emitters","docId":"server/lua-api/event-emitters"},{"type":"link","label":"Server Events","href":"/documentation-website/docs/server/lua-api/events","docId":"server/lua-api/events"},{"type":"link","label":"Areas","href":"/documentation-website/docs/server/lua-api/areas","docId":"server/lua-api/areas"},{"type":"link","label":"Objects","href":"/documentation-website/docs/server/lua-api/objects","docId":"server/lua-api/objects"},{"type":"link","label":"Widgets","href":"/documentation-website/docs/server/lua-api/widgets","docId":"server/lua-api/widgets"},{"type":"link","label":"Players","href":"/documentation-website/docs/server/lua-api/players","docId":"server/lua-api/players"},{"type":"link","label":"Player Data","href":"/documentation-website/docs/server/lua-api/player-data","docId":"server/lua-api/player-data"},{"type":"link","label":"Bots","href":"/documentation-website/docs/server/lua-api/bots","docId":"server/lua-api/bots"},{"type":"link","label":"Assets","href":"/documentation-website/docs/server/lua-api/assets","docId":"server/lua-api/assets"},{"type":"link","label":"Synchronization","href":"/documentation-website/docs/server/lua-api/synchronization","docId":"server/lua-api/synchronization"},{"type":"link","label":"Async","href":"/documentation-website/docs/server/lua-api/async","docId":"server/lua-api/async"}]},{"type":"link","label":"Breaking Changes","href":"/documentation-website/docs/server/breaking-changes","docId":"server/breaking-changes"}]},"docs":{"client/breaking-changes":{"id":"client/breaking-changes","title":"Breaking Changes","description":"https://github.com/Real-PET/mod-upgrade-tool","sidebar":"clientSidebar"},"client/lua-api/action":{"id":"client/lua-api/action","title":"Action","description":"While actions execute, their owners will stop auto reserving tiles.","sidebar":"clientSidebar"},"client/lua-api/animation":{"id":"client/lua-api/animation","title":"Animation","description":"Engine.Animation.new(path?)","sidebar":"clientSidebar"},"client/lua-api/artifact":{"id":"client/lua-api/artifact","title":"Artifact","description":"Instance of Entity.","sidebar":"clientSidebar"},"client/lua-api/battle":{"id":"client/lua-api/battle","title":"Battle","description":"battle:createspawner(packageid, rank)","sidebar":"clientSidebar"},"client/lua-api/character":{"id":"client/lua-api/character","title":"Character","description":"Instance of Entity. All Living functions are available as well.","sidebar":"clientSidebar"},"client/lua-api/direction":{"id":"client/lua-api/direction","title":"Direction","description":"- Direction.None","sidebar":"clientSidebar"},"client/lua-api/engine":{"id":"client/lua-api/engine","title":"Engine","description":"Engine.load_texture(path)","sidebar":"clientSidebar"},"client/lua-api/entity":{"id":"client/lua-api/entity","title":"Entity","description":"Most of these functions will throw if the entity has been erased. entityis_deleted() will never throw and can be used to see if the entity is still safe to use.","sidebar":"clientSidebar"},"client/lua-api/field":{"id":"client/lua-api/field","title":"Field","description":"field:tile_at(col, row)","sidebar":"clientSidebar"},"client/lua-api/living":{"id":"client/lua-api/living","title":"Living","description":"Instance of Entity.","sidebar":"clientSidebar"},"client/lua-api/obstacle":{"id":"client/lua-api/obstacle","title":"Obstacle","description":"Instance of Entity. All Spell and Living functions are available as well.","sidebar":"clientSidebar"},"client/lua-api/player":{"id":"client/lua-api/player","title":"Player","description":"Instance of Entity. All Living and Character functions are available as well.","sidebar":"clientSidebar"},"client/lua-api/spell":{"id":"client/lua-api/spell","title":"Spell","description":"Instance of Entity.","sidebar":"clientSidebar"},"client/lua-api/sprite":{"id":"client/lua-api/sprite","title":"Sprite","description":"sprite:create_node()","sidebar":"clientSidebar"},"client/packages":{"id":"client/packages","title":"Packages","description":"Augments","sidebar":"clientSidebar"},"server/areas":{"id":"server/areas","title":"Areas","description":"Maps for areas are stored in ./areas. The first area players will see is default.tmx (required).","sidebar":"serverSidebar"},"server/assets":{"id":"server/assets","title":"Assets","description":"Types of assets:","sidebar":"serverSidebar"},"server/breaking-changes":{"id":"server/breaking-changes","title":"Breaking Changes","description":"0.2.0","sidebar":"serverSidebar"},"server/lua-api/areas":{"id":"server/lua-api/areas","title":"Areas","description":"areaid is the filename without extension, ./assets/myarea.tmx would be my_area.","sidebar":"serverSidebar"},"server/lua-api/assets":{"id":"server/lua-api/assets","title":"Assets","description":"Net.updateasset(serverpath, content)","sidebar":"serverSidebar"},"server/lua-api/async":{"id":"server/lua-api/async","title":"Async","description":"If you want to use IO while players are connected, you\'ll want to use the Async API to prevent server hiccups.","sidebar":"serverSidebar"},"server/lua-api/bots":{"id":"server/lua-api/bots","title":"Bots","description":"Positions are in tile space. To get the center of a tile add 0.5","sidebar":"serverSidebar"},"server/lua-api/event-emitters":{"id":"server/lua-api/event-emitters","title":"Event Emitters","description":"Net.EventEmitter.new()","sidebar":"serverSidebar"},"server/lua-api/events":{"id":"server/lua-api/events","title":"Server Events","description":"Positions are in tile space. To get the center of a tile add 0.5","sidebar":"serverSidebar"},"server/lua-api/lua-version-and-changes":{"id":"server/lua-api/lua-version-and-changes","title":"Lua Version And Changes","description":"The Lua interpreter shipped with the server is version 5.4. Reference//www.lua.org/manual/5.4/#index","sidebar":"serverSidebar"},"server/lua-api/objects":{"id":"server/lua-api/objects","title":"Objects","description":"Positions and sizes are in tile space. To get the center of a tile add 0.5","sidebar":"serverSidebar"},"server/lua-api/player-data":{"id":"server/lua-api/player-data","title":"Player Data","description":"Functions relevant to items, money, stats, and tracking data.","sidebar":"serverSidebar"},"server/lua-api/players":{"id":"server/lua-api/players","title":"Players","description":"Positions are in tile space. To get the center of a tile add 0.5","sidebar":"serverSidebar"},"server/lua-api/synchronization":{"id":"server/lua-api/synchronization","title":"Synchronization","description":"Net.synchronize(function())","sidebar":"serverSidebar"},"server/lua-api/widgets":{"id":"server/lua-api/widgets","title":"Widgets","description":"Net.isplayerbusy(player_id)","sidebar":"serverSidebar"},"server/minimal-setup":{"id":"server/minimal-setup","title":"Minimal Setup","description":"- areas folder","sidebar":"serverSidebar"}}}')}}]);