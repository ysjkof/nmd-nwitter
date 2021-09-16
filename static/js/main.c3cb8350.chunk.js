(this["webpackJsonpnmd-nwitter"]=this["webpackJsonpnmd-nwitter"]||[]).push([[0],{79:function(n,e,t){"use strict";t.r(e);var c,r,a,i,o,s,d,b,u,l,j=t(7),p=t.n(j),x=t(50),O=t.n(x),h=t(39),f=t(12),m=t(15),g=t(37),w=t(16),v=t(13),y=t(0),k=t.n(y),S=t(1),C=t(25),I=t(30),N=t(46),U=t(51),D=t(61),A=t(53),E=t(54),F=t(55),G=Object(U.a)({apiKey:"AIzaSyDuGX01d10m5JneTMNHY4UUsE5V3v_bkcQ",authDomain:"nwitter-db920.firebaseapp.com",projectId:"nwitter-db920",storageBucket:"nwitter-db920.appspot.com",messagingSenderId:"218232021739",appId:"1:218232021739:web:bdf9d95c33b7d9e07514ae",measurementId:"G-MQ950N33XB"}),M=(Object(D.a)(G),Object(A.a)()),R=Object(E.a)(),L=Object(F.a)(),z=t(6),_=v.c.form(c||(c=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  input {\n    padding: 10px 14px;\n  }\n  input:not(:last-child) {\n    margin-bottom: 14px;\n  }\n  input:last-child {\n    margin-bottom: 8px;\n    box-shadow: none;\n    cursor: pointer;\n  }\n"]))),H=v.c.button(r||(r=Object(m.a)(["\n  background: none;\n  cursor: pointer;\n  color: #d35400;\n  box-shadow: none;\n"]))),P=v.c.span(a||(a=Object(m.a)(["\n  color: red;\n  margin-bottom: 12px;\n"]))),q=function(){var n=Object(j.useState)(""),e=Object(f.a)(n,2),t=e[0],c=e[1],r=Object(j.useState)(""),a=Object(f.a)(r,2),i=a[0],o=a[1],s=Object(j.useState)(!1),d=Object(f.a)(s,2),b=d[0],u=d[1],l=Object(j.useState)(""),p=Object(f.a)(l,2),x=p[0],O=p[1],h=function(n){var e=n.target,t=e.name,r=e.value;"email"===t?c(r):"password"===t&&o(r)},m=function(){var n=Object(S.a)(k.a.mark((function n(e){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!b){n.next=7;break}return n.next=5,Object(C.c)(M,t,i);case 5:n.next=9;break;case 7:return n.next=9,Object(C.e)(M,t,i);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),O(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(_,{onSubmit:m,children:[Object(z.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:h}),Object(z.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:h}),Object(z.jsx)(P,{children:x}),Object(z.jsx)("input",{type:"submit",value:b?"Create Account":"Log In"})]}),Object(z.jsx)(H,{onClick:function(){return u((function(n){return!n}))},children:b?"Change to Sign In":"Create Account"})]})},B=v.c.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),J=v.c.div(o||(o=Object(m.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  button {\n    width: 40%;\n  }\n"]))),T=function(){var n=function(){var n=Object(S.a)(k.a.mark((function n(e){var t,c,r,a;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.target.name,n.prev=1,"google"!==t){n.next=10;break}return c=new C.b,n.next=6,Object(C.f)(M,c);case 6:r=n.sent,C.b.credentialFromResult(r),n.next=16;break;case 10:if("github"!==t){n.next=16;break}return c=new C.a,n.next=14,Object(C.f)(M,c);case 14:a=n.sent,C.a.credentialFromResult(a);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),console.error(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})));return function(e){return n.apply(this,arguments)}}();return Object(z.jsxs)(B,{children:[Object(z.jsx)(q,{}),Object(z.jsxs)(J,{children:[Object(z.jsxs)("button",{name:"google",onClick:n,children:["Sign In with Google",Object(z.jsx)(I.a,{icon:N.b})]}),Object(z.jsxs)("button",{name:"github",onClick:n,children:["Sign In GitHub",Object(z.jsx)(I.a,{icon:N.a})]})]})]})},W=t(17),Q=t(28),X=t(36);function Y(n){var e,t,c,r=new Date(n),a=r.getFullYear(),i=r.getMonth(),o=r.getDate(),s=r.getHours(),d=r.getMinutes(),b=r.getSeconds(),u=Number(i)+1,l=String(o).padStart(2,"0");return u=String(u).padStart(2,"0"),e=String(s).padStart(2,"0"),t=String(d).padStart(2,"0"),c=String(b).padStart(2,"0"),"".concat(a,"-").concat(u,"-").concat(l,";").concat(e,":").concat(t,":").concat(c)}var K,V,Z,$,nn,en,tn,cn,rn,an,on,sn=v.c.div(s||(s=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  border-radius: 8px;\n  padding: 4px 8px;\n  :hover {\n    background-color: rgb(255, 191, 191);\n  }\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n  box-shadow: ",";\n"])),(function(n){return n.isOwner?"0 0 3px 1px":"0 0 1px"})),dn=v.c.div(d||(d=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]))),bn=v.c.div(b||(b=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #34495e;\n  a img {\n    border-radius: 8px;\n    margin-top: 4px;\n    max-width: 100%;\n  }\n  :first-child {\n    font-size: 14px;\n    color: #7f8c8d;\n  }\n  h6 {\n    word-break: break-all;\n  }\n"]))),un=v.c.div(u||(u=Object(m.a)(["\n  span {\n    cursor: pointer;\n  }\n  span :hover {\n    scale: 1.3;\n  }\n  span:last-child {\n    margin-left: 18px;\n  }\n"]))),ln=v.c.div(l||(l=Object(m.a)(["\n  display: flex;\n  h5 {\n    margin-left: 10px;\n  }\n"]))),jn=function(n){var e=n.nweetObj,t=n.isOwner,c=Object(j.useState)(!1),r=Object(f.a)(c,2),a=r[0],i=r[1],o=Object(j.useState)(e.text),s=Object(f.a)(o,2),d=s[0],b=s[1],u=function(){var n=Object(S.a)(k.a.mark((function n(){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){n.next=7;break}return n.next=4,Object(W.c)(Object(W.d)(Object(W.f)(),"nweets/".concat(e.id)));case 4:if(!e.attachmentUrl){n.next=7;break}return n.next=7,Object(Q.a)(Object(Q.d)(L,e.attachmentUrl));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){return i((function(n){return!n}))},p=function(){var n=Object(S.a)(k.a.mark((function n(t){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,Object(W.j)(Object(W.d)(Object(W.f)(),"nweets/".concat(e.id)),{text:d});case 3:i(!1);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(z.jsx)(sn,{isOwner:t,children:a?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("form",{onSubmit:p,children:[Object(z.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,onChange:function(n){var e=n.target.value;b(e)}}),Object(z.jsx)("input",{type:"submit",value:"NWEET"})]}),Object(z.jsx)("button",{onClick:l,children:"Cancel"})]}):Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(dn,{children:[Object(z.jsxs)(bn,{children:[Object(z.jsx)("h4",{children:e.displayName}),Object(z.jsxs)(ln,{children:[t&&Object(z.jsxs)(un,{children:[Object(z.jsx)("span",{onClick:u,children:Object(z.jsx)(I.a,{icon:X.c})}),Object(z.jsx)("span",{onClick:l,children:Object(z.jsx)(I.a,{icon:X.a})})]}),Object(z.jsx)("h5",{children:Y(e.createdAt)})]})]}),Object(z.jsx)(bn,{children:Object(z.jsx)("h6",{children:e.text})}),e.attachmentUrl&&Object(z.jsx)(bn,{children:Object(z.jsx)("a",{href:e.attachmentUrl,children:Object(z.jsx)("img",{id:e.attachmentUrl,alt:"",src:e.attachmentUrl})})})]})})})},pn=t(81),xn=v.c.form(K||(K=Object(m.a)(["\n  width: 100%;\n  max-width: 640px;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 8px;\n  margin-bottom: 30px;\n\n  /* padding: 0px 20px 0px 20px; */\n  /* padding: 0 10px; */\n  input {\n    background: none;\n    box-shadow: 0 0 5px;\n    margin-bottom: 5px;\n    padding: 0 10px;\n    :first-child {\n      width: 100%;\n      padding: 10px;\n    }\n  }\n  label {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 5px;\n    span {\n      margin-right: 10px;\n    }\n  }\n"]))),On=v.c.div(V||(V=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: -50vh;\n  left: 1px;\n  box-shadow: 0 0 10px;\n  img {\n    max-width: 350px;\n    max-height: 350px;\n    width: fit-content;\n    height: fit-content;\n  }\n  span {\n    position: absolute;\n    background-color: white;\n    border-radius: 8px;\n    padding: 2px;\n    font-size: 12px;\n    top: 10px;\n    left: 10px;\n    border: 1px solid red;\n    color: red;\n  }\n  button {\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    color: red;\n    font-weight: 600;\n    border: 1px solid red;\n  }\n"]))),hn=function(n){var e=n.userObj,t=Object(j.useState)(""),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(j.useState)(""),o=Object(f.a)(i,2),s=o[0],d=o[1],b=function(){var n=Object(S.a)(k.a.mark((function n(t){var c,i,o,b;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),n.prev=1,c="",""===s){n.next=11;break}return i=Object(Q.d)(L,"".concat(e.uid,"/").concat(Object(pn.a)())),n.next=7,Object(Q.e)(i,s,"data_url");case 7:return o=n.sent,n.next=10,Object(Q.b)(o.ref);case 10:c=n.sent;case 11:return b={text:r,createdAt:Date.now(),creatorId:e.uid,attachmentUrl:c,displayName:e.displayName},n.next=14,Object(W.a)(Object(W.b)(R,"nweets"),b);case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),console.error("Error adding document: ",n.t0);case 19:a(""),d("");case 21:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(e){return n.apply(this,arguments)}}();return Object(z.jsxs)(xn,{onSubmit:b,children:[Object(z.jsx)("input",{value:r,onChange:function(n){var e=n.target.value;a(e)},type:"text",placeholder:"What's on your mind?",maxLength:500}),Object(z.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(z.jsxs)("div",{children:[Object(z.jsx)("span",{children:"Add photos"}),Object(z.jsx)(I.a,{icon:X.b})]}),Object(z.jsx)("input",{type:"submit",value:"SEND"})]}),Object(z.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(n){var e=n.target.files[0],t=new FileReader;t.onloadend=function(n){var e=n.currentTarget.result;d(e)},t.readAsDataURL(e)},style:{display:"none"}}),s?Object(z.jsxs)(On,{children:[Object(z.jsx)("span",{children:"Attached Image"}),Object(z.jsx)("img",{alt:"",src:s}),Object(z.jsx)("button",{onClick:function(){return d(null)},children:"Clear"})]}):null]})},fn=v.c.div(Z||(Z=Object(m.a)(["\n  height: 100%;\n  max-width: 640px;\n  margin: auto;\n"]))),mn=v.c.div($||($=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  /* border: 1px solid; */\n  padding: 10px;\n  border-radius: 8px;\n  height: 100%;\n  width: 100%;\n  &:first-child {\n    margin-top: auto;\n  }\n  padding-bottom: 90px;\n"]))),gn=function(n){var e=n.userObj,t=Object(j.useState)([]),c=Object(f.a)(t,2),r=c[0],a=c[1];return Object(j.useEffect)((function(){var n=Object(W.i)(Object(W.b)(R,"nweets"),Object(W.h)("createdAt","desc"));Object(W.g)(n,(function(n){var e=n.docs.map((function(n){return Object(h.a)({id:n.id},n.data())}));a(e)}))}),[]),Object(z.jsxs)(fn,{children:[Object(z.jsx)(mn,{id:"OutWindow",children:r.map((function(n){return Object(z.jsx)(jn,{nweetObj:n,isOwner:n.creatorId===e.uid},n.id)}))}),Object(z.jsx)(hn,{userObj:e})]})},wn=v.c.div(nn||(nn=Object(m.a)(["\n  height: 100%;\n  max-width: 640px;\n  min-height: 50vh;\n  /* border: 1px solid; */\n  border-radius: 8px;\n  padding: 5px 5px 20px 5px;\n  margin: auto;\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 45px;\n    div {\n      display: flex;\n      justify-content: space-between;\n      gap: 20px;\n      width: 100%;\n      input:first-child {\n        width: 50%;\n      }\n      input:last-child {\n        width: 30%;\n      }\n    }\n    label {\n      margin-right: 10px;\n      background-color: white;\n      border-radius: 8px;\n      padding: 3px 8px;\n    }\n    input:not(:last-child) {\n      border: none;\n      box-shadow: 0 0 4px;\n      padding: 0 7px;\n    }\n  }\n"]))),vn=v.c.div(en||(en=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    text-align: center;\n    margin-bottom: 18px;\n    background-color: white;\n    border-radius: 8px;\n    padding: 6px;\n  }\n"]))),yn=function(n){var e=n.userObj,t=n.refreshUser,c=Object(j.useState)(e.displayName),r=Object(f.a)(c,2),a=r[0],i=r[1],o=Object(j.useState)(),s=Object(f.a)(o,2),d=s[0],b=s[1],u=function(){var n=Object(S.a)(k.a.mark((function n(c){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),e.displayName===a){n.next=4;break}return n.next=4,Object(C.g)(e,{displayName:a});case 4:t();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=Object(S.a)(k.a.mark((function n(){var t,c,r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(W.i)(Object(W.b)(R,"nweets"),Object(W.k)("creatorId","==",e.uid)),n.next=3,Object(W.e)(t);case 3:c=n.sent,r=[],c.forEach((function(n){return r.push(n.data())})),b(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(j.useEffect)((function(){l()}),[]),Object(z.jsxs)(wn,{children:[Object(z.jsxs)("form",{onSubmit:u,children:[Object(z.jsx)("label",{children:"Nickname"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("input",{onChange:function(n){var e=n.target.value;i(e)},type:"text",placeholder:"Nickname",value:a}),Object(z.jsx)("input",{type:"submit",value:"Update Profile"})]})]}),Object(z.jsxs)(vn,{children:[Object(z.jsx)("h3",{children:"My Nweets"}),null===d||void 0===d?void 0:d.map((function(n){return Object(z.jsx)(jn,{nweetObj:n,isOwner:n.creatorId===e.uid},n.createdAt)}))]})]})},kn=v.c.nav(tn||(tn=Object(m.a)(["\n  display: flex;\n  background-color: none;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 640px;\n  border-radius: 8px;\n"]))),Sn=v.c.ul(cn||(cn=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  a,\n  button {\n    background-color: white;\n    border: 1px solid;\n    border-radius: 8px;\n    padding: 4px 8px;\n  }\n"]))),Cn=v.c.li(rn||(rn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  :last-child {\n    & :last-child {\n      margin-left: 12px;\n    }\n  }\n"]))),In=function(n){var e=n.userObj,t=Object(w.f)();return Object(z.jsx)(kn,{children:Object(z.jsxs)(Sn,{children:[Object(z.jsx)(Cn,{children:Object(z.jsx)(g.b,{to:"/profile",children:(null===e||void 0===e?void 0:e.displayName)?"".concat(e.displayName,"'s Profile"):"My Profile"})}),Object(z.jsxs)(Cn,{children:[Object(z.jsx)(g.b,{to:"/",children:"Home"}),Object(z.jsx)("button",{onClick:function(){M.signOut(),t.push("/")},children:"Log out"})]})]})})},Nn=v.c.div(an||(an=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 100%;\n  height: 100%;\n  margin: auto;\n"]))),Un=v.c.main(on||(on=Object(m.a)([""]))),Dn=function(n){var e=n.isLoggedIn,t=n.userObj,c=n.refreshUser;return Object(z.jsx)(Nn,{children:Object(z.jsxs)(g.a,{children:[e&&Object(z.jsx)(In,{userObj:t}),Object(z.jsx)(w.c,{children:e?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(w.a,{exact:!0,path:"/",children:Object(z.jsx)(Un,{children:Object(z.jsx)(gn,{userObj:t})})}),Object(z.jsx)(w.a,{path:"/profile",children:Object(z.jsx)(Un,{children:Object(z.jsx)(yn,{refreshUser:c,userObj:t})})})]}):Object(z.jsx)(w.a,{exact:!0,path:"/",children:Object(z.jsx)(Un,{children:Object(z.jsx)(T,{})})})})]})})};var An,En=function(){var n=Object(j.useState)(!1),e=Object(f.a)(n,2),t=e[0],c=e[1],r=Object(j.useState)(M.currentUser),a=Object(f.a)(r,2),i=a[0],o=a[1],s=Object(j.useState)(null),d=Object(f.a)(s,2),b=d[0],u=d[1];return Object(j.useEffect)((function(){M.onAuthStateChanged((function(n){n?(o(!0),u(n)):(o(!1),u(null)),c(!0)}))}),[]),Object(z.jsx)(z.Fragment,{children:t?Object(z.jsx)(Dn,{refreshUser:function(){var n=M.currentUser;u(Object(h.a)({},n)),u(n)},isLoggedIn:i,userObj:b}):"Initializing..."})},Fn=t(60),Gn=Object(v.a)(An||(An=Object(m.a)(["\n","\n@font-face {\n    font-family: 'GowunDodum-Regular';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n*{\n    box-sizing: border-box;\n}\nbody{\n    font-family: 'GowunDodum-Regular';\n    background-color: rgba(0,0,0,0.9);\n}\ninput, button{\n    border:solid 1px;\n    border-radius: 8px;\n    background-color: white;\n}\nbutton{\n    cursor:pointer;\n}\na{\n    color:black;\n    text-decoration: none;\n}\n"])),Fn.a);O.a.render(Object(z.jsxs)(p.a.StrictMode,{children:[Object(z.jsx)(Gn,{}),Object(z.jsx)(En,{})]}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.c3cb8350.chunk.js.map