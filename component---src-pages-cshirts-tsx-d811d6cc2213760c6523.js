"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[787],{2265:function(e,t,a){a.r(t);var l=a(7294),r=a(1300),n=a(1223),o=a(3032),c=a(5420),i=a(7813),s=a(8467),u=a(912),m=a(1597);t.default=function(){var e=(0,l.useState)(1),t=e[0],a=e[1],h=(0,l.useState)([]),d=h[0],p=h[1],f=(0,l.useState)([]),v=f[0],S=f[1],E=(0,l.useState)([]),C=E[0],b=E[1],g=(0,l.useState)([]),N=g[0],P=g[1],T=(0,l.useState)(),y=T[0],L=T[1],w=[],R=[],Z=[],I=[];r.cshirts.map((function(e){w.find((function(t){return t.value===e.Team}))||w.push({value:e.Team,label:e.Team}),Z.find((function(t){return t.value===e.Role}))||Z.push({value:e.Role,label:e.Role}),e.PrimaryColor&&!x(I,e.PrimaryColor)&&I.push({value:e.PrimaryColor,label:e.PrimaryColor}),e.SecondaryColor&&!x(I,e.SecondaryColor)&&I.push({value:e.SecondaryColor,label:e.SecondaryColor}),e.TertiaryColor&&!x(I,e.TertiaryColor)&&I.push({value:e.TertiaryColor,label:e.TertiaryColor})}));for(var _=0;_<=99;_++)R.push({value:_.toString(),label:_.toString()});w.sort((function(e,t){return e.value>t.value?1:-1})),Z.sort((function(e,t){return e.value>t.value?1:-1})),I.sort((function(e,t){return e.value>t.value?1:-1}));var k=function(e,t){return!(d.length>0&&0==x(d,e.Team)||N.length>0&&0==x(N,e.Number)||y&&y.value&&y.value!=e.Captain||C.length>0&&0==x(C,e.PrimaryColor)&&0==x(C,e.SecondaryColor)&&0==x(C,e.TertiaryColor)||v.length>0&&0==x(v,e.Role))};function x(e,t){var a=e.find((function(e){return e.value==t}));return null!=a}function A(){return 0==d.length&&0==N.length&&0==v.length&&0==C.length&&!y}var H=l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-12 center"},l.createElement(s.Z,null))),M=l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-3 z-index"},l.createElement("div",{className:"seclect-box"},l.createElement(o.ZP,{placeholder:"Select teams ...",options:w,isSearchable:"true",isMulti:!0,isClearable:"true",name:"team",className:"dropdown selector-drop",onChange:function(e){p(e)},value:d}),l.createElement(o.ZP,{placeholder:"Select numbers ...",options:R,isSearchable:"true",isMulti:!0,isClearable:"true",name:"number",className:"dropdown selector-drop",onChange:function(e){P(e)},value:N}),l.createElement(o.ZP,{placeholder:"Select roles ...",options:Z,isSearchable:"true",isMulti:!0,isClearable:"true",name:"role",className:"dropdown selector-drop",onChange:function(e){S(e)},value:v}),l.createElement(o.ZP,{placeholder:"Select captain ...",options:[{value:"Yes",label:"Yes"}],isSearchable:"true",isClearable:"true",name:"captain",className:"dropdown selector-drop",onChange:function(e){L(e)},value:y}),l.createElement(o.ZP,{placeholder:"Select colors ...",options:I,isSearchable:"true",isMulti:!0,isClearable:"true",name:"color",className:"dropdown selector-drop",onChange:function(e){b(e)},value:C}))),l.createElement("div",{className:"col-md-9"},l.createElement("div",{className:"wrap-fx"},(A()?r.cshirts.slice(0,98*t):r.cshirts.filter(k)).map((function(e){return l.createElement("div",{className:"fl-item",key:e.ID},l.createElement(n.Z,{id:e.ID,url:"/cshirts/",imgpath:"/images/cshirts/72x72/",collection:"C-Shirts"}))}))),l.createElement("div",{className:A()?"btn-about center m-t16":"hide"},l.createElement("a",{className:"tf-button btn-effect loadmore st2",onClick:function(){a(t+1)}},l.createElement("span",{className:"boder-fade"}),l.createElement("span",{className:"effect"},"Load More"))))),U=u.Z.PREMINT?H:M,Y="A generative collection of "+u.Z.CSHIRTS_PUBLICSALE_SUPPLY+" jerseys 24x24px that get you multiple perks over the game";return l.createElement(c.Z,{pageTitle:"Non Fungible Cup: C-Shirts",container:"inner-page"},l.createElement(i.Z,{title:"C-SHIRTS",subtitle:Y}),l.createElement("section",{className:"tf-section tf-item"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"info-box"},"C-Shirts utilities.",l.createElement("ul",null,l.createElement("li",null,"Lifetime access to the free-minting private sale of each Tournament drop"),l.createElement("li",null,"Receive airdrop of new Tournament C-Shirts"),l.createElement("li",null,"The right to vote about next year's tournament planning")))),l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"info-box"},"How to get a C-Shirt?",l.createElement("ul",null,l.createElement("li",null,l.createElement(m.Link,{to:"/premint"},"Reserve a spot")," in the WL to access the free-minting ",l.createElement(m.Link,{to:"/mint"},"private sale")," of ",u.Z.CSHIRTS_PRIVATESALE_SUPPLY," C-Shirts (1 per wallet)."),l.createElement("li",null,"Mint the other ",u.Z.CSHIRTS_PUBLICSALE_SUPPLY-u.Z.CSHIRTS_PRIVATESALE_SUPPLY," C-Shirts at the ",l.createElement(m.Link,{to:"/mint"},"public sale")," (no limit for each wallet)"),l.createElement("li",null,"Check the secondary market on ",l.createElement("a",{href:u.Z.CSHIRTS_OPENSEALINK},"Opensea")))))),U)))}},1300:function(e){e.exports={cshirts:[]}}}]);
//# sourceMappingURL=component---src-pages-cshirts-tsx-d811d6cc2213760c6523.js.map