"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[739,909,37,605,934,517],{5943:function(e,l,t){t.r(l);var a=t(7294);l.default=function(e){let{title:l}=e;return a.createElement("div",{className:"px-2 py-1 bg-slate-700 rounded-2xl text-[10px] w-fit text-gray-300"},l)}},8081:function(e,l,t){t.r(l);var a=t(7294),n=t(6698);const i=e=>{var l,t,i,d;return a.createElement("div",{className:"flex-grow"},null===(l=e.detailData.match)||void 0===l||null===(t=l.teams)||void 0===t||null===(i=t.at(e.index))||void 0===i||null===(d=i.participants)||void 0===d?void 0:d.map((l=>a.createElement(n.default,{key:"DetailTeamView_"+l.puuid,summonerName:l.summonerName,championLevel:l.champLevel,championName:l.championName,currentSummonerPuuid:e.detailData.currentSummonerPuuid,score:{kills:l.kills,deaths:l.deaths,assists:l.assists,wardPlace:l.wardsPlaced,totalMinionKills:l.totalMinionsKilled,neutralMinionsKills:l.neutralMinionsKilled},summonerPuuid:l.puuid,items:{item0:l.item0,item1:l.item1,item2:l.item2,item3:l.item3,item4:l.item4,item5:l.item5,item6:l.item6},position:l.individualPosition,summonerTier:1,summonerRank:1}))))},d=e=>{let{isWin:l}=e;return a.createElement("div",{className:"ml-2 font-bold text-lg "+(l?"text-blue-500":"text-red-500")+" "},l?"승리":"패배")};l.default=e=>{var l,t,n;const s=null===(l=e.match)||void 0===l?void 0:l.teams;return a.createElement("div",{className:"flex flex-col"},a.createElement("div",{className:"flex px-2"},a.createElement("div",{className:"flex flex-col flex-grow"},a.createElement(d,{isWin:null==s||null===(t=s.at(0))||void 0===t?void 0:t.win})),a.createElement("div",{className:"flex-grow"},a.createElement(d,{isWin:null==s||null===(n=s.at(1))||void 0===n?void 0:n.win}))),a.createElement("div",{className:"flex gap-2 p-2"},a.createElement(i,{index:0,detailData:e}),a.createElement(i,{index:1,detailData:e})))}},3315:function(e,l,t){t.r(l);t(9244);var a=t(7294),n=t(5943),i=t(6058),d=t(5558),s=t(3889),r=t(8081),m=t(3387),c=t(7896),o=t(7808);const u={450:"칼바람",420:"솔로랭크",430:"일반",440:"자유랭크",840:"초급 봇",850:"중급 봇"};l.default=function(e){var l,t,v,f,g,x,p;const E=(0,c.useParams)(),{0:h,1:N}=(0,a.useState)(!1),w=null===(l=e.matchId)||void 0===l||null===(t=l.teams)||void 0===t?void 0:t.flatMap((e=>{var l;return null===(l=e.participants)||void 0===l?void 0:l.find((e=>e.summonerName===E.name))})).filter((e=>null!=e))[0],b=null===(v=e.matchId)||void 0===v||null===(f=v.teams)||void 0===f?void 0:f.find((e=>e.teamId===(null==w?void 0:w.teamId))),y=new Date(1e3*(null===(g=e.matchId)||void 0===g?void 0:g.gameDuration)),k=null==b?void 0:b.win;return a.createElement("div",{className:(k?"bg-blue-200 border-2 border-blue-400":"bg-red-200 border-2 border-red-400")+" rounded-md min-h-[120px]"},a.createElement("div",{className:"flex flex-grow gap-10 text-center items-center py-1"},a.createElement("div",{className:"ml-5 flex flex-col gap-3 text-gray-700 w-16"},a.createElement("div",{className:"flex flex-col gap-1"},a.createElement("div",{className:"font-bold text-sm"},u[null===(x=e.matchId)||void 0===x?void 0:x.queueId]),a.createElement("div",{className:"text-xs"},y.getMinutes(),"분 ",y.getSeconds(),"초")),a.createElement("div",null,a.createElement("div",{className:"font-bold text-sm"},k?"승리":"패배"))),a.createElement("div",{className:"flex gap-3 items-center"},a.createElement("div",{className:"flex gap-2"},a.createElement(d.default,{size:d.SizeType.Large,src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/"+(null==w?void 0:w.championName)+".png"}),a.createElement(i.default,{spell1:null==w?void 0:w.summoner1Id,spell2:null==w?void 0:w.summoner2Id})),a.createElement("div",{className:"grid grid-cols-4 gap-1"},a.createElement(m.default,{user:w}))),a.createElement("div",{className:"flex flex-col gap-2"},a.createElement(o.default,{user:w,match:e.matchId}),a.createElement("div",{className:"flex gap-1 justify-center"},null==w||null===(p=w.badges)||void 0===p?void 0:p.map((l=>a.createElement(n.default,{key:e.matchId+"/"+l.name,title:l.name||""}))))),a.createElement("div",{className:"flex gap-5"},a.createElement(s.default,{match:e.matchId,name:null==w?void 0:w.summonerName,puuid:null==w?void 0:w.puuid}))),a.createElement("div",{className:"flex text-xs mb-2 mt-1 mx-2 justify-center p-1 rounded-md "+(k?"bg-blue-300":"bg-red-300")+" cursor-pointer",onClick:()=>{N(!h)}},a.createElement("div",{className:"select-none"},"자세히")),a.createElement("div",{className:(h?"visible":"hidden")+" p-2 m-2 bg-gray-100 rounded-md"},a.createElement(r.default,{match:e.matchId,currentSummonerPuuid:null==w?void 0:w.puuid})))}},7808:function(e,l,t){t.r(l);var a=t(7294);function n(){return a.createElement("div",{className:"text-xs font-semibold self-end mb-[4px]"},"등")}l.default=function(e){var l,t,i,d,s,r,m,c,o,u,v,f,g,x,p,E,h,N,w;const{0:b,1:y}=(0,a.useState)(!1),k=null===(l=e.match)||void 0===l||null===(t=l.teams)||void 0===t?void 0:t.find((l=>{var t;return l.teamId===(null===(t=e.user)||void 0===t?void 0:t.teamId)}));return a.createElement("div",{className:"flex justify-center cursor-pointer select-none w-72",onClick:()=>{y(!b)}},a.createElement("table",{className:"text-gray-600"},a.createElement("thead",null,a.createElement("tr",{className:"text-xs"},a.createElement("th",{className:"w-16"},"킬"),a.createElement("th",{className:"w-16 text-red-600"},"데스"),a.createElement("th",{className:"w-16"},"어시스트"),a.createElement("th",{className:"w-16"},"UTILITY"===(null===(i=e.user)||void 0===i?void 0:i.individualPosition)?"와드":"CS"))),a.createElement("tbody",null,a.createElement("tr",{className:"text-xl font-extrabold"},a.createElement("td",null,a.createElement("div",{className:"flex gap-1 justify-center"},(null===(d=e.user)||void 0===d?void 0:d.kills)||0,b&&n())),a.createElement("td",{className:"text-red-600"},a.createElement("div",{className:"flex gap-1 justify-center"},(null===(s=e.user)||void 0===s?void 0:s.deaths)||0,b&&n())),a.createElement("td",null,a.createElement("div",{className:"flex gap-1 justify-center"},(null===(r=e.user)||void 0===r?void 0:r.assists)||0,b&&n())),a.createElement("td",null,a.createElement("div",{className:"flex gap-1 justify-center"},"UTILITY"===(null===(m=e.user)||void 0===m?void 0:m.individualPosition)?e.user.wardsPlaced:(null===(c=e.user)||void 0===c?void 0:c.totalMinionsKilled)+(null===(o=e.user)||void 0===o?void 0:o.neutralMinionsKilled)||0,b&&n()))),a.createElement("tr",{className:"text-xs"},a.createElement("td",{colSpan:3},a.createElement("div",{className:"flex gap-3 justify-center"},a.createElement("div",null,"평점 "+(((null===(u=e.user)||void 0===u?void 0:u.kills)+(null===(v=e.user)||void 0===v?void 0:v.assists))/(null===(f=e.user)||void 0===f?void 0:f.deaths)).toFixed(2)),a.createElement("div",null,"킬관여\n                  "+Math.round(((null===(g=e.user)||void 0===g?void 0:g.kills)+(null===(x=e.user)||void 0===x?void 0:x.assists))/(null==k||null===(p=k.objectives)||void 0===p||null===(E=p.champion)||void 0===E?void 0:E.kills)*100)+"%"))),a.createElement("td",null,(((null===(h=e.user)||void 0===h?void 0:h.totalMinionsKilled)+(null===(N=e.user)||void 0===N?void 0:N.neutralMinionsKilled))/new Date(1e3*(null===(w=e.match)||void 0===w?void 0:w.gameDuration)).getMinutes()).toFixed(2),"/분")))))}},3387:function(e,l,t){t.r(l);var a=t(7294);l.default=function(e){let{user:l}=e;const t=[null==l?void 0:l.item0,null==l?void 0:l.item1,null==l?void 0:l.item2,null==l?void 0:l.item6,null==l?void 0:l.item3,null==l?void 0:l.item4,null==l?void 0:l.item5];return a.createElement(a.Fragment,null,t.map(((e,l)=>e>0?a.createElement("img",{key:l,className:"bg-gray-200 rounded-md overflow-hidden",style:{width:"30px",height:"30px"},src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/"+e+".png",alt:"item"}):a.createElement("div",{key:l,style:{width:"30px",height:"30px"},className:"bg-gray-200 rounded-md overflow-hidden"}))))}},6058:function(e,l,t){t.r(l);var a=t(7294);l.default=function(e){return a.createElement("div",{className:"flex flex-col gap-1 justify-center"},a.createElement("div",{className:"bg-gray-200 w-[30px] h-[30px] rounded-md overflow-hidden"},a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/"+e.spell1+".png",alt:"item"})),a.createElement("div",{className:"bg-gray-200 w-[30px] h-[30px] rounded-md overflow-hidden"},a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/"+e.spell2+".png",alt:"item"})))}},9976:function(e,l,t){t.r(l);var a=t(7294);l.default=function(e){return a.createElement("div",{className:"w-full bg-gray-300 rounded-full h-2"},a.createElement("div",{className:(e.color?e.color:"bg-red-500")+" h-2 rounded-full",style:{width:e.value<10?0===e.value?e.value:8:e.value+"%"}}))}},6698:function(e,l,t){t.r(l);var a=t(7294),n=t(3923),i=t(5558),d=t(9976);l.default=e=>{var l,t,s,r,m,c,o,u,v,f,g,x,p;const E=e.currentSummonerPuuid===e.summonerPuuid,h=[null==e||null===(l=e.items)||void 0===l?void 0:l.item0,null==e||null===(t=e.items)||void 0===t?void 0:t.item1,null==e||null===(s=e.items)||void 0===s?void 0:s.item2,null==e||null===(r=e.items)||void 0===r?void 0:r.item6,null==e||null===(m=e.items)||void 0===m?void 0:m.item3,null==e||null===(c=e.items)||void 0===c?void 0:c.item4,null==e||null===(o=e.items)||void 0===o?void 0:o.item5];return a.createElement("div",{className:"flex gap-2 text-gray-700 p-2 "+(E?"rounded-lg bg-gray-200":"")},a.createElement("div",{className:"Detail--Profile gap-2 gap-x-3 grid grid-flow-col items-center"},a.createElement("div",{className:"flex flex-col items-center"},a.createElement(i.default,{src:"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/"+e.championName+".png",size:i.SizeType.Detail})),a.createElement("div",{className:"text-[10px] font-bold text-center"},"LV. ",e.championLevel),a.createElement("div",{className:"text-sm "+(E?"font-bold":"")+" w-24 text-ellipsis overflow-hidden whitespace-nowrap"},e.summonerName),a.createElement("div",{className:"text-[10px] w-24"},(0,n.Z)(e.summonerTier,e.summonerRank))),a.createElement("div",{className:"flex items-center gap-7"},a.createElement("div",{className:"flex flex-col gap-1"},a.createElement("div",{className:"text-xs text-center"},"KDA"),a.createElement("div",{className:"font-semibold h-6 w-[90px] text-center"},null==e||null===(u=e.score)||void 0===u?void 0:u.kills," / ",null==e||null===(v=e.score)||void 0===v?void 0:v.deaths," /"," ",null==e||null===(f=e.score)||void 0===f?void 0:f.assists)),a.createElement("div",{className:"flex flex-col gap-1 w-7 items-center"},a.createElement("div",{className:"text-xs text-center"},"UTILITY"===e.position?"와드":"CS"),a.createElement("div",{className:"font-semibold h-6"},"UTILITY"===e.position?null===(g=e.score)||void 0===g?void 0:g.wardPlace:(null===(x=e.score)||void 0===x?void 0:x.totalMinionKills)+(null===(p=e.score)||void 0===p?void 0:p.neutralMinionsKills))),a.createElement("div",{className:"flex flex-col gap-1"},a.createElement("div",{className:"text-xs text-center"},"피해"),a.createElement("div",{className:"flex w-14 h-6 items-center"},a.createElement(d.default,{max:100,value:25}))),a.createElement("div",{className:"grid grid-flow-row grid-cols-4 grid-rows-2 gap-1"},h.map(((e,l)=>e>0?a.createElement("img",{key:l,style:{width:"24px",height:"24px"},className:"bg-gray-200 rounded-md overflow-hidden",src:"http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/"+e+".png",alt:"item"}):a.createElement("div",{key:l,style:{width:"24px",height:"24px"},className:"bg-gray-300 rounded-md overflow-hidden"}))))))}},3923:function(e,l,t){function a(e,l){var t="-",a="";switch(e){case 0:t="아이언";break;case 1:t="브론즈";break;case 2:t="실버";break;case 3:t="골드";break;case 4:t="플래티넘";break;case 5:t="다이아몬드";break;case 6:t="마스터";break;case 7:t="그랜드마스터";break;case 8:t="챌린저"}switch(l){case 1:switch(a="1",e){case 6:case 7:case 8:a=""}break;case 2:case 3:case 4:a=l.toString()}return t+" "+a}t.d(l,{Z:function(){return a}})}}]);
//# sourceMappingURL=953b1388a30df37810f3b62b14e5633cf3e9d711-d90c33c877ea13eef00c.js.map