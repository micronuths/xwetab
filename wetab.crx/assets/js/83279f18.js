"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[3979,3056],{22854:(e,t,n)=>{n.d(t,{C:()=>o});var a=n(29445),i=n(57268);const o=(e,t,n)=>{const o=(0,a.iH)(e);t.onChangeState=e=>{o.value={...e}};const l=(0,i.Fl)((()=>n?n[o.value.size]:null));return{propsState:o,HomeComp:l}}},13270:(e,t,n)=>{n.r(t),n.d(t,{mountHome:()=>d,widgetApp:()=>p});var a=n(29445),i=n(68398),o=n(57268),l=n(87800);const s=(0,o.aZ)({__name:"widget-play-home",props:{size:null,id:null},setup(e){const t=e,{HomeComp:n}=(0,l.g8)(t),{clickWidget:i}=(0,l.dd)();return(e,t)=>((0,o.wg)(),(0,o.iD)("section",{class:"contents cursor-pointer",onClick:t[0]||(t[0]=function(){return(0,a.SU)(i)&&(0,a.SU)(i)(...arguments)})},[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,a.SU)(n))))]))}});var r=n(96755),c=n(75008);const p=(0,a.iH)(null),d=(e,t)=>{const n=(0,i.createApp)(s,t);return(0,c.f)(n),p.value=n,n.use(r.M),n.mount(e),p.value}},53056:(e,t,n)=>{n.r(t),n.d(t,{usePlayStore:()=>l});var a=n(84522),i=n(10435);const o=[{name:"积木切切乐",desc:"通过滑动鼠标切碎积木块",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g1.png",url:"/games/cut/index_.html",homeBgStyle:"linear-gradient(135deg, #8136A9 0%, #3A2885 100%)",playBtnBgStyle:"linear-gradient(135deg, #8B4DBA 0%, #542FB9 100%)",barBgColor:"#2A3A4A",iconShadow:"0px 32px 32px -8px rgba(17,23,41,0.6)"},{name:"小飞机",desc:"鼠标控制飞机避开障碍",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g5.png",url:"/games/aircraft/index_.html",homeBgStyle:"linear-gradient(135deg, #998C7E 0%, #5E4848 100%)",playBtnBgStyle:"linear-gradient(135deg, #A39185 0%, #7F6259 100%)",barBgColor:"#4E1B20",iconShadow:"0px 32px 32px -8px rgba(83,57,38, 0.6)"},{name:"2048·军旗版",desc:"经典的拼图游戏",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g6.png",url:"/games/2048/index_.html",homeBgStyle:"linear-gradient(135deg, #BAAFA3 0%, #7D6D6D 100%)",playBtnBgStyle:"linear-gradient(135deg, #D0BDAE 0%, #AB9388 100%)",barBgColor:"#A18B75",iconShadow:"0px 32px 32px -8px rgba(86,74,62,0.6)"},{name:"恐龙快跑",desc:"Chrome 浏览器彩蛋小游戏 dino",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g4.png",url:"/games/dino/index_.html",homeBgStyle:"linear-gradient(135deg, #A1A1A1 0%, #787878 100%)",playBtnBgStyle:"linear-gradient(135deg, #A6A6A6 0%, #999999 100%)",barBgColor:"#232323",iconShadow:"0px 32px 32px -8px rgba(82,82,82,0.6)"},{name:"扫雷",desc:"Windows经典小游戏扫雷",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g2.png",url:"/games/minesweeper/index_.html",homeBgStyle:"linear-gradient(135deg, #5651B9 0%, #3E3589 100%)",playBtnBgStyle:"linear-gradient(135deg, #5E64C6 0%, #5B4BB4 100%)",barBgColor:"#171617",iconShadow:"0px 32px 32px -8px rgba(48,31,74,0.6)"},{name:"地狱闯关",desc:"简单的闯关小游戏",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g3.png",url:"/games/ori/index_.html",homeBgStyle:"linear-gradient(135deg, #5D5F6A 0%, #3B3A3A 100%)",playBtnBgStyle:"linear-gradient(135deg, #848484 0%, #595959 100%)",barBgColor:"#000000",iconShadow:"0px 32px 32px -8px rgba(29,29,29,0.6)"},{name:"3D魔方",desc:"通过鼠标操作的3D魔方小游戏",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g7.png",url:"/games/cube/index_.html",homeBgStyle:"linear-gradient(135deg, #5B54AE 0%, #423B8B 100%)",playBtnBgStyle:"linear-gradient(135deg, #6D65C4 0%, #6454C5 100%)",barBgColor:"#070E17",iconShadow:"0px 32px 32px -8px rgba(47,43,92,0.60)"},{name:"网上冲浪",desc:"让我们网上冲浪吧",icon:GlobalGetApi+"https://static.wetab.link/hitab/play-widget/g8.png",url:"/games/surf/index_.html",homeBgStyle:"linear-gradient(135deg, #1A859E 0%, #1B5BA6 100%)",playBtnBgStyle:"linear-gradient(135deg, #2590D8 0%, #2388C9 100%)",barBgColor:"#1B86A3",iconShadow:"0px 32px 32px -8px rgba(28,94,146,0.6)"}],l=(0,i.Q_)(a.BU.play,{state:()=>({modalShow:!1,gameList:o,homeGameItem:o[0],selectedGame:void 0,panelStatus:1}),getters:{homeGameIndex(){return this.gameList.findIndex((e=>e.name===this.homeGameItem.name))}},actions:{setModal(e){this.modalShow=e,e||(this.selectedGame=void 0,this.panelStatus=1)},setSelectedGame(e){this.selectedGame=e},setPanelStatus(e){1===e&&(this.selectedGame=void 0),this.panelStatus=e},preGameItem(){const e=this.homeGameIndex;if(0===e)return;const t=this.gameList[e-1];this.homeGameItem=t},nextGameItem(){const e=this.homeGameIndex;if(e===this.gameList.length-1)return;const t=this.gameList[e+1];this.homeGameItem=t}}})},87800:(e,t,n)=>{n.d(t,{DS:()=>z,dd:()=>j,UV:()=>E,g8:()=>M});var a=n(94223),i=n(57268),o=n(29445),l=n(94209),s=n(68398),r=n(77362);const c={class:"relative flex h-full flex-col items-center justify-end"},p={class:"icon-shadow absolute top-[0] z-10 h-[132px] w-[132px] select-none rounded-[50%] icon-m:h-[116px] icon-m:w-[116px] icon-s:h-[100px] icon-s:w-[100px]"},d=["src"],m={class:"play-bg play-shadow relative flex h-[172px] w-full flex-col justify-end overflow-hidden rounded-[var(--icon-home-radius)] icon-m:h-[150px] icon-s:h-[132px]"},x=(e=>((0,i.dD)("data-v-4a450451"),e=e(),(0,i.Cn)(),e))((()=>(0,i._)("div",{class:"insert-shadow pointer-events-none absolute inset-0 rounded-[var(--icon-home-radius)]"},null,-1))),g={class:"flex w-full items-center justify-between px-[16px] icon-m:px-[12px] icon-s:px-[8px]"},h={class:"font-ali-65 text-[16px] text-color-white"},u={class:"mt-[12px] font-ali-55 text-[12px] text-[#8E8E94] icon-m:mt-[8px] icon-s:mt-[8px]"},w=(0,i.aZ)({__name:"play-medium",setup(e){const{homeGameItem:t,homeGameIndex:n,gameList:a,onClickSwitchGame:w,onClickPlay:y}=z();return(e,f)=>((0,i.wg)(),(0,i.iD)("section",c,[(0,i._)("div",p,[(0,i._)("img",{draggable:"false",src:(0,o.SU)(t).icon,class:"h-full w-full select-none",alt:"icon"},null,8,d)]),(0,i._)("div",m,[x,(0,i._)("div",g,[(0,i._)("div",{class:(0,l.normalizeClass)([[0===(0,o.SU)(n)?"bg-opacity-[0.1] text-color-t3":"cursor-pointer bg-opacity-10 text-color-white hover:bg-opacity-20"],"expand-click flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-color-white transition-colors"]),onClick:f[0]||(f[0]=(0,s.withModifiers)((e=>(0,o.SU)(w)("pre")),["stop"]))},[(0,i.Wm)(r.Z,{class:"rotate-180"})],2),(0,i._)("div",{class:(0,l.normalizeClass)([[(0,o.SU)(n)===(0,o.SU)(a).length-1?"bg-opacity-[0.1] text-color-t3":"cursor-pointer bg-opacity-10 text-color-white hover:bg-opacity-20"],"expand-click flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-color-white transition-colors"]),onClick:f[1]||(f[1]=(0,s.withModifiers)((e=>(0,o.SU)(w)("next")),["stop"]))},[(0,i.Wm)(r.Z)],2)]),(0,i._)("div",{class:"desc-bg flex h-[75px] w-full flex-col items-center pt-[14px] leading-none icon-m:h-[63px] icon-s:h-[58px]",onClick:f[2]||(f[2]=e=>(0,o.SU)(y)((0,o.SU)(t)))},[(0,i._)("div",h,(0,l.toDisplayString)((0,o.SU)(t).name),1),(0,i._)("p",u,(0,l.toDisplayString)((0,o.SU)(t).desc),1)])])]))}});var y=n(76911);const f=(0,y.Z)(w,[["__scopeId","data-v-4a450451"]]),S={class:"relative flex h-[188px] flex-col items-center justify-end icon-m:h-[164px] icon-s:h-[148px]"},v=["src"],b={class:"flex flex-col items-center pt-[70px] leading-none icon-m:pt-[58px] icon-s:pt-[56px]"},B={class:"font-ali-55 text-[14px] text-color-white text-opacity-60"},k=(0,i.aZ)({__name:"game-item",props:{data:null},emits:["on-play"],setup(e,t){let{emit:n}=t;const a=e;return(e,t)=>((0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",{class:"absolute top-0 h-[100px] w-[100px] rounded-[50%] icon-m:h-[90px] icon-m:w-[90px] icon-s:h-[80px] icon-s:w-[80px]",style:(0,l.normalizeStyle)({boxShadow:a.data.iconShadow})},[(0,i._)("img",{draggable:"false",class:"h-full w-full",src:a.data.icon,alt:"icon"},null,8,v)],4),(0,i._)("div",{class:"item-shadow h-[136px] w-[152px] rounded-[24px] icon-m:h-[118px] icon-m:w-[132px] icon-s:h-[112px] icon-s:w-[120px]",style:(0,l.normalizeStyle)({background:a.data.homeBgStyle})},[(0,i._)("div",b,[(0,i._)("p",B,(0,l.toDisplayString)(a.data.name),1),(0,i._)("div",{class:"mt-[12px] flex h-[20px] w-[112px] items-center justify-center rounded-[8px] font-ali-75 text-[12px] text-color-white opacity-80 hover:opacity-100 icon-m:mt-[10px] icon-m:w-[100px] icon-s:mt-[10px] icon-s:w-[95px]",style:(0,l.normalizeStyle)({background:a.data.playBtnBgStyle}),onClick:t[0]||(t[0]=(0,s.withModifiers)((e=>n("on-play")),["stop"]))}," Play Now ",4)])],4)]))}}),C=(0,y.Z)(k,[["__scopeId","data-v-70c7c87c"]]),_={class:"play-bg insert-shadow relative flex h-full rounded-[var(--icon-home-radius)] bg-cover bg-no-repeat"},A={class:"absolute top-[20px] left-0 right-0 z-[1] flex justify-between px-[20px] icon-m:top-[16px] icon-m:px-[16px] icon-s:top-[12px] icon-s:px-[12px]"},G={class:"flex h-full w-full items-center justify-center"},Z=(0,i.aZ)({__name:"play-large",setup(e){const{list:t,chunksIndex:n,chunksLen:a,onClickSwitchPanel:c,onClickPlay:p}=z();return(e,d)=>((0,i.wg)(),(0,i.iD)("section",_,[(0,i._)("div",A,[(0,i._)("div",{class:(0,l.normalizeClass)([[0===(0,o.SU)(n)?"bg-opacity-[0.1] text-color-t3":"cursor-pointer bg-opacity-10 text-color-white hover:bg-opacity-20"],"expand-click flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-color-white transition-colors"]),onClick:d[0]||(d[0]=(0,s.withModifiers)((e=>(0,o.SU)(c)("pre")),["stop"]))},[(0,i.Wm)(r.Z,{class:"rotate-180"})],2),(0,i._)("div",{class:(0,l.normalizeClass)([[(0,o.SU)(n)===(0,o.SU)(a)-1?"bg-opacity-[0.1] text-color-t3":"cursor-pointer bg-opacity-10 text-color-white hover:bg-opacity-20"],"expand-click flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-color-white transition-colors"]),onClick:d[1]||(d[1]=(0,s.withModifiers)((e=>(0,o.SU)(c)("next")),["stop"]))},[(0,i.Wm)(r.Z)],2)]),(0,i._)("div",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,o.SU)(t),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.name,class:"mx-[7px] icon-m:mx-[8px] icon-s:mx-[7px]"},[(0,i.Wm)(C,{data:e,onOnPlay:t=>(0,o.SU)(p)(e)},null,8,["data","onOnPlay"])])))),128))])]))}}),D=(0,y.Z)(Z,[["__scopeId","data-v-441cfbd1"]]);var I=n(13270),L=n(22854),U=n(53056),P=n(10435);const M=e=>{const t={m:f,l:D};return(0,L.C)(e,I.widgetApp.value,t)},j=()=>{const e=(0,U.usePlayStore)();return{clickWidget:()=>{e.setModal(!0)},onCloseModal:()=>{e.setModal(!1)},show:(0,P.Jk)(e).modalShow}},z=()=>{const e=(0,U.usePlayStore)(),t=(0,P.Jk)(e),n=(0,a.Z)(e.gameList,3),i=(0,o.iH)(n[0]),l=(0,o.iH)(0),s=(0,o.iH)(n.length);return{homeGameItem:t.homeGameItem,homeGameIndex:t.homeGameIndex,gameList:t.gameList,onClickSwitchGame:function(t){"pre"===t?e.preGameItem():e.nextGameItem()},list:i,chunksIndex:l,chunksLen:s,onClickSwitchPanel:function(e){"next"===e?function(){if(l.value===n.length-1)return;l.value=l.value+1,i.value=n[l.value]}():function(){if(0===l.value)return;l.value=l.value-1,i.value=n[l.value]}()},onClickPlay:function(t){e.setModal(!0),e.setPanelStatus(2),e.setSelectedGame(t)}}},E=()=>{const e=(0,U.usePlayStore)(),t=(0,P.Jk)(e);return{gameList:t.gameList,panelStatus:t.panelStatus,onClickPlay:function(t){e.setPanelStatus(2),e.setSelectedGame(t)},selectedGame:t.selectedGame,onClickBack:function(){e.setPanelStatus(1)}}}},77362:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(57268);const i={class:"icon-next h-[12px] w-[12px]"},o=[(0,a._)("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,a._)("g",{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[(0,a._)("g",{id:"10.小组件-_-热搜",transform:"translate(-476.000000, -846.000000)"},[(0,a._)("g",{id:"larg_中图标模式",transform:"translate(40.000000, 832.000000)"},[(0,a._)("g",{id:"down_icon",transform:"translate(442.000000, 20.000000) rotate(-90.000000) translate(-442.000000, -20.000000) translate(436.000000, 14.000000)"},[(0,a._)("rect",{id:"矩形",fill:"#FFFFFF",opacity:"0",x:"0",y:"0",width:"12",height:"12"}),(0,a._)("path",{id:"路径-4",d:"M6.19991172,2.40002943 C6.53128257,1.95820163 7.15808392,1.86865858 7.59991172,2.20002943 C8.00775277,2.50591021 8.11542219,3.06351876 7.86894131,3.49500427 L7.79991172,3.60002943 L6.24991172,6.00002943 L7.79991172,8.40002943 C8.10579251,8.80787047 8.05302476,9.37332212 7.69558717,9.71853356 L7.59991172,9.80002943 C7.19207068,10.1059102 6.62661903,10.0531425 6.28140758,9.69570487 L6.19991172,9.60002943 L4.19991172,6.60002943 C3.95991172,6.28002943 3.93591172,5.85202943 4.12791172,5.51042943 L4.19991172,5.40002943 L6.19991172,2.40002943 Z",fill:"currentColor","fill-rule":"nonzero",transform:"translate(5.999941, 6.000029) rotate(-90.000000) translate(-5.999941, -6.000029) "})])])])])],-1)];const l={},s=(0,n(76911).Z)(l,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("section",i,o)}]])},39547:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(57422),i=n(60385),o=n(20684),l=n(9860);const s=function(e,t,n){if(!(0,l.Z)(n))return!1;var s=typeof t;return!!("number"==s?(0,i.Z)(n)&&(0,o.Z)(t,n.length):"string"==s&&t in n)&&(0,a.Z)(n[t],e)}},94223:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(52561),i=n(39547),o=n(60275),l=Math.ceil,s=Math.max;const r=function(e,t,n){t=(n?(0,i.Z)(e,t,n):void 0===t)?1:s((0,o.Z)(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var c=0,p=0,d=Array(l(r/t));c<r;)d[p++]=(0,a.Z)(e,c,c+=t);return d}}}]);