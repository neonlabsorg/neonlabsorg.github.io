"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8203],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="Integration tests",p={unversionedId:"neonswap/neonswap_tests",id:"neonswap/neonswap_tests",isDocsHomePage:!1,title:"Integration tests",description:"This guide describes how to build and configure the Neon EVM to run integration tests on it.",source:"@site/docs/neonswap/neonswap_tests.md",sourceDirName:"neonswap",slug:"/neonswap/neonswap_tests",permalink:"/docs/neonswap/neonswap_tests",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NeonSwap overview",permalink:"/docs/neonswap/neonswap_overview"},next:{title:"URL Proxy Table",permalink:"/docs/proxy/url_table"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare solana-program-library",id:"prepare-solana-program-library",children:[]},{value:"Deploy the EVM Loader",id:"deploy-the-evm-loader",children:[]},{value:"Prepare the proxy",id:"prepare-the-proxy",children:[]},{value:"Launch the proxy",id:"launch-the-proxy",children:[]},{value:"Prepare integration tests suite",id:"prepare-integration-tests-suite",children:[]},{value:"Run the tests",id:"run-the-tests",children:[]}],c={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This guide describes how to build and configure the Neon EVM to run integration tests on it."),"  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We want to demonstrate to Ethereum users that the neonswap infrastructure deployed on our Neon EVM ensures a passage of the ",(0,o.kt)("em",{parentName:"p"},"Uniswap-V2")," integration tests suite. This means Ethereum users can successfully run their applications on Neon EVM.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"It is assumed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are already familiar with the document ",(0,o.kt)("a",{parentName:"li",href:"https://docs.neonlabs.org/docs/solana_cluster/cluster_installation"},"Local Solana Cluster: Installation, Setup and Tests")),(0,o.kt)("li",{parentName:"ul"},"Integration tests are performed on ",(0,o.kt)("em",{parentName:"li"},"NodeJS")," (",(0,o.kt)("em",{parentName:"li"},"v12")," or higher) which should be installed in the system"),(0,o.kt)("li",{parentName:"ul"},"The local development ",(0,o.kt)("em",{parentName:"li"},"Solana")," cluster should be up and active")),(0,o.kt)("h2",{id:"prepare-solana-program-library"},"Prepare solana-program-library"),(0,o.kt)("p",null,"Clone the project ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/neonlabsorg/solana-program-library"),". Don't forget to clone the dependent project (EVM): ",(0,o.kt)("inlineCode",{parentName:"p"},"git submodule update --remote --init --recursive"),"."),(0,o.kt)("h2",{id:"deploy-the-evm-loader"},"Deploy the EVM Loader"),(0,o.kt)("p",null,"Build the EVM Loader:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./do.sh update\n$ ./do.sh build evm_loader\n")),(0,o.kt)("p",null,"Directory ",(0,o.kt)("inlineCode",{parentName:"p"},"target/bpfel-unknown-unknown/release")," should contain the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"evm_loader.so")," file. Deploy it to the Solana cluster (which should be ready at this moment):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ solana deploy evm_loader.so\n")),(0,o.kt)("h2",{id:"prepare-the-proxy"},"Prepare the proxy"),(0,o.kt)("p",null,"Clone the project ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/neonlabsorg/proxy-model.py"),"."),(0,o.kt)("h2",{id:"launch-the-proxy"},"Launch the proxy"),(0,o.kt)("p",null,"Export the EVM Loader program id before starting the proxy (replace the example address with the actual):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ export EVM_LOADER="Hqg8EZdZZdXr5so55b9zpTUz1g68haMx44sgjqNLP1cK"\n')),(0,o.kt)("p",null,"Start the proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ python3 -m proxy --hostname 127.0.0.1 --port 9090 --enable-web-server --plugins proxy.plugin.SolanaProxyPlugin --num-workers=1\n")),(0,o.kt)("h2",{id:"prepare-integration-tests-suite"},"Prepare integration tests suite"),(0,o.kt)("p",null,"Clone the project ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/neonlabsorg/uniswap-v2-core"),'. Build the tests (ignoring messages like "gyp ERR!"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn install\n")),(0,o.kt)("h2",{id:"run-the-tests"},"Run the tests"),(0,o.kt)("p",null,"Now everything should be ready to run the integration tests of ",(0,o.kt)("strong",{parentName:"p"},"Uniswap V2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn test\n")),(0,o.kt)("p",null,"Individual test suites can be run with following command (replace the example test suite name with needed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ node node_modules/mocha/bin/mocha --grep "^UniswapV2Pair"\n')),(0,o.kt)("p",null,"Results of the first test suite:  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5381).Z}))),(0,o.kt)("p",null,"Results of the second test suite:  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4145).Z}))),(0,o.kt)("p",null,"The absence of error messages indicates the successful completion of integration tests."))}d.isMDXComponent=!0},5381:function(e,t,n){t.Z=n.p+"assets/images/neonswap-tests-1-b83329a9249a33becb6f336907fbd52f.png"},4145:function(e,t,n){t.Z=n.p+"assets/images/neonswap-tests-2-59d52e154041837dc4031fbcf7cf9b84.png"}}]);