(this.webpackJsonpConsultation=this.webpackJsonpConsultation||[]).push([[0],{536:function(e,t,a){},537:function(e,t,a){},631:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(18),i=a.n(n),l=a(43),o=a(222),s=(a(432),a(536),a(537),a(13)),j=a(697),d=a(698),b=a(722),u=a(710),O=a(699),h=a(267),x=a(24),p=a(165),f=a.n(p),g=a(358),m=a.n(g),v=a(219),y=a.n(v),w=new URLSearchParams(window.location.search).get("jwt"),C="/api/",S=(a(356),a(121)),B=a(486),P=a.n(B),D=a(496),A=a.n(D),_=a(487),H=a.n(_),N=a(494),R=a.n(N),z=a(368),L=a.n(z),k=a(367),F=a.n(k),E=a(488),I=a.n(E),T=a(489),M=a.n(T),Y=a(491),W=a.n(Y),V=a(492),q=a.n(V),G=a(493),J=a.n(G),K=a(497),U=a.n(K),Q=a(490),X=a.n(Q),Z=a(495),$=a.n(Z),ee=a(498),te=a.n(ee),ae=a(695),ce=a(696),re=a(451),ne=a(509),ie=a(227),le=(a(618),a(212)),oe=a.n(le),se=a(5),je={Add:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(P.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Check:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(H.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Clear:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(F.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Delete:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(I.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),DetailPanel:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(L.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Edit:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(M.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Export:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(X.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Filter:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(W.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),FirstPage:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(q.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),LastPage:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(J.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),NextPage:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(L.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),PreviousPage:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(R.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ResetSearch:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(F.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Search:Object(c.forwardRef)((function(e,t){return Object(se.jsx)($.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),SortArrow:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(A.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(U.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ViewColumn:Object(c.forwardRef)((function(e,t){return Object(se.jsx)(te.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))}))},de=(Object(re.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:350},button:{margin:e.spacing(1)},root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},error:{color:"#f85032",fontSize:"11px"},success:{color:"#4BB543 ",fontSize:"11px"}}})),function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)([]),l=Object(s.a)(i,2);l[0],l[1];function o(){return(o=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.a.get("".concat(C,"patient/checked-in-by-service/consultation-code"),{headers:{Authorization:"Bearer ".concat(w)}}).then((function(e){n(e.data)})).catch((function(e){}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]);var j=function(e){var t=new Date,a=e.split("-"),c=new Date(+a[2],a[1]-1,+a[0]),r=new Date(c),n=t.getFullYear()-r.getFullYear(),i=t.getMonth()-r.getMonth();return(i<0||0===i&&t.getDate()<r.getDate())&&n--,0===n?i+" month(s)":n+" year(s)"},d=function(e){var t=e.identifier.find((function(e){return"HospitalNumber"==e.type}));return t?t.value:""};return console.log(r),Object(se.jsx)("div",{children:Object(se.jsx)(ae.a,{children:Object(se.jsx)(ce.a,{children:Object(se.jsx)(m.a,{icons:je,title:"Find Patient ",columns:[{title:"Patient Name",field:"name"},{title:"Hospital Number",field:"hospital_number",filtering:!1},{title:"Gender",field:"gender",filtering:!1},{title:"Age",field:"age",filtering:!1},{title:"Actions",field:"actions",filtering:!1}],data:r.map((function(e){return{name:e.firstName+" "+e.surname,hospital_number:d(e.identifier),gender:e.gender.display,age:0===e.dateOfBirth||void 0===e.dateOfBirth||null===e.dateOfBirth||""===e.dateOfBirth?0:j(oe()(e.dateOfBirth).format("DD-MM-YYYY")),actions:Object(se.jsx)("div",{children:Object(se.jsxs)(ie.a,{children:[Object(se.jsxs)(ie.b,{style:{backgroundColor:"#3F51B5",color:"#fff",border:"2px solid #3F51B5",borderRadius:"4px"},children:["Actions ",Object(se.jsx)("span",{"aria-hidden":!0,children:"\u25be"})]}),Object(se.jsx)(ie.d,{style:{color:"#000000 !important"},children:Object(se.jsx)(ie.c,{style:{color:"#000 !important"},children:Object(se.jsxs)(S.b,{to:{pathname:"/patient-history",state:{patientObj:e}},children:[Object(se.jsx)(ne.a,{size:"15",color:"black"})," ",Object(se.jsx)("span",{style:{color:"#000"},children:"Patient Dashboard"})]})})})]})})}})),options:{headerStyle:{color:"#000"},searchFieldStyle:{width:"200%",margingLeft:"250px"},filtering:!1,exportButton:!1,searchFieldAlignment:"left",pageSizeOptions:[10,20,100],pageSize:10,debounceInterval:400}})})})})}),be={borderRadius:"2px",fontSize:14},ue=function(){var e=Object(c.useState)("home"),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(se.jsx)(c.Fragment,{children:Object(se.jsx)(j.a,{children:Object(se.jsx)(d.a,{xl:12,children:Object(se.jsx)(b.a,{style:be,children:Object(se.jsx)(b.a.Body,{children:Object(se.jsx)("div",{className:"custom-tab-1",children:Object(se.jsx)(u.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return r(e)},className:"mb-3",children:Object(se.jsx)(O.a,{eventKey:"home",title:"Checked In Patients",children:Object(se.jsx)(de,{})})})})})})})})})},Oe=a(6),he=a(452),xe=a(716),pe=a(723),fe=(a(22),a(691)),ge=a(693),me=a(694),ve=a(692),ye=a(372),we=a.n(ye),Ce=a(690),Se=a(648),Be=a(226),Pe=a(702),De=a(703),Ae=a(503),_e=a.n(Ae),He=a(709),Ne=a(700),Re=a(708),ze=(a(625),a(701)),Le=a(507),ke=Object(re.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:350},button:{margin:e.spacing(1)},root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},error:{color:"#f85032",fontSize:"11px"},success:{color:"#4BB543 ",fontSize:"11px"}}})),Fe=new Date,Ee=function(e){var t=e.patientObj,a=Object(c.useState)(),r=Object(s.a)(a,2),n=r[0],i=r[1],j=(Object(l.f)(),ke()),d=Object(c.useState)([]),b=Object(s.a)(d,2),u=b[0],O=b[1],x=Object(c.useState)(!1),p=Object(s.a)(x,2),g=p[0],m=p[1],v=Object(c.useState)({}),S=Object(s.a)(v,2);S[0],S[1];function B(){return(B=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.a.get("".concat(C,"patient/vital-sign/post-service"),{headers:{Authorization:"Bearer ".concat(w)}}).then((function(e){var t=e.data.filter((function(e){return"consultation-code"!==e.moduleServiceCode}));console.log(t),O(Object.entries(t).map((function(e){var t=Object(s.a)(e,2),a=(t[0],t[1]);return{label:a.moduleServiceName,value:a.moduleServiceCode}})))})).catch((function(e){}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[]);var P=Object(c.useState)({encounterDate:Object(Re.a)(new Date(Fe),"yyyy-MM-dd"),facilityId:1,personId:"",serviceCode:"",visitId:""}),D=Object(s.a)(P,2),A=D[0];D[1];return Object(se.jsx)("div",{children:Object(se.jsxs)(He.a,{show:e.showModal,toggle:e.toggle,className:"fade",size:"lg",children:[Object(se.jsxs)(He.a.Header,{toggle:e.toggle,style:{backgroundColor:"#eeeeee"},children:["Post Patient",Object(se.jsx)(Ne.a,{variant:"",className:"btn-close",onClick:e.toggle})]}),Object(se.jsx)(He.a.Body,{children:Object(se.jsx)(ae.a,{children:Object(se.jsx)(ce.a,{children:Object(se.jsxs)("form",{children:[Object(se.jsx)("div",{className:"row",children:Object(se.jsx)(Le.a,{onChange:i,value:n,options:u,isMulti:"true",noOptionsMessage:"true"})}),g?Object(se.jsx)(ze.a,{}):"",Object(se.jsx)("br",{}),Object(se.jsx)(he.a,{type:"submit",variant:"contained",color:"primary",className:j.button,startIcon:Object(se.jsx)(_e.a,{}),onClick:function(a){a.preventDefault(),m(!0);var c=[];n.forEach((function(e,t,a){c.push(e.value)})),A.personId=t.id,A.visitId=t.visitId,A.serviceCode=c,y.a.post("".concat(C,"patient/post"),A,{headers:{Authorization:"Bearer ".concat(w)}}).then((function(t){m(!1),e.patientObj.commenced=!0,o.b.success("Vital signs save successful"),e.toggle()})).catch((function(e){m(!1),o.b.error("Something went wrong")}))},children:g?Object(se.jsx)("span",{style:{textTransform:"capitalize"},children:"Saving..."}):Object(se.jsx)("span",{style:{textTransform:"capitalize"},children:"Save"})})]})})})})]})})};var Ie=Object(Oe.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"20.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}))((function(e){var t=e.classes,a=e.patientObj?e.patientObj:{},r=Object(c.useState)(a),n=Object(s.a)(r,2),i=n[0],l=n[1],o=Object(c.useState)(!1),j=Object(s.a)(o,2),d=j[0],b=j[1];return Object(se.jsxs)("div",{className:t.root,children:[Object(se.jsxs)(fe.a,{defaultExpanded:!0,children:[Object(se.jsx)(me.a,{expandIcon:Object(se.jsx)(we.a,{}),children:Object(se.jsxs)(Pe.a,{children:[Object(se.jsx)(De.a,{md:11,children:Object(se.jsxs)(Pe.a,{className:"mt-1",children:[Object(se.jsx)(De.a,{md:12,className:t.root2,children:Object(se.jsx)("b",{style:{fontSize:"25px"},children:i.firstName+" "+i.surname})}),Object(se.jsx)(De.a,{md:4,className:t.root2,children:Object(se.jsxs)("span",{children:[" ","Patient ID : ",Object(se.jsx)("b",{children:function(e){var t=e.identifier.find((function(e){return"HospitalNumber"==e.type}));return t?t.value:""}(i.identifier)})]})}),Object(se.jsx)(De.a,{md:4,className:t.root2,children:Object(se.jsxs)("span",{children:["Date Of Birth : ",Object(se.jsx)("b",{children:i.dateOfBirth})]})}),Object(se.jsx)(De.a,{md:4,className:t.root2,children:Object(se.jsxs)("span",{children:[" ","Age : ",Object(se.jsx)("b",{children:function(e){var t=new Date,a=e.split("-"),c=new Date(+a[2],a[1]-1,+a[0]),r=new Date(c),n=t.getFullYear()-r.getFullYear(),i=t.getMonth()-r.getMonth();return(i<0||0===i&&t.getDate()<r.getDate())&&n--,0===n?i+" month(s)":n+" year(s)"}(oe()(i.dateOfBirth).format("DD-MM-YYYY"))})]})}),Object(se.jsx)(De.a,{md:4,children:Object(se.jsxs)("span",{children:[" ","Gender :"," ",Object(se.jsx)("b",{children:i.gender.display})]})}),Object(se.jsx)(De.a,{md:4,className:t.root2,children:Object(se.jsxs)("span",{children:[" ","Phone Number : ",Object(se.jsx)("b",{children:function(e){var t=e.contactPoint.find((function(e){return"phone"==e.type}));return t?t.value:""}(i.contactPoint)})]})}),Object(se.jsx)(De.a,{md:4,className:t.root2,children:Object(se.jsxs)("span",{children:[" ","Address : ",Object(se.jsxs)("b",{children:[function(e){var t=e.address.find((function(e){return e.city}));return t?t.city:""}(i.address)," "]})]})}),Object(se.jsx)(De.a,{md:12,children:Object(se.jsxs)("span",{children:[" ",Object(se.jsx)("b",{children:"Status : "})," ",Object(se.jsx)(Be.a,{color:"blue",size:"mini",children:"Active"})]})})]})}),Object(se.jsxs)("div",{className:"float-end",children:[" ",Object(se.jsx)(Se.a,{secondary:!0,floated:"right",onClick:function(){return e=i,l(Object(x.a)(Object(x.a)({},i),e)),void b(!d);var e},children:"Post Patient"})]})]})}),Object(se.jsxs)(ge.a,{className:t.details,children:[Object(se.jsx)(Se.a,{color:"red",content:"Blood Presure",label:{basic:!0,color:"red",pointing:"left",content:"11/22"}}),Object(se.jsx)(Se.a,{basic:!0,color:"blue",content:"Height",icon:"fork",label:{as:"a",basic:!0,color:"blue",pointing:"left",content:"74.5 in"}}),Object(se.jsx)(Se.a,{basic:!0,color:"blue",content:"Weight",icon:"fork",label:{as:"a",basic:!0,color:"blue",pointing:"left",content:"74.5 in"}})]}),Object(se.jsx)(Ce.a,{}),Object(se.jsx)(ve.a,{expandIcon:Object(se.jsx)(we.a,{})})]}),Object(se.jsx)(Ee,{toggle:function(){return b(!d)},showModal:d,patientObj:i})]})})),Te=a(719),Me=a(720),Ye=a(712),We=a(704),Ve=a(124),qe=a(714),Ge=a(711),Je=a(713),Ke=function(){return Object(se.jsxs)(Te.a,{columns:"equal",children:[Object(se.jsxs)(Te.a.Column,{children:[Object(se.jsxs)(Me.a,{children:[Object(se.jsx)(Be.a,{as:"a",color:"blue",ribbon:!0,children:"Recent Vitals"}),Object(se.jsx)("br",{}),Object(se.jsxs)(Ye.a,{celled:!0,children:[Object(se.jsxs)(Ye.a.Item,{children:["Pulse ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsx)("b",{children:"45mpb"})})]}),Object(se.jsxs)(Ye.a.Item,{children:["Respiratory Rate ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsx)("b",{children:"41mpb"})})]}),Object(se.jsxs)(Ye.a.Item,{children:["Temperature ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsxs)("b",{children:["32",Object(se.jsx)("sub",{children:"0"}),"C"]})})]}),Object(se.jsxs)(Ye.a.Item,{children:["Blood Presure ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsx)("b",{children:"332/30"})})]}),Object(se.jsxs)(Ye.a.Item,{children:["Height ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsx)("b",{children:"31.89m"})})]}),Object(se.jsxs)(Ye.a.Item,{children:["Weight ",Object(se.jsx)("span",{className:"float-end",children:Object(se.jsx)("b",{children:"376kg"})})]})]})]}),Object(se.jsxs)(Me.a,{children:[Object(se.jsx)(Be.a,{as:"a",color:"black",ribbon:!0,children:"Conditions"}),Object(se.jsx)("br",{}),Object(se.jsx)(Be.a,{as:"a",color:"white",size:"mini",pointing:!0,children:"Laser Fever"}),Object(se.jsx)(Be.a,{as:"a",color:"white",size:"mini",pointing:!0,children:"Typoid Fever"}),Object(se.jsx)(Be.a,{as:"a",color:"white",size:"mini",pointing:!0,children:"Asthma"})]}),Object(se.jsxs)(Me.a,{children:[Object(se.jsx)(Be.a,{as:"a",color:"red",ribbon:!0,children:"Allergies"}),Object(se.jsx)("br",{}),Object(se.jsx)("br",{}),Object(se.jsxs)(Be.a.Group,{color:"blue",children:[Object(se.jsx)(Be.a,{as:"a",size:"mini",children:"dust"}),Object(se.jsx)(Be.a,{as:"a",size:"mini",children:"smoke"})]})]})]}),Object(se.jsxs)(Te.a.Column,{width:9,children:[Object(se.jsx)(Be.a,{as:"a",color:"black",ribbon:!0,children:Object(se.jsx)("b",{children:"Physical Examination"})}),Object(se.jsxs)(Me.a,{children:[Object(se.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(se.jsx)("span",{className:"input-group-text",children:"Encounter Date"}),Object(se.jsx)("input",{type:"date",className:"form-control"})]}),Object(se.jsx)("br",{}),Object(se.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(se.jsx)("span",{className:"input-group-text",children:"Visit Note"}),Object(se.jsx)("textarea",{className:"form-control"})]}),Object(se.jsx)("br",{}),Object(se.jsx)(Be.a,{as:"a",color:"red",ribbon:!0,children:"Presenting Complaints"}),Object(se.jsxs)(Je.a,{color:"red",celled:!0,children:[Object(se.jsx)(Je.a.Header,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.HeaderCell,{children:"Complaints"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Onset Date"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Severity"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Date Resolved"})]})}),Object(se.jsx)(Je.a.Body,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})})]})}),Object(se.jsx)(Je.a.Footer,{children:Object(se.jsx)(Je.a.Row,{children:Object(se.jsx)(Je.a.HeaderCell,{children:Object(se.jsxs)(Be.a,{as:"a",color:"blue",size:"tiny",children:[Object(se.jsx)(Ve.a,{name:"plus"})," Add More"]})})})})]}),Object(se.jsx)("br",{}),Object(se.jsx)(Be.a,{as:"a",color:"pink",ribbon:!0,children:"Clinical Diagnosis"}),Object(se.jsxs)(Je.a,{color:"pink",celled:!0,children:[Object(se.jsx)(Je.a.Header,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.HeaderCell,{children:"Condition"}),Object(se.jsx)(Je.a.HeaderCell,{children:" Order"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Certainty"}),Object(se.jsx)(Je.a.HeaderCell,{})]})}),Object(se.jsx)(Je.a.Body,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{})]})}),Object(se.jsx)(Je.a.Footer,{children:Object(se.jsx)(Je.a.Row,{children:Object(se.jsx)(Je.a.HeaderCell,{children:Object(se.jsxs)(Be.a,{as:"a",color:"blue",size:"tiny",children:[Object(se.jsx)(Ve.a,{name:"plus"})," Add More"]})})})})]}),Object(se.jsx)("br",{}),Object(se.jsx)(Be.a,{as:"a",color:"teal",ribbon:!0,children:"Lab Test"}),Object(se.jsxs)(Je.a,{color:"teal",celled:!0,children:[Object(se.jsx)(Je.a.Header,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Test Date"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Order"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Test"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Piriority"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Order By"})]})}),Object(se.jsx)(Je.a.Body,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{})]})}),Object(se.jsx)(Je.a.Footer,{children:Object(se.jsx)(Je.a.Row,{children:Object(se.jsx)(Je.a.HeaderCell,{children:Object(se.jsxs)(Be.a,{as:"a",color:"blue",size:"tiny",children:[Object(se.jsx)(Ve.a,{name:"plus"})," Add Test"]})})})})]}),Object(se.jsx)("br",{}),Object(se.jsx)(Be.a,{as:"a",color:"purple",ribbon:!0,children:"Medication Prescription"}),Object(se.jsxs)(Je.a,{color:"purple",celled:!0,children:[Object(se.jsx)(Je.a.Header,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Test Date"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Order"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Lab Test"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Piriority"}),Object(se.jsx)(Je.a.HeaderCell,{children:"Order By"})]})}),Object(se.jsx)(Je.a.Body,{children:Object(se.jsxs)(Je.a.Row,{children:[Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"text",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{children:Object(se.jsx)(We.a,{type:"date",fluid:!0,placeholder:"Encounter Date"})}),Object(se.jsx)(Je.a.Cell,{})]})}),Object(se.jsx)(Je.a.Footer,{children:Object(se.jsx)(Je.a.Row,{children:Object(se.jsx)(Je.a.HeaderCell,{children:Object(se.jsxs)(Be.a,{as:"a",color:"blue",size:"tiny",children:[Object(se.jsx)(Ve.a,{name:"plus"})," Add New Drug Order"]})})})})]})]})]}),Object(se.jsx)(Te.a.Column,{children:Object(se.jsxs)(Me.a,{children:[Object(se.jsxs)(Ye.a,{children:[Object(se.jsx)(Ye.a.Item,{children:Object(se.jsxs)(Se.a,{icon:!0,labelPosition:"right",color:"teal",fluid:!0,children:[Object(se.jsx)(Ve.a,{name:"external alternate"}),"Post Patient"]})}),Object(se.jsx)(Ye.a.Item,{children:Object(se.jsxs)(Se.a,{icon:!0,labelPosition:"right",color:"green",fluid:!0,children:[Object(se.jsx)(Ve.a,{name:"eye"}),"View History"]})}),Object(se.jsx)(Ye.a.Item,{children:Object(se.jsxs)(Se.a,{icon:!0,labelPosition:"right",color:"blue",fluid:!0,children:[Object(se.jsx)(Ve.a,{name:"calendar alternate"}),"Appointment"]})})]}),Object(se.jsxs)(qe.a,{children:[Object(se.jsx)(qe.a.Content,{children:Object(se.jsx)("b",{children:"Previous Clinical Notes"})}),Object(se.jsx)(qe.a.Content,{children:Object(se.jsxs)(Ge.a,{children:[Object(se.jsx)(Ge.a.Event,{children:Object(se.jsxs)(Ge.a.Content,{children:[Object(se.jsx)(Ge.a.Date,{content:"20-03-2022"}),Object(se.jsx)(Ge.a.Summary,{children:"The malaria is plus 3 and and need more attention"})]})}),Object(se.jsx)("hr",{}),Object(se.jsx)(Ge.a.Event,{children:Object(se.jsxs)(Ge.a.Content,{children:[Object(se.jsx)(Ge.a.Date,{content:"20-05-2022"}),Object(se.jsx)(Ge.a.Summary,{children:"Blood presure is too high"})]})})]})})]})]})})]})};var Ue=Object(Oe.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"20.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}))((function(e){var t=Object(l.f)(),a=Object(c.useState)("home"),r=Object(s.a)(a,2),n=(r[0],r[1],e.classes),i=t.location&&t.location.state?t.location.state.patientObj:{};return Object(se.jsx)("div",{className:n.root,children:Object(se.jsx)(xe.a,{children:Object(se.jsxs)(pe.a,{children:[Object(se.jsx)(Ie,{patientObj:i}),Object(se.jsx)("br",{}),Object(se.jsx)(S.b,{to:"/",children:Object(se.jsx)(he.a,{variant:"contained",color:"primary",className:" float-end ms-2",children:Object(se.jsx)("span",{style:{textTransform:"capitalize"},children:"Back"})})}),Object(se.jsx)("br",{}),Object(se.jsx)(Ke,{})]})})})}));function Qe(){return Object(se.jsxs)("div",{children:[Object(se.jsx)(o.a,{}),Object(se.jsxs)(l.c,{children:[Object(se.jsx)(l.a,{path:"/patient-history",children:Object(se.jsx)(Ue,{})}),Object(se.jsx)(l.a,{path:"/",children:Object(se.jsx)(ue,{})})]})]})}var Xe=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,877)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),r(e),n(e),i(e)}))},Ze=a(506),$e="ltr",et=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:$e},{typography:"poppins",version:"light",layout:"vertical",primary:"color_5",headerBg:"color_5",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:$e},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_11",headerBg:"color_1",sidebarBg:"color_11",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_11",direction:$e},{typography:"poppins",version:"dark",layout:"vertical",headerBg:"color_3",navheaderBg:"color_3",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:$e},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_15",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:$e},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarBg:"color_9",sidebarStyle:"modern",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_9",direction:$e}],tt=Object(c.createContext)(),at=function(e){var t=Object(c.useState)({value:"full",label:"Full"}),a=Object(s.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)({value:"fixed",label:"Fixed"}),l=Object(s.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)({value:"fixed",label:"Fixed"}),b=Object(s.a)(d,2),u=b[0],O=b[1],h=Object(c.useState)({value:"vertical",label:"Vertical"}),x=Object(s.a)(h,2),p=x[0],f=x[1],g=Object(c.useState)({value:"ltr",label:"LTR"}),m=Object(s.a)(g,2),v=m[0],y=m[1],w=Object(c.useState)("color_1"),C=Object(s.a)(w,2),S=C[0],B=C[1],P=Object(c.useState)("color_1"),D=Object(s.a)(P,2),A=D[0],_=D[1],H=Object(c.useState)("color_1"),N=Object(s.a)(H,2),R=N[0],z=N[1],L=Object(c.useState)("color_1"),k=Object(s.a)(L,2),F=k[0],E=k[1],I=Object(c.useState)(!1),T=Object(s.a)(I,2),M=T[0],Y=T[1],W=Object(c.useState)(!1),V=Object(s.a)(W,2),q=V[0],G=V[1],J=Object(c.useState)({value:"light",label:"Light"}),K=Object(s.a)(J,2),U=K[0],Q=K[1],X=Object(c.useState)({value:"wide-boxed",label:"Wide Boxed"}),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=document.querySelector("body"),ae=Object(c.useState)(0),ce=Object(s.a)(ae,2),re=ce[0],ne=ce[1],ie=Object(c.useState)(0),le=Object(s.a)(ie,2),oe=le[0],je=le[1],de=function(e){B(e),te.setAttribute("data-primary",e)},be=function(e){_(e),te.setAttribute("data-nav-headerbg",e)},ue=function(e){z(e),te.setAttribute("data-headerbg",e)},Oe=function(e){E(e),te.setAttribute("data-sibebarbg",e)},he=function(e){j(e),te.setAttribute("data-sidebar-position",e.value)},xe=function(e){y(e),te.setAttribute("direction",e.value);var t=document.querySelector("html");t.setAttribute("dir",e.value),t.className=e.value},pe=function(e){"horizontal"===e.value&&"overlay"===r.value?(f(e),te.setAttribute("data-layout",e.value),n({value:"full",label:"Full"}),te.setAttribute("data-sidebar-style","full")):(f(e),te.setAttribute("data-layout",e.value))},fe=function(e){"horizontal"===p.value&&"overlay"===e.value?alert("Sorry! Overlay is not possible in Horizontal layout."):(n(e),Y("icon-hover"===e.value?"_i-hover":""),te.setAttribute("data-sidebar-style",e.value))},ge=function(e){O(e),te.setAttribute("data-header-position",e.value)},me=function(e){te.setAttribute("data-theme-version",e.value),Q(e)},ve=function(e){ee(e),te.setAttribute("data-container",e.value),"boxed"===e.value&&fe({value:"overlay",label:"Overlay"})};return Object(c.useEffect)((function(){var e=document.querySelector("body");e.setAttribute("data-typography","poppins"),e.setAttribute("data-theme-version","light"),e.setAttribute("data-layout","vertical"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-nav-headerbg","color_1"),e.setAttribute("data-headerbg","color_1"),e.setAttribute("data-sidebar-style","overlay"),e.setAttribute("data-sibebarbg","color_1"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-sidebar-position","fixed"),e.setAttribute("data-header-position","fixed"),e.setAttribute("data-container","wide"),e.setAttribute("direction","ltr");var t=function(){ne(window.innerWidth),je(window.innerHeight),window.innerWidth>=768&&window.innerWidth<1024?e.setAttribute("data-sidebar-style","mini"):window.innerWidth<=768?e.setAttribute("data-sidebar-style","overlay"):e.setAttribute("data-sidebar-style","full")};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(se.jsx)(tt.Provider,{value:{body:te,sideBarOption:[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],layoutOption:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],backgroundOption:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],sidebarposition:o,headerPositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],containerPosition:[{value:"wide-boxed",label:"Wide Boxed"},{value:"boxed",label:"Boxed"},{value:"wide",label:"Wide"}],directionPosition:[{value:"ltr",label:"LTR"},{value:"rtl",label:"RTL"}],fontFamily:[{value:"poppins",label:"Poppins"},{value:"roboto",label:"Roboto"},{value:"cairo",label:"Cairo"},{value:"opensans",label:"Open Sans"},{value:"HelveticaNeue",label:"HelveticaNeue"}],primaryColor:S,navigationHader:A,windowWidth:re,windowHeight:oe,changePrimaryColor:de,changeNavigationHader:be,changeSideBarStyle:fe,sideBarStyle:r,changeSideBarPostion:he,sidebarpositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],changeHeaderPostion:ge,headerposition:u,changeSideBarLayout:pe,sidebarLayout:p,changeDirectionLayout:xe,changeContainerPosition:ve,direction:v,colors:["color_1","color_2","color_3","color_4","color_5","color_6","color_7","color_8","color_9","color_10","color_11","color_12","color_13","color_14","color_15"],haderColor:R,chnageHaderColor:ue,chnageSidebarColor:Oe,sidebarColor:F,iconHover:M,menuToggle:q,openMenuToggle:function(){"overly"===r.value?G(!0):G(!1)},changeBackground:me,background:U,containerPosition_:$,setDemoTheme:function(e,t){var a={},c=et[e];te.setAttribute("data-typography",c.typography),a.value=c.version,me(a),a.value=c.layout,pe(a),de(c.primary),be(c.navheaderBg),ue(c.headerBg),a.value=c.sidebarStyle,fe(a),Oe(c.sidebarBg),a.value=c.sidebarPosition,he(a),a.value=c.headerPosition,ge(a),a.value=c.containerLayout,ve(a),a.value=t,xe(a)}},children:e.children})};i.a.render(Object(se.jsx)(r.a.StrictMode,{children:Object(se.jsx)(Ze.a,{children:Object(se.jsx)(S.a,{basename:"/",children:Object(se.jsx)(at,{children:Object(se.jsx)(Qe,{})})})})}),document.getElementById("root")),Xe()}},[[631,1,2]]]);
//# sourceMappingURL=main.ac6e2739.chunk.js.map