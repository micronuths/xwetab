"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[8491],{24182:(e,l,t)=>{t.d(l,{o:()=>a});const a=(0,t(10435).Q_)("wallpaper-settings-main",{state:()=>({curTab:0,showMoreSetting:!1,moreSettingMenu:"auto-replace"}),actions:{setCurTab(e){this.curTab=e},setMoreSettingShow(e){this.showMoreSetting=e},setMenu(e){this.moreSettingMenu=e}}})},58491:(e,l,t)=>{t.r(l),t.d(l,{default:()=>M});var a=t(35427),o=t(79282),i=t(57268),n=t(94209),s=t(68398),r=t(3627),u=t(63477),p=t(22140),c=t(96643),v=t(64845),d=t(17319),f=t(24182),g=t(29445),x=t(10435);const m={class:"h-full px-[70px] py-[40px] mb:px-[20px] mb:py-[30px]"},b=(0,i._)("i",{class:"iconfont icon-return_icon text-[18px]"},null,-1),w={class:"ml-[12px] font-ali-65 text-[16px]"},h={class:"mt-[24px] w-full font-ali-65 text-[14px] leading-[20px] text-color-t2"},y={class:"relative mt-[16px] h-[202px] w-full overflow-hidden rounded-[6px] bg-color-m2 bg-opacity-5"},_=(0,i._)("i",{class:"iconfont icon-bendishangchuan mt-[60px] text-[28px] text-color-t1"},null,-1),k={class:"mt-[4px] font-ali-55 text-[14px] leading-[20px] text-color-t2"},C={class:"mt-[4px] font-ali-55 text-[12px] leading-[17px] text-color-t3"},D={key:0,class:"iconfont icon-loading_small mt-[14px] animate-spin text-[20px] text-color-t3"},S=["src"],T=["src"],L={class:"flex justify-center pt-[24px]"},M=(0,i.aZ)({__name:"wallpaper-setting-upload",setup(e){const l=(0,f.o)(),t=(0,r.M)(),M=(0,p.useUserStore)(),z=(0,g.iH)(!0),H=(0,g.iH)(!1),R=(0,g.iH)(!1),U=(0,g.iH)(),j=(0,g.iH)(!1),B=(0,g.iH)(""),E=(0,g.iH)(!1),W="mp4|webm|ogg|mp3|wav|flac|aac|flv|avi|rmvb|rm|wmv|mov|mkv|mpg|mpeg|3gp|dat|vob|m4v|f4v",{customWallpaperUrl:Y}=(0,x.Jk)(t);function q(e){const l=e.split(".").pop();E.value=!!l&&W.split("|").includes(l)}Y.value&&(B.value=Y.value,z.value=!1,j.value=!1,q(B.value));const F=async()=>{if(!R.value)if(M.isLogin){const e="image/*";Z(await(0,u.Y)(e,"readAsDataURL",!1))}else d.R.warn({message:"请登录后再上传图片",btnText:"去登录",onBtnClick:()=>{M.showLogin(!1)}})};async function Z(e){if(!M.isLogin)return void d.R.warn({message:"请登录后再上传图片",btnText:"去登录",onBtnClick:()=>{M.showLogin(!1)}});if(e.size>20971520)return void d.R.fail({message:"文件大小超出限制"});R.value=!0;const l=M.user.id,t=e.name.split(".").pop(),[a,o]=await(0,c.E)("user-wallpaper",e,l,`${l}.${t}`);R.value=!1,a?d.R.fail({message:"文件上传失败"}):(B.value=o,q(o),z.value=!1,j.value=!1)}function V(){l.setMoreSettingShow(!1)}function $(){B.value="",j.value=!1,z.value=!0}function A(){if(!z.value&&!j.value&&B.value){t.setCustomWallpaper(B.value);const e=B.value.split(".").pop();e&&W.split("|").includes(e)?async function(){H.value=!0,t.setVideoBg({poster:"",src:Y.value,id:""}),setTimeout((()=>{H.value=!1}),1e3)}():async function(){H.value=!0,(0,v.Y)().addTips({category:"wallpaperLoad",type:"loading"});const[e]=await(0,u.pt)((0,u.Em)(Y.value,"wallpaper"),!0);e?(0,v.Y)().addTips({category:"wallpaperLoad",type:"fail"}):((0,v.Y)().removeTips({category:"wallpaperLoad"}),t.setImageBg(Y.value,""));H.value=!1}()}}async function I(e){const l=e.target.value;if(!l)return z.value=!0,void(j.value=!1);q(l);const t=function(e){return/(http(s)?:\/\/.+\.(?:jpg|jpeg|png|gif|bmp|webp|svg|tiff|ico|flif|heif|bpg|mp4|webm|ogg|mp3|wav|flac|aac|flv|avi|rmvb|rm|wmv|mov|mkv|mpg|mpeg|3gp|dat|vob|m4v|f4v))/.test(e)}(l);if(!t)return j.value=!0,void(z.value=!0);try{await fetch(l,{mode:"no-cors"}),j.value=!1,z.value=!1}catch(e){j.value=!0,z.value=!0}}return(0,i.bv)((()=>{var e,l;null===(e=U.value)||void 0===e||e.addEventListener("drop",(e=>{var l;if(R.value)return;e.preventDefault();const t=null===(l=e.dataTransfer)||void 0===l?void 0:l.files[0];null!=t&&t.type&&null!=t&&t.type.includes("image")?Z(t):d.R.warn({message:"请上传图片文件"})})),null===(l=U.value)||void 0===l||l.addEventListener("dragover",(e=>{e.preventDefault()}))})),(e,l)=>{const t=o.Z,r=a.Z;return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",{class:"inline-flex cursor-pointer items-center text-color-t1",onClick:V},[b,(0,i._)("span",w,(0,n.toDisplayString)("自定义壁纸"),1)]),(0,i._)("div",h,(0,n.toDisplayString)("您可以上传本地图片文件，也可以填写图片或视频链接来自定义壁纸"),1),(0,i._)("div",y,[(0,i._)("div",{ref_key:"uploadRef",ref:U,class:"group relative flex h-full w-full flex-col items-center overflow-hidden rounded-[6px] border border-solid border-color-m2 border-opacity-5 outline-none",onClick:F},[(0,i._)("div",{class:(0,n.normalizeClass)(["absolute inset-0 z-[1] flex h-full w-full cursor-pointer flex-col items-center transition-[display]",[!B.value||z.value||j.value?"":" bg-color-m1 bg-opacity-60 group-hover:flex"]]),tabindex:"-1"},[_,(0,i._)("p",k,(0,n.toDisplayString)("点击或拖动文件到此区域上传"),1),(0,i._)("p",C,(0,n.toDisplayString)("支持 jpg、png、svg、gif 等格式"),1),R.value?((0,i.wg)(),(0,i.iD)("i",D)):(0,i.kq)("",!0)],2),z.value||j.value||!B.value||E.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("img",{key:0,src:B.value,class:"h-full w-full",alt:""},null,8,S)),!z.value&&!j.value&&B.value&&E.value?((0,i.wg)(),(0,i.iD)("video",{key:1,src:B.value,class:"h-full w-full"},null,8,T)):(0,i.kq)("",!0)],512)]),(0,i._)("div",{class:(0,n.normalizeClass)(["relative mt-[16px] flex h-[44px] w-full items-center rounded-[8px] border border-solid bg-color-m2 bg-opacity-5 pl-[12px]",[j.value?"border-[#FF4D4F] border-opacity-10 bg-[#DC4538]":"border-color-m2 border-opacity-0 bg-color-m2"]])},[(0,i._)("i",{class:(0,n.normalizeClass)(["iconfont icon-link_icon text-[18px]",[j.value?"text-color-red":"text-color-t3"]])},null,2),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>B.value=e),type:"text",autocomplete:"",class:(0,n.normalizeClass)(["h-full flex-1 text-ellipsis bg-color-none pl-[12px] pr-[36px] text-[14px] placeholder:text-[14px] placeholder:text-color-t3",[j.value?"text-color-red":"text-color-t1"]]),placeholder:"图片或视频链接",maxlength:"500",onChange:I},null,34),[[s.vModelText,B.value]]),(0,i.Wm)(t,{show:!!B.value,ani:"scale",class:"absolute bottom-0 right-0 h-[42px] w-[40px]"},{default:(0,i.w5)((()=>[(0,i._)("button",{tabindex:"-1",type:"button",class:"h-full w-full",onClick:$},[(0,i._)("i",{class:(0,n.normalizeClass)(["iconfont icon-clear_merge_icon text-[16px] text-color-t2 duration-150",{"!text-color-red":j.value}])},null,2)])])),_:1},8,["show"])],2),(0,i._)("div",L,[(0,i.Wm)(r,{loading:H.value,disabled:z.value,class:"h-[36px] w-[114px]",onClick:A},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.toDisplayString)("确定"),1)])),_:1},8,["loading","disabled"])])])}}})}}]);