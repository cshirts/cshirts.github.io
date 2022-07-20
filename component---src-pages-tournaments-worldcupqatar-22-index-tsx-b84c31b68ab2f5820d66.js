"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[367],{1829:function(e,t,a){var n=a(7294),s=a(912),o=a(4678);t.Z=function(){var e=""==s.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL?"Opensea":'<a href="'+s.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL+'">Opensea</a>',t=[{title:"Where can I check the game rules?",content:'There is only one rule, get your c-shirt and love the game! For general rules open <a href="/rules">this page</a> and for specific Tournament\'s rules and rewards check each Tournament page.'},{title:"How can I win ETH?",content:"You can win ETH every time your Tournament C-shirt's team scores a winning in its championship, and in many more ways, check the rules & rewards for each Tournament."},{title:"How do I get a Tournament C-Shirts?",content:'<ul><li>You will need a <a href="/cshirts/">C-Shirt</a> to take part in each Tournament private sale. There are '+s.Z.TOURNAMENT_PRIVATESALE_SPOTS+" spots with free-mint option (1 per wallet).</li><li>We will take a snapshot of the blockchain with all the wallet addresses that owns a C-Shirt just before each Tournament's private sale.</li><li>Only the wallet address visible in the snapshot will be allowed to mint in the private sale.</li><li>If you don\t have a C-Shirt, you can get access the public sale.</li><li>If you missed the public sale, you can take a look on "+e+".</li></ul>"},{title:"How do I get C-Shirts?",content:'You can secure a spot for yourself in the <a href="/premint">whitelist</a> to enter the the private sale of '+s.Z.CSHIRTS_PRIVATESALE_SUPPLY+" C-Shirts (free-mint), and you can mint how many C-shirt you want in the public sale.<br/>Every C-Shirt gives you lifetime access to free minting of 250 Tournament C-Shirts for each championship, gives you airdrops of new Tournament C-Shirts and voting power over what sports championship you would like to see in the next year.<br />You can get Tournament C-Shirts by private sale (free-mint) if you own a C-Shirt or public sale if you don't or missed the private sale.<br />You can also find both the C-Shirts and Tournament C-Shirts on "+e+"."},{title:"I win! How can I claim my awards in ETH?",content:'<ul><li>Open <a href="/claim">this page</a>, connect your wallet and withdraw your wins balance in ETH any time you want.</li><li>Keep the winning Ethers attached to your NFT and protected by the contract and increase the appeal of your NFT in the secondary market.</li>'}];return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(o.Z,{items:t})))))}},9841:function(e,t,a){var n=a(7294),s=a(1597);t.Z=function(e){e.id;var t=e.datasource,a=(0,n.useState)(0),o=a[0],c=a[1],r=function(e){return new Date(e)>new Date};return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,n.createElement("a",{href:"#",onClick:function(){o+1<t.schedules.length&&c(o+1)},className:o<t.schedules.length-1?"":"hide"},"«"),"  Scores - Week ",t.schedules[o].week," ",n.createElement("a",{href:"#",onClick:function(){o-1>=0&&c(o-1)},className:o>0?"":"hide"},"»"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},t.schedules[o].matches.map((function(e,t){return n.createElement("div",{className:"tf-match",key:t},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"matchDateTime"},(a=e.datetime,new Date(a).toUTCString())))),n.createElement("div",{className:"match row"},n.createElement("div",{className:"col-md-5"},n.createElement(s.Link,{to:(e.homecaptain,e.homecaptain),className:"matchTeam"},n.createElement("span",null,e.home))),n.createElement("div",{className:"col-md-2 matchResult"},n.createElement("span",{className:"matchScore"},e.homescore)," - ",n.createElement("span",{className:"matchScore"},e.outsidescore)),n.createElement("div",{className:"col-md-5"},n.createElement(s.Link,{to:(e.outsidecaptain,e.outsidecaptain),className:"matchTeam"},n.createElement("span",null,e.outside)))),n.createElement("div",{className:r(e.datetime)?"row matchInfo":"hide"},n.createElement("div",{className:"col-md-12 center"},n.createElement(s.Link,{to:"/claim",className:e.homescore!=e.outsidescore?"tf-button btn-effect":"hide"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},'All "',e.homescore>e.outsidescore?e.home:e.outside,'" C-Shirts holders can claim their win')))));var a})),n.createElement("div",{className:0!=t.schedules[0].matches.length?"hide":""},"No data available")))))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),s=a[0],o=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===s?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){o(e)}(t)},key:t},n.createElement("div",{className:t===s?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===s?"toggle-content show":"toggle-content",dangerouslySetInnerHTML:{__html:e.content}}))})))}},7813:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title,a=e.subtitle;return n.createElement("section",{className:"page-title"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"breadcrumbs"},n.createElement("h3",null,t),n.createElement("p",{className:"sub-title"},a))))))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players",e[e.Rules=3]="Rules"}(a||(a={})),t.Z=a},2867:function(e,t,a){a.r(t);var n=a(7294),s=a(1799),o=a(9835),c=a(9841),r=a(1829),i=a(764);t.default=function(){return n.createElement(s.Z,{id:"worldcupqatar22",name:"World Cupt Qatar 2022",description:"World soccer tournament",pagetype:o.Z.Scores},n.createElement(c.Z,{id:"worldcupqatar22",datasource:i}),n.createElement(r.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),s=a(5420),o=a(7813),c=a(1597),r=a(9835),i=function(e){var t=e.id,a=e.pagetype;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t,className:a==r.Z.Scores?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Scores"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rankings/",className:a==r.Z.Rankings?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rankings"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/players/",className:a==r.Z.Players?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Players"))),n.createElement("div",{className:"col-md-3 alignCenter"},n.createElement(c.Link,{to:"/tournaments/"+t+"/rules/",className:a==r.Z.Rules?"tf-button btn-effect active":"tf-button btn-effect"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},"Rules"))))},l=function(e){var t=e.id,a=e.name,c=e.description,r=e.pagetype,l=e.children;return n.createElement(s.Z,{pageTitle:"Non Fungible Cup: "+a,container:"inner-page"},n.createElement(o.Z,{title:a,subtitle:c}),n.createElement("div",{className:"container tournament-header"},n.createElement(i,{id:t,pagetype:r})),n.createElement("section",{className:"tf-section tf-item"},n.createElement("div",{className:"container"},l)))}},764:function(e){e.exports=JSON.parse('{"tournament":"World Cup Qatar 2022","schedules":[{"week":1,"matches":[{"datetime":"2022-11-21T09:00:00.000Z","home":"Senegal","outside":"Netherlands","homescore":0,"outsidescore":0},{"datetime":"2022-11-21T12:00:00.000Z","home":"England","outside":"Iran","homescore":0,"outsidescore":0},{"datetime":"2022-11-21T15:00:00.000Z","home":"Qatar","outside":"Equador","homescore":0,"outsidescore":0},{"datetime":"2022-11-21T18:00:00.000Z","home":"United States","outside":"Wales","homescore":0,"outsidescore":0},{"datetime":"2022-11-22T09:00:00.000Z","home":"Argentina","outside":"Saudi Arabia","homescore":0,"outsidescore":0},{"datetime":"2022-11-22T12:00:00.000Z","home":"Denmark","outside":"Tunisia","homescore":0,"outsidescore":0},{"datetime":"2022-11-22T15:00:00.000Z","home":"Mexico","outside":"Poland","homescore":0,"outsidescore":0},{"datetime":"2022-11-22T18:00:00.000Z","home":"France","outside":"Australia","homescore":0,"outsidescore":0},{"datetime":"2022-11-23T09:00:00.000Z","home":"Morocco","outside":"Croatia","homescore":0,"outsidescore":0},{"datetime":"2022-11-23T12:00:00.000Z","home":"Germany","outside":"Japan","homescore":0,"outsidescore":0},{"datetime":"2022-11-23T15:00:00.000Z","home":"Spain","outside":"Costa Rica","homescore":0,"outsidescore":0},{"datetime":"2022-11-23T18:00:00.000Z","home":"Belgium","outside":"Canada","homescore":0,"outsidescore":0},{"datetime":"2022-11-24T09:00:00.000Z","home":"Switzerland","outside":"Cameroon","homescore":0,"outsidescore":0},{"datetime":"2022-11-24T12:00:00.000Z","home":"Uruguay","outside":"Korea Republic","homescore":0,"outsidescore":0},{"datetime":"2022-11-24T15:00:00.000Z","home":"Portugal","outside":"Ghana","homescore":0,"outsidescore":0},{"datetime":"2022-11-24T18:00:00.000Z","home":"Brazil","outside":"Serbia","homescore":0,"outsidescore":0}]}],"rankings":{"teams":[],"topscorers":[],"assistmen":[]}}')}}]);
//# sourceMappingURL=component---src-pages-tournaments-worldcupqatar-22-index-tsx-b84c31b68ab2f5820d66.js.map