"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4424],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Installing and setting up MetaMask",p={unversionedId:"devportal/metamask_setup",id:"devportal/metamask_setup",isDocsHomePage:!1,title:"Installing and setting up MetaMask",description:"MetaMask wallet is a convenient and fairly easy-to-use application for storing Ethereum addresses and private keys.",source:"@site/docs/devportal/metamask_setup.md",sourceDirName:"devportal",slug:"/devportal/metamask_setup",permalink:"/docs/devportal/metamask_setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Value token",permalink:"/docs/architecture/value_token"},next:{title:"BPF trace",permalink:"/docs/devportal/bpf_trace"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Device requirements",id:"device-requirements",children:[]},{value:"Installing MetaMask",id:"installing-metamask",children:[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]}]},{value:"Setting up the MetaMask",id:"setting-up-the-metamask",children:[{value:"Step 4",id:"step-4",children:[]},{value:"Step 5",id:"step-5",children:[]},{value:"Step 6",id:"step-6",children:[]},{value:"Step 7",id:"step-7",children:[]},{value:"Step 8",id:"step-8",children:[]}]}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-and-setting-up-metamask"},"Installing and setting up MetaMask"),(0,o.kt)("p",null,"MetaMask wallet is a convenient and fairly easy-to-use application for storing Ethereum addresses and private keys."),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"To install the MetaMask on your device to connect the wallet to the Solana Testnet environment.  "),(0,o.kt)("h2",{id:"device-requirements"},"Device requirements"),(0,o.kt)("p",null,"A browser which supports the MetaMask must be installed on your device. You can use ",(0,o.kt)("em",{parentName:"p"},"Chrome"),", ",(0,o.kt)("em",{parentName:"p"},"Opera"),", ",(0,o.kt)("em",{parentName:"p"},"Firefox"),".  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Although this tutorial uses the ",(0,o.kt)("em",{parentName:"p"},"Ubuntu")," platform, the instructions provided can be applied to other platforms.  ")),(0,o.kt)("h2",{id:"installing-metamask"},"Installing MetaMask"),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"Go to the MetaMask ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/download.html"},"download page"),". From there, select any platform you use and follow the instructions to load and install MetaMask your device's browser. (Fig. 1 shows an example of installing the MetaMask on the Chrome browser.)  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5302).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Fig. 1 - Loading MetaMask ")),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"MetaMask is essentially a plugin in the form of an extension to a browser. Therefore, MetaMask can be added to your browser as an extension. In the window, as shown in Fig. 2, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add extension"),".  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4834).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Fig. 2 "),"  "),(0,o.kt)("p",null,"When the MetaMask extension is installed, a fox's face (MetaMask\u2019s logo) will appear in the upper left corner of the web browser window. This means that you have successfully installed MetaMask on your device and can start using."),(0,o.kt)("h3",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Create a wallet if you don't already have one. MetaMask offers a choice of two options for creating an account:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import an existing wallet using a 12-word passphrase."),(0,o.kt)("li",{parentName:"ul"},"Create a new wallet.")),(0,o.kt)("p",null,"Go ahead and ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a Wallet"),". On the support page ",(0,o.kt)("inlineCode",{parentName:"p"},"Help Us Improve MetaMask")," click ",(0,o.kt)("inlineCode",{parentName:"p"},"I agree"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The password generation form should open on the display. Enter a secret code that must contain at least 8 symbols.",(0,o.kt)("br",{parentName:"p"}),"\n","A secret phrase will be generated automatically. Record the secret phrase for backup (preferably not on a device connected to the Internet). Without this phrase, your funds cannot be refunded if your device is damaged or lost. Confirm that you have written them down on the next page.  "),(0,o.kt)("p",null,"After that, you should see your wallet linked to your account."),(0,o.kt)("h2",{id:"setting-up-the-metamask"},"Setting up the MetaMask"),(0,o.kt)("p",null,"You can use your wallet to interact with the Solana cluster via a proxy server. To do this, you need to configure your wallet to the desired proxy server.",(0,o.kt)("br",{parentName:"p"}),"\n","Depending on the tasks to be solved, as well as on the location of the proxy and Solana, there are 3 options for setting up the MetaMask wallet:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Option 1:")," Both the proxy and Solana are hosted on remote servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Option 2:")," The proxy is hosted locally, Solana is on a remote server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Option 3 (debug mode):")," Both the proxy and Solana are hosted locally.")),(0,o.kt)("h3",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"In the upper-right corner, click the red apple view element. Select settings from the dropdown menu to connect to the proxy server (Fig. 3).  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2721).Z}),(0,o.kt)("br",{parentName:"p"}),"\n",'Fig. 3 - Select "Settings" from the dropdown menu ')),(0,o.kt)("p",null,"The dropdown menu elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"My Accounts"),": list of accounts created by your wallet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Account 1"),": account of your wallet that was created during the MetaMask installation; this account provides management of your wallet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Create Account"),": this allows you to create one more account to interact with the new proxy server; you can configure this wallet to interact with multiple proxy servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Import Account"),": this allows you to import your private key generated and saved previously into this wallet and use it in the future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Connect Hardware Wallet"),": this allows you to save the private key to an external device (i.e. flash memory) located outside the network, thereby increasing the security of your private key. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Settings"),": used to change the default values; by default, the wallet is configured for Ethereum addresses, including those that you can\u2019t use.")),(0,o.kt)("h3",{id:"step-5"},"Step 5"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," in the dropdown menu. The window with settings menu for selecting a network should open (Fig. 4).  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6934).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Fig. 4 - Choosing a Network ")),(0,o.kt)("h3",{id:"step-6"},"Step 6"),(0,o.kt)("p",null,"Add a Network (Fig. 5).  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4557).Z}),"\nFig. 5 - The Networks menu ")),(0,o.kt)("p",null,"The new window contains the settings for 6 default subnets. You need to use these settings to connect to the desired proxy. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Network")," in the top-right corner.  "),(0,o.kt)("h3",{id:"step-7"},"Step 7"),(0,o.kt)("p",null,"Fill in the fields on the next page (Fig. 6):  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Network Name"),": defined network name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"New RPC URL"),": path to interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Chain ID"),": blockchain ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Currency Symbol"),": coin ticker (e.g. ETH, BNB)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Block Explorer URL (optional)"),": URL of the block browser.")),(0,o.kt)("p",null,"The wallet settings depend on the values given for the option mentioned above.  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9929).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Fig. 6 - Fill the Fields ")),(0,o.kt)("h3",{id:"step-8"},"Step 8"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," to keep the settings.",(0,o.kt)("br",{parentName:"p"}),"\n","Your MetaMask wallet has been successfully installed and is ready to use."))}d.isMDXComponent=!0},5302:function(e,t,n){t.Z=n.p+"assets/images/metamask-1-03296bbb2b9efc2ce43919f4ab21d3b9.png"},4834:function(e,t,n){t.Z=n.p+"assets/images/metamask-2-78fcd9b2da8aa07c68eee925d24d4301.png"},2721:function(e,t,n){t.Z=n.p+"assets/images/metamask-3-a2d3c844ee3f6372c6a470862b4eca85.png"},6934:function(e,t,n){t.Z=n.p+"assets/images/metamask-4-487a6cb34e43ac423c7aac58f655fcf8.png"},4557:function(e,t,n){t.Z=n.p+"assets/images/metamask-5-11c80ff8dcfd3aaf225f2b986d5f36d5.png"},9929:function(e,t,n){t.Z=n.p+"assets/images/metamask-6-4c8030538b0b961c635f984c9baee787.png"}}]);