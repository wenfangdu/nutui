System.register(["./mobile-legacy.0a370b0a.js","./index-legacy.5dec0910.js","./vendor-legacy.7f17019b.js"],(function(e){"use strict";var l,a,n,o,t,u,d,s;return{setters:[function(e){l=e.c},function(e){a=e._},function(e){n=e.a,o=e.r,t=e.e,u=e.j,d=e.g,s=e.o}],execute:function(){const{createDemo:c}=l("input"),g=c({setup(){const e=n({val0:"",val1:"初始数据",val2:"禁止修改",val3:"readonly 只读",val4:"",val5:"",val6:"",val7:"",val8:"文案"});return setTimeout((function(){e.val1="异步数据"}),2e3),{state:e,change:(e,l)=>{console.log("change: ",e,l)},blur:(e,l)=>{console.log("blur:",e,l)},clear:e=>{console.log("clear:",e)},focus:(e,l)=>{console.log("focus:",e,l)}}}}),h={class:"demo full"},r=d("h2",null,"基础用法",-1),m=d("h2",null,"禁用输入框",-1),v=d("h2",null,"限制输入长度",-1),V=d("h2",null,"自定义类型",-1);e("default",a(g,[["render",function(e,l,a,n,d,c){const g=o("nut-input");return s(),t("div",h,[r,u(g,{modelValue:e.state.val1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.state.val1=l),onChange:e.change,onFocus:e.focus,onBlur:e.blur,label:"文本(异步)"},null,8,["modelValue","onChange","onFocus","onBlur"]),u(g,{placeholder:"请输入文本",onChange:e.change,modelValue:e.state.val0,"onUpdate:modelValue":l[1]||(l[1]=l=>e.state.val0=l),"require-show":!0,label:"文本",onClear:e.clear},null,8,["onChange","modelValue","onClear"]),m,u(g,{modelValue:e.state.val2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.state.val2=l),onChange:e.change,disabled:!0,label:"文本"},null,8,["modelValue","onChange"]),u(g,{modelValue:e.state.val3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.state.val3=l),onChange:e.change,readonly:!0,label:"文本"},null,8,["modelValue","onChange"]),v,u(g,{modelValue:e.state.val4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.state.val4=l),onChange:e.change,"max-length":"7",label:"限制7"},null,8,["modelValue","onChange"]),V,u(g,{modelValue:e.state.val0,"onUpdate:modelValue":l[5]||(l[5]=l=>e.state.val0=l),onChange:e.change,type:"password",label:"密码"},null,8,["modelValue","onChange"]),u(g,{modelValue:e.state.val5,"onUpdate:modelValue":l[6]||(l[6]=l=>e.state.val5=l),onChange:e.change,type:"number",label:"整数"},null,8,["modelValue","onChange"]),u(g,{modelValue:e.state.val6,"onUpdate:modelValue":l[7]||(l[7]=l=>e.state.val6=l),onChange:e.change,type:"digit",placeholder:"支持小数点的输入",label:"数字"},null,8,["modelValue","onChange"])])}]]))}}}));
