"use strict";(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[289],{9787:function(e,t,n){n.r(t);var a=n(5861),c=n(7757),l=n.n(c),r=n(7294),s=n(5420),i=n(7813),u=n(1597),m=n(24),o=n(3518);"undefined"!=typeof window&&(provider=new m.Q(window.ethereum));t.default=function(){var e,t=(0,r.useState)(""),n=t[0],c=t[1],m=(0,r.useState)(!1),d=m[0],f=m[1],p=(0,r.useState)(""),h=p[0],w=p[1],E=(0,r.useState)([]),b=E[0];E[1];return"undefined"!=typeof window&&(e=function(){var e=(0,a.Z)(l().mark((function e(){var t,n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,provider.send("eth_requestAccounts",[]);case 4:return t=provider.getSigner(),e.next=7,t.getAddress();case 7:n=e.sent,a=["function mintWaitlist(bytes calldata _signature, uint256 _amount) public payable","function mint(uint256 _amount) public payable"],n?(c(n),f(!0),new o.CH("",a,t)):c(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),w(e.t0.message);case 15:e.next=18;break;case 17:w("Please install Metamask");case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}()),r.createElement(s.Z,{pageTitle:"Non Fungible Cup: Claim your wins",container:"inner-page"},r.createElement(i.Z,{title:"Claim wins",subtitle:"Connect your wallet and check you wins"}),r.createElement("section",{className:"tf-section tf-item tf-claim"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-12 center"},r.createElement("a",{href:"#",className:d?"hide":"tf-button btn-effect",onClick:e},r.createElement("span",{className:"boder-fade"}),r.createElement("span",{className:"effect"},"Connect your wallet")),r.createElement("span",null,r.createElement("strong",null,h)),r.createElement("br",null))),r.createElement("div",{className:d?"row":"hide"},r.createElement("div",{className:"col-md-12 center"},r.createElement("h4",null,"Your C-Shirts"),r.createElement("div",{className:d?"wallet":"hide"},"Wallet connected: ",n),r.createElement("div",{className:d&&0==b.length?"claim-container":"hide"},r.createElement("div",{className:"claim-container toUpper nodata"},"No C-Shirts found in your wallet"),r.createElement("div",null,r.createElement(u.Link,{className:"tf-button st2 btn-effect",to:"/cshirts"},r.createElement("span",{className:"boder-fade"}),r.createElement("span",{className:"effect"},"Get a C-Shirt and start playing")))),r.createElement("div",{className:d&&b.length>0?"claim-container":"hide"}))))))}}}]);
//# sourceMappingURL=component---src-pages-claim-tsx-e9d0f8669f0f0108b3c3.js.map