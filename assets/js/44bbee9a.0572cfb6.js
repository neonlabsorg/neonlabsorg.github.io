"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[771],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Solana Clusters"},l=void 0,c={unversionedId:"clusters/solana_cluster",id:"clusters/solana_cluster",isDocsHomePage:!1,title:"Solana Clusters",description:"A Solana cluster is a set of independently owned computers working together to verify the output of user-submitted programs. A Solana cluster can be utilized any time a user wants to preserve an immutable record of events in time or programmatic interpretations of those events.",source:"@site/docs/clusters/solana_cluster.md",sourceDirName:"clusters",slug:"/clusters/solana_cluster",permalink:"/docs/clusters/solana_cluster",tags:[],version:"current",frontMatter:{title:"Solana Clusters"},sidebar:"tutorialSidebar",previous:{title:"Governance User Interface",permalink:"/docs/governance/governance_ui"},next:{title:"Neon Proxy RPC Endpoints",permalink:"/docs/clusters/neon_proxy_rpc_endpoints"}},p=[{value:"Endpoints",id:"endpoints",children:[]},{value:"Synchronization",id:"synchronization",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Solana cluster is a set of independently owned computers working together to verify the output of user-submitted programs. A Solana cluster can be utilized any time a user wants to preserve an immutable record of events in time or programmatic interpretations of those events.  "),(0,o.kt)("p",null,"It can also be argued that a Solana cluster is a set of validators that serve client transactions and maintain the integrity of the registry. Solana maintains several different clusters with different purposes."),(0,o.kt)("p",null,"Two or more clusters can coexist if they have a common genesis block. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong address are rejected.  "),(0,o.kt)("h3",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Solana maintains dedicated API nodes to fulfill JSON-RPC requests for each public cluster, and third parties may as well. Here are the public RPC endpoints currently available and recommended for each public cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Devnet endpoint",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.devnet.solana.com")," \u2014 single Solana-hosted API node; rate-limited.",(0,o.kt)("br",{parentName:"li"}),"Devnet serves as a playground for anyone who wants to take Solana for a test drive as a user, token holder, app developer, or validator. Tokens are not real."),(0,o.kt)("li",{parentName:"ul"},"Testnet endpoint",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.testnet.solana.com")," \u2014 single Solana-hosted API node; rate-limited.",(0,o.kt)("br",{parentName:"li"}),"Testnet is used to stress-test recent release features on a live cluster, with particular focus on network performance, stability, and validator behavior. Tokens are not real."),(0,o.kt)("li",{parentName:"ul"},"Mainnet Beta endpoints",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.mainnet-beta.solana.com")," \u2014 Solana-hosted API node cluster backed by a load balancer; rate-limited.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://solana-api.projectserum.com")," \u2014 Project Serum-hosted API node.",(0,o.kt)("br",{parentName:"li"}),"This is a permissionless, persistent cluster for early token holders and launch partners. Tokens are real SOL.")),(0,o.kt)("h3",{id:"synchronization"},"Synchronization"),(0,o.kt)("p",null,"Fast, reliable synchronization is one of the main challenges for achieving high throughput. Traditional blockchains synchronize on large chunks of transactions called blocks. As a consensus algorithm, they use ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Proof_of_work"},"Proof-of-Work"))," or ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Proof_of_stake"},"Proof-of-Stake")),".",(0,o.kt)("br",{parentName:"p"}),"\n","Unlike traditional synchronization methods, Solana takes a complete approach, which it calls ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://docs.neonlabs.org/docs/glossary#proof-of-history-poh"},"Proof-of-History")),". Solana uses an optimistic method of processing blocks. (It was introduced in 1981 and is called ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Optimistic Concurrency Control"),".)",(0,o.kt)("br",{parentName:"p"}),"\n","The peculiarity of this method is that Solana technically never sends a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/docs/about/terminology#block"},"block")),", but uses the term to describe the sequence of entries that validators vote on to achieve ",(0,o.kt)("em",{parentName:"p"},"confirmation"),". By processing the transactions optimistically, there is effectively no delay between the time the last entry is received and the time when the node can vote. In the event consensus is not achieved, a node simply rolls back its state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"More details"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/overview"},"A Solana cluster"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/clusters"},"Solana clusters"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/rpc-endpoints"},"Solana cluster RPC endpoints"))))}m.isMDXComponent=!0}}]);