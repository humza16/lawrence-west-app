"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[861],{2309:(e,r,s)=>{s.r(r),s.d(r,{default:()=>P});s(2791);var t=s(697),n=s(890),a=s(8096),i=s(9174),o=s(4294),l=s(6314),c=s(1068),d=s(4695),m=s(8007),h=s(5872),x=s(431),u=s(7235),p=s(5723),j=s(8472),Z=s(195),g=s(184);const f=m.Ry().shape({email:m.Z_().required("Email is required").email("Email format is not valid"),password:m.Z_().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/\d/,"Password must contain at least one number").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one special character"),confirmPassword:m.Z_().label("confirm password").required().oneOf([m.iH("password"),null],"Passwords must match"),termsAgreement:m.O7().required("Please Agree to the terms"),rememberMe:m.O7()}),w=e=>{console.log(e)},y=()=>{var e;const r=(0,h.Nq)({onSuccess:w,onError:e=>console.log(e)}),s=(0,c.cI)({resolver:(0,d.X)(f)}),{formState:{errors:m,isValid:y}}=s;return(0,g.jsx)(t.Z,{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",children:(0,g.jsxs)(t.Z,{maxWidth:"330px",display:"flex",flexDirection:"column",children:[(0,g.jsx)(x.Z,{}),(0,g.jsx)(n.Z,{variant:"h5",fontWeight:600,mt:2,children:"Create your account"}),(0,g.jsx)(c.RV,{...s,children:(0,g.jsxs)(t.Z,{component:"form",mb:2,onSubmit:s.handleSubmit((async e=>{})),children:[(0,g.jsxs)(a.Z,{fullWidth:!0,margin:"normal",children:[(0,g.jsx)(n.Z,{variant:"body2",gutterBottom:!0,children:"Email address"}),(0,g.jsx)(j.Z,{name:"email",type:"text",placeholder:"Enter email address"})]}),(0,g.jsxs)(a.Z,{fullWidth:!0,margin:"normal",children:[(0,g.jsx)(n.Z,{variant:"body2",gutterBottom:!0,children:"Password"}),(0,g.jsx)(j.Z,{name:"password",type:"password",placeholder:"Enter Password"})]}),(0,g.jsxs)(a.Z,{fullWidth:!0,margin:"normal",children:[(0,g.jsx)(n.Z,{variant:"body2",gutterBottom:!0,children:"Confirm Password"}),(0,g.jsx)(j.Z,{name:"confirmPassword",type:"password",placeholder:"Repeat Password"})]}),(0,g.jsxs)(t.Z,{display:"flex",alignItems:"center",children:[(0,g.jsx)(c.Qr,{name:"termsAgreement",control:s.control,render:e=>{let{field:r}=e;return(0,g.jsx)(i.Z,{...r})}}),(0,g.jsxs)(n.Z,{variant:"caption",children:["By continuing, I agree to the"," ",(0,g.jsx)(n.Z,{fontWeight:600,variant:"caption",display:"contents",children:"Terms of Service."})]})]}),(0,g.jsx)(n.Z,{color:"error",fontSize:10,margin:"auto",p:0,mt:.5,display:"contents",children:null===m||void 0===m||null===(e=m.termsAgreement)||void 0===e?void 0:e.message}),(0,g.jsxs)(t.Z,{display:"flex",alignItems:"center",children:[(0,g.jsx)(c.Qr,{name:"rememberMe",control:s.control,render:e=>{let{field:r}=e;return(0,g.jsx)(i.Z,{...r})}}),(0,g.jsx)(n.Z,{variant:"caption",children:"Remember me"})]}),(0,g.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2},children:"Sign Up"})]})}),(0,g.jsxs)(l.Z,{spacing:1,mb:2,children:[(0,g.jsx)(o.Z,{startIcon:(0,g.jsx)(u.Z,{}),color:"secondary",onClick:r,children:"Sign in with Google"}),(0,g.jsx)(o.Z,{startIcon:(0,g.jsx)(p.Z,{}),color:"secondary",children:"Sign in with Apple"})]}),(0,g.jsx)(Z.Z,{to:"/login",textAlign:"center",children:"Already have an account?"})]})})};var v=s(1889),b=s(4861);const P=()=>(0,g.jsxs)(v.ZP,{container:!0,children:[(0,g.jsx)(v.ZP,{item:!0,xs:0,md:6,display:{xs:"none",md:"block"},children:(0,g.jsx)(b.Z,{})}),(0,g.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,g.jsx)(y,{})})]})}}]);
//# sourceMappingURL=861.090cc273.chunk.js.map