import{V as E,W as X,aZ as M,X as I,Y as L,am as _,$ as P,a5 as x,aI as G,aa as T,ar as j}from"../../index-Bc8KTUFY.js";import{e as A,s as B,w as H,o as R,j as r,i as N,l as O}from"./vue-chunks-BakLQ6XW.js";function V(n,e,c){var t=c||{},i=t.noTrailing,m=i===void 0?!1:i,b=t.noLeading,$=b===void 0?!1:b,y=t.debounceMode,a=y===void 0?void 0:y,o,g=!1,f=0;function D(){o&&clearTimeout(o)}function z(d){var v=d||{},p=v.upcomingOnly,h=p===void 0?!1:p;D(),g=!h}function S(){for(var d=arguments.length,v=new Array(d),p=0;p<d;p++)v[p]=arguments[p];var h=this,l=Date.now()-f;if(g)return;function u(){f=Date.now(),e.apply(h,v)}function s(){o=void 0}!$&&a&&!o&&u(),D(),a===void 0&&l>n?$?(f=Date.now(),m||(o=setTimeout(a?s:u,n))):u():m!==!0&&(o=setTimeout(a?s:u,a===void 0?n-l:n))}return S.cancel=z,S}function F(n,e,c){var t=c||{},i=t.atBegin,m=i===void 0?!1:i;return V(n,e,{debounceMode:m!==!1})}const K=new M("antSpinMove",{to:{opacity:1}}),U=new M("antRotate",{to:{transform:"rotate(405deg)"}}),W=n=>({[`${n.componentCls}`]:I(I({},L(n)),{position:"absolute",display:"none",color:n.colorPrimary,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${n.motionDurationSlow} ${n.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${n.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:n.contentHeight,[`${n.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-n.spinDotSize/2},[`${n.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(n.spinDotSize-n.fontSize)/2+2,textShadow:`0 1px 2px ${n.colorBgContainer}`},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSize/2)-10},"&-sm":{[`${n.componentCls}-dot`]:{margin:-n.spinDotSizeSM/2},[`${n.componentCls}-text`]:{paddingTop:(n.spinDotSizeSM-n.fontSize)/2+2},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSizeSM/2)-10}},"&-lg":{[`${n.componentCls}-dot`]:{margin:-(n.spinDotSizeLG/2)},[`${n.componentCls}-text`]:{paddingTop:(n.spinDotSizeLG-n.fontSize)/2+2},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSizeLG/2)-10}}},[`${n.componentCls}-container`]:{position:"relative",transition:`opacity ${n.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:n.colorBgContainer,opacity:0,transition:`all ${n.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${n.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:n.spinDotDefault},[`${n.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:n.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(n.spinDotSize-n.marginXXS/2)/2,height:(n.spinDotSize-n.marginXXS/2)/2,backgroundColor:n.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:K,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:U,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${n.componentCls}-dot`]:{fontSize:n.spinDotSizeSM,i:{width:(n.spinDotSizeSM-n.marginXXS/2)/2,height:(n.spinDotSizeSM-n.marginXXS/2)/2}},[`&-lg ${n.componentCls}-dot`]:{fontSize:n.spinDotSizeLG,i:{width:(n.spinDotSizeLG-n.marginXXS)/2,height:(n.spinDotSizeLG-n.marginXXS)/2}},[`&${n.componentCls}-show-text ${n.componentCls}-text`]:{display:"block"}})}),Y=E("Spin",n=>{const e=X(n,{spinDotDefault:n.colorTextDescription,spinDotSize:n.controlHeightLG/2,spinDotSizeSM:n.controlHeightLG*.35,spinDotSizeLG:n.controlHeight});return[W(e)]},{contentHeight:400});var Z=function(n,e){var c={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(c[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(c[t[i]]=n[t[i]]);return c};const q=()=>({prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:T.any,delay:Number,indicator:T.any});let C=null;function J(n,e){return!!n&&!!e&&!isNaN(Number(e))}function Q(n){const e=n.indicator;C=typeof e=="function"?e:()=>r(e,null,null)}const w=A({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:_(q(),{size:"default",spinning:!0,wrapperClassName:""}),setup(n,e){let{attrs:c,slots:t}=e;const{prefixCls:i,size:m,direction:b}=P("spin",n),[$,y]=Y(i),a=B(n.spinning&&!J(n.spinning,n.delay));let o;return H([()=>n.spinning,()=>n.delay],()=>{o==null||o.cancel(),o=F(n.delay,()=>{a.value=n.spinning}),o==null||o()},{immediate:!0,flush:"post"}),R(()=>{o==null||o.cancel()}),()=>{var g,f;const{class:D}=c,z=Z(c,["class"]),{tip:S=(g=t.tip)===null||g===void 0?void 0:g.call(t)}=n,d=(f=t.default)===null||f===void 0?void 0:f.call(t),v={[y.value]:!0,[i.value]:!0,[`${i.value}-sm`]:m.value==="small",[`${i.value}-lg`]:m.value==="large",[`${i.value}-spinning`]:a.value,[`${i.value}-show-text`]:!!S,[`${i.value}-rtl`]:b.value==="rtl",[D]:!!D};function p(l){const u=`${l}-dot`;let s=j(t,n,"indicator");return s===null?null:(Array.isArray(s)&&(s=s.length===1?s[0]:s),N(s)?O(s,{class:u}):C&&N(C())?O(C(),{class:u}):r("span",{class:`${u} ${l}-dot-spin`},[r("i",{class:`${l}-dot-item`},null),r("i",{class:`${l}-dot-item`},null),r("i",{class:`${l}-dot-item`},null),r("i",{class:`${l}-dot-item`},null)]))}const h=r("div",x(x({},z),{},{class:v,"aria-live":"polite","aria-busy":a.value}),[p(i.value),S?r("div",{class:`${i.value}-text`},[S]):null]);if(d&&G(d).length){const l={[`${i.value}-container`]:!0,[`${i.value}-blur`]:a.value};return $(r("div",{class:[`${i.value}-nested-loading`,n.wrapperClassName,y.value]},[a.value&&r("div",{key:"loading"},[h]),r("div",{class:l,key:"container"},[d])]))}return $(h)}}});w.setDefaultIndicator=Q;w.install=function(n){return n.component(w.name,w),n};export{w as S};
