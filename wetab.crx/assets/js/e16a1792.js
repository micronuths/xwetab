(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2369,8546],{52326:function(t){t.exports=function(){"use strict";return function(t,e,i){e.prototype.isToday=function(){var t="YYYY-MM-DD",e=i();return this.format(t)===e.format(t)}}}()},22854:(t,e,i)=>{"use strict";i.d(e,{C:()=>o});var a=i(29445),n=i(57268);const o=(t,e,i)=>{const o=(0,a.iH)(t);e.onChangeState=t=>{o.value={...t}};const l=(0,n.Fl)((()=>i?i[o.value.size]:null));return{propsState:o,HomeComp:l}}},60907:(t,e,i)=>{"use strict";i.r(e),i.d(e,{mountHome:()=>d,widgetApp:()=>c});var a=i(29445),n=i(68398),o=i(57268),l=i(9792);const s=(0,o.aZ)({__name:"widget-hotapp-home",props:{size:null,id:null},setup(t){const e=t,{HomeComp:i}=(0,l.Wu)(e),{clickWidget:n}=(0,l.dd)();return(t,e)=>((0,o.wg)(),(0,o.iD)("section",{class:"contents cursor-pointer",onClick:e[0]||(e[0]=function(){return(0,a.SU)(n)&&(0,a.SU)(n)(...arguments)})},[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,a.SU)(i))))]))}});var p=i(96755),r=i(75008);const c=(0,a.iH)(null),d=(t,e)=>{const i=(0,n.createApp)(s,e);return(0,r.f)(i),c.value=i,i.use(p.M),i.mount(t),c.value}},8546:(t,e,i)=>{"use strict";i.r(e),i.d(e,{useHotappStore:()=>u});var a=i(84522),n=i(10435);const o=[{link:"https://store.lizhi.io/site/products/id/31?cid=s2dtdwxy",cover:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/AdGuard.png",price:30,platform:["Win","Mac","iOS","Android"],description:"AdGuard 是一款千万用户信赖的广告拦截工具，支持在 Win/Mac/IOS/Android 多平台使用，有效拦截各类（横幅、弹窗等）广告，保护隐私安全。",category:"安全防护",name:"AdGuard",id:"63f47c6c1cc23f15512fd0bd"},{link:"https://store.lizhi.io/site/products/id/558?cid=s2dtdwxy",cover:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/Air Explorer Pro.png",price:89,platform:["Win","Mac"],description:"Air Explorer Pro 是一个多网盘管理工具，支持 Win / Mac 双平台，可集中管理百度网盘 / 华为云盘 / 阿里云 / 坚果云 / OneDrive 等 30+ 云盘，一站式完成不同网盘间文件互传、搜索、同步等操作。",category:"文件管理",name:"Air Explorer Pro",id:"63f47c6c1cc23f15512fd0be"},{link:"https://store.lizhi.io/site/products/id/514?cid=s2dtdwxy",cover:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/AirBuddy 2.png",price:59,platform:["Mac"],description:"AirBuddy 2 是一款 Mac 端优秀的 AirPods 管理工具，安装 AirBuddy，打开 AirPods 耳机盒即可查看耳机电量，还有电量预警提醒、AirPods 模式快捷切换、设备接力等功能，让 AirPods 在 Mac 上更好用！",category:"日常使用",name:"AirBuddy 2",id:"63f47c6c1cc23f15512fd0bf"},{link:"https://store.lizhi.io/site/products/id/307?cid=s2dtdwxy",cover:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/Bandizip.png",price:199,platform:["Win"],description:"Bandizip 是一款出色的压缩文件管理工具，集压缩解压、浏览编辑为一体，可进行图片预览、恶意软件扫描等高级功能，支持 30 多种压缩格式，操作简单功能强大。",category:"文档管理",name:"Bandizip",id:"63f47c6c1cc23f15512fd0c0"},{link:"https://store.lizhi.io/site/products/id/51?cid=s2dtdwxy",cover:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/Bartender 4.png",price:89,platform:["Mac"],description:"Bartender 4 是一款经典的 Mac 菜单栏图标管理工具，包含图标自动展开 / 隐藏、拖拽管理、快速搜索等实用功能，与系统高度集成，让你的菜单栏更好用。",category:"日常使用",name:"Bartender 4",id:"63f47c6c1cc23f15512fd0c1"}];var l=i(74003),s=i(17904);var p=i(80661),r=i.n(p),c=i(52326),d=i.n(c);r().extend(d());const u=(0,n.Q_)(a.BU.hotApp,{syncStorage:{watch:["appData"]},state:()=>({modalShow:!1,appData:{updateTime:0,list:o},stateItem:void 0}),getters:{},actions:{setModal(t){this.modalShow=t},setStateItem(t){this.stateItem=t},clearStateItem(){this.stateItem=void 0},async reqList(){if(r()(this.appData.updateTime).isToday()&&this.appData.list)return;const[t,e]=await(async()=>{try{const t=await s.hj.get(`${l.H}hot-apps/list`,void 0,{_single:!0});if(0===t.code&&t.data.length>0)return[null,t.data];throw t}catch(t){return["catch error"]}})();!t&&e&&(this.appData={updateTime:(new Date).valueOf(),list:e})}}})},9792:(t,e,i)=>{"use strict";i.d(e,{DS:()=>X,Wu:()=>V,dd:()=>N,UV:()=>tt});var a=i(57268),n=i(68398),o=i(29445),l=i(94209),s=i(8546),p=i(48770),r=i(58820);const c={class:"bg-hotapp insert-shadow relative flex h-full flex-col rounded-[var(--icon-home-radius)]"},d={class:"flex w-full items-center justify-center"},u=["onClick"],m={class:"flex-1 px-[16px] pt-[16px] icon-m:px-[12px] icon-m:pt-[12px] icon-s:px-[8px] icon-s:pt-[14px]"},x={class:"flex justify-between overflow-hidden leading-none"},h=["onClick"],v={class:"pt-[12px] icon-m:pt-[10px] icon-s:pt-[8px]"},f={class:"pt-[12px] font-ali-55 text-[12px] leading-[17px] text-[#C8C8CC] line-clamp-2 icon-m:pt-[10px] icon-s:pt-[7px]"},g=(0,a.aZ)({__name:"hotapp-medium",setup(t){const{homeList:e,onClickChangeIndex:i}=X(),g=(0,s.useHotappStore)();function w(){g.setStateItem(e.value[2]),g.setModal(!0)}return(t,s)=>((0,a.wg)(),(0,a.iD)("section",c,[(0,a._)("div",{class:"bg-hot-top flex h-[104px] items-center overflow-hidden icon-m:h-[88px] icon-s:h-[72px]",onClick:s[0]||(s[0]=(0,n.withModifiers)((()=>{}),["stop"]))},[(0,a._)("div",d,[(0,a.Wm)(n.TransitionGroup,{name:"applist"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(e),((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"relative mx-[6px]"},[(0,a._)("div",{class:(0,l.normalizeClass)(["expand-click relative z-[2] h-[32px] w-[32px] bg-cover bg-no-repeat transition-all duration-500 icon-m:h-[28px] icon-m:w-[28px] icon-s:h-[24px] icon-s:w-[24px]",[2===e?"mx-[12px] scale-[2]":"scale-100",0===e||4===e?"opacity-40":"",1===e||3===e?"opacity-80":""]]),style:(0,l.normalizeStyle)({backgroundImage:`url(${encodeURI(t.cover)})`}),onClick:(0,n.withModifiers)((a=>(0,o.SU)(i)(e,t)),["stop"])},[2===e?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"pointer-events-none absolute inset-0 z-0 scale-150 bg-cover bg-no-repeat transition-[background]",style:(0,l.normalizeStyle)({backgroundImage:`url(${encodeURI(t.cover)})`,filter:"blur(5px) opacity(30%)"})},null,4)):(0,a.kq)("",!0)],14,u)])))),128))])),_:1})])]),(0,a._)("div",m,[(0,a._)("div",x,[(0,a._)("span",{class:"text-dot mr-[6px] font-ali-65 text-[18px] text-color-white icon-m:text-[16px] icon-s:text-[14px]",onClick:(0,n.withModifiers)(w,["stop"])},(0,l.toDisplayString)((0,o.SU)(e)[2].name),9,h),(0,a.Wm)(p.Z,{price:(0,o.SU)(e)[2].price,size:18},null,8,["price"])]),(0,a._)("div",v,[(0,a.Wm)(r.Z,{platform:(0,o.SU)(e)[2].platform},null,8,["platform"])]),(0,a._)("div",f,(0,l.toDisplayString)((0,o.SU)(e)[2].description),1)])]))}});var w=i(76911);const y=(0,w.Z)(g,[["__scopeId","data-v-2669d81a"]]),S={class:"bg-hotapp insert-shadow relative flex h-full rounded-[var(--icon-home-radius)]"},b={class:"flex w-full flex-col items-center justify-center"},k=["onClick"],_={class:"flex-1 p-[28px] icon-m:p-[24px] icon-s:p-[20px]"},C={class:"flex justify-between overflow-hidden leading-none"},D=["onClick"],I={class:"flex items-center pt-[44px] icon-m:pt-[28px] icon-s:pt-[34px]"},M={class:"mr-[12px] rounded-[6px] bg-color-white bg-opacity-20 px-[6px] py-[3px] font-ali-55 text-[14px] leading-none text-[#C8C8CC]"},U=(t=>((0,a.dD)("data-v-31922454"),t=t(),(0,a.Cn)(),t))((()=>(0,a._)("div",{class:"mt-[23px] h-[1px] bg-color-white bg-opacity-5 icon-m:mt-[19px] icon-s:mt-[15px]"},null,-1))),z={class:"pt-[24px] font-ali-55 text-[12px] leading-[17px] text-[#C8C8CC] line-clamp-3 icon-m:pt-[20px] icon-m:line-clamp-3 icon-s:pt-[16px] icon-s:line-clamp-2"},A=(0,a.aZ)({__name:"hotapp-large",setup(t){const{homeList:e,onClickChangeIndex:i}=X(),c=(0,s.useHotappStore)();function d(){c.setStateItem(e.value[2]),c.setModal(!0)}return(t,s)=>((0,a.wg)(),(0,a.iD)("section",S,[(0,a._)("div",{class:"bg-hot-top w-[120px] icon-m:w-[104px] icon-s:w-[88px]",onClick:s[0]||(s[0]=(0,n.withModifiers)((()=>{}),["stop"]))},[(0,a._)("div",b,[(0,a.Wm)(n.TransitionGroup,{name:"applist"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(e),((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"relative my-[6px]"},[(0,a._)("div",{class:(0,l.normalizeClass)(["expand-click relative z-[2] h-[32px] w-[32px] bg-cover bg-no-repeat transition-all duration-500 icon-m:h-[28px] icon-m:w-[28px] icon-s:h-[24px] icon-s:w-[24px]",[2===e?"my-[12px] scale-[2]":"scale-100",0===e||4===e?"opacity-40":"",1===e||3===e?"opacity-80":""]]),style:(0,l.normalizeStyle)({backgroundImage:`url(${GlobalGetApi}${encodeURI(t.cover)})`}),onClick:(0,n.withModifiers)((a=>(0,o.SU)(i)(e,t)),["stop"])},[2===e?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"pointer-events-none absolute inset-0 z-0 scale-150 bg-cover bg-no-repeat transition-[background]",style:(0,l.normalizeStyle)({backgroundImage:`url(${GlobalGetApi}${GlobalGetApi}${encodeURI(t.cover)})`,filter:"blur(5px) opacity(30%)"})},null,4)):(0,a.kq)("",!0)],14,k)])))),128))])),_:1})])]),(0,a._)("div",_,[(0,a._)("div",C,[(0,a._)("span",{class:"text-dot mr-[6px] font-ali-65 text-[18px] leading-[20px] text-color-white",onClick:(0,n.withModifiers)(d,["stop"])},(0,l.toDisplayString)((0,o.SU)(e)[2].name),9,D),(0,a.Wm)(p.Z,{price:(0,o.SU)(e)[2].price,size:18},null,8,["price"])]),(0,a._)("div",I,[(0,a._)("div",M,(0,l.toDisplayString)((0,o.SU)(e)[2].category),1),(0,a.Wm)(r.Z,{platform:(0,o.SU)(e)[2].platform},null,8,["platform"])]),U,(0,a._)("div",z,(0,l.toDisplayString)((0,o.SU)(e)[2].description),1)])]))}}),Z=(0,w.Z)(A,[["__scopeId","data-v-31922454"]]);var H=i(60907),W=i(22854),B=i(10435),T=i(22743),F=i(57990),L=i(18424);const P=function(t,e){return!!(null==t?0:t.length)&&(0,L.Z)(t,e,0)>-1};const Y=function(t,e,i){for(var a=-1,n=null==t?0:t.length;++a<n;)if(i(e,t[a]))return!0;return!1};var j=i(74054),G=i(58658),O=Math.min;const $=function(t,e,i){for(var a=i?Y:P,n=t[0].length,o=t.length,l=o,s=Array(o),p=1/0,r=[];l--;){var c=t[l];l&&e&&(c=(0,T.Z)(c,(0,j.Z)(e))),p=O(c.length,p),s[l]=!i&&(e||n>=120&&c.length>=120)?new F.Z(l&&c):void 0}c=t[0];var d=-1,u=s[0];t:for(;++d<n&&r.length<p;){var m=c[d],x=e?e(m):m;if(m=i||0!==m?m:0,!(u?(0,G.Z)(u,x):a(r,x,i))){for(l=o;--l;){var h=s[l];if(!(h?(0,G.Z)(h,x):a(t[l],x,i)))continue t}u&&u.push(x),r.push(m)}}return r};var R=i(44828),q=i(60385),E=i(70365);const J=function(t){return(0,E.Z)(t)&&(0,q.Z)(t)};const K=function(t){return J(t)?t:[]};const Q=(0,R.Z)((function(t){var e=(0,T.Z)(t,K);return e.length&&e[0]===t[0]?$(e):[]})),V=t=>{const e={m:y,l:Z};return(0,W.C)(t,H.widgetApp.value,e)},N=()=>{const t=(0,s.useHotappStore)();return{clickWidget:()=>{t.setModal(!0)},onCloseModal:()=>{t.setModal(!1),t.clearStateItem()},show:(0,B.Jk)(t).modalShow}},X=()=>{const t=(0,s.useHotappStore)(),e=(0,B.Jk)(t),i=(0,o.iH)(Math.floor(Math.random()*e.appData.value.list.length)),n=(0,a.Fl)((()=>{const t=e.appData.value.list.length,a=i.value;return[a-2<0?t+a-2:a-2,a-1<0?t-a-1:a-1,a,a+1>t-1?a+1-t:a+1,a+2>t-1?a+2-t:a+2].map((t=>e.appData.value.list[t]))}));return{curIndex:i,homeList:n,onClickChangeIndex:function(t,a){if(2===t)return;const n=e.appData.value.list.findIndex((t=>a.id===t.id));i.value=n}}},tt=()=>{const t=(0,s.useHotappStore)(),e=(0,B.Jk)(t),i=navigator.userAgent.toLowerCase().indexOf("windows")>-1,n=(0,o.iH)(),l=(0,o.iH)(),p=(0,o.iH)(),r=i?[{name:"Win专区",val:"win"},{name:"Mac专区",val:"mac"},{name:"手机专区",val:"ios,android"}]:[{name:"Mac专区",val:"mac"},{name:"Win专区",val:"win"},{name:"手机专区",val:"ios,android"}],c=(0,o.iH)(0),d=(0,o.iH)(r[0].val);const u=(0,a.Fl)((()=>d.value?e.appData.value.list.filter((t=>{const e=t.platform.map((t=>t.toLowerCase())),i=d.value.split(",");return Q(e,i).length>0})):e.appData.value.list));return(0,a.YP)((()=>e.modalShow.value),(e=>{e&&(p.value=!1,t.stateItem&&(l.value=t.stateItem,p.value=!0))})),{activeIndex:c,onClickTab:function(t,e){var i;d.value=e,c.value=t,null===(i=n.value)||void 0===i||i.scrollTo({top:0,behavior:"smooth"})},appList:u,titleItems:r,scrollWraper:n,detailShow:p,selectItem:l,onClickItem:function(t){l.value=t,p.value=!0},onCloseShow:function(){p.value=!1,l.value=void 0},onClickSwitchDetail:function(t){const e=u.value.findIndex((t=>{var e;return t.id===(null===(e=l.value)||void 0===e?void 0:e.id)}));let i=e>-1?e:0;"pre"===t?0===e?i=u.value.length-1:i--:e===u.value.length-1?i=0:i++,l.value=u.value[i]}}}},58820:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var a=i(57268),n=i(68398),o=i(29445);const l={class:"flex items-center"},s={class:"mr-[8px] h-[20px] w-[20px]",src:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/win.png",alt:""},p={class:"mr-[8px] h-[20px] w-[20px]",src:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/app-store.png",alt:""},r={class:"mr-[8px] h-[20px] w-[20px]",src:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/apple.png",alt:""},c={class:"mr-[8px] h-[20px] w-[20px]",src:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/android.png",alt:""},d={class:"mr-[8px] h-[20px] w-[20px]",src:GlobalGetApi+"https://static.wetab.link/hitab/hotapp-widget/linux.png",alt:""},u=(0,a.aZ)({__name:"app-platform-icon",props:{platform:null},setup(t){const e=t,i=(0,a.Fl)((()=>{var t;return e.platform?null===(t=e.platform)||void 0===t?void 0:t.map((t=>t.toLowerCase())):[]}));return(t,e)=>((0,a.wg)(),(0,a.iD)("div",l,[(0,a.wy)((0,a._)("img",s,null,512),[[n.vShow,(0,o.SU)(i).includes("win")]]),(0,a.wy)((0,a._)("img",p,null,512),[[n.vShow,(0,o.SU)(i).includes("mac")]]),(0,a.wy)((0,a._)("img",r,null,512),[[n.vShow,(0,o.SU)(i).includes("ios")]]),(0,a.wy)((0,a._)("img",c,null,512),[[n.vShow,(0,o.SU)(i).includes("android")]]),(0,a.wy)((0,a._)("img",d,null,512),[[n.vShow,(0,o.SU)(i).includes("linux")]])]))}})},48770:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var a=i(57268),n=i(94209),o=i(29445);const l=(0,a._)("span",{class:"text-[12px]"},"¥",-1),s={class:"text-[12px]"},p=(0,a.aZ)({__name:"app-price",props:{price:{default:0},size:{default:18},color:{default:"#FFD4AD"}},setup(t){const e=t,i=(0,a.Fl)((()=>e.price.toFixed(2).split(".")));return(t,p)=>((0,a.wg)(),(0,a.iD)("div",{class:"flex items-baseline font-ali-75 text-[#FFD4AD]",style:(0,n.normalizeStyle)({color:e.color})},[l,(0,a._)("span",{class:"mr-[1px] ml-[2px]",style:(0,n.normalizeStyle)({fontSize:e.size+"px"})},(0,n.toDisplayString)((0,o.SU)(i)[0]),5),(0,a._)("span",s,"."+(0,n.toDisplayString)((0,o.SU)(i)[1]),1)],4))}})}}]);