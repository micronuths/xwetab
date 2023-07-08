"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[5766],{45069:(t,e,i)=>{i.d(e,{o:()=>o});const o=(0,i(10435).Q_)("settings-home",{state:()=>({settingHomeView:"backup"})})},65766:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Y});var o=i(35427),n=i(57268),s=i(94209),l=i(29445),c=i(68398),a=i(45069),r=i(22140),x=i(10435),p=i(41267),f=i(63477),u=i(74003),d=i(6594),_=i(17319),w=i(16097);const v={id:"settings-backup",class:"px-[70px] py-[40px]"},g={class:"flex w-full justify-between"},b={class:"flex flex-col justify-center"},m=["onClick"],y=(0,n._)("i",{class:"iconfont icon-more_icon"},null,-1),k=["src"],h={key:1,class:"iconfont icon-dengdaisousuo text-[48px] text-color-t4"},S={class:"flex flex-col border-b-[1px] border-color-m2 border-opacity-[0.06] py-[18px]"},D={class:"flex h-[68px] rounded-[8px] border-[1px] border-color-b2"},U={class:"relative flex h-full w-[50%] flex-col items-center justify-center border-r-[1px] border-color-b2"},C={class:"text-[16px] text-color-t1"},j=(0,n._)("span",{class:"flex font-ali-55 text-[12px] text-color-t2"}," My invitation code ",-1),I={class:"flex h-full grow flex-col items-center justify-center"},H={class:"text-[16px] text-color-t1"},L=(0,n._)("i",{class:"iconfont icon-more_icon text-color-t3"},null,-1),T=(0,n._)("i",{class:"iconfont icon-more_icon"},null,-1),V={class:"mt-[20px] w-full text-left font-ali-75 text-[16px] text-color-t2"},R={class:"mt-[20px] flex items-center justify-between"},M={class:"flex h-[41px] flex-wrap content-between"},z={class:"w-full text-[14px] text-color-t2"},A={class:"w-full font-ali-55 text-[12px] text-color-t3"},J={class:"mt-[20px] flex items-center justify-between"},N={class:"flex h-[41px] flex-wrap content-between"},P={class:"w-full text-[14px] text-color-t2"},W={class:"w-full font-ali-55 text-[12px] text-color-t3"},Y=(0,n.aZ)({__name:"settings-sub-en",setup(t){const e=(0,a.o)(),i=(0,r.useUserStore)(),Y=(0,p.i)(),Z=(0,d.t)(),{loginShow:q,isLogin:B,user:E}=(0,x.Jk)(i),O=()=>{B.value?e.settingHomeView="userInfo":q.value=!0},Q=()=>{e.settingHomeView="subInfo"},F=()=>{e.settingHomeView="inviteRecord"},G=()=>{e.settingHomeView="inviteRule"},K=()=>{navigator.clipboard&&navigator.clipboard.writeText(E.value.inviteCode).then((()=>{_.R.success({message:"Invitation code copied to clipboard"})}))},X=async()=>{const t=await Y.exportData();(0,f.Bq)(t,u.sM?"wetab-":"hitab-")},$=async()=>{const t=await(0,f.Y)(".data,text/hitab,text/plain,application/json","readAsText");await Y.importData(JSON.parse(t))};return(0,n.bv)((()=>{Z.getInviteList(1)})),u.AN&&(0,n.YP)((()=>i.isLogin&&i.user.vip),(t=>{t?(Z.getInviteList(1),Z.getSubRecord()):Z.clear()})),(t,e)=>{const i=o.Z;return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",g,[(0,n._)("div",b,[(0,n._)("span",{class:"block max-w-[200px] grow-0 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[18px] text-color-t1",onClick:O},(0,s.toDisplayString)((0,l.SU)(B)?(0,l.SU)(E).nickname:""),1),(0,n._)("div",null,[(0,n._)("span",{class:"inline-flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t3",onClick:(0,c.withModifiers)(Q,["stop"])},[(0,n.Uk)((0,s.toDisplayString)((0,l.SU)(E).vipPlan+":"+(0,l.SU)(E).vipEndTimeStr)+" ",1),y],8,m)])]),(0,n._)("div",{class:"h-[48px] w-[48px] flex-shrink-0 cursor-pointer overflow-hidden rounded-full",onClick:O},[(0,l.SU)(B)?((0,n.wg)(),(0,n.iD)("img",{key:0,src:(0,l.SU)(E).avatar||(0,l.SU)(w.c)},null,8,k)):((0,n.wg)(),(0,n.iD)("i",h))])]),(0,n._)("div",S,[(0,n._)("div",D,[(0,n._)("div",U,[(0,n._)("span",C,(0,s.toDisplayString)((0,l.SU)(E).inviteCode),1),j,(0,n._)("i",{class:"iconfont icon-copy absolute top-[8px] right-[8px] cursor-pointer text-[16px] text-color-t4 hover:text-color-t3",onClick:K})]),(0,n._)("div",I,[(0,n._)("span",H,(0,s.toDisplayString)((0,l.SU)(Z).inviteListCount),1),(0,n._)("span",{class:"flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t2",onClick:F},[(0,n.Uk)(" Invitation record "),L])])]),(0,n._)("div",{class:""},[(0,n._)("span",{class:"mt-[8px] inline-flex cursor-pointer items-center font-ali-55 text-[12px] text-color-t3",onClick:G},[(0,n.Uk)(" Invitation offer rules "),T])])]),(0,n._)("button",V,(0,s.toDisplayString)("备份数据"),1),(0,n._)("div",R,[(0,n._)("div",M,[(0,n._)("span",z,(0,s.toDisplayString)("导出备份数据"),1),(0,n._)("span",A,(0,s.toDisplayString)("将本地数据导出"),1)]),(0,n.Wm)(i,{size:"medium",icon:"icon-export_icon text-[20px]",onClick:X},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.toDisplayString)("导出"),1)])),_:1})]),(0,n._)("div",J,[(0,n._)("div",N,[(0,n._)("span",P,(0,s.toDisplayString)("导入备份数据"),1),(0,n._)("span",W,(0,s.toDisplayString)("将本地数据导入"),1)]),(0,n.Wm)(i,{size:"medium",icon:"icon-import_icon text-[20px]",onClick:$},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.toDisplayString)("导入"),1)])),_:1})])])}}})}}]);