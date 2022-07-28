"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[7782],{1829:function(e,t,a){var n=a(7294),r=a(912),l=a(4678);t.Z=function(){var e=""==r.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL?"Opensea":'<a href="'+r.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>',t=[{title:"Where can I check the game rules?",content:'There is only one rule, get your c-shirt and love the game! For general rules open <a href="/rules">this page</a> and for specific Tournament\'s rules and rewards check each Tournament page.'},{title:"How can I win ETH?",content:"You can win ETH every time your Tournament C-shirt's team scores a winning in its championship, and in many more ways, check the rules & rewards for each Tournament."},{title:"How do I get a Tournament C-Shirts?",content:'<ul><li>You will need a <a href="/cshirts/">C-Shirt</a> to take part in each Tournament private sale. There are '+r.Z.TOURNAMENT_PRIVATESALE_SPOTS+" spots with free-mint option (1 per wallet).</li><li>We will take a snapshot of the blockchain with all the wallet addresses that owns a C-Shirt just before each Tournament's private sale.</li><li>Only the wallet address visible in the snapshot will be allowed to mint in the private sale.</li><li>If you don\t have a C-Shirt, you can get access the public sale.</li><li>If you missed the public sale, you can take a look on "+e+".</li></ul>"},{title:"How do I get C-Shirts?",content:'You can secure a spot for yourself in the <a href="/premint">whitelist</a> to enter the the private sale of '+r.Z.CSHIRTS_PRIVATESALE_SUPPLY+" C-Shirts (free-mint), and you can mint how many C-shirt you want in the public sale.<br/>Every C-Shirt gives you lifetime access to free minting of 250 Tournament C-Shirts for each championship, gives you airdrops of new Tournament C-Shirts and voting power over what sports championship you would like to see in the next year.<br />You can get Tournament C-Shirts by private sale (free-mint) if you own a C-Shirt or public sale if you don't or missed the private sale.<br />You can also find both the C-Shirts and Tournament C-Shirts on "+e+"."},{title:"I win! How can I claim my awards in ETH?",content:'<ul><li>Open <a href="/claim">this page</a>, connect your wallet and withdraw your wins balance in ETH any time you want.</li><li>Keep the winning Ethers attached to your NFT and protected by the contract and increase the appeal of your NFT in the secondary market.</li>'}];return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(l.Z,{items:t})))))}},5113:function(e,t,a){var n=a(7294),r=a(1223),l=a(3032),i=a(8467);t.Z=function(e){var t=e.id,a=e.datasource,c=(0,n.useState)(1),s=c[0],o=c[1],u=(0,n.useState)([]),m=u[0],f=u[1],h=(0,n.useState)([]),d=h[0],p=h[1],E=(0,n.useState)(),v=E[0],g=E[1],N=[],b=[];a.cshirts.map((function(e){N.find((function(t){return t.value===e.Team}))||N.push({value:e.Team,label:e.Team})}));for(var y=0;y<=99;y++)b.push({value:y.toString(),label:y.toString()});N.sort((function(e,t){return e.value>t.value?1:-1}));var w=function(e,t){return!(m.length>0&&0==S(m,e.Team)||d.length>0&&0==S(d,e.Number)||v&&v.value&&v.value!=e.Captain)};function S(e,t){var a=e.find((function(e){return e.value==t}));return null!=a}function T(){return 0==m.length&&0==d.length&&!v}var C=n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},n.createElement(i.Z,null)));l.ZP,l.ZP,l.ZP,(T()?a.cshirts.slice(0,98*s):a.cshirts.filter(w)).map((function(e){return n.createElement("div",{className:"fl-item",key:e.ID},n.createElement(r.Z,{id:e.ID,url:"/tournaments/"+t+"/players/",imgpath:"images/"+t+"/72x72/",collection:t}))})),T();return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},C))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),r=a[0],l=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===r?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){l(e)}(t)},key:t},n.createElement("div",{className:t===r?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===r?"toggle-content show":"toggle-content",dangerouslySetInnerHTML:{__html:e.content}}))})))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players",e[e.Rules=3]="Rules"}(a||(a={})),t.Z=a},9739:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(1799),l=a(9835),i=a(5113),c=a(1829),s={cshirts:[]},o=function(){return n.createElement(r.Z,{id:"worldcupqatar22",name:"World Cupt Qatar 2022",description:"World soccer tournament",pagetype:l.Z.Players},n.createElement(i.Z,{id:"worldcupqatar22",datasource:s}),n.createElement(c.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(9260),l=a(7813),i=a(1597),c=a(9835),s=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(i.Link,{to:"/tournaments/"+t,className:a==c.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(i.Link,{to:"/tournaments/"+t+"/rankings/",className:a==c.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(i.Link,{to:"/tournaments/"+t+"/players/",className:a==c.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(i.Link,{to:"/tournaments/"+t+"/rules/",className:a==c.Z.Rules?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rules"))))},o=function(e){var t=e.id,a=e.name,i=e.description,c=e.pagetype,o=e.children;return n.createElement(r.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(l.Z,{title:a,subtitle:i}),n.createElement("div",{className:"container tournament-header"},n.createElement(s,{id:t,pagetype:c})),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},o)))}}}]);
//# sourceMappingURL=component---src-pages-tournaments-worldcupqatar-22-players-tsx-d25f997bbe797574c845.js.map