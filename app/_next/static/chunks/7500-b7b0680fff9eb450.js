(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7500],{98266:function(e){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},63578:function(e,t,n){var r=n(85330),o=n(27087),u=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var a=e[t];u.call(e,t)&&o(a,n)&&(void 0!==n||t in e)||r(e,t,n)}},55648:function(e,t,n){var r=n(80506),o=n(60883);e.exports=function e(t,n,u,a,c){var i=-1,l=t.length;for(u||(u=o),c||(c=[]);++i<l;){var s=t[i];n>0&&u(s)?n>1?e(s,n-1,u,a,c):r(c,s):a||(c[c.length]=s)}return c}},12958:function(e,t,n){var r=n(95042),o=n(59628);e.exports=function(e,t){return r(e,t,function(t,n){return o(e,n)})}},95042:function(e,t,n){var r=n(29013),o=n(70334),u=n(57442);e.exports=function(e,t,n){for(var a=-1,c=t.length,i={};++a<c;){var l=t[a],s=r(e,l);n(s,l)&&o(i,u(l,e),s)}return i}},70334:function(e,t,n){var r=n(63578),o=n(57442),u=n(41056),a=n(63117),c=n(83863);e.exports=function(e,t,n,i){if(!a(e))return e;t=o(t,e);for(var l=-1,s=t.length,f=s-1,d=e;null!=d&&++l<s;){var v=c(t[l]),p=n;if("__proto__"===v||"constructor"===v||"prototype"===v)break;if(l!=f){var b=d[v];void 0===(p=i?i(b,v,d):void 0)&&(p=a(b)?b:u(t[l+1])?[]:{})}r(d,v,p),d=d[v]}return e}},95922:function(e,t,n){var r=n(24008),o=n(98187),u=n(15502),a=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:u;e.exports=a},61584:function(e,t,n){var r=n(10462),o=n(95694),u=n(45845);e.exports=function(e){return u(o(e,void 0,r),e+"")}},60883:function(e,t,n){var r=n(13414),o=n(6727),u=n(60443),a=r?r.isConcatSpreadable:void 0;e.exports=function(e){return u(e)||o(e)||!!(a&&e&&e[a])}},95694:function(e,t,n){var r=n(98266),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var u=arguments,a=-1,c=o(u.length-t,0),i=Array(c);++a<c;)i[a]=u[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=u[a];return l[t]=n(i),r(e,this,l)}}},45845:function(e,t,n){var r=n(95922),o=n(68530)(r);e.exports=o},68530:function(e){var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var o=t(),u=16-(o-r);if(r=o,u>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},24008:function(e){e.exports=function(e){return function(){return e}}},10462:function(e,t,n){var r=n(55648);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},37656:function(e,t,n){var r=n(12958),o=n(61584)(function(e,t){return null==e?{}:r(e,t)});e.exports=o},76772:function(e,t,n){"use strict";n.d(t,{z$:function(){return C},fC:function(){return E}});var r=n(22988),o=n(2265),u=n(1584),a=n(98324),c=n(78149),i=n(91715),l=n(75238),s=n(31383),f=n(25171);let d="Checkbox",[v,p]=(0,a.b)(d),[b,h]=v(d),y=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,name:a,checked:l,defaultChecked:s,required:d,disabled:v,value:p="on",onCheckedChange:h,...y}=e,[m,E]=(0,o.useState)(null),C=(0,u.e)(t,e=>E(e)),w=(0,o.useRef)(!1),_=!m||!!m.closest("form"),[j=!1,O]=(0,i.T)({prop:l,defaultProp:s,onChange:h}),A=(0,o.useRef)(j);return(0,o.useEffect)(()=>{let e=null==m?void 0:m.form;if(e){let t=()=>O(A.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[m,O]),(0,o.createElement)(b,{scope:n,state:j,disabled:v},(0,o.createElement)(f.WV.button,(0,r.Z)({type:"button",role:"checkbox","aria-checked":x(j)?"mixed":j,"aria-required":d,"data-state":g(j),"data-disabled":v?"":void 0,disabled:v,value:p},y,{ref:C,onKeyDown:(0,c.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,c.M)(e.onClick,e=>{O(e=>!!x(e)||!e),_&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})})),_&&(0,o.createElement)(k,{control:m,bubbles:!w.current,name:a,value:p,checked:j,required:d,disabled:v,style:{transform:"translateX(-100%)"}}))}),m=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,forceMount:u,...a}=e,c=h("CheckboxIndicator",n);return(0,o.createElement)(s.z,{present:u||x(c.state)||!0===c.state},(0,o.createElement)(f.WV.span,(0,r.Z)({"data-state":g(c.state),"data-disabled":c.disabled?"":void 0},a,{ref:t,style:{pointerEvents:"none",...e.style}})))}),k=e=>{let{control:t,checked:n,bubbles:u=!0,...a}=e,c=(0,o.useRef)(null),i=function(e){let t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(n),s=(0,l.t)(t);return(0,o.useEffect)(()=>{let e=c.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==n&&t){let r=new Event("click",{bubbles:u});e.indeterminate=x(n),t.call(e,!x(n)&&n),e.dispatchEvent(r)}},[i,n,u]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!x(n)&&n},a,{tabIndex:-1,ref:c,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x(e){return"indeterminate"===e}function g(e){return x(e)?"indeterminate":e?"checked":"unchecked"}let E=y,C=m},12218:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},u=(e,t)=>n=>{var u;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:c}=t,i=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==c?void 0:c[e];if(null===t)return null;let u=r(t)||r(o);return a[e][u]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,i,null==t?void 0:null===(u=t.compoundVariants)||void 0===u?void 0:u.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...c,...l}[t]):({...c,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);