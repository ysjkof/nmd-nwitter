(this["webpackJsonpnmd-nwitter"]=this["webpackJsonpnmd-nwitter"]||[]).push([[0],{80:function(e,n,t){"use strict";t.r(n);var c,r,a,i,s,o,b,u,d,l,j,p,x,O,h,f,m,g,v,w,y=t(7),k=t.n(y),S=t(51),C=t.n(S),I=t(40),N=t(12),U=t(15),E=t(38),A=t(16),D=t(13),F=t(0),L=t.n(F),M=t(1),z=t(25),T=t(30),B=t(47),G=t(52),P=t(62),R=t(54),W=t(55),_=t(56),q=Object(G.a)({apiKey:"AIzaSyDuGX01d10m5JneTMNHY4UUsE5V3v_bkcQ",authDomain:"nwitter-db920.firebaseapp.com",projectId:"nwitter-db920",storageBucket:"nwitter-db920.appspot.com",messagingSenderId:"218232021739",appId:"1:218232021739:web:bdf9d95c33b7d9e07514ae",measurementId:"G-MQ950N33XB"}),H=(Object(P.a)(q),Object(R.a)()),J=Object(W.a)(),Q=Object(_.a)(),X=t(6),K=D.c.form(c||(c=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  input {\n    padding: 10px 14px;\n  }\n  input:not(:last-child) {\n    margin-bottom: 14px;\n  }\n  input:last-child {\n    margin-bottom: 8px;\n    box-shadow: none;\n    cursor: pointer;\n  }\n"]))),V=D.c.button(r||(r=Object(U.a)(["\n  background: none;\n  cursor: pointer;\n  color: #d35400;\n  box-shadow: none;\n"]))),Y=D.c.span(a||(a=Object(U.a)(["\n  color: red;\n  margin-bottom: 12px;\n"]))),Z=function(){var e=Object(y.useState)(""),n=Object(N.a)(e,2),t=n[0],c=n[1],r=Object(y.useState)(""),a=Object(N.a)(r,2),i=a[0],s=a[1],o=Object(y.useState)(!1),b=Object(N.a)(o,2),u=b[0],d=b[1],l=Object(y.useState)(""),j=Object(N.a)(l,2),p=j[0],x=j[1],O=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?c(r):"password"===t&&s(r)},h=function(){var e=Object(M.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!u){e.next=7;break}return e.next=5,Object(z.c)(H,t,i);case 5:e.next=9;break;case 7:return e.next=9,Object(z.e)(H,t,i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),x(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(K,{onSubmit:h,children:[Object(X.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:O}),Object(X.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O}),Object(X.jsx)(Y,{children:p}),Object(X.jsx)("input",{type:"submit",value:u?"Create Account":"Log In"})]}),Object(X.jsx)(V,{onClick:function(){return d((function(e){return!e}))},children:u?"Change to Sign In":"Create Account"})]})},$=D.c.div(i||(i=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),ee=D.c.div(s||(s=Object(U.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  button {\n    width: 40%;\n  }\n"]))),ne=function(){var e=function(){var e=Object(M.a)(L.a.mark((function e(n){var t,c,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.name,e.prev=1,"google"!==t){e.next=10;break}return c=new z.b,e.next=6,Object(z.f)(H,c);case 6:r=e.sent,z.b.credentialFromResult(r),e.next=16;break;case 10:if("github"!==t){e.next=16;break}return c=new z.a,e.next=14,Object(z.f)(H,c);case 14:a=e.sent,z.a.credentialFromResult(a);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n){return e.apply(this,arguments)}}();return Object(X.jsxs)($,{children:[Object(X.jsx)(Z,{}),Object(X.jsxs)(ee,{children:[Object(X.jsxs)("button",{name:"google",onClick:e,children:["Sign In with Google",Object(X.jsx)(T.a,{icon:B.b})]}),Object(X.jsxs)("button",{name:"github",onClick:e,children:["Sign In GitHub",Object(X.jsx)(T.a,{icon:B.a})]})]})]})},te=t(17),ce=t(28),re=t(37),ae=D.c.div(o||(o=Object(U.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  border-radius: 8px;\n  padding: 4px 8px;\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n  box-shadow: ",";\n"])),(function(e){return e.isOwner?"0 0 3px 1px":"0 0 1px"})),ie=D.c.div(b||(b=Object(U.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]))),se=D.c.div(u||(u=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #34495e;\n  img {\n    max-width: 30%;\n  }\n  :first-child {\n    font-size: 14px;\n    color: #7f8c8d;\n  }\n"]))),oe=D.c.div(d||(d=Object(U.a)(["\n  span:last-child {\n    margin-left: 25px;\n  }\n"]))),be=function(e){var n=e.nweetObj,t=e.isOwner,c=Object(y.useState)(!1),r=Object(N.a)(c,2),a=r[0],i=r[1],s=Object(y.useState)(n.text),o=Object(N.a)(s,2),b=o[0],u=o[1],d=function(){var e=Object(M.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return e.next=4,Object(te.c)(Object(te.d)(Object(te.f)(),"nweets/".concat(n.id)));case 4:if(!n.attachmentUrl){e.next=7;break}return e.next=7,Object(ce.a)(Object(ce.d)(Q,n.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return i((function(e){return!e}))},j=function(){var e=Object(M.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(te.j)(Object(te.d)(Object(te.f)(),"nweets/".concat(n.id)),{text:b});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return console.log(t),Object(X.jsx)(ae,{isOwner:t,children:a?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("form",{onSubmit:j,children:[Object(X.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,onChange:function(e){var n=e.target.value;u(n)}}),Object(X.jsx)("input",{type:"submit",value:"NWEET"})]}),Object(X.jsx)("button",{onClick:l,children:"Cancel"})]}):Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(ie,{children:[Object(X.jsxs)(se,{children:[Object(X.jsx)("h6",{children:n.displayName}),t&&Object(X.jsxs)(oe,{children:[Object(X.jsx)("span",{onClick:d,children:Object(X.jsx)(T.a,{icon:re.c})}),Object(X.jsx)("span",{onClick:l,children:Object(X.jsx)(T.a,{icon:re.a})})]})]}),Object(X.jsxs)(se,{children:[Object(X.jsx)("h4",{children:n.text}),n.attachmentUrl&&Object(X.jsx)("img",{alt:"",src:n.attachmentUrl})]})]})})})},ue=t(34),de=t(82),le=D.c.form(l||(l=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  input {\n    margin-bottom: 5px;\n    padding: 0 10px;\n    :first-child {\n      width: 100%;\n      padding: 10px;\n    }\n  }\n  label {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 5px;\n    span {\n      margin-right: 10px;\n    }\n  }\n"]))),je=D.c.div(j||(j=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 20%;\n  box-shadow: 0 0 10px;\n  img {\n    max-width: 350px;\n    max-height: 350px;\n    width: fit-content;\n    height: fit-content;\n  }\n  span {\n    position: absolute;\n    background-color: white;\n    border-radius: 8px;\n    padding: 2px;\n    font-size: 12px;\n    top: 10px;\n    left: 10px;\n    border: 1px solid red;\n    color: red;\n  }\n  button {\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    color: red;\n    font-weight: 600;\n    border: 1px solid red;\n  }\n"]))),pe=function(e){var n=e.userObj,t=Object(ue.useState)(""),c=Object(N.a)(t,2),r=c[0],a=c[1],i=Object(ue.useState)(""),s=Object(N.a)(i,2),o=s[0],b=s[1],u=function(){var e=Object(M.a)(L.a.mark((function e(t){var c,i,s,u;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c="",""===o){e.next=11;break}return i=Object(ce.d)(Q,"".concat(n.uid,"/").concat(Object(de.a)())),e.next=7,Object(ce.e)(i,o,"data_url");case 7:return s=e.sent,e.next=10,Object(ce.b)(s.ref);case 10:c=e.sent;case 11:return u={text:r,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:c,displayName:n.displayName},e.next=14,Object(te.a)(Object(te.b)(J,"nweets"),u);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 19:a(""),b("");case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(X.jsxs)(le,{onSubmit:u,children:[Object(X.jsx)("input",{value:r,onChange:function(e){var n=e.target.value;a(n)},type:"text",placeholder:"What's on your mind?",maxLength:123}),Object(X.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("span",{children:"Add photos"}),Object(X.jsx)(T.a,{icon:re.b})]}),Object(X.jsx)("input",{type:"submit",value:"SEND"})]}),Object(X.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;t.onloadend=function(e){var n=e.currentTarget.result;b(n)},t.readAsDataURL(n)},style:{display:"none"}}),o?Object(X.jsxs)(je,{children:[Object(X.jsx)("span",{children:"Attached Image"}),Object(X.jsx)("img",{alt:"",src:o}),Object(X.jsx)("button",{onClick:function(){return b(null)},children:"Clear"})]}):null]})},xe=D.c.div(p||(p=Object(U.a)(["\n  height: 100%;\n"]))),Oe=D.c.div(x||(x=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  border: 1px solid;\n  padding: 10px;\n  border-radius: 8px;\n  height: 70vh;\n  width: 100%;\n  overflow-y: auto;\n  &:first-child {\n    margin-top: auto;\n  }\n"]))),he=function(e){var n=e.userObj,t=Object(y.useState)([]),c=Object(N.a)(t,2),r=c[0],a=c[1];Object(y.useEffect)((function(){var e=Object(te.i)(Object(te.b)(J,"nweets"),Object(te.h)("createdAt"));Object(te.g)(e,(function(e){var n=e.docs.map((function(e){return Object(I.a)({id:e.id},e.data())}));a(n)}))}),[]),Object(y.useEffect)((function(){var e=document.getElementById("OutWindow"),n=e.scrollTopMax;e.scrollTop=n}));return Object(X.jsxs)(xe,{children:[Object(X.jsx)(Oe,{onScroll:function(e){},id:"OutWindow",children:r.map((function(e){return Object(X.jsx)(be,{nweetObj:e,isOwner:e.creatorId===n.uid},e.id)}))}),Object(X.jsx)(pe,{userObj:n})]})},fe=D.c.div(O||(O=Object(U.a)(["\n  height: 100%;\n  min-height: 82vh;\n  border: 1px solid;\n  border-radius: 8px;\n  padding: 5px;\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n    div {\n      display: flex;\n      justify-content: space-between;\n      gap: 20px;\n      input {\n        width: 50%;\n      }\n    }\n    label {\n      margin-right: 10px;\n    }\n    input:not(:last-child) {\n      border: none;\n      box-shadow: 0 0 4px;\n      padding: 0 7px;\n    }\n  }\n"]))),me=D.c.div(h||(h=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  h5 {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 18px;\n  }\n"]))),ge=function(e){var n=e.userObj,t=e.refreshUser,c=Object(ue.useState)(n.displayName),r=Object(N.a)(c,2),a=r[0],i=r[1],s=Object(ue.useState)(),o=Object(N.a)(s,2),b=o[0],u=o[1],d=function(){var e=Object(M.a)(L.a.mark((function e(c){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===a){e.next=4;break}return e.next=4,Object(z.g)(n,{displayName:a});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=Object(M.a)(L.a.mark((function e(){var t,c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(te.i)(Object(te.b)(J,"nweets"),Object(te.k)("creatorId","==",n.uid)),e.next=3,Object(te.e)(t);case 3:c=e.sent,r=[],c.forEach((function(e){return r.push(e.data())})),u(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){l()}),[]),Object(X.jsxs)(fe,{children:[Object(X.jsxs)("form",{onSubmit:d,children:[Object(X.jsx)("label",{children:"Nickname"}),Object(X.jsxs)("div",{children:[Object(X.jsx)("input",{onChange:function(e){var n=e.target.value;i(n)},type:"text",placeholder:"Display name",value:a}),Object(X.jsx)("input",{type:"submit",value:"Update Profile"})]})]}),Object(X.jsxs)(me,{children:[Object(X.jsx)("h5",{children:"My Nweets"}),null===b||void 0===b?void 0:b.map((function(e){return Object(X.jsx)(be,{nweetObj:e,isOwner:e.creatorId===n.uid},e.createdAt)}))]})]})},ve=D.c.nav(f||(f=Object(U.a)(["\n  display: flex;\n  background-color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  border-radius: 8px;\n"]))),we=D.c.ul(m||(m=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  a,\n  button {\n    border: 1px solid;\n    border-radius: 8px;\n    padding: 4px 8px;\n  }\n"]))),ye=D.c.li(g||(g=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  :last-child {\n    & :last-child {\n      margin-left: 12px;\n    }\n  }\n"]))),ke=function(e){var n=e.userObj,t=Object(A.f)();return Object(X.jsx)(ve,{children:Object(X.jsxs)(we,{children:[Object(X.jsx)(ye,{children:Object(X.jsx)(E.b,{to:"/profile",children:(null===n||void 0===n?void 0:n.displayName)?"".concat(n.displayName,"'s Profile"):"My Profile"})}),Object(X.jsxs)(ye,{children:[Object(X.jsx)(E.b,{to:"/",children:"Home"}),Object(X.jsx)("button",{onClick:function(){H.signOut(),t.push("/")},children:"Log out"})]})]})})},Se=D.c.div(v||(v=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 375px;\n  height: 100vh;\n  margin: auto;\n"]))),Ce=D.c.main(w||(w=Object(U.a)([""]))),Ie=function(e){var n=e.isLoggedIn,t=e.userObj,c=e.refreshUser;return Object(X.jsx)(Se,{children:Object(X.jsxs)(E.a,{children:[n&&Object(X.jsx)(ke,{userObj:t}),Object(X.jsx)(A.c,{children:n?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(A.a,{exact:!0,path:"/",children:Object(X.jsx)(Ce,{children:Object(X.jsx)(he,{userObj:t})})}),Object(X.jsx)(A.a,{path:"/profile",children:Object(X.jsx)(Ce,{children:Object(X.jsx)(ge,{refreshUser:c,userObj:t})})})]}):Object(X.jsx)(A.a,{exact:!0,path:"/",children:Object(X.jsx)(Ce,{children:Object(X.jsx)(ne,{})})})})]})})};var Ne,Ue=function(){var e=Object(y.useState)(!1),n=Object(N.a)(e,2),t=n[0],c=n[1],r=Object(y.useState)(H.currentUser),a=Object(N.a)(r,2),i=a[0],s=a[1],o=Object(y.useState)(null),b=Object(N.a)(o,2),u=b[0],d=b[1];return Object(y.useEffect)((function(){H.onAuthStateChanged((function(e){e?(s(!0),d(e)):(s(!1),d(null)),c(!0)}))}),[]),Object(X.jsx)(X.Fragment,{children:t?Object(X.jsx)(Ie,{refreshUser:function(){var e=H.currentUser;d(Object(I.a)({},e)),d(e)},isLoggedIn:i,userObj:u}):"Initializing..."})},Ee=t(61),Ae=Object(D.a)(Ne||(Ne=Object(U.a)(["\n","\n*{\n    box-sizing: border-box;\n}\nbody{\n    /* background-color: #bdc3c7; */\n}\ninput, button{\n    border:solid 1px;\n    border-radius: 8px;\n    background-color: white;\n}\nbutton{\n    cursor:pointer;\n}\na{\n    color:black;\n    text-decoration: none;\n}\n"])),Ee.a);C.a.render(Object(X.jsxs)(k.a.StrictMode,{children:[Object(X.jsx)(Ae,{}),Object(X.jsx)(Ue,{})]}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.d0e3d861.chunk.js.map