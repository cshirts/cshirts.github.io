"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[5691],{1829:function(e,t,a){var n=a(7294),s=a(912),c=a(4678);t.Z=function(){var e=""==s.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL?"Opensea":'<a href="'+s.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>',t=[{title:"Where can I check the game rules?",content:'There is only one rule, get your c-shirt and love the game! For general rules open <a href="/rules">this page</a> and for specific Tournament\'s rules and rewards check each Tournament page.'},{title:"How can I win ETH?",content:"You can win ETH every time your Tournament C-shirt's team scores a winning in its championship, and in many more ways, check the rules & rewards for each Tournament."},{title:"How do I get a Tournament C-Shirts?",content:'<ul><li>You will need a <a href="/cshirts/">C-Shirt</a> to take part in each Tournament private sale. There are '+s.Z.TOURNAMENT_PRIVATESALE_SPOTS+" spots with free-mint option (1 per wallet).</li><li>We will take a snapshot of the blockchain with all the wallet addresses that owns a C-Shirt just before each Tournament's private sale.</li><li>Only the wallet address visible in the snapshot will be allowed to mint in the private sale.</li><li>If you don\t have a C-Shirt, you can get access the public sale.</li><li>If you missed the public sale, you can take a look on "+e+".</li></ul>"},{title:"How do I get C-Shirts?",content:'You can secure a spot for yourself in the <a href="/premint">whitelist</a> to enter the the private sale of '+s.Z.CSHIRTS_PRIVATESALE_SUPPLY+" C-Shirts (free-mint), and you can mint how many C-shirt you want in the public sale.<br/>Every C-Shirt gives you lifetime access to free minting of 250 Tournament C-Shirts for each championship, gives you airdrops of new Tournament C-Shirts and voting power over what sports championship you would like to see in the next year.<br />You can get Tournament C-Shirts by private sale (free-mint) if you own a C-Shirt or public sale if you don't or missed the private sale.<br />You can also find both the C-Shirts and Tournament C-Shirts on "+e+"."},{title:"I win! How can I claim my awards in ETH?",content:'<ul><li>Open <a href="/claim">this page</a>, connect your wallet and withdraw your wins balance in ETH any time you want.</li><li>Keep the winning Ethers attached to your NFT and protected by the contract and increase the appeal of your NFT in the secondary market.</li>'}];return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(c.Z,{items:t})))))}},9841:function(e,t,a){var n=a(7294),s=a(1597);t.Z=function(e){e.id;var t=e.datasource,a=(0,n.useState)(0),c=a[0],l=a[1],o=function(e){return new Date(e)>new Date};return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,n.createElement("a",{href:"#",onClick:function(){c+1<t.schedules.length&&l(c+1)},className:c<t.schedules.length-1?"":"hide"},"«"),"  Scores - Week ",t.schedules[c].week," ",n.createElement("a",{href:"#",onClick:function(){c-1>=0&&l(c-1)},className:c>0?"":"hide"},"»"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},t.schedules[c].matches.map((function(e,t){return n.createElement("div",{className:"tf-match",key:t},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"matchDateTime"},(a=e.datetime,new Date(a).toUTCString())))),n.createElement("div",{className:"match row"},n.createElement("div",{className:"col-md-5"},n.createElement(s.Link,{to:(e.homecaptain,e.homecaptain),className:"matchTeam"},n.createElement("span",null,e.home))),n.createElement("div",{className:"col-md-2 matchResult"},n.createElement("span",{className:"matchScore"},e.homescore)," - ",n.createElement("span",{className:"matchScore"},e.outsidescore)),n.createElement("div",{className:"col-md-5"},n.createElement(s.Link,{to:(e.outsidecaptain,e.outsidecaptain),className:"matchTeam"},n.createElement("span",null,e.outside)))),n.createElement("div",{className:o(e.datetime)?"row matchInfo":"hide"},n.createElement("div",{className:"col-md-12 center"},n.createElement(s.Link,{to:"/claim",className:e.homescore!=e.outsidescore?"tf-button btn-effect":"hide"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},'All "',e.homescore>e.outsidescore?e.home:e.outside,'" C-Shirts holders can claim their win')))));var a})),n.createElement("div",{className:0!=t.schedules[0].matches.length?"hide":""},"No data available")))))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),s=a[0],c=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===s?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){c(e)}(t)},key:t},n.createElement("div",{className:t===s?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===s?"toggle-content show":"toggle-content",dangerouslySetInnerHTML:{__html:e.content}}))})))}},7813:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title,a=e.subtitle;return n.createElement("section",{className:"page-title"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"breadcrumbs"},n.createElement("h3",null,t),n.createElement("p",{className:"sub-title"},a))))))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players",e[e.Rules=3]="Rules"}(a||(a={})),t.Z=a},2021:function(e,t,a){a.r(t);var n=a(7294),s=a(1799),c=a(9835),l=a(9841),o=a(1829),r=a(162);t.default=function(){return n.createElement(s.Z,{id:"liga22-23",name:"Liga 2022/23",description:"Spanish soccer tournament",pagetype:c.Z.Scores},n.createElement(l.Z,{id:"liga22-23",datasource:r}),n.createElement(o.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),s=a(9260),c=a(7813),l=a(1597),o=a(9835),r=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(l.Link,{to:"/tournaments/"+t,className:a==o.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(l.Link,{to:"/tournaments/"+t+"/rankings/",className:a==o.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(l.Link,{to:"/tournaments/"+t+"/players/",className:a==o.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(l.Link,{to:"/tournaments/"+t+"/rules/",className:a==o.Z.Rules?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rules"))))},i=function(e){var t=e.id,a=e.name,l=e.description,o=e.pagetype,i=e.children;return n.createElement(s.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(c.Z,{title:a,subtitle:l}),n.createElement("div",{className:"container tournament-header"},n.createElement(r,{id:t,pagetype:o})),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},i)))}},162:function(e){e.exports=JSON.parse('{"tournament":"Liga 2022/23","schedules":[{"week":1,"matches":[{"datetime":"2022-08-12T19:00:00.000Z","home":"Osasuna","outside":"Sevilla","homescore":0,"outsidescore":0},{"datetime":"2022-08-13T15:00:00.000Z","home":"Celta","outside":"Espanyol","homescore":0,"outsidescore":0},{"datetime":"2022-08-13T17:00:00.000Z","home":"Real Valladolid","outside":"Villareal","homescore":0,"outsidescore":0},{"datetime":"2022-08-13T17:00:00.000Z","home":"Barcelona","outside":"Rayo Vallecano","homescore":0,"outsidescore":0},{"datetime":"2022-08-14T15:30:00.000Z","home":"Cadiz","outside":"Real Sociedad","homescore":0,"outsidescore":0},{"datetime":"2022-08-14T17:30:00.000Z","home":"Valencia","outside":"Girona","homescore":0,"outsidescore":0},{"datetime":"2022-08-14T20:00:00.000Z","home":"Almeria","outside":"Real Madrid","homescore":0,"outsidescore":0},{"datetime":"2022-08-15T15:30:00.000Z","home":"Athletic Club","outside":"Mallorca","homescore":0,"outsidescore":0},{"datetime":"2022-08-15T17:30:00.000Z","home":"Getafe","outside":"Atlético De Madrid","homescore":0,"outsidescore":0},{"datetime":"2022-08-15T19:30:00.000Z","home":"Real Betis","outside":"Elche","homescore":0,"outsidescore":0}]}],"rankings":{"teams":[],"topscorers":[],"assistmen":[]}}')}}]);
//# sourceMappingURL=component---src-pages-tournaments-liga-22-23-index-tsx-42af4226cb91d6dfd0c7.js.map