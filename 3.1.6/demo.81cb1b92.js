var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;import{c as i}from"./mobile.c80a6c29.js";import{_ as o}from"./index.4b39d8d5.js";import{a as d,A as u,r as f,e as p,j as b,k as r,c as _,s as h,B as m,C as y,g,o as v,F as T,i as j,t as w,l as O}from"./vendor.f398f23f.js";const{createDemo:L}=i("tab"),k=L({props:{},setup(){const t=d({editList:[{title:"标签一"},{title:"标签二"}]});return i=((t,e)=>{for(var a in e||(e={}))n.call(e,a)&&c(t,a,e[a]);if(l)for(var a of l(e))s.call(e,a)&&c(t,a,e[a]);return t})({},u(t)),e(i,a({changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}}));var i}}),x=t=>(m("data-v-ee9ef398"),t=t(),y(),t),P={class:"demo full"},C=x((()=>g("h2",null,"基础用法，默认tab-title宽度均分相等",-1))),I=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),S=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),D=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),A=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),B=x((()=>g("h2",null,"defaultIndex设置默认显示tab,iconType为half时切换选中icon样式",-1))),E=x((()=>g("h2",null,"switchTab监听切换tab返回事件",-1))),F=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),q=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),z=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),G=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),H=x((()=>g("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1))),J=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),K=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),M=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),N=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),Q=x((()=>g("h2",null," 禁止tab内容滑动",-1))),R=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),U=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),V=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),W=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),X=x((()=>g("h2",null,' 设置scrollType="scroll"，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。',-1))),Y=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),Z=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),$=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),tt=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),et=x((()=>g("p",{class:"content"},"这里是页签已取消内容",-1))),at=x((()=>g("p",{class:"content"},"这里是页签待评价内容",-1))),lt=x((()=>g("h2",null,"设置slot:header可以自定义标签",-1))),nt=x((()=>g("p",{class:"content"},"这里是页签全部内容",-1))),st=x((()=>g("p",{class:"content"},"这里是页签待付款内容",-1))),ct=x((()=>g("p",{class:"content"},"这里是页签待收获内容",-1))),it=x((()=>g("p",{class:"content"},"这里是页签已完成内容",-1))),ot=x((()=>g("p",{class:"content"},"这里是页签已取消内容",-1))),dt=x((()=>g("p",{class:"content"},"这里是页签待评价内容",-1))),ut=x((()=>g("h2",null,"左右tab布局",-1))),ft=x((()=>g("p",{class:"content"},"这里是页签一内容",-1))),pt=x((()=>g("p",{class:"content"},"这里是页签二内容",-1))),bt=x((()=>g("p",{class:"content"},"这里是页签三内容",-1))),rt=x((()=>g("p",{class:"content"},"这里是页签四内容",-1))),_t=x((()=>g("p",{class:"content"},"这里是页签五内容",-1))),ht=x((()=>g("p",{class:"content"},"这里是页签六内容",-1))),mt=x((()=>g("p",{class:"content"},"这里是页签七内容",-1))),yt=x((()=>g("h2",null,"异步操作",-1))),gt={class:"content"},vt=O("改变数据");var Tt=o(k,[["render",function(t,e,a,l,n,s){const c=f("nut-tab-panel"),i=f("nut-tab"),o=f("nut-icon"),d=f("nut-button");return v(),p("div",P,[C,b(i,null,{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[I])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[S])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[D])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[A])),_:1})])),_:1}),B,E,b(i,{"default-index":1,onSwitchTab:t.switchTab,"icon-type":"half"},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[F])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[q])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[z])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[G])),_:1})])),_:1},8,["onSwitchTab"]),H,b(i,{"animated-time":500},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[J])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[K])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[M])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[N])),_:1})])),_:1}),Q,b(i,{"no-swiping":!0},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[R])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[U])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[V])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[W])),_:1})])),_:1}),X,b(i,{"animated-time":500,scrollType:"scroll"},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[Y])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[Z])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[$])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[tt])),_:1}),b(c,{"tab-title":"已取消"},{default:r((()=>[et])),_:1}),b(c,{"tab-title":"待评价"},{default:r((()=>[at])),_:1})])),_:1}),lt,b(i,{scrollType:"scroll"},{default:r((()=>[b(c,{"tab-title":"全部"},{header:r((()=>[b(o,{name:"dongdong"})])),default:r((()=>[nt])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[st])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[ct])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[it])),_:1}),b(c,{"tab-title":"已取消"},{default:r((()=>[ot])),_:1}),b(c,{"tab-title":"待评价"},{default:r((()=>[dt])),_:1})])),_:1}),ut,b(i,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll","icon-type":"half"},{default:r((()=>[b(c,{"tab-title":"页签一"},{default:r((()=>[ft])),_:1}),b(c,{"tab-title":"页签二"},{default:r((()=>[pt])),_:1}),b(c,{"tab-title":"页签三"},{default:r((()=>[bt])),_:1}),b(c,{"tab-title":"页签四"},{default:r((()=>[rt])),_:1}),b(c,{"tab-title":"页签五"},{default:r((()=>[_t])),_:1}),b(c,{"tab-title":"页签六"},{default:r((()=>[ht])),_:1}),b(c,{"tab-title":"页签七"},{default:r((()=>[mt])),_:1})])),_:1}),yt,t.editList.length>0?(v(),_(i,{key:0,"animated-time":500},{default:r((()=>[(v(!0),p(T,null,j(t.editList,((t,e)=>(v(),_(c,{"tab-title":t.title,key:e},{default:r((()=>[g("p",gt,"这里是页签"+w(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):h("",!0),b(d,{type:"primary",onClick:t.changeList},{default:r((()=>[vt])),_:1},8,["onClick"])])}],["__scopeId","data-v-ee9ef398"]]);export{Tt as default};
