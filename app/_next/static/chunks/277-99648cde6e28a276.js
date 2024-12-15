"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{92812:function(t,e,s){s.d(e,{R:function(){return u},m:function(){return o}});var i=s(69948),r=s(43494),n=s(30924),o=class extends r.F{#t;#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#s=t.mutationCache,this.#t=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#r({type:"pending",variables:t}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t})}let s=await (this.#i=(0,n.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#i.promise);return await this.#s.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#s.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#r({type:"success",data:s}),s}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,n.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},25524:function(t,e,s){s.d(e,{useMutation:function(){return c}});var i=s(2265),r=s(92812),n=s(69948),o=s(49010),u=s(56298),a=class extends o.l{#n;#o=void 0;#u;#a;constructor(t,e){super(),this.#n=t,this.setOptions(e),this.bindMethods(),this.#h()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#n.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#n.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#u,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#u?.state.status==="pending"&&this.#u.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#u?.removeObserver(this)}onMutationUpdate(t){this.#h(),this.#l(t)}getCurrentResult(){return this.#o}reset(){this.#u?.removeObserver(this),this.#u=void 0,this.#h(),this.#l()}mutate(t,e){return this.#a=e,this.#u?.removeObserver(this),this.#u=this.#n.getMutationCache().build(this.#n,this.options),this.#u.addObserver(this),this.#u.execute(t)}#h(){let t=this.#u?.state??(0,r.R)();this.#o={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#l(t){n.V.batch(()=>{if(this.#a&&this.hasListeners()){let e=this.#o.variables,s=this.#o.context;t?.type==="success"?(this.#a.onSuccess?.(t.data,e,s),this.#a.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#a.onError?.(t.error,e,s),this.#a.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#o)})})}},h=s(93191),l=s(37832);function c(t,e){let s=(0,h.useQueryClient)(e),[r]=i.useState(()=>new a(s,t));i.useEffect(()=>{r.setOptions(t)},[r,t]);let o=i.useSyncExternalStore(i.useCallback(t=>r.subscribe(n.V.batchCalls(t)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),u=i.useCallback((t,e)=>{r.mutate(t,e).catch(l.Z)},[r]);if(o.error&&(0,l.L)(r.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}},69907:function(t,e,s){s.d(e,{useQueries:function(){return m}});var i=s(2265),r=s(69948),n=s(83667),o=s(49010),u=s(56298);function a(t,e){return t.filter(t=>!e.includes(t))}var h=class extends o.l{#n;#c;#d;#t;#f;#p;constructor(t,e,s){super(),this.#n=t,this.#d=[],this.#t=[],this.#m([]),this.setQueries(e,s)}#m(t){this.#c=t,this.#p=this.#v(t,this.#f?.combine)}onSubscribe(){1===this.listeners.size&&this.#t.forEach(t=>{t.subscribe(e=>{this.#b(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#t.forEach(t=>{t.destroy()})}setQueries(t,e,s){this.#d=t,this.#f=e,r.V.batch(()=>{let t=this.#t,e=this.#y(this.#d);e.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions,s));let i=e.map(t=>t.observer),r=i.map(t=>t.getCurrentResult()),n=i.some((e,s)=>e!==t[s]);(t.length!==i.length||n)&&(this.#t=i,this.#m(r),this.hasListeners()&&(a(t,i).forEach(t=>{t.destroy()}),a(i,t).forEach(t=>{t.subscribe(e=>{this.#b(t,e)})}),this.#l()))})}getCurrentResult(){return this.#p}getQueries(){return this.#t.map(t=>t.getCurrentQuery())}getObservers(){return this.#t}getOptimisticResult(t,e){let s=this.#y(t),i=s.map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions));return[i,t=>this.#v(t??i,e),()=>s.map((t,e)=>{let r=i[e];return t.defaultedQueryOptions.notifyOnChangeProps?r:t.observer.trackResult(r,t=>{s.forEach(e=>{e.observer.trackProp(t)})})})]}#v(t,e){return e?(0,u.Q$)(this.#p,e(t)):t}#y(t){let e=new Map(this.#t.map(t=>[t.options.queryHash,t])),s=t.map(t=>this.#n.defaultQueryOptions(t)),i=s.flatMap(t=>{let s=e.get(t.queryHash);return null!=s?[{defaultedQueryOptions:t,observer:s}]:[]}),r=new Set(i.map(t=>t.defaultedQueryOptions.queryHash)),o=s.filter(t=>!r.has(t.queryHash)),u=t=>{let e=this.#n.defaultQueryOptions(t);return this.#t.find(t=>t.options.queryHash===e.queryHash)??new n.z(this.#n,e)},a=o.map(t=>({defaultedQueryOptions:t,observer:u(t)}));return i.concat(a).sort((t,e)=>s.indexOf(t.defaultedQueryOptions)-s.indexOf(e.defaultedQueryOptions))}#b(t,e){let s=this.#t.indexOf(t);-1!==s&&(this.#m(function(t,e,s){let i=t.slice(0);return i[e]=s,i}(this.#c,s,e)),this.#l())}#l(){r.V.batch(()=>{this.listeners.forEach(t=>{t(this.#c)})})}},l=s(93191),c=s(99038),d=s(53e3),f=s(88472),p=s(38261);function m(t,e){let{queries:s,...o}=t,u=(0,l.useQueryClient)(e),a=(0,c.useIsRestoring)(),m=(0,d.useQueryErrorResetBoundary)(),v=i.useMemo(()=>s.map(t=>{let e=u.defaultQueryOptions(t);return e._optimisticResults=a?"isRestoring":"optimistic",e}),[s,u,a]);v.forEach(t=>{(0,p.Fb)(t),(0,f.pf)(t,m)}),(0,f.JN)(m);let[b]=i.useState(()=>new h(u,v,o)),[y,g,O]=b.getOptimisticResult(v,o.combine);i.useSyncExternalStore(i.useCallback(t=>a?()=>void 0:b.subscribe(r.V.batchCalls(t)),[b,a]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),i.useEffect(()=>{b.setQueries(v,o,{listeners:!1})},[v,o,b]);let C=y.some((t,e)=>(0,p.SB)(v[e],t))?y.flatMap((t,e)=>{let s=v[e];if(s){let e=new n.z(u,s);if((0,p.SB)(s,t))return(0,p.j8)(s,e,m);(0,p.Z$)(t,a)&&(0,p.j8)(s,e,m)}return[]}):[];if(C.length>0)throw Promise.all(C);let w=y.find((t,e)=>{let s=v[e];return s&&(0,f.KJ)({result:t,errorResetBoundary:m,throwOnError:s.throwOnError,query:u.getQueryCache().get(s.queryHash)})});if(null==w?void 0:w.error)throw w.error;return g(O())}},12218:function(t,e,s){s.d(e,{j:function(){return n}});let i=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,r=function(){for(var t,e,s=0,i="";s<arguments.length;)(t=arguments[s++])&&(e=function t(e){var s,i,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(i=t(e[s]))&&(r&&(r+=" "),r+=i);else for(s in e)e[s]&&(r&&(r+=" "),r+=s)}return r}(t))&&(i&&(i+=" "),i+=e);return i},n=(t,e)=>s=>{var n;if((null==e?void 0:e.variants)==null)return r(t,null==s?void 0:s.class,null==s?void 0:s.className);let{variants:o,defaultVariants:u}=e,a=Object.keys(o).map(t=>{let e=null==s?void 0:s[t],r=null==u?void 0:u[t];if(null===e)return null;let n=i(e)||i(r);return o[t][n]}),h=s&&Object.entries(s).reduce((t,e)=>{let[s,i]=e;return void 0===i||(t[s]=i),t},{});return r(t,a,null==e?void 0:null===(n=e.compoundVariants)||void 0===n?void 0:n.reduce((t,e)=>{let{class:s,className:i,...r}=e;return Object.entries(r).every(t=>{let[e,s]=t;return Array.isArray(s)?s.includes({...u,...h}[e]):({...u,...h})[e]===s})?[...t,s,i]:t},[]),null==s?void 0:s.class,null==s?void 0:s.className)}},78317:function(t,e,s){s.d(e,{D:function(){return l}});var i=s(23028),r=s(40603),n=s(80084),o=s(96634),u=s(35091),a=s(87283),h=s(74546);function l(t,e){return function(t,e,s){var l,c,d;let f,p,m;let v=(0,r.j)(),b=null!==(c=null!==(l=null==s?void 0:s.locale)&&void 0!==l?l:v.locale)&&void 0!==c?c:i._,y=(0,u.U)(t,e);if(isNaN(y))throw RangeError("Invalid time value");let g=Object.assign({},s,{addSuffix:null==s?void 0:s.addSuffix,comparison:y});y>0?(f=(0,h.Q)(e),p=(0,h.Q)(t)):(f=(0,h.Q)(t),p=(0,h.Q)(e));let O=(0,n.u)(null!==(d=null==s?void 0:s.roundingMethod)&&void 0!==d?d:"round"),C=p.getTime()-f.getTime(),w=C/a.yJ,R=(C-((0,o.D)(p)-(0,o.D)(f)))/a.yJ,M=null==s?void 0:s.unit;if("second"===(m=M||(w<1?"second":w<60?"minute":w<a.H_?"hour":R<a.fH?"day":R<a.UU?"month":"year"))){let t=O(C/1e3);return b.formatDistance("xSeconds",t,g)}if("minute"===m){let t=O(w);return b.formatDistance("xMinutes",t,g)}if("hour"===m){let t=O(w/60);return b.formatDistance("xHours",t,g)}if("day"===m){let t=O(R/a.H_);return b.formatDistance("xDays",t,g)}if("month"===m){let t=O(R/a.fH);return 12===t&&"month"!==M?b.formatDistance("xYears",1,g):b.formatDistance("xMonths",t,g)}{let t=O(R/a.UU);return b.formatDistance("xYears",t,g)}}(t,Date.now(),e)}},3367:function(t,e,s){s.d(e,{K:function(){return r}});var i=s(74546);function r(t){return(0,i.Q)(1e3*t)}},56717:function(t,e,s){s.d(e,{A:function(){return r}});var i=s(74546);function r(t,e){let s=(0,i.Q)(t),r=(0,i.Q)(e);return s.getTime()>r.getTime()}},28421:function(t,e,s){s.d(e,{useChains:function(){return a}});var i=s(90331);let r=[];function n(t){let e=t.chains;return(0,i.v)(r,e)?r:(r=e,e)}var o=s(2265),u=s(94956);function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,u.useConfig)(t);return(0,o.useSyncExternalStore)(t=>(function(t,e){let{onChange:s}=e;return t._internal.chains.subscribe((t,e)=>{s(t,e)})})(e,{onChange:t}),()=>n(e),()=>n(e))}},13448:function(t,e,s){s.d(e,{useSwitchChain:function(){return h}});var i=s(25524),r=s(85770),n=s(50571);async function o(t,e){let{addEthereumChainParameter:s,chainId:i}=e,o=t.state.connections.get(e.connector?.uid??t.state.current);if(o){let t=o.connector;if(!t.switchChain)throw new n.O({connector:t});return await t.switchChain({addEthereumChainParameter:s,chainId:i})}let u=t.chains.find(t=>t.id===i);if(!u)throw new r.X4;return t.setState(t=>({...t,chainId:i})),u}var u=s(28421),a=s(94956);function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:e}=t,s=(0,a.useConfig)(t),{mutate:r,mutateAsync:n,...h}=(0,i.useMutation)({...e,mutationFn:t=>o(s,t),mutationKey:["switchChain"]});return{...h,chains:(0,u.useChains)({config:s}),switchChain:r,switchChainAsync:n}}}}]);