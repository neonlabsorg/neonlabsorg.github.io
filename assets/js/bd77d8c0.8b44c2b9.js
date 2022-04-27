"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2624],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5183:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Running a Proxy server"},p=void 0,s={unversionedId:"operating/operator_guide",id:"operating/operator_guide",title:"Running a Proxy server",description:"This guide is for people who want to register with Neon EVM as a proxy operator for processing transactions on Solana. It is assumed these people have previous experience compiling Solana-based blockchain nodes or have worked as blockchain validators.",source:"@site/docs/operating/operator_guide.md",sourceDirName:"operating",slug:"/operating/operator_guide",permalink:"/docs/operating/operator_guide",tags:[],version:"current",frontMatter:{title:"Running a Proxy server"},sidebar:"tutorialSidebar",previous:{title:"Operator Requirements",permalink:"/docs/operating/operator_requirements"},next:{title:"Governance Overview",permalink:"/docs/governance/governance_overview"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Duties of a Proxy Operator",id:"duties-of-a-proxy-operator",level:2},{value:"Installation Using Docker",id:"installation-using-docker",level:2},{value:"Run a Daemon",id:"run-a-daemon",level:3},{value:"Start a Proxy in a Docker Container",id:"start-a-proxy-in-a-docker-container",level:3},{value:"CONFIG values",id:"config-values",level:3},{value:"SOLANA_URL",id:"solana_url",level:4},{value:"NEON_CLI_TIMEOUT",id:"neon_cli_timeout",level:4},{value:"CANCEL_TIMEOUT",id:"cancel_timeout",level:4},{value:"MINIMAL_GAS_PRICE",id:"minimal_gas_price",level:4},{value:"EVM_LOADER",id:"evm_loader",level:4},{value:"NEON_TOKEN_MINT",id:"neon_token_mint",level:4},{value:"Prometheus metrics in Proxy",id:"prometheus-metrics-in-proxy",level:2},{value:"Proxy Prometheus Metrics",id:"proxy-prometheus-metrics",level:3},{value:"Indexer Prometheus Metrics",id:"indexer-prometheus-metrics",level:3},{value:"Prometheus formulas examples",id:"prometheus-formulas-examples",level:3},{value:"Profit and Loss monitoring",id:"profit-and-loss-monitoring",level:4},{value:"Solana Node status",id:"solana-node-status",level:4},{value:"PostgreSQL DB status",id:"postgresql-db-status",level:4},{value:"Prometheus configuration example",id:"prometheus-configuration-example",level:3},{value:"proxy-cli",id:"proxy-cli",level:2},{value:"Example of execution",id:"example-of-execution",level:3},{value:"Commands",id:"commands",level:3},{value:"Output example",id:"output-example",level:4}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This guide is for people who want to register with Neon EVM as a proxy operator for processing transactions on Solana. It is assumed these people have previous experience compiling Solana-based blockchain nodes or have worked as blockchain validators.")),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Ethereum users have the opportunity to run their smart contract-based applications on Solana via Neon EVM. Smart contracts generate transactions in accordance with the Ethereum rules and submit them to Neon EVM. Since the structures of Ethereum and Solana transactions differ from each other, Neon EVM contains special proxy servers that are responsible for converting and executing transactions in Solana. These servers are configured and maintained by Neon EVM proxy operators."),(0,l.kt)("p",null,"This guide contains a list of the proxy operator\u2019s duties, as well as instructions to ensure the successful operation of a proxy and the successful execution of transactions."),(0,l.kt)("h2",{id:"duties-of-a-proxy-operator"},"Duties of a Proxy Operator"),(0,l.kt)("p",null,"A proxy operator\u2019s main task is to install software on a server to accept a transaction formed according to Ethereum rules, and to ensure its execution in Solana. This involves:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configuring a proxy server to perform the following operations:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Receiving requests over Web3 API protocol."),(0,l.kt)("li",{parentName:"ul"},"Shaping responses using Web3 API protocol."),(0,l.kt)("li",{parentName:"ul"},"Converting transactions to the Solana format."))),(0,l.kt)("li",{parentName:"ul"},"Connecting a proxy server to a Solana cluster RPC endpoint."),(0,l.kt)("li",{parentName:"ul"},"Successfully executing transactions.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All operations related to the execution of transactions on Solana are performed by the software installed on your node.")),(0,l.kt)("h2",{id:"installation-using-docker"},"Installation Using Docker"),(0,l.kt)("p",null,"After you have chosen the node (Neon EVM proxy) that meets the listed recommendations, you can start installing a proxy operator software on it."),(0,l.kt)("h3",{id:"run-a-daemon"},"Run a Daemon"),(0,l.kt)("p",null,"Make sure that you have a daemon running. If you see something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker info\n\nCannot connect to the Docker daemon at <docker.sock>. Is the docker daemon running?\n")),(0,l.kt)("p",null,"you need to run the daemon and PostgreSQL services first:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl start docker\n$ sudo docker run --rm -ti --network=host -e POSTGRES_HOST=<localhost|postgres> -e POSTGRES_DB=<database> -e POSTGRES_USER=<username> -e POSTGRES_PASSWORD=<password> --name=postgres postgres:14.0\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The command line options:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--rm")," \u2014 Delete a container when the command is completed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-ti")," \u2014 Allocate a pseudo-TTY connected to the container\u2019s stdin; creating an interactive bash shell in the container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--network host")," \u2014 Use the host network."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e POSTGRES_HOST=<localhost|postgres>")," \u2014 Specifies DB hosting; ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost")," is set by default and is recommended; the parameter can be skipped if you use PostgreSQL hosted locally."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e POSTGRES_DB=<database>")," \u2014 Specifies the name of DB; ",(0,l.kt)("inlineCode",{parentName:"li"},"neon-db")," is recommended."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e POSTGRES_USER=<username>")," \u2014 Specifies a username of DB; ",(0,l.kt)("inlineCode",{parentName:"li"},"neon-proxy")," is recommended."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e POSTGRES_PASSWORD=<password>")," \u2014 Specifies a username's password; ",(0,l.kt)("inlineCode",{parentName:"li"},"neon-proxy-pass")," is recommended."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--name=postgres")," \u2014 Specifies a version of PostgreSQL; ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres:14.0")," is recommended.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo docker run --rm -ti --network=host -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass --name=postgres postgres:14.0\n")),(0,l.kt)("h3",{id:"start-a-proxy-in-a-docker-container"},"Start a Proxy in a Docker Container"),(0,l.kt)("p",null,"Create and run a proxy container on the daemon.\nWhen starting Docker, you need to set the ",(0,l.kt)("em",{parentName:"p"},"CONFIG")," environment variable, which can take one of the following values: ",(0,l.kt)("em",{parentName:"p"},"local"),", ",(0,l.kt)("em",{parentName:"p"},"devnet"),", ",(0,l.kt)("em",{parentName:"p"},"testnet"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo docker run --rm -ti --network=host -e CONFIG=<network> -e POSTGRES_DB=<database> -e POSTGRES_USER=<username> -e POSTGRES_PASSWORD=<password> -v <path-to-keypair-file/id.json>:/root/.config/solana/id.json neonlabsorg/proxy:v0.5.1\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The command line options:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e CONFIG=<network>")," \u2014 Specifies a Solana network configuration; ",(0,l.kt)("inlineCode",{parentName:"li"},"CONFIG=devnet")," is recommended."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-v <path-to-keypair-file/id.json>:/root/.config/solana/id.json")," \u2014 Specifies the path to the .JSON file where your keypair is stored and passes your private key to the container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"neonlabsorg/proxy:v0.5.1")," \u2014 The specific proxy image.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The option ",(0,l.kt)("inlineCode",{parentName:"p"},"-v <path-to-keypair-file>")," is only relevant for authorized operators. If you are not yet registered as an operator and are just about to become one, you do not need to specify this option.")),(0,l.kt)("p",null,"This command line will automatically perform all the actions required to launch a Docker container and run a proxy."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo docker run --rm -ti --network=host -e CONFIG=devnet -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass neonlabsorg/proxy:v0.5.1\n")),(0,l.kt)("h3",{id:"config-values"},"CONFIG values"),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG")," value (devnet/testnet/local), by default, the corresponding variables are set:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SOLANA_URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NEON_CLI_TIMEOUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CANCEL_TIMEOUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POSTGRES_HOST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MINIMAL_GAS_PRICE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EVM_LOADER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NEON_TOKEN_MINT"))),(0,l.kt)("p",null,"When you start Docker, you can override all these parameters by specifying different values for them on the command line. The table below shows default values for the following variables:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,l.kt)("th",{parentName:"tr",align:"left"},"SOLANA_URL"),(0,l.kt)("th",{parentName:"tr",align:"left"},"NEON_CLI_TIMEOUT"),(0,l.kt)("th",{parentName:"tr",align:"left"},"CANCEL_TIMEOUT"),(0,l.kt)("th",{parentName:"tr",align:"left"},"POSTGRES_HOST"),(0,l.kt)("th",{parentName:"tr",align:"left"},"MINIMAL_GAS_PRICE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"https://api.devnet.solana.com")),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 (s)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"60 (slot)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"https://api.testnet.solana.com")),(0,l.kt)("td",{parentName:"tr",align:"left"},"15 (s)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"60 (slot)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"local"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"http://localhost:8899")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0,9 (s)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 (slot)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,l.kt)("h4",{id:"solana_url"},"SOLANA_URL"),(0,l.kt)("p",null,"Specifies a Solana RPC endpoint that a proxy is connecting to. If you specify ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG=local")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"SOLANA_URL=<your node URL>"),", then the requests of a proxy will be sent to your node."),(0,l.kt)("h4",{id:"neon_cli_timeout"},"NEON_CLI_TIMEOUT"),(0,l.kt)("p",null,"In Neon EVM, a transaction is run for emulation before execution to determine the accounts that will be involved in it. The ",(0,l.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," variable specifies the time (in seconds) required for a transaction to be executed."),(0,l.kt)("p",null,"The emulation execution time is affected by the following factors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The geographical distance between a node and proxy."),(0,l.kt)("li",{parentName:"ul"},"The load of the node due to processing requests at the moment.")),(0,l.kt)("p",null,"Setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," time too short may not be sufficient to complete a transaction and pack it into a block. Therefore, ",(0,l.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," is set to the smallest value for ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG = local"),". Setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," value too high may block other users from accessing this node."),(0,l.kt)("h4",{id:"cancel_timeout"},"CANCEL_TIMEOUT"),(0,l.kt)("p",null,"This parameter limits the time (in ",(0,l.kt)("a",{parentName:"p",href:"/docs/about/terminology#slot"},"slots"),") for blocking an account. If the blocking time for the account exceeds the time specified in this parameter, an attempt will be made to cancel the transaction that blocked this account."),(0,l.kt)("h4",{id:"minimal_gas_price"},"MINIMAL_GAS_PRICE"),(0,l.kt)("p",null,"This parameter sets the lowest possible gas price specified in a transaction."),(0,l.kt)("h4",{id:"evm_loader"},"EVM_LOADER"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"EVM_LOADER"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,l.kt)("th",{parentName:"tr",align:"left"},"EVM_LOADER"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"local"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2014")))),(0,l.kt)("h4",{id:"neon_token_mint"},"NEON_TOKEN_MINT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"NEON_TOKEN_MINT"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,l.kt)("th",{parentName:"tr",align:"left"},"NEON_TOKEN_MINT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,l.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"local"),(0,l.kt)("td",{parentName:"tr",align:"left"},"HPsV9Deocecw3GeZv1FkAPNCBRfuVyfw9MMwjwRe1xaU")))),(0,l.kt)("h2",{id:"prometheus-metrics-in-proxy"},"Prometheus metrics in Proxy"),(0,l.kt)("h3",{id:"proxy-prometheus-metrics"},"Proxy Prometheus Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metrics title"),(0,l.kt)("th",{parentName:"tr",align:null},"units"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request_count"),(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"App Request Count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request_latency_seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Request latency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_total"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Incoming TX Count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_success_count"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count Of Succeeded Txs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_failed_count"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count Of Failed Txs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_in_progress"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count Of Txs Currently Processed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operator_sol_balance"),(0,l.kt)("td",{parentName:"tr",align:null},"Sols"),(0,l.kt)("td",{parentName:"tr",align:null},"Operator Balance in Sol's")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operator_neon_balance"),(0,l.kt)("td",{parentName:"tr",align:null},"Neons"),(0,l.kt)("td",{parentName:"tr",align:null},"Operator Balance in Neon's")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usd_price_sol"),(0,l.kt)("td",{parentName:"tr",align:null},"USD"),(0,l.kt)("td",{parentName:"tr",align:null},"Sol Price USD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usd_price_neon"),(0,l.kt)("td",{parentName:"tr",align:null},"USD"),(0,l.kt)("td",{parentName:"tr",align:null},"Neon Price USD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gas_price"),(0,l.kt)("td",{parentName:"tr",align:null},"alans"),(0,l.kt)("td",{parentName:"tr",align:null},"Gas Price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operator_fee"),(0,l.kt)("td",{parentName:"tr",align:null},"Percent"),(0,l.kt)("td",{parentName:"tr",align:null},"Operator Fee")))),(0,l.kt)("h3",{id:"indexer-prometheus-metrics"},"Indexer Prometheus Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metrics title"),(0,l.kt)("th",{parentName:"tr",align:null},"units"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_sol_spent"),(0,l.kt)("td",{parentName:"tr",align:null},"lamports"),(0,l.kt)("td",{parentName:"tr",align:null},"How many lamports being spend in Neon transaction per iteration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_neon_income"),(0,l.kt)("td",{parentName:"tr",align:null},"alans"),(0,l.kt)("td",{parentName:"tr",align:null},"Neons payed for transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_bpf_per_iteration"),(0,l.kt)("td",{parentName:"tr",align:null},"bpf units"),(0,l.kt)("td",{parentName:"tr",align:null},"How many BPF cycles was used in each iteration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_steps_per_iteration"),(0,l.kt)("td",{parentName:"tr",align:null},"steps"),(0,l.kt)("td",{parentName:"tr",align:null},"How many steps was used in each iteration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_count"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count of Neon transactions were completed (independent on status)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tx_canceled"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count of Neon transactions were canceled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_tx_count_by_type"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count of transactions by type(single","\\","iter","\\","iter w holder)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_sol_tx_per_neon_tx"),(0,l.kt)("td",{parentName:"tr",align:null},"tx count"),(0,l.kt)("td",{parentName:"tr",align:null},"Count of solana txs within by type(single","\\","iter","\\","iter w holder)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgres_availability"),(0,l.kt)("td",{parentName:"tr",align:null},"1 or 0 status"),(0,l.kt)("td",{parentName:"tr",align:null},"Postgres availability")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"solana_rpc_health"),(0,l.kt)("td",{parentName:"tr",align:null},"1 or 0 status"),(0,l.kt)("td",{parentName:"tr",align:null},"Solana Node status")))),(0,l.kt)("h3",{id:"prometheus-formulas-examples"},"Prometheus formulas examples"),(0,l.kt)("h4",{id:"profit-and-loss-monitoring"},"Profit and Loss monitoring"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-promql"},"sum (avg by (operator_sol_wallet) (operator_sol_balance) ) * avg by (app) (usd_price_sol) + sum (avg by (operator_neon_wallet) (operator_neon_balance) ) * avg by (app) (usd_price_neon))\n")),(0,l.kt)("h4",{id:"solana-node-status"},"Solana Node status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-promql"},'solana_rpc_health{job="indexer-monitor"}\n')),(0,l.kt)("h4",{id:"postgresql-db-status"},"PostgreSQL DB status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-promql"},'postgres_availability{job="indexer-monitor"}\n')),(0,l.kt)("h3",{id:"prometheus-configuration-example"},"Prometheus configuration example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"global:\n  scrape_interval:     15s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'proxy-monitor'\n    metrics_path: '/'\n    scrape_interval: 5s\n    static_configs:\n    - targets: ['proxy:8888']\n\n  - job_name: 'indexer-monitor'\n    metrics_path: '/'\n    scrape_interval: 5s\n    static_configs:\n    - targets: ['indexer:8887']\n")),(0,l.kt)("h2",{id:"proxy-cli"},"proxy-cli"),(0,l.kt)("h3",{id:"example-of-execution"},"Example of execution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info\n")),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},"Print full accounts (Solana accounts and Neon accounts, their balance and private key ","|"," Resource accounts and their balance) in JSON")))),(0,l.kt)("h4",{id:"output-example"},"Output example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info | python3 -m json.tool\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "accounts":[\n      {\n         "address":"BMp6gEnveANdvSvspESJUrNczuHz1GF5UQKjVLCkAZih",\n         "balance":"8972.78394124",\n         "storage":[\n            {\n               "address":"62MMKXigkapYUDBo1swJRZvyQjH37WPh8SRvpBD5WS4F",\n               "status":"FINALIZED_STORAGE",\n               "balance":"0.913152"\n            }\n         ],\n         "holder":[\n            {\n               "address":"EYb7qSkqS4wSg4wxxawCYThDRMdRhe72W4KdMjAdNbbA",\n               "status":"EMPTY",\n               "balance":"0.913152"\n            }\n         ],\n         "private":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,81,105,105,99,114,88,7,110,109,112,70,52,110,56,8,85,81,122,52,74,118,77,100,77,57,106,101,84,53,86,1,102,117,117,70,51,87,102,9,98,90,111,71,56,119,55,84,82,53,53,84,56,76,85,107,54,52,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\n         "neon_address":"0xd1b27c35c47bd37398ad6ab642b1bf63aec0ca43",\n         "neon_private":"0xa1b2c3d4e5f68dec7c7bc8c0ff17a12274ca46b6b05ec344b9203d2acb39f5be",\n         "neon_balance":"0.07031774"\n      }\n   ],\n   "total_balance":"78921.04414876",\n   "resource_balance":"54.789120",\n   "total_neon_balance":"0.71927982004647600"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info holder-accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Holder accounts owned by operator")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info holder-accounts\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"EYb7qSkqS4wSg4wxxawCYThDRMdRhe72W4KdMjAdNbbA\nDEG7mDtzEVq4zUGxxajNCnRPLnumSDPQHGMMC4zyPz9h\nDueRTJ7WvwA2csPoVeheiDnZPXfpVstSuSsffgF8baTE\n2rJszXcUPuqJkpoW2ZgMRR7sLytSMDsGkecGAiBWqimD\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info storage-accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Storage accounts owned by operator")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info storage-accounts\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"7Jt1HpgrtaKadZgCvEPfAn2p55AJi6bovrH9byVVNNKh\nBkBzYwk7dL8yYAaYxyeS9LrDBuW5vMinPf1WUWQTLMpK\n9bw592nyQzmAR94JW9SgkN6baMoY1Y236RYgukFqHrov\n2rJszXcUPuqJkpoW2ZgMRR7sLytSMDsGkecGAiBWqimD\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info solana-private-key"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Solana accounts and its private key")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info solana-private-key\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"BMp6gEnveANdvSvspESJUrNczuHz1GF5UQKjVLCkAZih    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 99, 114, 88, 57, 110, 109, 112, 70, 52, 110, 56, 98, 85, 81, 122, 52, 74, 118, 77, 100, 77, 57, 106, 101, 84, 53, 86, 81, 102, 117, 117, 70, 51, 87, 102, 89, 98, 90, 111, 71, 56, 119, 55, 84, 82, 53, 53, 84, 56, 76, 85, 107, 54, 52, 50, 121, 110, 116, 68, 90, 121, 53, 121, 65, 54, 76, 86, 112, 109]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info neon-private-key"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Neon accounts and its private key")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info neon-private-key\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"0xd1b27c35c47bd37398ad6ab642b1bf63aec0ca43    0xa1b2c3d4e5f68dec7c7bc8c0ff17a12274ca46b6b05ec344b9203d2acb39f5be\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info neon-address"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Neon accounts and their balances plus total balance")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info neon-address\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"0xb1239ffe4a30d4ad678f42cd5e56ce13c0daf3e9    5.293965780000000000\n0x910bc86b92aa1bda080648ae19216e7ebe8dc340    3.511933000000000000\n0x181fe64831130575ec6ea6a1de0183464dc13f8f    5.461316080000000000\n0xc6e5512efdb0c693c9a78755754f577e2fbb742d    5.969624380000078940\ntotal_balance    49.943540400046476000\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info solana-accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"Print list of Solana accounts balances and Resource accounts balances plus total balance")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec proxy ./proxy-cli.sh info solana-accounts\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"BMp6gEnveANdvSvspESJUrNczuHz1GF5UQKjVLCkAZih    8,972.619517760\nholder:\n    EYb7qSkqS4wSg4wxxawCYThDRMdRhe72W4KdMjAdNbbA    0.913152000\n    DEG7mDtzEVq4zUGxxajNCnRPLnumSDPQHGMMC4zyPz9h    0.913152000\nstorage:\n    62MMKXigkapYUDBo1swJRZvyQjH37WPh8SRvpBD5WS4F    0.913152000\n    BdX7H8cFVJwmmsRjZTYHSfaVVoRGijUkYT3T7FgrdejE    0.913152000\n9kPRbbwKL5SYELF4cZqWWFmP88QkKys51DoaUBx8eK73    4,995.719095600\nholder:\n    BKLT27mXenjyeoKc7Fn8xkrezrNubuRdzbq19mmxW9vS    0.913152000\n    Wup8BGZ1HiKPo7iw8owzCpgX5fnw2jVsk9gNLpi3Jtq    0.913152000\nstorage:\n    5ky8gugmaB9YhVdgrfkwXxeqnQ2V8zEQ9jtxJKC4Ewg1    0.913152000\n    HhMTo9nvqoiUMiXuDBUfSsbaxUdEicUxVzB7Sb5qZF5C    0.913152000\n...\ntotal_balance       78,913.573017880\nresource_balance    54.789120000\n")))}c.isMDXComponent=!0}}]);