import{_ as N,u as I,b as M,z as B,e as V,M as F}from"../../index-Bc8KTUFY.js";import"./index-1uZLR3Pf.js";import{I as U}from"./Input-BK3q4YWU.js";import{_ as j,F as z}from"./index-BWkNam7s.js";import{b as v,r as A,A as D,L as _,M as u,V as a,Y as r,u as t,j as n,Q as m}from"./vue-chunks-BakLQ6XW.js";import{_ as E}from"./index-Dj1z1bv1.js";import{_ as G}from"./index-CtJO5TQi.js";import"./dayjs--xR4C_bb.js";import"./axios-Cm0UX6qg.js";import"./qs-nPXSgJGS.js";import"./crypto-js-KGFlroD9.js";import"./FormItemContext-YfSm8opW.js";import"./index-DHA8PT5X.js";import"./Search-ah3Lvub8.js";import"./SearchOutlined-V-OxLGfe.js";import"./inputProps-FEkMEdZt.js";import"./TextArea-BhzicizE.js";import"./index-rw2zoXGZ.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./Password-CbUwh_lR.js";import"./colors-CICyRGaE.js";import"./responsiveObserve-CMJawdf-.js";import"./collapseMotion-0mJ0KE5h.js";import"./index-BROQp6fJ.js";import"./QuestionCircleOutlined-C838eyOB.js";const L={class:"enterprise-set"},O={class:"page-title"},Q={class:"enterprise-box"},T={class:"content-label"},Y={class:"content-name"},q={key:0},H={key:1,class:"gray-text"},J={__name:"index",setup(K){const{t:e}=M(),p=I(),c=v(()=>p.name),f=v(()=>p.id),d=()=>{p.getCompanyInfo()};d();const i=A(!1),o=D({name:"",id:""}),h=()=>{o.name=c.value,o.id=f.value,i.value=!0},y=()=>{B({...o}).then(g=>{V.success(e("common.saveSuccess")),d();let s=document.title.split("Chatwiki");document.title=s[0]+"Chatwiki "+o.name,i.value=!1})};return(g,s)=>{const x=E,C=G,S=U,b=j,w=z,k=F;return _(),u("div",L,[a("div",O,r(t(e)("views.user.enterprise.enterpriseSettings")),1),a("div",Q,[n(x,{align:"center"},{default:m(()=>[a("div",T,r(t(e)("views.user.enterprise.systemName"))+"：",1),a("div",Y,[c.value?(_(),u("span",q,r(c.value),1)):(_(),u("span",H,r(t(e)("views.user.enterprise.notSetTip")),1))]),a("a",{class:"edit-btn",onClick:h},r(t(e)("common.change")),1)]),_:1})]),n(C),n(k,{open:i.value,"onUpdate:open":s[1]||(s[1]=l=>i.value=l),title:t(e)("views.user.enterprise.SetSystemName"),onOk:y},{default:m(()=>[n(w,{class:"form-box"},{default:m(()=>[n(b,{label:t(e)("views.user.enterprise.systemName")},{default:m(()=>[n(S,{maxlength:15,value:o.name,"onUpdate:value":s[0]||(s[0]=l=>o.name=l),placeholder:t(e)("views.user.enterprise.enterName")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["open","title"])])}}},ge=N(J,[["__scopeId","data-v-c1d70fb3"]]);export{ge as default};
