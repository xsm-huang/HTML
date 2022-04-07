(function(){"use strict";var t={1919:function(t,e,n){var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("VBanner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v(" About ")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v(" Home ")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[t._m(0),n("button",{on:{click:t.back}},[t._v("back")]),n("button",{on:{click:t.forward}},[t._v("forward")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")])])}],l={name:"VBanner",methods:{back(){this.$router.back()},forward(){this.$router.forward()}}},u=l,c=n(1001),v=(0,c.Z)(u,o,s,!1,null,null,null),f=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},m=[],d={name:"VAbout"},h=d,_=(0,c.Z)(h,p,m,!1,null,null,null),w=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-body"},[n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v(" News ")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v(" Message ")])],1)]),n("div",[n("keep-alive",{attrs:{include:"HomeNews"}},[n("router-view")],1)],1)])])])},g=[],k={name:"VHome"},x=k,C=(0,c.Z)(x,b,g,!1,null,null,null),$=C.exports,y={name:"App",components:{VBanner:f,VAbout:w,VHome:$}},Z=y,E=(0,c.Z)(Z,i,a,!1,null,null,null),O=E.exports,H=n(2809),V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("news001"),n("input",{attrs:{type:"text"}})]),n("li",[t._v("news002"),n("input",{attrs:{type:"text"}})]),n("li",[t._v("news003"),n("input",{attrs:{type:"text"}})])])}],j={name:"HomeNews",activated(){console.log("激活")},deactivated(){console.log("失活")}},S=j,M=(0,c.Z)(S,V,A,!1,null,null,null),B=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{replace:"",to:{name:"detail",params:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push view")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace view")])],1)})),0),n("hr"),n("router-view")],1)},T=[],D={name:"HomeMessage",data(){return{messageList:[{id:"001",title:"消息01"},{id:"002",title:"消息02"},{id:"003",title:"消息03"}]}},methods:{pushShow(t){this.$router.push({name:"detail",params:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"detail",params:{id:t.id,title:t.title}})}}},L=D,P=(0,c.Z)(L,N,T,!1,null,null,null),F=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号: "+t._s(t.$route.params.id))]),n("li",[t._v("消息标题: "+t._s(t.$route.params.title))])])},q=[],z={name:"HomeMessageDetail"},G=z,I=(0,c.Z)(G,R,q,!1,null,null,null),J=I.exports;const K=new H.Z({routes:[{path:"/about",component:w},{path:"/home",component:$,children:[{path:"news",component:B},{path:"message",component:F,children:[{meta:{isAuth:!0},name:"detail",path:"detail/:id/:title",component:J}]}]}]});K.beforeEach(((t,e,n)=>{t.meta.isAuth?"xsm"===localStorage.username?n():alert("看不了"):n()}));var Q=K;r.Z.config.productionTip=!1,r.Z.use(H.Z),new r.Z({render:t=>t(O),router:Q}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],a=t[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(r);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunkvue_cli_test"]=self["webpackChunkvue_cli_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1919)}));r=n.O(r)})();
//# sourceMappingURL=app.1a6e96b8.js.map