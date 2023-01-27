"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[465],{8465:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(8683),r=n(9439),s=n(2791),o=n(5562),i=(n(7008),n(8023)),l=n(184),d=function(e){var t=e.container,n=e.label,r=e.Icon,s=e.appendComponent,d=e.onPress,c=(0,i.Z)("(min-width:819px)"),u=(0,i.Z)("(min-width:600px)");return(0,l.jsxs)("button",{className:"button",style:(0,a.Z)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",width:u?c?1e3:700:350,margin:10,backgroundColor:o.DM.white,borderRadius:3,alignSelf:"center"},t),onClick:d,children:[(0,l.jsxs)("p",{style:(0,a.Z)((0,a.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",alignSelf:"flex-start",paddingInline:20,paddingBlock:5},o.g5.body2),{},{color:o.DM.gray}),children:[(0,l.jsx)(r,{size:26,color:o.DM.gray}),"\xa0",n]}),s]})},c=n(8820),u=n(2165),h=n(2839),y=n(466),m=n(2891),x=n(5667),g=n(3142),p=n(3909),f=n(1041),j=n(1048),k=n(1578),b=n(4238);function D(){var e=s.useState([]),t=(0,r.Z)(e,2),n=t[0],D=t[1],M=s.useState([]),Z=(0,r.Z)(M,2),v=Z[0],P=Z[1];s.useEffect((function(){b.Z.get("/getusersmonthly/").then((function(e){P(e.data)})).catch((function(e){console.log(e)})),function(){var e=[];b.Z.get("/animalcount/").then((function(t){Object.entries(t.data).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],s=n[1];e.push({name:a,count:s})})),D(e)}))}()}),[]);var w=(0,i.Z)("(min-width:819px)"),C=(0,i.Z)("(min-width:600px)"),I=function(e){var t=e.active,n=e.payload,r=e.label;return t&&n&&n.length?(0,l.jsx)("div",{style:(0,a.Z)((0,a.Z)({backgroundColor:o.DM.transparentPrimary2},o.g5.h3),{},{padding:"2px",borderRadius:"2px"}),children:(0,l.jsx)("p",{className:"label",children:"".concat(r," : ").concat(n[0].value," ","User")})}):null},K=[{name:"Android",value:300},{name:"IOS",value:300}],B=[o.DM.transparentPrimary,o.DM.transparentPrimary2,"#FFBB28","#FF8042"],S=Math.PI/180;return(0,l.jsxs)("div",{style:(0,a.Z)((0,a.Z)({marginTop:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:o.DM.layout},o.g5.body2),{},{paddingBlockStart:10,paddingBlockEnd:70}),children:[(0,l.jsx)(d,{Icon:c.nf1,label:"Active Users",onPress:function(){},appendComponent:(0,l.jsxs)(u.w,{width:C?w?900:700:350,height:400,data:v,margin:{top:25,right:30,bottom:C?10:50,left:-15},children:[(0,l.jsx)(h.q,{strokeDasharray:"3 3",stroke:o.DM.transparentPrimary}),(0,l.jsx)(y.K,{dataKey:"date",angle:w?0:-270,tickMargin:w?10:30,style:(0,a.Z)((0,a.Z)({},o.g5.h4),{},{backgroundColor:o.DM.Primary})}),(0,l.jsx)(m.B,{style:(0,a.Z)({},o.g5.h4)}),(0,l.jsx)(x.u,{content:(0,l.jsx)(I,{})}),(0,l.jsx)(g.x,{type:"monotoneX",dataKey:"count",stroke:o.DM.Primary,strokeWidth:2,dot:{stroke:o.DM.Primary,strokeWidth:1,r:5,strokeDasharray:""}})]})}),(0,l.jsx)(d,{Icon:c.nf1,label:"New Users",onPress:function(){},appendComponent:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:C?"row":"column"},children:[(0,l.jsxs)(u.w,{width:C?w?500:700:350,height:400,data:[{name:"Sun",student:11,fees:120},{name:"Mon",student:15,fees:12},{name:"Tue",student:5,fees:10},{name:"Wed",student:10,fees:5},{name:"Thu",student:9,fees:4},{name:"Fri",student:10,fees:8},{name:"Sat",student:3,fees:5}],margin:{top:25,right:30,bottom:C?10:50,left:-15},children:[(0,l.jsx)(h.q,{strokeDasharray:"3 3",stroke:o.DM.transparentPrimary}),(0,l.jsx)(y.K,{dataKey:"name",angle:w?0:-270,tickMargin:w?10:30,style:(0,a.Z)((0,a.Z)({},o.g5.h4),{},{backgroundColor:o.DM.Primary})}),(0,l.jsx)(m.B,{style:(0,a.Z)({},o.g5.h4)}),(0,l.jsx)(x.u,{content:(0,l.jsx)(I,{})}),(0,l.jsx)(g.x,{type:"monotoneX",dataKey:"student",stroke:o.DM.Primary,strokeWidth:2,dot:{stroke:o.DM.Primary,strokeWidth:1,r:5,strokeDasharray:""}})]}),(0,l.jsx)("div",{style:{width:"2.5px",backgroundColor:o.DM.lightGray1}}),(0,l.jsx)(p.u,{width:C?w?500:700:350,height:350,children:(0,l.jsx)(f.b,{labelLine:!1,paddingAngle:5,label:function(e){var t=e.cx,n=e.cy,r=e.midAngle,s=e.innerRadius,i=e.outerRadius,d=e.percent,c=e.name,u=(e.index,s+.3*(i-s)),h=t+u*Math.cos(-r*S),y=n+u*Math.sin(-r*S);return(0,l.jsx)("text",{style:(0,a.Z)({},o.g5.h3),x:h-15,y:y,fill:o.DM.black,textAnchor:h>t?"start":"end",dominantBaseline:"central",children:"".concat(c," ").concat((100*d).toFixed(0),"%")})},isAnimationActive:!1,data:K,dataKey:"value",cx:"50%",cy:"50%",outerRadius:120,innerRadius:60,children:K.map((function(e,t){return(0,l.jsx)(j.b,{fill:B[t%B.length]},"cell-".concat(t))}))})})]})}),(0,l.jsx)(d,{Icon:k.ySh,label:"Animals",onPress:function(){},appendComponent:(0,l.jsxs)(u.w,{width:C?w?900:700:350,height:400,data:n,margin:{top:25,right:30,bottom:C?10:50,left:-15},children:[(0,l.jsx)(h.q,{strokeDasharray:"3 3",stroke:o.DM.transparentPrimary}),(0,l.jsx)(y.K,{dataKey:"name",angle:w?0:-270,tickMargin:w?10:30,style:(0,a.Z)((0,a.Z)({},o.g5.h4),{},{backgroundColor:o.DM.Primary})}),(0,l.jsx)(m.B,{style:(0,a.Z)({},o.g5.h4)}),(0,l.jsx)(x.u,{content:(0,l.jsx)(I,{})}),(0,l.jsx)(g.x,{type:"monotoneX",dataKey:"count",stroke:o.DM.Primary,strokeWidth:2,dot:{stroke:o.DM.Primary,strokeWidth:1,r:5,strokeDasharray:""}})]})})]})}}}]);
//# sourceMappingURL=465.b094c950.chunk.js.map