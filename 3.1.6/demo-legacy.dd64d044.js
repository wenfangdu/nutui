System.register(["./mobile-legacy.0a370b0a.js","./index-legacy.5dec0910.js","./vendor-legacy.7f17019b.js"],(function(e){"use strict";var l,t,r,o,a,n,u,i,d;return{setters:[function(e){l=e.c},function(e){t=e._},function(e){r=e.r,o=e.e,a=e.j,n=e.k,u=e.g,i=e.o,d=e.l}],execute:function(){const{createDemo:s}=l("uploader"),c=s({setup:()=>({onOversize:e=>{console.log("oversize 触发 文件大小不能超过 50kb",e)},beforeUpload:async e=>{const l=document.createElement("canvas"),t=l.getContext("2d"),r=await(e=>new Promise((l=>{const t=new FileReader;t.onloadend=e=>l(e.target.result),t.readAsDataURL(e)})))(e[0]),o=await(a=r,new Promise((e=>{const l=new Image;l.onload=()=>e(l),l.src=a})));var a;l.width=o.width,l.height=o.height,t.clearRect(0,0,o.width,o.height),t.drawImage(o,0,0,o.width,o.height);let n=await((e,l,t)=>new Promise((r=>e.toBlob((e=>r(e)),l,t))))(l,"image/jpeg",.5);return[await new File([n],e[0].name)]},onDelete:(e,l)=>{console.log("delete 事件触发",e,l)},uploadUrl:"https://my-json-server.typicode.com/linrufeng/demo/posts",formData:{custom:"test"}})}),m={class:"demo bg-w"},p=u("h2",null,"基础用法",-1),h=u("h2",null,"自定义上传样式",-1),f=d("上传文件"),g=u("h2",null,"直接调起摄像头（移动端生效）",-1),w=u("h2",null,"上传状态",-1),b=u("h2",null,"限制上传数量5个",-1),v=u("h2",null,"限制上传大小（每个文件最大不超过 50kb）",-1),U=u("h2",null,"限制上传大小（在beforeupload钩子中处理）",-1),z=u("h2",null,"自定义数据 FormData 、 headers ",-1),D=u("h2",null,"禁用状态",-1);e("default",t(c,[["render",function(e,l,t,u,d,s){const c=r("nut-uploader"),y=r("nut-button");return i(),o("div",m,[p,a(c,{url:e.uploadUrl,onStart:e.start},null,8,["url","onStart"]),h,a(c,{url:e.uploadUrl},{default:n((()=>[a(y,{type:"primary",icon:"uploader"},{default:n((()=>[f])),_:1})])),_:1},8,["url"]),g,a(c,{capture:""}),w,a(c,{url:e.uploadUrl,multiple:"",onDelete:e.onDelete},null,8,["url","onDelete"]),b,a(c,{url:e.uploadUrl,multiple:"",maximum:"5"},null,8,["url"]),v,a(c,{url:e.uploadUrl,multiple:"",maximize:51200,onOversize:e.onOversize},null,8,["url","onOversize"]),U,a(c,{url:e.uploadUrl,multiple:"","before-upload":e.beforeUpload,maximize:51200,onOversize:e.onOversize},null,8,["url","before-upload","onOversize"]),z,a(c,{url:e.uploadUrl,data:e.formData,headers:e.formData,"with-credentials":!0},null,8,["url","data","headers"]),D,a(c,{disabled:""})])}]]))}}}));
