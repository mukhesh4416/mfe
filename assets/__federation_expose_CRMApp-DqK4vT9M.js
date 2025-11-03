import{importShared as d}from"./__federation_fn_import-BWWYUG6M.js";var x={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function j(){if(p)return i;p=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(s,r,t){var u=null;if(t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),"key"in r){t={};for(var a in r)a!=="key"&&(t[a]=r[a])}else t=r;return r=t.ref,{$$typeof:e,type:s,key:u,ref:r!==void 0?r:null,props:t}}return i.Fragment=o,i.jsx=n,i.jsxs=n,i}var v;function S(){return v||(v=1,x.exports=j()),x.exports}var c=S();const{useState:m,useEffect:_}=await d("react");function $(e,o){const[n,s]=m(()=>{try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):o}catch(r){return console.error(`useLocalStorage: Error reading key "${e}":`,r),o}});return _(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.error(`useLocalStorage: Error setting key "${e}":`,r)}},[e,n]),[n,s]}var R={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function h(){if(E)return l;E=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(s,r,t){var u=null;if(t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),"key"in r){t={};for(var a in r)a!=="key"&&(t[a]=r[a])}else t=r;return r=t.ref,{$$typeof:e,type:s,key:u,ref:r!==void 0?r:null,props:t}}return l.Fragment=o,l.jsx=n,l.jsxs=n,l}var f;function k(){return f||(f=1,R.exports=h()),R.exports}var J=k();await d("react");function T({count:e=0}){return J.jsxs("h3",{children:["Count : ",e]})}const C=await d("react"),{useState:q}=C;function A(){const[e,o]=$("flag",!0),[n,s]=q(0),r=()=>{console.log(e),o(!e),s(t=>t+1)};return c.jsxs(c.Fragment,{children:[c.jsx("h6",{children:"CRM"}),c.jsx(T,{count:n}),c.jsx("button",{onClick:()=>{r()},children:"Click"})]})}export{A as default,c as j};
