var v0=Object.defineProperty;var $0=(e,t,i)=>t in e?v0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var su=(e,t,i)=>$0(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const qe={},tr=[],Ht=()=>{},gp=()=>!1,Hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),co=e=>e.startsWith("onUpdate:"),pt=Object.assign,fo=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},x0=Object.prototype.hasOwnProperty,Ne=(e,t)=>x0.call(e,t),Ce=Array.isArray,ir=e=>Gn(e)==="[object Map]",_p=e=>Gn(e)==="[object Set]",Te=e=>typeof e=="function",Xe=e=>typeof e=="string",$i=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",yp=e=>(je(e)||Te(e))&&Te(e.then)&&Te(e.catch),bp=Object.prototype.toString,Gn=e=>bp.call(e),C0=e=>Gn(e).slice(8,-1),wp=e=>Gn(e)==="[object Object]",po=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mr=uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},T0=/-\w/g,wi=Kn(e=>e.replace(T0,t=>t.slice(1).toUpperCase())),S0=/\B([A-Z])/g,Hi=Kn(e=>e.replace(S0,"-$1").toLowerCase()),vp=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cs=Kn(e=>e?`on${vp(e)}`:""),bi=(e,t)=>!Object.is(e,t),Ts=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},$p=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},I0=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let au;const Zn=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(e){if(Ce(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],s=Xe(n)?z0(n):Yn(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Xe(e)||je(e))return e}const E0=/;(?![^(]*\))/g,k0=/:([^]+)/,A0=/\/\*[^]*?\*\//g;function z0(e){const t={};return e.replace(A0,"").split(E0).forEach(i=>{if(i){const n=i.split(k0);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Xn(e){let t="";if(Xe(e))t=e;else if(Ce(e))for(let i=0;i<e.length;i++){const n=Xn(e[i]);n&&(t+=n+" ")}else if(je(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const O0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R0=uo(O0);function xp(e){return!!e||e===""}const Cp=e=>!!(e&&e.__v_isRef===!0),Ba=e=>Xe(e)?e:e==null?"":Ce(e)||je(e)&&(e.toString===bp||!Te(e.toString))?Cp(e)?Ba(e.value):JSON.stringify(e,Tp,2):String(e),Tp=(e,t)=>Cp(t)?Tp(e,t.value):ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,s],r)=>(i[Ss(n,r)+" =>"]=s,i),{})}:_p(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>Ss(i))}:$i(t)?Ss(t):je(t)&&!Ce(t)&&!wp(t)?String(t):t,Ss=(e,t="")=>{var i;return $i(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class M0{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!t&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=mt;try{return mt=this,t()}finally{mt=i}}}on(){++this._on===1&&(this.prevScope=mt,mt=this)}off(){this._on>0&&--this._on===0&&(mt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function B0(){return mt}let Ue;const Is=new WeakSet;class Sp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Is.has(this)&&(Is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ou(this),kp(this);const t=Ue,i=Bt;Ue=this,Bt=!0;try{return this.fn()}finally{Ap(this),Ue=t,Bt=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)go(t);this.deps=this.depsTail=void 0,ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let Ip=0,Br,Nr;function Ep(e,t=!1){if(e.flags|=8,t){e.next=Nr,Nr=e;return}e.next=Br,Br=e}function ho(){Ip++}function mo(){if(--Ip>0)return;if(Nr){let t=Nr;for(Nr=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Br;){let t=Br;for(Br=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function kp(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ap(e){let t,i=e.depsTail,n=i;for(;n;){const s=n.prevDep;n.version===-1?(n===i&&(i=s),go(n),N0(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=i}function Na(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(zp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function zp(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wr)||(e.globalVersion=Wr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Na(e))))return;e.flags|=2;const t=e.dep,i=Ue,n=Bt;Ue=e,Bt=!0;try{kp(e);const s=e.fn(e._value);(t.version===0||bi(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ue=i,Bt=n,Ap(e),e.flags&=-3}}function go(e,t=!1){const{dep:i,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)go(r,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function N0(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let Bt=!0;const Op=[];function ni(){Op.push(Bt),Bt=!1}function si(){const e=Op.pop();Bt=e===void 0?!0:e}function ou(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=Ue;Ue=void 0;try{t()}finally{Ue=i}}}let Wr=0;class D0{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _o{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ue||!Bt||Ue===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==Ue)i=this.activeLink=new D0(Ue,this),Ue.deps?(i.prevDep=Ue.depsTail,Ue.depsTail.nextDep=i,Ue.depsTail=i):Ue.deps=Ue.depsTail=i,Rp(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=Ue.depsTail,i.nextDep=void 0,Ue.depsTail.nextDep=i,Ue.depsTail=i,Ue.deps===i&&(Ue.deps=n)}return i}trigger(t){this.version++,Wr++,this.notify(t)}notify(t){ho();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{mo()}}}function Rp(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Rp(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Da=new WeakMap,Pi=Symbol(""),Pa=Symbol(""),jr=Symbol("");function at(e,t,i){if(Bt&&Ue){let n=Da.get(e);n||Da.set(e,n=new Map);let s=n.get(i);s||(n.set(i,s=new _o),s.map=n,s.key=i),s.track()}}function ii(e,t,i,n,s,r){const a=Da.get(e);if(!a){Wr++;return}const o=u=>{u&&u.trigger()};if(ho(),t==="clear")a.forEach(o);else{const u=Ce(e),d=u&&po(i);if(u&&i==="length"){const f=Number(n);a.forEach((p,m)=>{(m==="length"||m===jr||!$i(m)&&m>=f)&&o(p)})}else switch((i!==void 0||a.has(void 0))&&o(a.get(i)),d&&o(a.get(jr)),t){case"add":u?d&&o(a.get("length")):(o(a.get(Pi)),ir(e)&&o(a.get(Pa)));break;case"delete":u||(o(a.get(Pi)),ir(e)&&o(a.get(Pa)));break;case"set":ir(e)&&o(a.get(Pi));break}}mo()}function Yi(e){const t=Be(e);return t===e?t:(at(t,"iterate",jr),St(e)?t:t.map(Dt))}function Qn(e){return at(e=Be(e),"iterate",jr),e}function mi(e,t){return ai(e)?Ui(e)?sr(Dt(t)):sr(t):Dt(t)}const P0={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,e=>mi(this,e))},concat(...e){return Yi(this).concat(...e.map(t=>Ce(t)?Yi(t):t))},entries(){return Es(this,"entries",e=>(e[1]=mi(this,e[1]),e))},every(e,t){return Jt(this,"every",e,t,void 0,arguments)},filter(e,t){return Jt(this,"filter",e,t,i=>i.map(n=>mi(this,n)),arguments)},find(e,t){return Jt(this,"find",e,t,i=>mi(this,i),arguments)},findIndex(e,t){return Jt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Jt(this,"findLast",e,t,i=>mi(this,i),arguments)},findLastIndex(e,t){return Jt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Jt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ks(this,"includes",e)},indexOf(...e){return ks(this,"indexOf",e)},join(e){return Yi(this).join(e)},lastIndexOf(...e){return ks(this,"lastIndexOf",e)},map(e,t){return Jt(this,"map",e,t,void 0,arguments)},pop(){return mr(this,"pop")},push(...e){return mr(this,"push",e)},reduce(e,...t){return lu(this,"reduce",e,t)},reduceRight(e,...t){return lu(this,"reduceRight",e,t)},shift(){return mr(this,"shift")},some(e,t){return Jt(this,"some",e,t,void 0,arguments)},splice(...e){return mr(this,"splice",e)},toReversed(){return Yi(this).toReversed()},toSorted(e){return Yi(this).toSorted(e)},toSpliced(...e){return Yi(this).toSpliced(...e)},unshift(...e){return mr(this,"unshift",e)},values(){return Es(this,"values",e=>mi(this,e))}};function Es(e,t,i){const n=Qn(e),s=n[t]();return n!==e&&!St(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=i(r.value)),r}),s}const U0=Array.prototype;function Jt(e,t,i,n,s,r){const a=Qn(e),o=a!==e&&!St(e),u=a[t];if(u!==U0[t]){const p=u.apply(e,r);return o?Dt(p):p}let d=i;a!==e&&(o?d=function(p,m){return i.call(this,mi(e,p),m,e)}:i.length>2&&(d=function(p,m){return i.call(this,p,m,e)}));const f=u.call(a,d,n);return o&&s?s(f):f}function lu(e,t,i,n){const s=Qn(e);let r=i;return s!==e&&(St(e)?i.length>3&&(r=function(a,o,u){return i.call(this,a,o,u,e)}):r=function(a,o,u){return i.call(this,a,mi(e,o),u,e)}),s[t](r,...n)}function ks(e,t,i){const n=Be(e);at(n,"iterate",jr);const s=n[t](...i);return(s===-1||s===!1)&&vo(i[0])?(i[0]=Be(i[0]),n[t](...i)):s}function mr(e,t,i=[]){ni(),ho();const n=Be(e)[t].apply(e,i);return mo(),si(),n}const L0=uo("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($i));function q0(e){$i(e)||(e=String(e));const t=Be(this);return at(t,"has",e),t.hasOwnProperty(e)}class Bp{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return r;if(i==="__v_raw")return n===(s?r?X0:Up:r?Pp:Dp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Ce(t);if(!s){let u;if(a&&(u=P0[i]))return u;if(i==="hasOwnProperty")return q0}const o=Reflect.get(t,i,ot(t)?t:n);if(($i(i)?Mp.has(i):L0(i))||(s||at(t,"get",i),r))return o;if(ot(o)){const u=a&&po(i)?o:o.value;return s&&je(u)?La(u):u}return je(o)?s?La(o):bo(o):o}}class Np extends Bp{constructor(t=!1){super(!1,t)}set(t,i,n,s){let r=t[i];const a=Ce(t)&&po(i);if(!this._isShallow){const d=ai(r);if(!St(n)&&!ai(n)&&(r=Be(r),n=Be(n)),!a&&ot(r)&&!ot(n))return d||(r.value=n),!0}const o=a?Number(i)<t.length:Ne(t,i),u=Reflect.set(t,i,n,ot(t)?t:s);return t===Be(s)&&(o?bi(n,r)&&ii(t,"set",i,n):ii(t,"add",i,n)),u}deleteProperty(t,i){const n=Ne(t,i);t[i];const s=Reflect.deleteProperty(t,i);return s&&n&&ii(t,"delete",i,void 0),s}has(t,i){const n=Reflect.has(t,i);return(!$i(i)||!Mp.has(i))&&at(t,"has",i),n}ownKeys(t){return at(t,"iterate",Ce(t)?"length":Pi),Reflect.ownKeys(t)}}class W0 extends Bp{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const j0=new Np,V0=new W0,F0=new Np(!0);const Ua=e=>e,dn=e=>Reflect.getPrototypeOf(e);function H0(e,t,i){return function(...n){const s=this.__v_raw,r=Be(s),a=ir(r),o=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,d=s[e](...n),f=i?Ua:t?sr:Dt;return!t&&at(r,"iterate",u?Pa:Pi),{next(){const{value:p,done:m}=d.next();return m?{value:p,done:m}:{value:o?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function G0(e,t){const i={get(s){const r=this.__v_raw,a=Be(r),o=Be(s);e||(bi(s,o)&&at(a,"get",s),at(a,"get",o));const{has:u}=dn(a),d=t?Ua:e?sr:Dt;if(u.call(a,s))return d(r.get(s));if(u.call(a,o))return d(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&at(Be(s),"iterate",Pi),s.size},has(s){const r=this.__v_raw,a=Be(r),o=Be(s);return e||(bi(s,o)&&at(a,"has",s),at(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,u=Be(o),d=t?Ua:e?sr:Dt;return!e&&at(u,"iterate",Pi),o.forEach((f,p)=>s.call(r,d(f),d(p),a))}};return pt(i,e?{add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear")}:{add(s){!t&&!St(s)&&!ai(s)&&(s=Be(s));const r=Be(this);return dn(r).has.call(r,s)||(r.add(s),ii(r,"add",s,s)),this},set(s,r){!t&&!St(r)&&!ai(r)&&(r=Be(r));const a=Be(this),{has:o,get:u}=dn(a);let d=o.call(a,s);d||(s=Be(s),d=o.call(a,s));const f=u.call(a,s);return a.set(s,r),d?bi(r,f)&&ii(a,"set",s,r):ii(a,"add",s,r),this},delete(s){const r=Be(this),{has:a,get:o}=dn(r);let u=a.call(r,s);u||(s=Be(s),u=a.call(r,s)),o&&o.call(r,s);const d=r.delete(s);return u&&ii(r,"delete",s,void 0),d},clear(){const s=Be(this),r=s.size!==0,a=s.clear();return r&&ii(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=H0(s,e,t)}),i}function yo(e,t){const i=G0(e,t);return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(Ne(i,s)&&s in n?i:n,s,r)}const K0={get:yo(!1,!1)},Z0={get:yo(!1,!0)},Y0={get:yo(!0,!1)};const Dp=new WeakMap,Pp=new WeakMap,Up=new WeakMap,X0=new WeakMap;function Q0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J0(e){return e.__v_skip||!Object.isExtensible(e)?0:Q0(C0(e))}function bo(e){return ai(e)?e:wo(e,!1,j0,K0,Dp)}function eb(e){return wo(e,!1,F0,Z0,Pp)}function La(e){return wo(e,!0,V0,Y0,Up)}function wo(e,t,i,n,s){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=J0(e);if(r===0)return e;const a=s.get(e);if(a)return a;const o=new Proxy(e,r===2?n:i);return s.set(e,o),o}function Ui(e){return ai(e)?Ui(e.__v_raw):!!(e&&e.__v_isReactive)}function ai(e){return!!(e&&e.__v_isReadonly)}function St(e){return!!(e&&e.__v_isShallow)}function vo(e){return e?!!e.__v_raw:!1}function Be(e){const t=e&&e.__v_raw;return t?Be(t):e}function tb(e){return!Ne(e,"__v_skip")&&Object.isExtensible(e)&&$p(e,"__v_skip",!0),e}const Dt=e=>je(e)?bo(e):e,sr=e=>je(e)?La(e):e;function ot(e){return e?e.__v_isRef===!0:!1}function fn(e){return ib(e,!1)}function ib(e,t){return ot(e)?e:new rb(e,t)}class rb{constructor(t,i){this.dep=new _o,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:Be(t),this._value=i?t:Dt(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||St(t)||ai(t);t=n?t:Be(t),bi(t,i)&&(this._rawValue=t,this._value=n?t:Dt(t),this.dep.trigger())}}function nb(e){return ot(e)?e.value:e}const sb={get:(e,t,i)=>t==="__v_raw"?e:nb(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const s=e[t];return ot(s)&&!ot(i)?(s.value=i,!0):Reflect.set(e,t,i,n)}};function Lp(e){return Ui(e)?e:new Proxy(e,sb)}class ab{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new _o(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Ep(this,!0),!0}get value(){const t=this.dep.track();return zp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ob(e,t,i=!1){let n,s;return Te(e)?n=e:(n=e.get,s=e.set),new ab(n,s,i)}const pn={},On=new WeakMap;let Ri;function lb(e,t=!1,i=Ri){if(i){let n=On.get(i);n||On.set(i,n=[]),n.push(e)}}function ub(e,t,i=qe){const{immediate:n,deep:s,once:r,scheduler:a,augmentJob:o,call:u}=i,d=x=>s?x:St(x)||s===!1||s===0?yi(x,1):yi(x);let f,p,m,_,y=!1,v=!1;if(ot(e)?(p=()=>e.value,y=St(e)):Ui(e)?(p=()=>d(e),y=!0):Ce(e)?(v=!0,y=e.some(x=>Ui(x)||St(x)),p=()=>e.map(x=>{if(ot(x))return x.value;if(Ui(x))return d(x);if(Te(x))return u?u(x,2):x()})):Te(e)?t?p=u?()=>u(e,2):e:p=()=>{if(m){ni();try{m()}finally{si()}}const x=Ri;Ri=f;try{return u?u(e,3,[_]):e(_)}finally{Ri=x}}:p=Ht,t&&s){const x=p,E=s===!0?1/0:s;p=()=>yi(x(),E)}const C=B0(),$=()=>{f.stop(),C&&C.active&&fo(C.effects,f)};if(r&&t){const x=t;t=(...E)=>{x(...E),$()}}let b=v?new Array(e.length).fill(pn):pn;const T=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(t){const E=f.run();if(s||y||(v?E.some((z,O)=>bi(z,b[O])):bi(E,b))){m&&m();const z=Ri;Ri=f;try{const O=[E,b===pn?void 0:v&&b[0]===pn?[]:b,_];b=E,u?u(t,3,O):t(...O)}finally{Ri=z}}}else f.run()};return o&&o(T),f=new Sp(p),f.scheduler=a?()=>a(T,!1):T,_=x=>lb(x,!1,f),m=f.onStop=()=>{const x=On.get(f);if(x){if(u)u(x,4);else for(const E of x)E();On.delete(f)}},t?n?T(!0):b=f.run():a?a(T.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function yi(e,t=1/0,i){if(t<=0||!je(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,ot(e))yi(e.value,t,i);else if(Ce(e))for(let n=0;n<e.length;n++)yi(e[n],t,i);else if(_p(e)||ir(e))e.forEach(n=>{yi(n,t,i)});else if(wp(e)){for(const n in e)yi(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&yi(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(e,t,i,n){try{return n?e(...n):e()}catch(s){Jn(s,t,i)}}function Gt(e,t,i,n){if(Te(e)){const s=Zr(e,t,i,n);return s&&yp(s)&&s.catch(r=>{Jn(r,t,i)}),s}if(Ce(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Gt(e[r],t,i,n));return s}}function Jn(e,t,i,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||qe;if(t){let o=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,u,d)===!1)return}o=o.parent}if(r){ni(),Zr(r,null,10,[e,u,d]),si();return}}db(e,i,s,n,a)}function db(e,t,i,n=!0,s=!1){if(s)throw e;console.error(e)}const ct=[];let jt=-1;const rr=[];let gi=null,Qi=0;const qp=Promise.resolve();let Rn=null;function cb(e){const t=Rn||qp;return e?t.then(this?e.bind(this):e):t}function fb(e){let t=jt+1,i=ct.length;for(;t<i;){const n=t+i>>>1,s=ct[n],r=Vr(s);r<e||r===e&&s.flags&2?t=n+1:i=n}return t}function $o(e){if(!(e.flags&1)){const t=Vr(e),i=ct[ct.length-1];!i||!(e.flags&2)&&t>=Vr(i)?ct.push(e):ct.splice(fb(t),0,e),e.flags|=1,Wp()}}function Wp(){Rn||(Rn=qp.then(Vp))}function pb(e){Ce(e)?rr.push(...e):gi&&e.id===-1?gi.splice(Qi+1,0,e):e.flags&1||(rr.push(e),e.flags|=1),Wp()}function uu(e,t,i=jt+1){for(;i<ct.length;i++){const n=ct[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ct.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function jp(e){if(rr.length){const t=[...new Set(rr)].sort((i,n)=>Vr(i)-Vr(n));if(rr.length=0,gi){gi.push(...t);return}for(gi=t,Qi=0;Qi<gi.length;Qi++){const i=gi[Qi];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}gi=null,Qi=0}}const Vr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Vp(e){try{for(jt=0;jt<ct.length;jt++){const t=ct[jt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;jt<ct.length;jt++){const t=ct[jt];t&&(t.flags&=-2)}jt=-1,ct.length=0,jp(),Rn=null,(ct.length||rr.length)&&Vp()}}let Ft=null,Fp=null;function Mn(e){const t=Ft;return Ft=e,Fp=e&&e.type.__scopeId||null,t}function hb(e,t=Ft,i){if(!t||e._n)return e;const n=(...s)=>{n._d&&wu(-1);const r=Mn(t);let a;try{a=e(...s)}finally{Mn(r),n._d&&wu(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Si(e,t,i,n){const s=e.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let u=o.dir[n];u&&(ni(),Gt(u,i,8,[e.el,o,e,t]),si())}}function mb(e,t){if(ft){let i=ft.provides;const n=ft.parent&&ft.parent.provides;n===i&&(i=ft.provides=Object.create(n)),i[e]=t}}function In(e,t,i=!1){const n=hw();if(n||nr){let s=nr?nr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return i&&Te(t)?t.call(n&&n.proxy):t}}const gb=Symbol.for("v-scx"),_b=()=>In(gb);function As(e,t,i){return Hp(e,t,i)}function Hp(e,t,i=qe){const{immediate:n,deep:s,flush:r,once:a}=i,o=pt({},i),u=t&&n||!t&&r!=="post";let d;if(Hr){if(r==="sync"){const _=_b();d=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Ht,_.resume=Ht,_.pause=Ht,_}}const f=ft;o.call=(_,y,v)=>Gt(_,f,y,v);let p=!1;r==="post"?o.scheduler=_=>{wt(_,f&&f.suspense)}:r!=="sync"&&(p=!0,o.scheduler=(_,y)=>{y?_():$o(_)}),o.augmentJob=_=>{t&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=ub(e,t,o);return Hr&&(d?d.push(m):u&&m()),m}function yb(e,t,i){const n=this.proxy,s=Xe(e)?e.includes(".")?Gp(n,e):()=>n[e]:e.bind(n,n);let r;Te(t)?r=t:(r=t.handler,i=t);const a=Yr(this),o=Hp(s,r.bind(n),i);return a(),o}function Gp(e,t){const i=t.split(".");return()=>{let n=e;for(let s=0;s<i.length&&n;s++)n=n[i[s]];return n}}const bb=Symbol("_vte"),wb=e=>e.__isTeleport,vb=Symbol("_leaveCb");function xo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kp(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Bn=new WeakMap;function Dr(e,t,i,n,s=!1){if(Ce(e)){e.forEach((y,v)=>Dr(y,t&&(Ce(t)?t[v]:t),i,n,s));return}if(Pr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Dr(e,t,i,n.component.subTree);return}const r=n.shapeFlag&4?Io(n.component):n.el,a=s?null:r,{i:o,r:u}=e,d=t&&t.r,f=o.refs===qe?o.refs={}:o.refs,p=o.setupState,m=Be(p),_=p===qe?gp:y=>Ne(m,y);if(d!=null&&d!==u){if(du(t),Xe(d))f[d]=null,_(d)&&(p[d]=null);else if(ot(d)){d.value=null;const y=t;y.k&&(f[y.k]=null)}}if(Te(u))Zr(u,o,12,[a,f]);else{const y=Xe(u),v=ot(u);if(y||v){const C=()=>{if(e.f){const $=y?_(u)?p[u]:f[u]:u.value;if(s)Ce($)&&fo($,r);else if(Ce($))$.includes(r)||$.push(r);else if(y)f[u]=[r],_(u)&&(p[u]=f[u]);else{const b=[r];u.value=b,e.k&&(f[e.k]=b)}}else y?(f[u]=a,_(u)&&(p[u]=a)):v&&(u.value=a,e.k&&(f[e.k]=a))};if(a){const $=()=>{C(),Bn.delete(e)};$.id=-1,Bn.set(e,$),wt($,i)}else du(e),C()}}}function du(e){const t=Bn.get(e);t&&(t.flags|=8,Bn.delete(e))}Zn().requestIdleCallback;Zn().cancelIdleCallback;const Pr=e=>!!e.type.__asyncLoader,Zp=e=>e.type.__isKeepAlive;function $b(e,t){Yp(e,"a",t)}function xb(e,t){Yp(e,"da",t)}function Yp(e,t,i=ft){const n=e.__wdc||(e.__wdc=()=>{let s=i;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(es(t,n,i),i){let s=i.parent;for(;s&&s.parent;)Zp(s.parent.vnode)&&Cb(n,t,i,s),s=s.parent}}function Cb(e,t,i,n){const s=es(t,e,n,!0);Jp(()=>{fo(n[t],s)},i)}function es(e,t,i=ft,n=!1){if(i){const s=i[e]||(i[e]=[]),r=t.__weh||(t.__weh=(...a)=>{ni();const o=Yr(i),u=Gt(t,i,e,a);return o(),si(),u});return n?s.unshift(r):s.push(r),r}}const oi=e=>(t,i=ft)=>{(!Hr||e==="sp")&&es(e,(...n)=>t(...n),i)},Tb=oi("bm"),Xp=oi("m"),Sb=oi("bu"),Ib=oi("u"),Qp=oi("bum"),Jp=oi("um"),Eb=oi("sp"),kb=oi("rtg"),Ab=oi("rtc");function zb(e,t=ft){es("ec",e,t)}const Ob=Symbol.for("v-ndc");function cu(e,t,i,n){let s;const r=i,a=Ce(e);if(a||Xe(e)){const o=a&&Ui(e);let u=!1,d=!1;o&&(u=!St(e),d=ai(e),e=Qn(e)),s=new Array(e.length);for(let f=0,p=e.length;f<p;f++)s[f]=t(u?d?sr(Dt(e[f])):Dt(e[f]):e[f],f,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r)}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(o,u)=>t(o,u,void 0,r));else{const o=Object.keys(e);s=new Array(o.length);for(let u=0,d=o.length;u<d;u++){const f=o[u];s[u]=t(e[f],f,u,r)}}else s=[];return s}const qa=e=>e?yh(e)?Io(e):qa(e.parent):null,Ur=pt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qa(e.parent),$root:e=>qa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>th(e),$forceUpdate:e=>e.f||(e.f=()=>{$o(e.update)}),$nextTick:e=>e.n||(e.n=cb.bind(e.proxy)),$watch:e=>yb.bind(e)}),zs=(e,t)=>e!==qe&&!e.__isScriptSetup&&Ne(e,t),Rb={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:u}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return n[t];case 2:return s[t];case 4:return i[t];case 3:return r[t]}else{if(zs(n,t))return a[t]=1,n[t];if(s!==qe&&Ne(s,t))return a[t]=2,s[t];if(Ne(r,t))return a[t]=3,r[t];if(i!==qe&&Ne(i,t))return a[t]=4,i[t];Wa&&(a[t]=0)}}const d=Ur[t];let f,p;if(d)return t==="$attrs"&&at(e.attrs,"get",""),d(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(i!==qe&&Ne(i,t))return a[t]=4,i[t];if(p=u.config.globalProperties,Ne(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:s,ctx:r}=e;return zs(s,t)?(s[t]=i,!0):n!==qe&&Ne(n,t)?(n[t]=i,!0):Ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:s,props:r,type:a}},o){let u;return!!(i[o]||e!==qe&&o[0]!=="$"&&Ne(e,o)||zs(t,o)||Ne(r,o)||Ne(n,o)||Ne(Ur,o)||Ne(s.config.globalProperties,o)||(u=a.__cssModules)&&u[o])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:Ne(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function fu(e){return Ce(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let Wa=!0;function Mb(e){const t=th(e),i=e.proxy,n=e.ctx;Wa=!1,t.beforeCreate&&pu(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:o,provide:u,inject:d,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:y,activated:v,deactivated:C,beforeDestroy:$,beforeUnmount:b,destroyed:T,unmounted:x,render:E,renderTracked:z,renderTriggered:O,errorCaptured:M,serverPrefetch:R,expose:F,inheritAttrs:le,components:ne,directives:ie,filters:$e}=t;if(d&&Bb(d,n,null),a)for(const oe in a){const X=a[oe];Te(X)&&(n[oe]=X.bind(i))}if(s){const oe=s.call(i,i);je(oe)&&(e.data=bo(oe))}if(Wa=!0,r)for(const oe in r){const X=r[oe],fe=Te(X)?X.bind(i,i):Te(X.get)?X.get.bind(i,i):Ht,Ee=!Te(X)&&Te(X.set)?X.set.bind(i):Ht,P=ww({get:fe,set:Ee});Object.defineProperty(n,oe,{enumerable:!0,configurable:!0,get:()=>P.value,set:Z=>P.value=Z})}if(o)for(const oe in o)eh(o[oe],n,i,oe);if(u){const oe=Te(u)?u.call(i):u;Reflect.ownKeys(oe).forEach(X=>{mb(X,oe[X])})}f&&pu(f,e,"c");function ee(oe,X){Ce(X)?X.forEach(fe=>oe(fe.bind(i))):X&&oe(X.bind(i))}if(ee(Tb,p),ee(Xp,m),ee(Sb,_),ee(Ib,y),ee($b,v),ee(xb,C),ee(zb,M),ee(Ab,z),ee(kb,O),ee(Qp,b),ee(Jp,x),ee(Eb,R),Ce(F))if(F.length){const oe=e.exposed||(e.exposed={});F.forEach(X=>{Object.defineProperty(oe,X,{get:()=>i[X],set:fe=>i[X]=fe,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===Ht&&(e.render=E),le!=null&&(e.inheritAttrs=le),ne&&(e.components=ne),ie&&(e.directives=ie),R&&Kp(e)}function Bb(e,t,i=Ht){Ce(e)&&(e=ja(e));for(const n in e){const s=e[n];let r;je(s)?"default"in s?r=In(s.from||n,s.default,!0):r=In(s.from||n):r=In(s),ot(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[n]=r}}function pu(e,t,i){Gt(Ce(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function eh(e,t,i,n){let s=n.includes(".")?Gp(i,n):()=>i[n];if(Xe(e)){const r=t[e];Te(r)&&As(s,r)}else if(Te(e))As(s,e.bind(i));else if(je(e))if(Ce(e))e.forEach(r=>eh(r,t,i,n));else{const r=Te(e.handler)?e.handler.bind(i):t[e.handler];Te(r)&&As(s,r,e)}}function th(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,o=r.get(t);let u;return o?u=o:!s.length&&!i&&!n?u=t:(u={},s.length&&s.forEach(d=>Nn(u,d,a,!0)),Nn(u,t,a)),je(t)&&r.set(t,u),u}function Nn(e,t,i,n=!1){const{mixins:s,extends:r}=t;r&&Nn(e,r,i,!0),s&&s.forEach(a=>Nn(e,a,i,!0));for(const a in t)if(!(n&&a==="expose")){const o=Nb[a]||i&&i[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Nb={data:hu,props:mu,emits:mu,methods:kr,computed:kr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:kr,directives:kr,watch:Pb,provide:hu,inject:Db};function hu(e,t){return t?e?function(){return pt(Te(e)?e.call(this,this):e,Te(t)?t.call(this,this):t)}:t:e}function Db(e,t){return kr(ja(e),ja(t))}function ja(e){if(Ce(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function kr(e,t){return e?pt(Object.create(null),e,t):t}function mu(e,t){return e?Ce(e)&&Ce(t)?[...new Set([...e,...t])]:pt(Object.create(null),fu(e),fu(t??{})):t}function Pb(e,t){if(!e)return t;if(!t)return e;const i=pt(Object.create(null),e);for(const n in t)i[n]=dt(e[n],t[n]);return i}function ih(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ub=0;function Lb(e,t){return function(n,s=null){Te(n)||(n=pt({},n)),s!=null&&!je(s)&&(s=null);const r=ih(),a=new WeakSet,o=[];let u=!1;const d=r.app={_uid:Ub++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:vw,get config(){return r.config},set config(f){},use(f,...p){return a.has(f)||(f&&Te(f.install)?(a.add(f),f.install(d,...p)):Te(f)&&(a.add(f),f(d,...p))),d},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),d},component(f,p){return p?(r.components[f]=p,d):r.components[f]},directive(f,p){return p?(r.directives[f]=p,d):r.directives[f]},mount(f,p,m){if(!u){const _=d._ceVNode||Li(n,s);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(_,f,m),u=!0,d._container=f,f.__vue_app__=d,Io(_.component)}},onUnmount(f){o.push(f)},unmount(){u&&(Gt(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return r.provides[f]=p,d},runWithContext(f){const p=nr;nr=d;try{return f()}finally{nr=p}}};return d}}let nr=null;const qb=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${wi(t)}Modifiers`]||e[`${Hi(t)}Modifiers`];function Wb(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||qe;let s=i;const r=t.startsWith("update:"),a=r&&qb(n,t.slice(7));a&&(a.trim&&(s=i.map(f=>Xe(f)?f.trim():f)),a.number&&(s=i.map(I0)));let o,u=n[o=Cs(t)]||n[o=Cs(wi(t))];!u&&r&&(u=n[o=Cs(Hi(t))]),u&&Gt(u,e,6,s);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Gt(d,e,6,s)}}const jb=new WeakMap;function rh(e,t,i=!1){const n=i?jb:t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let a={},o=!1;if(!Te(e)){const u=d=>{const f=rh(d,t,!0);f&&(o=!0,pt(a,f))};!i&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!o?(je(e)&&n.set(e,null),null):(Ce(r)?r.forEach(u=>a[u]=null):pt(a,r),je(e)&&n.set(e,a),a)}function ts(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ne(e,t[0].toLowerCase()+t.slice(1))||Ne(e,Hi(t))||Ne(e,t))}function gu(e){const{type:t,vnode:i,proxy:n,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:u,render:d,renderCache:f,props:p,data:m,setupState:_,ctx:y,inheritAttrs:v}=e,C=Mn(e);let $,b;try{if(i.shapeFlag&4){const x=s||n,E=x;$=Vt(d.call(E,x,f,p,_,m,y)),b=o}else{const x=t;$=Vt(x.length>1?x(p,{attrs:o,slots:a,emit:u}):x(p,null)),b=t.props?o:Vb(o)}}catch(x){Lr.length=0,Jn(x,e,1),$=Li(ar)}let T=$;if(b&&v!==!1){const x=Object.keys(b),{shapeFlag:E}=T;x.length&&E&7&&(r&&x.some(co)&&(b=Fb(b,r)),T=or(T,b,!1,!0))}return i.dirs&&(T=or(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(i.dirs):i.dirs),i.transition&&xo(T,i.transition),$=T,Mn(C),$}const Vb=e=>{let t;for(const i in e)(i==="class"||i==="style"||Hn(i))&&((t||(t={}))[i]=e[i]);return t},Fb=(e,t)=>{const i={};for(const n in e)(!co(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function Hb(e,t,i){const{props:n,children:s,component:r}=e,{props:a,children:o,patchFlag:u}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&u>=0){if(u&1024)return!0;if(u&16)return n?_u(n,a,d):!!a;if(u&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==n[m]&&!ts(d,m))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?_u(n,a,d):!0:!!a;return!1}function _u(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==e[r]&&!ts(i,r))return!0}return!1}function Gb({vnode:e,parent:t},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=i,t=t.parent;else break}}const nh={},sh=()=>Object.create(nh),ah=e=>Object.getPrototypeOf(e)===nh;function Kb(e,t,i,n=!1){const s={},r=sh();e.propsDefaults=Object.create(null),oh(e,t,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);i?e.props=n?s:eb(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Zb(e,t,i,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,o=Be(s),[u]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ts(e.emitsOptions,m))continue;const _=t[m];if(u)if(Ne(r,m))_!==r[m]&&(r[m]=_,d=!0);else{const y=wi(m);s[y]=Va(u,o,y,_,e,!1)}else _!==r[m]&&(r[m]=_,d=!0)}}}else{oh(e,t,s,r)&&(d=!0);let f;for(const p in o)(!t||!Ne(t,p)&&((f=Hi(p))===p||!Ne(t,f)))&&(u?i&&(i[p]!==void 0||i[f]!==void 0)&&(s[p]=Va(u,o,p,void 0,e,!0)):delete s[p]);if(r!==o)for(const p in r)(!t||!Ne(t,p))&&(delete r[p],d=!0)}d&&ii(e.attrs,"set","")}function oh(e,t,i,n){const[s,r]=e.propsOptions;let a=!1,o;if(t)for(let u in t){if(Mr(u))continue;const d=t[u];let f;s&&Ne(s,f=wi(u))?!r||!r.includes(f)?i[f]=d:(o||(o={}))[f]=d:ts(e.emitsOptions,u)||(!(u in n)||d!==n[u])&&(n[u]=d,a=!0)}if(r){const u=Be(i),d=o||qe;for(let f=0;f<r.length;f++){const p=r[f];i[p]=Va(s,u,p,d[p],e,!Ne(d,p))}}return a}function Va(e,t,i,n,s,r){const a=e[i];if(a!=null){const o=Ne(a,"default");if(o&&n===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Te(u)){const{propsDefaults:d}=s;if(i in d)n=d[i];else{const f=Yr(s);n=d[i]=u.call(null,t),f()}}else n=u;s.ce&&s.ce._setProp(i,n)}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===Hi(i))&&(n=!0))}return n}const Yb=new WeakMap;function lh(e,t,i=!1){const n=i?Yb:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,a={},o=[];let u=!1;if(!Te(e)){const f=p=>{u=!0;const[m,_]=lh(p,t,!0);pt(a,m),_&&o.push(..._)};!i&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!u)return je(e)&&n.set(e,tr),tr;if(Ce(r))for(let f=0;f<r.length;f++){const p=wi(r[f]);yu(p)&&(a[p]=qe)}else if(r)for(const f in r){const p=wi(f);if(yu(p)){const m=r[f],_=a[p]=Ce(m)||Te(m)?{type:m}:pt({},m),y=_.type;let v=!1,C=!0;if(Ce(y))for(let $=0;$<y.length;++$){const b=y[$],T=Te(b)&&b.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(C=!1)}else v=Te(y)&&y.name==="Boolean";_[0]=v,_[1]=C,(v||Ne(_,"default"))&&o.push(p)}}const d=[a,o];return je(e)&&n.set(e,d),d}function yu(e){return e[0]!=="$"&&!Mr(e)}const Co=e=>e==="_"||e==="_ctx"||e==="$stable",To=e=>Ce(e)?e.map(Vt):[Vt(e)],Xb=(e,t,i)=>{if(t._n)return t;const n=hb((...s)=>To(t(...s)),i);return n._c=!1,n},uh=(e,t,i)=>{const n=e._ctx;for(const s in e){if(Co(s))continue;const r=e[s];if(Te(r))t[s]=Xb(s,r,n);else if(r!=null){const a=To(r);t[s]=()=>a}}},dh=(e,t)=>{const i=To(t);e.slots.default=()=>i},ch=(e,t,i)=>{for(const n in t)(i||!Co(n))&&(e[n]=t[n])},Qb=(e,t,i)=>{const n=e.slots=sh();if(e.vnode.shapeFlag&32){const s=t._;s?(ch(n,t,i),i&&$p(n,"_",s,!0)):uh(t,n)}else t&&dh(e,t)},Jb=(e,t,i)=>{const{vnode:n,slots:s}=e;let r=!0,a=qe;if(n.shapeFlag&32){const o=t._;o?i&&o===1?r=!1:ch(s,t,i):(r=!t.$stable,uh(t,s)),a=t}else t&&(dh(e,t),a={default:1});if(r)for(const o in s)!Co(o)&&a[o]==null&&delete s[o]},wt=nw;function ew(e){return tw(e)}function tw(e,t){const i=Zn();i.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:u,setText:d,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=Ht,insertStaticContent:y}=e,v=(I,k,D,V=null,j=null,H=null,J=void 0,te=null,Q=!!k.dynamicChildren)=>{if(I===k)return;I&&!gr(I,k)&&(V=W(I),Z(I,j,H,!0),I=null),k.patchFlag===-2&&(Q=!1,k.dynamicChildren=null);const{type:G,ref:ge,shapeFlag:se}=k;switch(G){case is:C(I,k,D,V);break;case ar:$(I,k,D,V);break;case Rs:I==null&&b(k,D,V,J);break;case Tt:ne(I,k,D,V,j,H,J,te,Q);break;default:se&1?E(I,k,D,V,j,H,J,te,Q):se&6?ie(I,k,D,V,j,H,J,te,Q):(se&64||se&128)&&G.process(I,k,D,V,j,H,J,te,Q,Ge)}ge!=null&&j?Dr(ge,I&&I.ref,H,k||I,!k):ge==null&&I&&I.ref!=null&&Dr(I.ref,null,H,I,!0)},C=(I,k,D,V)=>{if(I==null)n(k.el=o(k.children),D,V);else{const j=k.el=I.el;k.children!==I.children&&d(j,k.children)}},$=(I,k,D,V)=>{I==null?n(k.el=u(k.children||""),D,V):k.el=I.el},b=(I,k,D,V)=>{[I.el,I.anchor]=y(I.children,k,D,V,I.el,I.anchor)},T=({el:I,anchor:k},D,V)=>{let j;for(;I&&I!==k;)j=m(I),n(I,D,V),I=j;n(k,D,V)},x=({el:I,anchor:k})=>{let D;for(;I&&I!==k;)D=m(I),s(I),I=D;s(k)},E=(I,k,D,V,j,H,J,te,Q)=>{if(k.type==="svg"?J="svg":k.type==="math"&&(J="mathml"),I==null)z(k,D,V,j,H,J,te,Q);else{const G=I.el&&I.el._isVueCE?I.el:null;try{G&&G._beginPatch(),R(I,k,j,H,J,te,Q)}finally{G&&G._endPatch()}}},z=(I,k,D,V,j,H,J,te)=>{let Q,G;const{props:ge,shapeFlag:se,transition:he,dirs:ae}=I;if(Q=I.el=a(I.type,H,ge&&ge.is,ge),se&8?f(Q,I.children):se&16&&M(I.children,Q,null,V,j,Os(I,H),J,te),ae&&Si(I,null,V,"created"),O(Q,I,I.scopeId,J,V),ge){for(const De in ge)De!=="value"&&!Mr(De)&&r(Q,De,null,ge[De],H,V);"value"in ge&&r(Q,"value",null,ge.value,H),(G=ge.onVnodeBeforeMount)&&qt(G,V,I)}ae&&Si(I,null,V,"beforeMount");const Se=iw(j,he);Se&&he.beforeEnter(Q),n(Q,k,D),((G=ge&&ge.onVnodeMounted)||Se||ae)&&wt(()=>{G&&qt(G,V,I),Se&&he.enter(Q),ae&&Si(I,null,V,"mounted")},j)},O=(I,k,D,V,j)=>{if(D&&_(I,D),V)for(let H=0;H<V.length;H++)_(I,V[H]);if(j){let H=j.subTree;if(k===H||mh(H.type)&&(H.ssContent===k||H.ssFallback===k)){const J=j.vnode;O(I,J,J.scopeId,J.slotScopeIds,j.parent)}}},M=(I,k,D,V,j,H,J,te,Q=0)=>{for(let G=Q;G<I.length;G++){const ge=I[G]=te?_i(I[G]):Vt(I[G]);v(null,ge,k,D,V,j,H,J,te)}},R=(I,k,D,V,j,H,J)=>{const te=k.el=I.el;let{patchFlag:Q,dynamicChildren:G,dirs:ge}=k;Q|=I.patchFlag&16;const se=I.props||qe,he=k.props||qe;let ae;if(D&&Ii(D,!1),(ae=he.onVnodeBeforeUpdate)&&qt(ae,D,k,I),ge&&Si(k,I,D,"beforeUpdate"),D&&Ii(D,!0),(se.innerHTML&&he.innerHTML==null||se.textContent&&he.textContent==null)&&f(te,""),G?F(I.dynamicChildren,G,te,D,V,Os(k,j),H):J||X(I,k,te,null,D,V,Os(k,j),H,!1),Q>0){if(Q&16)le(te,se,he,D,j);else if(Q&2&&se.class!==he.class&&r(te,"class",null,he.class,j),Q&4&&r(te,"style",se.style,he.style,j),Q&8){const Se=k.dynamicProps;for(let De=0;De<Se.length;De++){const ze=Se[De],Ve=se[ze],Ze=he[ze];(Ze!==Ve||ze==="value")&&r(te,ze,Ve,Ze,j,D)}}Q&1&&I.children!==k.children&&f(te,k.children)}else!J&&G==null&&le(te,se,he,D,j);((ae=he.onVnodeUpdated)||ge)&&wt(()=>{ae&&qt(ae,D,k,I),ge&&Si(k,I,D,"updated")},V)},F=(I,k,D,V,j,H,J)=>{for(let te=0;te<k.length;te++){const Q=I[te],G=k[te],ge=Q.el&&(Q.type===Tt||!gr(Q,G)||Q.shapeFlag&198)?p(Q.el):D;v(Q,G,ge,null,V,j,H,J,!0)}},le=(I,k,D,V,j)=>{if(k!==D){if(k!==qe)for(const H in k)!Mr(H)&&!(H in D)&&r(I,H,k[H],null,j,V);for(const H in D){if(Mr(H))continue;const J=D[H],te=k[H];J!==te&&H!=="value"&&r(I,H,te,J,j,V)}"value"in D&&r(I,"value",k.value,D.value,j)}},ne=(I,k,D,V,j,H,J,te,Q)=>{const G=k.el=I?I.el:o(""),ge=k.anchor=I?I.anchor:o("");let{patchFlag:se,dynamicChildren:he,slotScopeIds:ae}=k;ae&&(te=te?te.concat(ae):ae),I==null?(n(G,D,V),n(ge,D,V),M(k.children||[],D,ge,j,H,J,te,Q)):se>0&&se&64&&he&&I.dynamicChildren&&I.dynamicChildren.length===he.length?(F(I.dynamicChildren,he,D,j,H,J,te),(k.key!=null||j&&k===j.subTree)&&fh(I,k,!0)):X(I,k,D,ge,j,H,J,te,Q)},ie=(I,k,D,V,j,H,J,te,Q)=>{k.slotScopeIds=te,I==null?k.shapeFlag&512?j.ctx.activate(k,D,V,J,Q):$e(k,D,V,j,H,J,Q):be(I,k,Q)},$e=(I,k,D,V,j,H,J)=>{const te=I.component=pw(I,V,j);if(Zp(I)&&(te.ctx.renderer=Ge),mw(te,!1,J),te.asyncDep){if(j&&j.registerDep(te,ee,J),!I.el){const Q=te.subTree=Li(ar);$(null,Q,k,D),I.placeholder=Q.el}}else ee(te,I,k,D,j,H,J)},be=(I,k,D)=>{const V=k.component=I.component;if(Hb(I,k,D))if(V.asyncDep&&!V.asyncResolved){oe(V,k,D);return}else V.next=k,V.update();else k.el=I.el,V.vnode=k},ee=(I,k,D,V,j,H,J)=>{const te=()=>{if(I.isMounted){let{next:se,bu:he,u:ae,parent:Se,vnode:De}=I;{const Je=ph(I);if(Je){se&&(se.el=De.el,oe(I,se,J)),Je.asyncDep.then(()=>{I.isUnmounted||te()});return}}let ze=se,Ve;Ii(I,!1),se?(se.el=De.el,oe(I,se,J)):se=De,he&&Ts(he),(Ve=se.props&&se.props.onVnodeBeforeUpdate)&&qt(Ve,Se,se,De),Ii(I,!0);const Ze=gu(I),gt=I.subTree;I.subTree=Ze,v(gt,Ze,p(gt.el),W(gt),I,j,H),se.el=Ze.el,ze===null&&Gb(I,Ze.el),ae&&wt(ae,j),(Ve=se.props&&se.props.onVnodeUpdated)&&wt(()=>qt(Ve,Se,se,De),j)}else{let se;const{el:he,props:ae}=k,{bm:Se,m:De,parent:ze,root:Ve,type:Ze}=I,gt=Pr(k);Ii(I,!1),Se&&Ts(Se),!gt&&(se=ae&&ae.onVnodeBeforeMount)&&qt(se,ze,k),Ii(I,!0);{Ve.ce&&Ve.ce._def.shadowRoot!==!1&&Ve.ce._injectChildStyle(Ze);const Je=I.subTree=gu(I);v(null,Je,D,V,I,j,H),k.el=Je.el}if(De&&wt(De,j),!gt&&(se=ae&&ae.onVnodeMounted)){const Je=k;wt(()=>qt(se,ze,Je),j)}(k.shapeFlag&256||ze&&Pr(ze.vnode)&&ze.vnode.shapeFlag&256)&&I.a&&wt(I.a,j),I.isMounted=!0,k=D=V=null}};I.scope.on();const Q=I.effect=new Sp(te);I.scope.off();const G=I.update=Q.run.bind(Q),ge=I.job=Q.runIfDirty.bind(Q);ge.i=I,ge.id=I.uid,Q.scheduler=()=>$o(ge),Ii(I,!0),G()},oe=(I,k,D)=>{k.component=I;const V=I.vnode.props;I.vnode=k,I.next=null,Zb(I,k.props,V,D),Jb(I,k.children,D),ni(),uu(I),si()},X=(I,k,D,V,j,H,J,te,Q=!1)=>{const G=I&&I.children,ge=I?I.shapeFlag:0,se=k.children,{patchFlag:he,shapeFlag:ae}=k;if(he>0){if(he&128){Ee(G,se,D,V,j,H,J,te,Q);return}else if(he&256){fe(G,se,D,V,j,H,J,te,Q);return}}ae&8?(ge&16&&it(G,j,H),se!==G&&f(D,se)):ge&16?ae&16?Ee(G,se,D,V,j,H,J,te,Q):it(G,j,H,!0):(ge&8&&f(D,""),ae&16&&M(se,D,V,j,H,J,te,Q))},fe=(I,k,D,V,j,H,J,te,Q)=>{I=I||tr,k=k||tr;const G=I.length,ge=k.length,se=Math.min(G,ge);let he;for(he=0;he<se;he++){const ae=k[he]=Q?_i(k[he]):Vt(k[he]);v(I[he],ae,D,null,j,H,J,te,Q)}G>ge?it(I,j,H,!0,!1,se):M(k,D,V,j,H,J,te,Q,se)},Ee=(I,k,D,V,j,H,J,te,Q)=>{let G=0;const ge=k.length;let se=I.length-1,he=ge-1;for(;G<=se&&G<=he;){const ae=I[G],Se=k[G]=Q?_i(k[G]):Vt(k[G]);if(gr(ae,Se))v(ae,Se,D,null,j,H,J,te,Q);else break;G++}for(;G<=se&&G<=he;){const ae=I[se],Se=k[he]=Q?_i(k[he]):Vt(k[he]);if(gr(ae,Se))v(ae,Se,D,null,j,H,J,te,Q);else break;se--,he--}if(G>se){if(G<=he){const ae=he+1,Se=ae<ge?k[ae].el:V;for(;G<=he;)v(null,k[G]=Q?_i(k[G]):Vt(k[G]),D,Se,j,H,J,te,Q),G++}}else if(G>he)for(;G<=se;)Z(I[G],j,H,!0),G++;else{const ae=G,Se=G,De=new Map;for(G=Se;G<=he;G++){const nt=k[G]=Q?_i(k[G]):Vt(k[G]);nt.key!=null&&De.set(nt.key,G)}let ze,Ve=0;const Ze=he-Se+1;let gt=!1,Je=0;const ui=new Array(Ze);for(G=0;G<Ze;G++)ui[G]=0;for(G=ae;G<=se;G++){const nt=I[G];if(Ve>=Ze){Z(nt,j,H,!0);continue}let _t;if(nt.key!=null)_t=De.get(nt.key);else for(ze=Se;ze<=he;ze++)if(ui[ze-Se]===0&&gr(nt,k[ze])){_t=ze;break}_t===void 0?Z(nt,j,H,!0):(ui[_t-Se]=G+1,_t>=Je?Je=_t:gt=!0,v(nt,k[_t],D,null,j,H,J,te,Q),Ve++)}const cr=gt?rw(ui):tr;for(ze=cr.length-1,G=Ze-1;G>=0;G--){const nt=Se+G,_t=k[nt],Xr=k[nt+1],Qr=nt+1<ge?Xr.el||hh(Xr):V;ui[G]===0?v(null,_t,D,Qr,j,H,J,te,Q):gt&&(ze<0||G!==cr[ze]?P(_t,D,Qr,2):ze--)}}},P=(I,k,D,V,j=null)=>{const{el:H,type:J,transition:te,children:Q,shapeFlag:G}=I;if(G&6){P(I.component.subTree,k,D,V);return}if(G&128){I.suspense.move(k,D,V);return}if(G&64){J.move(I,k,D,Ge);return}if(J===Tt){n(H,k,D);for(let se=0;se<Q.length;se++)P(Q[se],k,D,V);n(I.anchor,k,D);return}if(J===Rs){T(I,k,D);return}if(V!==2&&G&1&&te)if(V===0)te.beforeEnter(H),n(H,k,D),wt(()=>te.enter(H),j);else{const{leave:se,delayLeave:he,afterLeave:ae}=te,Se=()=>{I.ctx.isUnmounted?s(H):n(H,k,D)},De=()=>{H._isLeaving&&H[vb](!0),se(H,()=>{Se(),ae&&ae()})};he?he(H,Se,De):De()}else n(H,k,D)},Z=(I,k,D,V=!1,j=!1)=>{const{type:H,props:J,ref:te,children:Q,dynamicChildren:G,shapeFlag:ge,patchFlag:se,dirs:he,cacheIndex:ae}=I;if(se===-2&&(j=!1),te!=null&&(ni(),Dr(te,null,D,I,!0),si()),ae!=null&&(k.renderCache[ae]=void 0),ge&256){k.ctx.deactivate(I);return}const Se=ge&1&&he,De=!Pr(I);let ze;if(De&&(ze=J&&J.onVnodeBeforeUnmount)&&qt(ze,k,I),ge&6)He(I.component,D,V);else{if(ge&128){I.suspense.unmount(D,V);return}Se&&Si(I,null,k,"beforeUnmount"),ge&64?I.type.remove(I,k,D,Ge,V):G&&!G.hasOnce&&(H!==Tt||se>0&&se&64)?it(G,k,D,!1,!0):(H===Tt&&se&384||!j&&ge&16)&&it(Q,k,D),V&&re(I)}(De&&(ze=J&&J.onVnodeUnmounted)||Se)&&wt(()=>{ze&&qt(ze,k,I),Se&&Si(I,null,k,"unmounted")},D)},re=I=>{const{type:k,el:D,anchor:V,transition:j}=I;if(k===Tt){me(D,V);return}if(k===Rs){x(I);return}const H=()=>{s(D),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(I.shapeFlag&1&&j&&!j.persisted){const{leave:J,delayLeave:te}=j,Q=()=>J(D,H);te?te(I.el,H,Q):Q()}else H()},me=(I,k)=>{let D;for(;I!==k;)D=m(I),s(I),I=D;s(k)},He=(I,k,D)=>{const{bum:V,scope:j,job:H,subTree:J,um:te,m:Q,a:G}=I;bu(Q),bu(G),V&&Ts(V),j.stop(),H&&(H.flags|=8,Z(J,I,k,D)),te&&wt(te,k),wt(()=>{I.isUnmounted=!0},k)},it=(I,k,D,V=!1,j=!1,H=0)=>{for(let J=H;J<I.length;J++)Z(I[J],k,D,V,j)},W=I=>{if(I.shapeFlag&6)return W(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const k=m(I.anchor||I.el),D=k&&k[bb];return D?m(D):k};let ke=!1;const rt=(I,k,D)=>{let V;I==null?k._vnode&&(Z(k._vnode,null,null,!0),V=k._vnode.component):v(k._vnode||null,I,k,null,null,null,D),k._vnode=I,ke||(ke=!0,uu(V),jp(),ke=!1)},Ge={p:v,um:Z,m:P,r:re,mt:$e,mc:M,pc:X,pbc:F,n:W,o:e};return{render:rt,hydrate:void 0,createApp:Lb(rt)}}function Os({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function Ii({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function iw(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fh(e,t,i=!1){const n=e.children,s=t.children;if(Ce(n)&&Ce(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=_i(s[r]),o.el=a.el),!i&&o.patchFlag!==-2&&fh(a,o)),o.type===is&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=r+(e.type===Tt?1:0)),o.type===ar&&!o.el&&(o.el=a.el)}}function rw(e){const t=e.slice(),i=[0];let n,s,r,a,o;const u=e.length;for(n=0;n<u;n++){const d=e[n];if(d!==0){if(s=i[i.length-1],e[s]<d){t[n]=s,i.push(n);continue}for(r=0,a=i.length-1;r<a;)o=r+a>>1,e[i[o]]<d?r=o+1:a=o;d<e[i[r]]&&(r>0&&(t[n]=i[r-1]),i[r]=n)}}for(r=i.length,a=i[r-1];r-- >0;)i[r]=a,a=t[a];return i}function ph(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ph(t)}function bu(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function hh(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?hh(t.subTree):null}const mh=e=>e.__isSuspense;function nw(e,t){t&&t.pendingBranch?Ce(e)?t.effects.push(...e):t.effects.push(e):pb(e)}const Tt=Symbol.for("v-fgt"),is=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),Rs=Symbol.for("v-stc"),Lr=[];let $t=null;function Ms(e=!1){Lr.push($t=e?null:[])}function sw(){Lr.pop(),$t=Lr[Lr.length-1]||null}let Fr=1;function wu(e,t=!1){Fr+=e,e<0&&$t&&t&&($t.hasOnce=!0)}function aw(e){return e.dynamicChildren=Fr>0?$t||tr:null,sw(),Fr>0&&$t&&$t.push(e),e}function Bs(e,t,i,n,s,r){return aw(Mi(e,t,i,n,s,r,!0))}function gh(e){return e?e.__v_isVNode===!0:!1}function gr(e,t){return e.type===t.type&&e.key===t.key}const _h=({key:e})=>e??null,En=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||ot(e)||Te(e)?{i:Ft,r:e,k:t,f:!!i}:e:null);function Mi(e,t=null,i=null,n=0,s=null,r=e===Tt?0:1,a=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_h(t),ref:t&&En(t),scopeId:Fp,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return o?(So(u,i),r&128&&e.normalize(u)):i&&(u.shapeFlag|=Xe(i)?8:16),Fr>0&&!a&&$t&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&$t.push(u),u}const Li=ow;function ow(e,t=null,i=null,n=0,s=null,r=!1){if((!e||e===Ob)&&(e=ar),gh(e)){const o=or(e,t,!0);return i&&So(o,i),Fr>0&&!r&&$t&&(o.shapeFlag&6?$t[$t.indexOf(e)]=o:$t.push(o)),o.patchFlag=-2,o}if(bw(e)&&(e=e.__vccOpts),t){t=lw(t);let{class:o,style:u}=t;o&&!Xe(o)&&(t.class=Xn(o)),je(u)&&(vo(u)&&!Ce(u)&&(u=pt({},u)),t.style=Yn(u))}const a=Xe(e)?1:mh(e)?128:wb(e)?64:je(e)?4:Te(e)?2:0;return Mi(e,t,i,n,s,a,r,!0)}function lw(e){return e?vo(e)||ah(e)?pt({},e):e:null}function or(e,t,i=!1,n=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:u}=e,d=t?dw(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&_h(d),ref:t&&t.ref?i&&r?Ce(r)?r.concat(En(t)):[r,En(t)]:En(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Tt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&or(e.ssContent),ssFallback:e.ssFallback&&or(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&xo(f,u.clone(f)),f}function uw(e=" ",t=0){return Li(is,null,e,t)}function Vt(e){return e==null||typeof e=="boolean"?Li(ar):Ce(e)?Li(Tt,null,e.slice()):gh(e)?_i(e):Li(is,null,String(e))}function _i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:or(e)}function So(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ce(t))i=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),So(e,s()),s._c&&(s._d=!0));return}else{i=32;const s=t._;!s&&!ah(t)?t._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Te(t)?(t={default:t,_ctx:Ft},i=32):(t=String(t),n&64?(i=16,t=[uw(t)]):i=8);e.children=t,e.shapeFlag|=i}function dw(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Xn([t.class,n.class]));else if(s==="style")t.style=Yn([t.style,n.style]);else if(Hn(s)){const r=t[s],a=n[s];a&&r!==a&&!(Ce(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=n[s])}return t}function qt(e,t,i,n=null){Gt(e,t,7,[i,n])}const cw=ih();let fw=0;function pw(e,t,i){const n=e.type,s=(t?t.appContext:e.appContext)||cw,r={uid:fw++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new M0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lh(n,s),emitsOptions:rh(n,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:n.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Wb.bind(null,r),e.ce&&e.ce(r),r}let ft=null;const hw=()=>ft||Ft;let Dn,Fa;{const e=Zn(),t=(i,n)=>{let s;return(s=e[i])||(s=e[i]=[]),s.push(n),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Dn=t("__VUE_INSTANCE_SETTERS__",i=>ft=i),Fa=t("__VUE_SSR_SETTERS__",i=>Hr=i)}const Yr=e=>{const t=ft;return Dn(e),e.scope.on(),()=>{e.scope.off(),Dn(t)}},vu=()=>{ft&&ft.scope.off(),Dn(null)};function yh(e){return e.vnode.shapeFlag&4}let Hr=!1;function mw(e,t=!1,i=!1){t&&Fa(t);const{props:n,children:s}=e.vnode,r=yh(e);Kb(e,n,r,t),Qb(e,s,i||t);const a=r?gw(e,t):void 0;return t&&Fa(!1),a}function gw(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rb);const{setup:n}=i;if(n){ni();const s=e.setupContext=n.length>1?yw(e):null,r=Yr(e),a=Zr(n,e,0,[e.props,s]),o=yp(a);if(si(),r(),(o||e.sp)&&!Pr(e)&&Kp(e),o){if(a.then(vu,vu),t)return a.then(u=>{$u(e,u)}).catch(u=>{Jn(u,e,0)});e.asyncDep=a}else $u(e,a)}else bh(e)}function $u(e,t,i){Te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=Lp(t)),bh(e)}function bh(e,t,i){const n=e.type;e.render||(e.render=n.render||Ht);{const s=Yr(e);ni();try{Mb(e)}finally{si(),s()}}}const _w={get(e,t){return at(e,"get",""),e[t]}};function yw(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,_w),slots:e.slots,emit:e.emit,expose:t}}function Io(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Lp(tb(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Ur)return Ur[i](e)},has(t,i){return i in t||i in Ur}})):e.proxy}function bw(e){return Te(e)&&"__vccOpts"in e}const ww=(e,t)=>ob(e,t,Hr),vw="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ha;const xu=typeof window<"u"&&window.trustedTypes;if(xu)try{Ha=xu.createPolicy("vue",{createHTML:e=>e})}catch{}const wh=Ha?e=>Ha.createHTML(e):e=>e,$w="http://www.w3.org/2000/svg",xw="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,Cu=ti&&ti.createElement("template"),Cw={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const s=t==="svg"?ti.createElementNS($w,e):t==="mathml"?ti.createElementNS(xw,e):i?ti.createElement(e,{is:i}):ti.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ti.createTextNode(e),createComment:e=>ti.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ti.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,s,r){const a=i?i.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),i),!(s===r||!(s=s.nextSibling)););else{Cu.innerHTML=wh(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Cu.content;if(n==="svg"||n==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}t.insertBefore(o,i)}return[a?a.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Tw=Symbol("_vtc");function Sw(e,t,i){const n=e[Tw];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const Tu=Symbol("_vod"),Iw=Symbol("_vsh"),Ew=Symbol(""),kw=/(?:^|;)\s*display\s*:/;function Aw(e,t,i){const n=e.style,s=Xe(i);let r=!1;if(i&&!s){if(t)if(Xe(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();i[o]==null&&kn(n,o,"")}else for(const a in t)i[a]==null&&kn(n,a,"");for(const a in i)a==="display"&&(r=!0),kn(n,a,i[a])}else if(s){if(t!==i){const a=n[Ew];a&&(i+=";"+a),n.cssText=i,r=kw.test(i)}}else t&&e.removeAttribute("style");Tu in e&&(e[Tu]=r?n.display:"",e[Iw]&&(n.display="none"))}const Su=/\s*!important$/;function kn(e,t,i){if(Ce(i))i.forEach(n=>kn(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=zw(e,t);Su.test(i)?e.setProperty(Hi(n),i.replace(Su,""),"important"):e[n]=i}}const Iu=["Webkit","Moz","ms"],Ns={};function zw(e,t){const i=Ns[t];if(i)return i;let n=wi(t);if(n!=="filter"&&n in e)return Ns[t]=n;n=vp(n);for(let s=0;s<Iu.length;s++){const r=Iu[s]+n;if(r in e)return Ns[t]=r}return t}const Eu="http://www.w3.org/1999/xlink";function ku(e,t,i,n,s,r=R0(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(Eu,t.slice(6,t.length)):e.setAttributeNS(Eu,t,i):i==null||r&&!xp(i)?e.removeAttribute(t):e.setAttribute(t,r?"":$i(i)?String(i):i)}function Au(e,t,i,n,s){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?wh(i):i);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,u=i==null?e.type==="checkbox"?"on":"":String(i);(o!==u||!("_value"in e))&&(e.value=u),i==null&&e.removeAttribute(t),e._value=i;return}let a=!1;if(i===""||i==null){const o=typeof e[t];o==="boolean"?i=xp(i):i==null&&o==="string"?(i="",a=!0):o==="number"&&(i=0,a=!0)}try{e[t]=i}catch{}a&&e.removeAttribute(s||t)}function Ow(e,t,i,n){e.addEventListener(t,i,n)}function Rw(e,t,i,n){e.removeEventListener(t,i,n)}const zu=Symbol("_vei");function Mw(e,t,i,n,s=null){const r=e[zu]||(e[zu]={}),a=r[t];if(n&&a)a.value=n;else{const[o,u]=Bw(t);if(n){const d=r[t]=Pw(n,s);Ow(e,o,d,u)}else a&&(Rw(e,o,a,u),r[t]=void 0)}}const Ou=/(?:Once|Passive|Capture)$/;function Bw(e){let t;if(Ou.test(e)){t={};let n;for(;n=e.match(Ou);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hi(e.slice(2)),t]}let Ds=0;const Nw=Promise.resolve(),Dw=()=>Ds||(Nw.then(()=>Ds=0),Ds=Date.now());function Pw(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;Gt(Uw(n,i.value),t,5,[n])};return i.value=e,i.attached=Dw(),i}function Uw(e,t){if(Ce(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const Ru=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Lw=(e,t,i,n,s,r)=>{const a=s==="svg";t==="class"?Sw(e,n,a):t==="style"?Aw(e,i,n):Hn(t)?co(t)||Mw(e,t,i,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qw(e,t,n,a))?(Au(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ku(e,t,n,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Xe(n))?Au(e,wi(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),ku(e,t,n,a))};function qw(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ru(t)&&Te(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ru(t)&&Xe(i)?!1:t in e}const Ww=["ctrl","shift","alt","meta"],jw={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ww.some(i=>e[`${i}Key`]&&!t.includes(i))},Vw=(e,t)=>{const i=e._withMods||(e._withMods={}),n=t.join(".");return i[n]||(i[n]=(s,...r)=>{for(let a=0;a<t.length;a++){const o=jw[t[a]];if(o&&o(s,t))return}return e(s,...r)})},Fw=pt({patchProp:Lw},Cw);let Mu;function Hw(){return Mu||(Mu=ew(Fw))}const Gw=(...e)=>{const t=Hw().createApp(...e),{mount:i}=t;return t.mount=n=>{const s=Zw(n);if(!s)return;const r=t._component;!Te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=i(s,!1,Kw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Kw(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zw(e){return Xe(e)?document.querySelector(e):e}const Yw="modulepreload",Xw=function(e,t){return new URL(e,t).href},Bu={},Qw=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(i.map(d=>{if(d=Xw(d,n),d in Bu)return;Bu[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!n)for(let y=a.length-1;y>=0;y--){const v=a[y];if(v.href===d&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Yw,f||(_.as="script"),_.crossOrigin="",_.href=d,u&&_.setAttribute("nonce",u),document.head.appendChild(_),f)return new Promise((y,v)=>{_.addEventListener("load",y),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Eo=Object.defineProperty,Jw=Object.getOwnPropertyDescriptor,ev=Object.getOwnPropertyNames,tv=Object.prototype.hasOwnProperty,iv=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),dr=(e,t)=>{for(var i in t)Eo(e,i,{get:t[i],enumerable:!0})},rv=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ev(t))!tv.call(e,s)&&s!==i&&Eo(e,s,{get:()=>t[s],enumerable:!(n=Jw(t,s))||n.enumerable});return e},Gr=e=>rv(Eo({},"__esModule",{value:!0}),e),_r,fi,Ji,Nu,vh,$h=K(()=>{_r=new Map,fi=[],Ji=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=_r.get(e);if(n===void 0)_r.set(e,{backend:t,priority:i});else{if(n.priority>i)return;if(n.priority===i&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let s=fi.indexOf(e);s!==-1&&fi.splice(s,1);for(let r=0;r<fi.length;r++)if(_r.get(fi[r]).priority<=i){fi.splice(r,0,e);return}fi.push(e)}return}throw new TypeError("not a valid backend")},Nu=async e=>{let t=_r.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return i||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},vh=async e=>{let t=e.executionProviders||[],i=t.map(u=>typeof u=="string"?u:u.name),n=i.length===0?fi:i,s,r=[],a=new Set;for(let u of n){let d=await Nu(u);typeof d=="string"?r.push({name:u,err:d}):(s||(s=d),s===d&&a.add(u))}if(!s)throw new Error(`no available backend found. ERR: ${r.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of r)i.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[s,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),nv=K(()=>{$h()}),xh,sv=K(()=>{xh="1.23.2"}),Ps,et,Ch=K(()=>{sv(),Ps="warning",et={wasm:{},webgl:{},webgpu:{},versions:{common:xh},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ps=e}},get logLevel(){return Ps}},Object.defineProperty(et,"logLevel",{enumerable:!0})}),Le,av=K(()=>{Ch(),Le=et}),Th,Sh,ov=K(()=>{Th=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let n=i.getContext("2d");if(n!=null){let s,r;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],r=e.dims[3]):(s=e.dims[3],r=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=r*s,p=0,m=f,_=f*2,y=-1;a==="RGBA"?(p=0,m=f,_=f*2,y=f*3):a==="RGB"?(p=0,m=f,_=f*2):a==="RBG"&&(p=0,_=f,m=f*2);for(let v=0;v<r;v++)for(let C=0;C<s;C++){let $=(e.data[p++]-d[0])*u[0],b=(e.data[m++]-d[1])*u[1],T=(e.data[_++]-d[2])*u[2],x=y===-1?255:(e.data[y++]-d[3])*u[3];n.fillStyle="rgba("+$+","+b+","+T+","+x+")",n.fillRect(C,v,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Sh=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(i!=null){let s,r,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],r=e.dims[1],a=e.dims[3]):(s=e.dims[3],r=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,f;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let p=r*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,_=0,y=1,v=2,C=3,$=0,b=p,T=p*2,x=-1;o==="RGBA"?($=0,b=p,T=p*2,x=p*3):o==="RGB"?($=0,b=p,T=p*2):o==="RBG"&&($=0,T=p,b=p*2),n=i.createImageData(s,r);for(let E=0;E<r*s;_+=m,y+=m,v+=m,C+=m,E++)n.data[_]=(e.data[$++]-f[0])*d[0],n.data[y]=(e.data[b++]-f[1])*d[1],n.data[v]=(e.data[T++]-f[2])*d[2],n.data[C]=x===-1?255:(e.data[x++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),hn,Ih,Eh,kh,Ah,zh,lv=K(()=>{ko(),hn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:n}=t,s=t.norm??{mean:255,bias:0},r,a;typeof s.mean=="number"?r=[s.mean,s.mean,s.mean,s.mean]:r=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=i*n,f=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,m=0,_=1,y=2,v=3,C=0,$=d,b=d*2,T=-1;o==="RGB"&&(p=3,m=0,_=1,y=2,v=-1),u==="RGBA"?T=d*3:u==="RBG"?(C=0,b=d,$=d*2):u==="BGR"&&(b=0,$=d,C=d*2);for(let x=0;x<d;x++,m+=p,y+=p,_+=p,v+=p)f[C++]=(e[m]+a[0])/r[0],f[$++]=(e[_]+a[1])/r[1],f[b++]=(e[y]+a[2])/r[2],T!==-1&&v!==-1&&(f[T++]=(e[v]+a[3])/r[3]);return u==="RGBA"?new vt("float32",f,[1,4,i,n]):new vt("float32",f,[1,3,i,n])},Ih=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,r=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(i){let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let m=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=_}else o.tensorFormat="RGBA",o.height=m,o.width=_;p.drawImage(e,0,0),a=p.getImageData(0,0,_,m).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let m=u();m.width=p,m.height=f;let _=d(m);if(_!=null)_.putImageData(e,0,0),a=_.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let m=e.height,_=e.width;return p.drawImage(e,0,0,_,m),a=p.getImageData(0,0,_,m).data,o.height=m,o.width=_,hn(a,o)}else throw new Error("Can not access image data")}else{if(r)return new Promise((f,p)=>{let m=u(),_=d(m);if(!e||!_)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{m.width=y.width,m.height=y.height,_.drawImage(y,0,0,m.width,m.height);let v=_.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,f(hn(v.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return hn(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Eh=(e,t)=>{let{width:i,height:n,download:s,dispose:r}=t,a=[1,n,i,4];return new vt({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:r})},kh=(e,t)=>{let{dataType:i,dims:n,download:s,dispose:r}=t;return new vt({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:n,download:s,dispose:r})},Ah=(e,t)=>{let{dataType:i,dims:n,download:s,dispose:r}=t;return new vt({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:n,download:s,dispose:r})},zh=(e,t,i)=>new vt({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),Bi,Ar,Us,Oh,uv=K(()=>{Bi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ar=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Us=!1,Oh=()=>{if(!Us){Us=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,n=typeof i<"u"&&i.from;e&&(Bi.set("int64",BigInt64Array),Ar.set(BigInt64Array,"int64")),t&&(Bi.set("uint64",BigUint64Array),Ar.set(BigUint64Array,"uint64")),n?(Bi.set("float16",i),Ar.set(i,"float16")):Bi.set("float16",Uint16Array)}}}),Rh,Mh,dv=K(()=>{ko(),Rh=e=>{let t=1;for(let i=0;i<e.length;i++){let n=e[i];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${i}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${n}`);t*=n}return t},Mh=(e,t)=>{switch(e.location){case"cpu":return new vt(e.type,e.data,t);case"cpu-pinned":return new vt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new vt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new vt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new vt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),vt,ko=K(()=>{ov(),lv(),uv(),dv(),vt=class{constructor(e,t,i){Oh();let n,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,s=e.dims,e.location){case"cpu-pinned":{let a=Bi.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Bi.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",a=e;else if(u==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let u=Ar.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");s=o,this.cpuData=a,this.dataLocation="cpu"}let r=Rh(s);if(this.cpuData&&r!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(r/2)===this.cpuData.length))throw new Error(`Tensor's size(${r}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=s,this.size=r}static async fromImage(e,t){return Ih(e,t)}static fromTexture(e,t){return Eh(e,t)}static fromGpuBuffer(e,t){return kh(e,t)}static fromMLTensor(e,t){return Ah(e,t)}static fromPinnedBuffer(e,t,i){return zh(e,t,i)}toDataURL(e){return Th(this,e)}toImageData(e){return Sh(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Mh(this,e)}}}),Mt,Bh=K(()=>{ko(),Mt=vt}),Pn,Ls,Kt,Nt,qi,Wi,Nh=K(()=>{Ch(),Pn=(e,t)=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ls=(e,t)=>{var s;let i=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],n=!1;for(let r=0;r<i.length;r++){if(n&&!i[r].includes("TRACE_FUNC")){let a=`FUNC_${e}::${i[r].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Pn("CPU",a);return}i[r].includes("TRACE_FUNC")&&(n=!0)}},Kt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ls("BEGIN",e)},Nt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ls("END",e)},qi=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.time(`ORT::${e}`)},Wi=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeEnd(`ORT::${e}`)}}),Dh,cv=K(()=>{$h(),Bh(),Nh(),Dh=class Ph{constructor(t){this.handler=t}async run(t,i,n){Kt(),qi("InferenceSession.run");let s={},r={};if(typeof t!="object"||t===null||t instanceof Mt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Mt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of i){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);s[d]=null}if(typeof n=="object"&&n!==null)r=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(i);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let m=i[p];(m===null||m instanceof Mt)&&(d=!0,a=!1,s[p]=m)}if(d){if(typeof n=="object"&&n!==null)r=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else r=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)s[d]=null;let o=await this.handler.run(t,s,r),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof Mt?u[d]=f:u[d]=new Mt(f.type,f.data,f.dims)}return Wi("InferenceSession.run"),Nt(),u}async release(){return this.handler.dispose()}static async create(t,i,n,s){Kt(),qi("InferenceSession.create");let r,a={};if(typeof t=="string"){if(r=t,typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(r=t,typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,m=t.byteLength;if(typeof i=="object"&&i!==null)a=i;else if(typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(m=t.byteLength-p,typeof n=="number"){if(m=n,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||p+m>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");r=new Uint8Array(f,p,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await vh(a),d=await o.createInferenceSessionHandler(r,u);return Wi("InferenceSession.create"),Nt(),new Ph(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ao,fv=K(()=>{cv(),Ao=Dh}),pv=K(()=>{}),hv=K(()=>{}),mv=K(()=>{}),gv=K(()=>{}),_v={};dr(_v,{InferenceSession:()=>Ao,TRACE:()=>Pn,TRACE_EVENT_BEGIN:()=>qi,TRACE_EVENT_END:()=>Wi,TRACE_FUNC_BEGIN:()=>Kt,TRACE_FUNC_END:()=>Nt,Tensor:()=>Mt,env:()=>Le,registerBackend:()=>Ji});var It=K(()=>{nv(),av(),fv(),Bh(),pv(),hv(),Nh(),mv(),gv()}),zo=K(()=>{}),Uh={};dr(Uh,{default:()=>Lh});var qs,Ws,Lh,yv=K(()=>{var e;F_(),Gi(),Oo(),qs="ort-wasm-proxy-worker",Ws=((e=globalThis.self)==null?void 0:e.name)===qs,Ws&&(self.onmessage=t=>{let{type:i,in:n}=t.data;try{switch(i){case"init-wasm":Ro(n.wasm).then(()=>{Yo(n).then(()=>{postMessage({type:i})},s=>{postMessage({type:i,err:s})})},s=>{postMessage({type:i,err:s})});break;case"init-ep":{let{epName:s,env:r}=n;Xo(r,s).then(()=>{postMessage({type:i})},a=>{postMessage({type:i,err:a})});break}case"copy-from":{let{buffer:s}=n,r=Fn(s);postMessage({type:i,out:r});break}case"create":{let{model:s,options:r}=n;Qo(s,r).then(a=>{postMessage({type:i,out:a})},a=>{postMessage({type:i,err:a})});break}case"release":Jo(n),postMessage({type:i});break;case"run":{let{sessionId:s,inputIndices:r,inputs:a,outputIndices:o,options:u}=n;el(s,r,a,o,new Array(o.length).fill(null),u).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:d},il([...a,...d]))},d=>{postMessage({type:i,err:d})});break}case"end-profiling":tl(n),postMessage({type:i});break;default:}}catch(s){postMessage({type:i,err:s})}}),Lh=Ws?null:t=>new Worker(t??bt,{type:"module",name:qs})}),qh={};dr(qh,{default:()=>Wh});var js,Wh,Du,bv=K(()=>{var e,t;js=async function(i={}){var nu;var n,s,r=i,a=new Promise((l,c)=>{n=l,s=c}),o=typeof window=="object",u=typeof WorkerGlobalScope<"u",d=u&&((nu=self.name)==null?void 0:nu.startsWith("em-pthread"));r.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(r.Fb||(r.Fb=new Map)).set(l,c)},r.unmountExternalData=()=>{delete r.Fb};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let p=l=>async(...c)=>{var h;try{if(r.Gb)throw Error("Session already started");let g=r.Gb={ec:c[0],errors:[]},w=await l(...c);if(r.Gb!==g)throw Error("Session mismatch");(h=r.Kb)==null||h.flush();let S=g.errors;if(0<S.length){let A=await Promise.all(S);if(A=A.filter(B=>B),0<A.length)throw Error(A.join(`
`))}return w}finally{r.Gb=null}};r.jsepInit=(l,c)=>{if(l==="webgpu"){[r.Kb,r.Vb,r.Zb,r.Lb,r.Yb,r.Ab,r.$b,r.bc,r.Wb,r.Xb,r.ac]=c;let h=r.Kb;r.jsepRegisterBuffer=(g,w,S,A)=>h.registerBuffer(g,w,S,A),r.jsepGetBuffer=g=>h.getBuffer(g),r.jsepCreateDownloader=(g,w,S)=>h.createDownloader(g,w,S),r.jsepOnCreateSession=g=>{h.onCreateSession(g)},r.jsepOnReleaseSession=g=>{h.onReleaseSession(g)},r.jsepOnRunStart=g=>h.onRunStart(g),r.cc=(g,w)=>{h.upload(g,w)}}else if(l==="webnn"){let h=c[0];[r.oc,r.Ob,r.webnnEnsureTensor,r.Pb,r.webnnDownloadTensor,r.nc,r.webnnEnableTraceEvent]=c.slice(1),r.webnnReleaseTensorId=r.Ob,r.webnnUploadTensor=r.Pb,r.webnnRegisterMLContext=r.nc,r.webnnOnRunStart=g=>h.onRunStart(g),r.webnnOnRunEnd=h.onRunEnd.bind(h),r.webnnOnReleaseSession=g=>{h.onReleaseSession(g)},r.webnnCreateMLTensorDownloader=(g,w)=>h.createMLTensorDownloader(g,w),r.webnnRegisterMLTensor=(g,w,S,A)=>h.registerMLTensor(g,w,S,A),r.webnnCreateMLContext=g=>h.createMLContext(g),r.webnnRegisterMLConstant=(g,w,S,A,B,q)=>h.registerMLConstant(g,w,S,A,B,r.Fb,q),r.webnnRegisterGraphInput=h.registerGraphInput.bind(h),r.webnnIsGraphInput=h.isGraphInput.bind(h),r.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),r.webnnIsGraphOutput=h.isGraphOutput.bind(h),r.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),r.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let m=()=>{let l=(c,h,g)=>(...w)=>{let S=Lt,A=h==null?void 0:h();w=c(...w);let B=h==null?void 0:h();return A!==B&&(c=B,g(A),h=g=null),Lt!=S?new Promise((q,Y)=>{ps={resolve:q,reject:Y}}):w};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])r[c]=l(r[c],()=>r[c],h=>r[c]=h)})(),p!==void 0&&(r._OrtRun=p(r._OrtRun),r._OrtRunWithBinding=p(r._OrtRunWithBinding)),m=void 0};r.asyncInit=()=>{m==null||m()};var _,y,v=(l,c)=>{throw c},C=import.meta.url,$="";if(o||u){try{$=new URL(".",C).href}catch{}u&&(y=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async l=>{if(Z(l))return new Promise((h,g)=>{var w=new XMLHttpRequest;w.open("GET",l,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?h(w.response):g(w.status)},w.onerror=g,w.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var b,T,x,E,z,O,M,R,F,le,ne,ie,$e,be,ee,oe=console.log.bind(console),X=console.error.bind(console),fe=oe,Ee=X,P=!1,Z=l=>l.startsWith("file://");function re(){return T.buffer!=z.buffer&&I(),z}function me(){return T.buffer!=z.buffer&&I(),O}function He(){return T.buffer!=z.buffer&&I(),M}function it(){return T.buffer!=z.buffer&&I(),R}function W(){return T.buffer!=z.buffer&&I(),F}function ke(){return T.buffer!=z.buffer&&I(),le}function rt(){return T.buffer!=z.buffer&&I(),ne}function Ge(){return T.buffer!=z.buffer&&I(),be}if(d){let l=function(c){try{var h=c.data,g=h.Db;if(g==="load"){let w=[];self.onmessage=S=>w.push(S),self.startWorker=()=>{postMessage({Db:"loaded"});for(let S of w)l(S);self.onmessage=l};for(let S of h.Sb)r[S]&&!r[S].proxy||(r[S]=(...A)=>{postMessage({Db:"callHandler",Rb:S,args:A})},S=="print"&&(fe=r[S]),S=="printErr"&&(Ee=r[S]));T=h.kc,I(),ee(h.lc)}else if(g==="run"){Xr(h.Bb),bs(h.Bb,0,0,1,0,0),cr(),cs(h.Bb),Pt||(Hl(),Pt=!0);try{Qr(h.hc,h.Jb)}catch(w){if(w!="unwind")throw w}}else h.target!=="setimmediate"&&(g==="checkMailbox"?Pt&&Jr():g&&(Ee(`worker: received unknown command ${g}`),Ee(h)))}catch(w){throw Gl(),w}};var Pt=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}function I(){var l=T.buffer;r.HEAP8=z=new Int8Array(l),M=new Int16Array(l),r.HEAPU8=O=new Uint8Array(l),R=new Uint16Array(l),r.HEAP32=F=new Int32Array(l),r.HEAPU32=le=new Uint32Array(l),ne=new Float32Array(l),be=new Float64Array(l),ie=new BigInt64Array(l),$e=new BigUint64Array(l)}function k(){d?startWorker(r):U.Da()}var D,V=0,j=null;function H(){if(--V==0&&j){var l=j;j=null,l()}}function J(l){throw Ee(l="Aborted("+l+")"),P=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),s(l),l}function te(){return{a:{L:b0,Aa:y0,b:ny,$:nl,A:ol,pa:ll,X:ul,Z:dl,qa:cl,na:fl,ga:pl,ma:hl,J:ml,Y:gl,V:_l,oa:yl,W:bl,va:sy,E:ay,Q:oy,O:uy,D:cy,v:fy,s:py,P:hy,z:vy,R:$y,ja:xy,T:Cy,aa:Ty,M:Sy,F:Iy,ia:cs,sa:Ey,r:ky,Ca:Ay,w:Ry,o:My,m:Ny,c:os,Ba:Dy,n:Py,j:qy,u:Wy,p:jy,f:Vy,t:Fy,l:Hy,e:Gy,k:Ky,h:Zy,g:Yy,d:Xy,da:Qy,ea:Jy,fa:e0,ba:Ol,ca:Rl,N:Ml,xa:i0,ua:n0,i:s0,C:a0,G:o0,ta:r0,x:l0,ra:u0,U:d0,q:t0,y:c0,K:f0,S:p0,za:h0,ya:m0,ka:Pl,la:Ul,_:ze,B:Ll,I:ql,ha:Wl,H:jl,a:T,wa:Se}}}class Q{constructor(c){su(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var G=l=>{l.terminate(),l.onmessage=()=>{}},ge=[],se=l=>{Ve.length==0&&(_t(),nt(Ve[0]));var c=Ve.pop();if(!c)return 6;Ze.push(c),Je[l.Bb]=c,c.Bb=l.Bb;var h={Db:"run",hc:l.fc,Jb:l.Jb,Bb:l.Bb};return c.postMessage(h,l.Nb),0},he=0,ae=(l,c,...h)=>{for(var g=2*h.length,w=$s(),S=vs(8*g),A=S>>>3,B=0;B<h.length;B++){var q=h[B];typeof q=="bigint"?(ie[A+2*B]=1n,ie[A+2*B+1]=q):(ie[A+2*B]=0n,Ge()[A+2*B+1>>>0]=q)}return l=Kl(l,0,g,S,c),un(w),l};function Se(l){if(d)return ae(0,1,l);if(E=l,!(0<he)){for(var c of Ze)G(c);for(c of Ve)G(c);Ve=[],Ze=[],Je={},P=!0}v(0,new Q(l))}function De(l){if(d)return ae(1,0,l);ze(l)}var ze=l=>{if(E=l,d)throw De(l),"unwind";Se(l)},Ve=[],Ze=[],gt=[],Je={},ui=l=>{var c=l.Bb;delete Je[c],Ve.push(l),Ze.splice(Ze.indexOf(l),1),l.Bb=0,Zl(c)};function cr(){gt.forEach(l=>l())}var nt=l=>new Promise(c=>{l.onmessage=w=>{var S=(w=w.data).Db;if(w.Hb&&w.Hb!=ys()){var A=Je[w.Hb];A?A.postMessage(w,w.Nb):Ee(`Internal error! Worker sent a message "${S}" to target pthread ${w.Hb}, but that thread no longer exists!`)}else S==="checkMailbox"?Jr():S==="spawnThread"?se(w):S==="cleanupThread"?ui(Je[w.ic]):S==="loaded"?(l.loaded=!0,c(l)):w.target==="setimmediate"?l.postMessage(w):S==="callHandler"?r[w.Rb](...w.args):S&&Ee(`worker sent an unknown command ${S}`)},l.onerror=w=>{throw Ee(`worker sent an error! ${w.filename}:${w.lineno}: ${w.message}`),w};var h,g=[];for(h of[])r.propertyIsEnumerable(h)&&g.push(h);l.postMessage({Db:"load",Sb:g,kc:T,lc:x})});function _t(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ve.push(l)}var Xr=l=>{I();var c=ke()[l+52>>>2>>>0];l=ke()[l+56>>>2>>>0],Ql(c,c-l),un(c)},Qr=(l,c)=>{he=0,l=Jl(l,c),0<he?E=l:ws(l)};class ry{constructor(c){this.Ib=c-24}}function ny(l,c,h){var g=new ry(l>>>=0);throw c>>>=0,h>>>=0,ke()[g.Ib+16>>>2>>>0]=0,ke()[g.Ib+4>>>2>>>0]=c,ke()[g.Ib+8>>>2>>>0]=h,l}function rl(l,c,h,g){return d?ae(2,1,l,c,h,g):nl(l,c,h,g)}function nl(l,c,h,g){if(l>>>=0,h>>>=0,g>>>=0,f===void 0)return 6;var w=[];return d&&w.length===0?rl(l,c>>>=0,h,g):(l={fc:h,Bb:l,Jb:g,Nb:w},d?(l.Db="spawnThread",postMessage(l,w),0):se(l))}var sl=typeof TextDecoder<"u"?new TextDecoder:void 0,al=(l,c=0,h=NaN)=>{var g=(c>>>=0)+h;for(h=c;l[h]&&!(h>=g);)++h;if(16<h-c&&l.buffer&&sl)return sl.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,h):l.slice(c,h));for(g="";c<h;){var w=l[c++];if(128&w){var S=63&l[c++];if((224&w)==192)g+=String.fromCharCode((31&w)<<6|S);else{var A=63&l[c++];65536>(w=(240&w)==224?(15&w)<<12|S<<6|A:(7&w)<<18|S<<12|A<<6|63&l[c++])?g+=String.fromCharCode(w):(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w))}}else g+=String.fromCharCode(w)}return g},Ke=(l,c)=>(l>>>=0)?al(me(),l,c):"";function ol(l,c,h){return d?ae(3,1,l,c,h):0}function ll(l,c){if(d)return ae(4,1,l,c)}function ul(l,c){if(d)return ae(5,1,l,c)}function dl(l,c,h){if(d)return ae(6,1,l,c,h)}function cl(l,c,h){return d?ae(7,1,l,c,h):0}function fl(l,c){if(d)return ae(8,1,l,c)}function pl(l,c,h){if(d)return ae(9,1,l,c,h)}function hl(l,c,h,g){if(d)return ae(10,1,l,c,h,g)}function ml(l,c,h,g){if(d)return ae(11,1,l,c,h,g)}function gl(l,c,h,g){if(d)return ae(12,1,l,c,h,g)}function _l(l){if(d)return ae(13,1,l)}function yl(l,c){if(d)return ae(14,1,l,c)}function bl(l,c,h){if(d)return ae(15,1,l,c,h)}var wl,sy=()=>J(""),Ut=l=>{for(var c="";me()[l>>>0];)c+=wl[me()[l++>>>0]];return c},ns={},ss={},Zi=r.BindingError=class extends Error{constructor(l){super(l),this.name="BindingError"}};function Zt(l,c,h={}){return function(g,w,S={}){var A=w.name;if(!g)throw new Zi(`type "${A}" must have a positive integer typeid pointer`);if(ss.hasOwnProperty(g)){if(S.Tb)return;throw new Zi(`Cannot register type '${A}' twice`)}ss[g]=w,ns.hasOwnProperty(g)&&(w=ns[g],delete ns[g],w.forEach(B=>B()))}(l,c,h)}var vl=(l,c,h)=>{switch(c){case 1:return h?g=>re()[g>>>0]:g=>me()[g>>>0];case 2:return h?g=>He()[g>>>1>>>0]:g=>it()[g>>>1>>>0];case 4:return h?g=>W()[g>>>2>>>0]:g=>ke()[g>>>2>>>0];case 8:return h?g=>ie[g>>>3]:g=>$e[g>>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function ay(l,c,h){h>>>=0,Zt(l>>>=0,{name:c=Ut(c>>>0),fromWireType:g=>g,toWireType:function(g,w){if(typeof w!="bigint"&&typeof w!="number")throw w=w===null?"null":(g=typeof w)=="object"||g==="array"||g==="function"?w.toString():""+w,new TypeError(`Cannot convert "${w}" to ${this.name}`);return typeof w=="number"&&(w=BigInt(w)),w},Cb:di,readValueFromPointer:vl(c,h,c.indexOf("u")==-1),Eb:null})}var di=8;function oy(l,c,h,g){Zt(l>>>=0,{name:c=Ut(c>>>0),fromWireType:function(w){return!!w},toWireType:function(w,S){return S?h:g},Cb:di,readValueFromPointer:function(w){return this.fromWireType(me()[w>>>0])},Eb:null})}var as=[],Yt=[];function os(l){9<(l>>>=0)&&--Yt[l+1]==0&&(Yt[l]=void 0,as.push(l))}var lt=l=>{if(!l)throw new Zi(`Cannot use deleted val. handle = ${l}`);return Yt[l]},Ct=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=as.pop()||Yt.length;return Yt[c]=l,Yt[c+1]=1,c}};function ls(l){return this.fromWireType(ke()[l>>>2>>>0])}var ly={name:"emscripten::val",fromWireType:l=>{var c=lt(l);return os(l),c},toWireType:(l,c)=>Ct(c),Cb:di,readValueFromPointer:ls,Eb:null};function uy(l){return Zt(l>>>0,ly)}var dy=(l,c)=>{switch(c){case 4:return function(h){return this.fromWireType(rt()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(Ge()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function cy(l,c,h){h>>>=0,Zt(l>>>=0,{name:c=Ut(c>>>0),fromWireType:g=>g,toWireType:(g,w)=>w,Cb:di,readValueFromPointer:dy(c,h),Eb:null})}function fy(l,c,h,g,w){if(l>>>=0,h>>>=0,c=Ut(c>>>0),w===-1&&(w=4294967295),w=B=>B,g===0){var S=32-8*h;w=B=>B<<S>>>S}var A=c.includes("unsigned")?function(B,q){return q>>>0}:function(B,q){return q};Zt(l,{name:c,fromWireType:w,toWireType:A,Cb:di,readValueFromPointer:vl(c,h,g!==0),Eb:null})}function py(l,c,h){function g(S){var A=ke()[S>>>2>>>0];return S=ke()[S+4>>>2>>>0],new w(re().buffer,S,A)}var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];Zt(l>>>=0,{name:h=Ut(h>>>0),fromWireType:g,Cb:di,readValueFromPointer:g},{Tb:!0})}var Ci=(l,c,h)=>{var g=me();if(c>>>=0,0<h){var w=c;h=c+h-1;for(var S=0;S<l.length;++S){var A=l.charCodeAt(S);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&l.charCodeAt(++S)),127>=A){if(c>=h)break;g[c++>>>0]=A}else{if(2047>=A){if(c+1>=h)break;g[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=h)break;g[c++>>>0]=224|A>>12}else{if(c+3>=h)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63}g[c++>>>0]=128|A>>6&63}g[c++>>>0]=128|63&A}}g[c>>>0]=0,l=c-w}else l=0;return l},us=l=>{for(var c=0,h=0;h<l.length;++h){var g=l.charCodeAt(h);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++h):c+=3}return c};function hy(l,c){Zt(l>>>=0,{name:c=Ut(c>>>0),fromWireType:function(h){for(var g,w=ke()[h>>>2>>>0],S=h+4,A=S,B=0;B<=w;++B){var q=S+B;B!=w&&me()[q>>>0]!=0||(A=Ke(A,q-A),g===void 0?g=A:(g+="\0",g+=A),A=q+1)}return Xt(h),g},toWireType:function(h,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var w=typeof g=="string";if(!(w||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Zi("Cannot pass non-string to std::string");var S=w?us(g):g.length,A=ln(4+S+1),B=A+4;return ke()[A>>>2>>>0]=S,w?Ci(g,B,S+1):me().set(g,B>>>0),h!==null&&h.push(Xt,A),A},Cb:di,readValueFromPointer:ls,Eb(h){Xt(h)}})}var $l=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,my=(l,c)=>{for(var h=l>>1,g=h+c/2;!(h>=g)&&it()[h>>>0];)++h;if(32<(h<<=1)-l&&$l)return $l.decode(me().slice(l,h));for(h="",g=0;!(g>=c/2);++g){var w=He()[l+2*g>>>1>>>0];if(w==0)break;h+=String.fromCharCode(w)}return h},gy=(l,c,h)=>{if(h??(h=2147483647),2>h)return 0;var g=c;h=(h-=2)<2*l.length?h/2:l.length;for(var w=0;w<h;++w){var S=l.charCodeAt(w);He()[c>>>1>>>0]=S,c+=2}return He()[c>>>1>>>0]=0,c-g},_y=l=>2*l.length,yy=(l,c)=>{for(var h=0,g="";!(h>=c/4);){var w=W()[l+4*h>>>2>>>0];if(w==0)break;++h,65536<=w?(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w)):g+=String.fromCharCode(w)}return g},by=(l,c,h)=>{if(c>>>=0,h??(h=2147483647),4>h)return 0;var g=c;h=g+h-4;for(var w=0;w<l.length;++w){var S=l.charCodeAt(w);if(55296<=S&&57343>=S&&(S=65536+((1023&S)<<10)|1023&l.charCodeAt(++w)),W()[c>>>2>>>0]=S,(c+=4)+4>h)break}return W()[c>>>2>>>0]=0,c-g},wy=l=>{for(var c=0,h=0;h<l.length;++h){var g=l.charCodeAt(h);55296<=g&&57343>=g&&++h,c+=4}return c};function vy(l,c,h){if(l>>>=0,c>>>=0,h=Ut(h>>>=0),c===2)var g=my,w=gy,S=_y,A=B=>it()[B>>>1>>>0];else c===4&&(g=yy,w=by,S=wy,A=B=>ke()[B>>>2>>>0]);Zt(l,{name:h,fromWireType:B=>{for(var q,Y=ke()[B>>>2>>>0],ue=B+4,_e=0;_e<=Y;++_e){var xe=B+4+_e*c;_e!=Y&&A(xe)!=0||(ue=g(ue,xe-ue),q===void 0?q=ue:(q+="\0",q+=ue),ue=xe+c)}return Xt(B),q},toWireType:(B,q)=>{if(typeof q!="string")throw new Zi(`Cannot pass non-string to C++ string type ${h}`);var Y=S(q),ue=ln(4+Y+c);return ke()[ue>>>2>>>0]=Y/c,w(q,ue+4,Y+c),B!==null&&B.push(Xt,ue),ue},Cb:di,readValueFromPointer:ls,Eb(B){Xt(B)}})}function $y(l,c){Zt(l>>>=0,{Ub:!0,name:c=Ut(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function xy(l){bs(l>>>0,!u,1,!o,131072,!1),cr()}var ds=l=>{if(!P)try{if(l(),!(0<he))try{d?ws(E):ze(E)}catch(c){c instanceof Q||c=="unwind"||v(0,c)}}catch(c){c instanceof Q||c=="unwind"||v(0,c)}};function cs(l){l>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(W(),l>>>2,l).value.then(Jr),l+=128,Atomics.store(W(),l>>>2,1))}var Jr=()=>{var l=ys();l&&(cs(l),ds(Xl))};function Cy(l,c){(l>>>=0)==c>>>0?setTimeout(Jr):d?postMessage({Hb:l,Db:"checkMailbox"}):(l=Je[l])&&l.postMessage({Db:"checkMailbox"})}var fs=[];function Ty(l,c,h,g,w){for(c>>>=0,g/=2,fs.length=g,h=w>>>0>>>3,w=0;w<g;w++)fs[w]=ie[h+2*w]?ie[h+2*w+1]:Ge()[h+2*w+1>>>0];return(c?_s[c]:_0[l])(...fs)}var Sy=()=>{he=0};function Iy(l){l>>>=0,d?postMessage({Db:"cleanupThread",ic:l}):ui(Je[l])}function Ey(l){}var en=(l,c)=>{var h=ss[l];if(h===void 0)throw l=Fl(l),h=Ut(l),Xt(l),new Zi(`${c} has unknown type ${h}`);return h},xl=(l,c,h)=>{var g=[];return l=l.toWireType(g,h),g.length&&(ke()[c>>>2>>>0]=Ct(g)),l};function ky(l,c,h){return c>>>=0,h>>>=0,l=lt(l>>>0),c=en(c,"emval::as"),xl(c,h,l)}function Ay(l,c){return c>>>=0,l=lt(l>>>0),(c=en(c,"emval::as")).toWireType(null,l)}var tn=l=>{try{l()}catch(c){J(c)}},ci=0,Lt=null,Cl=0,rn=[],Tl={},Sl={},zy=0,ps=null,Oy=[];function Il(l){return function(c){if(!P){if(ci===0){var h=!1,g=!1;c((w=0)=>{if(!P&&(Cl=w,h=!0,g)){ci=2,tn(()=>iu(Lt)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),w=!1;try{var S=function(){var q=W()[Lt+8>>>2>>>0];return q=U[Sl[q]],--he,q()}()}catch(q){S=q,w=!0}var A=!1;if(!Lt){var B=ps;B&&(ps=null,(w?B.reject:B.resolve)(S),A=!0)}if(w&&!A)throw S}}),g=!0,h||(ci=1,Lt=function(){var w=ln(65548),S=w+12;ke()[w>>>2>>>0]=S,ke()[w+4>>>2>>>0]=S+65536,S=rn[0];var A=Tl[S];return A===void 0&&(A=zy++,Tl[S]=A,Sl[A]=S),S=A,W()[w+8>>>2>>>0]=S,w}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),tn(()=>eu(Lt)))}else ci===2?(ci=0,tn(ru),Xt(Lt),Lt=null,Oy.forEach(ds)):J(`invalid state: ${ci}`);return Cl}}(c=>{l().then(c)})}function Ry(l){return l>>>=0,Il(async()=>{var c=await lt(l);return Ct(c)})}var nn=[];function My(l,c,h,g){return h>>>=0,g>>>=0,(l=nn[l>>>0])(null,c=lt(c>>>0),h,g)}var By={},sn=l=>{var c=By[l];return c===void 0?Ut(l):c};function Ny(l,c,h,g,w){return h>>>=0,g>>>=0,w>>>=0,(l=nn[l>>>0])(c=lt(c>>>0),c[h=sn(h)],g,w)}function Dy(l,c){return c>>>=0,(l=lt(l>>>0))==lt(c)}var El=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Py(l){return(l>>>=0)==0?Ct(El()):(l=sn(l),Ct(El()[l]))}var Uy=l=>{var c=nn.length;return nn.push(l),c},Ly=(l,c)=>{for(var h=Array(l),g=0;g<l;++g)h[g]=en(ke()[c+4*g>>>2>>>0],`parameter ${g}`);return h};function qy(l,c,h){var g=(c=Ly(l,c>>>0)).shift();l--;var w=`return function (obj, func, destructorsRef, args) {
`,S=0,A=[];h===0&&A.push("obj");for(var B=["retType"],q=[g],Y=0;Y<l;++Y)A.push(`arg${Y}`),B.push(`argType${Y}`),q.push(c[Y]),w+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${S?"+"+S:""});
`,S+=c[Y].Cb;return w+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,g.Ub||(B.push("emval_returnValue"),q.push(xl),w+=`  return emval_returnValue(retType, destructorsRef, rv);
`),l=new Function(...B,w+`};
`)(...q),h=`methodCaller<(${c.map(ue=>ue.name).join(", ")}) => ${g.name}>`,Uy(Object.defineProperty(l,"name",{value:h}))}function Wy(l){return l=sn(l>>>0),Ct(r[l])}function jy(l,c){return c>>>=0,l=lt(l>>>0),c=lt(c),Ct(l[c])}function Vy(l){9<(l>>>=0)&&(Yt[l+1]+=1)}function Fy(){return Ct([])}function Hy(l){l=lt(l>>>0);for(var c=Array(l.length),h=0;h<l.length;h++)c[h]=l[h];return Ct(c)}function Gy(l){return Ct(sn(l>>>0))}function Ky(){return Ct({})}function Zy(l){for(var c=lt(l>>>=0);c.length;){var h=c.pop();c.pop()(h)}os(l)}function Yy(l,c,h){c>>>=0,h>>>=0,l=lt(l>>>0),c=lt(c),h=lt(h),l[c]=h}function Xy(l,c){return c>>>=0,l=(l=en(l>>>0,"_emval_take_value")).readValueFromPointer(c),Ct(l)}function Qy(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),W()[c>>>2>>>0]=l.getUTCSeconds(),W()[c+4>>>2>>>0]=l.getUTCMinutes(),W()[c+8>>>2>>>0]=l.getUTCHours(),W()[c+12>>>2>>>0]=l.getUTCDate(),W()[c+16>>>2>>>0]=l.getUTCMonth(),W()[c+20>>>2>>>0]=l.getUTCFullYear()-1900,W()[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,W()[c+28>>>2>>>0]=l}var kl=l=>l%4==0&&(l%100!=0||l%400==0),Al=[0,31,60,91,121,152,182,213,244,274,305,335],zl=[0,31,59,90,120,151,181,212,243,273,304,334];function Jy(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),W()[c>>>2>>>0]=l.getSeconds(),W()[c+4>>>2>>>0]=l.getMinutes(),W()[c+8>>>2>>>0]=l.getHours(),W()[c+12>>>2>>>0]=l.getDate(),W()[c+16>>>2>>>0]=l.getMonth(),W()[c+20>>>2>>>0]=l.getFullYear()-1900,W()[c+24>>>2>>>0]=l.getDay();var h=(kl(l.getFullYear())?Al:zl)[l.getMonth()]+l.getDate()-1|0;W()[c+28>>>2>>>0]=h,W()[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),h=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(h!=g&&l.getTimezoneOffset()==Math.min(g,h)),W()[c+32>>>2>>>0]=l}function e0(l){l>>>=0;var c=new Date(W()[l+20>>>2>>>0]+1900,W()[l+16>>>2>>>0],W()[l+12>>>2>>>0],W()[l+8>>>2>>>0],W()[l+4>>>2>>>0],W()[l>>>2>>>0],0),h=W()[l+32>>>2>>>0],g=c.getTimezoneOffset(),w=new Date(c.getFullYear(),6,1).getTimezoneOffset(),S=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(S,w);return 0>h?W()[l+32>>>2>>>0]=+(w!=S&&A==g):0<h!=(A==g)&&(w=Math.max(S,w),c.setTime(c.getTime()+6e4*((0<h?A:w)-g))),W()[l+24>>>2>>>0]=c.getDay(),h=(kl(c.getFullYear())?Al:zl)[c.getMonth()]+c.getDate()-1|0,W()[l+28>>>2>>>0]=h,W()[l>>>2>>>0]=c.getSeconds(),W()[l+4>>>2>>>0]=c.getMinutes(),W()[l+8>>>2>>>0]=c.getHours(),W()[l+12>>>2>>>0]=c.getDate(),W()[l+16>>>2>>>0]=c.getMonth(),W()[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Ol(l,c,h,g,w,S,A){return d?ae(16,1,l,c,h,g,w,S,A):-52}function Rl(l,c,h,g,w,S){if(d)return ae(17,1,l,c,h,g,w,S)}var fr={},t0=()=>performance.timeOrigin+performance.now();function Ml(l,c){if(d)return ae(18,1,l,c);if(fr[l]&&(clearTimeout(fr[l].id),delete fr[l]),!c)return 0;var h=setTimeout(()=>{delete fr[l],ds(()=>Yl(l,performance.timeOrigin+performance.now()))},c);return fr[l]={id:h,rc:c},0}function i0(l,c,h,g){l>>>=0,c>>>=0,h>>>=0,g>>>=0;var w=new Date().getFullYear(),S=new Date(w,0,1).getTimezoneOffset();w=new Date(w,6,1).getTimezoneOffset();var A=Math.max(S,w);ke()[l>>>2>>>0]=60*A,W()[c>>>2>>>0]=+(S!=w),l=(c=B=>{var q=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(S),c=c(w),w<S?(Ci(l,h,17),Ci(c,g,17)):(Ci(l,g,17),Ci(c,h,17))}var r0=()=>Date.now();function n0(l,c,h){return 0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),ie[h>>>0>>>3]=BigInt(Math.round(1e6*l)),0):28}var hs=[],Bl=(l,c)=>{hs.length=0;for(var h;h=me()[l++>>>0];){var g=h!=105;c+=(g&=h!=112)&&c%8?4:0,hs.push(h==112?ke()[c>>>2>>>0]:h==106?ie[c>>>3]:h==105?W()[c>>>2>>>0]:Ge()[c>>>3>>>0]),c+=g?8:4}return hs};function s0(l,c,h){return l>>>=0,c=Bl(c>>>0,h>>>0),_s[l](...c)}function a0(l,c,h){return l>>>=0,c=Bl(c>>>0,h>>>0),_s[l](...c)}var o0=()=>{};function l0(l,c){return Ee(Ke(l>>>0,c>>>0))}var u0=()=>{throw he+=1,"unwind"};function d0(){return 4294901760}var c0=()=>navigator.hardwareConcurrency;function f0(){return J("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function p0(l){l>>>=0;var c=me().length;if(l<=c||4294901760<l)return!1;for(var h=1;4>=h;h*=2){var g=c*(1+.2/h);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-T.buffer.byteLength+65535)/65536|0;try{T.grow(g),I();var w=1;break e}catch{}w=void 0}if(w)return!0}return!1}var an=()=>(J("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),pr={},Nl=l=>{l.forEach(c=>{an()})};function h0(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Nl(l),pr.Mb=an(),pr.dc=l,pr.Mb}function m0(l,c,h){if(l>>>=0,c>>>=0,pr.Mb==l)var g=pr.dc;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Nl(g);for(var w=3;g[w]&&an()!=l;)++w;for(l=0;l<h&&g[l+w];++l)W()[c+4*l>>>2>>>0]=an();return l}var ms,gs={},Dl=()=>{if(!ms){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in gs)gs[l]===void 0?delete c[l]:c[l]=gs[l];var h=[];for(l in c)h.push(`${l}=${c[l]}`);ms=h}return ms};function Pl(l,c){if(d)return ae(19,1,l,c);l>>>=0,c>>>=0;var h,g=0,w=0;for(h of Dl()){var S=c+g;ke()[l+w>>>2>>>0]=S,g+=Ci(h,S,1/0)+1,w+=4}return 0}function Ul(l,c){if(d)return ae(20,1,l,c);l>>>=0,c>>>=0;var h=Dl();for(var g of(ke()[l>>>2>>>0]=h.length,l=0,h))l+=us(g)+1;return ke()[c>>>2>>>0]=l,0}function Ll(l){return d?ae(21,1,l):52}function ql(l,c,h,g){return d?ae(22,1,l,c,h,g):52}function Wl(l,c,h,g){return d?ae(23,1,l,c,h,g):70}var g0=[null,[],[]];function jl(l,c,h,g){if(d)return ae(24,1,l,c,h,g);c>>>=0,h>>>=0,g>>>=0;for(var w=0,S=0;S<h;S++){var A=ke()[c>>>2>>>0],B=ke()[c+4>>>2>>>0];c+=8;for(var q=0;q<B;q++){var Y=l,ue=me()[A+q>>>0],_e=g0[Y];ue===0||ue===10?((Y===1?fe:Ee)(al(_e)),_e.length=0):_e.push(ue)}w+=B}return ke()[g>>>2>>>0]=w,0}d||function(){for(var l=r.numThreads-1;l--;)_t();ge.push(()=>{V++,function(c){d?c():Promise.all(Ve.map(nt)).then(c)}(()=>H())})}();for(var Vl=Array(256),on=0;256>on;++on)Vl[on]=String.fromCharCode(on);wl=Vl,Yt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>Yt.length/2-5-as.length,d||(T=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),I()),r.wasmBinary&&(b=r.wasmBinary),r.stackSave=()=>$s(),r.stackRestore=l=>un(l),r.stackAlloc=l=>vs(l),r.setValue=function(l,c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":re()[l>>>0]=c;break;case"i16":He()[l>>>1>>>0]=c;break;case"i32":W()[l>>>2>>>0]=c;break;case"i64":ie[l>>>3]=BigInt(c);break;case"float":rt()[l>>>2>>>0]=c;break;case"double":Ge()[l>>>3>>>0]=c;break;case"*":ke()[l>>>2>>>0]=c;break;default:J(`invalid type for setValue: ${h}`)}},r.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return re()[l>>>0];case"i16":return He()[l>>>1>>>0];case"i32":return W()[l>>>2>>>0];case"i64":return ie[l>>>3];case"float":return rt()[l>>>2>>>0];case"double":return Ge()[l>>>3>>>0];case"*":return ke()[l>>>2>>>0];default:J(`invalid type for getValue: ${c}`)}},r.UTF8ToString=Ke,r.stringToUTF8=Ci,r.lengthBytesUTF8=us;var _0=[Se,De,rl,ol,ll,ul,dl,cl,fl,pl,hl,ml,gl,_l,yl,bl,Ol,Rl,Ml,Pl,Ul,Ll,ql,Wl,jl],_s={893836:(l,c,h,g,w)=>{if(r===void 0||!r.Fb)return 1;if((l=Ke(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=r.Fb.get(l)))return 2;if(c=Number(c>>>0),h=Number(h>>>0),g=Number(g>>>0),c+h>l.byteLength)return 3;try{let S=l.subarray(c,c+h);switch(w){case 0:me().set(S,g>>>0);break;case 1:r.mc?r.mc(g,S):r.cc(g,S);break;default:return 4}return 0}catch{return 4}},894660:(l,c,h)=>{r.Pb(l,me().subarray(c>>>0,c+h>>>0))},894724:()=>r.oc(),894766:l=>{r.Ob(l)},894803:()=>{r.Wb()},894834:()=>{r.Xb()},894863:()=>{r.ac()},894888:l=>r.Vb(l),894921:l=>r.Zb(l),894953:(l,c,h)=>{r.Lb(Number(l),Number(c),Number(h),!0)},895016:(l,c,h)=>{r.Lb(Number(l),Number(c),Number(h))},895073:()=>typeof wasmOffsetConverter<"u",895130:l=>{r.Ab("Abs",l,void 0)},895181:l=>{r.Ab("Neg",l,void 0)},895232:l=>{r.Ab("Floor",l,void 0)},895285:l=>{r.Ab("Ceil",l,void 0)},895337:l=>{r.Ab("Reciprocal",l,void 0)},895395:l=>{r.Ab("Sqrt",l,void 0)},895447:l=>{r.Ab("Exp",l,void 0)},895498:l=>{r.Ab("Erf",l,void 0)},895549:l=>{r.Ab("Sigmoid",l,void 0)},895604:(l,c,h)=>{r.Ab("HardSigmoid",l,{alpha:c,beta:h})},895683:l=>{r.Ab("Log",l,void 0)},895734:l=>{r.Ab("Sin",l,void 0)},895785:l=>{r.Ab("Cos",l,void 0)},895836:l=>{r.Ab("Tan",l,void 0)},895887:l=>{r.Ab("Asin",l,void 0)},895939:l=>{r.Ab("Acos",l,void 0)},895991:l=>{r.Ab("Atan",l,void 0)},896043:l=>{r.Ab("Sinh",l,void 0)},896095:l=>{r.Ab("Cosh",l,void 0)},896147:l=>{r.Ab("Asinh",l,void 0)},896200:l=>{r.Ab("Acosh",l,void 0)},896253:l=>{r.Ab("Atanh",l,void 0)},896306:l=>{r.Ab("Tanh",l,void 0)},896358:l=>{r.Ab("Not",l,void 0)},896409:(l,c,h)=>{r.Ab("Clip",l,{min:c,max:h})},896478:l=>{r.Ab("Clip",l,void 0)},896530:(l,c)=>{r.Ab("Elu",l,{alpha:c})},896588:l=>{r.Ab("Gelu",l,void 0)},896640:l=>{r.Ab("Relu",l,void 0)},896692:(l,c)=>{r.Ab("LeakyRelu",l,{alpha:c})},896756:(l,c)=>{r.Ab("ThresholdedRelu",l,{alpha:c})},896826:(l,c)=>{r.Ab("Cast",l,{to:c})},896884:l=>{r.Ab("Add",l,void 0)},896935:l=>{r.Ab("Sub",l,void 0)},896986:l=>{r.Ab("Mul",l,void 0)},897037:l=>{r.Ab("Div",l,void 0)},897088:l=>{r.Ab("Pow",l,void 0)},897139:l=>{r.Ab("Equal",l,void 0)},897192:l=>{r.Ab("Greater",l,void 0)},897247:l=>{r.Ab("GreaterOrEqual",l,void 0)},897309:l=>{r.Ab("Less",l,void 0)},897361:l=>{r.Ab("LessOrEqual",l,void 0)},897420:(l,c,h,g,w)=>{r.Ab("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},897595:(l,c,h,g,w)=>{r.Ab("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},897769:(l,c,h,g,w)=>{r.Ab("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},897943:(l,c,h,g,w)=>{r.Ab("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898118:(l,c,h,g,w)=>{r.Ab("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898292:(l,c,h,g,w)=>{r.Ab("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898465:(l,c,h,g,w)=>{r.Ab("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898638:(l,c,h,g,w)=>{r.Ab("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898815:(l,c,h,g,w)=>{r.Ab("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},898995:(l,c,h,g,w)=>{r.Ab("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},899175:l=>{r.Ab("Where",l,void 0)},899228:(l,c,h)=>{r.Ab("Transpose",l,{perm:c?Array.from(W().subarray(Number(c)>>>0,Number(h)>>>0)):[]})},899352:(l,c,h,g)=>{r.Ab("DepthToSpace",l,{blocksize:c,mode:Ke(h),format:g?"NHWC":"NCHW"})},899485:(l,c,h,g)=>{r.Ab("DepthToSpace",l,{blocksize:c,mode:Ke(h),format:g?"NHWC":"NCHW"})},899618:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye)=>{r.Ab("ConvTranspose",l,{format:q?"NHWC":"NCHW",autoPad:c,dilations:[h],group:g,kernelShape:[w],pads:[S,A],strides:[B],wIsConst:()=>!!re()[Y>>>0],outputPadding:ue?Array.from(W().subarray(Number(ue)>>>0,Number(_e)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[],activation:Ke(Ye)})},900051:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("ConvTranspose",l,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from(W().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:g,kernelShape:Array.from(W().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(W().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(W().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!re()[q>>>0],outputPadding:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],outputShape:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[],activation:Ke(Oe)})},900712:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye)=>{r.Ab("ConvTranspose",l,{format:q?"NHWC":"NCHW",autoPad:c,dilations:[h],group:g,kernelShape:[w],pads:[S,A],strides:[B],wIsConst:()=>!!re()[Y>>>0],outputPadding:ue?Array.from(W().subarray(Number(ue)>>>0,Number(_e)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[],activation:Ke(Ye)})},901145:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("ConvTranspose",l,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from(W().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:g,kernelShape:Array.from(W().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(W().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(W().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!re()[q>>>0],outputPadding:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],outputShape:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[],activation:Ke(Oe)})},901806:(l,c)=>{r.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},901897:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("AveragePool",l,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:w,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(W().subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},902376:(l,c)=>{r.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},902467:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("AveragePool",l,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:w,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(W().subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},902946:(l,c)=>{r.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903033:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("MaxPool",l,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:w,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(W().subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},903508:(l,c)=>{r.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903595:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>{r.Ab("MaxPool",l,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:w,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(W().subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:_e?Array.from(W().subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},904070:(l,c,h,g,w)=>{r.Ab("Gemm",l,{alpha:c,beta:h,transA:g,transB:w})},904174:l=>{r.Ab("MatMul",l,void 0)},904228:(l,c,h,g)=>{r.Ab("ArgMax",l,{keepDims:!!c,selectLastIndex:!!h,axis:g})},904336:(l,c,h,g)=>{r.Ab("ArgMin",l,{keepDims:!!c,selectLastIndex:!!h,axis:g})},904444:(l,c)=>{r.Ab("Softmax",l,{axis:c})},904507:(l,c)=>{r.Ab("Concat",l,{axis:c})},904567:(l,c,h,g,w)=>{r.Ab("Split",l,{axis:c,numOutputs:h,splitSizes:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},904723:l=>{r.Ab("Expand",l,void 0)},904777:(l,c)=>{r.Ab("Gather",l,{axis:Number(c)})},904848:(l,c)=>{r.Ab("GatherElements",l,{axis:Number(c)})},904927:(l,c)=>{r.Ab("GatherND",l,{batch_dims:Number(c)})},905006:(l,c,h,g,w,S,A,B,q,Y,ue)=>{r.Ab("Resize",l,{antialias:c,axes:h?Array.from(W().subarray(Number(h)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Ke(w),cubicCoeffA:S,excludeOutside:A,extrapolationValue:B,keepAspectRatioPolicy:Ke(q),mode:Ke(Y),nearestMode:Ke(ue)})},905368:(l,c,h,g,w,S,A)=>{r.Ab("Slice",l,{starts:c?Array.from(W().subarray(Number(c)>>>0,Number(h)>>>0)):[],ends:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[],axes:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[]})},905632:l=>{r.Ab("Tile",l,void 0)},905684:(l,c,h)=>{r.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905798:(l,c,h)=>{r.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905912:l=>{r.Ab("Range",l,void 0)},905965:(l,c)=>{r.Ab("Einsum",l,{equation:Ke(c)})},906046:(l,c,h,g,w)=>{r.Ab("Pad",l,{mode:c,value:h,pads:g?Array.from(W().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},906189:(l,c,h,g,w,S)=>{r.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!w,trainingMode:!!g,format:S?"NHWC":"NCHW"})},906358:(l,c,h,g,w,S)=>{r.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!w,trainingMode:!!g,format:S?"NHWC":"NCHW"})},906527:(l,c,h)=>{r.Ab("CumSum",l,{exclusive:Number(c),reverse:Number(h)})},906624:(l,c,h)=>{r.Ab("DequantizeLinear",l,{axis:c,blockSize:h})},906714:(l,c,h,g,w)=>{r.Ab("GridSample",l,{align_corners:c,mode:Ke(h),padding_mode:Ke(g),format:w?"NHWC":"NCHW"})},906884:(l,c,h,g,w)=>{r.Ab("GridSample",l,{align_corners:c,mode:Ke(h),padding_mode:Ke(g),format:w?"NHWC":"NCHW"})},907054:(l,c)=>{r.Ab("ScatterND",l,{reduction:Ke(c)})},907139:(l,c,h,g,w,S,A,B,q)=>{r.Ab("Attention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:g,scale:w,doRotary:S,qkvHiddenSizes:A?Array.from(W().subarray(Number(B)>>>0,Number(B)+A>>>0)):[],pastPresentShareBuffer:!!q})},907411:l=>{r.Ab("BiasAdd",l,void 0)},907466:l=>{r.Ab("BiasSplitGelu",l,void 0)},907527:l=>{r.Ab("FastGelu",l,void 0)},907583:(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt)=>{r.Ab("Conv",l,{format:_e?"NHWC":"NCHW",auto_pad:c,dilations:h?Array.from(W().subarray(Number(h)>>>0,Number(g)>>>0)):[],group:w,kernel_shape:S?Array.from(W().subarray(Number(S)>>>0,Number(A)>>>0)):[],pads:B?Array.from(W().subarray(Number(B)>>>0,Number(q)>>>0)):[],strides:Y?Array.from(W().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],w_is_const:()=>!!re()[Number(xe)>>>0],activation:Ke(Oe),activation_params:Ye?Array.from(rt().subarray(Number(Ye)>>>0,Number(yt)>>>0)):[]})},908167:l=>{r.Ab("Gelu",l,void 0)},908219:(l,c,h,g,w,S,A,B,q)=>{r.Ab("GroupQueryAttention",l,{numHeads:c,kvNumHeads:h,scale:g,softcap:w,doRotary:S,rotaryInterleaved:A,smoothSoftmax:B,localWindowSize:q})},908436:(l,c,h,g)=>{r.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!g})},908547:(l,c,h,g)=>{r.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!g})},908658:(l,c,h,g,w,S)=>{r.Ab("MatMulNBits",l,{k:c,n:h,accuracyLevel:g,bits:w,blockSize:S})},908785:(l,c,h,g,w,S)=>{r.Ab("MultiHeadAttention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:g,scale:w,doRotary:S})},908944:(l,c)=>{r.Ab("QuickGelu",l,{alpha:c})},909008:(l,c,h,g,w)=>{r.Ab("RotaryEmbedding",l,{interleaved:!!c,numHeads:h,rotaryEmbeddingDim:g,scale:w})},909147:(l,c,h)=>{r.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909249:(l,c,h)=>{r.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909351:(l,c,h,g)=>{r.Ab("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:h,blockSize:g})},909472:l=>{r.$b(l)},909506:(l,c)=>r.bc(Number(l),Number(c),r.Gb.ec,r.Gb.errors)};function y0(l,c,h){return Il(async()=>{await r.Yb(Number(l),Number(c),Number(h))})}function b0(){return typeof wasmOffsetConverter<"u"}var U=await async function(){function l(g,w){return U=g.exports,U=function(){var S=U,A={};for(let[B,q]of Object.entries(S))A[B]=typeof q=="function"?(...Y)=>{rn.push(B);try{return q(...Y)}finally{P||(rn.pop(),Lt&&ci===1&&rn.length===0&&(ci=0,he+=1,tn(tu),typeof Fibers<"u"&&Fibers.sc()))}}:q;return A}(),U=function(){var S=U,A=q=>Y=>q(Y)>>>0,B=q=>()=>q()>>>0;return(S=Object.assign({},S)).Ea=A(S.Ea),S.gb=B(S.gb),S.ib=A(S.ib),S.tb=A(S.tb),S.ub=B(S.ub),S.__cxa_get_exception_ptr=A(S.__cxa_get_exception_ptr),S}(),gt.push(U.jb),x=w,H(),U}V++;var c=te();if(r.instantiateWasm)return new Promise(g=>{r.instantiateWasm(c,(w,S)=>{g(l(w,S))})});if(d)return new Promise(g=>{ee=w=>{var S=new WebAssembly.Instance(w,te());g(l(S,w))}});D??(D=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",$):$+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href);try{var h=await async function(g){var w=D;if(!b&&typeof WebAssembly.instantiateStreaming=="function"&&!Z(w))try{var S=fetch(w,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(S,g)}catch(A){Ee(`wasm streaming compile failed: ${A}`),Ee("falling back to ArrayBuffer instantiation")}return async function(A,B){try{var q=await async function(Y){if(!b)try{var ue=await _(Y);return new Uint8Array(ue)}catch{}if(Y==D&&b)Y=new Uint8Array(b);else{if(!y)throw"both async and sync fetching of the wasm failed";Y=y(Y)}return Y}(A);return await WebAssembly.instantiate(q,B)}catch(Y){Ee(`failed to asynchronously prepare wasm: ${Y}`),J(Y)}}(w,g)}(c);return l(h.instance,h.module)}catch(g){return s(g),Promise.reject(g)}}(),Fl=l=>(Fl=U.Ea)(l),Hl=()=>(Hl=U.Fa)();r._OrtInit=(l,c)=>(r._OrtInit=U.Ga)(l,c),r._OrtGetLastError=(l,c)=>(r._OrtGetLastError=U.Ha)(l,c),r._OrtCreateSessionOptions=(l,c,h,g,w,S,A,B,q,Y)=>(r._OrtCreateSessionOptions=U.Ia)(l,c,h,g,w,S,A,B,q,Y),r._OrtAppendExecutionProvider=(l,c,h,g,w)=>(r._OrtAppendExecutionProvider=U.Ja)(l,c,h,g,w),r._OrtAddFreeDimensionOverride=(l,c,h)=>(r._OrtAddFreeDimensionOverride=U.Ka)(l,c,h),r._OrtAddSessionConfigEntry=(l,c,h)=>(r._OrtAddSessionConfigEntry=U.La)(l,c,h),r._OrtReleaseSessionOptions=l=>(r._OrtReleaseSessionOptions=U.Ma)(l),r._OrtCreateSession=(l,c,h)=>(r._OrtCreateSession=U.Na)(l,c,h),r._OrtReleaseSession=l=>(r._OrtReleaseSession=U.Oa)(l),r._OrtGetInputOutputCount=(l,c,h)=>(r._OrtGetInputOutputCount=U.Pa)(l,c,h),r._OrtGetInputOutputMetadata=(l,c,h,g)=>(r._OrtGetInputOutputMetadata=U.Qa)(l,c,h,g),r._OrtFree=l=>(r._OrtFree=U.Ra)(l),r._OrtCreateTensor=(l,c,h,g,w,S)=>(r._OrtCreateTensor=U.Sa)(l,c,h,g,w,S),r._OrtGetTensorData=(l,c,h,g,w)=>(r._OrtGetTensorData=U.Ta)(l,c,h,g,w),r._OrtReleaseTensor=l=>(r._OrtReleaseTensor=U.Ua)(l),r._OrtCreateRunOptions=(l,c,h,g)=>(r._OrtCreateRunOptions=U.Va)(l,c,h,g),r._OrtAddRunConfigEntry=(l,c,h)=>(r._OrtAddRunConfigEntry=U.Wa)(l,c,h),r._OrtReleaseRunOptions=l=>(r._OrtReleaseRunOptions=U.Xa)(l),r._OrtCreateBinding=l=>(r._OrtCreateBinding=U.Ya)(l),r._OrtBindInput=(l,c,h)=>(r._OrtBindInput=U.Za)(l,c,h),r._OrtBindOutput=(l,c,h,g)=>(r._OrtBindOutput=U._a)(l,c,h,g),r._OrtClearBoundOutputs=l=>(r._OrtClearBoundOutputs=U.$a)(l),r._OrtReleaseBinding=l=>(r._OrtReleaseBinding=U.ab)(l),r._OrtRunWithBinding=(l,c,h,g,w)=>(r._OrtRunWithBinding=U.bb)(l,c,h,g,w),r._OrtRun=(l,c,h,g,w,S,A,B)=>(r._OrtRun=U.cb)(l,c,h,g,w,S,A,B),r._OrtEndProfiling=l=>(r._OrtEndProfiling=U.db)(l),r._JsepOutput=(l,c,h)=>(r._JsepOutput=U.eb)(l,c,h),r._JsepGetNodeName=l=>(r._JsepGetNodeName=U.fb)(l);var ys=()=>(ys=U.gb)(),Xt=r._free=l=>(Xt=r._free=U.hb)(l),ln=r._malloc=l=>(ln=r._malloc=U.ib)(l),bs=(l,c,h,g,w,S)=>(bs=U.kb)(l,c,h,g,w,S),Gl=()=>(Gl=U.lb)(),Kl=(l,c,h,g,w)=>(Kl=U.mb)(l,c,h,g,w),Zl=l=>(Zl=U.nb)(l),ws=l=>(ws=U.ob)(l),Yl=(l,c)=>(Yl=U.pb)(l,c),Xl=()=>(Xl=U.qb)(),Ql=(l,c)=>(Ql=U.rb)(l,c),un=l=>(un=U.sb)(l),vs=l=>(vs=U.tb)(l),$s=()=>($s=U.ub)(),Jl=r.dynCall_ii=(l,c)=>(Jl=r.dynCall_ii=U.vb)(l,c);r.dynCall_vii=(l,c,h)=>(r.dynCall_vii=U.dynCall_vii)(l,c,h),r.dynCall_iiiii=(l,c,h,g,w)=>(r.dynCall_iiiii=U.dynCall_iiiii)(l,c,h,g,w),r.dynCall_iii=(l,c,h)=>(r.dynCall_iii=U.dynCall_iii)(l,c,h),r.dynCall_iiiiii=(l,c,h,g,w,S)=>(r.dynCall_iiiiii=U.dynCall_iiiiii)(l,c,h,g,w,S),r.dynCall_iiiiiiii=(l,c,h,g,w,S,A,B)=>(r.dynCall_iiiiiiii=U.dynCall_iiiiiiii)(l,c,h,g,w,S,A,B),r.dynCall_iiiiiii=(l,c,h,g,w,S,A)=>(r.dynCall_iiiiiii=U.dynCall_iiiiiii)(l,c,h,g,w,S,A),r.dynCall_vi=(l,c)=>(r.dynCall_vi=U.dynCall_vi)(l,c),r.dynCall_iiii=(l,c,h,g)=>(r.dynCall_iiii=U.dynCall_iiii)(l,c,h,g),r.dynCall_i=l=>(r.dynCall_i=U.dynCall_i)(l),r.dynCall_viiiiiiii=(l,c,h,g,w,S,A,B,q)=>(r.dynCall_viiiiiiii=U.dynCall_viiiiiiii)(l,c,h,g,w,S,A,B,q),r.dynCall_viii=(l,c,h,g)=>(r.dynCall_viii=U.dynCall_viii)(l,c,h,g),r.dynCall_viijj=(l,c,h,g,w)=>(r.dynCall_viijj=U.dynCall_viijj)(l,c,h,g,w),r.dynCall_viiiiii=(l,c,h,g,w,S,A)=>(r.dynCall_viiiiii=U.dynCall_viiiiii)(l,c,h,g,w,S,A),r.dynCall_viiii=(l,c,h,g,w)=>(r.dynCall_viiii=U.dynCall_viiii)(l,c,h,g,w),r.dynCall_viiiii=(l,c,h,g,w,S)=>(r.dynCall_viiiii=U.dynCall_viiiii)(l,c,h,g,w,S),r.dynCall_vfiii=(l,c,h,g,w)=>(r.dynCall_vfiii=U.dynCall_vfiii)(l,c,h,g,w),r.dynCall_viiiiff=(l,c,h,g,w,S,A)=>(r.dynCall_viiiiff=U.dynCall_viiiiff)(l,c,h,g,w,S,A),r.dynCall_viiiiiff=(l,c,h,g,w,S,A,B)=>(r.dynCall_viiiiiff=U.dynCall_viiiiiff)(l,c,h,g,w,S,A,B),r.dynCall_ffff=(l,c,h,g)=>(r.dynCall_ffff=U.dynCall_ffff)(l,c,h,g),r.dynCall_viiff=(l,c,h,g,w)=>(r.dynCall_viiff=U.dynCall_viiff)(l,c,h,g,w),r.dynCall_fffffff=(l,c,h,g,w,S,A)=>(r.dynCall_fffffff=U.dynCall_fffffff)(l,c,h,g,w,S,A),r.dynCall_jjjjjjj=(l,c,h,g,w,S,A)=>(r.dynCall_jjjjjjj=U.dynCall_jjjjjjj)(l,c,h,g,w,S,A),r.dynCall_jjjjjj=(l,c,h,g,w,S)=>(r.dynCall_jjjjjj=U.dynCall_jjjjjj)(l,c,h,g,w,S),r.dynCall_iijjii=(l,c,h,g,w,S)=>(r.dynCall_iijjii=U.dynCall_iijjii)(l,c,h,g,w,S),r.dynCall_viiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe)=>(r.dynCall_viiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe),r.dynCall_viiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue)=>(r.dynCall_viiiiiiiiii=U.dynCall_viiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue),r.dynCall_viiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e)=>(r.dynCall_viiiiiiiiiii=U.dynCall_viiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e),r.dynCall_viiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe)=>(r.dynCall_viiiiiiiiiiii=U.dynCall_viiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe),r.dynCall_viiiiiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr)=>(r.dynCall_viiiiiiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr),r.dynCall_viiiiiiiii=(l,c,h,g,w,S,A,B,q,Y)=>(r.dynCall_viiiiiiiii=U.dynCall_viiiiiiiii)(l,c,h,g,w,S,A,B,q,Y),r.dynCall_viiiiiiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr,xs)=>(r.dynCall_viiiiiiiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr,xs),r.dynCall_viiiiiii=(l,c,h,g,w,S,A,B)=>(r.dynCall_viiiiiii=U.dynCall_viiiiiii)(l,c,h,g,w,S,A,B),r.dynCall_viiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt)=>(r.dynCall_viiiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt),r.dynCall_jiji=(l,c,h,g)=>(r.dynCall_jiji=U.dynCall_jiji)(l,c,h,g),r.dynCall_v=l=>(r.dynCall_v=U.dynCall_v)(l),r.dynCall_iidiiii=(l,c,h,g,w,S,A)=>(r.dynCall_iidiiii=U.dynCall_iidiiii)(l,c,h,g,w,S,A),r.dynCall_iiiiiiiii=(l,c,h,g,w,S,A,B,q)=>(r.dynCall_iiiiiiiii=U.dynCall_iiiiiiiii)(l,c,h,g,w,S,A,B,q),r.dynCall_iiij=(l,c,h,g)=>(r.dynCall_iiij=U.dynCall_iiij)(l,c,h,g),r.dynCall_iiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y)=>(r.dynCall_iiiiiiiiii=U.dynCall_iiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y),r.dynCall_iiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe)=>(r.dynCall_iiiiiiiiiiiii=U.dynCall_iiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe),r.dynCall_iiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue)=>(r.dynCall_iiiiiiiiiii=U.dynCall_iiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue),r.dynCall_ji=(l,c)=>(r.dynCall_ji=U.dynCall_ji)(l,c),r.dynCall_iijii=(l,c,h,g,w)=>(r.dynCall_iijii=U.dynCall_iijii)(l,c,h,g,w),r.dynCall_vij=(l,c,h)=>(r.dynCall_vij=U.dynCall_vij)(l,c,h),r.dynCall_viiijii=(l,c,h,g,w,S,A)=>(r.dynCall_viiijii=U.dynCall_viiijii)(l,c,h,g,w,S,A),r.dynCall_viijiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti)=>(r.dynCall_viijiiiiiiiiiiiiii=U.dynCall_viijiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti),r.dynCall_viiiji=(l,c,h,g,w,S)=>(r.dynCall_viiiji=U.dynCall_viiiji)(l,c,h,g,w,S),r.dynCall_fiii=(l,c,h,g)=>(r.dynCall_fiii=U.dynCall_fiii)(l,c,h,g),r.dynCall_viijii=(l,c,h,g,w,S)=>(r.dynCall_viijii=U.dynCall_viijii)(l,c,h,g,w,S),r.dynCall_viij=(l,c,h,g)=>(r.dynCall_viij=U.dynCall_viij)(l,c,h,g),r.dynCall_jiij=(l,c,h,g)=>(r.dynCall_jiij=U.dynCall_jiij)(l,c,h,g),r.dynCall_fi=(l,c)=>(r.dynCall_fi=U.dynCall_fi)(l,c),r.dynCall_fii=(l,c,h)=>(r.dynCall_fii=U.dynCall_fii)(l,c,h),r.dynCall_jii=(l,c,h)=>(r.dynCall_jii=U.dynCall_jii)(l,c,h),r.dynCall_dii=(l,c,h)=>(r.dynCall_dii=U.dynCall_dii)(l,c,h),r.dynCall_fiiii=(l,c,h,g,w)=>(r.dynCall_fiiii=U.dynCall_fiiii)(l,c,h,g,w),r.dynCall_fif=(l,c,h)=>(r.dynCall_fif=U.dynCall_fif)(l,c,h),r.dynCall_jfi=(l,c,h)=>(r.dynCall_jfi=U.dynCall_jfi)(l,c,h),r.dynCall_viiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye)=>(r.dynCall_viiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye),r.dynCall_viiiiiiiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr,xs,w0)=>(r.dynCall_viiiiiiiiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt,Ti,hr,xs,w0),r.dynCall_viiiiiiiiiiiiiiii=(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt)=>(r.dynCall_viiiiiiiiiiiiiiii=U.dynCall_viiiiiiiiiiiiiiii)(l,c,h,g,w,S,A,B,q,Y,ue,_e,xe,Oe,Ye,yt,Qt),r.dynCall_iif=(l,c,h)=>(r.dynCall_iif=U.dynCall_iif)(l,c,h),r.dynCall_jiiii=(l,c,h,g,w)=>(r.dynCall_jiiii=U.dynCall_jiiii)(l,c,h,g,w),r.dynCall_jiii=(l,c,h,g)=>(r.dynCall_jiii=U.dynCall_jiii)(l,c,h,g),r.dynCall_viif=(l,c,h,g)=>(r.dynCall_viif=U.dynCall_viif)(l,c,h,g),r.dynCall_viiij=(l,c,h,g,w)=>(r.dynCall_viiij=U.dynCall_viiij)(l,c,h,g,w),r.dynCall_viiiijii=(l,c,h,g,w,S,A,B)=>(r.dynCall_viiiijii=U.dynCall_viiiijii)(l,c,h,g,w,S,A,B),r.dynCall_iiiiij=(l,c,h,g,w,S)=>(r.dynCall_iiiiij=U.dynCall_iiiiij)(l,c,h,g,w,S),r.dynCall_iiiiid=(l,c,h,g,w,S)=>(r.dynCall_iiiiid=U.dynCall_iiiiid)(l,c,h,g,w,S),r.dynCall_iiiiijj=(l,c,h,g,w,S,A)=>(r.dynCall_iiiiijj=U.dynCall_iiiiijj)(l,c,h,g,w,S,A),r.dynCall_iiiiiijj=(l,c,h,g,w,S,A,B)=>(r.dynCall_iiiiiijj=U.dynCall_iiiiiijj)(l,c,h,g,w,S,A,B);var eu=l=>(eu=U.wb)(l),tu=()=>(tu=U.xb)(),iu=l=>(iu=U.yb)(l),ru=()=>(ru=U.zb)();return function l(){if(0<V)j=l;else if(d)n(r),k();else{for(;0<ge.length;)ge.shift()(r);0<V?j=l:(r.calledRun=!0,P||(k(),n(r)))}}(),r.PTR_SIZE=4,a},Wh=js,Du=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Du&&js()}),Vs,Ga,Pu,bt,jh,mn,Uu,Lu,Fs,qu,Hs,Vh,Gs,Fh,Oo=K(()=>{zo(),Vs=typeof location>"u"?void 0:location.origin,Ga=import.meta.url>"file:"&&import.meta.url<"file;",Pu=()=>{{if(Ga){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Vs).href}return import.meta.url}},bt=Pu(),jh=()=>{if(bt&&!bt.startsWith("blob:"))return bt.substring(0,bt.lastIndexOf("/")+1)},mn=(e,t)=>{try{let i=t??bt;return(i?new URL(e,i):new URL(e)).origin===Vs}catch{return!1}},Uu=(e,t)=>{let i=t??bt;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},Lu=(e,t)=>`${t??"./"}${e}`,Fs=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},qu=async e=>(await import(e)).default,Hs=(yv(),Gr(Uh)).default,Vh=async()=>{if(!bt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(mn(bt))return[void 0,Hs()];let e=await Fs(bt);return[e,Hs(e)]},Gs=(bv(),Gr(qh)).default,Fh=async(e,t,i,n)=>{let s=Gs&&!(e||t);if(s)if(bt)s=mn(bt);else if(n&&!i)s=!0;else throw new Error("cannot determine the script source URL.");if(s)return[void 0,Gs];{let r="ort-wasm-simd-threaded.jsep.mjs",a=e??Uu(r,t),o=i&&a&&!mn(a,t),u=o?await Fs(a):a??Lu(r,t);return[o?u:void 0,await qu(u)]}}}),Ks,gn,yr,Zs,Wu,ju,Vu,Ro,Pe,Gi=K(()=>{Oo(),gn=!1,yr=!1,Zs=!1,Wu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ju=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Vu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ro=async e=>{if(gn)return Promise.resolve();if(yr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Zs)throw new Error("previous call to 'initializeWebAssembly()' failed.");yr=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Vu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ju())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Wu();i>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let s=e.wasmPaths,r=typeof s=="string"?s:void 0,a=s==null?void 0:s.mjs,o=(a==null?void 0:a.href)??a,u=s==null?void 0:s.wasm,d=(u==null?void 0:u.href)??u,f=e.wasmBinary,[p,m]=await Fh(o,r,i>1,!!f||!!d),_=!1,y=[];if(t>0&&y.push(new Promise(v=>{setTimeout(()=>{_=!0,v()},t)})),y.push(new Promise((v,C)=>{let $={numThreads:i};if(f)$.wasmBinary=f;else if(d||r)$.locateFile=b=>d??r+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(p){let b=jh();b&&($.locateFile=T=>b+T)}m($).then(b=>{yr=!1,gn=!0,Ks=b,v(),p&&URL.revokeObjectURL(p)},b=>{yr=!1,Zs=!0,C(b)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(gn&&Ks)return Ks;throw new Error("WebAssembly is not initialized yet.")}}),Rt,Un,Me,Mo=K(()=>{Gi(),Rt=(e,t)=>{let i=Pe(),n=i.lengthBytesUTF8(e)+1,s=i._malloc(n);return i.stringToUTF8(e,s,n),t.push(s),s},Un=(e,t,i,n)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([s,r])=>{let a=t?t+s:s;if(typeof r=="object")Un(r,a+".",i,n);else if(typeof r=="string"||typeof r=="number")n(a,r.toString());else if(typeof r=="boolean")n(a,r?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof r}`)})},Me=e=>{let t=Pe(),i=t.stackSave();try{let n=t.PTR_SIZE,s=t.stackAlloc(2*n);t._OrtGetLastError(s,s+n);let r=Number(t.getValue(s,n===4?"i32":"i64")),a=t.getValue(s+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${r}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(i)}}}),Hh,wv=K(()=>{Gi(),Mo(),Hh=e=>{let t=Pe(),i=0,n=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let r=0;return(e==null?void 0:e.tag)!==void 0&&(r=Rt(e.tag,n)),i=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,r),i===0&&Me("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Un(e.extra,"",new WeakSet,(a,o)=>{let u=Rt(a,n),d=Rt(o,n);t._OrtAddRunConfigEntry(i,u,d)!==0&&Me(`Can't set a run config entry: ${a} - ${o}.`)}),[i,n]}catch(r){throw i!==0&&t._OrtReleaseRunOptions(i),n.forEach(a=>t._free(a)),r}}}),Fu,Hu,Gu,br,Ku,Gh,vv=K(()=>{Gi(),Mo(),Fu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Hu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Gu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},br=(e,t,i,n)=>{let s=Rt(t,n),r=Rt(i,n);Pe()._OrtAddSessionConfigEntry(e,s,r)!==0&&Me(`Can't set a session config entry: ${t} - ${i}.`)},Ku=async(e,t,i)=>{for(let n of t){let s=typeof n=="string"?n:n.name,r=[];switch(s){case"webnn":if(s="WEBNN",typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&br(e,"deviceType",f,i)}break;case"webgpu":if(s="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);br(e,"preferredLayout",f.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let a=Rt(s,i),o=r.length,u=0,d=0;if(o>0){u=Pe()._malloc(o*Pe().PTR_SIZE),i.push(u),d=Pe()._malloc(o*Pe().PTR_SIZE),i.push(d);for(let f=0;f<o;f++)Pe().setValue(u+f*Pe().PTR_SIZE,r[f][0],"*"),Pe().setValue(d+f*Pe().PTR_SIZE,r[f][1],"*")}await Pe()._OrtAppendExecutionProvider(e,a,u,d,o)!==0&&Me(`Can't append execution provider: ${s}.`)}},Gh=async e=>{let t=Pe(),i=0,n=[],s=e||{};Gu(s);try{let r=Fu(s.graphOptimizationLevel??"all"),a=Hu(s.executionMode??"sequential"),o=typeof s.logId=="string"?Rt(s.logId,n):0,u=s.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=s.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof s.optimizedModelFilePath=="string"?Rt(s.optimizedModelFilePath,n):0;if(i=t._OrtCreateSessionOptions(r,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,o,u,d,f),i===0&&Me("Can't create session options."),s.executionProviders&&await Ku(i,s.executionProviders,n),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);br(i,"enableGraphCapture",s.enableGraphCapture.toString(),n)}if(s.freeDimensionOverrides)for(let[p,m]of Object.entries(s.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let _=Rt(p,n);t._OrtAddFreeDimensionOverride(i,_,m)!==0&&Me(`Can't set a free dimension override: ${p} - ${m}.`)}return s.extra!==void 0&&Un(s.extra,"",new WeakSet,(p,m)=>{br(i,p,m,n)}),[i,n]}catch(r){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&Me("Can't release session options."),n.forEach(a=>t._free(a)),r}}}),Ni,ri,Di,rs,Ln,Bo,No,Ka,ye=K(()=>{Ni=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ri=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Di=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((s,r)=>s*r,1);return i>0?Math.ceil(n*i):void 0},rs=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ln=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Bo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",No=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ka=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Do,Kh=K(()=>{zo(),Do=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),n=i?parseInt(i,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),r;try{r=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);r=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await s.read();if(o)break;let d=u.byteLength;new Uint8Array(r,a,d).set(u),a+=d}return new Uint8Array(r,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Zu,Yu,Xu,Qu,Po,Ju,Ie,li=K(()=>{ye(),Zu=["V","I","W","E","F"],Yu=(e,t)=>{console.log(`[${Zu[e]},${new Date().toISOString()}]${t}`)},Po=(e,t)=>{Xu=e,Qu=t},Ju=(e,t)=>{let i=Ln(e),n=Ln(Xu);i>=n&&Yu(i,typeof t=="function"?t():t)},Ie=(...e)=>{Qu&&Ju(...e)}}),ed,lr,N,qn,Zh,Yh,Xh,we=K(()=>{ed=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},lr=class{static calcShape(e,t,i=!1){let n=e.length,s=t.length;if(n===0)return t;if(s===0)return e;let r=Math.max(e.length,t.length),a=new Array(r);if(i){if(n<2||s<2)return;let o=ed.calcMatMulShape([e[n-2],e[n-1]],[t[s-2],t[s-1]]);if(o===void 0)return;[a[r-2],a[r-1]]=o}for(let o=i?3:1;o<=r;o++){let u=n-o<0?1:e[n-o],d=s-o<0?1:t[s-o];if(u!==d&&u>1&&d>1)return;let f=Math.max(u,d);if(u&&d)a[r-o]=Math.max(u,d);else{if(f>1)return;a[r-o]=0}}return a}static isValidBroadcast(e,t){let i=e.length,n=t.length;if(i>n)return!1;for(let s=1;s<=i;s++)if(e[i-s]!==1&&e[i-s]!==t[n-s])return!1;return!0}},N=class An{static size(t){return An.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let n=t.length;if(n===0)return[];let s=new Array(n),r=n-1;for(;r>=0;){if(t[r]%i===0){s[r]=t[r]/i;break}if(i%t[r]!==0)throw new Error("cannot convert shape");s[r]=1,i/=t[r],r--}for(r--;r>=0;r--)s[r]=t[r];return s}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return An.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return An.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,n){let s=1;for(let r=i;r<n;r++){if(t[r]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[r])}return s}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let n=new Array(i);n[i-1]=1,n[i-2]=t[i-1];for(let s=i-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(n=>this.normalizeAxis(n,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(n=>t[n]):t.slice().reverse()}static padShape(t,i){let n=t.length;return t.map((s,r)=>s+i[r]+i[r+n])}static areEqual(t,i){return t.length!==i.length?!1:t.every((n,s)=>n===i[s])}},qn=class zr{static adjustPoolAttributes(t,i,n,s,r,a){if(!t&&n.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<i.length-2;o++)o>=n.length?n.push(i[o+2]):n[o]=i[o+2];for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length;o++)if(o<r.length){if(r[o]<0)throw new Error("dilations should be greater than or equal to 1")}else r.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,n,s,r,a,o){if(o){if(r.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)zr.adjustPadAndReturnShape(t[u+(a?1:2)],i[u],n[u],s[u],r,u,u+t.length-2,o)}}static computePoolOutputShape(t,i,n,s,r,a,o){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let u=[i[0],i[1]];return zr.computeShapeHelper(t,i,u,n,s,r,a,o),u}static computeConvOutputShape(t,i,n,s,r,a,o){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],i[0]];return zr.computeShapeHelper(!1,t,u,n,s,r,a,o),u}static computeShapeHelper(t,i,n,s,r,a,o,u){if(t)for(let d=0;d<i.length-2;d++)n.push(1);else for(let d=0;d<i.length-2;d++)n.push(zr.adjustPadAndReturnShape(i[d+2],s[d],r[d],a[d],o,d,d+i.length-2,u))}static adjustPadAndReturnShape(t,i,n,s,r,a,o,u){let d=n*(s-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return r[a]=0,r[o]=0,Math.floor((t-d)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+i-1)/i-1)*i+s-t;return r[a]=Math.floor(u==="SAME_LOWER"?(f+1)/2:f/2),r[o]=f-r[a],Math.floor((t+f-s)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+r[a]+r[o]-d)/i+1)}},Zh=class{static getShapeOfGemmResult(e,t,i,n,s){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let r,a,o;t?(r=e[1],a=e[0]):(r=e[0],a=e[1]);let u=-1;if(n?(o=i[0],u=1):(o=i[1],u=0),i[u]!==a)throw new Error("dimension mismatch");if(r<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(s&&!lr.isValidBroadcast(s,[r,o]))throw new Error("gemm: invalid bias shape for broadcast");return[r,o,a]}},Yh=-34028234663852886e22,Xh=34028234663852886e22}),Uo,Qh=K(()=>{ye(),Uo=(e,t)=>new(rs(t))(e)}),Ys,Za,Xs,td,Qs,id,Js,ea,ta,rd,Jh,$v=K(()=>{ye(),li(),Ys=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Za=(e,t)=>{if(t==="int32")return e;let i=Ys.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let n=i/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let s=e.byteLength/n,r=new(rs(t))(e.buffer,e.byteOffset,s);switch(t){case"int64":case"uint64":{let a=new Int32Array(s);for(let o=0;o<s;o++){let u=r[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&r.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(r,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Xs=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let s=BigInt64Array.from(n,BigInt);return new Uint8Array(s.buffer)}case"uint64":{if(n.some(r=>r<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let s=BigUint64Array.from(n,BigInt);return new Uint8Array(s.buffer)}case"int8":{if(n.some(r=>r<-128||r>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let s=Int8Array.from(n,Number);return new Uint8Array(s.buffer)}case"uint8":{if(n.some(s=>s<0||s>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(r=>r<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let s=Uint32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},td=1,Qs=()=>td++,id=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Js=(e,t)=>{let i=Ys.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,s)=>n*s)*i/8):0},ea=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:i,tensor:n,dataType:s,shape:r,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=i,this.mlTensor=n,this.dataType=s,this.tensorShape=r,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Js(this.dataType,this.tensorShape)}destroy(){Ie("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),i=Xs(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return i.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((n,s)=>n===i[s])}setIsDataConverted(e){this.isDataConverted=e}},ta=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,n){let s=this.tensorManager.getMLContext(e),r;if(!s.opSupportLimits().input.dataTypes.includes(t)){if(r=id.get(t),!r||!s.opSupportLimits().input.dataTypes.includes(r))throw new Error(`WebNN backend does not support data type: ${t}`);Ie("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${r}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,i))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Js(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,a,!0,!0,r),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Za(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ie("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,i;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Xs(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},rd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Qs();return this.tensorTrackersById.set(e,new ta(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,n,s){Ie("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${n}, copyOld: ${s}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.ensureTensor(e,i,n,s)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){Ie("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,n){let s=this.getMLContext(e),r=Qs(),a=new ea({sessionId:e,context:s,tensor:t,dataType:i,shape:n});return this.tensorTrackersById.set(r,new ta(this,a)),this.externalTensors.add(a),r}async getCachedTensor(e,t,i,n,s,r,a){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,i)){Ie("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${i}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}Ie("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${i}}`);let u=await o.createTensor({dataType:a??t,shape:i,dimensions:i,usage:n,writable:s,readable:r});return new ea({sessionId:e,context:o,tensor:u,dataType:t,shape:i,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Jh=(...e)=>new rd(...e)}),wr,nd,em,xv=K(()=>{ye(),Gi(),Qh(),$v(),li(),wr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),nd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.length===n.length&&i.every((s,r)=>s===n[r]&&e[s]===t[s])},em=class{constructor(e){this.tensorManager=Jh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Po(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ie("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ie("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)Ie("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let i=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(i=>nd(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(s=>s.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ie("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,n,s){let r=wr.get(i);if(!r)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,r,n,s)}async createTemporaryTensor(e,t,i){Ie("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let n=wr.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,n,i,!1);let r=this.temporarySessionTensorIds.get(e);return r?r.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ie("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return Uo(i,t)}}registerMLTensor(e,t,i,n){let s=wr.get(i);if(!s)throw new Error(`Unsupported ONNX data type: ${i}`);let r=this.tensorManager.registerTensor(e,t,s,n);return Ie("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${n}} -> {tensorId: ${r}}`),r}registerMLConstant(e,t,i,n,s,r,a=!1){if(!r)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=r.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+i>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+i).buffer,f;switch(s.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(a){let p=Za(new Uint8Array(d),"int64");f=new Int32Array(p.buffer),s.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return Ie("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(s,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}isGraphOutput(e,t){let i=this.sessionGraphOutputs.get(e);return i?i.includes(t):!1}isGraphInputOutputTypeSupported(e,t,i=!0){let n=this.mlContextBySessionId.get(e),s=wr.get(Ni(t));return typeof s>"u"?!1:i?!!(n!=null&&n.opSupportLimits().input.dataTypes.includes(s)):!!(n!=null&&n.opSupportLimits().output.dataTypes.includes(s))}flush(){}}}),Lo=K(()=>{}),ia,_n,yn,sd,ad,ra,Ya,od,tm,Cv=K(()=>{li(),Lo(),ia=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),_n=[],yn=e=>Math.ceil(Number(e)/16)*16,sd=e=>{for(let t=0;t<_n.length;t++){let i=_n[t];if(e<=i)return i}return Math.ceil(e/16)*16},ad=1,ra=()=>ad++,Ya=async(e,t,i,n)=>{let s=yn(i),r=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,r,0,s),e.flush(),await r.mapAsync(GPUMapMode.READ);let o=r.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,i)),u}else return new Uint8Array(o.slice(0,i))}finally{r.destroy()}},od=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ia)_n.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,n=t.byteOffset,s=t.byteLength,r=yn(s),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${s}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:r,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(i,n,s)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,r),this.backend.device.queue.submit([d.finish()]),o.destroy(),Ie("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=yn(i.originalSize),r=this.backend.getCommandEncoder();this.backend.endComputePass(),r.copyBufferToBuffer(i.gpuData.buffer,0,n.gpuData.buffer,0,s)}registerExternalBuffer(e,t,i){let n;if(i){if(n=i[0],e===i[1])return Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=ra();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ie("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=sd(e),n,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,r=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||r){let o=(s?this.freeBuffers:this.freeUniformBuffers).get(i);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:i,usage:t}):n=this.backend.device.createBuffer({size:i,usage:t})}else n=this.backend.device.createBuffer({size:i,usage:t});let a={id:ra(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ie("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ie("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Ya(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ia.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ie("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},tm=(...e)=>new od(...e)}),ld,Re,Fe=K(()=>{ld=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new ld(e)}),ur,bn,Qe,st,pe,We,Xa,er,vi,ce,vr,L,de,im,qo,ud,rm,ve=K(()=>{ye(),we(),ur=64,bn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let i=bn(e,t);return typeof i=="string"?i:i[0]},st=(e,t=1)=>{let i=bn(e,t);return typeof i=="string"?i:i[1]},pe=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:N.computeStrides(i)})}),t},We=e=>e%4===0?4:e%2===0?2:1,Xa=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,er=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,vi=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ce=(e,t,i,n)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,vr=(e,t,i,n,s)=>{let r=typeof i=="number",a=r?i:i.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=bn(t,s),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],m={indices:u,value:f,storage:p,tensor:t},_=P=>typeof P=="string"?P:`${P}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},v=r?"uniforms.":"",C=`${v}${e}_shape`,$=`${v}${e}_strides`,b="";for(let P=0;P<a-1;P++)b+=`
    let dim${P} = current / ${ce($,P,a)};
    let rest${P} = current % ${ce($,P,a)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;b+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${b}
    return indices;
  }`,x=P=>(y.offsetToIndices=!0,a<2?P:`o2i_${e}(${P})`),E=[];if(a>=2)for(let P=a-1;P>=0;P--)E.push(`${ce($,P,a)} * (indices[${P}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${E.join("+")};
  }`,O=P=>(y.indicesToOffset=!0,a<2?P:`i2o_${e}(${P})`),M=(...P)=>a===0?"0u":`${m.indices}(${P.map(_).join(",")})`,R=(P,Z)=>a<2?`${P}`:`${ce(P,Z,a)}`,F=(P,Z,re)=>a<2?`${P}=${re};`:`${ce(P,Z,a)}=${re};`,le={},ne=(P,Z)=>{y.broadcastedIndicesToOffset=!0;let re=`${Z.name}broadcastedIndicesTo${e}Offset`;if(re in le)return`${re}(${P})`;let me=[];for(let He=a-1;He>=0;He--){let it=Z.indicesGet("outputIndices",He+Z.rank-a);me.push(`${R($,He)} * (${it} % ${R(C,He)})`)}return le[re]=`fn ${re}(outputIndices: ${Z.type.indices}) -> u32 {
             return ${me.length>0?me.join("+"):"0u"};
           }`,`${re}(${P})`},ie=(P,Z)=>(()=>{if(m.storage===m.value)return`${e}[${P}]=${Z};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${Z}), select(0u, 0xFFFFFFFFu, ${Z} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${Z}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Z}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),$e=P=>(()=>{if(m.storage===m.value)return`${e}[${P}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${P}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${P}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),be=a<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${f} {
    return ${$e(`i2o_${e}(indices)`)};
  }`,ee=a<2?"":(()=>{let P=o.map(re=>`d${re}: u32`).join(", "),Z=o.map(re=>`d${re}`).join(", ");return`
  fn get_${e}(${P}) -> ${f} {
    return get_${e}ByIndices(${M(Z)});
  }`})(),oe=(...P)=>{if(P.length!==a)throw new Error(`indices length must be ${a}`);let Z=P.map(_).join(",");return a===0?$e("0u"):a===1?$e(Z[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${Z})`)},X=P=>a<2?$e(P):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${P})`),fe=a<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${f}) {
    ${ie(`i2o_${e}(indices)`,"value")}
  }`,Ee=a<2?"":(()=>{let P=o.map(re=>`d${re}: u32`).join(", "),Z=o.map(re=>`d${re}`).join(", ");return`
  fn set_${e}(${P}, value: ${f}) {
    set_${e}ByIndices(${M(Z)}, value);
  }`})();return{impl:()=>{let P=[],Z=!1;return y.offsetToIndices&&(P.push(T),Z=!0),y.indicesToOffset&&(P.push(z),Z=!0),y.broadcastedIndicesToOffset&&(Object.values(le).forEach(re=>P.push(re)),Z=!0),y.set&&(P.push(Ee),Z=!0),y.setByIndices&&(P.push(fe),Z=!0),y.get&&(P.push(ee),Z=!0),y.getByIndices&&(P.push(be),Z=!0),!r&&Z&&P.unshift(`const ${C} = ${m.indices}(${i.join(",")});`,`const ${$} = ${m.indices}(${N.computeStrides(i).join(",")});`),P.join(`
`)},type:m,offsetToIndices:x,indicesToOffset:O,broadcastedIndicesToOffset:ne,indices:M,indicesGet:R,indicesSet:F,set:(...P)=>{if(P.length!==a+1)throw new Error(`indices length must be ${a}`);let Z=P[a];if(typeof Z!="string")throw new Error("value must be string");let re=P.slice(0,a).map(_).join(",");return a===0?ie("0u",Z):a===1?ie(re[0],Z):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${re}, ${Z})`)},setByOffset:ie,setByIndices:(P,Z)=>a<2?ie(P,Z):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${Z});`),get:oe,getByOffset:$e,getByIndices:X,usage:n,name:e,strides:$,shape:C,rank:a}},L=(e,t,i,n=1)=>vr(e,t,i,"input",n),de=(e,t,i,n=1)=>vr(e,t,i,"output",n),im=(e,t,i)=>vr(e,t,i,"atomicOutput",1),qo=(e,t,i,n=1)=>vr(e,t,i,"internal",n),ud=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ur){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,r=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${n})
  fn main(${r}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:n}of this.uniforms)if(n&&n>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(n/4)}>`);else{let s=n==null||n===1?i:`vec${n}<${i}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},rm=(e,t)=>new ud(e,t)}),dd,na,cd,fd,pd,hd,xt,nm,sm,xi=K(()=>{ye(),we(),Fe(),ve(),dd=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},na=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),cd=(e,t)=>N.sortBasedOnPerm(e,na(e.length,t)),fd=(e,t,i,n)=>{let s=`fn perm(i: ${n.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let r=0;r<t;++r)s+=`a[${e[r]}]=i[${r}];`;return s+="return a;}"},pd=(e,t)=>{let i=[],n=[];for(let s=0;s<e.length;++s)e[s]!==1&&i.push(e[s]),e[t[s]]!==1&&n.push(t[s]);return{newShape:i,newPerm:n}},hd=(e,t)=>{let i=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<i)return!1;i=e[n]}return!0},xt=(e,t)=>{let i=e.dataType,n=e.dims.length,s=na(n,t),r=cd(e.dims,s),a=e.dims,o=r,u=n<2||hd(s,e.dims),d;if(u)return d=y=>{let v=L("input",i,a,4),C=de("output",i,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(v,C)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=N.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=pd(e.dims,s),m=N.areEqual(p,[2,3,1]),_=N.areEqual(p,[3,1,2]);if(f.length===2||m||_){a=m?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,o=[a[1],a[0]];let y=16;return d=v=>{let C=L("a",i,a.length),$=de("output",i,o.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(C,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${v.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${C.getByIndices(`${C.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=N.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:v},...pe(a,o)]}},getShaderSource:d}}return d=y=>{let v=L("a",i,a.length),C=de("output",i,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(v,C)}

  ${fd(s,n,v,C)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=N.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...pe(a,o)]}},getShaderSource:d}},nm=(e,t)=>{dd(e.inputs,t.perm),e.compute(xt(e.inputs[0],t.perm))},sm=e=>Re({perm:e.perm})}),md,gd,_d,yd,bd,wd,vd,$d,xd,Cd,Et,am,om,lm,um,dm,cm,fm,pm,hm,mm,Tv=K(()=>{ye(),we(),ve(),Wo(),xi(),md={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},gd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},_d={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},yd={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},bd=(e,t)=>{let i=[];for(let n=t-e;n<t;++n)i.push(n);return i},wd=(e,t)=>{let i=[],n=e.length;for(let r=0;r<n;r++)t.indexOf(r)===-1&&i.push(e[r]);let s=t.map(r=>e[r]);return[i,s]},vd=(e,t)=>{let i=e.length+t.length,n=[],s=0;for(let r=0;r<i;r++)t.indexOf(r)===-1?n.push(e[s++]):n.push(1);return n},$d=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},xd=(e,t)=>{let i=[];if(!$d(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&i.push(n);e.forEach(n=>i.push(n))}return i},Cd=(e,t,i,n,s,r,a)=>{let o=i[0].dims,u=N.size(r),d=N.size(a),f=L("_A",i[0].dataType,o),p=de("output",s,r),m=64;u===1&&(m=256);let _=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,y=v=>`
        ${v.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${v.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${_d[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${md[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${gd[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${yd[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:r,dataType:s}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Et=(e,t,i,n)=>{let s=e.inputs.length===1?i:Qa(e.inputs,i),r=s.axes;r.length===0&&!s.noopWithEmptyAxes&&(r=e.inputs[0].dims.map((_,y)=>y));let a=N.normalizeAxes(r,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=xd(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(xt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=bd(o.length,u.dims.length));let[f,p]=wd(u.dims,o),m=f;s.keepDims&&(m=vd(f,a)),e.compute(Cd(t,s.cacheKey,[u],n,e.inputs[0].dataType,m,p),{inputs:[u]})},am=(e,t)=>{Et(e,"ReduceMeanShared",t,"mean")},om=(e,t)=>{Et(e,"ReduceL1Shared",t,"l1")},lm=(e,t)=>{Et(e,"ReduceL2Shared",t,"l2")},um=(e,t)=>{Et(e,"ReduceLogSumExpShared",t,"logSumExp")},dm=(e,t)=>{Et(e,"ReduceMaxShared",t,"max")},cm=(e,t)=>{Et(e,"ReduceMinShared",t,"min")},fm=(e,t)=>{Et(e,"ReduceProdShared",t,"prod")},pm=(e,t)=>{Et(e,"ReduceSumShared",t,"sum")},hm=(e,t)=>{Et(e,"ReduceSumSquareShared",t,"sumSquare")},mm=(e,t)=>{Et(e,"ReduceLogSumShared",t,"logSum")}}),kt,Td,Wn,Qa,At,Sd,Id,Ed,kd,Ad,zd,Od,Rd,Md,Bd,zt,gm,_m,ym,bm,wm,vm,$m,xm,Cm,Tm,Wo=K(()=>{ye(),we(),Fe(),ve(),Tv(),kt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Td=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Wn=(e,t,i,n,s,r,a=!1,o=!1)=>{let u=[],d=i[0].dims,f=d.length,p=N.normalizeAxes(s,f),m=!o&&p.length===0;d.forEach((v,C)=>{m||p.indexOf(C)>=0?a&&u.push(1):u.push(v)});let _=u.length,y=N.size(u);return{name:e,shaderCache:t,getShaderSource:v=>{let C=[],$=L("_A",i[0].dataType,f),b=de("output",r,_),T=n($,b,p),x=T[2];for(let E=0,z=0;E<f;E++)m||p.indexOf(E)>=0?(a&&z++,x=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${$.indicesSet("input_indices",E,`j${E}`)}
                  ${x}
                }`):(C.push(`${$.indicesSet("input_indices",E,b.indicesGet("output_indices",z))};`),z++);return`

        ${v.registerUniform("output_size","u32").declareVariables($,b)}

        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${C.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${x}
          ${T[3]}
          ${T.length===4?b.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:r}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...pe(d,u)]})}},Qa=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>i.push(Number(n))),Re({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},At=(e,t,i,n)=>{let s=e.inputs,r=s.length===1?i:Qa(s,i);e.compute(Wn(t,{hint:r.cacheKey,inputDependencies:["rank"]},[s[0]],r.noopWithEmptyAxes&&r.axes.length===0?Td:n,r.axes,s[0].dataType,r.keepDims,r.noopWithEmptyAxes),{inputs:[0]})},Sd=(e,t)=>{kt(e.inputs),At(e,"ReduceLogSum",t,(i,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Id=(e,t)=>{kt(e.inputs),At(e,"ReduceL1",t,(i,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Ed=(e,t)=>{kt(e.inputs),At(e,"ReduceL2",t,(i,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},kd=(e,t)=>{kt(e.inputs),At(e,"ReduceLogSumExp",t,(i,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},Ad=(e,t)=>{kt(e.inputs),At(e,"ReduceMax",t,(i,n,s)=>{let r=[];for(let a=0;a<i.rank;a++)(s.indexOf(a)>=0||s.length===0)&&r.push(i.indicesSet("input_indices",a,0));return[`${r.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},zd=(e,t)=>{kt(e.inputs),At(e,"ReduceMean",t,(i,n,s)=>{let r=1;for(let a=0;a<i.rank;a++)(s.indexOf(a)>=0||s.length===0)&&(r*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${r});`]})},Od=(e,t)=>{kt(e.inputs),At(e,"ReduceMin",t,(i,n,s)=>{let r=[];for(let a=0;a<i.rank;a++)(s.indexOf(a)>=0||s.length===0)&&r.push(`input_indices[${a}] = 0;`);return[`${r.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},Rd=(e,t)=>{kt(e.inputs),At(e,"ReduceProd",t,(i,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},Md=(e,t)=>{kt(e.inputs),At(e,"ReduceSum",t,(i,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},Bd=(e,t)=>{kt(e.inputs),At(e,"ReduceSumSquare",t,(i,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},zt=(e,t,i)=>{if(t.length===0)return i;let n=1,s=1;for(let r=0;r<t.length;r++)t.indexOf(r)===-1?n*=e[r]:s*=e[r];return s<32&&n>1024},gm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zd(e,t):am(e,t)},_m=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Id(e,t):om(e,t)},ym=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ed(e,t):lm(e,t)},bm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kd(e,t):um(e,t)},wm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ad(e,t):dm(e,t)},vm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Od(e,t):cm(e,t)},$m=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rd(e,t):fm(e,t)},xm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Md(e,t):pm(e,t)},Cm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bd(e,t):hm(e,t)},Tm=(e,t)=>{zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sd(e,t):mm(e,t)}}),sa,Sm,Im,Ja,Sv=K(()=>{ye(),Fe(),Wo(),sa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Sm=(e,t)=>{sa(e.inputs);let i=(n,s,r)=>{let a=[];for(let o=0;o<n.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Wn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Im=(e,t)=>{sa(e.inputs);let i=(n,s,r)=>{let a=[];for(let o=0;o<n.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Wn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Ja=e=>Re(e)}),Nd,wn,Dd,Pd,Ud,Kr,Ld,Em,jo=K(()=>{ye(),we(),Lo(),ve(),Nd=(e,t)=>{let i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=i.dims[0],d=i.dims[1],f=i.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=s.dims[0]/3,m=p,_=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=d;if(p!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==p+m+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let v=0;if(a){if(m!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(v=a.dims[3])}let C=y+v,$=-1,b=0;if(r)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:v,kvSequenceLength:y,totalSequenceLength:C,maxSequenceLength:$,inputHiddenSize:f,hiddenSize:p,vHiddenSize:_,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},wn=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Dd=(e,t,i,n,s,r,a,o)=>{let u=We(a?1:r),d=64,f=r/u;f<d&&(d=32);let p=Math.ceil(r/u/d),m=[{type:12,data:t},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:f},{type:12,data:p}],_=Qe(e.dataType,u),y=st(1,u),v=["type"];a&&v.push("type"),o&&v.push("type");let C=$=>{let b=de("x",e.dataType,e.dims,u),T=[b],x=a?L("seq_lens",a.dataType,a.dims):void 0;x&&T.push(x);let E=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let z=st(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(O).declareVariables(...T)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${wn(x,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${u}`,inputDependencies:v},getShaderSource:C,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:s,z:t*i},programUniforms:m})}},Pd=(e,t,i,n,s,r,a,o,u)=>{let d=a+r.kvSequenceLength,f=[r.batchSize,r.numHeads,r.sequenceLength,d],p=e>1&&n,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,_=p?[r.batchSize,m,d,r.headSize]:void 0,y=r.nReps?r.nReps:1,v=r.scale===0?1/Math.sqrt(r.headSize):r.scale,C=We(r.headSize),$=r.headSize/C,b=12,T={x:Math.ceil(d/b),y:Math.ceil(r.sequenceLength/b),z:r.batchSize*r.numHeads},x=[{type:12,data:r.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:1,data:v},{type:12,data:a},{type:12,data:r.kvSequenceLength},{type:12,data:y}],E=p&&n&&N.size(n.dims)>0,z=["type","type"];E&&z.push("type"),s&&z.push("type"),o&&z.push("type"),u&&z.push("type");let O=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&O.push({dims:_,dataType:t.dataType,gpuDataType:0});let M=R=>{let F=L("q",t.dataType,t.dims,C),le=L("key",i.dataType,i.dims,C),ne=[F,le];if(E){let fe=L("past_key",n.dataType,n.dims,C);ne.push(fe)}s&&ne.push(L("attention_bias",s.dataType,s.dims));let ie=o?L("seq_lens",o.dataType,o.dims):void 0;ie&&ne.push(ie);let $e=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;$e&&ne.push($e);let be=de("output",t.dataType,f),ee=[be];p&&ee.push(de("present_key",t.dataType,_,C));let oe=st(1,C),X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${F.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${F.type.storage}, ${b*b}>;
  ${R.registerUniforms(X).declareVariables(...ne,...ee)}
  ${R.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${wn(ie,$e,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${oe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${oe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(C){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${C}`)}})()};
        output[outputIdx] = ${be.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${C};${s!==void 0};${n!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:O,dispatchGroup:T,programUniforms:x}),getShaderSource:M}},Ud=(e,t,i,n,s,r,a=void 0,o=void 0)=>{let u=r+s.kvSequenceLength,d=s.nReps?s.nReps:1,f=s.vHiddenSize*d,p=e>1&&n,m=s.kvNumHeads?s.kvNumHeads:s.numHeads,_=p?[s.batchSize,m,u,s.headSize]:void 0,y=[s.batchSize,s.sequenceLength,f],v=12,C={x:Math.ceil(s.vHeadSize/v),y:Math.ceil(s.sequenceLength/v),z:s.batchSize*s.numHeads},$=[{type:12,data:s.sequenceLength},{type:12,data:u},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:f},{type:12,data:r},{type:12,data:s.kvSequenceLength},{type:12,data:d}],b=p&&n&&N.size(n.dims)>0,T=["type","type"];b&&T.push("type"),a&&T.push("type"),o&&T.push("type");let x=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:_,dataType:t.dataType,gpuDataType:0});let E=z=>{let O=L("probs",t.dataType,t.dims),M=L("v",i.dataType,i.dims),R=[O,M];b&&R.push(L("past_value",n.dataType,n.dims));let F=a?L("seq_lens",a.dataType,a.dims):void 0;a&&R.push(F);let le=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(le);let ne=[de("output",t.dataType,y)];p&&ne.push(de("present_value",t.dataType,_));let ie=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;
  var<workgroup> tileQ: array<${O.type.value}, ${v*v}>;
  var<workgroup> tileV: array<${O.type.value}, ${v*v}>;
  ${z.registerUniforms(ie).declareVariables(...R,...ne)}
  ${z.mainStart([v,v,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${wn(F,le,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:x,dispatchGroup:C,programUniforms:$}),getShaderSource:E}},Kr=(e,t,i,n,s,r,a,o,u,d,f=void 0,p=void 0)=>{let m=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),_=m>1?d.pastSequenceLength:0,y=_+d.kvSequenceLength,v=u&&N.size(u.dims)>0?u:void 0,C=[t,i];m>1&&a&&N.size(a.dims)>0&&C.push(a),v&&C.push(v),f&&C.push(f),p&&C.push(p);let $=e.compute(Pd(m,t,i,a,v,d,_,f,p),{inputs:C,outputs:m>1?[-1,1]:[-1]})[0];e.compute(Dd($,d.batchSize,d.numHeads,_,d.sequenceLength,y,f,p),{inputs:f&&p?[$,f,p]:[$],outputs:[]});let b=[$,n];m>1&&o&&N.size(o.dims)>0&&b.push(o),f&&b.push(f),p&&b.push(p),e.compute(Ud(m,$,n,o,d,_,f,p),{inputs:b,outputs:m>1?[0,2]:[0]})},Ld=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,s=t.inputHiddenSize,r=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:s},{type:12,data:r},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let m=de("output_q",u[0].dataType,i),_=de("output_k",u[0].dataType,i),y=de("output_v",u[0].dataType,i),v=L("input",u[0].dataType,u[0].dims),C=L("weight",u[1].dataType,u[1].dims),$=L("bias",u[2].dataType,u[2].dims),b=v.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${p.registerUniforms(T).declareVariables(v,C,$,m,_,y)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:u,outputs:[-1,-1,-1]})},Em=(e,t)=>{let i=Nd(e.inputs,t),[n,s,r]=Ld(e,i);return Kr(e,n,s,r,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),qd,Wd,jd,km,Iv=K(()=>{It(),ye(),we(),Fe(),ve(),qd=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(n,s,r)=>{let a=s.length;if(a!==n.length)throw new Error(`${r}: num dimensions != ${a}`);s.forEach((o,u)=>{if(o!==n[u])throw new Error(`${r}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,n,"Invalid input scale"),i(e[2].dims,n,"Invalid input B"),i(e[3].dims,n,"Invalid input mean"),i(e[4].dims,n,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},Wd=(e,t)=>{let{epsilon:i,spatial:n,format:s}=t,r=e[0].dims,a=n?We(r[r.length-1]):1,o=s==="NHWC"&&r.length>1?a:1,u=N.size(r)/a,d=n,f=d?r.length:r,p=L("x",e[0].dataType,e[0].dims,a),m=L("scale",e[1].dataType,e[1].dims,o),_=L("bias",e[2].dataType,e[2].dims,o),y=L("inputMean",e[3].dataType,e[3].dims,o),v=L("inputVar",e[4].dataType,e[4].dims,o),C=de("y",e[0].dataType,f,a),$=()=>{let T="";if(n)T=`let cOffset = ${r.length===1?"0u":s==="NHWC"?`outputIndices[${r.length-1}] / ${a}`:"outputIndices[1]"};`;else if(s==="NCHW")T=`
            ${C.indicesSet("outputIndices","0","0")}
            let cOffset = ${C.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${r.length-1}];`;for(let x=1;x<m.rank;x++)T+=`cIndices[${x}] = outputIndices[${x}];`;T+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return T},b=T=>`
  const epsilon = ${i};
  ${T.registerUniform("outputSize","u32").declareVariables(p,m,_,y,v,C)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${C.offsetToIndices(`global_idx * ${a}`)};
    ${$()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${v.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${C.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...pe(r)]:[{type:12,data:u}]})}},jd=e=>Re(e),km=(e,t)=>{let{inputs:i,outputCount:n}=e,s=jd({...t,outputCount:n});if(Le.webgpu.validateInputContent&&qd(i,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Wd(i,s))}}),Vd,Fd,Am,Ev=K(()=>{we(),ve(),Vd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Fd=e=>{let t=e[0].dims,i=e[0].dims[2],n=N.size(t)/4,s=e[0].dataType,r=L("input",s,t,4),a=L("bias",s,[i],4),o=L("residual",s,t,4),u=de("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${i}u / 4;
  ${d.declareVariables(r,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${r.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Am=e=>{Vd(e.inputs),e.compute(Fd(e.inputs))}}),Hd,Ae,zm,Om,Rm,Mm,Bm,Nm,Dm,Pm,Um,Gd,Lm,qm,Wm,jm,Or,Vm,zn,Fm,Hm,Gm,Km,Zm,Ym,Xm,Qm,Jm,eg,tg,ig,rg,ng,sg,ag,aa,og,eo,to,lg,ug,dg,Kd,Zd,cg,Vo=K(()=>{ye(),we(),Fe(),ve(),Hd=(e,t,i,n,s,r,a)=>{let o=Math.ceil(t/4),u="";typeof s=="string"?u=`${s}(a)`:u=s("a");let d=L("inputData",i,[o],4),f=de("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${r??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",u)}
  }`},Ae=(e,t,i,n,s,r=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(N.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:d=>Hd(d,N.size(e.dims),e.dataType,r,i,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:r}],dispatchGroup:{x:Math.ceil(N.size(d[0].dims)/64/4)},programUniforms:u})}},zm=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},Om=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},Rm=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},Mm=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},Bm=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},Nm=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},Dm=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},Pm=e=>Re(e),Um=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},Gd=e=>{let t,i,n=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,i=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,i=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:i})},Lm=(e,t)=>{let i=t||Gd(e.inputs),n=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},qm=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},Wm=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},jm=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},Or=e=>Re(e),Vm=(e,t)=>{let i=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},zn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Fm=e=>{let t=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,zn(t)))},Hm=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},Gm=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},Km=e=>{let t=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,zn(t)))},Zm=(e,t)=>{let i=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},Ym=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Xm=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Qm=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Jm=e=>{let t=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},eg=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},tg=e=>Re(e),ig=(e,t)=>{let i=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",n=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${n} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},rg=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},ng=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},sg=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},ag=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},aa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,og=e=>{e.compute(Ae(e.inputs[0],"Tanh",aa))},eo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${aa("v")};
}
`,to=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,lg=e=>{let t=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",to,eo(t),void 0,e.inputs[0].dataType))},ug=(e,t)=>{let i=st(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${i}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},dg=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Kd=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Zd=e=>`quick_gelu_impl(${e})`,cg=(e,t)=>{let i=st(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Zd,Kd(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Yd,Xd,fg,kv=K(()=>{we(),ve(),Vo(),Yd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Xd=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=L("input",e[0].dataType,e[0].dims,4),n=L("bias",e[0].dataType,[e[0].dims[2]],4),s=de("output",e[0].dataType,t,4),r=N.size(t)/4,a=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(i,n,s)}

  ${zn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fg=e=>{Yd(e.inputs),e.compute(Xd(e.inputs))}}),Qd,Jd,Ot,pg,hg,mg,gg,_g,yg,bg,wg,vg,$g,Av=K(()=>{ye(),we(),ve(),Qd=(e,t,i,n,s,r,a,o,u,d,f,p)=>{let m,_;typeof o=="string"?m=_=(b,T)=>`${o}((${b}),(${T}))`:typeof o=="function"?m=_=o:(m=o.scalar,_=o.vector);let y=de("outputData",f,n.length,4),v=L("aData",u,t.length,4),C=L("bData",d,i.length,4),$;if(s)if(r){let b=N.size(t)===1,T=N.size(i)===1,x=t.length>0&&t[t.length-1]%4===0,E=i.length>0&&i[i.length-1]%4===0;b||T?$=y.setByOffset("global_idx",_(b?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"),T?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${v.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${C.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(a||x?v.getByOffset("offsetA / 4u"):`${v.type.value}(${v.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?C.getByOffset("offsetB / 4u"):`${C.type.value}(${C.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",_(v.getByOffset("global_idx"),C.getByOffset("global_idx")));else{if(!r)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(T,x,E="")=>{let z=`aData[indexA${x}][componentA${x}]`,O=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${y.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${v.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
            let offsetB${x} = ${C.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${T}[${x}] = ${E}(${m(z,O)});
          `};f===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(v,C,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Jd=(e,t,i,n,s,r,a=i.dataType)=>{let o=i.dims.map(v=>Number(v)??1),u=n.dims.map(v=>Number(v)??1),d=!N.areEqual(o,u),f=o,p=N.size(o),m=!1,_=!1,y=[d];if(d){let v=lr.calcShape(o,u,!1);if(!v)throw new Error("Can't perform binary op on the given tensors");f=v.slice(),p=N.size(f);let C=N.size(o)===1,$=N.size(u)===1,b=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;y.push(C),y.push($),y.push(b),y.push(T);let x=1;for(let E=1;E<f.length;E++){let z=o[o.length-E],O=u[u.length-E];if(z===O)x*=z;else break}x%4===0?(_=!0,m=!0):(C||$||b||T)&&(m=!0)}else m=!0;return y.push(m),{name:e,shaderCache:{hint:t+y.map(v=>v.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:v=>Qd(v,o,u,f,m,d,_,s,i.dataType,n.dataType,a,r),getRunData:()=>({outputs:[{dims:f,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(N.size(f)/4)},...pe(o,u,f)]})}},Ot=(e,t,i,n,s,r)=>{e.compute(Jd(t,s??"",e.inputs[0],e.inputs[1],i,n,r))},pg=e=>{Ot(e,"Add",(t,i)=>`${t}+${i}`)},hg=e=>{Ot(e,"Div",(t,i)=>`${t}/${i}`)},mg=e=>{Ot(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},gg=e=>{Ot(e,"Mul",(t,i)=>`${t}*${i}`)},_g=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ot(e,"Pow",{scalar:(i,n)=>`pow_custom(${i},${n})`,vector:(i,n)=>`pow_vector_custom(${i},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},yg=e=>{Ot(e,"Sub",(t,i)=>`${t}-${i}`)},bg=e=>{Ot(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},wg=e=>{Ot(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},vg=e=>{Ot(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},$g=e=>{Ot(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),ec,tc,ic,rc,xg,Cg,zv=K(()=>{ye(),we(),Fe(),ve(),ec=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,n=e[i],s=n.dataType,r=n.dims.length;e.forEach((a,o)=>{if(o!==i){if(a.dataType!==s)throw new Error("input tensors should be one type");if(a.dims.length!==r)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},tc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ic=(e,t)=>{let i=e.length,n=[];for(let s=0;s<i;++s){let r=t.setByOffset("global_idx",e[s].getByIndices("indices"));i===1?n.push(r):s===0?n.push(`if (inputIndex == ${s}u) { ${r} }`):s===i-1?n.push(`else { ${r} }`):n.push(`else if (inputIndex == ${s}) { ${r} }`)}return n.join(`
`)},rc=(e,t,i,n)=>{let s=N.size(i),r=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],f=[{type:12,data:s}];for(let v=0;v<e.length;++v)o+=e[v].dims[t],r[v]=o,d.push(e[v].dims.length),a[v]=L(`input${v}`,n,d[v]),u.push("rank"),f.push({type:12,data:r[v]});for(let v=0;v<e.length;++v)f.push(...pe(e[v].dims));f.push(...pe(i));let p=de("output",n,i.length),m=p.indicesGet("indices",t),_=Array.from(Array(r.length).keys()).map(v=>`uniforms.sizeInConcatAxis${v}`).join(","),y=v=>`

  ${(()=>{v.registerUniform("outputSize","u32");for(let C=0;C<e.length;C++)v.registerUniform(`sizeInConcatAxis${C}`,"u32");return v.declareVariables(...a,p)})()}

  ${tc(r.length,_)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${r.length}u>(${_});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ic(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:y}},xg=(e,t)=>{let i=e.inputs,n=i[0].dims,s=N.normalizeAxis(t.axis,n.length);ec(i,s);let r=n.slice();r[s]=i.reduce((o,u)=>o+(u.dims.length>s?u.dims[s]:0),0);let a=i.filter(o=>N.size(o.dims)>0);e.compute(rc(a,s,r,i[0].dataType),{inputs:a})},Cg=e=>Re({axis:e.axis})}),ji,Vi,Fi,Fo,Ki=K(()=>{ye(),we(),ji=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Vi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Fi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Fo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[i,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:i,beta:n}}else if(t==="Clip"){let[i,n]=(e==null?void 0:e.activation_params)||[Yh,Xh];return{activation:t,clipMax:n,clipMin:i}}else if(t==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:i}}return{activation:t}}}),tt,Tg,Ho=K(()=>{tt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Tg=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Sg,Ov=K(()=>{Sg=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),qr,Go,Ko=K(()=>{ye(),we(),ve(),Ki(),qr=(e,t,i,n,s)=>{let r=n-i;return`
      ${Array.from({length:i}).map((a,o)=>`
      if (${ce(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ce(s,o+r,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Go=(e,t,i,n,s=!1,r)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],f=a[a.length-1],p=We(d),m=We(f),_=We(u),y=N.size(i)/p/_,v=e.length>2,C=n?n.slice(0,-2):i.slice(0,-2),$=[N.size(C),u,d],b=[{type:12,data:y},{type:12,data:u},{type:12,data:d},{type:12,data:f}];Vi(t,b),b.push(...pe(C,a,o)),v&&b.push(...pe(e[2].dims)),b.push(...pe($));let T=x=>{let E=qo("batch_dims",e[0].dataType,C.length),z=L("a",e[0].dataType,a.length,m),O=L("b",e[1].dataType,o.length,p),M=de("output",e[0].dataType,$.length,p),R=Qe(M.type.tensor),F=ji(t,M.type.value,R),le=[z,O],ne="";if(v){let be=s?p:1;le.push(L("bias",e[2].dataType,e[2].dims.length,be)),ne=`${s?`value += bias[col / ${be}];`:`value += ${M.type.value}(bias[row + i]);`}`}let ie=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Fi(t,ie);let $e=()=>{let be=`var a_data: ${z.type.value};`;for(let ee=0;ee<m;ee++)be+=`
              let b_data${ee} = b[(b_offset + (k + ${ee}) * uniforms.N + col) / ${p}];`;for(let ee=0;ee<_;ee++){be+=`a_data = a[(a_offset + (row + ${ee}) * uniforms.K + k) / ${m}];`;for(let oe=0;oe<m;oe++)be+=`
            values[${ee}] = fma(${O.type.value}(a_data${m===1?"":`[${oe}]`}), b_data${oe}, values[${ee}]);
`}return be};return`
  ${x.registerUniforms(ie).registerInternalVariables(E).declareVariables(...le,M)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${qr("a_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${qr("b_indices",O,O.rank-2,E.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${M.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${$e()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ne}
      ${F}
      let cur_indices = ${M.type.indices}(batch, row + i, col);
      let offset = ${M.indicesToOffset("cur_indices")};
      ${M.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${m};${_};${s}`,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:T}}}),nc,sc,io,oa,ac,ro,oc,jn,Zo=K(()=>{ye(),we(),ve(),Ki(),Ko(),Ho(),nc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,sc=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,io=(e,t,i="f32",n,s=!1,r=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],f=s?u:r,p=s?r:u,m=f/t[0],_=r/t[1];if(!((s&&m===4&&e[1]===4||!s&&(m===3||m===4))&&f%t[0]===0&&r%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${i}>, ${f/m}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${d/e[0]}>, ${r}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${r};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/r)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${nc(s,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${sc(s,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},oa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ac=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ro=(e,t,i="f32",n,s=!1,r=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=s?d:r,m=s?r:d;if(!(m%t[1]===0&&p%t[0]===0&&r%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${r} must be divisible by workgroupSize[1]${t[1]}`);let _=m/t[1],y=p/t[0],v=r/t[1],C=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${oa(s,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${v};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${oa(s,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${ac(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${p}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${f}>, ${r}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${r};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/r)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${C}
  }
`},oc=(e,t,i,n,s=!1)=>{let[r,a,o,u]=n,d=Qe(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${r.type.indices}) -> ${tt(e,d)} {
      var value = ${tt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${qr("aIndices",a,a.rank-2,r.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${r.type.indices}) -> ${tt(e,d)} {
      var value = ${tt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${qr("bIndices",o,o.rank-2,r.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${tt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${tt(e,d)}(bias[row])`};`:""}
        ${i}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},jn=(e,t,i,n,s=!1,r)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):i.slice(0,-2),p=N.size(f),m=a[a.length-2],_=a[a.length-1],y=o[o.length-1],v=_%4===0&&y%4===0,C=m<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(y/$[0]/C[0]),Math.ceil(m/$[1]/C[1]),Math.ceil(p/$[2]/C[2])],T=v?4:1,x=[...u,m,_/T],E=x.length,z=[...d,_,y/T],O=z.length,M=[p,m,y/T],R=[{type:6,data:m},{type:6,data:y},{type:6,data:_}];Vi(t,R),R.push(...pe(f,x,z));let F=["rank","rank"],le=e.length>2;le&&(R.push(...pe(e[2].dims)),F.push("rank")),R.push(...pe(M));let ne=ie=>{let $e=f.length,be=qo("batchDims",e[0].dataType,$e,1),ee=Qe(e[0].dataType),oe=L("a",e[0].dataType,E,T),X=L("b",e[1].dataType,O,T),fe=de("result",e[0].dataType,M.length,T),Ee=[oe,X];if(le){let He=s?T:1;Ee.push(L("bias",e[2].dataType,e[2].dims.length,He))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Fi(t,P);let Z=Qe(fe.type.tensor),re=ji(t,fe.type.value,Z),me=oc(T,le,re,[be,oe,X,fe],s);return`
  ${ie.registerUniforms(P).registerInternalVariables(be).declareVariables(...Ee,fe)}
  ${me}
  ${v?io(C,$,ee,be):ro(C,$,ee,be)}
                   `};return{name:"MatMul",shaderCache:{hint:`${C};${t.activation};${v};${s}`,inputDependencies:F},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:R}),getShaderSource:ne}}}),lc,Ig,Rv=K(()=>{ye(),li(),ve(),Ki(),Ho(),Ov(),Zo(),lc=(e,t,i,n,s=!1,r,a=4,o=4,u=4,d="f32")=>{let f=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",v=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",C=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${C} / outWidth;
    let outCol = ${C} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${tt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${v}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,T=e?t&&n?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${tt(a,d)}(0.0);`:n&&i?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${tt(a,d)}(0.0);`,x=e?n&&i?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${tt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${tt(o,d)}(0.0);`,E=tt(u,d),z=tt(e?a:o,d),O=tt(e?o:a,d),M=ji(r,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?x:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Tg(s)}
      ${M}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ig=(e,t,i,n,s,r,a,o,u)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=i[0],m=d?i[2]:i[3],_=d?i[1]:i[2],y=d?i[3]:i[1],v=d&&(f%4===0||f%3===0)&&y%4===0,C=d?y:m*_,$=d?m*_:y,b=[8,8,1],T=n<=8?[4,1,1]:[4,4,1],x=[Math.ceil(C/b[0]/T[0]),Math.ceil($/b[1]/T[1]),Math.ceil(p/b[2]/T[2])];Ie("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let E=v?d&&f%4!==0?3:4:1,z=b[1]*T[1],O=b[0]*T[0],M=Math.max(b[0]*E,b[1]),R=n%z===0,F=s%O===0,le=r%M===0,ne=v?[E,4,4]:[1,1,1],ie=[{type:6,data:n},{type:6,data:s},{type:6,data:r},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Vi(t,ie),ie.push(...pe(e[0].dims,e[1].dims));let $e=["rank","rank"];a&&(ie.push(...pe(e[2].dims)),$e.push("rank")),ie.push(...pe(i));let be=ee=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Fi(t,oe);let X=v?4:1,fe=Qe(e[0].dataType),Ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${v?`vec4<${fe}>`:fe}) {
        result[flatIndex] = ${v?`vec4<${fe}>`:fe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${v?`vec4<${fe}>`:fe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${v?"/ 4":""}, value);
      }`,P=L("x",e[0].dataType,e[0].dims.length,E===3?1:E),Z=L("w",e[1].dataType,e[1].dims.length,X),re=[P,Z],me=de("result",e[0].dataType,i.length,X);if(a){let He=L("bias",e[2].dataType,e[2].dims.length,X);re.push(He),Ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${v?`vec4<${fe}>`:fe} {
          return bias[coords.${d?"w":"y"}${v?"/ 4":""}];
        }`}return`
        ${Sg("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ee.registerUniforms(oe).declareVariables(...re,me)}
        ${Ee}
        ${lc(d,R,F,le,a,t,ne[0],ne[1],ne[2],fe)}
        ${v?io(T,b,fe,void 0,!d,M):ro(T,b,fe,void 0,!d,M,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${v};${R};${F};${le};${z};${O};${M}`,inputDependencies:$e},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:ie}),getShaderSource:be}}}),uc,la,$r,dc,ua,cc,Eg,kg,Mv=K(()=>{ye(),li(),we(),ve(),Ki(),Ho(),uc=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},la=e=>typeof e=="number"?[e,e,e]:e,$r=(e,t)=>t<=1?e:e+(e-1)*(t-1),dc=(e,t,i,n=1)=>{let s=$r(t,n);return Math.floor((e[0]*(i-1)-i+s)/2)},ua=(e,t,i,n,s)=>{s==null&&(s=dc(e,t[0],n[0]));let r=[0,0,0,i];for(let a=0;a<3;a++)e[a]+2*s>=t[a]&&(r[a]=Math.trunc((e[a]-t[a]+2*s)/n[a]+1));return r},cc=(e,t,i,n,s,r,a,o,u,d)=>{let f,p,m,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=ua([t,i,n,1],[o,u,d],1,[s,r,a],e);p=y[0],m=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((v,C,$)=>v===$[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=ua([t,i,n,1],[o,u,d],1,[s,r,a],e[0]);p=y[0],m=y[1],_=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/s),m=Math.ceil(i/r),_=Math.ceil(n/a);let y=(p-1)*s+o-t,v=(m-1)*r+u-i,C=(_-1)*a+d-n,$=Math.floor(y/2),b=y-$,T=Math.floor(v/2),x=v-T,E=Math.floor(C/2),z=C-E;f={top:T,bottom:x,left:E,right:z,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:m,outWidth:_}},Eg=(e,t,i,n,s,r=!1,a="channelsLast")=>{let o,u,d,f,p;if(a==="channelsLast")[o,u,d,f,p]=e;else if(a==="channelsFirst")[o,p,u,d,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[m,,_,y,v]=t,[C,$,b]=la(i),[T,x,E]=la(n),z=$r(_,T),O=$r(y,x),M=$r(v,E),{padInfo:R,outDepth:F,outHeight:le,outWidth:ne}=cc(s,u,d,f,C,$,b,z,O,M),ie=r?m*p:m,$e=[0,0,0,0,0];return a==="channelsFirst"?$e=[o,ie,F,le,ne]:a==="channelsLast"&&($e=[o,F,le,ne,ie]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:f,inChannels:p,outDepth:F,outHeight:le,outWidth:ne,outChannels:ie,padInfo:R,strideDepth:C,strideHeight:$,strideWidth:b,filterDepth:_,filterHeight:y,filterWidth:v,effectiveFilterDepth:z,effectiveFilterHeight:O,effectiveFilterWidth:M,dilationDepth:T,dilationHeight:x,dilationWidth:E,inShape:e,outShape:$e,filterShape:t}},kg=(e,t,i,n,s,r)=>{let a=r==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:i.map((C,$)=>$)},d=[Math.ceil(uc(u.x.map(C=>i[C]))/o[0]),1,1];Ie("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=N.size(i),m=[{type:12,data:p},{type:12,data:n},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];Vi(t,m),m.push(...pe(e[0].dims,e[1].dims));let _=["rank","rank"],y=e.length===3;y&&(m.push(...pe(e[2].dims)),_.push("rank")),m.push(...pe(i));let v=C=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Fi(t,$);let b=1,T=Qe(e[0].dataType),x=L("x",e[0].dataType,e[0].dims.length,f),E=L("W",e[1].dataType,e[1].dims.length,b),z=[x,E],O=de("result",e[0].dataType,i.length,b),M="";if(y){let le=L("bias",e[2].dataType,e[2].dims.length,b);z.push(le),M+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?ce("coords",4,5):ce("coords",1,5)}];
        }`}let R=tt(f,T),F=ji(t,R,T);return`
            ${M}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${C.registerUniforms($).declareVariables(...z,O)}
          ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${ce("coords",0,x.rank)};
              let d2 = ${a?ce("coords",x.rank-1,x.rank):ce("coords",1,x.rank)};
              let xFRCCorner = vec3<u32>(${a?ce("coords",1,x.rank):ce("coords",2,x.rank)},
              ${a?ce("coords",2,x.rank):ce("coords",3,x.rank)},
              ${a?ce("coords",3,x.rank):ce("coords",4,x.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?ce("uniforms.x_shape",1,x.rank):ce("uniforms.x_shape",2,x.rank)};
              let xShapeZ = ${a?ce("uniforms.x_shape",2,x.rank):ce("uniforms.x_shape",3,x.rank)};
              let xShapeW = ${a?ce("uniforms.x_shape",3,x.rank):ce("uniforms.x_shape",4,x.rank)};
              let xShapeU = ${a?ce("uniforms.x_shape",4,x.rank):ce("uniforms.x_shape",1,x.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${f};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:v}}}),Ag,zg,Bv=K(()=>{ye(),we(),ve(),Ki(),Ag=(e,t,i,n)=>{let s=e.length>2,r=s?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?i[3]:i[1],f=d/t.group,p=u&&f>=4?We(d):1,m=N.size(i)/p,_=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Vi(t,_),_.push(...pe(a,[o[0],o[1],o[2],o[3]/p]));let y=s?["rank","rank","rank"]:["rank","rank"];_.push(...pe([i[0],i[1],i[2],i[3]/p]));let v=C=>{let $=de("output",e[0].dataType,i.length,p),b=Qe($.type.tensor),T=ji(t,$.type.value,b),x=L("x",e[0].dataType,a.length),E=L("w",e[1].dataType,o.length,p),z=[x,E];s&&z.push(L("b",e[2].dataType,e[2].dims,p));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Fi(t,O);let M=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${C.registerUniforms(O).declareVariables(...z,$)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${M}
    ${r}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:v}},zg=(e,t,i,n)=>{let s=e.length>2,r=We(i[3]),a=We(i[2]),o=N.size(i)/r/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/r],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/r],f=[i[0],i[1],i[2],i[3]/r],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Vi(t,p),p.push(...pe(u,d,f));let m=(a-1)*t.strides[1]+d[1],_=y=>{let v=de("output",e[0].dataType,f.length,r),C=Qe(v.type.tensor),$=ji(t,v.type.value,C),b=L("x",e[0].dataType,u.length,r),T=L("w",e[1].dataType,d.length,r),x=[b,T];s&&x.push(L("b",e[2].dataType,e[2].dims,r));let E=s?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Fi(t,z),`
  ${y.registerUniforms(z).declareVariables(...x,v)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${m}>;
    var values: array<${v.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${$}
      ${v.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${r};${a};${m};${d[0]};${d[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:_}}}),fc,vn,pc,$n,no,da,hc,mc,so,Nv=K(()=>{we(),Rv(),Mv(),Zo(),Bv(),Ki(),Ko(),xi(),fc=(e,t,i,n,s,r)=>{let a=e[0],o=e.slice(r?1:2,r?3:4),u=o.length,d=t[0],f=t.slice(2).map((m,_)=>m+(m-1)*(i[_]-1)),p=o.map((m,_)=>m+n[_]+n[_+u]).map((m,_)=>Math.floor((m-f[_]+s[_])/s[_]));return p.splice(0,0,a),p.splice(r?3:1,0,d),p},vn=[2,3,1,0],pc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(i!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},$n=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let r=2;r<t[1].dims.length;++r)i[r-2]===0&&(i[r-2]=t[1].dims[r]);let n=e.pads.slice();qn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,n,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:i,pads:n}),s},no=e=>{let t=Fo(e),i=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,r=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:i,dilations:s,group:r,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},da=(e,t,i,n)=>{let s=i.format==="NHWC",r=fc(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,s);if(i.group!==1){let z=[t[0]];if(s){let O=e.kernelCustomData.wT??e.compute(xt(t[1],vn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),z.push(O)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(zg(z,i,r,n),{inputs:z}):e.compute(Ag(z,i,r,n),{inputs:z});return}let a=t.length===3,o=t[0].dims[s?1:2],u=t[0].dims[s?2:3],d=t[0].dims[s?3:1],f=t[1].dims[2],p=t[1].dims[3],m=r[s?1:2],_=r[s?2:3],y=r[s?3:1],v=s&&f===o&&p===u&&i.pads[0]===0&&i.pads[1]===0;if(v||f===1&&p===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let z=r[0],O,M,R,F=[];if(s){let ie=e.kernelCustomData.wT??e.compute(xt(t[1],vn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ie),v){let $e=o*u*d;O=t[0].reshape([1,z,$e]),M=ie.reshape([1,$e,y]),R=[1,z,y]}else O=t[0].reshape([z,o*u,d]),M=ie.reshape([1,d,y]),R=[z,m*_,y];F.push(O),F.push(M)}else O=t[0].reshape([z,d,o*u]),M=t[1].reshape([1,y,d]),R=[z,y,m*_],F.push(M),F.push(O);a&&F.push(t[2]);let le=R[2],ne=F[0].dims[F[0].dims.length-1];le<8&&ne<8?e.compute(Go(F,i,r,R,s,n),{inputs:F}):e.compute(jn(F,i,r,R,s,n),{inputs:F});return}let C=!0,$=e.kernelCustomData.wT??e.compute(xt(t[1],vn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];a&&b.push(t[2]);let T=s?m*_:y,x=s?y:m*_,E=f*p*d;e.compute(Ig(b,i,r,T,x,E,a,C,n),{inputs:b})},hc=(e,t)=>{let i=t.format==="NHWC",n=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],r=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=$n({...t,pads:s,strides:r,dilations:a,kernelShape:o},n);da(e,n,u,d=>i?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},mc=(e,t,i)=>{let n=i.format==="NHWC"?"channelsLast":"channelsFirst",s=$n(i,t),r=i.autoPad==="NOTSET"?i.pads:i.autoPad,a=Eg(t[0].dims,t[1].dims,i.strides,i.dilations,r,!1,n);e.compute(kg(t,s,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},so=(e,t)=>{if(pc(e.inputs,t),e.inputs[0].dims.length===3)hc(e,t);else if(e.inputs[0].dims.length===5)mc(e,e.inputs,t);else{let i=$n(t,e.inputs);da(e,e.inputs,i)}}}),Og,Dv=K(()=>{ye(),li(),we(),ve(),Og=(e,t,i)=>{let n=e.length>2,s=t.outputShape,r=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],f=r?We(u):1,p=r&&d===1&&u>=4,m=p?Math.floor(u/4)*4:Math.floor(u/f)*f,_=u-m,y=r?We(d):1,v=r?d===1?f:y:1,C=N.size(s)/y,$=[Math.ceil(C/64),1,1];Ie("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],T=[t.strides[0],t.strides[1]],x=[t.kernelShape[r?1:2],t.kernelShape[r?2:3]],E=[t.dilations[0],t.dilations[1]],z=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[r?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[r?2:3]-1)*(t.dilations[1]-1))],O=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],M=[{type:12,data:C},{type:12,data:T},{type:12,data:x},{type:12,data:E},{type:12,data:z},{type:6,data:O},{type:12,data:m},{type:12,data:u},{type:12,data:d},...pe(e[0].dims,e[1].dims)];n&&(M.push(...pe(e[2].dims)),b.push("rank")),M.push(...pe(s));let R=F=>{let le=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ne=Qe(e[0].dataType),ie=r?1:2,$e=r?2:3,be=r?3:1,ee=L("W",e[1].dataType,e[1].dims.length,v),oe=L("Dy",e[0].dataType,e[0].dims.length,f),X=[oe,ee];n&&X.push(L("bias",e[2].dataType,[s[be]].length,y));let fe=de("result",e[0].dataType,s.length,y),Ee=()=>{let re="";if(p)f===4?re+=`
        let xValue = ${oe.getByOffset("x_offset")};
        let wValue = ${ee.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?re+=`
          dotProd = dotProd + dot(vec4<${ne}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}), vec4<${ne}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(re+=`
          dotProd = dotProd + dot(vec4<${ne}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}, ${oe.getByOffset("x_offset + 2u")}, ${oe.getByOffset("x_offset + 3u")}), vec4<${ne}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}, ${ee.getByOffset("w_offset + 2u")}, ${ee.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(re+=`
                  let xValue = ${r?oe.getByOffset(`${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):oe.get("batch","inputChannel","idyR","idyC")};
        `,f===1)re+=`
          let w_offset = ${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ee.getByOffset(`w_offset / ${v}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let me=0;me<f;me++)re+=`
            let wValue${me} = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${me}, wOutChannel)`)} / ${v}`)};
            dotProd = dotProd + xValue[${me}] * wValue${me};`;return re},P=()=>{if(_===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let re="";if(f===1){re+="dotProd = dotProd";for(let me=0;me<_;me++)re+=`
            + ${oe.getByOffset(`x_offset + ${me}`)} * ${ee.getByOffset(`w_offset + ${me}`)}`;re+=";"}else if(f===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);re+=`
          let xValue = ${oe.getByOffset("x_offset")};
          let wValue = ${ee.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return re},Z=`
            let outputIndices = ${fe.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${fe.indicesGet("outputIndices",0)};
            let d1 = ${fe.indicesGet("outputIndices",be)};
            let r = ${fe.indicesGet("outputIndices",ie)};
            let c = ${fe.indicesGet("outputIndices",$e)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${fe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ne}(dyRCorner) + ${ne}(wR)) / ${ne}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ne}(uniforms.Dy_shape[${ie}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ne}(dyCCorner) + ${ne}(wC)) / ${ne}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ne}(uniforms.Dy_shape[${$e}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${ee.indicesToOffset(`${ee.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${v};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${Ee()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${fe.setByOffset("global_idx","value")};
          `;return`
    ${F.registerUniforms(le).declareVariables(...X,fe)}
      ${F.mainStart()}
      ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${v}${y}${p}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:i?i(s):s,dataType:e[0].dataType}],programUniforms:M}),getShaderSource:R}}}),gc,_c,yc,ca,Rg,bc,fa,wc,Mg,Pv=K(()=>{Dv(),Ki(),xi(),gc=(e,t,i,n,s,r)=>(e-1)*t+i+(n-1)*s+1-r,_c=(e,t,i,n,s)=>{let r=Math.floor(e/2);t==="SAME_UPPER"?(i[n]=r,i[s]=e-r):t==="SAME_LOWER"&&(i[n]=e-r,i[s]=r)},yc=(e,t,i,n,s,r,a,o,u,d)=>{let f=e.length-2,p=d.length===0;u.length<f&&u.push(...Array(f-u.length).fill(0));let m=e[0],_=t[o?3:1]*s;for(let y=0,v=e.length-f-(o?1:0);y<f;++y,++v){let C=e[v],$=p?C*a[y]:d[y],b=gc(C,a[y],r[y],t[v],i[y],$);_c(b,n,r,y,y+f),p&&d.push(a[y]*(C-1)+u[y]+(t[v]-1)*i[y]+1-r[y]-r[y+f])}d.splice(0,0,m),d.splice(o?3:1,0,_)},ca=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,m)=>p*m,1)===0){i.length=0;for(let p=2;p<t[1].dims.length;++p)i.push(t[1].dims[p])}let n=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(n?3:1,0,t[1].dims[1]);let s=e.pads.slice(),r=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}yc(o,i,u,e.autoPad,e.group,s,d,n,a,r);let f=Object.assign({},e);return Object.assign(f,{kernelShape:i,pads:s,outputPadding:a,outputShape:r,dilations:u,strides:d}),f},Rg=e=>{let t=Fo(e),i=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,r=e.group,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:i,dilations:s,group:r,kernelShape:a,outputPadding:f,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},bc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(i!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let r=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==r)throw new Error(`dilations should be ${r}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==r)throw new Error(`strides should be ${r}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==r*2)throw new Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},fa=(e,t,i,n)=>{let s=e.kernelCustomData.wT??e.compute(xt(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let r=[t[0],s];t.length===3&&r.push(t[2]),e.compute(Og(r,i,n),{inputs:r})},wc=(e,t)=>{let i=t.format==="NHWC",n=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let r=t.dilations;(r.length===0||r[0]===0)&&(r=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),r=[1].concat(r),s=[1].concat(s);let u=t.outputPadding;u=[0].concat(u);let d=ca({...t,pads:o,strides:a,dilations:r,kernelShape:s,outputPadding:u},n);fa(e,n,d,f=>i?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},Mg=(e,t)=>{if(bc(e.inputs,t),e.inputs[0].dims.length===3)wc(e,t);else{let i=ca(t,e.inputs);fa(e,e.inputs,i)}}}),vc,Bg,Ng,Uv=K(()=>{ye(),we(),Fe(),ve(),vc=(e,t,i,n)=>{let s=N.size(t),r=t.length,a=L("input",e,r),o=de("output",e,r),u=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),d=N.normalizeAxis(u,r),f=p=>{let m=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,_=ce("uniforms.input_shape","uniforms.axis",r),y=n.reverse?m+(n.exclusive?" + 1":""):"0",v=n.reverse?_:m+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${v};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:d},...pe(t,t)]}),getShaderSource:f}},Bg=(e,t)=>{let i=e.inputs[0].dims,n=e.inputs[0].dataType,s=e.inputs[1];e.compute(vc(n,i,s,t),{inputs:[0]})},Ng=e=>{let t=e.exclusive===1,i=e.reverse===1;return Re({exclusive:t,reverse:i})}}),$c,xc,Cc,Dg,Pg,Lv=K(()=>{ye(),we(),Fe(),ve(),$c=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},xc=(e,t,i,n)=>{let s=[];s.push(`fn perm(i: ${n.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let r=0;r<t;++r)s.push(i.indicesSet("a",e[r],`i[${r}]`));return s.push("return a;}"),s.join(`
`)},Cc=(e,t)=>{let i,n,s,r,a,o,u=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";u?([i,n,s,r]=e.dims,a=f?[i,n,s,d,d,r/d**2]:[i,n,s,r/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,n,s,r]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[i,d,d,r/d**2,n,s]:[i,r/d**2,d,d,n,s],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),m=p.dims.length,_=e.dataType,y=L("a",_,m),v=de("output",_,m),C=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,v)}

  ${xc(o,m,y,v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=u?[i,n*d,s*d,r/d**2]:[i,r/d**2,n*d,s*d],T=N.size(b),x=p.dims,E=N.sortBasedOnPerm(x,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...pe(x,E)]}},getShaderSource:C}},Dg=(e,t)=>{$c(e.inputs),e.compute(Cc(e.inputs[0],t))},Pg=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),xn,xr,pa,Tc,Sc,Ic,Ec,ha,kc,Ug,Lg,qv=K(()=>{ye(),we(),Fe(),ve(),xn="[a-zA-Z]|\\.\\.\\.",xr="("+xn+")+",pa="^"+xr+"$",Tc="("+xr+",)*"+xr,Sc="^"+Tc+"$",Ic=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},Ec=class{constructor(e,t){var s;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,n]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(Sc)))throw new Error("Invalid LHS term");if(i.split(",").forEach((r,a)=>{let o=e[a].dims.slice();if(!r.match(RegExp(pa)))throw new Error("Invalid LHS term");let u=this.processTerm(r,!0,o,a);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([r,a])=>a.count===1||r==="...").map(([r])=>r).join("");else if(!n.match(RegExp(xr)))throw new Error("Invalid RHS");(s=n.match(RegExp(xn,"g")))==null||s.forEach(r=>{if(r==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(r);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,i){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(i)}else n={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,n)}processTerm(e,t,i,n=-1){let s=i.length,r=!1,a=[],o=0;if(!e.match(RegExp(pa))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(xn,"g")),d=new Ic(n);return u==null||u.forEach((f,p)=>{if(f==="..."){if(r)throw new Error("Only one ellipsis is allowed per input term");r=!0;let m=s-u.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(a=i.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<a.length;_++){let y=String.fromCharCode(48+_);d.addSymbol(y,p+_),this.addSymbol(y,i[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,i[o++],n)}),d}},ha=e=>e+"_max",kc=(e,t,i,n)=>{let s=e.map(d=>d.length).map((d,f)=>L(`input${f}`,t,d)),r=N.size(n),a=de("output",t,n.length),o=[...i.symbolToInfo.keys()].filter(d=>!i.rhs.symbolToIndices.has(d)),u=d=>{let f=[],p="var prod = 1.0;",m="var sum = 0.0;",_="sum += prod;",y=[],v=[],C=[],$=[],b=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((x,E)=>{var z;if(i.rhs.symbolToIndices.has(E)){let O=(z=i.rhs.symbolToIndices.get(E))==null?void 0:z[0];O!==void 0&&i.lhs.forEach((M,R)=>{if(x.inputIndices.includes(R)){let F=M.symbolToIndices.get(E);if(F===void 0)throw new Error("Invalid symbol error");F.forEach(le=>{f.push(`${s[R].indicesSet(`input${R}Indices`,le,a.indicesGet("outputIndices",O))}`)})}})}else i.lhs.forEach((O,M)=>{if(x.inputIndices.includes(M)){let R=O.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(F=>{y.push(`${s[M].indicesSet(`input${M}Indices`,F,`${E}`)}`)}),$.push(`prod *= ${s[M].getByIndices(`input${M}Indices`)};`)}}),v.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${ha(E)}; ${E}++) {`),C.push("}")});let T=b?[...f,`let sum = ${s.map((x,E)=>x.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...f,m,...v,...y,p,...$,_,...C];return`
            ${d.registerUniforms(o.map(x=>({name:`${ha(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${s.map((x,E)=>`var input${E}Indices: ${s[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>i.symbolToInfo.has(p)).map(p=>{var m;return{type:12,data:((m=i.symbolToInfo.get(p))==null?void 0:m.dimValue)||0}});d.push({type:12,data:r});let f=e.map((p,m)=>[...pe(p)]).reduce((p,m)=>p.concat(m),d);return f.push(...pe(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f}},getShaderSource:u}},Ug=(e,t)=>{let i=new Ec(e.inputs,t.equation),n=i.outputDims,s=e.inputs.map((r,a)=>r.dims);e.compute(kc(s,e.inputs[0].dataType,i,n))},Lg=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Ac,ma,zc,Oc,qg,Wv=K(()=>{ye(),we(),ve(),Ac=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),n=i.length<t.length?0:i.length-t.length,s=t.length<i.length?0:t.length-i.length;for(;n<i.length&&s<t.length;++n,++s)if(i[n]!==t[s]&&i[n]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ma=(e,t)=>{let i=e.length-t.length,n=[];for(let s=0;s<i;++s)n.push(e[s]);for(let s=0;s<t.length;++s)n.push(t[s]===1?e[s+i]:t[s]);return n},zc=(e,t)=>e.length>t.length?ma(e,t):ma(t,e),Oc=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),n=zc(t,i),s=e[0].dataType,r=s===9||N.size(t)===1,a=s===9||t.length>0&&t[t.length-1]%4===0?4:1,o=r||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(N.size(n)/o),d=p=>{let m=L("input",s,t.length,a),_=de("output",s,n.length,o),y;if(s===9){let v=(C,$,b="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${m.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${C}[${$}] = ${b}(${m.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${v("data",0,"u32")}
        ${v("data",1,"u32")}
        ${v("data",2,"u32")}
        ${v("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${m.getByOffset(`inputOffset / ${a}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(m,_)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},f=[{type:12,data:u},...pe(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f})}},qg=e=>{Ac(e.inputs),e.compute(Oc(e.inputs),{inputs:[0]})}}),Rc,Wg,jv=K(()=>{ye(),we(),ve(),Vo(),Rc=e=>{let t=e[0].dataType,i=N.size(e[0].dims),n=N.size(e[1].dims),s=n%4===0,r=a=>{let o=L("x",t,[1],4),u=L("bias",t,[1],4),d=de("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,m=s?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(o,u,d)}

    ${eo(st(t))}

    ${a.mainStart(ur)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",to("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:r,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(i/ur/4)}})}},Wg=e=>{e.inputs.length<2||N.size(e.inputs[1].dims)===0?lg(e):e.compute(Rc(e.inputs))}}),Mc,Bc,jg,Vg,Vv=K(()=>{ye(),we(),Fe(),ve(),Mc=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Bc=(e,t)=>{let i=e[0].dims,n=e[1].dims,s=i.length,r=N.normalizeAxis(t.axis,s),a=i.slice(0);a.splice(r,1,...n);let o=i[r],u=e[0].dataType===9?4:1,d=Math.ceil(N.size(a)/u),f=[{type:12,data:d},{type:6,data:o},{type:12,data:r},...pe(e[0].dims,e[1].dims,a)],p=m=>{let _=L("data",e[0].dataType,e[0].dims.length,u),y=L("inputIndices",e[1].dataType,e[1].dims.length),v=de("output",e[0].dataType,a.length,u),C=b=>{let T=n.length,x=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let E=0;E<T;E++)x+=`${T>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;x+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let E=0,z=0;E<s;E++)E===r?(x+=`${s>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,z+=T):(x+=`${s>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${z}]`:`outputIndices${b}`};`,z++);return x},$;if(e[0].dataType===9){let b=(T,x,E="")=>`
          let outputIndices${x} = ${v.offsetToIndices(`outputOffset + ${x}u`)};
          ${C(x)};
          let offset${x} = ${_.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${T}[${x}] = ${E}(${_.getByOffset(`index${x}`)}[component${x}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${v.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${v.offsetToIndices("global_idx")};
      ${C("")};
      let value = ${_.getByIndices("dataIndices")};
      ${v.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,v)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},jg=e=>Re({axis:e.axis}),Vg=(e,t)=>{let i=e.inputs;Mc(i),e.compute(Bc(e.inputs,t))}}),Nc,Fg,Hg,Fv=K(()=>{ye(),we(),ve(),Nc=(e,t,i,n,s,r,a,o,u)=>{let d=[{type:12,data:r},{type:12,data:n},{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:12,data:u}],f=[r];d.push(...pe(t.dims,f));let p=m=>{let _=L("indices_data",t.dataType,t.dims.length),y=de("input_slice_offsets_data",12,1,1),v=[_,y],C=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(C).declareVariables(...v)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Fg=(e,t)=>{let i=e.inputs,n=i[0].dims,s=i[0].dataType,r=i[1].dims,a=r[r.length-1],o=N.sizeToDimension(r,r.length-1),u=N.sizeFromDimension(n,t.batchDims+a),d=N.sizeToDimension(n,t.batchDims),f=N.sizeFromDimension(n,t.batchDims),p=o/d,m=new Array(a),_=u;for(let x=0;x<a;++x)m[a-1-x]=_,_*=n[t.batchDims+a-1-x];let y=Nc(e,i[1],m,t.batchDims,n,o,p,f,a),v=t.batchDims+a;if(v>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let C=r.slice(0,-1).concat(n.slice(v)),$=N.size(C),b=[{type:12,data:$},{type:12,data:u},...pe(i[0].dims,y.dims,C)],T=x=>{let E=L("data",i[0].dataType,i[0].dims.length),z=L("slice_offsets",12,y.dims.length),O=de("output",i[0].dataType,C.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,z,O)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:C,dataType:s}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:T},{inputs:[i[0],y]})},Hg=e=>({batchDims:e.batch_dims,cacheKey:""})}),Dc,Pc,Gg,Kg,Hv=K(()=>{ye(),we(),Fe(),ve(),Dc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=N.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,s=e[0],r=e[2],a=e.length===4?e[3]:void 0;if(r.dims.length!==s.dims.length||!s.dims.map((o,u)=>u===i?Math.ceil(o/n)===r.dims[u]:o===r.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==r.dims.length||!a.dims.map((o,u)=>o===r.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Pc=(e,t)=>{let i=e[0].dims,n=e[1].dims,s=i.length,r=N.normalizeAxis(t.gatherAxis,s),a=N.normalizeAxis(t.quantizeAxis,s),o=i.slice(0);o.splice(r,1,...n);let u=N.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:r},{type:12,data:t.blockSize},...pe(...e.map((_,y)=>_.dims),o)],m=_=>{let y=L("data",e[0].dataType,e[0].dims.length),v=L("inputIndices",e[1].dataType,e[1].dims.length),C=L("scales",e[2].dataType,e[2].dims.length),$=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=de("output",d,o.length),T=[y,v,C];$&&T.push($);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(x).declareVariables(...T,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${v.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${v.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${v.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[r]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${C.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${C.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${C.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${st(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:m}},Gg=(e,t)=>{let i=e.inputs;Dc(i,t),e.compute(Pc(e.inputs,t))},Kg=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Uc,Lc,Zg,Yg,Gv=K(()=>{ye(),we(),Fe(),ve(),Uc=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Lc=(e,t)=>{let i=e[0].dims,n=e[0].dataType,s=i.length,r=e[1].dims,a=e[1].dataType,o=N.normalizeAxis(t.axis,s),u=i[o],d=r.slice(0),f=N.size(d),p=L("input",n,s),m=L("indicesInput",a,r.length),_=de("output",n,d.length),y=[{type:12,data:f},{type:6,data:u},{type:12,data:o}];return y.push(...pe(i,r,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:v=>`
      ${v.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,m,_)}
      ${v.mainStart()}
      ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Zg=e=>Re({axis:e.axis}),Yg=(e,t)=>{let i=e.inputs;Uc(i),e.compute(Lc(e.inputs,t))}}),qc,Wc,Xg,Qg,Kv=K(()=>{ye(),we(),ve(),qc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Wc=(e,t)=>{let i=e[0].dims.slice(),n=e[1].dims.slice(),[s,r,a]=Zh.getShapeOfGemmResult(i,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[s,r];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(r/u),f=Math.ceil(s/u),p=!0,m=N.size(o),_=[{type:12,data:p?d:m},{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...pe(e[2].dims)),y.push("rank")),_.push(...pe(o));let v=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",x=L("a",e[0].dataType,e[0].dims),E=L("b",e[1].dataType,e[1].dims),z=x.type.value,O=null,M=[x,E];e.length===3&&(O=L("c",e[2].dataType,e[2].dims.length),M.push(O));let R=de("output",e[0].dataType,o.length);M.push(R);let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(F).declareVariables(...M)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${T}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},C=$=>{let b=L("a",e[0].dataType,e[0].dims),T=L("b",e[1].dataType,e[1].dims),x=null,E=[b,T];e.length===3&&(x=L("c",e[2].dataType,e[2].dims.length),E.push(x));let z=de("output",e[0].dataType,o.length);E.push(z);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],M="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let F=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(O).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${M}
      }
      workgroupBarrier();
    }

    ${F}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:_}),getShaderSource:C}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:v}},Xg=e=>{let t=e.transA,i=e.transB,n=e.alpha,s=e.beta;return{transA:t,transB:i,alpha:n,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Qg=(e,t)=>{qc(e.inputs),e.compute(Wc(e.inputs,t))}}),Wt,ei,Ei,ki,jc,Vc,Fc,Hc,Gc,Kc,Zc,Yc,Jg,e_,Zv=K(()=>{ye(),we(),Fe(),ve(),[Wt,ei,Ei,ki]=[0,1,2,3],jc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Vc=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Fc=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Hc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Gc=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Kc=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Wt}] = batch;
     indices[${ei}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ei}] = u32(r);
            indices[${ki}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ei}] = u32(clamp(r, 0, H - 1));
          indices[${ki}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ei}] = gs_reflect(r, border[1], border[3]);
          indices[${ki}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Zc=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Wt}], indices[${ei}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Wt}], indices[${ei}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Wt}], indices[${ei}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Wt}], indices[${ei}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Wt}], indices[${ei}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Wt}], indices[${ei}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Yc=(e,t)=>{let i=L("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=L("grid",e[1].dataType,n.length,2),r=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(r=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Wt,ei,Ei,ki]=[0,3,1,2]);let a=de("output",e[0].dataType,r.length),o=i.type.value,u=N.size(r),d=[{type:12,data:u},...pe(e[0].dims,n,r)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(i,s,a)}
  ${Vc}
  ${Fc(o)}
  ${Hc(t)}
  ${Gc(t)}
  ${Kc(i,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ei}]);
      let W_in = i32(uniforms.x_shape[${ki}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Wt}], indices[${Ei}], indices[${ki}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Zc(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let m=N.size(r);return{outputs:[{dims:r,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:f}},Jg=(e,t)=>{jc(e.inputs),e.compute(Yc(e.inputs,t))},e_=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ut,Xc,t_,ga,Qc,Rr,i_,r_=K(()=>{ye(),we(),Fe(),Lo(),jo(),ve(),xi(),ut=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Xc=(e,t)=>{let i=e[0],n=ut(e,1),s=ut(e,2),r=ut(e,3),a=ut(e,4),o=ut(e,5),u=ut(e,6),d=ut(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=i.dims[0],p=i.dims[1],m=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],_=p,y=0,v=0,C=Math.floor(m/t.numHeads);if(u&&d&&N.size(u.dims)&&N.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[3]!==C)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==C)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=u.dims[2],v=u.dims[2]}else if(u&&N.size(u.dims)||d&&N.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(n&&N.size(n.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==C)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==C)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=n.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(r&&N.size(r.dims)>0){if(r.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+_,T=0;if(a&&N.size(a.dims)>0){T=8;let O=a.dims;throw O.length===1?O[0]===f?T=1:O[0]===3*f+2&&(T=3):O.length===2&&O[0]===f&&O[1]===b&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,E=m;if(s&&N.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(_!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=s.dims[2]}else{if(_!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=s.dims[1]*s.dims[3],x=!0}}let z=!1;if(a&&N.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&N.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:v,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:C,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:z,passPastInKv:x,qkvFormat:$}},t_=e=>Re({...e}),ga=Re({perm:[0,2,1,3]}),Qc=(e,t,i,n,s,r,a)=>{let o=[n,s,r],u=N.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:r}],f=p=>{let m=de("qkv_with_bias",t.dataType,o),_=L("qkv",t.dataType,o),y=L("bias",i.dataType,o),v=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(v).declareVariables(_,y,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,i],outputs:[-1]})[0]},Rr=(e,t,i,n,s,r,a,o)=>{let u=r;if(a&&N.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Qc(e,r,a,t,n,i*s,o),u=u.reshape([t,n,i,s]),i===1||n===1?u:e.compute(xt(u,ga.perm),{inputs:[u],outputs:[-1]})[0]}else return r.dims.length===3&&(u=r.reshape([t,n,i,s])),i===1||n===1?u:e.compute(xt(u,ga.perm),{inputs:[u],outputs:[-1]})[0]},i_=(e,t)=>{let i=Xc(e.inputs,t),n=e.inputs[0],s=ut(e.inputs,1),r=ut(e.inputs,2),a=ut(e.inputs,3),o=ut(e.inputs,4),u=ut(e.inputs,5),d=ut(e.inputs,6),f=ut(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let p=s&&r&&s.dims.length===4&&r.dims.length===4,m=Rr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,n,a,0);if(p)return Kr(e,m,s,r,o,void 0,d,f,u,i);if(!s||!r)throw new Error("key and value must be provided");let _=Rr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,s,a,i.hiddenSize),y=Rr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,r,a,2*i.hiddenSize);Kr(e,m,_,y,o,void 0,d,f,u,i)}}),Jc,ef,tf,rf,ao,n_,s_,a_=K(()=>{ye(),we(),Fe(),ve(),Jc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ef=(e,t)=>{let i=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),n=i.length),Re({numOutputs:n,axis:t.axis,splitSizes:i})},tf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ce("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,rf=e=>{let t=e.length,i=[];for(let n=0;n<t;++n){let s=e[n].setByIndices("indices","input[global_idx]");t===1?i.push(s):n===0?i.push(`if (output_number == ${n}u) { ${s} }`):n===t-1?i.push(`else { ${s} }`):i.push(`else if (output_number == ${n}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},ao=(e,t)=>{let i=e[0].dims,n=N.size(i),s=e[0].dataType,r=N.normalizeAxis(t.axis,i.length),a=new Array(t.numOutputs),o=L("input",s,i.length),u=new Array(t.numOutputs),d=[],f=[],p=0,m=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],u[y]=p;let v=i.slice();v[r]=t.splitSizes[y],f.push(v),a[y]=de(`output${y}`,s,v.length),d.push({dims:f[y],dataType:e[0].dataType})}m.push({type:12,data:u},...pe(i,...f));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${tf(u.length)}
  ${rf(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",r)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ce("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",r,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m})}},n_=(e,t)=>{Jc(e.inputs);let i=e.inputs.length===1?t:ef(e.inputs,t);e.compute(ao(e.inputs,i),{inputs:[0]})},s_=e=>{let t=e.axis,i=e.splitSizes,n=e.numOutputs<0?i.length:e.numOutputs;if(n!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:n,splitSizes:i})}}),nf,Vn,o_,l_=K(()=>{ye(),we(),Fe(),ve(),nf=(e,t)=>{let[i,n,s,r]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!N.areEqual(n.dims,[])&&!N.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(r.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${r.dims.length}`);if(!N.areEqual(s.dims,r.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=i.dims[0],d=i.dims[i.dims.length-2],f=s.dims[0],p=N.sizeFromDimension(i.dims,1)/d,m=o===0?s.dims[1]*2:p/a;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(m/2!==s.dims[1]&&o/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Vn=(e,t)=>{let{interleaved:i,numHeads:n,rotaryEmbeddingDim:s,scale:r}=t,a=e[0].dims[0],o=N.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,f=e[2].dims[1],p=s===0?f*2:d/n,m=new Array(a,u,d/p,p-f),_=N.computeStrides(m),y=[{type:1,data:r},{type:12,data:m},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...pe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],v=C=>{let $=L("input",e[0].dataType,e[0].dims.length),b=L("position_ids",e[1].dataType,e[1].dims.length),T=L("cos_cache",e[2].dataType,e[2].dims.length),x=L("sin_cache",e[3].dataType,e[3].dims.length),E=de("output",e[0].dataType,e[0].dims.length);return C.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${C.declareVariables($,b,T,x,E)}

        ${C.mainStart(ur)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",de("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(m)/ur)},programUniforms:y})}},o_=(e,t)=>{nf(e.inputs,t),e.compute(Vn(e.inputs,t))}}),sf,af,_a,of,u_,Yv=K(()=>{Fe(),ye(),jo(),r_(),a_(),xi(),l_(),ve(),sf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],n=e[1],s=e[2],r=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=i.dims[0],d=i.dims[1],f=i.dims.length===3?o?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],p=d,m=0,_=!n||n.dims.length===0,y=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=y*t.numHeads);let v=r&&r.dims.length!==0,C=a&&a.dims.length!==0;if(v&&r.dims.length===4&&r.dims[0]===u&&r.dims[1]!==t.kvNumHeads&&r.dims[2]===t.kvNumHeads&&r.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(v&&C){if(r.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=r.dims[2]}else if(v||C)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(n&&n.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(i.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,T=!1,x=t.kvNumHeads?y*t.kvNumHeads:f;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(p!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=s.dims[2]}else{if(p!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=s.dims[1]*s.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:y,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},af=Re({perm:[0,2,1,3]}),_a=(e,t,i)=>{let n=t,s=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(n=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize]),n=e.compute(xt(n,af.perm),{inputs:[n],outputs:[-1]})[0]),n},of=(e,t,i,n)=>{let s=7,r=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=L("seq_lens",i.dataType,i.dims),m=L("total_seq_lens",n.dataType,n.dims),_=de("pos_ids",s,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(p,m,_)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:r},getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},u_=(e,t)=>{var x;let i=sf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((x=e.inputs[1])==null?void 0:x.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,r=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=Re({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,f*i.headSize,f*i.headSize]}),[m,_,y]=!s&&!r?e.compute(ao([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,s,r],v,C;if(t.doRotary){let E=e.compute(of(i.batchSize,i.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],z=e.inputs[7],O=e.inputs[8],M=Re({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[m,E,z,O],F=[-1];v=e.compute(Vn(R,M),{inputs:R,outputs:F})[0],R.splice(0,1,_);let le=Re({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});C=e.compute(Vn(R,le),{inputs:R,outputs:F})[0]}let $=Rr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?v:m,void 0,0),b=_a(e,t.doRotary?C:_,i),T=_a(e,y,i);Kr(e,$,b,T,void 0,void 0,a,o,void 0,i,u,d)}}),ya,lf,uf,d_,Xv=K(()=>{ye(),we(),xi(),ve(),ya=(e,t,i,n,s,r,a,o)=>{let u=We(r),d=u===1?"f32":`vec${u}f`,f=u===1?"vec2f":`mat2x${u}f`,p=s*a,m=64;p===1&&(m=256);let _=[s,a,r/u],y=[s,a,2],v=["rank","type","type"],C=[];C.push(...pe(_,y));let $=b=>{let T=L("x",t.dataType,3,u),x=L("scale",i.dataType,i.dims),E=L("bias",n.dataType,n.dims),z=de("output",1,3,2),O=[T,x,E,z];return`
  var<workgroup> workgroup_shared : array<${f}, ${m}>;
  const workgroup_size = ${m}u;
  ${b.declareVariables(...O)}
  ${b.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vi("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${vi("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${m}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:C}),getShaderSource:$},{inputs:[t,i,n],outputs:[-1]})[0]},lf=(e,t,i)=>{let n=t[0].dims,s=n,r=2,a=n[0],o=n[1],u=N.sizeFromDimension(n,r),d=We(u),f=N.size(s)/d,p=ya(e,t[0],t[1],t[2],a,u,o,i.epsilon),m=[a,o,u/d],_=[a,o],y=["type","none"],v=C=>{let $=L("x",t[0].dataType,m.length,d),b=L("scale_shift",1,_.length,2),T=de("output",t[0].dataType,m.length,d),x=[$,b,T];return`
  ${C.registerUniform("output_size","u32").declareVariables(...x)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...pe(m,_,m)]}),getShaderSource:v},{inputs:[t[0],p]})},uf=(e,t,i)=>{let n=t[0].dims,s=n,r=n[0],a=n[n.length-1],o=N.sizeFromDimension(n,1)/a,u=We(a),d=N.size(s)/u,f=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],p=["type","type"],m=!1,_=[0,n.length-1];for(let $=0;$<n.length-2;$++)m=m||n[$+1]!==1,_.push($+1);m=m&&n[n.length-1]!==1;let y=m?e.compute(xt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},($,b)=>n[_[b]])),v=ya(e,y,t[1],t[2],r,o,a,i.epsilon),C=$=>{let b=Qe(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,x=O=>{let M=O===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${b}(${R}(scale.${M}))`;case 2:return`vec2<${b}>(${R}(scale[0].${M}, scale[1].${M}))`;case 4:return`vec4<${b}>(${R}(scale[0].${M}, scale[1].${M}, scale[2].${M}, scale[3].${M}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=L("input",t[0].dataType,t[0].dims,u),z=de("output",t[0].dataType,s,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:C},{inputs:[t[0],v]})},d_=(e,t)=>{t.format==="NHWC"?uf(e,e.inputs,t):lf(e,e.inputs,t)}}),df,cf,c_,Qv=K(()=>{ye(),we(),ve(),df=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},cf=(e,t,i)=>{let n=t.simplified,s=e[0].dims,r=e[1],a=!n&&e[2],o=s,u=N.normalizeAxis(t.axis,s.length),d=N.sizeToDimension(s,u),f=N.sizeFromDimension(s,u),p=N.size(r.dims),m=a?N.size(a.dims):0;if(p!==f||a&&m!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${m}`);let _=[];for(let E=0;E<s.length;++E)E<u?_.push(s[E]):_.push(1);let y=We(f),v=["type","type"],C=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];a&&v.push("type");let $=i>1,b=i>2,T=E=>{let z=Qe(e[0].dataType),O=[L("x",e[0].dataType,e[0].dims,y),L("scale",r.dataType,r.dims,y)];a&&O.push(L("bias",a.dataType,a.dims,y)),O.push(de("output",e[0].dataType,o,y)),$&&O.push(de("mean_data_output",1,_)),b&&O.push(de("inv_std_output",1,_));let M=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(M).declareVariables(...O)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Xa("f32",y)};
    var mean_square_vector = ${Xa("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${er(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vi("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vi("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${er(z,y,"x[j + offset]")};
      let f32scale = ${er(z,y,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${er(z,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:o,dataType:e[0].dataType}];return $&&x.push({dims:_,dataType:1}),b&&x.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${i};${n}`,inputDependencies:v},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:C}),getShaderSource:T}},c_=(e,t)=>{df(e.inputs),e.compute(cf(e.inputs,t,e.outputCount))}}),ff,f_,Jv=K(()=>{we(),Ko(),Zo(),ff=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},f_=e=>{ff(e.inputs);let t=lr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&n<8)e.compute(Go(e.inputs,{activation:""},t));else{let s=t[t.length-2],r=N.size(e.inputs[0].dims.slice(0,-2)),a=N.size(e.inputs[1].dims.slice(0,-2));if(r!==1&&s===1&&a===1){let o=e.inputs[0].reshape([1,r,n]),u=e.inputs[1].reshape([1,n,i]),d=[1,r,i],f=[o,u];e.compute(jn(f,{activation:""},t,d),{inputs:f})}else e.compute(jn(e.inputs,{activation:""},t))}}}),pf,hf,mf,p_,h_,e$=K(()=>{ye(),we(),Fe(),ve(),pf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],n=i.dims.length;if(i.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),r=t.blockSize/8*t.bits,a=e[1];if(!N.areEqual(a.dims,[t.n,s,r]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(N.size(o)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?s:Math.floor((s*t.bits+7)/8));if(N.size(u)!==d)throw new Error("zeroPoints input size error.")}},hf=(e,t)=>{let i=e[0].dims,n=i.length,s=i[n-2],r=t.k,a=t.n,o=i.slice(0,n-2),u=N.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=We(t.k),m=We(d),_=We(a),y=o.concat([s,a]),v=s>1&&a/_%2===0?2:1,C=N.size(y)/_/v,$=64,b=[],T=[u,s,r/p],x=N.convertShape(e[1].dims).slice();x.splice(-1,1,d/m),b.push(...pe(T)),b.push(...pe(x)),b.push(...pe(e[2].dims)),e.length===4&&b.push(...pe(N.convertShape(e[3].dims)));let E=[u,s,a/_];b.push(...pe(E));let z=O=>{let M=T.length,R=L("a",e[0].dataType,M,p),F=L("b",12,x.length,m),le=L("scales",e[2].dataType,e[2].dims.length),ne=[R,F,le],ie=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ie&&ne.push(ie);let $e=E.length,be=de("output",e[0].dataType,$e,_),ee=Qe(e[0].dataType),oe=(()=>{switch(p){case 1:return`array<${ee}, 8>`;case 2:return`mat4x2<${ee}>`;case 4:return`mat2x4<${ee}>`;default:throw new Error(`${p}-component is not supported.`)}})(),X=()=>{let P=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Z=0;Z<_*v;Z++)P+=`
            b_value = ${m===1?`b${Z}_data`:`b${Z}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(re,me)=>`${ee}(b_value_lower[${me}]), ${ee}(b_value_upper[${me}])`).join(", ")});
            b_dequantized_values = ${p===1?`${oe}(${Array.from({length:8},(re,me)=>`(b_quantized_values[${me}] - ${ie?`zero_point${Z}`:"zero_point"}) * scale${Z}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${ie?`zero_point${Z}`:"zero_point"}`).join(",")})) * scale${Z};`};
            workgroup_shared[local_id.x * ${v} + ${Math.floor(Z/_)}]${_>1?`[${Z%_}]`:""} += ${Array.from({length:8/p},(re,me)=>`${p===1?`a_data[${me}] * b_dequantized_values[${me}]`:`dot(a_data[${me}], b_dequantized_values[${me}])`}`).join(" + ")};
          `;return P},fe=()=>{let P=`
            var col_index = col * ${_};
            ${ie?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ee}(8);`}
            `;for(let Z=0;Z<_*v;Z++)P+=`
            let scale${Z} = ${le.getByOffset("col_index * nBlocksPerCol + block")};
            ${ie?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ie.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${ee}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return P},Ee=()=>{let P=`col_index = col * ${_};`;for(let Z=0;Z<_*v;Z++)P+=`
            let b${Z}_data = ${F.getByIndices(`${F.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return P+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,P};return`
        var<workgroup> workgroup_shared: array<${be.type.value}, ${v*$}>;
        ${O.declareVariables(...ne,be)}
        ${O.mainStart([$,1,1])}
          let output_indices = ${be.offsetToIndices(`(global_idx / ${$}) * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${fe()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${Ee()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${X()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${v}) {
            var output_value: ${be.type.value} = ${be.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${v};
            }
            ${be.setByIndices(`${be.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${m};${_};${v};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:C},programUniforms:b}),getShaderSource:z}},mf=(e,t)=>{let i=e[0].dims,n=i.length,s=i[n-2],r=t.k,a=t.n,o=i.slice(0,n-2),u=N.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=We(t.k),m=We(d),_=o.concat([s,a]),y=128,v=a%8===0?8:a%4===0?4:1,C=y/v,$=C*m*8,b=$/p,T=$/t.blockSize,x=N.size(_)/v,E=[],z=[u,s,r/p],O=N.convertShape(e[1].dims).slice();O.splice(-1,1,d/m),E.push(...pe(z)),E.push(...pe(O)),E.push(...pe(e[2].dims)),e.length===4&&E.push(...pe(N.convertShape(e[3].dims)));let M=[u,s,a];E.push(...pe(M));let R=F=>{let le=z.length,ne=L("a",e[0].dataType,le,p),ie=L("b",12,O.length,m),$e=L("scales",e[2].dataType,e[2].dims.length),be=[ne,ie,$e],ee=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ee&&be.push(ee);let oe=M.length,X=de("output",e[0].dataType,oe),fe=Qe(e[0].dataType),Ee=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${fe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${fe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${fe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${fe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ne.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${X.type.value}, ${C}>, ${v}>;
        ${F.declareVariables(...be,X)}
        ${F.mainStart([C,v,1])}
          let output_indices = ${X.offsetToIndices(`workgroup_index * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ne.getByIndices(`${ne.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ne.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${ee?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${fe}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${fe}(8);`}
            let scale = ${$e.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ie.getByIndices(`${ie.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${Ee()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${fe}>(${Array.from({length:4},(P,Z)=>`${fe}(b_value_lower[${Z}]), ${fe}(b_value_upper[${Z}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${fe}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(P,Z)=>`${`dot(a_data${Z}, b_dequantized_values[${Z}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${v}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            for (var b = 0u; b < ${C}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${X.setByIndices(`${X.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${m};${C};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x},programUniforms:E}),getShaderSource:R}},p_=(e,t)=>{pf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(mf(e.inputs,t)):e.compute(hf(e.inputs,t))},h_=e=>Re(e)}),gf,_f,yf,bf,wf,vf,$f,xf,m_,t$=K(()=>{ye(),we(),ve(),gf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_f=(e,t,i)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
            k = i32(${e.indicesGet("indices",s)}) - ${ce("uniforms.pads",s,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ce("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${ce("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},yf=(e,t,i)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ce("uniforms.pads",s,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ce("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ce("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ce("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},bf=(e,t,i)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ce("uniforms.pads",s,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ce("uniforms.x_shape",s,t)})) {
                  k = i32(${ce("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${ce("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},wf=(e,t,i)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ce("uniforms.pads",s,i)};
                if (k < 0)  {
                  k += i32(${ce("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${ce("uniforms.x_shape",s,t)})) {
                  k -= i32(${ce("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${ce("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},vf=(e,t,i)=>{switch(i.mode){case 0:return _f(e,t,i.pads.length);case 1:return yf(e,t,i.pads.length);case 2:return bf(e,t,i.pads.length);case 3:return wf(e,t,i.pads.length);default:throw new Error("Invalid mode")}},$f=(e,t)=>{let i=N.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,s=N.size(i),r=[{type:12,data:s},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&r.push({type:a?e[2].dataType:1,data:t.value}),r.push(...pe(e[0].dims,i));let o=["rank"],u=d=>{let f=de("output",e[0].dataType,i.length),p=L("x",e[0].dataType,n.length),m=p.type.value,_=vf(f,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?m:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(i)/64)},programUniforms:r}),getShaderSource:u}},xf=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,r=new Int32Array(2*s).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)r[Number(o[u])]=Number(i[u]),r[Number(o[u])+s]=Number(i[u+o.length])}else i.forEach((o,u)=>r[Number(u)]=Number(o));let a=[];return r.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},m_=(e,t)=>{gf(e.inputs);let i=xf(e.inputs,t);e.compute($f(e.inputs,i),{inputs:[0]})}}),Cr,ba,wa,va,$a,Cf,Tf,xa,Ca,g_,__,Ta,y_,b_,Sa,w_,v_,$_,x_,i$=K(()=>{It(),ye(),we(),ve(),Cr=e=>{if(Le.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ba=(e,t,i)=>{let n=t.format==="NHWC",s=e.dims.slice();n&&s.splice(1,0,s.pop());let r=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=r?t.dilations.slice():[],d=t.pads.slice();qn.adjustPoolAttributes(i,s,a,o,u,d);let f=qn.computePoolOutputShape(i,s,o,u,a,d,t.autoPad),p=Object.assign({},t);r?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let m=f.slice();return m.push(m.splice(1,1)[0]),[p,n?m:f]},wa=(e,t)=>{let i=t.format==="NHWC",n=N.size(e),s=N.size(t.kernelShape),r=[{type:12,data:n},{type:12,data:s}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);r.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],v=t.pads[t.pads.length/2-2],C=t.pads[t.pads.length-2];m=!!(v+C),r.push({type:12,data:_},{type:12,data:y},{type:12,data:v},{type:12,data:C}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[r,a,!0,p,m]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=N.computeStrides(t.kernelShape);r.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,f)=>d+f);return[r,a,!!u,!1,!1]}},va=(e,t,i,n,s,r,a,o,u,d,f,p)=>{let m=s.format==="NHWC",_=t.type.value,y=de("output",t.type.tensor,n);if(s.kernelShape.length<=2){let v="",C="",$="",b=i-(m?2:1);if(f?v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${r}
                }`:v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${r}
                }`,s.kernelShape.length===2){let T=i-(m?3:2);p?C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${C}
              ${v}
              ${$}
              ${a}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let v=s.kernelShape.length,C=s.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${r}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${r}
            `,`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${v}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${v-1}u; j++) {
                  offsets[j] = offset / ${ce("uniforms.kernelStrides","j",v)};
                  offset -= offsets[j] * ${ce("uniforms.kernelStrides","j",v)};
                }
                offsets[${v-1}] = offset;

                isPad = false;
                for (var j = ${i-v}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ce("uniforms.strides",`j - ${i-v}u`,v)}
                    + offsets[j - ${i-v}u] - ${ce("uniforms.pads","j - 2u",C)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},$a=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Cf=e=>`${$a(e)};${e.countIncludePad}`,Tf=e=>`${$a(e)};${e.storageOrder};${e.dilations}`,xa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ca=(e,t,i,n)=>{let[s,r]=ba(t,n,i),a=L("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";s.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,m,_,y]=wa(r,s);f.push(...pe(t.dims,r));let v=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${y}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:r,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(r)/64)},programUniforms:f}),getShaderSource:C=>va(C,a,t.dims.length,r.length,s,u,d,0,p,m,_,y)}},g_=e=>{let t=e.count_include_pad!==0,i=xa(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...i,cacheKey:""};return{...n,cacheKey:Cf(n)}},__=(e,t)=>{Cr(e.inputs),e.compute(Ca("AveragePool",e.inputs[0],!1,t))},Ta={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},y_=e=>{let t=e.format;return{format:t,...Ta,cacheKey:t}},b_=(e,t)=>{Cr(e.inputs),e.compute(Ca("GlobalAveragePool",e.inputs[0],!0,t))},Sa=(e,t,i,n)=>{let[s,r]=ba(t,n,i),a=`
      value = max(x_val, value);
    `,o="",u=L("x",t.dataType,t.dims.length),d=["rank"],[f,p,m,_,y]=wa(r,s);return f.push(...pe(t.dims,r)),{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(r)/64)},programUniforms:f}),getShaderSource:v=>va(v,u,t.dims.length,r.length,s,a,o,t.dataType===10?-65504:-1e5,p,m,_,y)}},w_=(e,t)=>{Cr(e.inputs),e.compute(Sa("MaxPool",e.inputs[0],!1,t))},v_=e=>{let t=e.storage_order,i=e.dilations,n=xa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:i,...n,cacheKey:""};return{...s,cacheKey:Tf(s)}},$_=e=>{let t=e.format;return{format:t,...Ta,cacheKey:t}},x_=(e,t)=>{Cr(e.inputs),e.compute(Sa("GlobalMaxPool",e.inputs[0],!0,t))}}),Sf,If,C_,T_,r$=K(()=>{ye(),we(),Fe(),ve(),Sf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,n)=>i===e[2].dims[n]).reduce((i,n)=>i&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,r)=>r===t.axis||s===e[0].dims[r]).reduce((s,r)=>s&&r,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/n)||t.blockSize>Math.ceil(i/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},If=(e,t)=>{let i=N.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,s=n===3,r=e[0].dims,a=e[1].dataType,o=N.size(r),u=n===3||n===2,d=u?[Math.ceil(N.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,m=p?u?[Math.ceil(N.size(p.dims)/4)]:p.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,y=_===!1&&f.length===1,v=We(o),C=_&&(!u||v===4),$=C?v:1,b=C&&!u?v:1,T=L("input",u?12:n,d.length,b),x=L("scale",a,f.length),E=p?L("zero_point",u?12:n,m.length):void 0,z=de("output",a,r.length,$),O=[T,x];E&&O.push(E);let M=[d,f];p&&M.push(m);let R=[{type:12,data:o/$},{type:12,data:i},{type:12,data:t.blockSize},...pe(...M,r)],F=le=>{let ne=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${le.registerUniforms(ne).declareVariables(...O,z)}
      ${le.mainStart()}
          ${le.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${x.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?_?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:y?u?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?s?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:F,getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:R})}},C_=(e,t)=>{Sf(e.inputs,t),e.compute(If(e.inputs,t))},T_=e=>Re({axis:e.axis,blockSize:e.blockSize})}),Ef,kf,S_,n$=K(()=>{It(),ye(),ve(),Ef=(e,t,i)=>{let n=e===t,s=e<t&&i<0,r=e>t&&i>0;if(n||s||r)throw new Error("Range these inputs' contents are invalid.")},kf=(e,t,i,n)=>{let s=Math.abs(Math.ceil((t-e)/i)),r=[s],a=s,o=[{type:12,data:a},{type:n,data:e},{type:n,data:i},...pe(r)],u=d=>{let f=de("output",n,r.length),p=f.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(m).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},S_=e=>{let t=0,i=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Le.webgpu.validateInputContent&&Ef(t,i,n),e.compute(kf(t,i,n,e.inputs[0].dataType),{inputs:[]})}}),Af,zf,I_,E_,s$=K(()=>{ye(),we(),Fe(),ve(),Af=(e,t,i,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,r=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${i}));`:`
              ${s}bitcast<${n}>(oldValue) + (${i})${r}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${i}));`:`
                ${s}max(bitcast<f32>(oldValue), (${i}))${r}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${i}));`:`${s}min(bitcast<${n}>(oldValue), (${i}))${r}`;case"mul":return`${s}(bitcast<${n}>(oldValue) * (${i}))${r}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zf=(e,t)=>{let i=e[0].dims,n=e[1].dims,s=i,r=1,a=Math.ceil(N.sizeToDimension(n,n.length-1)/r),o=n[n.length-1],u=N.sizeFromDimension(i,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...pe(e[1].dims,e[2].dims,s)],f=p=>{let m=L("indices",e[1].dataType,e[1].dims.length),_=L("updates",e[2].dataType,e[2].dims.length,r),y=t.reduction!=="none"&&t.reduction!==""?im("output",e[0].dataType,s.length):de("output",e[0].dataType,s.length,r);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Af(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},I_=e=>Re({reduction:e.reduction}),E_=(e,t)=>{e.compute(zf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Of,Rf,Mf,Ia,Bf,Nf,Df,Pf,Uf,Lf,qf,Wf,Ea,jf,Vf,Ff,Hf,Gf,k_,A_,a$=K(()=>{ye(),we(),Fe(),ve(),Of=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Rf=(e,t,i)=>{t.every(s=>s>=0&&s<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(i).fill(1);return t.forEach((s,r)=>n[s]=e[r]),n},Mf=(e,t,i,n,s,r)=>{let[a,o,u]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(f=>r.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&i>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Of(n,t),t.axes.length>0&&Rf(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(f=>s.push(Number(f))),s.length!==0&&s.length!==d&&i>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof s<"u"&&n.length>0&&s.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ia=(e,t,i,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${i}));
  let fract = ${n}(big % (${i})) / ${n}(${i});
  return whole + fract;
`,Bf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ia("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ia("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Nf=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Df=(e,t,i)=>{let n=new Array(i).fill(0).concat(new Array(i).fill(1)),s=e.length===0?n:e.slice();return t.length>0?(t.forEach((r,a)=>{n[r]=s[a],n[a+i]=s[t.length+a]}),n):s},Pf=(e,t,i,n)=>{let s=[];if(i.length>0)if(n.length>0){if(e.forEach(r=>s.push(r)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((r,a)=>s[r]=i[a])}else i.forEach(r=>s.push(r));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((r,a)=>Math.round(r*t[a]))}return s},Uf=(e,t,i)=>{let n=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(r=>t[r]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(r=>t[r]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return i.axes.length>0?(i.axes.forEach(r=>t[r]=n),i.axes.forEach(r=>s[r]=Math.round(e[r]*t[r]))):(t.fill(n,0,t.length),s.forEach((r,a)=>s[a]=Math.round(r*t[a]))),s},Lf=(e,t,i,n,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ce("uniforms.scales","i",n)};
        var roi_low = ${ce("uniforms.roi","i",s)};
        var roi_hi = ${ce("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ce("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,qf=(e,t,i,n,s,r,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ce("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ce("uniforms.roi","i",r)};
          var roi_hi = ${ce("uniforms.roi",`i + ${i.length}`,r)};
          var input_shape_i = ${ce("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Wf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ce("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ea=(e,t,i,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",jf=(e,t,i,n,s)=>{let[r,a,o,u]=i.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${i[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${i[o]} - 1))`)};
      ${Ea(e,u,r,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${i[a]} - 1) || col < 0 || col > (${i[o]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${i[a]} - 1));
      col = max(0, min(col, ${i[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${r}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Vf=(e,t,i,n,s,r,a,o,u,d)=>{let f=i.length===2,[p,m]=f?[0,1]:[2,3],_=e.type.value,y=v=>{let C=v===p?"row":"col";return`
      fn ${C}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",v)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[v]},
        ${n[v]}, ${i[v]}, ${r[v]}, ${r[v]} + ${i.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${i[v]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${C}: ${_} = originalIdx + ${_}(i);
          if (${C} < 0 || ${C} >= ${i[v]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${C} = max(0, min(${C}, ${i[v]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",v,`u32(${C})`)};
          data[i + 1] = ${v===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(p)};
    ${y(m)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ff=(e,t,i,n,s)=>{let[r,a,o,u,d]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${i[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${i[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${i[u]} - 1))`)};
      ${Ea(e,d,r,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${a}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${i[a]} - 1) || height < 0 || height > (${i[o]} - 1) || width < 0 || (width > ${i[u]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${i[a]} - 1));
      height = max(0, min(height, ${i[o]} - 1));
      width = max(0, min(width, ${i[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${r}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Hf=(e,t,i,n,s,r)=>{let a=e.dims,o=Df(r,t.axes,a.length),u=Pf(a,n,s,t.axes),d=n.slice();n.length===0&&(d=a.map((b,T)=>b===0?1:u[T]/b),t.keepAspectRatioPolicy!=="stretch"&&(u=Uf(a,d,t)));let f=de("output",e.dataType,u.length),p=L("input",e.dataType,a.length),m=N.size(u),_=a.length===u.length&&a.every((b,T)=>b===u[T]),y=t.coordinateTransformMode==="tf_crop_and_resize",v=t.extrapolationValue,C=p.type.value,$=b=>`
      ${_?"":`
      ${Bf(t.coordinateTransformMode,C)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Wf(p,a)};
              ${Nf(t.nearestMode,i,C)};
              ${qf(p,f,a,u,d.length,o.length,y)};
              `;case"linear":return`
              ${Lf(f,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${jf(p,f,a,y,v)}`;if(a.length===3||a.length===5)return`${Ff(p,f,a,y,v)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Vf(p,f,a,u,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${s.length>0?s:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:o},...pe(a,u)]})}},Gf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},k_=(e,t)=>{let i=[],n=[],s=[],r=Gf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Mf(e.inputs,t,r,i,n,s),e.compute(Hf(e.inputs[0],t,r,i,n,s),{inputs:[0]})},A_=e=>{let t=e.antialias,i=e.axes,n=e.coordinateTransformMode,s=e.cubicCoeffA,r=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:i,coordinateTransformMode:n,cubicCoeffA:s,excludeOutside:r,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Kf,Zf,z_,o$=K(()=>{ye(),we(),ve(),Kf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],n=e[2];if(t.dataType!==i.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],r=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==r)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},Zf=(e,t,i,n)=>{let s=t.simplified,r=e[0].dims,a=N.size(r),o=r,u=a,d=r.slice(-1)[0],f=n?r.slice(0,-1).concat(1):[],p=!s&&e.length>3,m=e.length>4,_=n&&i>1,y=n&&i>2,v=i>3,C=64,$=We(d),b=[{type:12,data:u},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],T=E=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[L("x",e[0].dataType,e[0].dims,$),L("skip",e[1].dataType,e[1].dims,$),L("gamma",e[2].dataType,e[2].dims,$)];p&&O.push(L("beta",e[3].dataType,e[3].dims,$)),m&&O.push(L("bias",e[4].dataType,e[4].dims,$)),O.push(de("output",e[0].dataType,o,$)),_&&O.push(de("mean_output",1,f)),y&&O.push(de("inv_std_output",1,f)),v&&O.push(de("input_skip_bias_sum",e[0].dataType,o,$));let M=Qe(e[0].dataType),R=Qe(1,$);return`

      ${E.registerUniforms(z).declareVariables(...O)}
      var<workgroup> sum_shared : array<${R}, ${C}>;
      var<workgroup> sum_squared_shared : array<${R}, ${C}>;

      ${E.mainStart([C,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${C};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${C};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${C-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":M+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${v?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${er(M,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${C};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${vi("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vi("square_sum",$)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${M}(mean)`}) *
            ${M}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:o,dataType:e[0].dataType}];return i>1&&x.push({dims:f,dataType:1}),i>2&&x.push({dims:f,dataType:1}),i>3&&x.push({dims:r,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${y};${v}`,inputDependencies:e.map((E,z)=>"type")},getShaderSource:T,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:b})}},z_=(e,t)=>{Kf(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(Zf(e.inputs,t,e.outputCount,!1),{outputs:i})}}),Yf,Tr,Xf,ka,Qf,Jf,O_,R_,l$=K(()=>{ye(),we(),Fe(),ve(),Yf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Tr=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>i.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>i.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},Xf=(e,t)=>{if(e.length>1){let i=Tr(e,1),n=Tr(e,2),s=Tr(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),Re({starts:i,ends:n,axes:s})}else return t},ka=(e,t,i,n,s)=>{let r=e;return e<0&&(r+=i[n[t]]),s[t]<0?Math.max(0,Math.min(r,i[n[t]]-1)):Math.max(0,Math.min(r,i[n[t]]))},Qf=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${ce("uniforms.input_shape","i",i.length)};
            let steps_i = ${ce("uniforms.steps","i",i.length)};
            let signs_i = ${ce("uniforms.signs","i",i.length)};
            let starts_i = ${ce("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Jf=(e,t)=>{let i=e[0].dims,n=N.size(i),s=t.axes.length>0?N.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],r=Tr(e,4);r.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),r.length===0&&(r=Array(s.length).fill(1));let a=t.starts.map(($,b)=>ka($,b,i,s,r)),o=t.ends.map(($,b)=>ka($,b,i,s,r));if(s.length!==a.length||s.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==i.length)for(let $=0;$<i.length;++$)s.includes($)||(a.splice($,0,0),o.splice($,0,i[$]),r.splice($,0,1));let u=r.map($=>Math.sign($));r.forEach(($,b,T)=>{if($<0){let x=(o[b]-a[b])/$,E=a[b],z=E+x*r[b];a[b]=z,o[b]=E,T[b]=-$}});let d=i.slice(0);s.forEach(($,b)=>{d[$]=Math.ceil((o[$]-a[$])/r[$])});let f={dims:d,dataType:e[0].dataType},p=de("output",e[0].dataType,d.length),m=L("input",e[0].dataType,e[0].dims.length),_=N.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:r.length}],v=[{type:12,data:_},{type:12,data:a},{type:6,data:u},{type:12,data:r},...pe(e[0].dims,d)],C=$=>`
      ${$.registerUniforms(y).declareVariables(m,p)}
        ${Qf(m,p,i)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${r.length}`,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:v})}},O_=(e,t)=>{Yf(e.inputs,t);let i=Xf(e.inputs,t);e.compute(Jf(e.inputs,i),{inputs:[0]})},R_=e=>{let t=e.starts,i=e.ends,n=e.axes;return Re({starts:t,ends:i,axes:n})}}),ep,tp,M_,B_,u$=K(()=>{ye(),we(),Fe(),xi(),ve(),ep=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},tp=(e,t)=>{let i=e.inputs[0],n=i.dims,s=N.size(n),r=n.length,a=N.normalizeAxis(t.axis,r),o=a<n.length-1,u,d=[];o?(d=Array.from({length:r},(O,M)=>M),d[a]=r-1,d[r-1]=a,u=e.compute(xt(i,d),{inputs:[i],outputs:[-1]})[0]):u=i;let f=u.dims,p=f[r-1],m=s/p,_=We(p),y=p/_,v=64;m===1&&(v=256);let C=(O,M)=>M===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:M===2?`max(${O}.x, ${O}.y)`:M===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,$=L("x",u.dataType,u.dims,_),b=de("result",u.dataType,u.dims,_),T=$.type.value,x=Qe(u.dataType)==="f32"?`var threadMax = ${T}(-3.402823e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=O=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${v}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables($,b)}
      ${O.mainStart(v)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${v};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${C("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${vi("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${_};${v}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:u.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(xt(z,d),{inputs:[z]})},M_=(e,t)=>{ep(e.inputs),tp(e,t)},B_=e=>Re({axis:e.axis})}),Aa,ip,rp,np,N_,d$=K(()=>{ye(),we(),ve(),Aa=e=>Array.from(e.getBigInt64Array(),Number),ip=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Aa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rp=(e,t)=>{let i=[];for(let n=0;n<e.length;++n)i.push(e[n]*t[n]);return i},np=(e,t)=>{let i=e[0].dims,n=t??Aa(e[1]),s=rp(i,n),r=N.size(s),a=e[0].dataType,o=L("input",a,i.length),u=de("output",a,s.length),d=f=>`
      const inputShape = ${o.indices(...i)};
      ${f.registerUniform("output_size","u32").declareVariables(o,u)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},...pe(e[0].dims,s)]}),getShaderSource:d}},N_=e=>{ip(e.inputs),e.compute(np(e.inputs),{inputs:[0]})}}),sp,ap,D_,c$=K(()=>{ye(),we(),ve(),sp=(e,t,i,n,s)=>{let r=de("output_data",s,i.length,4),a=L("a_data",t[1].dataType,t[1].dims.length,4),o=L("b_data",t[2].dataType,t[2].dims.length,4),u=L("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,m,_)=>`select(${m}, ${p}, ${_})`;if(!n)d=r.setByOffset("global_idx",f(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(m,_,y="")=>{let v=`a_data[index_a${_}][component_a${_}]`,C=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${r.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${a.broadcastedIndicesToOffset(`output_indices${_}`,r)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,r)};
            let offset_c${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,r)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${m}[${_}] = ${y}(${f(v,C,$)});
          `};s===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,o,r)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},ap=e=>{let t=e[1].dims,i=e[2].dims,n=e[0].dims,s=e[1].dataType,r=!(N.areEqual(t,i)&&N.areEqual(i,n)),a=t,o=N.size(t);if(r){let d=lr.calcShape(lr.calcShape(t,i,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=N.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>sp(d,e,a,r,s),getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...pe(n,t,i,a)]})}},D_=e=>{e.compute(ap(e.inputs))}}),P_,f$=K(()=>{Sv(),jo(),Iv(),Ev(),kv(),Av(),zv(),Nv(),Pv(),Uv(),Lv(),qv(),Wv(),jv(),Vv(),Fv(),Hv(),Gv(),Kv(),Zv(),Yv(),Xv(),Qv(),Jv(),e$(),r_(),t$(),i$(),r$(),n$(),s$(),Wo(),a$(),l_(),o$(),l$(),u$(),a_(),d$(),xi(),Vo(),c$(),P_=new Map([["Abs",[zm]],["Acos",[Om]],["Acosh",[Rm]],["Add",[pg]],["ArgMax",[Im,Ja]],["ArgMin",[Sm,Ja]],["Asin",[Mm]],["Asinh",[Bm]],["Atan",[Nm]],["Atanh",[Dm]],["Attention",[Em]],["AveragePool",[__,g_]],["BatchNormalization",[km]],["BiasAdd",[Am]],["BiasSplitGelu",[fg]],["Cast",[Um,Pm]],["Ceil",[qm]],["Clip",[Lm]],["Concat",[xg,Cg]],["Conv",[so,no]],["ConvTranspose",[Mg,Rg]],["Cos",[Wm]],["Cosh",[jm]],["CumSum",[Bg,Ng]],["DepthToSpace",[Dg,Pg]],["DequantizeLinear",[C_,T_]],["Div",[hg]],["Einsum",[Ug,Lg]],["Elu",[Vm,Or]],["Equal",[mg]],["Erf",[Fm]],["Exp",[Hm]],["Expand",[qg]],["FastGelu",[Wg]],["Floor",[Gm]],["FusedConv",[so,no]],["Gather",[Vg,jg]],["GatherElements",[Yg,Zg]],["GatherBlockQuantized",[Gg,Kg]],["GatherND",[Fg,Hg]],["Gelu",[Km]],["Gemm",[Qg,Xg]],["GlobalAveragePool",[b_,y_]],["GlobalMaxPool",[x_,$_]],["Greater",[bg]],["GreaterOrEqual",[vg]],["GridSample",[Jg,e_]],["GroupQueryAttention",[u_]],["HardSigmoid",[ig,tg]],["InstanceNormalization",[d_]],["LayerNormalization",[c_]],["LeakyRelu",[Zm,Or]],["Less",[wg]],["LessOrEqual",[$g]],["Log",[dg]],["MatMul",[f_]],["MatMulNBits",[p_,h_]],["MaxPool",[w_,v_]],["Mul",[gg]],["MultiHeadAttention",[i_,t_]],["Neg",[Xm]],["Not",[Ym]],["Pad",[m_]],["Pow",[_g]],["QuickGelu",[cg,Or]],["Range",[S_]],["Reciprocal",[Qm]],["ReduceMin",[vm]],["ReduceMean",[gm]],["ReduceMax",[wm]],["ReduceSum",[xm]],["ReduceProd",[$m]],["ReduceL1",[_m]],["ReduceL2",[ym]],["ReduceLogSum",[Tm]],["ReduceLogSumExp",[bm]],["ReduceSumSquare",[Cm]],["Relu",[Jm]],["Resize",[k_,A_]],["RotaryEmbedding",[o_]],["ScatterND",[E_,I_]],["Sigmoid",[eg]],["Sin",[rg]],["Sinh",[ng]],["Slice",[O_,R_]],["SkipLayerNormalization",[z_]],["Split",[n_,s_]],["Sqrt",[sg]],["Softmax",[M_,B_]],["Sub",[yg]],["Tan",[ag]],["Tanh",[og]],["ThresholdedRelu",[ug,Or]],["Tile",[N_]],["Transpose",[nm,sm]],["Where",[D_]]])}),U_,p$=K(()=>{It(),li(),ve(),U_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,n,s){Kt(e.programInfo.name);let r=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of i)o.push({binding:o.length,resource:{buffer:d.buffer}});s&&o.push({binding:o.length,resource:s});let u=r.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Nt(e.programInfo.name)}dispose(){}build(e,t){Kt(e.name);let i=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{i.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let s=rm(t,this.backend.device.limits),r=e.getShaderSource(s),a=`${n.join(`
`)}
${s.additionalImplementations}
${r}`,o=i.createShaderModule({code:a,label:e.name});Ie("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=i.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Nt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&i<=s&&n<=s)return[t,i,n];let r=t*i*n,a=Math.ceil(Math.sqrt(r));if(a>s){if(a=Math.ceil(Math.cbrt(r)),a>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),L_={};dr(L_,{WebGpuBackend:()=>q_});var op,lp,up,q_,h$=K(()=>{It(),ye(),li(),Qh(),Cv(),f$(),p$(),op=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let n=0;n<e.length;++n){let s=e[n].dataType;switch(t[n]){case"none":{i.push("");break}case"type":{i.push(`${s}`);break}case"rank":{let r=e[n].dims.length;i.push(`${s};${r}`);break}case"dims":{let r=e[n].dims.join(",");i.push(`${s};${r}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return i.join("|")},lp=(e,t,i)=>{var s,r;let n=e.name;return(s=e.shaderCache)!=null&&s.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+i+`:${op(t,((r=e.shaderCache)==null?void 0:r.inputDependencies)??new Array(t.length).fill("dims"))}`,n},up=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},q_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},s=r=>t.features.has(r)&&i.push(r)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new up(t.info||await t.requestAdapterInfo()),this.gpuDataManager=tm(this),this.programManager=new U_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Po(e.logLevel,!!e.debug),this.device.onuncapturederror=r=>{r.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${r.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Kt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){let r=i[s],a=r.kernelId,o=this.kernels.get(a),u=o.kernelType,d=o.kernelName,f=r.programName,p=r.inputTensorViews,m=r.outputTensorViews,_=t[s*2],y=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let v=Number(_-this.queryTimeBase),C=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(v)||!Number.isSafeInteger(C))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map($=>({dims:$.dims,dataType:ri($.dataType)})),outputsMetadata:m.map($=>({dims:$.dims,dataType:ri($.dataType)})),kernelId:a,kernelType:u,kernelName:d,programName:f,startTime:v,endTime:C});else{let $="";p.forEach((T,x)=>{$+=`input[${x}]: [${T.dims}] | ${ri(T.dataType)}, `});let b="";m.forEach((T,x)=>{b+=`output[${x}]: [${T.dims}] | ${ri(T.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${d}|${f}" ${$}${b}start time: ${v} ns, execution time: ${C-v} ns`)}Pn("GPU",`${f}::${_}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Nt()}run(e,t,i,n,s,r){Kt(e.name);let a=[];for(let b=0;b<t.length;++b){let T=t[b].data;if(T===0)continue;let x=this.gpuDataManager.get(T);if(!x)throw new Error(`no GPU data for input: ${T}`);a.push(x)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),f=i.length===0?o.map((b,T)=>T):i;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],m=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(f[b])||f[b]<-3||f[b]>=r)throw new Error(`Invalid output index: ${f[b]}`);if(f[b]===-3)continue;let T=f[b]===-1,x=f[b]===-2,E=T||x?s(o[b].dataType,o[b].dims):n(f[b],o[b].dataType,o[b].dims);if(p.push(E),E.data===0)continue;let z=this.gpuDataManager.get(E.data);if(!z)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(z),x){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(z)}m.push(z)}if(a.length!==t.length||m.length!==p.length){if(m.length===0)return Nt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,T=[];d.forEach(O=>{let M=typeof O.data=="number"?[O.data]:O.data;if(M.length===0)return;let R=O.type===10?2:4,F,le;O.type===10?(le=M.length>4?16:M.length>2?8:M.length*R,F=M.length>4?16:R*M.length):(le=M.length<=2?M.length*R:16,F=16),b=Math.ceil(b/le)*le,T.push(b);let ne=O.type===10?8:4;b+=M.length>4?Math.ceil(M.length/ne)*F:M.length*R});let x=16;b=Math.ceil(b/x)*x;let E=new ArrayBuffer(b);d.forEach((O,M)=>{let R=T[M],F=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(E,R,F.length).set(F);else if(O.type===12)new Uint32Array(E,R,F.length).set(F);else if(O.type===10)new Uint16Array(E,R,F.length).set(F);else if(O.type===1)new Float32Array(E,R,F.length).set(F);else throw new Error(`Unsupported uniform type: ${ri(O.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,E,0,b),this.gpuDataManager.release(z.id),_={offset:0,size:b,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(u),v=y[1]===1&&y[2]===1,C=lp(e,t,v),$=this.programManager.getArtifact(C);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(C,$),Ie("info",()=>`[artifact] key: ${C}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let T=d[b],x=T.type,E=typeof T.data=="number"?1:T.data.length,[z,O]=$.uniformVariablesInfo[b];if(x!==z||E!==O)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${O}, got type ${x} with size ${E} in program "${$.programInfo.name}".`)}}if(Ie("info",()=>`[ProgramManager] run "${e.name}" (key=${C}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,a,m,y,_),Nt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,n){let s=P_.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let r={kernelType:e,kernelName:n,kernelEntry:s[0],attributes:[s[1],i]};this.kernels.set(t,r)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let s=n.kernelType,r=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${r}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ie("info",()=>`[WebGPU] Start to run kernel "[${s}] ${r}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return i.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${r}" failed. ${d}`)),1}finally{u&&i.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${s}] ${r}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,n){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let r=s.get(t),a=this.gpuDataManager.registerExternalBuffer(i,n,r);return s.set(t,[a,i]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let n=await Ya(this,e,t);return Uo(n.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ie("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ie("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ie("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let n=0;n<i;n++){let s=this.getComputePassEncoder(),r=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(r.computePipeline),s.setBindGroup(0,r.bindGroup),s.dispatchWorkgroups(...r.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),W_={};dr(W_,{init:()=>j_});var Cn,dp,j_,m$=K(()=>{ye(),li(),we(),xv(),Cn=class V_{constructor(t,i,n,s){this.module=t,this.dataType=i,this.data=n,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(N.size(t)!==N.size(this.dims))throw new Error("Invalid new shape");return new V_(this.module,this.dataType,this.data,t)}},dp=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,s=i/e.PTR_SIZE,r=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*s++,r));let a=Number(e.getValue(n*s++,r));this.outputCount=Number(e.getValue(n*s++,r)),this.customDataOffset=Number(e.getValue(n*s++,"*")),this.customDataSize=Number(e.getValue(n*s++,r));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(n*s++,r)),f=Number(e.getValue(n*s++,"*")),p=Number(e.getValue(n*s++,r)),m=[];for(let _=0;_<p;_++)m.push(Number(e.getValue(n*s++,r)));o.push(new Cn(e,d,f,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let i=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],s=(o,u,d)=>new Cn(this.module,u,this.output(o,d),d),r=(o,u)=>{let d=Di(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new Cn(this.module,o,f,u)};return this.backend.run(e,i,n,s,r,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let n=this.module.PTR_SIZE,s=n===4?"i32":"i64",r=this.module.stackAlloc((1+t.length)*n);this.module.setValue(r,t.length,s);for(let a=0;a<t.length;a++)this.module.setValue(r+n*(a+1),t[a],s);return this.module._JsepOutput(this.opKernelContext,e,r)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(i)}}},j_=async(e,t,i,n)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let r=(h$(),Gr(L_)).WebGpuBackend,a=new r;await a.initialize(i,n),s("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,f=!1)=>{if(f)Ie("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{Ie("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),p)}},async(o,u,d)=>{Ie("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,f)=>{Ie("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new dp(t,a,Number(u));return a.computeKernel(Number(o),p,f)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let r=new em(i);s("webnn",[r,()=>r.reserveTensorId(),a=>r.releaseTensorId(a),async(a,o,u,d,f)=>r.ensureTensor(a,o,u,d,f),(a,o)=>{r.uploadTensor(a,o)},async(a,o)=>r.downloadTensor(a,o),(a,o)=>r.registerMLContext(a,o),!!i.trace])}}}),cp,Yo,Xo,pi,fp,za,Fn,Qo,Jo,Oa,el,tl,il,F_=K(()=>{It(),wv(),vv(),ye(),Gi(),Mo(),Kh(),cp=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Me("Can't initialize onnxruntime.")},Yo=async e=>{cp(e.wasm.numThreads,Ln(e.logLevel))},Xo=async(e,t)=>{var n,s;(s=(n=Pe()).asyncInit)==null||s.call(n);let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let r=e.webgpu.powerPreference;if(r!==void 0&&r!=="low-power"&&r!=="high-performance")throw new Error(`Invalid powerPreference setting: "${r}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:r,forceFallbackAdapter:a}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let r=(m$(),Gr(W_)).init;t==="webgpu"&&await r("webgpu",Pe(),e,i),t==="webnn"&&await r("webnn",Pe(),e)}},pi=new Map,fp=e=>{let t=Pe(),i=t.stackSave();try{let n=t.PTR_SIZE,s=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,s,s+n)!==0&&Me("Can't get session input/output count.");let r=n===4?"i32":"i64";return[Number(t.getValue(s,r)),Number(t.getValue(s+n,r))]}finally{t.stackRestore(i)}},za=(e,t)=>{let i=Pe(),n=i.stackSave(),s=0;try{let r=i.PTR_SIZE,a=i.stackAlloc(2*r);i._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&Me("Can't get session input/output metadata.");let o=Number(i.getValue(a,"*"));s=Number(i.getValue(a+r,"*"));let u=i.HEAP32[s/4];if(u===0)return[o,0];let d=i.HEAPU32[s/4+1],f=[];for(let p=0;p<d;p++){let m=Number(i.getValue(s+8+p*r,"*"));f.push(m!==0?i.UTF8ToString(m):Number(i.getValue(s+8+(p+d)*r,"*")))}return[o,u,f]}finally{i.stackRestore(n),s!==0&&i._OrtFree(s)}},Fn=e=>{let t=Pe(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},Qo=async(e,t)=>{var p,m,_,y;let i,n,s=Pe();Array.isArray(e)?[i,n]=e:e.buffer===s.HEAPU8.buffer?[i,n]=[e.byteOffset,e.byteLength]:[i,n]=Fn(e);let r=0,a=0,o=0,u=[],d=[],f=[];try{if([a,u]=await Gh(t),(t==null?void 0:t.externalData)&&s.mountExternalData){let M=[];for(let R of t.externalData){let F=typeof R=="string"?R:R.path;M.push(Do(typeof R=="string"?R:R.data).then(le=>{s.mountExternalData(F,le)}))}await Promise.all(M)}for(let M of(t==null?void 0:t.executionProviders)??[])if((typeof M=="string"?M:M.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof M!="string"){let R=M,F=R==null?void 0:R.context,le=R==null?void 0:R.gpuDevice,ne=R==null?void 0:R.deviceType,ie=R==null?void 0:R.powerPreference;F?s.currentContext=F:le?s.currentContext=await s.webnnCreateMLContext(le):s.currentContext=await s.webnnCreateMLContext({deviceType:ne,powerPreference:ie})}else s.currentContext=await s.webnnCreateMLContext();break}r=await s._OrtCreateSession(i,n,a),(p=s.webgpuOnCreateSession)==null||p.call(s,r),r===0&&Me("Can't create a session."),(m=s.jsepOnCreateSession)==null||m.call(s),s.currentContext&&(s.webnnRegisterMLContext(r,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[v,C]=fp(r),$=!!(t!=null&&t.enableGraphCapture),b=[],T=[],x=[],E=[],z=[];for(let M=0;M<v;M++){let[R,F,le]=za(r,M);R===0&&Me("Can't get an input name."),d.push(R);let ne=s.UTF8ToString(R);b.push(ne),x.push(F===0?{name:ne,isTensor:!1}:{name:ne,isTensor:!0,type:ri(F),shape:le})}for(let M=0;M<C;M++){let[R,F,le]=za(r,M+v);R===0&&Me("Can't get an output name."),f.push(R);let ne=s.UTF8ToString(R);T.push(ne),E.push(F===0?{name:ne,isTensor:!1}:{name:ne,isTensor:!0,type:ri(F),shape:le});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let ie=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[ne])??"cpu",$e=s.webnnIsGraphOutput;if(ie==="cpu"&&$e&&$e(r,ne)){z.push("ml-tensor-cpu-output");continue}if(ie!=="cpu"&&ie!=="cpu-pinned"&&ie!=="gpu-buffer"&&ie!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ie}.`);if($&&ie!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ie}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(ie)}}let O=null;return z.some(M=>M==="gpu-buffer"||M==="ml-tensor"||M==="ml-tensor-cpu-output")&&(o=s._OrtCreateBinding(r),o===0&&Me("Can't create IO binding."),O={handle:o,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map(M=>M==="ml-tensor-cpu-output"?"ml-tensor":M).map(M=>Ka(M))}),pi.set(r,[r,d,f,O,$,!1]),[r,b,T,x,E]}catch(v){throw d.forEach(C=>s._OrtFree(C)),f.forEach(C=>s._OrtFree(C)),o!==0&&s._OrtReleaseBinding(o)!==0&&Me("Can't release IO binding."),r!==0&&s._OrtReleaseSession(r)!==0&&Me("Can't release session."),v}finally{s._free(i),a!==0&&s._OrtReleaseSessionOptions(a)!==0&&Me("Can't release session options."),u.forEach(v=>s._free(v)),(y=s.unmountExternalData)==null||y.call(s)}},Jo=e=>{var u,d,f;let t=Pe(),i=pi.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,s,r,a,o]=i;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&Me("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Me("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),s.forEach(p=>t._OrtFree(p)),r.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&Me("Can't release session."),pi.delete(e)},Oa=async(e,t,i,n,s,r,a=!1)=>{if(!e){t.push(0);return}let o=Pe(),u=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],m=p,_,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${r} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;y=Di(Ni(d),f);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(n,r,$,y)}}else if(p==="ml-tensor"){let $=e[2].mlTensor;y=Di(Ni(d),f);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(n,$,Ni(d),f)}else{let $=e[2];if(Array.isArray($)){y=u*$.length,_=o._malloc(y),i.push(_);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(_+b*u,Rt($[b],i),"*")}}else{let b=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&b&&T){let x=o.UTF8ToString(s);if(b(n,x)||T(n,x)){let E=Ni(d);y=Di(E,f),m="ml-tensor";let z=o.webnnCreateTemporaryTensor,O=o.webnnUploadTensor;if(!z||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let M=await z(n,E,f);O(M,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),_=M}else y=$.byteLength,_=o._malloc(y),i.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}else y=$.byteLength,_=o._malloc(y),i.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}}let v=o.stackSave(),C=o.stackAlloc(4*f.length);try{f.forEach((b,T)=>o.setValue(C+T*u,b,u===4?"i32":"i64"));let $=o._OrtCreateTensor(Ni(d),_,y,C,f.length,Ka(m));$===0&&Me(`Can't create tensor for input/output. session=${n}, index=${r}.`),t.push($)}finally{o.stackRestore(v)}},el=async(e,t,i,n,s,r)=>{var le,ne,ie,$e;let a=Pe(),o=a.PTR_SIZE,u=pi.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],f=u[1],p=u[2],m=u[3],_=u[4],y=u[5],v=t.length,C=n.length,$=0,b=[],T=[],x=[],E=[],z=a.stackSave(),O=a.stackAlloc(v*o),M=a.stackAlloc(v*o),R=a.stackAlloc(C*o),F=a.stackAlloc(C*o);try{[$,b]=Hh(r),qi("wasm prepareInputOutputTensor");for(let X=0;X<v;X++)await Oa(i[X],T,E,e,f[t[X]],t[X],_);for(let X=0;X<C;X++)await Oa(s[X],x,E,e,p[n[X]],v+n[X],_);Wi("wasm prepareInputOutputTensor");for(let X=0;X<v;X++)a.setValue(O+X*o,T[X],"*"),a.setValue(M+X*o,f[t[X]],"*");for(let X=0;X<C;X++)a.setValue(R+X*o,x[X],"*"),a.setValue(F+X*o,p[n[X]],"*");if(m&&!y){let{handle:X,outputPreferredLocations:fe,outputPreferredLocationsEncoded:Ee}=m;if(f.length!==v)throw new Error(`input count from feeds (${v}) is expected to be always equal to model's input count (${f.length}).`);qi("wasm bindInputsOutputs");for(let P=0;P<v;P++){let Z=t[P];await a._OrtBindInput(X,f[Z],T[P])!==0&&Me(`Can't bind input[${P}] for session=${e}.`)}for(let P=0;P<C;P++){let Z=n[P];(le=s[P])!=null&&le[3]?a._OrtBindOutput(X,p[Z],x[P],0)!==0&&Me(`Can't bind pre-allocated output[${P}] for session=${e}.`):a._OrtBindOutput(X,p[Z],0,Ee[Z])!==0&&Me(`Can't bind output[${P}] to ${fe[P]} for session=${e}.`)}Wi("wasm bindInputsOutputs"),pi.set(e,[d,f,p,m,_,!0])}(ne=a.jsepOnRunStart)==null||ne.call(a,d),(ie=a.webnnOnRunStart)==null||ie.call(a,d);let be;m?be=await a._OrtRunWithBinding(d,m.handle,C,R,$):be=await a._OrtRun(d,M,O,v,F,C,R,$),be!==0&&Me("failed to call OrtRun().");let ee=[],oe=[];qi("wasm ProcessOutputTensor");for(let X=0;X<C;X++){let fe=Number(a.getValue(R+X*o,"*"));if(fe===x[X]){ee.push(s[X]);continue}let Ee=a.stackSave(),P=a.stackAlloc(4*o),Z=!1,re,me=0;try{a._OrtGetTensorData(fe,P,P+o,P+2*o,P+3*o)!==0&&Me(`Can't access output tensor data on index ${X}.`);let He=o===4?"i32":"i64",it=Number(a.getValue(P,He));me=a.getValue(P+o,"*");let W=a.getValue(P+o*2,"*"),ke=Number(a.getValue(P+o*3,He)),rt=[];for(let I=0;I<ke;I++)rt.push(Number(a.getValue(W+I*o,He)));a._OrtFree(W)!==0&&Me("Can't free memory for tensor dims.");let Ge=rt.reduce((I,k)=>I*k,1);re=ri(it);let Pt=m==null?void 0:m.outputPreferredLocations[n[X]];if(re==="string"){if(Pt==="gpu-buffer"||Pt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let I=[];for(let k=0;k<Ge;k++){let D=a.getValue(me+k*o,"*"),V=a.getValue(me+(k+1)*o,"*"),j=k===Ge-1?void 0:V-D;I.push(a.UTF8ToString(D,j))}ee.push([re,rt,I,"cpu"])}else if(Pt==="gpu-buffer"&&Ge>0){let I=a.jsepGetBuffer;if(!I)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let k=I(me),D=Di(it,Ge);if(D===void 0||!Bo(re))throw new Error(`Unsupported data type: ${re}`);Z=!0,ee.push([re,rt,{gpuBuffer:k,download:a.jsepCreateDownloader(k,D,re),dispose:()=>{a._OrtReleaseTensor(fe)!==0&&Me("Can't release tensor.")}},"gpu-buffer"])}else if(Pt==="ml-tensor"&&Ge>0){let I=a.webnnEnsureTensor,k=a.webnnIsGraphInputOutputTypeSupported;if(!I||!k)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Di(it,Ge)===void 0||!No(re))throw new Error(`Unsupported data type: ${re}`);if(!k(e,re,!1))throw new Error(`preferredLocation "ml-tensor" for ${re} output is not supported by current WebNN Context.`);let D=await I(e,me,it,rt,!1);Z=!0,ee.push([re,rt,{mlTensor:D,download:a.webnnCreateMLTensorDownloader(me,re),dispose:()=>{a.webnnReleaseTensorId(me),a._OrtReleaseTensor(fe)}},"ml-tensor"])}else if(Pt==="ml-tensor-cpu-output"&&Ge>0){let I=a.webnnCreateMLTensorDownloader(me,re)(),k=ee.length;Z=!0,oe.push((async()=>{let D=[k,await I];return a.webnnReleaseTensorId(me),a._OrtReleaseTensor(fe),D})()),ee.push([re,rt,[],"cpu"])}else{let I=rs(re),k=new I(Ge);new Uint8Array(k.buffer,k.byteOffset,k.byteLength).set(a.HEAPU8.subarray(me,me+k.byteLength)),ee.push([re,rt,k,"cpu"])}}finally{a.stackRestore(Ee),re==="string"&&me&&a._free(me),Z||a._OrtReleaseTensor(fe)}}m&&!_&&(a._OrtClearBoundOutputs(m.handle)!==0&&Me("Can't clear bound outputs."),pi.set(e,[d,f,p,m,_,!1]));for(let[X,fe]of await Promise.all(oe))ee[X][2]=fe;return Wi("wasm ProcessOutputTensor"),ee}finally{($e=a.webnnOnRunEnd)==null||$e.call(a,d),a.stackRestore(z),T.forEach(be=>a._OrtReleaseTensor(be)),x.forEach(be=>a._OrtReleaseTensor(be)),E.forEach(be=>a._free(be)),$!==0&&a._OrtReleaseRunOptions($),b.forEach(be=>a._free(be))}},tl=e=>{let t=Pe(),i=pi.get(e);if(!i)throw new Error("invalid session id");let n=i[0],s=t._OrtEndProfiling(n);s===0&&Me("Can't get an profile file name."),t._OrtFree(s)},il=e=>{let t=[];for(let i of e){let n=i[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),hi,ht,Xi,Sr,Ir,Tn,Ra,Sn,Ai,zi,pp,H_,G_,K_,Z_,Y_,X_,Q_,J_=K(()=>{It(),F_(),Gi(),Oo(),hi=()=>!!Le.wasm.proxy&&typeof document<"u",Xi=!1,Sr=!1,Ir=!1,Sn=new Map,Ai=(e,t)=>{let i=Sn.get(e);i?i.push(t):Sn.set(e,[t])},zi=()=>{if(Xi||!Sr||Ir||!ht)throw new Error("worker not ready")},pp=e=>{switch(e.data.type){case"init-wasm":Xi=!1,e.data.err?(Ir=!0,Ra[1](e.data.err)):(Sr=!0,Ra[0]()),Tn&&(URL.revokeObjectURL(Tn),Tn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Sn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},H_=async()=>{if(!Sr){if(Xi)throw new Error("multiple calls to 'initWasm()' detected.");if(Ir)throw new Error("previous call to 'initWasm()' failed.");if(Xi=!0,hi())return new Promise((e,t)=>{ht==null||ht.terminate(),Vh().then(([i,n])=>{try{ht=n,ht.onerror=r=>t(r),ht.onmessage=pp,Ra=[e,t];let s={type:"init-wasm",in:Le};!s.in.wasm.wasmPaths&&(i||Ga)&&(s.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href}),ht.postMessage(s),Tn=i}catch(s){t(s)}},t)});try{await Ro(Le.wasm),await Yo(Le),Sr=!0}catch(e){throw Ir=!0,e}finally{Xi=!1}}},G_=async e=>{if(hi())return zi(),new Promise((t,i)=>{Ai("init-ep",[t,i]);let n={type:"init-ep",in:{epName:e,env:Le}};ht.postMessage(n)});await Xo(Le,e)},K_=async e=>hi()?(zi(),new Promise((t,i)=>{Ai("copy-from",[t,i]);let n={type:"copy-from",in:{buffer:e}};ht.postMessage(n,[e.buffer])})):Fn(e),Z_=async(e,t)=>{if(hi()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zi(),new Promise((i,n)=>{Ai("create",[i,n]);let s={type:"create",in:{model:e,options:{...t}}},r=[];e instanceof Uint8Array&&r.push(e.buffer),ht.postMessage(s,r)})}else return Qo(e,t)},Y_=async e=>{if(hi())return zi(),new Promise((t,i)=>{Ai("release",[t,i]);let n={type:"release",in:e};ht.postMessage(n)});Jo(e)},X_=async(e,t,i,n,s,r)=>{if(hi()){if(i.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return zi(),new Promise((a,o)=>{Ai("run",[a,o]);let u=i,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:r}};ht.postMessage(d,il(u))})}else return el(e,t,i,n,s,r)},Q_=async e=>{if(hi())return zi(),new Promise((t,i)=>{Ai("end-profiling",[t,i]);let n={type:"end-profiling",in:e};ht.postMessage(n)});tl(e)}}),Ma,hp,ey,g$=K(()=>{It(),J_(),ye(),zo(),Kh(),Ma=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},hp=e=>{switch(e[3]){case"cpu":return new Mt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Bo(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:n,dispose:s}=e[2];return Mt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:n,dispose:s})}case"ml-tensor":{let t=e[0];if(!No(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:n,dispose:s}=e[2];return Mt.fromMLTensor(i,{dataType:t,dims:e[1],download:n,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},ey=class{async fetchModelAndCopyToWasmMemory(e){return K_(await Do(e))}async loadModel(e,t){Kt();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Z_(i,t),Nt()}async dispose(){return Y_(this.sessionId)}async run(e,t,i){Kt();let n=[],s=[];Object.entries(e).forEach(p=>{let m=p[0],_=p[1],y=this.inputNames.indexOf(m);if(y===-1)throw new Error(`invalid input '${m}'`);n.push(_),s.push(y)});let r=[],a=[];Object.entries(t).forEach(p=>{let m=p[0],_=p[1],y=this.outputNames.indexOf(m);if(y===-1)throw new Error(`invalid output '${m}'`);r.push(_),a.push(y)});let o=n.map((p,m)=>Ma(p,()=>`input "${this.inputNames[s[m]]}"`)),u=r.map((p,m)=>p?Ma(p,()=>`output "${this.outputNames[a[m]]}"`):null),d=await X_(this.sessionId,s,o,a,u,i),f={};for(let p=0;p<d.length;p++)f[this.outputNames[a[p]]]=r[p]??hp(d[p]);return Nt(),f}startProfiling(){}endProfiling(){Q_(this.sessionId)}}}),ty={};dr(ty,{OnnxruntimeWebAssemblyBackend:()=>lo,initializeFlags:()=>oo,wasmBackend:()=>iy});var oo,lo,iy,_$=K(()=>{It(),J_(),g$(),oo=()=>{(typeof Le.wasm.initTimeout!="number"||Le.wasm.initTimeout<0)&&(Le.wasm.initTimeout=0);let e=Le.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Le.wasm.simd=!1),typeof Le.wasm.proxy!="boolean"&&(Le.wasm.proxy=!1),typeof Le.wasm.trace!="boolean"&&(Le.wasm.trace=!1),typeof Le.wasm.numThreads!="number"||!Number.isInteger(Le.wasm.numThreads)||Le.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Le.wasm.numThreads=1;else{let t=typeof navigator>"u"?iv("node:os").cpus().length:navigator.hardwareConcurrency;Le.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},lo=class{async init(e){oo(),await H_(),await G_(e)}async createInferenceSessionHandler(e,t){let i=new ey;return await i.loadModel(e,t),i}},iy=new lo});It();It();It();var y$="1.23.2";{let e=(_$(),Gr(ty)).wasmBackend;Ji("webgpu",e,5),Ji("webnn",e,5),Ji("cpu",e,10),Ji("wasm",e,10)}Object.defineProperty(Le.versions,"web",{value:y$,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b$="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,!?'",w$=64,v$=128,$$=256,x$=4,C$=4,T$={chars:b$,seqLen:w$,hiddenSize:v$,intermediateSize:$$,numLayers:x$,numHeads:C$};class S${constructor(){this.session=null,this.config=T$,this.chars=this.config.chars,this.vocabSize=this.chars.length+1,this.seqLen=this.config.seqLen,this.unkId=this.chars.length,this.charToId={},this.idToChar={},[...this.chars].forEach((t,i)=>{this.charToId[t]=i,this.idToChar[i]=t}),this.idToChar[this.unkId]="#"}async init(){try{const t=(await Qw(async()=>{const{default:i}=await import("./model-95ldszAo.js");return{default:i}},[],import.meta.url)).default;console.log("Loading model from:",t),this.session=await Ao.create(t,{executionProviders:["wasm"]})}catch(t){throw console.error("Failed to load model.onnx:",t),new Error(`Could not load ONNX model: ${t.message}`)}return!0}async predict(t){if(!this.session)throw new Error("Poet not initialized");const i=this.seqLen,n=new Int32Array(i).fill(this.unkId);for(let d=0;d<Math.min(t.length,i);d++){const f=t[d];n[d]=this.charToId[f]!==void 0?this.charToId[f]:this.unkId}const s=BigInt64Array.from(n,d=>BigInt(d)),r=new Mt("int64",s,[1,i]),o=(await this.session.run({input_ids:r})).logits.data;let u="";for(let d=0;d<i;d++){if(d===0){u+=this.idToChar[n[d]]||"";continue}const f=(d-1)*this.vocabSize;let p=-1/0,m=0;for(let _=0;_<this.vocabSize;_++){const y=o[f+_];y>p&&(p=y,m=_)}u+=this.idToChar[m]||""}return u}}const I$=""+new URL("type-C9Z3ofy3.mp3",import.meta.url).href,E$=(e,t)=>{const i=e.__vccOpts||e;for(const[n,s]of t)i[n]=s;return i},k$={class:"container"},A$=["onMouseover","onTouchstart","data-index"],z$=30,Oi=40,mp=20,Er=6,O$={__name:"App",setup(e){const t=new S$,i=fn(""),n=fn(!1),s=fn("Initializing..."),r=new Audio(I$);r.volume=.4,r.preservesPitch=!1;let a=0,o=0;const u=()=>{const C=Date.now();if(a>0&&C-o>z$){const $=Math.min(1,a*.01),b=Math.random()*.2+.8,T=$*b;r.volume=T,r.playbackRate=.98+Math.random()*.04,r.currentTime=0,o=C+Math.random()*10,a=0}},d=Oi*mp;let f="#".repeat(d);const p=fn(new Array(d).fill(0)),m=t.seqLen-Er;let _=0;const y=async()=>{try{for(let R=0;R<d;R++){let F=.01;R>0&&(F+=(p.value[R-1]-p.value[R])*.1),R<d-1&&(F+=(p.value[R+1]-p.value[R])*.1),p.value[R]+=F}let C="";for(let R=0;R<d;R++)p.value[R]>1&&(p.value[R]=1),Math.random()>p.value[R]+1-.1?C+="#":C+=f[R];let $=0,b=0,T=-1;for(let R=0;R<d;R++)C[R]==="#"&&$++,R>=m&&C[R-m]==="#"&&$--,R>=m-1&&$>T&&(T=$,b=R-m+1);T==0&&(b=_,_+=5,_>d-m&&(_=0),_<0&&(_=d-m));let x=b-Er,E="";for(;x<0;)x++,E+=" ";let z=E+C.slice(x,b+m);for(;z.length<t.seqLen;)z+=" ";const O=(await t.predict(z)).slice(Er,Er+m);b=Math.max(0,Math.min(b,f.length-m));let M="";for(let R=0;R<m;R++){if(z[R+Er]!=="#"&&Math.random()<.5){M+=f[b+R];continue}O[R]!=="#"?(M+=O[R],O[R]!==f[b+R]&&(p.value[b+R]=0,a++)):M+=f[b+R]}u(),f=f.slice(0,b)+M+f.slice(b+m),i.value=f}catch(C){s.value="Inference Error: "+C.message}n.value||setTimeout(y,0)},v=C=>{const $=C.touches[0],b=document.elementFromPoint($.clientX,$.clientY),T=b==null?void 0:b.getAttribute("data-index");T!==null&&(p.value[Number(T)]=-1)};return Xp(async()=>{try{await t.init(),s.value="Ready",y()}catch(C){s.value="Error: "+C.message}}),Qp(()=>{n.value=!0}),(C,$)=>(Ms(),Bs("div",k$,[Mi("div",{class:"poem-grid",onTouchmove:Vw(v,["prevent"])},[(Ms(),Bs(Tt,null,cu(mp,b=>Mi("div",{key:b,class:"row"},[(Ms(),Bs(Tt,null,cu(Oi,T=>Mi("span",{onMouseover:x=>p.value[(b-1)*Oi+(T-1)]=-1,onTouchstart:x=>p.value[(b-1)*Oi+(T-1)]=-1,"data-index":(b-1)*Oi+(T-1),key:T,class:"char",style:Yn({opacity:p.value[(b-1)*Oi+(T-1)]+.1})},Ba(i.value[(b-1)*Oi+(T-1)]),45,A$)),64))])),64))],32),$[0]||($[0]=Mi("br",null,null,-1)),Mi("div",{class:Xn(["status",{error:s.value.startsWith("Error")}])}," Status: "+Ba(s.value),3)]))}},R$=E$(O$,[["__scopeId","data-v-a85eabfb"]]);Gw(R$).mount("#app");
