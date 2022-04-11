"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},p="Unsupported Functions in Neon EVM",u={unversionedId:"design_proposals/accepted/unsupported_functions",id:"design_proposals/accepted/unsupported_functions",isDocsHomePage:!1,title:"Unsupported Functions in Neon EVM",description:"The Neon EVM doesn't support the following functions:",source:"@site/docs/design_proposals/accepted/unsupported_functions.md",sourceDirName:"design_proposals/accepted",slug:"/design_proposals/accepted/unsupported_functions",permalink:"/docs/design_proposals/accepted/unsupported_functions",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neon and Ethereum Gas Calculators give different Results",permalink:"/docs/design_proposals/accepted/gas_calculator"},next:{title:"Storage size limit for an account",permalink:"/docs/design_proposals/accepted/storage_size_for_account"}},l=[{value:"Why are these features temporarily not supported",id:"why-are-these-features-temporarily-not-supported",children:[]},{value:"When will these features be supported",id:"when-will-these-features-be-supported",children:[]}],c={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unsupported-functions-in-neon-evm"},"Unsupported Functions in Neon EVM"),(0,i.kt)("p",null,"The Neon EVM doesn't support the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_price(&self)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_hash(&self, number: U256)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_coinbase(&self)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_dificulty(&self)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_gas_limit(&self)"))),(0,i.kt)("h3",{id:"why-are-these-features-temporarily-not-supported"},"Why are these features temporarily not supported"),(0,i.kt)("p",null,"Calling each of the above listed functions mistakenly returns zero instead of the expected ones. The reason for this behavior of these functions is a bug in the Neon EVM program code.  "),(0,i.kt)("h3",{id:"when-will-these-features-be-supported"},"When will these features be supported"),(0,i.kt)("p",null,"Investigating and fixing the bug will start after MVP on Mainnet."))}f.isMDXComponent=!0}}]);