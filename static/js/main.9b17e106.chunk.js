(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),l=(a(40),a(13)),s=a(1),i=a(7),m=a(8),u=a(10),p=a(9),h=a(3),d=a.n(h),f=a(12),b=a(15),v=a.n(b),E=r.a.createContext(),g=function(e,t){switch(console.log(t.payload.id),t.type){case"DELETE_CONTACT":return console.log("action id is  + ".concat(t.payload)),{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))};case"ADD_CONTACT":var a=e.contacts.slice();return a.push(t.payload),{contacts:a};case"EDIT_CONTACT":return console.log("action id is.....  + ".concat(t.id)),console.log(" the payload is .... + ".concat(t.payload.name)),console.log(e.contacts),{contacts:e.contacts.map((function(e){return e.id==t.id?e=t.payload:e}))};default:return e}},y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){var a=g(e.state,t);e.setState(a)}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=E.Consumer,N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1,num:1},e.onShowClick=function(){console.log("clicked");var t=e.state.num;t+=1,e.setState({showContactInfo:!e.state.showContactInfo,num:t})},e.onDeleteClick=function(){var e=Object(f.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"DELETE_CONTACT",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.showContactInfo;return r.a.createElement(C,null,(function(a){var n=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,e.props.name,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:function(){return e.onDeleteClick(e.props.id,n)},className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(l.b,{to:"contacts/edit/".concat(e.props.id)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),t?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",e.props.email),r.a.createElement("li",{className:"list-group-item"},"Phone: ",e.props.phone),r.a.createElement("li",{className:"list-group-item"},"Website: ",e.props.website)):null)}))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact "),"List"),t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,name:e.name,email:e.email,phone:e.phone,website:e.website})})))}))}}]),a}(n.Component);function j(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#!",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contacts/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"},"Add"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"},"About")))))))}j.defaultProps={branding:"My App"};var O=j;function w(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function x(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}var S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){e.setState({title:t.title,body:t.body}),console.log("testing!!")})),fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.title;e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h3",null,this.props.testProp))}}]),a}(n.Component),A=a(17),T=a(33),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.value,o=e.placeholder,c=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:c,name:a,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:o,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var q=P,I=a(67),R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(f.a)(d.a.mark((function t(a,n){var r,o,c,l,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,o=r.name,c=r.email,l=r.phone,""!==o){t.next=5;break}return e.setState({errors:{name:"Name is Required"}}),t.abrupt("return");case 5:if(""!==c){t.next=8;break}return e.setState({errors:{email:"Email is Required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is Required"}}),t.abrupt("return");case 11:s={id:Object(I.a)(),name:o,email:c,phone:l},a({type:"ADD_CONTACT",payload:s}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t,a){return e.setState(Object(A.a)({},t,a.target.value))},e.testChange=function(){console.log("hhhhh")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:function(t){return e.onChange("name",t)},error:c.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange.bind(e,"email"),error:c.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:o,onChange:e.onChange.bind(e,"phone"),error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}),r.a.createElement("input",{type:"text",onChange:e.testChange}))))}))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(f.a)(d.a.mark((function t(a,n){var r,o,c,l,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,o=r.name,c=r.email,l=r.phone,s=e.props.match.params.id,""!==o){t.next=6;break}return e.setState({errors:{name:"Name is Required"}}),t.abrupt("return");case 6:if(""!==c){t.next=9;break}return e.setState({errors:{email:"Email is Required"}}),t.abrupt("return");case 9:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is Required"}}),t.abrupt("return");case 12:a({type:"EDIT_CONTACT",id:s,payload:{id:s,name:o,email:c,phone:l}}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 16:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t,a){return e.setState(Object(A.a)({},t,a.target.value))},e.testChange=function(){console.log("hhhhh")},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("http://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone}),console.log(a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:function(t){return e.onChange("name",t)},error:c.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange.bind(e,"email"),error:c.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:o,onChange:e.onChange.bind(e,"phone"),error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}),r.a.createElement("input",{type:"text",onChange:e.testChange}))))}))}}]),a}(n.Component);a(64),a(65);console.log("".concat(2));var _=function(){return r.a.createElement(y,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,{branding:"Contact Manager!"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/contacts/add",component:R}),r.a.createElement(s.a,{exact:!0,path:"/contacts/edit/:id",component:M}),r.a.createElement(s.a,{exact:!0,path:"/about/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/test",render:function(){return r.a.createElement(S,{testProp:"prop1"})}}),r.a.createElement(s.a,{component:x}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9b17e106.chunk.js.map