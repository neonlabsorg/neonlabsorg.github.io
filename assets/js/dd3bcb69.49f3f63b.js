"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1953],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Precompiled Contracts that can not be used in Solana",s={unversionedId:"design_proposals/accepted/precompiled_contracts",id:"design_proposals/accepted/precompiled_contracts",isDocsHomePage:!1,title:"Precompiled Contracts that can not be used in Solana",description:"Problem",source:"@site/docs/design_proposals/accepted/precompiled_contracts.md",sourceDirName:"design_proposals/accepted",slug:"/design_proposals/accepted/precompiled_contracts",permalink:"/docs/design_proposals/accepted/precompiled_contracts",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/design_proposals/accepted/precompiled_contracts.md",version:"current",frontMatter:{}},p=[{value:"Problem",id:"problem",children:[]},{value:"Details",id:"details",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Implementation Strategy",id:"implementation-strategy",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"precompiled-contracts-that-can-not-be-used-in-solana"},"Precompiled Contracts that can not be used in Solana"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Contracts written in the Solidity language cannot work in Solana if they contain calls to the following precompiled contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bigModExp")," \u2014 Used for efficient ",(0,a.kt)("a",{parentName:"li",href:"https://doc.neonlabs.org/docs/glossary#rsa"},"RSA")," verification inside of EVM, as well as other forms of number theory-based cryptography."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bn256Add")," \u2014 Performs addition on the elliptic curve operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bn256ScalarMult")," \u2014 Performs scalar multiplication on the elliptic curve operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bn256Pairing")," \u2014 Elliptic curve pairing operations to perform ",(0,a.kt)("a",{parentName:"li",href:"https://doc.neonlabs.org/docs/glossary#zk-snark"},"zkSNARKs")," verification within the block gas limit.")),(0,a.kt)("p",null,"Neon EVM requires the implementation of system calls in Solana for these contracts."),(0,a.kt)("h3",{id:"details"},"Details"),(0,a.kt)("p",null,"A solidity contract can contain calls to functions supported by EVM itself. For example, to perform operations such as addition, subtraction, obtaining a hash block, a contract can use methods implemented in EVM. Each called function is an ",(0,a.kt)("em",{parentName:"p"},"operation-code"),". EVM contains some such codes (in a limited number)."),(0,a.kt)("p",null,"To increase the number of such functions, precompiled contracts implemented inside the blockchain core are used. Since these contracts are written in Solidity, their use requires an increased consumption of resources (i.e. gas). Neon EVM contains several pieces of the program code where calls to these precompiled contracts can occur."),(0,a.kt)("p",null,"If the program enters such places, Neon EVM does not create a new contract, but calls an already compiled contract from the blockchain core. Although these functions are called within the core, in the code it is like calling another contract. Since this code is executed directly in the core, it is resource intensive."),(0,a.kt)("p",null,"Currently, there are several precompiled contracts implemented as ",(0,a.kt)("em",{parentName:"p"},"bpf-code"),". When calling these contracts, a lot of ",(0,a.kt)("em",{parentName:"p"},"bpf-instructions")," are used, and therefore, the transaction size limit may be exceeded."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"In order for the precompiled contracts to be used in Solana, it is proposed to implement sys-calls inside the Solana core. That is, to perform an implementation similar to the ",(0,a.kt)("em",{parentName:"p"},"erc-recover")," implementation."),(0,a.kt)("h3",{id:"implementation-strategy"},"Implementation Strategy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Preparing the necessary changes to support precompiled contracts in the Solana core."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("em",{parentName:"li"},"pull requests")," for the Solana core to make these improvements."),(0,a.kt)("li",{parentName:"ol"},"Testing changes in Testnet."),(0,a.kt)("li",{parentName:"ol"},"Testing changes in Devnet."),(0,a.kt)("li",{parentName:"ol"},"Testing changes in Mainnet."),(0,a.kt)("li",{parentName:"ol"},"Update Neon EVM to support these precompiled contracts.")))}u.isMDXComponent=!0}}]);