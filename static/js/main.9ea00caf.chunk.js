(this.webpackJsonpfrontend_hatchway=this.webpackJsonpfrontend_hatchway||[]).push([[0],{22:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(15),i=s.n(a),r=(s(22),s(3)),j=s(16),l=s.n(j),d=(s(41),s(17)),u=s(0);var o=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(u.jsxs)("div",{onKeyDown:function(e){var t=e.target.value;"Enter"===e.key&&t&&(n([].concat(Object(d.a)(s),[t])),e.target.value=null)},children:[Object(u.jsx)("ul",{className:"tagList",children:s.length>0&&s.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))}),Object(u.jsx)("input",{type:"text",placeholder:"Add A Tag"})]})};var h=function(e){for(var t=e.studentInfo,s=Object(c.useState)(!1),n=Object(r.a)(s,2),a=n[0],i=n[1],j=t.grades,l=0,d=0;d<j.length;d++)l+=parseInt(j[d],10);var h=l/j.length;return Object(u.jsxs)("div",{className:"studentDiv",children:[Object(u.jsx)("div",{className:"imageDiv",children:Object(u.jsx)("img",{src:t.pic,alt:"student pic"})}),Object(u.jsxs)("div",{className:"studentInfo",children:[Object(u.jsxs)("h1",{className:"title",children:[t.firstName," ",t.lastName]}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("p",{children:["Email: ",t.email]}),Object(u.jsxs)("p",{children:["Company: ",t.company]}),Object(u.jsxs)("p",{children:["Skill: ",t.skill]}),Object(u.jsxs)("p",{children:["Average: ",h,"%"]})]}),Object(u.jsx)("div",{className:"grades",children:a&&j.map((function(e,t){return Object(u.jsxs)("p",{children:["Test ",t+1,": ",Object(u.jsxs)("span",{children:[e,"%"]})]})}))}),Object(u.jsx)(o,{}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{className:"collapseGrades",children:Object(u.jsx)("button",{onClick:function(){i(!a)},children:a?"-":"+"})})]})};var b=function(){var e="https://api.hatchways.io/assessment/students",t=Object(c.useState)(null),s=Object(r.a)(t,2),n=s[0],a=s[1],i=Object(c.useState)(""),j=Object(r.a)(i,2),d=j[0],o=j[1];return Object(c.useEffect)((function(){l.a.get(e).then((function(e){a(e.data.students)}))}),[e]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Bienvenu Faraja"}),n?Object(u.jsxs)("div",{className:"studentList",children:[Object(u.jsx)("input",{type:"text",placeholder:"Search by name",onChange:function(e){o(e.target.value)}}),Object(u.jsx)("hr",{}),n.filter((function(e){return""===d?e:e.firstName.toLowerCase().includes(d.toLowerCase())||e.lastName.toLowerCase().includes(d.toLowerCase())})).map((function(e){return Object(u.jsx)(h,{studentInfo:e},e.id)}))]}):Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Loading..."})})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9ea00caf.chunk.js.map