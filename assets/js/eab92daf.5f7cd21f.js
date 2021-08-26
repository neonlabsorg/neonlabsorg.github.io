"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6314],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],p={},s="Porting dapps to Neon EVM",l={unversionedId:"neonswap/neonswap",id:"neonswap/neonswap",isDocsHomePage:!1,title:"Porting dapps to Neon EVM",description:"The purpose of this document is to share the experience with Ethereum users how easily their applications can be ported to Neon EVM. We want to demonstrate that our Neon Swap service allows you to run your dapps on Solana.",source:"@site/docs/neonswap/neonswap.md",sourceDirName:"neonswap",slug:"/neonswap/neonswap",permalink:"/docs/neonswap/neonswap",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/neonswap/neonswap.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neon Swap overview",permalink:"/docs/neonswap/neonswap_overview"},next:{title:"Integration tests",permalink:"/docs/neonswap/neonswap_tests"}},c=[{value:"Stage 1. Deploying contracts in a Neon EVM environment",id:"stage-1-deploying-contracts-in-a-neon-evm-environment",children:[]},{value:"Stage 2. Check if the deployed contracts work correctly",id:"stage-2-check-if-the-deployed-contracts-work-correctly",children:[]},{value:"Stage 3. Deploying the Neon Swap interface",id:"stage-3-deploying-the-neon-swap-interface",children:[]},{value:"Example. Exchanging tokens using Uniswap",id:"example-exchanging-tokens-using-uniswap",children:[]}],d={toc:c};function h(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"porting-dapps-to-neon-evm"},"Porting dapps to Neon EVM"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The purpose of this document is to share the experience with Ethereum users how easily their applications can be ported to Neon EVM. We want to demonstrate that our Neon Swap service allows you to run your dapps on Solana.")),(0,r.kt)("p",null,"Any dapp using the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.neonlabs.org/docs/glossary#uniswap"},"UniSwap")," service consists of 2 parts: contracts and software serving these contracts. Contracts are loaded into a chain, and the software is deployed on a separate server for providing users interaction with these contracts."),(0,r.kt)("p",null,"Porting applications from ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/"},"Ethereum")," to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/introduction"},"Solana")," is done in 3 stages:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Stage 1.")," Deploying contracts in a Neon EVM environment.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Stage 2.")," Check if the deployed contracts work correctly.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Stage 3.")," Deploying the Neon Swap interface."),(0,r.kt)("h2",{id:"stage-1-deploying-contracts-in-a-neon-evm-environment"},"Stage 1. Deploying contracts in a Neon EVM environment"),(0,r.kt)("p",null,"No changes to software serving contracts are required to port dapps using the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.neonlabs.org/docs/glossary#neon-swap"},"Neon Swap")," service. Changes are made only to those components that are necessary for its operation on Neon EVM.  "),(0,r.kt)("p",null,"The contracts are built by a typical Solidity compiler used in Ethereum. After compilation, all the necessary contracts are deployed on Neon EVM using a ",(0,r.kt)("a",{parentName:"p",href:"https://doc.neonlabs.org/docs/glossary#web3"},"Web 3")," proxy. This proxy provides a standard interface that Ethereum utilities and tools can use.  "),(0,r.kt)("p",null,"Here is a list of contracts to be deployed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Governance."),(0,r.kt)("li",{parentName:"ul"},"Uniswap-v2-periphery."),(0,r.kt)("li",{parentName:"ul"},"Multicall.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changes for deploying contracts"),(0,r.kt)("br",{parentName:"p"}),"\n","The following changes were made for deploying contracts in Neon EVM:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The timeout value was increased."),(0,r.kt)("li",{parentName:"ul"},"The number of repeated requests for transaction recipes was increased:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// The call  \n    wait factoryV1.createExchange(WETHPartner.address, overrides)\n// was replaced with  \n    let id = await factoryV1.createExchange(WETHPartner.address, overrides) let receipt = await provider.waitForTransaction(id.hash, 3)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"deploy contracts()")," method.")),(0,r.kt)("p",null,"As a result, we get the addresses of the following uploaded contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UNI_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"TIMELOCK_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"GOVERNANCE_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"MULTICALL_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"MIGRATOR_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"FACTORY_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"ROUTER1_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"ROUTER_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"V1_FACTORY_ADDRESS"),(0,r.kt)("li",{parentName:"ul"},"WETH_ADDRESS")),(0,r.kt)("h2",{id:"stage-2-check-if-the-deployed-contracts-work-correctly"},"Stage 2. Check if the deployed contracts work correctly"),(0,r.kt)("p",null,"Contracts health checking is performed in a real chain, not in a test environment, which is fully managed.  "),(0,r.kt)("p",null,"Unlike the test environment, in a really working chain, the range of test operations cannot be performed in full (for example, operations such as generating a block with a specified number of transactions, etc., are excluded). In a chain, all operations rely on real-time and a user checking the contracts cannot influence the block generation.  "),(0,r.kt)("p",null,"To test Neon Swap, we use the entire set of uniswap-v2-core tests available in Ethereum. The method of running these tests has been changed. Before running the tests, it is indicated that the deployment of contracts, calls to their methods, as well as testing takes place not in the test framework, but in the real blockchain.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For testing, we use an unmanaged environment. However, in uniswap-v2-core tests (in contracts), there are sections of program code that contain environment management. In these pieces, we were able to successfully replace the environment management to expectation for a reaction from a chain. That is, where the block is to be generated, a delay is set. Then an action is performed and the reaction of the contract is evaluated, namely, whether it meets the expectation or not. At the same time, we believe that the number of blocks produced may be different.  ")),(0,r.kt)("p",null,"The need to adapt tests is due to the fact that tests must issue correct results regardless of the run conditions.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changes for running the uniswap-v2-core test suite"),(0,r.kt)("br",{parentName:"p"}),"\n","The following changes were made to run the uniswap-v2-core test suite in Neon EVM:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased timeouts when expanding contracts."),(0,r.kt)("li",{parentName:"ul"},"Changed ChainId."),(0,r.kt)("li",{parentName:"ul"},"Replaced the rcp-request libraries, including the following: ",(0,r.kt)("inlineCode",{parentName:"li"},"Web3Provider")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MockProvider")," replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"JsonRpcProvider"),"."),(0,r.kt)("li",{parentName:"ul"},"Changed the test using the ",(0,r.kt)("inlineCode",{parentName:"li"},"mineBlock()")," method."),(0,r.kt)("li",{parentName:"ul"},"Increased the number of re-requests in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum-waffle")," library for receiving transaction receipts, including the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// In the file  \nuniswap-v2-core/node_modules/@ethereum-waffle/chai/dist/cjs/matchers/emit.js  \n// the line  \nconst derivedPromise = promise.then((tx) => contract.provider.getTransactionReceipt(tx.hash) ).then((receipt) => {  \n// was replaced with  \nconst derivedPromise = promise.then((tx) => contract.provider.waitForTransaction(tx.hash, 3) ).then((receipt) => {  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"gasLimit")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum-waffle")," library.")),(0,r.kt)("h2",{id:"stage-3-deploying-the-neon-swap-interface"},"Stage 3. Deploying the Neon Swap interface"),(0,r.kt)("p",null,"After we have managed to get the addresses of the contracts loaded into the Neon EVM, we can start deploying the Neon Swap interface. It is necessary to specify that we use a real blockchain and our contracts are located in this blockchain.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changes for the Neon Swap interface"),(0,r.kt)("br",{parentName:"p"}),"\n","For the Neon Swap interface to function successfully in Neon EVM, we were made the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new testnet to the adapted Neon Swap interface code. The name of the new network with the new chain-ID is registered in all places where it was used, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainId LOCAL")," to dependent libraries and sources."),(0,r.kt)("li",{parentName:"ul"},"ChainID, url was specified in the .env file."))),(0,r.kt)("li",{parentName:"ul"},"For the new network, a set of the loaded contracts was registered. In the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", the addresses of contracts in the sources and dependent libraries were replaced.")),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The next section contains an example of step-by-step actions for deploying and exchanging a pair of tokens via Neon EVM using Uniswap.")),(0,r.kt)("h2",{id:"example-exchanging-tokens-using-uniswap"},"Example. Exchanging tokens using Uniswap"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initial data"),(0,r.kt)("br",{parentName:"p"}),"\n","We have 2 types of tokens ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1"),". There are 10,000 tokens on the balance of each of them. The current rate of ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1")," tokens is 1:2, respectively.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),(0,r.kt)("br",{parentName:"p"}),"\n","We need to exchange 1000 ",(0,r.kt)("em",{parentName:"p"},"T_A1")," for ",(0,r.kt)("em",{parentName:"p"},"T_B1")," tokens."),(0,r.kt)("h4",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Connect Metamask to your proxy server (the proxy server should already be deployed in Neon EVM by this time).\nTo do this, open Metamask and in the settings for ",(0,r.kt)("inlineCode",{parentName:"p"},"Networks")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Neon RPC URL")," field, write the domain address ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap-interface.neonlabs.org:9090/solana"},"https://uniswap-interface.neonlabs.org:9090/solana"),". This address is required to connect to the proxy server."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(932).Z})," "),"  "),(0,r.kt)("h4",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"Create and deploy an ER20 standard contract containing the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," token.\nTo do this, open the Remix web application and load the ERC20 contract into it. Write the data of the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," token to this contract."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3574).Z})," "),"  "),(0,r.kt)("p",null,"After editing the text, compile the contract."),(0,r.kt)("h4",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"\u0421lick ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," in the Remix web application.",(0,r.kt)("br",{parentName:"p"}),"\n","Metamask will activate to determine the required signature and add it to the transaction. The transaction will be sent to the proxy server and then to Solana. After the transaction is successfully completed, the contract containing the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," token will be deployed."),(0,r.kt)("h4",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"Repeat actions of 2 and 3 steps to create and deploy a contract for the ",(0,r.kt)("em",{parentName:"p"},"T_B1")," token.",(0,r.kt)("br",{parentName:"p"}),"\n","If the operations for deploying contracts for ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1")," tokens are completed successfully, 2 addresses of these contracts will appear in the lower-left corner of the Metamask window. To the right of the address is an icon for copying this address."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8534).Z})," "),"  "),(0,r.kt)("h4",{id:"step-5"},"Step 5"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For an exchange operation, it is necessary to create a liquidity pool for a pair of tokens that will be exchanged. Certain amounts should be debited from the balances of these tokens. The exchange operation must be carried out within these amounts."),"  "),(0,r.kt)("p",null,"Open the main page of the ",(0,r.kt)("a",{parentName:"p",href:"https://swap-interface.neondemo.org"},"Uniswap interface")," (registration is required to enter this page). The address of Metamask is indicated in the upper right corner. There are 2 operations in the upper left menu:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Swap")," - token exchange operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pool")," - creates a pair of tokens between which an exchange operation will be performed.")),(0,r.kt)("p",null,"In the menu, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Pool")," and In the pop-up window, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create a pair"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7922).Z})," "),"  "),(0,r.kt)("h4",{id:"step-6"},"Step 6"),(0,r.kt)("p",null,"In the Remix window, you need to copy the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," token address. Then open the Uniswap window and write this address into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select a token")," field. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Import"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4469).Z})," "),"  "),(0,r.kt)("p",null,"Repeat this step to copy the ",(0,r.kt)("em",{parentName:"p"},"T_B1")," token address.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When creating a liquidity pair, a warning about the risk of selling a token back may appear.")),(0,r.kt)("h4",{id:"step-7"},"Step 7"),(0,r.kt)("p",null,"After setting a pair of tokens, a pop-up window should appear with the balances of these tokens.",(0,r.kt)("br",{parentName:"p"}),"\n","Specify the amount for which the liquidity pool is created. For example, let's assume that there are 10,000 tokens on the balances of both tokens. Also, let's create a pair of tokens with values 1000 and 2000 for ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1")," respectively. This means the exchange operation can be performed for amounts not exceeding 1000 and 2000 tokens for ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1"),", respectively. These amounts will be reserved for exchange. The exchange rate is 1:2."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5501).Z})," "),"  "),(0,r.kt)("p",null,"Creating a liquidity pair requires an approval operation for both tokens. The need for the operation is due to the ERC20 contract requirement.  "),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Approve_TA1")," and then confirm the operation in the Metamask pop-up window. Repeat this operation for another token.  "),(0,r.kt)("p",null,"After receiving a notification about the successful completion of both transactions, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Supply"),".  "),(0,r.kt)("h4",{id:"step-8"},"Step 8"),(0,r.kt)("p",null,"In the window that appears, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Pool & Supply"),". Confirm this operation in the Metamask window."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4478).Z})," "),"  "),(0,r.kt)("p",null,"After receiving a notification about the successful completion of the transaction, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Close")),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9780).Z})," "),"  "),(0,r.kt)("h4",{id:"step-9"},"Step 9"),(0,r.kt)("p",null,"Make sure the balances have been updated. The balances of the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1")," tokens should be reduced by 1000 and 2000 tokens, respectively. Now the token exchange operation can be performed.  "),(0,r.kt)("p",null,"In the upper left corner of the Uniswap window, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Swap")," operation."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9874).Z})," "),"  "),(0,r.kt)("h4",{id:"step-10"},"Step 10"),(0,r.kt)("p",null,"In the appearing Swap window, select the ",(0,r.kt)("em",{parentName:"p"},"T_A1")," and ",(0,r.kt)("em",{parentName:"p"},"T_B1")," tokens using ",(0,r.kt)("inlineCode",{parentName:"p"},"Select a token"),". Specify the exchange amount in ",(0,r.kt)("inlineCode",{parentName:"p"},"From"),". The amount for ",(0,r.kt)("em",{parentName:"p"},"T_B1")," will automatically appear in ",(0,r.kt)("inlineCode",{parentName:"p"},"To"),". This amount is calculated taking into account the exchange rate and fee. The exchange rate is calculated based on the amounts of tokens specified in the pair.  "),(0,r.kt)("p",null,"For example, let's specify the exchange amount of 1 token."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(61).Z})," "),"  "),(0,r.kt)("h4",{id:"step-11"},"Step 11"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Swap")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirm swap"),".",(0,r.kt)("br",{parentName:"p"}),"\n","After the transaction is completed successfully, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Close")," to end the session. The final Swap window should appear with updated token balances. The ",(0,r.kt)("em",{parentName:"p"},"T_A1")," balance will decrease by 1 token, and the ",(0,r.kt)("em",{parentName:"p"},"T_B1")," balance will increase by almost 2 tokens."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2368).Z})," "),"  "),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"More details"),(0,r.kt)("br",{parentName:"p"}),"\n","All changes we made for Porting the uniswap service to Neon EVM can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neonlabsorg/uniswap-v2-core"},"uniswap-v2-core repository"),".")))}h.isMDXComponent=!0},932:function(e,t,n){t.Z=n.p+"assets/images/neonswap-1-34abe0055c20e1e3638c4ce93bda10a3.png"},61:function(e,t,n){t.Z=n.p+"assets/images/neonswap-10-23abb8bff506f322adef0d468c13c7a0.png"},2368:function(e,t,n){t.Z=n.p+"assets/images/neonswap-11-6a2ca662b4812bc843c88f58b5a11333.png"},3574:function(e,t,n){t.Z=n.p+"assets/images/neonswap-2-659ee92e29d6512c3b7e4481b93369fe.png"},8534:function(e,t,n){t.Z=n.p+"assets/images/neonswap-3-548c9157c76300e5de0bd759259a8624.png"},7922:function(e,t,n){t.Z=n.p+"assets/images/neonswap-4-901e5f99b269ca848c2a98de3e8e4265.png"},4469:function(e,t,n){t.Z=n.p+"assets/images/neonswap-5-d1c95ed2db0c006d073d5483a1a4a6d3.png"},5501:function(e,t,n){t.Z=n.p+"assets/images/neonswap-6-1aa752403aa8851bd5164cefad1414c0.png"},4478:function(e,t,n){t.Z=n.p+"assets/images/neonswap-7-8e64b53c466d7d17972ce49bccdd5083.png"},9780:function(e,t,n){t.Z=n.p+"assets/images/neonswap-8-297cccd8affe7bee55f8869e5bb07f2e.png"},9874:function(e,t,n){t.Z=n.p+"assets/images/neonswap-9-5f0f7418fea85353d0fc0573c6956223.png"}}]);