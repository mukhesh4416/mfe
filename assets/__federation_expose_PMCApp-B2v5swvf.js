import{importShared as d}from"./__federation_fn_import-BWWYUG6M.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v;function j(){if(v)return a;v=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function n(o,t,r){var u=null;if(r!==void 0&&(u=""+r),t.key!==void 0&&(u=""+t.key),"key"in t){r={};for(var s in t)s!=="key"&&(r[s]=t[s])}else r=t;return t=r.ref,{$$typeof:e,type:o,key:u,ref:t!==void 0?t:null,props:r}}return a.Fragment=i,a.jsx=n,a.jsxs=n,a}var p;function k(){return p||(p=1,c.exports=j()),c.exports}var R=k();const{useState:q,useEffect:S}=await d("react");var l={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function _(){if(E)return x;E=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function n(o,t,r){var u=null;if(r!==void 0&&(u=""+r),t.key!==void 0&&(u=""+t.key),"key"in t){r={};for(var s in t)s!=="key"&&(r[s]=t[s])}else r=t;return t=r.ref,{$$typeof:e,type:o,key:u,ref:t!==void 0?t:null,props:r}}return x.Fragment=i,x.jsx=n,x.jsxs=n,x}var f;function m(){return f||(f=1,l.exports=_()),l.exports}var T=m();await d("react");function $({count:e=0}){return T.jsxs("h3",{children:["Count : ",e]})}const J=await d("react"),{useState:h}=J;function A(){const[e,i]=h(0),n=()=>{i(o=>o+2)};return R.jsxs(R.Fragment,{children:[R.jsx("button",{onClick:()=>{n()},children:"Click"}),R.jsx($,{count:e})]})}export{A as default,R as j};
