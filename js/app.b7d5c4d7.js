(function(){"use strict";var t={2290:function(t,s,e){var a=e(6369),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("Menu"),s("router-view")],1)},r=[],n=function(){var t=this,s=t._self._c;return s("nav",{staticClass:"menu"},[s("ul",[s("router-link",{attrs:{to:"/character",tag:"li","active-class":"active"}},[s("a",[t._v("Characters")])]),s("router-link",{attrs:{to:"/episodes",tag:"li","active-class":"active"}},[s("a",[t._v("Episodes")])]),s("router-link",{attrs:{to:"/locations",tag:"li","active-class":"active"}},[s("a",[t._v("Locations")])])],1)])},l=[],o={},c=o,u=e(1001),d=(0,u.Z)(c,n,l,!1,null,null,null),h=d.exports,p={components:{Menu:h}},v=p,f=(0,u.Z)(v,i,r,!1,null,null,null),_=f.exports,g=e(2631),m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"teste"},[s("Header",{attrs:{title:t.title}}),s("router-view")],1)},b=[],C=function(){var t=this,s=t._self._c;return s("p",{staticClass:"title"},[t._v(t._s(t.title)+" "+t._s(t.episode))])},P=[],y={props:["title","episode"],data(){return{}}},k=y,w=(0,u.Z)(k,C,P,!1,null,null,null),Z=w.exports,x={components:{Header:Z},data(){return{title:"Characters"}}},$=x,E=(0,u.Z)($,m,b,!1,null,null,null),O=E.exports,L=function(){var t=this,s=t._self._c;return s("div",[s("Header",{attrs:{title:t.title}}),s("router-view")],1)},M=[],D={components:{Header:Z},data(){return{title:"Episodes"}}},j=D,H=(0,u.Z)(j,L,M,!1,null,null,null),I=H.exports,N=function(){var t=this,s=t._self._c;return s("div",[s("Header",{attrs:{title:t.title}}),s("router-view")],1)},T=[],S={components:{Header:Z},data(){return{title:"Locations"}}},U=S,A=(0,u.Z)(U,N,T,!1,null,null,null),q=A.exports,z=function(){var t=this,s=t._self._c;return s("div",[s("div",[s("table",{staticClass:"tabela-custom"},[t._m(0),s("tbody",t._l(t.characters,(function(e){return s("tr",{key:e.id,staticClass:"row-table"},[s("router-link",{staticClass:"fields-table",attrs:{tag:"td",to:"/character/4"}},[t._v(t._s(e.id))]),s("router-link",{staticClass:"fields-table",attrs:{tag:"td",to:`/character/${e.id}`}},[s("img",{staticClass:"size-img",attrs:{src:e.image,alt:""}})]),s("router-link",{staticClass:"fields-table",attrs:{tag:"td",to:`/locations/${e.location.name}`}},[t._v(t._s(e.location.name))]),s("td",{staticClass:"fields-table"},[s("select",{on:{change:function(s){return t.irParaEpisodio(s.target.value)}}},[s("option",{attrs:{selected:"",disabled:""}},[t._v("Selecione")]),t._l(e.episode,(function(e,a){return s("option",{key:e.id,domProps:{value:a+1}},[t._v(t._s(a+1)+" ")])}))],2)])],1)})),0)])]),s("div",{staticClass:"container-pagination"},[s("nav",{staticClass:"pagination"},[s("ul",[s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){return t.currentPageM("first")}}},[t._v("Primeira")])]),t.currentPage-1>0?s("li",{on:{click:function(s){return t.currentPageM("down")}}},[s("a",[t._v(t._s(t.currentPage-1))])]):t._e(),s("li",{staticClass:"active"},[s("a",[t._v(t._s(t.currentPage))])]),t.currentPage+1<=165?s("li",{on:{click:function(s){return t.currentPageM("up")}}},[s("a",[t._v(t._s(t.currentPage+1))])]):t._e(),s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){return t.currentPageM("last")}}},[t._v("Ultima")])])])])])])},F=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"row-table"},[s("th",{staticClass:"fields-table"},[t._v("Id")]),s("th",{staticClass:"fields-table"},[t._v("Image")]),s("th",{staticClass:"fields-table"},[t._v("Location")]),s("th",{staticClass:"fields-table"},[t._v("Episodes")])])])}],G=(e(7658),e(5939)),R={props:["id"],components:{},data(){return{characters:[],currentPage:1,results:0,v1:1,v2:2,v3:3,v4:4,v5:5}},methods:{currentPageM(t){"last"==t&&(this.currentPage=165,this.lastPage()),"first"==t&&(this.currentPage=1,this.firstPage()),"up"==t&&(this.currentPage++,this.incrementPage()),"down"==t&&(this.currentPage--,this.decrementPage())},firstPage(){this.v1=1,this.v2=2,this.v3=3,this.v4=4,this.v5=5},lastPage(){this.v1=821,this.v2=822,this.v3=823,this.v4=824,this.v5=825},incrementPage(){this.v1=this.v1+5,this.v2=this.v2+5,this.v3=this.v3+5,this.v4=this.v4+5,this.v5=this.v5+5},decrementPage(){this.v1=this.v1-5,this.v2=this.v2-5,this.v3=this.v3-5,this.v4=this.v4-5,this.v5=this.v5-5},irParaEpisodio(t){this.$router.push(`/episodes/${t}`)},irParaLocation(t){this.$router.push(`/character/${t}`)},getCharacters(){G.Z.get("https://rickandmortyapi.com/api/character/["+this.v1+","+this.v2+","+this.v3+","+this.v4+","+this.v5+"]").then((t=>{console.log(t),this.characters=t.data,this.results=42})).catch((t=>{console.log(t)}))}},watch:{currentPage(){this.getCharacters()}},mounted(){this.getCharacters()}},B=R,J=(0,u.Z)(B,z,F,!1,null,"32a320cc",null),K=J.exports,Q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"quadro"},[s("div",{staticClass:"imagem"},[s("img",{attrs:{src:t.image,alt:""}})]),s("ul",{staticClass:"informacoes"},[s("label",{attrs:{for:""}},[t._v("Name")]),s("li",[s("input",{attrs:{disabled:"",type:"text",id:"name"},domProps:{value:t.name}})]),s("label",{attrs:{for:""}},[t._v("Status")]),s("li",[s("input",{attrs:{disabled:"",type:"text",id:"status"},domProps:{value:t.status}})]),s("label",{attrs:{for:""}},[t._v("Specie")]),s("li",[s("input",{attrs:{disabled:"",type:"text",id:"species"},domProps:{value:t.species}})]),s("label",{attrs:{for:""}},[t._v("Gender")]),s("li",[s("input",{attrs:{disabled:"",type:"text",id:"gender"},domProps:{value:t.gender}})]),s("label",{attrs:{for:""}},[t._v("Origin")]),s("li",[s("input",{attrs:{disabled:"",type:"text",id:"origin"},domProps:{value:t.origin.name}})])])])},V=[],W={props:["id"],components:{},data(){return{name:"",status:"",species:"",gender:"",origin:"",image:""}},methods:{getCharacter(){G.Z.get(`https://rickandmortyapi.com/api/character/${this.id}`).then((t=>{this.name=t.data.name,this.status=t.data.status,this.species=t.data.species,this.gender=t.data.gender,this.origin=t.data.origin,this.image=t.data.image})).catch((t=>{console.log(t)}))}},mounted(){this.getCharacter()}},X=W,Y=(0,u.Z)(X,Q,V,!1,null,"34525032",null),tt=Y.exports,st=function(){var t=this,s=t._self._c;return s("div",{staticClass:"usuario-lista"},[s("div",{staticClass:"container"},[s("table",{staticClass:"tabela-custom"},[t._m(0),s("tbody",t._l(t.episodes,(function(e){return s("tr",{key:e.id,staticClass:"row-table"},[s("td",{staticClass:"fields-table"},[t._v(t._s(e.id))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.name))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.air_date))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.episode))])])})),0)]),s("div",{staticClass:"container-pagination"},[s("nav",{staticClass:"pagination"},[s("ul",[s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){t.currentPage=1}}},[t._v("Primeira")])]),t.currentPage-1>0?s("li",{on:{click:function(s){t.currentPage--}}},[s("a",[t._v(t._s(t.currentPage-1))])]):t._e(),s("li",{staticClass:"active"},[s("a",[t._v(t._s(t.currentPage))])]),t.currentPage+1<=t.results?s("li",{on:{click:function(s){t.currentPage++}}},[s("a",[t._v(t._s(t.currentPage+1))])]):t._e(),s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){t.currentPage=t.results}}},[t._v("Ultima")])])])])])])])},et=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"row-table"},[s("th",{staticClass:"fields-table"},[t._v("Id")]),s("th",{staticClass:"fields-table"},[t._v("Name")]),s("th",{staticClass:"fields-table"},[t._v("Air Date")]),s("th",{staticClass:"fields-table"},[t._v("Episode")])])])}],at={props:["id"],data(){return{episodes:[],currentPage:1,results:0}},methods:{irParaEpisodio(t){this.$router.push(`/episodes/${t}`)},getEpisodes(){G.Z.get(`https://rickandmortyapi.com/api/episode?page=${this.currentPage}`).then((t=>{console.log(t.data.results),this.episodes=t.data.results,this.results=t.data.info.pages,console.log(this.results)})).catch((t=>{console.log(t)}))}},watch:{currentPage(){this.getEpisodes()}},mounted(){this.getEpisodes()}},it=at,rt=(0,u.Z)(it,st,et,!1,null,"d0c6f166",null),nt=rt.exports,lt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"usuario-lista"},[s("table",{staticClass:"tabela-custom"},[t._m(0),s("tbody",[s("tr",{staticClass:"row-table"},[s("td",{staticClass:"fields-table"},[t._v(t._s(t.id))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.name))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.airDate))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.episode))])])])])])},ot=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"row-table"},[s("th",{staticClass:"fields-table"},[t._v("Id")]),s("th",{staticClass:"fields-table"},[t._v("Name")]),s("th",{staticClass:"fields-table"},[t._v("Air Date")]),s("th",{staticClass:"fields-table"},[t._v("Episode")])])])}],ct={props:["id"],data(){return{episodes:[],name:"",airDate:"",episode:"",characters:[]}},methods:{irParaEpisodio(t){this.$router.push(`/location/${t}`)},getLocation(){G.Z.get(`https://rickandmortyapi.com/api/episode/${this.id}`).then((t=>{console.log(t),this.name=t.data.name,this.airDate=t.data.air_date,this.episode=t.data.episode,this.characters=t.data.characters})).catch((t=>{console.log(t)}))}},mounted(){this.getLocation()}},ut=ct,dt=(0,u.Z)(ut,lt,ot,!1,null,"0ee20f7f",null),ht=dt.exports,pt=function(){var t=this,s=t._self._c;return s("div",{},[s("div",{staticClass:"container"},[s("table",{staticClass:"tabela-custom"},[t._m(0),s("tbody",t._l(t.locations,(function(e){return s("tr",{key:e.id,staticClass:"row-table"},[s("td",{staticClass:"fields-table"},[t._v(t._s(e.id))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.name))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.type))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.dimension))]),s("td",{staticClass:"fields-table"},[t._v(t._s(e.residents.length))])])})),0)]),s("div",{staticClass:"container-pagination"},[s("nav",{staticClass:"pagination"},[s("ul",[s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){t.currentPage=1}}},[t._v("Primeira")])]),t.currentPage-1>0?s("li",{on:{click:function(s){t.currentPage--}}},[s("a",[t._v(t._s(t.currentPage-1))])]):t._e(),s("li",{staticClass:"active"},[s("a",[t._v(t._s(t.currentPage))])]),t.currentPage+1<=t.results?s("li",{on:{click:function(s){t.currentPage++}}},[s("a",[t._v(t._s(t.currentPage+1))])]):t._e(),s("li",[s("a",{staticClass:"first-last-page",on:{click:function(s){t.currentPage=t.results}}},[t._v("Ultima")])])])])])])])},vt=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"row-table"},[s("th",{staticClass:"fields-table"},[t._v("Id")]),s("th",{staticClass:"fields-table"},[t._v("Name")]),s("th",{staticClass:"fields-table"},[t._v("Type")]),s("th",{staticClass:"fields-table"},[t._v("Dimension")]),s("th",{staticClass:"fields-table"},[t._v("Population")])])])}],ft={props:["id"],components:{},data(){return{locations:[],currentPage:1,results:0}},methods:{irParaEpisodio(t){this.$router.push(`/episodes/${t}`)},getLocation(){G.Z.get(`https://rickandmortyapi.com/api/location?page=${this.currentPage}`).then((t=>{this.locations=t.data.results,this.results=t.data.info.pages,console.log(this.results)})).catch((t=>{console.log(t)}))}},watch:{currentPage(){this.getLocation()}},mounted(){this.getLocation()}},_t=ft,gt=(0,u.Z)(_t,pt,vt,!1,null,"4ec2a6ad",null),mt=gt.exports,bt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"usuario-lista"},[s("table",{staticClass:"tabela-custom"},[t._m(0),s("tbody",[s("tr",{staticClass:"row-table"},[s("td",{staticClass:"fields-table"},[t._v(t._s(t.name))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.type))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.dimension))]),s("td",{staticClass:"fields-table"},[t._v(t._s(t.residents))])])])])])},Ct=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"row-table"},[s("th",{staticClass:"fields-table"},[t._v("Name")]),s("th",{staticClass:"fields-table"},[t._v("Type")]),s("th",{staticClass:"fields-table"},[t._v("Dimension")]),s("th",{staticClass:"fields-table"},[t._v("Residents")])])])}],Pt={props:["name"],data(){return{episodes:[],type:"",residents:"",created:"",dimension:""}},methods:{getLocations(){G.Z.get(`https://rickandmortyapi.com/api/location?name=${this.name}`).then((t=>{this.type=t.data.results[0]["type"],this.created=t.data.results[0]["created"],this.dimension=t.data.results[0]["dimension"],this.residents=t.data.results[0]["residents"].length})).catch((t=>{console.log(t)}))}},mounted(){this.getLocations()}},yt=Pt,kt=(0,u.Z)(yt,bt,Ct,!1,null,"3283a5db",null),wt=kt.exports;a.ZP.use(g.ZP);const Zt=[{path:"/character",name:"characters",component:O,props:!0,children:[{path:"",component:K},{path:":id",component:tt,props:!0}]},{path:"/episodes",name:"episode",component:I,props:!0,children:[{path:"",component:nt},{path:":id",component:ht,props:!0}]},{path:"/locations",name:"locations",component:q,props:!0,children:[{path:"",component:mt},{path:":name",component:wt,props:!0}]},{path:"*",redirect:"/character"}],xt=new g.ZP({mode:"history",base:"/",routes:Zt});var $t=xt;a.ZP.config.productionTip=!1,new a.ZP({router:$t,render:t=>t(_)}).$mount("#app")}},s={};function e(a){var i=s[a];if(void 0!==i)return i.exports;var r=s[a]={exports:{}};return t[a](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(s,a,i,r){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&r||n>=r)&&Object.keys(e.O).every((function(t){return e.O[t](a[o])}))?a.splice(o--,1):(l=!1,r<n&&(n=r));if(l){t.splice(u--,1);var c=i();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var i,r,n=a[0],l=a[1],o=a[2],c=0;if(n.some((function(s){return 0!==t[s]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(o)var u=o(e)}for(s&&s(a);c<n.length;c++)r=n[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},a=self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(2290)}));a=e.O(a)})();