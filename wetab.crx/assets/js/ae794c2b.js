"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2368,6994],{81796:(t,e,i)=>{i.r(e),i.d(e,{default:()=>j});var o=i(35427),s=i(57268),l=i(29445),n=i(94209),a=i(45069),r=i(22140),c=i(10435),p=i(41267),x=i(63477),d=i(74003),u=i(16097);const f={id:"settings-backup",class:"px-[70px] py-[40px]"},_={class:"flex flex-1 items-center"},b={class:"mr-[20px] h-[48px] w-[48px] flex-shrink-0 overflow-hidden rounded-full"},g=["src"],v={key:1,class:"iconfont icon-dengdaisousuo text-[48px] text-color-t4"},w={class:"flex1 justify-self-start"},m={class:"block max-w-[200px] grow-0 overflow-hidden text-ellipsis whitespace-nowrap text-[18px] text-color-t1"},y=(t=>((0,s.dD)("data-v-2a0b7e57"),t=t(),(0,s.Cn)(),t))((()=>(0,s._)("div",{class:"h-[12px] w-[12px] flex-shrink-0"},[(0,s._)("i",{class:"iconfont icon-arrow_icon text-[12px] text-color-t1"})],-1))),S={class:"mt-[20px] w-full text-left font-ali-75 text-[16px] text-color-t2"},h={class:"mt-[20px] flex items-center justify-between"},k={class:"flex h-[41px] flex-wrap content-between"},U={class:"w-full text-[14px] text-color-t2"},D={class:"w-full font-ali-55 text-[12px] text-color-t3"},L={class:"mt-[20px] flex items-center justify-between"},C={class:"flex h-[41px] flex-wrap content-between"},W={class:"w-full text-[14px] text-color-t2"},M={class:"w-full font-ali-55 text-[12px] text-color-t3"},I=(0,s.aZ)({__name:"settings-backup",setup(t){const e=(0,a.o)(),i=(0,r.useUserStore)(),I=(0,p.i)(),{loginShow:j,isLogin:H,user:Z}=(0,c.Jk)(i),V=()=>{H.value?e.settingHomeView="userInfo":j.value=!0},P=async()=>{const t=await I.exportData();(0,x.Bq)(t,d.sM?"wetab-":"hitab-")},R=async()=>{const t=await(0,x.Y)(".data,text/hitab,text/plain,application/json","readAsText");await I.importData(JSON.parse(t))};return(t,e)=>{const i=o.Z;return(0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("button",{class:"flex w-full items-center justify-between border-b-[1px] border-color-m2 border-opacity-[0.06] pb-[20px]",onClick:V},[(0,s._)("div",_,[(0,s._)("div",b,[(0,l.SU)(H)?((0,s.wg)(),(0,s.iD)("img",{key:0,src:(0,l.SU)(Z).avatar||(0,l.SU)(u.c)},null,8,g)):((0,s.wg)(),(0,s.iD)("i",v))]),(0,s._)("div",w,[(0,s._)("span",m,(0,n.toDisplayString)((0,l.SU)(H)?(0,l.SU)(Z).nickname:"登录/注册"),1)])]),y]),(0,s._)("button",S,(0,n.toDisplayString)("备份数据"),1),(0,s._)("div",h,[(0,s._)("div",k,[(0,s._)("span",U,(0,n.toDisplayString)("导出备份数据"),1),(0,s._)("span",D,(0,n.toDisplayString)("将本地数据导出"),1)]),(0,s.Wm)(i,{size:"medium",icon:"icon-export_icon text-[20px]",onClick:P},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.toDisplayString)("导出"),1)])),_:1})]),(0,s._)("div",L,[(0,s._)("div",C,[(0,s._)("span",W,(0,n.toDisplayString)("导入备份数据"),1),(0,s._)("span",M,(0,n.toDisplayString)("将本地数据导入"),1)]),(0,s.Wm)(i,{size:"medium",icon:"icon-import_icon text-[20px]",onClick:R},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.toDisplayString)("导入"),1)])),_:1})])])}}});const j=(0,i(76911).Z)(I,[["__scopeId","data-v-2a0b7e57"]])},92039:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var o=i(70308),s=i(61694),l=i(57268),n=i(29445),a=i(10435),r=i(45069),c=i(81796),p=i(65766),x=i(28059),d=i(15610),u=i(71397),f=i(19302),_=i(92556),b=i(74003);const g={id:"settings-home"},v=(0,l.aZ)({__name:"settings-home",setup(t){const e=(0,r.o)(),{settingHomeView:i}=(0,a.Jk)(e);return(t,e)=>{const a=s.Z,r=o.Z;return(0,l.wg)(),(0,l.iD)("div",g,[(0,l.Wm)(r,{variable:(0,n.SU)(i)},{default:(0,l.w5)((()=>[(0,l.Wm)(a,{value:"backup"},{default:(0,l.w5)((()=>[(0,n.SU)(b.sM)?((0,l.wg)(),(0,l.j4)(c.default,{key:0})):((0,l.wg)(),(0,l.j4)(p.default,{key:1}))])),_:1}),(0,l.Wm)(a,{value:"userInfo"},{default:(0,l.w5)((()=>[(0,l.Wm)(_.default)])),_:1}),(0,l.Wm)(a,{value:"inviteRecord"},{default:(0,l.w5)((()=>[(0,l.Wm)(x.default)])),_:1}),(0,l.Wm)(a,{value:"inviteRule"},{default:(0,l.w5)((()=>[(0,l.Wm)(d.default)])),_:1}),(0,l.Wm)(a,{value:"subInfo"},{default:(0,l.w5)((()=>[(0,l.Wm)(f.default)])),_:1}),(0,l.Wm)(a,{value:"billHistory"},{default:(0,l.w5)((()=>[(0,l.Wm)(u.default)])),_:1})])),_:1},8,["variable"])])}}})},65766:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var o=i(35427),s=i(57268),l=i(94209),n=i(29445),a=i(68398),r=i(45069),c=i(22140),p=i(10435),x=i(41267),d=i(63477),u=i(74003),f=i(6594),_=i(17319),b=i(16097);const g={id:"settings-backup",class:"px-[70px] py-[40px]"},v={class:"flex w-full justify-between"},w={class:"flex flex-col justify-center"},m=["onClick"],y=(0,s._)("i",{class:"iconfont icon-more_icon"},null,-1),S=["src"],h={key:1,class:"iconfont icon-dengdaisousuo text-[48px] text-color-t4"},k={class:"flex flex-col border-b-[1px] border-color-m2 border-opacity-[0.06] py-[18px]"},U={class:"flex h-[68px] rounded-[8px] border-[1px] border-color-b2"},D={class:"relative flex h-full w-[50%] flex-col items-center justify-center border-r-[1px] border-color-b2"},L={class:"text-[16px] text-color-t1"},C=(0,s._)("span",{class:"flex font-ali-55 text-[12px] text-color-t2"}," My invitation code ",-1),W={class:"flex h-full grow flex-col items-center justify-center"},M={class:"text-[16px] text-color-t1"},I=(0,s._)("i",{class:"iconfont icon-more_icon text-color-t3"},null,-1),j=(0,s._)("i",{class:"iconfont icon-more_icon"},null,-1),H={class:"mt-[20px] w-full text-left font-ali-75 text-[16px] text-color-t2"},Z={class:"mt-[20px] flex items-center justify-between"},V={class:"flex h-[41px] flex-wrap content-between"},P={class:"w-full text-[14px] text-color-t2"},R={class:"w-full font-ali-55 text-[12px] text-color-t3"},T={class:"mt-[20px] flex items-center justify-between"},B={class:"flex h-[41px] flex-wrap content-between"},Y={class:"w-full text-[14px] text-color-t2"},J={class:"w-full font-ali-55 text-[12px] text-color-t3"},N=(0,s.aZ)({__name:"settings-sub-en",setup(t){const e=(0,r.o)(),i=(0,c.useUserStore)(),N=(0,x.i)(),q=(0,f.t)(),{loginShow:z,isLogin:E,user:A}=(0,p.Jk)(i),K=()=>{E.value?e.settingHomeView="userInfo":z.value=!0},F=()=>{e.settingHomeView="subInfo"},O=()=>{e.settingHomeView="inviteRecord"},$=()=>{e.settingHomeView="inviteRule"},G=()=>{navigator.clipboard&&navigator.clipboard.writeText(A.value.inviteCode).then((()=>{_.R.success({message:"Invitation code copied to clipboard"})}))},Q=async()=>{const t=await N.exportData();(0,d.Bq)(t,u.sM?"wetab-":"hitab-")},X=async()=>{const t=await(0,d.Y)(".data,text/hitab,text/plain,application/json","readAsText");await N.importData(JSON.parse(t))};return(0,s.bv)((()=>{q.getInviteList(1)})),u.AN&&(0,s.YP)((()=>i.isLogin&&i.user.vip),(t=>{t?(q.getInviteList(1),q.getSubRecord()):q.clear()})),(t,e)=>{const i=o.Z;return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",v,[(0,s._)("div",w,[(0,s._)("span",{class:"block max-w-[200px] grow-0 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[18px] text-color-t1",onClick:K},(0,l.toDisplayString)((0,n.SU)(E)?(0,n.SU)(A).nickname:""),1),(0,s._)("div",null,[(0,s._)("span",{class:"inline-flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t3",onClick:(0,a.withModifiers)(F,["stop"])},[(0,s.Uk)((0,l.toDisplayString)((0,n.SU)(A).vipPlan+":"+(0,n.SU)(A).vipEndTimeStr)+" ",1),y],8,m)])]),(0,s._)("div",{class:"h-[48px] w-[48px] flex-shrink-0 cursor-pointer overflow-hidden rounded-full",onClick:K},[(0,n.SU)(E)?((0,s.wg)(),(0,s.iD)("img",{key:0,src:(0,n.SU)(A).avatar||(0,n.SU)(b.c)},null,8,S)):((0,s.wg)(),(0,s.iD)("i",h))])]),(0,s._)("div",k,[(0,s._)("div",U,[(0,s._)("div",D,[(0,s._)("span",L,(0,l.toDisplayString)((0,n.SU)(A).inviteCode),1),C,(0,s._)("i",{class:"iconfont icon-copy absolute top-[8px] right-[8px] cursor-pointer text-[16px] text-color-t4 hover:text-color-t3",onClick:G})]),(0,s._)("div",W,[(0,s._)("span",M,(0,l.toDisplayString)((0,n.SU)(q).inviteListCount),1),(0,s._)("span",{class:"flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t2",onClick:O},[(0,s.Uk)(" Invitation record "),I])])]),(0,s._)("div",{class:""},[(0,s._)("span",{class:"mt-[8px] inline-flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t3",onClick:$},[(0,s.Uk)(" Invitation offer rules "),j])])]),(0,s._)("button",H,(0,l.toDisplayString)("备份数据"),1),(0,s._)("div",Z,[(0,s._)("div",V,[(0,s._)("span",P,(0,l.toDisplayString)("导出备份数据"),1),(0,s._)("span",R,(0,l.toDisplayString)("将本地数据导出"),1)]),(0,s.Wm)(i,{size:"medium",icon:"icon-export_icon text-[20px]",onClick:Q},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.toDisplayString)("导出"),1)])),_:1})]),(0,s._)("div",T,[(0,s._)("div",B,[(0,s._)("span",Y,(0,l.toDisplayString)("导入备份数据"),1),(0,s._)("span",J,(0,l.toDisplayString)("将本地数据导入"),1)]),(0,s.Wm)(i,{size:"medium",icon:"icon-import_icon text-[20px]",onClick:X},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.toDisplayString)("导入"),1)])),_:1})])])}}})},71397:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var o=i(82099),s=i(57268),l=i(29445),n=i(94209),a=i(6594),r=i(63477),c=i(45069);const p={class:"bill-history h-full py-[40px]"},x={class:"hi-scroll mt-[20px] h-[calc(100%-20px)] px-[70px]"},d={class:"w-full border-[1px] border-color-b2"},u={class:"font-ali-55 text-color-t3"},f={key:0,class:"h-[40px] border-t-[1px] border-color-b2"},_=[(0,s._)("td",{class:"text-center",colspan:"3"},"No billing history",-1)],b=["onClick"],g={class:"px-[12px] text-left text-color-t2"},v={class:"px-[12px] text-right"},w={class:"px-[12px] text-right"},m={class:"inline-flex items-center"},y=(0,s._)("i",{class:"iconfont icon-more_icon ml-[12px] text-color-t3 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),S=(0,s.aZ)({__name:"bill-history",setup(t){const e=(0,c.o)(),i=(0,a.t)(),S=async()=>{await i.getSubRecord()};return(t,a)=>{const c=o.Z,h=(0,s.up)("van-list");return(0,s.wg)(),(0,s.iD)("section",p,[(0,s.Wm)(c,{class:"px-[70px]",title:"Billing history",onBack:a[0]||(a[0]=t=>(0,l.SU)(e).settingHomeView="subInfo")}),(0,s._)("div",x,[(0,s.Wm)(h,{loading:(0,l.SU)(i).subListMeta.loading,"onUpdate:loading":a[1]||(a[1]=t=>(0,l.SU)(i).subListMeta.loading=t),error:(0,l.SU)(i).subListMeta.error,"onUpdate:error":a[2]||(a[2]=t=>(0,l.SU)(i).subListMeta.error=t),"loading-text":"loading...","error-text":"Request error, please reload",finished:(0,l.SU)(i).subListMeta.finished,onLoad:S},{default:(0,s.w5)((()=>[(0,s._)("table",d,[(0,s._)("tbody",u,[(0,l.SU)(i).subListMeta.finished&&0===(0,l.SU)(i).billingList.length?((0,s.wg)(),(0,s.iD)("tr",f,_)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)((0,l.SU)(i).billingList,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id,class:"group h-[40px] cursor-pointer border-t-[1px] border-color-b2 text-center",onClick:e=>{return i=t,void(0,r.Yo)(i.invoiceUrl,!0);var i}},[(0,s._)("td",g,(0,n.toDisplayString)(t.plan),1),(0,s._)("td",v,(0,n.toDisplayString)(t.amount),1),(0,s._)("td",w,[(0,s._)("div",m,[(0,s._)("span",null,(0,n.toDisplayString)(t._time),1),y])])],8,b)))),128))])])])),_:1},8,["loading","error","finished"])])])}}})},28059:(t,e,i)=>{i.r(e),i.d(e,{default:()=>w});var o=i(82099),s=i(57268),l=i(29445),n=i(94209),a=i(6594),r=i(45069);const c={class:"invite-record h-full py-[40px]"},p={class:"hi-scroll mt-[20px] h-[calc(100%-20px)] px-[70px]"},x={class:"w-full border-[1px] border-color-b2"},d=(0,s._)("thead",{class:"bg-color-b2 bg-opacity-40 text-color-t3"},[(0,s._)("tr",{class:"h-[32px] text-left"},[(0,s._)("th",{class:"px-[12px]"},"User"),(0,s._)("th",{class:"px-[12px]"},"Reward"),(0,s._)("th",{class:"px-[12px]"},"Time")])],-1),u={class:"font-ali-55 text-color-t3"},f={key:0,class:"h-[40px] border-t-[1px] border-color-b2"},_=[(0,s._)("td",{class:"text-center",colspan:"3"},"No invitation record",-1)],b={class:"px-[12px]"},g={class:"px-[12px]"},v={class:"px-[12px]"},w=(0,s.aZ)({__name:"invite-record",setup(t){const e=(0,r.o)(),i=(0,a.t)(),w=async()=>{await i.getInviteList(i.inviteListMeta.pageNo+1)};return(t,a)=>{const r=o.Z,m=(0,s.up)("van-list");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s.Wm)(r,{class:"px-[70px]",title:"Invitation record",onBack:a[0]||(a[0]=t=>(0,l.SU)(e).settingHomeView="backup")}),(0,s._)("div",p,[(0,s.Wm)(m,{loading:(0,l.SU)(i).inviteListMeta.loading,"onUpdate:loading":a[1]||(a[1]=t=>(0,l.SU)(i).inviteListMeta.loading=t),error:(0,l.SU)(i).inviteListMeta.error,"onUpdate:error":a[2]||(a[2]=t=>(0,l.SU)(i).inviteListMeta.error=t),"loading-text":"loading...","error-text":"Request error, please reload",finished:(0,l.SU)(i).inviteListMeta.finished,onLoad:w},{default:(0,s.w5)((()=>[(0,s._)("table",x,[d,(0,s._)("tbody",u,[(0,l.SU)(i).inviteListMeta.finished&&0===(0,l.SU)(i).inviteListList.length?((0,s.wg)(),(0,s.iD)("tr",f,_)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)((0,l.SU)(i).inviteListList,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e,class:"h-[40px] border-t-[1px] border-color-b2"},[(0,s._)("td",b,(0,n.toDisplayString)(t.email),1),(0,s._)("td",g,(0,n.toDisplayString)("+"+t.reward+"day"),1),(0,s._)("td",v,(0,n.toDisplayString)(t._time),1)])))),128))])])])),_:1},8,["loading","error","finished"])])])}}})},15610:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var o=i(82099),s=i(57268),l=i(29445),n=i(94209),a=i(45069);const r={class:"invite-rule h-full py-[40px]"},c={class:"hi-scroll h-full px-[70px] pt-[8px]"},p={class:"text-color-t1"},x={class:"font-ali-55 text-color-t2"},d=(0,s.aZ)({__name:"invite-rule",setup(t){const e=(0,a.o)(),i=[{title:"Every time you invite a user to register successfully and subscribe, you can receive a 14-day extended subscription reward, which will be accumulated in turn.",desc:""},{title:"Likewise, new users invited by your invitation code can enjoy a discount on the subscription.",desc:""}];return(t,a)=>{const d=o.Z;return(0,s.wg)(),(0,s.iD)("section",r,[(0,s.Wm)(d,{class:"px-[70px]",title:"Invitation offer rules",onBack:a[0]||(a[0]=t=>(0,l.SU)(e).settingHomeView="backup")}),(0,s._)("div",c,[(0,s._)("ul",null,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(i,((t,e)=>(0,s._)("li",{key:e,class:"rule-item mt-[16px]"},[(0,s._)("h6",p,(0,n.toDisplayString)(t.title),1),(0,s._)("span",x,(0,n.toDisplayString)(t.desc),1)]))),64))])])])}}});const u=(0,i(76911).Z)(d,[["__scopeId","data-v-b961b1c4"]])},19302:(t,e,i)=>{i.r(e),i.d(e,{default:()=>D});var o=i(82099),s=i(57268),l=i(29445),n=i(94209),a=i(45069),r=i(22140),c=i(10435),p=i(6594),x=i(91294),d=i(63477);const u={class:"sub-info h-full py-[40px]"},f={class:"mt-[10px] px-[70px]"},_={class:"flex items-center justify-between border-b-[1px] border-color-m2 border-opacity-[0.06] py-[20px] font-ali-55 leading-none text-color-t2"},b={class:""},g={class:""},v=(0,s._)("span",null,"Expire date: ",-1),w={class:"border-b-[1px] border-color-m2 border-opacity-[0.06] py-[10px] text-color-t1"},m={class:"flex flex-col leading-[1.414]"},y=(0,s._)("span",null,"Modify subscription plan",-1),S={key:0,class:"font-ali-55 text-[12px] text-color-t3"},h=(0,s._)("i",{class:"iconfont icon-arrow_icon text-[12px]"},null,-1),k=[(0,s._)("div",{class:""},"Update card information",-1),(0,s._)("i",{class:"iconfont icon-arrow_icon text-[12px]"},null,-1)],U=[(0,s._)("div",{class:""},"Billing history",-1),(0,s._)("i",{class:"iconfont icon-arrow_icon text-[12px]"},null,-1)],D=(0,s.aZ)({__name:"sub-info",setup(t){const e=(0,a.o)(),i=(0,x.V)(),D=(0,r.useUserStore)(),L=(0,p.t)(),{user:C}=(0,c.Jk)(D),W=()=>{i.settingsShow=!1,L.setShowPayManual("modifyPlan")},M=(0,l.iH)(!1),I=async()=>{if(M.value)return;M.value=!0;const t=await L.modifyPayMethod();M.value=!1,t&&(0,d.Yo)(t,!0)},j=()=>{e.settingHomeView="billHistory"},H=(0,s.Fl)((()=>{if(!D.user.nextVipPlanId||D.user.nextVipPlanId===D.user.vipPlanId)return"";const t=L.prices.find((t=>t.id===D.user.nextVipPlanId));return t?t.nickname:""}));return(0,s.bv)((()=>{0===L.prices.length&&L.getPrices()})),(t,i)=>{const a=o.Z;return(0,s.wg)(),(0,s.iD)("section",u,[(0,s.Wm)(a,{class:"px-[70px]",title:"Subscription information",onBack:i[0]||(i[0]=t=>(0,l.SU)(e).settingHomeView="backup")}),(0,s._)("div",f,[(0,s._)("div",_,[(0,s._)("div",b,(0,n.toDisplayString)((0,l.SU)(C).vipPlan),1),(0,s._)("div",g,[v,(0,s._)("span",null,(0,n.toDisplayString)((0,l.SU)(C).vipEndTimeStr),1)])]),(0,s._)("div",w,[(0,s._)("div",{class:"flex cursor-pointer items-center justify-between py-[10px] leading-none",onClick:W},[(0,s._)("div",m,[y,(0,l.SU)(H)?((0,s.wg)(),(0,s.iD)("span",S,(0,n.toDisplayString)(` ${(0,l.SU)(H)}, effective date: ${(0,l.SU)(d.F8)((0,l.SU)(D).user.nextVipPlanTime)}`),1)):(0,s.kq)("",!0)]),h])]),(0,s._)("div",{class:"border-b-[1px] border-color-m2 border-opacity-[0.06] py-[10px] text-color-t1"},[(0,s._)("div",{class:"flex cursor-pointer items-center justify-between py-[10px] leading-none",onClick:I},k)]),(0,s._)("div",{class:"border-b-[1px] border-color-m2 border-opacity-[0.06] py-[10px] text-color-t1"},[(0,s._)("div",{class:"flex cursor-pointer items-center justify-between py-[10px] leading-none",onClick:j},U)])])])}}})}}]);