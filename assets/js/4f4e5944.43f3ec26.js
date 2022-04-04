"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4350],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Operator Requirements"},u=void 0,c={unversionedId:"operating/operator_requirements",id:"operating/operator_requirements",title:"Operator Requirements",description:"Balance Recommendations",source:"@site/docs/operating/operator_requirements.md",sourceDirName:"operating",slug:"/operating/operator_requirements",permalink:"/docs/operating/operator_requirements",tags:[],version:"current",frontMatter:{title:"Operator Requirements"},sidebar:"tutorialSidebar",previous:{title:"NeonSwap",permalink:"/docs/developing/utilities/neonswap"},next:{title:"Running Neon EVM as a Proxy Operator",permalink:"/docs/operating/operator_guide"}},s={},p=[{value:"Balance Recommendations",id:"balance-recommendations",level:3},{value:"Hardware Recommendations",id:"hardware-recommendations",level:3},{value:"Software Recommendations",id:"software-recommendations",level:3},{value:"Solana Cluster Requirements (optional)",id:"solana-cluster-requirements-optional",level:3},{value:"Networking",id:"networking",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"balance-recommendations"},"Balance Recommendations"),(0,a.kt)("p",null,"First, you must be registered in Solana, which involves creating an account with a balance for storing SOL tokens, and getting the public and private keys.\nThere is no strict minimum amount of SOL required to run as an operator on the Neon EVM. However, you should take into account that you will need tokens to create accounts for new users, deploy contracts, and execute transactions."),(0,a.kt)("p",null,"In addition to the balance for storing SOL tokens, an operator must also have the ",(0,a.kt)("inlineCode",{parentName:"p"},"NEON_TOKEN_MINT")," balance for storing value tokens. These tokens are used to pay funds from users to an operator for the successful execution of transactions. Depending on the chosen configuration, specific values for ",(0,a.kt)("inlineCode",{parentName:"p"},"NEON_TOKEN_MINT")," are indicated in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/operating/operator_guide#neon_token_mint"},"table"),"."),(0,a.kt)("p",null,"To create the ",(0,a.kt)("inlineCode",{parentName:"p"},"NEON_TOKEN_MINT")," balance, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spl-token -u <Solana RPC node URL> create-account <NEON_TOKEN_MINT>\n")),(0,a.kt)("h3",{id:"hardware-recommendations"},"Hardware Recommendations"),(0,a.kt)("p",null,"We do not have strict hardware recommendations. The device specifications below are based on information obtained from official Solana ",(0,a.kt)("a",{parentName:"p",href:"https://docs.solana.com/running-validator/validator-reqs"},"documentation"),"."),(0,a.kt)("p",null,"The minimum specifications recommended for your Neon EVM proxy are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"12 cores"),(0,a.kt)("li",{parentName:"ul"},"2.8 GHz or faster"),(0,a.kt)("li",{parentName:"ul"},"AVX2 instruction support"))),(0,a.kt)("li",{parentName:"ul"},"RAM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"128 GB or more"))),(0,a.kt)("li",{parentName:"ul"},"Disk space",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"500 GB or more")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do not use a public or shared Solana RPC node for your Neon EVM proxy. Use only a device that you control.")),(0,a.kt)("p",null,"In addition to the Neon EVM proxy, you need a Solana RPC node. It should be a dedicated RPC node with low latency to interact with your Neon EVM proxy."),(0,a.kt)("p",null,"The minimum specifications recommended to your Solana RPC node are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"16 cores"),(0,a.kt)("li",{parentName:"ul"},"EPYC Gen 2 or Gen 3"),(0,a.kt)("li",{parentName:"ul"},"Core isolation"))),(0,a.kt)("li",{parentName:"ul"},"RAM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"256 GB memory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/about/terminology#tmpfs"},"Tmpfs")))),(0,a.kt)("li",{parentName:"ul"},"Disk space",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Depends on the transaction history required for storage")))),(0,a.kt)("h3",{id:"software-recommendations"},"Software Recommendations"),(0,a.kt)("p",null,"The following software should be installed on your Neon EVM proxy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 or later"),(0,a.kt)("li",{parentName:"ul"},"macOS Darwin 10.12 or later"))),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},"Docker Compose")),(0,a.kt)("h3",{id:"solana-cluster-requirements-optional"},"Solana Cluster Requirements (optional)"),(0,a.kt)("p",null,"If you want to use a local Solana cluster, you need to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solana cluster with ",(0,a.kt)("inlineCode",{parentName:"li"},"--enable-rpc-transaction-history")," enabled."),(0,a.kt)("li",{parentName:"ul"},"Solana cluster with ",(0,a.kt)("inlineCode",{parentName:"li"},"--enable-rpc-bigtable-ledger-storage")," enabled.")),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("p",null,"Internet service should be at least 300 Mbps."))}d.isMDXComponent=!0}}]);