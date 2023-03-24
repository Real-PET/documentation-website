"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),d=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?l.createElement(k,r(r({ref:t},s),{},{components:n})):l.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var l=n(7462),a=(n(7294),n(3905));const i={},r="Spell",o={unversionedId:"client/lua-api/spell",id:"client/lua-api/spell",title:"Spell",description:"Instance of Entity.",source:"@site/docs/01-client/02-lua-api/13-spell.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/spell",permalink:"/documentation-website/client/lua-api/spell",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/13-spell.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Character",permalink:"/documentation-website/client/lua-api/character"},next:{title:"Obstacle",permalink:"/documentation-website/client/lua-api/obstacle"}},p={},d=[{value:"<code>Battle.Spell.new(team?)</code>",id:"battlespellnewteam",level:3},{value:"<code>Battle.Spell.from(entity)</code>",id:"battlespellfromentity",level:3},{value:"<code>spell:set_tile_highlight(mode)</code>",id:"spellset_tile_highlightmode",level:3},{value:"<code>spell:copy_hit_props()</code>",id:"spellcopy_hit_props",level:3},{value:"<code>spell:set_hit_props(hit_props)</code>",id:"spellset_hit_propshit_props",level:3},{value:"<code>spell.on_collision_func = function(self, entity)</code>",id:"spellon_collision_func--functionself-entity",level:3},{value:"<code>spell.on_attack_func = function(self, entity)</code>",id:"spellon_attack_func--functionself-entity",level:3},{value:"HitProps",id:"hitprops",level:2},{value:"<code>HitProps.new(damage, flags, element, secondary_element, context?, drag)</code>",id:"hitpropsnewdamage-flags-element-secondary_element-context-drag",level:3},{value:"<code>HitProps.new(damage, flags, element, context?, drag)</code>",id:"hitpropsnewdamage-flags-element-context-drag",level:3},{value:"Element",id:"element",level:2},{value:"Drag",id:"drag",level:2},{value:"<code>Drag.new(direction?, count?)</code>",id:"dragnewdirection-count",level:3},{value:"<code>Drag.None</code>",id:"dragnone",level:3},{value:"Hitbox",id:"hitbox",level:2},{value:"<code>Battle.Hitbox.new(team?, damage?)</code>",id:"battlehitboxnewteam-damage",level:3},{value:"SharedHitbox",id:"sharedhitbox",level:2},{value:"<code>Battle.SharedHitbox.new(spell, duration)</code>",id:"battlesharedhitboxnewspell-duration",level:3}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spell"},"Spell"),(0,a.kt)("p",null,"Instance of ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity"),"."),(0,a.kt)("p",null,"Spell functions are accessible to all entities, but will throw if the entity is not a Spell or ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/obstacle"},"Obstacle"),"."),(0,a.kt)("h3",{id:"battlespellnewteam"},(0,a.kt)("inlineCode",{parentName:"h3"},"Battle.Spell.new(team?)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,a.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityset_teamteam"},"Team"))),(0,a.kt)("p",null,"Returns a new ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," instance."),(0,a.kt)("h3",{id:"battlespellfromentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"Battle.Spell.from(entity)")),(0,a.kt)("p",null,"Returns the entity passed in if the entity is a spell, otherwise returns ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("h3",{id:"spellset_tile_highlightmode"},(0,a.kt)("inlineCode",{parentName:"h3"},"spell:set_tile_highlight(mode)")),(0,a.kt)("p",null,"Sets the highlight mode for tiles the spell passes over."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/field#tilehighlightmode"},"tile:highlight()")),(0,a.kt)("h3",{id:"spellcopy_hit_props"},(0,a.kt)("inlineCode",{parentName:"h3"},"spell:copy_hit_props()")),(0,a.kt)("p",null,"Returns a copy of the spell's ",(0,a.kt)("a",{parentName:"p",href:"#hitprops"},"HitProps")),(0,a.kt)("h3",{id:"spellset_hit_propshit_props"},(0,a.kt)("inlineCode",{parentName:"h3"},"spell:set_hit_props(hit_props)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hit_props"),": ",(0,a.kt)("a",{parentName:"li",href:"#hitprops"},"HitProps"))),(0,a.kt)("h3",{id:"spellon_collision_func--functionself-entity"},(0,a.kt)("inlineCode",{parentName:"h3"},"spell.on_collision_func = function(self, entity)")),(0,a.kt)("p",null,"Called when the spell hits an entity and isn't blocked by ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/living#livingset_intangibleintangible-intangible_rule"},"intangibility"),"."),(0,a.kt)("h3",{id:"spellon_attack_func--functionself-entity"},(0,a.kt)("inlineCode",{parentName:"h3"},"spell.on_attack_func = function(self, entity)")),(0,a.kt)("p",null,"Called after processing damage on the entity, if damage isn't blocked by ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/living#defenserule"},"DefenseRules"),"."),(0,a.kt)("h2",{id:"hitprops"},"HitProps"),(0,a.kt)("h3",{id:"hitpropsnewdamage-flags-element-secondary_element-context-drag"},(0,a.kt)("inlineCode",{parentName:"h3"},"HitProps.new(damage, flags, element, secondary_element, context?, drag)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"damage"),": integer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flags")," any of the values below, or combined using bitwise or (",(0,a.kt)("inlineCode",{parentName:"li"},"|"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.None")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.RetainIntangible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Freeze")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.PierceInvis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Flinch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Shake")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Paralyze")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Stun")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Flash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.PierceGuard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Impact")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Drag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Bubble")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.NoCounter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Root")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Blind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.Confuse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hit.PierceGround")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,a.kt)("a",{parentName:"li",href:"/client/lua-api/spell#element"},"Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secondary_element"),": ",(0,a.kt)("a",{parentName:"li",href:"/client/lua-api/spell#element"},"Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context"),": The value obtained by ",(0,a.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityget_context"},"entity:get_context()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drag"),": ",(0,a.kt)("a",{parentName:"li",href:"#drag"},"Drag"))),(0,a.kt)("p",null,"Returns a new HitProps instance."),(0,a.kt)("h3",{id:"hitpropsnewdamage-flags-element-context-drag"},(0,a.kt)("inlineCode",{parentName:"h3"},"HitProps.new(damage, flags, element, context?, drag)")),(0,a.kt)("p",null,"Returns a new HitProps instance."),(0,a.kt)("h2",{id:"element"},"Element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.None")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Fire")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Aqua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Elec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Wood")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Sword")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Wind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Cursor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Summon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Plus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Element.Break"))),(0,a.kt)("h2",{id:"drag"},"Drag"),(0,a.kt)("h3",{id:"dragnewdirection-count"},(0,a.kt)("inlineCode",{parentName:"h3"},"Drag.new(direction?, count?)")),(0,a.kt)("p",null,"Returns a new Drag instance."),(0,a.kt)("h3",{id:"dragnone"},(0,a.kt)("inlineCode",{parentName:"h3"},"Drag.None")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"Drag.new()")),(0,a.kt)("h2",{id:"hitbox"},"Hitbox"),(0,a.kt)("p",null,"Attacks on first update then deletes self."),(0,a.kt)("h3",{id:"battlehitboxnewteam-damage"},(0,a.kt)("inlineCode",{parentName:"h3"},"Battle.Hitbox.new(team?, damage?)")),(0,a.kt)("p",null,"Returns a new ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," instance."),(0,a.kt)("h2",{id:"sharedhitbox"},"SharedHitbox"),(0,a.kt)("p",null,"Adopts the parent spell's ",(0,a.kt)("a",{parentName:"p",href:"#hitprops"},"HitProps")," and ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityset_teamteam"},"Team"),", and attacks every frame until deleted."),(0,a.kt)("p",null,"The SharedHitbox's ",(0,a.kt)("inlineCode",{parentName:"p"},"on_collision_func")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"on_attack_func")," calls the parent spell's ",(0,a.kt)("inlineCode",{parentName:"p"},"on_collision_func")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"on_attack_func"),"."),(0,a.kt)("h3",{id:"battlesharedhitboxnewspell-duration"},(0,a.kt)("inlineCode",{parentName:"h3"},"Battle.SharedHitbox.new(spell, duration)")),(0,a.kt)("p",null,"Creates a SharedHitbox."),(0,a.kt)("p",null,"Returns a new ",(0,a.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," instance."))}u.isMDXComponent=!0}}]);