import{m as _,_ as E,a as F,L as M,a5 as O,K as T}from"../../index-P5YTNo6V.js";import{r as b,A as z,v as V,w as L,L as o,M as n,V as g,j as d,Q as I,F as Y,a1 as B,u as C,P as N,X as x,Y as U,a0 as q,a8 as v,a3 as P,a4 as R}from"./vue-chunks-DrvJJrR0.js";import{a as j,_ as A}from"./RadioButton-aF3UutsZ.js";import{R as H}from"./dayjs-B6COTrNc.js";import{g as Q}from"./index-XMJqSWU_.js";import{C as J}from"./ClockCircleFilled-LDEhfZKx.js";import{a as K}from"./index-BdZgce9p.js";import{_ as X}from"./index-Dh-ZljIv.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./FormItemContext-C-6BWMej.js";import"./colors-CF1NjnDv.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./CheckOutlined-C_vTn6Wi.js";import"./index-cbzy6J7k.js";import"./index-DuYANmfA.js";import"./slide-BQHNwZxO.js";import"./index-CCuYH0LT.js";import"./DownOutlined-BHsv0Dlx.js";import"./SearchOutlined-BsZdEpth.js";import"./move-DKHu4ARt.js";import"./shallowequal-CfnxU2uU.js";import"./index-CDg2rIxr.js";import"./LeftOutlined-BqmAHDBI.js";import"./RightOutlined-DIZF9Vab.js";import"./responsiveObserve-BH6_flfv.js";import"./index-GBuEB8v_.js";import"./index-DYXArsZx.js";import"./index-DpfcpfQ0.js";import"./dropdown-7DbQfkaS.js";import"./Dropdown-ZPlzQgPg.js";import"./index-CH9v5L6a.js";import"./collapseMotion-DfZt1qrJ.js";import"./index-BHxFUlgm.js";import"./index-DbkTLXZJ.js";import"./Input-Dgd5v23J.js";import"./inputProps-CVwJ66mj.js";import"./Search-DbjjEMkL.js";import"./TextArea-2ujELiW_.js";import"./Password-DoqQ5Cp-.js";const G={class:"zm-date"},W={class:"date-btn"},Z={class:"date-content"},tt={__name:"date",props:{datekey:{type:String,default:""}},emits:["dateChange"],setup(p,{emit:w}){const m=p,l=b(1),s=w;let D=z([{label:"近7日",value:!0,key:2,start_date:_().subtract(6,"day"),end_date:_().subtract(0,"day")},{label:"近14日",value:!1,key:3,start_date:_().subtract(13,"day"),end_date:_().subtract(0,"day")},{label:"近30日",value:!1,key:4,start_date:_().subtract(29,"day"),end_date:_().subtract(0,"day")}]);const k=b(null),h=b(null),y=b([]),S=e=>e>=_().subtract(0,"day"),f=()=>{let e=l.value,t=null;D.forEach(r=>{r.key==e&&(t=r)}),y.value=[t.start_date,t.end_date],k.value=t.start_date.startOf("day").unix(),h.value=t.end_date.endOf("day").unix(),c()},a=(e,t)=>{k.value=e[0].startOf("day").unix(),h.value=e[1].endOf("day").unix(),l.value=1,c()},c=()=>{s("dateChange",{start_time:k.value,end_time:h.value})};return V(()=>{l.value=parseInt(m.datekey),f()}),L(()=>m.datekey,(e,t)=>{l.value=parseInt(m.datekey.split("-")[0]),f()}),(e,t)=>{const r=j,i=A,$=H;return o(),n("div",G,[g("div",W,[d(i,{value:l.value,"onUpdate:value":t[0]||(t[0]=u=>l.value=u),onChange:f},{default:I(()=>[(o(!0),n(Y,null,B(C(D),u=>(o(),N(r,{class:"date-btn-button",value:u.key,key:u.key},{default:I(()=>[x(U(u.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),g("div",Z,[d($,{value:y.value,"onUpdate:value":t[1]||(t[1]=u=>y.value=u),onChange:a,format:"YYYY-MM-DD",disabledDate:S,allowClear:!1},null,8,["value"])])])}}},et=p=>(P("data-v-0358bd90"),p=p(),R(),p),at={class:"user-model-page"},st=et(()=>g("div",{class:"page-title"},"导出记录",-1)),ot={class:"list-wrapper"},nt={class:"content-wrapper"},rt={class:"search-block"},it={key:0,class:"status-item status-0"},lt={key:1,class:"status-item status-1"},dt={key:2,class:"status-item status-2"},ct={key:3,class:"status-item status-3"},_t=["onClick"],ut={key:1},pt={__name:"index",setup(p){const w=F(),m=q().query,l=b([]),s=z({robot_id:m.id,page:1,size:10,total:0,start_time:"",end_time:""}),D=a=>{s.page=a.current,s.size=a.pageSize,y()},k=()=>{s.page=1,y()},h=a=>{s.start_time=a.start_time,s.end_time=a.end_time,k()},y=()=>{Q({...s}).then(a=>{let c=a.data.list,e=a.data.map;c.forEach(t=>{var r;t.create_time_desc=_(t.create_time*1e3).format("YYYY/MM/DD HH:mm"),t.source_desc=(r=e.filter(i=>i.source==t.source)[0])==null?void 0:r.source_name,t.is_over_7_days=t.create_time<Date.now()/1e3-7*24*60*60}),l.value=c,s.total=+a.data.total})},S=a=>{let c=`/manage/downloadExportFile?id=${a.id}&robot_id=${m.id}&token=${w.getToken}`;var e=document.createElement("a");e.href=c,e.style.display="none",e.click()},f=[{title:"导出时间",dataIndex:"create_time_desc",key:"create_time_desc"},{title:"导出文件名称",dataIndex:"file_name",key:"file_name"},{title:"来源",key:"source_desc",dataIndex:"source_desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"操作",key:"action"}];return(a,c)=>{const e=X,t=K;return o(),n("div",at,[st,g("div",ot,[g("div",nt,[d(e,{"show-icon":"",message:"导出文件仅保留7天，7天后自动删除，请及时下载到本地"}),g("div",rt,[d(tt,{datekey:"2",onDateChange:h})]),d(t,{class:"table-list",columns:f,"data-source":l.value,pagination:{current:s.page,total:s.total,pageSize:s.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:D},{bodyCell:I(({column:r,record:i})=>[r.key==="status"?(o(),n(Y,{key:0},[i.status==0?(o(),n("div",it,[d(C(J)),x("等待导出 ")])):v("",!0),i.status==1?(o(),n("div",lt,[d(C(M)),x("导出中 ")])):v("",!0),i.status==2?(o(),n("div",dt,[d(C(O)),x("导出成功 ")])):v("",!0),i.status==3?(o(),n("div",ct,[d(C(T)),x("导出失败 ")])):v("",!0)],64)):v("",!0),r.key==="action"?(o(),n(Y,{key:1},[i.is_over_7_days?(o(),n("span",ut,"--")):(o(),n("a",{key:0,onClick:$=>S(i)},"下载",8,_t))],64)):v("",!0)]),_:1},8,["data-source","pagination"])])])])}}},ae=E(pt,[["__scopeId","data-v-0358bd90"]]);export{ae as default};
