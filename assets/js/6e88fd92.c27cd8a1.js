"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2744:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(7462),i=(a(7294),a(3905));const o={},l="Packages",r={unversionedId:"client/packages",id:"client/packages",title:"Packages",description:"Augments",source:"@site/docs/01-client/01-packages.md",sourceDirName:"01-client",slug:"/client/packages",permalink:"/documentation-website/client/packages",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",next:{title:"Engine",permalink:"/documentation-website/client/lua-api/engine"}},s={},c=[{value:"Augments",id:"augments",level:2},{value:"Battles",id:"battles",level:2},{value:"Characters",id:"characters",level:2},{value:"Cards",id:"cards",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Players",id:"players",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,i.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packages"},"Packages"),(0,i.kt)("h2",{id:"augments"},"Augments"),(0,i.kt)("p",null,"Expects a package.toml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\ncategory = "augment" # must match\nid = "dev.konstinople.augment.Attack1.bn6" # must be unique\nname = "Attack+1"\ndescription = "MegaBstr\\nAttck +1"\nhealth_boost = 0 # optional\nattack_boost = 1 # optional\nrapid_boost = 0 # optional\ncharge_boost = 0 # optional\nmega_boost = 0 # optional\ngiga_boost = 0 # optional\n# list of colors, case insensitive\n# valid colors: "red" | "green" | "blue" | "pink" | "yellow" | "white"\ncolors = ["pink", "red", "blue"]\nflat = false # optional, defaults to false\n# list of lists, 5x5, filled with 0 or 1s to represent the shape\nshape = [\n  [0, 0, 0, 0, 0]\n  [0, 0, 1, 0, 0]\n  [0, 0, 1, 0, 0]\n  [0, 0, 0, 0, 0]\n  [0, 0, 0, 0, 0]\n]\n# list of package ids\n# used when two augments of the same color touch on a grid\n# or when an augment on a grid is out of bounds\n# any package ids here must also be marked as a dependency\nbyproducts = []\n\n# this section is optional, see the Battle section for an example\n[defines]\ncharacters = []\n\n# this section is optional\n[dependencies]\naugments = [] # optional, list of package ids\nbattles = [] # optional, list of package ids\ncards = [] # optional, list of package ids, must also depend on defining package\ncharacters = [] # optional, list of package ids\nlibraries = [] # optional, list of package ids\n')),(0,i.kt)("p",null,"Expects an entry.lua file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client/lua-api/player#augment"},"Augment")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function augment_init(augment)\nend\n")),(0,i.kt)("h2",{id:"battles"},"Battles"),(0,i.kt)("p",null,"Expects a package.toml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\ncategory = "battle" # must match\nid = "com.discord.Konstinople#7692.cactikil" # must be unique\nname = "Cactikil"\ndescription = \'Cactikil, known as "Sabotekoron" in Japan, is a cactus\'\npreview_texture_path = "preview.png"\n\n# this section is optional\n[defines]\ncharacters = [\n  { id = "com.discord.Konstinople#7692.enemy.cactikil", path = "cactikil" },\n  { id = "com.discord.Konstinople#7692.enemy.cactroll", path = "cactroll" },\n  { id = "com.discord.Konstinople#7692.enemy.cacter", path = "cacter" },\n]\n\n# this section is optional\n[dependencies]\naugments = [] # optional, list of package ids\nbattles = [] # optional, list of package ids\ncards = [] # optional, list of package ids, must also depend on defining package\ncharacters = [] # optional, list of package ids\nlibraries = [] # optional, list of package ids\n')),(0,i.kt)("p",null,"Expects an entry.lua file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client/lua-api/battle"},"Battle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function battle_init(battle)\nend\n")),(0,i.kt)("h2",{id:"characters"},"Characters"),(0,i.kt)("p",null,"Expects an entry.lua file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client/lua-api/character"},"Character")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function character_init(character)\nend\n")),(0,i.kt)("h2",{id:"cards"},"Cards"),(0,i.kt)("p",null,"Expects a package.toml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\ncategory = "card" # must match\nid = "com.discord.Konstinople#7692.card.AreaEater" # must be unique\nname = "AreaEatr"\nicon_texture_path = "icon.png"\npreview_texture_path = "preview.png"\ndescription = "Beast steals panels!" # optional, used in preview\nlong_description = "Beast steals panels!" # optional, used in battle\ndamage = 100 # optional\n# "none" | "fire" | "aqua" | "elec" | "wood" | "sword" |\n# "wind" | "cursor" | "summon" | "plus" | "break"\nelement = "sword" # optional\nsecondary_element = "none" # optional\ncodes = [\'A\', \'O\', \'X\']\ncard_class = "giga" # optional, "standard" | "mega"| "giga" | "dark"\nlimit = 3 # optional, defaults to 5\n# optional, case insensitive\n# valid values:\n# "retainintangible" | "freeze" | "pierceinvis" | "flinch" | "shake" |\n# "paralyze" | "flash" | "pierceguard" | "impact" | "drag" | "bubble" |\n# "nocounter" | "root" | "blind" | "confuse" | "pierceground"\nhit_flags = ["impact", "flinch", "flash"]\ncan_boost = true # optional\ntime_freeze = true # optional\nskip_time_freeze_intro = false # optional\nmeta_classes = [] # optional, list of strings, custom\n\n# this section is optional, see the Battle section for an example\n[defines]\ncharacters = []\n\n# this section is optional\n[dependencies]\naugments = [] # optional, list of package ids\nbattles = [] # optional, list of package ids\ncards = [] # optional, list of package ids, must also depend on defining package\ncharacters = [] # optional, list of package ids\nlibraries = [] # optional, list of package ids\n')),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)("p",null,"Expects a package.toml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\ncategory = "library" # must match\nid = "com.example.library" # must be unique\nname = "Example Library"\ndescription = "Example Library"\n\n# this section is optional, see the Battle section for an example\n[defines]\ncharacters = []\n\n# this section is optional\n[dependencies]\naugments = [] # optional, list of package ids\nbattles = [] # optional, list of package ids\ncards = [] # optional, list of package ids, must also depend on defining package\ncharacters = [] # optional, list of package ids\nlibraries = [] # optional, list of package ids\n')),(0,i.kt)("p",null,"Expects an entry.lua file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Can contain anything\n-- The return value will be passed to lua files using require()\nreturn "hello"\n')),(0,i.kt)("h2",{id:"players"},"Players"),(0,i.kt)("p",null,"Expects a package.toml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\ncategory = "player" # must match\nid = "com.discord.Konstinople#7692.player.Man" # must be unique\nname = "Man"\ndescription = "Before he was Mega, he was Man"\nhealth = 1000\nicon_texture_path = "icon.png"\npreview_texture_path = "preview.png"\noverworld_animation_path = "overworld.animation"\noverworld_texture_path = "overworld.png"\nmugshot_texture_path = "mug.png"\nmugshot_animation_path = "mug.animation"\nemotions_texture_path = "" # optional\n\n# this section is optional, see the Battle section for an example\n[defines]\ncharacters = []\n\n# this section is optional\n[dependencies]\naugments = [] # optional, list of package ids\nbattles = [] # optional, list of package ids\ncards = [] # optional, list of package ids, must also depend on defining package\ncharacters = [] # optional, list of package ids\nlibraries = [] # optional, list of package ids\n')),(0,i.kt)("p",null,"Expects an entry.lua file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/client/lua-api/player"},"Player")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function player_init(player)\nend\n")))}d.isMDXComponent=!0}}]);