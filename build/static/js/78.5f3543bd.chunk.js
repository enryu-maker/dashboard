"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[78],{5078:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(8683),r=n(9439),s=n(2791),a=n(3612),l=n(5562),o=n(8023),c=(n(7008),n(184));function d(e){var t=e.container,n=e.item,r=e.onPress,s=(0,o.Z)("(min-width:819px)"),a=(0,o.Z)("(min-width:600px)");return console.log(n),(0,c.jsxs)("button",{className:"button",style:(0,i.Z)({display:"flex",flexDirection:a?"row":"column",justifyContent:a?"space-evenly":"flex-start",alignItems:"center",width:a?s?1e3:700:350,margin:5,backgroundColor:l.DM.white,borderRadius:3,alignSelf:a?"center":"flex-start",padding:10},t),onClick:r,children:[(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h4),{},{textAlign:"start",marginLeft:10,width:a?100:300}),children:a?n.name:"Name: ".concat(n.name)}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h4),{},{textAlign:"start",marginLeft:10,width:300}),children:a?n.email:"Email: ".concat(n.email)}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h4),{},{textAlign:"start",marginLeft:10,width:a?150:300}),children:a?""===n.phone?"Not Available":n.phone:"Phone: ".concat(""===n.phone?"Not Available":n.phone)}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({alignSelf:"center"},l.g5.h4),{},{textAlign:"start",marginLeft:10,width:a?120:300}),children:a?n.device_type:"Device: ".concat(n.device_type)}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:a?"center":"flex-start",width:a?120:300,marginLeft:10},children:[a?null:(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({alignSelf:"center"},l.g5.h4),{},{textAlign:"start"}),children:"Subscription:"}),null!==n&&void 0!==n&&n.subscription?(0,c.jsx)("div",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{backgroundColor:l.DM.green,height:20,width:20,borderRadius:15,marginLeft:a?0:10})}):(0,c.jsx)("div",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{backgroundColor:l.DM.red,height:20,width:20,borderRadius:15,marginLeft:a?0:10})})]})]})}var h=n(4238);function u(){var e=(0,o.Z)("(min-width:819px)"),t=(0,o.Z)("(min-width:600px)"),n=s.useState([]),u=(0,r.Z)(n,2),g=u[0],f=u[1],p=s.useState(!1),x=(0,r.Z)(p,2),m=x[0],Z=x[1];return s.useEffect((function(){Z(!0),h.Z.get("/userlistdetail/").then((function(e){console.log(e.data),f(e.data),Z(!1)})).catch((function(e){console.log(e),Z(!1)}))}),[]),(0,c.jsxs)("div",{style:(0,i.Z)((0,i.Z)({marginTop:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignSelf:"center",backgroundColor:l.DM.layout},l.g5.body2),{},{paddingBlockStart:10,paddingBlockEnd:70}),children:[t?(0,c.jsxs)("button",{className:"button",style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",height:50,width:t?e?1e3:700:350,margin:10,backgroundColor:l.DM.white,borderRadius:3,alignSelf:"center"},children:[(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{textAlign:"start",width:100}),children:"Username"}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{textAlign:"start",width:300}),children:"Email"}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{textAlign:"start",width:150}),children:"Phone"}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{textAlign:"start",width:120}),children:"Device"}),(0,c.jsx)("p",{style:(0,i.Z)((0,i.Z)({},l.g5.h3),{},{width:120}),children:"Subscription"})]}):null,m?(0,c.jsx)(a.Z,{}):(0,c.jsx)(c.Fragment,{children:g.map((function(e,t){return(0,c.jsx)(d,{item:e,onPress:function(){alert(e.subscription)}})}))})]})}},4238:function(e,t,n){var i=n(4165),r=n(5861),s=n(3263).Z.create({baseURL:"https://api-nerdtech.herdhelp.com/dashboard",headers:{}});s.interceptors.request.use(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("access"))&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return new Promise((function(t,n){t(e)}))}),(function(e){return e.response?401!==e.response.status?new Promise((function(t,n){n(e)})):void console.log("401"):new Promise((function(t,n){n(e)}))})),t.Z=s}}]);
//# sourceMappingURL=78.5f3543bd.chunk.js.map