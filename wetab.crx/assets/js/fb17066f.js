"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[8659,1587],{22854:(t,e,s)=>{s.d(e,{C:()=>i});var l=s(29445),o=s(57268);const i=(t,e,s)=>{const i=(0,l.iH)(t);e.onChangeState=t=>{i.value={...t}};const n=(0,o.Fl)((()=>s?s[i.value.size]:null));return{propsState:i,HomeComp:n}}},7060:(t,e,s)=>{s.r(e),s.d(e,{mountHome:()=>x,widgetApp:()=>p});var l=s(29445),o=s(68398),i=s(57268),n=s(19689);const a=(0,i.aZ)({__name:"widget-worldcup-home",props:{size:null,id:null},setup(t){const e=t,{HomeComp:s}=(0,n.Wp)(e),{clickWidget:o}=(0,n.dd)();return(t,e)=>((0,i.wg)(),(0,i.iD)("section",{class:"contents cursor-pointer",onClick:e[0]||(e[0]=function(){return(0,l.SU)(o)&&(0,l.SU)(o)(...arguments)})},[((0,i.wg)(),(0,i.j4)((0,i.LL)((0,l.SU)(s))))]))}});var r=s(96755),c=s(75008);const p=(0,l.iH)(null),x=(t,e)=>{const s=(0,o.createApp)(a,e);return(0,c.f)(s),p.value=s,s.use(r.M),s.mount(t),p.value}},21587:(t,e,s)=>{s.r(e),s.d(e,{useWorldcupStore:()=>m});var l=s(74003),o=s(84522),i=s(10435),n=s(17904);var a=s(80661),r=s.n(a),c=s(94119),p=s(24581);const x=r()(),u=r()(`${x.year()}-${x.month()+1}-${x.date()}`);function d(t,e){return t.date()===u.date()?l.sM?"今天":"Today":t.date()===u.add(1,"day").date()?l.sM?"明天":"Tomorrow":l.sM?e?`${t.month()+1}月${t.date()}日`:t.format("MM-DD"):e?t.format("MMMM DD"):t.format("MMM DD")}function h(t){return l.sM?t.match_type_des?`${t.group_name}组 第${t.match_type_des}轮`:t.match_type_name:t.match_type_des?`Group ${t.group_name} Round ${t.match_type_des}`:t.match_type_name}const m=(0,i.Q_)(o.BU.worldcup,{syncStorage:{watch:["scheduleList","rankList"]},state:()=>({modalShow:!1,scheduleList:[],rankList:[],curIndex:-1,modalTab:0}),getters:{currentHomeData(){return this.scheduleList[this.curIndex]}},actions:{setModal(t){c.G.setStatus(p.Rm.worldcup,t),this.modalShow=t},async getWprldCupSchedule(){const[t,e]=await(async()=>{try{const t=await n.hj.get(`${l.H}worldcup/schedule`,void 0,{_delay:0});if(0===t.code&&t.data.length>0)return[null,t.data];throw t}catch(t){return["catch error"]}})();if(t||!e)return;const s=[];e.forEach((t=>{const e=new Date(t.schedule_date_utc),o=r()(`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`),i={title:d(o),listTitle:d(o,!0),date:o,diff:o.diff(u),list:t.schedule_list.map((t=>{return{...t,match_status:(e=t.match_status,{1:l.sM?"未开赛":"Not started",2:l.sM?"进行中":"In progress",3:l.sM?"已完赛":"Completed"}[e]),date_time:r()(t.date_time_utc).format("HH:mm"),match_type_des:h(t)};var e}))};s.push(i)})),this.scheduleList=s,this.calcCurrentIndex()},async getWorldcupRankList(){const[t,e]=await(async()=>{try{const t=await n.hj.get(`${l.H}worldcup/rank`,void 0,{_delay:0});if(0===t.code&&t.data.length>0)return[null,t.data];throw t}catch(t){return["catch error"]}})();!t&&e&&(this.rankList=e)},calcCurrentIndex(){const t=this.scheduleList.filter((t=>t.diff>=0));t.length>0?this.curIndex=this.scheduleList.findIndex((e=>e.title===t[0].title)):this.curIndex=this.scheduleList.length-1},nextDay(){this.curIndex!==this.scheduleList.length-1&&(this.curIndex=this.curIndex+1)},preDay(){0!==this.curIndex&&(this.curIndex=this.curIndex-1)},setTab(t){this.modalTab=t}}}),f=m();f.getWprldCupSchedule(),f.getWorldcupRankList(),f.calcCurrentIndex()},19689:(t,e,s)=>{s.d(e,{DS:()=>gt,dd:()=>wt,UV:()=>vt,Wp:()=>_t});var l=s(74003),o=s(57268),i=s(94209);const n={class:"worldcup-bg relative h-full w-full bg-cover bg-no-repeat"},a=(t=>((0,o.dD)("data-v-4bdf45dc"),t=t(),(0,o.Cn)(),t))((()=>(0,o._)("img",{src:"https://static.wetab.link/hitab/worldcup-widget/icon.png",class:"absolute top-[-6px] left-[-4px] h-[100px] w-[100px] icon-m:top-[-5px] icon-m:left-[-8px] icon-m:h-[88px] icon-m:w-[88px] icon-s:top-[-6px] icon-s:left-[-10px] icon-s:h-[72px] icon-s:w-[72px]",alt:"icon"},null,-1))),r={class:"flex h-full flex-col justify-center pl-[92px] icon-m:pl-[74px] icon-s:pl-[52px]"},c={class:"mb-[8px] font-ali-75 text-[14px] leading-none text-color-white"},p={class:"font-ali-55 text-[12px] leading-none text-color-white"},x=(0,o.aZ)({__name:"worldcup-small",setup:t=>(t,e)=>((0,o.wg)(),(0,o.iD)("section",n,[a,(0,o._)("div",r,[(0,o._)("div",c,(0,i.toDisplayString)("2022世界杯"),1),(0,o._)("div",p,(0,i.toDisplayString)("2022世界杯赛事比分"),1)])]))});var u=s(76911);const d=(0,u.Z)(x,[["__scopeId","data-v-4bdf45dc"]]);var h=s(68398),m=s(29445),f=s(57516);const _={class:"icon-next h-[12px] w-[12px]"},w=[(0,o._)("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,o._)("g",{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[(0,o._)("g",{id:"10.小组件-_-热搜",transform:"translate(-492.000000, -213.000000)"},[(0,o._)("g",{id:"medium_中图标模式",transform:"translate(316.000000, 200.000000)"},[(0,o._)("g",{id:"next_icon",transform:"translate(182.000000, 19.000000) scale(-1, 1) rotate(-90.000000) translate(-182.000000, -19.000000) translate(176.000000, 13.000000)"},[(0,o._)("rect",{id:"矩形",fill:"#FFFFFF",opacity:"0",x:"0",y:"0",width:"12",height:"12"}),(0,o._)("path",{id:"形状结合",d:"M6.70710678,5.29289322 L9.70710678,8.29289322 C10.3370716,8.92285808 9.89090485,10 9,10 L3,10 C2.10909515,10 1.66292836,8.92285808 2.29289322,8.29289322 L5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 Z M9,2 C9.55228475,2 10,2.44771525 10,3 C10,3.55228475 9.55228475,4 9,4 L3,4 C2.44771525,4 2,3.55228475 2,3 C2,2.44771525 2.44771525,2 3,2 L9,2 Z",fill:"currentColor","fill-rule":"nonzero"})])])])])],-1)];const g={},v=(0,u.Z)(g,[["render",function(t,e){return(0,o.wg)(),(0,o.iD)("section",_,w)}]]),y={class:"flex w-full items-center text-[12px] leading-none text-color-white text-opacity-60"},D=(0,o._)("span",{class:"h-[1px] flex-1 bg-color-white bg-opacity-20"},null,-1),S={class:"mx-[6px]"},b=(0,o._)("span",{class:"h-[1px] flex-1 bg-color-white bg-opacity-20"},null,-1),k=(0,o.aZ)({__name:"worldcup-divider",props:{text:{default:""}},setup(t){const e=t;return(t,s)=>((0,o.wg)(),(0,o.iD)("section",y,[D,(0,o._)("span",S,(0,i.toDisplayString)(e.text),1),b]))}}),A={class:"worldcup-bg flex h-full w-full flex-col bg-cover bg-no-repeat"},C={class:"header-bg relative flex h-[36px] flex-shrink-0 justify-between overflow-hidden px-[16px] icon-m:h-[32px] icon-m:px-[14px] icon-s:h-[28px] icon-s:px-[8px]"},U={class:"title text-dot flex items-center px-[4px] font-ali-75 text-color-white"},M={class:"list-box flex-1 px-[16px] pt-[6px] icon-m:px-[12px] icon-m:pt-[2px] icon-s:px-[8px] icon-s:pt-[6px]"},L={class:"mb-[14px] flex items-center text-color-white icon-m:mb-[4px] icon-m:mt-[2px] icon-s:mb-[16px] icon-s:mt-[6px]"},I={class:"flex-1"},W={class:"flex items-center"},F=["src"],H={key:1,src:f,class:"h-[16px] w-[24px]",alt:""},Z={class:"ml-[8px] flex-1 text-[12px]"},B={class:"w-[20px] text-[12px] text-opacity-60"},T={class:"mt-[4px] flex items-center"},j=["src"],z={key:1,src:f,class:"h-[16px] w-[24px]",alt:""},N={class:"ml-[8px] flex-1 text-[12px]"},Y={class:"w-[20px] text-[12px]"},R={class:"flex flex-col items-center justify-center font-ali-65 text-[12px]"},E=(0,o.aZ)({__name:"worldcup-medium",setup(t){const{homeData:e,onClickNextDay:s,onClickPreDay:l,curIndex:n,scheduleList:a}=gt();return(t,r)=>{var c,p;return(0,o.wg)(),(0,o.iD)("section",A,[(0,o._)("div",C,[(0,o._)("div",{class:"prev flex h-full shrink-0 cursor-default items-center",onClick:r[1]||(r[1]=(0,h.withModifiers)((()=>{}),["stop"])),onMousedown:r[2]||(r[2]=(0,h.withModifiers)((()=>{}),["stop"]))},[(0,o._)("div",{class:(0,i.normalizeClass)(["pointer-events-auto flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors",[0===(0,m.SU)(n)?"cursor-default":"cursor-pointer hover:bg-color-m1 hover:bg-opacity-10"]]),onClick:r[0]||(r[0]=function(){return(0,m.SU)(l)&&(0,m.SU)(l)(...arguments)})},[(0,o.Wm)(v,{class:(0,i.normalizeClass)(["rotate-180 text-color-white",[0===(0,m.SU)(n)?" text-opacity-60":""]])},null,8,["class"])],2)],32),(0,o._)("div",U,(0,i.toDisplayString)(null===(c=(0,m.SU)(e))||void 0===c?void 0:c.title),1),(0,o._)("div",{class:"next flex h-full shrink-0 cursor-default items-center",onClick:r[4]||(r[4]=(0,h.withModifiers)((()=>{}),["stop"])),onMousedown:r[5]||(r[5]=(0,h.withModifiers)((()=>{}),["stop"]))},[(0,o._)("div",{class:(0,i.normalizeClass)(["pointer-events-auto flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors",[(0,m.SU)(n)===(0,m.SU)(a).length-1?"cursor-default":"cursor-pointer hover:bg-color-m1 hover:bg-opacity-10"]]),onClick:r[3]||(r[3]=function(){return(0,m.SU)(s)&&(0,m.SU)(s)(...arguments)})},[(0,o.Wm)(v,{class:(0,i.normalizeClass)(["text-color-white",[(0,m.SU)(n)===(0,m.SU)(a).length-1?" text-opacity-60":""]])},null,8,["class"])],2)],32)]),(0,o._)("div",M,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(null===(p=(0,m.SU)(e))||void 0===p?void 0:p.list,((t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e},[(0,o.Wm)(k,{text:t.date_time},null,8,["text"]),(0,o._)("div",L,[(0,o._)("div",I,[(0,o._)("div",W,[t.guest_team_logo_url?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"h-[16px] w-[24px]",src:t.guest_team_logo_url},null,8,F)):((0,o.wg)(),(0,o.iD)("img",H)),(0,o._)("span",Z,(0,i.toDisplayString)(t.guest_team_name),1),(0,o._)("span",B,(0,i.toDisplayString)(t.guest_team_score),1)]),(0,o._)("div",T,[t.host_team_logo_url?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"h-[16px] w-[24px]",src:t.host_team_logo_url},null,8,j)):((0,o.wg)(),(0,o.iD)("img",z)),(0,o._)("span",N,(0,i.toDisplayString)(t.host_team_name),1),(0,o._)("span",Y,(0,i.toDisplayString)(t.host_team_score),1)])]),(0,o._)("div",R,[(0,o._)("span",null,(0,i.toDisplayString)(t.match_type_name),1),(0,o._)("span",null,(0,i.toDisplayString)(t.match_status),1)])])],64)))),128))])])}}}),V=(0,u.Z)(E,[["__scopeId","data-v-b5345a4e"]]),Q={class:"worldcup-bg relative flex h-full flex-col bg-cover bg-no-repeat"},$={class:"flex h-[38px] flex-shrink-0 items-center justify-between px-[20px] icon-m:h-[32px] icon-m:px-[16px] icon-s:h-[26px] icon-s:px-[12px]"},O={class:"px-[14px] font-ali-75 text-[14px] text-color-white"},G={class:"flex flex-1 flex-col"},P={class:"flex h-full flex-1 flex-wrap content-between justify-between px-[20px] pb-[20px] text-[12px] text-color-white icon-m:px-[16px] icon-m:pb-[16px] icon-s:px-[8px] icon-s:pb-[10px]"},K={class:"flex w-full items-center justify-between overflow-hidden pt-[10px] icon-m:pt-[2px] icon-s:pt-[0px]"},q={class:"flex flex-1 flex-shrink-0 flex-col overflow-hidden"},J=["src"],X={key:1,src:f,class:"mb-[8px] h-[16px] w-[24px]",alt:""},tt={class:"text-dot"},et={class:"flex w-[70px] flex-shrink-0 flex-col items-center"},st={class:"text-dot"},lt={class:"mt-[4px]"},ot={key:0,class:"flex items-center justify-center"},it=(t=>((0,o.dD)("data-v-65bc13aa"),t=t(),(0,o.Cn)(),t))((()=>(0,o._)("span",{class:"mx-[4px]"},"-",-1))),nt={key:1},at={class:"flex flex-1 flex-shrink-0 flex-col items-end overflow-hidden"},rt=["src"],ct={key:1,src:f,class:"mb-[8px] h-[16px] w-[24px]",alt:""},pt={class:"text-dot"},xt=(0,o.aZ)({__name:"worldcup-large",setup(t){const{homeData:e,onClickNextDay:s,onClickPreDay:l,curIndex:n,scheduleList:a}=gt();return(t,r)=>{var c,p;return(0,o.wg)(),(0,o.iD)("section",Q,[(0,o._)("div",$,[(0,o._)("div",{class:"prev flex h-full shrink-0 cursor-default items-center",onClick:r[1]||(r[1]=(0,h.withModifiers)((()=>{}),["stop"])),onMousedown:r[2]||(r[2]=(0,h.withModifiers)((()=>{}),["stop"]))},[(0,o._)("div",{class:(0,i.normalizeClass)(["pointer-events-auto flex h-[24px] w-[24px] items-center justify-center rounded-[6px] transition-colors",[0===(0,m.SU)(n)?"cursor-default":"cursor-pointer hover:bg-color-m1 hover:bg-opacity-10"]]),onClick:r[0]||(r[0]=function(){return(0,m.SU)(l)&&(0,m.SU)(l)(...arguments)})},[(0,o.Wm)(v,{class:(0,i.normalizeClass)(["rotate-180 text-color-white",[0===(0,m.SU)(n)?" text-opacity-60":""]])},null,8,["class"])],2)],32),(0,o._)("div",O,(0,i.toDisplayString)(null===(c=(0,m.SU)(e))||void 0===c?void 0:c.title),1),(0,o._)("div",{class:"next flex h-full shrink-0 cursor-default items-center",onClick:r[4]||(r[4]=(0,h.withModifiers)((()=>{}),["stop"])),onMousedown:r[5]||(r[5]=(0,h.withModifiers)((()=>{}),["stop"]))},[(0,o._)("div",{class:(0,i.normalizeClass)(["pointer-events-auto flex h-[24px] w-[24px] items-center justify-center rounded-[6px] transition-colors",[(0,m.SU)(n)===(0,m.SU)(a).length-1?"cursor-default":"cursor-pointer hover:bg-color-m1 hover:bg-opacity-10"]]),onClick:r[3]||(r[3]=function(){return(0,m.SU)(s)&&(0,m.SU)(s)(...arguments)})},[(0,o.Wm)(v,{class:(0,i.normalizeClass)(["text-color-white",[(0,m.SU)(n)===(0,m.SU)(a).length-1?" text-opacity-60":""]])},null,8,["class"])],2)],32)]),(0,o._)("div",G,[(0,o._)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(null===(p=(0,m.SU)(e))||void 0===p?void 0:p.list,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"matche-item flex h-[80px] w-[238px] flex-col items-center justify-center rounded-[8px] px-[12px] text-[12px] text-color-white icon-m:h-[72px] icon-m:w-[212px] icon-s:h-[68px] icon-s:w-[49%]"},[(0,o.Wm)(k,{text:t.date_time},null,8,["text"]),(0,o._)("div",K,[(0,o._)("div",q,[t.guest_team_logo_url?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"mb-[8px] h-[16px] w-[24px]",src:t.guest_team_logo_url},null,8,J)):((0,o.wg)(),(0,o.iD)("img",X)),(0,o._)("span",tt,(0,i.toDisplayString)(t.guest_team_name),1)]),(0,o._)("div",et,[(0,o._)("div",st,(0,i.toDisplayString)(t.match_type_des),1),(0,o._)("div",lt,[null!==t.guest_team_score?((0,o.wg)(),(0,o.iD)("div",ot,[(0,o._)("span",null,(0,i.toDisplayString)(t.guest_team_score),1),it,(0,o._)("span",null,(0,i.toDisplayString)(t.host_team_score),1)])):((0,o.wg)(),(0,o.iD)("div",nt,(0,i.toDisplayString)(t.match_status),1))])]),(0,o._)("div",at,[t.host_team_logo_url?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"mb-[8px] h-[16px] w-[24px]",src:t.host_team_logo_url},null,8,rt)):((0,o.wg)(),(0,o.iD)("img",ct)),(0,o._)("span",pt,(0,i.toDisplayString)(t.host_team_name),1)])])])))),128))])])])}}}),ut=(0,u.Z)(xt,[["__scopeId","data-v-65bc13aa"]]);var dt=s(7060),ht=s(22854),mt=s(21587),ft=s(10435);const _t=t=>{const e={s:d,m:V,l:ut};return(0,ht.C)(t,dt.widgetApp.value,e)},wt=()=>{const t=(0,mt.useWorldcupStore)();return{clickWidget:()=>{t.setModal(!0)},onCloseModal:()=>{t.setModal(!1)},show:(0,ft.Jk)(t).modalShow}},gt=()=>{const t=(0,mt.useWorldcupStore)(),e=(0,ft.Jk)(t);return{onClickPreDay:()=>{t.preDay()},onClickNextDay:()=>{t.nextDay()},curIndex:e.curIndex,scheduleList:e.scheduleList,homeData:e.currentHomeData}},vt=()=>{const t=(0,mt.useWorldcupStore)(),e=(0,ft.Jk)(t);return{onClickTab:e=>{t.setTab(e)},moreHref:l.sM?"https://www.douyin.com/fifaworldcup":"https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022",modalTab:e.modalTab,scheduleList:e.scheduleList,curIndex:e.curIndex,rankList:e.rankList}}},57516:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7ZixSgNBFEVvQiBgERsVLOzSpQs2ChYWorVFqnxHPsI/sFWrFNoKFnamEa38gu0Sm6QQrNZ3d2ZhXHcxsO9tspADN+wMWbg38+ZlmEYcxycAhqIt/OVVNA7GV1iesX+fHIoGy7+KUfA88O9n+RTdN+XjEvnm150d0bAhK3DrJ0aoF0k1NFFzNgFWTe0DtERP0KMt6om6om1Rx8/PRFPRRDSHDolvdqF96EDTF3AhiljA/T9ohVAtoUgUZ+Zo+DsYc0XOoQhL6Mw/ly0lGn2HM/kBFyjlVNT3zwf+OwuUI/GtGYC8FMwzUD8Yc3+oBKiqC3Uz4ymUqCLAsegoGL/h974oRQt2sBux9nvBHEvpGYpYBmBLDUuH+2MCZawCsNOE5h/hfn11rPZAJ3hmOzUxT6xWgC0yNR3BEKsAEYyNp1i20V24vdCGIdqn0ZSw97OcbqDY+z2Jb6sAYQfiht6Dfkklvq1KaP7PWA3tw1wK/21ZOqz/COUPbnmYnEZTaFj1yJBDpadRMzYBVk3tA/BW4hrFl7vrfDtNZlyBO7h7m7rxJXr4AVpWVyQWUa7kAAAAAElFTkSuQmCC"}}]);