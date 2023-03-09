"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{2765:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,o,a,c,i,d,s,u,l=r(2791),x=r(9434),p=r(168),m=r(6444),b=r(5705),h=(0,m.ZP)(b.l0)(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 300px;\n  margin-bottom: 50px;\n  padding: 25px;\n  background-color: #00e5ff;\n  box-shadow: 0 0 10px #c6cccced;\n  border-radius: 5px;\n"]))),f=m.ZP.button(o||(o=(0,p.Z)(["\nwidth: 100px;\nmargin-left: auto;\nmargin-right: auto;\ncursor: pointer;\nborder: none;\npadding: 5px;\nborder-radius: 5px;\nbackground-color: white;\n\n:hover {\n    color: white;\n    background-color: blue;\n    box-shadow: 0 0 10px #c6cccced;\n}\n"]))),g=(0,m.ZP)(b.gN)(a||(a=(0,p.Z)(["\nborder: none;\npadding: 5px;\nborder-radius: 5px;\nbackground-color: white;\noutline: none;\n\n:hover {\n    box-shadow: 0 0 10px #c6cccced;\n}\n\n:focus {\n    box-shadow: 0 0 10px #c6cccced;\n    border: 1px solid blue;\n}\n"]))),j=r(2797),w=r(5218),v=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},y=function(n){return n.filter},k=r(3634),P=r(184),C={name:"",number:""},A=j.Ry().shape({name:j.Z_().min(2).required(),number:j.Z_().min(7).max(14).required()}),F=function(){var n=(0,x.v9)(v),e=(0,x.I0)();return(0,P.jsx)(b.J9,{initialValues:C,onSubmit:function(r,t){var o=t.resetForm;n.map((function(n){return n.name})).includes(r.name)?alert("".concat(r.name," is already in contacts")):(e((0,k.uK)(r)),w.Am.success("New contact successfully added"),o())},validationSchema:A,children:(0,P.jsxs)(h,{children:[(0,P.jsx)("label",{htmlFor:"name",children:"Name"}),(0,P.jsx)(b.Bc,{name:"name"}),(0,P.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)("label",{htmlFor:"number",children:"Number"}),(0,P.jsx)(b.Bc,{name:"number"}),(0,P.jsx)(g,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsxs)("div",{children:[(0,P.jsx)(f,{type:"submit",children:"Add contact"}),(0,P.jsx)(w.x7,{})]})]})})},_=m.ZP.li(c||(c=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n"]))),q=m.ZP.button(i||(i=(0,p.Z)(["\nmargin-left: 10px;\nwidth: 60px;\ncursor: pointer;\nborder: none;\npadding: 3px;\nborder-radius: 5px;\nbackground-color: #00e5ff;\n\n:hover {\n    color: white;\n    background-color: blue;\n    box-shadow: 0 0 10px #c6cccced;\n}\n"]))),z=function(n){var e=n.id,r=n.name,t=n.number,o=(0,x.I0)();return(0,P.jsxs)(_,{children:[r,": ",t," ",(0,P.jsx)(q,{type:"button",onClick:function(){return o((0,k.GK)(e))},children:"Delete"})]},e)},N=m.ZP.ul(d||(d=(0,p.Z)(["\nlist-style: none;\npadding: 0\n"]))),I=function(){var n=(0,x.v9)(v),e=(0,x.v9)(y),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,P.jsx)(N,{children:r.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,P.jsx)(z,{id:e,name:r,number:t},e)}))})},B=m.ZP.label(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),L=m.ZP.input(u||(u=(0,p.Z)(["\nborder: 1px solid blue;\npadding: 5px;\nborder-radius: 5px;\nbackground-color: white;\noutline: none;\n\n:hover {\n    box-shadow: 0 0 10px #c6cccced;\n}\n"]))),J=r(4808),K=function(){var n=(0,x.v9)(y),e=(0,x.I0)();return(0,P.jsxs)(B,{children:["Find contacts by name",(0,P.jsx)(L,{type:"text",name:"filter",value:n,onChange:function(n){e((0,J.T)(n.target.value))}})]})};function R(){var n=(0,x.I0)(),e=(0,x.v9)(Z);return(0,l.useEffect)((function(){n((0,k.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{children:"Your contacts"}),(0,P.jsx)(F,{}),(0,P.jsx)(K,{}),(0,P.jsx)("div",{children:e&&"Request in progress..."}),(0,P.jsx)(I,{})]})}}}]);
//# sourceMappingURL=765.e779267e.chunk.js.map