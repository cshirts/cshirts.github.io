"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[787],{2265:function(e,t,a){a.r(t);var l=a(7294),r=a(1300),n=a(1223),o=a(3032),c=a(5420),s=a(7813),i=a(8467),u=a(912);t.default=function(){var e=(0,l.useState)(1),t=e[0],a=e[1],m=(0,l.useState)([]),d=m[0],p=m[1],f=(0,l.useState)([]),h=f[0],v=f[1],b=(0,l.useState)([]),C=b[0],S=b[1],E=(0,l.useState)([]),g=E[0],N=E[1],y=(0,l.useState)(),T=y[0],w=y[1],P=[],Z=[],k=[],M=[];r.cshirts.map((function(e){P.find((function(t){return t.value===e.Team}))||P.push({value:e.Team,label:e.Team}),k.find((function(t){return t.value===e.Role}))||k.push({value:e.Role,label:e.Role}),e.PrimaryColor&&!I(M,e.PrimaryColor)&&M.push({value:e.PrimaryColor,label:e.PrimaryColor}),e.SecondaryColor&&!I(M,e.SecondaryColor)&&M.push({value:e.SecondaryColor,label:e.SecondaryColor}),e.TertiaryColor&&!I(M,e.TertiaryColor)&&M.push({value:e.TertiaryColor,label:e.TertiaryColor})}));for(var R=0;R<=99;R++)Z.push({value:R.toString(),label:R.toString()});P.sort((function(e,t){return e.value>t.value?1:-1})),k.sort((function(e,t){return e.value>t.value?1:-1})),M.sort((function(e,t){return e.value>t.value?1:-1}));var x=function(e,t){return!(d.length>0&&0==I(d,e.Team)||g.length>0&&0==I(g,e.Number)||T&&T.value&&T.value!=e.Captain||C.length>0&&0==I(C,e.PrimaryColor)&&0==I(C,e.SecondaryColor)&&0==I(C,e.TertiaryColor)||h.length>0&&0==I(h,e.Role))};function I(e,t){var a=e.find((function(e){return e.value==t}));return null!=a}function _(){return 0==d.length&&0==g.length&&0==h.length&&0==C.length&&!T}var D=l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-12 center"},l.createElement(i.Z,null))),Y=l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-3 z-index"},l.createElement("div",{className:"seclect-box"},l.createElement(o.ZP,{placeholder:"Select teams ...",options:P,isSearchable:"true",isMulti:!0,isClearable:"true",name:"team",className:"dropdown selector-drop",onChange:function(e){p(e)},value:d}),l.createElement(o.ZP,{placeholder:"Select numbers ...",options:Z,isSearchable:"true",isMulti:!0,isClearable:"true",name:"number",className:"dropdown selector-drop",onChange:function(e){N(e)},value:g}),l.createElement(o.ZP,{placeholder:"Select roles ...",options:k,isSearchable:"true",isMulti:!0,isClearable:"true",name:"role",className:"dropdown selector-drop",onChange:function(e){v(e)},value:h}),l.createElement(o.ZP,{placeholder:"Select captain ...",options:[{value:"Yes",label:"Yes"}],isSearchable:"true",isClearable:"true",name:"captain",className:"dropdown selector-drop",onChange:function(e){w(e)},value:T}),l.createElement(o.ZP,{placeholder:"Select colors ...",options:M,isSearchable:"true",isMulti:!0,isClearable:"true",name:"color",className:"dropdown selector-drop",onChange:function(e){S(e)},value:C}))),l.createElement("div",{className:"col-md-9"},l.createElement("div",{className:"wrap-fx"},(_()?r.cshirts.slice(0,98*t):r.cshirts.filter(x)).map((function(e){return l.createElement("div",{className:"fl-item",key:e.ID},l.createElement(n.Z,{id:e.ID,url:"/cshirts/",imgpath:"/images/cshirts/72x72/",collection:"C-Shirts"}))}))),l.createElement("div",{className:_()?"btn-about center m-t16":"hide"},l.createElement("a",{className:"tf-button btn-effect loadmore st2",onClick:function(){a(t+1)}},l.createElement("span",{className:"boder-fade"}),l.createElement("span",{className:"effect"},"Load More"))))),j=u.Z.PREMINT?D:Y;return l.createElement(c.Z,{pageTitle:"Non Fungible Cup: C-Shirts",container:"inner-page"},l.createElement(s.Z,{title:"C-SHIRTS",subtitle:"320 fantasy teams jerseys with free-mint benefit on every tournament"}),l.createElement("section",{className:"tf-section tf-item"},l.createElement("div",{className:"container"},j)))}},1300:function(e){e.exports={cshirts:[]}}}]);
//# sourceMappingURL=component---src-pages-cshirts-tsx-22a48fb44536e5851ddb.js.map