import{c as t}from"./mobile.c80a6c29.js";import{_ as e}from"./index.4b39d8d5.js";import{a as o,r as s,e as n,j as a,o as l,W as i}from"./vendor.f398f23f.js";const{createDemo:r}=t("shortpassword"),m=r({setup(){let{proxy:t}=i();const e=o({visible:!1,noButton:!0,value:"",errorMsg:"",length:6}),s={onChange(e){e&&t.$toast.text(e)},onOk(o){o&&t.$toast.text(o),e.visible=!1},onComplete(){},onTips(){t.$toast.text("执行忘记密码逻辑")},close(){t.$toast.text("点击icon关闭弹窗")},cancel(){t.$toast.text("点击取消按钮关闭弹窗")}};return{state:e,methods:s}}}),c={class:"demo"};var u=e(m,[["render",function(t,e,o,i,r,m){const u=s("nut-shortpassword"),d=s("nut-cell");return l(),n("div",c,[a(u,{modelValue:t.state.value,"onUpdate:modelValue":e[0]||(e[0]=e=>t.state.value=e),visible:t.state.visible,"onUpdate:visible":e[1]||(e[1]=e=>t.state.visible=e),"no-button":t.state.noButton,length:t.state.length,"error-msg":t.state.errorMsg,onChange:t.methods.onChange,onComplete:t.methods.onComplete,onOk:t.methods.onOk,onTips:t.methods.onTips,onClose:t.methods.close,onCancel:t.methods.cancel},null,8,["modelValue","visible","no-button","length","error-msg","onChange","onComplete","onOk","onTips","onClose","onCancel"]),a(d,{title:"基础用法","is-link":"",onClick:e[2]||(e[2]=e=>{t.state.visible=!0,t.state.noButton=!0,t.state.length=6,t.state.errorMsg=""})}),a(d,{title:"显示按钮组","is-link":"",onClick:e[3]||(e[3]=e=>{t.state.visible=!0,t.state.noButton=!1,t.state.length=6,t.state.errorMsg=""})}),a(d,{title:"自定义密码长度4","is-link":"",onClick:e[4]||(e[4]=e=>{t.state.visible=!0,t.state.noButton=!0,t.state.length=4,t.state.errorMsg=""})}),a(d,{title:"忘记密码提示语事件回调","is-link":"",onClick:e[5]||(e[5]=e=>{t.state.visible=!0,t.state.length=6,t.state.errorMsg="",t.state.noButton=!0})}),a(d,{title:"错误提示语","is-link":"",onClick:e[6]||(e[6]=e=>{t.state.visible=!0,t.state.length=6,t.state.noButton=!0,t.state.errorMsg="请输入正确密码"})})])}]]);export{u as default};
