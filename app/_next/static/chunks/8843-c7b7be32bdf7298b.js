"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8843],{33281:function(t,e,n){n.d(e,{e:function(){return s}});var a=n(72688),r=n(93423),o=n(96104),c=n(99112),i=n(85770);async function s(t,e={}){let n;if(e.connector){let{connector:t}=e,[a,r]=await Promise.all([t.getAccounts(),t.getChainId()]);n={accounts:a,chainId:r,connector:t}}else n=t.state.connections.get(t.state.current);if(!n)throw new i.aH;let s=e.chainId??n.chainId,u=await n.connector.getChainId();if(u!==n.chainId)throw new i.XZ({connectionChainId:n.chainId,connectorChainId:u});let l=n.connector;if(l.getClient)return l.getClient({chainId:s});let d=(0,o.T)(e.account??n.accounts[0]);d.address=(0,c.K)(d.address);let f=t.chains.find(t=>t.id===s),w=await n.connector.getProvider({chainId:s});if(e.account&&!n.accounts.some(t=>t.toLowerCase()===d.address.toLowerCase()))throw new i.JK({address:d.address,connector:l});return(0,a.e)({account:d,chain:f,name:"Connector Client",transport:t=>(function(t,e={}){let{key:n="custom",name:a="Custom Provider",retryDelay:o}=e;return({retryCount:c})=>(0,r.q)({key:n,name:a,request:t.request.bind(t),retryCount:e.retryCount??c,retryDelay:o,type:"custom"})})(w)({...t,retryCount:0})})}},53231:function(t,e,n){n.d(e,{a:function(){return c}});var a=n(9660),r=n(61954),o=n(33281);async function c(t,e){let n;let{abi:c,chainId:i,connector:s,...u}=e;n=e.account?e.account:(await (0,o.e)(t,{chainId:i,connector:s})).account;let l=t.getClient({chainId:i}),d=(0,r.s)(l,a.a,"simulateContract"),{result:f,request:w}=await d({...u,abi:c,account:n});return{chainId:l.chain.id,result:f,request:{__mode:"prepared",...w,chainId:i}}}},46717:function(t,e,n){n.d(e,{e:function(){return s}});var a=n(21019),r=n(95131),o=n(85753),c=n(28238),i=n(61954);async function s(t,e){let{chainId:n,timeout:s=0,...u}=e,l=t.getClient({chainId:n}),d=(0,i.s)(l,r.e,"waitForTransactionReceipt"),f=await d({...u,timeout:s});if("reverted"===f.status){let t=(0,i.s)(l,o.f,"getTransaction"),e=await t({hash:f.transactionHash}),n=(0,i.s)(l,c.R,"call"),r=await n({...e,gasPrice:"eip1559"!==e.type?e.gasPrice:void 0,maxFeePerGas:"eip1559"===e.type?e.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===e.type?e.maxPriorityFeePerGas:void 0});throw Error(r?.data?(0,a.rR)(`0x${r.data.substring(138)}`):"unknown reason")}return{...f,chainId:l.chain.id}}},90894:function(t,e,n){n.d(e,{n:function(){return s}});var a=n(85721),r=n(61954),o=n(79886),c=n(33281),i=n(53231);async function s(t,e){let n,s;let{account:u,chainId:l,connector:d,__mode:f,...w}=e;n="object"==typeof u&&"local"===u.type?t.getClient({chainId:l}):await (0,c.e)(t,{account:u,chainId:l,connector:d});let{connector:h}=(0,o.D)(t);if("prepared"===f||h?.supportsSimulation)s=w;else{let{request:e}=await (0,i.a)(t,{...w,account:u,chainId:l});s=e}let p=(0,r.s)(n,a.n,"writeContract");return await p({...s,...u?{account:u}:{},chain:l?{id:l}:null})}},75304:function(t,e,n){n.d(e,{z:function(){return i}});let a=new Map,r=new Map;async function o(t,{cacheKey:e,cacheTime:n=Number.POSITIVE_INFINITY}){let o=function(t){let e=(t,e)=>({clear:()=>e.delete(t),get:()=>e.get(t),set:n=>e.set(t,n)}),n=e(t,a),o=e(t,r);return{clear:()=>{n.clear(),o.clear()},promise:n,response:o}}(e),c=o.response.get();if(c&&n>0&&new Date().getTime()-c.created.getTime()<n)return c.data;let i=o.promise.get();i||(i=t(),o.promise.set(i));try{let t=await i;return o.response.set({created:new Date,data:t}),t}finally{o.promise.clear()}}let c=t=>`blockNumber.${t}`;async function i(t,{cacheTime:e=t.cacheTime}={}){return BigInt(await o(()=>t.request({method:"eth_blockNumber"}),{cacheKey:c(t.uid),cacheTime:e}))}},85753:function(t,e,n){n.d(e,{f:function(){return c}});var a=n(97658),r=n(95046),o=n(16719);async function c(t,{blockHash:e,blockNumber:n,blockTag:c,hash:i,index:s}){let u=c||"latest",l=void 0!==n?(0,r.eC)(n):void 0,d=null;if(i?d=await t.request({method:"eth_getTransactionByHash",params:[i]},{dedupe:!0}):e?d=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,(0,r.eC)(s)]},{dedupe:!0}):(l||u)&&(d=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[l||u,(0,r.eC)(s)]},{dedupe:!!l})),!d)throw new a.Bh({blockHash:e,blockNumber:n,blockTag:u,hash:i,index:s});return(t.chain?.formatters?.transaction?.format||o.Tr)(d)}},30911:function(t,e,n){n.d(e,{a:function(){return o}});var a=n(97658),r=n(55875);async function o(t,{hash:e}){let n=await t.request({method:"eth_getTransactionReceipt",params:[e]},{dedupe:!0});if(!n)throw new a.Yb({hash:e});return(t.chain?.formatters?.transactionReceipt?.format||r.fA)(n)}},9660:function(t,e,n){n.d(e,{a:function(){return u}});var a=n(96104),r=n(97225),o=n(31006),c=n(92915),i=n(93413),s=n(28238);async function u(t,e){let{abi:n,address:u,args:l,dataSuffix:d,functionName:f,...w}=e,h=w.account?(0,a.T)(w.account):t.account,p=(0,o.R)({abi:n,args:l,functionName:f});try{let{data:a}=await (0,i.s)(t,s.R,"call")({batch:!1,data:`${p}${d?d.replace("0x",""):""}`,to:u,...w,account:h}),o=(0,r.k)({abi:n,args:l,functionName:f,data:a||"0x"}),c=n.filter(t=>"name"in t&&t.name===e.functionName);return{result:o,request:{abi:c,address:u,args:l,dataSuffix:d,functionName:f,...w,account:h}}}catch(t){throw(0,c.S)(t,{abi:n,address:u,args:l,docsPath:"/docs/contract/simulateContract",functionName:f,sender:h?.address})}}},95131:function(t,e,n){n.d(e,{e:function(){return w}});var a=n(87655),r=n(97658),o=n(93413),c=n(24606),i=n(55894),s=n(47499),u=n(49235),l=n(85753),d=n(30911),f=n(38128);async function w(t,{confirmations:e=1,hash:n,onReplaced:w,pollingInterval:h=t.pollingInterval,retryCount:p=6,retryDelay:m=({count:t})=>200*~~(1<<t),timeout:y}){let b,g,k;let T=(0,s.P)(["waitForTransactionReceipt",t.uid,n]),v=0,C=!1;return new Promise((s,N)=>{y&&setTimeout(()=>N(new r.mc({hash:n})),y);let P=(0,c.N7)(T,{onReplaced:w,resolve:s,reject:N},c=>{let s=(0,o.s)(t,f.q,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:h,async onBlockNumber(f){let w=t=>{s(),t(),P()},h=f;if(!C){v>p&&w(()=>c.reject(new r.mc({hash:n})));try{if(k){if(e>1&&(!k.blockNumber||h-k.blockNumber+1n<e))return;w(()=>c.resolve(k));return}if(b||(C=!0,await (0,i.J)(async()=>{(b=await (0,o.s)(t,l.f,"getTransaction")({hash:n})).blockNumber&&(h=b.blockNumber)},{delay:m,retryCount:p}),C=!1),k=await (0,o.s)(t,d.a,"getTransactionReceipt")({hash:n}),e>1&&(!k.blockNumber||h-k.blockNumber+1n<e))return;w(()=>c.resolve(k))}catch(n){if(n instanceof r.Bh||n instanceof r.Yb){if(!b){C=!1;return}try{g=b,C=!0;let n=await (0,i.J)(()=>(0,o.s)(t,u.Q,"getBlock")({blockNumber:h,includeTransactions:!0}),{delay:m,retryCount:p,shouldRetry:({error:t})=>t instanceof a.f});C=!1;let r=n.transactions.find(({from:t,nonce:e})=>t===g.from&&e===g.nonce);if(!r||(k=await (0,o.s)(t,d.a,"getTransactionReceipt")({hash:r.hash}),e>1&&(!k.blockNumber||h-k.blockNumber+1n<e)))return;let s="replaced";r.to===g.to&&r.value===g.value?s="repriced":r.from===r.to&&0n===r.value&&(s="cancelled"),w(()=>{c.onReplaced?.({reason:s,replacedTransaction:g,transaction:r,transactionReceipt:k}),c.resolve(k)})}catch(t){w(()=>c.reject(t))}}else w(()=>c.reject(n))}finally{v++}}}})})})}},38128:function(t,e,n){n.d(e,{q:function(){return u}});var a=n(21019),r=n(93413),o=n(24606),c=n(9338),i=n(47499),s=n(75304);function u(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:u,onError:l,poll:d,pollingInterval:f=t.pollingInterval}){let w;return(void 0!==d?d:"webSocket"!==t.transport.type&&("fallback"!==t.transport.type||"webSocket"!==t.transport.transports[0].config.type))?(()=>{let a=(0,i.P)(["watchBlockNumber",t.uid,e,n,f]);return(0,o.N7)(a,{onBlockNumber:u,onError:l},a=>(0,c.$)(async()=>{try{let e=await (0,r.s)(t,s.z,"getBlockNumber")({cacheTime:0});if(w){if(e===w)return;if(e-w>1&&n)for(let t=w+1n;t<e;t++)a.onBlockNumber(t,w),w=t}(!w||e>w)&&(a.onBlockNumber(e,w),w=e)}catch(t){a.onError?.(t)}},{emitOnBegin:e,interval:f}))})():(()=>{let r=(0,i.P)(["watchBlockNumber",t.uid,e,n]);return(0,o.N7)(r,{onBlockNumber:u,onError:l},e=>{let n=!0,r=()=>n=!1;return(async()=>{try{let o=(()=>{if("fallback"===t.transport.type){let e=t.transport.transports.find(t=>"webSocket"===t.config.type);return e?e.value:t.transport}return t.transport})(),{unsubscribe:c}=await o.subscribe({params:["newHeads"],onData(t){if(!n)return;let r=(0,a.y_)(t.result?.number);e.onBlockNumber(r,w),w=r},onError(t){e.onError?.(t)}});r=c,n||r()}catch(t){l?.(t)}})(),()=>r()})})()}},96432:function(t,e,n){n.d(e,{p:function(){return a}});async function a(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]},{retryCount:0})}},28703:function(t,e,n){n.d(e,{T:function(){return b}});var a=n(96104),r=n(25355),o=n(6649),c=n(15210),i=n(63659),s=n(37764),u=n(97658),l=n(43149),d=n(27031),f=n(37669),w=n(93413),h=n(82857),p=n(16416),m=n(86348),y=n(96432);async function b(t,e){let{account:n=t.account,chain:b=t.chain,accessList:g,authorizationList:k,blobs:T,data:v,gas:C,gasPrice:N,maxFeePerBlobGas:P,maxFeePerGas:I,maxPriorityFeePerGas:q,nonce:B,value:R,..._}=e;if(!n)throw new r.o({docsPath:"/docs/actions/wallet/sendTransaction"});let x=(0,a.T)(n);try{(0,h.F)(e);let n=await (async()=>e.to?e.to:k&&k.length>0?await (0,c.z)({authorization:k[0]}).catch(()=>{throw new o.G("`to` is required. Could not infer from `authorizationList`.")}):void 0)();if("json-rpc"===x.type){let e;null!==b&&(e=await (0,w.s)(t,p.L,"getChainId")({}),(0,i.q)({currentChainId:e,chain:b}));let a=t.chain?.formatters?.transactionRequest?.format,r=(a||f.tG)({...(0,d.K)(_,{format:a}),accessList:g,authorizationList:k,blobs:T,chainId:e,data:v,from:x.address,gas:C,gasPrice:N,maxFeePerBlobGas:P,maxFeePerGas:I,maxPriorityFeePerGas:q,nonce:B,to:n,value:R});return await t.request({method:"eth_sendTransaction",params:[r]},{retryCount:0})}if("local"===x.type){let e=await (0,w.s)(t,m.Z,"prepareTransactionRequest")({account:x,accessList:g,authorizationList:k,blobs:T,chain:b,data:v,gas:C,gasPrice:N,maxFeePerBlobGas:P,maxFeePerGas:I,maxPriorityFeePerGas:q,nonce:B,nonceManager:x.nonceManager,parameters:[...m.Q,"sidecars"],value:R,..._,to:n}),a=b?.serializers?.transaction,r=await x.signTransaction(e,{serializer:a});return await (0,w.s)(t,y.p,"sendRawTransaction")({serializedTransaction:r})}if("smart"===x.type)throw new r.Y({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:"/docs/actions/bundler/sendUserOperation",type:"smart"});throw new r.Y({docsPath:"/docs/actions/wallet/sendTransaction",type:x.type})}catch(t){if(t instanceof r.Y)throw t;throw function(t,{docsPath:e,...n}){let a=(()=>{let e=(0,l.k)(t,n);return e instanceof s.cj?t:e})();return new u.mk(a,{docsPath:e,...n})}(t,{...e,account:x,chain:e.chain||void 0})}}},85721:function(t,e,n){n.d(e,{n:function(){return u}});var a=n(96104),r=n(25355),o=n(31006),c=n(92915),i=n(93413),s=n(28703);async function u(t,e){let{abi:n,account:u=t.account,address:l,args:d,dataSuffix:f,functionName:w,...h}=e;if(!u)throw new r.o({docsPath:"/docs/contract/writeContract"});let p=(0,a.T)(u),m=(0,o.R)({abi:n,args:d,functionName:w});try{return await (0,i.s)(t,s.T,"sendTransaction")({data:`${m}${f?f.replace("0x",""):""}`,to:l,account:p,...h})}catch(t){throw(0,c.S)(t,{abi:n,address:l,args:d,docsPath:"/docs/contract/writeContract",functionName:w,sender:p.address})}}},63659:function(t,e,n){n.d(e,{q:function(){return r}});var a=n(89045);function r({chain:t,currentChainId:e}){if(!t)throw new a.Bk;if(e!==t.id)throw new a.Yl({chain:t,currentChainId:e})}},24606:function(t,e,n){n.d(e,{N7:function(){return c}});let a=new Map,r=new Map,o=0;function c(t,e,n){let c=++o,i=()=>a.get(t)||[],s=()=>{let e=i();a.set(t,e.filter(t=>t.id!==c))},u=()=>{let e=r.get(t);1===i().length&&e&&e(),s()},l=i();if(a.set(t,[...l,{id:c,fns:e}]),l&&l.length>0)return u;let d={};for(let t in e)d[t]=(...e)=>{let n=i();if(0!==n.length)for(let a of n)a.fns[t]?.(...e)};let f=n(d);return"function"==typeof f&&r.set(t,f),u}},9338:function(t,e,n){n.d(e,{$:function(){return r}});var a=n(97317);function r(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let o=!0,c=()=>o=!1;return(async()=>{let i;e&&(i=await t({unpoll:c}));let s=await n?.(i)??r;await (0,a.D)(s);let u=async()=>{o&&(await t({unpoll:c}),await (0,a.D)(r),u())};u()})(),c}}}]);