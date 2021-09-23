"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[408],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p="Quick Operator's Guide",s={unversionedId:"proxy/operator_guide",id:"proxy/operator_guide",isDocsHomePage:!1,title:"Quick Operator's Guide",description:"This guide is for people who want to register with Neon EVM as a proxy operator for processing transactions on Solana. It is assumed these people have previous experience compiling Solana-based blockchain nodes or have worked as blockchain validators.",source:"@site/docs/proxy/operator_guide.md",sourceDirName:"proxy",slug:"/proxy/operator_guide",permalink:"/docs/proxy/operator_guide",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/proxy/operator_guide.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NeonSwap demo guide",permalink:"/docs/neonswap/solana_neonswap"},next:{title:"Web3 concept",permalink:"/docs/software_manuals/foundational_topics/web3"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Duties of a Proxy Operator",id:"duties-of-a-proxy-operator",children:[]},{value:"Operator Requirements",id:"operator-requirements",children:[{value:"Hardware recommendations",id:"hardware-recommendations",children:[]},{value:"Software recommendations",id:"software-recommendations",children:[]},{value:"Networking",id:"networking",children:[]}]},{value:"Installation Using Docker",id:"installation-using-docker",children:[{value:"Run a daemon",id:"run-a-daemon",children:[]},{value:"Start a proxy in a Docker container",id:"start-a-proxy-in-a-docker-container",children:[]},{value:"CONFIG values",id:"config-values",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-operators-guide"},"Quick Operator's Guide"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This guide is for people who want to register with Neon EVM as a proxy operator for processing transactions on Solana. It is assumed these people have previous experience compiling Solana-based blockchain nodes or have worked as blockchain validators.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Ethereum users have the opportunity to run their smart contract-based applications on Solana via Neon EVM. Smart contracts generate transactions in accordance with the Ethereum rules and submit them to Neon EVM. Since the structures of Ethereum and Solana transactions differ from each other, Neon EVM contains special proxy servers that are responsible for converting and executing transactions in Solana. These servers are configured and maintained by Neon EVM proxy operators."),(0,o.kt)("p",null,"This guide contains a list of the proxy operator\u2019s duties, as well as instructions to ensure the successful operation of a proxy and the successful execution of transactions."),(0,o.kt)("h2",{id:"duties-of-a-proxy-operator"},"Duties of a Proxy Operator"),(0,o.kt)("p",null,"A proxy operator\u2019s main task is to install software on a server to accept a transaction formed according to Ethereum rules, and to ensure its execution in Solana. This involves:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuring a proxy server to perform the following operations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Receiving requests over Web3 API protocol."),(0,o.kt)("li",{parentName:"ul"},"Shaping responses using Web3 API protocol."),(0,o.kt)("li",{parentName:"ul"},"Converting transactions to Solana format."))),(0,o.kt)("li",{parentName:"ul"},"Connecting a proxy server to a Solana cluster RPC endpoint."),(0,o.kt)("li",{parentName:"ul"},"Successfully executing transactions.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All operations related to the execution of transactions on Solana are performed by the software installed on your node.")),(0,o.kt)("h2",{id:"operator-requirements"},"Operator Requirements"),(0,o.kt)("p",null,"First, you must be registered in Solana, which involves creating an account with a balance for storing SOL tokens, and getting the public and private keys.\nThere is no strict minimum amount of SOL required to run an operator on Neon EVM. However, you should take into account that you will need tokens to create accounts for new users, deploy contracts, and execute transactions."),(0,o.kt)("p",null,"In addition to the balance for storing SOL tokens, an operator must also have the ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT"),"balance for storing value tokens. These tokens are used to pay funds from users to an operator for the successful execution of transactions. Depending on the chosen configuration, specific values for ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT")," are indicated in the ",(0,o.kt)("a",{parentName:"p",href:"#eth_token_mint"},"table")," below."),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT")," balance, you can use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spl-token -u <Solana RPC node URL> create-account <ETH_TOKEN_MINT>\n")),(0,o.kt)("h3",{id:"hardware-recommendations"},"Hardware recommendations"),(0,o.kt)("p",null,"The minimum specifications recommended to choose your node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"High clock speed: 4+ cores or more"),(0,o.kt)("li",{parentName:"ul"},"2.8 GHz or faster"))),(0,o.kt)("li",{parentName:"ul"},"RAM",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"16 GB or more"))),(0,o.kt)("li",{parentName:"ul"},"Disk space",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"80 GB or more")))),(0,o.kt)("h3",{id:"software-recommendations"},"Software recommendations"),(0,o.kt)("p",null,"The following software should be installed on your node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04 or later"),(0,o.kt)("li",{parentName:"ul"},"macOS Darwin 10.12 or later"))),(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Docker is used only for development purposes. Running an operator inside Docker for a live network is not recommended due to Docker's overall containerization overhead and the resulting performance degradation.")),(0,o.kt)("h3",{id:"networking"},"Networking"),(0,o.kt)("p",null,"Internet service should be at least 300 Mbps."),(0,o.kt)("h2",{id:"installation-using-docker"},"Installation Using Docker"),(0,o.kt)("p",null,"After you have chosen a node that meets the listed recommendations, you can start installing a proxy operator software on it."),(0,o.kt)("h3",{id:"run-a-daemon"},"Run a daemon"),(0,o.kt)("p",null,"Make sure that you have a daemon running. If you see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker info\nCannot connect to the Docker daemon at <docker.sock>. Is the docker daemon running?\n")),(0,o.kt)("p",null,"you need to run the daemon first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo systemctl start docker\n")),(0,o.kt)("h3",{id:"start-a-proxy-in-a-docker-container"},"Start a proxy in a Docker container"),(0,o.kt)("p",null,"Create and run a proxy container on the daemon.\nWhen starting Docker, you need to set the ",(0,o.kt)("em",{parentName:"p"},"CONFIG")," environment variable, which can take one of the following values: ",(0,o.kt)("em",{parentName:"p"},"local"),", ",(0,o.kt)("em",{parentName:"p"},"devnet"),", ",(0,o.kt)("em",{parentName:"p"},"testnet"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo docker run --rm -ti --network=host -e CONFIG=<network mode> -v <path-to-keypair-file/id.json>:/root/.config/solana/id.json cybercoredev/proxy:v0.2.0\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The command line options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--rm")," \u2014 delete a container when the command is completed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-ti")," \u2014 allocate a pseudo-TTY connected to the container\u2019s stdin; creating an interactive bash shell in the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--network host")," \u2014 use host network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e CONFIG=<network mode>")," \u2014 specifies a Solana cluster operating mode; either ",(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG=devnet")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG=testnet")," is recommended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v <path-to-keypair-file/id.json>:/root/.config/solana/id.json")," \u2014 specifies the path to the .JSON file where your keypair is stored and passes your private key to the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cybercoredev/proxy:v0.2.0")," \u2014 the specific proxy image.")),(0,o.kt)("p",null,"This command line will automatically perform all the actions required to launch a Docker container and run a proxy."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo docker run --rm -ti --network=host -e CONFIG=devnet -v ~/.config/solana/id.json:/root/.config/solana/id.json cybercoredev/proxy:v0.2.0\n")),(0,o.kt)("h3",{id:"config-values"},"CONFIG values"),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," value (devnet/testnet/local), by default, the corresponding variables are set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SOLANA_URL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NEON_CHAIN_ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NEON_CLI_TIMEOUT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EVM_LOADER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"COLLATERAL_POOL_BASE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ETH_TOKEN_MINT"))),(0,o.kt)("p",null,"When you start Docker, you can override all these parameters by specifying different values for them on the command line. The table below shows default values for the following variables:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"SOLANA_URL"),(0,o.kt)("th",{parentName:"tr",align:"left"},"NEON_CHAIN_ID"),(0,o.kt)("th",{parentName:"tr",align:"left"},"NEON_CLI_TIMEOUT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"https://api.devnet.solana.com")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6e"),(0,o.kt)("td",{parentName:"tr",align:"left"},"10 s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"https://api.testnet.solana.com")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"15 s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"http://localhost:8899")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0,9 s")))),(0,o.kt)("h4",{id:"solana_url"},"SOLANA_URL"),(0,o.kt)("p",null,"Specifies a Solana RPC endpoint that a proxy is connecting to. If you specify ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG=local")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SOLANA_URL=<your node URL>"),", then requests of a proxy will be sent to your node."),(0,o.kt)("h4",{id:"neon_chain_id"},"NEON_CHAIN_ID"),(0,o.kt)("p",null,"You can run a proxy with your own chain by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CHAIN_ID"),".  "),(0,o.kt)("h4",{id:"neon_cli_timeout"},"NEON_CLI_TIMEOUT"),(0,o.kt)("p",null,"In Neon EVM, a transaction is run for emulation before execution to determine the accounts that will be involved in it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," variable specifies the time (in seconds) required for a transaction to be executed."),(0,o.kt)("p",null,"The emulation execution time is affected by the following factors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The geographical distance between a node and proxy."),(0,o.kt)("li",{parentName:"ul"},"The load of the node due to processing requests at the moment.")),(0,o.kt)("p",null,"Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," time too short may not be sufficient to complete a transaction and pack it into a block. Therefore, ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," is set to the smallest value for ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG = local"),". Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," value too high may block other users from accessing this node."),(0,o.kt)("h4",{id:"evm_loader"},"EVM_LOADER"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"EVM_LOADER"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"EVM_LOADER"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"EVM_LOADER=deploy"),", then the new Neon EVM will be deployed.  "),(0,o.kt)("h4",{id:"collateral_pool_base"},"COLLATERAL_POOL_BASE"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"COLLATERAL_POOL_BASE"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"COLLATERAL_POOL_BASE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"7SBdHNeF9FFYySEoszpjZXXQsAiwa5Lzpsz6nUJWusEx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"7SBdHNeF9FFYySEoszpjZXXQsAiwa5Lzpsz6nUJWusEx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"COLLATERAL_POOL_BASE=deploy"),", then the new collateral pool accounts will be created."),(0,o.kt)("h4",{id:"eth_token_mint"},"ETH_TOKEN_MINT"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"ETH_TOKEN_MINT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT=deploy"),", then the new token will be created."))}c.isMDXComponent=!0}}]);