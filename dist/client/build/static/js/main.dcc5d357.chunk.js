(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return m}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",c="USER_RESET_USER",o="APP_TOGGLE_SIDEBAR",i="APP_TOGGLE_SETTINGPANEL",l="SETTINGS_CHANGE_SETTINGS",u="TAGSVIEW_ADD_TAG",s="TAGSVIEW_DELETE_TAG",d="TAGSVIEW_EMPTY_TAGLIST",m="TAGSVIEW_CLOSE_OTHER_TAGS"},216:function(e,t,n){e.exports=n(408)},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return d}));var a=n(12),r=n(41);var c=function(e){return function(t){return new Promise((function(n,a){var c;(c=e,Object(r.a)({url:"/api/users/info",method:"post",data:c})).then((function(e){var r=e.data;if("ok"===r.type){t(o(r)),n(r)}else{var c=r.msg;a(c)}})).catch((function(e){a(e)}))}))}},o=function(e){return{type:a.i,role:e.role,name:e.name}};var i=n(60),l=function(e,t){return function(n){return new Promise((function(c,o){var l;(l={login:e.trim(),password:t},Object(r.a)({url:"/api/users/signin",method:"post",data:l})).then((function(e){var t=e.data;if("ok"===t.type){var r=t.token;n(function(e){return{type:a.j,token:e}}(r)),Object(i.c)(r),c(t)}else{var l=t.msg;o(l)}})).catch((function(e){o(e)}))}))}},u=function(e){return function(t){return new Promise((function(n,c){var o;(o=e,Object(r.a)({url:"/api/users/logout",method:"post",data:o})).then((function(e){var r=e.data;if("ok"===r.type)t({type:a.h}),Object(i.b)(),n(r);else{var o=r.msg;c(o)}})).catch((function(e){c(e)}))}))}},s=function(){return{type:a.b}},d=(n(21),function(e){return{type:a.d,tag:e}})},301:function(e,t,n){},304:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},327:function(e,t,n){},332:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),i=(n(221),n(13)),l=n(69),u=n(70),s=n(73),d=n(72),m=n(16),f=n(198),p=n(76),h=n(43),E=n(54),g=n(27),b=(n(102),n(45)),v=n(92),O=n.n(v),y=n(411),j=n(410);function k(e,t,n){var a,r=[];for(r=r.concat(e);r.length;){var c=r.shift();c.children&&c.children.length>0&&(r=c.children.concat(r)),n===c[t]&&(a=c)}return a}var T=n(120),S=n.n(T),w=(n(154),n(90)),I=n(121),N=n.n(I);n(291);N.a.configure({showSpinner:!1});var _=function(){return Object(a.useEffect)((function(){return N.a.start(),function(){N.a.done()}}),[]),r.a.createElement("div",{className:"app-container"},r.a.createElement(w.a,null))},x=S()({loader:function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,498))},loading:_}),P=S()({loader:function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,500))},loading:_}),A=[{path:"/question/",component:x,roles:["admin","editor","guest"]},{path:"/answer/:question",component:S()({loader:function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,499))},loading:_}),roles:["admin","editor","guest"]},{path:"/result/",component:P,roles:["admin","editor","guest"]}],G=[{title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b",path:"/question",icon:"file",roles:["admin","editor","guest"]},{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",path:"/result",icon:"file",roles:["admin","editor","guest"]}],C=b.a.Content,U=function(e,t){var n="Exam system",a=k(e,"path",t);return a&&(n="".concat(a.title," - Diplom")),n},D=Object(m.b)((function(e){return e.user}))(Object(E.g)((function(e){var t=e.role,n=e.location,a=n.pathname;return r.a.createElement(O.a,{title:U(G,a)},r.a.createElement(C,{style:{height:"calc(100% - 100px)"}},r.a.createElement(y.a,null,r.a.createElement(j.a,{key:n.pathname,timeout:500,classNames:"fade",exit:!1},r.a.createElement(E.d,{location:n},r.a.createElement(E.a,{exact:!0,from:"/",to:"/question"}),A.map((function(e){return function(e){return"admin"===t||!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(E.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(E.a,{to:"/error/404"}))))))}))),R=n(21),q=(n(158),n(160)),M=(n(104),n(6)),H=(n(146),n(33)),L=(n(155),n(108)),V=(n(301),Object(m.b)((function(e){return e.app}),{toggleSiderBar:g.e})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(M.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),K=(n(302),n(123)),B=(n(304),Object(E.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(c){return n}}(G,t),a=n&&n[0];return a&&"\u0422\u0435\u0441\u0442"!==a.title.trim()&&(n=[{title:"\u0422\u0435\u0441\u0442",path:"/question"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(K.a,null,n&&n.map((function(e){return"\u0422\u0435\u0441\u0442"===e.title?r.a.createElement(K.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(K.a.Item,{key:e.path},e.title)}))))}))),W=(n(312),b.a.Header),F=Object(m.b)((function(e){return Object(R.a)({},e.app,{},e.user)}),{logout:g.d,getUserInfo:g.b})((function(e){var t=e.token,n=e.sidebarCollapsed,a=e.logout,c=e.getUserInfo,o=e.fixedHeader;t&&c(t);var i=r.a.createElement(H.a,{onClick:function(e){switch(e.key){case"logout":!function(e){L.a.confirm({title:"\u0412\u044b\u0439\u0442\u0438",content:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?",okText:"\u0414\u0430",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onOk:function(){a(e)}})}(t)}}},r.a.createElement(H.a.Item,{key:"question"},r.a.createElement(h.b,{to:"/question"},"\u0422\u0435\u0441\u0442")),r.a.createElement(H.a.Divider,null),r.a.createElement(H.a.Item,{key:"logout"},"\u0412\u044b\u0439\u0442\u0438"));return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(W,null):null,r.a.createElement(W,{style:o?n?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:o?"fix-header":""},r.a.createElement(V,null),r.a.createElement(B,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(q.a,{overlay:i},r.a.createElement("div",null,"Admin",r.a.createElement(M.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),z=(n(313),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("h1",{className:"sidebar-title"},"126 \u043c\u0435\u043a\u0442\u0435\u043f"))}),J=n(63),Y=n(94),Q=n(192),X=n(122),Z=(n(327),H.a.SubMenu),$=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),c=Object(Y.a)(r,1)[0];return a.splice(n,0,c),a},ee=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props.role;return!("admin"!==a&&n&&!n.includes(a))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(J.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Z,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(M.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement(H.a.Item,{key:a.path},r.a.createElement(h.b,{to:a.path},a.icon?r.a.createElement(M.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=$(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e.handleMenuSelect=function(t){var n=t.key,a=k(G,"path",void 0===n?"/classes":n);e.props.addTag(a)},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(G);this.setState({menuTreeNode:e}),this.handleMenuSelect(this.state.openKey)}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(Q.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(X.a,{onDragEnd:this.onDragEnd},r.a.createElement(X.c,{droppableId:"droppable"},(function(a,c){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(a,c){return r.a.createElement(X.b,{key:a.key,draggableId:a.key,index:c},(function(c,o){return r.a.createElement("div",Object.assign({ref:c.innerRef},c.draggableProps,c.dragHandleProps),r.a.createElement(H.a,{mode:"inline",theme:"dark",onSelect:e.handleMenuSelect,selectedKeys:[t],defaultOpenKeys:n},a))}))})))})))))}}]),n}(a.Component),te=Object(m.b)((function(e){return e.user}),{addTag:g.a})(Object(E.g)(ee)),ne=b.a.Sider,ae=Object(m.b)((function(e){return Object(R.a)({},e.app,{},e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(ne,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(z,null):null,r.a.createElement(te,null))})),re=Object(m.b)((function(e){return e.settings}))((function(e){return r.a.createElement(b.a,{style:{minHeight:"100vh"}},r.a.createElement(ae,null),r.a.createElement(b.a,null,r.a.createElement(F,null),r.a.createElement(D,null)))})),ce=(n(89),n(26)),oe=(n(208),n(71)),ie=(n(201),n(145)),le=(n(202),n(111)),ue=(n(332),oe.a.create()((function(e){var t=e.form,n=e.token,c=e.login,o=e.getUserInfo,i=t.getFieldDecorator,l=Object(a.useState)(!1),u=Object(Y.a)(l,2),s=u[0],d=u[1],m=function(e){o(e).then((function(e){})).catch((function(e){le.a.error(e)}))};return n?r.a.createElement(E.a,{to:"/question"}):r.a.createElement(O.a,{title:"\u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c"},r.a.createElement("div",{className:"login-container"},r.a.createElement(oe.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e?console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438!"):function(e,t){d(!0),c(e,t).then((function(e){le.a.success("\u0423\u0434\u0430\u0447\u043d\u043e"),m(e.token)})).catch((function(e){d(!1),le.a.error(e)}))}(t.username,t.password)}))},className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443")),r.a.createElement(w.a,{spinning:s,tip:"\u0436\u04af\u043a\u0442\u0435\u0443..."},r.a.createElement(oe.a.Item,null,i("username",{rules:[{required:!0,whitespace:!0,message:"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(M.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u041b\u043e\u0433\u0438\u043d"}))),r.a.createElement(oe.a.Item,null,i("password",{rules:[{required:!0,whitespace:!0,message:"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}]})(r.a.createElement(ie.a,{prefix:r.a.createElement(M.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}))),r.a.createElement(oe.a.Item,null,r.a.createElement(ce.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u0412\u043e\u0439\u0442\u0438"))))))}))),se=Object(m.b)((function(e){return e.user}),{login:g.c,getUserInfo:g.b})(ue),de=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(h.a,null,r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/login",component:se}),r.a.createElement(E.b,{path:"/",render:function(){return t?n?r.a.createElement(re,null):void a(t).then((function(){return r.a.createElement(re,null)})):r.a.createElement(E.a,{to:"/login"})}})))}}]),n}(r.a.Component),me=Object(m.b)((function(e){return e.user}),{getUserInfo:g.b})(de),fe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(i.a,{locale:f.a},r.a.createElement(m.a,{store:p.a},r.a.createElement(me,null)))}}]),n}(a.Component);n(406),n(407);o.a.render(r.a.createElement(fe,null),document.getElementById("root"))},41:function(e,t,n){"use strict";n(155);var a=n(108),r=n(189),c=n.n(r),o=n(76),i=n(60),l=n(27),u=c.a.create({baseURL:"/",timeout:5e3});u.interceptors.request.use((function(e){return o.a.getState().user.token&&(e.headers.Authorization="Bearer ".concat(Object(i.a)())),e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),403===e.response.status&&a.a.confirm({title:"\u0416\u04af\u0439\u0435\u0434\u0435\u043d \u0448\u044b\u0493\u0443 \u043a\u0435\u0440\u0435\u043a?",content:"\u0421\u0456\u0437 \u04b1\u0437\u0430\u049b \u0443\u0430\u049b\u044b\u0442 \u0436\u04b1\u043c\u044b\u0441 \u0456\u0441\u0442\u0435\u043c\u0435\u0433\u0435\u043d\u0434\u0456\u043a\u0442\u0435\u043d \u0436\u04af\u0439\u0435\u0434\u0435\u043d \u0448\u044b\u049b\u0442\u044b\u04a3\u044b\u0437, \u043e\u0441\u044b \u0431\u0435\u0442\u0442\u0435 \u049b\u0430\u043b\u0443 \u04af\u0448\u0456\u043d \u0431\u0430\u0441 \u0442\u0430\u0440\u0442\u0443\u0493\u0430 \u043d\u0435\u043c\u0435\u0441\u0435 \u049b\u0430\u0439\u0442\u0430\u0434\u0430\u043d \u043a\u0456\u0440\u0443\u0433\u0435 \u0431\u043e\u043b\u0430\u0434\u044b",okText:"\u049b\u0430\u0439\u0442\u0430 \u0442\u0456\u0440\u043a\u0435\u043b\u0443",cancelText:"\u0431\u0430\u0441 \u0442\u0430\u0440\u0442\u0443",onOk:function(){var e=o.a.getState().user.token;o.a.dispatch(Object(l.d)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e)})),t.a=u},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(119),r=n.n(a);function c(){return r.a.get("Token")}function o(e){return r.a.set("Token",e)}function i(){return r.a.remove("Token")}},76:function(e,t,n){"use strict";var a=n(30),r=n(188),c=n(21),o=n(12),i=n(60),l={name:"",role:"",avatar:"",token:Object(i.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(112),d={showSettings:!1,sidebarLogo:!1,fixedHeader:!1,tagsView:!0};var m=n(63),f={taglist:[]};var p=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.j:return Object(c.a)({},e,{token:t.token});case o.i:return Object(c.a)({},e,{name:t.name,role:t.role,avatar:t.avatar});case o.h:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.b:return Object(c.a)({},e,{sidebarCollapsed:!e.sidebarCollapsed});case o.a:return Object(c.a)({},e,{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.c:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(c.a)({},e,Object(s.a)({},n,a)):e;default:return e}},tagsView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.d:var n=t.tag;return e.taglist.includes(n)?e:Object(c.a)({},e,{taglist:[].concat(Object(m.a)(e.taglist),[n])});case o.f:return Object(c.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return e!==t.tag})))});case o.g:return Object(c.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/classes"===e.path})))});case o.e:return Object(c.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/classes"===e.path||e===t.tag})))});default:return e}}}),h=Object(a.e)(p,Object(a.a)(r.a));t.a=h}},[[216,2,3]]]);