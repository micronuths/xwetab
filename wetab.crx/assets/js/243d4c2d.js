"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[1108,2399,503],{22805:(e,a,t)=>{t.r(a),t.d(a,{useCalcPressureStore:()=>u});var l=t(57268),n=t(10435),r=t(14754);const u=(0,n.Q_)("calc-components-pressure",{state:()=>({unitItemsArr:[{name:"帕斯卡",unit:"Pa(N/m²)",base:!0,calcBase:!0,value:1},{name:"巴",unit:"bar",getValue:e=>(0,r.uf)(1e-5*e),reverseValue:e=>(0,r.uf)(e/1e-5)},{name:"兆帕",unit:"MPa",getValue:e=>(0,r.uf)(1e-6*e),reverseValue:e=>(0,r.uf)(e/1e-6)},{name:"千帕",unit:"kpa",getValue:e=>(0,r.uf)(.001*e),reverseValue:e=>(0,r.uf)(e/.001)},{name:"百帕",unit:"hpa",getValue:e=>(0,r.uf)(.01*e),reverseValue:e=>(0,r.uf)(e/.01)},{name:"毫巴",unit:"mbar",getValue:e=>(0,r.uf)(.01*e),reverseValue:e=>(0,r.uf)(e/.01)},{name:"英寸汞柱",unit:"in Hg",getValue:e=>(0,r.uf)(2953e-7*e),reverseValue:e=>(0,r.uf)(e/2953e-7)},{name:"标准大气压",unit:"atm",long:!0,getValue:e=>(0,r.uf)(98692e-10*e),reverseValue:e=>(0,r.uf)(e/98692e-10)},{name:"毫米汞柱",unit:"mmHg",long:!0,getValue:e=>(0,r.uf)(.0075006*e),reverseValue:e=>(0,r.uf)(e/.0075006)},{name:"毫米水柱",unit:"mm H₂O",long:!0,getValue:e=>(0,r.uf)(.101972*e),reverseValue:e=>(0,r.uf)(e/.101972)},{name:"磅力/平方英寸",unit:"psi",long:!0,getValue:e=>(0,r.uf)(145e-6*e),reverseValue:e=>(0,r.uf)(e/145e-6)},{name:"公斤力/平方厘米",unit:"kgf/cm²",long:!0,getValue:e=>(0,r.uf)(102e-7*e),reverseValue:e=>(0,r.uf)(e/102e-7)},{name:"公斤力/平方米",unit:"kgf/m²",long:!0,getValue:e=>(0,r.uf)(.1019716*e),reverseValue:e=>(0,r.uf)(e/.1019716)}]}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,r.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,r.UC)(this.unitItemsArr)}}});(0,l.YP)((()=>{var e;return null===(e=u().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{u().calcUnitsArr()}),{immediate:!0}),(0,l.YP)((()=>{var e;return null===(e=u().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{u().calcUnitsArr()}))},60503:(e,a,t)=>{t.r(a),t.d(a,{usePressurePanel:()=>r});var l=t(10435),n=t(22805);const r=()=>{const e=(0,n.useCalcPressureStore)(),a=(0,l.Jk)(e);return{changeBaseUnit:a=>e.changeBaseUnit(a),changeBaseValue:a=>e.changeBaseValue(a),baseUnit:a.getBaseUnit,panelList:a.getPanelList}}},14754:(e,a,t)=>{t.d(a,{D:()=>x,Mb:()=>p,UC:()=>r,WS:()=>m,fS:()=>i,uf:()=>l,vZ:()=>n,zX:()=>u});const l=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const l=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(l)<=a)return Number(e.toFixed(t));{const a=e*Math.pow(10,-l);return Number(a.toFixed(t))+"e"+(l>0?"+"+l:l)}},n=(e,a)=>{const t=[...a],l=t.find((e=>e.base)),n=t.find((a=>a.name===e.name));return l.base=!1,n.base=!0,n.value=l.value,t},r=e=>{const a=[...e],t=e.find((e=>e.calcBase)),l=e.find((e=>e.base));var n;t.base?a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})):(t.value=null===(n=l.reverseValue)||void 0===n?void 0:n.call(null,Number(l.value)),a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})));return a},u=(e,a)=>{const t=String(e).split("."),l=t[1].split("");let n=0;for(let e=0;e<t[1].length;e++)n+=l[e]*Math.pow(a,-1*(e+1));return parseInt(t[0],a)+n},i=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),s=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],o=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],c=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],d=(e,a)=>a.find((a=>e>a.min&&e<=a.max)),m=e=>d(e,s),p=e=>d(e,o),x=e=>d(e,c)},49610:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(57268),n=t(68398),r=t(29445);const u={class:"h-full w-full"},i=(0,l.aZ)({__name:"converter-input",props:{modelValue:null,max:{default:1/0},min:{default:-9999999999},maxLength:{default:1/0}},emits:["update:modelValue"],setup(e,a){let{emit:t}=a;const i=e,s=(0,r.iH)(i.modelValue);function o(e){const{value:a}=e.target;if(Number(a)>i.max)return s.value=i.max,t("update:modelValue",i.max),!1;if(Number(a)<i.min)return s.value=i.min,t("update:modelValue",i.min),!1;const l=a.indexOf(".")>-1?parseFloat(a):parseInt(a);s.value=isNaN(l)?"":l,t("update:modelValue",isNaN(l)?"":l)}return(e,a)=>((0,l.wg)(),(0,l.iD)("div",u,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),type:"number",class:"box-border h-full w-full bg-color-calc-b3 px-[12px] pb-[24px] text-right text-[20px] leading-none text-color-calc-t1",onInput:o},null,544),[[n.vModelText,s.value]])]))}})},81108:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var l=t(57268),n=t(29445),r=t(94209),u=t(60503),i=t(49610);const s={class:"mx-auto w-[360px] rounded-[16px] border border-solid border-color-calc-l8 bg-color-calc-b2"},o={class:"px-[20px] pt-[20px]"},c={class:"input-box relative h-[60px] w-full overflow-hidden rounded-[8px] bg-color-calc-b3"},d={class:"absolute left--[12px] top-0 bottom-0 pl-[12px] pt-[11px]"},m={class:"text-[14px] leading-none text-color-calc-yellow"},p={class:"mt-[8px] text-[16px] leading-none text-color-calc-t1"},x={class:"absolute right-[12px] bottom-[10px] text-[12px] leading-none text-color-calc-t3"},v=(e=>((0,l.dD)("data-v-03ee2dd8"),e=e(),(0,l.Cn)(),e))((()=>(0,l._)("div",{class:"pt-[16px]"},[(0,l._)("div",{class:"h-[1px] bg-color-calc-l0"}),(0,l._)("div",{class:"h-[1px] bg-color-calc-l5"})],-1))),g={class:"hi-scroll flex max-h-[428px] flex-wrap justify-between pl-[20px] pr-[14px] pb-[4px] pt-[16px]"},f=["onClick"],b={class:"h-[14px] text-right text-[14px] leading-[14px] text-color-calc-t1"},h={class:"flex items-center justify-between pt-[6px] text-[12px] leading-none text-color-calc-t3"},V=(0,l.aZ)({__name:"pressure-panel",setup(e){const{baseUnit:a,panelList:t,changeBaseUnit:V}=(0,u.usePressurePanel)();return(e,u)=>((0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l._)("div",c,[(0,l.Wm)(i.Z,{modelValue:(0,n.SU)(a).value,"onUpdate:modelValue":u[0]||(u[0]=e=>(0,n.SU)(a).value=e),"max-length":10,max:9999999999},null,8,["modelValue"]),(0,l._)("div",d,[(0,l._)("p",m,(0,r.toDisplayString)("基础单位"),1),(0,l._)("p",p,(0,r.toDisplayString)((0,n.SU)(a).name),1)]),(0,l._)("div",x,(0,r.toDisplayString)((0,n.SU)(a).unit),1)])]),v,(0,l._)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(t),(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.name,class:(0,r.normalizeClass)(["mb-[12px] flex h-[56px] w-[154px] cursor-pointer flex-col justify-center rounded-[8px] border border-solid border-color-calc-l7 px-[12px] hover:bg-color-m1 hover:bg-opacity-5",[e.long?"w-[318px]":""]]),onClick:a=>(0,n.SU)(V)(e)},[(0,l._)("div",b,(0,r.toDisplayString)(e.value),1),(0,l._)("div",h,[(0,l._)("span",{class:(0,r.normalizeClass)(["flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap",[e.long?"max-w-[240px]":"max-w-[100px]"]])},(0,r.toDisplayString)(e.name),3),(0,l._)("span",null,(0,r.toDisplayString)(e.unit),1)])],10,f)))),128))])]))}});const _=(0,t(76911).Z)(V,[["__scopeId","data-v-03ee2dd8"]])}}]);