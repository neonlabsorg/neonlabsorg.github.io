"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8561],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Neon and Ethereum Gas Calculators Give Different Results"},c=void 0,s={unversionedId:"design_proposals/accepted/gas_calculator",id:"design_proposals/accepted/gas_calculator",title:"Neon and Ethereum Gas Calculators Give Different Results",description:"Problem",source:"@site/docs/design_proposals/accepted/gas_calculator.md",sourceDirName:"design_proposals/accepted",slug:"/design_proposals/accepted/gas_calculator",permalink:"/docs/design_proposals/accepted/gas_calculator",tags:[],version:"current",frontMatter:{title:"Neon and Ethereum Gas Calculators Give Different Results"},sidebar:"tutorialSidebar",previous:{title:"Precompiled Contracts That Can't Be Used in Solana",permalink:"/docs/design_proposals/accepted/precompiled_contracts"},next:{title:"Unsupported Functions in the Neon EVM",permalink:"/docs/design_proposals/accepted/unsupported_functions"}},u={},p=[{value:"Problem",id:"problem",level:3},{value:"When will the bug be fixed?",id:"when-will-the-bug-be-fixed",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"In Neon EVM, a calculator is implemented to account for the gas consumption.\nDespite the fact that this calculator is implemented in the same way as in Ethereum, sometimes it shows different results in gas calculations on tests.  "),(0,a.kt)("p",null,"Since contracts for Neon EVM can be created using various languages (including ",(0,a.kt)("em",{parentName:"p"},"Solidity/Viper"),"), these contracts can implement their own gas counting method.  "),(0,a.kt)("p",null,"Let's assume that the Ethereum network contract implements the following operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Calculation of gas consumption using their own methods."),(0,a.kt)("li",{parentName:"ul"},"Calculation of gas consumption using the EVM calculator."),(0,a.kt)("li",{parentName:"ul"},"Comparison of the results obtained.")),(0,a.kt)("p",null,"Since the results may be different, this method will not work."),(0,a.kt)("p",null,"At the moment, the following is known about this bug:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The error is in the Neon EVM code."),(0,a.kt)("li",{parentName:"ul"},"The error does not affect the stability of the code."),(0,a.kt)("li",{parentName:"ul"},"The error appears if:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a contract independently calculates gas consumption."),(0,a.kt)("li",{parentName:"ul"},'in the contract, the calculation is checked with issuing a message like this: "the gas has been calculated correctly".')))),(0,a.kt)("p",null,"Due to a bug in the Neon EVM code, the result of such checks may be incorrect."),(0,a.kt)("h3",{id:"when-will-the-bug-be-fixed"},"When will the bug be fixed?"),(0,a.kt)("p",null,"Investigating and fixing the bug will start after MVP on Mainnet."))}f.isMDXComponent=!0}}]);