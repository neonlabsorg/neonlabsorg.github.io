"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4559],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={},l="NeonSwap demo guide",s={unversionedId:"neonswap/solana_neonswap",id:"neonswap/solana_neonswap",isDocsHomePage:!1,title:"NeonSwap demo guide",description:"This guide describes how to deploy an application on Neon EVM via NeonSwap services using the example of tokens exchange. You can see how easily your applications can be run on Solana without any software code changes.",source:"@site/docs/neonswap/solana_neonswap.md",sourceDirName:"neonswap",slug:"/neonswap/solana_neonswap",permalink:"/docs/neonswap/solana_neonswap",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/neonswap/solana_neonswap.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration tests",permalink:"/docs/neonswap/neonswap_tests"},next:{title:"Web3 concept",permalink:"/docs/software_manuals/foundational_topics/web3"}},c=[{value:"Step 1. Navigate to Neon demo",id:"step-1-navigate-to-neon-demo",children:[]},{value:"Step 2. Import your demo account\u2019s unique private key",id:"step-2-import-your-demo-accounts-unique-private-key",children:[]},{value:"Step 3. Add the Neon proxy network",id:"step-3-add-the-neon-proxy-network",children:[]},{value:"Step 4. Add test assets",id:"step-4-add-test-assets",children:[]},{value:"Step 5. Start swapping",id:"step-5-start-swapping",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"neonswap-demo-guide"},"NeonSwap demo guide"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This guide describes how to deploy an application on Neon EVM via ",(0,r.kt)("a",{parentName:"em",href:"https://doc.neonlabs.org/docs/glossary#neonswap"},"NeonSwap")," services using the example of tokens exchange. You can see how easily your applications can be run on ",(0,r.kt)("a",{parentName:"em",href:"https://docs.solana.com/introduction"},"Solana")," without any software code changes.")),(0,r.kt)("p",null,"No changes to software serving contracts are required to port dapps using NeonSwap. All you need is to follow the instructions step by step."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Before you begin"),(0,r.kt)("br",{parentName:"p"}),"\n","Your proxy server should already be deployed in Neon EVM by this time.")),(0,r.kt)("h3",{id:"step-1-navigate-to-neon-demo"},"Step 1. Navigate to ",(0,r.kt)("a",{parentName:"h3",href:"http://swap-interface.neondemo.org/"},"Neon demo")),(0,r.kt)("p",null,"Neon will provide credentials to access this page (if there are difficulties, do not hesitate to contact the Neon community to help you)."),(0,r.kt)("h3",{id:"step-2-import-your-demo-accounts-unique-private-key"},"Step 2. Import your demo account\u2019s unique private key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open MetaMask and click the identicon in the top right corner."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Import Account")," and paste the private key that was provided by Neon."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Import"),".")),(0,r.kt)("h3",{id:"step-3-add-the-neon-proxy-network"},"Step 3. Add the Neon proxy network"),(0,r.kt)("p",null,"Add a custom RPC network. To do so:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the identicon in the top right corner of MetaMask window and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Networks")," in the bottom of the list, then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Network"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose any Currency Symbol you like. The required fields are:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Network Name = Neon Test Network\nNew RPC URL = http://swap-interface.neondemo.org/solana\nChain ID = 111\n")),(0,r.kt)("h3",{id:"step-4-add-test-assets"},"Step 4. Add test assets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The accounts provided to you should have two tokens (",(0,r.kt)("em",{parentName:"li"},"NEON_A")," and ",(0,r.kt)("em",{parentName:"li"},"NEON_B"),", for instance) already. If they do not appear, follow the steps below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In MetaMask, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Assets")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Token"),"."),(0,r.kt)("li",{parentName:"ul"},"There will be two assets. Copy/paste the following Token Contract Addresses and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Next"),":  ")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0xB150f5Df93491A3b8B1742f0b5943Ac4287C7064"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x5a379A80Ae648748baBcE274944Da26c6aa9bF9f")),(0,r.kt)("h3",{id:"step-5-start-swapping"},"Step 5. Start swapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy contract addresses from Step 4"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Swap")," tab, click the dropdown, and copy/paste the contract addresses.\nYou are now ready to swap!"),(0,r.kt)("li",{parentName:"ul"},"We have already created liquidity for you. Optionally, however, you can navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Pool")," tab and add liquidity. To do this, click the token dropdown menus and paste the contract addresses for ",(0,r.kt)("em",{parentName:"li"},"NEON_A")," and ",(0,r.kt)("em",{parentName:"li"},"NEON_B"),". Then, approve each token and supply the liquidity.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can supply liquidity in any quantity as long as you maintain some tokens to swap with.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have any questions/issues with the demo, please reach out to ",(0,r.kt)("em",{parentName:"p"},"@Ikeguchi")," or ",(0,r.kt)("em",{parentName:"p"},"@mgureva")," on Telegram. Thank you!")))}d.isMDXComponent=!0}}]);