(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),a=n(16),i=n.n(a),l=(n(23),n(3)),o=n(4),j=n(6),h=n(5),u=n(17),d=n.n(u),b=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(n(41),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Employee Directory-"})})}}]),n}(r.Component));n(42);var f=function(e){var t=e.handleSearch;return Object(c.jsx)("form",{className:"form-inline",children:Object(c.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})},m=(n(43),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],filteredUsers:[]},e.handleSearch=function(t){console.log(t.target.value);var n=t.target.value,c=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredUsers:c})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return console.log("users",this.state.users),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)(f,{handleSearch:this.handleSearch}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Image"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsxs)("th",{children:["DOB ",Object(c.jsx)("i",{children:"(YYYY/MM/DD)"})]})]})}),Object(c.jsx)("tbody",{children:this.state.filteredUsers.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("img",{src:e.picture.medium})}),Object(c.jsx)("th",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(c.jsx)("th",{children:e.cell}),Object(c.jsx)("th",{children:e.email}),Object(c.jsx)("th",{children:e.dob.date.slice(0,10)})]},e.login.uuid)}))})]})]})}}]),n}(r.Component)),x=(n(44),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("main",{children:Object(c.jsx)(m,{})})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(45);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.82f56716.chunk.js.map