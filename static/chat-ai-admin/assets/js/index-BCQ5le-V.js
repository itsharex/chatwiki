import{ae as y,af as S,aB as _,a3 as d,aC as w,T as B,ac as T,at as k,ag as D,a8 as N,a9 as x,aj as z,aa as A,ax as $,aD as b}from"../../index-B7hMzf9q.js";import{g as I,t as W,_ as j,a as E}from"./index-fgx08nOg.js";import{P as H}from"./colors-AwmC3pbR.js";import{e as M,r as R,b as F,j as f,F as L}from"./vue-chunks-DrvJJrR0.js";const O=e=>{const{componentCls:o,popoverBg:r,popoverColor:t,width:a,fontWeightStrong:s,popoverPadding:l,boxShadowSecondary:c,colorTextHeading:g,borderRadiusLG:u,zIndexPopup:p,marginXS:m,colorBgElevated:n}=e;return[{[o]:d(d({},w(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":n,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:a,marginBottom:m,color:g,fontWeight:s},[`${o}-inner-content`]:{color:t}})},I(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",[`${o}-content`]:{display:"inline-block"}}}]},G=e=>{const{componentCls:o}=e;return{[o]:H.map(r=>{const t=e[`${r}-6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},V=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:a,paddingSM:s,controlHeight:l,fontSize:c,lineHeight:g,padding:u}=e,p=l-Math.round(c*g),m=p/2,n=p/2-r,i=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${m}px ${i}px ${n}px`,borderBottom:`${r}px ${t} ${a}`},[`${o}-inner-content`]:{padding:`${s}px ${i}px`}}}},X=y("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,a=S(e,{popoverBg:o,popoverColor:r,popoverPadding:12});return[O(a),G(a),t&&V(a),_(a,"zoom-big")]},e=>{let{zIndexPopupBase:o}=e;return{zIndexPopup:o+30,width:177}}),Z=()=>d(d({},E()),{content:$(),title:$()}),q=M({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:T(Z(),d(d({},W()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,o){let{expose:r,slots:t,attrs:a}=o;const s=R();k(e.visible===void 0),r({getPopupDomNode:()=>{var n,i;return(i=(n=s.value)===null||n===void 0?void 0:n.getPopupDomNode)===null||i===void 0?void 0:i.call(n)}});const{prefixCls:l,configProvider:c}=D("popover",e),[g,u]=X(l),p=F(()=>c.getPrefixCls()),m=()=>{var n,i;const{title:v=b((n=t.title)===null||n===void 0?void 0:n.call(t)),content:h=b((i=t.content)===null||i===void 0?void 0:i.call(t))}=e,C=!!(Array.isArray(v)?v.length:v),P=!!(Array.isArray(h)?h.length:v);return!C&&!P?null:f(L,null,[C&&f("div",{class:`${l.value}-title`},[v]),f("div",{class:`${l.value}-inner-content`},[h])])};return()=>{const n=N(e.overlayClassName,u.value);return g(f(j,x(x(x({},A(e,["title","content"])),a),{},{prefixCls:l.value,ref:s,overlayClassName:n,transitionName:z(p.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:m,default:t.default}))}}}),K=B(q);export{K as _};
