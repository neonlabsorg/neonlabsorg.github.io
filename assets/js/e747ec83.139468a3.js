"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2291],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,k=u["".concat(s,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Terminology",c={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Terminology",description:"ABI",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/glossary.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting_started"},next:{title:"Ethereum and Solana capabilities in a single solution",permalink:"/docs/devportal/eth_sol_solution"}},d=[{value:"ABI",id:"abi",children:[]},{value:"Account",id:"account",children:[]},{value:"Block",id:"block",children:[]},{value:"Blockchain",id:"blockchain",children:[]},{value:"Block log",id:"block-log",children:[]},{value:"BPF",id:"bpf",children:[]},{value:"Container",id:"container",children:[]},{value:"Cryptographic hash",id:"cryptographic-hash",children:[]},{value:"Daemon",id:"daemon",children:[]},{value:"dapp",id:"dapp",children:[]},{value:"Digital signature",id:"digital-signature",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Docker-compose",id:"docker-compose",children:[]},{value:"Docker-file",id:"docker-file",children:[]},{value:"Docker image",id:"docker-image",children:[]},{value:"DPoS (Delegated Proof-of-Stake)",id:"dpos-delegated-proof-of-stake",children:[]},{value:"ERC20",id:"erc20",children:[]},{value:"ERC721",id:"erc721",children:[]},{value:"Head block",id:"head-block",children:[]},{value:"Key",id:"key",children:[]},{value:"Merkle Mountain Range",id:"merkle-mountain-range",children:[]},{value:"Merkle Patricia trie",id:"merkle-patricia-trie",children:[]},{value:"MetaMask",id:"metamask",children:[]},{value:"Neon Swap",id:"neon-swap",children:[]},{value:"Node",id:"node",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Private key",id:"private-key",children:[]},{value:"Proof of History",id:"proof-of-history",children:[]},{value:"Public key",id:"public-key",children:[]},{value:"Remix",id:"remix",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Signature",id:"signature",children:[]},{value:"Smart contract",id:"smart-contract",children:[]},{value:"Sollet",id:"sollet",children:[]},{value:"Staked tokens",id:"staked-tokens",children:[]},{value:"Transaction",id:"transaction",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Web 3",id:"web-3",children:[]},{value:"Uniswap",id:"uniswap",children:[]},{value:"USDT token",id:"usdt-token",children:[]}],h={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminology"},"Terminology"),(0,r.kt)("h3",{id:"abi"},"ABI"),(0,r.kt)("p",null,"The Application Binary Interface (ABI) is a JSON-based description on how to convert user actions between their JSON and binary representations. The ABI may also describe how to convert the database state to/from JSON. Once you have described your contract via an ABI this allows developers and users to interact with your contract seamlessly via JSON.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"account"},"Account"),(0,r.kt)("p",null,"An account is a unique identifier and a requirement to interact with Solana. Unlike most other cryptocurrencies, transfers are sent to a human-readable account name instead of a public key, while keys attributed to the account are used to sign transactions.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"block"},"Block"),(0,r.kt)("p",null,"A special structure for recording a group of transactions in blockchain systems. A block consists of a header and a list of transactions. The block header includes its hash, the hash of the previous block, transaction hashes, and additional overhead information.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"A strictly structured database with certain rules for building chains of transactions and access to information that excludes data theft, fraud, violation of property rights, etc.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"block-log"},"Block log"),(0,r.kt)("p",null,"The block log is an append-only log of blocks written to disk and contains all the irreversible blocks.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bpf"},"BPF"),(0,r.kt)("p",null,"The Berkeley Packet Filter (BPF) is a technology used in computer operating systems to analyze network traffic. It provides a raw interface to data link layers, permitting raw link-layer packets to be sent and received.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"container"},"Container"),(0,r.kt)("p",null,"An object created using a Docker image and containing all the necessary components for the operation of the application. The container is a secure platform for the operation of the application.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cryptographic-hash"},"Cryptographic hash"),(0,r.kt)("p",null,"A cryptographic hash function is a hash function that takes an input (or ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),") and returns a fixed-size alphanumeric string. The alphanumeric string is called the ",(0,r.kt)("inlineCode",{parentName:"p"},"hash value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message digest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"digital fingerprint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"digest"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum"),".  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"daemon"},"Daemon"),(0,r.kt)("p",null,"A program on Linux systems, launched by the system itself and running in the background without direct user interaction.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dapp"},"dapp"),(0,r.kt)("p",null,"A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"digital-signature"},"Digital signature"),(0,r.kt)("p",null,"A digital signature is a mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature, where the prerequisites are satisfied, gives a recipient very strong reason to believe that the message was created by a known sender (authentication), and that the message was not altered in transit (integrity). Digital signatures are a standard element of most cryptographic protocol suites, and are commonly used for software distribution, financial transactions, contract management software, and in other cases where it is important to detect forgery or tampering.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Software to automate the installation of the application in the virtualization environment at the operating system level. Provides installation of an application with all its environments and dependencies into a container that can be ported to any Linux system with cgroups support in the kernel, and also provides a container management environment.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"docker-compose"},"Docker-compose"),(0,r.kt)("p",null,"Command line tool for managing multiple Docker multi-container applications.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"docker-file"},"Docker-file"),(0,r.kt)("p",null,"A file containing instructions and parameters for creating a Docker image for specific tasks.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"docker-image"},"Docker image"),(0,r.kt)("p",null,"Docker platform template, available only by reading and used to create containers.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dpos-delegated-proof-of-stake"},"DPoS (Delegated Proof-of-Stake)"),(0,r.kt)("p",null,'DPoS stands for "Delegated Proof of Stake" and is a consensus algorithm initially developed by Daniel Larimer in 2013 for Bitshares. It\'s sometimes referred to as "Democracy as Proof of Stake".  '),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"erc20"},"ERC20"),(0,r.kt)("p",null,"The token standard which is used for Ethereum smart contracts. Developed in 2015, ERC-20 defines a common list of rules that an Ethereum token has to implement. This gives developers the ability to program how new tokens will function within the Ethereum ecosystem.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"erc721"},"ERC721"),(0,r.kt)("p",null,"A more complex token standard than ERC20, with multiple optional extensions, and is split across a number of contracts. Unlike ERC20, tokens of this standart are not interchangeable. Each token is different from others \u2013 it has different characteristics.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"head-block"},"Head block"),(0,r.kt)("p",null,"The head block is the last block written to the blockchain, stored in reversible blocks.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"key"},"Key"),(0,r.kt)("p",null,"A string of characters (bit string) is used by the cryptographic algorithm for encrypting and decrypting messages, setting and verifying a digital signature, as well as identification. Keys are symmetric (the same key is used for encryption and decryption) and asymmetric (public and private).  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"merkle-mountain-range"},"Merkle Mountain Range"),(0,r.kt)("p",null,"A type of merkle tree that can be visualized as many (perfect) merkle trees which are then combined into 1, by creating a single root from all of their peaks.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"merkle-patricia-trie"},"Merkle Patricia trie"),(0,r.kt)("p",null,"A hash tree that stores key-value pairs, with the keys being represented in binary form. The nodes of this tree consist of 2 types: those that contain part of the path (prefix), and end nodes that contain the stored value.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"metamask"},"MetaMask"),(0,r.kt)("p",null,"MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"neon-swap"},"Neon Swap"),(0,r.kt)("p",null,"Neon Swap is an open source service and a fork of ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/uniswap-v2"},"Uniswap V2"),", running on Neon EVM in Solana Testnet.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"A separate (software) device that is connected to the blockchain network according to the client-server scheme. Nodes are active elements and form the basis of the blockchain network technology.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"A software component, made as a separate module and being an addition to the main program.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"private-key"},"Private key"),(0,r.kt)("p",null,"A code string with which you can access your wallet or bitcoin address. Required for transactions.",(0,r.kt)("br",{parentName:"p"}),"\n","A private key is a secret key used to sign transactions.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"proof-of-history"},"Proof of History"),(0,r.kt)("p",null,"The blockchain algorithm for time synchronisation. Instead of using the classic concept of timestamps, it is possible to prove that a message/event occurred at a certain time after one event but before another.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"public-key"},"Public key"),(0,r.kt)("p",null,"A publicly available key that can be authorized to permissions of an account and can be used to identify the origin transaction. A public key can be inferred from a signature.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remix"},"Remix"),(0,r.kt)("p",null,"Remix is an online web tool. It is an IDE (Integrated Development Environment) used to write, compile, deploy, and debug Solidity code. Can be connected with Metamask and used to deploy smart contracts to both the Solana Testnet and Mainnet."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"Serialization is the process of turning an object in memory into a stream of bytes so it can be stored on disk or sent over the network.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signature"},"Signature"),(0,r.kt)("p",null,"A signature is a mathematical scheme for demonstrating the authenticity of digital messages or documents.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"smart-contract"},"Smart contract"),(0,r.kt)("p",null,"A smart contract is a computer protocol intended to facilitate, verify, or enforce the negotiation or performance of a contract.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sollet"},"Sollet"),(0,r.kt)("p",null,"Sollet is Solana SPL token wallet. Siller.io is a non-custodial browser-based web wallet created by the Project Serum (DEX) team.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"staked-tokens"},"Staked tokens"),(0,r.kt)("p",null,"Tokens allocated for a stake acquisition that can\u2019t be used for anything else in this state. The user can stake active tokens listed on their balance or deposit them. Also, the user can perform the reverse operation \u2014 withdraw tokens from the staked state to active.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A complete all-or-nothing change to the blockchain. A combination of one or more actions. Usually the execution result of a smart contract.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"Wallets are clients that store keys that may or may not be associated with the permissions of one or more accounts. Ideally a wallet has a locked (encrypted) and unlocked (decrypted) state that is protected by a high entropy password.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"web-3"},"Web 3"),(0,r.kt)("p",null,"In the context of Ethereum, these are decentralized apps that run on the blockchain and allow anyone to participate without monetising their personal data.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uniswap"},"Uniswap"),(0,r.kt)("p",null,"Uniswap is a decentralized exchange. Liquidity providers can earn fees by providing the required tokens or ETH for both sides of a trade. It is widely used and therefore has one of the highest liquidities for a very wide range of tokens.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usdt-token"},"USDT token"),(0,r.kt)("p",null,"USDT is the ticker symbol for the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tether_(cryptocurrency)"},"Tether")," stablecoin cryptocurrency."))}u.isMDXComponent=!0}}]);