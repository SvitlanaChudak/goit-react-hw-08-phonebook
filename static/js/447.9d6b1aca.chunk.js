"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{8447:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(2791),a=t(9434),i=t(5705),s=t(1724),o=t(3402),c=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},l=function(e){return e.filter},u=t(3634),d=t(4087),x=t(7697),h=t(4224),p=t(184),f={name:"",number:""},b=s.Ry().shape({name:s.Z_().min(2).required(),number:s.Z_().min(7).max(14).required()}),j=function(){var e=(0,a.v9)(c),n=(0,a.I0)();return(0,p.jsx)(i.J9,{initialValues:f,onSubmit:function(t,r){var a=r.resetForm;e.map((function(e){return e.name})).includes(t.name)?alert("".concat(t.name," is already in contacts")):(n((0,u.uK)(t)),o.Am.success("New contact successfully added"),a())},validationSchema:b,children:(0,p.jsxs)(d.xu,{width:"300px",mb:"20px",mt:"10px",padding:"25px",bgColor:"#BEE3F8",boxShadow:"2xl",borderRadius:"5px",fontWeight:"700",children:[(0,p.jsxs)("form",{children:[(0,p.jsx)("label",{htmlFor:"name",children:"Name"}),(0,p.jsx)(i.Bc,{name:"name"}),(0,p.jsx)(x.I,{placeholder:"enter name",bgColor:"white",size:"sm",mb:"20px",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)("label",{htmlFor:"number",children:"Number"}),(0,p.jsx)(i.Bc,{name:"number"}),(0,p.jsx)(x.I,{placeholder:"enter number",bgColor:"white",size:"sm",mb:"20px",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)("div",{children:(0,p.jsx)(h.z,{colorScheme:"blue",size:"sm",type:"submit",ml:"75px",children:"Add contact"})})]}),(0,p.jsx)(o.x7,{})]})})},g=t(9229),v=function(e){var n=e.id,t=e.name,r=e.number,i=(0,a.I0)();return(0,p.jsxs)(g.x,{fontSize:"md",padding:"10px",display:"flex",alignItems:"center",marginBottom:"10px",children:[t,": ",r," ",(0,p.jsx)(h.z,{type:"button",size:"xs",colorScheme:"blue",marginLeft:"10px",onClick:function(){return i((0,u.GK)(n))},children:"Delete"})]},n)},w=function(){var e=(0,a.v9)(c),n=(0,a.v9)(l),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,p.jsx)(d.xu,{bgColor:"#BEE3F8",boxShadow:"2xl",borderRadius:"5px",width:"300px",children:t.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,p.jsx)(v,{id:n,name:t,number:r},n)}))})},y=t(4808),z=function(){var e=(0,a.v9)(l),n=(0,a.I0)();return(0,p.jsxs)(g.x,{fontSize:"lg",fontWeight:"700",children:["Find contacts by name",(0,p.jsx)(x.I,{size:"sm",mt:"10px",mb:"10px",type:"text",name:"filter",width:"300px",value:e,onChange:function(e){n((0,y.T)(e.target.value))}})]})},C=t(8206);function I(){var e=(0,a.I0)(),n=(0,a.v9)(m);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,p.jsxs)(C.W,{display:"flex",flexDirection:"column",alignItems:"center",width:"300px",children:[(0,p.jsx)(g.x,{fontSize:"2xl",fontWeight:"700",mt:"20px",children:"Your contacts"}),(0,p.jsx)(j,{}),(0,p.jsx)(z,{}),(0,p.jsx)("div",{children:n&&"Request in progress..."}),(0,p.jsx)(w,{})]})}}}]);
//# sourceMappingURL=447.9d6b1aca.chunk.js.map