(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"18dd":function(e,t,a){"use strict";a("2ab9")},"28b1":function(e,t,a){e.exports=a.p+"img/Mantikora.8a4f91cd.png"},"2ab9":function(e,t,a){},"2b7d":function(e,t,a){e.exports=a.p+"img/Mage.ec0ff826.png"},"2e7e":function(e,t,a){},4761:function(e,t,a){},"51fe":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},r=[],i=(a("ac1f"),a("5319"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"baa-logo",attrs:{src:a("7205"),alt:""}})])],1),s("ul",{staticClass:"nav-links"},[s("li",[s("a",[s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)]),e.user.loggedIn?s("li",[s("a",{on:{click:e.signOut}},[e._v("Signout")])]):s("li",[s("a",[s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)]),e.user.loggedIn?e._e():s("li",[s("a",[s("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)]),e.user.loggedIn?s("li",[s("a",[s("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1)]):e._e()]),e._m(0)])])}),o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"burger"},[a("div",{staticClass:"line1"}),a("div",{staticClass:"line2"}),a("div",{staticClass:"line3"})])}],l=(a("4160"),a("159b"),a("2591")),c={methods:{signOut:function(){var e=this;l["a"].auth().signOut().then((function(){e.$router.replace({name:"about"})})),alert("You Have been Log Out succesfully")},navSlide:function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),a=document.querySelectorAll(".nav-links li");e.addEventListener("click",(function(){t.classList.toggle("nav-active")})),a.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 1.5s ease forwards ".concat(t/7+.1,"s"),console.log(t/7)}))}},computed:{user:function(){return this.$store.getters.user}}},u=c,d=(a("18dd"),a("2877")),p=Object(d["a"])(u,i,o,!1,null,"26258e27",null),h=p.exports,m={methods:{signOut:function(){var e=this;l["a"].auth().signOut().then((function(){e.$router.replace({name:"About"})}))}},computed:{user:function(){return this.$store.getters.user}},components:{Navbar:h}},f=m,v=(a("034f"),Object(d["a"])(f,n,r,!1,null,null,null)),g=v.exports,y=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Template2Rows")],1)},w=[],_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",{staticClass:"row1"},[s("div",{staticClass:"row1-container1"},[s("h1",[e._v("What this Webiste is all about?")]),s("p",[e._v("The porpuse of this website is to show a working Vue.js aplication which holds many features that are used in modern world of web development, such as simple login and registration system, which is an user authentication, routing, desktop and mobile view, responsivnes of HTML elements and simple projects that I've crated along with this website. ")])]),s("div",{staticClass:"row1-container2"},[s("img",{staticClass:"screen-night-img",attrs:{src:a("7fdb"),alt:""}})])]),s("div",{staticClass:"row2"},[s("div",{staticClass:"row1-container2"},[s("img",{staticClass:"screen-night-img2",attrs:{src:a("e12c"),alt:""}})]),s("div",{staticClass:"row1-container1"},[s("h1",[e._v('How to see "Projects"?')]),s("br"),s("hr"),s("p",[e._v(' > Register a new account (Click "Register") '),s("br"),e._v(" > Login by usisng your new account "),s("br"),e._v(" > Once you are logged in a Projects card should appear in the navbar. Click on it! "),s("br"),e._v(" > Enjoy and test out hidden conent for Logged ussers, You can now Play game or see other apps! :D ")])])])])}],k={name:"Home",components:{}},x=k,H=(a("da6e"),Object(d["a"])(x,_,C,!1,null,"ae935070",null)),E=H.exports,S={name:"Home",components:{Template2Rows:E}},P=S,M=Object(d["a"])(P,b,w,!1,null,null,null),j=M.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"login-box"},[a("h2",[e._v("Login")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[a("div",{staticClass:"user-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"text",name:"",required:""},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}}),a("label",[e._v("E-mail")])]),a("div",{staticClass:"user-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",[e._v("Password")])]),e.error?a("p",[e._v(e._s(e.error))]):e._e(),e._m(0)])])])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"#"}},[a("span"),a("span"),a("span"),a("span"),a("button",{attrs:{type:"submit"}},[e._v("Login")])])}],$={data:function(){return{mail:"",password:"",error:null}},methods:{registerUser:function(){var e=this;l["a"].auth().signInWithEmailAndPassword(this.mail,this.password).then((function(){e.$router.replace({name:"Dashboard"})})).catch((function(t){e.error=t.message})),alert("you are Loged in")}}},L=$,A=(a("8c84"),Object(d["a"])(L,O,R,!1,null,"e22b6b8a",null)),I=A.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"login-box"},[a("h2",[e._v("Register")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[a("div",{staticClass:"user-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",[e._v("Username")])]),a("div",{staticClass:"user-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"mail",name:"",required:""},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}}),a("label",[e._v("E-mail")])]),a("div",{staticClass:"user-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",[e._v("Password")])]),e.error?a("p",[e._v(e._s(e.error))]):e._e(),e._m(0)])])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"#"}},[a("span"),a("span"),a("span"),a("span"),a("button",{attrs:{type:"submit"}},[e._v("Register")])])}],D=(a("b0c0"),{data:function(){return{name:"",mail:"",password:"",error:null}},methods:{registerUser:function(){var e=this;l["a"].auth().createUserWithEmailAndPassword(this.mail,this.password).then((function(t){t.user.updateProfile({displayName:e.name})})).catch((function(t){e.error=t.message})),this.name="",this.mail="",this.password=""}}}),N=D,V=(a("fbeb"),Object(d["a"])(N,T,B,!1,null,"23ccc732",null)),U=V.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"game",attrs:{id:"game"}},[a("div",{staticClass:"monster-and-player-wrapper"},[a("div",{staticClass:"monster-wrapper"},[a("section",{staticClass:"container monster-box",attrs:{id:"monster"}},[a("h2",[e._v("Chimera: "+e._s(e.monsterHealth))]),a("div",{staticClass:"healthbar"},[a("div",{staticClass:"healthbar__value",style:e.monsterBarStyles})]),e._m(0)])]),a("div",{staticClass:"player-wrapper"},[a("section",{staticClass:"container",attrs:{id:"player"}},[a("h2",[e._v("Player: "+e._s(e.playerHealth))]),a("div",{staticClass:"healthbar"},[a("div",{staticClass:"healthbar__value",style:e.playerBarStyles})]),a("div",{staticClass:"manabar"},[a("div",{staticClass:"manabar__value",style:e.manaBarStyles})]),e._m(1)])])]),a("div",{staticClass:"battle-log-and-controls"},[a("div",{staticClass:"controls"},[e.winner?a("section",{staticClass:"container"},[a("h2",[e._v("Game Over")]),"monster"===e.winner?a("h3",[e._v("You lost!")]):"player"===e.winner?a("h3",[e._v("You won!")]):"draw"===e.winner?a("h3",[e._v("It`s a draw")]):"playerFlee"===e.winner?a("h3",[e._v("Roll: "+e._s(e.escapeRollValue)+". You have escaped succefuly, but it wont get easier next time")]):"playerDied"===e.winner?a("h3",[e._v("Roll: "+e._s(e.escapeRollValue)+". You died, Moster cought you right before you were about to escape the dungeon.")]):e._e(),a("button",{on:{click:e.startGame}},[e._v(" New Game")])]):a("section",{attrs:{id:"controls"}},[a("button",{attrs:{disabled:e.disableButton},on:{click:function(t){return e.attackMonster()}}},[e._v("ATTACK")]),a("button",{attrs:{disabled:e.disableSpecialAttack},on:{click:function(t){return e.specialAttackMonster()}}},[e._v("Strike")]),a("button",{attrs:{disabled:e.diableHeal||e.disableButton},on:{click:function(t){return e.healPlayer()}}},[e._v("HEAL")]),a("button",{attrs:{disabled:e.disableButton},on:{click:e.flee}},[e._v("FLEE")])])]),a("div",[a("section",{staticClass:"container battle-log",attrs:{id:"log"}},[a("h2",[e._v("Battle Log")]),a("ul",e._l(e.logMessages,(function(t){return a("li",{key:t},[a("span",{class:{"log--player":"player"===t.actionBy,"log--monster":"monster"===t.actionBy}},[e._v(e._s("player"===t.actionBy?"Player":"Monster"))]),"heal"===t.actionType?a("span",[e._v(" Heals himself for "),a("span",{staticClass:"log--heal"},[e._v(e._s(t.actionValue))])]):"fail"===t.actionValue?a("span",[e._v(" attempt to escape "),a("span",{staticClass:"log--player"},[e._v(e._s(t.actionValue))])]):"success"===t.actionValue?a("span",[e._v(" attempt to escape "),a("span",{staticClass:"log--monster"},[e._v(e._s(t.actionValue))])]):a("span",[e._v(" attacks and deals "),a("span",{staticClass:"log--damage"},[e._v(e._s(t.actionValue))])])])})),0)])])])])])},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img-wrapper"},[s("img",{staticStyle:{width:"330px",height:"260px"},attrs:{src:a("28b1"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img-wrapper"},[s("img",{staticStyle:{width:"330px",height:"246px"},attrs:{src:a("2b7d"),alt:""}})])}];function Y(e,t){return Math.floor(Math.random()*(e-t))+t}var F,W,J={mounted:function(){this.$store.getters.user.loggedIn||this.$router.replace({name:"Home"})},data:function(){return{monsterHealth:100,playerHealth:100,playerMana:100,currentRound:0,escapeRollValue:null,winner:null,logMessages:[]}},methods:{startGame:function(){this.currentRound=0,this.playerMana=100,this.playerHealth=100,this.monsterHealth=100,this.winner=null,this.logMessages=[]},attackMonster:function(){this.currentRound++;var e=Y(12,5);this.monsterHealth=this.monsterHealth-e,this.addLogMessage("player","attack",e),this.attackPlayer()},attackPlayer:function(){var e=Y(15,8);this.playerHealth-=e,this.addLogMessage("monster","attack",e),console.log(this.currentRound)},specialAttackMonster:function(){this.currentRound++;var e=Y(25,10);this.monsterHealth-=e,this.addLogMessage("player","heavy strike",e),this.attackPlayer()},healPlayer:function(){var e=20,t=Y(20,8);this.currentRound++,this.playerMana-=e,this.playerHealth+t>100?this.playerHealth=100:this.playerHealth+=t,this.addLogMessage("player","heal",t),this.attackPlayer()},flee:function(){var e=Y(100,1);this.escapeRollValue=e,e<=30?(this.winner="playerDied",this.playerHealth=0,this.currentRound=0,this.addLogMessage("player","flee","fail")):(this.winner="playerFlee",this.currentRound=0,this.addLogMessage("player","flee","success"))},addLogMessage:function(e,t,a){this.logMessages.unshift({actionBy:e,actionType:t,actionValue:a})}},computed:{monsterBarStyles:function(){return this.monsterHealth<0?{width:"0%"}:{width:this.monsterHealth+"%"}},playerBarStyles:function(){return this.playerHealth<0?{width:"0%"}:{width:this.playerHealth+"%"}},manaBarStyles:function(){return{width:this.playerMana+"%"}},disableSpecialAttack:function(){return this.playerHealth<=0||this.monsterHealth<=0||("playerFlee"===this.winner||"playerDied"===this.winner||this.currentRound%3!==0)},diableHeal:function(){return this.playerHealth>=100||0===this.playerMana},testfun:function(){return 0===this.playerHealth},disableButton:function(){return"playerFlee"===this.winner||"playerDied"===this.winner||(this.playerHealth<=0||this.monsterHealth<=0)}},watch:{playerHealth:function(e){e<=0&&this.monsterHealth<=0?this.winner="draw":e<=0&&"playerDied"!==this.winner&&(this.winner="monster")},monsterHealth:function(e){e<=0&&this.playerHealth<=0?this.winner="draw":e<=0&&(this.winner="player")}},components:{}},K=J,z=(a("7cf3"),Object(d["a"])(K,G,q,!1,null,"e3767486",null)),Z=z.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TemplateGames")],1)},X=[],ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",{staticClass:"row1"},[e._m(0),s("div",{staticClass:"row1-container2"},[s("router-link",{attrs:{to:"/game"}},[s("img",{staticClass:"screen-night-img",attrs:{src:a("8c50"),alt:""}})])],1)]),s("div",{staticClass:"row2"},[e._m(1),s("div",{staticClass:"row1-container2"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"screen-night-img2",attrs:{src:a("857d"),alt:""}})])],1)])])},te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row1-container1"},[a("h1",[e._v("Dungeon Adventure")]),a("br"),a("hr"),a("p",[e._v(" I made a fighting engine fully created in Vue.js, fight system is basen on rounds, i every single round the user has to choose, what he whats to do. The purpose of the game is to salin a Monster. You can Attack, use Special Attacks, Heal yourself or If you think you wont manage, you can always choose to flee. Play smart and you will defead a monster! ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row1-container1 row-container2"},[a("h1",[e._v("Date Picker ")]),a("br"),a("hr"),a("p",[e._v(" Date Picker allows user to selected a certain date on the calendar and stores choosen date in array. User by clicking again on the same date can remove it from the array. Besieds that Calndar lights up all dates that are currently choosen (stored in array). Calndar allways opens on the current month. From this point in can be used for booking systems etc.. This is defnitly one of my more advnaced app that I've created so far. Logic was written completly in raw java script code in order to be easli transfer to other JS framewokrs. ")])])}],ae={name:"Home",components:{}},se=ae,ne=(a("c51a"),Object(d["a"])(se,ee,te,!1,null,"0cc133b0",null)),re=ne.exports,ie={mounted:function(){this.$store.getters.user.loggedIn||this.$router.replace({name:"Home"})},components:{TemplateGames:re}},oe=ie,le=Object(d["a"])(oe,Q,X,!1,null,null,null),ce=le.exports,ue={},de=Object(d["a"])(ue,F,W,!1,null,null,null),pe=de.exports;s["a"].use(y["a"]);var he=[{path:"/",name:"Home",component:j},{path:"/about",name:"About"},{path:"/login",name:"login",component:I},{path:"/register",name:"Register",component:U},{path:"/projects",name:"Projects",component:ce},{path:"/date-picker",name:"DatePicker",component:pe},{path:"/register",name:"Register",component:U},{path:"/game",name:"Game",component:Z}],me=new y["a"]({mode:"history",base:"/",routes:he}),fe=me,ve=a("2f62");s["a"].use(ve["a"]);var ge=new ve["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(e){return e.user}},mutations:{SET_LOGGED_IN:function(e,t){e.user.loggedIn=t},SET_USER:function(e,t){e.user.data=t}},actions:{fetchUser:function(e,t){var a=e.commit;a("SET_LOGGED_IN",null!==t),a("SET_USER",t?{displayName:t.displayName,email:t.email}:null)}},modules:{}});s["a"].config.productionTip=!1;var ye={apiKey:"AIzaSyApESsgSvrwKDdpZY9wb-iuDAfC8r0aCmM",authDomain:"my-awesome-base.firebaseapp.com",databaseURL:"https://my-awesome-base.firebaseio.com",projectId:"my-awesome-base",storageBucket:"my-awesome-base.appspot.com",messagingSenderId:"605264774093",appId:"1:605264774093:web:2f2cc62db7e932d9c4fa84"};l["a"].initializeApp(ye),l["a"].auth().onAuthStateChanged((function(e){ge.dispatch("fetchUser",e)})),new s["a"]({router:fe,store:ge,render:function(e){return e(g)}}).$mount("#app")},7205:function(e,t,a){e.exports=a.p+"img/logoBAA.6da09638.gif"},"7cf3":function(e,t,a){"use strict";a("2e7e")},"7fdb":function(e,t,a){e.exports=a.p+"img/gif2.0deaed78.gif"},"857d":function(e,t,a){e.exports=a.p+"img/calendargif.41a17bbf.gif"},"85ec":function(e,t,a){},"8c50":function(e,t,a){e.exports=a.p+"img/gamegif.48330420.gif"},"8c84":function(e,t,a){"use strict";a("4761")},bada:function(e,t,a){},c51a:function(e,t,a){"use strict";a("bada")},d7e7:function(e,t,a){},da6e:function(e,t,a){"use strict";a("51fe")},e12c:function(e,t,a){e.exports=a.p+"img/gif5.b461c057.gif"},fbeb:function(e,t,a){"use strict";a("d7e7")}});
//# sourceMappingURL=app.71fd4475.js.map