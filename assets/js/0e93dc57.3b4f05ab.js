"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Using Hardhat"},s=void 0,c={unversionedId:"developing/deploy_facilities/using_hardhat",id:"developing/deploy_facilities/using_hardhat",title:"Using Hardhat",description:"Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introduce more functionality around this workflow. This means compiling, running, and testing smart contracts at the very core.",source:"@site/docs/developing/deploy_facilities/using_hardhat.md",sourceDirName:"developing/deploy_facilities",slug:"/developing/deploy_facilities/using_hardhat",permalink:"/docs/developing/deploy_facilities/using_hardhat",tags:[],version:"current",frontMatter:{title:"Using Hardhat"},sidebar:"tutorialSidebar",previous:{title:"Using Truffle",permalink:"/docs/developing/deploy_facilities/using_truffle"},next:{title:"Migrating dApps to the Neon EVM",permalink:"/docs/developing/deploy_facilities/migrating_dapps"}},p={},u=[{value:"Example Hardhat Project",id:"example-hardhat-project",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introduce more functionality around this workflow. This means compiling, running, and testing smart contracts at the very core."),(0,o.kt)("p",null,"We will not describe the details of using the Hardhat framework here. You can find all necessary documentation by following this link: ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/#overview"},"https://hardhat.org/getting-started/#overview"),"."),(0,o.kt)("p",null,"As Neon is an Ethereum-compatible virtual machine and RPC, you can easily migrate existing Hardhat projects to it. The only thing required is the correct ",(0,o.kt)("strong",{parentName:"p"},"hardhat.config.js")," file. You can refer to the code below as an example of config-file content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"require(\"@nomiclabs/hardhat-waffle\");\n\nconst proxy_url = 'https://proxy.devnet.neonlabs.org/solana';\nconst network_id = 245022926;\nconst deployerPrivateKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'; // place your private key here (note that wallet must have non-zero balance of NEONs to pay fees)\n\nmodule.exports = {\n  solidity: \"0.8.4\",\n  defaultNetwork: 'neonlabs',\n  networks: {\n    neonlabs: {\n      url: proxy_url,\n      accounts: [deployerPrivateKey],\n      network_id: network_id,\n      chainId: network_id,\n      gas: 3000000,\n      gasPrice: 1000000000,\n      blockGasLimit: 10000000,\n      allowUnlimitedContractSize: false,\n      timeout: 1000000,\n      isFork: true\n    }\n  }\n};\n")),(0,o.kt)("h2",{id:"example-hardhat-project"},"Example Hardhat Project"),(0,o.kt)("p",null,"You can obtain an example Hardhat project from here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neonlabsorg/examples/tree/main/simple-erc20-hardhat"},"https://github.com/neonlabsorg/examples/tree/main/simple-erc20-hardhat"),"."))}f.isMDXComponent=!0}}]);