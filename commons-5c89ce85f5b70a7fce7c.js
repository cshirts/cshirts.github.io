(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[9351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(!i(e[u],o[u]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],o.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],o[l[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},9260:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,a,i,o,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),A=n.n(p),d=n(6494),m=n.n(d),h="bodyAttributes",C="htmlAttributes",E="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(T).map((function(e){return T[e]})),"charset"),b="cssText",v="href",w="http-equiv",y="innerHTML",g="itemprop",N="name",O="property",P="rel",L="src",R="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",k="defer",U="encodeSpecialCharacters",B="onChangeClientState",H="titleTemplate",M=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),j=[T.NOSCRIPT,T.SCRIPT,T.STYLE],x="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=_(e,T.TITLE),n=_(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,I);return t||r||void 0},Z=function(e){return _(e,B)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==y&&c!==b&&c!==g||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=m()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(f,p);var A={baseTag:le(T.BASE,n),linkTags:le(T.LINK,i),metaTags:le(T.META,o),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},d={},m={};Object.keys(A).forEach((function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=A[e].oldTags)})),t&&t(),u(e,d,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(x),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(x):n.getAttribute(x)!==o.join(",")&&n.setAttribute(x,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===y)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(x,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[x]=!0,a=fe(n,r),[c.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case C:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[x]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===y||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===y||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===j.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ae=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(C,a,r),link:pe(T.LINK,i,r),meta:pe(T.META,o,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,l,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},de=f()((function(e){return{baseTag:J([v,R],e),bodyAttributes:X(h,e),defer:_(e,k),encode:_(e,U),htmlAttributes:X(C,e),linkTags:Q(T.LINK,[P,v],e),metaTags:Q(T.META,[N,S,w,O,g],e),noscriptTags:Q(T.NOSCRIPT,[y],e),onChangeClientState:Z(e),scriptTags:Q(T.SCRIPT,[L,y],e),styleTags:Q(T.STYLE,[b],e),title:F(e),titleAttributes:X(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),Ae)((function(){return null})),me=(a=de,o=i=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case T.TITLE:return K({},a,((t={})[r.type]=o,t.titleAttributes=K({},i),t));case T.BODY:return K({},a,{bodyAttributes:K({},i)});case T.HTML:return K({},a,{htmlAttributes:K({},i)})}return K({},a,((n={})[r.type]=K({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(G(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind;var he=n(912),Ce=function(){return c.createElement("footer",{id:"footer"},c.createElement("div",{className:"footer-main"},c.createElement("div",{className:"container"},c.createElement("ul",{className:"widget-social"},c.createElement("li",null,c.createElement("a",{href:he.Z.TWITTER_URL,target:"_blank"},c.createElement("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z",fill:"white"})))),c.createElement("li",{className:""},c.createElement("a",{href:he.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL,target:"_blank"},c.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z",fill:"white"}))))),c.createElement("h5",{className:"heading"},"don't miss out, get a c-shirt and start playing"))),c.createElement("div",{className:"footer-bottom"},c.createElement("div",{className:"container"},c.createElement("div",{className:"center"},c.createElement("div",{className:"Copyright center"},c.createElement("p",null,"Love the game"),c.createElement("div",{className:"partners"},c.createElement("a",{href:"https://raritysniper.com/nft-drops-calendar",target:"_blank"},c.createElement("img",{src:"data:image/png;base64,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"})),c.createElement("a",{href:"https://nftcalendar.io/",target:"_blank"},c.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAMAAAB64Ok7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmUExURUpKSkdHR3Z2dv////7+/hgYGKOjo+bm5s7Ozr29vb+/v93d3enp6fj4+HFxcRQUFBMTE3d3d7a2tp2dnS0tLYaGhi8vL+Dg4NHR0aGhoYyMjNXV1UZGRvz8/CQkJLOzs8vLy2BgYPr6+ldXV05OTomJifT09DY2NjQ0NGpqah4eHrKysnl5eVRUVCsrK19fX319fUlJSYiIiJmZmSMjIyEhIVVVVdfX14qKio+Pj3R0dF1dXWNjY4CAgKysrLS0tJ6enjMzM/b29jk5Oaurq4KCgt/f38nJyS4uLvv7+xYWFv39/cfHx/Hx8dTU1FhYWNnZ2fn5+SwsLD4+PigoKKqqqoODg6+vrzU1NfX19WhoaOvr61JSUq6uroSEhM3NzZOTk9jY2FlZWaKior6+vri4uCoqKkxMTCkpKR8fH3h4eOjo6Dg4ONDQ0E1NTR0dHczMzGJiYhUVFSIiIkhISKmpqY2Nje3t7XJycnNzc2lpacTExJycnOLi4mRkZMjIyBwcHG5ubvDw8Ofn57CwsEJCQu/v70RERBkZGScnJ8PDw2xsbMbGxhsbG+Hh4RoaGs/Pz5GRkZaWlpubm5eXl+Tk5NbW1m9vb3x8fGdnZ2tra8HBwbq6uu7u7qenpzw8PFZWVuzs7D09PdLS0kBAQCAgIH9/f9zc3OXl5UtLSwkJCZCQkJKSkvLy8jo6OlpaWpSUlFxcXAoKCsLCwrGxsVFRUbW1tff39/Pz86WlpX5+fkFBQYWFhaSkpG1tbbm5uUNDQ5+fn9ra2gsLC46Ojj8/P2VlZQwMDBcXFw0NDdPT00VFRSUlJXt7ezExMa2trZWVlXV1dePj45iYmMXFxTIyMnp6esrKyoeHh4uLi6CgoDs7O5qaml5eXiYmJjAwME9PTwAAADB+KgoAAADidFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBwHrofAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAEnUlEQVRIS4WWi1tUVRTFxYuUkjiAWlqBEhKQIso780WaQg+sCM3QKA1MSEtgEgKFMSzLMkECJDULUQaVUrNCI7KyDLKHZWSlrf+kte85M3Pn8sWs75uz97l7/b6Zc/e958woBNAoPwXpq0qB4NGGn4LH6OumAsEhmtK6SV9WCgTfrCmtsfqyUiB4XCh1C7HxkoSG6ctKfvCECWZwOMzgUzjhCJ1bZYUjeUMmApNonQzcKj+Tug2YwjBVm6yywrfTcwd/qWHcOQFRJklFA9MYpmuTVVY4hp67AK4wFIg1SWoGEMdwtzZZZYHjxZqARI73ADNlJpqFJI4x2uQnCzxbrMmYw3GuanBKampqGpDONEOb/GSBMwXOwr0c56kG36cK85kuUKm/LPBCgadgEcfFQDbD/aqwhOlSlfrLAj8gcDSWmQtczjxHF6QLvJHD5YNzHxT4ITxsGI8AecxX6MqjzB/TuZ988OPCGhn5HJ4AChhWqsIqpk+q1CYfvFpY46lCDvOBNQxrVUG68LRKbfLBRcIaOXJr04FnGJ5VhRlM16nUJh+8XljDeI6fYiCHoWTDhudZkC5sVB6bfHCpoIbB+xUHlKmJ8QIL0oVNymOTF95Mi7y31IvASyozlgBbpAvl2uUvL1xBS6UJ8EGBU2VGgerCy9pkkxfeSk+VvD6GEQ7IykW8Z9UMr2iTTV64hp6gUJPgAmsZshIStrEgXUhRHru88HZ66mSQBY4JZohSBelCvUrt8sIuw9iBV4XlAhsYdgKJUpC7+Jokr3seV6888C5axiJF4DeANxl24623WZAuBO8RS9U7MlrlgeWp3Gs+0bLARoYmbNzHgnSh2bS822IGizxwKz1t2C8wF9jOEIbMTBaqmL4njoYDWyRY5YEP0nMI7wvMBR5mqPigpYoF2RuyxBHSKqOfPPCH5n7bIfAeHJGQ2BkWzwL3BkM65qhVJ4JVHni8YRwFNtB5DOhiKHV3H5fCCeYnGXsaZYZdwEe5ZkZpOG2ny8Wqo9TlWgR87HK51p1q3MuCY9zp02fE0c7jAGhxoqU2VTKR55vt+sRdfpZ7KLtrTrdt/FRC/WcddZ9H7N/BQ0n0P3BvkfucK1d+5PkvOA2KXbabwXmg+dT5yOyzen8aDvd9ydMyMqbfnRft/uoCNnVz+4rqTZhUw9r2g4vcNSfSk/UXD4NXOfuArBUXvnb3bT1yuB0rF2QDK1On1X3DkyPu2wT3xbbvnNo7DN73PVB+tOm4+9IPA7PCkwZz2k+js3Nqz+CPQPflcw2XfkKh+aSL7HARPz8fy69y//Jr0vQk95Xm35xl2Q0R+L0ejrnomXi1H9IEJRu8vA0ozsLkwrT19YNl83o7K6Mr2v+ovIyT1cjrwuyhP4Em7R0Gd3F+xYGB/pD49MVYfRHXJgEZ/FfwVzX+5qkyk++pd8l2OHYASwdoXdOKc7FyobUE+IcxvgXc2kTXfWeeDd58dcis8YEs5m33KT+5wzNfO+eGzmwwbvyrE8DvL0xud8F1nY6WN9WUHbaInbWo6ZpOLBoBHtJR6Yw00aYR4BK/M6bokE4sGgEOJOA/qgpVQ4ogJAgAAAAASUVORK5CYII="}))))))))},Ee=n(1597),Te=[{url:"/",name:"Home",children:[]}];Te.push({url:"/mint/",name:"Mint",children:[]}),Te.push({url:"/rules/",name:"Rules",children:[]}),Te.push({url:"#",name:"C-Shirts",children:[{url:"/cshirts/",name:"Collection",children:[]},{url:"/premint/",name:"Whitelist raffle",children:[]}]});var Se={url:"/tournaments/",name:"Tournaments",children:[]};he.Z.TOURNAMENTS.forEach((function(e){var t=e.name;if(e.date){var n=new Date;Math.ceil(Math.abs(e.date-n)/864e5)<30&&(t+=" (mint soon)")}Se.children.push({url:e.url,name:t,children:[]})})),Te.push(Se),Te.push({url:"/claim/",name:"Claim wins",children:[]});var be=function(){return c.createElement("ul",{id:"menu-primary-menu",className:"menu"},Te.map((function(e){return c.createElement("li",{className:e.children.length>0?"menu-item menu-item-has-children":"menu-item",key:e.name},c.createElement(Ee.Link,{to:e.url,activeClassName:"current-menu-item"},e.name),c.createElement("ul",{className:e.children.length>0?"sub-menu":"hide"},e.children.map((function(e){return c.createElement("li",{className:"menu-item",key:e.name},c.createElement(Ee.Link,{to:e.url,activeClassName:"current-menu-item"},e.name))}))))})),c.createElement("li",{className:"menu-item"},c.createElement("a",{className:"d-block d-md-none active",href:he.Z.TWITTER_URL,target:"_blank"},c.createElement("span",{className:"effect"},"FOLLOW US"))))},ve=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];(0,c.useEffect)((function(){var e=function(){window.scrollY>200!==t&&n(!t)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[t]);var r=!1;if("undefined"!=typeof window){var a=window.matchMedia("(max-width: 991px)");r=a.matches,a.addListener((function(){r=a.matches}));var i=(0,c.useState)(!1),o=i[0],u=i[1],l=r?null:c.createElement("nav",{id:"main-nav",className:"main-nav"},c.createElement(be,null)),s=r?c.createElement("nav",{id:"main-nav-mobi",className:o?"main-nav":"main-nav hide"},c.createElement(be,null)):null;return c.createElement("header",{id:"header_main",className:t?"header is-fixed is-small":"header"},c.createElement("div",{className:"container"},c.createElement("div",{id:"site-header-inner"},c.createElement("div",{className:"header__logo"},c.createElement(Ee.Link,{to:"/"},c.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAP///wAAAHPGg3EAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsIAAA7CARUoSoAAAAB2SURBVEhL7Y9BDoAgDAQr/3+0rYxBVEwLFxKZy8buToKSgswtCPB5wOm6IhU6ryCyQalfb2RUKJXBO243lkRMqKsWWekRfHPDlB7Bq/T/wxGqtLXcsiSigilfwjkfEUyhf1DmS1hCxRJIZUqhDRNlRPDxQyGlHdNRDHnUPbpHAAAAAElFTkSuQmCC",alt:"NON FUNGIBLE CUP"}),c.createElement("span",{className:"h7"},"NON FUNGIBLE CUP"))),l,c.createElement("a",{className:"tf-button btn-effect d-none d-sm-block d-md-block active",href:he.Z.TWITTER_URL,target:"_blank"},c.createElement("span",{className:"boder-fade"}),c.createElement("span",{className:"effect"},"follow us")),c.createElement("div",{className:o?"mobile-button active":"mobile-button",onClick:function(){u(!o)}},c.createElement("span",null)))),s)}return c.createElement("br",null)},we=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return(0,c.useEffect)((function(){var e=function(){window.scrollY>10!==t&&n(!t)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[t]),c.createElement("a",{id:"scroll-top",className:t?"show":"",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})},ye=function(e){var t=e.pageTitle,n=e.container,r=e.children;return c.createElement("div",{className:n},c.createElement(me,null,c.createElement("title",null,t)),c.createElement("div",{id:"wrapper"},c.createElement(ve,null),r,c.createElement(Ce,null)),c.createElement(we,null))}},912:function(e,t){"use strict";var n=function(){};n.CSHIRTS_PUBLICSALE_PRICE="0.2",n.CSHIRTS_PRIVATESALE_SUPPLY=800,n.CSHIRTS_PUBLICSALE_SUPPLY=8e3,n.CSHIRTS_PRIVATESALE_DATE=new Date(Date.UTC(2022,8,1,20,0,0)),n.CSHIRTS_PUBLICSALE_DATE=new Date(Date.UTC(2022,8,2,20,0,0)),n.CSHIRTS_OPENSEALINK="https://opensea.io/assets/ethereum/0xdc86c8a74b921262da63dfbd729dd1b771bcf355/",n.CSHIRTS_CONTRACTADDRESS="0xdC86C8A74B921262dA63DFBD729DD1B771bcF355",n.CSHIRTS_CONTRACTABI=["function mintWaitlist(bytes calldata _signature, uint256 _amount) public payable","function mint(uint256 _amount) public payable","function totalSupply() public view returns (uint256)","function _price() public view returns (uint256)","function _max_nft() public view returns (uint256)","function _stage() public view returns (uint8)","function MAX_SUPPLY() public view returns (uint256)","function tokensOfOwner(address owner) public view returns (uint256[])"],n.TOURNAMENTS_CONTRACTABI=["function mintWaitlist(bytes calldata _signature, uint256 _amount) public payable","function mint(uint256 _amount) public payable","function totalSupply() public view returns (uint256)","function _price() public view returns (uint256)","function _max_nft() public view returns (uint256)","function _stage() public view returns (uint8)","function MAX_SUPPLY() public view returns (uint256)","function tokensOfOwner(address owner) public view returns (uint256[])"],n.PREMIER22_OPENSEALINK="",n.PREMIER22_CONTRACTADDRESS="",n.LIGA22_OPENSEALINK="",n.LIGA22_CONTRACTADDRESS="",n.SERIEA22_OPENSEALINK="",n.SERIEA22_CONTRACTADDRESS="",n.NFL22_OPENSEALINK="",n.NFL22_CONTRACTADDRESS="",n.NBA22_OPENSEALINK="",n.NBA22_CONTRACTADDRESS="",n.NHL22_OPENSEALINK="",n.NHL22_CONTRACTADDRESS="",n.CHAMPIONSLEAGUE22_OPENSEALINK="",n.CHAMPIONSLEAGUE22_CONTRACTADDRESS="",n.WORLDCUP22_OPENSEALINK="",n.WORLDCUP22_CONTRACTADDRESS="",n.METAMASK_MOBILE_MINTURL="https://metamask.app.link/dapp/cshirts.io/mint/",n.METAMASK_MOBILE_CLAIMURL="https://metamask.app.link/dapp/cshirts.io/claim/",n.TOURNAMENT_PRIVATESALE_SPOTS=250,n.TOURNAMENT_GAMIFICATION_PERC=70,n.OPENSEA_NONFUNGIBLECUP_PROFILEURL="https://opensea.io/collection/cshirts",n.TWITTER_URL="https://twitter.com/cshirtsnft",n.TOTAL_MINTED=80,n.MAXCSHIRTSPAGESFORDEV=5,n.CHAINID=1,n.CHAIN_NAME="Ethereum Mainnet",n.SCAN_URL="https://etherscan.io/tx/",n.SCAN_CONTRACT_URL="https://etherscan.io/address/",n.ALCHEMY_URL="https://eth-mainnet.g.alchemy.com/v2/iZ7E8ZCez9XqXHcq65XRAdfip7m91LXn",n.TOURNAMENTS=[{name:"Premier League 2022/23",url:"/tournaments/premier22-23",date:new Date(Date.UTC(2022,8,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"0.4 ETH",gamification:70,contractaddress:n.PREMIER22_CONTRACTADDRESS},{name:"Liga 2022/23",url:"/tournaments/liga22-23",date:new Date(Date.UTC(2022,8,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"0.4 ETH",gamification:70,contractaddress:n.LIGA22_CONTRACTADDRESS},{name:"Serie A 2022/23",url:"/tournaments/serieA22-23",date:new Date(Date.UTC(2022,8,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"0.4 ETH",gamification:70,contractaddress:n.SERIEA22_CONTRACTADDRESS},{name:"UEFA Champions League 2022/23",url:"/tournaments/uechampionsleague22-23",date:new Date(Date.UTC(2022,8,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH (TBC)",gamification:70,contractaddress:n.CHAMPIONSLEAGUE22_CONTRACTADDRESS},{name:"NFL 2022/23",url:"/tournaments/nfl22-23",date:new Date(Date.UTC(2022,8,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH (TBC)",gamification:70,contractaddress:n.NFL22_CONTRACTADDRESS},{name:"NHL 2022/23",url:"/tournaments/nhl22-23",date:new Date(Date.UTC(2022,9,11,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH (TBC)",gamification:70,contractaddress:n.NHL22_CONTRACTADDRESS},{name:"NBA 2022/23",url:"/tournaments/nba22-23",date:new Date(Date.UTC(2022,9,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH (TBC)",gamification:70,contractaddress:n.NBA22_CONTRACTADDRESS},{name:"World Cup Qatar 2022",url:"/tournaments/worldcupqatar22",date:new Date(Date.UTC(2022,10,21,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH (TBC)",gamification:70,contractaddress:n.WORLDCUP22_CONTRACTADDRESS}],t.Z=n}}]);
//# sourceMappingURL=commons-5c89ce85f5b70a7fce7c.js.map