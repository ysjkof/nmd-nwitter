(this["webpackJsonpnmd-nwitter"]=this["webpackJsonpnmd-nwitter"]||[]).push([[0],{78:function(e,n,t){"use strict";t.r(n);var c,r,a,i,s,o,b,u,d,l,j,p,x,O,h,f,m,g,v,w,y=t(7),k=t.n(y),S=t(51),C=t.n(S),I=t(39),N=t(11),U=t(14),E=t(37),A=t(16),D=t(12),F=t(0),L=t.n(F),M=t(1),z=t(24),T=t(30),B=t(46),G=t(52),P=t(53),R=t(54),W=t(55),_=(Object(G.a)({apiKey:"AIzaSyDuGX01d10m5JneTMNHY4UUsE5V3v_bkcQ",authDomain:"nwitter-db920.firebaseapp.com",projectId:"nwitter-db920",storageBucket:"nwitter-db920.appspot.com",messagingSenderId:"218232021739",appId:"1:218232021739:web:bdf9d95c33b7d9e07514ae",measurementId:"G-MQ950N33XB"}),Object(P.a)()),q=Object(R.a)(),H=Object(W.a)(),J=t(6),Q=D.c.form(c||(c=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  input {\n    padding: 10px 14px;\n  }\n  input:not(:last-child) {\n    margin-bottom: 14px;\n  }\n  input:last-child {\n    margin-bottom: 8px;\n    box-shadow: none;\n    cursor: pointer;\n  }\n"]))),X=D.c.button(r||(r=Object(U.a)(["\n  background: none;\n  cursor: pointer;\n  color: #d35400;\n  box-shadow: none;\n"]))),K=D.c.span(a||(a=Object(U.a)(["\n  color: red;\n  margin-bottom: 12px;\n"]))),V=function(){var e=Object(y.useState)(""),n=Object(N.a)(e,2),t=n[0],c=n[1],r=Object(y.useState)(""),a=Object(N.a)(r,2),i=a[0],s=a[1],o=Object(y.useState)(!1),b=Object(N.a)(o,2),u=b[0],d=b[1],l=Object(y.useState)(""),j=Object(N.a)(l,2),p=j[0],x=j[1],O=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?c(r):"password"===t&&s(r)},h=function(){var e=Object(M.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!u){e.next=7;break}return e.next=5,Object(z.c)(_,t,i);case 5:e.next=9;break;case 7:return e.next=9,Object(z.e)(_,t,i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),x(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(Q,{onSubmit:h,children:[Object(J.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:O}),Object(J.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O}),Object(J.jsx)(K,{children:p}),Object(J.jsx)("input",{type:"submit",value:u?"Create Account":"Log In"})]}),Object(J.jsx)(X,{onClick:function(){return d((function(e){return!e}))},children:u?"Change to Sign In":"Create Account"})]})},Y=D.c.div(i||(i=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Z=D.c.div(s||(s=Object(U.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  button {\n    width: 40%;\n  }\n"]))),$=function(){var e=function(){var e=Object(M.a)(L.a.mark((function e(n){var t,c,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.name,e.prev=1,"google"!==t){e.next=10;break}return c=new z.b,e.next=6,Object(z.f)(_,c);case 6:r=e.sent,z.b.credentialFromResult(r),e.next=16;break;case 10:if("github"!==t){e.next=16;break}return c=new z.a,e.next=14,Object(z.f)(_,c);case 14:a=e.sent,z.a.credentialFromResult(a);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n){return e.apply(this,arguments)}}();return Object(J.jsxs)(Y,{children:[Object(J.jsx)(V,{}),Object(J.jsxs)(Z,{children:[Object(J.jsxs)("button",{name:"google",onClick:e,children:["Sign In with Google",Object(J.jsx)(T.a,{icon:B.b})]}),Object(J.jsxs)("button",{name:"github",onClick:e,children:["Sign In GitHub",Object(J.jsx)(T.a,{icon:B.a})]})]})]})},ee=t(17),ne=t(28),te=t(36),ce=D.c.div(o||(o=Object(U.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  border-radius: 8px;\n  padding: 4px 8px;\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n  box-shadow: ",";\n"])),(function(e){return e.isOwner?"0 0 3px 1px":"0 0 1px"})),re=D.c.div(b||(b=Object(U.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]))),ae=D.c.div(u||(u=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #34495e;\n  img {\n    max-width: 30%;\n  }\n  :first-child {\n    font-size: 14px;\n    color: #7f8c8d;\n  }\n"]))),ie=D.c.div(d||(d=Object(U.a)(["\n  span:last-child {\n    margin-left: 25px;\n  }\n"]))),se=function(e){var n=e.nweetObj,t=e.isOwner,c=Object(y.useState)(!1),r=Object(N.a)(c,2),a=r[0],i=r[1],s=Object(y.useState)(n.text),o=Object(N.a)(s,2),b=o[0],u=o[1],d=function(){var e=Object(M.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return e.next=4,Object(ee.c)(Object(ee.d)(Object(ee.f)(),"nweets/".concat(n.id)));case 4:if(!n.attachmentUrl){e.next=7;break}return e.next=7,Object(ne.a)(Object(ne.d)(H,n.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return i((function(e){return!e}))},j=function(){var e=Object(M.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(ee.j)(Object(ee.d)(Object(ee.f)(),"nweets/".concat(n.id)),{text:b});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return console.log(t),Object(J.jsx)(ce,{isOwner:t,children:a?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("form",{onSubmit:j,children:[Object(J.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,onChange:function(e){var n=e.target.value;u(n)}}),Object(J.jsx)("input",{type:"submit",value:"NWEET"})]}),Object(J.jsx)("button",{onClick:l,children:"Cancel"})]}):Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(re,{children:[Object(J.jsxs)(ae,{children:[Object(J.jsx)("h6",{children:n.displayName}),t&&Object(J.jsxs)(ie,{children:[Object(J.jsx)("span",{onClick:d,children:Object(J.jsx)(T.a,{icon:te.c})}),Object(J.jsx)("span",{onClick:l,children:Object(J.jsx)(T.a,{icon:te.a})})]})]}),Object(J.jsxs)(ae,{children:[Object(J.jsx)("h4",{children:n.text}),n.attachmentUrl&&Object(J.jsx)("img",{alt:"",src:n.attachmentUrl})]})]})})})},oe=t(80),be=D.c.form(l||(l=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  input {\n    margin-bottom: 5px;\n    padding: 0 10px;\n    :first-child {\n      width: 100%;\n      padding: 10px;\n    }\n  }\n  label {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 5px;\n    span {\n      margin-right: 10px;\n    }\n  }\n"]))),ue=D.c.div(j||(j=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 20%;\n  box-shadow: 0 0 10px;\n  img {\n    max-width: 350px;\n    max-height: 350px;\n    width: fit-content;\n    height: fit-content;\n  }\n  span {\n    position: absolute;\n    background-color: white;\n    border-radius: 8px;\n    padding: 2px;\n    font-size: 12px;\n    top: 10px;\n    left: 10px;\n    border: 1px solid red;\n    color: red;\n  }\n  button {\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    color: red;\n    font-weight: 600;\n    border: 1px solid red;\n  }\n"]))),de=function(e){var n=e.userObj,t=Object(y.useState)(""),c=Object(N.a)(t,2),r=c[0],a=c[1],i=Object(y.useState)(""),s=Object(N.a)(i,2),o=s[0],b=s[1],u=function(){var e=Object(M.a)(L.a.mark((function e(t){var c,i,s,u;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c="",""===o){e.next=11;break}return i=Object(ne.d)(H,"".concat(n.uid,"/").concat(Object(oe.a)())),e.next=7,Object(ne.e)(i,o,"data_url");case 7:return s=e.sent,e.next=10,Object(ne.b)(s.ref);case 10:c=e.sent;case 11:return u={text:r,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:c,displayName:n.displayName},e.next=14,Object(ee.a)(Object(ee.b)(q,"nweets"),u);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 19:a(""),b("");case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(J.jsxs)(be,{onSubmit:u,children:[Object(J.jsx)("input",{value:r,onChange:function(e){var n=e.target.value;a(n)},type:"text",placeholder:"What's on your mind?",maxLength:123}),Object(J.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{children:"Add photos"}),Object(J.jsx)(T.a,{icon:te.b})]}),Object(J.jsx)("input",{type:"submit",value:"SEND"})]}),Object(J.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;t.onloadend=function(e){var n=e.currentTarget.result;b(n)},t.readAsDataURL(n)},style:{display:"none"}}),o?Object(J.jsxs)(ue,{children:[Object(J.jsx)("span",{children:"Attached Image"}),Object(J.jsx)("img",{alt:"",src:o}),Object(J.jsx)("button",{onClick:function(){return b(null)},children:"Clear"})]}):null]})},le=D.c.div(p||(p=Object(U.a)(["\n  height: 100%;\n"]))),je=D.c.div(x||(x=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  border: 1px solid;\n  padding: 10px;\n  border-radius: 8px;\n  height: 70vh;\n  width: 100%;\n  overflow-y: auto;\n  &:first-child {\n    margin-top: auto;\n  }\n"]))),pe=function(e){var n=e.userObj,t=Object(y.useState)([]),c=Object(N.a)(t,2),r=c[0],a=c[1];Object(y.useEffect)((function(){var e=Object(ee.i)(Object(ee.b)(q,"nweets"),Object(ee.h)("createdAt"));Object(ee.g)(e,(function(e){var n=e.docs.map((function(e){return Object(I.a)({id:e.id},e.data())}));a(n)}))}),[]),Object(y.useEffect)((function(){var e=document.getElementById("OutWindow"),n=e.scrollTopMax;e.scrollTop=n}));return Object(J.jsxs)(le,{children:[Object(J.jsx)(je,{onScroll:function(e){},id:"OutWindow",children:r.map((function(e){return Object(J.jsx)(se,{nweetObj:e,isOwner:e.creatorId===n.uid},e.id)}))}),Object(J.jsx)(de,{userObj:n})]})},xe=t(47),Oe=D.c.div(O||(O=Object(U.a)(["\n  height: 100%;\n  min-height: 82vh;\n  border: 1px solid;\n  border-radius: 8px;\n  padding: 5px;\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n    div {\n      display: flex;\n      justify-content: space-between;\n      gap: 20px;\n      input {\n        width: 50%;\n      }\n    }\n    label {\n      margin-right: 10px;\n    }\n    input:not(:last-child) {\n      border: none;\n      box-shadow: 0 0 4px;\n      padding: 0 7px;\n    }\n  }\n"]))),he=D.c.div(h||(h=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  h5 {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 18px;\n  }\n"]))),fe=function(e){var n=e.userObj,t=e.refreshUser,c=Object(xe.useState)(n.displayName),r=Object(N.a)(c,2),a=r[0],i=r[1],s=Object(xe.useState)(),o=Object(N.a)(s,2),b=o[0],u=o[1],d=function(){var e=Object(M.a)(L.a.mark((function e(c){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===a){e.next=4;break}return e.next=4,Object(z.g)(n,{displayName:a});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=Object(M.a)(L.a.mark((function e(){var t,c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(ee.i)(Object(ee.b)(q,"nweets"),Object(ee.k)("creatorId","==",n.uid)),e.next=3,Object(ee.e)(t);case 3:c=e.sent,r=[],c.forEach((function(e){return r.push(e.data())})),u(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){l()}),[]),Object(J.jsxs)(Oe,{children:[Object(J.jsxs)("form",{onSubmit:d,children:[Object(J.jsx)("label",{children:"Nickname"}),Object(J.jsxs)("div",{children:[Object(J.jsx)("input",{onChange:function(e){var n=e.target.value;i(n)},type:"text",placeholder:"Display name",value:a}),Object(J.jsx)("input",{type:"submit",value:"Update Profile"})]})]}),Object(J.jsxs)(he,{children:[Object(J.jsx)("h5",{children:"My Nweets"}),null===b||void 0===b?void 0:b.map((function(e){return Object(J.jsx)(se,{nweetObj:e,isOwner:e.creatorId===n.uid},e.createdAt)}))]})]})},me=D.c.nav(f||(f=Object(U.a)(["\n  display: flex;\n  background-color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  border-radius: 8px;\n"]))),ge=D.c.ul(m||(m=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  a,\n  button {\n    border: 1px solid;\n    border-radius: 8px;\n    padding: 4px 8px;\n  }\n"]))),ve=D.c.li(g||(g=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  :last-child {\n    & :last-child {\n      margin-left: 12px;\n    }\n  }\n"]))),we=function(e){var n=e.userObj,t=Object(A.f)();return Object(J.jsx)(me,{children:Object(J.jsxs)(ge,{children:[Object(J.jsx)(ve,{children:Object(J.jsx)(E.b,{to:"/profile",children:(null===n||void 0===n?void 0:n.displayName)?"".concat(n.displayName,"'s Profile"):"My Profile"})}),Object(J.jsxs)(ve,{children:[Object(J.jsx)(E.b,{to:"/",children:"Home"}),Object(J.jsx)("button",{onClick:function(){_.signOut(),t.push("/")},children:"Log out"})]})]})})},ye=D.c.div(v||(v=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 375px;\n  height: 100vh;\n  margin: auto;\n"]))),ke=D.c.main(w||(w=Object(U.a)([""]))),Se=function(e){var n=e.isLoggedIn,t=e.userObj,c=e.refreshUser;return Object(J.jsx)(ye,{children:Object(J.jsxs)(E.a,{children:[n&&Object(J.jsx)(we,{userObj:t}),Object(J.jsx)(A.c,{children:n?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(A.a,{exact:!0,path:"/",children:Object(J.jsx)(ke,{children:Object(J.jsx)(pe,{userObj:t})})}),Object(J.jsx)(A.a,{path:"/profile",children:Object(J.jsx)(ke,{children:Object(J.jsx)(fe,{refreshUser:c,userObj:t})})})]}):Object(J.jsx)(A.a,{exact:!0,path:"/",children:Object(J.jsx)(ke,{children:Object(J.jsx)($,{})})})})]})})};var Ce,Ie=function(){var e=Object(y.useState)(!1),n=Object(N.a)(e,2),t=n[0],c=n[1],r=Object(y.useState)(_.currentUser),a=Object(N.a)(r,2),i=a[0],s=a[1],o=Object(y.useState)(null),b=Object(N.a)(o,2),u=b[0],d=b[1];return Object(y.useEffect)((function(){_.onAuthStateChanged((function(e){e?(s(!0),d(e)):(s(!1),d(null)),c(!0)}))}),[]),Object(J.jsx)(J.Fragment,{children:t?Object(J.jsx)(Se,{refreshUser:function(){var e=_.currentUser;d(Object(I.a)({},e)),d(e)},isLoggedIn:i,userObj:u}):"Initializing..."})},Ne=t(60),Ue=Object(D.a)(Ce||(Ce=Object(U.a)(["\n","\n*{\n    box-sizing: border-box;\n}\nbody{\n    /* background-color: #bdc3c7; */\n}\ninput, button{\n    border:solid 1px;\n    border-radius: 8px;\n    background-color: white;\n}\nbutton{\n    cursor:pointer;\n}\na{\n    color:black;\n    text-decoration: none;\n}\n"])),Ne.a);C.a.render(Object(J.jsxs)(k.a.StrictMode,{children:[Object(J.jsx)(Ue,{}),Object(J.jsx)(Ie,{})]}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e6d52a6b.chunk.js.map