"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[841],{1829:function(e,t,a){var n=a(7294),c=a(4678);t.Z=function(){return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(c.Z,{items:[{title:"Where can I get the game rules?",content:'Click on "Rules" in the top menu.'},{title:"How can I earn ETH on a match?",content:"Get a C-Shirts for this tournament."},{title:"How do I get C-Shirts?",content:"From this website, if minting is open, or from Opensea."},{title:"I win! How can I get my award in ETH?",content:'Click on "Claim wins" in the top menu.'}]})))))}},9841:function(e,t,a){var n=a(7294),c=a(1597);t.Z=function(e){e.id;var t=e.datasource,a=(0,n.useState)();a[0],a[1];function s(e){return new Date(e)>new Date}return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,"Scores - Week ",t.schedules[0].week)),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 center"},t.schedules[0].matches.map((function(e,t){return n.createElement("div",{className:"tf-match",key:t},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"matchDateTime"},(a=e.datetime,new Date(a).toUTCString())," UTC"))),n.createElement("div",{className:"match row"},n.createElement("div",{className:"col-md-5"},n.createElement(c.Link,{to:(e.homecaptain,e.homecaptain),className:"matchTeam"},n.createElement("span",null,e.home))),n.createElement("div",{className:"col-md-2 matchResult"},n.createElement("span",{className:"matchScore"},e.homescore)," - ",n.createElement("span",{className:"matchScore"},e.outsidescore)),n.createElement("div",{className:"col-md-5"},n.createElement(c.Link,{to:(e.outsidecaptain,e.outsidecaptain),className:"matchTeam"},n.createElement("span",null,e.outside)))),n.createElement("div",{className:s(e.datetime)?"row matchInfo":"hide"},n.createElement("div",{className:"col-md-12 center"},n.createElement(c.Link,{to:"/claim",className:e.homescore!=e.outsidescore?"tf-button btn-effect":"hide"},n.createElement("span",{className:"boder-fade"}),n.createElement("span",{className:"effect"},'All "',e.homescore>e.outsidescore?e.home:e.outside,'" C-Shirts holders can claim their win')))));var a})),n.createElement("div",{className:0!=t.schedules[0].matches.length?"hide":""},"No data available")))))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),c=a[0],s=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===c?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){s(e)}(t)},key:t},n.createElement("div",{className:t===c?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===c?"toggle-content show":"toggle-content"},e.content))})))}},7813:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title,a=e.subtitle;return n.createElement("section",{className:"page-title"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"breadcrumbs"},n.createElement("h3",null,t),n.createElement("p",{className:"sub-title"},a))))))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players"}(a||(a={})),t.Z=a},7751:function(e,t,a){a.r(t);var n=a(7294),c=a(1799),s=a(9835),l=a(9841),m=a(1829),r=a(6814);t.default=function(){return n.createElement(c.Z,{id:"nba22-23",name:"NBA 2022/23",description:"American basketball tournament",pagetype:s.Z.Scores},n.createElement(l.Z,{id:"nba22-23",datasource:r}),n.createElement(m.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return n}});a(7294),a(5420),a(7813),a(1597),a(9835);var n=function(e){e.id,e.name,e.description,e.pagetype,e.children;return null}},6814:function(e){e.exports=JSON.parse('{"tournament":"NBA 2022/23","schedules":[{"week":1,"matches":[]}],"rankings":{"teams":[],"topscorers":[],"assistmen":[]}}')}}]);
//# sourceMappingURL=component---src-pages-tournaments-nba-22-23-index-tsx-0059ceb4b349f6d11c27.js.map