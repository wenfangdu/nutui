var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,d)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[l]=d;import{c as u,T as r}from"./mobile.c80a6c29.js";import{_ as i}from"./index.4b39d8d5.js";import{a as c,A as s,r as f,e as V,j as m,k as _,o as b,g as p,t as h,l as g,B as v,C}from"./vendor.f398f23f.js";const{createDemo:j}=u("radio"),O=j({props:{},setup(){const e=c({radioVal:1,radioVal2:2,radioVal3:1,radioVal4:1,radioVal5:1,radioVal6:1});return u=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(e,l,a[l]);if(d)for(var l of d(a))t.call(a,l)&&n(e,l,a[l]);return e})({},s(e)),a(u,l({handleChange1:e=>{console.log(e)},handleChange2:e=>{console.log(e)},handleChange3:e=>{r.text(`您选中了${e}`)}}));var u}}),y=e=>(v("data-v-8b730bbc"),e=e(),C(),e),k={class:"demo demo-nut-radio"},U=g("单选框1"),P=g("单选框2"),w=g("单选框1"),x=g("单选框2"),z=y((()=>p("div",{class:"demo-check"},"当前选中值",-1))),D=g("禁用单选框"),I=g("禁用单选框"),A=g("自定义尺寸12"),B=g("自定义尺寸12"),E=g("自定义图标"),R=g("自定义图标"),S=g("触发事件"),T=g("触发事件"),$=y((()=>p("div",{class:"demo-check"},"当前选中值",-1)));var q=i(O,[["render",function(e,a,l,d,o,t){const n=f("nut-radio"),u=f("nut-radiogroup"),r=f("nut-cell"),i=f("nut-cell-group");return b(),V("div",k,[m(i,{title:"基本用法-左右侧"},{default:_((()=>[m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal,"onUpdate:modelValue":a[0]||(a[0]=a=>e.radioVal=a),onChange:e.handleChange1},{default:_((()=>[m(n,{label:1},{default:_((()=>[U])),_:1}),m(n,{label:2},{default:_((()=>[P])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal,"onUpdate:modelValue":a[1]||(a[1]=a=>e.radioVal=a),"text-position":"left",onChange:e.handleChange1},{default:_((()=>[m(n,{label:1},{default:_((()=>[w])),_:1}),m(n,{label:2},{default:_((()=>[x])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,null,{default:_((()=>[z,p("div",null,h(e.radioVal),1)])),_:1})])),_:1}),m(i,{title:"单选框禁用"},{default:_((()=>[m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal3,"onUpdate:modelValue":a[2]||(a[2]=a=>e.radioVal3=a)},{default:_((()=>[m(n,{label:1,disabled:""},{default:_((()=>[D])),_:1}),m(n,{label:2,disabled:""},{default:_((()=>[I])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"自定义尺寸"},{default:_((()=>[m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal4,"onUpdate:modelValue":a[3]||(a[3]=a=>e.radioVal4=a)},{default:_((()=>[m(n,{label:1,"icon-size":"12"},{default:_((()=>[A])),_:1}),m(n,{label:2,"icon-size":"12"},{default:_((()=>[B])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"Radio自定义图标"},{default:_((()=>[m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal5,"onUpdate:modelValue":a[4]||(a[4]=a=>e.radioVal5=a)},{default:_((()=>[m(n,{label:1,"icon-name":"checklist","icon-active-name":"checklist"},{default:_((()=>[E])),_:1}),m(n,{label:2,"icon-name":"checklist","icon-active-name":"checklist"},{default:_((()=>[R])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(i,{title:"触发事件"},{default:_((()=>[m(r,null,{default:_((()=>[m(u,{modelValue:e.radioVal6,"onUpdate:modelValue":a[5]||(a[5]=a=>e.radioVal6=a),onChange:e.handleChange3},{default:_((()=>[m(n,{label:1},{default:_((()=>[S])),_:1}),m(n,{label:2},{default:_((()=>[T])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),m(r,null,{default:_((()=>[$,p("div",null,h(e.radioVal6),1)])),_:1})])),_:1})])}],["__scopeId","data-v-8b730bbc"]]);export{q as default};
