import{a0 as N,b as m,r as I,w as q,a5 as T,L as o,M as l,V as s,F as M,a1 as V,a2 as A,j as t,Q as c,X as S,Y as h,P as g,v as H,B as K,u as y,a6 as Q,a7 as W,a8 as R,A as F,U,a9 as X,W as D}from"./vue-chunks-XeeYQ2kA.js";import{L as Y,a as G}from"./locale-dropdown-26APNKQk.js";import{_ as b,a as P,b as J,R as Z,c as ee,r as te,d as oe,M as se}from"../../index-pGVpQMA0.js";import{_ as ae,B as re}from"./index-BgRQl0SV.js";import{_ as ne,M as le}from"./index-Cxpqycif.js";import"./index-DkJY3DLr.js";import{D as ce}from"./dropdown-CkB_t3kv.js";import{v as _e}from"./validate-CYzfr11z.js";import{F as E,_ as ie}from"./index-BlZhlPki.js";import{_ as ue}from"./index-DzAksAsu.js";import{_ as pe}from"./Password-BTEAOcTM.js";import"./index-BPzZ8HYg.js";import"./dayjs-oAino27R.js";import"./axios-Cm0UX6qg.js";import"./qs-DfimNey5.js";import"./crypto-js-CuiFEUvY.js";import"./DownOutlined-C8Q6Kr-5.js";import"./shallowequal-Da0otATl.js";import"./colors-DCZEizLq.js";import"./collapseMotion-Bep1tU8X.js";import"./slide-D6W0LxJh.js";import"./index-Bruf23Oc.js";import"./index-zLXV6DVR.js";import"./Dropdown-CcwauEi-.js";import"./RightOutlined-DJ2Olgkf.js";import"./move-jqhYINnj.js";import"./Input-BpoOlxnx.js";import"./FormItemContext-Da_jkx0v.js";import"./index-Z11VoXTE.js";import"./inputProps-DZRcc7xF.js";import"./responsiveObserve-Cdlm3rJ_.js";import"./QuestionCircleOutlined-C6hYQFmR.js";import"./Search-CpOmfbSY.js";import"./SearchOutlined-C_Q6hh1x.js";import"./TextArea-DvqYUUpc.js";const de={class:"navbar-wrapper"},me={class:"navbar"},ve={__name:"layout-navbar",setup(f){const e=N(),a=m(()=>e.meta.activeMenu||""),_=m(()=>e.path.split("/")[1]),i=I([{key:"robot",label:"robot",title:"机器人管理",path:"/robot/list"},{key:"library",label:"library",title:"知识库管理",path:"/library/list"},{key:"user",label:"user",title:"系统管理",path:"/user/model"}]);return q(()=>e.path,()=>{},{immediate:!0}),(d,r)=>{const n=T("router-link");return o(),l("div",de,[s("div",me,[(o(!0),l(M,null,V(i.value,u=>(o(),l("div",{class:A(["nav-menu",{active:u.key===_.value||u.key===a.value}]),key:u.key},[t(n,{to:u.path,class:"nav-menu-name"},{default:c(()=>[S(h(u.title),1)]),_:2},1032,["to"])],2))),128))])])}}},fe=b(ve,[["__scopeId","data-v-f4acc127"]]),he={class:"layout-breadcrumb"},ye={key:1,class:"page-title"},be={__name:"layout-breadcrumb",props:{title:{type:[String,Boolean],default:""},items:{type:[Array,Boolean],default:()=>[]}},setup(f){const e=f;return(a,_)=>{const i=T("router-link"),d=ae,r=re;return o(),l("div",he,[e.items.length>0?(o(),g(r,{key:0},{default:c(()=>[(o(!0),l(M,null,V(e.items,(n,u)=>(o(),l(M,{key:n.title},[u!==e.items.length-1?(o(),g(d,{key:0},{default:c(()=>[t(i,{to:n.path},{default:c(()=>[S(h(n.title),1)]),_:2},1032,["to"])]),_:2},1024)):(o(),g(d,{key:1},{default:c(()=>[S(h(n.title),1)]),_:2},1024))],64))),128))]),_:1})):(o(),l("div",ye,h(e.title),1))])}}},we=b(be,[["__scopeId","data-v-c69a461d"]]),ke={class:"layout-footer"},ge={class:"copyright-text"},xe={__name:"layout-footer",setup(f){const e=P(),{t:a}=J(),_=I(null);return H(()=>{_.value=setInterval(()=>{setTimeout(()=>{e.refreshToken()},0)},Z)}),K(()=>{clearInterval(_.value),_.value=null}),(i,d)=>(o(),l("div",ke,[s("div",ge,h(y(a)("common.copyright")),1)]))}},$e=b(xe,[["__scopeId","data-v-ab337acb"]]),Ie={key:0,class:"user-dropdown"},Pe=["src"],Ce={class:"user-name"},Me={__name:"user-dropdown",setup(f){const e=P(),{userInfo:a,avatar:_,user_name:i}=Q(e),d=()=>{e.logoutConfirm(!0)};return(r,n)=>{const u=ee,w=ne,v=le,x=ce;return y(a)?(o(),l("div",Ie,[t(x,null,{overlay:c(()=>[t(v,null,{default:c(()=>[t(w,null,{default:c(()=>[s("a",{href:"javascript:;",onClick:d},"退出登录")]),_:1})]),_:1})]),default:c(()=>[s("div",{class:"user-dropdown-link",onClick:n[0]||(n[0]=W(()=>{},["prevent"]))},[s("img",{class:"user-avatar",src:y(_),alt:""},null,8,Pe),s("span",Ce,h(y(i)),1),t(u,{name:"arrow-down",style:{"font-size":"16px",color:"#8c8c8c"}})])]),_:1})])):R("",!0)}}},Se=b(Me,[["__scopeId","data-v-a80b4e62"]]),Re={class:"form-box"},Te={__name:"reset-password",setup(f,{expose:e}){const a=P(),_=E.useForm,i=I(!0),d=I("重置登录密码"),r=F({password:"",check_password:"",id:a.userInfo.user_id}),n=F({password:[{message:"请输入登录密码",required:!0},{validator:async(C,p)=>!_e(p)&&p?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(C,p)=>p!=r.password&&p?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:u,validate:w,validateInfos:v}=_(r,n),x=()=>{w().then(()=>{te({...X(r)}).then(C=>{oe.success("修改成功"),i.value=!1,a.reset(!0)})})},$=()=>{a.setResetPassModal()};return e({open}),(C,p)=>{const j=ue,B=pe,L=ie,O=E,z=se;return o(),l("div",null,[t(z,{open:i.value,"onUpdate:open":p[2]||(p[2]=k=>i.value=k),title:d.value,onOk:x,width:"520px",onCancel:$},{default:c(()=>[t(j,{class:"alert-box",message:"您还未修改初始密码，为了保障您的数据安全，请您尽快重置密码。",type:"info","show-icon":""}),s("div",Re,[t(O,{layout:"vertical"},{default:c(()=>[t(L,U({label:"登录密码"},y(v).password),{default:c(()=>[t(B,{value:r.password,"onUpdate:value":p[0]||(p[0]=k=>r.password=k),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16),t(L,U({label:"确认密码"},y(v).check_password),{default:c(()=>[t(B,{value:r.check_password,"onUpdate:value":p[1]||(p[1]=k=>r.check_password=k),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16)]),_:1})])]),_:1},8,["open","title"])])}}},Be=b(Te,[["__scopeId","data-v-9de4c189"]]),Le={class:"admin-layout"},Fe={class:"layout-header-wrapper"},Ue={class:"layout-header"},De={class:"header-left"},Ee={class:"header-body"},Ne={class:"header-right"},Ve={class:"item-box"},je={class:"item-box"},Oe={class:"layout-body"},ze={key:0,class:"layout-breadcrumb-wrapper"},qe={class:"layout-footer-wrapper"},Ae={__name:"index",setup(f){const e=N(),a=P(),_=m(()=>e.meta.isCustomPage||!1),i=m(()=>e.meta.pageStyle||{}),d=m(()=>e.meta.bgColor||"#ffffff"),r=m(()=>e.meta.breadcrumb||[]),n=m(()=>e.meta.hideTitle||!1),u=m(()=>e.meta.title||!1),w=m(()=>{var v;return((v=a.userInfo)==null?void 0:v.d_pass)==1&&a.isShowResetPassModal});return(v,x)=>{const $=T("router-view");return o(),l("div",Le,[s("div",Fe,[s("div",Ue,[s("div",De,[t(Y)]),s("div",Ee,[t(fe)]),s("div",Ne,[s("div",Ve,[t(G)]),s("div",je,[t(Se)])])])]),s("div",Oe,[_.value?(o(),g($,{key:0})):(o(),l("div",{key:1,class:"page-wrapper",style:D({"background-color":d.value})},[n.value?R("",!0):(o(),l("div",ze,[t(we,{items:r.value,title:u.value},null,8,["items","title"])])),s("div",{class:"page-container",style:D({...i.value})},[t($)],4)],4))]),s("div",qe,[t($e)]),w.value?(o(),g(Be,{key:0})):R("",!0)])}}},Pt=b(Ae,[["__scopeId","data-v-1c78c62b"]]);export{Pt as default};
