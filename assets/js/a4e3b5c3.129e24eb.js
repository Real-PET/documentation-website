"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var l=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=l.createContext({}),o=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=o(e.components);return l.createElement(u.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=o(t),f=i,g=c["".concat(u,".").concat(f)]||c[f]||p[f]||a;return t?l.createElement(g,r(r({ref:n},s),{},{components:t})):l.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=f;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[c]="string"==typeof e?e:i,r[1]=d;for(var o=2;o<a;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var l=t(7462),i=(t(7294),t(3905));const a={},r="Living",d={unversionedId:"client/lua-api/living",id:"client/lua-api/living",title:"Living",description:"Instance of Entity.",source:"@site/docs/01-client/02-lua-api/10-living.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/living",permalink:"/documentation-website/client/lua-api/living",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/10-living.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Entity",permalink:"/documentation-website/client/lua-api/entity"},next:{title:"Player",permalink:"/documentation-website/client/lua-api/player"}},u={},o=[{value:"<code>living:get_max_health()</code>",id:"livingget_max_health",level:3},{value:"<code>living:get_health()</code>",id:"livingget_health",level:3},{value:"<code>living:set_health()</code>",id:"livingset_health",level:3},{value:"<code>living:toggle_hitbox(enabled?)</code>",id:"livingtoggle_hitboxenabled",level:3},{value:"<code>living:is_counterable()</code>",id:"livingis_counterable",level:3},{value:"<code>living:toggle_counter(enabled?)</code>",id:"livingtoggle_counterenabled",level:3},{value:"<code>living:is_intangible()</code>",id:"livingis_intangible",level:3},{value:"<code>living:set_intangible(intangible, intangible_rule?)</code>",id:"livingset_intangibleintangible-intangible_rule",level:3},{value:"<code>living:add_defense_rule(defense_rule)</code>",id:"livingadd_defense_ruledefense_rule",level:3},{value:"<code>living:remove_defense_rule(defense_rule)</code>",id:"livingremove_defense_ruledefense_rule",level:3},{value:"<code>living:register_status_callback(hit_flag, function())</code>",id:"livingregister_status_callbackhit_flag-function",level:3},{value:"DefenseJudge",id:"defensejudge",level:2},{value:"<code>judge:block_damage()</code>",id:"judgeblock_damage",level:3},{value:"<code>judge:block_impact()</code>",id:"judgeblock_impact",level:3},{value:"<code>judge:is_damage_blocked()</code>",id:"judgeis_damage_blocked",level:3},{value:"<code>judge:is_impact_blocked()</code>",id:"judgeis_impact_blocked",level:3},{value:"DefenseRule",id:"defenserule",level:2},{value:"<code>Battle.DefenseRule.new(priority, defense_order)</code>",id:"battledefenserulenewpriority-defense_order",level:3},{value:"<code>defense_rule:is_replaced()</code>",id:"defense_ruleis_replaced",level:3},{value:"<code>defense_rule.on_replace_func = function()</code>",id:"defense_ruleon_replace_func--function",level:3},{value:"<code>defense_rule.can_block_func = function(judge, attacker, defender)</code>",id:"defense_rulecan_block_func--functionjudge-attacker-defender",level:3},{value:"<code>defense_rule.filter_statuses_func = function(hit_props)</code>",id:"defense_rulefilter_statuses_func--functionhit_props",level:3},{value:"DefenseVirusBody",id:"defensevirusbody",level:2},{value:"<code>Battle.DefenseVirusBody.new()</code>",id:"battledefensevirusbodynew",level:3},{value:"IntangibleRule",id:"intangiblerule",level:2},{value:"<code>Battle.IntangibleRule.new()</code>",id:"battleintangiblerulenew",level:3},{value:"<code>intangible_rule.duration</code>",id:"intangible_ruleduration",level:3},{value:"<code>intangible_rule.hit_weaknesses</code>",id:"intangible_rulehit_weaknesses",level:3},{value:"<code>intangible_rule.element_weaknesses</code>",id:"intangible_ruleelement_weaknesses",level:3},{value:"<code>intangible_rule.on_deactivate_func = function()</code>",id:"intangible_ruleon_deactivate_func--function",level:3}],s={toc:o},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"living"},"Living"),(0,i.kt)("p",null,"Instance of ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity"),"."),(0,i.kt)("p",null,"Living functions are accessible to all entities, but will throw if the entity is not a ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Player"),", ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/character"},"Character"),", or ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/obstacle"},"Obstacle"),"."),(0,i.kt)("h3",{id:"livingget_max_health"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:get_max_health()")),(0,i.kt)("p",null,"Returns the entity's max health."),(0,i.kt)("h3",{id:"livingget_health"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:get_health()")),(0,i.kt)("p",null,"Returns the entity's current health."),(0,i.kt)("h3",{id:"livingset_health"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:set_health()")),(0,i.kt)("p",null,"Sets the entity's max health."),(0,i.kt)("h3",{id:"livingtoggle_hitboxenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:toggle_hitbox(enabled?)")),(0,i.kt)("p",null,"Passing false will allow attacks to pass through as if the entity didn't exist."),(0,i.kt)("h3",{id:"livingis_counterable"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:is_counterable()")),(0,i.kt)("p",null,"Returns true if the entity can currently be countered."),(0,i.kt)("h3",{id:"livingtoggle_counterenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:toggle_counter(enabled?)")),(0,i.kt)("p",null,"Allows the entity to be countered when hit by an attack with a ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityget_context"},"context")," created in ",(0,i.kt)("a",{parentName:"p",href:"/client/packages/#cards"},"card_init")),(0,i.kt)("h3",{id:"livingis_intangible"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:is_intangible()")),(0,i.kt)("p",null,"Returns true if an ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/living#intangiblerule"},"IntangibleRule")," is active."),(0,i.kt)("h3",{id:"livingset_intangibleintangible-intangible_rule"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:set_intangible(intangible, intangible_rule?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intangible"),": bool, if false the active rule is removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intangible_rule"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#intangiblerule"},"IntangibleRule"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ignored if ",(0,i.kt)("inlineCode",{parentName:"li"},"intangible")," is false."),(0,i.kt)("li",{parentName:"ul"},"A default will be used if ",(0,i.kt)("inlineCode",{parentName:"li"},"intangible_rule")," is unset.")))),(0,i.kt)("h3",{id:"livingadd_defense_ruledefense_rule"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:add_defense_rule(defense_rule)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defense_rule"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#defenserule"},"DefenseRule"))),(0,i.kt)("h3",{id:"livingremove_defense_ruledefense_rule"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:remove_defense_rule(defense_rule)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defense_rule"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/living#defenserule"},"DefenseRule"))),(0,i.kt)("h3",{id:"livingregister_status_callbackhit_flag-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"living:register_status_callback(hit_flag, function())")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flag")," a single hit flag, see ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/spell#hitprops"},"HitProps"))),(0,i.kt)("p",null,"The callback will be called when the ",(0,i.kt)("inlineCode",{parentName:"p"},"hit_flag")," is applied to the entity."),(0,i.kt)("h2",{id:"defensejudge"},"DefenseJudge"),(0,i.kt)("p",null,"Created for each attack resolution and passed through ",(0,i.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," callbacks."),(0,i.kt)("h3",{id:"judgeblock_damage"},(0,i.kt)("inlineCode",{parentName:"h3"},"judge:block_damage()")),(0,i.kt)("p",null,"Prevents damage and statuses from applying to the defending entity."),(0,i.kt)("h3",{id:"judgeblock_impact"},(0,i.kt)("inlineCode",{parentName:"h3"},"judge:block_impact()")),(0,i.kt)("h3",{id:"judgeis_damage_blocked"},(0,i.kt)("inlineCode",{parentName:"h3"},"judge:is_damage_blocked()")),(0,i.kt)("p",null,"Returns true if ",(0,i.kt)("inlineCode",{parentName:"p"},"judge:block_damage()")," was called."),(0,i.kt)("h3",{id:"judgeis_impact_blocked"},(0,i.kt)("inlineCode",{parentName:"h3"},"judge:is_impact_blocked()")),(0,i.kt)("p",null,"Returns true if ",(0,i.kt)("inlineCode",{parentName:"p"},"judge:block_impact()")," was called."),(0,i.kt)("h2",{id:"defenserule"},"DefenseRule"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/living#livingadd_defense_ruledefense_rule"},"living:add_defense_rule()")),(0,i.kt)("h3",{id:"battledefenserulenewpriority-defense_order"},(0,i.kt)("inlineCode",{parentName:"h3"},"Battle.DefenseRule.new(priority, defense_order)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"priority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefensePriority.Barrier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefensePriority.Body")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefensePriority.Action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefensePriority.Trap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefensePriority.Last")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defense_order"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefenseOrder.Always")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefenseOrder.CollisionOnly"))))),(0,i.kt)("p",null,"Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule."),(0,i.kt)("h3",{id:"defense_ruleis_replaced"},(0,i.kt)("inlineCode",{parentName:"h3"},"defense_rule:is_replaced()")),(0,i.kt)("p",null,"Returns true if a DefenseRule with the same priority replaced this rule."),(0,i.kt)("h3",{id:"defense_ruleon_replace_func--function"},(0,i.kt)("inlineCode",{parentName:"h3"},"defense_rule.on_replace_func = function()")),(0,i.kt)("p",null,"Called when a DefenseRule with the same priority replaced this rule."),(0,i.kt)("h3",{id:"defense_rulecan_block_func--functionjudge-attacker-defender"},(0,i.kt)("inlineCode",{parentName:"h3"},"defense_rule.can_block_func = function(judge, attacker, defender)")),(0,i.kt)("p",null,"If the defense order is ",(0,i.kt)("inlineCode",{parentName:"p"},"DefenseOrder.Always"),", this function will be called on every hit."),(0,i.kt)("p",null,"If the defense order is ",(0,i.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),", this function will be called after intangibility is determined to not block the attack."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"judge"),": ",(0,i.kt)("a",{parentName:"li",href:"#defensejudge"},"DefenseJudge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attacker"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity"},"Entity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defender"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity"},"Entity"))),(0,i.kt)("h3",{id:"defense_rulefilter_statuses_func--functionhit_props"},(0,i.kt)("inlineCode",{parentName:"h3"},"defense_rule.filter_statuses_func = function(hit_props)")),(0,i.kt)("p",null,"Called before applying damage and statuses to the entity."),(0,i.kt)("p",null,"Should return ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/spell#hitprops"},"HitProps")),(0,i.kt)("p",null,"The return value replaces the HitProps applied to the entity."),(0,i.kt)("h2",{id:"defensevirusbody"},"DefenseVirusBody"),(0,i.kt)("h3",{id:"battledefensevirusbodynew"},(0,i.kt)("inlineCode",{parentName:"h3"},"Battle.DefenseVirusBody.new()")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"DefensePriority.Body")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),"."),(0,i.kt)("p",null,"Filters ",(0,i.kt)("inlineCode",{parentName:"p"},"Hit.Flinch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Hit.Flash")," flags during status filtering."),(0,i.kt)("h2",{id:"intangiblerule"},"IntangibleRule"),(0,i.kt)("h3",{id:"battleintangiblerulenew"},(0,i.kt)("inlineCode",{parentName:"h3"},"Battle.IntangibleRule.new()")),(0,i.kt)("h3",{id:"intangible_ruleduration"},(0,i.kt)("inlineCode",{parentName:"h3"},"intangible_rule.duration")),(0,i.kt)("p",null,"The maximum time the rule should last for in game frames."),(0,i.kt)("p",null,"The default value is 120."),(0,i.kt)("h3",{id:"intangible_rulehit_weaknesses"},(0,i.kt)("inlineCode",{parentName:"h3"},"intangible_rule.hit_weaknesses")),(0,i.kt)("p",null,"Hit flags combined into a single value see ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/spell#hitprops"},"HitProps")),(0,i.kt)("p",null,"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"Hit.PierceInvis")),(0,i.kt)("h3",{id:"intangible_ruleelement_weaknesses"},(0,i.kt)("inlineCode",{parentName:"h3"},"intangible_rule.element_weaknesses")),(0,i.kt)("p",null,"A list of ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/spell#element"},"Elements")),(0,i.kt)("p",null,"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")),(0,i.kt)("h3",{id:"intangible_ruleon_deactivate_func--function"},(0,i.kt)("inlineCode",{parentName:"h3"},"intangible_rule.on_deactivate_func = function()")),(0,i.kt)("p",null,"Called when the duration runs out, or when the defense is pierced."))}p.isMDXComponent=!0}}]);