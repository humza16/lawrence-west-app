(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[54],{1585:(t,n,o)=>{"use strict";o.d(n,{Z:()=>e});o(2791);var i=o(697),a=o(184);const e=t=>{let{children:n}=t;return(0,a.jsx)(i.Z,{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",children:(0,a.jsx)(i.Z,{maxWidth:"380px",display:"flex",flexDirection:"column",children:n})})}},2548:(t,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>j});o(2791);var i=o(610),a=o(697),e=o(890),r=o(8096),s=o(6314),d=o(2880),l=o(9709),c=o(8472),u=o(4695),g=o(8007),h=o(7689),p=o(1068),f=o(5218),m=o(1585),Z=o(9832),x=o(9970),v=o(184);const I=g.Ry().shape({email:g.Z_().required("Email is required").email("Email format is not valid")}),j=()=>{const[t,{isLoading:n}]=(0,x.hM)(),o=(0,h.s0)(),g=(0,p.cI)({resolver:(0,u.X)(I)}),{formState:{errors:j}}=g;return(0,v.jsx)(m.Z,{children:(0,v.jsxs)(Z.Z,{children:[(0,v.jsx)(i.Z,{title:"Forgot your Password",description:"Enter Email Address for verification process and we\u2019ll send you a reset link"}),(0,v.jsx)(p.RV,{...g,children:(0,v.jsxs)(a.Z,{component:"form",onSubmit:g.handleSubmit((async n=>{t(n).unwrap().then((()=>{f.ZP.success("Reset email sent")})).catch((t=>{console.log(t)})),console.log(n)})),children:[(0,v.jsx)(e.Z,{variant:"body2",fontWeight:400,fontSize:"14px",color:"#171717",mt:2,gutterBottom:!0,children:"Email address"}),(0,v.jsx)(r.Z,{fullWidth:!0,margin:"normal",children:(0,v.jsx)(c.Z,{id:"email",name:"email",placeholder:"Enter email address or phone number",autoFocus:!0})}),(0,v.jsxs)(s.Z,{spacing:2,mt:2,mb:2,children:[(0,v.jsx)(l.Z,{variant:"contained",type:"submit",loading:n,children:"Send Email"}),(0,v.jsx)(d.Z,{color:"secondary",onClick:()=>{o("/login")},children:"Back"})]})]})})]})})}},610:(t,n,o)=>{"use strict";o.d(n,{Z:()=>r});o(2791);var i=o(697),a=o(890),e=o(184);const r=t=>{let{title:n,description:o}=t;return(0,e.jsxs)(i.Z,{display:"flex",flexDirection:"column",textAlign:"center",children:[(0,e.jsx)(a.Z,{fontWeight:600,mb:4,fontSize:28,children:n}),(0,e.jsx)(a.Z,{variant:"body2",fontSize:14,color:"#86868B",children:o})]})}},8472:(t,n,o)=>{"use strict";o.d(n,{Z:()=>s});o(2791);var i=o(4280),a=o(890),e=o(1068),r=o(184);const s=t=>{var n;let{name:o,placeholder:s,autoFocus:d,type:l,...c}=t;const{control:u,formState:{errors:g}}=(0,e.Gc)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.Qr,{name:o,control:u,render:t=>{let{field:n}=t;return(0,r.jsx)(i.Z,{...n,type:l,placeholder:s,autoFocus:d,...c})}}),(0,r.jsx)(a.Z,{color:"error",fontSize:10,margin:"auto",p:0,mt:.5,display:"contents",children:null===g||void 0===g||null===(n=g[o])||void 0===n?void 0:n.message})]})}},9832:(t,n,o)=>{"use strict";o.d(n,{Z:()=>I});var i=o(2791),a=o(3457),e=o(7462),r=o(3366),s=o(3733),d=o(4419),l=o(6934),c=o(1402),u=o(5527),g=o(5878),h=o(1217);function p(t){return(0,h.Z)("MuiCard",t)}(0,g.Z)("MuiCard",["root"]);var f=o(184);const m=["className","raised"],Z=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,n)=>n.root})((()=>({overflow:"hidden"}))),x=i.forwardRef((function(t,n){const o=(0,c.Z)({props:t,name:"MuiCard"}),{className:i,raised:a=!1}=o,l=(0,r.Z)(o,m),u=(0,e.Z)({},o,{raised:a}),g=(t=>{const{classes:n}=t;return(0,d.Z)({root:["root"]},p,n)})(u);return(0,f.jsx)(Z,(0,e.Z)({className:(0,s.Z)(g.root,i),elevation:a?8:void 0,ref:n,ownerState:u},l))})),v=(0,a.Z)(x)({padding:"32px 24px",boxShadow:"0px 2px 20px 0px #83848626"}),I=t=>{let{children:n}=t;return(0,f.jsx)(v,{children:n})}},9709:(t,n,o)=>{"use strict";o.d(n,{Z:()=>b});var i=o(3366),a=o(7462),e=o(2791),r=o(4036),s=o(7384),d=o(4419),l=o(6934),c=o(1402),u=o(2880),g=o(1793),h=o(3239),p=o(9922),f=o(1217);function m(t){return(0,f.Z)("MuiLoadingButton",t)}const Z=(0,o(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var x=o(184);const v=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],I=(0,l.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>[n.root,n.startIconLoadingStart&&{["& .".concat(Z.startIconLoadingStart)]:n.startIconLoadingStart},n.endIconLoadingEnd&&{["& .".concat(Z.endIconLoadingEnd)]:n.endIconLoadingEnd}]})((t=>{let{ownerState:n,theme:o}=t;return(0,a.Z)({["& .".concat(Z.startIconLoadingStart,", & .").concat(Z.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),["&.".concat(Z.loading)]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{["& .".concat(Z.startIconLoadingStart,", & .").concat(Z.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{["& .".concat(Z.startIconLoadingStart,", & .").concat(Z.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})})),j=(0,l.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.loadingIndicator,n["loadingIndicator".concat((0,r.Z)(o.loadingPosition))]]}})((t=>{let{theme:n,ownerState:o}=t;return(0,a.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:"small"===o.size?10:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:"small"===o.size?10:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),b=e.forwardRef((function(t,n){const o=e.useContext(g.Z),l=(0,p.Z)(o,t),u=(0,c.Z)({props:l,name:"MuiLoadingButton"}),{children:f,disabled:Z=!1,id:b,loading:y=!1,loadingIndicator:S,loadingPosition:P="center",variant:L="text"}=u,w=(0,i.Z)(u,v),E=(0,s.Z)(b),k=null!=S?S:(0,x.jsx)(h.Z,{"aria-labelledby":E,color:"inherit",size:16}),M=(0,a.Z)({},u,{disabled:Z,loading:y,loadingIndicator:k,loadingPosition:P,variant:L}),R=(t=>{const{loading:n,loadingPosition:o,classes:i}=t,e={root:["root",n&&"loading"],startIcon:[n&&"startIconLoading".concat((0,r.Z)(o))],endIcon:[n&&"endIconLoading".concat((0,r.Z)(o))],loadingIndicator:["loadingIndicator",n&&"loadingIndicator".concat((0,r.Z)(o))]},s=(0,d.Z)(e,m,i);return(0,a.Z)({},i,s)})(M),C=y?(0,x.jsx)(j,{className:R.loadingIndicator,ownerState:M,children:k}):null;return(0,x.jsxs)(I,(0,a.Z)({disabled:Z||y,id:E,ref:n},w,{variant:L,classes:R,ownerState:M,children:["end"===M.loadingPosition?f:C,"end"===M.loadingPosition?C:f]}))}))},9922:(t,n,o)=>{"use strict";var i=o(4836);n.Z=function t(n,o){const i=(0,a.default)({},o);return Object.keys(n).forEach((e=>{if(e.toString().match(/^(components|slots)$/))i[e]=(0,a.default)({},n[e],i[e]);else if(e.toString().match(/^(componentsProps|slotProps)$/)){const r=n[e]||{},s=o[e];i[e]={},s&&Object.keys(s)?r&&Object.keys(r)?(i[e]=(0,a.default)({},s),Object.keys(r).forEach((n=>{i[e][n]=t(r[n],s[n])}))):i[e]=s:i[e]=r}else void 0===i[e]&&(i[e]=n[e])})),i};var a=i(o(434))},434:t=>{function n(){return t.exports=n=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,n.apply(this,arguments)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=54.a49e265c.chunk.js.map