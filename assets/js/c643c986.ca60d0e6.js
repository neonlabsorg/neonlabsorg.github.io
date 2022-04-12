"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4710],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8964:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Interacting with SPL Tokens"},l=void 0,c={unversionedId:"developing/deploy_facilities/using_erc20_tokens",id:"developing/deploy_facilities/using_erc20_tokens",title:"Interacting with SPL Tokens",description:"The ERC-20 SPL wrapper contract provides access to native Solana tokens registered in the SPL token contract, through the ERC-20 interface.",source:"@site/docs/developing/deploy_facilities/using_erc20_tokens.md",sourceDirName:"developing/deploy_facilities",slug:"/developing/deploy_facilities/using_erc20_tokens",permalink:"/docs/developing/deploy_facilities/using_erc20_tokens",tags:[],version:"current",frontMatter:{title:"Interacting with SPL Tokens"},sidebar:"tutorialSidebar",previous:{title:"Migrating dApps to the Neon EVM",permalink:"/docs/developing/deploy_facilities/migrating_dapps"},next:{title:"Using ERC-20 Tokens",permalink:"/docs/developing/deploy_facilities/adding_new_tokens"}},d={},u=[{value:"Contract Interface",id:"contract-interface",level:3},{value:"Restrictions",id:"restrictions",level:3},{value:"Finding the Token Account Address",id:"finding-the-token-account-address",level:3},{value:"Creating the Token Account",id:"creating-the-token-account",level:3}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ERC-20 SPL wrapper contract provides access to native Solana tokens registered in the SPL token contract, through the ERC-20 interface."),(0,o.kt)("p",null,"This allows interaction of the Solana applications with the EVM (Solidity, Vyper, etc.) bytecode contracts. The ERC-20 SPL wrapper can also be used to transfer funds in Solana tokens using Ethereum wallets such as MetaMask."),(0,o.kt)("p",null,"The contract is implemented in Rust as part of the Neon EVM program."),(0,o.kt)("p",null,"Source code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neonlabsorg/neon-evm/blob/c43345d7abf7af14aa840e6b15c0fc64b084bb2c/evm_loader/program/src/precompile_contracts.rs#L106"},"Rust source code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neonlabsorg/neon-evm/blob/develop/evm_loader/solidity/erc20_wrapper.sol"},"Solidity wrapper source code"))),(0,o.kt)("h3",{id:"contract-interface"},"Contract Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IERC20 {\n    function decimals() external view returns (uint8);\n    function totalSupply() external view returns (uint256);\n    function balanceOf(address who) external view returns (uint256);\n    function allowance(address ow ERC-20 SPL-Wrapperer, address spender) external view returns (uint256);\n    function transfer(address to, uint256 value) external returns (bool);\n    function approve(address spender, uint256 value) external returns (bool);\n    function transferFrom(address from, address to, uint256 value) external returns (bool);\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n\n    function approveSolana(bytes32 spender, uint64 value) external returns (bool);\n    event ApprovalSolana(address indexed owner, bytes32 indexed spender, uint64 value);\n}\n")),(0,o.kt)("p",null,"Functionality of interface modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"decimals()")," \u2014 Returns the number of decimals used to get its user representation. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," equals 2, a balance of 505 tokens should be displayed to a user as 5,05 (505 / 10 * 2).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"totalSupply()")," \u2014 Returns the amount of tokens in existence.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"balanceOf(address account)")," \u2014 Returns the amount of tokens owned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"allowance(address owner, address spender)")," \u2014 Returns the remaining number of tokens that a ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," will be allowed to spend on behalf of the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"\u200b\u200b\u200b\u200b\u200b\u200b\u200btransferFrom"),"\u200b\u200b\u200b\u200b\u200b\u200b\u200b. This is zero by default.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transfer(address recipient, uint256 amount)")," \u2014 Sends the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," of tokens from the caller's account balance to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient's")," account balance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"approve(address spender, uint256 amount)")," \u2014 Sets an ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," as the spender's allowance over the caller's tokens.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transferFrom(address sender, address recipient, uint256 amount)")," \u2014 Transfers the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," of tokens from the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"approveSolana(bytes32 spender, uint64 value)")," \u2014 Allows ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Solana"))," user ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," to withdraw from the caller's account multiple times up to the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," amount. Only one Solana ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," can exists at the time. Translates into SPL token ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve")," instruction."))),(0,o.kt)("h3",{id:"restrictions"},"Restrictions"),(0,o.kt)("p",null,"According to SPL token structure, u64 is used to store the balance. (In ERC-20, it's u256). Based on u64, maximum balance and transfer amounts are restricted by (2^64-1)/(10^9) (for 9 decimals of accuracy)."),(0,o.kt)("h3",{id:"finding-the-token-account-address"},"Finding the Token Account Address"),(0,o.kt)("p",null,"The token account for a given wallet address is a program-derived account consisting of the following constants: the Ethereum wallet address itself, ERC-20 contract address, and the token mint."),(0,o.kt)("p",null,"The account address can be derived in Rust with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const ACCOUNT_SEED_VERSION: u8 = 1;\n\nfn token_address(owner: &H160, contract: &H160, mint: &Pubkey, neon_evm: &Pubkey) {\n    let seeds: &[&[u8]] = &[&[ACCOUNT_SEED_VERSION], b"ERC20Balance", &mint.to_bytes(), contract.as_bytes(), owner.as_bytes()];\n    Pubkey::find_program_address(seeds, neon_evm)\n}\n')),(0,o.kt)("h3",{id:"creating-the-token-account"},"Creating the Token Account"),(0,o.kt)("p",null,"Accounts hold token balances and are created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20CreateTokenAccount")," instruction."),(0,o.kt)("p",null,"This instruction can be created in Rust with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn create_token_account(funding: Pubkey, owner: H160, contract: H160, mint: Pubkey, neon_evm: Pubkey) {\n    let (token_address, _) = token_address(&owner, &contract, &mint, &neon_evm);\n    let (wallet_address, _) = Pubkey::find_program_address(&[&[ACCOUNT_SEED_VERSION], owner.as_bytes()], &neon_evm);\n    let (contract_address, _) = Pubkey::find_program_address(&[&[ACCOUNT_SEED_VERSION], contract.as_bytes()], &neon_evm);\n\n    Instruction::new_with_bincode(\n        neon_evm,\n        &(15_u8),\n        vec![\n            AccountMeta::new(funding, true),\n            AccountMeta::new(token_address, false),\n            AccountMeta::new_readonly(wallet_address, false),\n            AccountMeta::new_readonly(contract_address, false),\n            AccountMeta::new_readonly(mint, false),\n            AccountMeta::new_readonly(system_program::id(), false),\n            AccountMeta::new_readonly(spl_token::id(), false),\n            AccountMeta::new_readonly(sysvar::rent::id(), false)\n        ]\n    )\n}\n")))}m.isMDXComponent=!0}}]);