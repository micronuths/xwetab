"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[8406],{79670:(t,e,i)=>{i.d(e,{HS:()=>s,RA:()=>l,zj:()=>o});var a=i(74003);let n,s,o;!function(t){t.top="top",t.guonei="guonei",t.guoji="guoji",t.yule="yule",t.tiyu="tiyu",t.junshi="junshi",t.keji="keji",t.caijing="caijing",t.youxi="youxi",t.qiche="qiche",t.jiankang="jiankang"}(n||(n={})),function(t){t.top="top",t.caijing="caijing",t.keji="keji",t.redian="redian",t.shuma="shuma",t.junshi="junshi",t.guoji="guoji",t.tiyu="tiyu",t.yule="yule",t.lishi="lishi",t.wenda="wenda",t.meishi="meishi",t.youxi="youxi",t.lvyou="lvyou",t.yangsheng="yangsheng",t.shishang="shishang",t.yuer="yuer"}(s||(s={})),function(t){t.World="World",t.Business="Business",t.ScienceTechnology="Science & Technology",t.Entertainment="Entertainment",t.Sports="Sports",t.Health="Health",t.Travel="Travel",t.Politics="Politics"}(o||(o={}));const l=a.sM?[{type:s.top,title:"推荐"},{type:s.caijing,title:"财经"},{type:s.keji,title:"科技"},{type:s.shuma,title:"数码"},{type:s.junshi,title:"军事"},{type:s.guoji,title:"国际"},{type:s.tiyu,title:"体育"},{type:s.yule,title:"娱乐"},{type:s.lishi,title:"历史"},{type:s.meishi,title:"美食"},{type:s.youxi,title:"游戏"},{type:s.lvyou,title:"旅游"},{type:s.yangsheng,title:"养生"},{type:s.shishang,title:"时尚"},{type:s.yuer,title:"育儿"}]:[{type:o.World,title:"World"},{type:o.Politics,title:"Politics"},{type:o.ScienceTechnology,title:"Science & Technology"},{type:o.Sports,title:"Sports"},{type:o.Entertainment,title:"Entertainment"},{type:o.Business,title:"Business"},{type:o.Health,title:"Health"},{type:o.Travel,title:"Travel"}]},88406:(t,e,i)=>{i.r(e),i.d(e,{useNewsStore:()=>u,widgetInfo:()=>h});var a=i(10435),n=i(24581),s=i(84522),o=i(79670),l=i(74003),r=i(17904);var y=i(94119);const h=(0,n.E0)(n.Rm.news),u=(0,a.Q_)(s.BU.news,{syncStorage:{watch:["curCategory","homeOneData","homeSixData","modalData","cacheData"]},state:()=>({modalShow:!1,curCategory:l.sM?{type:o.HS.top,title:"推荐"}:{type:o.zj.World,title:"World"},newsList:[],homeOneData:{list:[],hasMore:!1},homeSixData:{list:[],hasMore:!1},modalData:{list:[],hasMore:!1},cacheData:{}}),getters:{curCategoryIndex(){return o.RA.findIndex((t=>t.type===this.curCategory.type))},hasLastCategory(){return this.curCategoryIndex-1>=0},hasNextCategory(){return this.curCategoryIndex+1<o.RA.length}},actions:{setModal(t){y.G.setStatus(n.Rm.news,t),this.modalShow=t},setCurCategory(t){this.curCategory=t},lastCategory(){const t=this.curCategoryIndex-1;t>=0&&(this.curCategory=o.RA[t])},nextCategory(){const t=o.RA.length,e=this.curCategoryIndex+1;e<t&&(this.curCategory=o.RA[e])},async queryNews(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;const a={k_1:"homeOneData",k_6:"homeSixData",k_20:"modalData"}["k_"+i],n=a+"_"+t+"_"+e,s=this.cacheData[n];if(s&&Date.now()-s.updatetime<6e5)return s.data;const[o,y={}]=await(async(t,e,i)=>{try{const a=await r.hj.get(`${l.H}news/list`,{type:t,pageNum:e,pageSize:i},{_delay:0});if(0===a.code)return[null,a.data];throw a}catch(t){return["catch error"]}})(t,e,i);return o||!y?{}:(this.cacheData={...this.cacheData,[n]:{data:y,updatetime:Date.now()}},this[a]=y,y)}}})}}]);