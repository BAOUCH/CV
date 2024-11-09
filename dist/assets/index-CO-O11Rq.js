(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Dg={exports:{}},fc={},Ig={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),qv=Symbol.for("react.portal"),Yv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),ex=Symbol.for("react.suspense"),tx=Symbol.for("react.memo"),nx=Symbol.for("react.lazy"),$f=Symbol.iterator;function ix(n){return n===null||typeof n!="object"?null:(n=$f&&n[$f]||n["@@iterator"],typeof n=="function"?n:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,Og={};function ro(n,e,t){this.props=n,this.context=e,this.refs=Og,this.updater=t||Ug}ro.prototype.isReactComponent={};ro.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ro.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function kg(){}kg.prototype=ro.prototype;function Ad(n,e,t){this.props=n,this.context=e,this.refs=Og,this.updater=t||Ug}var Rd=Ad.prototype=new kg;Rd.constructor=Ad;Fg(Rd,ro.prototype);Rd.isPureReactComponent=!0;var Zf=Array.isArray,Bg=Object.prototype.hasOwnProperty,bd={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:n,key:s,ref:o,props:r,_owner:bd.current}}function rx(n,e){return{$$typeof:_a,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Cd(n){return typeof n=="object"&&n!==null&&n.$$typeof===_a}function sx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qf=/\/+/g;function Uc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sx(""+n.key):e.toString(36)}function yl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case _a:case qv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Uc(o,0):i,Zf(r)?(t="",n!=null&&(t=n.replace(Qf,"$&/")+"/"),yl(r,e,t,"",function(c){return c})):r!=null&&(Cd(r)&&(r=rx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Uc(s,a);o+=yl(s,e,t,l,r)}else if(l=ix(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Uc(s,a++),o+=yl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(n,e,t){if(n==null)return n;var i=[],r=0;return yl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function ox(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var nn={current:null},Sl={transition:null},ax={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:bd};function Vg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ca,forEach:function(n,e,t){Ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ca(n,function(){e++}),e},toArray:function(n){return Ca(n,function(e){return e})||[]},only:function(n){if(!Cd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=ro;He.Fragment=Yv;He.Profiler=$v;He.PureComponent=Ad;He.StrictMode=Kv;He.Suspense=ex;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;He.act=Vg;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Fg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Bg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:Qv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Zv,_context:n},n.Consumer=n};He.createElement=Hg;He.createFactory=function(n){var e=Hg.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:Jv,render:n}};He.isValidElement=Cd;He.lazy=function(n){return{$$typeof:nx,_payload:{_status:-1,_result:n},_init:ox}};He.memo=function(n,e){return{$$typeof:tx,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=Sl.transition;Sl.transition={};try{n()}finally{Sl.transition=e}};He.unstable_act=Vg;He.useCallback=function(n,e){return nn.current.useCallback(n,e)};He.useContext=function(n){return nn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return nn.current.useDeferredValue(n)};He.useEffect=function(n,e){return nn.current.useEffect(n,e)};He.useId=function(){return nn.current.useId()};He.useImperativeHandle=function(n,e,t){return nn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return nn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return nn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return nn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return nn.current.useReducer(n,e,t)};He.useRef=function(n){return nn.current.useRef(n)};He.useState=function(n){return nn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return nn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return nn.current.useTransition()};He.version="18.3.1";Ig.exports=He;var oi=Ig.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=oi,cx=Symbol.for("react.element"),ux=Symbol.for("react.fragment"),hx=Object.prototype.hasOwnProperty,dx=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fx={key:!0,ref:!0,__self:!0,__source:!0};function Gg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hx.call(e,i)&&!fx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cx,type:n,key:s,ref:o,props:r,_owner:dx.current}}fc.Fragment=ux;fc.jsx=Gg;fc.jsxs=Gg;Dg.exports=fc;var S=Dg.exports,jg={exports:{}},Mn={},Wg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,W){var Z=L.length;L.push(W);e:for(;0<Z;){var oe=Z-1>>>1,Se=L[oe];if(0<r(Se,W))L[oe]=W,L[Z]=Se,Z=oe;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],Z=L.pop();if(Z!==W){L[0]=Z;e:for(var oe=0,Se=L.length,Ke=Se>>>1;oe<Ke;){var G=2*(oe+1)-1,ne=L[G],pe=G+1,se=L[pe];if(0>r(ne,Z))pe<Se&&0>r(se,ne)?(L[oe]=se,L[pe]=Z,oe=pe):(L[oe]=ne,L[G]=Z,oe=G);else if(pe<Se&&0>r(se,Z))L[oe]=se,L[pe]=Z,oe=pe;else break e}}return W}function r(L,W){var Z=L.sortIndex-W.sortIndex;return Z!==0?Z:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var W=t(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=L)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(c)}}function y(L){if(v=!1,x(L),!g)if(t(l)!==null)g=!0,X(C);else{var W=t(c);W!==null&&J(y,W.startTime-L)}}function C(L,W){g=!1,v&&(v=!1,d(P),P=-1),p=!0;var Z=f;try{for(x(W),h=t(l);h!==null&&(!(h.expirationTime>W)||L&&!N());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var Se=oe(h.expirationTime<=W);W=n.unstable_now(),typeof Se=="function"?h.callback=Se:h===t(l)&&i(l),x(W)}else i(l);h=t(l)}if(h!==null)var Ke=!0;else{var G=t(c);G!==null&&J(y,G.startTime-W),Ke=!1}return Ke}finally{h=null,f=Z,p=!1}}var b=!1,A=null,P=-1,w=5,E=-1;function N(){return!(n.unstable_now()-E<w)}function j(){if(A!==null){var L=n.unstable_now();E=L;var W=!0;try{W=A(!0,L)}finally{W?H():(b=!1,A=null)}}else b=!1}var H;if(typeof _=="function")H=function(){_(j)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Q=$.port2;$.port1.onmessage=j,H=function(){Q.postMessage(null)}}else H=function(){m(j,0)};function X(L){A=L,b||(b=!0,H())}function J(L,W){P=m(function(){L(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,X(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var Z=f;f=W;try{return L()}finally{f=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=f;f=L;try{return W()}finally{f=Z}},n.unstable_scheduleCallback=function(L,W,Z){var oe=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,L={id:u++,callback:W,priorityLevel:L,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(L.sortIndex=Z,e(c,L),t(l)===null&&L===t(c)&&(v?(d(P),P=-1):v=!0,J(y,Z-oe))):(L.sortIndex=Se,e(l,L),g||p||(g=!0,X(C))),L},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(L){var W=f;return function(){var Z=f;f=W;try{return L.apply(this,arguments)}finally{f=Z}}}})(Xg);Wg.exports=Xg;var px=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=oi,Sn=px;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,$o={};function Kr(n,e){zs(n,e),zs(n+"Capture",e)}function zs(n,e){for($o[n]=e,n=0;n<e.length;n++)qg.add(e[n])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},ep={};function _x(n){return ju.call(ep,n)?!0:ju.call(Jf,n)?!1:gx.test(n)?ep[n]=!0:(Jf[n]=!0,!1)}function vx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xx(n,e,t,i){if(e===null||typeof e>"u"||vx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zt[n]=new rn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zt[e]=new rn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zt[n]=new rn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zt[n]=new rn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zt[n]=new rn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zt[n]=new rn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zt[n]=new rn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zt[n]=new rn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zt[n]=new rn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Nd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Pd,Nd);zt[e]=new rn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Pd,Nd);zt[e]=new rn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Pd,Nd);zt[e]=new rn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zt[n]=new rn(n,1,!1,n.toLowerCase(),null,!1,!1)});zt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zt[n]=new rn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ld(n,e,t,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xx(e,t,r,i)&&(t=null),i||r===null?_x(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ki=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),tp=Symbol.iterator;function po(n){return n===null||typeof n!="object"?null:(n=tp&&n[tp]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,Fc;function No(n){if(Fc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+n}var Oc=!1;function kc(n,e){if(!n||Oc)return"";Oc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Oc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?No(n):""}function yx(n){switch(n.tag){case 5:return No(n.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return n=kc(n.type,!1),n;case 11:return n=kc(n.type.render,!1),n;case 1:return n=kc(n.type,!0),n;default:return""}}function Yu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case gs:return"Fragment";case ms:return"Portal";case Wu:return"Profiler";case Dd:return"StrictMode";case Xu:return"Suspense";case qu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kg:return(n.displayName||"Context")+".Consumer";case Yg:return(n._context.displayName||"Context")+".Provider";case Id:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ud:return e=n.displayName||null,e!==null?e:Yu(n.type)||"Memo";case $i:e=n._payload,n=n._init;try{return Yu(n(e))}catch{}}return null}function Sx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Zg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mx(n){var e=Zg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Na(n){n._valueTracker||(n._valueTracker=Mx(n))}function Qg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Zg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ku(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function np(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=gr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(n,e){e=e.checked,e!=null&&Ld(n,"checked",e,!1)}function $u(n,e){Jg(n,e);var t=gr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Zu(n,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ip(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Zu(n,e,t){(e!=="number"||Bl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function Cs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+gr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Qu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Lo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:gr(t)}}function e_(n,e){var t=gr(e.value),i=gr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function t_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?t_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var La,n_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Zo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ex=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(n){Ex.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ko[e]=ko[n]})});function i_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ko.hasOwnProperty(n)&&ko[n]?(""+e).trim():e+"px"}function r_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=i_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Tx=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(n,e){if(e){if(Tx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function th(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function Fd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ih=null,Ps=null,Ns=null;function op(n){if(n=ya(n)){if(typeof ih!="function")throw Error(te(280));var e=n.stateNode;e&&(e=vc(e),ih(n.stateNode,n.type,e))}}function s_(n){Ps?Ns?Ns.push(n):Ns=[n]:Ps=n}function o_(){if(Ps){var n=Ps,e=Ns;if(Ns=Ps=null,op(n),e)for(n=0;n<e.length;n++)op(e[n])}}function a_(n,e){return n(e)}function l_(){}var Bc=!1;function c_(n,e,t){if(Bc)return n(e,t);Bc=!0;try{return a_(n,e,t)}finally{Bc=!1,(Ps!==null||Ns!==null)&&(l_(),o_())}}function Qo(n,e){var t=n.stateNode;if(t===null)return null;var i=vc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var rh=!1;if(Li)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){rh=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{rh=!1}function wx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Bo=!1,zl=null,Hl=!1,sh=null,Ax={onError:function(n){Bo=!0,zl=n}};function Rx(n,e,t,i,r,s,o,a,l){Bo=!1,zl=null,wx.apply(Ax,arguments)}function bx(n,e,t,i,r,s,o,a,l){if(Rx.apply(this,arguments),Bo){if(Bo){var c=zl;Bo=!1,zl=null}else throw Error(te(198));Hl||(Hl=!0,sh=c)}}function $r(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function u_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ap(n){if($r(n)!==n)throw Error(te(188))}function Cx(n){var e=n.alternate;if(!e){if(e=$r(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ap(r),n;if(s===i)return ap(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function h_(n){return n=Cx(n),n!==null?d_(n):null}function d_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=d_(n);if(e!==null)return e;n=n.sibling}return null}var f_=Sn.unstable_scheduleCallback,lp=Sn.unstable_cancelCallback,Px=Sn.unstable_shouldYield,Nx=Sn.unstable_requestPaint,Et=Sn.unstable_now,Lx=Sn.unstable_getCurrentPriorityLevel,Od=Sn.unstable_ImmediatePriority,p_=Sn.unstable_UserBlockingPriority,Vl=Sn.unstable_NormalPriority,Dx=Sn.unstable_LowPriority,m_=Sn.unstable_IdlePriority,pc=null,ii=null;function Ix(n){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(pc,n,void 0,(n.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Ox,Ux=Math.log,Fx=Math.LN2;function Ox(n){return n>>>=0,n===0?32:31-(Ux(n)/Fx|0)|0}var Da=64,Ia=4194304;function Do(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=t&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-qn(e),r=1<<t,i|=n[t],e&=~r;return i}function kx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=kx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function oh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function g_(){var n=Da;return Da<<=1,!(Da&4194240)&&(Da=64),n}function zc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function va(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-qn(e),n[e]=t}function zx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-qn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function kd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function __(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var v_,Bd,x_,y_,S_,ah=!1,Ua=[],or=null,ar=null,lr=null,Jo=new Map,ea=new Map,Ji=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(n,e){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function go(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&Bd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Vx(n,e,t,i,r){switch(e){case"focusin":return or=go(or,n,e,t,i,r),!0;case"dragenter":return ar=go(ar,n,e,t,i,r),!0;case"mouseover":return lr=go(lr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,go(Jo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,go(ea.get(s)||null,n,e,t,i,r)),!0}return!1}function M_(n){var e=Ur(n.target);if(e!==null){var t=$r(e);if(t!==null){if(e=t.tag,e===13){if(e=u_(t),e!==null){n.blockedOn=e,S_(n.priority,function(){x_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=lh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);nh=i,t.target.dispatchEvent(i),nh=null}else return e=ya(t),e!==null&&Bd(e),n.blockedOn=t,!1;e.shift()}return!0}function up(n,e,t){Ml(n)&&t.delete(e)}function Gx(){ah=!1,or!==null&&Ml(or)&&(or=null),ar!==null&&Ml(ar)&&(ar=null),lr!==null&&Ml(lr)&&(lr=null),Jo.forEach(up),ea.forEach(up)}function _o(n,e){n.blockedOn===e&&(n.blockedOn=null,ah||(ah=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Gx)))}function ta(n){function e(r){return _o(r,n)}if(0<Ua.length){_o(Ua[0],n);for(var t=1;t<Ua.length;t++){var i=Ua[t];i.blockedOn===n&&(i.blockedOn=null)}}for(or!==null&&_o(or,n),ar!==null&&_o(ar,n),lr!==null&&_o(lr,n),Jo.forEach(e),ea.forEach(e),t=0;t<Ji.length;t++)i=Ji[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ji.length&&(t=Ji[0],t.blockedOn===null);)M_(t),t.blockedOn===null&&Ji.shift()}var Ls=ki.ReactCurrentBatchConfig,jl=!0;function jx(n,e,t,i){var r=it,s=Ls.transition;Ls.transition=null;try{it=1,zd(n,e,t,i)}finally{it=r,Ls.transition=s}}function Wx(n,e,t,i){var r=it,s=Ls.transition;Ls.transition=null;try{it=4,zd(n,e,t,i)}finally{it=r,Ls.transition=s}}function zd(n,e,t,i){if(jl){var r=lh(n,e,t,i);if(r===null)$c(n,e,i,Wl,t),cp(n,i);else if(Vx(r,n,e,t,i))i.stopPropagation();else if(cp(n,i),e&4&&-1<Hx.indexOf(n)){for(;r!==null;){var s=ya(r);if(s!==null&&v_(s),s=lh(n,e,t,i),s===null&&$c(n,e,i,Wl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(n,e,i,null,t)}}var Wl=null;function lh(n,e,t,i){if(Wl=null,n=Fd(i),n=Ur(n),n!==null)if(e=$r(n),e===null)n=null;else if(t=e.tag,t===13){if(n=u_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Wl=n,null}function E_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lx()){case Od:return 1;case p_:return 4;case Vl:case Dx:return 16;case m_:return 536870912;default:return 16}default:return 16}}var nr=null,Hd=null,El=null;function T_(){if(El)return El;var n,e=Hd,t=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return El=r.slice(n,1<i?1-i:void 0)}function Tl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Fa(){return!0}function hp(){return!1}function En(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:hp,this.isPropagationStopped=hp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=En(so),xa=xt({},so,{view:0,detail:0}),Xx=En(xa),Hc,Vc,vo,mc=xt({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(Hc=n.screenX-vo.screenX,Vc=n.screenY-vo.screenY):Vc=Hc=0,vo=n),Hc)},movementY:function(n){return"movementY"in n?n.movementY:Vc}}),dp=En(mc),qx=xt({},mc,{dataTransfer:0}),Yx=En(qx),Kx=xt({},xa,{relatedTarget:0}),Gc=En(Kx),$x=xt({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=En($x),Qx=xt({},so,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Jx=En(Qx),ey=xt({},so,{data:0}),fp=En(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=iy[n])?!!e[n]:!1}function Gd(){return ry}var sy=xt({},xa,{key:function(n){if(n.key){var e=ty[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ny[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(n){return n.type==="keypress"?Tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),oy=En(sy),ay=xt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=En(ay),ly=xt({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),cy=En(ly),uy=xt({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=En(uy),dy=xt({},mc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=En(dy),py=[9,13,27,32],jd=Li&&"CompositionEvent"in window,zo=null;Li&&"documentMode"in document&&(zo=document.documentMode);var my=Li&&"TextEvent"in window&&!zo,w_=Li&&(!jd||zo&&8<zo&&11>=zo),mp=" ",gp=!1;function A_(n,e){switch(n){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function gy(n,e){switch(n){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return n=e.data,n===mp&&gp?null:n;default:return null}}function _y(n,e){if(_s)return n==="compositionend"||!jd&&A_(n,e)?(n=T_(),El=Hd=nr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vy[n.type]:e==="textarea"}function b_(n,e,t,i){s_(i),e=Xl(e,"onChange"),0<e.length&&(t=new Vd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ho=null,na=null;function xy(n){B_(n,0)}function gc(n){var e=ys(n);if(Qg(e))return n}function yy(n,e){if(n==="change")return e}var C_=!1;if(Li){var jc;if(Li){var Wc="oninput"in document;if(!Wc){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Wc=typeof vp.oninput=="function"}jc=Wc}else jc=!1;C_=jc&&(!document.documentMode||9<document.documentMode)}function xp(){Ho&&(Ho.detachEvent("onpropertychange",P_),na=Ho=null)}function P_(n){if(n.propertyName==="value"&&gc(na)){var e=[];b_(e,na,n,Fd(n)),c_(xy,e)}}function Sy(n,e,t){n==="focusin"?(xp(),Ho=e,na=t,Ho.attachEvent("onpropertychange",P_)):n==="focusout"&&xp()}function My(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(na)}function Ey(n,e){if(n==="click")return gc(e)}function Ty(n,e){if(n==="input"||n==="change")return gc(e)}function wy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:wy;function ia(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ju.call(e,r)||!$n(n[r],e[r]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sp(n,e){var t=yp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yp(t)}}function N_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?N_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var n=window,e=Bl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bl(n.document)}return e}function Wd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ay(n){var e=L_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&N_(t.ownerDocument.documentElement,t)){if(i!==null&&Wd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sp(t,s);var o=Sp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ry=Li&&"documentMode"in document&&11>=document.documentMode,vs=null,ch=null,Vo=null,uh=!1;function Mp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;uh||vs==null||vs!==Bl(i)||(i=vs,"selectionStart"in i&&Wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&ia(Vo,i)||(Vo=i,i=Xl(ch,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=vs)))}function Oa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var xs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Xc={},D_={};Li&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function _c(n){if(Xc[n])return Xc[n];if(!xs[n])return n;var e=xs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in D_)return Xc[n]=e[t];return n}var I_=_c("animationend"),U_=_c("animationiteration"),F_=_c("animationstart"),O_=_c("transitionend"),k_=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,e){k_.set(n,e),Kr(e,[n])}for(var qc=0;qc<Ep.length;qc++){var Yc=Ep[qc],by=Yc.toLowerCase(),Cy=Yc[0].toUpperCase()+Yc.slice(1);xr(by,"on"+Cy)}xr(I_,"onAnimationEnd");xr(U_,"onAnimationIteration");xr(F_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(O_,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Tp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,bx(i,e,void 0,n),n.currentTarget=null}function B_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}}}if(Hl)throw n=sh,Hl=!1,sh=null,n}function dt(n,e){var t=e[mh];t===void 0&&(t=e[mh]=new Set);var i=n+"__bubble";t.has(i)||(z_(e,n,2,!1),t.add(i))}function Kc(n,e,t){var i=0;e&&(i|=4),z_(t,n,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[ka]){n[ka]=!0,qg.forEach(function(t){t!=="selectionchange"&&(Py.has(t)||Kc(t,!1,n),Kc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ka]||(e[ka]=!0,Kc("selectionchange",!1,e))}}function z_(n,e,t,i){switch(E_(e)){case 1:var r=jx;break;case 4:r=Wx;break;default:r=zd}t=r.bind(null,e,t,n),r=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function $c(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c_(function(){var c=s,u=Fd(t),h=[];e:{var f=k_.get(n);if(f!==void 0){var p=Vd,g=n;switch(n){case"keypress":if(Tl(t)===0)break e;case"keydown":case"keyup":p=oy;break;case"focusin":g="focus",p=Gc;break;case"focusout":g="blur",p=Gc;break;case"beforeblur":case"afterblur":p=Gc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cy;break;case I_:case U_:case F_:p=Zx;break;case O_:p=hy;break;case"scroll":p=Xx;break;case"wheel":p=fy;break;case"copy":case"cut":case"paste":p=Jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pp}var v=(e&4)!==0,m=!v&&n==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=Qo(_,d),y!=null&&v.push(sa(_,y,x)))),m)break;_=_.return}0<v.length&&(f=new p(f,g,null,t,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==nh&&(g=t.relatedTarget||t.fromElement)&&(Ur(g)||g[Di]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Ur(g):null,g!==null&&(m=$r(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=dp,y="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=pp,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:ys(p),x=g==null?f:ys(g),f=new v(y,_+"leave",p,t,u),f.target=m,f.relatedTarget=x,y=null,Ur(u)===c&&(v=new v(d,_+"enter",g,t,u),v.target=x,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,d=g,_=0,x=v;x;x=Jr(x))_++;for(x=0,y=d;y;y=Jr(y))x++;for(;0<_-x;)v=Jr(v),_--;for(;0<x-_;)d=Jr(d),x--;for(;_--;){if(v===d||d!==null&&v===d.alternate)break t;v=Jr(v),d=Jr(d)}v=null}else v=null;p!==null&&wp(h,f,p,v,!1),g!==null&&m!==null&&wp(h,m,g,v,!0)}}e:{if(f=c?ys(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=yy;else if(_p(f))if(C_)C=Ty;else{C=My;var b=Sy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Ey);if(C&&(C=C(n,c))){b_(h,C,t,u);break e}b&&b(n,f,c),n==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Zu(f,"number",f.value)}switch(b=c?ys(c):window,n){case"focusin":(_p(b)||b.contentEditable==="true")&&(vs=b,ch=c,Vo=null);break;case"focusout":Vo=ch=vs=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Mp(h,t,u);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Mp(h,t,u)}var A;if(jd)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _s?A_(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(w_&&t.locale!=="ko"&&(_s||P!=="onCompositionStart"?P==="onCompositionEnd"&&_s&&(A=T_()):(nr=u,Hd="value"in nr?nr.value:nr.textContent,_s=!0)),b=Xl(c,P),0<b.length&&(P=new fp(P,n,null,t,u),h.push({event:P,listeners:b}),A?P.data=A:(A=R_(t),A!==null&&(P.data=A)))),(A=my?gy(n,t):_y(n,t))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(u=new fp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}B_(h,e)})}function sa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(n,t),s!=null&&i.unshift(sa(n,s,r)),s=Qo(n,e),s!=null&&i.push(sa(n,s,r))),n=n.return}return i}function Jr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(t,s),l!=null&&o.unshift(sa(t,l,a))):r||(l=Qo(t,s),l!=null&&o.push(sa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ny=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(Ny,`
`).replace(Ly,"")}function Ba(n,e,t){if(e=Ap(e),Ap(n)!==e&&t)throw Error(te(425))}function ql(){}var hh=null,dh=null;function fh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(Uy)}:ph;function Uy(n){setTimeout(function(){throw n})}function Zc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ta(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ta(e)}function cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function bp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),ti="__reactFiber$"+oo,oa="__reactProps$"+oo,Di="__reactContainer$"+oo,mh="__reactEvents$"+oo,Fy="__reactListeners$"+oo,Oy="__reactHandles$"+oo;function Ur(n){var e=n[ti];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Di]||t[ti]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=bp(n);n!==null;){if(t=n[ti])return t;n=bp(n)}return e}n=t,t=n.parentNode}return null}function ya(n){return n=n[ti]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function vc(n){return n[oa]||null}var gh=[],Ss=-1;function yr(n){return{current:n}}function ft(n){0>Ss||(n.current=gh[Ss],gh[Ss]=null,Ss--)}function lt(n,e){Ss++,gh[Ss]=n.current,n.current=e}var _r={},qt=yr(_r),cn=yr(!1),Vr=_r;function Hs(n,e){var t=n.type.contextTypes;if(!t)return _r;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function Yl(){ft(cn),ft(qt)}function Cp(n,e,t){if(qt.current!==_r)throw Error(te(168));lt(qt,e),lt(cn,t)}function H_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Sx(n)||"Unknown",r));return xt({},t,i)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Vr=qt.current,lt(qt,n),lt(cn,cn.current),!0}function Pp(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=H_(n,e,Vr),i.__reactInternalMemoizedMergedChildContext=n,ft(cn),ft(qt),lt(qt,n)):ft(cn),lt(cn,t)}var Ti=null,xc=!1,Qc=!1;function V_(n){Ti===null?Ti=[n]:Ti.push(n)}function ky(n){xc=!0,V_(n)}function Sr(){if(!Qc&&Ti!==null){Qc=!0;var n=0,e=it;try{var t=Ti;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,xc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),f_(Od,Sr),r}finally{it=e,Qc=!1}}return null}var Ms=[],Es=0,$l=null,Zl=0,bn=[],Cn=0,Gr=null,wi=1,Ai="";function Pr(n,e){Ms[Es++]=Zl,Ms[Es++]=$l,$l=n,Zl=e}function G_(n,e,t){bn[Cn++]=wi,bn[Cn++]=Ai,bn[Cn++]=Gr,Gr=n;var i=wi;n=Ai;var r=32-qn(i)-1;i&=~(1<<r),t+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-qn(e)+r|t<<r|i,Ai=s+n}else wi=1<<s|t<<r|i,Ai=n}function Xd(n){n.return!==null&&(Pr(n,1),G_(n,1,0))}function qd(n){for(;n===$l;)$l=Ms[--Es],Ms[Es]=null,Zl=Ms[--Es],Ms[Es]=null;for(;n===Gr;)Gr=bn[--Cn],bn[Cn]=null,Ai=bn[--Cn],bn[Cn]=null,wi=bn[--Cn],bn[Cn]=null}var yn=null,_n=null,pt=!1,Gn=null;function j_(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Np(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,_n=cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,_n=null,!0):!1;default:return!1}}function _h(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vh(n){if(pt){var e=_n;if(e){var t=e;if(!Np(n,e)){if(_h(n))throw Error(te(418));e=cr(t.nextSibling);var i=yn;e&&Np(n,e)?j_(i,t):(n.flags=n.flags&-4097|2,pt=!1,yn=n)}}else{if(_h(n))throw Error(te(418));n.flags=n.flags&-4097|2,pt=!1,yn=n}}}function Lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function za(n){if(n!==yn)return!1;if(!pt)return Lp(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!fh(n.type,n.memoizedProps)),e&&(e=_n)){if(_h(n))throw W_(),Error(te(418));for(;e;)j_(n,e),e=cr(e.nextSibling)}if(Lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){_n=cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}_n=null}}else _n=yn?cr(n.stateNode.nextSibling):null;return!0}function W_(){for(var n=_n;n;)n=cr(n.nextSibling)}function Vs(){_n=yn=null,pt=!1}function Yd(n){Gn===null?Gn=[n]:Gn.push(n)}var By=ki.ReactCurrentBatchConfig;function xo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ha(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Dp(n){var e=n._init;return e(n._payload)}function X_(n){function e(d,_){if(n){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=fr(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,_,x,y){return _===null||_.tag!==6?(_=su(x,d.mode,y),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,y){var C=x.type;return C===gs?u(d,_,x.props.children,y,x.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&Dp(C)===_.type)?(y=r(_,x.props),y.ref=xo(d,_,x),y.return=d,y):(y=Nl(x.type,x.key,x.props,null,d.mode,y),y.ref=xo(d,_,x),y.return=d,y)}function c(d,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=ou(x,d.mode,y),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function u(d,_,x,y,C){return _===null||_.tag!==7?(_=Hr(x,d.mode,y,C),_.return=d,_):(_=r(_,x),_.return=d,_)}function h(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=su(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return x=Nl(_.type,_.key,_.props,null,d.mode,x),x.ref=xo(d,null,_),x.return=d,x;case ms:return _=ou(_,d.mode,x),_.return=d,_;case $i:var y=_._init;return h(d,y(_._payload),x)}if(Lo(_)||po(_))return _=Hr(_,d.mode,x,null),_.return=d,_;Ha(d,_)}return null}function f(d,_,x,y){var C=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:return x.key===C?l(d,_,x,y):null;case ms:return x.key===C?c(d,_,x,y):null;case $i:return C=x._init,f(d,_,C(x._payload),y)}if(Lo(x)||po(x))return C!==null?null:u(d,_,x,y,null);Ha(d,x)}return null}function p(d,_,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(_,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:return d=d.get(y.key===null?x:y.key)||null,l(_,d,y,C);case ms:return d=d.get(y.key===null?x:y.key)||null,c(_,d,y,C);case $i:var b=y._init;return p(d,_,x,b(y._payload),C)}if(Lo(y)||po(y))return d=d.get(x)||null,u(_,d,y,C,null);Ha(_,y)}return null}function g(d,_,x,y){for(var C=null,b=null,A=_,P=_=0,w=null;A!==null&&P<x.length;P++){A.index>P?(w=A,A=null):w=A.sibling;var E=f(d,A,x[P],y);if(E===null){A===null&&(A=w);break}n&&A&&E.alternate===null&&e(d,A),_=s(E,_,P),b===null?C=E:b.sibling=E,b=E,A=w}if(P===x.length)return t(d,A),pt&&Pr(d,P),C;if(A===null){for(;P<x.length;P++)A=h(d,x[P],y),A!==null&&(_=s(A,_,P),b===null?C=A:b.sibling=A,b=A);return pt&&Pr(d,P),C}for(A=i(d,A);P<x.length;P++)w=p(A,d,P,x[P],y),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?P:w.key),_=s(w,_,P),b===null?C=w:b.sibling=w,b=w);return n&&A.forEach(function(N){return e(d,N)}),pt&&Pr(d,P),C}function v(d,_,x,y){var C=po(x);if(typeof C!="function")throw Error(te(150));if(x=C.call(x),x==null)throw Error(te(151));for(var b=C=null,A=_,P=_=0,w=null,E=x.next();A!==null&&!E.done;P++,E=x.next()){A.index>P?(w=A,A=null):w=A.sibling;var N=f(d,A,E.value,y);if(N===null){A===null&&(A=w);break}n&&A&&N.alternate===null&&e(d,A),_=s(N,_,P),b===null?C=N:b.sibling=N,b=N,A=w}if(E.done)return t(d,A),pt&&Pr(d,P),C;if(A===null){for(;!E.done;P++,E=x.next())E=h(d,E.value,y),E!==null&&(_=s(E,_,P),b===null?C=E:b.sibling=E,b=E);return pt&&Pr(d,P),C}for(A=i(d,A);!E.done;P++,E=x.next())E=p(A,d,P,E.value,y),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?P:E.key),_=s(E,_,P),b===null?C=E:b.sibling=E,b=E);return n&&A.forEach(function(j){return e(d,j)}),pt&&Pr(d,P),C}function m(d,_,x,y){if(typeof x=="object"&&x!==null&&x.type===gs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:e:{for(var C=x.key,b=_;b!==null;){if(b.key===C){if(C=x.type,C===gs){if(b.tag===7){t(d,b.sibling),_=r(b,x.props.children),_.return=d,d=_;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&Dp(C)===b.type){t(d,b.sibling),_=r(b,x.props),_.ref=xo(d,b,x),_.return=d,d=_;break e}t(d,b);break}else e(d,b);b=b.sibling}x.type===gs?(_=Hr(x.props.children,d.mode,y,x.key),_.return=d,d=_):(y=Nl(x.type,x.key,x.props,null,d.mode,y),y.ref=xo(d,_,x),y.return=d,d=y)}return o(d);case ms:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=ou(x,d.mode,y),_.return=d,d=_}return o(d);case $i:return b=x._init,m(d,_,b(x._payload),y)}if(Lo(x))return g(d,_,x,y);if(po(x))return v(d,_,x,y);Ha(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,x),_.return=d,d=_):(t(d,_),_=su(x,d.mode,y),_.return=d,d=_),o(d)):t(d,_)}return m}var Gs=X_(!0),q_=X_(!1),Ql=yr(null),Jl=null,Ts=null,Kd=null;function $d(){Kd=Ts=Jl=null}function Zd(n){var e=Ql.current;ft(Ql),n._currentValue=e}function xh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ds(n,e){Jl=n,Kd=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ln=!0),n.firstContext=null)}function Dn(n){var e=n._currentValue;if(Kd!==n)if(n={context:n,memoizedValue:e,next:null},Ts===null){if(Jl===null)throw Error(te(308));Ts=n,Jl.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return e}var Fr=null;function Qd(n){Fr===null?Fr=[n]:Fr.push(n)}function Y_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Qd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ii(n,i)}function Ii(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Zi=!1;function Jd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(n,t)}return r=i.interleaved,r===null?(e.next=e,Qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(n,t)}function wl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kd(n,t)}}function Ip(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ec(n,e,t,i){var r=n.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(f=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=xt({},h,f);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,n.lanes=o,n.memoizedState=h}}function Up(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Sa={},ri=yr(Sa),aa=yr(Sa),la=yr(Sa);function Or(n){if(n===Sa)throw Error(te(174));return n}function ef(n,e){switch(lt(la,e),lt(aa,n),lt(ri,Sa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ju(e,n)}ft(ri),lt(ri,e)}function js(){ft(ri),ft(aa),ft(la)}function $_(n){Or(la.current);var e=Or(ri.current),t=Ju(e,n.type);e!==t&&(lt(aa,n),lt(ri,t))}function tf(n){aa.current===n&&(ft(ri),ft(aa))}var gt=yr(0);function tc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function nf(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Al=ki.ReactCurrentDispatcher,eu=ki.ReactCurrentBatchConfig,jr=0,_t=null,Rt=null,Lt=null,nc=!1,Go=!1,ca=0,zy=0;function Vt(){throw Error(te(321))}function rf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!$n(n[t],e[t]))return!1;return!0}function sf(n,e,t,i,r,s){if(jr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=n===null||n.memoizedState===null?jy:Wy,n=t(i,r),Go){s=0;do{if(Go=!1,ca=0,25<=s)throw Error(te(301));s+=1,Lt=Rt=null,e.updateQueue=null,Al.current=Xy,n=t(i,r)}while(Go)}if(Al.current=ic,e=Rt!==null&&Rt.next!==null,jr=0,Lt=Rt=_t=null,nc=!1,e)throw Error(te(300));return n}function of(){var n=ca!==0;return ca=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?_t.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function In(){if(Rt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=Lt===null?_t.memoizedState:Lt.next;if(e!==null)Lt=e,Rt=n;else{if(n===null)throw Error(te(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Lt===null?_t.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function ua(n,e){return typeof e=="function"?e(n):e}function tu(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,_t.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,Wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function nu(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Z_(){}function Q_(n,e){var t=_t,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,af(t0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(t.flags|=2048,ha(9,e0.bind(null,t,i,r,e),void 0,null),Dt===null)throw Error(te(349));jr&30||J_(t,e,r)}return r}function J_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function e0(n,e,t,i){e.value=t,e.getSnapshot=i,n0(e)&&i0(n)}function t0(n,e,t){return t(function(){n0(e)&&i0(n)})}function n0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!$n(n,t)}catch{return!0}}function i0(n){var e=Ii(n,1);e!==null&&Yn(e,n,1,-1)}function Fp(n){var e=Jn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},e.queue=n,n=n.dispatch=Gy.bind(null,_t,n),[e.memoizedState,n]}function ha(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function r0(){return In().memoizedState}function Rl(n,e,t,i){var r=Jn();_t.flags|=n,r.memoizedState=ha(1|e,t,void 0,i===void 0?null:i)}function yc(n,e,t,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&rf(i,o.deps)){r.memoizedState=ha(e,t,s,i);return}}_t.flags|=n,r.memoizedState=ha(1|e,t,s,i)}function Op(n,e){return Rl(8390656,8,n,e)}function af(n,e){return yc(2048,8,n,e)}function s0(n,e){return yc(4,2,n,e)}function o0(n,e){return yc(4,4,n,e)}function a0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function l0(n,e,t){return t=t!=null?t.concat([n]):null,yc(4,4,a0.bind(null,e,n),t)}function lf(){}function c0(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&rf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function u0(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&rf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function h0(n,e,t){return jr&21?($n(t,e)||(t=g_(),_t.lanes|=t,Wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ln=!0),n.memoizedState=t)}function Hy(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=eu.transition;eu.transition={};try{n(!1),e()}finally{it=t,eu.transition=i}}function d0(){return In().memoizedState}function Vy(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},f0(n))p0(e,t);else if(t=Y_(n,e,t,i),t!==null){var r=Qt();Yn(t,n,i,r),m0(t,e,i)}}function Gy(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(f0(n))p0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Y_(n,e,r,i),t!==null&&(r=Qt(),Yn(t,n,i,r),m0(t,e,i))}}function f0(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function p0(n,e){Go=nc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function m0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kd(n,t)}}var ic={readContext:Dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},jy={readContext:Dn,useCallback:function(n,e){return Jn().memoizedState=[n,e===void 0?null:e],n},useContext:Dn,useEffect:Op,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Rl(4194308,4,a0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Rl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Rl(4,2,n,e)},useMemo:function(n,e){var t=Jn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Jn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Vy.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=Jn();return n={current:n},e.memoizedState=n},useState:Fp,useDebugValue:lf,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=Fp(!1),e=n[0];return n=Hy.bind(null,n[1]),Jn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=Jn();if(pt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Dt===null)throw Error(te(349));jr&30||J_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Op(t0.bind(null,i,s,n),[n]),i.flags|=2048,ha(9,e0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Jn(),e=Dt.identifierPrefix;if(pt){var t=Ai,i=wi;t=(i&~(1<<32-qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ca++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=zy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Wy={readContext:Dn,useCallback:c0,useContext:Dn,useEffect:af,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:tu,useRef:r0,useState:function(){return tu(ua)},useDebugValue:lf,useDeferredValue:function(n){var e=In();return h0(e,Rt.memoizedState,n)},useTransition:function(){var n=tu(ua)[0],e=In().memoizedState;return[n,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:d0,unstable_isNewReconciler:!1},Xy={readContext:Dn,useCallback:c0,useContext:Dn,useEffect:af,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:nu,useRef:r0,useState:function(){return nu(ua)},useDebugValue:lf,useDeferredValue:function(n){var e=In();return Rt===null?e.memoizedState=n:h0(e,Rt.memoizedState,n)},useTransition:function(){var n=nu(ua)[0],e=In().memoizedState;return[n,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:d0,unstable_isNewReconciler:!1};function Hn(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function yh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sc={isMounted:function(n){return(n=n._reactInternals)?$r(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=dr(n),s=Ci(i,r);s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(Yn(e,n,r,i),wl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=dr(n),s=Ci(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(Yn(e,n,r,i),wl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Qt(),i=dr(n),r=Ci(t,i);r.tag=2,e!=null&&(r.callback=e),e=ur(n,r,i),e!==null&&(Yn(e,n,i,t),wl(e,n,i))}};function kp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(t,i)||!ia(r,s):!0}function g0(n,e,t){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=un(e)?Vr:qt.current,i=e.contextTypes,s=(i=i!=null)?Hs(n,r):_r),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sc.enqueueReplaceState(e,e.state,null)}function Sh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Jd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=un(e)?Vr:qt.current,r.context=Hs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),ec(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,e){try{var t="",i=e;do t+=yx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function iu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Mh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function _0(n,e,t){t=Ci(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sc||(sc=!0,Lh=i),Mh(n,e)},t}function v0(n,e,t){t=Ci(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Mh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Mh(n,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function zp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new qy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aS.bind(null,n,e,t),e.then(n,n))}function Hp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ci(-1,1),e.tag=2,ur(t,e,1))),t.lanes|=1),n)}var Yy=ki.ReactCurrentOwner,ln=!1;function $t(n,e,t,i){e.child=n===null?q_(e,null,t,i):Gs(e,n.child,t,i)}function Gp(n,e,t,i,r){t=t.render;var s=e.ref;return Ds(e,r),i=sf(n,e,t,i,s,r),t=of(),n!==null&&!ln?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ui(n,e,r)):(pt&&t&&Xd(e),e.flags|=1,$t(n,e,i,r),e.child)}function jp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,x0(n,e,s,i,r)):(n=Nl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ia,t(o,i)&&n.ref===e.ref)return Ui(n,e,r)}return e.flags|=1,n=fr(s,i),n.ref=e.ref,n.return=e,e.child=n}function x0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ia(s,i)&&n.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ln=!0);else return e.lanes=n.lanes,Ui(n,e,r)}return Eh(n,e,t,i,r)}function y0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(As,gn),gn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(As,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(As,gn),gn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(As,gn),gn|=i;return $t(n,e,r,t),e.child}function S0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Eh(n,e,t,i,r){var s=un(t)?Vr:qt.current;return s=Hs(e,s),Ds(e,r),t=sf(n,e,t,i,s,r),i=of(),n!==null&&!ln?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ui(n,e,r)):(pt&&i&&Xd(e),e.flags|=1,$t(n,e,t,r),e.child)}function Wp(n,e,t,i,r){if(un(t)){var s=!0;Kl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)bl(n,e),g0(e,t,i),Sh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=un(t)?Vr:qt.current,c=Hs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bp(e,o,i,c),Zi=!1;var f=e.memoizedState;o.state=f,ec(e,i,o,r),l=e.memoizedState,a!==i||f!==l||cn.current||Zi?(typeof u=="function"&&(yh(e,t,u,i),l=e.memoizedState),(a=Zi||kp(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,K_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(t)?Vr:qt.current,l=Hs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Bp(e,o,i,l),Zi=!1,f=e.memoizedState,o.state=f,ec(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||cn.current||Zi?(typeof p=="function"&&(yh(e,t,p,i),g=e.memoizedState),(c=Zi||kp(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Th(n,e,t,i,s,r)}function Th(n,e,t,i,r,s){S0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pp(e,t,!1),Ui(n,e,s);i=e.stateNode,Yy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Gs(e,n.child,null,s),e.child=Gs(e,null,a,s)):$t(n,e,a,s),e.memoizedState=i.state,r&&Pp(e,t,!0),e.child}function M0(n){var e=n.stateNode;e.pendingContext?Cp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Cp(n,e.context,!1),ef(n,e.containerInfo)}function Xp(n,e,t,i,r){return Vs(),Yd(r),e.flags|=256,$t(n,e,t,i),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Ah(n){return{baseLanes:n,cachePool:null,transitions:null}}function E0(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(gt,r&1),n===null)return vh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,i,0,null),n=Hr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ah(t),e.memoizedState=wh,n):cf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ky(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Hr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ah(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=wh,i}return s=n.child,n=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function cf(n,e){return e=Tc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Va(n,e,t,i){return i!==null&&Yd(i),Gs(e,n.child,null,t),n=cf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ky(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=iu(Error(te(422))),Va(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,n.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=wh,s);if(!(e.mode&1))return Va(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=iu(s,i,void 0),Va(n,e,o,i)}if(a=(o&n.childLanes)!==0,ln||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(n,r),Yn(i,n,r,-1))}return mf(),i=iu(Error(te(421))),Va(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,_n=cr(r.nextSibling),yn=e,pt=!0,Gn=null,n!==null&&(bn[Cn++]=wi,bn[Cn++]=Ai,bn[Cn++]=Gr,wi=n.id,Ai=n.overflow,Gr=e),e=cf(e,i.children),e.flags|=4096,e)}function qp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),xh(n.return,e,t)}function ru(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function T0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qp(n,t,e);else if(n.tag===19)qp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&tc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ru(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&tc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ru(e,!0,t,null,s);break;case"together":ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ui(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=fr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=fr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function $y(n,e,t){switch(e.tag){case 3:M0(e),Vs();break;case 5:$_(e);break;case 1:un(e.type)&&Kl(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?E0(n,e,t):(lt(gt,gt.current&1),n=Ui(n,e,t),n!==null?n.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return T0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,y0(n,e,t)}return Ui(n,e,t)}var w0,Rh,A0,R0;w0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rh=function(){};A0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Or(ri.current);var s=null;switch(t){case"input":r=Ku(n,r),i=Ku(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Qu(n,r),i=Qu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ql)}eh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};R0=function(n,e,t,i){t!==i&&(e.flags|=4)};function yo(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Zy(n,e,t){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return un(e.type)&&Yl(),Gt(e),null;case 3:return i=e.stateNode,js(),ft(cn),ft(qt),nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(za(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Uh(Gn),Gn=null))),Rh(n,e),Gt(e),null;case 5:tf(e);var r=Or(la.current);if(t=e.type,n!==null&&e.stateNode!=null)A0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Gt(e),null}if(n=Or(ri.current),za(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[oa]=s,n=(e.mode&1)!==0,t){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Io.length;r++)dt(Io[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":np(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":rp(i,s),dt("invalid",i)}eh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,n),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(t){case"input":Na(i),ip(i,s,!0);break;case"textarea":Na(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=t_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ti]=e,n[oa]=i,w0(n,e,!1,!1),e.stateNode=n;e:{switch(o=th(t,i),t){case"dialog":dt("cancel",n),dt("close",n),r=i;break;case"iframe":case"object":case"embed":dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Io.length;r++)dt(Io[r],n);r=i;break;case"source":dt("error",n),r=i;break;case"img":case"image":case"link":dt("error",n),dt("load",n),r=i;break;case"details":dt("toggle",n),r=i;break;case"input":np(n,i),r=Ku(n,i),dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),dt("invalid",n);break;case"textarea":rp(n,i),r=Qu(n,i),dt("invalid",n);break;default:r=i}eh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Zo(n,l):typeof l=="number"&&Zo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",n):l!=null&&Ld(n,s,l,o))}switch(t){case"input":Na(n),ip(n,i,!1);break;case"textarea":Na(n),sp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+gr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Cs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ql)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(n&&e.stateNode!=null)R0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Or(la.current),Or(ri.current),za(e)){if(i=e.stateNode,t=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:Ba(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Gt(e),null;case 13:if(ft(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))W_(),Vs(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ti]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Gn!==null&&(Uh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?bt===0&&(bt=3):mf())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return js(),Rh(n,e),n===null&&ra(e.stateNode.containerInfo),Gt(e),null;case 10:return Zd(e.type._context),Gt(e),null;case 17:return un(e.type)&&Yl(),Gt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yo(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=tc(n),o!==null){for(e.flags|=128,yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Xs&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=tc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Gt(e),null}else 2*Et()-s.renderingStartTime>Xs&&t!==1073741824&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=gt.current,lt(gt,i?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return pf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Qy(n,e){switch(qd(e),e.tag){case 1:return un(e.type)&&Yl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return js(),ft(cn),ft(qt),nf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return tf(e),null;case 13:if(ft(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Vs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ft(gt),null;case 4:return js(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Ga=!1,Xt=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ws(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function bh(n,e,t){try{t()}catch(i){St(n,e,i)}}var Yp=!1;function eS(n,e){if(hh=jl,n=L_(),Wd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(dh={focusedElem:n,selectionRange:t},jl=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){St(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return g=Yp,Yp=!1,g}function jo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&bh(e,t,s)}r=r.next}while(r!==i)}}function Mc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ch(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function b0(n){var e=n.alternate;e!==null&&(n.alternate=null,b0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ti],delete e[oa],delete e[mh],delete e[Fy],delete e[Oy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function C0(n){return n.tag===5||n.tag===3||n.tag===4}function Kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||C0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(n=n.child,n!==null))for(Ph(n,e,t),n=n.sibling;n!==null;)Ph(n,e,t),n=n.sibling}function Nh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Nh(n,e,t),n=n.sibling;n!==null;)Nh(n,e,t),n=n.sibling}var Ut=null,Vn=!1;function Vi(n,e,t){for(t=t.child;t!==null;)P0(n,e,t),t=t.sibling}function P0(n,e,t){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(pc,t)}catch{}switch(t.tag){case 5:Xt||ws(t,e);case 6:var i=Ut,r=Vn;Ut=null,Vi(n,e,t),Ut=i,Vn=r,Ut!==null&&(Vn?(n=Ut,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ut.removeChild(t.stateNode));break;case 18:Ut!==null&&(Vn?(n=Ut,t=t.stateNode,n.nodeType===8?Zc(n.parentNode,t):n.nodeType===1&&Zc(n,t),ta(n)):Zc(Ut,t.stateNode));break;case 4:i=Ut,r=Vn,Ut=t.stateNode.containerInfo,Vn=!0,Vi(n,e,t),Ut=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(t,e,o),r=r.next}while(r!==i)}Vi(n,e,t);break;case 1:if(!Xt&&(ws(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}Vi(n,e,t);break;case 21:Vi(n,e,t);break;case 22:t.mode&1?(Xt=(i=Xt)||t.memoizedState!==null,Vi(n,e,t),Xt=i):Vi(n,e,t);break;default:Vi(n,e,t)}}function $p(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Jy),e.forEach(function(i){var r=cS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function On(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Vn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ut===null)throw Error(te(160));P0(s,o,r),Ut=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,n),e=e.sibling}function N0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(e,n),Qn(n),i&4){try{jo(3,n,n.return),Mc(3,n)}catch(v){St(n,n.return,v)}try{jo(5,n,n.return)}catch(v){St(n,n.return,v)}}break;case 1:On(e,n),Qn(n),i&512&&t!==null&&ws(t,t.return);break;case 5:if(On(e,n),Qn(n),i&512&&t!==null&&ws(t,t.return),n.flags&32){var r=n.stateNode;try{Zo(r,"")}catch(v){St(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),th(a,o);var c=th(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?r_(r,h):u==="dangerouslySetInnerHTML"?n_(r,h):u==="children"?Zo(r,h):Ld(r,u,h,c)}switch(a){case"input":$u(r,s);break;case"textarea":e_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(v){St(n,n.return,v)}}break;case 6:if(On(e,n),Qn(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){St(n,n.return,v)}}break;case 3:if(On(e,n),Qn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(v){St(n,n.return,v)}break;case 4:On(e,n),Qn(n);break;case 13:On(e,n),Qn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(df=Et())),i&4&&$p(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Xt=(c=Xt)||u,On(e,n),Xt=c):On(e,n),Qn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(fe=n,u=n.child;u!==null;){for(h=fe=u;fe!==null;){switch(f=fe,p=f.child,f.tag){case 0:case 11:case 14:case 15:jo(4,f,f.return);break;case 1:ws(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){St(i,t,v)}}break;case 5:ws(f,f.return);break;case 22:if(f.memoizedState!==null){Qp(h);continue}}p!==null?(p.return=f,fe=p):Qp(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i_("display",o))}catch(v){St(n,n.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){St(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:On(e,n),Qn(n),i&4&&$p(n);break;case 21:break;default:On(e,n),Qn(n)}}function Qn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(C0(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=Kp(n);Nh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kp(n);Ph(n,a,o);break;default:throw Error(te(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tS(n,e,t){fe=n,L0(n)}function L0(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Ga;var c=Xt;if(Ga=o,(Xt=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Jp(r):l!==null?(l.return=o,fe=l):Jp(r);for(;s!==null;)fe=s,L0(s),s=s.sibling;fe=r,Ga=a,Xt=c}Zp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Zp(n)}}function Zp(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Hn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Up(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&Ch(e)}catch(f){St(e,e.return,f)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Qp(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Jp(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Mc(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var nS=Math.ceil,rc=ki.ReactCurrentDispatcher,uf=ki.ReactCurrentOwner,Ln=ki.ReactCurrentBatchConfig,Ye=0,Dt=null,wt=null,Bt=0,gn=0,As=yr(0),bt=0,da=null,Wr=0,Ec=0,hf=0,Wo=null,an=null,df=0,Xs=1/0,Mi=null,sc=!1,Lh=null,hr=null,ja=!1,ir=null,oc=0,Xo=0,Dh=null,Cl=-1,Pl=0;function Qt(){return Ye&6?Et():Cl!==-1?Cl:Cl=Et()}function dr(n){return n.mode&1?Ye&2&&Bt!==0?Bt&-Bt:By.transition!==null?(Pl===0&&(Pl=g_()),Pl):(n=it,n!==0||(n=window.event,n=n===void 0?16:E_(n.type)),n):1}function Yn(n,e,t,i){if(50<Xo)throw Xo=0,Dh=null,Error(te(185));va(n,t,i),(!(Ye&2)||n!==Dt)&&(n===Dt&&(!(Ye&2)&&(Ec|=t),bt===4&&er(n,Bt)),hn(n,i),t===1&&Ye===0&&!(e.mode&1)&&(Xs=Et()+500,xc&&Sr()))}function hn(n,e){var t=n.callbackNode;Bx(n,e);var i=Gl(n,n===Dt?Bt:0);if(i===0)t!==null&&lp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&lp(t),e===1)n.tag===0?ky(em.bind(null,n)):V_(em.bind(null,n)),Iy(function(){!(Ye&6)&&Sr()}),t=null;else{switch(__(i)){case 1:t=Od;break;case 4:t=p_;break;case 16:t=Vl;break;case 536870912:t=m_;break;default:t=Vl}t=z0(t,D0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function D0(n,e){if(Cl=-1,Pl=0,Ye&6)throw Error(te(327));var t=n.callbackNode;if(Is()&&n.callbackNode!==t)return null;var i=Gl(n,n===Dt?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ac(n,i);else{e=i;var r=Ye;Ye|=2;var s=U0();(Dt!==n||Bt!==e)&&(Mi=null,Xs=Et()+500,zr(n,e));do try{sS();break}catch(a){I0(n,a)}while(!0);$d(),rc.current=s,Ye=r,wt!==null?e=0:(Dt=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=oh(n),r!==0&&(i=r,e=Ih(n,r))),e===1)throw t=da,zr(n,0),er(n,i),hn(n,Et()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,!(i&30)&&!iS(r)&&(e=ac(n,i),e===2&&(s=oh(n),s!==0&&(i=s,e=Ih(n,s))),e===1))throw t=da,zr(n,0),er(n,i),hn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Nr(n,an,Mi);break;case 3:if(er(n,i),(i&130023424)===i&&(e=df+500-Et(),10<e)){if(Gl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Qt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ph(Nr.bind(null,n,an,Mi),e);break}Nr(n,an,Mi);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){n.timeoutHandle=ph(Nr.bind(null,n,an,Mi),i);break}Nr(n,an,Mi);break;case 5:Nr(n,an,Mi);break;default:throw Error(te(329))}}}return hn(n,Et()),n.callbackNode===t?D0.bind(null,n):null}function Ih(n,e){var t=Wo;return n.current.memoizedState.isDehydrated&&(zr(n,e).flags|=256),n=ac(n,e),n!==2&&(e=an,an=t,e!==null&&Uh(e)),n}function Uh(n){an===null?an=n:an.push.apply(an,n)}function iS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~hf,e&=~Ec,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-qn(e),i=1<<t;n[t]=-1,e&=~i}}function em(n){if(Ye&6)throw Error(te(327));Is();var e=Gl(n,0);if(!(e&1))return hn(n,Et()),null;var t=ac(n,e);if(n.tag!==0&&t===2){var i=oh(n);i!==0&&(e=i,t=Ih(n,i))}if(t===1)throw t=da,zr(n,0),er(n,e),hn(n,Et()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Nr(n,an,Mi),hn(n,Et()),null}function ff(n,e){var t=Ye;Ye|=1;try{return n(e)}finally{Ye=t,Ye===0&&(Xs=Et()+500,xc&&Sr())}}function Xr(n){ir!==null&&ir.tag===0&&!(Ye&6)&&Is();var e=Ye;Ye|=1;var t=Ln.transition,i=it;try{if(Ln.transition=null,it=1,n)return n()}finally{it=i,Ln.transition=t,Ye=e,!(Ye&6)&&Sr()}}function pf(){gn=As.current,ft(As)}function zr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Dy(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:js(),ft(cn),ft(qt),nf();break;case 5:tf(i);break;case 4:js();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Zd(i.type._context);break;case 22:case 23:pf()}t=t.return}if(Dt=n,wt=n=fr(n.current,null),Bt=gn=e,bt=0,da=null,hf=Ec=Wr=0,an=Wo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(t=Fr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Fr=null}return n}function I0(n,e){do{var t=wt;try{if($d(),Al.current=ic,nc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(jr=0,Lt=Rt=_t=null,Go=!1,ca=0,uf.current=null,t===null||t.return===null){bt=1,da=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hp(o);if(p!==null){p.flags&=-257,Vp(p,o,a,s,e),p.mode&1&&zp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){zp(s,c,e),mf();break e}l=Error(te(426))}}else if(pt&&a.mode&1){var m=Hp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vp(m,o,a,s,e),Yd(Ws(l,a));break e}}s=l=Ws(l,a),bt!==4&&(bt=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=_0(s,l,e);Ip(s,d);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(hr===null||!hr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=v0(s,a,e);Ip(s,y);break e}}s=s.return}while(s!==null)}O0(t)}catch(C){e=C,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function U0(){var n=rc.current;return rc.current=ic,n===null?ic:n}function mf(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||!(Wr&268435455)&&!(Ec&268435455)||er(Dt,Bt)}function ac(n,e){var t=Ye;Ye|=2;var i=U0();(Dt!==n||Bt!==e)&&(Mi=null,zr(n,e));do try{rS();break}catch(r){I0(n,r)}while(!0);if($d(),Ye=t,rc.current=i,wt!==null)throw Error(te(261));return Dt=null,Bt=0,bt}function rS(){for(;wt!==null;)F0(wt)}function sS(){for(;wt!==null&&!Px();)F0(wt)}function F0(n){var e=B0(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?O0(n):wt=e,uf.current=null}function O0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Qy(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=Zy(t,e,gn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Nr(n,e,t){var i=it,r=Ln.transition;try{Ln.transition=null,it=1,oS(n,e,t,i)}finally{Ln.transition=r,it=i}return null}function oS(n,e,t,i){do Is();while(ir!==null);if(Ye&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(zx(n,s),n===Dt&&(wt=Dt=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ja||(ja=!0,z0(Vl,function(){return Is(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=it;it=1;var a=Ye;Ye|=4,uf.current=null,eS(n,t),N0(t,n),Ay(dh),jl=!!hh,dh=hh=null,n.current=t,tS(t),Nx(),Ye=a,it=o,Ln.transition=s}else n.current=t;if(ja&&(ja=!1,ir=n,oc=r),s=n.pendingLanes,s===0&&(hr=null),Ix(t.stateNode),hn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,n=Lh,Lh=null,n;return oc&1&&n.tag!==0&&Is(),s=n.pendingLanes,s&1?n===Dh?Xo++:(Xo=0,Dh=n):Xo=0,Sr(),null}function Is(){if(ir!==null){var n=__(oc),e=Ln.transition,t=it;try{if(Ln.transition=null,it=16>n?16:n,ir===null)var i=!1;else{if(n=ir,ir=null,oc=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:jo(8,u,s)}var h=u.child;if(h!==null)h.return=u,fe=h;else for(;fe!==null;){u=fe;var f=u.sibling,p=u.return;if(b0(u),u===c){fe=null;break}if(f!==null){f.return=p,fe=f;break}fe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,fe=d;break e}fe=s.return}}var _=n.current;for(fe=_;fe!==null;){o=fe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,fe=x;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(C){St(a,a.return,C)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(Ye=r,Sr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(pc,n)}catch{}i=!0}return i}finally{it=t,Ln.transition=e}}return!1}function tm(n,e,t){e=Ws(t,e),e=_0(n,e,1),n=ur(n,e,1),e=Qt(),n!==null&&(va(n,1,e),hn(n,e))}function St(n,e,t){if(n.tag===3)tm(n,n,t);else for(;e!==null;){if(e.tag===3){tm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){n=Ws(t,n),n=v0(e,n,1),e=ur(e,n,1),n=Qt(),e!==null&&(va(e,1,n),hn(e,n));break}}e=e.return}}function aS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Qt(),n.pingedLanes|=n.suspendedLanes&t,Dt===n&&(Bt&t)===t&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>Et()-df?zr(n,0):hf|=t),hn(n,e)}function k0(n,e){e===0&&(n.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var t=Qt();n=Ii(n,e),n!==null&&(va(n,e,t),hn(n,t))}function lS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),k0(n,t)}function cS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),k0(n,t)}var B0;B0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ln=!1,$y(n,e,t);ln=!!(n.flags&131072)}else ln=!1,pt&&e.flags&1048576&&G_(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(n,e),n=e.pendingProps;var r=Hs(e,qt.current);Ds(e,t),r=sf(null,e,i,n,r,t);var s=of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jd(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,Sh(e,i,n,t),e=Th(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&Xd(e),$t(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hS(i),n=Hn(i,n),r){case 0:e=Eh(null,e,i,n,t);break e;case 1:e=Wp(null,e,i,n,t);break e;case 11:e=Gp(null,e,i,n,t);break e;case 14:e=jp(null,e,i,Hn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Eh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Wp(n,e,i,r,t);case 3:e:{if(M0(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K_(n,e),ec(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(te(423)),e),e=Xp(n,e,i,t,r);break e}else if(i!==r){r=Ws(Error(te(424)),e),e=Xp(n,e,i,t,r);break e}else for(_n=cr(e.stateNode.containerInfo.firstChild),yn=e,pt=!0,Gn=null,t=q_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vs(),i===r){e=Ui(n,e,t);break e}$t(n,e,i,t)}e=e.child}return e;case 5:return $_(e),n===null&&vh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,fh(i,r)?o=null:s!==null&&fh(i,s)&&(e.flags|=32),S0(n,e),$t(n,e,o,t),e.child;case 6:return n===null&&vh(e),null;case 13:return E0(n,e,t);case 4:return ef(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Gs(e,null,i,t):$t(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Gp(n,e,i,r,t);case 7:return $t(n,e,e.pendingProps,t),e.child;case 8:return $t(n,e,e.pendingProps.children,t),e.child;case 12:return $t(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Ql,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!cn.current){e=Ui(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),xh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),xh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,t),r=Dn(r),i=i(r),e.flags|=1,$t(n,e,i,t),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),jp(n,e,i,r,t);case 15:return x0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),bl(n,e),e.tag=1,un(i)?(n=!0,Kl(e)):n=!1,Ds(e,t),g0(e,i,r),Sh(e,i,r,t),Th(null,e,i,!0,n,t);case 19:return T0(n,e,t);case 22:return y0(n,e,t)}throw Error(te(156,e.tag))};function z0(n,e){return f_(n,e)}function uS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,i){return new uS(n,e,t,i)}function gf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hS(n){if(typeof n=="function")return gf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Id)return 11;if(n===Ud)return 14}return 2}function fr(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Nl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")gf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case gs:return Hr(t.children,r,s,e);case Dd:o=8,r|=8;break;case Wu:return n=Pn(12,t,e,r|2),n.elementType=Wu,n.lanes=s,n;case Xu:return n=Pn(13,t,e,r),n.elementType=Xu,n.lanes=s,n;case qu:return n=Pn(19,t,e,r),n.elementType=qu,n.lanes=s,n;case $g:return Tc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Yg:o=10;break e;case Kg:o=9;break e;case Id:o=11;break e;case Ud:o=14;break e;case $i:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Pn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Hr(n,e,t,i){return n=Pn(7,n,i,e),n.lanes=t,n}function Tc(n,e,t,i){return n=Pn(22,n,i,e),n.elementType=$g,n.lanes=t,n.stateNode={isHidden:!1},n}function su(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function ou(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function dS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _f(n,e,t,i,r,s,o,a,l){return n=new dS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(s),n}function fS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function H0(n){if(!n)return _r;n=n._reactInternals;e:{if($r(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(un(t))return H_(n,t,e)}return e}function V0(n,e,t,i,r,s,o,a,l){return n=_f(t,i,!0,n,r,s,o,a,l),n.context=H0(null),t=n.current,i=Qt(),r=dr(t),s=Ci(i,r),s.callback=e??null,ur(t,s,r),n.current.lanes=r,va(n,r,i),hn(n,i),n}function wc(n,e,t,i){var r=e.current,s=Qt(),o=dr(r);return t=H0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ci(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ur(r,e,o),n!==null&&(Yn(n,r,o,s),wl(n,r,o)),o}function lc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function vf(n,e){nm(n,e),(n=n.alternate)&&nm(n,e)}function pS(){return null}var G0=typeof reportError=="function"?reportError:function(n){console.error(n)};function xf(n){this._internalRoot=n}Ac.prototype.render=xf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));wc(n,e,null,null)};Ac.prototype.unmount=xf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Xr(function(){wc(null,n,null,null)}),e[Di]=null}};function Ac(n){this._internalRoot=n}Ac.prototype.unstable_scheduleHydration=function(n){if(n){var e=y_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ji.length&&e!==0&&e<Ji[t].priority;t++);Ji.splice(t,0,n),t===0&&M_(n)}};function yf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function im(){}function mS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=V0(e,i,n,0,null,!1,!1,"",im);return n._reactRootContainer=o,n[Di]=o.current,ra(n.nodeType===8?n.parentNode:n),Xr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=_f(n,0,!1,null,null,!1,!1,"",im);return n._reactRootContainer=l,n[Di]=l.current,ra(n.nodeType===8?n.parentNode:n),Xr(function(){wc(e,l,t,i)}),l}function bc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}wc(e,o,n,r)}else o=mS(t,e,n,r,i);return lc(o)}v_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Do(e.pendingLanes);t!==0&&(kd(e,t|1),hn(e,Et()),!(Ye&6)&&(Xs=Et()+500,Sr()))}break;case 13:Xr(function(){var i=Ii(n,1);if(i!==null){var r=Qt();Yn(i,n,1,r)}}),vf(n,1)}};Bd=function(n){if(n.tag===13){var e=Ii(n,134217728);if(e!==null){var t=Qt();Yn(e,n,134217728,t)}vf(n,134217728)}};x_=function(n){if(n.tag===13){var e=dr(n),t=Ii(n,e);if(t!==null){var i=Qt();Yn(t,n,e,i)}vf(n,e)}};y_=function(){return it};S_=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};ih=function(n,e,t){switch(e){case"input":if($u(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vc(i);if(!r)throw Error(te(90));Qg(i),$u(i,r)}}}break;case"textarea":e_(n,t);break;case"select":e=t.value,e!=null&&Cs(n,!!t.multiple,e,!1)}};a_=ff;l_=Xr;var gS={usingClientEntryPoint:!1,Events:[ya,ys,vc,s_,o_,ff]},So={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=h_(n),n===null?null:n.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{pc=Wa.inject(_S),ii=Wa}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(te(200));return fS(n,e,null,t)};Mn.createRoot=function(n,e){if(!yf(n))throw Error(te(299));var t=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_f(n,1,!1,null,null,t,!1,i,r),n[Di]=e.current,ra(n.nodeType===8?n.parentNode:n),new xf(e)};Mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=h_(e),n=n===null?null:n.stateNode,n};Mn.flushSync=function(n){return Xr(n)};Mn.hydrate=function(n,e,t){if(!Rc(e))throw Error(te(200));return bc(null,n,e,!0,t)};Mn.hydrateRoot=function(n,e,t){if(!yf(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=G0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=V0(e,null,n,1,t??null,r,!1,s,o),n[Di]=e.current,ra(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ac(e)};Mn.render=function(n,e,t){if(!Rc(e))throw Error(te(200));return bc(null,n,e,!1,t)};Mn.unmountComponentAtNode=function(n){if(!Rc(n))throw Error(te(40));return n._reactRootContainer?(Xr(function(){bc(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1};Mn.unstable_batchedUpdates=ff;Mn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return bc(n,e,t,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(n){console.error(n)}}j0(),jg.exports=Mn;var vS=jg.exports,W0,rm=vS;W0=rm.createRoot,rm.hydrateRoot;const xS=()=>{window.addEventListener("scroll",function(){const r=document.querySelector(".header");this.scrollY>=80?r.classList.add("scroll-header"):r.classList.remove("scroll-header")});const[n,e]=oi.useState(!1),[t,i]=oi.useState("#home");return S.jsx("header",{className:"header",children:S.jsxs("nav",{className:"nav container",children:[S.jsx("a",{href:"index.html",className:"nav__logo",children:"Baouch"}),S.jsxs("div",{className:n?"nav__menu show-menu":"nav__menu",children:[S.jsxs("ul",{className:"nav__list grid",children:[S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#home",onClick:()=>i("#home"),className:t==="#home"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-estate nav__icon"}),"Home"]})}),S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#about",onClick:()=>i("#about"),className:t==="#about"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-user nav__icon"}),"About"]})}),S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#skills",onClick:()=>i("#skills"),className:t==="#skills"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-file-alt nav__icon"}),"Skills"]})}),S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#projects",onClick:()=>i("#projects"),className:t==="#projects"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-briefcase-alt nav__icon"}),"Projects"]})}),S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#qualifications",onClick:()=>i("#qualifications"),className:t==="#qualifications"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-scenery nav__icon"}),"Qualifications"]})}),S.jsx("li",{className:"nav__item",children:S.jsxs("a",{href:"#contact",onClick:()=>i("#contact"),className:t==="#contact"?"nav__link active-link":"nav__link",children:[S.jsx("i",{className:"uil uil-message nav__icon"}),"Contact"]})})]}),S.jsx("i",{className:"uil uil-times nav__close",onClick:()=>e(!n)})]}),S.jsx("div",{className:"nav__toggle",onClick:()=>e(!n),children:S.jsx("i",{className:"uil uil-apps"})})]})})},yS=()=>S.jsxs("div",{className:"home__social",children:[S.jsx("a",{href:"https://www.instagram.com/omar.baouch",className:"home__social-icon",target:"_blank",children:S.jsx("i",{className:"uil uil-instagram"})}),S.jsx("a",{href:"https://github.com/BAOUCH",className:"home__social-icon",target:"_blank",children:S.jsx("i",{className:"uil uil-github"})}),S.jsx("a",{href:"htts://www.linkedin.com/in/omar-baouch",className:"home__social-icon",target:"_blank",children:S.jsx("i",{className:"uil uil-linkedin"})})]}),SS=()=>S.jsxs("div",{className:"home__data",children:[S.jsx("h1",{className:"home__title",children:"BAOUCH Omar"}),S.jsx("h3",{className:"home__subtitle",children:"IGT Student"}),S.jsx("p",{className:"home__description",children:" Passionate about new geomatic technologies and spatial resource management"}),S.jsxs("a",{href:"#contact",className:"button button--flex",children:["Say Hello",S.jsxs("svg",{className:"button__icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[S.jsx("path",{d:"M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",fill:"var(--container-color)"}),S.jsx("path",{d:"M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",fill:"var(--container-color)"})]})]})]}),MS=()=>S.jsx("div",{className:"home__scroll",children:S.jsxs("a",{href:"#about",className:"home__scroll-button button--flex",children:[S.jsxs("svg",{width:"32px",height:"32px",className:"home__scroll-mouse",viewBox:"0 0 247 390",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},children:[S.jsx("path",{className:"wheel",d:"M123.359,79.775l0,72.843",style:{fill:"none",stroke:"var(--title-color)",strokeWidth:"20px"}}),S.jsx("path",{id:"mouse",d:"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",style:{fill:"none",stroke:"var(--title-color)",strokeWidth:"20px"}})]}),S.jsx("span",{className:"home__scroll-name",children:"Scroll Down"}),S.jsx("i",{className:"uil uil-arrow-down home__scroll-arrow"})]})}),ES=()=>S.jsx("section",{className:"home section",id:"home",children:S.jsxs("div",{className:"home__container container grid",children:[S.jsxs("div",{className:"home__content grid",children:[S.jsx(yS,{}),S.jsx("div",{className:"home__img"}),S.jsx(SS,{})]}),S.jsx(MS,{})]})}),TS="/%7Byour-repo-name%7D/assets/about-DaUdjPsF.jpg",wS="/%7Byour-repo-name%7D/assets/BAOUCH-CV-hXzJtVCI.pdf",AS=()=>S.jsxs("div",{className:"about__info grid",children:[S.jsxs("div",{className:"about__box",children:[S.jsx("i",{className:"bx bx-award about__icon"}),S.jsx("h3",{className:"about__title",children:"Experience"}),S.jsx("span",{className:"about__subtitle",children:"3 Internships"})]}),S.jsxs("div",{className:"about__box",children:[S.jsx("i",{className:"bx bx-briefcase-alt about__icon"}),S.jsx("h3",{className:"about__title",children:"Completed"}),S.jsx("span",{className:"about__subtitle",children:"4 Projects"})]}),S.jsxs("div",{className:"about__box",children:[S.jsx("i",{className:"bx bx-book-reader about__icon"}),S.jsx("h3",{className:"about__title",children:"Formation"}),S.jsx("span",{className:"about__subtitle",children:"1"})]})]}),RS=()=>S.jsxs("section",{className:"about section",id:"about",children:[S.jsx("h2",{className:"section__title",children:"About Me"}),S.jsx("span",{className:"section__subtitle",children:"My introduction"}),S.jsxs("div",{className:"about__container container grid",children:[S.jsx("img",{src:TS,alt:"",className:"about__img"}),S.jsxs("div",{className:"about__data",children:[S.jsx(AS,{}),S.jsx("p",{className:"about__description",children:"Currently, I am in the final year of the engineering cycle in geomatics and topographic engineering at the Hassan II Agronomic and Veterinary Institute in Rabat. Passionate about new geomatics technologies and spatial resource management, I wish to contribute to innovative and sustainable projects within a dynamic company."}),S.jsxs("a",{download:"",href:wS,className:"button button--flex",children:["Download CV",S.jsxs("svg",{className:"button__icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[S.jsx("path",{d:"M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",fill:"var(--container-color)"}),S.jsx("path",{d:"M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",fill:"var(--container-color)"}),S.jsx("path",{d:"M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",fill:"var(--container-color)"}),S.jsx("path",{d:"M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",fill:"var(--container-color)"})]})]})]})]})]}),bS=()=>{const[n,e]=oi.useState(1),t=i=>{e(i)};return S.jsxs("section",{className:"qualification section",id:"qualifications",children:[S.jsx("h2",{className:"section__title",children:"Studies & Internships"}),S.jsx("span",{className:"section__subtitle",children:"My professional timeline"}),S.jsxs("div",{className:"qualification__container container",children:[S.jsxs("div",{className:"qualification__tabs",children:[S.jsxs("div",{className:n===1?"qualification__button qualification__active button--flex":"qualification__button button--flex",onClick:()=>t(1),children:[S.jsx("i",{className:"uil uil-graduation-cap qualification__icon"})," "," "," Education"]}),S.jsxs("div",{className:n===2?"qualification__button qualification__active button--flex":"qualification__button button--flex",onClick:()=>t(2),children:[S.jsx("i",{className:"uil uil-briefcase-alt qualification__icon"})," "," "," Internships"]})]}),S.jsxs("div",{className:"qualification__sections",children:[S.jsxs("div",{className:n===1?"qualification__content qualification__content-active":"qualification__content",children:[S.jsxs("div",{className:"qualification__data",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Cycle d’ingénieur en Sciences Géomatiques et Ingénierie Topographique"}),S.jsx("span",{className:"qualification__subtitle",children:"IAV HASSAN II - Rabat"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," 2022 - Present"]})]}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]})]}),S.jsxs("div",{className:"qualification__data",children:[S.jsx("div",{}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Les classes préparatoires aux grandes écoles"}),S.jsx("span",{className:"qualification__subtitle",children:"CPGE Ibn Tahir - Errachidia"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," 2020 - 2022"]})]})]}),S.jsxs("div",{className:"qualification__data",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Baccalauréat Science Math A"}),S.jsx("span",{className:"qualification__subtitle",children:"Lycee Salah Eddin El Ayoubbi - Tinghir"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," 2018 - 2020"]})]}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]})]})]}),S.jsxs("div",{className:n===2?"qualification__content qualification__content-active":"qualification__content",children:[S.jsxs("div",{className:"qualification__data",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Stage d’entreprise"}),S.jsx("span",{className:"qualification__subtitle",children:"SARLAU Globetudes - Salé Maroc"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," Septembre 2024"]})]}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]})]}),S.jsxs("div",{className:"qualification__data",children:[S.jsx("div",{}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Stage de professionnalisation"}),S.jsx("span",{className:"qualification__subtitle",children:"IAV HASSAN II - Commun Ain Johra Maroc"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," Mai 2024 - Juin 2024"]})]})]}),S.jsxs("div",{className:"qualification__data",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"qualification__title",children:"Stage ANCFCC"}),S.jsx("span",{className:"qualification__subtitle",children:"Marrakech Gueliz - Maroc"}),S.jsxs("div",{className:"qualification__calender",children:[S.jsx("i",{className:"uil uil-calender-alt"})," Juillet 2023"]})]}),S.jsxs("div",{children:[S.jsx("span",{className:"qualification__rounder"}),S.jsx("span",{className:"qualification__line"})]})]})]})]})]})]})},CS=()=>S.jsxs("div",{className:"skills__content",children:[S.jsx("h3",{className:"skills__title",children:"technical software"}),S.jsxs("div",{className:"skills__box",children:[S.jsxs("div",{className:"skills__group",children:[S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"AutoCad"}),S.jsx("span",{className:"skills__level",children:"Advanced"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"Covadis"}),S.jsx("span",{className:"skills__level",children:"Advanced"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"Revit"}),S.jsx("span",{className:"skills__level",children:"Medium"})]})]})]}),S.jsxs("div",{className:"skills__group",children:[S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"Cyclone 3DR"}),S.jsx("span",{className:"skills__level",children:"Intermediate"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"QGIS"}),S.jsx("span",{className:"skills__level",children:"Advanced"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"ARCGIS"}),S.jsx("span",{className:"skills__level",children:"Advanced"})]})]})]})]})]}),PS=()=>S.jsxs("div",{className:"skills__content",children:[S.jsx("h3",{className:"skills__title",children:"Coding & Dev"}),S.jsxs("div",{className:"skills__box",children:[S.jsxs("div",{className:"skills__group",children:[S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"WebMapping"}),S.jsx("span",{className:"skills__level",children:"Basic"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"Python"}),S.jsx("span",{className:"skills__level",children:"Advanced"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"JavaScript"}),S.jsx("span",{className:"skills__level",children:"Intermediate"})]})]})]}),S.jsxs("div",{className:"skills__group",children:[S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"HTML"}),S.jsx("span",{className:"skills__level",children:"Intermediate"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"CSS"}),S.jsx("span",{className:"skills__level",children:"Intermediate"})]})]}),S.jsxs("div",{className:"skills__data",children:[S.jsx("i",{className:"bx bx-badge-check"}),S.jsxs("div",{children:[S.jsx("h3",{className:"skills__name",children:"GeoDataBase"}),S.jsx("span",{className:"skills__level",children:"Advenced"})]})]})]})]})]}),NS=()=>S.jsxs("section",{className:"skills section",id:"skills",children:[S.jsx("h2",{className:"section__title",children:"Skills"}),S.jsx("span",{className:"section__subtitle",children:"My technical level"}),S.jsxs("div",{className:"skills__container container grid",children:[S.jsx(CS,{}),S.jsx(PS,{})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sf="170",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LS=0,sm=1,DS=2,X0=1,IS=2,Si=3,Fi=0,dn=1,ni=2,pr=0,Fs=1,om=2,am=3,lm=4,US=5,Dr=100,FS=101,OS=102,kS=103,BS=104,zS=200,HS=201,VS=202,GS=203,Fh=204,Oh=205,jS=206,WS=207,XS=208,qS=209,YS=210,KS=211,$S=212,ZS=213,QS=214,kh=0,Bh=1,zh=2,qs=3,Hh=4,Vh=5,Gh=6,jh=7,q0=0,JS=1,eM=2,mr=0,tM=1,nM=2,iM=3,rM=4,sM=5,oM=6,aM=7,cm="attached",lM="detached",Y0=300,Ys=301,Ks=302,Wh=303,Xh=304,Cc=306,$s=1e3,rr=1001,cc=1002,Jt=1003,K0=1004,Uo=1005,vn=1006,Ll=1007,Ri=1008,Oi=1009,$0=1010,Z0=1011,fa=1012,Mf=1013,qr=1014,Xn=1015,Ma=1016,Ef=1017,Tf=1018,Zs=1020,Q0=35902,J0=1021,ev=1022,Nn=1023,tv=1024,nv=1025,Os=1026,Qs=1027,wf=1028,Af=1029,iv=1030,Rf=1031,bf=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,qh=35840,Yh=35841,Kh=35842,$h=35843,Zh=36196,Qh=37492,Jh=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,hd=37819,dd=37820,fd=37821,Ol=36492,pd=36494,md=36495,rv=36283,gd=36284,_d=36285,vd=36286,pa=2300,ma=2301,au=2302,um=2400,hm=2401,dm=2402,cM=2500,uM=0,sv=1,xd=2,hM=3200,dM=3201,ov=0,fM=1,tr="",Ft="srgb",tn="srgb-linear",Pc="linear",rt="srgb",es=7680,fm=519,pM=512,mM=513,gM=514,av=515,_M=516,vM=517,xM=518,yM=519,yd=35044,pm="300 es",bi=2e3,uc=2001;class Zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mm=1234567;const qo=Math.PI/180,Js=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Cf(n,e){return(n%e+e)%e}function SM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function MM(n,e,t){return n!==e?(t-n)/(e-n):0}function Yo(n,e,t){return(1-t)*n+t*e}function EM(n,e,t,i){return Yo(n,e,1-Math.exp(-t*i))}function TM(n,e=1){return e-Math.abs(Cf(n,e*2)-e)}function wM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function AM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function RM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bM(n,e){return n+Math.random()*(e-n)}function CM(n){return n*(.5-Math.random())}function PM(n){n!==void 0&&(mm=n);let e=mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NM(n){return n*qo}function LM(n){return n*Js}function DM(n){return(n&n-1)===0&&n!==0}function IM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function UM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function FM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lv={DEG2RAD:qo,RAD2DEG:Js,generateUUID:Kn,clamp:Ot,euclideanModulo:Cf,mapLinear:SM,inverseLerp:MM,lerp:Yo,damp:EM,pingpong:TM,smoothstep:wM,smootherstep:AM,randInt:RM,randFloat:bM,randFloatSpread:CM,seededRandom:PM,degToRad:NM,radToDeg:LM,isPowerOfTwo:DM,ceilPowerOfTwo:IM,floorPowerOfTwo:UM,setQuaternionFromProperEuler:FM,normalize:tt,denormalize:jn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],_=r[1],x=r[4],y=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*m+a*x+l*b,s[6]=o*d+a*y+l*A,s[1]=c*v+u*_+h*C,s[4]=c*m+u*x+h*b,s[7]=c*d+u*y+h*A,s[2]=f*v+p*_+g*C,s[5]=f*m+p*x+g*b,s[8]=f*d+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lu.makeScale(e,t)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new Ue;function cv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function OM(){const n=ga("canvas");return n.style.display="block",n}const gm={};function Fo(n){n in gm||(gm[n]=!0,console.warn(n))}function kM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function BM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===tr?Pc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _m=[.64,.33,.3,.6,.15,.06],vm=[.2126,.7152,.0722],xm=[.3127,.329],ym=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[tn]:{primaries:_m,whitePoint:xm,transfer:Pc,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:_m,whitePoint:xm,transfer:rt,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let ts;class HM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=ga("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VM=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?HM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class It extends Zr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=rr,r=rr,s=vn,o=Ri,a=Nn,l=Oi,c=It.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Kn(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Y0;It.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,i=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(d+1)/2,b=(u+f)/4,A=(h+v)/4,P=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jM extends Zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends jM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hv extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*v,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,d*_);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const y=a*_;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new I,Mm=new ai;class Bi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),qa.subVectors(this.max,Mo),ns.subVectors(e.a,Mo),is.subVectors(e.b,Mo),rs.subVectors(e.c,Mo),Gi.subVectors(is,ns),ji.subVectors(rs,is),Er.subVectors(ns,rs);let t=[0,-Gi.z,Gi.y,0,-ji.z,ji.y,0,-Er.z,Er.y,Gi.z,0,-Gi.x,ji.z,0,-ji.x,Er.z,0,-Er.x,-Gi.y,Gi.x,0,-ji.y,ji.x,0,-Er.y,Er.x,0];return!hu(t,ns,is,rs,qa)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,ns,is,rs,qa))?!1:(Ya.crossVectors(Gi,ji),t=[Ya.x,Ya.y,Ya.z],hu(t,ns,is,rs,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,Xa=new Bi,ns=new I,is=new I,rs=new I,Gi=new I,ji=new I,Er=new I,Mo=new I,qa=new I,Ya=new I,Tr=new I;function hu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XM=new Bi,Eo=new I,du=new I;class ci{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):XM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(du)),this.expandByPoint(Eo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new I,fu=new I,Ka=new I,Wi=new I,pu=new I,$a=new I,mu=new I;class Ea{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fu.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(fu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=Wi.dot(this.direction),l=-Wi.dot(Ka),c=Wi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fu).addScaledVector(Ka,f),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){pu.subVectors(t,e),$a.subVectors(i,e),mu.crossVectors(pu,$a);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(Wi,$a));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,YM)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Xi.crossVectors(i,pn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Xi.crossVectors(i,pn)),Xi.normalize(),Za.crossVectors(pn,Xi),r[0]=Xi.x,r[4]=Za.x,r[8]=pn.x,r[1]=Xi.y,r[5]=Za.y,r[9]=pn.y,r[2]=Xi.z,r[6]=Za.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],x=i[7],y=i[11],C=i[15],b=r[0],A=r[4],P=r[8],w=r[12],E=r[1],N=r[5],j=r[9],H=r[13],$=r[2],Q=r[6],X=r[10],J=r[14],L=r[3],W=r[7],Z=r[11],oe=r[15];return s[0]=o*b+a*E+l*$+c*L,s[4]=o*A+a*N+l*Q+c*W,s[8]=o*P+a*j+l*X+c*Z,s[12]=o*w+a*H+l*J+c*oe,s[1]=u*b+h*E+f*$+p*L,s[5]=u*A+h*N+f*Q+p*W,s[9]=u*P+h*j+f*X+p*Z,s[13]=u*w+h*H+f*J+p*oe,s[2]=g*b+v*E+m*$+d*L,s[6]=g*A+v*N+m*Q+d*W,s[10]=g*P+v*j+m*X+d*Z,s[14]=g*w+v*H+m*J+d*oe,s[3]=_*b+x*E+y*$+C*L,s[7]=_*A+x*N+y*Q+C*W,s[11]=_*P+x*j+y*X+C*Z,s[15]=_*w+x*H+y*J+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,C=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,b=t*_+i*x+r*y+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(g*h*s-u*v*s-g*i*p+t*v*p+u*i*d-t*h*d)*A,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(u*v*r-g*h*r+g*i*f-t*v*f-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,_=l*c,x=l*u,y=l*h,C=i.x,b=i.y,A=i.z;return r[0]=(1-(v+d))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(f+d))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(g+x)*A,r[9]=(m-_)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===bi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===uc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,v;if(a===bi)g=(o+s)*h,v=-2*h;else if(a===uc)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new I,Bn=new Fe,qM=new I(0,0,0),YM=new I(1,1,1),Xi=new I,Za=new I,pn=new I,Em=new Fe,Tm=new ai;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KM=0;const wm=new I,os=new ai,_i=new Fe,Qa=new I,To=new I,$M=new I,ZM=new ai,Am=new I(1,0,0),Rm=new I(0,1,0),bm=new I(0,0,1),Cm={type:"added"},QM={type:"removed"},as={type:"childadded",child:null},gu={type:"childremoved",child:null};class vt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new li,i=new ai,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(To,Qa,this.up):_i.lookAt(Qa,To,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),os.setFromRotationMatrix(_i),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QM),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new I,vi=new I,_u=new I,xi=new I,ls=new I,cs=new I,Pm=new I,vu=new I,xu=new I,yu=new I,Su=new Ze,Mu=new Ze,Eu=new Ze;class Wn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),vi.subVectors(i,t),_u.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(vi),l=zn.dot(_u),c=vi.dot(vi),u=vi.dot(_u),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,t),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),vi.subVectors(e,t),zn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),vu.subVectors(e,i);const l=ls.dot(vu),c=cs.dot(vu);if(l<=0&&c<=0)return t.copy(i);xu.subVectors(e,r);const u=ls.dot(xu),h=cs.dot(xu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);yu.subVectors(e,s);const p=ls.dot(yu),g=cs.dot(yu);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(cs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Pm,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Tu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ve.workingColorSpace){if(e=Cf(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tu(o,s,e+1/3),this.g=Tu(o,s,e),this.b=Tu(o,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=fv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ve.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ot(Wt.r*255,0,255))*65536+Math.round(Ot(Wt.g*255,0,255))*256+Math.round(Ot(Wt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ft){Ve.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ja);const i=Yo(qi.h,Ja.h,t),r=Yo(qi.s,Ja.s,t),s=Yo(qi.l,Ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ne;Ne.NAMES=fv;let JM=0;class si extends Zr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Kn(),this.name="",this.blending=Fs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kr extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,el=new Ce;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yd,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class pv extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mv extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ni extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eE=0;const An=new Fe,wu=new vt,us=new I,mn=new Bi,wo=new Bi,Nt=new I;class ui extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?mv:pv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ni(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(mn.min,wo.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,wo.max),mn.expandByPoint(Nt)):(mn.expandByPoint(wo.min),mn.expandByPoint(wo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Nt.add(us)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const c=new I,u=new I,h=new I,f=new Ce,p=new Ce,g=new Ce,v=new I,m=new I;function d(P,w,E){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[P].add(v),a[w].add(v),a[E].add(v),l[P].add(m),l[w].add(m),l[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,w=_.length;P<w;++P){const E=_[P],N=E.start,j=E.count;for(let H=N,$=N+j;H<$;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new I,y=new I,C=new I,b=new I;function A(P){C.fromBufferAttribute(r,P),b.copy(C);const w=a[P];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(b,w);const N=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,w=_.length;P<w;++P){const E=_[P],N=E.start,j=E.count;for(let H=N,$=N+j;H<$;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new en(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new Fe,wr=new Ea,tl=new ci,Lm=new I,nl=new I,il=new I,rl=new I,Au=new I,sl=new I,Dm=new I,ol=new I;class xn extends vt{constructor(e=new ui,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Au.fromBufferAttribute(h,e),o?sl.addScaledVector(Au,u):sl.addScaledVector(Au.sub(t),u))}t.add(sl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(tl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(tl,Lm)===null||wr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Nm),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const b=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=al(this,d,e,i,c,u,h,b,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=al(this,o,e,i,c,u,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const b=y,A=y+1,P=y+2;r=al(this,d,e,i,c,u,h,b,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,y=m+2;r=al(this,o,e,i,c,u,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tE(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;ol.copy(a),ol.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ol);return c<t.near||c>t.far?null:{distance:c,point:ol.clone(),object:n}}function al(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,nl),n.getVertexPosition(l,il),n.getVertexPosition(c,rl);const u=tE(n,e,t,i,nl,il,rl,Dm);if(u){const h=new I;Wn.getBarycoord(Dm,nl,il,rl,h),r&&(u.uv=Wn.getInterpolatedAttribute(r,a,l,c,h,new Ce)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,a,l,c,h,new Ce)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Wn.getNormal(nl,il,rl,f.normal),u.face=f,u.barycoord=h}return u}class Ta extends ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ni(c,3)),this.setAttribute("normal",new Ni(u,3)),this.setAttribute("uv",new Ni(h,2));function g(v,m,d,_,x,y,C,b,A,P,w){const E=y/A,N=C/P,j=y/2,H=C/2,$=b/2,Q=A+1,X=P+1;let J=0,L=0;const W=new I;for(let Z=0;Z<X;Z++){const oe=Z*N-H;for(let Se=0;Se<Q;Se++){const Ke=Se*E-j;W[v]=Ke*_,W[m]=oe*x,W[d]=$,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),h.push(Se/A),h.push(1-Z/P),J+=1}}for(let Z=0;Z<P;Z++)for(let oe=0;oe<A;oe++){const Se=f+oe+Q*Z,Ke=f+oe+Q*(Z+1),G=f+(oe+1)+Q*(Z+1),ne=f+(oe+1)+Q*Z;l.push(Se,Ke,ne),l.push(Ke,G,ne),L+=6}a.addGroup(p,L,w),p+=L,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=eo(n[t]);for(const r in i)e[r]=i[r]}return e}function nE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const iE={clone:eo,merge:Kt};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _v extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new I,Im=new Ce,Um=new Ce;class Zt extends _v{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Um),t.subVectors(Um,Im)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class oE extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(hs,ds,e,t);r.layers=this.layers,this.add(r);const s=new Zt(hs,ds,e,t);s.layers=this.layers,this.add(s);const o=new Zt(hs,ds,e,t);o.layers=this.layers,this.add(o);const a=new Zt(hs,ds,e,t);a.layers=this.layers,this.add(a);const l=new Zt(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Zt(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vv extends It{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aE extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ta(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:pr});s.uniforms.tEquirect.value=t;const o=new xn(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=vn),new oE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ru=new I,lE=new I,cE=new Ue;class Qi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ru.subVectors(i,t).cross(lE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cE.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ci,ll=new I;class Pf{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+g,y+_).normalize(),i[3].setComponents(l-o,f-u,m-g,y-_).normalize(),i[4].setComponents(l-a,f-h,m-v,y-x).normalize(),t===bi)i[5].setComponents(l+a,f+h,m+v,y+x).normalize();else if(t===uc)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Nc extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+c*d,y=_+c*(d+1),C=_+1+c*(d+1),b=_+1+c*d;p.push(x,y,b),p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new Ni(g,3)),this.setAttribute("normal",new Ni(v,3)),this.setAttribute("uv",new Ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:hE,alphahash_pars_fragment:dE,alphamap_fragment:fE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:wE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:CE,color_fragment:PE,color_pars_fragment:NE,color_pars_vertex:LE,color_vertex:DE,common:IE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:FE,displacementmap_pars_vertex:OE,displacementmap_vertex:kE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:jE,envmap_pars_fragment:WE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:iT,envmap_vertex:qE,fog_vertex:YE,fog_pars_vertex:KE,fog_fragment:$E,fog_pars_fragment:ZE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:JE,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:oT,lights_phong_pars_fragment:aT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:hT,lights_fragment_end:dT,logdepthbuf_fragment:fT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:TT,morphnormal_vertex:wT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:bT,normal_fragment_maps:CT,normal_pars_fragment:PT,normal_pars_vertex:NT,normal_vertex:LT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:IT,clearcoat_normal_fragment_maps:UT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:OT,opaque_fragment:kT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:VT,dithering_pars_fragment:GT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:KT,skinbase_vertex:$T,skinning_pars_vertex:ZT,skinning_vertex:QT,skinnormal_vertex:JT,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:h1,backgroundCube_vert:d1,backgroundCube_frag:f1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:_1,distanceRGBA_vert:v1,distanceRGBA_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:w1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:b1,meshmatcap_frag:C1,meshnormal_vert:P1,meshnormal_frag:N1,meshphong_vert:L1,meshphong_frag:D1,meshphysical_vert:I1,meshphysical_frag:U1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:k1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ei={basic:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Kt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Kt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Kt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Kt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Kt([ae.lights,ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ei.physical={uniforms:Kt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const cl={r:0,b:0,g:0},Rr=new li,j1=new Fe;function W1(n,e,t,i,r,s,o){const a=new Ne(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const y=g(_);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Cc)?(u===void 0&&(u=new xn(new Ta(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:eo(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(x.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Rr)),u.material.toneMapped=Ve.getTransfer(y.colorSpace)!==rt,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xn(new Nc(2,2),new vr({name:"BackgroundMaterial",uniforms:eo(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,x){_.getRGB(cl,gv(n)),i.buffers.color.setClear(cl.r,cl.g,cl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:v,addToRenderList:m}}function X1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,N,j,H,$){let Q=!1;const X=h(H,j,N);s!==X&&(s=X,c(s.object)),Q=p(E,H,j,$),Q&&g(E,H,j,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(E,N,j,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,N,j){const H=j.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let Q=$[N.id];Q===void 0&&(Q={},$[N.id]=Q);let X=Q[H];return X===void 0&&(X=f(l()),Q[H]=X),X}function f(E){const N=[],j=[],H=[];for(let $=0;$<t;$++)N[$]=0,j[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,N,j,H){const $=s.attributes,Q=N.attributes;let X=0;const J=j.getAttributes();for(const L in J)if(J[L].location>=0){const Z=$[L];let oe=Q[L];if(oe===void 0&&(L==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),L==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function g(E,N,j,H){const $={},Q=N.attributes;let X=0;const J=j.getAttributes();for(const L in J)if(J[L].location>=0){let Z=Q[L];Z===void 0&&(L==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),L==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),$[L]=oe,X++}s.attributes=$,s.attributesNum=X,s.index=H}function v(){const E=s.newAttributes;for(let N=0,j=E.length;N<j;N++)E[N]=0}function m(E){d(E,0)}function d(E,N){const j=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;j[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),$[E]!==N&&(n.vertexAttribDivisor(E,N),$[E]=N)}function _(){const E=s.newAttributes,N=s.enabledAttributes;for(let j=0,H=N.length;j<H;j++)N[j]!==E[j]&&(n.disableVertexAttribArray(j),N[j]=0)}function x(E,N,j,H,$,Q,X){X===!0?n.vertexAttribIPointer(E,N,j,$,Q):n.vertexAttribPointer(E,N,j,H,$,Q)}function y(E,N,j,H){v();const $=H.attributes,Q=j.getAttributes(),X=N.defaultAttributeValues;for(const J in Q){const L=Q[J];if(L.location>=0){let W=$[J];if(W===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){const Z=W.normalized,oe=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const Ke=Se.buffer,G=Se.type,ne=Se.bytesPerElement,pe=G===n.INT||G===n.UNSIGNED_INT||W.gpuType===Mf;if(W.isInterleavedBufferAttribute){const se=W.data,Re=se.stride,Le=W.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<L.locationSize;Be++)d(L.location+Be,se.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<L.locationSize;Be++)m(L.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Be=0;Be<L.locationSize;Be++)x(L.location+Be,oe/L.locationSize,G,Z,Re*ne,(Le+oe/L.locationSize*Be)*ne,pe)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)d(L.location+se,W.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<L.locationSize;se++)m(L.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let se=0;se<L.locationSize;se++)x(L.location+se,oe/L.locationSize,G,Z,oe*ne,oe/L.locationSize*se*ne,pe)}}else if(X!==void 0){const Z=X[J];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(L.location,Z);break;case 3:n.vertexAttrib3fv(L.location,Z);break;case 4:n.vertexAttrib4fv(L.location,Z);break;default:n.vertexAttrib1fv(L.location,Z)}}}}_()}function C(){P();for(const E in i){const N=i[E];for(const j in N){const H=N[j];for(const $ in H)u(H[$].object),delete H[$];delete N[j]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const j in N){const H=N[j];for(const $ in H)u(H[$].object),delete H[$];delete N[j]}delete i[E.id]}function A(E){for(const N in i){const j=i[N];if(j[E.id]===void 0)continue;const H=j[E.id];for(const $ in H)u(H[$].object),delete H[$];delete j[E.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function q1(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Y1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:b}}function K1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qi,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let y=d.clippingState||null;l.value=y,y=u(g,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $1(n){let e=new WeakMap;function t(o,a){return a===Wh?o.mapping=Ys:a===Xh&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wh||a===Xh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nf extends _v{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Fm=[.125,.215,.35,.446,.526,.582],Ir=20,bu=new Nf,Om=new Ne;let Cu=null,Pu=0,Nu=0,Lu=!1;const Lr=(1+Math.sqrt(5))/2,fs=1/Lr,km=[new I(-Lr,fs,0),new I(Lr,fs,0),new I(-fs,0,Lr),new I(fs,0,Lr),new I(0,Lr,-fs),new I(0,Lr,fs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Pu,Nu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ma,format:Nn,colorSpace:tn,depthBuffer:!1},r=zm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(s)),this._blurMaterial=Q1(s,e,t)}return r}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,bu)}_sceneToCubeUV(e,t,i,r){const a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Om),u.toneMapping=mr,u.autoClear=!1;const p=new kr({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new xn(new Ta,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Om),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;ul(r,_*x,d>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ys||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=km[(r-s-1)%km.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let _=0;for(let A=0;A<Ir;++A){const P=A/v,w=Math.exp(-P*P/2);d.push(w),A===0?_+=w:A<m&&(_+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-bs?r-x+bs:0),b=4*(this._cubeSize-y);ul(t,C,b,3*y,2*y),l.setRenderTarget(t),l.render(h,bu)}}function Z1(n){const e=[],t=[],i=[];let r=n;const s=n-bs+1+Fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-bs?l=Fm[o-n+bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(w,v*g*b),x.set(f,m*g*b);const E=[b,b,b,b,b,b];y.set(E,d*g*b)}const C=new ui;C.setAttribute("position",new en(_,v)),C.setAttribute("uv",new en(x,m)),C.setAttribute("faceIndex",new en(y,d)),e.push(C),r>bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zm(n,e,t){const i=new Yr(n,e,t);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Q1(n,e,t){const i=new Float32Array(Ir),r=new I(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Hm(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Vm(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wh||l===Xh,u=l===Ys||l===Ks;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Bm(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Bm(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ew(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tw(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const C=_[x+0],b=_[x+1],A=_[x+2];f.push(C,b,b,A,A,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const C=x+0,b=x+1,A=x+2;f.push(C,b,b,A,A,C)}}else return;const m=new(cv(f)?mv:pv)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*v[_];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function iw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rw(n,e,t){const i=new WeakMap,r=new Ze;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*h),P=new hv(A,C,b,h);P.type=Xn,P.needsUpdate=!0;const w=y*4;for(let N=0;N<h;N++){const j=d[N],H=_[N],$=x[N],Q=C*b*4*N;for(let X=0;X<j.count;X++){const J=X*w;g===!0&&(r.fromBufferAttribute(j,X),A[Q+J+0]=r.x,A[Q+J+1]=r.y,A[Q+J+2]=r.z,A[Q+J+3]=0),v===!0&&(r.fromBufferAttribute(H,X),A[Q+J+4]=r.x,A[Q+J+5]=r.y,A[Q+J+6]=r.z,A[Q+J+7]=0),m===!0&&(r.fromBufferAttribute($,X),A[Q+J+8]=r.x,A[Q+J+9]=r.y,A[Q+J+10]=r.z,A[Q+J+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Ce(C,b)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function sw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class yv extends It{constructor(e,t,i,r,s,o,a,l,c,u=Os){if(u!==Os&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=qr),i===void 0&&u===Qs&&(i=Zs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sv=new It,Gm=new yv(1,1),Mv=new hv,Ev=new WM,Tv=new vv,jm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jm[r];if(s===void 0&&(s=new Float32Array(r),jm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lc(n,e){let t=Wm[e];t===void 0&&(t=new Int32Array(e),Wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ow(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function uw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ym.set(i),n.uniformMatrix2fv(this.addr,!1,Ym),Pt(t,i)}}function hw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;qm.set(i),n.uniformMatrix3fv(this.addr,!1,qm),Pt(t,i)}}function dw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Xm.set(i),n.uniformMatrix4fv(this.addr,!1,Xm),Pt(t,i)}}function fw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function _w(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Sw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gm.compareFunction=av,s=Gm):s=Sv,t.setTexture2D(e||s,r)}function Mw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ev,r)}function Ew(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tv,r)}function Tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mv,r)}function ww(n){switch(n){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return hw;case 35676:return dw;case 5124:case 35670:return fw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return vw;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}function Aw(n,e){n.uniform1fv(this.addr,e)}function Rw(n,e){const t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function bw(n,e){const t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function Cw(n,e){const t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function Pw(n,e){const t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nw(n,e){const t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lw(n,e){const t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dw(n,e){n.uniform1iv(this.addr,e)}function Iw(n,e){n.uniform2iv(this.addr,e)}function Uw(n,e){n.uniform3iv(this.addr,e)}function Fw(n,e){n.uniform4iv(this.addr,e)}function Ow(n,e){n.uniform1uiv(this.addr,e)}function kw(n,e){n.uniform2uiv(this.addr,e)}function Bw(n,e){n.uniform3uiv(this.addr,e)}function zw(n,e){n.uniform4uiv(this.addr,e)}function Hw(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sv,s[o])}function Vw(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ev,s[o])}function Gw(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tv,s[o])}function jw(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mv,s[o])}function Ww(n){switch(n){case 5126:return Aw;case 35664:return Rw;case 35665:return bw;case 35666:return Cw;case 35674:return Pw;case 35675:return Nw;case 35676:return Lw;case 5124:case 35670:return Dw;case 35667:case 35671:return Iw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return kw;case 36295:return Bw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return jw}}class Xw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ww(t.type)}}class qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ww(t.type)}}class Yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Km(n,e){n.seq.push(e),n.map[e.id]=e}function Kw(n,e,t){const i=n.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),o=Du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Km(t,c===void 0?new Xw(a,n,e):new qw(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Yw(a),Km(t,h)),t=h}}}class kl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Kw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function $m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $w=37297;let Zw=0;function Qw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zm=new Ue;function Jw(n){Ve._getMatrix(Zm,Ve.workingColorSpace,n);const e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Qw(n.getShaderSource(e),o)}else return r}function eA(n,e){const t=Jw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tA(n,e){let t;switch(e){case tM:t="Linear";break;case nM:t="Reinhard";break;case iM:t="Cineon";break;case rM:t="ACESFilmic";break;case oM:t="AgX";break;case aM:t="Neutral";break;case sM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hl=new I;function nA(){Ve.getLuminanceCoefficients(hl);const n=hl.x.toFixed(4),e=hl.y.toFixed(4),t=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function rA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oo(n){return n!==""}function Jm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(n){return n.replace(oA,lA)}const aA=new Map;function lA(n,e){let t=ke[e];if(t===void 0){const i=aA.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(n){return n.replace(cA,uA)}function uA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ng(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function dA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Ks:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case q0:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case eM:e="ENVMAP_BLENDING_ADD";break}return e}function mA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hA(t),c=dA(t),u=fA(t),h=pA(t),f=mA(t),p=iA(t),g=rA(s),v=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),d.length>0&&(d+=`
`)):(m=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),d=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?ke.tonemapping_pars_fragment:"",t.toneMapping!==mr?tA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,eA("linearToOutputTexel",t.outputColorSpace),nA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Sd(o),o=Jm(o,t),o=eg(o,t),a=Sd(a),a=Jm(a,t),a=eg(a,t),o=tg(o),a=tg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+o,y=_+d+a,C=$m(r,r.VERTEX_SHADER,x),b=$m(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(N){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(b).trim();let Q=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,b);else{const J=Qm(r,C,"vertex"),L=Qm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+J+`
`+L)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||$==="")&&(X=!1);X&&(N.diagnostics={runnable:Q,programLog:j,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(C),r.deleteShader(b),P=new kl(r,v),w=sA(r,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,$w)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let _A=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xA(e),t.set(e,i)),i}}class xA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function yA(n,e,t,i,r,s,o){const a=new dv,l=new vA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,E,N,j,H){const $=j.fog,Q=H.geometry,X=w.isMeshStandardMaterial?j.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),L=J&&J.mapping===Cc?J.image.height:null,W=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ke,G,ne,pe;if(W){const et=ei[W];Ke=et.vertexShader,G=et.fragmentShader}else Ke=w.vertexShader,G=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);const se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Be=H.isBatchedMesh===!0,mt=!!w.map,Xe=!!w.matcap,Mt=!!J,O=!!w.aoMap,Tn=!!w.lightMap,Ge=!!w.bumpMap,je=!!w.normalMap,we=!!w.displacementMap,ct=!!w.emissiveMap,Te=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,k=w.clearcoat>0,Y=w.dispersion>0,ee=w.iridescence>0,q=w.sheen>0,Me=w.transmission>0,ce=M&&!!w.anisotropyMap,me=k&&!!w.clearcoatMap,qe=k&&!!w.clearcoatNormalMap,ie=k&&!!w.clearcoatRoughnessMap,ge=ee&&!!w.iridescenceMap,Ae=ee&&!!w.iridescenceThicknessMap,be=q&&!!w.sheenColorMap,_e=q&&!!w.sheenRoughnessMap,We=!!w.specularMap,Oe=!!w.specularColorMap,ot=!!w.specularIntensityMap,D=Me&&!!w.transmissionMap,le=Me&&!!w.thicknessMap,V=!!w.gradientMap,K=!!w.alphaMap,de=w.alphaTest>0,ue=!!w.alphaHash,De=!!w.extensions;let yt=mr;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ht={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:G,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,batchingColor:Be&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tn,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:Xe,envMap:Mt,envMapMode:Mt&&J.mapping,envMapCubeUVHeight:L,aoMap:O,lightMap:Tn,bumpMap:Ge,normalMap:je,displacementMap:f&&we,emissiveMap:ct,normalMapObjectSpace:je&&w.normalMapType===fM,normalMapTangentSpace:je&&w.normalMapType===ov,metalnessMap:Te,roughnessMap:R,anisotropy:M,anisotropyMap:ce,clearcoat:k,clearcoatMap:me,clearcoatNormalMap:qe,clearcoatRoughnessMap:ie,dispersion:Y,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:be,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Oe,specularIntensityMap:ot,transmission:Me,transmissionMap:D,thicknessMap:le,gradientMap:V,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ue,combine:w.combine,mapUv:mt&&v(w.map.channel),aoMapUv:O&&v(w.aoMap.channel),lightMapUv:Tn&&v(w.lightMap.channel),bumpMapUv:Ge&&v(w.bumpMap.channel),normalMapUv:je&&v(w.normalMap.channel),displacementMapUv:we&&v(w.displacementMap.channel),emissiveMapUv:ct&&v(w.emissiveMap.channel),metalnessMapUv:Te&&v(w.metalnessMap.channel),roughnessMapUv:R&&v(w.roughnessMap.channel),anisotropyMapUv:ce&&v(w.anisotropyMap.channel),clearcoatMapUv:me&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(w.sheenRoughnessMap.channel),specularMapUv:We&&v(w.specularMap.channel),specularColorMapUv:Oe&&v(w.specularColorMap.channel),specularIntensityMapUv:ot&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:le&&v(w.thicknessMap.channel),alphaMapUv:K&&v(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(je||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(mt||K),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&Ve.getTransfer(w.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&w.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(w.emissiveMap.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ni,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)E.push(N),E.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(_(E,w),x(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const E=g[w.type];let N;if(E){const j=ei[E];N=iE.clone(j.uniforms)}else N=w.uniforms;return N}function C(w,E){let N;for(let j=0,H=u.length;j<H;j++){const $=u[j];if($.cacheKey===E){N=$,++N.usedTimes;break}}return N===void 0&&(N=new gA(n,E,w,s),u.push(N)),N}function b(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:P}}function SA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function MA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ig(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||MA),i.length>1&&i.sort(f||ig),r.length>1&&r.sort(f||ig)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function EA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new rg,n.set(i,[o])):r>=s.length?(o=new rg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function wA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AA=0;function RA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bA(n){const e=new TA,t=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Fe,o=new Fe;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,_=0,x=0,y=0,C=0,b=0,A=0;c.sort(RA);for(let w=0,E=c.length;w<E;w++){const N=c[w],j=N.color,H=N.intensity,$=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=j.r*H,h+=j.g*H,f+=j.b*H;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],H);A++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const J=N.shadow,L=t.get(N);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=N.shadow.matrix,_++}i.directional[p]=X,p++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(j).multiplyScalar(H),X.distance=$,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[v]=X;const J=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,J.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[v]=J.matrix,N.castShadow){const L=t.get(N);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=Q,y++}v++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(j).multiplyScalar(H),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=X,m++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const J=N.shadow,L=t.get(N);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=N.shadow.matrix,x++}i.point[g]=X,g++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(H),X.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=A,i.version=AA++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const x=c[d];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function sg(n){const e=new bA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function CA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sg(n),e.set(r,[a])):s>=o.length?(a=new sg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class PA extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NA extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IA(n,e,t){let i=new Pf;const r=new Ce,s=new Ce,o=new Ze,a=new PA({depthPacking:dM}),l=new NA,c={},u=t.maxTextureSize,h={[Fi]:dn,[dn]:Fi,[ni]:ni},f=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:LA,fragmentShader:DA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X0;let d=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),j=n.state;j.setBlending(pr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=d!==Si&&this.type===Si,$=d===Si&&this.type!==Si;for(let Q=0,X=b.length;Q<X;Q++){const J=b[Q],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||H===!0||$===!0){const oe=this.type!==Si?{minFilter:Jt,magFilter:Jt}:{};L.map!==null&&L.map.dispose(),L.map=new Yr(r.x,r.y,oe),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const Z=L.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=L.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),j.viewport(o),L.updateMatrices(J,oe),i=L.getFrustum(),y(A,P,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===Si&&_(L,P),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,E,N)};function _(b,A){const P=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,P,p,v,null)}function x(b,A,P,w){let E=null;const N=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)E=N;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=E.uuid,H=A.uuid;let $=c[j];$===void 0&&($={},c[j]=$);let Q=$[H];Q===void 0&&(Q=E.clone(),$[H]=Q,A.addEventListener("dispose",C)),E=Q}if(E.visible=A.visible,E.wireframe=A.wireframe,w===Si?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=n.properties.get(E);j.light=P}return E}function y(b,A,P,w,E){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),$=b.material;if(Array.isArray($)){const Q=H.groups;for(let X=0,J=Q.length;X<J;X++){const L=Q[X],W=$[L.materialIndex];if(W&&W.visible){const Z=x(b,W,w,E);b.onBeforeShadow(n,b,A,P,H,Z,L),n.renderBufferDirect(P,null,H,Z,b,L),b.onAfterShadow(n,b,A,P,H,Z,L)}}}else if($.visible){const Q=x(b,$,w,E);b.onBeforeShadow(n,b,A,P,H,Q,null),n.renderBufferDirect(P,null,H,Q,b,null),b.onAfterShadow(n,b,A,P,H,Q,null)}}const j=b.children;for(let H=0,$=j.length;H<$;H++)y(j[H],A,P,w,E)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const w=c[P],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const UA={[kh]:Bh,[zh]:Gh,[Hh]:jh,[qs]:Vh,[Bh]:kh,[Gh]:zh,[jh]:Hh,[Vh]:qs};function FA(n,e){function t(){let D=!1;const le=new Ze;let V=null;const K=new Ze(0,0,0,0);return{setMask:function(de){V!==de&&!D&&(n.colorMask(de,de,de,de),V=de)},setLocked:function(de){D=de},setClear:function(de,ue,De,yt,Ht){Ht===!0&&(de*=yt,ue*=yt,De*=yt),le.set(de,ue,De,yt),K.equals(le)===!1&&(n.clearColor(de,ue,De,yt),K.copy(le))},reset:function(){D=!1,V=null,K.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,V=null,K=null,de=null;return{setReversed:function(ue){if(le!==ue){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const yt=de;de=null,this.setClear(yt)}le=ue},getReversed:function(){return le},setTest:function(ue){ue?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ue){V!==ue&&!D&&(n.depthMask(ue),V=ue)},setFunc:function(ue){if(le&&(ue=UA[ue]),K!==ue){switch(ue){case kh:n.depthFunc(n.NEVER);break;case Bh:n.depthFunc(n.ALWAYS);break;case zh:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Hh:n.depthFunc(n.EQUAL);break;case Vh:n.depthFunc(n.GEQUAL);break;case Gh:n.depthFunc(n.GREATER);break;case jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(le&&(ue=1-ue),n.clearDepth(ue),de=ue)},reset:function(){D=!1,V=null,K=null,de=null,le=!1}}}function r(){let D=!1,le=null,V=null,K=null,de=null,ue=null,De=null,yt=null,Ht=null;return{setTest:function(et){D||(et?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(et){le!==et&&!D&&(n.stencilMask(et),le=et)},setFunc:function(et,Un,fi){(V!==et||K!==Un||de!==fi)&&(n.stencilFunc(et,Un,fi),V=et,K=Un,de=fi)},setOp:function(et,Un,fi){(ue!==et||De!==Un||yt!==fi)&&(n.stencilOp(et,Un,fi),ue=et,De=Un,yt=fi)},setLocked:function(et){D=et},setClear:function(et){Ht!==et&&(n.clearStencil(et),Ht=et)},reset:function(){D=!1,le=null,V=null,K=null,de=null,ue=null,De=null,yt=null,Ht=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,C=null,b=null,A=new Ne(0,0,0),P=0,w=!1,E=null,N=null,j=null,H=null,$=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(L)[1]),X=J>=1):L.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),X=J>=2);let W=null,Z={};const oe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ke=new Ze().fromArray(oe),G=new Ze().fromArray(Se);function ne(D,le,V,K){const de=new Uint8Array(4),ue=n.createTexture();n.bindTexture(D,ue),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<V;De++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(le+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ue}const pe={};pe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(qs),Ge(!1),je(sm),se(n.CULL_FACE),O(pr);function se(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Re(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Le(D,le){return h[D]!==le?(n.bindFramebuffer(D,le),h[D]=le,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Be(D,le){let V=p,K=!1;if(D){V=f.get(le),V===void 0&&(V=[],f.set(le,V));const de=D.textures;if(V.length!==de.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=de.length;ue<De;ue++)V[ue]=n.COLOR_ATTACHMENT0+ue;V.length=de.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function mt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Xe={[Dr]:n.FUNC_ADD,[FS]:n.FUNC_SUBTRACT,[OS]:n.FUNC_REVERSE_SUBTRACT};Xe[kS]=n.MIN,Xe[BS]=n.MAX;const Mt={[zS]:n.ZERO,[HS]:n.ONE,[VS]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[YS]:n.SRC_ALPHA_SATURATE,[XS]:n.DST_COLOR,[jS]:n.DST_ALPHA,[GS]:n.ONE_MINUS_SRC_COLOR,[Oh]:n.ONE_MINUS_SRC_ALPHA,[qS]:n.ONE_MINUS_DST_COLOR,[WS]:n.ONE_MINUS_DST_ALPHA,[KS]:n.CONSTANT_COLOR,[$S]:n.ONE_MINUS_CONSTANT_COLOR,[ZS]:n.CONSTANT_ALPHA,[QS]:n.ONE_MINUS_CONSTANT_ALPHA};function O(D,le,V,K,de,ue,De,yt,Ht,et){if(D===pr){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),D!==US){if(D!==m||et!==w){if((d!==Dr||y!==Dr)&&(n.blendEquation(n.FUNC_ADD),d=Dr,y=Dr),et)switch(D){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case om:n.blendFunc(n.ONE,n.ONE);break;case am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case om:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,x=null,C=null,b=null,A.set(0,0,0),P=0,m=D,w=et}return}de=de||le,ue=ue||V,De=De||K,(le!==d||de!==y)&&(n.blendEquationSeparate(Xe[le],Xe[de]),d=le,y=de),(V!==_||K!==x||ue!==C||De!==b)&&(n.blendFuncSeparate(Mt[V],Mt[K],Mt[ue],Mt[De]),_=V,x=K,C=ue,b=De),(yt.equals(A)===!1||Ht!==P)&&(n.blendColor(yt.r,yt.g,yt.b,Ht),A.copy(yt),P=Ht),m=D,w=!1}function Tn(D,le){D.side===ni?Re(n.CULL_FACE):se(n.CULL_FACE);let V=D.side===dn;le&&(V=!V),Ge(V),D.blending===Fs&&D.transparent===!1?O(pr):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function je(D){D!==LS?(se(n.CULL_FACE),D!==N&&(D===sm?n.cullFace(n.BACK):D===DS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),N=D}function we(D){D!==j&&(X&&n.lineWidth(D),j=D)}function ct(D,le,V){D?(se(n.POLYGON_OFFSET_FILL),(H!==le||$!==V)&&(n.polygonOffset(le,V),H=le,$=V)):Re(n.POLYGON_OFFSET_FILL)}function Te(D){D?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+Q-1),W!==D&&(n.activeTexture(D),W=D)}function M(D,le,V){V===void 0&&(W===null?V=n.TEXTURE0+Q-1:V=W);let K=Z[V];K===void 0&&(K={type:void 0,texture:void 0},Z[V]=K),(K.type!==D||K.texture!==le)&&(W!==V&&(n.activeTexture(V),W=V),n.bindTexture(D,le||pe[D]),K.type=D,K.texture=le)}function k(){const D=Z[W];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Ke.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ke.copy(D))}function _e(D){G.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function We(D,le){let V=c.get(le);V===void 0&&(V=new WeakMap,c.set(le,V));let K=V.get(D);K===void 0&&(K=n.getUniformBlockIndex(le,D.name),V.set(D,K))}function Oe(D,le){const K=c.get(le).get(D);l.get(le)!==K&&(n.uniformBlockBinding(le,K,D.__bindingPointIndex),l.set(le,K))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,Z={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,C=null,b=null,A=new Ne(0,0,0),P=0,w=!1,E=null,N=null,j=null,H=null,$=null,Ke.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Re,bindFramebuffer:Le,drawBuffers:Be,useProgram:mt,setBlending:O,setMaterial:Tn,setFlipSided:Ge,setCullFace:je,setLineWidth:we,setPolygonOffset:ct,setScissorTest:Te,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Ae,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:ie,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:be,viewport:_e,reset:ot}}function og(n,e,t,i){const r=OA(i);switch(t){case J0:return n*e;case tv:return n*e;case nv:return n*e*2;case wf:return n*e/r.components*r.byteLength;case Af:return n*e/r.components*r.byteLength;case iv:return n*e*2/r.components*r.byteLength;case Rf:return n*e*2/r.components*r.byteLength;case ev:return n*e*3/r.components*r.byteLength;case Nn:return n*e*4/r.components*r.byteLength;case bf:return n*e*4/r.components*r.byteLength;case Dl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yh:case $h:return Math.max(n,16)*Math.max(e,8)/4;case qh:case Kh:return Math.max(n,8)*Math.max(e,8)/2;case Zh:case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ol:case pd:case md:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rv:case gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _d:case vd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OA(n){switch(n){case Oi:case $0:return{byteLength:1,components:1};case fa:case Z0:case Ma:return{byteLength:2,components:1};case Ef:case Tf:return{byteLength:2,components:4};case qr:case Mf:case Xn:return{byteLength:4,components:1};case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):ga("canvas")}function v(R,M,k){let Y=1;const ee=Te(R);if((ee.width>k||ee.height>k)&&(Y=k/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Y*ee.width),Me=Math.floor(Y*ee.height);h===void 0&&(h=g(q,Me));const ce=M?g(q,Me):h;return ce.width=q,ce.height=Me,ce.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Me+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,M,k,Y,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const Me=ee?Pc:Ve.getTransfer(Y);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(R,M){let k;return R?M===null||M===qr||M===Zs?k=n.DEPTH24_STENCIL8:M===Xn?k=n.DEPTH32F_STENCIL8:M===fa&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qr||M===Zs?k=n.DEPTH_COMPONENT24:M===Xn?k=n.DEPTH_COMPONENT32F:M===fa&&(k=n.DEPTH_COMPONENT16),k}function C(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),P(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),E(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,Y=f.get(k);if(Y){const ee=Y[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(Y).length===0&&f.delete(k)}i.remove(R)}function w(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,Y=f.get(k);delete Y[M.__cacheKey],o.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let ee=0;ee<M.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,ee=k.length;Y<ee;Y++){const q=i.get(k[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[Y])}i.remove(R)}let N=0;function j(){N=0}function H(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function $(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Q(R,M){const k=i.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(k,R,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function X(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){G(k,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function J(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){G(k,R,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function L(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ne(k,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const W={[$s]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},Z={[Jt]:n.NEAREST,[K0]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},oe={[pM]:n.NEVER,[yM]:n.ALWAYS,[mM]:n.LESS,[av]:n.LEQUAL,[gM]:n.EQUAL,[xM]:n.GEQUAL,[_M]:n.GREATER,[vM]:n.NOTEQUAL};function Se(R,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===Ll||M.magFilter===Uo||M.magFilter===Ri||M.minFilter===vn||M.minFilter===Ll||M.minFilter===Uo||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Uo&&M.minFilter!==Ri||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Y=M.source;let ee=f.get(Y);ee===void 0&&(ee={},f.set(Y,ee));const q=$(M);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[q].usedTimes++;const Me=ee[R.__cacheKey];Me!==void 0&&(ee[R.__cacheKey].usedTimes--,Me.usedTimes===0&&w(M)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return k}function G(R,M,k){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const ee=Ke(R,M),q=M.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+k);const Me=i.get(q);if(q.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const ce=Ve.getPrimaries(Ve.workingColorSpace),me=M.colorSpace===tr?null:Ve.getPrimaries(M.colorSpace),qe=M.colorSpace===tr||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ie=v(M.image,!1,r.maxTextureSize);ie=ct(M,ie);const ge=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let be=x(M.internalFormat,ge,Ae,M.colorSpace,M.isVideoTexture);Se(Y,M);let _e;const We=M.mipmaps,Oe=M.isVideoTexture!==!0,ot=Me.__version===void 0||ee===!0,D=q.dataReady,le=C(M,ie);if(M.isDepthTexture)be=y(M.format===Qs,M.type),ot&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Ae,null));else if(M.isDataTexture)if(We.length>0){Oe&&ot&&t.texStorage2D(n.TEXTURE_2D,le,be,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)_e=We[V],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,V,be,_e.width,_e.height,0,ge,Ae,_e.data);M.generateMipmaps=!1}else Oe?(ot&&t.texStorage2D(n.TEXTURE_2D,le,be,ie.width,ie.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ae,ie.data)):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Ae,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,be,We[0].width,We[0].height,ie.depth);for(let V=0,K=We.length;V<K;V++)if(_e=We[V],M.format!==Nn)if(ge!==null)if(Oe){if(D)if(M.layerUpdates.size>0){const de=og(_e.width,_e.height,M.format,M.type);for(const ue of M.layerUpdates){const De=_e.data.subarray(ue*de/_e.data.BYTES_PER_ELEMENT,(ue+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,ge,De)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,be,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ge,Ae,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,be,_e.width,_e.height,ie.depth,0,ge,Ae,_e.data)}else{Oe&&ot&&t.texStorage2D(n.TEXTURE_2D,le,be,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)_e=We[V],M.format!==Nn?ge!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,V,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,V,be,_e.width,_e.height,0,ge,Ae,_e.data)}else if(M.isDataArrayTexture)if(Oe){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,be,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const V=og(ie.width,ie.height,M.format,M.type);for(const K of M.layerUpdates){const de=ie.data.subarray(K*V/ie.data.BYTES_PER_ELEMENT,(K+1)*V/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ge,Ae,de)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(M.isData3DTexture)Oe?(ot&&t.texStorage3D(n.TEXTURE_3D,le,be,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)):t.texImage3D(n.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(M.isFramebufferTexture){if(ot)if(Oe)t.texStorage2D(n.TEXTURE_2D,le,be,ie.width,ie.height);else{let V=ie.width,K=ie.height;for(let de=0;de<le;de++)t.texImage2D(n.TEXTURE_2D,de,be,V,K,0,ge,Ae,null),V>>=1,K>>=1}}else if(We.length>0){if(Oe&&ot){const V=Te(We[0]);t.texStorage2D(n.TEXTURE_2D,le,be,V.width,V.height)}for(let V=0,K=We.length;V<K;V++)_e=We[V],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge,Ae,_e):t.texImage2D(n.TEXTURE_2D,V,be,ge,Ae,_e);M.generateMipmaps=!1}else if(Oe){if(ot){const V=Te(ie);t.texStorage2D(n.TEXTURE_2D,le,be,V.width,V.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ae,ie)}else t.texImage2D(n.TEXTURE_2D,0,be,ge,Ae,ie);m(M)&&d(Y),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,k){if(M.image.length!==6)return;const Y=Ke(R,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(ee);if(ee.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);const Me=Ve.getPrimaries(Ve.workingColorSpace),ce=M.colorSpace===tr?null:Ve.getPrimaries(M.colorSpace),me=M.colorSpace===tr||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!qe&&!ie?ge[K]=v(M.image[K],!0,r.maxCubemapSize):ge[K]=ie?M.image[K].image:M.image[K],ge[K]=ct(M,ge[K]);const Ae=ge[0],be=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),We=x(M.internalFormat,be,_e,M.colorSpace),Oe=M.isVideoTexture!==!0,ot=q.__version===void 0||Y===!0,D=ee.dataReady;let le=C(M,Ae);Se(n.TEXTURE_CUBE_MAP,M);let V;if(qe){Oe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,Ae.width,Ae.height);for(let K=0;K<6;K++){V=ge[K].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];M.format!==Nn?be!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,be,_e,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,ue.width,ue.height,0,be,_e,ue.data)}}}else{if(V=M.mipmaps,Oe&&ot){V.length>0&&le++;const K=Te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,be,_e,ge[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ge[K].width,ge[K].height,0,be,_e,ge[K].data);for(let de=0;de<V.length;de++){const De=V[de].image[K].image;Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,De.width,De.height,be,_e,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,De.width,De.height,0,be,_e,De.data)}}else{Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,_e,ge[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,be,_e,ge[K]);for(let de=0;de<V.length;de++){const ue=V[de];Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,be,_e,ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,be,_e,ue.image[K])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),q.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,k,Y,ee,q){const Me=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),me=x(k.internalFormat,Me,ce,k.colorSpace),qe=i.get(M),ie=i.get(k);if(ie.__renderTarget=M,!qe.__hasExternalTextures){const ge=Math.max(1,M.width>>q),Ae=Math.max(1,M.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,me,ge,Ae,M.depth,0,Me,ce,null):t.texImage2D(ee,q,me,ge,Ae,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,ie.__webglTexture,0,Ge(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,ie.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,q=y(M.stencilBuffer,ee),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ge(M);je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const Y=M.textures;for(let ee=0;ee<Y.length;ee++){const q=Y[ee],Me=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),me=x(q.internalFormat,Me,ce,q.colorSpace),qe=Ge(M);k&&je(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,me,M.width,M.height):je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const ee=Y.__webglTexture,q=Ge(M);if(M.depthTexture.format===Os)je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Qs)je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),se(M.__webglDepthbuffer[Y],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),se(M.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(R,M,k){const Y=i.get(R);M!==void 0&&pe(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Le(R)}function mt(R){const M=R.texture,k=i.get(R),Y=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)k.__webglFramebuffer[ce][me]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,me=ee.length;ce<me;ce++){const qe=i.get(ee[ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const me=ee[ce];k.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const qe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=x(me.internalFormat,qe,ie,me.colorSpace,R.isXRRenderTarget===!0),Ae=Ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),se(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Se(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(k.__webglFramebuffer[ce][me],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else pe(k.__webglFramebuffer[ce],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,me=ee.length;ce<me;ce++){const qe=ee[ce],ie=i.get(qe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Se(n.TEXTURE_2D,qe),pe(k.__webglFramebuffer,R,qe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(qe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Se(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(k.__webglFramebuffer[me],R,M,n.COLOR_ATTACHMENT0,ce,me);else pe(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&d(ce),t.unbindTexture()}R.depthBuffer&&Le(R)}function Xe(R){const M=R.textures;for(let k=0,Y=M.length;k<Y;k++){const ee=M[k];if(m(ee)){const q=_(R),Me=i.get(ee).__webglTexture;t.bindTexture(q,Me),d(q),t.unbindTexture()}}}const Mt=[],O=[];function Tn(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,k=R.width,Y=R.height;let ee=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const qe=i.get(M[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,ee,n.NEAREST),l===!0&&(Mt.length=0,O.length=0,Mt.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(q),O.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const qe=i.get(M[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ge(R){return Math.min(r.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ct(R,M){const k=R.colorSpace,Y=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==tn&&k!==tr&&(Ve.getTransfer(k)===rt?(Y!==Nn||ee!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=L,this.rebindTextures=Be,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=je}function BA(n,e){function t(i,r=tr){let s;const o=Ve.getTransfer(r);if(i===Oi)return n.UNSIGNED_BYTE;if(i===Ef)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Q0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$0)return n.BYTE;if(i===Z0)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===Mf)return n.INT;if(i===qr)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Ma)return n.HALF_FLOAT;if(i===J0)return n.ALPHA;if(i===ev)return n.RGB;if(i===Nn)return n.RGBA;if(i===tv)return n.LUMINANCE;if(i===nv)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Qs)return n.DEPTH_STENCIL;if(i===wf)return n.RED;if(i===Af)return n.RED_INTEGER;if(i===iv)return n.RG;if(i===Rf)return n.RG_INTEGER;if(i===bf)return n.RGBA_INTEGER;if(i===Dl||i===Il||i===Ul||i===Fl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===Yh||i===Kh||i===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zh||i===Qh||i===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zh||i===Qh)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===dd||i===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===td)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===pd||i===md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ol)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rv||i===gd||i===_d||i===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class zA extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HA={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vr({vertexShader:VA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new Nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Zr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=new jA,m=t.getContextAttributes();let d=null,_=null;const x=[],y=[],C=new Ce;let b=null;const A=new Zt;A.viewport=new Ze;const P=new Zt;P.viewport=new Ze;const w=[A,P],E=new zA;let N=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=x[G];return ne===void 0&&(ne=new Iu,x[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=x[G];return ne===void 0&&(ne=new Iu,x[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=x[G];return ne===void 0&&(ne=new Iu,x[G]=ne),ne.getHandSpace()};function H(G){const ne=y.indexOf(G.inputSource);if(ne===-1)return;const pe=x[ne];pe!==void 0&&(pe.update(G.inputSource,G.frame,c||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let G=0;G<x.length;G++){const ne=y[G];ne!==null&&(y[G]=null,x[G].disconnect(ne))}N=null,j=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,_=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Yr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Qs:Os,pe=m.stencil?Zs:qr);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Yr(f.textureWidth,f.textureHeight,{format:Nn,type:Oi,depthTexture:new yv(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(G){for(let ne=0;ne<G.removed.length;ne++){const pe=G.removed[ne],se=y.indexOf(pe);se>=0&&(y[se]=null,x[se].disconnect(pe))}for(let ne=0;ne<G.added.length;ne++){const pe=G.added[ne];let se=y.indexOf(pe);if(se===-1){for(let Le=0;Le<x.length;Le++)if(Le>=y.length){y.push(pe),se=Le;break}else if(y[Le]===null){y[Le]=pe,se=Le;break}if(se===-1)break}const Re=x[se];Re&&Re.connect(pe)}}const X=new I,J=new I;function L(G,ne,pe){X.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const se=X.distanceTo(J),Re=ne.projectionMatrix.elements,Le=pe.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),mt=Re[14]/(Re[10]+1),Xe=(Re[9]+1)/Re[5],Mt=(Re[9]-1)/Re[5],O=(Re[8]-1)/Re[0],Tn=(Le[8]+1)/Le[0],Ge=Be*O,je=Be*Tn,we=se/(-O+Tn),ct=we*-O;if(ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ct),G.translateZ(we),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=Be+we,R=mt+we,M=Ge-ct,k=je+(se-ct),Y=Xe*mt/R*Te,ee=Mt*mt/R*Te;G.projectionMatrix.makePerspective(M,k,Y,ee,Te,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function W(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ne=G.near,pe=G.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),E.near=P.near=A.near=ne,E.far=P.far=A.far=pe,(N!==E.near||j!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,j=E.far),A.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,E.layers.mask=A.layers.mask|P.layers.mask;const se=G.parent,Re=E.cameras;W(E,se);for(let Le=0;Le<Re.length;Le++)W(Re[Le],se);Re.length===2?L(E,A,P):E.projectionMatrix.copy(A.projectionMatrix),Z(G,E,se)};function Z(G,ne,pe){pe===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Js*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let oe=null;function Se(G,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let se=!1;pe.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let Le=0;Le<pe.length;Le++){const Be=pe[Le];let mt=null;if(p!==null)mt=p.getViewport(Be);else{const Mt=h.getViewSubImage(f,Be);mt=Mt.viewport,Le===0&&(e.setRenderTargetTextures(_,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(_))}let Xe=w[Le];Xe===void 0&&(Xe=new Zt,Xe.layers.enable(Le),Xe.viewport=new Ze,w[Le]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(mt.x,mt.y,mt.width,mt.height),Le===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(Xe)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Le=h.getDepthInformation(pe[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let pe=0;pe<x.length;pe++){const se=y[pe],Re=x[pe];se!==null&&Re!==void 0&&Re.update(se,ne,c||o)}oe&&oe(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ke=new xv;Ke.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const br=new li,XA=new Fe;function qA(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,gv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,br.copy(y),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(br)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(_,C);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function u(_){const x=h();_.__bindingPointIndex=x;const y=n.createBuffer(),C=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,A=y.length;b<A;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,E=P.length;w<E;w++){const N=P[w];if(p(N,b,w,C)===!0){const j=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let Q=0;Q<H.length;Q++){const X=H[Q],J=v(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,j+$,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,y,C){const b=_.value,A=x+"_"+y;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(_){const x=_.uniforms;let y=0;const C=16;for(let A=0,P=x.length;A<P;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,N=w.length;E<N;E++){const j=w[E],H=Array.isArray(j.value)?j.value:[j.value];for(let $=0,Q=H.length;$<Q;$++){const X=H[$],J=v(X),L=y%C,W=L%J.boundary,Z=L+W;y+=W,Z!==0&&C-Z<J.storage&&(y+=C-Z),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=J.storage}}}const b=y%C;return b>0&&(y+=C-b),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class KA{constructor(e={}){const{canvas:t=OM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const _=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=mr,this.toneMappingExposure=1;const y=this;let C=!1,b=0,A=0,P=null,w=-1,E=null;const N=new Ze,j=new Ze;let H=null;const $=new Ne(0);let Q=0,X=t.width,J=t.height,L=1,W=null,Z=null;const oe=new Ze(0,0,X,J),Se=new Ze(0,0,X,J);let Ke=!1;const G=new Pf;let ne=!1,pe=!1;const se=new Fe,Re=new Fe,Le=new I,Be=new Ze,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Mt(){return P===null?L:1}let O=i;function Tn(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sf}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){const U="webgl2";if(O=Tn(U,T),O===null)throw Tn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,je,we,ct,Te,R,M,k,Y,ee,q,Me,ce,me,qe,ie,ge,Ae,be,_e,We,Oe,ot,D;function le(){Ge=new ew(O),Ge.init(),Oe=new BA(O,Ge),je=new Y1(O,Ge,e,Oe),we=new FA(O,Ge),je.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),ct=new iw(O),Te=new SA,R=new kA(O,Ge,we,Te,je,Oe,ct),M=new $1(y),k=new J1(y),Y=new uE(O),ot=new X1(O,Y),ee=new tw(O,Y,ct,ot),q=new sw(O,ee,Y,ct),be=new rw(O,je,R),ie=new K1(Te),Me=new yA(y,M,k,Ge,je,ot,ie),ce=new qA(y,Te),me=new EA,qe=new CA(Ge),Ae=new W1(y,M,k,we,q,p,l),ge=new IA(y,q,je),D=new YA(O,ct,je,we),_e=new q1(O,Ge,ct),We=new nw(O,Ge,ct),ct.programs=Me.programs,y.capabilities=je,y.extensions=Ge,y.properties=Te,y.renderLists=me,y.shadowMap=ge,y.state=we,y.info=ct}le();const V=new WA(y,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(X,J,!1))},this.getSize=function(T){return T.set(X,J)},this.setSize=function(T,U,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,J=U,t.width=Math.floor(T*L),t.height=Math.floor(U*L),B===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*L,J*L).floor()},this.setDrawingBufferSize=function(T,U,B){X=T,J=U,L=B,t.width=Math.floor(T*B),t.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,U,B,z){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,U,B,z),we.viewport(N.copy(oe).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,U,B,z){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,U,B,z),we.scissor(j.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){we.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(T=!0,U=!0,B=!0){let z=0;if(T){let F=!1;if(P!==null){const re=P.texture.format;F=re===bf||re===Rf||re===Af}if(F){const re=P.texture.type,he=re===Oi||re===qr||re===fa||re===Zs||re===Ef||re===Tf,ve=Ae.getClearColor(),xe=Ae.getClearAlpha(),Pe=ve.r,Ie=ve.g,ye=ve.b;he?(g[0]=Pe,g[1]=Ie,g[2]=ye,g[3]=xe,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Pe,v[1]=Ie,v[2]=ye,v[3]=xe,O.clearBufferiv(O.COLOR,0,v))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT),B&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),qe.dispose(),Te.dispose(),M.dispose(),k.dispose(),q.dispose(),ot.dispose(),D.dispose(),Me.dispose(),V.dispose(),V.removeEventListener("sessionstart",Vf),V.removeEventListener("sessionend",Gf),Mr.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ct.autoReset,U=ge.enabled,B=ge.autoUpdate,z=ge.needsUpdate,F=ge.type;le(),ct.autoReset=T,ge.enabled=U,ge.autoUpdate=B,ge.needsUpdate=z,ge.type=F}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const U=T.target;U.removeEventListener("dispose",De),yt(U)}function yt(T){Ht(T),Te.remove(T)}function Ht(T){const U=Te.get(T).programs;U!==void 0&&(U.forEach(function(B){Me.releaseProgram(B)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,z,F,re){U===null&&(U=mt);const he=F.isMesh&&F.matrixWorld.determinant()<0,ve=jv(T,U,B,z,F);we.setMaterial(z,he);let xe=B.index,Pe=1;if(z.wireframe===!0){if(xe=ee.getWireframeAttribute(B),xe===void 0)return;Pe=2}const Ie=B.drawRange,ye=B.attributes.position;let $e=Ie.start*Pe,at=(Ie.start+Ie.count)*Pe;re!==null&&($e=Math.max($e,re.start*Pe),at=Math.min(at,(re.start+re.count)*Pe)),xe!==null?($e=Math.max($e,0),at=Math.min(at,xe.count)):ye!=null&&($e=Math.max($e,0),at=Math.min(at,ye.count));const ut=at-$e;if(ut<0||ut===1/0)return;ot.setup(F,z,ve,B,xe);let sn,Qe=_e;if(xe!==null&&(sn=Y.get(xe),Qe=We,Qe.setIndex(sn)),F.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*Mt()),Qe.setMode(O.LINES)):Qe.setMode(O.TRIANGLES);else if(F.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*Mt()),F.isLineSegments?Qe.setMode(O.LINES):F.isLineLoop?Qe.setMode(O.LINE_LOOP):Qe.setMode(O.LINE_STRIP)}else F.isPoints?Qe.setMode(O.POINTS):F.isSprite&&Qe.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,pi=F._multiDrawCounts,Je=F._multiDrawCount,Fn=xe?Y.get(xe).bytesPerElement:1,Qr=Te.get(z).currentProgram.getUniforms();for(let fn=0;fn<Je;fn++)Qr.setValue(O,"_gl_DrawID",fn),Qe.render(Ee[fn]/Fn,pi[fn])}else if(F.isInstancedMesh)Qe.renderInstances($e,ut,F.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pi=Math.min(B.instanceCount,Ee);Qe.renderInstances($e,ut,pi)}else Qe.render($e,ut)};function et(T,U,B){T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,ba(T,U,B),T.side=Fi,T.needsUpdate=!0,ba(T,U,B),T.side=ni):ba(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),d=qe.get(B),d.init(U),x.push(d),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),T!==B&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const z=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ve=re[he];et(ve,B,F),z.add(ve)}else et(re,B,F),z.add(re)}),x.pop(),d=null,z},this.compileAsync=function(T,U,B=null){const z=this.compile(T,U,B);return new Promise(F=>{function re(){if(z.forEach(function(he){Te.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){F(T);return}setTimeout(re,10)}Ge.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Un=null;function fi(T){Un&&Un(T)}function Vf(){Mr.stop()}function Gf(){Mr.start()}const Mr=new xv;Mr.setAnimationLoop(fi),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(T){Un=T,V.setAnimationLoop(T),T===null?Mr.stop():Mr.start()},V.addEventListener("sessionstart",Vf),V.addEventListener("sessionend",Gf),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,P),d=qe.get(T,x.length),d.init(U),x.push(d),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,pe),m=me.get(T,_.length),m.init(),_.push(m),V.enabled===!0&&V.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&Ic(re,U,-1/0,y.sortObjects)}Ic(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,Z),Xe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xe&&Ae.addToRenderList(m,T),this.info.render.frame++,ne===!0&&ie.beginShadows();const B=d.state.shadowsArray;ge.render(B,T,U),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let he=0,ve=re.length;he<ve;he++){const xe=re[he];Wf(z,F,T,xe)}Xe&&Ae.render(T);for(let he=0,ve=re.length;he<ve;he++){const xe=re[he];jf(m,T,xe,xe.viewport)}}else F.length>0&&Wf(z,F,T,U),Xe&&Ae.render(T),jf(m,T,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,U),ot.resetDefaultState(),w=-1,E=null,x.pop(),x.length>0?(d=x[x.length-1],ne===!0&&ie.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ic(T,U,B,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){z&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const he=q.update(T),ve=T.material;ve.visible&&m.push(T,he,ve,B,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){const he=q.update(T),ve=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Be.copy(he.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(ve)){const xe=he.groups;for(let Pe=0,Ie=xe.length;Pe<Ie;Pe++){const ye=xe[Pe],$e=ve[ye.materialIndex];$e&&$e.visible&&m.push(T,he,$e,B,Be.z,ye)}}else ve.visible&&m.push(T,he,ve,B,Be.z,null)}}const re=T.children;for(let he=0,ve=re.length;he<ve;he++)Ic(re[he],U,B,z)}function jf(T,U,B,z){const F=T.opaque,re=T.transmissive,he=T.transparent;d.setupLightsView(B),ne===!0&&ie.setGlobalState(y.clippingPlanes,B),z&&we.viewport(N.copy(z)),F.length>0&&Ra(F,U,B),re.length>0&&Ra(re,U,B),he.length>0&&Ra(he,U,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Wf(T,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Yr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ma:Oi,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const re=d.state.transmissionRenderTarget[z.id],he=z.viewport||N;re.setSize(he.z,he.w);const ve=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor($),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Ae.render(B);const xe=y.toneMapping;y.toneMapping=mr;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),ne===!0&&ie.setGlobalState(y.clippingPlanes,z),Ra(T,B,z),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ye=0,$e=U.length;ye<$e;ye++){const at=U[ye],ut=at.object,sn=at.geometry,Qe=at.material,Ee=at.group;if(Qe.side===ni&&ut.layers.test(z.layers)){const pi=Qe.side;Qe.side=dn,Qe.needsUpdate=!0,Xf(ut,B,z,sn,Qe,Ee),Qe.side=pi,Qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(ve),y.setClearColor($,Q),Pe!==void 0&&(z.viewport=Pe),y.toneMapping=xe}function Ra(T,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=T.length;F<re;F++){const he=T[F],ve=he.object,xe=he.geometry,Pe=z===null?he.material:z,Ie=he.group;ve.layers.test(B.layers)&&Xf(ve,U,B,xe,Pe,Ie)}}function Xf(T,U,B,z,F,re){T.onBeforeRender(y,U,B,z,F,re),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,U,B,z,T,re),F.transparent===!0&&F.side===ni&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,y.renderBufferDirect(B,U,z,F,T,re),F.side=Fi,F.needsUpdate=!0,y.renderBufferDirect(B,U,z,F,T,re),F.side=ni):y.renderBufferDirect(B,U,z,F,T,re),T.onAfterRender(y,U,B,z,F,re)}function ba(T,U,B){U.isScene!==!0&&(U=mt);const z=Te.get(T),F=d.state.lights,re=d.state.shadowsArray,he=F.state.version,ve=Me.getParameters(T,F.state,re,U,B),xe=Me.getProgramCacheKey(ve);let Pe=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",De),Pe=new Map,z.programs=Pe);let Ie=Pe.get(xe);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===he)return Yf(T,ve),Ie}else ve.uniforms=Me.getUniforms(T),T.onBeforeCompile(ve,y),Ie=Me.acquireProgram(ve,xe),Pe.set(xe,Ie),z.uniforms=ve.uniforms;const ye=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ye.clippingPlanes=ie.uniform),Yf(T,ve),z.needsLights=Xv(T),z.lightsStateVersion=he,z.needsLights&&(ye.ambientLightColor.value=F.state.ambient,ye.lightProbe.value=F.state.probe,ye.directionalLights.value=F.state.directional,ye.directionalLightShadows.value=F.state.directionalShadow,ye.spotLights.value=F.state.spot,ye.spotLightShadows.value=F.state.spotShadow,ye.rectAreaLights.value=F.state.rectArea,ye.ltc_1.value=F.state.rectAreaLTC1,ye.ltc_2.value=F.state.rectAreaLTC2,ye.pointLights.value=F.state.point,ye.pointLightShadows.value=F.state.pointShadow,ye.hemisphereLights.value=F.state.hemi,ye.directionalShadowMap.value=F.state.directionalShadowMap,ye.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ye.spotShadowMap.value=F.state.spotShadowMap,ye.spotLightMatrix.value=F.state.spotLightMatrix,ye.spotLightMap.value=F.state.spotLightMap,ye.pointShadowMap.value=F.state.pointShadowMap,ye.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function qf(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=kl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Yf(T,U){const B=Te.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function jv(T,U,B,z,F){U.isScene!==!0&&(U=mt),R.resetTextureUnits();const re=U.fog,he=z.isMeshStandardMaterial?U.environment:null,ve=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:tn,xe=(z.isMeshStandardMaterial?k:M).get(z.envMap||he),Pe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let ut=mr;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=y.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=sn!==void 0?sn.length:0,Ee=Te.get(z),pi=d.state.lights;if(ne===!0&&(pe===!0||T!==E)){const wn=T===E&&z.id===w;ie.setState(z,T,wn)}let Je=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==pi.state.version||Ee.outputColorSpace!==ve||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==xe||z.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ie||Ee.morphTargets!==ye||Ee.morphNormals!==$e||Ee.morphColors!==at||Ee.toneMapping!==ut||Ee.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ee.__version=z.version);let Fn=Ee.currentProgram;Je===!0&&(Fn=ba(z,U,F));let Qr=!1,fn=!1,ho=!1;const ht=Fn.getUniforms(),Zn=Ee.uniforms;if(we.useProgram(Fn.program)&&(Qr=!0,fn=!0,ho=!0),z.id!==w&&(w=z.id,fn=!0),Qr||E!==T){we.buffers.depth.getReversed()?(se.copy(T.projectionMatrix),BM(se),zM(se),ht.setValue(O,"projectionMatrix",se)):ht.setValue(O,"projectionMatrix",T.projectionMatrix),ht.setValue(O,"viewMatrix",T.matrixWorldInverse);const zi=ht.map.cameraPosition;zi!==void 0&&zi.setValue(O,Le.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,fn=!0,ho=!0)}if(F.isSkinnedMesh){ht.setOptional(O,F,"bindMatrix"),ht.setOptional(O,F,"bindMatrixInverse");const wn=F.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),ht.setValue(O,"boneTexture",wn.boneTexture,R))}F.isBatchedMesh&&(ht.setOptional(O,F,"batchingTexture"),ht.setValue(O,"batchingTexture",F._matricesTexture,R),ht.setOptional(O,F,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",F._indirectTexture,R),ht.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",F._colorsTexture,R));const fo=B.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&be.update(F,B,Fn),(fn||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,ht.setValue(O,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Zn.envMap.value=xe,Zn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Zn.envMapIntensity.value=U.environmentIntensity),fn&&(ht.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Wv(Zn,ho),re&&z.fog===!0&&ce.refreshFogUniforms(Zn,re),ce.refreshMaterialUniforms(Zn,z,L,J,d.state.transmissionRenderTarget[T.id]),kl.upload(O,qf(Ee),Zn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kl.upload(O,qf(Ee),Zn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(O,"center",F.center),ht.setValue(O,"modelViewMatrix",F.modelViewMatrix),ht.setValue(O,"normalMatrix",F.normalMatrix),ht.setValue(O,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wn=z.uniformsGroups;for(let zi=0,Hi=wn.length;zi<Hi;zi++){const Kf=wn[zi];D.update(Kf,Fn),D.bind(Kf,Fn)}}return Fn}function Wv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Xv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,U,B){Te.get(T.texture).__webglTexture=U,Te.get(T.depthTexture).__webglTexture=B;const z=Te.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=Te.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){P=T,b=U,A=B;let z=!0,F=null,re=!1,he=!1;if(T){const xe=Te.get(T);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(O.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(xe.__hasExternalTextures)R.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ye=T.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(T.width!==ye.image.width||T.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Ie=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?F=Ie[U][B]:F=Ie[U],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[B]:F=Ie,N.copy(T.viewport),j.copy(T.scissor),H=T.scissorTest}else N.copy(oe).multiplyScalar(L).floor(),j.copy(Se).multiplyScalar(L).floor(),H=Ke;if(we.bindFramebuffer(O.FRAMEBUFFER,F)&&z&&we.drawBuffers(T,F),we.viewport(N),we.scissor(j),we.setScissorTest(H),re){const xe=Te.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,B)}else if(he){const xe=Te.get(T.texture),Pe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Pe)}w=-1},this.readRenderTargetPixels=function(T,U,B,z,F,re,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){we.bindFramebuffer(O.FRAMEBUFFER,ve);try{const xe=T.texture,Pe=xe.format,Ie=xe.type;if(!je.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&B>=0&&B<=T.height-F&&O.readPixels(U,B,z,F,Oe.convert(Pe),Oe.convert(Ie),re)}finally{const xe=P!==null?Te.get(P).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,z,F,re,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){const xe=T.texture,Pe=xe.format,Ie=xe.type;if(!je.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-z&&B>=0&&B<=T.height-F){we.bindFramebuffer(O.FRAMEBUFFER,ve);const ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ye),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(U,B,z,F,Oe.convert(Pe),Oe.convert(Ie),0);const $e=P!==null?Te.get(P).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,$e);const at=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await kM(O,at,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(ye),O.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-B),F=Math.floor(T.image.width*z),re=Math.floor(T.image.height*z),he=U!==null?U.x:0,ve=U!==null?U.y:0;R.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,he,ve,F,re),we.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,z=null,F=0){T.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,B=null);let re,he,ve,xe,Pe,Ie,ye,$e,at;const ut=T.isCompressedTexture?T.mipmaps[F]:T.image;B!==null?(re=B.max.x-B.min.x,he=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,Pe=B.min.y,Ie=B.isBox3?B.min.z:0):(re=ut.width,he=ut.height,ve=ut.depth||1,xe=0,Pe=0,Ie=0),z!==null?(ye=z.x,$e=z.y,at=z.z):(ye=0,$e=0,at=0);const sn=Oe.convert(U.format),Qe=Oe.convert(U.type);let Ee;U.isData3DTexture?(R.setTexture3D(U,0),Ee=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Ee=O.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Ee=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const pi=O.getParameter(O.UNPACK_ROW_LENGTH),Je=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Qr=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie);const ho=T.isDataArrayTexture||T.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Zn=Te.get(T),fo=Te.get(U),wn=Te.get(Zn.__renderTarget),zi=Te.get(fo.__renderTarget);we.bindFramebuffer(O.READ_FRAMEBUFFER,wn.__webglFramebuffer),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Hi=0;Hi<ve;Hi++)ho&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.get(T).__webglTexture,F,Ie+Hi),T.isDepthTexture?(ht&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,F,at+Hi),O.blitFramebuffer(xe,Pe,re,he,ye,$e,re,he,O.DEPTH_BUFFER_BIT,O.NEAREST)):ht?O.copyTexSubImage3D(Ee,F,ye,$e,at+Hi,xe,Pe,re,he):O.copyTexSubImage2D(Ee,F,ye,$e,at+Hi,xe,Pe,re,he);we.bindFramebuffer(O.READ_FRAMEBUFFER,null),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ee,F,ye,$e,at,re,he,ve,sn,Qe,ut.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ee,F,ye,$e,at,re,he,ve,sn,ut.data):O.texSubImage3D(Ee,F,ye,$e,at,re,he,ve,sn,Qe,ut):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,ye,$e,re,he,sn,Qe,ut.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,ye,$e,ut.width,ut.height,sn,ut.data):O.texSubImage2D(O.TEXTURE_2D,F,ye,$e,re,he,sn,Qe,ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,pi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Je),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),F===0&&U.generateMipmaps&&O.generateMipmap(Ee),we.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,z=null,F=0){return T.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,B,z,F)},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,we.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class $A extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ZA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yd,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new I;class Df{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Df(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ag=new I,lg=new Ze,cg=new Ze,QA=new I,ug=new Fe,dl=new I,Uu=new ci,hg=new Fe,Fu=new Ea;class JA extends xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cm,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,dl),this.boundingBox.expandByPoint(dl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,dl),this.boundingSphere.expandByPoint(dl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uu.copy(this.boundingSphere),Uu.applyMatrix4(r),e.ray.intersectsSphere(Uu)!==!1&&(hg.copy(r).invert(),Fu.copy(e.ray).applyMatrix4(hg),!(this.boundingBox!==null&&Fu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;lg.fromBufferAttribute(r.attributes.skinIndex,e),cg.fromBufferAttribute(r.attributes.skinWeight,e),ag.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=cg.getComponent(s);if(o!==0){const a=lg.getComponent(s);ug.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(QA.copy(ag).applyMatrix4(ug),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wv extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Av extends It{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Jt,u=Jt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dg=new Fe,eR=new Fe;class If{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:eR;dg.multiplyMatrices(a,t[s]),dg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new If(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Av(t,e,e,Nn,Xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wv),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Md extends en{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Fe,fg=new Fe,fl=[],pg=new Bi,tR=new Fe,Ao=new xn,Ro=new ci;class nR extends xn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Md(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),pg.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(pg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),Ro.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ps),fg.multiplyMatrices(i,ps),Ao.matrixWorld=fg,Ao.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){const l=fl[o];l.instanceId=s,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Md(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Av(new Float32Array(r*this.count),r,this.count,wf,Xn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rv extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new I,dc=new I,mg=new Fe,bo=new Ea,pl=new ci,Ou=new I,gg=new I;class Uf extends vt{constructor(e=new ui,t=new Rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)hc.fromBufferAttribute(t,r-1),dc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=hc.distanceTo(dc);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;mg.copy(r).invert(),bo.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),_=u.getX(v+1),x=ml(this,e,bo,l,d,_);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=ml(this,e,bo,l,v,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=ml(this,e,bo,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=ml(this,e,bo,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ml(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(hc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,s),t.distanceSqToSegment(hc,dc,Ou,gg)>i)return;Ou.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ou);if(!(l<e.near||l>e.far))return{distance:l,point:gg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const _g=new I,vg=new I;class iR extends Uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_g.fromBufferAttribute(t,r),vg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_g.distanceTo(vg);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rR extends Uf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bv extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new Fe,Ed=new Ea,gl=new ci,_l=new I;class sR extends vt{constructor(e=new ui,t=new bv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;xg.copy(r).invert(),Ed.copy(e.ray).applyMatrix4(xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);_l.fromBufferAttribute(h,m),yg(_l,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)_l.fromBufferAttribute(h,g),yg(_l,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yg(n,e,t,i,r,s,o){const a=Ed.distanceSqToPoint(n);if(a<t){const l=new I;Ed.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ff extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Ff{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function oR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function aR(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Cv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class wa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lR extends wa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:um,endingEnd:um}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hm:s=e,a=2*t-i;break;case dm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hm:o=e,l=2*i-t;break;case dm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let C=0;C!==a;++C)s[C]=d*o[u+C]+_*o[c+C]+x*o[l+C]+y*o[h+C];return s}}class cR extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class uR extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vl(t,this.TimeBufferType),this.values=vl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vl(e.times,Array),values:vl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&oR(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===au,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ma;class lo extends di{constructor(e,t,i){super(e,t,i)}}lo.prototype.ValueTypeName="bool";lo.prototype.ValueBufferType=Array;lo.prototype.DefaultInterpolation=pa;lo.prototype.InterpolantFactoryMethodLinear=void 0;lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Pv extends di{}Pv.prototype.ValueTypeName="color";class to extends di{}to.prototype.ValueTypeName="number";class hR extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ai.slerpFlat(s,0,o,c-a,o,c,l);return s}}class no extends di{InterpolantFactoryMethodLinear(e){return new hR(this.times,this.values,this.getValueSize(),e)}}no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends di{constructor(e,t,i){super(e,t,i)}}co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=pa;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends di{}io.prototype.ValueTypeName="vector";class dR{constructor(e="",t=-1,i=[],r=cM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pR(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(di.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=aR(l);l=Sg(l,1,u),c=Sg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new to(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,g,v){if(p.length!==0){const m=[],d=[];Cv(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(const v in p){const m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){const x=f[g];m.push(x.time),d.push(x.morphTarget===v?1:0)}r.push(new to(".morphTargetInfluence["+v+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(io,p+".position",f,"pos",r),i(no,p+".quaternion",f,"rot",r),i(io,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return Pv;case"quaternion":return no;case"bool":case"boolean":return lo;case"string":return co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fR(n.type);if(n.times===void 0){const t=[],i=[];Cv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const sr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const gR=new mR;class uo{constructor(e){this.manager=e!==void 0?e:gR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class _R extends Error{constructor(e,t){super(e),this.response=t}}class Nv extends uo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){_();function _(){h.read().then(({done:x,value:y})=>{if(x)d.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,A=u.length;b<A;b++){const P=u[b];P.onProgress&&P.onProgress(C)}d.enqueue(y),_()}},x=>{d.error(x)})}}});return new Response(m)}else throw new _R(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{sr.add(e,c);const u=yi[e];delete yi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vR extends uo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ga("img");function l(){u(),sr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xR extends uo{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new vR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Dc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ku=new Fe,Mg=new I,Eg=new I;class Of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pf,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yR extends Of{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Js*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SR extends Dc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tg=new Fe,Co=new I,Bu=new I;class MR extends Of{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),i.position.copy(Co),Bu.copy(i.position),Bu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bu),i.updateMatrixWorld(),r.makeTranslation(-Co.x,-Co.y,-Co.z),Tg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tg)}}class ER extends Dc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new MR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TR extends Of{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wR extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new TR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AR extends Dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ko{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RR extends uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return sr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),sr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});sr.add(e,l),s.manager.itemStart(e)}}const kf="\\[\\]\\.:\\/",bR=new RegExp("["+kf+"]","g"),Bf="[^"+kf+"]",CR="[^"+kf.replace("\\.","")+"]",PR=/((?:WC+[\/:])*)/.source.replace("WC",Bf),NR=/(WCOD+)?/.source.replace("WCOD",CR),LR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),DR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),IR=new RegExp("^"+PR+NR+LR+DR+"$"),UR=["material","materials","bones","map"];class FR{constructor(e,t,i){const r=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bR,"")}static parseTrackName(e){const t=IR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);UR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=FR;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OR extends Zr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sf);const Ag={type:"change"},zf={type:"start"},Lv={type:"end"},xl=new Ea,Rg=new Qi,kR=Math.cos(70*lv.DEG2RAD),At=new I,on=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6;class BR extends OR{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ai,this._lastTargetPosition=new I,this._quat=new ai().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wg,this._sphericalDelta=new wg,this._scale=1,this._panOffset=new I,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new I,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HR.bind(this),this._onPointerDown=zR.bind(this),this._onPointerUp=VR.bind(this),this._onContextMenu=KR.bind(this),this._onMouseWheel=WR.bind(this),this._onKeyDown=XR.bind(this),this._onTouchStart=qR.bind(this),this._onTouchMove=YR.bind(this),this._onMouseDown=GR.bind(this),this._onMouseMove=jR.bind(this),this._interceptControlDown=$R.bind(this),this._interceptControlUp=ZR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ag),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<kR?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(Ag),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;At.copy(r).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function HR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lv),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case Us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case Us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(zf)}function jR(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function WR(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(zf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lv))}function XR(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function qR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(zf)}function YR(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function KR(n){this.enabled!==!1&&n.preventDefault()}function $R(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bg(n,e){if(e===uM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===xd||e===sv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===xd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Dv extends uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ko.extractUrlBase(e);o=Ko.resolveURL(c,this.path)}else o=Ko.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Nv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Iv){try{o[ze.KHR_BINARY_GLTF]=new _b(e)}catch(h){r&&r(h);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Pb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ze.KHR_MATERIALS_UNLIT:o[h]=new eb;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new vb(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[h]=new xb;break;case ze.KHR_MESH_QUANTIZATION:o[h]=new yb;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function QR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JR{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wR(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ER(u),c.distance=h;break;case"spot":c=new SR(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class eb{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,i){const r=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ft))}return Promise.all(r)}}class tb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class nb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(s)}}class ib{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class rb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class sb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ob{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ab{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],tn),Promise.all(s)}}class lb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(s)}}class ub{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class hb{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class fb{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pb{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mb{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}}class gb{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const v=new Fe,m=new I,d=new ai,_=new I(1,1,1),x=new nR(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(m,d,_));for(const y in l)if(y==="_COLOR_0"){const C=l[y];x.instanceColor=new Md(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);vt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Iv="glTF",Po=12,Cg={JSON:1313821514,BIN:5130562};class _b{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Po),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Iv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Po,s=new DataView(e,Po);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Cg.JSON){const c=new Uint8Array(e,Po+o,a);this.content=i.decode(c)}else if(l===Cg.BIN){const c=Po+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Td[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Td[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Bs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},a,c,tn,f)})})}}class xb{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yb{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Uv extends wa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,_=1-m,x=d-f+h;for(let y=0;y!==a;y++){const C=o[v+y+a],b=o[v+y+l]*u,A=o[g+y+a],P=o[g+y]*u;s[y]=_*C+x*b+m*A+d*P}return s}}const Sb=new ai;class Mb extends Uv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return Sb.fromArray(s).normalize().toArray(s),s}}const Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pg={9728:Jt,9729:vn,9984:K0,9985:Ll,9986:Uo,9987:Ri},Ng={33071:rr,33648:cc,10497:$s},Hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Eb={CUBICSPLINE:void 0,LINEAR:ma,STEP:pa},Vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ff({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),n.DefaultMaterial}function Cr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ei(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Ab(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(n){let e;const t=n.extensions&&n.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gu(t.attributes):e=n.indices+":"+Gu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Gu(n.targets[i]);return e}function Gu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Cb=new Fe;class Pb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new xR(this.options.manager):this.textureLoader=new RR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Cr(s,a,r),Ei(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ko.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Hu[r.type],a=Bs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new en(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Hu[r.type],c=Bs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==h){const d=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let x=t.cache.get(_);x||(v=new c(a,d*p,r.count*p/u),x=new ZA(v,p/u),t.cache.add(_,x)),m=new Df(x,l,f%p/u,g)}else a===null?v=new c(r.count*l):v=new c(a,f,r.count*l),m=new en(v,l,g);if(r.sparse!==void 0){const d=Hu.SCALAR,_=Bs[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new _(o[1],x,r.sparse.count*d),b=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=C.length;A<P;A++){const w=C[A];if(m.setX(w,b[A*l]),l>=2&&m.setY(w,b[A*l+1]),l>=3&&m.setZ(w,b[A*l+2]),l>=4&&m.setW(w,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Pg[f.magFilter]||vn,u.minFilter=Pg[f.minFilter]||Ri,u.wrapS=Ng[f.wrapS]||$s,u.wrapT=Ng[f.wrapT]||$s,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==vn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new It(v);m.needsUpdate=!0,f(m)}),t.load(Ko.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ei(h,o),h.userData.mimeType=o.mimeType||bb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bv,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Rv,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ff}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const h=r[ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ni);const u=s.alphaMode||Vu.OPAQUE;if(u===Vu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==kr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==kr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==kr){const h=s.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],tn)}return s.emissiveTexture!==void 0&&o!==kr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ft)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ei(h,s),t.associations.set(h,{materials:e}),s.extensions&&Cr(r,h,s),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Rb(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Lg(new ui,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Tb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let d;const _=c[p];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new JA(v,_):new xn(v,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?d.geometry=bg(d.geometry,sv):m.mode===Rn.TRIANGLE_FAN&&(d.geometry=bg(d.geometry,xd));else if(m.mode===Rn.LINES)d=new iR(v,_);else if(m.mode===Rn.LINE_STRIP)d=new Uf(v,_);else if(m.mode===Rn.LINE_LOOP)d=new rR(v,_);else if(m.mode===Rn.POINTS)d=new sR(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ab(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Ei(d,s),m.extensions&&Cr(r,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Cr(r,h[0],s),h[0];const f=new Br;s.extensions&&Cr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(lv.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Nf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ei(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Fe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new If(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const p=r.channels[h],g=r.samplers[p.sampler],v=p.target,m=v.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let _=0,x=f.length;_<x;_++){const y=f[_],C=p[_],b=g[_],A=v[_],P=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=i._createAnimationTracks(y,C,b,A,P);if(w)for(let E=0;E<w.length;E++)d.push(w[E])}return new dR(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Cb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new wv:c.length>1?u=new Br:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ei(u,s),s.extensions&&Cr(i,u,s),s.matrix!==void 0){const h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Br;i.name&&(s.name=r.createUniqueName(i.name)),Ei(s,i),i.extensions&&Cr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof si||f instanceof It)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ki[s.path]===Ki.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ki[s.path]){case Ki.weights:c=to;break;case Ki.rotation:c=no;break;case Ki.position:case Ki.scale:c=io;break;default:switch(i.itemSize){case 1:c=to;break;case 2:case 3:default:c=io;break}break}const u=r.interpolation!==void 0?Eb[r.interpolation]:ma,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+Ki[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof no?Mb:Uv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nb(n,e,t){const i=e.attributes,r=new Bi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=wd(Bs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const v=wd(Bs[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ci;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Lg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Td[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ve.workingColorSpace!==tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Ei(n,e),Nb(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?wb(n,e.targets,t):n})}new Dv;const Lb=()=>{const n=oi.useRef();return oi.useEffect(()=>{const e=n.current,t=new $A,i=new Zt(75,e.clientWidth/e.clientHeight,.1,1e3),r=new KA;r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const s=new AR(16777215,1);t.add(s),new Dv().load("src/assets/villa.glb",l=>{t.add(l.scene)},void 0,l=>{console.error(l)}),i.position.z=20,i.position.y=20,new BR(i,r.domElement);const a=()=>{requestAnimationFrame(a),r.render(t,i)};return a(),()=>{e.removeChild(r.domElement),r.dispose()}},[]),S.jsx("div",{ref:n,style:{width:"400px",height:"300px",justifySelf:"center"}})},Db=()=>{const[n,e]=oi.useState(0),t=i=>{e(i)};return S.jsxs("section",{className:"projects section",id:"projects",children:[S.jsx("h2",{className:"section__title",children:"Projects"}),S.jsx("span",{className:"section__subtitle",children:"What i worked on"}),S.jsxs("div",{className:"projects__container container grid",children:[S.jsxs("div",{className:"projects__content",children:[S.jsxs("div",{children:[S.jsx("i",{className:"uil uil-arrow projects__icon"}),S.jsxs("h3",{className:"projects__title",children:[S.jsx("br",{}),"MicMac"]})]}),S.jsxs("span",{className:"projects__button",onClick:()=>t(1),children:["View More",S.jsx("i",{className:"uil uil-arrow-right projects__button-icon"})]}),S.jsx("div",{className:n===1?"projects__modal active-modal":"projects__modal",children:S.jsxs("div",{className:"projects__modal-content",children:[S.jsx("i",{onClick:()=>t(0),className:"uil uil-times projects__modal-close"}),S.jsx("h3",{className:"projects__modal-title",children:"MicMac"}),S.jsx("p",{className:"projects__modal-description",children:"hhhhhhhhhhhhhhhhhhhhhhhhh"}),S.jsxs("ul",{className:"projects__modal-projects grid",children:[S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]})]})]})})]}),S.jsxs("div",{className:"projects__content",children:[S.jsxs("div",{children:[S.jsx("i",{className:"uil uil-cube projects__icon"}),S.jsxs("h3",{className:"projects__title",children:[S.jsx("br",{}),"BIM"]})]}),S.jsxs("span",{className:"projects__button",onClick:()=>t(2),children:["View More",S.jsx("i",{className:"uil uil-arrow-right projects__button-icon"})]}),S.jsx("div",{className:n===2?"projects__modal active-modal":"projects__modal",children:S.jsxs("div",{className:"projects__modal-content",children:[S.jsx("i",{onClick:()=>t(0),className:"uil uil-times projects__modal-close"}),S.jsx("h3",{className:"projects__modal-title",children:"BIM"}),S.jsx("p",{className:"projects__modal-description",children:"hhhhhhhhhhhhhhhhhhhhhhhhh"}),S.jsx(Lb,{}),S.jsxs("ul",{className:"projects__modal-projects grid",children:[S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"Modeling of a structure (villa) in 3D using BIM methodology (Autodesk Revit)."})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"Modeling with detailed exterior and interior architecture of the structure (LOD4 levels)."})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]})]})]})})]}),S.jsxs("div",{className:"projects__content",children:[S.jsxs("div",{children:[S.jsx("i",{className:"uil uil-web-grid projects__icon"}),S.jsxs("h3",{className:"projects__title",children:[S.jsx("br",{}),"Solar Panel Anomalies"]})]}),S.jsxs("span",{className:"projects__button",onClick:()=>t(3),children:["View More",S.jsx("i",{className:"uil uil-arrow-right projects__button-icon"})]}),S.jsx("div",{className:n===3?"projects__modal active-modal":"projects__modal",children:S.jsxs("div",{className:"projects__modal-content",children:[S.jsx("i",{onClick:()=>t(0),className:"uil uil-times projects__modal-close"}),S.jsx("h3",{className:"projects__modal-title",children:"Solar Panel Anomalies"}),S.jsx("p",{className:"projects__modal-description",children:"hhhhhhhhhhhhhhhhhhhhhhhhh"}),S.jsxs("ul",{className:"projects__modal-projects grid",children:[S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]}),S.jsxs("li",{className:"projects__modal-project",children:[S.jsx("i",{className:"uil uil-check-circle projects__modal-icon"}),S.jsx("p",{className:"projects__modal-info",children:"gggggggggggg"})]})]})]})})]})]})]})};class Aa{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const Ib=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},kt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ib()},Hf=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},Ub=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Hf(n);kt.publicKey=t.publicKey,kt.blockHeadless=t.blockHeadless,kt.storageProvider=t.storageProvider,kt.blockList=t.blockList,kt.limitRate=t.limitRate,kt.origin=t.origin||e},Fv=async(n,e,t={})=>{const i=await fetch(kt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Aa(i.status,r);if(i.ok)return s;throw s},Ov=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Fb=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},kv=n=>n.webdriver||!n.languages||n.languages.length===0,Bv=()=>new Aa(451,"Unavailable For Headless Browser"),Ob=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},kb=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},Bb=(n,e)=>n instanceof FormData?n.get(e):n[e],zv=(n,e)=>{if(kb(n))return!1;Ob(n.list,n.watchVariable);const t=Bb(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Hv=()=>new Aa(403,"Forbidden"),zb=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},Hb=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Vv=async(n,e,t)=>{if(!e.throttle||!t)return!1;zb(e.throttle,e.id);const i=e.id||n;return await Hb(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Gv=()=>new Aa(429,"Too Many Requests"),Vb=async(n,e,t,i)=>{const r=Hf(i),s=r.publicKey||kt.publicKey,o=r.blockHeadless||kt.blockHeadless,a=r.storageProvider||kt.storageProvider,l={...kt.blockList,...r.blockList},c={...kt.limitRate,...r.limitRate};return o&&kv(navigator)?Promise.reject(Bv()):(Ov(s,n,e),Fb(t),t&&zv(l,t)?Promise.reject(Hv()):await Vv(location.pathname,c,a)?Promise.reject(Gv()):Fv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},Gb=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},jb=n=>typeof n=="string"?document.querySelector(n):n,Wb=async(n,e,t,i)=>{const r=Hf(i),s=r.publicKey||kt.publicKey,o=r.blockHeadless||kt.blockHeadless,a=kt.storageProvider||r.storageProvider,l={...kt.blockList,...r.blockList},c={...kt.limitRate,...r.limitRate};if(o&&kv(navigator))return Promise.reject(Bv());const u=jb(t);Ov(s,n,e),Gb(u);const h=new FormData(u);return zv(l,h)?Promise.reject(Hv()):await Vv(location.pathname,c,a)?Promise.reject(Gv()):(h.append("lib_version","4.4.1"),h.append("service_id",n),h.append("template_id",e),h.append("user_id",s),Fv("/api/v1.0/email/send-form",h))},Xb={init:Ub,send:Vb,sendForm:Wb,EmailJSResponseStatus:Aa},qb=()=>{const n=oi.useRef(),e=t=>{t.preventDefault(),Xb.sendForm("service_ekodakn","template_h7fe4yc",n.current,{publicKey:"YBVHVmvkZ5P2o3zgY"}),t.target.reset()};return S.jsxs("section",{className:"contact section",id:"contact",children:[S.jsx("h2",{className:"section__title",children:"Get in touch"}),S.jsx("span",{className:"section__subtitle",children:"Contact me"}),S.jsxs("div",{className:"contact__container container grid",children:[S.jsxs("div",{className:"contact__content",children:[S.jsx("h3",{className:"contact__title",children:"Talk to me"}),S.jsxs("div",{className:"contact__info",children:[S.jsxs("div",{className:"contact__card",children:[S.jsx("i",{className:"bx bx-mail-send contact__card-icon"}),S.jsx("h3",{className:"contact__card-title",children:"Email"}),S.jsx("span",{className:"contact__card-data",children:"omar.baouch@iav.ac.ma"}),S.jsxs("a",{href:"mailto:omar.baouch@iav.ac.ma",className:"contact__button",children:["Write me "," ",S.jsx("i",{className:"bx bx-right-arrow-alt contact__button-icon"})]})]}),S.jsxs("div",{className:"contact__card",children:[S.jsx("i",{className:"bx bx-phone contact__card-icon"}),S.jsx("h3",{className:"contact__card-title",children:"Phone"}),S.jsx("span",{className:"contact__card-data",children:"+212690026949"}),S.jsxs("a",{href:"https://wa.me/+212690026949",className:"contact__button",children:["Write me "," ",S.jsx("i",{className:"bx bx-right-arrow-alt contact__button-icon"})]})]}),S.jsxs("div",{className:"contact__card",children:[S.jsx("i",{className:"bx bxl-linkedin contact__card-icon"}),S.jsx("h3",{className:"contact__card-title",children:"Linkedin"}),S.jsx("span",{className:"contact__card-data",children:"omar-baouch"}),S.jsxs("a",{href:"https://www.linkedin.com/in/omar-baouch",className:"contact__button",children:["Write me "," ",S.jsx("i",{className:"bx bx-right-arrow-alt contact__button-icon"})]})]})]})]}),S.jsxs("div",{className:"contact__content",children:[S.jsx("h3",{className:"contact__title",children:" Write me "}),S.jsxs("form",{ref:n,onSubmit:e,className:"contact__form",children:[S.jsxs("div",{className:"contact__form-div",children:[S.jsx("label",{className:"contact__form-tag",children:"Name"}),S.jsx("input",{type:"text",name:"name",className:"contact__form-input",placeholder:"Insert your name"})]}),S.jsxs("div",{className:"contact__form-div",children:[S.jsx("label",{className:"contact__form-tag",children:"Email"}),S.jsx("input",{type:"email",name:"email",className:"contact__form-input",placeholder:"Insert your email"})]}),S.jsxs("div",{className:"contact__form-div contact__form-area",children:[S.jsx("label",{className:"contact__form-tag",children:"Say something"}),S.jsx("textarea",{name:"text",cols:"30",rows:"10",className:"contact__form-input"})]}),S.jsxs("button",{className:"button button--flex",children:["Send Message",S.jsxs("svg",{className:"button__icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[S.jsx("path",{d:"M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",fill:"var(--container-color)"}),S.jsx("path",{d:"M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",fill:"var(--container-color)"})]})]})]})]})]})]})},Yb=()=>S.jsx("footer",{className:"footer",children:S.jsxs("div",{className:"footer__container container",children:[S.jsx("h1",{className:"footer__title",children:"BAOUCH"}),S.jsxs("ul",{className:"footer__list",children:[S.jsx("li",{children:S.jsx("a",{href:"#About",className:"footer__link",children:"About"})}),S.jsx("li",{children:S.jsx("a",{href:"#projects",className:"footer__link",children:"Projects"})}),S.jsx("li",{children:S.jsx("a",{href:"#skills",className:"footer__link",children:"Skills"})})]}),S.jsxs("div",{className:"footer__social",children:[S.jsx("a",{href:"https://www.instagram.com/omar.baouch",className:"footer__social-link",target:"_blank",children:S.jsx("i",{className:"bx bxl-instagram"})}),S.jsx("a",{href:"https://web.facebook.com/baouch.omar.0/",className:"footer__social-link",target:"_blank",children:S.jsx("i",{className:"bx bxl-facebook"})}),S.jsx("a",{href:"htts://www.linkedin.com/in/omar-baouch",className:"footer__social-link",target:"_blank",children:S.jsx("i",{className:"bx bxl-linkedin"})})]}),S.jsx("span",{className:"footer__copy",children:" © Crypticalcoder. All rights reserved"})]})}),Kb=()=>S.jsxs(S.Fragment,{children:[S.jsx(xS,{}),S.jsxs("main",{className:"main",children:[S.jsx(ES,{}),S.jsx(RS,{}),S.jsx(NS,{}),S.jsx(Db,{}),S.jsx(bS,{}),S.jsx(qb,{}),S.jsx(Yb,{})]})]});W0(document.getElementById("root")).render(S.jsx(oi.StrictMode,{children:S.jsx(Kb,{})}));
