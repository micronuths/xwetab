"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2916,3668],{43670:(e,s,o)=>{o.d(s,{B:()=>a});var r=o(74003),t=o(97432);const a=new class{hasPermission=async()=>new Promise((e=>{if(!r.Pl)return chrome.permissions.contains({permissions:["system.cpu","system.memory"]},(s=>{e(s)}));e(!1)}));reqPermission=async()=>new Promise((e=>{r.Pl?e(!1):chrome.permissions.request({permissions:["system.cpu","system.memory"]},(s=>{chrome.runtime.lastError?e(!1):e(s)}))}));hasBookmarksPermission=async()=>new Promise((e=>{if(!r.Pl)return chrome.permissions.contains({permissions:["bookmarks","favicon"]},(s=>{chrome.runtime.lastError?chrome.permissions.contains({permissions:["bookmarks"]},(s=>{e(s)})):e(s)}));e(!1)}));reqBookmarksPermission=async()=>new Promise((e=>{r.Pl?e(!1):chrome.permissions.request({permissions:["bookmarks","favicon"]},(s=>{chrome.runtime.lastError?"'favicon' is not a recognized permission."==chrome.runtime.lastError.message?((0,t.useBookmarksStore)().setFavicon(!0),chrome.permissions.request({permissions:["bookmarks"]},(s=>{e(s)}))):e(!1):e(s)}))}));getCpuInfo=()=>chrome.system.cpu.getInfo();getStorageInfo=()=>chrome.system.storage.getInfo();getMemoryInfo=()=>chrome.system.memory.getInfo()}},62916:(e,s,o)=>{o.r(s),o.d(s,{mountHome:()=>y,widgetApp:()=>f});var r=o(29445),t=o(68398),a=o(96755),n=o(57268),i=o(94209),A=o(97432),m=o(69041),c=o(14318),l=o(91294);const h=e=>((0,n.dD)("data-v-844c3e3a"),e=e(),(0,n.Cn)(),e),u=h((()=>(0,n._)("div",{class:"home-bg absolute right-0 top-0 h-full w-full"},null,-1))),d=["src"],k={class:"flex flex-col text-color-bookmark-t1"},w={class:"font-ali-75 text-[16px] leading-[22px]"},g={class:"flex flex-row items-baseline font-ali-65 text-[12px] leading-[17px]"},p=h((()=>(0,n._)("i",{class:"icon iconfont icon-more_icon ml-[3px] text-[12px]"},null,-1))),B=(0,n.aZ)({__name:"widget-bookmarks-home",setup(e){const s=(0,A.useBookmarksStore)(),o=(0,l.V)(),t=(0,r.iH)(o.followSystem?o.systemTheme:o.theme);(0,n.YP)((()=>({followSystem:o.followSystem,systheme:o.systemTheme,theme:o.theme})),(()=>{t.value=o.followSystem?o.systemTheme:o.theme}));const a=()=>{s.setModal(!0)};return(e,s)=>((0,n.wg)(),(0,n.iD)("section",{class:"bookmark-home relative flex h-full cursor-pointer flex-row items-center bg-color-b4 p-[16px] icon-m:p-[8px] icon-s:p-[2px]",onClick:a},[u,(0,n._)("img",{class:"mr-[16px] h-[56px] w-[56px] icon-m:mr-[12px] icon-s:mr-[10px]",src:"dark"==t.value?(0,r.SU)(c):(0,r.SU)(m)},null,8,d),(0,n._)("div",k,[(0,n._)("p",w,(0,i.toDisplayString)("书签"),1),(0,n._)("p",g,[(0,n.Uk)((0,i.toDisplayString)("立即查看"),1),p])])]))}});const x=(0,o(76911).Z)(B,[["__scopeId","data-v-844c3e3a"]]);var P=o(75008);const f=(0,r.iH)(null),y=(e,s)=>{const o=(0,t.createApp)(x,s);return(0,P.f)(o),f.value=o,o.use(a.M),o.mount(e),f.value}},97432:(e,s,o)=>{o.r(s),o.d(s,{useBookmarksStore:()=>l});var r=o(43670),t=o(84522),a=o(10435),n=o(17319),i=o(87322);const A=async(e,s)=>{try{await chrome.bookmarks.move(e,s)}catch(e){e&&n.R.fail({message:"操作失败！",duration:1500})}},m=async e=>{await(0,i.stopBrowserListening)(),await Promise.all(e.map((async e=>{await(async e=>{try{await chrome.bookmarks.remove(e)}catch(e){e&&n.R.fail({message:"操作失败！",duration:1500})}})(e)}))),await(0,i.startBrowserListening)()};var c=o(81220);const l=(0,a.Q_)(t.BU.bookmarks,{syncStorage:{watch:["isFirst","bookmarks","flattenBookmarks","folderList","needInfinityFavicon"]},state:()=>({isFullScreen:!1,isFirst:!0,modalShow:!1,hasPermission:!1,bookmarks:[],flattenBookmarks:[],folderList:[],needInfinityFavicon:!1}),actions:{setModal(e){this.modalShow=e},setBookmarks(e){this.bookmarks=e},setIsFirst(e){this.isFirst=e},setIsFullScreen(e){this.isFullScreen=e},async getAllData(){if(this.hasPermission=await r.B.hasBookmarksPermission(),!this.hasPermission)return;const[e,s,o]=await(0,c.jl)();this.bookmarks=e,this.flattenBookmarks=s,this.folderList=o},setFaviconById(e,s){this.bookmarks=[...(0,c.Ob)(this.bookmarks,s,{favicon:e})],this.flattenBookmarks=(0,c.Qj)(this.bookmarks),this.folderList=(0,c.Ln)(this.flattenBookmarks)},async reqPermission(){return this.hasPermission=await r.B.reqBookmarksPermission(),this.hasPermission},async batchMoveBookmark(e,s){await(async(e,s)=>{await(0,i.stopBrowserListening)(),await Promise.all(e.map((async e=>{await A(e,s)}))),await(0,i.startBrowserListening)()})(e,s),this.getAllData()},async batchRemoveBookmark(e){await m(e),this.getAllData()},async updateBookmark(e,s){await(async(e,s)=>{try{await(0,i.stopBrowserListening)(),await chrome.bookmarks.update(e,s),await(0,i.startBrowserListening)()}catch(e){e&&n.R.fail({message:"操作失败！",duration:1500})}})(e,{title:s.title,url:s.url}),s.parentId&&await A(e,{parentId:s.parentId}),this.getAllData()},setFavicon(e){this.needInfinityFavicon=e}}})},87322:(e,s,o)=>{o.r(s),o.d(s,{startBrowserListening:()=>m,stopBrowserListening:()=>c});var r=o(43670),t=o(97432);const a=(e,s)=>{(0,t.useBookmarksStore)().getAllData()},n=(e,s)=>{(0,t.useBookmarksStore)().getAllData()},i=(e,s)=>{(0,t.useBookmarksStore)().getAllData()},A=(e,s)=>{(0,t.useBookmarksStore)().getAllData()},m=async()=>{await r.B.hasBookmarksPermission()&&(chrome.bookmarks.onCreated.addListener(a),chrome.bookmarks.onChanged.addListener(n),chrome.bookmarks.onRemoved.addListener(i),chrome.bookmarks.onMoved.addListener(A))},c=async()=>{await r.B.hasBookmarksPermission()&&(chrome.bookmarks.onCreated.removeListener(a),chrome.bookmarks.onChanged.removeListener(n),chrome.bookmarks.onRemoved.removeListener(i))}},81220:(e,s,o)=>{o.d(s,{GR:()=>m,Ln:()=>n,OK:()=>i,Ob:()=>A,Qj:()=>a,jl:()=>t});var r=o(45844);const t=async()=>{const e=await chrome.bookmarks.getTree(),s=c(e);return[e,s,n(s)]},a=e=>c(e),n=e=>e.filter((e=>{var s;return"0"!=e.id&&e.children&&(null===(s=m(e))||void 0===s?void 0:s.length)>0})),i=e=>e.filter((e=>"0"!=e.id&&e.children)),A=(e,s,o)=>{const t=(0,r.Z)(e);return t.forEach(((e,s)=>o=>{const r=o=>{o.id===e?Object.assign(o,s):o.children&&o.children.forEach(r)};return r(o)})(s,o)),t},m=e=>{var s;return e?null===(s=e.children)||void 0===s?void 0:s.filter((e=>e.url)):[]};function c(e,s){return e.reduce(((e,o)=>(e.push({id:o.id,parentId:(null==s?void 0:s.id)||"",title:o.title,url:o.url,children:o.children,index:o.index}),o.children&&e.push(...c(o.children,o)),e)),[])}},69041:e=>{e.exports="data:image/png;base64,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"},14318:e=>{e.exports="data:image/png;base64,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"}}]);