(self.webpackChunknon_fungible_cup=self.webpackChunknon_fungible_cup||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(!i(e[u],o[u]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],o.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],o[l[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},5420:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,a,i,o,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),m=n.n(p),d=n(6494),h=n.n(d),y="bodyAttributes",A="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),b="cssText",g="href",C="http-equiv",w="innerHTML",S="itemprop",O="name",N="property",P="rel",L="src",I="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",_="defer",k="encodeSpecialCharacters",D="onChangeClientState",M="titleTemplate",j=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),x=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,v.TITLE),n=X(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,U);return t||r||void 0},Z=function(e){return X(e,D)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==w&&c!==b&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,a),ce(f,p);var m={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,o),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),u(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==o.join(",")&&n.setAttribute(H,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=fe(n,r),[c.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case A:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===w||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===w||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===x.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(A,a,r),link:pe(v.LINK,i,r),meta:pe(v.META,o,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,u,r),style:pe(v.STYLE,l,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},de=f()((function(e){return{baseTag:z([g,I],e),bodyAttributes:W(y,e),defer:X(e,_),encode:X(e,k),htmlAttributes:W(A,e),linkTags:J(v.LINK,[P,g],e),metaTags:J(v.META,[O,E,C,N,S],e),noscriptTags:J(v.NOSCRIPT,[w],e),onChangeClientState:Z(e),scriptTags:J(v.SCRIPT,[L,w],e),styleTags:J(v.STYLE,[b],e),title:V(e),titleAttributes:W(T,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),he=(a=de,o=i=function(e){function t(){return F(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case v.TITLE:return K({},a,((t={})[r.type]=o,t.titleAttributes=K({},i),t));case v.BODY:return K({},a,{bodyAttributes:K({},i)});case v.HTML:return K({},a,{htmlAttributes:K({},i)})}return K({},a,((n={})[r.type]=K({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)}(q(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ye=n(912),Ae=function(){return c.createElement("footer",{id:"footer"},c.createElement("div",{className:"footer-main"},c.createElement("div",{className:"container"},c.createElement("ul",{className:"widget-social"},c.createElement("li",null,c.createElement("a",{href:ye.Z.TWITTER_URL},c.createElement("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z",fill:"white"})))),c.createElement("li",null,c.createElement("a",{href:ye.Z.OPENSEA_NONFUNGIBLECUP_PROFILEURL},c.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z",fill:"white"}))))),c.createElement("h5",{className:"heading"},"don't miss out, get a c-shirt and start playing"))),c.createElement("div",{className:"footer-bottom"},c.createElement("div",{className:"container"},c.createElement("div",{className:"wrap-fx"},c.createElement("div",{className:"Copyright"},c.createElement("p",null,"Love the game"))))))},Te=n(1597),ve=[{url:"/",name:"Home",children:[]}];ve.push({url:"/rules/",name:"Rules",children:[]}),ve.push({url:"/cshirts/",name:"C-Shirts",children:[]}),ve.push({url:"/claim/",name:"Claim wins",children:[]});var Ee={url:"#",name:"Tournaments",children:[]};ye.Z.TOURNAMENTS.forEach((function(e){var t=e.name;if(e.date){var n=new Date;Math.ceil(Math.abs(e.date-n)/864e5)<30&&(t+=" (mint soon)")}Ee.children.push({url:e.url,name:t,children:[]})})),ve.push(Ee);var be=function(){return c.createElement("ul",{id:"menu-primary-menu",className:"menu"},ve.map((function(e){return c.createElement("li",{className:e.children.length>0?"menu-item menu-item-has-children":"menu-item",key:e.name},c.createElement(Te.Link,{to:e.url,activeClassName:"current-menu-item"},e.name),c.createElement("ul",{className:e.children.length>0?"sub-menu":"hide"},e.children.map((function(e){return c.createElement("li",{className:"menu-item",key:e.name},c.createElement(Te.Link,{to:e.url,activeClassName:"current-menu-item"},e.name))}))))})))},ge=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];(0,c.useEffect)((function(){var e=function(){window.scrollY>300!==t&&n(!t)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[t]);var r=!1;if("undefined"!=typeof window){var a=window.matchMedia("(max-width: 991px)");r=a.matches,a.addListener((function(){r=a.matches}));var i=(0,c.useState)(!1),o=i[0],u=i[1],l=r?null:c.createElement("nav",{id:"main-nav",className:"main-nav"},c.createElement(be,null)),s=r?c.createElement("nav",{id:"main-nav-mobi",className:o?"main-nav":"main-nav hide"},c.createElement(be,null)):null;return c.createElement("header",{id:"header_main",className:t?"header is-fixed is-small":"header"},c.createElement("div",{className:"container"},c.createElement("div",{id:"site-header-inner"},c.createElement("div",{className:"header__logo"},c.createElement(Te.Link,{to:"/"},c.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAP///wAAAHPGg3EAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsIAAA7CARUoSoAAAAB2SURBVEhL7Y9BDoAgDAQr/3+0rYxBVEwLFxKZy8buToKSgswtCPB5wOm6IhU6ryCyQalfb2RUKJXBO243lkRMqKsWWekRfHPDlB7Bq/T/wxGqtLXcsiSigilfwjkfEUyhf1DmS1hCxRJIZUqhDRNlRPDxQyGlHdNRDHnUPbpHAAAAAElFTkSuQmCC",alt:"NON FUNGIBLE CUP"}),c.createElement("span",{className:"h7"},"NON FUNGIBLE CUP"))),l,c.createElement("a",{className:"tf-button btn-effect d-none d-sm-block d-md-block active",href:ye.Z.DISCORD},c.createElement("span",{className:"boder-fade"}),c.createElement("span",{className:"effect"},"join discord")),c.createElement("div",{className:o?"mobile-button active":"mobile-button",onClick:function(){u(!o)}},c.createElement("span",null)))),s)}return c.createElement("br",null)},Ce=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return(0,c.useEffect)((function(){var e=function(){window.scrollY>10!==t&&n(!t)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[t]),c.createElement("a",{id:"scroll-top",className:t?"show":"",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})},we=function(e){var t=e.pageTitle,n=e.container,r=e.children;return c.createElement("div",{className:n},c.createElement(he,null,c.createElement("title",null,t)),c.createElement("div",{id:"wrapper"},c.createElement(ge,null),r,c.createElement(Ae,null)),c.createElement(Ce,null))}},912:function(e,t){"use strict";var n=function(){};n.METAMASK_MOBILE_MINTURL="https://metamask.app.link/dapp/cshirts.io/mint/",n.METAMASK_MOBILE_CLAIMURL="https://metamask.app.link/dapp/cshirts.io/claim/",n.TOURNAMENT_PRIVATESALE_SPOTS=250,n.TOURNAMENT_GAMIFICATION_PERC=70,n.OPENSEA_NONFUNGIBLECUP_PROFILEURL="#",n.TWITTER_URL="#",n.PREMINT=!0,n.MAXCSHIRTSPAGESFORDEV=5,n.DISCORD="https://discord.gg/F9JcvdhGYc",n.CHAINID=80001,n.CHAIN_NAME="Mumbai",n.SCAN_URL="https://mumbai.polygonscan.com/tx/",n.ALCHEMY_URL="https://polygon-mumbai.g.alchemy.com/v2/swsN7kPLOjbRJKlQXWKUmcQNc9us4GhM",n.TOURNAMENTS=[{name:"Premier League 2022/23",url:"/tournaments/premier22-23",date:new Date(Date.UTC(2022,7,6,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"Liga 2022/23",url:"/tournaments/liga22-23",date:new Date(Date.UTC(2022,7,12,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"Serie A 2022/23",url:"/tournaments/serieA22-23",date:new Date(Date.UTC(2022,7,13,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"UEFA Champions League 2022/23",url:"/tournaments/uechampionsleague22-23",date:new Date(Date.UTC(2022,8,6,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"NFL 2022/23",url:"/tournaments/nfl22-23",date:new Date(Date.UTC(2022,8,8,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"NHL 2022/23",url:"/tournaments/nhl22-23",date:new Date(Date.UTC(2022,9,11,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"NBA 2022/23",url:"/tournaments/nba22-23",date:new Date(Date.UTC(2022,9,19,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70},{name:"World Cup Qatar 2022",url:"/tournaments/worldcupqatar22",date:new Date(Date.UTC(2022,10,21,20,0,0)),totalSupply:0,privateSalePrice:"free-mint",publicSalePrice:"1 ETH",gamification:70}],n.CSHIRTS_PUBLICSALE_PRICE="0.25",n.CSHIRTS_PRIVATESALE_SUPPLY=800,n.CSHIRTS_PUBLICSALE_SUPPLY=8e3,n.CSHIRTS_PRIVATESALE_DATE=new Date(Date.UTC(2022,6,27,20,0,0)),n.CSHIRTS_PUBLICSALE_DATE=new Date(Date.UTC(2022,6,28,20,0,0)),n.CSHIRTS_OPENSEALINK="",n.CSHIRTS_CONTRACTADDRESS="0xa8f577eAD83994aeF5948c58811cA88ef0809d58",n.CSHIRTS_CONTRACTABI=["function mintWaitlist(bytes calldata _signature, uint256 _amount) public payable","function mint(uint256 _amount) public payable","function totalSupply() public view returns (uint256)","function _price() public view returns (uint256)","function _max_nft() public view returns (uint256)","function _stage() public view returns (uint8)","function MAX_SUPPLY() public view returns (uint256)"],n.NFL22_OPENSEALINK="",t.Z=n}}]);
//# sourceMappingURL=commons-c27754debe4d0fb552e5.js.map