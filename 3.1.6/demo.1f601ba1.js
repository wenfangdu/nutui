var e=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(o,s,t)=>s in o?e(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,l=(e,l)=>{for(var i in l||(l={}))s.call(l,i)&&n(e,i,l[i]);if(o)for(var i of o(l))t.call(l,i)&&n(e,i,l[i]);return e};import{c as i}from"./mobile.c80a6c29.js";import{_ as c}from"./index.4b39d8d5.js";import{a,m as d,A as r,r as m,e as u,j as h,B as p,C as y,g as v,o as w}from"./vendor.f398f23f.js";const{createDemo:C}=i("address"),b=C({props:{},setup(){const e=a({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"},{id:5,name:"浙江"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"},{id:3,name:"八里庄街道"},{id:9,name:"北苑"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),o=a({normal:!1,normal2:!1,exist:!1,customImg:!1,other:!1}),s=a({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),t=d([{id:1,addressDetail:"",cityName:"次渠镇",countyName:"通州区",provinceName:"北京市",selectedAddress:!0,townName:"",name:"探探鱼",phone:"182****1718"},{id:2,addressDetail:"",cityName:"钓鱼岛全区",countyName:"",provinceName:"钓鱼岛",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"},{id:3,addressDetail:"京东大厦",cityName:"大兴区",countyName:"科创十一街18号院",provinceName:"北京市",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"}]),n=a({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址",five:"请选择地址"});return l(l(l(l({showAddress:()=>{o.normal=!o.normal},showAddress2:()=>{o.normal2=!o.normal2},showPopup:o,onChange:(s,t)=>{e[s.next].length<1&&(o[t]=!1)},close1:e=>{console.log(e),n.one=e.data.addressStr},showAddressExist:()=>{o.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.two=o+s+t+l+i}else n.two=e.data.addressStr},close5:e=>{console.log(e),n.five=e.data.addressStr},selected:(e,o,s)=>{console.log(e),console.log(o)},existAddress:t,showAddressOther:()=>{o.other=!0},showCustomImg:()=>{o.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.three=o+s+t+l+i}else n.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.four=o+s+t+l+i}else n.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)}},r(s)),r(n)),r(o)),r(e))}}),g=e=>(p("data-v-7c997070"),e=e(),y(),e),f={class:"demo"},x=g((()=>v("h2",null,"选择自定义地址",-1))),N=g((()=>v("h2",null,"选择自定义地址2",-1))),k=g((()=>v("h2",null,"选择已有地址",-1))),I=g((()=>v("h2",null,"自定义图标",-1))),A=g((()=>v("h2",null,"自定义地址与已有地址切换",-1)));var S=c(b,[["render",function(e,o,s,t,n,l){const i=m("nut-cell"),c=m("nut-address");return w(),u("div",f,[x,h(i,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),h(c,{visible:e.normal,"onUpdate:visible":o[0]||(o[0]=o=>e.normal=o),province:e.province,city:e.city,country:e.country,town:e.town,onChange:o[1]||(o[1]=o=>e.onChange(o,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),N,h(i,{title:"选择地址",desc:e.five,"is-link":"",onClick:e.showAddress2},null,8,["desc","onClick"]),h(c,{visible:e.normal2,"onUpdate:visible":o[2]||(o[2]=o=>e.normal2=o),type:"custom2",province:e.province,city:e.city,country:e.country,town:e.town,height:"270px",onChange:o[3]||(o[3]=o=>e.onChange(o,"normal2")),onClose:e.close5,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),k,h(i,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),h(c,{visible:e.exist,"onUpdate:visible":o[4]||(o[4]=o=>e.exist=o),type:"exist","exist-address":e.existAddress,onChange:o[5]||(o[5]=o=>e.onChange(o,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),I,h(i,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),h(c,{visible:e.customImg,"onUpdate:visible":o[6]||(o[6]=o=>e.customImg=o),type:"exist","exist-address":e.existAddress,onChange:o[7]||(o[7]=o=>e.onChange(o,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),A,h(i,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),h(c,{visible:e.other,"onUpdate:visible":o[8]||(o[8]=o=>e.other=o),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:o[9]||(o[9]=o=>e.onChange(o,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])}],["__scopeId","data-v-7c997070"]]);export{S as default};
