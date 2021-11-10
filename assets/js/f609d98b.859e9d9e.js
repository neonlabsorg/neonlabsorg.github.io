"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4453],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(u,".").concat(y)]||d[y]||c[y]||l;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5722:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={},u="URL Proxy Table",p={unversionedId:"proxy/url_table",id:"proxy/url_table",isDocsHomePage:!1,title:"URL Proxy Table",description:"The lookup table containing URLs of all available proxies in Neon EVM.",source:"@site/docs/proxy/url_table.md",sourceDirName:"proxy",slug:"/proxy/url_table",permalink:"/docs/proxy/url_table",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration tests",permalink:"/docs/neonswap/neonswap_tests"},next:{title:"Connecting to Solana via a Proxy",permalink:"/docs/proxy/connect_to_solana_via_proxy"}},s=[],c={toc:s};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"url-proxy-table"},"URL Proxy Table"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The lookup table containing URLs of all available proxies in Neon EVM.")),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"130"},"Network (Chain ID)"),(0,l.kt)("th",null,"RPC URL"),(0,l.kt)("th",null,"Operator name")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Testnet (245022940)"),(0,l.kt)("td",null,"https://proxy.testnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"https://proxy.devnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Devnet (245022926)"),(0,l.kt)("td",null,"https://proxy.testnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"https://proxy.devnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"3"},"Mainnet Beta (245022934)"),(0,l.kt)("td",null,"https://proxy.testnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"https://proxy.devnet.neonlabs.org/solana"),(0,l.kt)("td",null,"Neon Labs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"https://neon-proxy.rbf.systems"),(0,l.kt)("td",null,"RBF"))),(0,l.kt)("p",null,"Semantic meaning of table columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Network (Chain ID)")," \u2014 Solana network and its identifier. The network determines what the RPC URL proxy can be used."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RPC URL")," \u2014 address for interacting with the required proxy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Operator name")," \u2014 operator name providing the proxy.")))}d.isMDXComponent=!0}}]);