/*! For license information please see component---src-pages-gallery-potg-src-pages-components-summoner-profile-in-game-button-tsx-af081102a8715fa6a970.js.LICENSE.txt */
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[440,419,791,37,815],{5558:function(e,t,a){a.r(t),a.d(t,{SizeType:function(){return n}});var l=a(7294);let n;!function(e){e[e.Small=0]="Small",e[e.Large=1]="Large",e[e.Detail=2]="Detail",e[e.Ban=3]="Ban"}(n||(n={})),t.default=function(e){var{0:t,1:a}=(0,l.useState)(""),{0:r,1:c}=(0,l.useState)("");return(0,l.useEffect)((()=>{switch(e.size){case n.Large:a("cover-large"),c("image-large");break;case n.Small:a("cover-small"),c("image-small");break;case n.Detail:a("cover-detail"),c("image-detail");break;case n.Ban:a("cover-ingameBan"),c("image-ingameBan")}}),[e.size]),l.createElement("div",{className:t},l.createElement("img",{className:r,src:e.src,alt:""}))}},7936:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l,n=a(7294),r=a(5558),c=a(9976);!function(e){e[e.Red=0]="Red",e[e.Blue=1]="Blue"}(l||(l={}));const s=e=>{let t="bg-rose-500";return e.value<50?t="bg-gray-400":e.value<60?t="bg-emerald-500":e.value<65?t="bg-sky-500":e.value<70&&(t="bg-rose-500"),n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("div",{className:"text-xs text-center"},"승률 ",e.value,"%"),n.createElement("div",{className:"flex h-6 w-20 items-center"},n.createElement(c.default,{max:e.max,value:e.value,color:t})))},i=e=>n.createElement("div",{className:"flex gap-2 items-center p-2 pr-5 rounded-md "+(e.currentSummoner?"bg-gray-200":"")},n.createElement("div",{className:"flex flex-col w-14 items-center gap-1"},n.createElement("img",{className:"h-6 w-6",src:"data:image/png;base64,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",alt:""}),n.createElement("div",{className:"flex gap-0.5"},n.createElement("div",{className:"rounded-full w-2 h-2 bg-red-400"}),n.createElement("div",{className:"rounded-full w-2 h-2 bg-blue-400"}),n.createElement("div",{className:"rounded-full w-2 h-2 bg-blue-400"}),n.createElement("div",{className:"rounded-full w-2 h-2 bg-gray-400"}),n.createElement("div",{className:"rounded-full w-2 h-2 bg-gray-400"}))),n.createElement("div",{className:"flex items-center max-h-12 gap-1"},n.createElement("img",{className:"rounded-full h-12 w-12",src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Sivir.png",alt:""}),n.createElement("div",{className:"grid grid-flow-col grid-rows-2 grid-cols-2 gap-1 w-max"},n.createElement("img",{className:"h-5 w-5 rounded-md",src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/SummonerFlash.png",alt:""}),n.createElement("img",{className:"h-5 w-5 rounded-md",src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/SummonerFlash.png",alt:""}),n.createElement("img",{className:"h-5 w-5 rounded-md",src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/SummonerSnowball.png",alt:""}),n.createElement("img",{className:"h-5 w-5 rounded-md",src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/SummonerSnowball.png",alt:""}))),n.createElement("div",{className:"flex items-center gap-7"},n.createElement("div",{className:"flex flex-col gap-1 w-[130px]"},n.createElement("div",{className:"text-sm whitespace-nowrap text-ellipsis overflow-hidden"},"우월한기럭지ddadsfafadfasdfasdf"),n.createElement("div",{className:"text-[10px]"},"브론즈 1 - 100LP")),n.createElement(s,{max:100,value:66}),n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("div",{className:"text-xs text-center"},"챔피언 승률"),n.createElement("div",{className:"font-semibold h-6 w-[90px] text-center"},"56%")),n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("div",{className:"text-xs text-center"},"KDA 2.3"),n.createElement("div",{className:"font-semibold h-6 w-[90px] text-center"},1," / ",2," / ",3)))),m=e=>n.createElement("div",{className:"flex flex-col gap-2"},n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"flex items-end"},n.createElement("div",{className:"flex gap-1 items-center"},n.createElement("div",{className:"text-lg font-bold ml-2 "+(e.team===l.Blue?"text-blue-500":"text-red-500")},e.team===l.Blue?"블루팀":"레드팀")),n.createElement("div",{className:"flex flex-grow justify-end mb-1 gap-1 mr-1"},n.createElement("div",{className:"flex text-xs items-center"},"금지"),n.createElement("div",{className:""},n.createElement(r.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Sivir.png",size:r.SizeType.Ban}),n.createElement("div",{className:"relative bottom-full rounded-full bg-gradient-to-t from-gray-500 w-full h-full opacity-80"})),n.createElement("div",{className:""},n.createElement(r.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Vayne.png",size:r.SizeType.Ban}),n.createElement("div",{className:"relative bottom-full rounded-full bg-gradient-to-t from-gray-500 w-full h-full opacity-80"})),n.createElement("div",{className:""},n.createElement(r.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Annie.png",size:r.SizeType.Ban}),n.createElement("div",{className:"relative bottom-full rounded-full bg-gradient-to-t from-gray-500 w-full h-full opacity-80"})),n.createElement("div",{className:""},n.createElement(r.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Azir.png",size:r.SizeType.Ban}),n.createElement("div",{className:"relative bottom-full rounded-full bg-gradient-to-t from-gray-500 w-full h-full opacity-80"})),n.createElement("div",{className:""},n.createElement(r.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/Ezreal.png",size:r.SizeType.Ban}),n.createElement("div",{className:"relative bottom-full rounded-full bg-gradient-to-t from-gray-500 w-full h-full opacity-80"})))),n.createElement("div",{className:"w-full h-1 "+(e.team===l.Blue?"bg-blue-500":"bg-red-500")+" rounded-md"})),n.createElement(i,null),n.createElement(i,null),n.createElement(i,{currentSummoner:!0}),n.createElement(i,null),n.createElement(i,null));var u=()=>n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"flex items-center gap-2 mb-5 ml-2 text-gray-600"},n.createElement("div",{className:"text-base font-extrabold"},"소환사 협곡"),n.createElement("div",{className:"text-xs"},"솔로랭크"),n.createElement("div",{className:"flex flex-grow justify-end font-bold text-xs gap-1"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYWdlcl80NCIgZGF0YS1uYW1lPSJMYWdlciA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iR3JvdXBfMTUiIGRhdGEtbmFtZT0iR3JvdXAgMTUiPgogICAgPHBhdGggaWQ9IlBhdGhfNTEiIGRhdGEtbmFtZT0iUGF0aCA1MSIgZD0iTTE2LDBBMTYsMTYsMCwxLDAsMzIsMTYsMTYsMTYsMCwwLDAsMTYsMFptMCwyOEExMiwxMiwwLDEsMSwyOCwxNiwxMi4wMTMsMTIuMDEzLDAsMCwxLDE2LDI4WiIgZmlsbD0iIzA0MDUwNSIvPgogICAgPHBhdGggaWQ9IlBhdGhfNTIiIGRhdGEtbmFtZT0iUGF0aCA1MiIgZD0iTTIwLjAyLDE2SDE3YTEsMSwwLDAsMS0xLTFWMTEuOThBMS45NzksMS45NzksMCwwLDAsMTQuMDIsMTBoLS4wNEExLjk3OSwxLjk3OSwwLDAsMCwxMiwxMS45OHY2LjA0QTEuOTc5LDEuOTc5LDAsMCwwLDEzLjk4LDIwaDYuMDRBMS45NzksMS45NzksMCwwLDAsMjIsMTguMDJ2LS4wNEExLjk3OSwxLjk3OSwwLDAsMCwyMC4wMiwxNloiIGZpbGw9IiMwNDA1MDUiLz4KICA8L2c+Cjwvc3ZnPgo=",className:"w-4",alt:""}),n.createElement("div",null,"13:13"))),n.createElement("div",{className:"flex gap-5"},n.createElement(m,{team:l.Blue}),n.createElement(m,{team:l.Red})))},9976:function(e,t,a){a.r(t);var l=a(7294);t.default=function(e){return l.createElement("div",{className:"w-full bg-gray-300 rounded-full h-2"},l.createElement("div",{className:(e.color?e.color:"bg-red-500")+" h-2 rounded-full",style:{width:e.value<10?0===e.value?e.value:8:e.value+"%"}}))}},2194:function(e,t,a){a.r(t);var l=a(7294),n=a(4455),r=a(7936);t.default=function(e){let{isInGame:t}=e;const{setVisiblity:a,setContent:c}=(0,n.a)();return l.createElement("div",{className:"flex items-center gap-2 w-fit cursor-pointer "+(t?"":"hidden"),onClick:()=>{a(!0),c((0,r.default)())}},l.createElement("div",{className:"flex h-3 w-3"},l.createElement("div",{className:"animate-ping h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.createElement("div",{className:"absolute rounded-full h-3 w-3 bg-emerald-500"})),l.createElement("div",{className:"text-xs text-emerald-600"},"게임 중 ",">"))}},4455:function(e,t,a){a.d(t,{a:function(){return l}});const l=(0,a(270).ZP)((e=>({isView:!1,setVisiblity:t=>e((()=>({isView:t}))),content:null,setContent:t=>e((()=>({content:t})))})))},3250:function(e,t,a){var l=a(7294);var n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=l.useState,c=l.useEffect,s=l.useLayoutEffect,i=l.useDebugValue;function m(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!n(e,a)}catch(l){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var a=t(),l=r({inst:{value:a,getSnapshot:t}}),n=l[0].inst,u=l[1];return s((function(){n.value=a,n.getSnapshot=t,m(n)&&u({inst:n})}),[e,a,t]),c((function(){return m(n)&&u({inst:n}),e((function(){m(n)&&u({inst:n})}))}),[e]),i(a),a};t.useSyncExternalStore=void 0!==l.useSyncExternalStore?l.useSyncExternalStore:u},139:function(e,t,a){var l=a(7294),n=a(1688);var r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=n.useSyncExternalStore,s=l.useRef,i=l.useEffect,m=l.useMemo,u=l.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,a,l,n){var o=s(null);if(null===o.current){var d={hasValue:!1,value:null};o.current=d}else d=o.current;o=m((function(){function e(e){if(!i){if(i=!0,c=e,e=l(e),void 0!==n&&d.hasValue){var t=d.value;if(n(t,e))return s=t}return s=e}if(t=s,r(c,e))return t;var a=l(e);return void 0!==n&&n(t,a)?t:(c=e,s=a)}var c,s,i=!1,m=void 0===a?null:a;return[function(){return e(t())},null===m?void 0:function(){return e(m())}]}),[t,a,l,n]);var f=c(e,o[0],o[1]);return i((function(){d.hasValue=!0,d.value=f}),[f]),u(f),f}},1688:function(e,t,a){e.exports=a(3250)},2798:function(e,t,a){e.exports=a(139)},270:function(e,t,a){a.d(t,{ZP:function(){return i}});const l=e=>{let t;const a=new Set,l=(e,l)=>{const n="function"==typeof e?e(t):e;if(!Object.is(n,t)){const e=t;t=(null!=l?l:"object"!=typeof n)?n:Object.assign({},t,n),a.forEach((a=>a(t,e)))}},n=()=>t,r={setState:l,getState:n,subscribe:e=>(a.add(e),()=>a.delete(e)),destroy:()=>a.clear()};return t=e(l,n,r),r};var n=a(7294),r=a(2798);const{useSyncExternalStoreWithSelector:c}=r;const s=e=>{const t="function"==typeof e?(e=>e?l(e):l)(e):e,a=(e,a)=>function(e,t=e.getState,a){const l=c(e.subscribe,e.getState,e.getServerState||e.getState,t,a);return(0,n.useDebugValue)(l),l}(t,e,a);return Object.assign(a,t),a},i=e=>e?s(e):s}}]);
//# sourceMappingURL=component---src-pages-gallery-potg-src-pages-components-summoner-profile-in-game-button-tsx-af081102a8715fa6a970.js.map