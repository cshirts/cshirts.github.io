"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[136],{1829:function(e,t,a){var n=a(7294),l=a(912),r=a(4678);t.Z=function(){var e=""==l.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL?"Opensea":'<a href="'+l.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>',t=[{title:"Where can I check the game rules?",content:'There is only one rule, get your c-shirt and love the game! For general rules open <a href="/rules">this page</a> and for specific Tournament\'s rules and rewards check each Tournament page.'},{title:"How can I win ETH?",content:"You can win ETH every time your Tournament C-shirt's team scores a winning in its championship, and in many more ways, check the rules & rewards for each Tournament."},{title:"How do I get a Tournament C-Shirts?",content:'<ul><li>You will need a <a href="/cshirts/">C-Shirt</a> to take part in each Tournament private sale. There are '+l.Z.TOURNAMENT_PRIVATESALE_SPOTS+" spots with free-mint option (1 per wallet).</li><li>We will take a snapshot of the blockchain with all the wallet addresses that owns a C-Shirt just before each Tournament's private sale.</li><li>Only the wallet address visible in the snapshot will be allowed to mint in the private sale.</li><li>If you don\t have a C-Shirt, you can get access the public sale.</li><li>If you missed the public sale, you can take a look on "+e+".</li></ul>"},{title:"How do I get C-Shirts?",content:'You can secure a spot for yourself in the <a href="/premint">whitelist</a> to enter the the private sale of '+l.Z.CSHIRTS_PRIVATESALE_SUPPLY+" C-Shirts (free-mint), and you can mint how many C-shirt you want in the public sale.<br/>Every C-Shirt gives you lifetime access to free minting of 250 Tournament C-Shirts for each championship, gives you airdrops of new Tournament C-Shirts and voting power over what sports championship you would like to see in the next year.<br />You can get Tournament C-Shirts by private sale (free-mint) if you own a C-Shirt or public sale if you don't or missed the private sale.<br />You can also find both the C-Shirts and Tournament C-Shirts on "+e+"."},{title:"I win! How can I claim my awards in ETH?",content:'<ul><li>Open <a href="/claim">this page</a>, connect your wallet and withdraw your wins balance in ETH any time you want.</li><li>Keep the winning Ethers attached to your NFT and protected by the contract and increase the appeal of your NFT in the secondary market.</li>'}];return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(r.Z,{items:t})))))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),l=a[0],r=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===l?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){r(e)}(t)},key:t},n.createElement("div",{className:t===l?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===l?"toggle-content show":"toggle-content",dangerouslySetInnerHTML:{__html:e.content}}))})))}},7813:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title,a=e.subtitle;return n.createElement("section",{className:"page-title"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"breadcrumbs"},n.createElement("h3",null,t),n.createElement("p",{className:"sub-title"},a))))))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players",e[e.Rules=3]="Rules"}(a||(a={})),t.Z=a},4147:function(e,t,a){a.r(t);var n=a(7294),l=a(1799),r=a(9835),c=a(1829),s=a(912),i=a(7895);t.default=function(){var e=""==s.Z.SERIEA22_CONTRACTADDRESS?null:n.createElement("a",{href:s.Z.SCAN_CONTRACT_URL+s.Z.SERIEA22_CONTRACTADDRESS},"Check the contract");return n.createElement(l.Z,{id:"serieA22-23",name:"Serie A 2022/23",description:"Italian soccer tournament",pagetype:r.Z.Rules},n.createElement("div",{className:"container"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,"Rules & rewards"),"Rewards are set as ",s.Z.TOURNAMENT_GAMIFICATION_PERC,"% of the total Tournament C-shirt minting revenue and are distributed as below:"),n.createElement("div",{className:"left tournament-rules-text"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-6 col-lg-6"},n.createElement("img",{src:i.Z})),n.createElement("div",{className:"col-md-6 col-lg-6"},n.createElement("ul",null,n.createElement("li",null,n.createElement("h4",null,"74%")," of the total amount for match wins"),n.createElement("li",null,n.createElement("h4",null,"20%")," of the total amount for the championship winning team (to be divided for each team's players)"),n.createElement("li",null,n.createElement("h4",null,"4%")," of the total amount for the Top Scorer"),n.createElement("li",null,n.createElement("h4",null,"1%")," of the total amount for the Assist-man"),n.createElement("li",null,n.createElement("h4",null,"1%")," of the total amount for the captain of the championship winning team")),n.createElement("div",{style:{clear:"both"}}),n.createElement("div",{className:"notes"},"NOTE: once we close the public sale, we will update the winning revenue with ETH. ",e)))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"}))),n.createElement(c.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(5420),r=a(7813),c=a(1597),s=a(9835),i=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t,className:a==s.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rankings/",className:a==s.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/players/",className:a==s.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rules/",className:a==s.Z.Rules?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rules"))))},o=function(e){var t=e.id,a=e.name,c=e.description,s=e.pagetype,o=e.children;return n.createElement(l.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(r.Z,{title:a,subtitle:c}),n.createElement("div",{className:"container tournament-header"},n.createElement(i,{id:t,pagetype:s})),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},o)))}},7895:function(e,t,a){t.Z=a.p+"static/rewards-scheme-92e1469e777db7caae7d29ca55ad1854.png"}}]);
//# sourceMappingURL=component---src-pages-tournaments-serie-a-22-23-rules-tsx-8b62aac025d367f91bff.js.map