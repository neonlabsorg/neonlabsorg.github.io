"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1629],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},542:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Neon EVM Architecture Overview"},c=void 0,l={unversionedId:"architecture/neon_evm_arch",id:"architecture/neon_evm_arch",isDocsHomePage:!1,title:"Neon EVM Architecture Overview",description:"This section describes the architectural solutions built into Neon EVM that enable fast transaction processing for Ethereum users. It also describes how tokens pass from users to final consumers.",source:"@site/docs/architecture/neon_evm_arch.md",sourceDirName:"architecture",slug:"/architecture/neon_evm_arch",permalink:"/docs/architecture/neon_evm_arch",tags:[],version:"current",frontMatter:{title:"Neon EVM Architecture Overview"},sidebar:"tutorialSidebar",previous:{title:"Neon Proxy RPC Endpoints",permalink:"/docs/clusters/neon_proxy_rpc_endpoints"},next:{title:"Ethereum and Solana Capabilities in a Single Solution",permalink:"/docs/architecture/eth_sol_solution"}},h=[{value:"General",id:"general",children:[]},{value:"Solution",id:"solution",children:[{value:"Neon EVM User (user)",id:"neon-evm-user-user",children:[]},{value:"Solana Transaction (S-trx)",id:"solana-transaction-s-trx",children:[]},{value:"Neon Transaction (N-trx)",id:"neon-transaction-n-trx",children:[]},{value:"Neon EVM Client (client)",id:"neon-evm-client-client",children:[]},{value:"Neon EVM Operator (operator)",id:"neon-evm-operator-operator",children:[]},{value:"Neon Web3 Proxy (proxy)",id:"neon-web3-proxy-proxy",children:[]},{value:"Neon EVM",id:"neon-evm",children:[]},{value:"Neon EVM Governance Participant",id:"neon-evm-governance-participant",children:[]},{value:"ERC-20 TKN",id:"erc-20-tkn",children:[]},{value:"SPL Token",id:"spl-token",children:[]},{value:"Solana",id:"solana",children:[]},{value:"ERC-20 Wrapper",id:"erc-20-wrapper",children:[]}]},{value:"Using Economics to Motivate Operators",id:"using-economics-to-motivate-operators",children:[{value:"How can operators find out about the transactions that are ready to be continued?",id:"how-can-operators-find-out-about-the-transactions-that-are-ready-to-be-continued",children:[]},{value:"Special Cases",id:"special-cases",children:[]}]},{value:"Transferring Tokens Inside Solana",id:"transferring-tokens-inside-solana",children:[{value:"Payment Queues",id:"payment-queues",children:[]}]},{value:"Transferring Tokens Between Solana and Ethereum",id:"transferring-tokens-between-solana-and-ethereum",children:[]}],p={toc:h};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section describes the architectural solutions built into Neon EVM that enable fast transaction processing for Ethereum users. It also describes how tokens pass from users to final consumers.")),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("p",null,"For a user's transaction to be executed quickly, it must be finalized quickly. Therefore, the main task for Neon EVM developers is to ensure the prompt finalization of a transaction. Also, solutions should be developed to ensure the creation of liquid tokens by Neon EVM users, and their circulation within Solana."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"The architectural solution based on Neon EVM is presented in Fig. 1."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(213).Z})))," ",(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,"Fig. 1")),(0,r.kt)("p",null,"The components of the architecture are:"),(0,r.kt)("h3",{id:"neon-evm-user-user"},"Neon EVM User (user)"),(0,r.kt)("p",null,"Any user who has an account in Neon EVM with a balance in ETH, ERC-20, or ERC-721 tokens.  "),(0,r.kt)("h3",{id:"solana-transaction-s-trx"},"Solana Transaction (S-trx)"),(0,r.kt)("p",null,"A transaction formed according to Solana network rules with a signature produced by Solana rules.  "),(0,r.kt)("h3",{id:"neon-transaction-n-trx"},"Neon Transaction (N-trx)"),(0,r.kt)("p",null,"A transaction formed according to Ethereum rules with a signature produced by Ethereum rules.  "),(0,r.kt)("h3",{id:"neon-evm-client-client"},"Neon EVM Client (client)"),(0,r.kt)("p",null,"An application that has an EVM (Solidity, Vyper, etc.) bytecode contract loaded into Neon EVM. The application generates a transaction N-trx according to Ethereum rules and sends it to a proxy. Before sending N-trx, the client transfers the required funds to the Solana deposit to cover the costs of an operator.  "),(0,r.kt)("h3",{id:"neon-evm-operator-operator"},"Neon EVM Operator (operator)"),(0,r.kt)("p",null,"A role performed by a Solana account using a software tool. Within Neon EVM, an operator is provided with software in the form of a proxy in order to fulfill certain functions. The operator can deploy one or more proxies. The operator can also configure one proxy for multiple operators, as well as run several proxies with different settings.  "),(0,r.kt)("h3",{id:"neon-web3-proxy-proxy"},"Neon Web3 Proxy (proxy)"),(0,r.kt)("p",null,"The software that an operator uses to do their job. Although the proxy is not a mandatory component in the Neon EVM architecture (for example, proxy logic can be implemented inside a client's browser), implementing it as a separate component can speed up transaction processing. In the Neon EVM Mainnet, the proxy must provide multithreading to work in parallel.  "),(0,r.kt)("p",null,"The proxy contains an EVM emulator that pre-tests the execution of the transaction. This testing determines the number of coins required on the operator's balance, as well as the current exchange rate of SOL to ETH. Each operator configures their proxy server with this course in mind. This relates to economic motivation.  "),(0,r.kt)("p",null,"A proxy converts N-trx into transactions under Solana rules. N-trx is signed by a user, while S-trxs are signed by an operator. The Neon transaction text is loaded from the received S-trxs into a separate account that is created in Solana. Neon EVM receives a command to execute the transaction located at the address of this account.  "),(0,r.kt)("p",null,"More details on how the proxy converts a N-trx to multiple S-trxs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://neonlabsorg.medium.com/neon-web3-proxy-facilitating-seamless-transactions-on-neon-evm-b33c2041aa08"},"here"),"."),(0,r.kt)("p",null,"Below is a list of the main Neon Web3 Proxy features that are implemented in the Neon EVM Testnet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receiving requests over Web3 API protocol"),(0,r.kt)("li",{parentName:"ul"},"Shaping responses using Web3 API protocol"),(0,r.kt)("li",{parentName:"ul"},"Packaging a Neon transaction into a Solana transaction. The Solana transaction contains the following information:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Neon EVM operator account from which the given amount in SOL tokens should be withdrawn for the execution of the transaction"),(0,r.kt)("li",{parentName:"ul"},"The Neon EVM operator account where a payment is sent for the job done in tokens specified by the user"),(0,r.kt)("li",{parentName:"ul"},"The Neon EVM account to deposit funds to be spent for iterative execution of a transaction"),(0,r.kt)("li",{parentName:"ul"},"A list of accounts that are participating in the execution of Neon transactions (formed according to Solana rules)"),(0,r.kt)("li",{parentName:"ul"},"The number of steps per iteration of a Neon transaction"))),(0,r.kt)("li",{parentName:"ul"},"Executing read-only Solidity methods of contracts"),(0,r.kt)("li",{parentName:"ul"},"Providing a method for linking accounts from SPL token contracts to ERC-20: an SPL wrapper to access SPL token contracts via Neon transactions"),(0,r.kt)("li",{parentName:"ul"},"Giving users a method to switch a token to be used for gas payment"),(0,r.kt)("li",{parentName:"ul"},"Giving users a method to execute a Neon transaction without a test run.")),(0,r.kt)("h3",{id:"neon-evm"},"Neon EVM"),(0,r.kt)("p",null,"An Ethereum Virtual Machine compiled into the Berkeley Packet Filter bytecode of a virtual machine running on Solana. Neon EVM is configured using a multisig EVM account that resembles a decentralized Neon EVM governance. Participants of the multisig EVM account (actors) can change the Neon EVM code and set up Neon EVM parameters.  "),(0,r.kt)("h3",{id:"neon-evm-governance-participant"},"Neon EVM Governance Participant"),(0,r.kt)("p",null,"Governance participants perform the following functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating contracts"),(0,r.kt)("li",{parentName:"ul"},"Adding functionality"),(0,r.kt)("li",{parentName:"ul"},"Eliminating shortcomings in the program code"),(0,r.kt)("li",{parentName:"ul"},"Changing settings parameters such as the fee value, opening a new balance, the Mn value and the maximum number of iterations.  ")),(0,r.kt)("h3",{id:"erc-20-tkn"},"ERC-20 TKN"),(0,r.kt)("p",null,"This is a contract based on the ERC-20 standard token. An ERC-20 token shows user balances for a certain ticker. After an account (user-acc) selects a type of token, this contract becomes blocked.  "),(0,r.kt)("h3",{id:"spl-token"},"SPL Token"),(0,r.kt)("p",null,"Solana Program library (SPL) token is a contract that contains a system register of tokens that are in the system, along with the Solana balances of their users. The contract implements the ERC-20 interface; this is a description of the basic set of functions that the contract must support. Transferring funds is possible only with a contract that supports this operation.  "),(0,r.kt)("h3",{id:"solana"},"Solana"),(0,r.kt)("p",null,"This is a blockchain containing a stream of blocks. It stores a block-log of completed operations. It also contains the current Solana state, where the results of transactions, accounts, and public keys are stored. There are also two balances: one for ETH tokens, and another for the token that the transaction will be paid in.  "),(0,r.kt)("h3",{id:"erc-20-wrapper"},"ERC-20 Wrapper"),(0,r.kt)("p",null,"This is a separate contract developed using the ERC-20 standard. It contains maps with user balances. Although this contract is hosted inside Neon EVM, it is completely standalone and independent.  "),(0,r.kt)("p",null,"A user can create a contract supporting the ERC-20 standard for a specific token and generate the required number of tokens (coins). These tokens will only be liquid within Neon EVM. For these coins to be liquid in Solana, the SPL Token and ERC-20 TKN contracts must be interoperable. This function is performed by the ERC-20 Wrapper contract."),(0,r.kt)("h2",{id:"using-economics-to-motivate-operators"},"Using Economics to Motivate Operators"),(0,r.kt)("p",null,"Conventionally, the processing of a transaction is divided into several steps (iterations). The number of steps may vary depending on the number of operations required to complete the transaction. The next step starts only after the previous step has been successfully completed (Fig. 2)."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9616).Z})))," ",(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,"Fig. 2")),(0,r.kt)("p",null,'A transaction is considered to be successfully completed if the "Final" step finishes. The execution of the transaction should not go beyond the allotted number of Mn blocks. In other words, the operations performed at all steps must be completed within the Mn period or the transaction is considered incomplete.  '),(0,r.kt)("p",null,"A user who forms a transaction will indicate an operator (proxy) within it. That operator will be responsible for the execution of the transaction. Each operator has a deposit account in Neon EVM. These accounts belong to Neon EVM, so no one can withdraw funds from the deposit account until the finalization step has been completed. Before processing a transaction, Neon EVM debits the funds from the operator account (op-acc) and transfers them to the operator's deposit account (dep-acc).  "),(0,r.kt)("p",null,'If for any reason an operation is not performed at a given step (such as lack of funds), the next operator starts processing the transaction from the current step. This operator does not deposit any funds for the remaining steps. If they also do not complete all of the remaining steps, this process is passed to the next operator. At the "Final" step, a transaction is created that withdraws funds from the deposit in full and credits them to the operator who completed this last step. This method of implementation motivates not only the client, but also any operator involved in processing the transaction to have a vested interest in making sure that the transaction is successfully completed.  '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Step 1"),": Transferring funds to a deposit.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Step 2"),": Blocking an account.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Additional Steps"),": Other actions.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Final Step"),": The deposit is returned to the operator's account (op acc). The results of the transaction have already been reflected in the Solana state.  "),(0,r.kt)("p",null,"In the Neon EVM settings, there is a limit on the number of blocks (Mn) that can be processed during a transaction. By default, the Mn value is 1. That is, a transaction must be completed during the processing of one block. There is also a limit on the number of steps (iterations) that can be taken to complete a transaction. The Mn value and the number of iterations are set by a multisig account. The number of steps is also limited by a user\u2019s fund balance.  "),(0,r.kt)("p",null,'At every step, the "Continue" operation checks whether or not this is the last step in the transaction execution.'),(0,r.kt)("h3",{id:"how-can-operators-find-out-about-the-transactions-that-are-ready-to-be-continued"},"How can operators find out about the transactions that are ready to be continued?"),(0,r.kt)("p",null,"Solana's entire history is stored in the Solana state. Using this history, the operator can obtain the necessary information about all transactions related to Neon EVM. The proxy can track incomplete transactions in this history: transactions that can be continued by another operator. The operator who wishes to continue executing the unfinished transaction must first re-sign it with their key. If the number of blocks does not exceed Mn since processing was initiated by the previous operator, the signature of the initial operator is kept. If the number of blocks exceeds Mn, the transaction can be re-signed by any operator."),(0,r.kt)("h3",{id:"special-cases"},"Special Cases"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Case 1"),": One of the initial and mandatory operations is blocking an account. That is, the execution of other transactions is blocked for an amount of time."),(0,r.kt)("p",null,"If an operator is interested in reducing this amount of time, they must complete a transaction in Mn blocks, otherwise another operator will perform this transaction."),(0,r.kt)("p",null,'For example (see Fig. 2), to go from Step 1 to Step 2, Operator 1 must process Mn blocks. During this time, the "Continue" operation will not be available to other operators. If Operator 1 is unable to complete a transaction during the processing of Mn blocks, this transaction remains incomplete. The funds on the balance are burned out.  '),(0,r.kt)("p",null,"Therefore, it is in every operator\u2019s best interest to use high-speed resources.  "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Case 2"),": A transaction cannot be completed if an error occurs.",(0,r.kt)("br",{parentName:"p"}),"\n",'If Step 1 is completed and "Cancel" occurred in Step 2, the funds are not returned to the operator. Funds cannot be withdrawn from a client for the partial execution of a transaction. The funds are also not returned to the client. In this case, the funds on the deposit will be burned. To avoid losing funds, the operator is compelled to complete the transaction in full, not in part.  '),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Case 3"),": Insufficient funds. Before executing a transaction, two things are checked: the user\u2019s account balance, and whether the gas limit will be exceeded. If there is a shortage of funds during any of the steps, the transaction is labelled as \"Fail\" and funds are debited from the user's account and transferred to the operator's account.  "),(0,r.kt)("h2",{id:"transferring-tokens-inside-solana"},"Transferring Tokens Inside Solana"),(0,r.kt)("p",null,"The ERC-20 wrapper, a special dApp (contract) with token balances, has been created. Application users know the address of this dApp. To transfer funds, they need to contact this dApp address and specify an account and the amount of funds to transfer. The transfer will take place within this contract.  "),(0,r.kt)("p",null,"The interaction between the SPL token and ERC-20 TKN is shown in Fig.3.  "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1484).Z})))," ",(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,"Fig. 3")),(0,r.kt)("p",null,"There are two user balances:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User SPL Balance, whose tokens are traded within Solana."),(0,r.kt)("li",{parentName:"ul"},"User ERC-20 Balance, whose tokens are traded within Neon EVM.  ")),(0,r.kt)("p",null,"The ERC-20 wrapper allows users to transfer their SPL tokens on the ERC-20 Balance, exchange them for tokens they need, and withdraw them back. Thus, a user can create a token inside Neon EVM and transfer any number of coins from User SPL Balance to User ERC-20 Balance. Then, using EVM contracts, they can use these coins."),(0,r.kt)("h3",{id:"payment-queues"},"Payment Queues"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Issue"),(0,r.kt)("br",{parentName:"p"}),"\n","If the ERC-20 TKN contract contains only one map for all users and their balances, it can result in an issue: if the majority of users pay with ETH tokens, then the same contract will appear inside each N-trx, where the value will need to be changed.  "),(0,r.kt)("p",null,"This will cause all N-trxs to line up \u201csingle file\u201d, and they cannot be executed in parallel. This is because at the final step, the funds would be transferred from the user's balance to the operator's balance within one contract.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Solution"),(0,r.kt)("br",{parentName:"p"}),"\n","The default token type field is added to the Neon account along with the balance. This field provides a special option that will allow a user to select a type of token for payment. The ERC-20 wrapper can be used to transfer SPL tokens from outside to an operator's account.  "),(0,r.kt)("p",null,"The Neon client does not have an option to select a type of token for payment, and can only operate with ETH. Therefore, the storage of funds is implemented in the user's Solana state. The Neon account (user-acc) has a separate field that specifies the type of token. After a user specifies a type of token, this type will be indicated in the account field of this user. With this information, Solana can use the ERC-20 wrapper to convert tokens.  "),(0,r.kt)("p",null,"An operator creates a deposit account for the transaction. It is possible to create a pool of such deposit accounts so that the ERC-20 wrapper logic will select the desired transaction from this pool rather than creating a queue for the payment of funds to the operator."),(0,r.kt)("h2",{id:"transferring-tokens-between-solana-and-ethereum"},"Transferring Tokens Between Solana and Ethereum"),(0,r.kt)("p",null,"The ERC-20 wrapper allows users to manipulate balances inside SPL tokens. The user runs an application inside Neon EVM with logic that releases new coins. To transfer these coins to the outside world, they need to use the ERC-20 bridge implementation. Inside Neon EVM, these coins will be blocked and transferred inside the SPL token to different addresses. They will become liquid inside Solana, but under a different token name, which is registered inside Solana.  "),(0,r.kt)("p",null,"A user can also transfer part of the funds to their balance inside Neon EVM and convert it into a new token using a token exchange algorithm of their choice.  "),(0,r.kt)("p",null,"Fig. 4 shows the process for transferring tokens between Solana and Ethereum."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3011).Z})))," ",(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,"Fig. 4")),(0,r.kt)("p",null,"Ethereum tokens are generated in accordance with the ERC-20 standard. Therefore, to transfer tokens between the Solana and Ethereum blockchains, a separate ERC-20 wrapper must be deployed for each Solana token. The ERC-20 wrapper\u2019s job is to ensure that the Solana applications interact with EVM (Solidity, Vyper, etc.) bytecode contracts, as well as to transfer funds in Solana tokens using Ethereum wallets such as MetaMask.  "),(0,r.kt)("p",null,"The main interacting component in the token transfer is the ERC-20 bridge, which is a separate contract. When it\u2019s called, it generates a Solana token, which represents the corresponding ERC-20 token in the SPL token contract. The Solana tokens registered in the SPL token contract can be transferred to Solana contracts.  "),(0,r.kt)("p",null,"Bridge operators are responsible for the ERC-20 bridge operation. They get fees from the conversion of tokens."))}u.isMDXComponent=!0},213:function(e,t,n){t.Z=n.p+"assets/images/arch-neon-1-0f5981862d06925936727d49164f736a.png"},9616:function(e,t,n){t.Z=n.p+"assets/images/arch-neon-2-0faecaacfe683e2c32c01312bdb6e2a3.png"},1484:function(e,t,n){t.Z=n.p+"assets/images/arch-neon-3-6fe2a7a1cf0bba48bb7b74a25593952c.png"},3011:function(e,t,n){t.Z=n.p+"assets/images/arch-neon-4-68761ee595d1841638d79ad7379dfdc7.png"}}]);