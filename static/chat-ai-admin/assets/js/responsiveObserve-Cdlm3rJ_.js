import{bW as W,bz as T,bH as A,bX as H,W as E}from"../../index-pGVpQMA0.js";import{b as R}from"./vue-chunks-XeeYQ2kA.js";var k=/\s/;function z(e){for(var r=e.length;r--&&k.test(e.charAt(r)););return r}var C=/^\s+/;function N(e){return e&&e.slice(0,z(e)+1).replace(C,"")}var L=NaN,j=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,_=/^0o[0-7]+$/i,q=parseInt;function $(e){if(typeof e=="number")return e;if(W(e))return L;if(T(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=T(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=N(e);var t=B.test(e);return t||_.test(e)?q(e.slice(2),t?2:8):j.test(e)?L:+e}var v=function(){return A.Date.now()},D="Expected a function",F=Math.max,Q=Math.min;function J(e,r,t){var d,u,s,a,n,c,f=0,x=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(D);r=$(r)||0,T(t)&&(x=!!t.leading,m="maxWait"in t,s=m?F($(t.maxWait)||0,r):s,p="trailing"in t?!!t.trailing:p);function b(i){var o=d,l=u;return d=u=void 0,f=i,a=e.apply(l,o),a}function X(i){return f=i,n=setTimeout(h,r),x?b(i):a}function w(i){var o=i-c,l=i-f,I=r-o;return m?Q(I,s-l):I}function y(i){var o=i-c,l=i-f;return c===void 0||o>=r||o<0||m&&l>=s}function h(){var i=v();if(y(i))return M(i);n=setTimeout(h,w(i))}function M(i){return n=void 0,p&&d?b(i):(d=u=void 0,a)}function O(){n!==void 0&&clearTimeout(n),f=0,d=c=u=n=void 0}function S(){return n===void 0?a:M(v())}function g(){var i=v(),o=y(i);if(d=arguments,u=this,c=i,o){if(n===void 0)return X(c);if(m)return clearTimeout(n),n=setTimeout(h,r),b(c)}return n===void 0&&(n=setTimeout(h,r)),a}return g.cancel=O,g.flush=S,g}const K=["xxxl","xxl","xl","lg","md","sm","xs"],U=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`,xxxl:`{min-width: ${e.screenXXXL}px}`});function V(){const[,e]=H();return R(()=>{const r=U(e.value),t=new Map;let d=-1,u={};return{matchHandlers:{},dispatch(s){return u=s,t.forEach(a=>a(u)),t.size>=1},subscribe(s){return t.size||this.register(),d+=1,t.set(d,s),s(u),d},unsubscribe(s){t.delete(s),t.size||this.unregister()},unregister(){Object.keys(r).forEach(s=>{const a=r[s],n=this.matchHandlers[a];n==null||n.mql.removeListener(n==null?void 0:n.listener)}),t.clear()},register(){Object.keys(r).forEach(s=>{const a=r[s],n=f=>{let{matches:x}=f;this.dispatch(E(E({},u),{[s]:x}))},c=window.matchMedia(a);c.addListener(n),this.matchHandlers[a]={mql:c,listener:n},n(c)})},responsiveMap:r}})}export{J as d,K as r,$ as t,V as u};
