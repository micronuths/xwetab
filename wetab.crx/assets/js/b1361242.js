/*! For license information please see b1361242.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7352],{13409:(t,e,l)=>{l.d(e,{o7:()=>z,t4:()=>E,O9:()=>_,f8:()=>Y,dJ:()=>H,zY:()=>V,hQ:()=>q,XM:()=>U,ST:()=>P});var i=l(994),s=l(80661),o=l.n(s),a=l(74003),n=l(63477),r=l(55332);let c;try{new EventTarget,c=!0}catch(t){c=!1}var u=c?EventTarget:class{constructor(){this.e={}}addEventListener(t,e,l=!1){this.t(t).push(e)}removeEventListener(t,e,l=!1){const i=this.t(t),s=i.indexOf(e);s>-1&&i.splice(s,1)}dispatchEvent(t){return t.target=this,Object.freeze(t),this.t(t.type).forEach((e=>e(t))),!0}t(t){return this.e[t]=this.e[t]||[]}};var p=c?Event:class{constructor(t){this.type=t}};class d extends p{constructor(t,e){super(t),this.newState=e.newState,this.oldState=e.oldState,this.originalEvent=e.originalEvent}}const v="active",h="passive",g="hidden",m="frozen",f="terminated",x="object"==typeof safari&&safari.pushNotification,w=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],y=t=>(t.preventDefault(),t.returnValue="Are you sure?"),b=[[v,h,g,f],[v,h,g,m],[g,h,v],[m,g],[m,v],[m,h]].map((t=>t.reduce(((t,e,l)=>(t[e]=l,t)),{}))),S=()=>document.visibilityState===g?g:document.hasFocus()?v:h;var k=new class extends u{constructor(){super();const t=S();this.s=t,this.i=[],this.a=this.a.bind(this),w.forEach((t=>addEventListener(t,this.a,!0))),x&&addEventListener("beforeunload",(t=>{this.n=setTimeout((()=>{t.defaultPrevented||t.returnValue.length>0||this.r(t,g)}),0)}))}get state(){return this.s}get pageWasDiscarded(){return document.wasDiscarded||!1}addUnsavedChanges(t){!this.i.indexOf(t)>-1&&(0===this.i.length&&addEventListener("beforeunload",y),this.i.push(t))}removeUnsavedChanges(t){const e=this.i.indexOf(t);e>-1&&(this.i.splice(e,1),0===this.i.length&&removeEventListener("beforeunload",y))}r(t,e){if(e!==this.s){const l=((t,e)=>{for(let l,i=0;l=b[i];++i){const i=l[t],s=l[e];if(i>=0&&s>=0&&s>i)return Object.keys(l).slice(i,s+1)}return[]})(this.s,e);for(let e=0;e<l.length-1;++e){const i=l[e],s=l[e+1];this.s=s,this.dispatchEvent(new d("statechange",{oldState:i,newState:s,originalEvent:t}))}}}a(t){switch(x&&clearTimeout(this.n),t.type){case"pageshow":case"resume":this.r(t,S());break;case"focus":this.r(t,v);break;case"blur":this.s===v&&this.r(t,S());break;case"pagehide":case"unload":this.r(t,t.persisted?m:f);break;case"visibilitychange":this.s!==m&&this.s!==f&&this.r(t,S());break;case"freeze":this.r(t,m)}}};const D=k,_={font:["rgba(248, 248, 248, 1)","rgba(28, 28, 30, 1)","rgba(58, 58, 60, 1)","rgba(95, 95, 99, 1)","rgba(142, 142, 147, 1)","rgba(176, 176, 182, 1)","rgba(199, 199, 204, 1)"],background:["rgba(248, 248, 248, 1)","rgba(58, 58, 60, 1)","rgba(28, 28, 30, 1)","rgba(244, 171, 18, 1)","rgba(74, 197, 92, 1)","rgba(35, 207, 168, 1)","rgba(67, 133, 241, 1)","rgba(56, 100, 255, 1)","rgba(118, 33, 249, 1)","rgba(224, 78, 150, 1)","rgba(224, 78, 78, 1)","rgba(253, 90, 90, 1)","rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"]},C=["rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"],V=()=>(0,i.Z)(C),E=Array(20).fill(0).map(((t,e)=>{const l=`${e+1}`.padStart(2,"0");return{bgImage:{large:`${GlobalGetApi}${a.c1}/widget-background/background${l}_larg.jpg`,medium:`${GlobalGetApi}${a.c1}/widget-background/background${l}_medium.jpg`,small:`${GlobalGetApi}${a.c1}/widget-background/background${l}_small.jpg`},thumbnail:`${GlobalGetApi}${a.c1}/widget-background/background${l}.jpg`}})),j=(t,e)=>{let l=!1;t.isLeapYear()&&1===t.month()&&29===t.date()&&(l=!0);let i=(0,n.sG)(t.format(`${e}-MM-DD`));return l&&!i.isLeapYear()&&(i=i.add(-1,"day")),i.valueOf()>=T.valueOf()||(i=(0,n.sG)(t.format(`${e+1}-MM-DD`)),l&&!i.isLeapYear()&&(i=i.add(-1,"day"))),i},I=t=>{const e=r.q7.fromDate(new Date(t)),l=r.q7.fromDate(new Date).getYear(),i=o()((0,n.EJ)({year:l,month:e.getMonth(),day:e.getDay()}));return i.valueOf()>=T.valueOf()?i:o()((0,n.EJ)({year:l+1,month:e.getMonth(),day:e.getDay()}))},F=t=>{if(t.date()>=T.date())return(0,n.sG)(`${T.year()}-${T.month()+1}-${Math.min(T.daysInMonth(),t.date())}`);const e=T.add(1,"month");return(0,n.sG)(`${e.year()}-${e.month()+1}-${Math.min(e.daysInMonth(),t.date())}`)},O=t=>{const e=r.q7.fromDate(new Date),l=r.q7.fromDate(new Date(t)),i=e.getDay(),s=l.getDay();if(s>=i)return o()((0,n.EJ)({year:e.getYear(),month:e.getMonth(),day:s}));const a=r.o7.fromYm(e.getYear(),e.getMonth()).next(1);return o()((0,n.EJ)({year:a.getYear(),month:a.getMonth(),day:s}))},P=t=>{const e=Date.now(),l=o()().endOf("day").valueOf()+1;return window.setTimeout((()=>{try{t(l),P(t)}catch(t){}}),l-e)},U=t=>{const e=Date.now(),l=o()().add(30,"minute").valueOf();return window.setTimeout((()=>{try{t(l),U(t)}catch(t){}}),l-e)};let T=o()().startOf("day"),M=T.year();P((()=>{T=o()(),M=T.year()}));const H=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!t)return 0;if(t>=T.valueOf())return o()(t).diff(T,"day");if("lunar"===e){return O(t).diff(T,"day")}const l=o()(t),i=F(l),s=i.diff(T,"day");return s},q=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!t)return 0;if(t>=T.valueOf())return o()(t).diff(T,"day");if("lunar"===e){return I(t).diff(T,"day")}const l=o()(t),i=j(l,M),s=i.diff(T,"day");return s},Y=t=>{const e=Math.floor(t/86400);t-=86400*e;const l=Math.floor(t/3600)%24;t-=3600*l;const i=Math.floor(t/60)%60;return{d:e,h:l,m:i,s:(t-=60*i)%60}};class z{views=new Map;execTime=0;execTimer=null;isPageVisible=!0;setViewVisibleInterval(){0!==this.views.size?this.isPageVisible?this.isViewVisible?this.setInterval(this.interval):this.setInterval(this.intervalOnViewOut):this.setPageVisibleInterval():this.setInterval(0)}setPageVisibleInterval(){0!==this.views.size?this.isPageVisible?this.setViewVisibleInterval():this.setInterval(this.intervalOnPageHide):this.setInterval(0)}setInterval(t){if(this.execTimer&&window.clearTimeout(this.execTimer),t<=0)return;let e=t;this.execTime&&(e=t-(Date.now()-this.execTime),e<0&&(e=0)),this.execTimer=window.setTimeout((async()=>{await this.execFn(),this.setInterval(t)}),e)}watchPageStatus(){D.addEventListener("statechange",(t=>{"hidden"===t.newState?this.isPageVisible=!1:this.isPageVisible=!0,this.setPageVisibleInterval()}))}onChangeViewVisible(){let t=!1;this.views.forEach((e=>{t||(t=e)})),this.isViewVisible=t,this.setViewVisibleInterval()}initIo(){this.io=new IntersectionObserver((t=>{t.forEach((t=>{this.views.has(t.target)&&this.views.set(t.target,t.intersectionRatio>0)})),this.onChangeViewVisible()}),{threshold:[0]})}constructor(t,e){if(!e.interval)throw new Error("请设置间隔时间");this.interval=e.interval,this.intervalOnViewOut=e.intervalOnViewOut,this.intervalOnPageHide=e.intervalOnPageHide,this.execFn=async()=>{try{await t()}catch(t){}this.execTime=Date.now()},e.immediate&&this.execFn(),this.watchPageStatus(),this.initIo(),e.view&&this.addView(e.view)}addView(t){this.views.set(t,!1),this.io.observe(t)}removeView(t){this.views.delete(t),this.io.unobserve(t),this.onChangeViewVisible()}}},22854:(t,e,l)=>{l.d(e,{C:()=>o});var i=l(29445),s=l(57268);const o=(t,e,l)=>{const o=(0,i.iH)(t);e.onChangeState=t=>{o.value={...t}};const a=(0,s.Fl)((()=>l?l[o.value.size]:null));return{propsState:o,HomeComp:a}}},58832:(t,e,l)=>{l.r(e),l.d(e,{mountHome:()=>h,widgetApp:()=>v});var i=l(29445),s=l(68398),o=l(57268),a=l(81293),n=l(13409);const r=(0,l(39621).useStockStore)(),c=new n.o7((()=>{r.reqStocksPrice()}),{immediate:!1,interval:5e3,intervalOnPageHide:0,intervalOnViewOut:12e5}),u=(0,o.aZ)({__name:"widget-stock-home",props:{size:null,id:null},setup(t){const e=t,{HomeComp:l}=(0,a.fq)(e),{clickWidget:s}=(0,a.dd)(),n=(0,i.iH)();return(0,o.bv)((()=>{n.value&&c.addView(n.value)})),(0,o.Jd)((()=>{c.removeView(n.value)})),(t,e)=>((0,o.wg)(),(0,o.iD)("section",{class:"contents cursor-pointer",onClick:e[0]||(e[0]=function(){return(0,i.SU)(s)&&(0,i.SU)(s)(...arguments)})},[(0,o._)("div",{ref_key:"componentView",ref:n,class:"h-full w-full"},[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,i.SU)(l))))],512)]))}});var p=l(96755),d=l(75008);const v=(0,i.iH)(null),h=(t,e)=>{const l=(0,s.createApp)(u,e);return(0,d.f)(l),v.value=l,l.use(p.M),l.mount(t),v.value}},81293:(t,e,l)=>{l.d(e,{DS:()=>K,st:()=>Q,dd:()=>J,UV:()=>R,fq:()=>$});var i=l(57268),s=l(94209),o=l(29445),a=l(68398);const n={class:"relative flex h-full flex-row items-center justify-between bg-color-b3 px-[16px] leading-none icon-m:px-[12px] icon-s:px-[12px]"},r={class:"flex-1 overflow-hidden pr-[5px]"},c={class:"text-dot font-ali-75 text-[16px] text-color-t1"},u={class:"mt-[4px] text-[12px] text-color-t3"},p={class:"flex flex-col"},d={class:"flex justify-end font-ali-75 text-[14px] text-color-t2"},v=(0,i.aZ)({__name:"stock-small",setup(t){const{firstData:e,stockColor:l}=K();return(t,v)=>{var h,g,m,f,x,w,y,b,S,k,D,_,C,V;return(0,i.wg)(),(0,i.iD)("section",n,[(0,i._)("div",r,[(0,i._)("h2",c,(0,s.toDisplayString)(null===(h=(0,o.SU)(e))||void 0===h?void 0:h.Name),1),(0,i._)("p",u,(0,s.toDisplayString)(null===(g=(0,o.SU)(e))||void 0===g?void 0:g.SecurityTypeName)+" "+(0,s.toDisplayString)(null===(m=(0,o.SU)(e))||void 0===m?void 0:m.Code),1)]),(0,i._)("div",p,[(0,i._)("h3",d,(0,s.toDisplayString)(null===(f=(0,o.SU)(e))||void 0===f||null===(x=f.hq)||void 0===x?void 0:x.f2),1),(0,i._)("div",{class:"mt-[7px] flex justify-end font-ali-65 text-[12px]",style:(0,s.normalizeStyle)({color:(0,o.SU)(l)(null===(w=(0,o.SU)(e))||void 0===w?void 0:w.trend)})},[(0,i._)("span",null,(0,s.toDisplayString)("up"===(null===(y=(0,o.SU)(e))||void 0===y?void 0:y.trend)?"+":null)+(0,s.toDisplayString)(null===(b=(0,o.SU)(e))||void 0===b||null===(S=b.hq)||void 0===S?void 0:S.f4),1),(0,i.wy)((0,i._)("span",{class:"ml-[6px]"},(0,s.toDisplayString)("up"===(null===(k=(0,o.SU)(e))||void 0===k?void 0:k.trend)?"+":null)+(0,s.toDisplayString)(null===(D=(0,o.SU)(e))||void 0===D||null===(_=D.hq)||void 0===_?void 0:_.f3)+"% ",513),[[a.vShow,null===(C=(0,o.SU)(e))||void 0===C||null===(V=C.hq)||void 0===V?void 0:V.f3]])],4)])])}}}),h={class:"relative flex h-full flex-col bg-color-b3"},g={class:"p-[20px] pb-[0px] leading-none icon-m:p-[16px] icon-m:pb-[0px] icon-s:p-[12px] icon-s:pb-[0px]"},m={class:"flex items-start justify-between"},f={class:"flex flex-1 flex-shrink-0 flex-col overflow-hidden pr-[10px]"},x={class:"text-dot font-ali-75 text-[16px] text-color-t1"},w={class:"mt-[10px] font-ali-55 text-[12px] text-color-t3"},y={class:"flex-1 p-[20px] icon-m:p-[16px] icon-s:p-[12px]"},b={class:"flex h-full flex-col justify-between rounded-[12px] bg-color-b4 pt-[12px] icon-m:pt-[10px] icon-s:pt-[9px]"},S={class:"flex justify-center pb-[12px] font-ali-75 text-[28px] text-color-t2 icon-m:pb-[8px] icon-s:pb-[4px]"},k=(0,i.aZ)({__name:"stock-medium",setup(t){const{firstData:e,stockColor:l,chartRef:n}=K();return(t,r)=>{var c,u,p,d,v,k,D,_,C,V,E,j,I;return(0,i.wg)(),(0,i.iD)("section",h,[(0,i._)("div",g,[(0,i._)("div",m,[(0,i._)("div",f,[(0,i._)("span",x,(0,s.toDisplayString)(null===(c=(0,o.SU)(e))||void 0===c?void 0:c.Name),1),(0,i._)("p",w,(0,s.toDisplayString)(null===(u=(0,o.SU)(e))||void 0===u?void 0:u.SecurityTypeName)+" "+(0,s.toDisplayString)(null===(p=(0,o.SU)(e))||void 0===p?void 0:p.Code),1)]),(0,i._)("div",{class:"flex justify-end font-ali-65 text-[14px] icon-m:flex-col icon-s:flex-col",style:(0,s.normalizeStyle)({color:(0,o.SU)(l)(null===(d=(0,o.SU)(e))||void 0===d?void 0:d.trend)})},[(0,i._)("span",null,(0,s.toDisplayString)("up"===(null===(v=(0,o.SU)(e))||void 0===v?void 0:v.trend)?"+":null)+(0,s.toDisplayString)(null===(k=(0,o.SU)(e))||void 0===k||null===(D=k.hq)||void 0===D?void 0:D.f4),1),(0,i.wy)((0,i._)("span",{class:"ml-[6px] icon-m:ml-[0px] icon-m:mt-[10px] icon-s:ml-[0px] icon-s:mt-[10px]"},(0,s.toDisplayString)("up"===(null===(_=(0,o.SU)(e))||void 0===_?void 0:_.trend)?"+":null)+(0,s.toDisplayString)(null===(C=(0,o.SU)(e))||void 0===C||null===(V=C.hq)||void 0===V?void 0:V.f3)+"% ",513),[[a.vShow,null===(E=(0,o.SU)(e))||void 0===E||null===(j=E.hq)||void 0===j?void 0:j.f3]])],4)])]),(0,i._)("div",y,[(0,i._)("div",b,[(0,i._)("div",{ref_key:"chartRef",ref:n,class:"h-[50px] w-full overflow-hidden"},null,512),(0,i._)("div",S,[(0,i._)("span",null,(0,s.toDisplayString)(null===(I=(0,o.SU)(e).hq)||void 0===I?void 0:I.f2),1)])])])])}}});var D=l(38966);const _={class:"flex h-[50px] items-center justify-between leading-none icon-m:h-[60px] icon-s:h-[56px]"},C={class:"flex-1 flex-shrink-0 overflow-hidden pr-[16px]"},V={class:"text-dot font-ali-75 text-[16px] text-color-t1"},E={class:"mt-[4px] font-ali-55 text-[12px] text-color-t3"},j={class:"flex items-center"},I={class:"ml-[20px] w-[90px] icon-m:ml-[15px] icon-s:ml-[10px]"},F={class:"flex justify-end font-ali-75 text-[14px] leading-[16px] text-color-t2"},O=(0,i.aZ)({__name:"stock-home-item",props:{item:null},setup(t){const e=t,{stockColor:l}=Q();let n;const r=(0,o.iH)();function c(){if(!r.value)return;const t=e.item.chartData;t&&(n?n.changeData(t):(n=new D.kL({container:r.value,autoFit:!0,height:20,width:100}),n.data(t),n.scale({value:{nice:!0}}),n.tooltip(!1),n.axis(!1),n.line().style({lineWidth:2,stroke:l(e.item.trend)}).position("time*value"),n.render()))}return(0,i.bv)((()=>{c()})),(0,i.YP)((()=>e.item.chartData),(()=>{c()}),{immediate:!0}),(0,i.YP)((()=>e.item.trend),(()=>{n.clear();const t=e.item.chartData;n.data(t),n.line().style({lineWidth:2,stroke:l(e.item.trend)}).position("time*value"),n.render()}),{immediate:!1}),(t,n)=>{var c,u,p,d,v;return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("div",C,[(0,i._)("h2",V,(0,s.toDisplayString)(e.item.Name),1),(0,i._)("p",E,(0,s.toDisplayString)(e.item.SecurityTypeName)+" "+(0,s.toDisplayString)(e.item.Code),1)]),(0,i._)("div",j,[(0,i._)("div",{ref_key:"chartRef",ref:r,class:"h-[20px] w-[100px]"},null,512),(0,i._)("div",I,[(0,i._)("h2",F,(0,s.toDisplayString)(null===(c=e.item.hq)||void 0===c?void 0:c.f2),1),(0,i._)("div",{class:"mt-[4px] flex justify-end font-ali-65 text-[12px]",style:(0,s.normalizeStyle)({color:(0,o.SU)(l)(null===(u=e.item)||void 0===u?void 0:u.trend)})},[(0,i._)("span",null,(0,s.toDisplayString)("up"===e.item.trend?"+":null)+(0,s.toDisplayString)(null===(p=e.item.hq)||void 0===p?void 0:p.f4),1),(0,i.wy)((0,i._)("span",{class:"ml-[6px]"},(0,s.toDisplayString)("up"===e.item.trend?"+":null)+(0,s.toDisplayString)(null===(d=e.item.hq)||void 0===d?void 0:d.f3)+"% ",513),[[a.vShow,null===(v=e.item.hq)||void 0===v?void 0:v.f3]])],4)])])])}}}),P={class:"relative flex h-full flex-col overflow-hidden bg-color-b3 px-[24px] py-[18px] icon-m:py-[12px] icon-m:px-[20px] icon-s:py-[6px] icon-s:px-[16px]"},U=(0,i.aZ)({__name:"stock-large",setup(t){const{homeData:e}=Q();return(t,l)=>((0,i.wg)(),(0,i.iD)("section",P,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,o.SU)(e),((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:t.QuoteID,class:(0,s.normalizeClass)(["border-b border-solid border-color-m2 border-opacity-5 last:border-0",[e>1?"icon-m:border-0 icon-s:border-0":""]])},[(0,i.Wm)(O,{item:t},null,8,["item"])],2)))),128))]))}});var T=l(58832),M=l(22854),H=l(39621),q=l(10435),Y=l(48885),z=l(78481),L=l(17319),N=l(62659);const $=t=>{const e={s:v,m:k,l:U};return(0,M.C)(t,T.widgetApp.value,e)},J=()=>{const t=(0,H.useStockStore)();return{clickWidget:()=>{t.setModal(!0)},onCloseModal:()=>{t.setModal(!1)},show:(0,q.Jk)(t).modalShow}},K=()=>{const t=(0,H.useStockStore)(),e=(0,q.Jk)(t),l=(0,o.iH)(),s=(0,i.Fl)((()=>t.fullStateFollowStocks[0]));let a;const n=t=>"up"===t?e.stockColor.value.up:e.stockColor.value.down,r=()=>{if(!l.value)return;const t=s.value.chartData;t&&(a?a.changeData(t):(a=new D.kL({container:l.value,autoFit:!0,height:50}),a.data(t),a.scale({value:{nice:!0}}),a.tooltip(!1),a.axis(!1),a.line().style({lineWidth:2,stroke:n(s.value.trend)}).position("time*value"),a.render()))};return(0,i.YP)((()=>N.EA.value),(()=>{a&&a.forceFit()})),(0,i.YP)((()=>s.value.trend),(()=>{if(a){const t=s.value.chartData;a.clear(),a.data(t),a.line().style({lineWidth:2,stroke:n(s.value.trend)}).position("time*value"),a.render()}})),(0,i.YP)((()=>s.value.chartData),(()=>{a&&r()})),(0,i.bv)((()=>{r()})),(0,i.YP)((()=>s.value.trend),(()=>{r()})),{stockColor:n,firstData:s,chartRef:l}},Q=()=>{const t=(0,H.useStockStore)(),e=(0,q.Jk)(t);return{stockColor:t=>"up"===t?e.stockColor.value.up:e.stockColor.value.down,homeData:(0,i.Fl)((()=>e.fullStateFollowStocks.value.length>4?e.fullStateFollowStocks.value.slice(0,4):e.fullStateFollowStocks.value))}};function W(t){const e=(0,H.useStockStore)(),l=(0,q.Jk)(e),i=t.split(","),s=Number(i[8]),o=s>0?l.stockColor.value.up:l.stockColor.value.down;return{time:i[0],open:Number(i[1]),close:Number(i[2]),heigh:Number(i[3]),low:Number(i[4]),cjl:Number(i[5]),cje:Number(i[6]),zf:Number(i[7]),risePercent:s>0?"+"+i[8]:i[8],rise:s>0?"+"+i[9]:i[9],hs:Number(i[10]),color:o}}const R=()=>{const t=(0,H.useStockStore)(),e=(0,q.Jk)(t),l=(0,o.iH)(!1),s=(0,o.iH)([]),a=(0,o.iH)(e.fullStateFollowStocks.value[0]),n=(0,o.iH)(!0),r=(0,o.iH)(!1),c=(0,o.iH)(""),u=(0,o.iH)(!1);let p;const d=(0,o.iH)(),v=(0,o.iH)("分时");const h=(0,Y.Z)((async t=>{u.value=!1;const{value:e}=t.target;if(!e)return void(s.value=[]);const[l,i]=await(0,z.pg)(e);if(l||!i)return s.value=[],void(u.value=!0);u.value=!1;const o=i.map((t=>t.QuoteID)),[a,n]=await(0,z._)(o);if(a||!n)return;const r=i.map(((t,e)=>({...t,trend:n[e].f4>=0?"up":"down",hq:n[e]})));s.value=r}),800),g=t=>{l.value=!1,a.value.QuoteID!==t.QuoteID&&(a.value=t,v.value="分时",f(80,1))};async function m(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const l=a.value.QuoteID,[i,s]=await(0,z.zu)({secid:l,lmt:t,klt:e});if(i||!s)return!1;const o=[];return s.forEach((t=>{o.push(W(t))})),o}async function f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!d.value)return;const l=await m(t,e);l&&(p&&p.destroy(),p=new D.kL({container:d.value,autoFit:!0,width:604,height:320}),p.data(l),p.scale({open:{nice:!0,tickCount:0,range:[.1,.9]}}),p.tooltip({showTitle:!1,showCrosshairs:!0,showMarkers:!1,crosshairs:{type:"xy",follow:!0,line:{style:{lineDash:[2,2]}}},containerTpl:'<div class="g2-tooltip"><p class="g2-tooltip-title"></p><ul class="g2-tooltip-list"></ul></div>',itemTpl:'   \n            <ul class="g2-tooltip-list">\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">时间</span><span class="g2-tooltip-value">{time}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">价格</span><span class="g2-tooltip-value" style="color:{color}">{close}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌额</span><span class="g2-tooltip-value" style="color:{color}">{rise}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌幅</span><span class="g2-tooltip-value" style="color:{color}">{risePercent}%</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交量</span><span class="g2-tooltip-value">{cjl}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交额</span><span class="g2-tooltip-value">{cje}</span>\n              </li>\n            </ul>\n          '}),p.axis(!1),p.area().style({fill:"l(90) 0:#8499EF 0.6:#8499EF 1:#ffffff"}).position("time*open"),p.line().style({lineWidth:1,stroke:"#8499EF"}).position("time*open").tooltip("time*open*close*rise*risePercent*cjl*cje*color",((t,e,l,i,s,o,a,n)=>({time:t,open:e,close:l,rise:i,risePercent:s,cjl:o,cje:a,color:n}))),p.render())}const x=(0,i.Fl)((()=>!!e.followStocks.value.find((t=>t.QuoteID===a.value.QuoteID))));return(0,i.YP)((()=>e.modalShow.value),(t=>{t&&(0,i.Y3)((()=>{p||f(80,1),n.value&&(a.value=e.fullStateFollowStocks.value[0],n.value=!1)}))})),{followList:e.fullStateFollowStocks,stockColor:t=>"up"===t?e.stockColor.value.up:e.stockColor.value.down,onClickEdit:t=>{l.value=t},isEdit:l,onClickRemove:(i,s)=>{const o=[...e.followStocks.value];if(1===o.length)return L.R.fail({message:"请至少保留一条数据"}),l.value=!1,!1;o.splice(i,1),s.QuoteID===a.value.QuoteID&&(a.value=o[0],v.value="分时",f(80,1)),t.setFollowStocks(o)},onInputSearchKey:h,isEmpty:u,searchResult:s,onClickSearchItem:function(t){r.value=!0,g(t)},currentStock:a,onSelectStock:g,kltArr:[{text:"分时",klt:1,lmt:80},{text:"5日",klt:5,lmt:250},{text:"日K",klt:101,lmt:60},{text:"周K",klt:102,lmt:60},{text:"月K",klt:103,lmt:60},{text:"1年",klt:101,lmt:250}],onSelectKlt:t=>{l.value=!1,v.value!==t.text&&(v.value=t.text,t.text.indexOf("K")>0?async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101;if(!d.value)return;const l=await m(t,e);if(!l)return;l.forEach((t=>{t.range=[t.open,t.close,t.heigh,t.low]})),p&&p.destroy(),p=new D.kL({container:d.value,autoFit:!0,width:604,height:320}),p.data(l),p.scale({time:{type:"timeCat"},range:{nice:!0,range:[.1,.9]},close:{nice:!0,range:[.1,.9]}}),p.axis("range",!1),p.tooltip({showTitle:!1,showCrosshairs:!0,showMarkers:!1,crosshairs:{type:"xy",follow:!0,line:{style:{lineDash:[2,2]}}},containerTpl:'<div class="g2-tooltip"><p class="g2-tooltip-title"></p><ul class="g2-tooltip-list"></ul></div>',itemTpl:'\n            <ul class="g2-tooltip-list">\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">时间</span><span class="g2-tooltip-value">{time}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">价格</span><span class="g2-tooltip-value" style="color:{color}">{close}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌额</span><span class="g2-tooltip-value" style="color:{color}">{rise}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌幅</span><span class="g2-tooltip-value" style="color:{color}">{risePercent}%</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">最高价</span><span class="g2-tooltip-value">{heigh}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">最低价</span><span class="g2-tooltip-value">{low}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交量</span><span class="g2-tooltip-value">{cjl}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交额</span><span class="g2-tooltip-value">{cje}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">换手率</span><span class="g2-tooltip-value">{hs}%</span>\n              </li>\n            </ul>\n          '}),p.legend(!1),p.axis("close",{label:{formatter:t=>{const e=parseFloat(t);return Number(e.toFixed(2))}}}),p.line().style({lineWidth:1,stroke:"#8499EF"}).position("time*close").tooltip("time*open*close*rise*risePercent*cjl*cje*color*heigh*low*zf*hs",((t,e,l,i,s,o,a,n,r,c,u,p)=>({time:t,open:e,close:l,rise:i,risePercent:s,cjl:o,cje:a,color:n,heigh:r,low:c,zf:u,hs:p}))),p.schema().color("color",(t=>t)).position("time*range").shape("candle"),p.render()}(t.lmt,t.klt):f(t.lmt,t.klt))},currentKlt:v,chartRef:d,searchKey:c,onClearSearchKey:()=>{c.value="",s.value=[],r.value=!1},onClickSearch:function(){l.value=!1},isInFollow:x,onClickAddToFollow:function(){const l=[...e.followStocks.value,a.value];t.setFollowStocks(l)},isSearch:r,onClickFollowItem:function(t){r.value=!1,g(t)}}}}}]);