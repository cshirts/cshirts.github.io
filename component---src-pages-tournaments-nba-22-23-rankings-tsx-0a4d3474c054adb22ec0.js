"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[481],{1829:function(e,t,a){var n=a(7294),s=a(4678);t.Z=function(){return n.createElement("section",{className:"tf-section faq"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"tf-title m-b60"},n.createElement("p",{className:"h8 sub-title"},"FAQs"),n.createElement("h4",{className:"title"},"Looking for answers?"))),n.createElement("div",{className:"col-md-12"},n.createElement(s.Z,{items:[{title:"Where can I get the game rules?",content:'Click on "Rules" in the top menu.'},{title:"How can I earn ETH on a match?",content:"Get a C-Shirts for this tournament."},{title:"How do I get C-Shirts?",content:"From this website, if minting is open, or from Opensea."},{title:"I win! How can I get my award in ETH?",content:'Click on "Claim wins" in the top menu.'}]})))))}},7578:function(e,t,a){var n=a(7294),s=a(1597);t.Z=function(e){e.id;var t=e.datasource;return n.createElement("section",{className:"tf-section tf-item nopadding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"tournament-section-header"},n.createElement("h6",null,"Game stats")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"rankingCol"},n.createElement("div",{className:"center"},n.createElement("h5",null,"Teams ranking")),n.createElement("div",{className:"ranking"},t.rankings.teams.sort((function(e,t){return e.points<t.points?1:-1})).map((function(e){return n.createElement("div",{className:"row",key:"TeamRank"+e.name},n.createElement("div",{className:"col-md-10 col-10"},e.name),n.createElement("div",{className:"col-md-2 col-2"},e.points))})),n.createElement("div",{className:0!=t.rankings.teams.length?"hide":""},"No data available")))),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"rankingCol"},n.createElement("div",{className:"center"},n.createElement("h5",null,"Top scorers")),n.createElement("div",{className:"ranking"},t.rankings.topscorers.sort((function(e,t){return e.points<t.points?1:-1})).map((function(e){return n.createElement("div",{className:"row",key:"Scorer"+e.cshirt},n.createElement("div",{className:"col-md-10 col-10"},n.createElement(s.Link,{to:"../players/"+e.cshirt},"C-Shirt #",e.cshirt)),n.createElement("div",{className:"col-md-2 col-2"},e.points))})),n.createElement("div",{className:0!=t.rankings.topscorers.length?"hide":""},"No data available")))),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"rankingCol"},n.createElement("div",{className:"center"},n.createElement("h5",null,"Top assistmen")),n.createElement("div",{className:"ranking"},t.rankings.assistmen.sort((function(e,t){return e.assists<t.assists?1:-1})).map((function(e){return n.createElement("div",{className:"row",key:"Assistman"+e.cshirt},n.createElement("div",{className:"col-md-10 col-10"},n.createElement(s.Link,{to:"../players/"+e.cshirt},"C-Shirt #",e.cshirt)),n.createElement("div",{className:"col-md-2 col-2"},e.assists))})),n.createElement("div",{className:0!=t.rankings.assistmen.length?"hide":""},"No data available")))))))}},4678:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(0,n.useState)(-1),s=a[0],c=a[1];return n.createElement("div",{className:"flat-accordion"},t.map((function(e,t){return n.createElement("div",{className:t===s?"flat-toggle box-text corner-box active":"flat-toggle box-text corner-box",onClick:function(){return function(e){c(e)}(t)},key:t},n.createElement("div",{className:t===s?"h9 toggle-title active":"h9 toggle-title"},e.title),n.createElement("p",{className:t===s?"toggle-content show":"toggle-content"},e.content))})))}},7813:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title,a=e.subtitle;return n.createElement("section",{className:"page-title"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"breadcrumbs"},n.createElement("h3",null,t),n.createElement("p",{className:"sub-title"},a))))))}},9835:function(e,t){var a;!function(e){e[e.Scores=0]="Scores",e[e.Rankings=1]="Rankings",e[e.Players=2]="Players"}(a||(a={})),t.Z=a},8393:function(e,t,a){a.r(t);var n=a(7294),s=a(1799),c=a(9835),l=a(7578),r=a(1829),i=a(6814);t.default=function(){return n.createElement(s.Z,{id:"nba22-23",name:"NBA 2022/23",description:"American basketball tournament",pagetype:c.Z.Rankings},n.createElement(l.Z,{id:"nba22-23",datasource:i}),n.createElement(r.Z,null))}},1799:function(e,t,a){a.d(t,{Z:function(){return n}});a(7294),a(5420),a(7813),a(1597),a(9835);var n=function(e){e.id,e.name,e.description,e.pagetype,e.children;return null}},6814:function(e){e.exports=JSON.parse('{"tournament":"NBA 2022/23","schedules":[{"week":1,"matches":[]}],"rankings":{"teams":[],"topscorers":[],"assistmen":[]}}')}}]);
//# sourceMappingURL=component---src-pages-tournaments-nba-22-23-rankings-tsx-0a4d3474c054adb22ec0.js.map