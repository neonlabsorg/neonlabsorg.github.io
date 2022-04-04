"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4466],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,h=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3599:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"NeonPass Overview"},l=void 0,c={unversionedId:"token_transferring/neonpass_overview",id:"token_transferring/neonpass_overview",title:"NeonPass Overview",description:"NeonPass is an open-source service designed to transfer tokens between Solana and the Neon EVM, and provides users with the following features:",source:"@site/docs/token_transferring/neonpass_overview.md",sourceDirName:"token_transferring",slug:"/token_transferring/neonpass_overview",permalink:"/docs/token_transferring/neonpass_overview",tags:[],version:"current",frontMatter:{title:"NeonPass Overview"},sidebar:"tutorialSidebar",previous:{title:"Setting up MetaMask",permalink:"/docs/wallet/metamask_setup"},next:{title:"Transferring SPL Tokens",permalink:"/docs/token_transferring/neonpass_usage"}},u={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NeonPass is an open-source service designed to transfer tokens between Solana and the Neon EVM, and provides users with the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transfer of SPL tokens from Solana to the Neon EVM to a non-existent account. The account with an ERC-20 balance is automatically created when transferring tokens."),(0,a.kt)("li",{parentName:"ul"},"Transfer of SPL tokens from Solana to the Neon EVM to an existing account with no ERC-20 balance. The balance is automatically created when transferring tokens."),(0,a.kt)("li",{parentName:"ul"},"Transfer of SPL tokens from Solana to the Neon EVM to an existing account with an ERC-20 balance."),(0,a.kt)("li",{parentName:"ul"},"Withdrawal of ERC-20 tokens from the Neon EVM to an existing account with an SPL balance in Solana."),(0,a.kt)("li",{parentName:"ul"},"Withdrawal of ERC-20 tokens from the Neon EVM to an existing account with no SPL balance in Solana. The balance is automatically created when transferring tokens.")),(0,a.kt)("p",null,"Solana has its own ERC-20 tokens generated by the special application. These tokens are on the balances of SPL accounts inside Solana. Transactions with balances are possible only through a Solana wallet (for example, through ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/terminology#phantom"},"Phantom"),"). There is no way to directly manage these balances from the Neon EVM."),(0,a.kt)("p",null,"We provide you with NeonPass in order for you to make transactions with SPL tokens quickly and conveniently. To transfer tokens from Solana to the Neon EVM, as well as from the Neon EVM to Solana, two wallets are required: ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/terminology#phantom"},"Phantom")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/terminology#metamask"},"MetaMask"),", which provide the addresses of a recipient and a sender. Transactions are signed with keys obtained from these addresses."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The NeonPass service provides Ethereum users with the ability to transfer SPL tokens to the Neon EVM and withdraw them back.")))}m.isMDXComponent=!0}}]);