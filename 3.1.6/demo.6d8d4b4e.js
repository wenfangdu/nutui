var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,i,a)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a;import{c as o}from"./mobile.c80a6c29.js";import{_ as c}from"./index.4b39d8d5.js";import{a as n,A as r,r as s,e as u,j as d,k as v,g as f,o as m,l as p,t as b}from"./vendor.f398f23f.js";const{createDemo:_}=o("collapse"),w=_({setup(t,o){const c=n({active1:[1,"2"],active2:1,active3:1,active4:1,active5:1,title1:"标题1",title2:"标题2",title3:"标题3",subTitle:"副标题"});return((t,o)=>{for(var c in o||(o={}))i.call(o,c)&&l(t,c,o[c]);if(e)for(var c of e(o))a.call(o,c)&&l(t,c,o[c]);return t})({change:t=>{console.log(`点击了name是${t}的面板`)}},r(c))}}),h={class:"demo full"},j=f("h2",null,"基本用法",-1),y=p(" NutUI是一套拥有京东风格的轻量级的 Vue 组件库 "),T=p(" 在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！ "),U=f("h2",null,"无icon样式",-1),g=p(" 引入Vue3新特性 Composition API、Teleport、Emits 等 "),O=p(" 全面使用 TypeScipt "),I=f("h2",null,"手风琴",-1),P=p(" 基于京东设计语言体系，构建场景 "),x=p(" 提高界⾯的模块化通用程度 "),A=p(" 采用组合式 API Composition 语法重构，结构清晰，功能模块化 "),C=f("h2",null,"自定义折叠图标",-1),E=p(" 文本测试 "),N=p(" NUTUI3.0重新思考其内在的一致性和可组合性 "),S=p(" 提⾼产研输出对接的效率，降低输出工作量 "),V=f("h2",null,"自定义标题图标",-1),k=p(" 组件 emits 事件单独提取，增强代码可读性 "),z=p(" 使用 Teleport 新特性重构挂载类组件 ");var D=c(w,[["render",function(t,e,i,a,l,o){const c=s("nut-collapse-item"),n=s("nut-collapse");return m(),u("div",h,[j,d(n,{active:t.active1,"onUpdate:active":e[0]||(e[0]=e=>t.active1=e),icon:"down-arrow"},{default:v((()=>[d(c,{name:1},{mTitle:v((()=>[p(b(t.title1),1)])),default:v((()=>[y])),_:1}),d(c,{title:t.title2,name:2},{default:v((()=>[T])),_:1},8,["title"]),d(c,{title:t.title3,name:3,disabled:""},null,8,["title"])])),_:1},8,["active"]),U,d(n,{active:t.active4,"onUpdate:active":e[1]||(e[1]=e=>t.active4=e),accordion:!0},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[g])),_:1},8,["title"]),d(c,{title:t.title2,name:2},{default:v((()=>[O])),_:1},8,["title"])])),_:1},8,["active"]),I,d(n,{active:t.active2,"onUpdate:active":e[2]||(e[2]=e=>t.active2=e),accordion:!0,icon:"down-arrow"},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[P])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":t.subTitle},{default:v((()=>[x])),_:1},8,["title","sub-title"]),d(c,{title:t.title3,name:3},{default:v((()=>[A])),_:1},8,["title"])])),_:1},8,["active"]),C,d(n,{active:t.active3,"onUpdate:active":e[3]||(e[3]=e=>t.active3=e),accordion:!0,icon:"arrow-right2",rotate:"90"},{default:v((()=>[d(c,{title:t.title1,name:1},{sTitle:v((()=>[E])),default:v((()=>[N])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":"文本内容"},{default:v((()=>[S])),_:1},8,["title"])])),_:1},8,["active"]),V,d(n,{active:t.active5,"onUpdate:active":e[4]||(e[4]=e=>t.active5=e),"title-icon":"issue","title-icon-color":"red","title-icon-size":"20px","title-icon-position":"left",icon:"down-arrow",accordion:!0},{default:v((()=>[d(c,{title:t.title1,name:1},{default:v((()=>[k])),_:1},8,["title"]),d(c,{title:t.title2,name:2,"sub-title":"文本内容"},{default:v((()=>[z])),_:1},8,["title"])])),_:1},8,["active"])])}]]);export{D as default};
