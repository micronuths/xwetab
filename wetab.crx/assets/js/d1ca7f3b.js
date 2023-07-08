"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[6124,287],{10287:(a,t,e)=>{e.r(t),e.d(t,{useCalcTaxStore:()=>r});var n=e(57268),o=e(10435),l=e(14754);const u=(a,t,e,n,o)=>{const r=t*a,i=e*a,c=r-i-n*a-o*a;if(c<=0)return{totalIncome:r,totalFiveOut:i,incomeShouldTaxTotal:0,shouldPayTaxTotal:0,payedTaxTotal:0,taxRate:"3%",currentMounthTax:0,afterTaxSalary:t-e,fastCountDown:0};const d=(0,l.WS)(c),x=u(a-1,t,e,n,o),s=1===a?0:x.currentMounthTax+x.payedTaxTotal,m=c*d.rate-d.deduction;return{totalIncome:r,totalFiveOut:i,incomeShouldTaxTotal:c,shouldPayTaxTotal:m,payedTaxTotal:s,taxRate:100*d.rate+"%",currentMounthTax:m-s,afterTaxSalary:t-e-(m-s),fastCountDown:d.deduction}},r=(0,o.Q_)("calc-components-tax",{state:()=>({activeIndex:0,step:1,taxFormData:{mounth:(new Date).getMonth()+1+"",preTaxSalary:0,fiveOut:0,specialOut:0,startPoint:5e3,annualBonus:0,remuneration:0},salaryTaxResult:{totalIncome:0,totalFiveOut:0,incomeShouldTaxTotal:0,shouldPayTaxTotal:0,payedTaxTotal:0,taxRate:"%",currentMounthTax:0,afterTaxSalary:0,fastCountDown:0},yearEndTaxResult:{incomeShouldTaxTotal:0,mounthlyIncome:0,fastCountDown:0,shouldPayTaxTotal:0,taxRate:"%",afterTaxIncome:0},remunerationTaxResult:{countDownTotal:0,incomeShouldTaxTotal:0,fastCountDown:0,shouldPayTaxTotal:0,taxRate:"%",afterTaxIncome:0}}),getters:{},actions:{changeActive(a){this.activeIndex=a},calcSalaryTax(){const a=this.taxFormData,t=parseInt(a.mounth);this.salaryTaxResult=u(t,a.preTaxSalary,a.fiveOut,a.specialOut,a.startPoint)},calcYearEndTax(){const a=this.taxFormData.annualBonus,t=a/12,e=(0,l.Mb)(t),n=12*(t*e.rate-e.deduction);this.yearEndTaxResult={incomeShouldTaxTotal:a,mounthlyIncome:t,fastCountDown:e.deduction,shouldPayTaxTotal:n,taxRate:100*e.rate+"%",afterTaxIncome:a-n}},calcRemunerationTax(){let a;const t=this.taxFormData.remuneration;if(t<=800)a={countDownTotal:0,incomeShouldTaxTotal:0,fastCountDown:0,shouldPayTaxTotal:0,taxRate:"0%",afterTaxIncome:t};else if(t>800&&t<=4e3)a={countDownTotal:800,incomeShouldTaxTotal:t-800,fastCountDown:0,shouldPayTaxTotal:.2*(t-800),taxRate:"20%",afterTaxIncome:t-.2*(t-800)};else{const e=(0,l.D)(t),n=.8*t*e.rate-e.deduction;a={countDownTotal:.2*t,incomeShouldTaxTotal:.8*t,fastCountDown:e.deduction,shouldPayTaxTotal:n,taxRate:100*e.rate+"%",afterTaxIncome:t-n}}this.remunerationTaxResult=a}}});(0,n.YP)((()=>r().taxFormData),(()=>{r().calcSalaryTax(),r().calcYearEndTax(),r().calcRemunerationTax()}),{deep:!0})},36124:(a,t,e)=>{e.r(t),e.d(t,{useTaxPanel:()=>l});var n=e(10435),o=e(10287);const l=()=>{const a=(0,o.useCalcTaxStore)(),t=(0,n.Jk)(a);return{changeActive:t=>{a.changeActive(t)},step:t.step,salaryTaxResult:t.salaryTaxResult,yearEndTaxResult:t.yearEndTaxResult,remunerationTaxResult:t.remunerationTaxResult,taxFormData:t.taxFormData,activeIndex:t.activeIndex}}},14754:(a,t,e)=>{e.d(t,{D:()=>T,Mb:()=>m,UC:()=>l,WS:()=>s,fS:()=>r,uf:()=>n,vZ:()=>o,zX:()=>u});const n=function(a){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!a)return 0;const n=Math.floor(Math.log(Math.abs(a))/Math.LN10);if(Math.abs(n)<=t)return Number(a.toFixed(e));{const t=a*Math.pow(10,-n);return Number(t.toFixed(e))+"e"+(n>0?"+"+n:n)}},o=(a,t)=>{const e=[...t],n=e.find((a=>a.base)),o=e.find((t=>t.name===a.name));return n.base=!1,o.base=!0,o.value=n.value,e},l=a=>{const t=[...a],e=a.find((a=>a.calcBase)),n=a.find((a=>a.base));var o;e.base?t.map((a=>{var t;a.base||a.calcBase||(a.value=null===(t=a.getValue)||void 0===t?void 0:t.call(null,Number(e.value)))})):(e.value=null===(o=n.reverseValue)||void 0===o?void 0:o.call(null,Number(n.value)),t.map((a=>{var t;a.base||a.calcBase||(a.value=null===(t=a.getValue)||void 0===t?void 0:t.call(null,Number(e.value)))})));return t},u=(a,t)=>{const e=String(a).split("."),n=e[1].split("");let o=0;for(let a=0;a<e[1].length;a++)o+=n[a]*Math.pow(t,-1*(a+1));return parseInt(e[0],t)+o},r=a=>Number(a||0).toFixed(2).replace(/\d+/,(a=>a.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),i=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],c=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],d=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],x=(a,t)=>t.find((t=>a>t.min&&a<=t.max)),s=a=>x(a,i),m=a=>x(a,c),T=a=>x(a,d)}}]);