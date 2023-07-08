"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[1719,7387,4752],{47387:(e,l,t)=>{t.r(l),t.d(l,{default:()=>a});var o=t(57268),r=t(94209);const n={class:"grid grid-cols-3 gap-[12px] py-[12px]"},i=["onClick"],a=(0,o.aZ)({__name:"gradient-list",props:{list:null,deg:{default:25}},emits:["on-select"],setup(e,l){let{emit:t}=l;const a=e;return(e,l)=>((0,o.wg)(),(0,o.iD)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.list,((e,l)=>((0,o.wg)(),(0,o.iD)("div",{key:l,class:"group h-[114px] cursor-pointer overflow-hidden rounded-[4px]",style:(0,r.normalizeStyle)({backgroundImage:`linear-gradient(${a.deg}deg, ${e.colors.join(",")})`}),onClick:l=>t("on-select",e)},null,12,i)))),128))]))}})},44752:(e,l,t)=>{t.r(l),t.d(l,{default:()=>i});var o=t(57268),r=t(94209),n=t(29445);const i=(0,o.aZ)({__name:"gradient-progress-bar",props:{value:null,reverse:{type:Boolean}},emits:["update:value"],setup(e,l){let{emit:t}=l;const i=e,a=(0,n.iH)(),s=(0,n.iH)(!1);function u(e){var l;const o=(null===(l=a.value)||void 0===l?void 0:l.getBoundingClientRect().left)||0;let r=e.clientX-o;i.reverse&&(r=100-r),t("update:value",r)}return(0,o.bv)((()=>{var e;null===(e=a.value)||void 0===e||e.addEventListener("mousedown",(e=>{var l;s.value=!0;const o=(null===(l=a.value)||void 0===l?void 0:l.getBoundingClientRect().left)||0;let r=e.clientX-o;i.reverse&&(r=100-r),t("update:value",r)})),document.addEventListener("mouseup",(()=>{s.value=!1})),document.addEventListener("mousemove",(e=>{var l;if(!s.value)return;const o=(null===(l=a.value)||void 0===l?void 0:l.getBoundingClientRect().left)||0;let r=e.clientX-o;r<0&&(r=0),r>100&&(r=100),i.reverse&&(r=100-r),t("update:value",r)}))})),(0,o.Ah)((()=>{var e;document.removeEventListener("mouseup",(()=>null)),document.removeEventListener("mousemove",(()=>null)),null===(e=a.value)||void 0===e||e.removeEventListener("mousedown",(()=>null))})),(l,t)=>((0,o.wg)(),(0,o.iD)("div",{ref_key:"barRef",ref:a,class:(0,r.normalizeClass)(["relative h-[8px] w-[100px] cursor-pointer rounded-[8px] bg-color-b2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",[s.value?"cursor-grabbing":"cursor-grab"]]),onClick:u},[(0,o._)("div",{class:(0,r.normalizeClass)(["absolute top-0 bottom-0 h-full rounded-[8px] bg-color-m2 transition-all",[i.reverse?"right-0":"left-0"]]),style:(0,r.normalizeStyle)({width:e.value+"px"})},null,6)],2))}})},21719:(e,l,t)=>{t.r(l),t.d(l,{default:()=>D});var o=t(57268),r=t(94209),n=t(29445),i=t(68398),a=t(10435),s=t(41776),u=t(3627),d=t(47387),c=t(44752);const p=e=>((0,o.dD)("data-v-76437dea"),e=e(),(0,o.Cn)(),e),v={class:"px-[52px]"},x={class:"flex items-center border-b border-solid border-color-m2 border-opacity-5 pt-[80px] pb-[11px]"},m=p((()=>(0,o._)("div",{class:"mx-[12px] h-[12px] w-[1px] bg-color-m2 bg-opacity-[0.08]"},null,-1))),g=["onClick"],b={class:"relative px-[52px] mb:px-0"},f={class:"oper-view flex h-[77px] items-center border-t border-solid border-color-m2 border-opacity-5"},h={class:"flex flex-1 items-center justify-end"},y={class:"ml-[16px] whitespace-nowrap font-ali-55 text-[14px] text-color-t2"},_=p((()=>(0,o._)("div",{class:"mx-[28px] h-[12px] w-[1px] bg-color-m2 bg-opacity-[0.08]"},null,-1))),w={class:"flex flex-1 items-center"},C={class:"mr-[16px] whitespace-nowrap font-ali-55 text-[14px] text-color-t2"},k={class:"absolute top-[-30px] left-[50%] flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-[30px] bg-color-b3 p-[3px]"},S={class:"pl-[2px] font-ali-55 text-[12px] text-color-t2"},z=p((()=>(0,o._)("div",{class:"z-1 pointer-events-none absolute inset-[4px] flex items-center justify-center rounded-[44px] border border-dashed border-color-m2 border-opacity-60"},null,-1))),M=(0,o.aZ)({__name:"wallpaper-gradient",setup(e){const l=(0,s.I)(),t=(0,u.M)(),p=(0,n.iH)(),M=(0,n.iH)({x:1,y:24}),D=(0,n.iH)(),{colorSystems:E,activeColorType:L,linerColors:U,colorConf:j}=(0,a.Jk)(l),{gradientConf:H}=(0,a.Jk)(t);function R(e){var t;L.value!==e&&(l.setActiveColorType(e),null===(t=D.value)||void 0===t||t.scrollTo({top:0,behavior:"smooth"}))}function B(e){t.setGradientBg(e.colors)}const I=(0,n.iH)(!1);function T(e){let l=24*Math.cos(e*Math.PI/180),t=24*Math.sin(e*Math.PI/180);return l=l>0?24-l:22+Math.abs(l),t=t>0?22+t:24-Math.abs(t),{x:l,y:t}}function A(e,t){l.setColorConf({...j.value,[t]:e})}return(0,o.bv)((()=>{var e,l;const o=T((null==H||null===(e=H.value)||void 0===e?void 0:e.deg)||0);M.value=o,null===(l=p.value)||void 0===l||l.addEventListener("mousedown",(()=>{I.value=!0})),document.addEventListener("mouseup",(()=>{I.value=!1})),document.addEventListener("mousemove",(e=>{var l;if(!I.value)return;const{left:o,top:r}=(null===(l=p.value)||void 0===l?void 0:l.getBoundingClientRect())||{},n=e.clientX-Number(o)-26,i=e.clientY-Number(r)-26;let a=Math.atan2(i,n)*(180/Math.PI)+90;a=a<0?a+360:a,t.setGradientDeg(Math.round(a));const s=T(a);M.value=s}))})),(0,o.Ah)((()=>{var e;document.removeEventListener("mousemove",(()=>null)),document.removeEventListener("mouseup",(()=>null)),null===(e=p.value)||void 0===e||e.removeEventListener("mousedown",(()=>null))})),(e,l)=>{var t,a;return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.normalizeClass)(["flex h-full flex-col",[I.value?"!cursor-grabbing":""]])},[(0,o._)("div",v,[(0,o._)("div",x,[(0,o._)("div",{class:(0,r.normalizeClass)(["flex h-[16px] w-[36px] cursor-pointer items-center justify-center rounded-[8px] border border-solid border-color-m2 bg-color-m2 font-ali-55 text-[12px] leading-none transition-colors",["all"===(0,n.SU)(L)?"border-opacity-100 bg-opacity-100 text-color-m1":"border-opacity-10 bg-opacity-5 text-color-t3 "]]),onClick:l[0]||(l[0]=e=>R("all"))}," All ",2),m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(E),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.type,class:"expand-click mr-[16px] flex h-[16px] w-[16px] cursor-pointer items-center justify-center rounded-[8px]",style:(0,r.normalizeStyle)({backgroundColor:e.bg}),onClick:l=>R(e.type)},[(0,o._)("div",{class:(0,r.normalizeClass)(["h-[8px] w-[8px] rounded-[8px]",[(0,n.SU)(L)===e.type?"bg-color-white":"bg-color-none"]])},null,2)],12,g)))),128))])]),(0,o._)("div",{ref_key:"scrollRef",ref:D,class:"hi-scroll flex-1 pl-[52px] pr-[46px] mb:pl-[20px] mb:pr-[14px]"},[(0,o.Wm)(d.default,{deg:null===(t=(0,n.SU)(H))||void 0===t?void 0:t.deg,list:(0,n.SU)(U),onOnSelect:B},null,8,["deg","list"])],512),(0,o._)("div",b,[(0,o._)("div",f,[(0,o._)("div",h,[(0,o.Wm)(c.default,{value:(0,n.SU)(j).pigment,reverse:!0,"onUpdate:value":l[1]||(l[1]=e=>A(e,"pigment"))},null,8,["value"]),(0,o._)("span",y,(0,r.toDisplayString)("色彩"),1)]),_,(0,o._)("div",w,[(0,o._)("span",C,(0,r.toDisplayString)("亮度"),1),(0,o.Wm)(c.default,{value:(0,n.SU)(j).lighting,"onUpdate:value":l[2]||(l[2]=e=>A(e,"lighting"))},null,8,["value"])])]),(0,o._)("div",k,[(0,o._)("div",{ref_key:"ringRef",ref:p,class:(0,r.normalizeClass)(["relative flex h-full w-full items-center justify-center rounded-[40px] bg-color-m2 bg-opacity-[0.08]",[I.value?"cursor-grabbing":"cursor-grab"]])},[(0,o._)("div",{class:"flex h-[34px] w-[34px] cursor-default items-center justify-center rounded-[20px] bg-color-b3",onClick:l[3]||(l[3]=(0,i.withModifiers)((()=>{}),["stop"])),onMousedown:l[4]||(l[4]=(0,i.withModifiers)((()=>{}),["stop"]))},[(0,o._)("span",S,(0,r.toDisplayString)(null===(a=(0,n.SU)(H))||void 0===a?void 0:a.deg)+"° ",1)],32),z,(0,o._)("div",{class:(0,r.normalizeClass)(["expand-click absolute z-[12] h-[8px] w-[8px] rounded-[8px] bg-color-m2",[I.value?"cursor-grabbing":"cursor-grab"]]),style:(0,r.normalizeStyle)({top:M.value.x+"px",left:M.value.y+"px"})},null,6)],2)])])],2)}}});const D=(0,t(76911).Z)(M,[["__scopeId","data-v-76437dea"]])}}]);