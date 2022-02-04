"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Governance User Interface",p={unversionedId:"governance/governance_ui",id:"governance/governance_ui",isDocsHomePage:!1,title:"Governance User Interface",description:"The Neon Governance application is an open source service designed to provide a convenient form for submitting proposals to improve Neon EVM and for voting on acceptance of these proposals.",source:"@site/docs/governance/governance_ui.md",sourceDirName:"governance",slug:"/governance/governance_ui",permalink:"/docs/governance/governance_ui",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Governance Overview",permalink:"/docs/governance/governance_overview"},next:{title:"Installing and setting up MetaMask",permalink:"/docs/devportal/metamask_setup"}},c=[{value:"Proposal submission procedure",id:"proposal-submission-procedure",children:[{value:"Posting an article on the Neon forum",id:"posting-an-article-on-the-neon-forum",children:[]},{value:"Submitting a proposal to Neon Governance",id:"submitting-a-proposal-to-neon-governance",children:[]},{value:"Monitoring the status of the submitted proposal",id:"monitoring-the-status-of-the-submitted-proposal",children:[]},{value:"Stakeholder voting",id:"stakeholder-voting",children:[]}]}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governance-user-interface"},"Governance User Interface"),(0,a.kt)("p",null,"The Neon Governance application is an open source service designed to provide a convenient form for submitting proposals to improve Neon EVM and for voting on acceptance of these proposals."),(0,a.kt)("p",null,"Any Neon user can submit a proposal to improve the Neon EVM governance, but only stakeholders can make the final decision on whether to implement this proposal or not. Submission of proposals and voting for them are carried out using the Neon Governance application."),(0,a.kt)("h2",{id:"proposal-submission-procedure"},"Proposal submission procedure"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently, the procedure for submitting and considering proposals is being finalized and therefore some actions may differ from these described. If you have a problem, feel free to contact ",(0,a.kt)("em",{parentName:"p"},"community")," for help.")),(0,a.kt)("h3",{id:"posting-an-article-on-the-neon-forum"},"Posting an article on the Neon forum"),(0,a.kt)("p",null,"The first thing to do is to go to the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.neon-labs.org"},"Neon forum")," and post an article describing your proposal. If you are not yet registered you must do so. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"New Topic")," and put your content in the pop-up window."),(0,a.kt)("div",{class:"neon-img-box-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5866).Z}))),(0,a.kt)("p",null,"Topic of your proposal should concern the Neon EVM governance. Proposal content may contain a textual description of your idea, illustrations, and links to your prepared and tested program code. If you have the code, you must provide brief instructions for installing it and checking the features that it performs."),(0,a.kt)("p",null,'Here is an example of the article "Execute new proposal" published on the forum:'),(0,a.kt)("div",{class:"neon-img-box-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8561).Z}))),(0,a.kt)("h3",{id:"submitting-a-proposal-to-neon-governance"},"Submitting a proposal to Neon Governance"),(0,a.kt)("p",null,"If an article after its discussions on the forum receives positive reviews, it can be submitted for consideration to stakeholders. (Currently, only the Neon EVM network administrator can register a submission in Governance UI. The author of the article should notify the administrator of the intention to create a proposal)."),(0,a.kt)("p",null,"Proposal should match the recommended template and contain the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Summary")," \u2014 brief description."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Instructions")," \u2014 sequence of actions for installing and running program code, if it is in proposal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Discussion")," \u2014 feedback and comments from stakeholders.")),(0,a.kt)("p",null,"Once the proposal is registered in Governance UI, new line with data about it will appear in the list of ",(0,a.kt)("a",{parentName:"p",href:"https://governance.neon-labs.org"},"Governance Proposals"),"."),(0,a.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6379).Z}))),(0,a.kt)("h3",{id:"monitoring-the-status-of-the-submitted-proposal"},"Monitoring the status of the submitted proposal"),(0,a.kt)("p",null,"The page ",(0,a.kt)("a",{parentName:"p",href:"https://governance.neon-labs.org"},"Governance Proposals")," contains the list of all proposals with their brief information, including their names, identifiers, and current states. Authors have the opportunity to track the status of their proposals to monitor the voting processes. To get up-to-date information about the proposal, click on its status field."),(0,a.kt)("p",null,'As an example, the following figure shows the page containing detailed information about the "Execute new proposal" with the status ',(0,a.kt)("inlineCode",{parentName:"p"},"Voting"),"."),(0,a.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2307).Z}))),(0,a.kt)("p",null,"Page fields and their functional meanings:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reverse arrow icon. By clicking on it you go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Governance Proposals")," page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Proposer")," \u2014 public key of the proposer."),(0,a.kt)("li",{parentName:"ol"},"Name of the proposal."),(0,a.kt)("li",{parentName:"ol"},"Current status of the proposal."),(0,a.kt)("li",{parentName:"ol"},"Proposal ID in Neon Governance."),(0,a.kt)("li",{parentName:"ol"},"The date of the last vote, after which no votes are accepted."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"See in forum")," \u2014 link to forum post for further discussion."),(0,a.kt)("li",{parentName:"ol"},"Voting scale, visually displaying the voting process. It also displays the percentage of ",(0,a.kt)("inlineCode",{parentName:"li"},"Approve")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Deny")," votes scored."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Approval quorum")," \u2014 displays the percentage of votes required to approve a proposal. The minimum number of approve votes required. Once approval quorum is greater than or equal to specified value, the proposal is eligible to pass."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Cast your vote")," \u2014 button to call pop-up voting window. Only stakeholders are allowed to vote."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Approvals")," \u2014 list of voters with their votes given. The first numeric value means the number of stakeholders who voted as ",(0,a.kt)("inlineCode",{parentName:"li"},"Approve"),". The second numeric value means the total number of stakeholders who have the right to vote.")),(0,a.kt)("p",null,"Here is the list of possible states of proposals and their functional meaning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Draft")," \u2014 Stage of preparation of the proposal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Voting")," \u2014 Stakeholders are voting to accept the proposal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cancelled")," \u2014 Proposal was not approved on a forum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Execution errors")," \u2014 Attempting to execute the program code attached to the proposal, ends with an error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Defeated")," \u2014 The number of ",(0,a.kt)("inlineCode",{parentName:"li"},"Deny")," votes was at least 50% of the total number of stakeholders allowed to vote."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Approved")," \u2014 The number of ",(0,a.kt)("inlineCode",{parentName:"li"},"Approve")," votes has reached the ",(0,a.kt)("inlineCode",{parentName:"li"},"Approval quorum")," threshold."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Succeeded")," \u2014 Proposal was approved but not yet implemented."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Completed")," \u2014 Proposal was approved and already implemented."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Voting ended")," \u2014 The time allotted for voting has expired.")),(0,a.kt)("h3",{id:"stakeholder-voting"},"Stakeholder voting"),(0,a.kt)("p",null,"If you are a stakeholder and you are allowed to vote, you should be here, others can skip this section."),(0,a.kt)("p",null,"You should first open the list of proposals with their current status and select the proposal with ",(0,a.kt)("inlineCode",{parentName:"p"},"Voting")," you wish to vote on or view. The voting progress page will open."),(0,a.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7944).Z}))),(0,a.kt)("p",null,"Then you should click ",(0,a.kt)("inlineCode",{parentName:"p"},"See in forum")," to view the content of the proposal. To vote on the proposal, you must click ",(0,a.kt)("inlineCode",{parentName:"p"},"Cast your vote"),". A pop-up box will appear."),(0,a.kt)("div",{class:"neon-img-width-600",style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9744).Z}))),(0,a.kt)("p",null," Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Approve")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Decline")," to vote on the proposal. Next, you will be asked to confirm and have the option to add a message to your vote."))}d.isMDXComponent=!0},5866:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-1-94d047a231c613bbed5e52dd4a4d1124.png"},8561:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-2-8e329932e3c9fba50c29287c126546d7.png"},6379:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-3-30cdf16531c4034642e0bff193eaaf06.png"},2307:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-4-1741ae53dbf922f56790b8c97f4d228a.png"},7944:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-5-becb11728d6b1f5662d8aa0f1895835e.png"},9744:function(e,t,n){t.Z=n.p+"assets/images/govern-ui-6-16e3e78c80af50236416498df9d8cfb2.png"}}]);