"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[9256,3617],{38721:(e,t,l)=>{l.r(t);var i=l(68398),n=l(43451),a=l(57268),o=l(29445),s=l(94209),c=l(57379),r=l(72294),m=l(90282),u=l(17411),d=l(4303),h=l(32400),f=l(13197),p=l(45911),v=l(10096);const g=e=>((0,a.dD)("data-v-a72937dc"),e=e(),(0,a.Cn)(),e),w={key:0},x={class:"flex h-full w-full select-none flex-col items-center justify-center"},b={class:"flex h-full w-full select-none flex-col items-center justify-center"},y={class:"absolute right-[38px] bottom-[40px] flex"},S=[g((()=>(0,a._)("i",{class:"iconfont icon-toggle_s text-[20px]"},null,-1)))],k=[g((()=>(0,a._)("i",{class:"iconfont icon-minimize text-[20px]"},null,-1)))],_=(0,a.aZ)({__name:"widget-clock-modal",setup(e){let t;const l=(0,o.iH)(0),g=(0,o.iH)(0),_=(0,d.useClockStore)(),{show:U,toggleType:z,dialogRef:T,clockType:C,timerNumberArr:Z,dateStr:D,weekDay:W,weekDayStr:j,dateNumberArr:A,exitFull:B}=(0,h.dd)(),E=(0,o.iH)(window.innerWidth/30),H={box:{width:"8em",height:"6.5em",padding:"0.25em",spacing:"1.25em",radius:"0.75em"},flip:{width:"3.5em",height:"2.875em",gap:"0.25em",radius:"0.5em",axisHeight:"1.25em",upBgImg:"https://static.wetab.link/hitab/clock-widget/up%402x.png",dowBgImg:"https://static.wetab.link/hitab/clock-widget/down%402x.png",axisImg:"https://static.wetab.link/hitab/clock-widget/axi%402x.png"}},R={nnGap:"0.5em",ncGap:"1em",colonWidth:"0.5em",colonHeight:"2em"},I={width:"2.5em",height:"4em"},L={ml:"0.125em",h:"0.5em",w:"0.4375em"};function M(){var e;null===(e=T.value)||void 0===e||e.requestFullscreen()}(0,a.bv)((()=>{_.startTimer()})),(0,a.YP)((()=>U.value),(e=>{e&&M()})),(0,a.YP)((()=>T.value),(()=>{var e,i;null===(e=T.value)||void 0===e||e.addEventListener("fullscreenchange",(()=>{var e;(null===(e=document.fullscreenElement)||void 0===e?void 0:e.hasAttribute("data-clock"))||_.setModal(!1)})),null===(i=T.value)||void 0===i||i.addEventListener("mousemove",(0,p.Z)((e=>{!function(e){const{movementX:i}=e;t&&window.clearTimeout(t),Math.abs(i)>20&&!function(e,t){return e>0==t>0}(i,l.value)&&(l.value=i,g.value=g.value+1);g.value>=3&&(B(),g.value=0);t=window.setTimeout((()=>{g.value=0,l.value=0}),60)}(e)}),20)),U.value&&M()})),(0,a.Ah)((()=>{_.clearTimer(),t&&window.clearTimeout(t)}));return(0,f.C)((0,v.Z)("hi-clock-modal"),(e=>{E.value=e/30}),!0)(),(e,t)=>{const l=n.Z;return(0,a.wg)(),(0,a.j4)(i.Transition,{name:"fade"},{default:(0,a.w5)((()=>[(0,o.SU)(U)?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(l,{class:"dark","close-btn":!1,"full-screen":!0,"full-screen-btn":!1},{default:(0,a.w5)((()=>[(0,a._)("div",{ref_key:"dialogRef",ref:T,"data-clock":"true",class:"relative h-full w-full bg-color-clock-b1",style:(0,s.normalizeStyle)({fontSize:E.value+"px"})},[(0,a.wy)((0,a._)("div",x,[(0,a.Wm)(c.Z,{box:H.box,"show-sec":!0,flip:H.flip,time:(0,o.SU)(Z)},null,8,["box","flip","time"]),(0,a._)("div",{class:"flex items-center font-ali-55 leading-none text-[#5E5B6A]",style:(0,s.normalizeStyle)({paddingTop:"1.1875em"})},[(0,a._)("span",{style:(0,s.normalizeStyle)({fontSize:"0.3125em"})},(0,s.toDisplayString)((0,o.SU)(D)),5),(0,a._)("span",{style:(0,s.normalizeStyle)({fontSize:"0.3125em"}),class:"ml-[28px]"},(0,s.toDisplayString)((0,o.SU)(j)),5)],4)],512),[[i.vShow,1===(0,o.SU)(C)]]),(0,a.wy)((0,a._)("div",b,[(0,a._)("div",{class:"flex w-full items-center justify-between",style:(0,s.normalizeStyle)({paddingLeft:"2.75em",paddingRight:"2.75em"})},[(0,a.Wm)(m.Z,{style:(0,s.normalizeStyle)({height:"0.5em",width:4===(0,o.SU)(W)?"2.125em":"1.5625em"}),"week-day":(0,o.SU)(W)},null,8,["style","week-day"]),(0,a.Wm)(u.Z,{"number-props":L,"date-number-arr":(0,o.SU)(A),"show-year":!0},null,8,["date-number-arr"])],4),(0,a._)("div",{class:"w-full",style:(0,s.normalizeStyle)({paddingTop:"0.625em",paddingLeft:"2.75em",paddingRight:"2.75em",paddingBottom:"1.125em"})},[(0,a.Wm)(r.Z,{class:"clock-shadow h-full w-full overflow-hidden bg-color-black",style:(0,s.normalizeStyle)({height:"6em",borderRadius:"0.75em"}),eitem:I,box:R,time:(0,o.SU)(Z)},null,8,["style","time"])],4)],512),[[i.vShow,2===(0,o.SU)(C)]]),(0,a._)("div",y,[(0,a._)("div",{class:"flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] text-[#5C5967] transition-all hover:bg-color-black hover:text-[#C5BED6]",onClick:t[0]||(t[0]=function(){return(0,o.SU)(z)&&(0,o.SU)(z)(...arguments)})},S),(0,a._)("div",{class:"ml-[14px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] text-[#5C5967] transition-all hover:bg-color-black hover:text-[#C5BED6]",onClick:t[1]||(t[1]=function(){return(0,o.SU)(B)&&(0,o.SU)(B)(...arguments)})},k)])],4)])),_:1})])):(0,a.kq)("",!0)])),_:1})}}});const U=(0,l(76911).Z)(_,[["__scopeId","data-v-a72937dc"]]);var z=l(96755),T=l(75008),C=l(63477);(()=>{const e=(0,C.em)(),t=(0,i.createApp)(U);(0,T.f)(t),t.use(z.M),t.mount(e)})()}}]);