import{r as o}from"./react-998f5f97.js";var v=Object.defineProperty,m=Object.defineProperties,O=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))h.call(r,t)&&l(e,t,r[t]);return e},w=(e,r)=>m(e,O(r));function d(e,r,t){if(!e)return;if(t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){const a=d(n,r,t);if(a)return a;n=r?null:n.sibling}}function f(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}const s=f(o.createContext(null));class E extends o.Component{render(){return o.createElement(s.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:_,ReactCurrentDispatcher:p}=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(){const e=o.useContext(s);if(e===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const r=o.useId();return o.useMemo(()=>{var n;return(n=_==null?void 0:_.current)!=null?n:d(e,!1,a=>{let u=a.memoizedState;for(;u;){if(u.memoizedState===r)return!0;u=u.next}})},[e,r])}function x(){var e,r;const t=b(),[n]=o.useState(()=>new Map);n.clear();let a=t;for(;a;){const u=(e=a.type)==null?void 0:e._context;u&&u!==s&&!n.has(u)&&n.set(u,(r=p==null?void 0:p.current)==null?void 0:r.readContext(f(u))),a=a.return}return n}function C(){const e=x();return o.useMemo(()=>Array.from(e.keys()).reduce((r,t)=>n=>o.createElement(r,null,o.createElement(t.Provider,w(c({},n),{value:e.get(t)}))),r=>o.createElement(E,c({},r))),[e])}export{E as F,C as u};
