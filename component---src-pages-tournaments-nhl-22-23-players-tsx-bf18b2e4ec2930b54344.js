"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[298],{1829:function(e,t,a){var n=a(7294),c=a(4678);t.Z=function(){return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(c.Z,{items:[{title:"Where can I get the game rules?",content:'Click on "Rules" in the top menu.'},{title:"How can I earn ETH on a match?",content:"Get a C-Shirts for this tournament."},{title:"How do I get C-Shirts?",content:"From this website, if minting is open, or from Opensea."},{title:"I win! How can I get my award in ETH?",content:'Click on "Claim wins" in the top menu.'}]})))))}},5113:function(e,t,a){var n=a(7294),c=a(1223),l=a(3032),r=a(8467),s=a(912);t.Z=function(e){var t=e.id,a=e.datasource,i=(0,n.useState)(1),o=i[0],m=i[1],u=(0,n.useState)([]),f=u[0],d=u[1],E=(0,n.useState)([]),p=E[0],v=E[1],N=(0,n.useState)(),g=N[0],b=N[1],h=[],Z=[];a.cshirts.map((function(e){h.find((function(t){return t.value===e.Team}))||h.push({value:e.Team,label:e.Team})}));for(var k=0;k<=99;k++)Z.push({value:k.toString(),label:k.toString()});h.sort((function(e,t){return e.value>t.value?1:-1}));var w=function(e,t){return!(f.length>0&&0==C(f,e.Team)||p.length>0&&0==C(p,e.Number)||g&&g.value&&g.value!=e.Captain)};function C(e,t){var a=e.find((function(e){return e.value==t}));return null!=a}function S(){return 0==f.length&&0==p.length&&!g}var y=n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},n.createElement(r.Z,null))),x=n.createElement("div",{className:"row"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,"Browse players and staff")),n.createElement("div",{className:"col-md-3 z-index"},n.createElement("div",{className:"seclect-box"},n.createElement(l.ZP,{placeholder:"Select teams ...",options:h,isSearchable:"true",isMulti:!0,isClearable:"true",name:"team",className:"dropdown selector-drop",onChange:function(e){d(e)},value:f}),n.createElement(l.ZP,{placeholder:"Select numbers ...",options:Z,isSearchable:"true",isMulti:!0,isClearable:"true",name:"number",className:"dropdown selector-drop",onChange:function(e){v(e)},value:p}),n.createElement(l.ZP,{placeholder:"Select captain ...",options:[{value:"Yes",label:"Yes"}],isSearchable:"true",isClearable:"true",name:"captain",className:"dropdown selector-drop",onChange:function(e){b(e)},value:g}))),n.createElement("div",{className:"col-md-9"},n.createElement("div",{className:"wrap-fx"},(S()?a.cshirts.slice(0,98*o):a.cshirts.filter(w)).map((function(e){return n.createElement("div",{className:"fl-item",key:e.ID},n.createElement(c.Z,{id:e.ID,url:"/tournaments/"+t+"/players/",imgpath:"images/"+t+"/72x72/",collection:t}))}))),n.createElement("div",{className:S()?"btn-about center m-t16":"hide"},n.createElement("a",{className:"tf-button btn-effect loadmore st2",onClick:function(){m(o+1)}},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Load More")))));return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},s.Z.PREMINT?y:x))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),c=a[0],l=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===c?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){l(e)}(t)},key:t},n.createElement("div",{className:t===c?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===c?"toggle-content show":"toggle-content"},e.content))})))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players"}(a||(a={})),t.Z=a},8930:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),c=a(1799),l=a(9835),r=a(5113),s=a(1829),i={cshirts:[]},o=function(){return n.createElement(c.Z,{id:"nhl22-23",name:"NHL 2022/23",description:"American hockey tournament",pagetype:l.Z.Players},n.createElement(r.Z,{id:"nhl22-23",datasource:i}),n.createElement(s.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),c=a(5420),l=a(7813),r=a(1597),s=a(9835),i=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-4 alignCenter"},n.createElement(r.Link,{to:"/tournaments/"+t,className:a==s.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-4 alignCenter"},n.createElement(r.Link,{to:"/tournaments/"+t+"/rankings/",className:a==s.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-4 alignCenter"},n.createElement(r.Link,{to:"/tournaments/"+t+"/players/",className:a==s.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))))},o=function(e){var t=e.id,a=e.name,r=e.description,s=e.pagetype,o=e.children;return n.createElement(c.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(l.Z,{title:a,subtitle:r}),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},n.createElement(i,{id:t,pagetype:s}))),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},o)))}}}]);
//# sourceMappingURL=component---src-pages-tournaments-nhl-22-23-players-tsx-bf18b2e4ec2930b54344.js.map