"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4568],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(h,s(s({ref:n},p),{},{components:t})):o.createElement(h,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7458:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],l={title:"Setting Up the Local Neon EVM Environment"},i=void 0,c={unversionedId:"developing/dev_environment/solana_cluster/cluster_installation",id:"developing/dev_environment/solana_cluster/cluster_installation",title:"Setting Up the Local Neon EVM Environment",description:"This step-by-step guide describes how to install, configure, and test the local Solana cluster with Neon EVM onboard. It will help new developers create their own environment and run Ethereum programs wrapped into the Neon EVM.",source:"@site/docs/developing/dev_environment/solana_cluster/cluster_installation.md",sourceDirName:"developing/dev_environment/solana_cluster",slug:"/developing/dev_environment/solana_cluster/cluster_installation",permalink:"/docs/developing/dev_environment/solana_cluster/cluster_installation",tags:[],version:"current",frontMatter:{title:"Setting Up the Local Neon EVM Environment"},sidebar:"tutorialSidebar",previous:{title:"Connecting to the Neon Proxy",permalink:"/docs/developing/dev_environment/connect_to_solana_via_proxy"},next:{title:"Using Remix",permalink:"/docs/developing/deploy_facilities/using_remix"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up the Neon Local Workspace Environment",id:"setting-up-the-neon-local-workspace-environment",level:2},{value:"docker-compose.yml",id:"docker-composeyml",level:4},{value:"How to run it in bash",id:"how-to-run-it-in-bash",level:4},{value:"docker-compose.yml",id:"docker-composeyml-1",level:4},{value:"How to Run It in Bash",id:"how-to-run-it-in-bash-1",level:4},{value:"docker-compose.yml",id:"docker-composeyml-2",level:4},{value:"How to Run It in Bash",id:"how-to-run-it-in-bash-2",level:4},{value:"docker-compose.yml",id:"docker-composeyml-3",level:4},{value:"How To Run It in Bash",id:"how-to-run-it-in-bash-3",level:4},{value:"docker-compose.yml",id:"docker-composeyml-4",level:4},{value:"How to Run It in Bash",id:"how-to-run-it-in-bash-4",level:4},{value:"docker-compose.yml",id:"docker-composeyml-5",level:4},{value:"How to Run It in Bash",id:"how-to-run-it-in-bash-5",level:4},{value:"full_test_suite/docker-compose.yml",id:"full_test_suitedocker-composeyml",level:4},{value:"full_test_suite/local.env",id:"full_test_suitelocalenv",level:4},{value:"How to Run It in Bash",id:"how-to-run-it-in-bash-6",level:4},{value:"Logs",id:"logs",level:2},{value:"Remix and MetaMask with the Neon EVM",id:"remix-and-metamask-with-the-neon-evm",level:2},{value:"Truffle Suite with Neon EVM",id:"truffle-suite-with-neon-evm",level:2},{value:"Common Truffle Settings",id:"common-truffle-settings",level:3},{value:"Contract Creation",id:"contract-creation",level:3},{value:"Testing",id:"testing",level:3},{value:"Possible Problems",id:"possible-problems",level:3}],m={toc:u};function d(e){var n=e.components,l=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This step-by-step guide describes how to install, configure, and test the local Solana cluster with Neon EVM onboard. It will help new developers create their own environment and run Ethereum programs wrapped into the Neon EVM.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://neon-labs.org/"},"Neon EVM")," is a solution that performs transaction execution outside layer 1. The development process can be run on any modern Linux or Mac system, though this document is based on an Ubuntu 20.04 experience."),(0,a.kt)("p",null,"All the services in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Neon EVM environment"))," presented by the docker-compose configuration files can be interchangeably substituted with their experimental versions in order to develop and test each service independently. To resolve issues, the Neon engineer has to be able to replace any service with a customized one according to the current requirements. You are welcome to change the following ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," configuration files based on your needs. Also, you can bring them altogether in a single docker-compose file, it is important to provide dependencies according to the following sequence."),(0,a.kt)("p",null,"Before you start to build your local environment, make sure you have all the ",(0,a.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker")," \u2014 for docker installation, please follow instructions at: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Compose")," \u2014 Docker Compose is required to start up containers at: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Solana Tool Suite")," \u2014 for interaction with Solana, we need to install Solana CLI Tools: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.solana.com/ru/cli/install-solana-cli-tools"},"https://docs.solana.com/ru/cli/install-solana-cli-tools")),(0,a.kt)("li",{parentName:"ul"},"A Chromium-based ",(0,a.kt)("strong",{parentName:"li"},"browser")," \u2014 for ",(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")," and ",(0,a.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"Remix"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Node package manager")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/nodejs/nodejs_npm.asp"},"Node.js/npm")," to interact with he Neon EVM with ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3"},"Web3")," and ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3-eth"},"Eth")," modules.")),(0,a.kt)("h2",{id:"setting-up-the-neon-local-workspace-environment"},"Setting up the Neon Local Workspace Environment"),(0,a.kt)("p",null,"Currently, the most flexible way is to use the set of independent docker containers sharing the common external network. To create the network called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"local"))," that will be used over the docker containers, just input the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create local\n")),(0,a.kt)("p",null,"If you want to bind some ports from the service to the host machine to be able to connect them and work with a service independently, just extend a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," configurations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ports")," instruction. For example, you can bind the Solana (8899, 8900)- or Proxy (9090)-related ports to the host machine this way."),(0,a.kt)("p",null,"After establishing the local network, it's time to start the following containers:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"1. Solana validator service"),(0,a.kt)("p",null,"This service presents the Solana validator running inside the container"),(0,a.kt)("p",null,"Once you deploy the environment, you'll have the Solana RPC endpoint working from the docker container at the 9090 port. The folder named \"solana_state\" will be created as well. It contains the Solana ledger to keep the state over restarts. If you need to reset the ledger, just remove this folder and it'll be recreated the next time you run docker-compose."),(0,a.kt)("h4",{id:"docker-composeyml"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    version: "3"\n    services:\n      solana:\n        container_name: solana\n        image: neonlabsorg/solana:${SOLANA_REVISION:-v1.9.12-testnet}\n        environment:\n          SOLANA_URL: http://solana:8899\n          RUST_LOG: solana_runtime::system_instruction_processor=trace,solana_runtime::message_processor=debug,solana_bpf_loader=debug,solana_rbpf=debug\n        expose:\n          - 8899\n          - 8900\n        networks:\n          - net\n        healthcheck:\n          test: [ CMD-SHELL, "solana cluster-version -u http://solana:8899" ]\n          interval: 5s\n          timeout: 10s\n          retries: 10\n          start_period: 10s\n        volumes:\n          - "./solana_state:/opt/solana/config/"\n\n    networks:\n      net:\n        external: yes\n        name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash"},"How to run it in bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f solana/docker-compose.yml pull\n$ docker-compose -f solana/docker-compose.yml up -d\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"2. EVM loader service"),(0,a.kt)("p",null,"This container helps deploy the Neon EVM base contract onto Solana that listens for incoming connections on the port 8899"),(0,a.kt)("h4",{id:"docker-composeyml-1"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  evm_loader:\n    container_name: evm_loader\n    image: neonlabsorg/evm_loader:latest\n    environment:\n      - SOLANA_URL=http://solana:8899\n    networks:\n      - net\n    command: bash -c "create-test-accounts.sh 1 && deploy-evm.sh"\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-1"},"How to Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   $ docker-compose -f evm-loader/docker-compose.yml pull\n   $ docker-compose -f evm-loader/docker-compose.yml up\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"3. Database services"),(0,a.kt)("p",null,"This container aims to handle the database that stores all the relevant Ethereum processing metadata linked to each other: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"transactions")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"blocks")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"receipts")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accounts"))," etc. This data is consumed by the ",(0,a.kt)("strong",{parentName:"p"},"indexer")," service."),(0,a.kt)("h4",{id:"docker-composeyml-2"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  postgres:\n    container_name: postgres\n    image: postgres:14.0\n    command: postgres -c \'max_connections=1000\'\n    environment:\n      POSTGRES_DB: neon-db\n      POSTGRES_USER: neon-proxy\n      POSTGRES_PASSWORD: neon-proxy-pass\n    hostname: postgres\n    healthcheck:\n      test: [ CMD-SHELL, "pg_isready -h postgres -p 5432" ]\n      interval: 5s\n      timeout: 10s\n      retries: 10\n      start_period: 5s\n    networks:\n      - net\n    ports:\n      - "127.0.0.1:5432:5432"\n    expose:\n      - "5432"\n\n  dbcreation:\n    container_name: dbcreation\n    image: neonlabsorg/proxy:latest\n    environment:\n      SOLANA_URL: http://solana:8899\n      POSTGRES_DB: neon-db\n      POSTGRES_USER: neon-proxy\n      POSTGRES_PASSWORD: neon-proxy-pass\n      POSTGRES_HOST: postgres\n    entrypoint: proxy/run-dbcreation.sh\n    networks:\n      - net\n    depends_on:\n      postgres:\n        condition: service_healthy\n\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-2"},"How to Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f postgres/docker-compose.yml pull\n$ docker-compose -f postgres/docker-compose.yml up -d\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"4. Indexer service"),(0,a.kt)("p",null,"The indexer service indexes all the relevant Ethereum processing metadata consisting of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"signatures")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"transactions")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"blocks")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"receipts")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accounts")),", etc. It gathers all this data from the Solana blockchain, filtering them by the EVM contract address. It also makes it possible to provide our users with the Ethereum API according to the data provided by the whole known operators."),(0,a.kt)("h4",{id:"docker-composeyml-3"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  indexer:\n    container_name: indexer\n    image: neonlabsorg/proxy:latest\n    environment:\n      SOLANA_URL: http://solana:8899\n      POSTGRES_DB: neon-db\n      POSTGRES_USER: neon-proxy\n      POSTGRES_HOST: postgres\n      POSTGRES_PASSWORD: neon-proxy-pass\n      CONFIG: ci\n      START_SLOT: LATEST\n    hostname: indexer\n    entrypoint: proxy/run-indexer.sh\n    networks:\n      - net\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-3"},"How To Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f indexer/docker-compose.yml pull\n$ docker-compose -f indexer/docker-compose.yml up -d\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"5. Proxy service"),"The Proxy service is a core service that allows Ethereum-like transactions to be processed on [Solana](https://docs.solana.com/introduction), taking full advantage of the functionality native to Solana, including the ability to execute transactions in parallel. It's available on 9090 port.",(0,a.kt)("h4",{id:"docker-composeyml-4"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  proxy:\n    container_name: proxy\n    image: neonlabsorg/proxy:latest\n    environment:\n      - POSTGRES_DB=neon-db\n      - POSTGRES_USER=neon-proxy\n      - POSTGRES_PASSWORD=neon-proxy-pass\n      - POSTGRES_HOST=postgres\n      - SOLANA_URL=http://solana:8899\n      - EXTRA_GAS=5000\n      - EVM_LOADER=53DfF883gyixYNXnM7s5xhdeyV8mVk9T4i2hGV9vG9io\n      - CONFIG=ci\n      - LOG_NEON_CLI_DEBUG=YES\n      - USE_COMBINED_START_CONTINUE=yes\n      - NEON_CLI_TIMEOUT=60\n      - NEW_USER_AIRDROP_AMOUNT=0\n      - WRITE_TRANSACTION_COST_IN_DB=NO\n      - START_SLOT=LATEST\n      - PERM_ACCOUNT_LIMIT=16\n    hostname: proxy\n    entrypoint: ./proxy/run-proxy.sh\n    ports:\n      - "9090:9090"\n    expose:\n      - "9090"\n    networks:\n      - net\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-4"},"How to Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f proxy/docker-compose.yml pull\n$ docker-compose -f proxy/docker-compose.yml up -d\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"6. Faucet service"),"The Faucet service provides the liquidity in `NEON` to all the accounts that are mentioned in the incoming requests.",(0,a.kt)("h4",{id:"docker-composeyml-5"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n\n  faucet:\n    container_name: faucet\n    image: neonlabsorg/faucet:latest\n    environment:\n      - FAUCET_RPC_BIND=0.0.0.0\n      - FAUCET_RPC_PORT=3333\n      - SOLANA_URL=http://solana:8899\n      - NEON_ETH_MAX_AMOUNT=50000\n      - EVM_LOADER=53DfF883gyixYNXnM7s5xhdeyV8mVk9T4i2hGV9vG9io\n      - FAUCET_RPC_ALLOWED_ORIGINS=["https://neonswap.live"]\n      - FAUCET_WEB3_ENABLE=false\n      - FAUCET_SOLANA_ENABLE=true\n      - NEON_OPERATOR_KEYFILE=/opt/faucet/id.json\n      - SOLANA_COMMITMENT=confirmed\n    entrypoint: /opt/faucet/faucet --config /opt/proxy/faucet.conf run\n    ports:\n      - 3333:3333\n    expose:\n      - "3333"\n    networks:\n      - net\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-5"},"How to Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f faucet/docker-compose.yml pull\n$ docker-compose -f faucet/docker-compose.yml up -d\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"7. Full test suite service"),(0,a.kt)("p",null,"The full test suite provides in general the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/learn/writing-automated-tests"},"OpenZeppelin tests")," to make sure the infrastructure deployed by this guide works properly. At the end, the ",(0,a.kt)("inlineCode",{parentName:"p"},"full test suite")," outputs the result in the following form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Full test passing - 1743\nFull test threshold - 1700\nCheck if 1743 is greater or equal 1700\n")),(0,a.kt)("h4",{id:"full_test_suitedocker-composeyml"},"full_test_suite/docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n\n  full_test_suite:\n    container_name: ${FTS_CONTAINER_NAME:-full_test_suite}\n    image: ${FTS_IMAGE:-neonlabsorg/full_test_suite:develop}\n    entrypoint: ./run-full-test-suite.sh 2>/dev/null\n    environment:\n      - NETWORK_NAME=${NETWORK_NAME}\n      - PROXY_URL=${PROXY_URL}\n      - NETWORK_ID=${NETWORK_ID}\n      - REQUEST_AMOUNT=${REQUEST_AMOUNT}\n      - FAUCET_URL=${FAUCET_URL}\n      - USE_FAUCET=${USE_FAUCET}\n      - SOLANA_URL=${SOLANA_URL}\n      - FTS_USERS_NUMBER=${FTS_USERS_NUMBER}\n      - FTS_JOBS_NUMBER=${FTS_JOBS_NUMBER}\n\n    networks:\n      - net\n\nnetworks:\n  net:\n    external: yes\n    name: local\n')),(0,a.kt)("h4",{id:"full_test_suitelocalenv"},"full_test_suite/local.env"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NETWORK_NAME=local\nPROXY_URL=http://proxy:9090/solana\nNETWORK_ID=111\nREQUEST_AMOUNT=20000\nFAUCET_URL=http://faucet:3333/request_neon\nUSE_FAUCET=true\nSOLANA_URL=http://solana:8899\nFTS_USERS_NUMBER=15\nFTS_JOBS_NUMBER=8\n")),(0,a.kt)("h4",{id:"how-to-run-it-in-bash-6"},"How to Run It in Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -f full_test_suite/docker-compose.yml pull\n$ docker-compose -f full_test_suite/docker-compose.yml --env-file full_test_suite/local.env up\n"))),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("p",null,"After following the previous steps, you will have four running containers for the Neon EVM local environment: ",(0,a.kt)("strong",{parentName:"p"},"solana"),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"postgres")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"proxy")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"indexer")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'49c864f47ccd   neonlabsorg/solana:v1.9.12-testnet   "./run.sh"               About an hour ago   Up About an hour (healthy)   8003/udp, 0.0.0.0:8899-8900->8899-8900/tcp, :::8899-8900->8899-8900/tcp, 9900/tcp   solana\n92f6b4492894   neonlabsorg/proxy:latest             "./proxy/run-proxy.sh"   46 hours ago        Up About an hour             0.0.0.0:9090->9090/tcp, :::9090->9090/tcp                                           proxy\n932d4d860629   neonlabsorg/proxy:latest             "proxy/run-indexer.sh"   46 hours ago        Up About an hour             9090/tcp                                                                            indexer\n5a7df37069fc   postgres:14.0                        "docker-entrypoint.s\u2026"   47 hours ago        Up About an hour (healthy)   127.0.0.1:5432->5432/tcp                                                            postgres\n')),(0,a.kt)("p",null,"To look for events or errors, just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs")," for either the ",(0,a.kt)("inlineCode",{parentName:"p"},"solana")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ docker logs -f solana 2>&1 | grep -v "Program Vote111111111111111111111111111111111111111"\n$ docker logs -f proxy\n')),(0,a.kt)("h2",{id:"remix-and-metamask-with-the-neon-evm"},"Remix and MetaMask with the Neon EVM"),(0,a.kt)("p",null,'Set up the "MetaMask" Chromium extension to connect to the proxy via Custom RPC at ',(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/solana"),". The following image describes how to set up the local Solana connection:  "),(0,a.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7308).Z,width:"300",height:"402"}))),(0,a.kt)("p",null,"Note: Once you create or import a new account in MetaMask, some NEONs will be airdropped into it."),(0,a.kt)("p",null,"Open Remix (also in Chromium) and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Injected Web3")," environment. You can deploy EVM-wrapped smart contracts on Solana and input these instructions:  "),(0,a.kt)("div",{class:"neon-img-box-300",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1478).Z,width:"300",height:"455"}))),(0,a.kt)("h2",{id:"truffle-suite-with-neon-evm"},"Truffle Suite with Neon EVM"),(0,a.kt)("p",null,"Truffle is a popular platform to deploy and test Solidity programs. This section shows you how to check the compatibility of the Neon EVM and the Truffle suite."),(0,a.kt)("p",null,"In the new terminal, create a Truffle project and deploy contracts into EVM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo npm install -g truffle\n$ mkdir myproject && cd myproject\n$ truffle init\n$ npm install web3 @truffle/hdwallet-provider\n")),(0,a.kt)("h3",{id:"common-truffle-settings"},"Common Truffle Settings"),(0,a.kt)("p",null,"Put your ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," into the Truffle root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ echo \'const Web3 = require("web3");\n\nconst Web3eth = require("web3-eth");\nconst HDWalletProvider = require("@truffle/hdwallet-provider");\n\nconst web3eth = new Web3eth();\nconst accs = Array.from(Array(10), (_, x) => web3eth.accounts.create());\nconst privateKeys = accs.map((account) => account.privateKey);\n\nmodule.exports = {\n  networks: {\n    solana: {\n      provider: new HDWalletProvider(privateKeys, "http://127.0.0.1:9090/solana"),\n      from: accs[0].publicKey,\n      network_id: "111",\n      gas: 3000000,\n      gasPrice: 1000000000,\n    }\n  },\n\n  compilers: {\n    solc: {\n      version: "0.8.9"\n    }\n  }\n};\' > truffle-config.js\n')),(0,a.kt)("h3",{id:"contract-creation"},"Contract Creation"),(0,a.kt)("p",null,"Create a trivial contract at ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts/Storage.sol"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ echo '// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\ncontract Storage {\n    uint256 number;\n\n    function put(uint256 num) public {\n        number = num;\n    }\n\n    function get() public view returns (uint256) {\n        return number;\n    }\n}' > contracts/Storage.sol\n")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"You can now start testing ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," invocations with Truffle facility:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ echo \'const Storage = artifacts.require("Storage");\n\ncontract("Storage", (accounts) => {\n    let storage;\n\n    beforeEach(async () => {\n        storage = await Storage.new();\n    });\n\n    it("should store a value", async () => {\n        const setResult = await storage.put(248);\n        assert.equal(setResult.receipt.status, true);\n        const value = await storage.get();\n        assert.equal(value, 248);\n    })\n})\' > test/Storage.test.js\n\n$ truffle test test/Storage.test.js --network solana\n')),(0,a.kt)("h3",{id:"possible-problems"},"Possible Problems"),(0,a.kt)("p",null,"If for some reasons you remove the Solana container and run it again, then all related accounts stored in foreign systems get invalid from that moment. That's why you need to re-run the proxy container and reset the state of MetaMask and Truffle as well, to make all relations consistent."),(0,a.kt)("p",null,"To reset the MetaMask state, follow the steps at ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Reset Account"),"."),(0,a.kt)("p",null,"The Truffle state can be reset by redeploying it in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ truffle compile --network solana --reset\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Deploy your Solidity programs on the ",(0,a.kt)("a",{parentName:"em",href:"https://solana.com"},"Solana"),"-driven ",(0,a.kt)("a",{parentName:"em",href:"https://neon-labs.org/"},"Neon EVM")),"."))}d.isMDXComponent=!0},7308:function(e,n,t){n.Z=t.p+"assets/images/cluster-install-1-2a934237b77806464af491c468c92f13.png"},1478:function(e,n,t){n.Z=t.p+"assets/images/cluster-install-2-0e37ce12c2afc407dcdd02b669044898.png"}}]);