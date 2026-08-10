(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const Z of document.querySelectorAll('link[rel="modulepreload"]'))h(Z);new MutationObserver(Z=>{for(const X of Z)if(X.type==="childList")for(const ln of X.addedNodes)ln.tagName==="LINK"&&ln.rel==="modulepreload"&&h(ln)}).observe(document,{childList:!0,subtree:!0});function en(Z){const X={};return Z.integrity&&(X.integrity=Z.integrity),Z.referrerPolicy&&(X.referrerPolicy=Z.referrerPolicy),Z.crossOrigin==="use-credentials"?X.credentials="include":Z.crossOrigin==="anonymous"?X.credentials="omit":X.credentials="same-origin",X}function h(Z){if(Z.ep)return;Z.ep=!0;const X=en(Z);fetch(Z.href,X)}})();var ss={exports:{}},Ua={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function N0(){if(df)return Ua;df=1;var w=Symbol.for("react.transitional.element"),P=Symbol.for("react.fragment");function en(h,Z,X){var ln=null;if(X!==void 0&&(ln=""+X),Z.key!==void 0&&(ln=""+Z.key),"key"in Z){X={};for(var Sn in Z)Sn!=="key"&&(X[Sn]=Z[Sn])}else X=Z;return Z=X.ref,{$$typeof:w,type:h,key:ln,ref:Z!==void 0?Z:null,props:X}}return Ua.Fragment=P,Ua.jsx=en,Ua.jsxs=en,Ua}var rf;function L0(){return rf||(rf=1,ss.exports=N0()),ss.exports}var Jt=L0(),os={exports:{}},V={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function Y0(){if(ff)return V;ff=1;var w=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),ln=Symbol.for("react.context"),Sn=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),un=Symbol.iterator;function cn(o){return o===null||typeof o!="object"?null:(o=un&&o[un]||o["@@iterator"],typeof o=="function"?o:null)}var Mn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tn=Object.assign,Zn={};function Hn(o,E,O){this.props=o,this.context=E,this.refs=Zn,this.updater=O||Mn}Hn.prototype.isReactComponent={},Hn.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},Hn.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function lt(){}lt.prototype=Hn.prototype;function st(o,E,O){this.props=o,this.context=E,this.refs=Zn,this.updater=O||Mn}var J=st.prototype=new lt;J.constructor=st,Tn(J,Hn.prototype),J.isPureReactComponent=!0;var Vn=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},An=Object.prototype.hasOwnProperty;function qn(o,E,O,T,C,F){return O=F.ref,{$$typeof:w,type:o,key:E,ref:O!==void 0?O:null,props:F}}function Ln(o,E){return qn(o.type,E,void 0,void 0,void 0,o.props)}function Yn(o){return typeof o=="object"&&o!==null&&o.$$typeof===w}function zt(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(O){return E[O]})}var fn=/\/+/g;function zn(o,E){return typeof o=="object"&&o!==null&&o.key!=null?zt(""+o.key):E.toString(36)}function at(){}function Dt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(at,at):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function En(o,E,O,T,C){var F=typeof o;(F==="undefined"||F==="boolean")&&(o=null);var N=!1;if(o===null)N=!0;else switch(F){case"bigint":case"string":case"number":N=!0;break;case"object":switch(o.$$typeof){case w:case P:N=!0;break;case _:return N=o._init,En(N(o._payload),E,O,T,C)}}if(N)return C=C(o),N=T===""?"."+zn(o,0):T,Vn(C)?(O="",N!=null&&(O=N.replace(fn,"$&/")+"/"),En(C,E,O,"",function(dt){return dt})):C!=null&&(Yn(C)&&(C=Ln(C,O+(C.key==null||o&&o.key===C.key?"":(""+C.key).replace(fn,"$&/")+"/")+N)),E.push(C)),1;N=0;var Bn=T===""?".":T+":";if(Vn(o))for(var sn=0;sn<o.length;sn++)T=o[sn],F=Bn+zn(T,sn),N+=En(T,E,O,F,C);else if(sn=cn(o),typeof sn=="function")for(o=sn.call(o),sn=0;!(T=o.next()).done;)T=T.value,F=Bn+zn(T,sn++),N+=En(T,E,O,F,C);else if(F==="object"){if(typeof o.then=="function")return En(Dt(o),E,O,T,C);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return N}function b(o,E,O){if(o==null)return o;var T=[],C=0;return En(o,T,"","",function(F){return E.call(O,F,C++)}),T}function A(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(O){(o._status===0||o._status===-1)&&(o._status=1,o._result=O)},function(O){(o._status===0||o._status===-1)&&(o._status=2,o._result=O)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var k=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)};function G(){}return V.Children={map:b,forEach:function(o,E,O){b(o,function(){E.apply(this,arguments)},O)},count:function(o){var E=0;return b(o,function(){E++}),E},toArray:function(o){return b(o,function(E){return E})||[]},only:function(o){if(!Yn(o))throw Error("React.Children.only expected to receive a single React element child.");return o}},V.Component=Hn,V.Fragment=en,V.Profiler=Z,V.PureComponent=st,V.StrictMode=h,V.Suspense=M,V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,V.__COMPILER_RUNTIME={__proto__:null,c:function(o){return K.H.useMemoCache(o)}},V.cache=function(o){return function(){return o.apply(null,arguments)}},V.cloneElement=function(o,E,O){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var T=Tn({},o.props),C=o.key,F=void 0;if(E!=null)for(N in E.ref!==void 0&&(F=void 0),E.key!==void 0&&(C=""+E.key),E)!An.call(E,N)||N==="key"||N==="__self"||N==="__source"||N==="ref"&&E.ref===void 0||(T[N]=E[N]);var N=arguments.length-2;if(N===1)T.children=O;else if(1<N){for(var Bn=Array(N),sn=0;sn<N;sn++)Bn[sn]=arguments[sn+2];T.children=Bn}return qn(o.type,C,void 0,void 0,F,T)},V.createContext=function(o){return o={$$typeof:ln,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:X,_context:o},o},V.createElement=function(o,E,O){var T,C={},F=null;if(E!=null)for(T in E.key!==void 0&&(F=""+E.key),E)An.call(E,T)&&T!=="key"&&T!=="__self"&&T!=="__source"&&(C[T]=E[T]);var N=arguments.length-2;if(N===1)C.children=O;else if(1<N){for(var Bn=Array(N),sn=0;sn<N;sn++)Bn[sn]=arguments[sn+2];C.children=Bn}if(o&&o.defaultProps)for(T in N=o.defaultProps,N)C[T]===void 0&&(C[T]=N[T]);return qn(o,F,void 0,void 0,null,C)},V.createRef=function(){return{current:null}},V.forwardRef=function(o){return{$$typeof:Sn,render:o}},V.isValidElement=Yn,V.lazy=function(o){return{$$typeof:_,_payload:{_status:-1,_result:o},_init:A}},V.memo=function(o,E){return{$$typeof:z,type:o,compare:E===void 0?null:E}},V.startTransition=function(o){var E=K.T,O={};K.T=O;try{var T=o(),C=K.S;C!==null&&C(O,T),typeof T=="object"&&T!==null&&typeof T.then=="function"&&T.then(G,k)}catch(F){k(F)}finally{K.T=E}},V.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},V.use=function(o){return K.H.use(o)},V.useActionState=function(o,E,O){return K.H.useActionState(o,E,O)},V.useCallback=function(o,E){return K.H.useCallback(o,E)},V.useContext=function(o){return K.H.useContext(o)},V.useDebugValue=function(){},V.useDeferredValue=function(o,E){return K.H.useDeferredValue(o,E)},V.useEffect=function(o,E,O){var T=K.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return T.useEffect(o,E)},V.useId=function(){return K.H.useId()},V.useImperativeHandle=function(o,E,O){return K.H.useImperativeHandle(o,E,O)},V.useInsertionEffect=function(o,E){return K.H.useInsertionEffect(o,E)},V.useLayoutEffect=function(o,E){return K.H.useLayoutEffect(o,E)},V.useMemo=function(o,E){return K.H.useMemo(o,E)},V.useOptimistic=function(o,E){return K.H.useOptimistic(o,E)},V.useReducer=function(o,E,O){return K.H.useReducer(o,E,O)},V.useRef=function(o){return K.H.useRef(o)},V.useState=function(o){return K.H.useState(o)},V.useSyncExternalStore=function(o,E,O){return K.H.useSyncExternalStore(o,E,O)},V.useTransition=function(){return K.H.useTransition()},V.version="19.1.1",V}var vf;function hs(){return vf||(vf=1,os.exports=Y0()),os.exports}var Q=hs(),ds={exports:{}},Na={},rs={exports:{}},fs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function j0(){return pf||(pf=1,(function(w){function P(b,A){var k=b.length;b.push(A);n:for(;0<k;){var G=k-1>>>1,o=b[G];if(0<Z(o,A))b[G]=A,b[k]=o,k=G;else break n}}function en(b){return b.length===0?null:b[0]}function h(b){if(b.length===0)return null;var A=b[0],k=b.pop();if(k!==A){b[0]=k;n:for(var G=0,o=b.length,E=o>>>1;G<E;){var O=2*(G+1)-1,T=b[O],C=O+1,F=b[C];if(0>Z(T,k))C<o&&0>Z(F,T)?(b[G]=F,b[C]=k,G=C):(b[G]=T,b[O]=k,G=O);else if(C<o&&0>Z(F,k))b[G]=F,b[C]=k,G=C;else break n}}return A}function Z(b,A){var k=b.sortIndex-A.sortIndex;return k!==0?k:b.id-A.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var X=performance;w.unstable_now=function(){return X.now()}}else{var ln=Date,Sn=ln.now();w.unstable_now=function(){return ln.now()-Sn}}var M=[],z=[],_=1,un=null,cn=3,Mn=!1,Tn=!1,Zn=!1,Hn=!1,lt=typeof setTimeout=="function"?setTimeout:null,st=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function Vn(b){for(var A=en(z);A!==null;){if(A.callback===null)h(z);else if(A.startTime<=b)h(z),A.sortIndex=A.expirationTime,P(M,A);else break;A=en(z)}}function K(b){if(Zn=!1,Vn(b),!Tn)if(en(M)!==null)Tn=!0,An||(An=!0,zn());else{var A=en(z);A!==null&&En(K,A.startTime-b)}}var An=!1,qn=-1,Ln=5,Yn=-1;function zt(){return Hn?!0:!(w.unstable_now()-Yn<Ln)}function fn(){if(Hn=!1,An){var b=w.unstable_now();Yn=b;var A=!0;try{n:{Tn=!1,Zn&&(Zn=!1,st(qn),qn=-1),Mn=!0;var k=cn;try{t:{for(Vn(b),un=en(M);un!==null&&!(un.expirationTime>b&&zt());){var G=un.callback;if(typeof G=="function"){un.callback=null,cn=un.priorityLevel;var o=G(un.expirationTime<=b);if(b=w.unstable_now(),typeof o=="function"){un.callback=o,Vn(b),A=!0;break t}un===en(M)&&h(M),Vn(b)}else h(M);un=en(M)}if(un!==null)A=!0;else{var E=en(z);E!==null&&En(K,E.startTime-b),A=!1}}break n}finally{un=null,cn=k,Mn=!1}A=void 0}}finally{A?zn():An=!1}}}var zn;if(typeof J=="function")zn=function(){J(fn)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Dt=at.port2;at.port1.onmessage=fn,zn=function(){Dt.postMessage(null)}}else zn=function(){lt(fn,0)};function En(b,A){qn=lt(function(){b(w.unstable_now())},A)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(b){b.callback=null},w.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ln=0<b?Math.floor(1e3/b):5},w.unstable_getCurrentPriorityLevel=function(){return cn},w.unstable_next=function(b){switch(cn){case 1:case 2:case 3:var A=3;break;default:A=cn}var k=cn;cn=A;try{return b()}finally{cn=k}},w.unstable_requestPaint=function(){Hn=!0},w.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var k=cn;cn=b;try{return A()}finally{cn=k}},w.unstable_scheduleCallback=function(b,A,k){var G=w.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?G+k:G):k=G,b){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=k+o,b={id:_++,callback:A,priorityLevel:b,startTime:k,expirationTime:o,sortIndex:-1},k>G?(b.sortIndex=k,P(z,b),en(M)===null&&b===en(z)&&(Zn?(st(qn),qn=-1):Zn=!0,En(K,k-G))):(b.sortIndex=o,P(M,b),Tn||Mn||(Tn=!0,An||(An=!0,zn()))),b},w.unstable_shouldYield=zt,w.unstable_wrapCallback=function(b){var A=cn;return function(){var k=cn;cn=A;try{return b.apply(this,arguments)}finally{cn=k}}}})(fs)),fs}var gf;function G0(){return gf||(gf=1,rs.exports=j0()),rs.exports}var vs={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function X0(){if(hf)return ct;hf=1;var w=hs();function P(M){var z="https://react.dev/errors/"+M;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)z+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+M+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function en(){}var h={d:{f:en,r:function(){throw Error(P(522))},D:en,C:en,L:en,m:en,X:en,S:en,M:en},p:0,findDOMNode:null},Z=Symbol.for("react.portal");function X(M,z,_){var un=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:un==null?null:""+un,children:M,containerInfo:z,implementation:_}}var ln=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Sn(M,z){if(M==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,ct.createPortal=function(M,z){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(P(299));return X(M,z,null,_)},ct.flushSync=function(M){var z=ln.T,_=h.p;try{if(ln.T=null,h.p=2,M)return M()}finally{ln.T=z,h.p=_,h.d.f()}},ct.preconnect=function(M,z){typeof M=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,h.d.C(M,z))},ct.prefetchDNS=function(M){typeof M=="string"&&h.d.D(M)},ct.preinit=function(M,z){if(typeof M=="string"&&z&&typeof z.as=="string"){var _=z.as,un=Sn(_,z.crossOrigin),cn=typeof z.integrity=="string"?z.integrity:void 0,Mn=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;_==="style"?h.d.S(M,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:un,integrity:cn,fetchPriority:Mn}):_==="script"&&h.d.X(M,{crossOrigin:un,integrity:cn,fetchPriority:Mn,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},ct.preinitModule=function(M,z){if(typeof M=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var _=Sn(z.as,z.crossOrigin);h.d.M(M,{crossOrigin:_,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&h.d.M(M)},ct.preload=function(M,z){if(typeof M=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var _=z.as,un=Sn(_,z.crossOrigin);h.d.L(M,_,{crossOrigin:un,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},ct.preloadModule=function(M,z){if(typeof M=="string")if(z){var _=Sn(z.as,z.crossOrigin);h.d.m(M,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:_,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else h.d.m(M)},ct.requestFormReset=function(M){h.d.r(M)},ct.unstable_batchedUpdates=function(M,z){return M(z)},ct.useFormState=function(M,z,_){return ln.H.useFormState(M,z,_)},ct.useFormStatus=function(){return ln.H.useHostTransitionStatus()},ct.version="19.1.1",ct}var mf;function Q0(){if(mf)return vs.exports;mf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(P){console.error(P)}}return w(),vs.exports=X0(),vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function Z0(){if(bf)return Na;bf=1;var w=G0(),P=hs(),en=Q0();function h(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Z(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function X(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function ln(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Sn(n){if(X(n)!==n)throw Error(h(188))}function M(n){var t=n.alternate;if(!t){if(t=X(n),t===null)throw Error(h(188));return t!==n?null:n}for(var e=n,l=t;;){var a=e.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){e=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===e)return Sn(a),n;if(i===l)return Sn(a),t;i=i.sibling}throw Error(h(188))}if(e.return!==l.return)e=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===e){u=!0,e=a,l=i;break}if(c===l){u=!0,l=a,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,l=a;break}if(c===l){u=!0,l=i,e=a;break}c=c.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==l)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?n:t}function z(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=z(n),t!==null)return t;n=n.sibling}return null}var _=Object.assign,un=Symbol.for("react.element"),cn=Symbol.for("react.transitional.element"),Mn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),Zn=Symbol.for("react.strict_mode"),Hn=Symbol.for("react.profiler"),lt=Symbol.for("react.provider"),st=Symbol.for("react.consumer"),J=Symbol.for("react.context"),Vn=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),An=Symbol.for("react.suspense_list"),qn=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Yn=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),fn=Symbol.iterator;function zn(n){return n===null||typeof n!="object"?null:(n=fn&&n[fn]||n["@@iterator"],typeof n=="function"?n:null)}var at=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===at?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Tn:return"Fragment";case Hn:return"Profiler";case Zn:return"StrictMode";case K:return"Suspense";case An:return"SuspenseList";case Yn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Mn:return"Portal";case J:return(n.displayName||"Context")+".Provider";case st:return(n._context.displayName||"Context")+".Consumer";case Vn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qn:return t=n.displayName||null,t!==null?t:Dt(n.type)||"Memo";case Ln:t=n._payload,n=n._init;try{return Dt(n(t))}catch{}}return null}var En=Array.isArray,b=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},G=[],o=-1;function E(n){return{current:n}}function O(n){0>o||(n.current=G[o],G[o]=null,o--)}function T(n,t){o++,G[o]=n.current,n.current=t}var C=E(null),F=E(null),N=E(null),Bn=E(null);function sn(n,t){switch(T(N,t),T(F,n),T(C,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?Ur(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=Ur(t),n=Nr(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}O(C),T(C,n)}function dt(){O(C),O(F),O(N)}function qt(n){n.memoizedState!==null&&T(Bn,n);var t=C.current,e=Nr(t,n.type);t!==e&&(T(F,n),T(C,e))}function Ut(n){F.current===n&&(O(C),O(F)),Bn.current===n&&(O(Bn),_a._currentValue=k)}var fe=Object.prototype.hasOwnProperty,gn=w.unstable_scheduleCallback,Wn=w.unstable_cancelCallback,Gt=w.unstable_shouldYield,La=w.unstable_requestPaint,ht=w.unstable_now,Ft=w.unstable_getCurrentPriorityLevel,Ya=w.unstable_ImmediatePriority,tl=w.unstable_UserBlockingPriority,Nt=w.unstable_NormalPriority,bs=w.unstable_LowPriority,In=w.unstable_IdlePriority,m=w.log,D=w.unstable_setDisableYieldValue,R=null,H=null;function on(n){if(typeof m=="function"&&D(n),H&&typeof H.setStrictMode=="function")try{H.setStrictMode(R,n)}catch{}}var W=Math.clz32?Math.clz32:jn,$t=Math.log,L=Math.LN2;function jn(n){return n>>>=0,n===0?32:31-($t(n)/L|0)|0}var Gn=256,Pn=4194304;function wt(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ue(n,t,e){var l=n.pendingLanes;if(l===0)return 0;var a=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=wt(l):(u&=c,u!==0?a=wt(u):e||(e=c&~n,e!==0&&(a=wt(e))))):(c=l&~i,c!==0?a=wt(c):u!==0?a=wt(u):e||(e=l&~n,e!==0&&(a=wt(e)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:a}function jl(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function Df(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ys(){var n=Gn;return Gn<<=1,(Gn&4194048)===0&&(Gn=256),n}function xs(){var n=Pn;return Pn<<=1,(Pn&62914560)===0&&(Pn=4194304),n}function Wi(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function Gl(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wf(n,t,e,l,a,i){var u=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var c=n.entanglements,s=n.expirationTimes,v=n.hiddenUpdates;for(e=u&~e;0<e;){var y=31-W(e),S=1<<y;c[y]=0,s[y]=-1;var p=v[y];if(p!==null)for(v[y]=null,y=0;y<p.length;y++){var g=p[y];g!==null&&(g.lane&=-536870913)}e&=~S}l!==0&&Ss(n,l,0),i!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~t))}function Ss(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var l=31-W(t);n.entangledLanes|=t,n.entanglements[l]=n.entanglements[l]|1073741824|e&4194090}function Es(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var l=31-W(e),a=1<<l;a&t|n[l]&t&&(n[l]|=t),e&=~a}}function Ii(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Pi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function As(){var n=A.p;return n!==0?n:(n=window.event,n===void 0?32:lf(n.type))}function Mf(n,t){var e=A.p;try{return A.p=n,t()}finally{A.p=e}}var ve=Math.random().toString(36).slice(2),it="__reactFiber$"+ve,rt="__reactProps$"+ve,el="__reactContainer$"+ve,nu="__reactEvents$"+ve,Tf="__reactListeners$"+ve,Of="__reactHandles$"+ve,zs="__reactResources$"+ve,Xl="__reactMarker$"+ve;function tu(n){delete n[it],delete n[rt],delete n[nu],delete n[Tf],delete n[Of]}function ll(n){var t=n[it];if(t)return t;for(var e=n.parentNode;e;){if(t=e[el]||e[it]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=Gr(n);n!==null;){if(e=n[it])return e;n=Gr(n)}return t}n=e,e=n.parentNode}return null}function al(n){if(n=n[it]||n[el]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function Ql(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(h(33))}function il(n){var t=n[zs];return t||(t=n[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Kn(n){n[Xl]=!0}var Ds=new Set,ws={};function Ne(n,t){ul(n,t),ul(n+"Capture",t)}function ul(n,t){for(ws[n]=t,n=0;n<t.length;n++)Ds.add(t[n])}var Cf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},Ts={};function Bf(n){return fe.call(Ts,n)?!0:fe.call(Ms,n)?!1:Cf.test(n)?Ts[n]=!0:(Ms[n]=!0,!1)}function ja(n,t,e){if(Bf(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function Ga(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function Wt(n,t,e,l){if(l===null)n.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+l)}}var eu,Os;function cl(n){if(eu===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||"",Os=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+n+Os}var lu=!1;function au(n,t){if(!n||lu)return"";lu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var p=g}Reflect.construct(n,[],S)}else{try{S.call()}catch(g){p=g}n.call(S.prototype)}}else{try{throw Error()}catch(g){p=g}(S=n())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),v=c.split(`
`);for(a=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;if(l===s.length||a===v.length)for(l=s.length-1,a=v.length-1;1<=l&&0<=a&&s[l]!==v[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==v[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==v[a]){var y=`
`+s[l].replace(" at new "," at ");return n.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",n.displayName)),y}while(1<=l&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?cl(e):""}function _f(n){switch(n.tag){case 26:case 27:case 5:return cl(n.type);case 16:return cl("Lazy");case 13:return cl("Suspense");case 19:return cl("SuspenseList");case 0:case 15:return au(n.type,!1);case 11:return au(n.type.render,!1);case 1:return au(n.type,!0);case 31:return cl("Activity");default:return""}}function Cs(n){try{var t="";do t+=_f(n),n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Bs(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kf(n){var t=Bs(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),l=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var a=e.get,i=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Xa(n){n._valueTracker||(n._valueTracker=kf(n))}function _s(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),l="";return n&&(l=Bs(n)?n.checked?"true":"false":n.value),n=l,n!==e?(t.setValue(n),!0):!1}function Qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Rf=/[\n"\\]/g;function Tt(n){return n.replace(Rf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function iu(n,t,e,l,a,i,u,c){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),t!=null?u==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+Mt(t)):n.value!==""+Mt(t)&&(n.value=""+Mt(t)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),t!=null?uu(n,u,Mt(t)):e!=null?uu(n,u,Mt(e)):l!=null&&n.removeAttribute("value"),a==null&&i!=null&&(n.defaultChecked=!!i),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Mt(c):n.removeAttribute("name")}function ks(n,t,e,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;e=e!=null?""+Mt(e):"",t=t!=null?""+Mt(t):e,c||t===n.value||(n.value=t),n.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=c?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function uu(n,t,e){t==="number"&&Qa(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function sl(n,t,e,l){if(n=n.options,t){t={};for(var a=0;a<e.length;a++)t["$"+e[a]]=!0;for(e=0;e<n.length;e++)a=t.hasOwnProperty("$"+n[e].value),n[e].selected!==a&&(n[e].selected=a),a&&l&&(n[e].defaultSelected=!0)}else{for(e=""+Mt(e),t=null,a=0;a<n.length;a++){if(n[a].value===e){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}t!==null||n[a].disabled||(t=n[a])}t!==null&&(t.selected=!0)}}function Rs(n,t,e){if(t!=null&&(t=""+Mt(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+Mt(e):""}function Hs(n,t,e,l){if(t==null){if(l!=null){if(e!=null)throw Error(h(92));if(En(l)){if(1<l.length)throw Error(h(93));l=l[0]}e=l}e==null&&(e=""),t=e}e=Mt(t),n.defaultValue=e,l=n.textContent,l===e&&l!==""&&l!==null&&(n.value=l)}function ol(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var Hf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qs(n,t,e){var l=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":l?n.setProperty(t,e):typeof e!="number"||e===0||Hf.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function Us(n,t,e){if(t!=null&&typeof t!="object")throw Error(h(62));if(n=n.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&e[a]!==l&&qs(n,a,l)}else for(var i in t)t.hasOwnProperty(i)&&qs(n,i,t[i])}function cu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Za(n){return Uf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var su=null;function ou(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dl=null,rl=null;function Ns(n){var t=al(n);if(t&&(n=t.stateNode)){var e=n[rt]||null;n:switch(n=t.stateNode,t.type){case"input":if(iu(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var l=e[t];if(l!==n&&l.form===n.form){var a=l[rt]||null;if(!a)throw Error(h(90));iu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<e.length;t++)l=e[t],l.form===n.form&&_s(l)}break n;case"textarea":Rs(n,e.value,e.defaultValue);break n;case"select":t=e.value,t!=null&&sl(n,!!e.multiple,t,!1)}}}var du=!1;function Ls(n,t,e){if(du)return n(t,e);du=!0;try{var l=n(t);return l}finally{if(du=!1,(dl!==null||rl!==null)&&(Ci(),dl&&(t=dl,n=rl,rl=dl=null,Ns(t),n)))for(t=0;t<n.length;t++)Ns(n[t])}}function Zl(n,t){var e=n.stateNode;if(e===null)return null;var l=e[rt]||null;if(l===null)return null;e=l[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(h(231,t,typeof e));return e}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(It)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{ru=!1}var pe=null,fu=null,Va=null;function Ys(){if(Va)return Va;var n,t=fu,e=t.length,l,a="value"in pe?pe.value:pe.textContent,i=a.length;for(n=0;n<e&&t[n]===a[n];n++);var u=e-n;for(l=1;l<=u&&t[e-l]===a[i-l];l++);return Va=a.slice(n,1<l?1-l:void 0)}function Ka(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Ja(){return!0}function js(){return!1}function ft(n){function t(e,l,a,i,u){this._reactName=e,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(e=n[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ja:js,this.isPropagationStopped=js,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),t}var Le={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=ft(Le),Kl=_({},Le,{view:0,detail:0}),Nf=ft(Kl),vu,pu,Jl,$a=_({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jl&&(Jl&&n.type==="mousemove"?(vu=n.screenX-Jl.screenX,pu=n.screenY-Jl.screenY):pu=vu=0,Jl=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:pu}}),Gs=ft($a),Lf=_({},$a,{dataTransfer:0}),Yf=ft(Lf),jf=_({},Kl,{relatedTarget:0}),gu=ft(jf),Gf=_({},Le,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=ft(Gf),Qf=_({},Le,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zf=ft(Qf),Vf=_({},Le,{data:0}),Xs=ft(Vf),Kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=Ff[n])?!!t[n]:!1}function hu(){return $f}var Wf=_({},Kl,{key:function(n){if(n.key){var t=Kf[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Ka(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Jf[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(n){return n.type==="keypress"?Ka(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ka(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),If=ft(Wf),Pf=_({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=ft(Pf),nv=_({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),tv=ft(nv),ev=_({},Le,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=ft(ev),av=_({},$a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=ft(av),uv=_({},Le,{newState:0,oldState:0}),cv=ft(uv),sv=[9,13,27,32],mu=It&&"CompositionEvent"in window,Fl=null;It&&"documentMode"in document&&(Fl=document.documentMode);var ov=It&&"TextEvent"in window&&!Fl,Zs=It&&(!mu||Fl&&8<Fl&&11>=Fl),Vs=" ",Ks=!1;function Js(n,t){switch(n){case"keyup":return sv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fl=!1;function dv(n,t){switch(n){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(Ks=!0,Vs);case"textInput":return n=t.data,n===Vs&&Ks?null:n;default:return null}}function rv(n,t){if(fl)return n==="compositionend"||!mu&&Js(n,t)?(n=Ys(),Va=fu=pe=null,fl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zs&&t.locale!=="ko"?null:t.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!fv[n.type]:t==="textarea"}function Ws(n,t,e,l){dl?rl?rl.push(l):rl=[l]:dl=l,t=qi(t,"onChange"),0<t.length&&(e=new Fa("onChange","change",null,e,l),n.push({event:e,listeners:t}))}var $l=null,Wl=null;function vv(n){_r(n,0)}function Wa(n){var t=Ql(n);if(_s(t))return n}function Is(n,t){if(n==="change")return t}var Ps=!1;if(It){var bu;if(It){var yu="oninput"in document;if(!yu){var no=document.createElement("div");no.setAttribute("oninput","return;"),yu=typeof no.oninput=="function"}bu=yu}else bu=!1;Ps=bu&&(!document.documentMode||9<document.documentMode)}function to(){$l&&($l.detachEvent("onpropertychange",eo),Wl=$l=null)}function eo(n){if(n.propertyName==="value"&&Wa(Wl)){var t=[];Ws(t,Wl,n,ou(n)),Ls(vv,t)}}function pv(n,t,e){n==="focusin"?(to(),$l=t,Wl=e,$l.attachEvent("onpropertychange",eo)):n==="focusout"&&to()}function gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wa(Wl)}function hv(n,t){if(n==="click")return Wa(t)}function mv(n,t){if(n==="input"||n==="change")return Wa(t)}function bv(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var mt=typeof Object.is=="function"?Object.is:bv;function Il(n,t){if(mt(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),l=Object.keys(t);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var a=e[l];if(!fe.call(t,a)||!mt(n[a],t[a]))return!1}return!0}function lo(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ao(n,t){var e=lo(n);n=0;for(var l;e;){if(e.nodeType===3){if(l=n+e.textContent.length,n<=t&&l>=t)return{node:e,offset:t-n};n=l}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=lo(e)}}function io(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?io(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function uo(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Qa(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Qa(n.document)}return t}function xu(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var yv=It&&"documentMode"in document&&11>=document.documentMode,vl=null,Su=null,Pl=null,Eu=!1;function co(n,t,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Eu||vl==null||vl!==Qa(l)||(l=vl,"selectionStart"in l&&xu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&Il(Pl,l)||(Pl=l,l=qi(Su,"onSelect"),0<l.length&&(t=new Fa("onSelect","select",null,t,e),n.push({event:t,listeners:l}),t.target=vl)))}function Ye(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var pl={animationend:Ye("Animation","AnimationEnd"),animationiteration:Ye("Animation","AnimationIteration"),animationstart:Ye("Animation","AnimationStart"),transitionrun:Ye("Transition","TransitionRun"),transitionstart:Ye("Transition","TransitionStart"),transitioncancel:Ye("Transition","TransitionCancel"),transitionend:Ye("Transition","TransitionEnd")},Au={},so={};It&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function je(n){if(Au[n])return Au[n];if(!pl[n])return n;var t=pl[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in so)return Au[n]=t[e];return n}var oo=je("animationend"),ro=je("animationiteration"),fo=je("animationstart"),xv=je("transitionrun"),Sv=je("transitionstart"),Ev=je("transitioncancel"),vo=je("transitionend"),po=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Lt(n,t){po.set(n,t),Ne(t,[n])}var go=new WeakMap;function Ot(n,t){if(typeof n=="object"&&n!==null){var e=go.get(n);return e!==void 0?e:(t={value:n,source:t,stack:Cs(t)},go.set(n,t),t)}return{value:n,source:t,stack:Cs(t)}}var Ct=[],gl=0,Du=0;function Ia(){for(var n=gl,t=Du=gl=0;t<n;){var e=Ct[t];Ct[t++]=null;var l=Ct[t];Ct[t++]=null;var a=Ct[t];Ct[t++]=null;var i=Ct[t];if(Ct[t++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&ho(e,a,i)}}function Pa(n,t,e,l){Ct[gl++]=n,Ct[gl++]=t,Ct[gl++]=e,Ct[gl++]=l,Du|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function wu(n,t,e,l){return Pa(n,t,e,l),ni(n)}function hl(n,t){return Pa(n,null,null,t),ni(n)}function ho(n,t,e){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e);for(var a=!1,i=n.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(a=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,a&&t!==null&&(a=31-W(e),n=i.hiddenUpdates,l=n[a],l===null?n[a]=[t]:l.push(t),t.lane=e|536870912),i):null}function ni(n){if(50<za)throw za=0,_c=null,Error(h(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var ml={};function Av(n,t,e,l){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(n,t,e,l){return new Av(n,t,e,l)}function Mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pt(n,t){var e=n.alternate;return e===null?(e=bt(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function mo(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function ti(n,t,e,l,a,i){var u=0;if(l=n,typeof n=="function")Mu(n)&&(u=1);else if(typeof n=="string")u=D0(n,e,C.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Yn:return n=bt(31,e,t,a),n.elementType=Yn,n.lanes=i,n;case Tn:return Ge(e.children,a,i,t);case Zn:u=8,a|=24;break;case Hn:return n=bt(12,e,t,a|2),n.elementType=Hn,n.lanes=i,n;case K:return n=bt(13,e,t,a),n.elementType=K,n.lanes=i,n;case An:return n=bt(19,e,t,a),n.elementType=An,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case lt:case J:u=10;break n;case st:u=9;break n;case Vn:u=11;break n;case qn:u=14;break n;case Ln:u=16,l=null;break n}u=29,e=Error(h(130,n===null?"null":typeof n,"")),l=null}return t=bt(u,e,t,a),t.elementType=n,t.type=l,t.lanes=i,t}function Ge(n,t,e,l){return n=bt(7,n,l,t),n.lanes=e,n}function Tu(n,t,e){return n=bt(6,n,null,t),n.lanes=e,n}function Ou(n,t,e){return t=bt(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var bl=[],yl=0,ei=null,li=0,Bt=[],_t=0,Xe=null,ne=1,te="";function Qe(n,t){bl[yl++]=li,bl[yl++]=ei,ei=n,li=t}function bo(n,t,e){Bt[_t++]=ne,Bt[_t++]=te,Bt[_t++]=Xe,Xe=n;var l=ne;n=te;var a=32-W(l)-1;l&=~(1<<a),e+=1;var i=32-W(t)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,ne=1<<32-W(t)+a|e<<a|l,te=i+n}else ne=1<<i|e<<a|l,te=n}function Cu(n){n.return!==null&&(Qe(n,1),bo(n,1,0))}function Bu(n){for(;n===ei;)ei=bl[--yl],bl[yl]=null,li=bl[--yl],bl[yl]=null;for(;n===Xe;)Xe=Bt[--_t],Bt[_t]=null,te=Bt[--_t],Bt[_t]=null,ne=Bt[--_t],Bt[_t]=null}var ot=null,On=null,rn=!1,Ze=null,Xt=!1,_u=Error(h(519));function Ve(n){var t=Error(h(418,""));throw ea(Ot(t,n)),_u}function yo(n){var t=n.stateNode,e=n.type,l=n.memoizedProps;switch(t[it]=n,t[rt]=l,e){case"dialog":tn("cancel",t),tn("close",t);break;case"iframe":case"object":case"embed":tn("load",t);break;case"video":case"audio":for(e=0;e<wa.length;e++)tn(wa[e],t);break;case"source":tn("error",t);break;case"img":case"image":case"link":tn("error",t),tn("load",t);break;case"details":tn("toggle",t);break;case"input":tn("invalid",t),ks(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xa(t);break;case"select":tn("invalid",t);break;case"textarea":tn("invalid",t),Hs(t,l.value,l.defaultValue,l.children),Xa(t)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||l.suppressHydrationWarning===!0||qr(t.textContent,e)?(l.popover!=null&&(tn("beforetoggle",t),tn("toggle",t)),l.onScroll!=null&&tn("scroll",t),l.onScrollEnd!=null&&tn("scrollend",t),l.onClick!=null&&(t.onclick=Ui),t=!0):t=!1,t||Ve(n)}function xo(n){for(ot=n.return;ot;)switch(ot.tag){case 5:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ot=ot.return}}function na(n){if(n!==ot)return!1;if(!rn)return xo(n),rn=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Jc(n.type,n.memoizedProps)),e=!e),e&&On&&Ve(n),xo(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(e=n.data,e==="/$"){if(t===0){On=jt(n.nextSibling);break n}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;n=n.nextSibling}On=null}}else t===27?(t=On,Ce(n.type)?(n=Ic,Ic=null,On=n):On=t):On=ot?jt(n.stateNode.nextSibling):null;return!0}function ta(){On=ot=null,rn=!1}function So(){var n=Ze;return n!==null&&(gt===null?gt=n:gt.push.apply(gt,n),Ze=null),n}function ea(n){Ze===null?Ze=[n]:Ze.push(n)}var ku=E(null),Ke=null,ee=null;function ge(n,t,e){T(ku,t._currentValue),t._currentValue=e}function le(n){n._currentValue=ku.current,O(ku)}function Ru(n,t,e){for(;n!==null;){var l=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),n===e)break;n=n.return}}function Hu(n,t,e,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;n:for(;i!==null;){var c=i;i=a;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Ru(i.return,e,n),l||(u=null);break n}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Ru(u,e,n),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===n){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function la(n,t,e,l){n=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=a.type;mt(a.pendingProps.value,u.value)||(n!==null?n.push(c):n=[c])}}else if(a===Bn.current){if(u=a.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(_a):n=[_a])}a=a.return}n!==null&&Hu(t,n,e,l),t.flags|=262144}function ai(n){for(n=n.firstContext;n!==null;){if(!mt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Je(n){Ke=n,ee=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ut(n){return Eo(Ke,n)}function ii(n,t){return Ke===null&&Je(n),Eo(n,t)}function Eo(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},ee===null){if(n===null)throw Error(h(308));ee=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else ee=ee.next=t;return e}var zv=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,l){n.push(l)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},Dv=w.unstable_scheduleCallback,wv=w.unstable_NormalPriority,Xn={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new zv,data:new Map,refCount:0}}function aa(n){n.refCount--,n.refCount===0&&Dv(wv,function(){n.controller.abort()})}var ia=null,Uu=0,xl=0,Sl=null;function Mv(n,t){if(ia===null){var e=ia=[];Uu=0,xl=Lc(),Sl={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Uu++,t.then(Ao,Ao),t}function Ao(){if(--Uu===0&&ia!==null){Sl!==null&&(Sl.status="fulfilled");var n=ia;ia=null,xl=0,Sl=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Tv(n,t){var e=[],l={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return n.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<e.length;a++)(0,e[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),l}var zo=b.S;b.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mv(n,t),zo!==null&&zo(n,t)};var Fe=E(null);function Nu(){var n=Fe.current;return n!==null?n:xn.pooledCache}function ui(n,t){t===null?T(Fe,Fe.current):T(Fe,t.pool)}function Do(){var n=Nu();return n===null?null:{parent:Xn._currentValue,pool:n}}var ua=Error(h(460)),wo=Error(h(474)),ci=Error(h(542)),Lu={then:function(){}};function Mo(n){return n=n.status,n==="fulfilled"||n==="rejected"}function si(){}function To(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(si,si),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Co(n),n;default:if(typeof t.status=="string")t.then(si,si);else{if(n=xn,n!==null&&100<n.shellSuspendCounter)throw Error(h(482));n=t,n.status="pending",n.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Co(n),n}throw ca=t,ua}}var ca=null;function Oo(){if(ca===null)throw Error(h(459));var n=ca;return ca=null,n}function Co(n){if(n===ua||n===ci)throw Error(h(483))}var he=!1;function Yu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function me(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function be(n,t,e){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(vn&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=ni(n),ho(n,null,e),t}return Pa(n,l,t,e),ni(n)}function sa(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,Es(n,e)}}function Gu(n,t){var e=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var a=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?a=i=t:i=i.next=t}else a=i=t;e={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var Xu=!1;function oa(){if(Xu){var n=Sl;if(n!==null)throw n}}function da(n,t,e,l){Xu=!1;var a=n.updateQueue;he=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var s=c,v=s.next;s.next=null,u===null?i=v:u.next=v,u=s;var y=n.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=v:c.next=v,y.lastBaseUpdate=s))}if(i!==null){var S=a.baseState;u=0,y=v=s=null,c=i;do{var p=c.lane&-536870913,g=p!==c.lane;if(g?(an&p)===p:(l&p)===p){p!==0&&p===xl&&(Xu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var j=n,U=c;p=t;var bn=e;switch(U.tag){case 1:if(j=U.payload,typeof j=="function"){S=j.call(bn,S,p);break n}S=j;break n;case 3:j.flags=j.flags&-65537|128;case 0:if(j=U.payload,p=typeof j=="function"?j.call(bn,S,p):j,p==null)break n;S=_({},S,p);break n;case 2:he=!0}}p=c.callback,p!==null&&(n.flags|=64,g&&(n.flags|=8192),g=a.callbacks,g===null?a.callbacks=[p]:g.push(p))}else g={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(v=y=g,s=S):y=y.next=g,u|=p;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;g=c,c=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);y===null&&(s=S),a.baseState=s,a.firstBaseUpdate=v,a.lastBaseUpdate=y,i===null&&(a.shared.lanes=0),we|=u,n.lanes=u,n.memoizedState=S}}function Bo(n,t){if(typeof n!="function")throw Error(h(191,n));n.call(t)}function _o(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Bo(e[n],t)}var El=E(null),oi=E(0);function ko(n,t){n=de,T(oi,n),T(El,t),de=n|t.baseLanes}function Qu(){T(oi,de),T(El,El.current)}function Zu(){de=oi.current,O(El),O(oi)}var ye=0,$=null,hn=null,Un=null,di=!1,Al=!1,$e=!1,ri=0,ra=0,zl=null,Ov=0;function _n(){throw Error(h(321))}function Vu(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!mt(n[e],t[e]))return!1;return!0}function Ku(n,t,e,l,a,i){return ye=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=n===null||n.memoizedState===null?hd:md,$e=!1,i=e(l,a),$e=!1,Al&&(i=Ho(t,e,l,a)),Ro(n),i}function Ro(n){b.H=mi;var t=hn!==null&&hn.next!==null;if(ye=0,Un=hn=$=null,di=!1,ra=0,zl=null,t)throw Error(h(300));n===null||Jn||(n=n.dependencies,n!==null&&ai(n)&&(Jn=!0))}function Ho(n,t,e,l){$=n;var a=0;do{if(Al&&(zl=null),ra=0,Al=!1,25<=a)throw Error(h(301));if(a+=1,Un=hn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=qv,i=t(e,l)}while(Al);return i}function Cv(){var n=b.H,t=n.useState()[0];return t=typeof t.then=="function"?fa(t):t,n=n.useState()[0],(hn!==null?hn.memoizedState:null)!==n&&($.flags|=1024),t}function Ju(){var n=ri!==0;return ri=0,n}function Fu(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function $u(n){if(di){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}di=!1}ye=0,Un=hn=$=null,Al=!1,ra=ri=0,zl=null}function vt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?$.memoizedState=Un=n:Un=Un.next=n,Un}function Nn(){if(hn===null){var n=$.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var t=Un===null?$.memoizedState:Un.next;if(t!==null)Un=t,hn=n;else{if(n===null)throw $.alternate===null?Error(h(467)):Error(h(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},Un===null?$.memoizedState=Un=n:Un=Un.next=n}return Un}function Wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fa(n){var t=ra;return ra+=1,zl===null&&(zl=[]),n=To(zl,n,t),t=$,(Un===null?t.memoizedState:Un.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?hd:md),n}function fi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fa(n);if(n.$$typeof===J)return ut(n)}throw Error(h(438,String(n)))}function Iu(n){var t=null,e=$.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Wu(),$.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),l=0;l<n;l++)e[l]=zt;return t.index++,e}function ae(n,t){return typeof t=="function"?t(n):t}function vi(n){var t=Nn();return Pu(t,hn,n)}function Pu(n,t,e){var l=n.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=n.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,l.pending=null}if(i=n.baseState,a===null)n.memoizedState=i;else{t=a.next;var c=u=null,s=null,v=t,y=!1;do{var S=v.lane&-536870913;if(S!==v.lane?(an&S)===S:(ye&S)===S){var p=v.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),S===xl&&(y=!0);else if((ye&p)===p){v=v.next,p===xl&&(y=!0);continue}else S={lane:0,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(c=s=S,u=i):s=s.next=S,$.lanes|=p,we|=p;S=v.action,$e&&e(i,S),i=v.hasEagerState?v.eagerState:e(i,S)}else p={lane:S,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(c=s=p,u=i):s=s.next=p,$.lanes|=S,we|=S;v=v.next}while(v!==null&&v!==t);if(s===null?u=i:s.next=c,!mt(i,n.memoizedState)&&(Jn=!0,y&&(e=Sl,e!==null)))throw e;n.memoizedState=i,n.baseState=u,n.baseQueue=s,l.lastRenderedState=i}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function nc(n){var t=Nn(),e=t.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=n;var l=e.dispatch,a=e.pending,i=t.memoizedState;if(a!==null){e.pending=null;var u=a=a.next;do i=n(i,u.action),u=u.next;while(u!==a);mt(i,t.memoizedState)||(Jn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,l]}function qo(n,t,e){var l=$,a=Nn(),i=rn;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=t();var u=!mt((hn||a).memoizedState,e);u&&(a.memoizedState=e,Jn=!0),a=a.queue;var c=Lo.bind(null,l,a,n);if(va(2048,8,c,[n]),a.getSnapshot!==t||u||Un!==null&&Un.memoizedState.tag&1){if(l.flags|=2048,Dl(9,pi(),No.bind(null,l,a,e,t),null),xn===null)throw Error(h(349));i||(ye&124)!==0||Uo(l,t,e)}return e}function Uo(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=$.updateQueue,t===null?(t=Wu(),$.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function No(n,t,e,l){t.value=e,t.getSnapshot=l,Yo(t)&&jo(n)}function Lo(n,t,e){return e(function(){Yo(t)&&jo(n)})}function Yo(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!mt(n,e)}catch{return!0}}function jo(n){var t=hl(n,2);t!==null&&At(t,n,2)}function tc(n){var t=vt();if(typeof n=="function"){var e=n;if(n=e(),$e){on(!0);try{e()}finally{on(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ae,lastRenderedState:n},t}function Go(n,t,e,l){return n.baseState=e,Pu(n,hn,typeof l=="function"?l:ae)}function Bv(n,t,e,l,a){if(hi(n))throw Error(h(485));if(n=t.action,n!==null){var i={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?e(!0):i.isTransition=!1,l(i),e=t.pending,e===null?(i.next=t.pending=i,Xo(t,i)):(i.next=e.next,t.pending=e.next=i)}}function Xo(n,t){var e=t.action,l=t.payload,a=n.state;if(t.isTransition){var i=b.T,u={};b.T=u;try{var c=e(a,l),s=b.S;s!==null&&s(u,c),Qo(n,t,c)}catch(v){ec(n,t,v)}finally{b.T=i}}else try{i=e(a,l),Qo(n,t,i)}catch(v){ec(n,t,v)}}function Qo(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){Zo(n,t,l)},function(l){return ec(n,t,l)}):Zo(n,t,e)}function Zo(n,t,e){t.status="fulfilled",t.value=e,Vo(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,Xo(n,e)))}function ec(n,t,e){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=e,Vo(t),t=t.next;while(t!==l)}n.action=null}function Vo(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function Ko(n,t){return t}function Jo(n,t){if(rn){var e=xn.formState;if(e!==null){n:{var l=$;if(rn){if(On){t:{for(var a=On,i=Xt;a.nodeType!==8;){if(!i){a=null;break t}if(a=jt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){On=jt(a.nextSibling),l=a.data==="F!";break n}}Ve(l)}l=!1}l&&(t=e[0])}}return e=vt(),e.memoizedState=e.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=l,e=vd.bind(null,$,l),l.dispatch=e,l=tc(!1),i=cc.bind(null,$,!1,l.queue),l=vt(),a={state:t,dispatch:null,action:n,pending:null},l.queue=a,e=Bv.bind(null,$,a,i,e),a.dispatch=e,l.memoizedState=n,[t,e,!1]}function Fo(n){var t=Nn();return $o(t,hn,n)}function $o(n,t,e){if(t=Pu(n,t,Ko)[0],n=vi(ae)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fa(t)}catch(u){throw u===ua?ci:u}else l=t;t=Nn();var a=t.queue,i=a.dispatch;return e!==t.memoizedState&&($.flags|=2048,Dl(9,pi(),_v.bind(null,a,e),null)),[l,i,n]}function _v(n,t){n.action=t}function Wo(n){var t=Nn(),e=hn;if(e!==null)return $o(t,e,n);Nn(),t=t.memoizedState,e=Nn();var l=e.queue.dispatch;return e.memoizedState=n,[t,l,!1]}function Dl(n,t,e,l){return n={tag:n,create:e,deps:l,inst:t,next:null},t=$.updateQueue,t===null&&(t=Wu(),$.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(l=e.next,e.next=n,n.next=l,t.lastEffect=n),n}function pi(){return{destroy:void 0,resource:void 0}}function Io(){return Nn().memoizedState}function gi(n,t,e,l){var a=vt();l=l===void 0?null:l,$.flags|=n,a.memoizedState=Dl(1|t,pi(),e,l)}function va(n,t,e,l){var a=Nn();l=l===void 0?null:l;var i=a.memoizedState.inst;hn!==null&&l!==null&&Vu(l,hn.memoizedState.deps)?a.memoizedState=Dl(t,i,e,l):($.flags|=n,a.memoizedState=Dl(1|t,i,e,l))}function Po(n,t){gi(8390656,8,n,t)}function nd(n,t){va(2048,8,n,t)}function td(n,t){return va(4,2,n,t)}function ed(n,t){return va(4,4,n,t)}function ld(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function ad(n,t,e){e=e!=null?e.concat([n]):null,va(4,4,ld.bind(null,t,n),e)}function lc(){}function id(n,t){var e=Nn();t=t===void 0?null:t;var l=e.memoizedState;return t!==null&&Vu(t,l[1])?l[0]:(e.memoizedState=[n,t],n)}function ud(n,t){var e=Nn();t=t===void 0?null:t;var l=e.memoizedState;if(t!==null&&Vu(t,l[1]))return l[0];if(l=n(),$e){on(!0);try{n()}finally{on(!1)}}return e.memoizedState=[l,t],l}function ac(n,t,e){return e===void 0||(ye&1073741824)!==0?n.memoizedState=t:(n.memoizedState=e,n=or(),$.lanes|=n,we|=n,e)}function cd(n,t,e,l){return mt(e,t)?e:El.current!==null?(n=ac(n,e,l),mt(n,t)||(Jn=!0),n):(ye&42)===0?(Jn=!0,n.memoizedState=e):(n=or(),$.lanes|=n,we|=n,t)}function sd(n,t,e,l,a){var i=A.p;A.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,cc(n,!1,t,e);try{var s=a(),v=b.S;if(v!==null&&v(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=Tv(s,l);pa(n,t,y,Et(n))}else pa(n,t,l,Et(n))}catch(S){pa(n,t,{then:function(){},status:"rejected",reason:S},Et())}finally{A.p=i,b.T=u}}function kv(){}function ic(n,t,e,l){if(n.tag!==5)throw Error(h(476));var a=od(n).queue;sd(n,a,t,k,e===null?kv:function(){return dd(n),e(l)})}function od(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ae,lastRenderedState:k},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ae,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function dd(n){var t=od(n).next.queue;pa(n,t,{},Et())}function uc(){return ut(_a)}function rd(){return Nn().memoizedState}function fd(){return Nn().memoizedState}function Rv(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=Et();n=me(e);var l=be(t,n,e);l!==null&&(At(l,t,e),sa(l,t,e)),t={cache:qu()},n.payload=t;return}t=t.return}}function Hv(n,t,e){var l=Et();e={lane:l,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},hi(n)?pd(t,e):(e=wu(n,t,e,l),e!==null&&(At(e,n,l),gd(e,t,l)))}function vd(n,t,e){var l=Et();pa(n,t,e,l)}function pa(n,t,e,l){var a={lane:l,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(hi(n))pd(t,a);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,e);if(a.hasEagerState=!0,a.eagerState=c,mt(c,u))return Pa(n,t,a,0),xn===null&&Ia(),!1}catch{}finally{}if(e=wu(n,t,a,l),e!==null)return At(e,n,l),gd(e,t,l),!0}return!1}function cc(n,t,e,l){if(l={lane:2,revertLane:Lc(),action:l,hasEagerState:!1,eagerState:null,next:null},hi(n)){if(t)throw Error(h(479))}else t=wu(n,e,l,2),t!==null&&At(t,n,2)}function hi(n){var t=n.alternate;return n===$||t!==null&&t===$}function pd(n,t){Al=di=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function gd(n,t,e){if((e&4194048)!==0){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,Es(n,e)}}var mi={readContext:ut,use:fi,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n},hd={readContext:ut,use:fi,useCallback:function(n,t){return vt().memoizedState=[n,t===void 0?null:t],n},useContext:ut,useEffect:Po,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,gi(4194308,4,ld.bind(null,t,n),e)},useLayoutEffect:function(n,t){return gi(4194308,4,n,t)},useInsertionEffect:function(n,t){gi(4,2,n,t)},useMemo:function(n,t){var e=vt();t=t===void 0?null:t;var l=n();if($e){on(!0);try{n()}finally{on(!1)}}return e.memoizedState=[l,t],l},useReducer:function(n,t,e){var l=vt();if(e!==void 0){var a=e(t);if($e){on(!0);try{e(t)}finally{on(!1)}}}else a=t;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=Hv.bind(null,$,n),[l.memoizedState,n]},useRef:function(n){var t=vt();return n={current:n},t.memoizedState=n},useState:function(n){n=tc(n);var t=n.queue,e=vd.bind(null,$,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:lc,useDeferredValue:function(n,t){var e=vt();return ac(e,n,t)},useTransition:function(){var n=tc(!1);return n=sd.bind(null,$,n.queue,!0,!1),vt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var l=$,a=vt();if(rn){if(e===void 0)throw Error(h(407));e=e()}else{if(e=t(),xn===null)throw Error(h(349));(an&124)!==0||Uo(l,t,e)}a.memoizedState=e;var i={value:e,getSnapshot:t};return a.queue=i,Po(Lo.bind(null,l,i,n),[n]),l.flags|=2048,Dl(9,pi(),No.bind(null,l,i,e,t),null),e},useId:function(){var n=vt(),t=xn.identifierPrefix;if(rn){var e=te,l=ne;e=(l&~(1<<32-W(l)-1)).toString(32)+e,t="«"+t+"R"+e,e=ri++,0<e&&(t+="H"+e.toString(32)),t+="»"}else e=Ov++,t="«"+t+"r"+e.toString(32)+"»";return n.memoizedState=t},useHostTransitionStatus:uc,useFormState:Jo,useActionState:Jo,useOptimistic:function(n){var t=vt();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=cc.bind(null,$,!0,e),e.dispatch=t,[n,t]},useMemoCache:Iu,useCacheRefresh:function(){return vt().memoizedState=Rv.bind(null,$)}},md={readContext:ut,use:fi,useCallback:id,useContext:ut,useEffect:nd,useImperativeHandle:ad,useInsertionEffect:td,useLayoutEffect:ed,useMemo:ud,useReducer:vi,useRef:Io,useState:function(){return vi(ae)},useDebugValue:lc,useDeferredValue:function(n,t){var e=Nn();return cd(e,hn.memoizedState,n,t)},useTransition:function(){var n=vi(ae)[0],t=Nn().memoizedState;return[typeof n=="boolean"?n:fa(n),t]},useSyncExternalStore:qo,useId:rd,useHostTransitionStatus:uc,useFormState:Fo,useActionState:Fo,useOptimistic:function(n,t){var e=Nn();return Go(e,hn,n,t)},useMemoCache:Iu,useCacheRefresh:fd},qv={readContext:ut,use:fi,useCallback:id,useContext:ut,useEffect:nd,useImperativeHandle:ad,useInsertionEffect:td,useLayoutEffect:ed,useMemo:ud,useReducer:nc,useRef:Io,useState:function(){return nc(ae)},useDebugValue:lc,useDeferredValue:function(n,t){var e=Nn();return hn===null?ac(e,n,t):cd(e,hn.memoizedState,n,t)},useTransition:function(){var n=nc(ae)[0],t=Nn().memoizedState;return[typeof n=="boolean"?n:fa(n),t]},useSyncExternalStore:qo,useId:rd,useHostTransitionStatus:uc,useFormState:Wo,useActionState:Wo,useOptimistic:function(n,t){var e=Nn();return hn!==null?Go(e,hn,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:fd},wl=null,ga=0;function bi(n){var t=ga;return ga+=1,wl===null&&(wl=[]),To(wl,n,t)}function ha(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function yi(n,t){throw t.$$typeof===un?Error(h(525)):(n=Object.prototype.toString.call(t),Error(h(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function bd(n){var t=n._init;return t(n._payload)}function yd(n){function t(r,d){if(n){var f=r.deletions;f===null?(r.deletions=[d],r.flags|=16):f.push(d)}}function e(r,d){if(!n)return null;for(;d!==null;)t(r,d),d=d.sibling;return null}function l(r){for(var d=new Map;r!==null;)r.key!==null?d.set(r.key,r):d.set(r.index,r),r=r.sibling;return d}function a(r,d){return r=Pt(r,d),r.index=0,r.sibling=null,r}function i(r,d,f){return r.index=f,n?(f=r.alternate,f!==null?(f=f.index,f<d?(r.flags|=67108866,d):f):(r.flags|=67108866,d)):(r.flags|=1048576,d)}function u(r){return n&&r.alternate===null&&(r.flags|=67108866),r}function c(r,d,f,x){return d===null||d.tag!==6?(d=Tu(f,r.mode,x),d.return=r,d):(d=a(d,f),d.return=r,d)}function s(r,d,f,x){var B=f.type;return B===Tn?y(r,d,f.props.children,x,f.key):d!==null&&(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ln&&bd(B)===d.type)?(d=a(d,f.props),ha(d,f),d.return=r,d):(d=ti(f.type,f.key,f.props,null,r.mode,x),ha(d,f),d.return=r,d)}function v(r,d,f,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ou(f,r.mode,x),d.return=r,d):(d=a(d,f.children||[]),d.return=r,d)}function y(r,d,f,x,B){return d===null||d.tag!==7?(d=Ge(f,r.mode,x,B),d.return=r,d):(d=a(d,f),d.return=r,d)}function S(r,d,f){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Tu(""+d,r.mode,f),d.return=r,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case cn:return f=ti(d.type,d.key,d.props,null,r.mode,f),ha(f,d),f.return=r,f;case Mn:return d=Ou(d,r.mode,f),d.return=r,d;case Ln:var x=d._init;return d=x(d._payload),S(r,d,f)}if(En(d)||zn(d))return d=Ge(d,r.mode,f,null),d.return=r,d;if(typeof d.then=="function")return S(r,bi(d),f);if(d.$$typeof===J)return S(r,ii(r,d),f);yi(r,d)}return null}function p(r,d,f,x){var B=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:c(r,d,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cn:return f.key===B?s(r,d,f,x):null;case Mn:return f.key===B?v(r,d,f,x):null;case Ln:return B=f._init,f=B(f._payload),p(r,d,f,x)}if(En(f)||zn(f))return B!==null?null:y(r,d,f,x,null);if(typeof f.then=="function")return p(r,d,bi(f),x);if(f.$$typeof===J)return p(r,d,ii(r,f),x);yi(r,f)}return null}function g(r,d,f,x,B){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return r=r.get(f)||null,c(d,r,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cn:return r=r.get(x.key===null?f:x.key)||null,s(d,r,x,B);case Mn:return r=r.get(x.key===null?f:x.key)||null,v(d,r,x,B);case Ln:var I=x._init;return x=I(x._payload),g(r,d,f,x,B)}if(En(x)||zn(x))return r=r.get(f)||null,y(d,r,x,B,null);if(typeof x.then=="function")return g(r,d,f,bi(x),B);if(x.$$typeof===J)return g(r,d,f,ii(d,x),B);yi(d,x)}return null}function j(r,d,f,x){for(var B=null,I=null,q=d,Y=d=0,$n=null;q!==null&&Y<f.length;Y++){q.index>Y?($n=q,q=null):$n=q.sibling;var dn=p(r,q,f[Y],x);if(dn===null){q===null&&(q=$n);break}n&&q&&dn.alternate===null&&t(r,q),d=i(dn,d,Y),I===null?B=dn:I.sibling=dn,I=dn,q=$n}if(Y===f.length)return e(r,q),rn&&Qe(r,Y),B;if(q===null){for(;Y<f.length;Y++)q=S(r,f[Y],x),q!==null&&(d=i(q,d,Y),I===null?B=q:I.sibling=q,I=q);return rn&&Qe(r,Y),B}for(q=l(q);Y<f.length;Y++)$n=g(q,r,Y,f[Y],x),$n!==null&&(n&&$n.alternate!==null&&q.delete($n.key===null?Y:$n.key),d=i($n,d,Y),I===null?B=$n:I.sibling=$n,I=$n);return n&&q.forEach(function(He){return t(r,He)}),rn&&Qe(r,Y),B}function U(r,d,f,x){if(f==null)throw Error(h(151));for(var B=null,I=null,q=d,Y=d=0,$n=null,dn=f.next();q!==null&&!dn.done;Y++,dn=f.next()){q.index>Y?($n=q,q=null):$n=q.sibling;var He=p(r,q,dn.value,x);if(He===null){q===null&&(q=$n);break}n&&q&&He.alternate===null&&t(r,q),d=i(He,d,Y),I===null?B=He:I.sibling=He,I=He,q=$n}if(dn.done)return e(r,q),rn&&Qe(r,Y),B;if(q===null){for(;!dn.done;Y++,dn=f.next())dn=S(r,dn.value,x),dn!==null&&(d=i(dn,d,Y),I===null?B=dn:I.sibling=dn,I=dn);return rn&&Qe(r,Y),B}for(q=l(q);!dn.done;Y++,dn=f.next())dn=g(q,r,Y,dn.value,x),dn!==null&&(n&&dn.alternate!==null&&q.delete(dn.key===null?Y:dn.key),d=i(dn,d,Y),I===null?B=dn:I.sibling=dn,I=dn);return n&&q.forEach(function(U0){return t(r,U0)}),rn&&Qe(r,Y),B}function bn(r,d,f,x){if(typeof f=="object"&&f!==null&&f.type===Tn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case cn:n:{for(var B=f.key;d!==null;){if(d.key===B){if(B=f.type,B===Tn){if(d.tag===7){e(r,d.sibling),x=a(d,f.props.children),x.return=r,r=x;break n}}else if(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ln&&bd(B)===d.type){e(r,d.sibling),x=a(d,f.props),ha(x,f),x.return=r,r=x;break n}e(r,d);break}else t(r,d);d=d.sibling}f.type===Tn?(x=Ge(f.props.children,r.mode,x,f.key),x.return=r,r=x):(x=ti(f.type,f.key,f.props,null,r.mode,x),ha(x,f),x.return=r,r=x)}return u(r);case Mn:n:{for(B=f.key;d!==null;){if(d.key===B)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){e(r,d.sibling),x=a(d,f.children||[]),x.return=r,r=x;break n}else{e(r,d);break}else t(r,d);d=d.sibling}x=Ou(f,r.mode,x),x.return=r,r=x}return u(r);case Ln:return B=f._init,f=B(f._payload),bn(r,d,f,x)}if(En(f))return j(r,d,f,x);if(zn(f)){if(B=zn(f),typeof B!="function")throw Error(h(150));return f=B.call(f),U(r,d,f,x)}if(typeof f.then=="function")return bn(r,d,bi(f),x);if(f.$$typeof===J)return bn(r,d,ii(r,f),x);yi(r,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,d!==null&&d.tag===6?(e(r,d.sibling),x=a(d,f),x.return=r,r=x):(e(r,d),x=Tu(f,r.mode,x),x.return=r,r=x),u(r)):e(r,d)}return function(r,d,f,x){try{ga=0;var B=bn(r,d,f,x);return wl=null,B}catch(q){if(q===ua||q===ci)throw q;var I=bt(29,q,null,r.mode);return I.lanes=x,I.return=r,I}finally{}}}var Ml=yd(!0),xd=yd(!1),kt=E(null),Qt=null;function xe(n){var t=n.alternate;T(Qn,Qn.current&1),T(kt,n),Qt===null&&(t===null||El.current!==null||t.memoizedState!==null)&&(Qt=n)}function Sd(n){if(n.tag===22){if(T(Qn,Qn.current),T(kt,n),Qt===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(Qt=n)}}else Se()}function Se(){T(Qn,Qn.current),T(kt,kt.current)}function ie(n){O(kt),Qt===n&&(Qt=null),O(Qn)}var Qn=E(0);function xi(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Wc(e)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function sc(n,t,e,l){t=n.memoizedState,e=e(l,t),e=e==null?t:_({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var oc={enqueueSetState:function(n,t,e){n=n._reactInternals;var l=Et(),a=me(l);a.payload=t,e!=null&&(a.callback=e),t=be(n,a,l),t!==null&&(At(t,n,l),sa(t,n,l))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var l=Et(),a=me(l);a.tag=1,a.payload=t,e!=null&&(a.callback=e),t=be(n,a,l),t!==null&&(At(t,n,l),sa(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=Et(),l=me(e);l.tag=2,t!=null&&(l.callback=t),t=be(n,l,e),t!==null&&(At(t,n,e),sa(t,n,e))}};function Ed(n,t,e,l,a,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Il(e,l)||!Il(a,i):!0}function Ad(n,t,e,l){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,l),t.state!==n&&oc.enqueueReplaceState(t,t.state,null)}function We(n,t){var e=t;if("ref"in t){e={};for(var l in t)l!=="ref"&&(e[l]=t[l])}if(n=n.defaultProps){e===t&&(e=_({},e));for(var a in n)e[a]===void 0&&(e[a]=n[a])}return e}var Si=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function zd(n){Si(n)}function Dd(n){console.error(n)}function wd(n){Si(n)}function Ei(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Md(n,t,e){try{var l=n.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function dc(n,t,e){return e=me(e),e.tag=3,e.payload={element:null},e.callback=function(){Ei(n,t)},e}function Td(n){return n=me(n),n.tag=3,n}function Od(n,t,e,l){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;n.payload=function(){return a(i)},n.callback=function(){Md(t,e,l)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Md(t,e,l),typeof a!="function"&&(Me===null?Me=new Set([this]):Me.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Uv(n,t,e,l,a){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=e.alternate,t!==null&&la(t,e,a,!0),e=kt.current,e!==null){switch(e.tag){case 13:return Qt===null?Rc():e.alternate===null&&Cn===0&&(Cn=3),e.flags&=-257,e.flags|=65536,e.lanes=a,l===Lu?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([l]):t.add(l),qc(n,l,a)),!1;case 22:return e.flags|=65536,l===Lu?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([l]):e.add(l)),qc(n,l,a)),!1}throw Error(h(435,e.tag))}return qc(n,l,a),Rc(),!1}if(rn)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==_u&&(n=Error(h(422),{cause:l}),ea(Ot(n,e)))):(l!==_u&&(t=Error(h(423),{cause:l}),ea(Ot(t,e))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=Ot(l,e),a=dc(n.stateNode,l,a),Gu(n,a),Cn!==4&&(Cn=2)),!1;var i=Error(h(520),{cause:l});if(i=Ot(i,e),Aa===null?Aa=[i]:Aa.push(i),Cn!==4&&(Cn=2),t===null)return!0;l=Ot(l,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=a&-a,e.lanes|=n,n=dc(e.stateNode,l,n),Gu(e,n),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Me===null||!Me.has(i))))return e.flags|=65536,a&=-a,e.lanes|=a,a=Td(a),Od(a,n,e,l),Gu(e,a),!1}e=e.return}while(e!==null);return!1}var Cd=Error(h(461)),Jn=!1;function nt(n,t,e,l){t.child=n===null?xd(t,null,e,l):Ml(t,n.child,e,l)}function Bd(n,t,e,l,a){e=e.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Je(t),l=Ku(n,t,e,u,i,a),c=Ju(),n!==null&&!Jn?(Fu(n,t,a),ue(n,t,a)):(rn&&c&&Cu(t),t.flags|=1,nt(n,t,l,a),t.child)}function _d(n,t,e,l,a){if(n===null){var i=e.type;return typeof i=="function"&&!Mu(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,kd(n,t,i,l,a)):(n=ti(e.type,null,l,t,t.mode,a),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!bc(n,a)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Il,e(u,l)&&n.ref===t.ref)return ue(n,t,a)}return t.flags|=1,n=Pt(i,l),n.ref=t.ref,n.return=t,t.child=n}function kd(n,t,e,l,a){if(n!==null){var i=n.memoizedProps;if(Il(i,l)&&n.ref===t.ref)if(Jn=!1,t.pendingProps=l=i,bc(n,a))(n.flags&131072)!==0&&(Jn=!0);else return t.lanes=n.lanes,ue(n,t,a)}return rc(n,t,e,l,a)}function Rd(n,t,e){var l=t.pendingProps,a=l.children,i=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|e:e,n!==null){for(a=t.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Hd(n,t,l,e)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&ui(t,i!==null?i.cachePool:null),i!==null?ko(t,i):Qu(),Sd(t);else return t.lanes=t.childLanes=536870912,Hd(n,t,i!==null?i.baseLanes|e:e,e)}else i!==null?(ui(t,i.cachePool),ko(t,i),Se(),t.memoizedState=null):(n!==null&&ui(t,null),Qu(),Se());return nt(n,t,a,e),t.child}function Hd(n,t,e,l){var a=Nu();return a=a===null?null:{parent:Xn._currentValue,pool:a},t.memoizedState={baseLanes:e,cachePool:a},n!==null&&ui(t,null),Qu(),Sd(t),n!==null&&la(n,t,l,!0),null}function Ai(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function rc(n,t,e,l,a){return Je(t),e=Ku(n,t,e,l,void 0,a),l=Ju(),n!==null&&!Jn?(Fu(n,t,a),ue(n,t,a)):(rn&&l&&Cu(t),t.flags|=1,nt(n,t,e,a),t.child)}function qd(n,t,e,l,a,i){return Je(t),t.updateQueue=null,e=Ho(t,l,e,a),Ro(n),l=Ju(),n!==null&&!Jn?(Fu(n,t,i),ue(n,t,i)):(rn&&l&&Cu(t),t.flags|=1,nt(n,t,e,i),t.child)}function Ud(n,t,e,l,a){if(Je(t),t.stateNode===null){var i=ml,u=e.contextType;typeof u=="object"&&u!==null&&(i=ut(u)),i=new e(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Yu(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?ut(u):ml,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(sc(t,e,u,l),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&oc.enqueueReplaceState(i,i.state,null),da(t,l,i,a),oa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(n===null){i=t.stateNode;var c=t.memoizedProps,s=We(e,c);i.props=s;var v=i.context,y=e.contextType;u=ml,typeof y=="object"&&y!==null&&(u=ut(y));var S=e.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||v!==u)&&Ad(t,i,l,u),he=!1;var p=t.memoizedState;i.state=p,da(t,l,i,a),oa(),v=t.memoizedState,c||p!==v||he?(typeof S=="function"&&(sc(t,e,S,l),v=t.memoizedState),(s=he||Ed(t,e,s,l,p,v,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ju(n,t),u=t.memoizedProps,y=We(e,u),i.props=y,S=t.pendingProps,p=i.context,v=e.contextType,s=ml,typeof v=="object"&&v!==null&&(s=ut(v)),c=e.getDerivedStateFromProps,(v=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||p!==s)&&Ad(t,i,l,s),he=!1,p=t.memoizedState,i.state=p,da(t,l,i,a),oa();var g=t.memoizedState;u!==S||p!==g||he||n!==null&&n.dependencies!==null&&ai(n.dependencies)?(typeof c=="function"&&(sc(t,e,c,l),g=t.memoizedState),(y=he||Ed(t,e,y,l,p,g,s)||n!==null&&n.dependencies!==null&&ai(n.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=s,l=y):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ai(n,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&l?(t.child=Ml(t,n.child,null,a),t.child=Ml(t,null,e,a)):nt(n,t,e,a),t.memoizedState=i.state,n=t.child):n=ue(n,t,a),n}function Nd(n,t,e,l){return ta(),t.flags|=256,nt(n,t,e,l),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(n){return{baseLanes:n,cachePool:Do()}}function pc(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=Rt),n}function Ld(n,t,e){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Qn.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,n===null){if(rn){if(a?xe(t):Se(),rn){var c=On,s;if(s=c){n:{for(s=c,c=Xt;s.nodeType!==8;){if(!c){c=null;break n}if(s=jt(s.nextSibling),s===null){c=null;break n}}c=s}c!==null?(t.memoizedState={dehydrated:c,treeContext:Xe!==null?{id:ne,overflow:te}:null,retryLane:536870912,hydrationErrors:null},s=bt(18,null,null,0),s.stateNode=c,s.return=t,t.child=s,ot=t,On=null,s=!0):s=!1}s||Ve(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Wc(c)?t.lanes=32:t.lanes=536870912,null;ie(t)}return c=l.children,l=l.fallback,a?(Se(),a=t.mode,c=zi({mode:"hidden",children:c},a),l=Ge(l,a,e,null),c.return=t,l.return=t,c.sibling=l,t.child=c,a=t.child,a.memoizedState=vc(e),a.childLanes=pc(n,u,e),t.memoizedState=fc,l):(xe(t),gc(t,c))}if(s=n.memoizedState,s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(xe(t),t.flags&=-257,t=hc(n,t,e)):t.memoizedState!==null?(Se(),t.child=n.child,t.flags|=128,t=null):(Se(),a=l.fallback,c=t.mode,l=zi({mode:"visible",children:l.children},c),a=Ge(a,c,e,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Ml(t,n.child,null,e),l=t.child,l.memoizedState=vc(e),l.childLanes=pc(n,u,e),t.memoizedState=fc,t=a);else if(xe(t),Wc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var v=u.dgst;u=v,l=Error(h(419)),l.stack="",l.digest=u,ea({value:l,source:null,stack:null}),t=hc(n,t,e)}else if(Jn||la(n,t,e,!1),u=(e&n.childLanes)!==0,Jn||u){if(u=xn,u!==null&&(l=e&-e,l=(l&42)!==0?1:Ii(l),l=(l&(u.suspendedLanes|e))!==0?0:l,l!==0&&l!==s.retryLane))throw s.retryLane=l,hl(n,l),At(u,n,l),Cd;c.data==="$?"||Rc(),t=hc(n,t,e)}else c.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=s.treeContext,On=jt(c.nextSibling),ot=t,rn=!0,Ze=null,Xt=!1,n!==null&&(Bt[_t++]=ne,Bt[_t++]=te,Bt[_t++]=Xe,ne=n.id,te=n.overflow,Xe=t),t=gc(t,l.children),t.flags|=4096);return t}return a?(Se(),a=l.fallback,c=t.mode,s=n.child,v=s.sibling,l=Pt(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,v!==null?a=Pt(v,a):(a=Ge(a,c,e,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,c=n.child.memoizedState,c===null?c=vc(e):(s=c.cachePool,s!==null?(v=Xn._currentValue,s=s.parent!==v?{parent:v,pool:v}:s):s=Do(),c={baseLanes:c.baseLanes|e,cachePool:s}),a.memoizedState=c,a.childLanes=pc(n,u,e),t.memoizedState=fc,l):(xe(t),e=n.child,n=e.sibling,e=Pt(e,{mode:"visible",children:l.children}),e.return=t,e.sibling=null,n!==null&&(u=t.deletions,u===null?(t.deletions=[n],t.flags|=16):u.push(n)),t.child=e,t.memoizedState=null,e)}function gc(n,t){return t=zi({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function zi(n,t){return n=bt(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function hc(n,t,e){return Ml(t,n.child,null,e),n=gc(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Yd(n,t,e){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t),Ru(n.return,t,e)}function mc(n,t,e,l,a){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=e,i.tailMode=a)}function jd(n,t,e){var l=t.pendingProps,a=l.revealOrder,i=l.tail;if(nt(n,t,l.children,e),l=Qn.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yd(n,e,t);else if(n.tag===19)Yd(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(T(Qn,l),a){case"forwards":for(e=t.child,a=null;e!==null;)n=e.alternate,n!==null&&xi(n)===null&&(a=e),e=e.sibling;e=a,e===null?(a=t.child,t.child=null):(a=e.sibling,e.sibling=null),mc(t,!1,a,e,i);break;case"backwards":for(e=null,a=t.child,t.child=null;a!==null;){if(n=a.alternate,n!==null&&xi(n)===null){t.child=a;break}n=a.sibling,a.sibling=e,e=a,a=n}mc(t,!0,e,null,i);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ue(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),we|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(la(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(h(153));if(t.child!==null){for(n=t.child,e=Pt(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=Pt(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function bc(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&ai(n)))}function Nv(n,t,e){switch(t.tag){case 3:sn(t,t.stateNode.containerInfo),ge(t,Xn,n.memoizedState.cache),ta();break;case 27:case 5:qt(t);break;case 4:sn(t,t.stateNode.containerInfo);break;case 10:ge(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Ld(n,t,e):(xe(t),n=ue(n,t,e),n!==null?n.sibling:null);xe(t);break;case 19:var a=(n.flags&128)!==0;if(l=(e&t.childLanes)!==0,l||(la(n,t,e,!1),l=(e&t.childLanes)!==0),a){if(l)return jd(n,t,e);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),T(Qn,Qn.current),l)break;return null;case 22:case 23:return t.lanes=0,Rd(n,t,e);case 24:ge(t,Xn,n.memoizedState.cache)}return ue(n,t,e)}function Gd(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)Jn=!0;else{if(!bc(n,e)&&(t.flags&128)===0)return Jn=!1,Nv(n,t,e);Jn=(n.flags&131072)!==0}else Jn=!1,rn&&(t.flags&1048576)!==0&&bo(t,li,t.index);switch(t.lanes=0,t.tag){case 16:n:{n=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")Mu(l)?(n=We(l,n),t.tag=1,t=Ud(null,t,l,n,e)):(t.tag=0,t=rc(null,t,l,n,e));else{if(l!=null){if(a=l.$$typeof,a===Vn){t.tag=11,t=Bd(null,t,l,n,e);break n}else if(a===qn){t.tag=14,t=_d(null,t,l,n,e);break n}}throw t=Dt(l)||l,Error(h(306,t,""))}}return t;case 0:return rc(n,t,t.type,t.pendingProps,e);case 1:return l=t.type,a=We(l,t.pendingProps),Ud(n,t,l,a,e);case 3:n:{if(sn(t,t.stateNode.containerInfo),n===null)throw Error(h(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,ju(n,t),da(t,l,null,e);var u=t.memoizedState;if(l=u.cache,ge(t,Xn,l),l!==i.cache&&Hu(t,[Xn],e,!0),oa(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Nd(n,t,l,e);break n}else if(l!==a){a=Ot(Error(h(424)),t),ea(a),t=Nd(n,t,l,e);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(On=jt(n.firstChild),ot=t,rn=!0,Ze=null,Xt=!0,e=xd(t,null,l,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(ta(),l===a){t=ue(n,t,e);break n}nt(n,t,l,e)}t=t.child}return t;case 26:return Ai(n,t),n===null?(e=Vr(t.type,null,t.pendingProps,null))?t.memoizedState=e:rn||(e=t.type,n=t.pendingProps,l=Ni(N.current).createElement(e),l[it]=t,l[rt]=n,et(l,e,n),Kn(l),t.stateNode=l):t.memoizedState=Vr(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return qt(t),n===null&&rn&&(l=t.stateNode=Xr(t.type,t.pendingProps,N.current),ot=t,Xt=!0,a=On,Ce(t.type)?(Ic=a,On=jt(l.firstChild)):On=a),nt(n,t,t.pendingProps.children,e),Ai(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&rn&&((a=l=On)&&(l=f0(l,t.type,t.pendingProps,Xt),l!==null?(t.stateNode=l,ot=t,On=jt(l.firstChild),Xt=!1,a=!0):a=!1),a||Ve(t)),qt(t),a=t.type,i=t.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,Jc(a,i)?l=null:u!==null&&Jc(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=Ku(n,t,Cv,null,null,e),_a._currentValue=a),Ai(n,t),nt(n,t,l,e),t.child;case 6:return n===null&&rn&&((n=e=On)&&(e=v0(e,t.pendingProps,Xt),e!==null?(t.stateNode=e,ot=t,On=null,n=!0):n=!1),n||Ve(t)),null;case 13:return Ld(n,t,e);case 4:return sn(t,t.stateNode.containerInfo),l=t.pendingProps,n===null?t.child=Ml(t,null,l,e):nt(n,t,l,e),t.child;case 11:return Bd(n,t,t.type,t.pendingProps,e);case 7:return nt(n,t,t.pendingProps,e),t.child;case 8:return nt(n,t,t.pendingProps.children,e),t.child;case 12:return nt(n,t,t.pendingProps.children,e),t.child;case 10:return l=t.pendingProps,ge(t,t.type,l.value),nt(n,t,l.children,e),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Je(t),a=ut(a),l=l(a),t.flags|=1,nt(n,t,l,e),t.child;case 14:return _d(n,t,t.type,t.pendingProps,e);case 15:return kd(n,t,t.type,t.pendingProps,e);case 19:return jd(n,t,e);case 31:return l=t.pendingProps,e=t.mode,l={mode:l.mode,children:l.children},n===null?(e=zi(l,e),e.ref=t.ref,t.child=e,e.return=t,t=e):(e=Pt(n.child,l),e.ref=t.ref,t.child=e,e.return=t,t=e),t;case 22:return Rd(n,t,e);case 24:return Je(t),l=ut(Xn),n===null?(a=Nu(),a===null&&(a=xn,i=qu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=e),a=i),t.memoizedState={parent:l,cache:a},Yu(t),ge(t,Xn,a)):((n.lanes&e)!==0&&(ju(n,t),da(t,null,null,e),oa()),a=n.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ge(t,Xn,l)):(l=i.cache,ge(t,Xn,l),l!==a.cache&&Hu(t,[Xn],e,!0))),nt(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function ce(n){n.flags|=4}function Xd(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Wr(t)){if(t=kt.current,t!==null&&((an&4194048)===an?Qt!==null:(an&62914560)!==an&&(an&536870912)===0||t!==Qt))throw ca=Lu,wo;n.flags|=8192}}function Di(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?xs():536870912,n.lanes|=t,Bl|=t)}function ma(n,t){if(!rn)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function wn(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,l=0;if(t)for(var a=n.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=e,t}function Lv(n,t,e){var l=t.pendingProps;switch(Bu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(t),null;case 1:return wn(t),null;case 3:return e=t.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),le(Xn),dt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(na(t)?ce(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,So())),wn(t),null;case 26:return e=t.memoizedState,n===null?(ce(t),e!==null?(wn(t),Xd(t,e)):(wn(t),t.flags&=-16777217)):e?e!==n.memoizedState?(ce(t),wn(t),Xd(t,e)):(wn(t),t.flags&=-16777217):(n.memoizedProps!==l&&ce(t),wn(t),t.flags&=-16777217),null;case 27:Ut(t),e=N.current;var a=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==l&&ce(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return wn(t),null}n=C.current,na(t)?yo(t):(n=Xr(a,l,e),t.stateNode=n,ce(t))}return wn(t),null;case 5:if(Ut(t),e=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&ce(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return wn(t),null}if(n=C.current,na(t))yo(t);else{switch(a=Ni(N.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?a.createElement(e,{is:l.is}):a.createElement(e)}}n[it]=t,n[rt]=l;n:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break n;for(;a.sibling===null;){if(a.return===null||a.return===t)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=n;n:switch(et(n,e,l),e){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&ce(t)}}return wn(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==l&&ce(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(h(166));if(n=N.current,na(t)){if(n=t.stateNode,e=t.memoizedProps,l=null,a=ot,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[it]=t,n=!!(n.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||qr(n.nodeValue,e)),n||Ve(t)}else n=Ni(n).createTextNode(l),n[it]=t,t.stateNode=n}return wn(t),null;case 13:if(l=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=na(t),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[it]=t}else ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wn(t),a=!1}else a=So(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ie(t),t):(ie(t),null)}if(ie(t),(t.flags&128)!==0)return t.lanes=e,t;if(e=l!==null,n=n!==null&&n.memoizedState!==null,e){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)}return e!==n&&e&&(t.child.flags|=8192),Di(t,t.updateQueue),wn(t),null;case 4:return dt(),n===null&&Xc(t.stateNode.containerInfo),wn(t),null;case 10:return le(t.type),wn(t),null;case 19:if(O(Qn),a=t.memoizedState,a===null)return wn(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)ma(a,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=xi(n),i!==null){for(t.flags|=128,ma(a,!1),n=i.updateQueue,t.updateQueue=n,Di(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)mo(e,n),e=e.sibling;return T(Qn,Qn.current&1|2),t.child}n=n.sibling}a.tail!==null&&ht()>Ti&&(t.flags|=128,l=!0,ma(a,!1),t.lanes=4194304)}else{if(!l)if(n=xi(i),n!==null){if(t.flags|=128,l=!0,n=n.updateQueue,t.updateQueue=n,Di(t,n),ma(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!rn)return wn(t),null}else 2*ht()-a.renderingStartTime>Ti&&e!==536870912&&(t.flags|=128,l=!0,ma(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ht(),t.sibling=null,n=Qn.current,T(Qn,l?n&1|2:n&1),t):(wn(t),null);case 22:case 23:return ie(t),Zu(),l=t.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(e&536870912)!==0&&(t.flags&128)===0&&(wn(t),t.subtreeFlags&6&&(t.flags|=8192)):wn(t),e=t.updateQueue,e!==null&&Di(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(t.flags|=2048),n!==null&&O(Fe),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),le(Xn),wn(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Yv(n,t){switch(Bu(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return le(Xn),dt(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ut(t),null;case 13:if(ie(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(h(340));ta()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return O(Qn),null;case 4:return dt(),null;case 10:return le(t.type),null;case 22:case 23:return ie(t),Zu(),n!==null&&O(Fe),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return le(Xn),null;case 25:return null;default:return null}}function Qd(n,t){switch(Bu(t),t.tag){case 3:le(Xn),dt();break;case 26:case 27:case 5:Ut(t);break;case 4:dt();break;case 13:ie(t);break;case 19:O(Qn);break;case 10:le(t.type);break;case 22:case 23:ie(t),Zu(),n!==null&&O(Fe);break;case 24:le(Xn)}}function ba(n,t){try{var e=t.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var a=l.next;e=a;do{if((e.tag&n)===n){l=void 0;var i=e.create,u=e.inst;l=i(),u.destroy=l}e=e.next}while(e!==a)}}catch(c){yn(t,t.return,c)}}function Ee(n,t,e){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&n)===n){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=t;var s=e,v=c;try{v()}catch(y){yn(a,s,y)}}}l=l.next}while(l!==i)}}catch(y){yn(t,t.return,y)}}function Zd(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{_o(t,e)}catch(l){yn(n,n.return,l)}}}function Vd(n,t,e){e.props=We(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(l){yn(n,t,l)}}function ya(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof e=="function"?n.refCleanup=e(l):e.current=l}}catch(a){yn(n,t,a)}}function Zt(n,t){var e=n.ref,l=n.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(a){yn(n,t,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){yn(n,t,a)}else e.current=null}function Kd(n){var t=n.type,e=n.memoizedProps,l=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break n;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(a){yn(n,n.return,a)}}function yc(n,t,e){try{var l=n.stateNode;c0(l,n.type,e,t),l[rt]=t}catch(a){yn(n,n.return,a)}}function Jd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ce(n.type)||n.tag===4}function xc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Jd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ce(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sc(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Ui));else if(l!==4&&(l===27&&Ce(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(Sc(n,t,e),n=n.sibling;n!==null;)Sc(n,t,e),n=n.sibling}function wi(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(l!==4&&(l===27&&Ce(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(wi(n,t,e),n=n.sibling;n!==null;)wi(n,t,e),n=n.sibling}function Fd(n){var t=n.stateNode,e=n.memoizedProps;try{for(var l=n.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);et(t,l,e),t[it]=n,t[rt]=e}catch(i){yn(n,n.return,i)}}var se=!1,kn=!1,Ec=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function jv(n,t){if(n=n.containerInfo,Vc=Qi,n=uo(n),xu(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break n}var u=0,c=-1,s=-1,v=0,y=0,S=n,p=null;t:for(;;){for(var g;S!==e||a!==0&&S.nodeType!==3||(c=u+a),S!==i||l!==0&&S.nodeType!==3||(s=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)p=S,S=g;for(;;){if(S===n)break t;if(p===e&&++v===a&&(c=u),p===i&&++y===l&&(s=u),(g=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=g}e=c===-1||s===-1?null:{start:c,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:n,selectionRange:e},Qi=!1,Fn=t;Fn!==null;)if(t=Fn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,Fn=n;else for(;Fn!==null;){switch(t=Fn,i=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,e=t,a=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var j=We(e.type,a,e.elementType===e.type);n=l.getSnapshotBeforeUpdate(j,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(U){yn(e,e.return,U)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)$c(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":$c(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(h(163))}if(n=t.sibling,n!==null){n.return=t.return,Fn=n;break}Fn=t.return}}function Wd(n,t,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(n,e),l&4&&ba(5,e);break;case 1:if(Ae(n,e),l&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(u){yn(e,e.return,u)}else{var a=We(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(a,t,n.__reactInternalSnapshotBeforeUpdate)}catch(u){yn(e,e.return,u)}}l&64&&Zd(e),l&512&&ya(e,e.return);break;case 3:if(Ae(n,e),l&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{_o(n,t)}catch(u){yn(e,e.return,u)}}break;case 27:t===null&&l&4&&Fd(e);case 26:case 5:Ae(n,e),t===null&&l&4&&Kd(e),l&512&&ya(e,e.return);break;case 12:Ae(n,e);break;case 13:Ae(n,e),l&4&&nr(n,e),l&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=$v.bind(null,e),p0(n,e))));break;case 22:if(l=e.memoizedState!==null||se,!l){t=t!==null&&t.memoizedState!==null||kn,a=se;var i=kn;se=l,(kn=t)&&!i?ze(n,e,(e.subtreeFlags&8772)!==0):Ae(n,e),se=a,kn=i}break;case 30:break;default:Ae(n,e)}}function Id(n){var t=n.alternate;t!==null&&(n.alternate=null,Id(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&tu(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Dn=null,pt=!1;function oe(n,t,e){for(e=e.child;e!==null;)Pd(n,t,e),e=e.sibling}function Pd(n,t,e){if(H&&typeof H.onCommitFiberUnmount=="function")try{H.onCommitFiberUnmount(R,e)}catch{}switch(e.tag){case 26:kn||Zt(e,t),oe(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:kn||Zt(e,t);var l=Dn,a=pt;Ce(e.type)&&(Dn=e.stateNode,pt=!1),oe(n,t,e),Ta(e.stateNode),Dn=l,pt=a;break;case 5:kn||Zt(e,t);case 6:if(l=Dn,a=pt,Dn=null,oe(n,t,e),Dn=l,pt=a,Dn!==null)if(pt)try{(Dn.nodeType===9?Dn.body:Dn.nodeName==="HTML"?Dn.ownerDocument.body:Dn).removeChild(e.stateNode)}catch(i){yn(e,t,i)}else try{Dn.removeChild(e.stateNode)}catch(i){yn(e,t,i)}break;case 18:Dn!==null&&(pt?(n=Dn,jr(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),qa(n)):jr(Dn,e.stateNode));break;case 4:l=Dn,a=pt,Dn=e.stateNode.containerInfo,pt=!0,oe(n,t,e),Dn=l,pt=a;break;case 0:case 11:case 14:case 15:kn||Ee(2,e,t),kn||Ee(4,e,t),oe(n,t,e);break;case 1:kn||(Zt(e,t),l=e.stateNode,typeof l.componentWillUnmount=="function"&&Vd(e,t,l)),oe(n,t,e);break;case 21:oe(n,t,e);break;case 22:kn=(l=kn)||e.memoizedState!==null,oe(n,t,e),kn=l;break;default:oe(n,t,e)}}function nr(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{qa(n)}catch(e){yn(t,t.return,e)}}function Gv(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new $d),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new $d),t;default:throw Error(h(435,n.tag))}}function Ac(n,t){var e=Gv(n);t.forEach(function(l){var a=Wv.bind(null,n,l);e.has(l)||(e.add(l),l.then(a,a))})}function yt(n,t){var e=t.deletions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l],i=n,u=t,c=u;n:for(;c!==null;){switch(c.tag){case 27:if(Ce(c.type)){Dn=c.stateNode,pt=!1;break n}break;case 5:Dn=c.stateNode,pt=!1;break n;case 3:case 4:Dn=c.stateNode.containerInfo,pt=!0;break n}c=c.return}if(Dn===null)throw Error(h(160));Pd(i,u,a),Dn=null,pt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)tr(t,n),t=t.sibling}var Yt=null;function tr(n,t){var e=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:yt(t,n),xt(n),l&4&&(Ee(3,n,n.return),ba(3,n),Ee(5,n,n.return));break;case 1:yt(t,n),xt(n),l&512&&(kn||e===null||Zt(e,e.return)),l&64&&se&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var a=Yt;if(yt(t,n),xt(n),l&512&&(kn||e===null||Zt(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=n.memoizedState,e===null)if(l===null)if(n.stateNode===null){n:{l=n.type,e=n.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Xl]||i[it]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),et(i,l,e),i[it]=n,Kn(i),l=i;break n;case"link":var u=Fr("link","href",a).get(l+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break t}}i=a.createElement(l),et(i,l,e),a.head.appendChild(i);break;case"meta":if(u=Fr("meta","content",a).get(l+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break t}}i=a.createElement(l),et(i,l,e),a.head.appendChild(i);break;default:throw Error(h(468,l))}i[it]=n,Kn(i),l=i}n.stateNode=l}else $r(a,n.type,n.stateNode);else n.stateNode=Jr(a,l,n.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?$r(a,n.type,n.stateNode):Jr(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&yc(n,n.memoizedProps,e.memoizedProps)}break;case 27:yt(t,n),xt(n),l&512&&(kn||e===null||Zt(e,e.return)),e!==null&&l&4&&yc(n,n.memoizedProps,e.memoizedProps);break;case 5:if(yt(t,n),xt(n),l&512&&(kn||e===null||Zt(e,e.return)),n.flags&32){a=n.stateNode;try{ol(a,"")}catch(g){yn(n,n.return,g)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,yc(n,a,e!==null?e.memoizedProps:a)),l&1024&&(Ec=!0);break;case 6:if(yt(t,n),xt(n),l&4){if(n.stateNode===null)throw Error(h(162));l=n.memoizedProps,e=n.stateNode;try{e.nodeValue=l}catch(g){yn(n,n.return,g)}}break;case 3:if(ji=null,a=Yt,Yt=Li(t.containerInfo),yt(t,n),Yt=a,xt(n),l&4&&e!==null&&e.memoizedState.isDehydrated)try{qa(t.containerInfo)}catch(g){yn(n,n.return,g)}Ec&&(Ec=!1,er(n));break;case 4:l=Yt,Yt=Li(n.stateNode.containerInfo),yt(t,n),xt(n),Yt=l;break;case 12:yt(t,n),xt(n);break;case 13:yt(t,n),xt(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Oc=ht()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ac(n,l)));break;case 22:a=n.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,v=se,y=kn;if(se=v||a,kn=y||s,yt(t,n),kn=y,se=v,xt(n),l&8192)n:for(t=n.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(e===null||s||se||kn||Ie(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){s=e=t;try{if(i=s.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var S=s.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(g){yn(s,s.return,g)}}}else if(t.tag===6){if(e===null){s=t;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(g){yn(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=n.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,Ac(n,e))));break;case 19:yt(t,n),xt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ac(n,l)));break;case 30:break;case 21:break;default:yt(t,n),xt(n)}}function xt(n){var t=n.flags;if(t&2){try{for(var e,l=n.return;l!==null;){if(Jd(l)){e=l;break}l=l.return}if(e==null)throw Error(h(160));switch(e.tag){case 27:var a=e.stateNode,i=xc(n);wi(n,i,a);break;case 5:var u=e.stateNode;e.flags&32&&(ol(u,""),e.flags&=-33);var c=xc(n);wi(n,c,u);break;case 3:case 4:var s=e.stateNode.containerInfo,v=xc(n);Sc(n,v,s);break;default:throw Error(h(161))}}catch(y){yn(n,n.return,y)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function er(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;er(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function Ae(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wd(n,t.alternate,t),t=t.sibling}function Ie(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:Ee(4,t,t.return),Ie(t);break;case 1:Zt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Vd(t,t.return,e),Ie(t);break;case 27:Ta(t.stateNode);case 26:case 5:Zt(t,t.return),Ie(t);break;case 22:t.memoizedState===null&&Ie(t);break;case 30:Ie(t);break;default:Ie(t)}n=n.sibling}}function ze(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=n,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ze(a,i,e),ba(4,i);break;case 1:if(ze(a,i,e),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(v){yn(l,l.return,v)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Bo(s[a],c)}catch(v){yn(l,l.return,v)}}e&&u&64&&Zd(i),ya(i,i.return);break;case 27:Fd(i);case 26:case 5:ze(a,i,e),e&&l===null&&u&4&&Kd(i),ya(i,i.return);break;case 12:ze(a,i,e);break;case 13:ze(a,i,e),e&&u&4&&nr(a,i);break;case 22:i.memoizedState===null&&ze(a,i,e),ya(i,i.return);break;case 30:break;default:ze(a,i,e)}t=t.sibling}}function zc(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&aa(e))}function Dc(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&aa(n))}function Vt(n,t,e,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lr(n,t,e,l),t=t.sibling}function lr(n,t,e,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(n,t,e,l),a&2048&&ba(9,t);break;case 1:Vt(n,t,e,l);break;case 3:Vt(n,t,e,l),a&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&aa(n)));break;case 12:if(a&2048){Vt(n,t,e,l),n=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){yn(t,t.return,s)}}else Vt(n,t,e,l);break;case 13:Vt(n,t,e,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(n,t,e,l):xa(n,t):i._visibility&2?Vt(n,t,e,l):(i._visibility|=2,Tl(n,t,e,l,(t.subtreeFlags&10256)!==0)),a&2048&&zc(u,t);break;case 24:Vt(n,t,e,l),a&2048&&Dc(t.alternate,t);break;default:Vt(n,t,e,l)}}function Tl(n,t,e,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=n,u=t,c=e,s=l,v=u.flags;switch(u.tag){case 0:case 11:case 15:Tl(i,u,c,s,a),ba(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?Tl(i,u,c,s,a):xa(i,u):(y._visibility|=2,Tl(i,u,c,s,a)),a&&v&2048&&zc(u.alternate,u);break;case 24:Tl(i,u,c,s,a),a&&v&2048&&Dc(u.alternate,u);break;default:Tl(i,u,c,s,a)}t=t.sibling}}function xa(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,l=t,a=l.flags;switch(l.tag){case 22:xa(e,l),a&2048&&zc(l.alternate,l);break;case 24:xa(e,l),a&2048&&Dc(l.alternate,l);break;default:xa(e,l)}t=t.sibling}}var Sa=8192;function Ol(n){if(n.subtreeFlags&Sa)for(n=n.child;n!==null;)ar(n),n=n.sibling}function ar(n){switch(n.tag){case 26:Ol(n),n.flags&Sa&&n.memoizedState!==null&&M0(Yt,n.memoizedState,n.memoizedProps);break;case 5:Ol(n);break;case 3:case 4:var t=Yt;Yt=Li(n.stateNode.containerInfo),Ol(n),Yt=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=Sa,Sa=16777216,Ol(n),Sa=t):Ol(n));break;default:Ol(n)}}function ir(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function Ea(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];Fn=l,cr(l,n)}ir(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ur(n),n=n.sibling}function ur(n){switch(n.tag){case 0:case 11:case 15:Ea(n),n.flags&2048&&Ee(9,n,n.return);break;case 3:Ea(n);break;case 12:Ea(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Mi(n)):Ea(n);break;default:Ea(n)}}function Mi(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];Fn=l,cr(l,n)}ir(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:Ee(8,t,t.return),Mi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Mi(t));break;default:Mi(t)}n=n.sibling}}function cr(n,t){for(;Fn!==null;){var e=Fn;switch(e.tag){case 0:case 11:case 15:Ee(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:aa(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,Fn=l;else n:for(e=n;Fn!==null;){l=Fn;var a=l.sibling,i=l.return;if(Id(l),l===e){Fn=null;break n}if(a!==null){a.return=i,Fn=a;break n}Fn=i}}}var Xv={getCacheForType:function(n){var t=ut(Xn),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e}},Qv=typeof WeakMap=="function"?WeakMap:Map,vn=0,xn=null,nn=null,an=0,pn=0,St=null,De=!1,Cl=!1,wc=!1,de=0,Cn=0,we=0,Pe=0,Mc=0,Rt=0,Bl=0,Aa=null,gt=null,Tc=!1,Oc=0,Ti=1/0,Oi=null,Me=null,tt=0,Te=null,_l=null,kl=0,Cc=0,Bc=null,sr=null,za=0,_c=null;function Et(){if((vn&2)!==0&&an!==0)return an&-an;if(b.T!==null){var n=xl;return n!==0?n:Lc()}return As()}function or(){Rt===0&&(Rt=(an&536870912)===0||rn?ys():536870912);var n=kt.current;return n!==null&&(n.flags|=32),Rt}function At(n,t,e){(n===xn&&(pn===2||pn===9)||n.cancelPendingCommit!==null)&&(Rl(n,0),Oe(n,an,Rt,!1)),Gl(n,e),((vn&2)===0||n!==xn)&&(n===xn&&((vn&2)===0&&(Pe|=e),Cn===4&&Oe(n,an,Rt,!1)),Kt(n))}function dr(n,t,e){if((vn&6)!==0)throw Error(h(327));var l=!e&&(t&124)===0&&(t&n.expiredLanes)===0||jl(n,t),a=l?Kv(n,t):Hc(n,t,!0),i=l;do{if(a===0){Cl&&!l&&Oe(n,t,0,!1);break}else{if(e=n.current.alternate,i&&!Zv(e)){a=Hc(n,t,!1),i=!1;continue}if(a===2){if(i=t,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;n:{var c=n;a=Aa;var s=c.current.memoizedState.isDehydrated;if(s&&(Rl(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(wc&&!s){c.errorRecoveryDisabledLanes|=i,Pe|=i,a=4;break n}i=gt,gt=a,i!==null&&(gt===null?gt=i:gt.push.apply(gt,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Rl(n,0),Oe(n,t,0,!0);break}n:{switch(l=n,i=a,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:Oe(l,t,Rt,!De);break n;case 2:gt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=Oc+300-ht(),10<a)){if(Oe(l,t,Rt,!De),Ue(l,0,!0)!==0)break n;l.timeoutHandle=Lr(rr.bind(null,l,e,gt,Oi,Tc,t,Rt,Pe,Bl,De,i,2,-0,0),a);break n}rr(l,e,gt,Oi,Tc,t,Rt,Pe,Bl,De,i,0,-0,0)}}break}while(!0);Kt(n)}function rr(n,t,e,l,a,i,u,c,s,v,y,S,p,g){if(n.timeoutHandle=-1,S=t.subtreeFlags,(S&8192||(S&16785408)===16785408)&&(Ba={stylesheets:null,count:0,unsuspend:w0},ar(t),S=T0(),S!==null)){n.cancelPendingCommit=S(br.bind(null,n,t,i,e,l,a,u,c,s,y,1,p,g)),Oe(n,i,u,!v);return}br(n,t,i,e,l,a,u,c,s)}function Zv(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var a=e[l],i=a.getSnapshot;a=a.value;try{if(!mt(i(),a))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oe(n,t,e,l){t&=~Mc,t&=~Pe,n.suspendedLanes|=t,n.pingedLanes&=~t,l&&(n.warmLanes|=t),l=n.expirationTimes;for(var a=t;0<a;){var i=31-W(a),u=1<<i;l[i]=-1,a&=~u}e!==0&&Ss(n,e,t)}function Ci(){return(vn&6)===0?(Da(0),!1):!0}function kc(){if(nn!==null){if(pn===0)var n=nn.return;else n=nn,ee=Ke=null,$u(n),wl=null,ga=0,n=nn;for(;n!==null;)Qd(n.alternate,n),n=n.return;nn=null}}function Rl(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,o0(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),kc(),xn=n,nn=e=Pt(n.current,null),an=t,pn=0,St=null,De=!1,Cl=jl(n,t),wc=!1,Bl=Rt=Mc=Pe=we=Cn=0,gt=Aa=null,Tc=!1,(t&8)!==0&&(t|=t&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=t;0<l;){var a=31-W(l),i=1<<a;t|=n[a],l&=~i}return de=t,Ia(),e}function fr(n,t){$=null,b.H=mi,t===ua||t===ci?(t=Oo(),pn=3):t===wo?(t=Oo(),pn=4):pn=t===Cd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,nn===null&&(Cn=1,Ei(n,Ot(t,n.current)))}function vr(){var n=b.H;return b.H=mi,n===null?mi:n}function pr(){var n=b.A;return b.A=Xv,n}function Rc(){Cn=4,De||(an&4194048)!==an&&kt.current!==null||(Cl=!0),(we&134217727)===0&&(Pe&134217727)===0||xn===null||Oe(xn,an,Rt,!1)}function Hc(n,t,e){var l=vn;vn|=2;var a=vr(),i=pr();(xn!==n||an!==t)&&(Oi=null,Rl(n,t)),t=!1;var u=Cn;n:do try{if(pn!==0&&nn!==null){var c=nn,s=St;switch(pn){case 8:kc(),u=6;break n;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var v=pn;if(pn=0,St=null,Hl(n,c,s,v),e&&Cl){u=0;break n}break;default:v=pn,pn=0,St=null,Hl(n,c,s,v)}}Vv(),u=Cn;break}catch(y){fr(n,y)}while(!0);return t&&n.shellSuspendCounter++,ee=Ke=null,vn=l,b.H=a,b.A=i,nn===null&&(xn=null,an=0,Ia()),u}function Vv(){for(;nn!==null;)gr(nn)}function Kv(n,t){var e=vn;vn|=2;var l=vr(),a=pr();xn!==n||an!==t?(Oi=null,Ti=ht()+500,Rl(n,t)):Cl=jl(n,t);n:do try{if(pn!==0&&nn!==null){t=nn;var i=St;t:switch(pn){case 1:pn=0,St=null,Hl(n,t,i,1);break;case 2:case 9:if(Mo(i)){pn=0,St=null,hr(t);break}t=function(){pn!==2&&pn!==9||xn!==n||(pn=7),Kt(n)},i.then(t,t);break n;case 3:pn=7;break n;case 4:pn=5;break n;case 7:Mo(i)?(pn=0,St=null,hr(t)):(pn=0,St=null,Hl(n,t,i,7));break;case 5:var u=null;switch(nn.tag){case 26:u=nn.memoizedState;case 5:case 27:var c=nn;if(!u||Wr(u)){pn=0,St=null;var s=c.sibling;if(s!==null)nn=s;else{var v=c.return;v!==null?(nn=v,Bi(v)):nn=null}break t}}pn=0,St=null,Hl(n,t,i,5);break;case 6:pn=0,St=null,Hl(n,t,i,6);break;case 8:kc(),Cn=6;break n;default:throw Error(h(462))}}Jv();break}catch(y){fr(n,y)}while(!0);return ee=Ke=null,b.H=l,b.A=a,vn=e,nn!==null?0:(xn=null,an=0,Ia(),Cn)}function Jv(){for(;nn!==null&&!Gt();)gr(nn)}function gr(n){var t=Gd(n.alternate,n,de);n.memoizedProps=n.pendingProps,t===null?Bi(n):nn=t}function hr(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=qd(e,t,t.pendingProps,t.type,void 0,an);break;case 11:t=qd(e,t,t.pendingProps,t.type.render,t.ref,an);break;case 5:$u(t);default:Qd(e,t),t=nn=mo(t,de),t=Gd(e,t,de)}n.memoizedProps=n.pendingProps,t===null?Bi(n):nn=t}function Hl(n,t,e,l){ee=Ke=null,$u(t),wl=null,ga=0;var a=t.return;try{if(Uv(n,a,t,e,an)){Cn=1,Ei(n,Ot(e,n.current)),nn=null;return}}catch(i){if(a!==null)throw nn=a,i;Cn=1,Ei(n,Ot(e,n.current)),nn=null;return}t.flags&32768?(rn||l===1?n=!0:Cl||(an&536870912)!==0?n=!1:(De=n=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),mr(t,n)):Bi(t)}function Bi(n){var t=n;do{if((t.flags&32768)!==0){mr(t,De);return}n=t.return;var e=Lv(t.alternate,t,de);if(e!==null){nn=e;return}if(t=t.sibling,t!==null){nn=t;return}nn=t=n}while(t!==null);Cn===0&&(Cn=5)}function mr(n,t){do{var e=Yv(n.alternate,n);if(e!==null){e.flags&=32767,nn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){nn=n;return}nn=n=e}while(n!==null);Cn=6,nn=null}function br(n,t,e,l,a,i,u,c,s){n.cancelPendingCommit=null;do _i();while(tt!==0);if((vn&6)!==0)throw Error(h(327));if(t!==null){if(t===n.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=Du,wf(n,e,i,u,c,s),n===xn&&(nn=xn=null,an=0),_l=t,Te=n,kl=e,Cc=i,Bc=a,sr=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Iv(Nt,function(){return Ar(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,a=A.p,A.p=2,u=vn,vn|=4;try{jv(n,t,e)}finally{vn=u,A.p=a,b.T=l}}tt=1,yr(),xr(),Sr()}}function yr(){if(tt===1){tt=0;var n=Te,t=_l,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var l=A.p;A.p=2;var a=vn;vn|=4;try{tr(t,n);var i=Kc,u=uo(n.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&io(c.ownerDocument.documentElement,c)){if(s!==null&&xu(c)){var v=s.start,y=s.end;if(y===void 0&&(y=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(y,c.value.length);else{var S=c.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var g=p.getSelection(),j=c.textContent.length,U=Math.min(s.start,j),bn=s.end===void 0?U:Math.min(s.end,j);!g.extend&&U>bn&&(u=bn,bn=U,U=u);var r=ao(c,U),d=ao(c,bn);if(r&&d&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==d.node||g.focusOffset!==d.offset)){var f=S.createRange();f.setStart(r.node,r.offset),g.removeAllRanges(),U>bn?(g.addRange(f),g.extend(d.node,d.offset)):(f.setEnd(d.node,d.offset),g.addRange(f))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Qi=!!Vc,Kc=Vc=null}finally{vn=a,A.p=l,b.T=e}}n.current=t,tt=2}}function xr(){if(tt===2){tt=0;var n=Te,t=_l,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var l=A.p;A.p=2;var a=vn;vn|=4;try{Wd(n,t.alternate,t)}finally{vn=a,A.p=l,b.T=e}}tt=3}}function Sr(){if(tt===4||tt===3){tt=0,La();var n=Te,t=_l,e=kl,l=sr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,_l=Te=null,Er(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(Me=null),Pi(e),t=t.stateNode,H&&typeof H.onCommitFiberRoot=="function")try{H.onCommitFiberRoot(R,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=b.T,a=A.p,A.p=2,b.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{b.T=t,A.p=a}}(kl&3)!==0&&_i(),Kt(n),a=n.pendingLanes,(e&4194090)!==0&&(a&42)!==0?n===_c?za++:(za=0,_c=n):za=0,Da(0)}}function Er(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,aa(t)))}function _i(n){return yr(),xr(),Sr(),Ar()}function Ar(){if(tt!==5)return!1;var n=Te,t=Cc;Cc=0;var e=Pi(kl),l=b.T,a=A.p;try{A.p=32>e?32:e,b.T=null,e=Bc,Bc=null;var i=Te,u=kl;if(tt=0,_l=Te=null,kl=0,(vn&6)!==0)throw Error(h(331));var c=vn;if(vn|=4,ur(i.current),lr(i,i.current,u,e),vn=c,Da(0,!1),H&&typeof H.onPostCommitFiberRoot=="function")try{H.onPostCommitFiberRoot(R,i)}catch{}return!0}finally{A.p=a,b.T=l,Er(n,t)}}function zr(n,t,e){t=Ot(e,t),t=dc(n.stateNode,t,2),n=be(n,t,2),n!==null&&(Gl(n,2),Kt(n))}function yn(n,t,e){if(n.tag===3)zr(n,n,e);else for(;t!==null;){if(t.tag===3){zr(t,n,e);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Me===null||!Me.has(l))){n=Ot(e,n),e=Td(2),l=be(t,e,2),l!==null&&(Od(e,l,t,n),Gl(l,2),Kt(l));break}}t=t.return}}function qc(n,t,e){var l=n.pingCache;if(l===null){l=n.pingCache=new Qv;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(e)||(wc=!0,a.add(e),n=Fv.bind(null,n,t,e),t.then(n,n))}function Fv(n,t,e){var l=n.pingCache;l!==null&&l.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,xn===n&&(an&e)===e&&(Cn===4||Cn===3&&(an&62914560)===an&&300>ht()-Oc?(vn&2)===0&&Rl(n,0):Mc|=e,Bl===an&&(Bl=0)),Kt(n)}function Dr(n,t){t===0&&(t=xs()),n=hl(n,t),n!==null&&(Gl(n,t),Kt(n))}function $v(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),Dr(n,e)}function Wv(n,t){var e=0;switch(n.tag){case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(e=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(t),Dr(n,e)}function Iv(n,t){return gn(n,t)}var ki=null,ql=null,Uc=!1,Ri=!1,Nc=!1,nl=0;function Kt(n){n!==ql&&n.next===null&&(ql===null?ki=ql=n:ql=ql.next=n),Ri=!0,Uc||(Uc=!0,n0())}function Da(n,t){if(!Nc&&Ri){Nc=!0;do for(var e=!1,l=ki;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-W(42|n)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Or(l,i))}else i=an,i=Ue(l,l===xn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||jl(l,i)||(e=!0,Or(l,i));l=l.next}while(e);Nc=!1}}function Pv(){wr()}function wr(){Ri=Uc=!1;var n=0;nl!==0&&(s0()&&(n=nl),nl=0);for(var t=ht(),e=null,l=ki;l!==null;){var a=l.next,i=Mr(l,t);i===0?(l.next=null,e===null?ki=a:e.next=a,a===null&&(ql=e)):(e=l,(n!==0||(i&3)!==0)&&(Ri=!0)),l=a}Da(n)}function Mr(n,t){for(var e=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-W(i),c=1<<u,s=a[u];s===-1?((c&e)===0||(c&l)!==0)&&(a[u]=Df(c,t)):s<=t&&(n.expiredLanes|=c),i&=~c}if(t=xn,e=an,e=Ue(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,e===0||n===t&&(pn===2||pn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Wn(l),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||jl(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(l!==null&&Wn(l),Pi(e)){case 2:case 8:e=tl;break;case 32:e=Nt;break;case 268435456:e=In;break;default:e=Nt}return l=Tr.bind(null,n),e=gn(e,l),n.callbackPriority=t,n.callbackNode=e,t}return l!==null&&l!==null&&Wn(l),n.callbackPriority=2,n.callbackNode=null,2}function Tr(n,t){if(tt!==0&&tt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(_i()&&n.callbackNode!==e)return null;var l=an;return l=Ue(n,n===xn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(dr(n,l,t),Mr(n,ht()),n.callbackNode!=null&&n.callbackNode===e?Tr.bind(null,n):null)}function Or(n,t){if(_i())return null;dr(n,t,!0)}function n0(){d0(function(){(vn&6)!==0?gn(Ya,Pv):wr()})}function Lc(){return nl===0&&(nl=ys()),nl}function Cr(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Za(""+n)}function Br(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function t0(n,t,e,l,a){if(t==="submit"&&e&&e.stateNode===a){var i=Cr((a[rt]||null).action),u=l.submitter;u&&(t=(t=u[rt]||null)?Cr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Fa("action","action",null,l,a);n.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(nl!==0){var s=u?Br(a,u):new FormData(a);ic(e,{pending:!0,data:s,method:a.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Br(a,u):new FormData(a),ic(e,{pending:!0,data:s,method:a.method,action:i},i,s))},currentTarget:a}]})}}for(var Yc=0;Yc<zu.length;Yc++){var jc=zu[Yc],e0=jc.toLowerCase(),l0=jc[0].toUpperCase()+jc.slice(1);Lt(e0,"on"+l0)}Lt(oo,"onAnimationEnd"),Lt(ro,"onAnimationIteration"),Lt(fo,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(xv,"onTransitionRun"),Lt(Sv,"onTransitionStart"),Lt(Ev,"onTransitionCancel"),Lt(vo,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function _r(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var l=n[e],a=l.event;l=l.listeners;n:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],s=c.instance,v=c.currentTarget;if(c=c.listener,s!==i&&a.isPropagationStopped())break n;i=c,a.currentTarget=v;try{i(a)}catch(y){Si(y)}a.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(c=l[u],s=c.instance,v=c.currentTarget,c=c.listener,s!==i&&a.isPropagationStopped())break n;i=c,a.currentTarget=v;try{i(a)}catch(y){Si(y)}a.currentTarget=null,i=s}}}}function tn(n,t){var e=t[nu];e===void 0&&(e=t[nu]=new Set);var l=n+"__bubble";e.has(l)||(kr(t,n,2,!1),e.add(l))}function Gc(n,t,e){var l=0;t&&(l|=4),kr(e,n,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Xc(n){if(!n[Hi]){n[Hi]=!0,Ds.forEach(function(e){e!=="selectionchange"&&(a0.has(e)||Gc(e,!1,n),Gc(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Gc("selectionchange",!1,t))}}function kr(n,t,e,l){switch(lf(t)){case 2:var a=B0;break;case 8:a=_0;break;default:a=ls}e=a.bind(null,t,e,n),a=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(t,e,{capture:!0,passive:a}):n.addEventListener(t,e,!0):a!==void 0?n.addEventListener(t,e,{passive:a}):n.addEventListener(t,e,!1)}function Qc(n,t,e,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=ll(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue n}c=c.parentNode}}l=l.return}Ls(function(){var v=i,y=ou(e),S=[];n:{var p=po.get(n);if(p!==void 0){var g=Fa,j=n;switch(n){case"keypress":if(Ka(e)===0)break n;case"keydown":case"keyup":g=If;break;case"focusin":j="focus",g=gu;break;case"focusout":j="blur",g=gu;break;case"beforeblur":case"afterblur":g=gu;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tv;break;case oo:case ro:case fo:g=Xf;break;case vo:g=lv;break;case"scroll":case"scrollend":g=Nf;break;case"wheel":g=iv;break;case"copy":case"cut":case"paste":g=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qs;break;case"toggle":case"beforetoggle":g=cv}var U=(t&4)!==0,bn=!U&&(n==="scroll"||n==="scrollend"),r=U?p!==null?p+"Capture":null:p;U=[];for(var d=v,f;d!==null;){var x=d;if(f=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||f===null||r===null||(x=Zl(d,r),x!=null&&U.push(Ma(d,x,f))),bn)break;d=d.return}0<U.length&&(p=new g(p,j,null,e,y),S.push({event:p,listeners:U}))}}if((t&7)===0){n:{if(p=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",p&&e!==su&&(j=e.relatedTarget||e.fromElement)&&(ll(j)||j[el]))break n;if((g||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,g?(j=e.relatedTarget||e.toElement,g=v,j=j?ll(j):null,j!==null&&(bn=X(j),U=j.tag,j!==bn||U!==5&&U!==27&&U!==6)&&(j=null)):(g=null,j=v),g!==j)){if(U=Gs,x="onMouseLeave",r="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(U=Qs,x="onPointerLeave",r="onPointerEnter",d="pointer"),bn=g==null?p:Ql(g),f=j==null?p:Ql(j),p=new U(x,d+"leave",g,e,y),p.target=bn,p.relatedTarget=f,x=null,ll(y)===v&&(U=new U(r,d+"enter",j,e,y),U.target=f,U.relatedTarget=bn,x=U),bn=x,g&&j)t:{for(U=g,r=j,d=0,f=U;f;f=Ul(f))d++;for(f=0,x=r;x;x=Ul(x))f++;for(;0<d-f;)U=Ul(U),d--;for(;0<f-d;)r=Ul(r),f--;for(;d--;){if(U===r||r!==null&&U===r.alternate)break t;U=Ul(U),r=Ul(r)}U=null}else U=null;g!==null&&Rr(S,p,g,U,!1),j!==null&&bn!==null&&Rr(S,bn,j,U,!0)}}n:{if(p=v?Ql(v):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var B=Is;else if($s(p))if(Ps)B=mv;else{B=gv;var I=pv}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?v&&cu(v.elementType)&&(B=Is):B=hv;if(B&&(B=B(n,v))){Ws(S,B,e,y);break n}I&&I(n,p,v),n==="focusout"&&v&&p.type==="number"&&v.memoizedProps.value!=null&&uu(p,"number",p.value)}switch(I=v?Ql(v):window,n){case"focusin":($s(I)||I.contentEditable==="true")&&(vl=I,Su=v,Pl=null);break;case"focusout":Pl=Su=vl=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,co(S,e,y);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":co(S,e,y)}var q;if(mu)n:{switch(n){case"compositionstart":var Y="onCompositionStart";break n;case"compositionend":Y="onCompositionEnd";break n;case"compositionupdate":Y="onCompositionUpdate";break n}Y=void 0}else fl?Js(n,e)&&(Y="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(Y="onCompositionStart");Y&&(Zs&&e.locale!=="ko"&&(fl||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&fl&&(q=Ys()):(pe=y,fu="value"in pe?pe.value:pe.textContent,fl=!0)),I=qi(v,Y),0<I.length&&(Y=new Xs(Y,n,null,e,y),S.push({event:Y,listeners:I}),q?Y.data=q:(q=Fs(e),q!==null&&(Y.data=q)))),(q=ov?dv(n,e):rv(n,e))&&(Y=qi(v,"onBeforeInput"),0<Y.length&&(I=new Xs("onBeforeInput","beforeinput",null,e,y),S.push({event:I,listeners:Y}),I.data=q)),t0(S,n,v,e,y)}_r(S,t)})}function Ma(n,t,e){return{instance:n,listener:t,currentTarget:e}}function qi(n,t){for(var e=t+"Capture",l=[];n!==null;){var a=n,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Zl(n,e),a!=null&&l.unshift(Ma(n,a,i)),a=Zl(n,t),a!=null&&l.push(Ma(n,a,i))),n.tag===3)return l;n=n.return}return[]}function Ul(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Rr(n,t,e,l,a){for(var i=t._reactName,u=[];e!==null&&e!==l;){var c=e,s=c.alternate,v=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||v===null||(s=v,a?(v=Zl(e,i),v!=null&&u.unshift(Ma(e,v,s))):a||(v=Zl(e,i),v!=null&&u.push(Ma(e,v,s)))),e=e.return}u.length!==0&&n.push({event:t,listeners:u})}var i0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Hr(n){return(typeof n=="string"?n:""+n).replace(i0,`
`).replace(u0,"")}function qr(n,t){return t=Hr(t),Hr(n)===t}function Ui(){}function mn(n,t,e,l,a,i){switch(e){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(n,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(n,""+l);break;case"className":Ga(n,"class",l);break;case"tabIndex":Ga(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ga(n,e,l);break;case"style":Us(n,l,i);break;case"data":if(t!=="object"){Ga(n,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=Za(""+l),n.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&mn(n,t,"name",a.name,a,null),mn(n,t,"formEncType",a.formEncType,a,null),mn(n,t,"formMethod",a.formMethod,a,null),mn(n,t,"formTarget",a.formTarget,a,null)):(mn(n,t,"encType",a.encType,a,null),mn(n,t,"method",a.method,a,null),mn(n,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=Za(""+l),n.setAttribute(e,l);break;case"onClick":l!=null&&(n.onclick=Ui);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(h(60));n.innerHTML=e}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}e=Za(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""+l):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":l===!0?n.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,l):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(e,l):n.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(e):n.setAttribute(e,l);break;case"popover":tn("beforetoggle",n),tn("toggle",n),ja(n,"popover",l);break;case"xlinkActuate":Wt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ja(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=qf.get(e)||e,ja(n,e,l))}}function Zc(n,t,e,l,a,i){switch(e){case"style":Us(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(h(60));n.innerHTML=e}}break;case"children":typeof l=="string"?ol(n,l):(typeof l=="number"||typeof l=="bigint")&&ol(n,""+l);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ws.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),t=e.slice(2,a?e.length-7:void 0),i=n[rt]||null,i=i!=null?i[e]:null,typeof i=="function"&&n.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,l,a);break n}e in n?n[e]=l:l===!0?n.setAttribute(e,""):ja(n,e,l)}}}function et(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tn("error",n),tn("load",n);var l=!1,a=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:mn(n,t,i,u,e,null)}}a&&mn(n,t,"srcSet",e.srcSet,e,null),l&&mn(n,t,"src",e.src,e,null);return;case"input":tn("invalid",n);var c=i=u=a=null,s=null,v=null;for(l in e)if(e.hasOwnProperty(l)){var y=e[l];if(y!=null)switch(l){case"name":a=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":v=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:mn(n,t,l,y,e,null)}}ks(n,i,c,s,v,u,a,!1),Xa(n);return;case"select":tn("invalid",n),l=u=i=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:mn(n,t,a,c,e,null)}t=i,e=u,n.multiple=!!l,t!=null?sl(n,!!l,t,!1):e!=null&&sl(n,!!l,e,!0);return;case"textarea":tn("invalid",n),i=a=l=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:mn(n,t,u,c,e,null)}Hs(n,l,a,i),Xa(n);return;case"option":for(s in e)if(e.hasOwnProperty(s)&&(l=e[s],l!=null))switch(s){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:mn(n,t,s,l,e,null)}return;case"dialog":tn("beforetoggle",n),tn("toggle",n),tn("cancel",n),tn("close",n);break;case"iframe":case"object":tn("load",n);break;case"video":case"audio":for(l=0;l<wa.length;l++)tn(wa[l],n);break;case"image":tn("error",n),tn("load",n);break;case"details":tn("toggle",n);break;case"embed":case"source":case"link":tn("error",n),tn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in e)if(e.hasOwnProperty(v)&&(l=e[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:mn(n,t,v,l,e,null)}return;default:if(cu(t)){for(y in e)e.hasOwnProperty(y)&&(l=e[y],l!==void 0&&Zc(n,t,y,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&mn(n,t,c,l,e,null))}function c0(n,t,e,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,s=null,v=null,y=null;for(g in e){var S=e[g];if(e.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=S;default:l.hasOwnProperty(g)||mn(n,t,g,null,l,S)}}for(var p in l){var g=l[p];if(S=e[p],l.hasOwnProperty(p)&&(g!=null||S!=null))switch(p){case"type":i=g;break;case"name":a=g;break;case"checked":v=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==S&&mn(n,t,p,g,l,S)}}iu(n,u,c,s,v,y,i,a);return;case"select":g=u=c=p=null;for(i in e)if(s=e[i],e.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:l.hasOwnProperty(i)||mn(n,t,i,null,l,s)}for(a in l)if(i=l[a],s=e[a],l.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&mn(n,t,a,i,l,s)}t=c,e=u,l=g,p!=null?sl(n,!!e,p,!1):!!l!=!!e&&(t!=null?sl(n,!!e,t,!0):sl(n,!!e,e?[]:"",!1));return;case"textarea":g=p=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:mn(n,t,c,null,l,a)}for(u in l)if(a=l[u],i=e[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":p=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==i&&mn(n,t,u,a,l,i)}Rs(n,p,g);return;case"option":for(var j in e)if(p=e[j],e.hasOwnProperty(j)&&p!=null&&!l.hasOwnProperty(j))switch(j){case"selected":n.selected=!1;break;default:mn(n,t,j,null,l,p)}for(s in l)if(p=l[s],g=e[s],l.hasOwnProperty(s)&&p!==g&&(p!=null||g!=null))switch(s){case"selected":n.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:mn(n,t,s,p,l,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in e)p=e[U],e.hasOwnProperty(U)&&p!=null&&!l.hasOwnProperty(U)&&mn(n,t,U,null,l,p);for(v in l)if(p=l[v],g=e[v],l.hasOwnProperty(v)&&p!==g&&(p!=null||g!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:mn(n,t,v,p,l,g)}return;default:if(cu(t)){for(var bn in e)p=e[bn],e.hasOwnProperty(bn)&&p!==void 0&&!l.hasOwnProperty(bn)&&Zc(n,t,bn,void 0,l,p);for(y in l)p=l[y],g=e[y],!l.hasOwnProperty(y)||p===g||p===void 0&&g===void 0||Zc(n,t,y,p,l,g);return}}for(var r in e)p=e[r],e.hasOwnProperty(r)&&p!=null&&!l.hasOwnProperty(r)&&mn(n,t,r,null,l,p);for(S in l)p=l[S],g=e[S],!l.hasOwnProperty(S)||p===g||p==null&&g==null||mn(n,t,S,p,l,g)}var Vc=null,Kc=null;function Ni(n){return n.nodeType===9?n:n.ownerDocument}function Ur(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nr(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Jc(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fc=null;function s0(){var n=window.event;return n&&n.type==="popstate"?n===Fc?!1:(Fc=n,!0):(Fc=null,!1)}var Lr=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(n){return Yr.resolve(null).then(n).catch(r0)}:Lr;function r0(n){setTimeout(function(){throw n})}function Ce(n){return n==="head"}function jr(n,t){var e=t,l=0,a=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(0<l&&8>l){e=l;var u=n.ownerDocument;if(e&1&&Ta(u.documentElement),e&2&&Ta(u.body),e&4)for(e=u.head,Ta(e),u=e.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Xl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=c}}if(a===0){n.removeChild(i),qa(t);return}a--}else e==="$"||e==="$?"||e==="$!"?a++:l=e.charCodeAt(0)-48;else l=0;e=i}while(e);qa(t)}function $c(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":$c(e),tu(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function f0(n,t,e,l){for(;n.nodeType===1;){var a=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Xl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=jt(n.nextSibling),n===null)break}return null}function v0(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=jt(n.nextSibling),n===null))return null;return n}function Wc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function p0(n,t){var e=n.ownerDocument;if(n.data!=="$?"||e.readyState==="complete")t();else{var l=function(){t(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function jt(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var Ic=null;function Gr(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}function Xr(n,t,e){switch(t=Ni(e),n){case"html":if(n=t.documentElement,!n)throw Error(h(452));return n;case"head":if(n=t.head,!n)throw Error(h(453));return n;case"body":if(n=t.body,!n)throw Error(h(454));return n;default:throw Error(h(451))}}function Ta(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);tu(n)}var Ht=new Map,Qr=new Set;function Li(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var re=A.d;A.d={f:g0,r:h0,D:m0,C:b0,L:y0,m:x0,X:E0,S:S0,M:A0};function g0(){var n=re.f(),t=Ci();return n||t}function h0(n){var t=al(n);t!==null&&t.tag===5&&t.type==="form"?dd(t):re.r(n)}var Nl=typeof document>"u"?null:document;function Zr(n,t,e){var l=Nl;if(l&&typeof t=="string"&&t){var a=Tt(t);a='link[rel="'+n+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),Qr.has(a)||(Qr.add(a),n={rel:n,crossOrigin:e,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),et(t,"link",n),Kn(t),l.head.appendChild(t)))}}function m0(n){re.D(n),Zr("dns-prefetch",n,null)}function b0(n,t){re.C(n,t),Zr("preconnect",n,t)}function y0(n,t,e){re.L(n,t,e);var l=Nl;if(l&&n&&t){var a='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Tt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Tt(e.imageSizes)+'"]')):a+='[href="'+Tt(n)+'"]';var i=a;switch(t){case"style":i=Ll(n);break;case"script":i=Yl(n)}Ht.has(i)||(n=_({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),Ht.set(i,n),l.querySelector(a)!==null||t==="style"&&l.querySelector(Oa(i))||t==="script"&&l.querySelector(Ca(i))||(t=l.createElement("link"),et(t,"link",n),Kn(t),l.head.appendChild(t)))}}function x0(n,t){re.m(n,t);var e=Nl;if(e&&n){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(n)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(n)}if(!Ht.has(i)&&(n=_({rel:"modulepreload",href:n},t),Ht.set(i,n),e.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ca(i)))return}l=e.createElement("link"),et(l,"link",n),Kn(l),e.head.appendChild(l)}}}function S0(n,t,e){re.S(n,t,e);var l=Nl;if(l&&n){var a=il(l).hoistableStyles,i=Ll(n);t=t||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(Oa(i)))c.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":t},e),(e=Ht.get(i))&&Pc(n,e);var s=u=l.createElement("link");Kn(s),et(s,"link",n),s._p=new Promise(function(v,y){s.onload=v,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function E0(n,t){re.X(n,t);var e=Nl;if(e&&n){var l=il(e).hoistableScripts,a=Yl(n),i=l.get(a);i||(i=e.querySelector(Ca(a)),i||(n=_({src:n,async:!0},t),(t=Ht.get(a))&&ns(n,t),i=e.createElement("script"),Kn(i),et(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function A0(n,t){re.M(n,t);var e=Nl;if(e&&n){var l=il(e).hoistableScripts,a=Yl(n),i=l.get(a);i||(i=e.querySelector(Ca(a)),i||(n=_({src:n,async:!0,type:"module"},t),(t=Ht.get(a))&&ns(n,t),i=e.createElement("script"),Kn(i),et(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Vr(n,t,e,l){var a=(a=N.current)?Li(a):null;if(!a)throw Error(h(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ll(e.href),e=il(a).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Ll(e.href);var i=il(a).hoistableStyles,u=i.get(n);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=a.querySelector(Oa(n)))&&!i._p&&(u.instance=i,u.state.loading=5),Ht.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ht.set(n,e),i||z0(a,n,e,u.state))),t&&l===null)throw Error(h(528,""));return u}if(t&&l!==null)throw Error(h(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yl(e),e=il(a).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,n))}}function Ll(n){return'href="'+Tt(n)+'"'}function Oa(n){return'link[rel="stylesheet"]['+n+"]"}function Kr(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function z0(n,t,e,l){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=n.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",e),Kn(t),n.head.appendChild(t))}function Yl(n){return'[src="'+Tt(n)+'"]'}function Ca(n){return"script[async]"+n}function Jr(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var l=n.querySelector('style[data-href~="'+Tt(e.href)+'"]');if(l)return t.instance=l,Kn(l),l;var a=_({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Kn(l),et(l,"style",a),Yi(l,e.precedence,n),t.instance=l;case"stylesheet":a=Ll(e.href);var i=n.querySelector(Oa(a));if(i)return t.state.loading|=4,t.instance=i,Kn(i),i;l=Kr(e),(a=Ht.get(a))&&Pc(l,a),i=(n.ownerDocument||n).createElement("link"),Kn(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),et(i,"link",l),t.state.loading|=4,Yi(i,e.precedence,n),t.instance=i;case"script":return i=Yl(e.src),(a=n.querySelector(Ca(i)))?(t.instance=a,Kn(a),a):(l=e,(a=Ht.get(i))&&(l=_({},e),ns(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),Kn(a),et(a,"link",l),n.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Yi(l,e.precedence,n));return t.instance}function Yi(n,t,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function Pc(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function ns(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var ji=null;function Fr(n,t,e){if(ji===null){var l=new Map,a=ji=new Map;a.set(e,l)}else a=ji,l=a.get(e),l||(l=new Map,a.set(e,l));if(l.has(n))return l;for(l.set(n,null),e=e.getElementsByTagName(n),a=0;a<e.length;a++){var i=e[a];if(!(i[Xl]||i[it]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=n+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function $r(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function D0(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wr(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ba=null;function w0(){}function M0(n,t,e){if(Ba===null)throw Error(h(475));var l=Ba;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Ll(e.href),i=n.querySelector(Oa(a));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Gi.bind(l),n.then(l,l)),t.state.loading|=4,t.instance=i,Kn(i);return}i=n.ownerDocument||n,e=Kr(e),(a=Ht.get(a))&&Pc(e,a),i=i.createElement("link"),Kn(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),et(i,"link",e),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Gi.bind(l),n.addEventListener("load",t),n.addEventListener("error",t))}}function T0(){if(Ba===null)throw Error(h(475));var n=Ba;return n.stylesheets&&n.count===0&&ts(n,n.stylesheets),0<n.count?function(t){var e=setTimeout(function(){if(n.stylesheets&&ts(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(e)}}:null}function Gi(){if(this.count--,this.count===0){if(this.stylesheets)ts(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Xi=null;function ts(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Xi=new Map,t.forEach(O0,n),Xi=null,Gi.call(n))}function O0(n,t){if(!(t.state.loading&4)){var e=Xi.get(n);if(e)var l=e.get(null);else{e=new Map,Xi.set(n,e);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),l=u)}l&&e.set(null,l)}a=t.instance,u=a.getAttribute("data-precedence"),i=e.get(u)||l,i===l&&e.set(null,a),e.set(u,a),this.count++,l=Gi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),t.state.loading|=4}}var _a={$$typeof:J,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function C0(n,t,e,l,a,i,u,c){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Ir(n,t,e,l,a,i,u,c,s,v,y,S){return n=new C0(n,t,e,u,c,s,v,S),t=1,i===!0&&(t|=24),i=bt(3,null,null,t),n.current=i,i.stateNode=n,t=qu(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:t},Yu(i),n}function Pr(n){return n?(n=ml,n):ml}function nf(n,t,e,l,a,i){a=Pr(a),l.context===null?l.context=a:l.pendingContext=a,l=me(t),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=be(n,l,t),e!==null&&(At(e,n,t),sa(e,n,t))}function tf(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function es(n,t){tf(n,t),(n=n.alternate)&&tf(n,t)}function ef(n){if(n.tag===13){var t=hl(n,67108864);t!==null&&At(t,n,67108864),es(n,67108864)}}var Qi=!0;function B0(n,t,e,l){var a=b.T;b.T=null;var i=A.p;try{A.p=2,ls(n,t,e,l)}finally{A.p=i,b.T=a}}function _0(n,t,e,l){var a=b.T;b.T=null;var i=A.p;try{A.p=8,ls(n,t,e,l)}finally{A.p=i,b.T=a}}function ls(n,t,e,l){if(Qi){var a=as(l);if(a===null)Qc(n,t,l,Zi,e),af(n,l);else if(R0(a,n,t,e,l))l.stopPropagation();else if(af(n,l),t&4&&-1<k0.indexOf(n)){for(;a!==null;){var i=al(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=wt(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-W(u);c.entanglements[1]|=s,u&=~s}Kt(i),(vn&6)===0&&(Ti=ht()+500,Da(0))}}break;case 13:c=hl(i,2),c!==null&&At(c,i,2),Ci(),es(i,2)}if(i=as(l),i===null&&Qc(n,t,l,Zi,e),i===a)break;a=i}a!==null&&l.stopPropagation()}else Qc(n,t,l,null,e)}}function as(n){return n=ou(n),is(n)}var Zi=null;function is(n){if(Zi=null,n=ll(n),n!==null){var t=X(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=ln(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Zi=n,null}function lf(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case Ya:return 2;case tl:return 8;case Nt:case bs:return 32;case In:return 268435456;default:return 32}default:return 32}}var us=!1,Be=null,_e=null,ke=null,ka=new Map,Ra=new Map,Re=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function af(n,t){switch(n){case"focusin":case"focusout":Be=null;break;case"dragenter":case"dragleave":_e=null;break;case"mouseover":case"mouseout":ke=null;break;case"pointerover":case"pointerout":ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(t.pointerId)}}function Ha(n,t,e,l,a,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=al(t),t!==null&&ef(t)),n):(n.eventSystemFlags|=l,t=n.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),n)}function R0(n,t,e,l,a){switch(t){case"focusin":return Be=Ha(Be,n,t,e,l,a),!0;case"dragenter":return _e=Ha(_e,n,t,e,l,a),!0;case"mouseover":return ke=Ha(ke,n,t,e,l,a),!0;case"pointerover":var i=a.pointerId;return ka.set(i,Ha(ka.get(i)||null,n,t,e,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ra.set(i,Ha(Ra.get(i)||null,n,t,e,l,a)),!0}return!1}function uf(n){var t=ll(n.target);if(t!==null){var e=X(t);if(e!==null){if(t=e.tag,t===13){if(t=ln(e),t!==null){n.blockedOn=t,Mf(n.priority,function(){if(e.tag===13){var l=Et();l=Ii(l);var a=hl(e,l);a!==null&&At(a,e,l),es(e,l)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vi(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=as(n.nativeEvent);if(e===null){e=n.nativeEvent;var l=new e.constructor(e.type,e);su=l,e.target.dispatchEvent(l),su=null}else return t=al(e),t!==null&&ef(t),n.blockedOn=e,!1;t.shift()}return!0}function cf(n,t,e){Vi(n)&&e.delete(t)}function H0(){us=!1,Be!==null&&Vi(Be)&&(Be=null),_e!==null&&Vi(_e)&&(_e=null),ke!==null&&Vi(ke)&&(ke=null),ka.forEach(cf),Ra.forEach(cf)}function Ki(n,t){n.blockedOn===t&&(n.blockedOn=null,us||(us=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,H0)))}var Ji=null;function sf(n){Ji!==n&&(Ji=n,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Ji===n&&(Ji=null);for(var t=0;t<n.length;t+=3){var e=n[t],l=n[t+1],a=n[t+2];if(typeof l!="function"){if(is(l||e)===null)continue;break}var i=al(e);i!==null&&(n.splice(t,3),t-=3,ic(i,{pending:!0,data:a,method:e.method,action:l},l,a))}}))}function qa(n){function t(s){return Ki(s,n)}Be!==null&&Ki(Be,n),_e!==null&&Ki(_e,n),ke!==null&&Ki(ke,n),ka.forEach(t),Ra.forEach(t);for(var e=0;e<Re.length;e++){var l=Re[e];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Re.length&&(e=Re[0],e.blockedOn===null);)uf(e),e.blockedOn===null&&Re.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var a=e[l],i=e[l+1],u=a[rt]||null;if(typeof i=="function")u||sf(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[rt]||null)c=u.formAction;else if(is(a)!==null)continue}else c=u.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),sf(e)}}}function cs(n){this._internalRoot=n}Fi.prototype.render=cs.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(h(409));var e=t.current,l=Et();nf(e,l,n,t,null,null)},Fi.prototype.unmount=cs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;nf(n.current,2,null,n,null,null),Ci(),t[el]=null}};function Fi(n){this._internalRoot=n}Fi.prototype.unstable_scheduleHydration=function(n){if(n){var t=As();n={blockedOn:null,target:n,priority:t};for(var e=0;e<Re.length&&t!==0&&t<Re[e].priority;e++);Re.splice(e,0,n),e===0&&uf(n)}};var of=P.version;if(of!=="19.1.1")throw Error(h(527,of,"19.1.1"));A.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(h(188)):(n=Object.keys(n).join(","),Error(h(268,n)));return n=M(t),n=n!==null?z(n):null,n=n===null?null:n.stateNode,n};var q0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{R=$i.inject(q0),H=$i}catch{}}return Na.createRoot=function(n,t){if(!Z(n))throw Error(h(299));var e=!1,l="",a=zd,i=Dd,u=wd,c=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Ir(n,1,!1,null,null,e,l,a,i,u,c,null),n[el]=t.current,Xc(n),new cs(t)},Na.hydrateRoot=function(n,t,e){if(!Z(n))throw Error(h(299));var l=!1,a="",i=zd,u=Dd,c=wd,s=null,v=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks),e.formState!==void 0&&(v=e.formState)),t=Ir(n,1,!0,t,e??null,l,a,i,u,c,s,v),t.context=Pr(null),e=t.current,l=Et(),l=Ii(l),a=me(l),a.callback=null,be(e,a,l),e=l,t.current.lanes=e,Gl(t,e),Kt(t),n[el]=t.current,Xc(n),new Fi(t)},Na.version="19.1.1",Na}var yf;function V0(){if(yf)return ds.exports;yf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(P){console.error(P)}}return w(),ds.exports=Z0(),ds.exports}var K0=V0();const J0=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #1a1a2e;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    padding: 24px;
  }

  .showcase {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    transform-origin: top center;
  }

  .phone-frame {
    width: 375px;
    height: 812px;
    background: #fff;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1);
    flex-shrink: 0;
  }

  .screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* ===== COMMON COMPONENTS ===== */
  .nav-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .nav-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .logo-text {
    text-align: center;
  }
  .logo-text .brand {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 4px;
    color: #0f0f0f;
    text-transform: uppercase;
  }
  .logo-text .since {
    font-size: 9px;
    letter-spacing: 3px;
    color: #999;
    text-transform: uppercase;
    margin-top: -2px;
  }
  .logo-line {
    width: 60px;
    height: 1px;
    background: #0f0f0f;
    margin: 2px auto;
  }

  .bottom-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #fff;
    border-top: 1px solid rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 12px;
    z-index: 10;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
  .nav-item svg { width: 22px; height: 22px; }
  .nav-item span {
    font-size: 10px;
    color: #bbb;
    letter-spacing: 0.5px;
  }
  .nav-item.active span { color: #7C3AED; }
  .nav-item.active svg path,
  .nav-item.active svg rect,
  .nav-item.active svg circle { fill: #7C3AED; }

  /* ===== PAGE 1: HERO ===== */
  .p1 .hero-area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 460px;
    background: linear-gradient(160deg, #1a0533 0%, #2D1B69 30%, #7C3AED 70%, #C4B5FD 100%);
    overflow: hidden;
  }

  .p1 .hero-area::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 140px;
    background: linear-gradient(to bottom, transparent, #fff);
  }

  .p1 .model-silhouette {
    position: absolute;
    right: 20px;
    bottom: 0;
    width: 220px;
    height: 380px;
    opacity: 0.85;
  }

  .p1 .hero-content {
    position: absolute;
    top: 80px;
    left: 24px;
    right: 24px;
    z-index: 2;
  }

  .p1 .hero-accent {
    width: 3px;
    height: 60px;
    background: linear-gradient(to bottom, #C4B5FD, transparent);
    margin-bottom: 16px;
  }

  .p1 .hero-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  .p1 .hero-sub {
    font-size: 13px;
    color: #C4B5FD;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .p1 .cta-row {
    display: flex;
    gap: 12px;
    position: absolute;
    top: 430px;
    left: 24px;
    right: 24px;
    z-index: 5;
  }

  .btn-primary {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 12px 20px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    flex: 1;
    box-shadow: 0 8px 24px rgba(124,58,237,0.35);
  }

  .btn-outline {
    background: transparent;
    color: #7C3AED;
    border: 1.5px solid #7C3AED;
    border-radius: 24px;
    padding: 12px 20px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    flex: 1;
  }

  .p1 .carousel-section {
    position: absolute;
    top: 502px;
    left: 0;
    right: 0;
    padding: 0 24px;
  }

  .p1 .carousel-title {
    font-size: 11px;
    letter-spacing: 3px;
    color: #999;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .p1 .carousel-row {
    display: flex;
    gap: 12px;
    overflow-x: hidden;
  }

  .product-card {
    min-width: 150px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    overflow: hidden;
    flex-shrink: 0;
  }

  .product-card .img-area {
    height: 130px;
    background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .product-card .img-area svg {
    width: 60px;
    height: 60px;
    opacity: 0.6;
  }

  .product-card .card-body {
    padding: 10px 12px 12px;
  }

  .product-card .pname {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13px;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  .product-card .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-card .price {
    font-size: 14px;
    font-weight: 600;
    color: #7C3AED;
  }

  .product-card .add-btn {
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(124,58,237,0.3);
  }

  .p1 .dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #EDE9FE;
  }
  .dot.active {
    background: #7C3AED;
    width: 18px;
    border-radius: 3px;
  }

  /* ===== PAGE 2: EXPLORE ===== */
  .p2 .page-content {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 80px;
    overflow-y: auto;
    padding: 16px 20px;
  }

  .p2 .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .page-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 24px;
    font-weight: 700;
    color: #0f0f0f;
  }

  .search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #F5F3FF;
    border-radius: 12px;
    padding: 10px 14px;
    margin-bottom: 16px;
  }
  .search-bar input {
    border: none;
    background: transparent;
    font-size: 14px;
    color: #333;
    outline: none;
    flex: 1;
  }
  .search-bar input::placeholder { color: #bbb; }

  .tags-row {
    display: flex;
    gap: 8px;
    overflow-x: hidden;
    margin-bottom: 20px;
  }

  .tag {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
    white-space: nowrap;
    cursor: pointer;
  }
  .tag.active {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
  }
  .tag.inactive {
    background: #fff;
    color: #888;
    border: 1px solid #e5e5e5;
  }

  .products-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .grid-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    position: relative;
  }

  .grid-card .img-area {
    height: 150px;
    background: linear-gradient(160deg, #EDE9FE 0%, #DDD6FE 60%, #C4B5FD 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .new-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 3px 8px;
    border-radius: 4px;
    text-transform: uppercase;
  }

  .grid-card .card-footer {
    padding: 10px 12px 12px;
  }

  .grid-card .pname {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13px;
    color: #1a1a1a;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .grid-card .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid-card .price {
    font-size: 14px;
    font-weight: 600;
    color: #7C3AED;
  }

  .heart-btn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  /* ===== PAGE 3: BLUETOOTH ===== */
  .p3 .back-nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .back-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .p3 .page-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 600;
    color: #0f0f0f;
  }

  .p3 .bt-center {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .pulse-rings {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }

  .ring {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(124,58,237,0.3);
    animation: pulse-ring 2.5s ease-out infinite;
  }
  .ring:nth-child(1) { width: 200px; height: 200px; animation-delay: 0s; }
  .ring:nth-child(2) { width: 160px; height: 160px; animation-delay: 0.5s; }
  .ring:nth-child(3) { width: 120px; height: 120px; animation-delay: 1s; }

  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 0.8; }
    70% { transform: scale(1); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0; }
  }

  .bt-core {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(124,58,237,0.5);
    z-index: 2;
  }

  .searching-text {
    font-size: 14px;
    color: #888;
    letter-spacing: 0.5px;
    margin-top: 4px;
  }

  .dots-anim::after {
    content: '';
    animation: ellipsis 1.5s infinite;
  }
  @keyframes ellipsis {
    0% { content: '.'; }
    33% { content: '..'; }
    66% { content: '...'; }
    100% { content: ''; }
  }

  .p3 .devices-section {
    position: absolute;
    top: 320px;
    left: 0;
    right: 0;
    padding: 0 20px;
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 2.5px;
    color: #bbb;
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .device-card {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #fff;
    border-radius: 14px;
    padding: 14px 16px;
    margin-bottom: 10px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.04);
  }

  .device-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .device-icon.connected { background: linear-gradient(135deg, #EDE9FE, #DDD6FE); }
  .device-icon.disconnected { background: #f5f5f5; }

  .device-info { flex: 1; }
  .device-name {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 3px;
  }
  .device-status {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .status-dot.green { background: #22c55e; }
  .status-dot.gray { background: #ccc; }
  .status-connected { color: #7C3AED; font-weight: 500; }
  .status-disconnected { color: #aaa; }

  .signal-bars { display: flex; align-items: flex-end; gap: 2px; }
  .bar { width: 3px; border-radius: 1px; background: #7C3AED; }

  .p3 .add-device-btn {
    position: absolute;
    bottom: 96px;
    left: 20px;
    right: 20px;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    border: none;
    border-radius: 16px;
    padding: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(124,58,237,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  /* ===== PAGE 4: HEART RATE ===== */
  .p4 .page-content {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 80px;
    overflow-y: auto;
    padding: 16px 20px;
    scrollbar-width: none;
  }
  .p4 .page-content::-webkit-scrollbar { display: none; }

  .p4 .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .live-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    background: linear-gradient(135deg, #EDE9FE, #DDD6FE);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 11px;
    font-weight: 600;
    color: #6B21A8;
    letter-spacing: 0.5px;
  }

  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7C3AED;
    animation: live-pulse 1.2s ease-in-out infinite;
  }

  @keyframes live-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  .hr-card {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  .hr-label {
    font-size: 11px;
    color: #bbb;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .hr-value-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 16px;
  }

  .hr-number {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 72px;
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hr-unit {
    font-size: 16px;
    color: #aaa;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .wave-container {
    height: 80px;
    background: #FAFAFA;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 14px;
    position: relative;
    border: 1px solid #F0EEFF;
  }

  /* Grid lines */
  .wave-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .wave-svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    animation: wave-scroll 3s linear infinite;
  }

  @keyframes wave-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .hr-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
  }

  .stat-item {
    text-align: center;
    padding: 8px 0;
  }
  .stat-item:not(:last-child) {
    border-right: 1px solid #f0f0f0;
  }
  .stat-label {
    font-size: 10px;
    color: #ccc;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .stat-val {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .trend-card {
    background: #fff;
    border-radius: 20px;
    padding: 18px 20px;
    margin-bottom: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }

  .card-title {
    font-size: 13px;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: 0.5px;
    margin-bottom: 14px;
  }

  .bar-chart {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 70px;
    margin-bottom: 8px;
  }

  .bar-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 100%;
    justify-content: flex-end;
  }

  .bar-fill {
    width: 100%;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(to top, #C4B5FD, #7C3AED);
    opacity: 0.5;
    transition: all 0.3s;
  }
  .bar-fill.today {
    background: linear-gradient(to top, #6B21A8, #7C3AED);
    opacity: 1;
  }

  .bar-label {
    font-size: 9px;
    color: #ccc;
    letter-spacing: 0.5px;
  }

  .mood-card {
    background: #fff;
    border-radius: 20px;
    padding: 18px 20px;
    margin-bottom: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .mood-circle {
    position: relative;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }

  .mood-circle svg {
    width: 80px;
    height: 80px;
    transform: rotate(-90deg);
  }

  .mood-center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mood-pct {
    font-size: 16px;
    font-weight: 700;
    color: #6B21A8;
    line-height: 1;
  }

  .mood-info .mood-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  .mood-info .mood-sub {
    font-size: 12px;
    color: #aaa;
    line-height: 1.5;
  }

  /* Label titles for phone frames */
  .screen-label {
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 1.5px;
    white-space: nowrap;
    font-family: 'Inter', sans-serif;
  }

  .phone-wrap {
    position: relative;
    flex-shrink: 0;
  }

  /* ===== PAGE 6: COUPLE SYNC ===== */
  .p6 .couple-nav {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
  }
  .p6 .couple-nav .nav-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 600;
    color: #0f0f0f;
    white-space: nowrap;
  }
  .p6 .online-pill {
    margin-left: auto;
    display: flex; align-items: center; gap: 5px;
    background: linear-gradient(135deg, #EDE9FE, #DDD6FE);
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 11px; font-weight: 600; color: #6B21A8;
  }
  .p6 .online-pill .odot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #7C3AED;
    animation: live-pulse 1.4s ease-in-out infinite;
  }

  .p6 .page-content {
    position: absolute;
    top: 64px; left: 0; right: 0; bottom: 80px;
    overflow-y: auto;
    padding: 16px 20px;
    scrollbar-width: none;
  }
  .p6 .page-content::-webkit-scrollbar { display: none; }

  /* Distance indicator */
  .dist-banner {
    background: linear-gradient(135deg, #F5F3FF, #EDE9FE);
    border-radius: 14px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    border: 1px solid #DDD6FE;
  }
  .dist-icon { font-size: 22px; }
  .dist-info { flex: 1; }
  .dist-val {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: #6B21A8;
  }
  .dist-sub { font-size: 11px; color: #9C6FE4; margin-top: 1px; }
  .dist-ping {
    font-size: 11px; font-weight: 600;
    color: #22c55e;
    background: #F0FDF4;
    border-radius: 8px;
    padding: 4px 8px;
  }

  /* Couple orbs */
  .couple-orbs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 16px;
    position: relative;
    height: 200px;
  }

  .orb-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 2;
  }

  .orb {
    width: 80px; height: 80px;
    border-radius: 50%;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    position: relative;
    box-shadow: 0 8px 32px rgba(124,58,237,0.3);
  }
  .orb-me {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
  }
  .orb-partner {
    background: linear-gradient(135deg, #9D4EDD, #C084FC);
  }
  .orb-pulse {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 2px solid rgba(124,58,237,0.3);
    animation: dial-pulse 2s ease-out infinite;
  }
  .orb-pulse:nth-of-type(2) {
    inset: -18px;
    border-color: rgba(124,58,237,0.15);
    animation-delay: 0.4s;
  }
  .orb-bpm {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700; color: #fff; line-height: 1;
  }
  .orb-unit { font-size: 9px; color: rgba(255,255,255,0.8); letter-spacing: 1px; }
  .orb-label {
    font-size: 11px; font-weight: 600; color: #4c1d95;
    letter-spacing: 0.5px;
  }
  .orb-name { font-size: 12px; font-weight: 600; color: #1a1a1a; }

  /* Connection bridge */
  .bridge-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    z-index: 1;
  }
  .bridge-line {
    width: 100px; height: 2px;
    background: linear-gradient(90deg, #7C3AED, #C084FC, #7C3AED);
    background-size: 200% 100%;
    border-radius: 1px;
    animation: flow-anim 1.5s linear infinite;
    position: relative;
  }
  /* Travelling dot on bridge */
  .bridge-dot {
    position: absolute;
    top: 50%; left: 0;
    transform: translateY(-50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 6px #7C3AED;
    animation: travel 1.5s linear infinite;
  }
  @keyframes travel {
    0% { left: 0; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: calc(100% - 8px); opacity: 0; }
  }
  .bridge-tag {
    font-size: 10px; font-weight: 600; color: #7C3AED;
    background: #EDE9FE; border-radius: 8px;
    padding: 2px 8px; letter-spacing: 0.5px;
    white-space: nowrap;
  }

  /* Sync mode cards */
  .sync-modes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 14px;
  }
  .sync-mode-card {
    background: #fff;
    border-radius: 14px;
    padding: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1.5px solid transparent;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .sync-mode-card.active {
    border-color: #7C3AED;
    background: linear-gradient(135deg, #FDFAFF, #F5F0FF);
  }
  .sync-mode-card .sm-icon { font-size: 22px; margin-bottom: 6px; }
  .sync-mode-card .sm-name {
    font-size: 13px; font-weight: 700; color: #1a1a1a;
    margin-bottom: 3px;
  }
  .sync-mode-card.active .sm-name { color: #6B21A8; }
  .sync-mode-card .sm-desc { font-size: 11px; color: #aaa; line-height: 1.4; }
  .active-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%; background: #7C3AED;
    margin-left: 4px; vertical-align: middle;
    animation: live-pulse 1.2s ease-in-out infinite;
  }

  /* Live message strip */
  .msg-strip {
    background: #fff;
    border-radius: 14px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 14px;
  }
  .msg-strip .ms-label {
    font-size: 10px; color: #bbb;
    letter-spacing: 1.5px; text-transform: uppercase;
    margin-bottom: 10px;
  }
  .msg-bubble {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 8px;
  }
  .msg-bubble.right { flex-direction: row-reverse; }
  .msg-avatar {
    width: 28px; height: 28px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; flex-shrink: 0;
  }
  .msg-avatar.me { background: linear-gradient(135deg, #6B21A8, #7C3AED); }
  .msg-avatar.partner { background: linear-gradient(135deg, #9D4EDD, #C084FC); }
  .msg-text {
    max-width: 170px;
    padding: 8px 12px;
    border-radius: 14px;
    font-size: 12px; line-height: 1.4; color: #1a1a1a;
    background: #F5F3FF;
  }
  .msg-bubble.right .msg-text {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    border-bottom-right-radius: 4px;
  }
  .msg-bubble:not(.right) .msg-text { border-bottom-left-radius: 4px; }

  /* Shared intensity control */
  .shared-ctrl {
    background: linear-gradient(135deg, #F5F3FF, #EDE9FE);
    border-radius: 14px;
    padding: 16px;
    border: 1px solid #DDD6FE;
    margin-bottom: 14px;
  }
  .sc-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 12px;
  }
  .sc-title { font-size: 13px; font-weight: 700; color: #4c1d95; }
  .sc-toggle {
    width: 40px; height: 22px;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    border-radius: 11px;
    position: relative;
    cursor: pointer;
  }
  .sc-toggle::after {
    content: '';
    position: absolute;
    right: 3px; top: 3px;
    width: 16px; height: 16px;
    border-radius: 50%; background: #fff;
  }
  .sc-desc { font-size: 11px; color: #7C3AED; line-height: 1.5; }

  /* ===== PAGE 5: AI SYNC ===== */
  .p5 .sync-nav {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
  }
  .p5 .sync-nav .nav-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 600;
    color: #0f0f0f;
    white-space: nowrap;
  }
  .p5 .sync-nav .connected-pill {
    margin-left: auto;
    display: flex; align-items: center; gap: 5px;
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 600;
    color: #16a34a;
  }
  .p5 .sync-nav .connected-pill .cdot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: live-pulse 1.2s ease-in-out infinite;
  }

  /* Data flow banner */
  .sync-banner {
    position: absolute;
    top: 64px; left: 0; right: 0;
    background: #F5F3FF;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
  }
  .sync-banner .bt-icon-sm {
    width: 32px; height: 32px;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .sync-banner .banner-info { flex: 1; }
  .sync-banner .banner-dev { font-size: 12px; font-weight: 600; color: #1a1a1a; }
  .sync-banner .banner-sub { font-size: 11px; color: #7C3AED; }
  .sync-banner .flow-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #7C3AED, #C4B5FD, transparent);
    background-size: 200% 100%;
    animation: flow-anim 2s linear infinite;
  }
  @keyframes flow-anim {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  /* Main dial */
  .p5 .page-content {
    position: absolute;
    top: 116px; left: 0; right: 0; bottom: 80px;
    overflow-y: auto;
    padding: 16px 20px;
    scrollbar-width: none;
  }
  .p5 .page-content::-webkit-scrollbar { display: none; }

  .dial-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 8px 0 16px;
  }
  .dial-container {
    position: relative;
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dial-svg {
    position: absolute;
    top: 0; left: 0;
    width: 220px; height: 220px;
    transform: rotate(-90deg);
  }
  /* Sync pulse rings on dial */
  .dial-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(124,58,237,0.2);
    animation: dial-pulse 2s ease-out infinite;
  }
  .dial-ring:nth-child(1) { width: 220px; height: 220px; animation-delay: 0s; }
  .dial-ring:nth-child(2) { width: 185px; height: 185px; animation-delay: 0.4s; }
  .dial-ring:nth-child(3) { width: 150px; height: 150px; animation-delay: 0.8s; }
  @keyframes dial-pulse {
    0% { opacity: 0.7; transform: scale(0.92); }
    70% { opacity: 0.1; transform: scale(1); }
    100% { opacity: 0; }
  }
  .dial-core {
    width: 110px; height: 110px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6B21A8 0%, #7C3AED 60%, #A78BFA 100%);
    box-shadow: 0 8px 36px rgba(124,58,237,0.45);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    z-index: 2;
    gap: 2px;
  }
  .dial-bpm-label { font-size: 10px; color: rgba(255,255,255,0.7); letter-spacing: 1px; }
  .dial-bpm-val {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 700;
    color: #fff; line-height: 1;
  }
  .dial-freq {
    font-size: 11px; color: rgba(255,255,255,0.85);
    letter-spacing: 0.5px;
  }

  /* Freq bar (right side of dial) */
  .freq-bar-wrap {
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    height: 90px;
    justify-content: flex-end;
  }
  .freq-seg {
    width: 8px;
    border-radius: 2px;
    background: linear-gradient(to top, #6B21A8, #A78BFA);
    animation: freq-jump 0.6s ease-in-out infinite alternate;
  }
  .freq-seg:nth-child(1) { height: 10px; animation-delay: 0s; }
  .freq-seg:nth-child(2) { height: 16px; animation-delay: 0.1s; }
  .freq-seg:nth-child(3) { height: 22px; animation-delay: 0.2s; }
  .freq-seg:nth-child(4) { height: 16px; animation-delay: 0.15s; }
  .freq-seg:nth-child(5) { height: 10px; animation-delay: 0.05s; }
  @keyframes freq-jump {
    0% { transform: scaleY(0.6); opacity: 0.5; }
    100% { transform: scaleY(1.3); opacity: 1; }
  }

  /* Mode selector */
  .mode-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-bottom: 14px;
  }
  .mode-card {
    border-radius: 12px;
    padding: 10px 8px;
    text-align: center;
    cursor: pointer;
    border: 1.5px solid #e5e5e5;
    background: #fff;
  }
  .mode-card.active {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    border-color: transparent;
  }
  .mode-card .mode-icon { font-size: 18px; margin-bottom: 4px; }
  .mode-card .mode-name {
    font-size: 11px; font-weight: 600;
    color: #888; letter-spacing: 0.5px;
  }
  .mode-card.active .mode-name { color: #fff; }
  .mode-card .mode-desc {
    font-size: 9px; color: #bbb;
    margin-top: 2px; line-height: 1.3;
  }
  .mode-card.active .mode-desc { color: rgba(255,255,255,0.7); }

  /* Data flow cards */
  .data-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 14px;
  }
  .data-card {
    background: #fff;
    border-radius: 14px;
    padding: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .data-card .dc-label {
    font-size: 10px; color: #bbb;
    letter-spacing: 1.5px; text-transform: uppercase;
    margin-bottom: 6px;
  }
  .data-card .dc-val {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 6px;
  }
  .data-card .dc-sub { font-size: 11px; color: #aaa; }

  /* Mini ECG line */
  .mini-ecg {
    overflow: hidden;
    height: 28px;
    position: relative;
  }
  .mini-ecg svg {
    animation: wave-scroll 2.5s linear infinite;
  }
  @keyframes mini-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Mini equalizer */
  .mini-eq {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 28px;
  }
  .eq-bar {
    width: 5px;
    border-radius: 2px;
    background: linear-gradient(to top, #6B21A8, #A78BFA);
    animation: freq-jump 0.5s ease-in-out infinite alternate;
  }
  .eq-bar:nth-child(1) { height: 10px; animation-delay: 0.0s; }
  .eq-bar:nth-child(2) { height: 18px; animation-delay: 0.1s; }
  .eq-bar:nth-child(3) { height: 24px; animation-delay: 0.05s; }
  .trend-up { color: #22c55e; font-size: 11px; font-weight: 600; }

  /* Intensity slider */
  .intensity-card {
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 14px;
  }
  .intensity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .intensity-title {
    font-size: 12px; font-weight: 600; color: #1a1a1a; letter-spacing: 0.5px;
  }
  .intensity-val {
    font-size: 12px; font-weight: 700; color: #7C3AED;
  }
  .slider-wrap {
    position: relative;
    height: 6px;
    background: #EDE9FE;
    border-radius: 3px;
    margin-bottom: 8px;
  }
  .slider-fill {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 62%;
    background: linear-gradient(90deg, #6B21A8, #7C3AED, #A78BFA);
    border-radius: 3px;
  }
  .slider-thumb {
    position: absolute;
    left: 62%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 18px; height: 18px;
    background: #fff;
    border-radius: 50%;
    border: 2.5px solid #7C3AED;
    box-shadow: 0 2px 8px rgba(124,58,237,0.3);
  }
  .slider-labels {
    display: flex;
    justify-content: space-between;
    font-size: 10px; color: #bbb;
  }

  /* BPM zone legend */
  .zone-row {
    display: flex;
    gap: 6px;
    margin-bottom: 4px;
  }
  .zone-chip {
    flex: 1;
    border-radius: 8px;
    padding: 8px 4px;
    text-align: center;
  }
  .zone-chip .zone-range { font-size: 9px; font-weight: 600; letter-spacing: 0.5px; }
  .zone-chip .zone-name { font-size: 10px; font-weight: 500; margin-top: 2px; }
  .zone-chip .zone-freq { font-size: 9px; margin-top: 1px; }

  /* ===== PAGE 7: PROFILE ===== */
  .p7 .page-content {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 80px;
    overflow-y: auto;
    scrollbar-width: none;
  }
  .p7 .page-content::-webkit-scrollbar { display: none; }

  /* Hero cover */
  .profile-cover {
    height: 200px;
    background: linear-gradient(160deg, #1a0533 0%, #3B0764 40%, #7C3AED 80%, #C4B5FD 100%);
    position: relative;
    overflow: hidden;
  }
  .profile-cover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: linear-gradient(to bottom, transparent, #fff);
  }
  /* Abstract decorative circles on cover */
  .cover-deco {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
  }

  /* Avatar area */
  .avatar-row {
    position: relative;
    padding: 0 20px;
    margin-top: -36px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 12px;
  }
  .avatar-ring {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6B21A8, #7C3AED, #A78BFA);
    padding: 3px;
    box-shadow: 0 4px 20px rgba(124,58,237,0.4);
    position: relative;
    z-index: 2;
  }
  .avatar-inner {
    width: 100%; height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 30px;
    border: 2px solid #fff;
  }
  .vip-badge {
    position: absolute;
    bottom: -2px; right: -2px;
    width: 22px; height: 22px;
    background: linear-gradient(135deg, #F59E0B, #FBBF24);
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
  }
  .edit-btn-profile {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(124,58,237,0.3);
    margin-bottom: 4px;
  }

  /* User info */
  .user-info {
    padding: 0 20px 16px;
    border-bottom: 1px solid #f5f5f5;
  }
  .user-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700; color: #0f0f0f;
    margin-bottom: 3px;
  }
  .user-handle { font-size: 12px; color: #bbb; margin-bottom: 8px; }
  .user-tags { display: flex; gap: 6px; flex-wrap: wrap; }
  .user-tag {
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px; font-weight: 500;
  }
  .tag-vip { background: linear-gradient(135deg, #FEF3C7, #FDE68A); color: #92400E; }
  .tag-since { background: #EDE9FE; color: #6B21A8; }
  .tag-city { background: #F3F4F6; color: #6B7280; }

  /* Stats strip */
  .stats-strip {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 16px 20px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 0;
  }
  .stat-col {
    text-align: center;
  }
  .stat-col:not(:last-child) { border-right: 1px solid #f0f0f0; }
  .stat-col .s-val {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700;
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2px;
  }
  .stat-col .s-label { font-size: 10px; color: #bbb; letter-spacing: 1px; }

  /* Health summary card */
  .health-card {
    margin: 14px 20px 0;
    background: linear-gradient(135deg, #F5F3FF, #EDE9FE);
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #DDD6FE;
  }
  .health-card .hc-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 12px;
  }
  .health-card .hc-title {
    font-size: 13px; font-weight: 700; color: #4c1d95;
    display: flex; align-items: center; gap: 6px;
  }
  .health-card .hc-more { font-size: 11px; color: #9C6FE4; }
  .health-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
  .hm-item {
    background: rgba(255,255,255,0.7);
    border-radius: 10px;
    padding: 10px 8px;
    text-align: center;
  }
  .hm-icon { font-size: 16px; margin-bottom: 4px; }
  .hm-val { font-size: 14px; font-weight: 700; color: #6B21A8; margin-bottom: 1px; }
  .hm-label { font-size: 9px; color: #9C6FE4; letter-spacing: 0.5px; }

  /* Device collection */
  .devices-mini {
    margin: 14px 20px 0;
  }
  .section-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 10px;
  }
  .sec-title { font-size: 13px; font-weight: 700; color: #0f0f0f; }
  .sec-more { font-size: 11px; color: #7C3AED; font-weight: 500; }
  .device-mini-row { display: flex; gap: 10px; }
  .device-mini-card {
    flex: 1;
    background: #fff;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    display: flex; flex-direction: column; align-items: center; gap: 6px;
  }
  .dm-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, #EDE9FE, #DDD6FE);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .dm-name { font-size: 11px; font-weight: 600; color: #1a1a1a; text-align: center; }
  .dm-status {
    font-size: 9px; font-weight: 600;
    padding: 2px 7px; border-radius: 8px;
  }
  .dm-on { background: #DCFCE7; color: #166534; }
  .dm-off { background: #F3F4F6; color: #9CA3AF; }

  /* Menu list */
  .menu-list {
    margin: 14px 20px 0;
  }
  .menu-item {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid #f5f5f5;
    cursor: pointer;
  }
  .menu-item:last-child { border-bottom: none; }
  .menu-icon-wrap {
    width: 38px; height: 38px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 17px;
    flex-shrink: 0;
  }
  .menu-text { flex: 1; }
  .menu-title { font-size: 14px; font-weight: 500; color: #1a1a1a; }
  .menu-sub { font-size: 11px; color: #bbb; margin-top: 1px; }
  .menu-arrow {
    color: #ddd; font-size: 16px;
  }
  .menu-badge {
    background: linear-gradient(135deg, #6B21A8, #7C3AED);
    color: #fff;
    font-size: 9px; font-weight: 700;
    padding: 2px 6px;
    border-radius: 8px;
    margin-right: 6px;
  }

  /* Logout */
  .logout-btn {
    margin: 14px 20px 20px;
    width: calc(100% - 40px);
    padding: 14px;
    border: 1.5px solid #EDE9FE;
    border-radius: 14px;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    color: #7C3AED;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }

  /* Responsive scaling — 7 phones */
  body { align-items: flex-start; padding-top: 12px; }
  .showcase { gap: 12px; flex-wrap: nowrap; }

  @media (min-width: 2900px) {
    .showcase { transform: scale(1); transform-origin: top left; }
  }
  @media (max-width: 2899px) {
    .showcase { transform: scale(0.78); transform-origin: top left; }
  }
  @media (max-width: 2400px) {
    .showcase { transform: scale(0.65); transform-origin: top left; }
  }
  @media (max-width: 2000px) {
    .showcase { transform: scale(0.54); transform-origin: top left; }
  }
  @media (max-width: 1660px) {
    .showcase { transform: scale(0.44); transform-origin: top left; }
  }
  @media (max-width: 1350px) {
    .showcase { transform: scale(0.36); transform-origin: top left; }
  }
  @media (max-width: 1100px) {
    .showcase { transform: scale(0.30); transform-origin: top left; }
  }

`,Sf={home:`<!-- =========== PHONE 1: HERO =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p1">

        <!-- Hero area -->
        <div class="hero-area">
          <!-- SVG model silhouette -->
          <svg class="model-silhouette" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgba(255,255,255,0.9)"/>
                <stop offset="100%" style="stop-color:rgba(196,181,253,0.5)"/>
              </linearGradient>
            </defs>
            <!-- Elegant female silhouette, side profile -->
            <path fill="url(#fig-grad)" d="
              M110,20 C110,20 100,18 96,24 C92,30 94,38 96,44 C90,46 84,50 82,58 C80,66 84,74 88,78
              C82,80 76,86 76,96 C76,108 84,114 88,116 L84,140 C80,150 76,162 78,172
              C80,182 86,188 90,190 L86,230 C82,244 78,260 80,272 C82,284 88,290 90,292
              L88,330 C87,344 88,356 90,366 C92,370 96,372 100,373
              L100,373 L120,373 C124,372 128,370 130,366 C132,356 133,344 132,330
              L130,292 C132,290 138,284 140,272 C142,260 138,244 134,230
              L130,190 C134,188 140,182 142,172 C144,162 140,150 136,140
              L132,116 C136,114 144,108 144,96 C144,86 138,80 132,78
              C136,74 140,66 138,58 C136,50 130,46 124,44 C126,38 128,30 124,24 C120,18 110,20 110,20 Z
            "/>
          </svg>
        </div>

        <!-- Top Nav -->
        <div class="nav-top" style="background:transparent; border:none;">
          <div class="nav-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="5" width="18" height="1.5" rx="1" fill="white"/>
              <rect x="2" y="10.25" width="18" height="1.5" rx="1" fill="white"/>
              <rect x="2" y="15.5" width="12" height="1.5" rx="1" fill="white"/>
            </svg>
          </div>
          <div class="logo-text">
            <div class="brand" style="color:#fff;">SHAKI</div>
            <div class="logo-line" style="background:#fff; opacity:0.6;"></div>
            <div class="since" style="color:rgba(255,255,255,0.7);">SINCE 1995</div>
          </div>
          <div class="nav-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M7 2L5 7H2l1.5 9h15L20 7h-3L15 2H7Z" stroke="white" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
              <circle cx="8.5" cy="14" r="1" fill="white"/>
              <circle cx="13.5" cy="14" r="1" fill="white"/>
            </svg>
          </div>
        </div>

        <!-- Hero content -->
        <div class="hero-content">
          <div class="hero-accent"></div>
          <div class="hero-title">FEEL THE<br>PLEASURE</div>
          <div class="hero-sub">Discover your desire</div>
        </div>

        <!-- CTA row -->
        <div class="cta-row">
          <button class="btn-primary">探索系列</button>
          <button class="btn-outline" style="border-color:rgba(255,255,255,0.7); color:#fff;">了解更多</button>
        </div>

        <!-- Carousel -->
        <div class="carousel-section">
          <div class="carousel-title">热门产品</div>
          <div class="carousel-row">
            <div class="product-card">
              <div class="img-area">
                <svg viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="18" ry="10" stroke="rgba(124,58,237,0.4)" stroke-width="2"/><ellipse cx="30" cy="30" rx="10" ry="18" stroke="rgba(124,58,237,0.4)" stroke-width="2"/></svg>
              </div>
              <div class="card-body">
                <div class="pname">Velvet Pro</div>
                <div class="price-row">
                  <span class="price">¥ 899</span>
                  <div class="add-btn">+</div>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="img-area" style="background:linear-gradient(135deg,#F3E8FF,#E9D5FF,#D8B4FE);">
                <svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="24" r="14" stroke="rgba(109,40,217,0.4)" stroke-width="2"/><path d="M16 44 Q30 36 44 44" stroke="rgba(109,40,217,0.4)" stroke-width="2" fill="none"/></svg>
              </div>
              <div class="card-body">
                <div class="pname">Luna Silk</div>
                <div class="price-row">
                  <span class="price">¥ 1,299</span>
                  <div class="add-btn">+</div>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="img-area" style="background:linear-gradient(135deg,#E0D7FF,#C4B5FD,#A78BFA);">
                <svg viewBox="0 0 60 60" fill="none"><rect x="20" y="15" width="20" height="30" rx="10" stroke="rgba(139,92,246,0.5)" stroke-width="2"/><line x1="30" y1="10" x2="30" y2="50" stroke="rgba(139,92,246,0.3)" stroke-width="1.5"/></svg>
              </div>
              <div class="card-body">
                <div class="pname">Nova BT</div>
                <div class="price-row">
                  <span class="price">¥ 1,599</span>
                  <div class="add-btn">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" fill="#7C3AED"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#bbb" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#bbb" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#bbb" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">01 · HERO</div>
  </div>`,explore:`<!-- =========== PHONE 2: EXPLORE =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p2">

        <div class="nav-top">
          <div style="width:40px;"></div>
          <div class="logo-text">
            <div class="brand">SHAKI</div>
            <div class="logo-line"></div>
            <div class="since">SINCE 1995</div>
          </div>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M4 6h16M4 12h10M4 18h7" stroke="#333" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class="page-content">
          <div class="page-header">
            <div class="page-title">探索</div>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#333" stroke-width="1.8"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="#333" stroke-width="1.8"/>
            </svg>
          </div>

          <div class="search-bar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#7C3AED" stroke-width="1.8"/>
              <path d="M20 20l-3-3" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <input placeholder="搜索产品..." />
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <line x1="4" y1="6" x2="20" y2="6" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="6" y1="12" x2="18" y2="12" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="10" y1="18" x2="14" y2="18" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="tags-row">
            <div class="tag active">全部</div>
            <div class="tag inactive">智能设备</div>
            <div class="tag inactive">经典系列</div>
            <div class="tag inactive">情侣互动</div>
            <div class="tag inactive">配件</div>
          </div>

          <div class="products-grid">
            <!-- Card 1 with NEW badge -->
            <div class="grid-card">
              <div class="img-area">
                <div class="new-badge">NEW</div>
                <svg viewBox="0 0 80 100" width="60" height="75" fill="none">
                  <ellipse cx="40" cy="50" rx="24" ry="14" stroke="rgba(124,58,237,0.35)" stroke-width="2"/>
                  <ellipse cx="40" cy="50" rx="14" ry="24" stroke="rgba(124,58,237,0.35)" stroke-width="2"/>
                  <circle cx="40" cy="50" r="5" fill="rgba(124,58,237,0.2)"/>
                </svg>
              </div>
              <div class="card-footer">
                <div class="pname">Velvet Pro S2</div>
                <div class="price-row">
                  <span class="price">¥ 1,199</span>
                  <div class="heart-btn">
                    <svg viewBox="0 0 20 18" width="18" height="18" fill="none">
                      <path d="M10 16s-8-5.5-8-10A5 5 0 0110 4.1 5 5 0 0118 6c0 4.5-8 10-8 10z" stroke="#ddd" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="grid-card">
              <div class="img-area" style="background:linear-gradient(160deg,#F3E8FF,#E9D5FF,#D8B4FE);">
                <svg viewBox="0 0 80 100" width="60" height="75" fill="none">
                  <circle cx="40" cy="40" r="20" stroke="rgba(109,40,217,0.35)" stroke-width="2"/>
                  <path d="M20 65 Q40 55 60 65" stroke="rgba(109,40,217,0.35)" stroke-width="2" fill="none"/>
                  <circle cx="40" cy="40" r="6" fill="rgba(109,40,217,0.15)"/>
                </svg>
              </div>
              <div class="card-footer">
                <div class="pname">Luna Noir</div>
                <div class="price-row">
                  <span class="price">¥ 899</span>
                  <div class="heart-btn">
                    <svg viewBox="0 0 20 18" width="18" height="18" fill="none">
                      <path d="M10 16s-8-5.5-8-10A5 5 0 0110 4.1 5 5 0 0118 6c0 4.5-8 10-8 10z" stroke="#ddd" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="grid-card">
              <div class="img-area" style="background:linear-gradient(160deg,#EDE9FE,#C4B5FD,#A78BFA);">
                <svg viewBox="0 0 80 100" width="60" height="75" fill="none">
                  <rect x="28" y="20" width="24" height="44" rx="12" stroke="rgba(139,92,246,0.4)" stroke-width="2"/>
                  <line x1="40" y1="14" x2="40" y2="70" stroke="rgba(139,92,246,0.25)" stroke-width="1.5"/>
                  <circle cx="40" cy="50" r="4" fill="rgba(139,92,246,0.2)"/>
                </svg>
              </div>
              <div class="card-footer">
                <div class="pname">Nova Slim</div>
                <div class="price-row">
                  <span class="price">¥ 699</span>
                  <div class="heart-btn">
                    <svg viewBox="0 0 20 18" width="18" height="18" fill="none">
                      <path d="M10 16s-8-5.5-8-10A5 5 0 0110 4.1 5 5 0 0118 6c0 4.5-8 10-8 10z" fill="#EDE9FE" stroke="#C4B5FD" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="grid-card">
              <div class="img-area" style="background:linear-gradient(160deg,#F5F3FF,#DDD6FE,#C4B5FD);">
                <svg viewBox="0 0 80 100" width="60" height="75" fill="none">
                  <path d="M40 20 Q58 30 58 45 Q58 60 40 75 Q22 60 22 45 Q22 30 40 20Z" stroke="rgba(124,58,237,0.35)" stroke-width="2" fill="rgba(124,58,237,0.06)"/>
                  <circle cx="40" cy="46" r="6" fill="rgba(124,58,237,0.15)"/>
                </svg>
              </div>
              <div class="card-footer">
                <div class="pname">Duo Connect</div>
                <div class="price-row">
                  <span class="price">¥ 1,599</span>
                  <div class="heart-btn">
                    <svg viewBox="0 0 20 18" width="18" height="18" fill="none">
                      <path d="M10 16s-8-5.5-8-10A5 5 0 0110 4.1 5 5 0 0118 6c0 4.5-8 10-8 10z" stroke="#ddd" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#7C3AED" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#bbb" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#bbb" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#bbb" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">02 · EXPLORE</div>
  </div>`,device:`<!-- =========== PHONE 3: BLUETOOTH =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p3">

        <div class="back-nav">
          <div class="back-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="page-title">设备连接</span>
        </div>

        <!-- Pulse animation center -->
        <div class="bt-center">
          <div class="pulse-rings">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="bt-core">
              <!-- Bluetooth SVG icon -->
              <svg viewBox="0 0 28 28" width="34" height="34" fill="none">
                <path d="M8 8l12 12-6 6V2l6 6L8 20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="searching-text">正在搜索设备<span class="dots-anim"></span></div>
        </div>

        <!-- Devices -->
        <div class="devices-section">
          <div class="section-label">附近设备</div>

          <div class="device-card">
            <div class="device-icon connected">
              <svg viewBox="0 0 28 28" width="24" height="24" fill="none">
                <path d="M8 8l12 12-6 6V2l6 6L8 20" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="device-info">
              <div class="device-name">SHAKI Pro S1</div>
              <div class="device-status">
                <div class="status-dot green"></div>
                <span class="status-connected">已连接</span>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
              <div class="signal-bars">
                <div class="bar" style="height:6px;"></div>
                <div class="bar" style="height:10px;"></div>
                <div class="bar" style="height:14px;"></div>
                <div class="bar" style="height:18px;"></div>
              </div>
              <div style="background:linear-gradient(135deg,#EDE9FE,#DDD6FE);border-radius:10px;padding:2px 8px;font-size:9px;font-weight:700;color:#6B21A8;letter-spacing:0.5px;white-space:nowrap;">心率同步 ON</div>
            </div>
          </div>

          <div class="device-card">
            <div class="device-icon disconnected">
              <svg viewBox="0 0 28 28" width="24" height="24" fill="none">
                <path d="M8 8l12 12-6 6V2l6 6L8 20" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="device-info">
              <div class="device-name">SHAKI Mini</div>
              <div class="device-status">
                <div class="status-dot gray"></div>
                <span class="status-disconnected">点击连接 ›</span>
              </div>
            </div>
            <div class="signal-bars">
              <div class="bar" style="height:6px; background:#ddd;"></div>
              <div class="bar" style="height:10px; background:#ddd;"></div>
              <div class="bar" style="height:14px; background:#eee;"></div>
              <div class="bar" style="height:18px; background:#f5f5f5;"></div>
            </div>
          </div>
        </div>

        <button class="add-device-btn">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
            <path d="M10 4v12M4 10h12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          添加新设备
        </button>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#7C3AED" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#7C3AED" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#bbb" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">03 · BLUETOOTH</div>
  </div>`,records:`<!-- =========== PHONE 4: HEART RATE =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p4">

        <div class="nav-top">
          <div style="width:40px;"></div>
          <div class="logo-text">
            <div class="brand">SHAKI</div>
            <div class="logo-line"></div>
            <div class="since">SINCE 1995</div>
          </div>
          <div style="width:40px;"></div>
        </div>

        <div class="page-content">
          <div class="page-header">
            <div class="page-title">心率监测</div>
            <div class="live-badge">
              <div class="live-dot"></div>
              直播中
            </div>
          </div>

          <!-- Main HR card -->
          <div class="hr-card">
            <div class="hr-label">当前心率</div>
            <div class="hr-value-row">
              <div class="hr-number">86</div>
              <div class="hr-unit">BPM</div>
            </div>

            <!-- AI Sync status line -->
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;padding:7px 12px;background:#F5F3FF;border-radius:10px;">
              <span style="font-size:14px;">〜</span>
              <span style="font-size:12px;font-weight:600;background:linear-gradient(135deg,#6B21A8,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">AI 律动同步中 · SHAKI Pro S1</span>
              <div style="width:6px;height:6px;border-radius:50%;background:#22c55e;animation:live-pulse 1.2s ease-in-out infinite;margin-left:auto;"></div>
            </div>

            <!-- Wave -->
            <div class="wave-container">
              <svg class="wave-svg" width="800" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Repeating ECG pattern (two copies for seamless loop) -->
                <polyline
                  stroke="#7C3AED"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="
                    0,42 20,42 30,42 32,38 34,42 40,42
                    45,42 47,20 49,68 51,15 53,42
                    58,42 70,42 72,38 74,42 80,42
                    100,42 105,42 107,20 109,68 111,15 113,42
                    118,42 130,42 132,38 134,42 140,42
                    160,42 165,42 167,20 169,68 171,15 173,42
                    178,42 190,42 192,38 194,42 200,42
                    220,42 225,42 227,20 229,68 231,15 233,42
                    238,42 250,42 252,38 254,42 260,42
                    280,42 285,42 287,20 289,68 291,15 293,42
                    298,42 310,42 312,38 314,42 320,42
                    340,42 345,42 347,20 349,68 351,15 353,42
                    358,42 370,42 372,38 374,42 380,42
                    400,42 405,42 407,20 409,68 411,15 413,42
                    418,42 430,42 432,38 434,42 440,42
                    460,42 465,42 467,20 469,68 471,15 473,42
                    478,42 490,42 492,38 494,42 500,42
                    520,42 525,42 527,20 529,68 531,15 533,42
                    538,42 550,42 552,38 554,42 560,42
                    580,42 585,42 587,20 589,68 591,15 593,42
                    598,42 610,42 612,38 614,42 620,42
                    640,42 645,42 647,20 649,68 651,15 653,42
                    658,42 670,42 672,38 674,42 680,42
                    700,42 705,42 707,20 709,68 711,15 713,42
                    718,42 730,42 732,38 734,42 740,42
                    760,42 765,42 767,20 769,68 771,15 773,42
                    778,42 790,42 792,38 794,42 800,42
                  "
                />
              </svg>
            </div>

            <!-- Stats -->
            <div class="hr-stats">
              <div class="stat-item">
                <div class="stat-label">MIN</div>
                <div class="stat-val">62</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">AVG</div>
                <div class="stat-val">78</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">MAX</div>
                <div class="stat-val">112</div>
              </div>
            </div>
          </div>

          <!-- Trend card -->
          <div class="trend-card">
            <div class="card-title">7日趋势</div>
            <div class="bar-chart">
              <div class="bar-col">
                <div class="bar-fill" style="height:45px;"></div>
                <div class="bar-label">Mon</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill" style="height:55px;"></div>
                <div class="bar-label">Tue</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill" style="height:38px;"></div>
                <div class="bar-label">Wed</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill" style="height:62px;"></div>
                <div class="bar-label">Thu</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill" style="height:50px;"></div>
                <div class="bar-label">Fri</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill" style="height:42px;"></div>
                <div class="bar-label">Sat</div>
              </div>
              <div class="bar-col">
                <div class="bar-fill today" style="height:58px;"></div>
                <div class="bar-label" style="color:#7C3AED; font-weight:600;">Sun</div>
              </div>
            </div>
          </div>

          <!-- Mood card -->
          <div class="mood-card">
            <div class="mood-circle">
              <svg viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="mood-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#6B21A8"/>
                    <stop offset="100%" style="stop-color:#A78BFA"/>
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="32" stroke="#F0EEFF" stroke-width="7" fill="none"/>
                <circle cx="40" cy="40" r="32"
                  stroke="url(#mood-grad)" stroke-width="7" fill="none"
                  stroke-dasharray="200.96"
                  stroke-dashoffset="44.2"
                  stroke-linecap="round"/>
              </svg>
              <div class="mood-center">
                <div class="mood-pct">78%</div>
              </div>
            </div>
            <div class="mood-info">
              <div class="mood-title">愉悦指数 💜</div>
              <div class="mood-sub">今日状态良好<br>较昨日提升 +12%</div>
            </div>
          </div>

        </div>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#bbb" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#bbb" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" fill="#7C3AED"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#bbb" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">04 · HEART RATE</div>
  </div>`,ai:`<!-- =========== PHONE 5: AI SYNC =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p5">

        <!-- Top nav -->
        <div class="sync-nav">
          <div class="back-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="nav-title">AI 律动 · 同步中</span>
          <div class="connected-pill">
            <div class="cdot"></div>
            已连接
          </div>
        </div>

        <!-- Data flow banner -->
        <div class="sync-banner">
          <div class="bt-icon-sm">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
              <path d="M5 5l10 10-5 5V0l5 5L5 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="banner-info">
            <div class="banner-dev">SHAKI Pro S1</div>
            <div class="banner-sub">心率数据实时传输中…</div>
          </div>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M5 12h14M15 7l5 5-5 5" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="flow-line"></div>
        </div>

        <!-- Page content -->
        <div class="page-content">

          <!-- Main Dial -->
          <div class="dial-wrap">
            <div class="dial-container">
              <div class="dial-ring"></div>
              <div class="dial-ring"></div>
              <div class="dial-ring"></div>

              <!-- SVG arc progress (86 BPM / 180 BPM max → ~47.8%) -->
              <svg class="dial-svg" viewBox="0 0 220 220">
                <defs>
                  <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#6B21A8"/>
                    <stop offset="100%" style="stop-color:#A78BFA"/>
                  </linearGradient>
                </defs>
                <!-- Track -->
                <circle cx="110" cy="110" r="100" stroke="#EDE9FE" stroke-width="8" fill="none"/>
                <!-- Progress arc: circumference = 2π×100 ≈ 628.3; 47.8% = 300.3 filled, offset = 628.3-300.3 = 328 -->
                <circle cx="110" cy="110" r="100"
                  stroke="url(#arc-grad)" stroke-width="8" fill="none"
                  stroke-dasharray="628.3"
                  stroke-dashoffset="328"
                  stroke-linecap="round"/>
              </svg>

              <div class="dial-core">
                <div class="dial-bpm-label">❤️ BPM</div>
                <div class="dial-bpm-val">86</div>
                <div class="dial-freq">〜 中等律动</div>
              </div>

              <!-- Freq bar right -->
              <div class="freq-bar-wrap">
                <div class="freq-seg"></div>
                <div class="freq-seg"></div>
                <div class="freq-seg"></div>
                <div class="freq-seg"></div>
                <div class="freq-seg"></div>
              </div>
            </div>
          </div>

          <!-- BPM Zone legend -->
          <div class="zone-row">
            <div class="zone-chip" style="background:#F0FDF4;">
              <div class="zone-range" style="color:#16a34a;">60–75</div>
              <div class="zone-name" style="color:#166534;">轻柔</div>
              <div class="zone-freq" style="color:#4ade80;">6 Hz</div>
            </div>
            <div class="zone-chip" style="background:#EDE9FE; border:1.5px solid #C4B5FD;">
              <div class="zone-range" style="color:#6B21A8;">76–100</div>
              <div class="zone-name" style="color:#4c1d95;">中等 ●</div>
              <div class="zone-freq" style="color:#7C3AED;">12 Hz</div>
            </div>
            <div class="zone-chip" style="background:#FFF1F2;">
              <div class="zone-range" style="color:#be123c;">101+</div>
              <div class="zone-name" style="color:#9f1239;">激烈</div>
              <div class="zone-freq" style="color:#f43f5e;">20 Hz</div>
            </div>
          </div>

          <!-- Mode selector -->
          <div class="mode-row">
            <div class="mode-card active">
              <div class="mode-icon">🔄</div>
              <div class="mode-name">跟随</div>
              <div class="mode-desc">实时跟随<br>心率变化</div>
            </div>
            <div class="mode-card">
              <div class="mode-icon">📈</div>
              <div class="mode-name">渐强</div>
              <div class="mode-desc">心率升高<br>持续增强</div>
            </div>
            <div class="mode-card">
              <div class="mode-icon">🎵</div>
              <div class="mode-name">节拍</div>
              <div class="mode-desc">按心跳<br>精准同步</div>
            </div>
          </div>

          <!-- Data flow cards -->
          <div class="data-row">
            <div class="data-card">
              <div class="dc-label">心率信号</div>
              <div class="dc-val">86 <span style="font-size:13px;color:#aaa;-webkit-text-fill-color:#aaa;">BPM</span></div>
              <div class="mini-ecg">
                <svg width="280" height="28" viewBox="0 0 280 28" fill="none" style="animation: wave-scroll 2.5s linear infinite;">
                  <polyline stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" fill="none"
                    points="0,14 12,14 16,11 18,14 24,14 26,4 28,24 30,2 32,14 40,14 42,11 44,14 50,14 52,4 54,24 56,2 58,14 66,14 68,11 70,14 76,14 78,4 80,24 82,2 84,14 92,14 94,11 96,14 102,14 104,4 106,24 108,2 110,14 118,14 120,11 122,14 128,14 130,4 132,24 134,2 136,14 140,14"/>
                  <polyline stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" fill="none"
                    points="140,14 152,14 156,11 158,14 164,14 166,4 168,24 170,2 172,14 180,14 182,11 184,14 190,14 192,4 194,24 196,2 198,14 206,14 208,11 210,14 216,14 218,4 220,24 222,2 224,14 232,14 234,11 236,14 242,14 244,4 246,24 248,2 250,14 258,14 260,11 262,14 268,14 270,4 272,24 274,2 276,14 280,14"/>
                </svg>
              </div>
              <div class="dc-sub" style="margin-top:4px;">趋势 <span class="trend-up">↑ +8%</span></div>
            </div>
            <div class="data-card">
              <div class="dc-label">设备频率</div>
              <div class="dc-val">12 <span style="font-size:13px;color:#aaa;-webkit-text-fill-color:#aaa;">Hz</span></div>
              <div class="mini-eq">
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
              </div>
              <div class="dc-sub" style="margin-top:4px;">中等律动</div>
            </div>
          </div>

          <!-- Intensity slider -->
          <div class="intensity-card">
            <div class="intensity-header">
              <div class="intensity-title">强度微调</div>
              <div class="intensity-val">62%</div>
            </div>
            <div class="slider-wrap">
              <div class="slider-fill"></div>
              <div class="slider-thumb"></div>
            </div>
            <div class="slider-labels">
              <span>轻柔</span>
              <span>强烈</span>
            </div>
          </div>

        </div>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3C9 3 7 5 6 7" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M12 3C15 3 17 5 18 7" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M4 12C4 8 6 5 9 4" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M20 12C20 8 18 5 15 4" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
              <circle cx="12" cy="13" r="3" fill="#7C3AED"/>
              <path d="M12 16v4" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span>AI律动</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#bbb" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">05 · AI SYNC</div>
  </div>`,couple:`<!-- =========== PHONE 6: COUPLE SYNC =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p6">

        <div class="couple-nav">
          <div class="back-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="nav-title">情侣同步</span>
          <div class="online-pill">
            <div class="odot"></div>
            连接中
          </div>
        </div>

        <div class="page-content">

          <div class="dist-banner">
            <div class="dist-icon">🌏</div>
            <div class="dist-info">
              <div class="dist-val">1,247 km</div>
              <div class="dist-sub">上海 → 北京 · 实时同步</div>
            </div>
            <div class="dist-ping">延迟 42ms</div>
          </div>

          <div class="couple-orbs">
            <div class="orb-wrap">
              <div style="position:relative;">
                <div class="orb orb-me">
                  <div class="orb-pulse"></div>
                  <div class="orb-pulse" style="inset:-18px; border-color:rgba(107,33,168,0.12); animation-delay:0.4s;"></div>
                  <div class="orb-bpm">86</div>
                  <div class="orb-unit">BPM</div>
                </div>
              </div>
              <div class="orb-name">我</div>
              <div class="orb-label" style="font-size:10px; color:#7C3AED;">💜 12 Hz</div>
            </div>

            <div class="bridge-wrap">
              <div class="bridge-line">
                <div class="bridge-dot"></div>
              </div>
              <div class="bridge-tag">心率同步 ♡</div>
            </div>

            <div class="orb-wrap">
              <div style="position:relative;">
                <div class="orb orb-partner">
                  <div class="orb-pulse" style="border-color:rgba(192,132,252,0.3);"></div>
                  <div class="orb-pulse" style="inset:-18px; border-color:rgba(192,132,252,0.15); animation-delay:0.4s;"></div>
                  <div class="orb-bpm">94</div>
                  <div class="orb-unit">BPM</div>
                </div>
              </div>
              <div class="orb-name">Ta</div>
              <div class="orb-label" style="font-size:10px; color:#9D4EDD;">💜 15 Hz</div>
            </div>
          </div>

          <div style="font-size:11px; color:#bbb; letter-spacing:2px; text-transform:uppercase; margin-bottom:10px;">同步模式</div>
          <div class="sync-modes">
            <div class="sync-mode-card active">
              <div class="sm-icon">❤️</div>
              <div class="sm-name">心跳镜像<span class="active-dot"></span></div>
              <div class="sm-desc">对方心率驱动<br>我的设备律动</div>
            </div>
            <div class="sync-mode-card">
              <div class="sm-icon">🔄</div>
              <div class="sm-name">双向互控</div>
              <div class="sm-desc">互相控制<br>对方设备强度</div>
            </div>
            <div class="sync-mode-card">
              <div class="sm-icon">🎵</div>
              <div class="sm-name">共鸣节拍</div>
              <div class="sm-desc">两颗心跳<br>合并为一个节拍</div>
            </div>
            <div class="sync-mode-card">
              <div class="sm-icon">🌊</div>
              <div class="sm-name">情绪涌浪</div>
              <div class="sm-desc">AI 感知情绪<br>动态编排律动</div>
            </div>
          </div>

          <div class="msg-strip">
            <div class="ms-label">心跳对话</div>
            <div class="msg-bubble">
              <div class="msg-avatar partner">💜</div>
              <div class="msg-text">感受到你的心跳了 🌙</div>
            </div>
            <div class="msg-bubble right">
              <div class="msg-avatar me">♡</div>
              <div class="msg-text">我也是，一直都在～</div>
            </div>
            <div class="msg-bubble">
              <div class="msg-avatar partner">💜</div>
              <div class="msg-text" style="display:flex; align-items:center; gap:6px;">
                <span>心率飙了</span><span style="font-size:16px;">💓</span>
              </div>
            </div>
          </div>

          <div class="shared-ctrl">
            <div class="sc-header">
              <div class="sc-title">互相控制模式</div>
              <div class="sc-toggle"></div>
            </div>
            <div class="sc-desc">
              开启后，Ta 可远程调整你的设备强度<br>
              你也可以实时感受 Ta 的每一次心跳律动
            </div>
          </div>

        </div>

        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#bbb" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#bbb" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#7C3AED"/>
            </svg>
            <span>情侣</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">06 · COUPLE SYNC</div>
  </div>`,profile:`<!-- =========== PHONE 7: PROFILE =========== -->
  <div class="phone-wrap">
    <div class="phone-frame">
      <div class="screen p7">

        <div class="page-content">

          <!-- Cover -->
          <div class="profile-cover">
            <!-- Decorative circles -->
            <div class="cover-deco" style="width:180px;height:180px;top:-60px;right:-40px;"></div>
            <div class="cover-deco" style="width:100px;height:100px;bottom:20px;left:-20px;"></div>
            <div class="cover-deco" style="width:60px;height:60px;top:40px;left:60px; background:rgba(255,255,255,0.08);"></div>
            <!-- Settings icon top right -->
            <div style="position:absolute;top:16px;right:16px;z-index:3;">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <svg viewBox="0 0 22 22" width="18" height="18" fill="none">
                  <circle cx="11" cy="11" r="3" stroke="white" stroke-width="1.6"/>
                  <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.93 4.93l1.41 1.41M15.66 15.66l1.41 1.41M4.93 17.07l1.41-1.41M15.66 6.34l1.41-1.41" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <!-- Notification icon -->
            <div style="position:absolute;top:16px;right:60px;z-index:3;">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <svg viewBox="0 0 22 22" width="18" height="18" fill="none">
                  <path d="M18 8A7 7 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" stroke-width="1.6"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" stroke-width="1.6"/>
                  <circle cx="16" cy="5" r="3" fill="#7C3AED" stroke="white" stroke-width="1.5"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Avatar row -->
          <div class="avatar-row">
            <div class="avatar-ring">
              <div class="avatar-inner">👤</div>
              <div class="vip-badge">★</div>
            </div>
            <button class="edit-btn-profile">编辑资料</button>
          </div>

          <!-- User info -->
          <div class="user-info">
            <div class="user-name">Aria S.</div>
            <div class="user-handle">@aria_shaki · 上海</div>
            <div class="user-tags">
              <span class="user-tag tag-vip">✦ VIP 会员</span>
              <span class="user-tag tag-since">SINCE 2022</span>
              <span class="user-tag tag-city">🌙 夜猫子</span>
            </div>
          </div>

          <!-- Stats strip -->
          <div class="stats-strip">
            <div class="stat-col">
              <div class="s-val">128</div>
              <div class="s-label">使用天数</div>
            </div>
            <div class="stat-col">
              <div class="s-val">3</div>
              <div class="s-label">绑定设备</div>
            </div>
            <div class="stat-col">
              <div class="s-val">86</div>
              <div class="s-label">平均心率</div>
            </div>
          </div>

          <!-- Health summary -->
          <div class="health-card">
            <div class="hc-header">
              <div class="hc-title">
                <span>❤️</span> 健康摘要
              </div>
              <div class="hc-more">查看全部 ›</div>
            </div>
            <div class="health-metrics">
              <div class="hm-item">
                <div class="hm-icon">💓</div>
                <div class="hm-val">86</div>
                <div class="hm-label">当前 BPM</div>
              </div>
              <div class="hm-item">
                <div class="hm-icon">〜</div>
                <div class="hm-val">12Hz</div>
                <div class="hm-label">律动频率</div>
              </div>
              <div class="hm-item">
                <div class="hm-icon">💜</div>
                <div class="hm-val">78%</div>
                <div class="hm-label">愉悦指数</div>
              </div>
            </div>
          </div>

          <!-- My devices -->
          <div class="devices-mini">
            <div class="section-header">
              <div class="sec-title">我的设备</div>
              <div class="sec-more">管理 ›</div>
            </div>
            <div class="device-mini-row">
              <div class="device-mini-card">
                <div class="dm-icon">📡</div>
                <div class="dm-name">Pro S1</div>
                <div class="dm-status dm-on">在线</div>
              </div>
              <div class="device-mini-card">
                <div class="dm-icon">🔵</div>
                <div class="dm-name">Mini</div>
                <div class="dm-status dm-off">离线</div>
              </div>
              <div class="device-mini-card" style="border:1.5px dashed #EDE9FE; box-shadow:none;">
                <div class="dm-icon" style="background:#F9F9F9; font-size:22px;">＋</div>
                <div class="dm-name" style="color:#bbb;">添加</div>
                <div style="height:20px;"></div>
              </div>
            </div>
          </div>

          <!-- Menu -->
          <div class="menu-list">
            <div class="section-header" style="margin-top:6px;">
              <div class="sec-title">账户设置</div>
            </div>

            <div class="menu-item">
              <div class="menu-icon-wrap" style="background:#EDE9FE;">🛍️</div>
              <div class="menu-text">
                <div class="menu-title">我的订单</div>
                <div class="menu-sub">查看购买记录与物流</div>
              </div>
              <span class="menu-badge">2件待收</span>
              <span class="menu-arrow">›</span>
            </div>

            <div class="menu-item">
              <div class="menu-icon-wrap" style="background:#FEF3C7;">💛</div>
              <div class="menu-text">
                <div class="menu-title">我的收藏</div>
                <div class="menu-sub">已收藏 12 件商品</div>
              </div>
              <span class="menu-arrow">›</span>
            </div>

            <div class="menu-item">
              <div class="menu-icon-wrap" style="background:#F0FDF4;">💌</div>
              <div class="menu-text">
                <div class="menu-title">情侣配对</div>
                <div class="menu-sub">当前与 Ta 远程连接中</div>
              </div>
              <div style="width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:6px;animation:live-pulse 1.2s ease-in-out infinite;"></div>
              <span class="menu-arrow">›</span>
            </div>

            <div class="menu-item">
              <div class="menu-icon-wrap" style="background:#F5F3FF;">🔒</div>
              <div class="menu-text">
                <div class="menu-title">隐私与安全</div>
                <div class="menu-sub">数据保护 · 已开启</div>
              </div>
              <span class="menu-arrow">›</span>
            </div>

            <div class="menu-item">
              <div class="menu-icon-wrap" style="background:#FFF1F2;">🎁</div>
              <div class="menu-text">
                <div class="menu-title">会员专属福利</div>
                <div class="menu-sub">本月积分 2,480 pts</div>
              </div>
              <span class="menu-badge" style="background:linear-gradient(135deg,#F59E0B,#FBBF24);">VIP</span>
              <span class="menu-arrow">›</span>
            </div>
          </div>

          <!-- Logout -->
          <button class="logout-btn">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
              <path d="M13 3h4a1 1 0 011 1v12a1 1 0 01-1 1h-4" stroke="#7C3AED" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M8 14l4-4-4-4" stroke="#7C3AED" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 10H2" stroke="#7C3AED" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            退出登录
          </button>

        </div>

        <!-- Bottom nav -->
        <div class="bottom-nav">
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>首页</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#bbb" stroke-width="1.8"/><path d="M20 20l-3-3" stroke="#bbb" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span>探索</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 6 6 9c0 4 2 6 4 7v3h4v-3c2-1 4-3 4-7 0-3-2-7-6-7z" stroke="#bbb" stroke-width="1.8" fill="none"/><path d="M10 9l1.5-3L13 9l-1.5 3L10 9z" stroke="#bbb" stroke-width="1.2"/></svg>
            <span>蓝牙</span>
          </div>
          <div class="nav-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="#bbb" stroke-width="1.8" fill="none"/></svg>
            <span>心率</span>
          </div>
          <div class="nav-item active">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="#7C3AED"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span>我的</span>
          </div>
        </div>

      </div>
    </div>
    <div class="screen-label">07 · PROFILE</div>
  </div>

</div>`},Ef=Q.createContext(null);function F0(){const w=Q.useContext(Ef);if(!w)throw new Error("useApp must be used inside AppProvider");return w}const Af=[{id:"shiguang-initial",name:"拾光·初",category:"拾光系列",price:169,image:"/assets/shiguang-initial-source.png",label:"柔和入门",description:"圆润一体设计，适合从轻柔节奏开始探索。",features:["圆润一体","动态连接反馈","强度可调"]},{id:"shiguang-pleasure",name:"拾光·悦",category:"拾光系列",price:199,image:"/assets/shiguang-pleasure-source.png",label:"双区律动",description:"双区配合与多档律动，支持在 App 内保存偏好。",features:["双区律动","模式波形","强度可调"]},{id:"shiguang-joy",name:"拾光·欣悦",category:"拾光系列",price:299,image:"/assets/shiguang-joy-source.png",label:"分体探索",description:"模块化体验与独立控制，提供更自由的组合方式。",features:["分体控制","吮吸体验","10 档律动"]},{id:"care-water",name:"润物护理",category:"水剂护理",price:129,image:"/assets/shiguang-initial.webp",label:"温和水基",description:"面向日常清洁与舒适体验的专业护理选择。"}],qe=Object.freeze({dataMode:"simulation",recommendation:{title:"跟随 · 中等律动",reason:"结合当前心率趋势与最近偏好生成的演示推荐"},inputs:["心率趋势","设备反馈","历史偏好"],outputs:["模式推荐","强度调整","节奏优化"],preferredModes:[{name:"跟随",note:"实时跟随心率变化"},{name:"渐强",note:"循序调整节奏"},{name:"节拍",note:"按心跳保持同步"}],history:[{date:"昨晚",mode:"跟随",duration:"12 分钟",feedback:"舒适"},{date:"周二",mode:"渐强",duration:"18 分钟",feedback:"已收藏"}]}),$0=w=>w.startsWith("product/")?"explore":w==="rhythm"?"ai":Sf[w]?w:"home",W0=["home","explore","device","records","profile"],zf=Af.filter(w=>w.category==="拾光系列").slice(0,3),I0=zf,ps=new Map(Af.map(w=>[w.id,w])),gs=w=>`¥ ${Number(w).toLocaleString("en-US")}`,Rn=w=>String(w).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),P0=Q.memo(function({screenKey:P,stageRef:en}){return Jt.jsx("div",{ref:en,className:"reference-stage",dangerouslySetInnerHTML:{__html:Sf[P]}})});function n1(){const w=Q.useRef(null),[P,en]=Q.useState("自动"),[h,Z]=Q.useState(!1),{route:X,navigate:ln,goBack:Sn,notify:M,toast:z,heartRate:_,rhythmFrequency:un,setRhythmFrequency:cn,suctionLevel:Mn,setSuctionLevel:Tn,vibrationLevel:Zn,setVibrationLevel:Hn,extensionLevel:lt,setExtensionLevel:st,connectedDevice:J,ringDevice:Vn,availableDevices:K,scanning:An,connect:qn,startScan:Ln,favorites:Yn,toggleFavorite:zt,rhythmActive:fn,setRhythmActive:zn,remoteControlAllowed:at,setRemoteControlAllowed:Dt}=F0(),En=Q.useMemo(()=>$0(X),[X]),b=Q.useMemo(()=>X.startsWith("product/")?X.slice(8):null,[X]);return Q.useEffect(()=>{const A=w.current;if(!A)return;const k=[];if(En==="home"){const m=A.querySelector(".p1 .model-silhouette");if(m){const D=document.createElement("img");D.className="model-silhouette product-silhouette",D.src="/assets/shiguang-pleasure-source.png",D.alt="拾光·悦产品剪影",D.decoding="async",m.replaceWith(D)}}const G=(m,D,R)=>{A.querySelectorAll(m).forEach(H=>{H.addEventListener(D,R),k.push(()=>H.removeEventListener(D,R))})},o=(m,D)=>{A.querySelectorAll(m).forEach(R=>{R.tabIndex=0,R.setAttribute("role","button");const H=on=>{(on.key==="Enter"||on.key===" ")&&(on.preventDefault(),D(on))};R.addEventListener("keydown",H),k.push(()=>R.removeEventListener("keydown",H))}),G(m,"click",D)},E=m=>m.stopPropagation(),O=En==="ai"?["home","explore","ai","records","profile"]:En==="couple"?["home","explore","device","records","couple"]:W0;A.querySelectorAll(".bottom-nav .nav-item").forEach((m,D)=>{const R=O[D];if(!R)return;m.tabIndex=0,m.setAttribute("role","button");const H=()=>ln(R),on=W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),H())};m.addEventListener("click",H),m.addEventListener("keydown",on),k.push(()=>{m.removeEventListener("click",H),m.removeEventListener("keydown",on)})}),G(".back-btn","click",Sn),G(".p1 .btn-primary","click",()=>ln("explore")),G(".p1 .btn-outline","click",()=>M("更多产品信息将在详情页开放"));const T=(m,D)=>{if(!m||!D)return;m.dataset.productId=D.id;const R=m.querySelector(".pname"),H=m.querySelector(".price"),on=m.querySelector(".img-area");if(R&&(R.textContent=D.name),H&&(H.textContent=gs(D.price)),on&&D.image){let W=on.querySelector("img.product-media");W||(W=document.createElement("img"),W.className="product-media",on.append(W)),W.src=D.image,W.alt=D.name,W.loading="eager"}m.setAttribute("aria-label",`${D.name}，${gs(D.price)}`)};A.querySelectorAll(".p1 .product-card").forEach((m,D)=>T(m,zf[D])),A.querySelectorAll(".p2 .grid-card").forEach((m,D)=>{const R=I0[D];R?T(m,R):m.remove()}),o(".p1 .product-card",m=>{if(m.target.closest(".add-btn"))return;const D=m.currentTarget.dataset.productId;D&&ln(`product/${D}`)}),o(".p1 .add-btn",m=>{E(m);const D=ps.get(m.currentTarget.closest(".product-card")?.dataset.productId);M(`${D?.name||"产品"} 已加入体验清单`,"success")});const C=["全部","拾光系列","情侣互动","水剂护理","推荐"];A.querySelectorAll(".p2 .tag").forEach((m,D)=>{m.textContent=C[D]||m.textContent,m.dataset.category=C[D]||"全部",m.setAttribute("aria-label",`筛选${m.textContent}`)});const F=(m="",D="全部")=>{const R=m.trim().toLowerCase();A.querySelectorAll(".p2 .grid-card").forEach(H=>{const on=ps.get(H.dataset.productId),W=D==="全部"||D==="推荐"&&["shiguang-initial","shiguang-pleasure"].includes(on?.id)||on?.category===D,$t=!R||`${on?.name||""} ${on?.category||""}`.toLowerCase().includes(R);H.style.display=W&&$t?"":"none"})},N=A.querySelector(".p2 .search-bar input");let Bn=A.querySelector(".p2 .tag.active")?.dataset.category||"全部";G(".p2 .search-bar input","input",m=>F(m.currentTarget.value,Bn)),o(".p2 .tag",m=>{A.querySelectorAll(".p2 .tag").forEach(D=>{D.classList.toggle("active",D===m.currentTarget),D.classList.toggle("inactive",D!==m.currentTarget)}),Bn=m.currentTarget.dataset.category||"全部",F(N?.value||"",Bn)}),o(".p2 .grid-card",m=>{if(m.target.closest(".heart-btn"))return;const D=m.currentTarget.dataset.productId;D&&ln(`product/${D}`)}),o(".p2 .heart-btn",m=>{E(m);const D=m.currentTarget.closest(".grid-card")?.dataset.productId;D&&zt(D)}),A.querySelectorAll(".p2 .heart-btn").forEach(m=>{const D=m.closest(".grid-card")?.dataset.productId;m.classList.toggle("is-favorite",!!(D&&Yn.has(D))),m.setAttribute("aria-label",Yn.has(D)?"取消收藏":"加入收藏")}),A.querySelectorAll(".p3 .device-card").forEach((m,D)=>{const R=K[D],H=!!(R&&J?.id===R.id);m.dataset.deviceId=R?.id||"",m.style.display=R?"":"none",m.style.opacity=An?"0.62":"1",m.setAttribute("aria-label",R?`${H?"进入 AI 律动":An?"搜索中":"点击连接"}：${R.name}`:"暂无设备");const on=m.querySelector(".device-name"),W=m.querySelector(".device-status"),$t=m.querySelector(".device-icon");if(on&&(on.textContent=R?.name||"搜索中…"),$t&&($t.className=`device-icon ${H?"connected":"disconnected"}`),W){W.classList.toggle("is-connected",H);const jn=W.querySelector("span");jn&&(jn.textContent=An?"正在搜索…":H?"已连接":"点击连接 ›");const Gn=W.querySelector(".status-dot");Gn&&(Gn.className=`status-dot ${H?"green":"gray"}`)}const L=m.querySelector(".device-ai-entry")||[...m.querySelectorAll("div")].find(jn=>jn.textContent.trim()==="心率同步 ON");if(L&&(L.classList.toggle("device-ai-entry",H),H?(L.innerHTML=`
            <svg class="device-ai-entry-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M12 3.5l1.7 5.3L19 10.5l-5.3 1.7L12 17.5l-1.7-5.3L5 10.5l5.3-1.7L12 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
              <path d="M18.5 16.5v4M16.5 18.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="device-ai-entry-text">AI</span>
          `,L.title="进入 AI 律动"):(L.textContent="心率同步 ON",L.removeAttribute("title")),L.setAttribute("aria-label",H?`进入 ${R.name} 的 AI 律动`:"心率同步已开启"),L.tabIndex=H?0:-1,L.setAttribute("role",H?"button":"status"),H)){const jn=Pn=>{E(Pn),ln("ai"),M(`${R.name} 已连接，进入 AI 律动`,"success")},Gn=Pn=>{(Pn.key==="Enter"||Pn.key===" ")&&(Pn.preventDefault(),jn(Pn))};L.addEventListener("click",jn),L.addEventListener("keydown",Gn),k.push(()=>{L.removeEventListener("click",jn),L.removeEventListener("keydown",Gn)})}}),o(".p3 .device-card",m=>{if(An)return;const D=K.find(R=>R.id===m.currentTarget.dataset.deviceId);D&&J?.id!==D.id?qn(D):D&&(ln("ai"),M(`${D.name} 已连接，进入 AI 律动`,"success"))}),G(".p3 .add-device-btn","click",()=>Ln());const sn=A.querySelector(".p3 .add-device-btn");if(sn){sn.disabled=An,sn.classList.toggle("is-scanning",An);const m=[...sn.childNodes].find(D=>D.nodeType===Node.TEXT_NODE&&D.textContent.trim());m&&(m.textContent=An?" 正在搜索设备…":" 添加新设备")}o(".p5 .mode-card",m=>{const D=m.currentTarget.classList.contains("active")&&fn;A.querySelectorAll(".p5 .mode-card").forEach(R=>R.classList.remove("active")),m.currentTarget.classList.add("active"),zn(!D),M(D?"AI 律动已暂停":`已切换${m.currentTarget.querySelector(".mode-name")?.textContent||"AI"}模式`,"success")});const dt=A.querySelector(".p5 .banner-sub");dt&&(dt.textContent=fn?"心率数据实时传输中…":"待机中，点击律动模式开始");const qt=A.querySelector(".p5 .safe-stop-command");qt&&(qt.classList.toggle("is-paused",!fn),qt.textContent=fn?"安全停止":"已暂停",qt.disabled=!fn),o(".p6 .sync-mode-card",m=>{A.querySelectorAll(".p6 .sync-mode-card").forEach(D=>D.classList.remove("active")),m.currentTarget.classList.add("active"),M(`已切换${m.currentTarget.querySelector(".sm-name")?.textContent||"同步"}模式`,"success")}),G(".p6 .sc-toggle","click",()=>{Dt(!at),M(at?"远程控制已关闭":"远程控制已开启")});const Ut=A.querySelector(".p6 .sc-toggle");Ut&&(Ut.classList.toggle("is-disabled",!at),Ut.setAttribute("aria-label",at?"关闭远程控制":"开启远程控制")),G(".p7 .edit-btn-profile","click",()=>M("资料编辑将在账号服务接入后开放")),o(".p7 .device-mini-card",m=>{m.currentTarget.textContent.includes("添加")?Ln():ln("device")}),o(".p7 .menu-item",()=>M("账户服务将在后端接入后开放")),G(".p7 .logout-btn","click",()=>M("演示环境不会执行真实退出")),A.querySelectorAll(".ai-recommend-strip, .home-rhythm-control, .adaptive-engine-card, .experience-history-card, .profile-model-card, .ring-status-card, .frequency-control-card, .actuator-control-card").forEach(m=>m.remove());const fe=A.querySelector(".p1 .carousel-section");if(fe){const m=document.createElement("section");m.className=["home-rhythm-control",fn&&"is-active",J?"has-device":"is-disconnected"].filter(Boolean).join(" "),m.setAttribute("aria-label","AI 律动主控制"),m.innerHTML=`
        <div class="home-rhythm-main">
          <div class="home-rhythm-kicker"><span class="home-rhythm-live"></span>AI 律动控制</div>
          <div class="home-rhythm-title">${Rn(qe.recommendation.title)}</div>
          <div class="home-rhythm-status"><span class="home-rhythm-status-dot"></span>${J?`${Rn(J.name)} · ${un} Hz`:"未连接设备"}</div>
        </div>
        <div class="home-rhythm-actions">
          <button class="home-rhythm-toggle ${fn?"is-active":""}" type="button" aria-label="${fn?"暂停 AI 律动":"启动 AI 律动"}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
              ${fn?'<path d="M8 6v12M16 6v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>':'<path d="M8 5.5v13l10-6.5-10-6.5z" fill="currentColor"/>'}
            </svg>
            <span>${fn?"暂停":"启动"}</span>
          </button>
          <button class="home-rhythm-detail" type="button" aria-label="打开 AI 律动详情" title="打开 AI 律动详情">›</button>
        </div>
      `,fe.prepend(m);const D=H=>{if(E(H),!J){ln("device"),M("请先连接设备，再启动 AI 律动");return}zn(!fn),M(fn?"AI 律动已暂停":"AI 律动已启动","success")},R=()=>{ln("ai"),M("已打开 AI 律动控制台","success")};m.querySelector(".home-rhythm-toggle")?.addEventListener("click",D),m.querySelector(".home-rhythm-detail")?.addEventListener("click",R),k.push(()=>{m.querySelector(".home-rhythm-toggle")?.removeEventListener("click",D),m.querySelector(".home-rhythm-detail")?.removeEventListener("click",R)})}const gn=A.querySelector(".p4 .page-content");if(gn){const m=document.createElement("section");m.className="experience-history-card",m.innerHTML=`
        <div class="experience-history-head">
          <div>
            <div class="experience-history-kicker">体验记录</div>
            <div class="experience-history-title">最近体验</div>
          </div>
          <span class="simulation-badge">演示数据</span>
        </div>
        <div class="history-list">
          ${qe.history.map(D=>`
            <div class="history-row">
              <div class="history-date">${Rn(D.date)}</div>
              <div class="history-main"><strong>${Rn(D.mode)}</strong><span>${Rn(D.duration)} · ${Rn(D.feedback)}</span></div>
              <button class="history-feedback" type="button" data-feedback="${Rn(D.mode)}">记录偏好</button>
            </div>
          `).join("")}
        </div>
      `,gn.append(m),G(".p4 .history-feedback","click",D=>{M(`已记录「${D.currentTarget.dataset.feedback}」偏好，供 AI 模型学习`,"success")})}const Wn=A.querySelector(".p5 .page-content");if(Wn){const m=document.createElement("section"),D={自动:"根据心率趋势与设备反馈动态调整",自定义:"保留你的手动强度与节奏设置",历史:"沿用最近一次收藏的体验模式"};m.className="adaptive-engine-card",m.innerHTML=`
        <div class="adaptive-engine-head">
          <div>
            <div class="adaptive-kicker">HeartSync AI Engine</div>
            <div class="adaptive-title">AI 自适应体验引擎</div>
          </div>
          <span class="simulation-badge">${Rn(qe.dataMode)}</span>
        </div>
        <div class="adaptive-flow">
          <div><span>输入</span>${qe.inputs.map(L=>`<b>${Rn(L)}</b>`).join("")}</div>
          <div class="adaptive-flow-arrow">→</div>
          <div><span>输出</span>${qe.outputs.map(L=>`<b>${Rn(L)}</b>`).join("")}</div>
        </div>
        <div class="adaptive-tabs" role="tablist" aria-label="体验模式">
          ${["自动","自定义","历史"].map(L=>`<button class="adaptive-tab ${P===L?"active":""}" type="button" data-mode="${L}" role="tab" aria-selected="${P===L}">${L}模式</button>`).join("")}
        </div>
        <div class="adaptive-status">${D[P]}</div>
        <button class="adaptive-apply" type="button">采用 AI 推荐节奏</button>
      `;const R=[{id:"suction",name:"吮吸",value:Mn,minLabel:"轻柔",maxLabel:"增强",setter:Tn},{id:"vibration",name:"震动",value:Zn,minLabel:"细腻",maxLabel:"强劲",setter:Hn},{id:"extension",name:"伸缩",value:lt,minLabel:"短促",maxLabel:"延展",setter:st}],H=document.createElement("section");H.className="actuator-control-card",H.innerHTML=`
        <div class="actuator-head">
          <div>
            <div class="actuator-kicker">DEVICE CONTROL</div>
            <div class="actuator-title">动作控制</div>
          </div>
          <span class="simulation-badge">演示控制</span>
        </div>
        <div class="actuator-status">
          <span class="actuator-status-dot ${J?"is-connected":""}"></span>
          <span>${J?`已连接 ${Rn(J.name)} · 三通道可调`:"未连接设备 · 先连接后调节"}</span>
        </div>
        <div class="actuator-list">
          ${R.map(L=>`
            <div class="actuator-row" data-actuator="${L.id}">
              <div class="actuator-row-head">
                <div class="actuator-name-wrap"><span class="actuator-mark">${L.name.slice(0,1)}</span><span class="actuator-name">${L.name}</span></div>
                <strong class="actuator-value">${L.value}%</strong>
              </div>
              <div class="actuator-slider ${J?"":"is-disabled"}" role="slider" aria-label="${L.name}强度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${L.value}" aria-valuetext="${L.value}%" aria-disabled="${!J}" tabindex="0">
                <div class="actuator-fill"></div>
                <div class="actuator-thumb"></div>
              </div>
              <div class="actuator-scale"><span>${L.minLabel}</span><span>${L.maxLabel}</span></div>
            </div>
          `).join("")}
        </div>
        <div class="actuator-note">三通道调节仅作用于当前模拟律动</div>
      `,Wn.querySelector(".intensity-card")?.remove(),Wn.append(H,m);const W=Object.fromEntries(R.map(L=>[L.id,L.setter])),$t=Object.fromEntries(R.map(L=>[L.id,L.name]));G(".p5 .actuator-slider","click",L=>{if(!J){M("请先连接设备，再调节动作强度");return}const jn=L.currentTarget,Gn=jn.closest(".actuator-row")?.dataset.actuator,Pn=jn.getBoundingClientRect(),wt=Math.round(Math.max(0,Math.min(1,(L.clientX-Pn.left)/Pn.width))*100);W[Gn]?.(wt),M(`${$t[Gn]||"动作"}已调整为 ${wt}%`,"success")}),A.querySelectorAll(".p5 .actuator-slider").forEach(L=>{const jn=Gn=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(Gn.key))return;if(Gn.preventDefault(),!J){M("请先连接设备，再调节动作强度");return}const Pn=L.closest(".actuator-row")?.dataset.actuator,wt=Number(L.getAttribute("aria-valuenow")||0),Ue=Gn.key==="Home"?0:Gn.key==="End"?100:Math.max(0,Math.min(100,wt+(Gn.key==="ArrowRight"?1:-1)));W[Pn]?.(Ue),M(`${$t[Pn]||"动作"}已调整为 ${Ue}%`,"success")};L.addEventListener("keydown",jn),k.push(()=>L.removeEventListener("keydown",jn))}),o(".p5 .adaptive-tab",L=>{const jn=L.currentTarget.dataset.mode||"自动";en(jn),M(`已切换${jn}模式`)}),G(".p5 .adaptive-apply","click",()=>{zn(!0),Tn(54),Hn(62),st(38),cn(12),M("已采用 AI 推荐：跟随 · 中等律动","success")})}const Gt=A.querySelector(".p7 .page-content");if(Gt){const m=document.createElement("section");m.className="profile-model-card",m.innerHTML=`
        <div class="profile-model-head">
          <div>
            <div class="profile-model-kicker">Personal Experience Profile</div>
            <div class="profile-model-title">个人体验模型</div>
          </div>
          <span class="simulation-badge">待学习</span>
        </div>
        <div class="profile-preference-row">
          ${qe.preferredModes.map((R,H)=>`<span class="profile-preference ${H===0?"is-primary":""}">${Rn(R.name)}</span>`).join("")}
        </div>
        <div class="profile-model-note">${Rn(qe.recommendation.reason)}</div>
        <button class="model-insight-trigger" type="button">${h?"收起洞察":"查看洞察"}</button>
        ${h?`<div class="model-insight-detail">偏好模式：${Rn(qe.preferredModes[0].name)} · 最近反馈将用于下一次推荐。</div>`:""}
      `;const D=Gt.querySelector(".health-card");D?D.after(m):Gt.prepend(m),G(".p7 .model-insight-trigger","click",()=>Z(R=>!R))}const La=Vn||K.find(m=>m.type==="ring"),ht=A.querySelector(".p3 .devices-section");if(ht&&La){const m=document.createElement("div");m.className="ring-status-card",m.innerHTML=`
        <div class="ring-status-icon">◌</div>
        <div class="ring-status-copy"><strong>Smart Ring R1</strong><span>${Vn?"PPG · HRV · 温度 · 已连接":"扫描到 Smart Ring · 点击连接"}</span></div>
        <span class="ring-status-arrow">›</span>
      `,ht.append(m),o(".p3 .ring-status-card",()=>{Vn?M("Smart Ring R1 已连接"):qn(La)})}const Ft=(m,D)=>{const R=A.querySelector(m);R&&(R.textContent=D)};Ft(".p4 .hr-number",String(_)),Ft(".p5 .dial-bpm-val",String(_)),Ft(".p5 .dial-freq",`〜 ${un} Hz`),Ft(".p5 .banner-dev",J?.name||"SHAKI Pro S1"),Ft(".p7 .hm-val",String(_)),Ft(".p7 .stat-col:nth-child(3) .s-val",String(_));const Ya={suction:Mn,vibration:Zn,extension:lt};A.querySelectorAll(".p5 .actuator-row").forEach(m=>{const D=Ya[m.dataset.actuator];if(typeof D!="number")return;const R=m.querySelector(".actuator-value");R&&(R.textContent=`${D}%`);const H=m.querySelector(".actuator-slider"),on=m.querySelector(".actuator-fill"),W=m.querySelector(".actuator-thumb");H&&(H.setAttribute("aria-valuenow",String(D)),H.setAttribute("aria-valuetext",`${D}%`),H.setAttribute("aria-disabled",String(!J)),H.classList.toggle("is-disabled",!J)),on&&(on.style.width=`${D}%`),W&&(W.style.left=`${D}%`)}),Ft(".p5 .actuator-status span:last-child",J?`已连接 ${J.name} · 三通道可调`:"未连接设备 · 先连接后调节"),A.querySelectorAll(".p5 .data-card").forEach(m=>{if(!m.querySelector(".dc-label")?.textContent.includes("设备频率"))return;const D=m.querySelector(".dc-val");D&&(D.textContent=`${un} Hz`)});const tl=A.querySelector(".p5 .page-content");if(tl&&!tl.querySelector(".safe-stop-command")){const m=document.createElement("button");m.className="safe-stop-command",m.type="button",tl.append(m)}const Nt=A.querySelector(".p5 .safe-stop-command");if(Nt){Nt.textContent=fn?"安全停止":"已暂停",Nt.disabled=!fn,Nt.classList.toggle("is-paused",!fn);const m=()=>{zn(!1),M("AI 律动已安全停止")};Nt.addEventListener("click",m),k.push(()=>Nt.removeEventListener("click",m))}A.querySelector(".product-detail-backdrop")?.remove();const In=b?ps.get(b):null;if(In){const m=document.createElement("div");m.className="product-detail-backdrop";const D=(In.features||[]).map(H=>`<span class="product-detail-feature">${Rn(H)}</span>`).join("");m.innerHTML=`
        <section class="product-detail-sheet" role="dialog" aria-modal="true" aria-label="${Rn(In.name)}详情">
          <button class="product-detail-close" type="button" aria-label="关闭详情">×</button>
          <div class="product-detail-image"><img src="${In.image}" alt="${Rn(In.name)}" /></div>
          <div class="product-detail-copy">
            <div class="product-detail-kicker">${Rn(In.category)} · ${Rn(In.label)}</div>
            <h2>${Rn(In.name)}</h2>
            <div class="product-detail-price">${gs(In.price)}</div>
            <p>${Rn(In.description)}</p>
            ${D?`<div class="product-detail-features" aria-label="产品功能">${D}</div>`:""}
            <div class="product-detail-actions">
              <button class="product-detail-favorite" type="button">${Yn.has(In.id)?"已收藏":"加入收藏"}</button>
              <button class="product-detail-primary" type="button">加入体验清单</button>
            </div>
          </div>
        </section>
      `,A.append(m);const R=()=>ln("explore");m.addEventListener("click",H=>{H.target===m&&R()}),m.querySelector(".product-detail-close")?.addEventListener("click",R),m.querySelector(".product-detail-favorite")?.addEventListener("click",()=>{zt(In.id),M(Yn.has(In.id)?"已取消收藏":"已加入收藏","success")}),m.querySelector(".product-detail-primary")?.addEventListener("click",()=>{M(`${In.name} 已加入体验清单`,"success"),R()})}return F(N?.value||"",Bn),()=>k.forEach(m=>m())},[En,b,ln,Sn,M,_,un,cn,Mn,Tn,Zn,Hn,lt,st,J,Vn,K,An,qn,Ln,Yn,zt,fn,zn,at,Dt,P,h]),Jt.jsxs("div",{className:"reference-app",children:[Jt.jsx("style",{dangerouslySetInnerHTML:{__html:J0}}),Jt.jsx(P0,{screenKey:En,stageRef:w}),z?Jt.jsx("div",{className:`reference-toast reference-toast--${z.tone||"default"}`,role:"status",children:z.message}):null]})}function t1(){return Jt.jsx(n1,{})}const e1=[{id:"pro-s1",type:"toy",name:"HeartSync Toy S1",model:"拾光·悦",battery:82,signal:4},{id:"ring-r1",type:"ring",name:"HeartSync Ring R1",model:"PPG · HRV · 温度",battery:74,signal:4},{id:"mini",type:"toy",name:"SHAKI Mini",model:"轻巧随行",battery:64,signal:3}],ms=(w,P=700)=>new Promise(en=>{window.setTimeout(()=>en(w),P)});function l1(){return ms(e1)}function a1(w){return ms({...w,connectedAt:new Date().toISOString()},900)}function i1(){return ms(null,350)}const u1=new Set(["home","explore","device","records","ai","couple","profile"]);function xf(){return window.location.hash.replace("#","")||"home"}function c1({children:w}){const[P,en]=Q.useState(xf),[h,Z]=Q.useState("home"),[X,ln]=Q.useState(()=>new Set(JSON.parse(localStorage.getItem("shaki-favorites")||"[]"))),[Sn,M]=Q.useState({id:"pro-s1",type:"toy",name:"SHAKI Pro S1",model:"拾光·悦",battery:82,signal:4}),[z,_]=Q.useState(null),[un,cn]=Q.useState([{id:"pro-s1",type:"toy",name:"SHAKI Pro S1",model:"智能律动设备",battery:82,signal:4},{id:"mini",type:"toy",name:"SHAKI Mini",model:"便携智能设备",battery:64,signal:3}]),[Mn,Tn]=Q.useState(!1),[Zn,Hn]=Q.useState(86),[lt,st]=Q.useState(!0),[J,Vn]=Q.useState(48),[K,An]=Q.useState(12),[qn,Ln]=Q.useState(46),[Yn,zt]=Q.useState(58),[fn,zn]=Q.useState(32),[at,Dt]=Q.useState("舒缓"),[En,b]=Q.useState(!1),[A,k]=Q.useState(!1),[G,o]=Q.useState(!1),[E,O]=Q.useState(null),T=Q.useRef(null);Q.useEffect(()=>{const gn=()=>en(xf());return window.addEventListener("hashchange",gn),window.location.hash||(window.location.hash="home"),()=>window.removeEventListener("hashchange",gn)},[]),Q.useEffect(()=>{localStorage.setItem("shaki-favorites",JSON.stringify([...X]))},[X]),Q.useEffect(()=>{if(!lt||!Sn)return;const gn=window.setInterval(()=>{Hn(Wn=>Math.max(72,Math.min(104,Wn+Math.round(Math.random()*6-3))))},1800);return()=>window.clearInterval(gn)},[Sn,lt]),Q.useEffect(()=>()=>window.clearTimeout(T.current),[]);const C=Q.useCallback((gn,Wn="default")=>{window.clearTimeout(T.current),O({message:gn,tone:Wn}),T.current=window.setTimeout(()=>O(null),2400)},[]),F=Q.useCallback(gn=>{Z(P),window.location.hash=gn},[P]),N=Q.useCallback(()=>{window.location.hash=h||"home"},[h]),Bn=u1.has(P)?P:h,sn=Q.useCallback(gn=>{ln(Wn=>{const Gt=new Set(Wn);return Gt.has(gn)?Gt.delete(gn):Gt.add(gn),Gt})},[]),dt=Q.useCallback(async()=>{Tn(!0),cn([]);const gn=await l1();cn(gn),Tn(!1),C(`发现 ${gn.length} 台设备`,"success")},[C]),qt=Q.useCallback(async gn=>{C(`正在连接 ${gn.name}`);const Wn=await a1(gn);Wn.type==="ring"?_(Wn):M(Wn),C(`${gn.name} 已连接`,"success")},[C]),Ut=Q.useCallback(async()=>{const gn=Sn?.name;await i1(),M(null),b(!1),C(`${gn||"设备"} 已断开`)},[Sn,C]),fe=Q.useMemo(()=>({route:P,activeMainRoute:Bn,navigate:F,goBack:N,favorites:X,toggleFavorite:sn,connectedDevice:Sn,ringDevice:z,availableDevices:un,scanning:Mn,startScan:dt,connect:qt,disconnect:Ut,heartRate:Zn,monitoring:lt,setMonitoring:st,intensity:J,setIntensity:Vn,rhythmFrequency:K,setRhythmFrequency:An,suctionLevel:qn,setSuctionLevel:Ln,vibrationLevel:Yn,setVibrationLevel:zt,extensionLevel:fn,setExtensionLevel:zn,rhythmMode:at,setRhythmMode:Dt,rhythmActive:En,setRhythmActive:b,coupleLinked:A,setCoupleLinked:k,remoteControlAllowed:G,setRemoteControlAllowed:o,toast:E,notify:C}),[P,Bn,F,N,X,sn,Sn,z,un,Mn,dt,qt,Ut,Zn,lt,J,K,qn,Yn,fn,at,En,A,G,E,C]);return Jt.jsx(Ef.Provider,{value:fe,children:w})}K0.createRoot(document.getElementById("root")).render(Jt.jsx(Q.StrictMode,{children:Jt.jsx(c1,{children:Jt.jsx(t1,{})})}));
