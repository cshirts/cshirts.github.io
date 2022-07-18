"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[390],{1829:function(e,t,a){var n=a(7294),r=a(912),s=a(4678);t.Z=function(){var e=[{title:"Where can I check the game rules?",content:'There is only one rule, get your c-shirt and love the game! For general rules open <a href="/rules">this page</a> and for specific Tournament\'s rules and rewards check each Tournament page.'},{title:"How can I win ETH?",content:"You can win ETH every time your Tournament C-shirt's team scores a winning in its championship, and in many more ways, check the rules & rewards for each Tournament."},{title:"How do I get a Tournament C-Shirts?",content:"If you have a C-Shirt, you're entitled to the private sale on every Tournament that gives 250 spots with free minting, for each championship. First come, first served, so be quick to reserve one! You'll be entitled to one Tournament shirt per wallet for each Tournament.<br />If you don't have the C-Shirt or missed the private sale, you can always participate in the public sale where you can mint how many Tournament C-Shirts you prefer, for every championship.<br />If you missed the sales entirely, then remember you can always find our players selling it on <a href=\""+r.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>.'},{title:"How do I get C-Shirts?",content:"You can secure a spot for yourself in the whitelist to enter the the private sale of "+r.Z.CSHIRTS_PRIVATESALE_SUPPLY+" C-Shirts (free-mint), and you can mint how many C-shirt you want in the public sale.<br/>Every C-Shirt gives you lifetime access to free minting of 250 Tournament C-Shirts for each championship, gives you airdrops of new Tournament C-Shirts and voting power over what sports championship you would like to see in the next year.<br />You can get Tournament C-Shirts by private sale (free-mint) if you own a C-Shirt or public sale if you don't or missed the private sale.<br />You can also find both the C-Shirts and Tournament C-Shirts on <a href=\""+r.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>.'},{title:"I win! How can I claim my awards in ETH?",content:'1- Open <a href="/claim">this page</a>, connect your wallet and withdraw your wins balance in ETH any time you want.<br />2- Keep the winning Ethers attached to your NFT and protected by the contract and increase the appeal of your NFT in the secondary market.'}];return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(s.Z,{items:e})))))}},5113:function(e,t,a){var n=a(7294),r=a(1223),s=a(3032),c=a(8467),l=a(912);t.Z=function(e){var t=e.id,a=e.datasource,o=(0,n.useState)(1),i=o[0],m=o[1],u=(0,n.useState)([]),f=u[0],d=u[1],h=(0,n.useState)([]),p=h[0],v=h[1],E=(0,n.useState)(),b=E[0],g=E[1],N=[],y=[];a.cshirts.map((function(e){N.find((function(t){return t.value===e.Team}))||N.push({value:e.Team,label:e.Team})}));for(var w=0;w<=99;w++)y.push({value:w.toString(),label:w.toString()});N.sort((function(e,t){return e.value>t.value?1:-1}));var S=function(e,t){return!(f.length>0&&0==C(f,e.Team)||p.length>0&&0==C(p,e.Number)||b&&b.value&&b.value!=e.Captain)};function C(e,t){var a=e.find((function(e){return e.value==t}));return null!=a}function T(){return 0==f.length&&0==p.length&&!b}var Z=n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},n.createElement(c.Z,null))),k=n.createElement("div",{className:"row"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,"Browse players and staff")),n.createElement("div",{className:"col-md-3 z-index"},n.createElement("div",{className:"seclect-box"},n.createElement(s.ZP,{placeholder:"Select teams ...",options:N,isSearchable:"true",isMulti:!0,isClearable:"true",name:"team",className:"dropdown selector-drop",onChange:function(e){d(e)},value:f}),n.createElement(s.ZP,{placeholder:"Select numbers ...",options:y,isSearchable:"true",isMulti:!0,isClearable:"true",name:"number",className:"dropdown selector-drop",onChange:function(e){v(e)},value:p}),n.createElement(s.ZP,{placeholder:"Select captain ...",options:[{value:"Yes",label:"Yes"}],isSearchable:"true",isClearable:"true",name:"captain",className:"dropdown selector-drop",onChange:function(e){g(e)},value:b}))),n.createElement("div",{className:"col-md-9"},n.createElement("div",{className:"wrap-fx"},(T()?a.cshirts.slice(0,98*i):a.cshirts.filter(S)).map((function(e){return n.createElement("div",{className:"fl-item",key:e.ID},n.createElement(r.Z,{id:e.ID,url:"/tournaments/"+t+"/players/",imgpath:"images/"+t+"/72x72/",collection:t}))}))),n.createElement("div",{className:T()?"btn-about center m-t16":"hide"},n.createElement("a",{className:"tf-button btn-effect loadmore st2",onClick:function(){m(i+1)}},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Load More")))));return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},l.Z.PREMINT?Z:k))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),r=a[0],s=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===r?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){s(e)}(t)},key:t},n.createElement("div",{className:t===r?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===r?"toggle-content show":"toggle-content",dangerouslySetInnerHTML:{__html:e.content}}))})))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players",e[e.Rules=3]="Rules"}(a||(a={})),t.Z=a},967:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(1799),s=a(9835),c=a(5113),l=a(1829),o={cshirts:[]},i=function(){return n.createElement(r.Z,{id:"serieA22-23",name:"Serie A 2022/23",description:"Italian soccer tournament",pagetype:s.Z.Players},n.createElement(c.Z,{id:"serieA22-23",datasource:o}),n.createElement(l.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5420),s=a(7813),c=a(1597),l=a(9835),o=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t,className:a==l.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rankings/",className:a==l.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/players/",className:a==l.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rules/",className:a==l.Z.Rules?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rules"))))},i=function(e){var t=e.id,a=e.name,c=e.description,l=e.pagetype,i=e.children;return n.createElement(r.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(s.Z,{title:a,subtitle:c}),n.createElement("div",{className:"container tournament-header"},n.createElement(o,{id:t,pagetype:l})),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},i)))}}}]);
//# sourceMappingURL=component---src-pages-tournaments-serie-a-22-23-players-tsx-fdca2be1c02d32acb6a8.js.map