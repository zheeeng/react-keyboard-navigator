import{R as w,r as c,j as F}from"./index-c2f48b1e.js";var Y=Object.defineProperty,ee=Object.defineProperties,te=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&K(e,r,t[r]);if(D)for(var r of D(t))B.call(t,r)&&K(e,r,t[r]);return e},Z=(e,t)=>ee(e,te(t)),J=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&D)for(var n of D(e))t.indexOf(n)<0&&B.call(e,n)&&(r[n]=e[n]);return r},U=e=>{const t=c.useRef(null);return c.useLayoutEffect(()=>{t.current=e}),c.useCallback((...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])},ne=e=>()=>e(),W=e=>{const t=c.useRef(e);return c.useLayoutEffect(()=>{t.current=e}),c.useCallback(()=>t.current,[])},re=({x:e,y:t,width:r,height:n},a)=>{switch(a){case"center":return[e+r/2,t+n/2];case"left-edge":return[e,t+n/2];case"right-edge":return[e+r,t+n/2];case"top-edge":return[e+r/2,t];case"bottom-edge":return[e+r/2,t+n];case"top-right-corner":return[e+r,t];case"top-left-corner":return[e,t];case"bottom-right-corner":return[e+r,t+n];case"bottom-left-corner":return[e,t+n]}};function S(e,t,r){const n=Math.min(t,r),s=Math.max(t,r)-n+1,o=(e-n)%s;return o<0?o+s+n:o+n}function ae(e,t,r){const{x:n,y:a}=e,s=t.map(o=>[o,o.x-n,o.y-a]).map(([o,i,l])=>[o,r*(Math.round((Math.atan2(l,i)*360/Math.PI+900)*10)/10%720),Math.sqrt(i*i+l*l)]).filter(([,,o])=>o>0);return o=>s.filter(([,i])=>i>=720*o-720&&i<720*o).map(([i,l,v])=>[i,l/r/2,v])}function oe(e,t,r){switch(r){case"Distance":return e;case"Secant":return Math.abs(e/Math.cos(Math.PI*t/180));case"Cosine":return Math.abs(e*Math.cos(Math.PI*t/180));case"Sine":return Math.abs(e*Math.sin(Math.PI*t/180));case"Tangent":return Math.abs(e*Math.tan(Math.PI*t/180));default:{if(typeof r=="function"){const n=r(e,t);if(typeof n=="number")return n}throw new Error("Invalid strategy")}}}function se(e,t,r){return r.map(([n,a,s])=>[n,a,s,oe(s,a-t,e)]).sort(([,n,a,s],[,o,i,l])=>s!==l?s-l:a!==i?a-i:n-o).map(([n])=>n)}var k=["UP","UP_RIGHT","RIGHT","DOWN_RIGHT","DOWN","DOWN_LEFT","LEFT","UP_LEFT"],H=16,z=H/2,R=H/4,j=Array.from({length:z}).map((e,t)=>t);function ce(e,t,r){const n=ae(t,r,H);return a=>{const s=k.indexOf(a);if(s===-1)throw new Error(`directionGroupName is not valid: ${a}`);const o=j.reduce((v,u)=>{const p=S(s*2-R+u,0,H-1),_=j.map(E=>S(s+E+R+1,0,z-1));return!(()=>{const E=u<R?R-u-1:u-R,d=Math.min(u,R);return _.slice(d,d+E)})().some(E=>e[k[E]])?v.concat(n(p+1)):v},[]),i=e[a],l=360*s/k.length;return i?se(i,l,o):[]}}function ie(e){return typeof e=="object"&&e!==null}function M(e,t){return Object.keys(e).reduce((r,n)=>(r[n]=t(e[n],n),r),{})}function ue(e){return!(!ie(e)||!("key"in e)||typeof(e==null?void 0:e.key)!="string"||!("strategy"in e)||typeof e.strategy!="string"&&typeof e.strategy!="function")}var le="Secant";function I(e,t){return M(e,(r,n)=>{var a,s;return typeof r=="string"?{key:r,strategy:(a=t(n))!=null?a:le}:ue(r)?{key:r.key,strategy:(s=t(n,r.strategy))!=null?s:r.strategy}:void 0})}var L={distance:(e,t=!1)=>I(e,(r,n)=>t?n??"Distance":"Distance"),secant:(e,t=!1)=>I(e,(r,n)=>t?n??"Secant":"Secant"),cosine:(e,t=!1)=>I(e,(r,n)=>t?n??"Cosine":"Cosine"),sine:(e,t=!1)=>I(e,(r,n)=>t?n??"Sine":"Sine"),tangent:(e,t=!1)=>I(e,(r,n)=>t?n??"Tangent":"Tangent")},fe={UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},ve={UP:"W",DOWN:"S",LEFT:"A",RIGHT:"D"},de={UP:"I",DOWN:"k",LEFT:"J",RIGHT:"L"},me={UP:"K",DOWN:"J",LEFT:"H",RIGHT:"L"},pe={UP_LEFT:"7",UP:"8",UP_RIGHT:"9",LEFT:"4",RIGHT:"6",DOWN_LEFT:"1",DOWN:"2",DOWN_RIGHT:"3"},Ee={ArrowDirectionMap:M(L,e=>e(fe)),WASDDirectionMap:M(L,e=>e(ve)),IJKLDirectionMap:M(L,e=>e(de)),HJKLDirectionMap:M(L,e=>e(me)),NumPadDirectionMap:M(L,e=>e(pe))},ge={preventDefault:e=>{e.preventDefault()},stopPropagation:e=>{e.stopPropagation()},stopImmediatePropagation:e=>{e.stopImmediatePropagation()},stopOnActiveInputElement:()=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return!1},stopOnActiveInputElementAndPreventDefault:e=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return!1;e.preventDefault()}},_e=ne(()=>new Object),C=new WeakMap,Le=({directionMap:e=Ee.ArrowDirectionMap.secant,eventCallback:t=ge.stopOnActiveInputElementAndPreventDefault,didChange:r=()=>{},rootContainer:n}={})=>{const[{elementManageBoardRegistry:a,activeActionRegistry:s}]=c.useState(()=>({elementManageBoardRegistry:new Map,activeActionRegistry:new Map})),[o]=c.useState(()=>{const v=_e();return C.set(v,{registerBoard:(u,p)=>(a.set(u,p),()=>a.delete(u)),registerElement:(u,p)=>(s.set(u,p),()=>s.delete(u))}),v}),i=W(e),l=U(r);return c.useEffect(()=>{function v(u){var p,_,h;const O=u.key,E=L.secant(i(),!0),d=Object.keys(E).find(f=>{var N;return((N=E[f])==null?void 0:N.key)===O});switch(d){case"UP":case"DOWN":case"LEFT":case"RIGHT":case"UP_LEFT":case"UP_RIGHT":case"DOWN_LEFT":break;default:return}const A=(p=Array.from(a.entries()).filter(([,f])=>f()).map(([f])=>f)[0])!=null?p:n;if(!A)return;const b=Array.from(s.entries()).filter(([f])=>A.contains(f)).map(([f,N])=>{const[X,V]=N(),[Q,$]=re(f.getBoundingClientRect(),"center");return{element:f,active:X,setActive:V,x:Q,y:$}}),y=b.find(f=>f.active);if(!y)return;const m=b.filter(f=>!f.active),g=ce(M(E,f=>f==null?void 0:f.strategy),y,m),P=y.element,T=(_=g(d)[0])==null?void 0:_.element;if(!T)return;const q={fromElement:P,toElement:T};(t==null?void 0:t(u,q))!==!1&&(y.setActive(!1),(h=g(d)[0])==null||h.setActive(!0),l(P,T))}return document.body.addEventListener("keydown",v),()=>{document.body.removeEventListener("keydown",v)}},[s,e,a,t,i,l,n]),{markRef:o}},ye=(e,t)=>{var r;const{registerElement:n}=(r=c.useMemo(()=>C.get(e),[e]))!=null?r:{},a=c.useRef();return c.useEffect(()=>a.current?n==null?void 0:n(a.current,t):void 0,[t,a,n]),a},Me=(e,t)=>{var r;const{registerBoard:n}=(r=c.useMemo(()=>C.get(e),[e]))!=null?r:{},a=c.useRef();return c.useEffect(()=>a.current?n==null?void 0:n(a.current,t):void 0,[a,t,n]),a},Ae=e=>{const[t,r]=c.useState();return c.useEffect(()=>{t&&e(...t)},[e,t]),c.useCallback((...a)=>r(a),[])},be=w.memo(w.forwardRef(function(t,r){var n=t,{markRef:a,active:s=!1,onActiveChange:o=()=>{},as:i}=n,l=J(n,["markRef","active","onActiveChange","as"]);const v=W([s,o]),u=ye(a,v);return c.useImperativeHandle(r,()=>u.current),F.jsx(i,Z(G({},l),{ref:u}))}));be.displayName="KeyboardNavigatorElement";var Pe=w.memo(w.forwardRef(function(t,r){var n=t,{markRef:a,as:s,active:o,autoActive:i,onAutoActiveChange:l,initialActive:v=!1}=n,u=J(n,["markRef","as","active","autoActive","onAutoActiveChange","initialActive"]);const p=c.useMemo(()=>o!==void 0?!1:i??!0,[o,i]),[_,h]=c.useState(v),O=c.useMemo(()=>o!==void 0?o:_,[o,_]),E=W(O),d=Me(a,E),A=U(m=>{h(m),l==null||l(m)});c.useImperativeHandle(r,()=>d.current);const b=U(m=>{var g;d.current===m||(g=d.current)!=null&&g.contains(m)?A(!0):A(!1)}),y=Ae(()=>{document.activeElement instanceof HTMLElement&&b(document.activeElement)});return c.useEffect(()=>{if(!p)return;function m(P){const T=P.target;T instanceof HTMLElement&&b(T)}function g(P){P.key!=="Tab"&&y()}return document.body.addEventListener("click",m),document.body.addEventListener("focus",m),document.body.addEventListener("keydown",g),()=>{document.body.removeEventListener("click",m),document.body.removeEventListener("focus",m),document.body.removeEventListener("keydown",g)}},[d,p,b,y,A]),F.jsx(s,Z(G({},u),{ref:d}))}));Pe.displayName="KeyboardNavigatorBoard";export{Pe as K,be as a,Le as u};