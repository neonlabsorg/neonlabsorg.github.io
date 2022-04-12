"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2083],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Ethereum and Solana Capabilities in a Single Solution"},s=void 0,c={unversionedId:"architecture/eth_sol_solution",id:"architecture/eth_sol_solution",title:"Ethereum and Solana Capabilities in a Single Solution",description:"This section describes a unique solution that allows Ethereum users to use the key features of Solana and vice versa.",source:"@site/docs/architecture/eth_sol_solution.md",sourceDirName:"architecture",slug:"/architecture/eth_sol_solution",permalink:"/docs/architecture/eth_sol_solution",tags:[],version:"current",frontMatter:{title:"Ethereum and Solana Capabilities in a Single Solution"},sidebar:"tutorialSidebar",previous:{title:"Neon EVM Architecture Overview",permalink:"/docs/architecture/neon_evm_arch"},next:{title:"Ethereum JSON-RPC Compatibility",permalink:"/docs/architecture/evm_compatibility"}},u={},h=[{value:"Terminology",id:"terminology",level:3},{value:"Key Capabilities of Ethereum",id:"key-capabilities-of-ethereum",level:2},{value:"Key Capabilities of Solana",id:"key-capabilities-of-solana",level:2},{value:"The Goal",id:"the-goal",level:2},{value:"The Proposed Solution",id:"the-proposed-solution",level:2},{value:"The Solution in Detail",id:"the-solution-in-detail",level:2},{value:"Berkeley Packet Filter (BPF)",id:"berkeley-packet-filter-bpf",level:3},{value:"Neon Web3 Proxy",id:"neon-web3-proxy",level:3},{value:"Web3 API",id:"web3-api",level:3},{value:"Neon EVM",id:"neon-evm",level:3},{value:"Account Data Storage",id:"account-data-storage",level:3},{value:"How Neon Works",id:"how-neon-works",level:2},{value:"Benefits of the Neon Solution",id:"benefits-of-the-neon-solution",level:2}],d={toc:h};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section describes a unique solution that allows Ethereum users to use the key features of Solana and vice versa.")),(0,r.kt)("h3",{id:"terminology"},"Terminology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BPF")," - the Berkeley Packet Filter virtual machine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contract")," - smart contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dApp")," - a decentralized application (plural: dApps)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"N-trx")," - a neon transaction formed according to the Ethereum network and executed inside Neon EVM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EVM")," - the Ethereum Virtual Machine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy")," - Neon Web3 Proxy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S-trx")," - a transaction formed according to the rules of the Solana network")),(0,r.kt)("h2",{id:"key-capabilities-of-ethereum"},"Key Capabilities of Ethereum"),(0,r.kt)("p",null,"Ethereum\u2019s core innovation, the EVM, is a Turing-complete software that runs on the Ethereum network. The EVM allows developers to build and deploy dApps, which makes the process of creating blockchain applications much easier and more efficient. Contracts are treated as autonomous scripts or stateful dApps that are stored in the Ethereum blockchain for execution by the EVM at a later stage."),(0,r.kt)("p",null,"Ethereum has a large number of developer tools available in its ecosystem, including ",(0,r.kt)("em",{parentName:"p"},"MetaMask"),", ",(0,r.kt)("em",{parentName:"p"},"Remix"),", and ",(0,r.kt)("em",{parentName:"p"},"Truffle"),". The toolkit allows users to write dApps in Solidity, which is the standard language for developing contracts."),(0,r.kt)("p",null,"Ethereum is the flagship of the crypto world. It runs numerous distributed applications that have proven themselves in the market and are in demand all over the world."),(0,r.kt)("h2",{id:"key-capabilities-of-solana"},"Key Capabilities of Solana"),(0,r.kt)("p",null,"Solana is an exceptionally fast, secure, and relatively inexpensive blockchain network.",(0,r.kt)("br",{parentName:"p"}),"\n","The Solana blockchain provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High performance, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Short block processing time"),(0,r.kt)("li",{parentName:"ul"},"Processing many transactions per second due to the ability to execute transactions in parallel."))),(0,r.kt)("li",{parentName:"ul"},"Low transaction fees."),(0,r.kt)("li",{parentName:"ul"},"The ability to increase the number of nodes in the network without reducing the performance of the network as a whole."),(0,r.kt)("li",{parentName:"ul"},"The capability to build in coding languages ",(0,r.kt)("em",{parentName:"li"},"C"),", ",(0,r.kt)("em",{parentName:"li"},"C++"),", and ",(0,r.kt)("em",{parentName:"li"},"Rust"),".")),(0,r.kt)("h2",{id:"the-goal"},"The Goal"),(0,r.kt)("p",null,"The goal is to find a solution that combined the best of both Ethereum and Solana. This solution would allow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solana users to use unique Ethereum toolkits to write dApps in Solidity."),(0,r.kt)("li",{parentName:"ul"},"Ethereum dApps to be deployed on Solana, thereby attracting a huge audience of Ethereum users to the Solana blockchain."),(0,r.kt)("li",{parentName:"ul"},"Ethereum users to significantly increase the speed of transactions and reduce the fee charged for their execution by using Solana.")),(0,r.kt)("h2",{id:"the-proposed-solution"},"The Proposed Solution"),(0,r.kt)("p",null,"To achieve our goal, the following solution was proposed and implemented by the Neon Labs development team:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The EVM was integrated with Solana and named Neon EVM (an emulator implemented using Rust)."),(0,r.kt)("li",{parentName:"ul"},"The Neon EVM operates inside Solana providing parallel transaction processing and a low transaction fee."),(0,r.kt)("li",{parentName:"ul"},"The Neon Web3 Proxy was created to mediate interactions between the Ethereum user (account) and Neon EVM. The main function of the proxy is to provide an API for external clients.")),(0,r.kt)("h2",{id:"the-solution-in-detail"},"The Solution in Detail"),(0,r.kt)("p",null,"The block diagram of the solution is shown in Fig. 1."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3239).Z,width:"476",height:"683"})),(0,r.kt)("p",null,"Fig. 1")),(0,r.kt)("h3",{id:"berkeley-packet-filter-bpf"},"Berkeley Packet Filter (BPF)"),(0,r.kt)("p",null,"The BPF virtual machine is installed in Solana, allowing developers to embed other virtual machines inside Solana.  "),(0,r.kt)("p",null,"Using BPF capabilities, a contract called Neon EVM is created in Solana, and the EVM was loaded inside it.  "),(0,r.kt)("p",null,"Because Solana has a contract update mechanism, the Neon EVM contract can also be updated independently from updates to the Solana node itself. This allows developers to update EVM versions without updating all the blockchain nodes.  "),(0,r.kt)("h3",{id:"neon-web3-proxy"},"Neon Web3 Proxy"),(0,r.kt)("p",null,"A user can form transactions under an Ethereum account and sign them with a public key generated in Ethereum. Transactions formed according to Ethereum rules are sent to the input of the Proxy component. This component converts N-trxs into transactions under Solana rules.  "),(0,r.kt)("p",null,"The size of N-trx can exceed that of S-trx. Also, the amount of resources that an S-trx can spend is limited. Converting a transaction in a one-to-one format is difficult due to the potential lack of resources. Therefore, it was decided to generate multiple S-trxs for one N-trx. Each transaction generated is signed with a proxy key. The proxy sends the generated batch of transactions to Solana.  "),(0,r.kt)("h3",{id:"web3-api"},"Web3 API"),(0,r.kt)("p",null,"The proxy provides the full Web3 API to interact with external clients. In Ethereum, some contracts work at the blockchain level, and there is also an API that is supported by an Ethereum node. Clients that are created for Ethereum contracts support standard interfaces. For a client (such as MetaMask or Remix) to work in a web browser, it must work via the Web3 API. With Neon EVM, Ethereum dApps can be deployed on Solana without any edits to the source code or recompilation: dApps look and function exactly the same.  "),(0,r.kt)("p",null,"Clients will work on a different blockchain if they are provided the same interface. You can do this by changing the address for where these clients need to go. Ethereum contracts and clients do not need to be rewritten to work in Solana; you just need to register the proxy address. Any client can run a proxy to deploy a contract inside Solana. The interface that the clients interact with will be the same as for dApps running on Ethereum."),(0,r.kt)("h3",{id:"neon-evm"},"Neon EVM"),(0,r.kt)("p",null,"The Neon EVM runs inside BPF, which is run by Solana. The Neon EVM is a Solana contract, so it recognizes the transaction format from the received batch. Neon EVM extracts data from each transaction, and therefore it can retrieve all the original user information that was placed in the transaction.  "),(0,r.kt)("p",null,"The Neon EVM also validates the signature that is in the transaction. If the signature is authentic, the Neon EVM takes the contract code that the transaction is addressed to and starts to execute it. As soon as the contract code has been executed successfully, Neon EVM records a new state.  "),(0,r.kt)("p",null,"For example, if the transaction is a token transfer, the contract code sends tokens from one account to another. The Neon EVM simply records this new state.  "),(0,r.kt)("p",null,"The user can also form a transaction to load a contract inside Neon EVM. In this case, the contract code will be written for Ethereum. A bytecode of this contract code will be loaded inside the Neon EVM. The contract itself and its data will be stored inside Solana.  "),(0,r.kt)("h3",{id:"account-data-storage"},"Account Data Storage"),(0,r.kt)("p",null,"Solana stores account data. The Neon EVM has access to this storage, and uses the account data. After an account is registered in Solana, the account data is placed in this storage. Ethereum accounts are also stored here, but in the Solana representation. For each Ethereum address there is a corresponding account in the Solana representation. A contract code is placed in a corresponding account of this storage.  "),(0,r.kt)("p",null,"Neon EVM interacts with a set of data that is stored on Solana's accounts. The Neon EVM can take a contract code from there using the corresponding account address to validate a transaction. The Neon EVM contains a virtual machine inside it that runs according to Ethereum rules.  "),(0,r.kt)("h2",{id:"how-neon-works"},"How Neon Works"),(0,r.kt)("p",null,"A user calls a client that generates a transaction and sends it to the proxy, which is running the Neon EVM emulator inside it. (Fig. 2). The transaction is formed in accordance with the Ethereum rules, and contains mandatory fields, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nonce")," - the number of transactions sent from the current address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Signature")," - generated in accordance with the Ethereum rules"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gas price")," - the fee the sender pays per unit of gas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gas limit")," - maximum amount of gas units that can be consumed by the transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value")," - amount of coins to transfer from sender to a recipient"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recipient")," - address of the recipient")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(886).Z,width:"510",height:"818"})),(0,r.kt)("p",null,"Fig. 2")),(0,r.kt)("p",null,"To perform this transaction, the Neon EVM emulator makes a request to Solana to get state data. The proxy requests a blockchain state from Solana and makes a test launch of N-trx using the Solana state. On the basis of the data received, Proxy forms the new transaction according to Solana's rules. The transaction generated for Solana will contain the packaged N-trx, as well as the account data required to complete the transaction, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Payer. (The account that pays for the transaction.)"),(0,r.kt)("li",{parentName:"ul"},"Other accounts involved in the execution of this transaction.  ")),(0,r.kt)("p",null,"Next, the transaction is forwarded inside Solana, where participants of the transaction are determined according to the account data. The data added includes details about people who initiate and take part in processing the transaction. The operator of the proxy is specified as the payer. The payer will be rewarded for completing the transaction.  "),(0,r.kt)("p",null,"Next, the transaction is transferred to Neon EVM, where its signature is checked according to Ethereum rules. If the signature is valid, the transaction will be transferred to the Solana blockchain for execution. Since testing of N-trx is carried out, it is possible to provide Solana with all the necessary information to run the execution of the N-trx in parallel.  "),(0,r.kt)("h2",{id:"benefits-of-the-neon-solution"},"Benefits of the Neon Solution"),(0,r.kt)("p",null,"Neon's solution offers the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No changes or additional resources are required to implement dApps on Solana."),(0,r.kt)("li",{parentName:"ul"},"No need to rewrite clients for all existing dApps since the Ethereum node interface remains unchanged, and therefore clients can also run on the Solana node without changes."),(0,r.kt)("li",{parentName:"ul"},"No need to rewrite contracts for existing dApps."),(0,r.kt)("li",{parentName:"ul"},"Solana developers are given the opportunity to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use a unique toolkit created for Ethereum."),(0,r.kt)("li",{parentName:"ul"},"Create and deploy their contracts on the Solana network."))),(0,r.kt)("li",{parentName:"ul"},"Unlike Ethereum, Neon EVM can be updated at any time, which means that new functionality can be added at any time and code updates can take place simply by uploading them as a new smart contract.")))}p.isMDXComponent=!0},3239:function(e,t,n){t.Z=n.p+"assets/images/neon-evm-1-93236da2993f1f61c8dcb07e6cb5a822.png"},886:function(e,t,n){t.Z=n.p+"assets/images/neon-evm-2-d2b7610f890c288b8cd2a40164000932.png"}}]);