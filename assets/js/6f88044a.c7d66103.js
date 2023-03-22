"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[183],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>j});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},_="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),_=l(i),p=o,j=_["".concat(c,".").concat(p)]||_[p]||b[p]||n;return i?a.createElement(j,r(r({ref:t},s),{},{components:i})):a.createElement(j,r({ref:t},s))}));function j(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[_]="string"==typeof e?e:o,r[1]=d;for(var l=2;l<n;l++)r[l]=i[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2730:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var a=i(7462),o=(i(7294),i(3905));const n={},r="Objects",d={unversionedId:"server/lua-api/objects",id:"server/lua-api/objects",title:"Objects",description:"Positions and sizes are in tile space. To get the center of a tile add 0.5",source:"@site/docs/02-server/04-lua-api/05-objects.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/objects",permalink:"/documentation-website/server/lua-api/objects",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Areas",permalink:"/documentation-website/server/lua-api/areas"},next:{title:"Widgets",permalink:"/documentation-website/server/lua-api/widgets"}},c={},l=[{value:"<code>Net.list_objects(area_id)</code>",id:"netlist_objectsarea_id",level:3},{value:"<code>Net.get_object_by_id(area_id, object_id)</code>",id:"netget_object_by_idarea_id-object_id",level:3},{value:"<code>Net.get_object_by_name(area_id, name)</code>",id:"netget_object_by_namearea_id-name",level:3},{value:"<code>Net.create_object(area_id, { name?, type?, visible?, x?, y?, z?, width?, height?, rotation?, data, custom_properties? })</code>",id:"netcreate_objectarea_id--name-type-visible-x-y-z-width-height-rotation-data-custom_properties-",level:3},{value:"<code>Net.remove_object(area_id, object_id)</code>",id:"netremove_objectarea_id-object_id",level:3},{value:"<code>Net.set_object_name(area_id, object_id, name)</code>",id:"netset_object_namearea_id-object_id-name",level:3},{value:"<code>Net.set_object_class(area_id, object_id, class)</code>",id:"netset_object_classarea_id-object_id-class",level:3},{value:"<code>Net.set_object_type(area_id, object_id, type)</code>",id:"netset_object_typearea_id-object_id-type",level:3},{value:"<code>Net.set_object_custom_property(area_id, object_id, name, value)</code>",id:"netset_object_custom_propertyarea_id-object_id-name-value",level:3},{value:"<code>Net.resize_object(area_id, object_id, width, height)</code>",id:"netresize_objectarea_id-object_id-width-height",level:3},{value:"<code>Net.set_object_rotation(area_id, object_id, rotation)</code>",id:"netset_object_rotationarea_id-object_id-rotation",level:3},{value:"<code>Net.set_object_visibility(area_id, object_id, visibility)</code>",id:"netset_object_visibilityarea_id-object_id-visibility",level:3},{value:"<code>Net.move_object(area_id, object_id, x, y, layer)</code>",id:"netmove_objectarea_id-object_id-x-y-layer",level:3},{value:"<code>Net.set_object_data(area_id, object_id, data)</code>",id:"netset_object_dataarea_id-object_id-data",level:3}],s={toc:l},_="wrapper";function b(e){let{components:t,...i}=e;return(0,o.kt)(_,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"objects"},"Objects"),(0,o.kt)("p",null,"Positions and sizes are in tile space. To get the center of a tile add ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5")),(0,o.kt)("h3",{id:"netlist_objectsarea_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.list_objects(area_id)")),(0,o.kt)("p",null,"Returns a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"object_id"),"s."),(0,o.kt)("h3",{id:"netget_object_by_idarea_id-object_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.get_object_by_id(area_id, object_id)")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"{ id, name, class, type, visible, x, y, z, width, height, rotation, data, custom_properties }?")),(0,o.kt)("h3",{id:"netget_object_by_namearea_id-name"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.get_object_by_name(area_id, name)")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"{ id, name, class, visible, x, y, z, width, height, rotation, data, custom_properties }?")),(0,o.kt)("h3",{id:"netcreate_objectarea_id--name-type-visible-x-y-z-width-height-rotation-data-custom_properties-"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.create_object(area_id, { name?, type?, visible?, x?, y?, z?, width?, height?, rotation?, data, custom_properties? })")),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"object_id")),(0,o.kt)("h3",{id:"netremove_objectarea_id-object_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.remove_object(area_id, object_id)")),(0,o.kt)("p",null,"Removes an object, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netset_object_namearea_id-object_id-name"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_name(area_id, object_id, name)")),(0,o.kt)("p",null,"Renames an object."),(0,o.kt)("h3",{id:"netset_object_classarea_id-object_id-class"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_class(area_id, object_id, class)")),(0,o.kt)("p",null,"Changes the object's class, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netset_object_typearea_id-object_id-type"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_type(area_id, object_id, type)")),(0,o.kt)("p",null,"Deprecated. Use set_object_class instead."),(0,o.kt)("h3",{id:"netset_object_custom_propertyarea_id-object_id-name-value"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_custom_property(area_id, object_id, name, value)")),(0,o.kt)("p",null,"Modifies an object's custom property, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netresize_objectarea_id-object_id-width-height"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.resize_object(area_id, object_id, width, height)")),(0,o.kt)("p",null,"Resizes the object, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netset_object_rotationarea_id-object_id-rotation"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_rotation(area_id, object_id, rotation)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rotation")," is in degrees, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netset_object_visibilityarea_id-object_id-visibility"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_visibility(area_id, object_id, visibility)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"visibility")," is a bool, the object will be invisible if set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netmove_objectarea_id-object_id-x-y-layer"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.move_object(area_id, object_id, x, y, layer)")),(0,o.kt)("p",null,"Moves the object, clients will be updated at the end of the tick."),(0,o.kt)("h3",{id:"netset_object_dataarea_id-object_id-data"},(0,o.kt)("inlineCode",{parentName:"h3"},"Net.set_object_data(area_id, object_id, data)")),(0,o.kt)("p",null,"Allows for the type and shape of the object to be adjusted. Clients will be updated at the end of the tick."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- possible values for data:\n{\n  type: "point" | "rect" | "ellipse"\n}\n\n{\n  type: "polygon" | "polyline"\n  points: { x, y }[],\n}\n\n{\n  type: "tile",\n  gid: number,\n  flipped_horizontally: bool?,\n  flipped_vertically: bool?,\n  rotated?, -- always false\n}\n')))}b.isMDXComponent=!0}}]);