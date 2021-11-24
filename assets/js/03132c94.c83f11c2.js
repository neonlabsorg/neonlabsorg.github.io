"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2060],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="Installation and setup",u={unversionedId:"solana_cluster/cluster_installation",id:"solana_cluster/cluster_installation",isDocsHomePage:!1,title:"Installation and setup",description:"This guide describes how to install, configure and test the local Solana cluster with Neon EVM on-board. It helps new developers to create their own environment and run Ethereum programs, wrapped into Neon EVM. All you need is to follow this guide step by step.",source:"@site/docs/solana_cluster/cluster_installation.md",sourceDirName:"solana_cluster",slug:"/solana_cluster/cluster_installation",permalink:"/docs/solana_cluster/cluster_installation",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying Contracts on Solana via Remix",permalink:"/docs/devportal/deploy_contract_via_remix"},next:{title:"NeonSwap overview",permalink:"/docs/neonswap/neonswap_overview"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting up the Solana Cluster",id:"setting-up-the-solana-cluster",children:[]},{value:"Starting Neon EVM endpoint",id:"starting-neon-evm-endpoint",children:[]},{value:"Remix and Metamask with Neon EVM",id:"remix-and-metamask-with-neon-evm",children:[]},{value:"Truffle suite with Neon EVM",id:"truffle-suite-with-neon-evm",children:[{value:"Common truffle settings",id:"common-truffle-settings",children:[]},{value:"Contract creating",id:"contract-creating",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Possible problems",id:"possible-problems",children:[]}]}],p={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-and-setup"},"Installation and setup"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This guide describes how to install, configure and test the local Solana cluster with Neon EVM on-board. It helps new developers to create their own environment and run Ethereum programs, wrapped into Neon EVM. All you need is to follow this guide step by step.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://neon-labs.org/"},"Neon EVM")," is a solution that performs transaction execution outside layer 1. The development process can be run on any modern Linux or Mac system, though this document is based on Ubuntu 20.04 experience."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},"A Chromium-based browser for ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," and ",(0,o.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"Remix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm CLI"))),(0,o.kt)("h2",{id:"setting-up-the-solana-cluster"},"Setting up the Solana Cluster"),(0,o.kt)("p",null,"PostgreSQL must be running before starting the docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run --rm -ti --network=host -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass --name=postgres postgres:14.0\n")),(0,o.kt)("p",null,"The next step is making Solana RPC endpoint working from the docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run -p 8899:8899 -p 8900:8900 -p 8001:8001 -p 8000-8009:8000-8009/udp -ti -e RUST_LOG=solana_runtime::system_instruction_processor=trace,solana_runtime::message_processor=debug,solana_bpf_loader=debug,solana_rbpf=debug -e NDEBUG=1 --name=solana neonlabsorg/solana:stable-testnet | grep -v 'Program Vote111111111111111111111111111111111111111'\n")),(0,o.kt)("h2",{id:"starting-neon-evm-endpoint"},"Starting Neon EVM endpoint"),(0,o.kt)("p",null,"The Neon EVM endpoint enables ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," to work with Solana seamlessly. You should issue the following command in a new terminal window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," $ docker run --rm -ti --network=host -e CONFIG=local -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass -e EXTRA_GAS=10000 --name=proxy neonlabsorg/proxy:latest\n")),(0,o.kt)("h2",{id:"remix-and-metamask-with-neon-evm"},"Remix and Metamask with Neon EVM"),(0,o.kt)("p",null,'Setup the "Metamask" Chromium extension to connect to the proxy via Custom RPC at ',(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/solana"),". The following image describes how to set up the local Solana connection:  "),(0,o.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7887).Z}))),(0,o.kt)("p",null,"Open Remix (also in Chromium) and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," environment. You can deploy EVM-wrapped smart contracts on Solana and invoke instructions:  "),(0,o.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4068).Z}))),(0,o.kt)("h2",{id:"truffle-suite-with-neon-evm"},"Truffle suite with Neon EVM"),(0,o.kt)("p",null,"Truffle is a popular platform to deploy and test solidity programs. This section is to check Neon EVM and truffle suite compatibility."),(0,o.kt)("p",null,"In the new terminal, create a truffle project and deploy contracts into EVM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo npm install -g truffle\n$ mkdir myproject && cd myproject\n$ truffle init\n$ npm install web3 @truffle/hdwallet-provider\n")),(0,o.kt)("h3",{id:"common-truffle-settings"},"Common truffle settings"),(0,o.kt)("p",null,"Put your ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," into the truffle root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ echo \'const Web3 = require("web3");\nconst Web3eth = require("web3-eth");\nconst HDWalletProvider = require("@truffle/hdwallet-provider");\n\nconst provider = new Web3.providers.HttpProvider("http://localhost:9090/solana");\n\nconst web3eth = new Web3eth();\nconst privateKeys = Array.from(Array(10), (_, x) => web3eth.accounts.create().privateKey);\n\nmodule.exports = {\n  networks: {\n    solana: {\n      provider: () => {\n        return new HDWalletProvider(\n          privateKeys,\n          provider\n        );\n      },\n      network_id: "*",\n      gas: 3000000,\n      gasPrice: 1000000000,\n    }\n  },\n\n  compilers: {\n    solc: {\n      version: "0.8.9"\n    }\n  }\n};\' > truffle-config.js\n')),(0,o.kt)("h3",{id:"contract-creating"},"Contract creating"),(0,o.kt)("p",null,"Create a trivial contract at ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/Storage.sol"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ echo '// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\ncontract Storage {\n    uint256 number;\n\n    function put(uint256 num) public {\n        number = num;\n    }\n\n    function get() public view returns (uint256) {\n        return number;\n    }\n}' > contracts/Storage.sol\n")),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"You can now start testing ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," invocations with truffle facility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ echo \'const Storage = artifacts.require("Storage");\n\ncontract("Storage", (accounts) => {\n    let storage;\n\n    beforeEach(async () => {\n        storage = await Storage.new();\n    });\n\n    it("should store a value", async () => {\n        const setResult = await storage.put(248);\n        assert.equal(setResult.receipt.status, true);\n        const value = await storage.get();\n        assert.equal(value, 248);\n    })\n})\' > test/Storage.test.js\n$ truffle test test/Storage.test.js --network solana\n')),(0,o.kt)("h3",{id:"possible-problems"},"Possible problems"),(0,o.kt)("p",null,"If for some reasons you remove the Solana container and run it again then all related accounts, stored in foreign systems, get invalid from that moment. That's why you need to re-run proxy container and reset the state of Metamask and truffle as well, to make all relations consistent."),(0,o.kt)("p",null,"To reset the metamask state, follow the steps ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Account"),", ."),(0,o.kt)("p",null,"The truffle state can be reset by redeploying in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ truffle migrate --network solana --reset\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Welcome to deploy your solidity programs on ",(0,o.kt)("a",{parentName:"em",href:"https://solana.com"},"Solana")," driven ",(0,o.kt)("a",{parentName:"em",href:"https://neon-labs.org/"},"Neon EVM")),"."))}m.isMDXComponent=!0},7887:function(e,t,n){t.Z=n.p+"assets/images/cluster-install-1-2a934237b77806464af491c468c92f13.png"},4068:function(e,t,n){t.Z=n.p+"assets/images/cluster-install-2-0e37ce12c2afc407dcdd02b669044898.png"}}]);