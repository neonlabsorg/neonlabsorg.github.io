"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5058],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=u(n),h=a,f=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2176:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Ethereum transaction"},s=void 0,u={unversionedId:"architecture/core_aspects/transaction",id:"architecture/core_aspects/transaction",isDocsHomePage:!1,title:"Ethereum transaction",description:"An Ethereum transaction is a cryptographically signed instruction from an account. The account initiates a transaction to update the state of the Ethereum network. An Ethereum transaction refers to an action initiated by an external account, i.e. an account managed by a person, not a contract.",source:"@site/docs/architecture/core_aspects/transaction.md",sourceDirName:"architecture/core_aspects",slug:"/architecture/core_aspects/transaction",permalink:"/docs/architecture/core_aspects/transaction",tags:[],version:"current",frontMatter:{title:"Ethereum transaction"},sidebar:"tutorialSidebar",previous:{title:"Proof-of-Work",permalink:"/docs/architecture/core_aspects/proof-of-work"},next:{title:"Web3 concept",permalink:"/docs/architecture/core_aspects/web3"}},l=[{value:"What is in a transaction?",id:"what-is-in-a-transaction",children:[]},{value:"Note",id:"note",children:[]}],p={toc:l};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An Ethereum transaction is a cryptographically signed instruction from an account. The account initiates a transaction to update the state of the Ethereum network. An Ethereum transaction refers to an action initiated by an external account, i.e. an account managed by a person, not a contract.  "),(0,o.kt)("p",null,"A transaction, which changes the state of the EVM, needs to be broadcast to the whole network. Any node can broadcast a request for a transaction to be executed on the EVM. Transactions require a fee and must be mined to become valid."),(0,o.kt)("h2",{id:"what-is-in-a-transaction"},"What is in a transaction?"),(0,o.kt)("p",null,"A transaction includes the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recipient")," \u2013 recipient address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Signature")," \u2013 identifier of the sender (sender's signature with a private key)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Value")," \u2013 amount of coins to transfer from sender to recipient"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data")," \u2013 arbitrary data (optional field)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GasLimit")," \u2013 maximum amount of gas units that can be consumed by the transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GasPrice")," \u2013 fee the sender pays per unit of gas")),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The block that your transaction is placed in can also contain many other transactions. Checking such a block for the validity of transactions may take more time. Higher-priority transactions are served first."),(0,o.kt)("li",{parentName:"ul"},"If the network is busy and miners aren't able to keep up, they always prioritize transactions with higher GasPrice because they get to keep the fees."),(0,o.kt)("li",{parentName:"ul"},"A transaction gets a block confirmation number. This is the number of blocks created since the block that this transaction was included in. The higher the number, the greater the certainty that the transaction was processed and recognized by the network. For higher value transactions, more block confirmations may be desired.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"More details"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/transactions/"},"Transactions"))))}m.isMDXComponent=!0}}]);