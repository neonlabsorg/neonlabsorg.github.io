"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3828],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"Using Remix"},s=void 0,c={unversionedId:"developing/deploy_facilities/using_remix",id:"developing/deploy_facilities/using_remix",isDocsHomePage:!1,title:"Using Remix",description:"This tutorial will show you step by step how to use Remix and MetaMask to create and deploy a simple smart contract on Solana. Although the instructions use Solana's Testnet, they may also be applicable to Solana's Devnet or Solana's Mainnet Beta.",source:"@site/docs/developing/deploy_facilities/using_remix.md",sourceDirName:"developing/deploy_facilities",slug:"/developing/deploy_facilities/using_remix",permalink:"/docs/developing/deploy_facilities/using_remix",tags:[],version:"current",frontMatter:{title:"Using Remix"},sidebar:"tutorialSidebar",previous:{title:"Setting Up the Local Neon EVM Environment",permalink:"/docs/developing/dev_environment/solana_cluster/cluster_installation"},next:{title:"Using Truffle",permalink:"/docs/developing/deploy_facilities/using_truffle"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Steps to Complete",id:"steps-to-complete",children:[{value:"Step 1. Set the Remix environment",id:"step-1-set-the-remix-environment",children:[]},{value:"Step 2. Create a simple smart contract in Remix",id:"step-2-create-a-simple-smart-contract-in-remix",children:[]},{value:"Step 3. Compile a smart contract",id:"step-3-compile-a-smart-contract",children:[]},{value:"Step 4. Connect Remix to MetaMask",id:"step-4-connect-remix-to-metamask",children:[]},{value:"Step 5. Deploy a smart contract in Solana Testnet",id:"step-5-deploy-a-smart-contract-in-solana-testnet",children:[]}]}],m={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This tutorial will show you step by step how to use ",(0,o.kt)("a",{parentName:"em",href:"/docs/about/terminology#remix"},"Remix")," and ",(0,o.kt)("a",{parentName:"em",href:"/docs/about/terminology#metamask"},"MetaMask")," to create and deploy a simple smart contract on Solana. Although the instructions use Solana's ",(0,o.kt)("a",{parentName:"em",href:"https://docs.solana.com/clusters#testnet"},"Testnet"),", they may also be applicable to Solana's ",(0,o.kt)("a",{parentName:"em",href:"https://docs.solana.com/clusters#devnet"},"Devnet")," or Solana's ",(0,o.kt)("a",{parentName:"em",href:"https://docs.solana.com/clusters#mainnet-beta"},"Mainnet Beta"),".")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Before you start, make sure of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MetaMask is installed on your device.  "),(0,o.kt)("li",{parentName:"ul"},"You have provided online access to remix.ethereum.org to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Remix - Ethereum IDE")," open source web application."),(0,o.kt)("li",{parentName:"ul"},"MetaMask is configured for both proxy and Neon EVM. (Regardless of how proxy and Neon EVM run, MetaMask wallet must always be configured for them.)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The network configuration:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/clusters"},"Solana cluster")," is accessed via a proxy."),(0,o.kt)("li",{parentName:"ul"},"Solana works in test mode and the proxy interacts with it through Neon EVM.")),(0,o.kt)("h2",{id:"steps-to-complete"},"Steps to Complete"),(0,o.kt)("h3",{id:"step-1-set-the-remix-environment"},"Step 1. Set the Remix environment"),(0,o.kt)("p",null,"For Remix to be used to load a smart contract into Neon EVM, Remix must be connected to your MetaMask wallet and run in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," environment.",(0,o.kt)("br",{parentName:"p"}),"\n","Go to ",(0,o.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"http://remix.ethereum.org/")," and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Remix - Ethereum IDE")," web application. In the left side menu, select ",(0,o.kt)("inlineCode",{parentName:"p"},"File explorers"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"FILE EXPLOPERS")," menu will be active (Fig. 1).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9387).Z})),(0,o.kt)("p",null,"Fig. 1 \u2014 Connecting to localhost")),(0,o.kt)("h3",{id:"step-2-create-a-simple-smart-contract-in-remix"},"Step 2. Create a simple smart contract in Remix"),(0,o.kt)("p",null,"Click on the icon ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New File")," and type the file name in the field that appears below it. For example, helloWorld.sol",(0,o.kt)("br",{parentName:"p"}),"\n","For now, it is an empty file. To fill it with content, click on the created file name and type the text on the right side of the explorer (or copy your pre-prepared text there) (Fig. 2).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4955).Z})),(0,o.kt)("p",null,"Fig. 2 \u2014 Loading the helloWorld smart contract")),(0,o.kt)("h3",{id:"step-3-compile-a-smart-contract"},"Step 3. Compile a smart contract"),(0,o.kt)("p",null,"In the left side menu, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Solidity compiler"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"SOLIDITY COMPILER")," menu will be active.",(0,o.kt)("br",{parentName:"p"}),"\n","Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Compile helloWorld.sol")," button to compile the loaded smart contract helloWorld (Fig. 3).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5395).Z})),(0,o.kt)("p",null,"Fig. 3 \u2014 Compiling helloWorld smart contract")),(0,o.kt)("p",null,"If the compilation is successful, a green icon will appear near the ",(0,o.kt)("inlineCode",{parentName:"p"},"Solidity compiler")," button.",(0,o.kt)("br",{parentName:"p"}),"\n","You can also get detailed information about the compilation process by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Compilation Details")," (Fig. 4).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6100).Z})),(0,o.kt)("p",null,"Fig. 4 \u2014 Compilation details")),(0,o.kt)("h3",{id:"step-4-connect-remix-to-metamask"},"Step 4. Connect Remix to MetaMask"),(0,o.kt)("p",null,"Interaction with Neon EVM is carried out through MetaMask. Choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," environment to connect Remix with an active account in Metamask (Fig. 5).  "),(0,o.kt)("div",{class:"neon-img-width-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5921).Z})),(0,o.kt)("p",null,"Fig. 5 \u2014 Injected Web3 connects Remix with an active account in Metamask")),(0,o.kt)("p",null,"The MetaMask window should appear. It should display a list of available accounts. (In our case, only one account will be displayed.) Choose this account and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," (Fig. 6).  "),(0,o.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1037).Z})),(0,o.kt)("p",null,"Fig. 6 \u2014 Selecting an account to interact with Remix")),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," to connect to this account (Fig. 7)."),(0,o.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8591).Z})),(0,o.kt)("p",null,"Fig. 7")),(0,o.kt)("h3",{id:"step-5-deploy-a-smart-contract-in-solana-testnet"},"Step 5. Deploy a smart contract in Solana Testnet"),(0,o.kt)("p",null,"In the left side menu, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy & run transactions"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPLOY & RUN TRANSACTIONS")," menu will become active.  "),(0,o.kt)("p",null,"In our case there is only one smart contract to deploy, therefore it is automatically selected from the dropdown and Remix will automatically generate a transaction.  "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," field will display the amount in the wallet account. This data is taken from MetaMask.  "),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," (Fig. 8).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1827).Z})),(0,o.kt)("p",null,"Fig. 8 \u2014 Deploying the smart contract")),(0,o.kt)("p",null,"MetaMask will send a notification in the form of a pop-up window to confirm the transaction. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm")," (Fig. 9).  "),(0,o.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6736).Z})),(0,o.kt)("p",null,"Fig. 9 \u2014 MetaMask notification")),(0,o.kt)("p",null,"Once the transaction is confirmed, you can check it in the messages on the bottom right (Fig. 10).  "),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2783).Z})),(0,o.kt)("p",null,"Fig. 10")),(0,o.kt)("p",null,"After successfully deploying the smart contract, you will see a message containing the name and address of the smart contract where it was uploaded (Fig. 11).  "),(0,o.kt)("div",{class:"neon-img-width-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(17).Z})),(0,o.kt)("p",null,"Fig. 11 \u2014 Deployed the smart contract data")),(0,o.kt)("p",null,"If all the steps have been completed successfully, a green icon will appear near the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy & run transactions")," button (Fig. 12)."),(0,o.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(789).Z})),(0,o.kt)("p",null,"Fig. 12 \u2014 Final view of the Remix panel")),(0,o.kt)("p",null,'Congratulations! You can now call methods of the helloWorld smart contract deployed on the Solana network. (Fig. 13 shows the result of your smart contract \u2014 the text string "Hello World!".)  '),(0,o.kt)("div",{class:"neon-img-width-300",style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6687).Z})),(0,o.kt)("p",null,"Fig. 13 \u2014 Calling the smart contract methods")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Useful links"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/tutorials/deploying-your-first-smart-contract/"},"https://ethereum.org/en/developers/tutorials/deploying-your-first-smart-contract/"))))}u.isMDXComponent=!0},9387:function(e,t,n){t.Z=n.p+"assets/images/remix-1-45c7885b2e6829a326743de2ba5c58d6.png"},2783:function(e,t){t.Z="data:image/png;base64,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wlbHWwSVvq20kAwt25HKXHaBODpWR6r9A4pEYJKnpCMYtaWuaU2xp2CfHBti7Q4RLwduA5eDWuW8w2M7tEAn5xl10LPSSiNvK29H6uOjgyAniHx4tzRYzQftZR0nMmYaFFreiZfsqnzTttVogrLIyVss1nvi5lodRqVbyRNHB1U7RXbJnkGQtQtT7LOm/Ilb8Fx7XEzOyP1OvZlgZCuUDIpEWoe6yYiIXI+3wd8K8u4fOaB3SipCGiZbmez9NX8bY5UFy2jakAGuU48jICKahGk3BuiuVLBXuYtpBx/udvvZLQsROMk7txj83H4iEM3DIQY/RDTl2AJEREREboctQEREROR2GAARERGR22EARERERG6HARARERG5HQZARERE5HYYABEREZHbYQBEREREbocBEBEREbkdBkBERETkdhgAERERkdthAERERERuhwEQERERuR0GQEREROR2GAARERGR22EARERERG6HARARERG5HQZARERE5HYYABEREZHbYQBEREREbocBEBEREbkdBkBERETkdhgAERERkdthAERERERuhwEQERERuRng/wMlgIh213FBcgAAAABJRU5ErkJggg=="},17:function(e,t,n){t.Z=n.p+"assets/images/remix-11-f0cffd9668e4af4b6b016c5817ee1f07.png"},789:function(e,t,n){t.Z=n.p+"assets/images/remix-12-36ae417f2e17944a8f09abdd811ec79f.png"},6687:function(e,t,n){t.Z=n.p+"assets/images/remix-13-beab490e514e30c4dbdba1dacf5d7016.png"},4955:function(e,t,n){t.Z=n.p+"assets/images/remix-2-d928b9e3bb6904fcd43a878df27a3ecd.png"},5395:function(e,t,n){t.Z=n.p+"assets/images/remix-3-22c30cfb6e2e0c7e950cb371d01662fd.png"},6100:function(e,t,n){t.Z=n.p+"assets/images/remix-4-3cd9f44b555bbb5777928c5a56a4a074.png"},5921:function(e,t,n){t.Z=n.p+"assets/images/remix-5-8db1f35d76bcd497d9a8e14ac11020a7.png"},1037:function(e,t,n){t.Z=n.p+"assets/images/remix-6-00c185f94b15aff0e4bcbcb19be9a65b.png"},8591:function(e,t,n){t.Z=n.p+"assets/images/remix-7-89a9b101627dfe8762237002b7e2752d.png"},1827:function(e,t,n){t.Z=n.p+"assets/images/remix-8-7ad7d62adabf9ca1479f968987db7de9.png"},6736:function(e,t,n){t.Z=n.p+"assets/images/remix-9-1ec2a0d4c8291c7d07bbdbee308eb45c.png"}}]);