(this["webpackJsonparo-io"]=this["webpackJsonparo-io"]||[]).push([[0],{107:function(e,t,a){e.exports={colorOn:"#e93c3b",colorOff:"#733534",container:"style_container__2IJWL",iconWrapper:"style_iconWrapper__1_kw8",title:"style_title__2ZQOA"}},108:function(e,t,a){e.exports={speakerBackground:"App_speakerBackground__6woYJ",frame:"App_frame__3POLJ App_speakerBackground__6woYJ",trim:"App_trim__207dC",trimBar:"App_trimBar__-FnPE",trimText:"App_trimText__W3mG_"}},128:function(e,t,a){e.exports={center:"style_center__ne2Yd",container:"style_container__66-ed",leftSide:"style_leftSide__FAny-",rightSide:"style_rightSide__2Hrtd"}},1495:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(546),o=a.n(r),c=(a(570),a(62)),i=a(167),s=a.n(i),m=function(){return l.a.createElement("div",{className:s.a.container},l.a.createElement("h1",{className:s.a.title},"AlejandroWeb"),l.a.createElement("h2",{className:s.a.subtitle},"Video computer system \u2122"))},d=a(547),u=a.n(d),h=function(e){var t=e.color;return l.a.createElement("div",{className:u.a.divider,style:{backgroundColor:t}})},p=a(75),_=a.n(p),I=function(){return l.a.createElement("div",{className:_.a.polaroid},l.a.createElement(h,{color:_.a.color1}),l.a.createElement(h,{color:_.a.color2}),l.a.createElement(h,{color:_.a.color3}),l.a.createElement(h,{color:_.a.color4}),l.a.createElement(h,{color:_.a.color5}),l.a.createElement(h,{color:_.a.color6}))},y=a(548),f=a.n(y),b=a(107),v=a.n(b),g=function(e){var t=e.onClick,a=e.powerOn,n=void 0===a||a;return l.a.createElement("div",{className:v.a.container},l.a.createElement("div",{className:v.a.iconWrapper,onClick:function(){t(!n)}},l.a.createElement(f.a,{htmlColor:n?v.a.colorOn:v.a.colorOff,style:{height:20,width:20}})),l.a.createElement("span",{className:v.a.title},"Power"))},E=a(128),k=a.n(E),w=a(550),O=new(a.n(w).a)("6CDFwX2Aif1DFb9g6oq5JB8j3BKtwPPF"),P=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(c.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)(0),d=Object(c.a)(m,2),u=d[0],h=d[1],p=function(e){var t=e.tracks;l(t),s(!0),console.log(e),O.on("ended",(function(){O.next()})),O.on("timeupdate",(function(){console.log(O.audio.currentTime)}))};Object(n.useEffect)((function(){O.resolve("https://soundcloud.com/twisttted/sets/aro-io",p)}),[]);return console.log("use sound Cloud"),{currentTrack:a[u],loaded:i,nextTrack:function(){var e=u<a.length?u+1:0;h(e),O.next()},pause:function(){O.stop()},play:function(){O.play()},previousTrack:function(){h(u>0?u-1:0),O.previous()},stop:function(){O.stop()}}},N=a(63),x=a.n(N),j=a(551),C=a.n(j),B=a(553),T=a.n(B),S=a(555),D=a.n(S),A=a(554),F=a.n(A),W=a(552),J=a.n(W),L=l.a.memo((function(){var e=P(),t=e.currentTrack,a=e.loaded,n=e.play,r=e.stop,o=e.pause,c=e.nextTrack,i=e.previousTrack;return console.log("AudioPlayer",a,t),l.a.createElement("div",{className:x.a.container},l.a.createElement("div",{className:x.a.content},a?l.a.createElement("img",{alt:t.title,className:x.a.artwork,src:t.artwork_url}):null,a?l.a.createElement("div",null,l.a.createElement("h4",{className:x.a.title},t.title.toUpperCase()),l.a.createElement("div",{className:x.a.info},l.a.createElement("span",{className:x.a.time},"IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"),l.a.createElement("span",{className:x.a.time},"00 : 24"))):null),l.a.createElement("div",{className:x.a.controls},l.a.createElement(C.a,{htmlColor:"#e8e8e8",onClick:n,style:{height:20,width:20}}),l.a.createElement(J.a,{htmlColor:"#e8e8e8",onClick:r,style:{height:20,width:20}}),l.a.createElement(T.a,{htmlColor:"#e8e8e8",onClick:o,style:{height:20,width:20}}),l.a.createElement(F.a,{htmlColor:"#e8e8e8",onClick:i,style:{height:20,width:20}}),l.a.createElement(D.a,{htmlColor:"#e8e8e8",onClick:c,style:{height:20,width:20}})))})),R=function(e){var t=e.onClickPower,a=e.powerOn;return l.a.createElement("div",{className:k.a.container},l.a.createElement("div",{className:k.a.leftSide},l.a.createElement(m,null)),l.a.createElement("div",{className:k.a.center},l.a.createElement(L,null)),l.a.createElement(I,null),l.a.createElement("div",{className:k.a.rightSide},l.a.createElement(g,{onClick:t,powerOn:a})))},V=a(556),G=a.n(V),Y=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){G.a.load({active:function(){return l(!0)},google:{families:["Press Start 2P: regular"]}})}),[]),[a]},H=a(108),Q=a.n(H),X=a(43),z=a.n(X),q=a(557),K=a(106),M=a.n(K),U=a(558),Z=a(559),$=a(562),ee=a(560),te=a(563),ae=function(e){function t(e){var a;return Object(U.a)(this,t),(a=Object($.a)(this,Object(ee.a)(t).call(this,e))).ball=void 0,a.bricks=void 0,a.paddle=void 0,a}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"preload",value:function(){this.load.atlas("assets","assets/games/breakout/breakout.png","assets/games/breakout/breakout.json")}},{key:"create",value:function(){var e=this;this.physics.world.setBoundsCollision(!0,!0,!0,!1),this.bricks=this.physics.add.staticGroup({key:"assets",frame:["blue1","red1","green1","yellow1","silver1","purple1"],frameQuantity:10,gridAlign:{width:10,height:6,cellWidth:64,cellHeight:32,x:112,y:100}}),this.paddle=this.physics.add.image(400,550,"assets","paddle1").setImmovable(),this.ball=this.physics.add.image(400,500,"assets","ball1").setCollideWorldBounds(!0).setBounce(1),this.ball.setData("onPaddle",!0),this.paddle=this.physics.add.image(400,550,"assets","paddle1").setImmovable(),this.physics.add.collider(this.ball,this.bricks,this.hitBrick,void 0,this),this.physics.add.collider(this.ball,this.paddle,this.hitPaddle,void 0,this),this.input.on("pointermove",(function(t){e.paddle.x=M.a.Math.Clamp(t.x,52,748),e.ball.getData("onPaddle")&&(e.ball.x=e.paddle.x)})),this.input.on("pointerup",(function(){e.ball.getData("onPaddle")&&(e.ball.setVelocity(-75,-300),e.ball.setData("onPaddle",!1))}))}},{key:"hitBrick",value:function(e,t){t.disableBody(!0,!0),0===this.bricks.countActive()&&this.resetLevel()}},{key:"resetBall",value:function(){this.ball.setVelocity(0),this.ball.setPosition(this.paddle.x,500),this.ball.setData("onPaddle",!0)}},{key:"resetLevel",value:function(){this.resetBall(),this.bricks.children.each((function(e){e.enableBody(!1,0,0,!0,!0)}))}},{key:"hitPaddle",value:function(e,t){var a=0;e.x<t.x?(a=t.x-e.x,e.setVelocityX(-10*a)):e.x>t.x?(a=e.x-t.x,e.setVelocityX(10*a)):e.setVelocityX(2+8*Math.random())}},{key:"update",value:function(){this.ball.y>600&&this.resetBall()}}]),t}(M.a.Scene);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var le={type:M.a.WEBGL,width:320,height:480,scene:[ae],physics:{default:"arcade"}},re=function(e){return new M.a.Game(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},le,{parent:e}))},oe=a(561),ce=a.n(oe),ie=l.a.memo((function(){return console.log("GamePanel"),re("game-canvas"),l.a.createElement("div",{className:ce.a.container},l.a.createElement("div",{id:"game-canvas"}))})),se=a(168),me=a.n(se),de=function(){return l.a.createElement("div",{className:z.a.container},l.a.createElement("div",{style:{height:200,width:200,borderRadius:100,backgroundColor:"rgba(0,0,0,0.1)",margin:20}}),l.a.createElement("div",{className:z.a.center},l.a.createElement(ie,null),l.a.createElement(I,null),l.a.createElement("div",{className:z.a.centerRightPanel},l.a.createElement(me.a,{htmlColor:"#e93c3b",style:{height:28,marginTop:4,width:28}}),l.a.createElement(me.a,{htmlColor:"#e93c3b",style:{height:28,marginTop:8,width:28}}),l.a.createElement(me.a,{htmlColor:"#e93c3b",style:{height:28,marginTop:8,width:28}}),l.a.createElement("span",{className:"".concat(z.a.title," ").concat(z.a.titleTop)},"Lives"),l.a.createElement("div",{className:z.a.centerRightPanelFooter},l.a.createElement("span",{className:z.a.number},"100"),l.a.createElement("span",{className:"".concat(z.a.title," ").concat(z.a.titleBottom)},"Score")))),l.a.createElement("div",{style:{height:200,width:200,borderRadius:100,backgroundColor:"rgba(0,0,0,0.1)",margin:20}}))},ue=function(){var e=Y(),t=(Object(c.a)(e,1)[0],Object(n.useState)(!0)),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",{className:Q.a.frame},l.a.createElement(R,{onClickPower:o,powerOn:r}),l.a.createElement(de,{powerOn:r}),l.a.createElement("div",{className:Q.a.trim},l.a.createElement("span",{className:Q.a.trimBar}),l.a.createElement("span",{className:Q.a.trimText},"EST. 1984"),l.a.createElement("span",{className:Q.a.trimBar})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},167:function(e,t,a){e.exports={container:"style_container__3FXTz",subtitle:"style_subtitle__pFNoz",title:"style_title__2LQTP"}},43:function(e,t,a){e.exports={center:"style_center__3Mg01",centerRightPanel:"style_centerRightPanel__3gQaw",centerRightPanelFooter:"style_centerRightPanelFooter__n1L8D",container:"style_container__2Q5fi",title:"style_title__3U73G",titleTop:"style_titleTop__2D-Vy",titleBottom:"style_titleBottom__4iTlY",number:"style_number__3vY5J"}},547:function(e,t,a){e.exports={divider:"style_divider__2TGvW"}},561:function(e,t,a){e.exports={container:"style_container__1riyB"}},565:function(e,t,a){e.exports=a(1495)},570:function(e,t,a){},63:function(e,t,a){e.exports={artwork:"style_artwork__vzgJ5",container:"style_container__3KDcD",content:"style_content__1PHHH",controls:"style_controls__2KDN-",info:"style_info__3qIPI",lcd:"style_lcd__1Ftq-",time:"style_time__1tAiz",title:"style_title__32VF1"}},75:function(e,t,a){e.exports={color1:"#e63eb2",color2:"#e93c3b",color3:"#febb28",color4:"#fef524",color5:"#7dc663",color6:"#4fbaf1",polaroid:"style_polaroid__3Y-ox"}}},[[565,1,2]]]);
//# sourceMappingURL=main.0b5eb814.chunk.js.map