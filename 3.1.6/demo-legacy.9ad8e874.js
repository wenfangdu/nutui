System.register(["./mobile-legacy.0a370b0a.js","./index-legacy.5dec0910.js","./vendor-legacy.7f17019b.js"],(function(t){"use strict";var s,o,i,e,l,n,a,h,c,p;return{setters:[function(t){s=t.c},function(t){o=t._},function(t){i=t.a,e=t.r,l=t.e,n=t.j,a=t.k,h=t.g,c=t.o,p=t.l}],execute:function(){const{createDemo:b}=s("popup"),w=b({props:{},setup:()=>({state:i({showBasic:!1,showTop:!1,showBottom:!1,showLeft:!1,showRight:!1,showIcon:!1,showIconPosition:!1,showCloseIcon:!1,showRound:!1,showCombination:!1})})}),u={class:"demo"},v=h("h2",null,"基础用法",-1),d=p("正文"),r=h("h2",null,"弹出位置",-1),k=h("h2",null,"关闭图标",-1),g=h("h2",null,"圆角弹框",-1),f=h("h2",null,"指定挂载节点",-1),C=p("app");t("default",o(w,[["render",function(t,s,o,i,h,p){const b=e("nut-cell"),w=e("nut-popup");return c(),l("div",u,[v,n(b,{title:"展示弹出层","is-link":"",onClick:s[0]||(s[0]=s=>t.state.showBasic=!0)}),n(w,{"pop-class":"popclass",style:{padding:"30px 50px"},visible:t.state.showBasic,"onUpdate:visible":s[1]||(s[1]=s=>t.state.showBasic=s),"z-index":100},{default:a((()=>[d])),_:1},8,["visible"]),r,n(b,{title:"顶部弹出","is-link":"",onClick:s[2]||(s[2]=s=>t.state.showTop=!0)}),n(w,{position:"top",style:{height:"20%"},visible:t.state.showTop,"onUpdate:visible":s[3]||(s[3]=s=>t.state.showTop=s)},null,8,["visible"]),n(b,{title:"底部弹出","is-link":"",onClick:s[4]||(s[4]=s=>t.state.showBottom=!0)}),n(w,{position:"bottom",style:{height:"20%"},visible:t.state.showBottom,"onUpdate:visible":s[5]||(s[5]=s=>t.state.showBottom=s)},null,8,["visible"]),n(b,{title:"左侧弹出","is-link":"",onClick:s[6]||(s[6]=s=>t.state.showLeft=!0)}),n(w,{position:"left",style:{width:"20%",height:"100%"},visible:t.state.showLeft,"onUpdate:visible":s[7]||(s[7]=s=>t.state.showLeft=s)},null,8,["visible"]),n(b,{title:"右侧弹出","is-link":"",onClick:s[8]||(s[8]=s=>t.state.showRight=!0)}),n(w,{position:"right",style:{width:"20%",height:"100%"},visible:t.state.showRight,"onUpdate:visible":s[9]||(s[9]=s=>t.state.showRight=s)},null,8,["visible"]),k,n(b,{title:"关闭图标","is-link":"",onClick:s[10]||(s[10]=s=>t.state.showIcon=!0)}),n(w,{position:"bottom",closeable:"",style:{height:"20%"},visible:t.state.showIcon,"onUpdate:visible":s[11]||(s[11]=s=>t.state.showIcon=s)},null,8,["visible"]),n(b,{title:"图标位置","is-link":"",onClick:s[12]||(s[12]=s=>t.state.showIconPosition=!0)}),n(w,{position:"bottom",closeable:"","close-icon-position":"top-left",style:{height:"20%"},visible:t.state.showIconPosition,"onUpdate:visible":s[13]||(s[13]=s=>t.state.showIconPosition=s)},null,8,["visible"]),n(b,{title:"自定义图标","is-link":"",onClick:s[14]||(s[14]=s=>t.state.showCloseIcon=!0)}),n(w,{position:"bottom",closeable:"","close-icon-position":"top-left","close-icon":"heart",style:{height:"20%"},visible:t.state.showCloseIcon,"onUpdate:visible":s[15]||(s[15]=s=>t.state.showCloseIcon=s)},null,8,["visible"]),g,n(b,{title:"圆角弹框","is-link":"",onClick:s[16]||(s[16]=s=>t.state.showRound=!0)}),n(w,{position:"bottom",closeable:"",round:"",style:{height:"30%"},visible:t.state.showRound,"onUpdate:visible":s[17]||(s[17]=s=>t.state.showRound=s)},null,8,["visible"]),f,n(b,{title:"指定挂载节点","is-link":"",onClick:s[18]||(s[18]=s=>t.state.showTeleport=!0)}),n(w,{style:{padding:"30px 50px"},teleport:"#app",visible:t.state.showTeleport,"onUpdate:visible":s[19]||(s[19]=s=>t.state.showTeleport=s)},{default:a((()=>[C])),_:1},8,["visible"])])}]]))}}}));
