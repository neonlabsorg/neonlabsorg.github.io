"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6261],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Choosing a Neon Proxy"},c=void 0,p={unversionedId:"developing/dev_environment/choosing_proxy",id:"developing/dev_environment/choosing_proxy",title:"Choosing a Neon Proxy",description:"This guide describes how to choose a Neon proxy to send a transaction to Solana.",source:"@site/docs/developing/dev_environment/choosing_proxy.md",sourceDirName:"developing/dev_environment",slug:"/developing/dev_environment/choosing_proxy",permalink:"/docs/developing/dev_environment/choosing_proxy",tags:[],version:"current",frontMatter:{title:"Choosing a Neon Proxy"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/developing/getting_started"},next:{title:"Connecting to the Neon Proxy",permalink:"/docs/developing/dev_environment/connect_to_solana_via_proxy"}},l={},u=[{value:"Connecting to a proxy using MetaMask",id:"connecting-to-a-proxy-using-metamask",level:2},{value:"Connecting to a proxy using Truffle",id:"connecting-to-a-proxy-using-truffle",level:2},{value:"Connecting to a proxy using Hardhat",id:"connecting-to-a-proxy-using-hardhat",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This guide describes how to choose a Neon proxy to send a transaction to Solana.")),(0,a.kt)("p",null,"Before sending a transaction to Neon EVM, a user can choose an operator the most acceptable for them to perform the transaction. The operator is not chosen directly, but through the proxies they serves."),(0,a.kt)("p",null,"Neon EVM provides users with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/clusters/neon_proxy_rpc_endpoints"},"table")," containing ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/terminology#remote-procedure-call-rpc"},"RPC")," URLs of all available proxies, each served by a separate operator. Each URL corresponds to the operator's public key, which they uses to sign and send a transaction to Neon EVM."),(0,a.kt)("p",null,"Proxy interacts with one EVM loader, which can be deployed in different Solana chains. This interaction allows the proxy to be used on different networks (Testnet, Devnet, Mainnet Beta)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),(0,a.kt)("br",{parentName:"p"}),"\n","Currently, the table contains just a list of URLs of proxies using in ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/terminology#minimum-viable-product-mvp"},"MVP"),' on Mainnet. With the development of Neon EVM, this table will be supplemented with statistical indicators evaluating the operator\'s service and the capabilities of their proxy. A user will choose an operator based on these indicators. Depending on the resources (proxy capabilities) provided by operators, the "gas price" will be different for each operator. Hence, the transaction cost will also be differ and depend on the RPC URL selected from the ',(0,a.kt)("a",{parentName:"p",href:"/docs/clusters/neon_proxy_rpc_endpoints"},"table"),"."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"For instance."),' If a transaction does not require huge resources, a user can choose the URL with the lowest "gas price", that is, choose a proxy with limited resources. To perform important operations, it will make sense for the user to choose URL with the higher "gas price", that is, to choose the operator providing the highest quality service.'),(0,a.kt)("p",{parentName:"blockquote"},"The table data will be provided to users in real time.")),(0,a.kt)("p",null,"To connect to a proxy using Metamask/Truffle follow the instructions below."),(0,a.kt)("h2",{id:"connecting-to-a-proxy-using-metamask"},"Connecting to a proxy using MetaMask"),(0,a.kt)("p",null,"To connect to a proxy using Metamask follow the instruction ",(0,a.kt)("a",{parentName:"p",href:"/docs/wallet/metamask_setup"},"Installing and setting up MetaMask"),". You need to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"New RPC URL")," field selected from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/clusters/neon_proxy_rpc_endpoints"},"table"),", and also specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain ID"),"."),(0,a.kt)("h2",{id:"connecting-to-a-proxy-using-truffle"},"Connecting to a proxy using Truffle"),(0,a.kt)("p",null,"To connect to a proxy using Truffle follow the instruction ",(0,a.kt)("a",{parentName:"p",href:"/docs/developing/deploy_facilities/using_truffle"},"Using Truffle"),". You need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," by setting the HDWalletProvider library to the RPC URL selected from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/clusters/neon_proxy_rpc_endpoints"},"table"),"."),(0,a.kt)("h2",{id:"connecting-to-a-proxy-using-hardhat"},"Connecting to a proxy using Hardhat"),(0,a.kt)("p",null,"To connect to a proxy using Hardhat follow the instruction ",(0,a.kt)("a",{parentName:"p",href:"/docs/developing/deploy_facilities/using_hardhat"},"Using Hardhat"),". You need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," by setting the url, network_id/chainId to RPC URL selected from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/clusters/neon_proxy_rpc_endpoints"},"table"),"."))}h.isMDXComponent=!0}}]);