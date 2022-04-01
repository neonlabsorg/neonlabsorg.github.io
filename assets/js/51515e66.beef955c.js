"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2579],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Introduction"},l=void 0,c={unversionedId:"about/introduction",id:"about/introduction",title:"Introduction",description:"Neon EVM is an Ethereum virtual machine on Solana that enables dApp developers to use Ethereum tooling to scale and get access to liquidity on Solana.",source:"@site/docs/about/introduction.md",sourceDirName:"about",slug:"/about/introduction",permalink:"/docs/about/introduction",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Terminology",permalink:"/docs/about/terminology"}},u={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Why Neon EVM",id:"why-neon-evm",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Neon EVM is an ",(0,r.kt)("a",{parentName:"em",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum virtual machine")," on Solana that enables dApp developers to use Ethereum tooling to scale and get access to liquidity on Solana."))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"Neon EVM is a tool that allows Ethereum-like transactions to be processed on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/introduction"},"Solana"),", taking full advantage of the functionality native to Solana, including the ability to execute transactions in parallel. As such, Neon EVM allows dApps to operate with the low gas fees, high transaction speed, and high throughput of Solana, while also offering access to the growing Solana market."),(0,r.kt)("p",null,"The Ethereum state is represented by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/about/terminology/#merkle-patricia-trie"},"Merkle-Patricia Trie")," that stores key-value data for all smart contracts, and smart contracts written in Solidity do not have separate references to shared data and contracts\u2019 code. Therefore, these smart contracts have to be executed in sequence to ensure deterministic behavior. This limits a throughput: highly optimized blockchains with EVM are capable of processing up to a maximum of 1,500 transactions per second (TPS)."),(0,r.kt)("p",null,"Solana, however, is designed to support massive scaling of decentralized applications, with a maximum throughput of more than 50,000 TPS. To take full advantage of Solana's functionality, Neon EVM is built as a smart contract of Solana. This flexibility also ensures that: Neon EVM can be updated with ease when new Ethereum functionality is introduced."),(0,r.kt)("p",null,"In the case of Neon EVM, Ethereum-like transactions are wrapped into Solana transactions by an intermediary proxy server, and sent to Neon EVM, which executes them in parallel. To facilitate this parallel execution of smart contracts, Neon EVM ensures that each contract keeps its data in its own Solana storage, and account balances used to pay for Neon transactions are also separated."),(0,r.kt)("p",null,"The solution allows any Ethereum application to be run on Solana without any changes to its codebase, including Uniswap, SushiSwap, 0x, and MakerDAO. All key Ethereum dApp tools can also work on Solana, including Solidity, MetaMask, Remix, and Truffle."),(0,r.kt)("p",null,"Neon EVM is best suited to developers who want to enjoy a first-mover advantage and reach new customers on Solana, or those who want to scale with the low gas fees and high throughput that Solana provides. It is also good for developers looking to tap into liquidity on Solana."),(0,r.kt)("h2",{id:"why-neon-evm"},"Why Neon EVM"),(0,r.kt)("p",null,"Ethereum is set to remain booming blockchain ecosystem. The number of active dApps on Ethereum is hovering above 300 and the number of active users of these dApps is close to 6 million, with the number of transactions on the rise. Ethereum\u2019s popularity is not only down to its processing of smart contracts, but also its sophisticated infrastructure for application development. "),(0,r.kt)("p",null,"Solana is one of the most technically advanced and innovative blockchains offering low gas fees and high throughput of transactions. Among these innovations is its Proof-of-Stake consensus system, which is reinforced via a Proof-of-History protocol, a transaction parallelization technology that optimizes resources and ensures that Solana can scale horizontally across GPUs and SSDs, along with an optimized mempool system that speeds up throughput. "),(0,r.kt)("p",null,"Neon EVM is a cross-chain solution that allows dApp developers to access the advantages of Solana to expand their services: to offer new products like arbitrage or high-frequency trading, grow their user base, and decrease costs where possible, including gas fees. Neon EVM enables full compatibility with Ethereum on Solana."))}d.isMDXComponent=!0}}]);