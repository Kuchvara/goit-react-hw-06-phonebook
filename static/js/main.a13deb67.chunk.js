(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contacts_button:"ContactsList_contacts_button__1yTs7",contacts_text:"ContactsList_contacts_text__2Vh5l"}},14:function(t,e,n){t.exports={filter_text:"Filter_filter_text__1Nemm",filter_input:"Filter_filter_input__20y9t"}},32:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(7),s=n.n(o),i=n(5),u=n(15),l=n(6),b=n(16),d=n(17),j=n(20),m=n(19),f=n(9),h=n.n(f),O=n(3),p=n(34),x={addContact:Object(O.b)("contacts/add",(function(t,e){return{payload:{id:Object(p.a)(),name:t,number:e}}})),deleteContact:Object(O.b)("contacts/delete"),changeFilter:Object(O.b)("contacts/filter")},_=n(1),C=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(l.a)({},e.currentTarget.name,e.currentTarget.value))},t.handlerSubmit=function(e){e.preventDefault();var n=t.props.contacts,a=t.state,c=a.name.toLowerCase(),r=n.find((function(t){return t.name.toLowerCase()===c})),o="".concat(a.name," is already in contacts");r?alert(o):t.props.onSubmit(a.name,a.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:h.a.form,onSubmit:this.handlerSubmit,children:[Object(_.jsxs)("label",{className:h.a.form_item,children:[Object(_.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})," Name"]}),Object(_.jsxs)("label",{className:h.a.form_item,children:[Object(_.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})," Number"]}),Object(_.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),g=Object(i.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(x.addContact(e,n))}}}))(C),v=n(10),y=n.n(v),N=function(t){var e=t.contacts,n=t.onDelete;return Object(_.jsx)("ul",{children:e.map((function(t){return Object(_.jsxs)("li",{children:[Object(_.jsxs)("span",{className:y.a.contacts_text,children:[t.name,":"]}),Object(_.jsx)("span",{className:y.a.contacts_text,children:t.number}),Object(_.jsx)("button",{type:"button",className:y.a.contacts_button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},k=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},w=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:k(n,a)}}),(function(t){return{onDelete:function(e){return t(x.deleteContact(e))}}}))(N),F=n(14),A=n.n(F),S=function(t){var e=t.handleChange,n=t.filter;return Object(_.jsxs)("label",{className:A.a.filter_text,children:[" Find contacts by name ",Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:A.a.filter_input,type:"text",name:"filter",value:n,onChange:e,autoComplete:"off"})]})},z=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{handleChange:function(e){return t(x.changeFilter(e.currentTarget.value))}}}))(S),L=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(g,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(z,{}),Object(_.jsx)(w,{})]})},T=n(8),D=n(2),B=Object(O.c)([],(a={},Object(l.a)(a,x.addContact,(function(t,e){return[e.payload].concat(Object(T.a)(t))})),Object(l.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),J=Object(O.c)("",Object(l.a)({},x.changeFilter,(function(t,e){return e.payload}))),Z=Object(D.b)({items:B,filter:J}),q=n(4),M=n(18),E=n.n(M),I=Object(T.a)(Object(O.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),P={key:"contacts",storage:E.a,blacklist:["filter"]},R=Object(O.a)({reducer:{contacts:Object(q.g)(P,Z)},middleware:I,devTools:!1}),V={store:R,persistor:Object(q.h)(R)};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(i.a,{store:V.store,children:Object(_.jsx)(u.a,{loading:null,persistor:V.persistor,children:Object(_.jsx)(L,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__3z6mB",form_item:"Form_form_item__2_2aR"}}},[[32,1,2]]]);
//# sourceMappingURL=main.a13deb67.chunk.js.map