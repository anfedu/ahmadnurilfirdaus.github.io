_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,i,o){try{var c=e[i](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,s,"next",e)}function s(e){a(o,r,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n("nKUr"),r=n("5Yp1"),i=(n("o0o1"),n("HaE+"),n("rePB")),o=n("q1tI"),c=n("R/WZ"),s=n("wx14"),l=n("Ff2n"),d=(n("17x9"),n("iuhU")),m=n("kKAo"),u=n("H2TA"),b=o.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.raised,i=void 0!==r&&r,c=Object(l.a)(e,["classes","className","raised"]);return o.createElement(m.a,Object(s.a)({className:Object(d.a)(n.root,a),elevation:i?8:1,ref:t},c))})),g=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(b),f=n("hlFM"),h=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var j=o.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,r=e.alignItems,i=void 0===r?"stretch":r,c=e.classes,m=e.className,u=e.component,b=void 0===u?"div":u,g=e.container,f=void 0!==g&&g,h=e.direction,p=void 0===h?"row":h,x=e.item,j=void 0!==x&&x,v=e.justify,y=void 0===v?"flex-start":v,w=e.lg,O=void 0!==w&&w,k=e.md,S=void 0!==k&&k,N=e.sm,C=void 0!==N&&N,I=e.spacing,E=void 0===I?0:I,W=e.wrap,M=void 0===W?"wrap":W,z=e.xl,R=void 0!==z&&z,B=e.xs,H=void 0!==B&&B,_=e.zeroMinWidth,F=void 0!==_&&_,T=Object(l.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(d.a)(c.root,m,f&&[c.container,0!==E&&c["spacing-xs-".concat(String(E))]],j&&c.item,F&&c.zeroMinWidth,"row"!==p&&c["direction-xs-".concat(String(p))],"wrap"!==M&&c["wrap-xs-".concat(String(M))],"stretch"!==i&&c["align-items-xs-".concat(String(i))],"stretch"!==a&&c["align-content-xs-".concat(String(a))],"flex-start"!==y&&c["justify-xs-".concat(String(y))],!1!==H&&c["grid-xs-".concat(String(H))],!1!==C&&c["grid-sm-".concat(String(C))],!1!==S&&c["grid-md-".concat(String(S))],!1!==O&&c["grid-lg-".concat(String(O))],!1!==R&&c["grid-xl-".concat(String(R))]);return o.createElement(b,Object(s.a)({className:A,ref:t},T))})),v=Object(u.a)((function(e){return Object(s.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return h.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(x(r,2)),width:"calc(100% + ".concat(x(r),")"),"& > $item":{padding:x(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};p.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(s.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(j),y=n("ofer"),w=n("5AJ6"),O=Object(w.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var k=o.forwardRef((function(e,t){var n=e.alt,a=e.children,r=e.classes,i=e.className,c=e.component,m=void 0===c?"div":c,u=e.imgProps,b=e.sizes,g=e.src,f=e.srcSet,h=e.variant,p=void 0===h?"circle":h,x=Object(l.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,v=function(e){var t=e.src,n=e.srcSet,a=o.useState(!1),r=a[0],i=a[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),r}({src:g,srcSet:f}),y=g||f,w=y&&"error"!==v;return j=w?o.createElement("img",Object(s.a)({alt:n,src:g,srcSet:f,sizes:b,className:r.img},u)):null!=a?a:y&&n?n[0]:o.createElement(O,{className:r.fallback}),o.createElement(m,Object(s.a)({className:Object(d.a)(r.root,r.system,r[p],i,!w&&r.colorDefault),ref:t},x),j)})),S=Object(u.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(k),N=n("Z3vd"),C=n("OrM8"),I=[{year:"2019",title:"Physics Teacher",body:"Unacademy is an Indian online education technology company based in Bangalore. It was originally created as a YouTube channel in 2010 by Gaurav Munjal (wikipedia), My experience is as physics teacher in",link:"https://unacademy.com/lesson/letihan-soal-3/4DT1HCL7",linkTitle:"unacademy"},{year:"2020",title:"Full Stack Developer",body:"Mejik utama sugiharta is software house company based in south of jakarta, My work in this company as front end developer for three month, you can see the company profile on ",link:"https://microgen.mejik.id/",linkTitle:"mejik"}],E=[{body:"My name is Ahmad Nuril Firdaus a web and mobile developer since 2020"},{body:"I was born in Jember East Java, I studied and earned a bachelor of physics education at the university of Jember"},{body:"In 2020 I took coding training as a full stack javascript, Finally I love everything about javascript"},{body:"It's fun to build apps with modern tools like react js, next js, react native, Node js, express js, graphql, mongo db, apollo and many more"}],W=Object(c.a)((function(e){return{timeLine:Object(i.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid aquamarine",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}}),timeLineItem:Object(i.a)({padding:"1rem",borderBottom:"2px solid aquamarine",position:"relative",margin:"1rem 1rem 1rem 1rem",clear:"both","&:after":{content:"''",position:"absolute"},"&:before":{content:"''",position:"absolute",right:"-0.625rem",top:"calc(50% - 5px)",borderWith:"0.625rem",transform:"rotate(45deg)"}},e.breakpoints.up("md"),{width:"44%",margin:"1rem","&:nth-of-type(2n)":{float:"right",margin:"1rem",borderColor:"aquamarine"},"&:nth-of-type(2n):before":{right:"auto",left:"-0.625rem",borderColor:"transparent transparent #bbb #bbb"}}),timeLineYear:Object(i.a)({borderRadius:23,border:"none",textAlign:"center",maxWidth:"9.375rem",margin:"0 3rem 0 auto",fontSize:19,background:"#aaa",color:"white",padding:"0.5rem 1rem","&:before":{display:"none"}},e.breakpoints.up("md"),{textAlign:"center",margin:"0 auto","&:nth-of-type(2n)":{float:"none",margin:"0 auto"},"&:nth-of-type(2n):before":{display:"none"}}),heading:{color:"#888",padding:"3rem 0",fontWeight:"bold"},subHeading:{padding:"0",color:"#888",fontWeight:"bold"},body2:{textAlign:"justify",lineHeight:1.3},mainContainer:Object(i.a)({borderRadius:0,paddingBottom:100,overflowY:"scroll",boxShadow:"none",opacity:.9,maxHeight:"80vh",minHeight:"80vh","&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-track":{boxShadow:"none",webkitBoxShadow:"none"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#bbb",outline:"none",borderRadius:30}},e.breakpoints.down("md"),{maxHeight:"100vh",minHeight:"100vh",marginBottom:70})}}));function M(){var e=W(),t=Object(o.useState)(!1);t[0],t[1];return Object(a.jsxs)(g,{component:"header",className:e.mainContainer,children:[Object(a.jsx)(f.a,{style:{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center",padding:"0 30px"},children:Object(a.jsxs)(v,{container:!0,spacing:3,justify:"center",children:[Object(a.jsxs)(v,{item:!0,lg:2,sm:12,align:"center",children:[Object(a.jsx)(y.a,{variant:"body2",children:Object(a.jsx)(S,{style:{width:190,height:190,marginBottom:10},src:"/image/profile.png"})}),Object(a.jsx)(N.a,{variant:"contained",color:"secondary",style:{textTransform:"none",width:130,fontWeight:"bold",borderRadius:23,boxShadow:"none"},children:"Certificate"})]}),Object(a.jsx)(v,{item:!0,lg:6,md:12,children:E.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{variant:"body1",children:e.body},t),Object(a.jsx)("br",{})]})}))})]})}),Object(a.jsx)(y.a,{variant:"h4",align:"center",className:e.heading,children:"Working Experience"}),Object(a.jsx)(f.a,{component:"div",className:e.timeLine,children:I.map((function(t,n){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem),children:t.year},n),Object(a.jsxs)(f.a,{component:"div",className:e.timeLineItem,children:[Object(a.jsx)(y.a,{variant:"h5",aligh:"center",className:e.subHeading,children:t.title}),Object(a.jsxs)(y.a,{aligh:"center",variant:"body2",className:e.body2,children:[t.body," ",Object(a.jsx)(C.a,{style:{color:"orange"},href:t.link,children:t.linkTitle})]})]})]})}))})]})}function z(){return Object(a.jsx)(r.a,{children:Object(a.jsx)(M,{})})}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1,4,3,5,6]]]);