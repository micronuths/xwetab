"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[5291,1778],{41778:(e,a,t)=>{t.r(a),t.d(a,{useCalcVolumeStore:()=>r});var u=t(57268),n=t(10435),i=t(14754);const r=(0,n.Q_)("calc-components-volume",{state:()=>({unitItemsArr:[{name:"立方米",unit:"m³",base:!0,calcBase:!0,value:1},{name:"立方分米",unit:"dm³",getValue:e=>(0,i.uf)(1e3*e),reverseValue:e=>(0,i.uf)(e/1e3)},{name:"立方厘米",unit:"cm³",getValue:e=>(0,i.uf)(1e3*e*1e3),reverseValue:e=>(0,i.uf)(e/1e3/1e3)},{name:"立方毫米",unit:"mm³",getValue:e=>(0,i.uf)(1e3*e*1e3*1e3),reverseValue:e=>(0,i.uf)(e/1e3/1e3/1e3)},{name:"百升",unit:"hl",getValue:e=>(0,i.uf)(10*e),reverseValue:e=>(0,i.uf)(e/10)},{name:"升",unit:"l",getValue:e=>(0,i.uf)(1e3*e),reverseValue:e=>(0,i.uf)(e/1e3)},{name:"升(公制)",unit:"dl",getValue:e=>(0,i.uf)(1e4*e),reverseValue:e=>(0,i.uf)(e/1e4)},{name:"厘升",unit:"cl",getValue:e=>(0,i.uf)(1e5*e),reverseValue:e=>(0,i.uf)(e/1e5)},{name:"毫升",unit:"ml",getValue:e=>(0,i.uf)(1e3*e*1e3),reverseValue:e=>(0,i.uf)(e/1e3/1e3)},{name:"立方英尺",unit:"ft³",getValue:e=>(0,i.uf)(35.3147248*e),reverseValue:e=>(0,i.uf)(e/35.3147248)},{name:"立方英寸",unit:"in³",getValue:e=>(0,i.uf)(61023.8445022*e),reverseValue:e=>(0,i.uf)(e/61023.8445022)},{name:"立方码",unit:"yd³",getValue:e=>(0,i.uf)(1.3079528*e),reverseValue:e=>(0,i.uf)(e/1.3079528)},{name:"英制加仑",unit:"uk gal",getValue:e=>(0,i.uf)(219.9691573*e),reverseValue:e=>(0,i.uf)(e/219.9691573)},{name:"美制加仑",unit:"us gal",getValue:e=>(0,i.uf)(264.1720524*e),reverseValue:e=>(0,i.uf)(e/264.1720524)},{name:"英制盎司",unit:"uk oz",getValue:e=>(0,i.uf)(35198.873636*e),reverseValue:e=>(0,i.uf)(e/35198.873636)},{name:"美制盎司",unit:"us oz",getValue:e=>(0,i.uf)(33818.0588434*e),reverseValue:e=>(0,i.uf)(e/33818.0588434)}]}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))},getCalcbase(){return this.unitItemsArr.find((e=>e.calcBase))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,i.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,i.UC)(this.unitItemsArr)}}});(0,u.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{r().calcUnitsArr()}),{immediate:!0}),(0,u.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{r().calcUnitsArr()}))},45291:(e,a,t)=>{t.r(a),t.d(a,{useVolumePanel:()=>i});var u=t(10435),n=t(41778);const i=()=>{const e=(0,n.useCalcVolumeStore)(),a=(0,u.Jk)(e);return{changeBaseUnit:a=>e.changeBaseUnit(a),changeBaseValue:a=>e.changeBaseValue(a),baseUnit:a.getBaseUnit,panelList:a.getPanelList}}},14754:(e,a,t)=>{t.d(a,{D:()=>v,Mb:()=>f,UC:()=>i,WS:()=>o,fS:()=>l,uf:()=>u,vZ:()=>n,zX:()=>r});const u=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const u=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(u)<=a)return Number(e.toFixed(t));{const a=e*Math.pow(10,-u);return Number(a.toFixed(t))+"e"+(u>0?"+"+u:u)}},n=(e,a)=>{const t=[...a],u=t.find((e=>e.base)),n=t.find((a=>a.name===e.name));return u.base=!1,n.base=!0,n.value=u.value,t},i=e=>{const a=[...e],t=e.find((e=>e.calcBase)),u=e.find((e=>e.base));var n;t.base?a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})):(t.value=null===(n=u.reverseValue)||void 0===n?void 0:n.call(null,Number(u.value)),a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})));return a},r=(e,a)=>{const t=String(e).split("."),u=t[1].split("");let n=0;for(let e=0;e<t[1].length;e++)n+=u[e]*Math.pow(a,-1*(e+1));return parseInt(t[0],a)+n},l=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),s=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],m=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],c=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],d=(e,a)=>a.find((a=>e>a.min&&e<=a.max)),o=e=>d(e,s),f=e=>d(e,m),v=e=>d(e,c)}}]);