"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2874],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="The SPL-token Precision in Neon EVM",l={unversionedId:"design_proposals/accepted/spl_token_precision",id:"design_proposals/accepted/spl_token_precision",isDocsHomePage:!1,title:"The SPL-token Precision in Neon EVM",description:"Problem",source:"@site/docs/design_proposals/accepted/spl_token_precision.md",sourceDirName:"design_proposals/accepted",slug:"/design_proposals/accepted/spl_token_precision",permalink:"/docs/design_proposals/accepted/spl_token_precision",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/design_proposals/accepted/spl_token_precision.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accepted design proposals",permalink:"/docs/design_proposals/accepted/accepted_proposals"},next:{title:"Unsupported Tokens in Neon EVM",permalink:"/docs/design_proposals/accepted/erc721-tokens"}},p=[{value:"Problem",id:"problem",children:[]},{value:"What can be affected by such a limitation of accuracy",id:"what-can-be-affected-by-such-a-limitation-of-accuracy",children:[]},{value:"Examples with rounding values",id:"examples-with-rounding-values",children:[]},{value:"When will the problem be fixed",id:"when-will-the-problem-be-fixed",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-spl-token-precision-in-neon-evm"},"The SPL-token Precision in Neon EVM"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Calculations within Ethereum users' contracts are performed with an accuracy of ",(0,o.kt)("em",{parentName:"p"},"18")," digits after the decimal point. In transactions created according to the Ethereum rules, tokens can be accurate to ",(0,o.kt)("em",{parentName:"p"},"18")," characters after the decimal point. When these tokens are transferred to account balances in Solana via ",(0,o.kt)("a",{parentName:"p",href:"https://doc.neonlabs.org/docs/glossary#wormhole"},"Wormhole"),", their accuracy is limited to ",(0,o.kt)("em",{parentName:"p"},"9")," digits after the decimal point."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Inside Neon EVM, numericals are limited to ",(0,o.kt)("em",{parentName:"p"},"9")," decimal places. If a numerical contains from ",(0,o.kt)("em",{parentName:"p"},"10")," to ",(0,o.kt)("em",{parentName:"p"},"18")," digits after the decimal point other than zero, then these digits are discarded. No message is issued to a user.")),(0,o.kt)("h3",{id:"what-can-be-affected-by-such-a-limitation-of-accuracy"},"What can be affected by such a limitation of accuracy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no problem when calculating fee, gas-prise, ",(0,o.kt)("a",{parentName:"li",href:"https://doc.neonlabs.org/docs/glossary#gwei"},"gwei")," is used as the calculation unit and, therefore, digits ",(0,o.kt)("em",{parentName:"li"},"10")," to ",(0,o.kt)("em",{parentName:"li"},"18")," always contain zeros after the decimal point."),(0,o.kt)("li",{parentName:"ul"},"There is no problem when transferring tokens in manual mode, since the transferred amount of tokens usually contains zero values after the 9th digit."),(0,o.kt)("li",{parentName:"ul"},"The problem can arise with numerical values that are obtained as a result of calculations by automated smart contracts."),(0,o.kt)("li",{parentName:"ul"},"The problem can arise when a user tries to convert ",(0,o.kt)("a",{parentName:"li",href:"https://doc.neonlabs.org/docs/glossary#spl-token"},"SPL-tokens")," to ETH and vice versa while those token values are calculated automatically within a smart-contract.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It makes sense for users to store ",(0,o.kt)("a",{parentName:"p",href:"https://doc.neonlabs.org/docs/glossary#spl-token"},"SPL-tokens")," on their Solana account balances only with an accuracy of ",(0,o.kt)("em",{parentName:"p"},"9")," digits!")),(0,o.kt)("h3",{id:"examples-with-rounding-values"},"Examples with rounding values"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example 1"),(0,o.kt)("br",{parentName:"p"}),"\n","Alice sends ",(0,o.kt)("em",{parentName:"p"},"0.000 000 000 123 456 789 ETH")," to Bob using NeonSwap.",(0,o.kt)("br",{parentName:"p"}),"\n","After the transaction is completed, Bob's and Alice's balances stay unchanged.  "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example 2"),(0,o.kt)("br",{parentName:"p"}),"\n","Alice sends ",(0,o.kt)("em",{parentName:"p"},"0.000 000 123 456 789 000 ETH")," to Bob using NeonSwap.",(0,o.kt)("br",{parentName:"p"}),"\n","After the transaction is completed, Alice's balance is debited by ",(0,o.kt)("em",{parentName:"p"},"0.000 000 123 ETH")," and Bob's balance is credited by ",(0,o.kt)("em",{parentName:"p"},"0.000 000 123 ETH"),".  "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example 3"),(0,o.kt)("br",{parentName:"p"}),"\n","Alice sends ",(0,o.kt)("em",{parentName:"p"},"1.5 ",(0,o.kt)("a",{parentName:"em",href:"https://doc.neonlabs.org/docs/glossary#gwei"},"gwei"))," to Bob using NeonSwap.",(0,o.kt)("br",{parentName:"p"}),"\n","After the transaction is completed, Alice's balance is debited by ",(0,o.kt)("em",{parentName:"p"},"1 ",(0,o.kt)("a",{parentName:"em",href:"https://doc.neonlabs.org/docs/glossary#gwei"},"gwei"))," and Bob's balance is credited by ",(0,o.kt)("em",{parentName:"p"},"1 ",(0,o.kt)("a",{parentName:"em",href:"https://doc.neonlabs.org/docs/glossary#gwei"},"gwei")),"."),(0,o.kt)("h3",{id:"when-will-the-problem-be-fixed"},"When will the problem be fixed"),(0,o.kt)("p",null,"The search for a solution to fix this problem will start after MVP on Mainnet."))}u.isMDXComponent=!0}}]);