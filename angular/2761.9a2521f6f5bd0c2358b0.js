"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2761],{2761:(L,M,l)=>{l.r(M),l.d(M,{TopicModule:()=>T});var _=l(8583),P=l(5855),n=l(639),m=l(4981);function y(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"span",37),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(3).playVideo(c)}),n.qZA()}}const s=function(e){return[e]};function f(e,i){if(1&e&&(n.TgZ(0,"div",33),n.TgZ(1,"h4",34),n._uU(2),n.qZA(),n.TgZ(3,"div",35),n.YNc(4,y,1,0,"span",36),n.qZA(),n.qZA()),2&e){const t=i.$implicit,o=i.index,r=n.oxw(2);n.xp6(1),n.s9C("id",o),n.uIk("data-target","#collapse"+n.VKq(8,s,o))("aria-controls","collapse"+n.VKq(10,s,o)),n.xp6(1),n.Oqu(t.topicName),n.xp6(1),n.s9C("id","collapse"+o),n.Q6J("ngClass",r.showCollapse(o)),n.uIk("aria-labelledby",n.VKq(12,s,o)),n.xp6(1),n.Q6J("ngForOf",t.videoList)}}function v(e,i){1&e&&n._UZ(0,"a",39),2&e&&n.Q6J("href",i.$implicit,n.LSH)}function h(e,i){if(1&e&&(n.TgZ(0,"div",33),n.TgZ(1,"h4",34),n._uU(2),n.qZA(),n.TgZ(3,"div",35),n.YNc(4,v,1,1,"a",38),n.qZA(),n.qZA()),2&e){const t=i.$implicit,o=i.index,r=n.oxw(2);n.xp6(1),n.s9C("id",o),n.uIk("data-target","#collapse"+n.VKq(8,s,o))("aria-controls","collapse"+n.VKq(10,s,o)),n.xp6(1),n.Oqu(t.topicName),n.xp6(1),n.s9C("id","collapse"+o),n.Q6J("ngClass",r.showCollapse(o)),n.uIk("aria-labelledby",n.VKq(12,s,o)),n.xp6(1),n.Q6J("ngForOf",t.documentList)}}function k(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",26),n.TgZ(1,"div",27),n.TgZ(2,"button",28),n.NdJ("click",function(){return n.CHM(t),n.oxw().toggler("L")}),n._uU(3,"Lectures"),n.qZA(),n.TgZ(4,"button",29),n.NdJ("click",function(){return n.CHM(t),n.oxw().toggler("N")}),n._uU(5,"Notes"),n.qZA(),n.qZA(),n.TgZ(6,"div",30),n.YNc(7,f,5,14,"div",31),n.qZA(),n.TgZ(8,"div",32),n.YNc(9,h,5,14,"div",31),n.qZA(),n.qZA()}if(2&e){const t=n.oxw();n.xp6(7),n.Q6J("ngForOf",t.topicList.result),n.xp6(2),n.Q6J("ngForOf",t.topicList.result)}}const x=[{path:"",component:(()=>{class e{constructor(t,o){this.userService=t,this.activatedRoute=o,this.videoId="1iHQEKssgX8"}ngOnInit(){this.cName=this.activatedRoute.snapshot.paramMap.get("id"),this.subject=this.activatedRoute.snapshot.paramMap.get("topic"),this.getLmsCourseTopic(),this.reloadIfNecessary(),this.embedYt(this.videoId),this.fullscreen()}ngAfterViewInit(){const t=window.document;let o=t.createElement("script");o.type="text/javascript",o.id="playerScript",o.src="https://www.youtube.com/iframe_api",t.body.appendChild(o)}ngOnDestroy(){localStorage.removeItem("IsLoadedBefore")}getLmsCourseTopic(){this.userService.getLmsCourseTopic(this.cName,this.subject).subscribe(t=>{this.topicList=t})}playVideo(t){this.videoId=t,this.player.loadVideoById({videoId:this.videoId})}embedYt(t){function o(c){var g=document.getElementById("play-button"),O=document.getElementById("seek-forward-button"),p=document.getElementById("seek-backward-button"),u=document.getElementById("iframe-overlay"),C=document.getElementById("playback-rate-inc-button"),d=document.getElementById("playback-rate-dec-button"),Z=document.getElementById("volume-inc-button"),I=document.getElementById("volume-dec-button");function b(){"play"===g.className?(c.target.playVideo(),g.className="pause"):(c.target.pauseVideo(),g.className="play")}c.target.playVideo(),g.addEventListener("click",function(){b()}),u.addEventListener("click",function(){b()}),O.addEventListener("click",function(){c.target.seekTo(c.target.getCurrentTime()+10,!0)}),p.addEventListener("click",function(){c.target.seekTo(c.target.getCurrentTime()+-10,!0)}),C.addEventListener("click",function(){var a=c.target.getPlaybackRate();a<2&&a>=.25?c.target.setPlaybackRate(a+.25):alert("Video is playing at maximum playback rate")}),d.addEventListener("click",function(){var a=c.target.getPlaybackRate();a<=2&&a>.25?c.target.setPlaybackRate(a-.25):alert("Video is playing at minimum playback rate")}),Z.addEventListener("click",function(){var a=c.target.getVolume();a<100&&a>=0?c.target.setVolume(a+10):alert("Video is already playing at maximum volume.")}),I.addEventListener("click",function(){var a=c.target.getVolume();a<=100&&a>0?c.target.setVolume(a-10):alert("Video is already playing at minimum volume.")})}function r(c){var u,g=document.getElementById("progress-bar"),O=document.getElementById("progress-juice"),p=0;c.data==YT.PlayerState.PLAYING?u=setInterval(function(){p=c.target.getDuration();let d=c.target.getCurrentTime()/p*100;O.style.width=`${d}%`,document.getElementById("playbackRate").setAttribute("data-before",c.target.getPlaybackRate()),document.getElementById("volume").setAttribute("data-before",c.target.getVolume())},1e3):(clearTimeout(u),p=0),g.addEventListener("click",C=>{const d=C.offsetX/g.offsetWidth*c.target.getDuration();c.target.seekTo(d)})}window.onYouTubeIframeAPIReady=()=>{this.player=new window.YT.Player("player",{videoId:t,height:"100%",width:"100%",events:{onReady:o,onStateChange:r},playerVars:{showinfo:0,modestbranding:1,rel:0,iv_load_policy:3,controls:0,vq:"tiny"}})},document.getElementById("player").style.position="absolute"}fullscreen(){document.getElementById("fullscreen-button").addEventListener("click",function(){document.getElementsByClassName("custom-video-player")[0].classList.toggle("fullscreen")})}reloadIfNecessary(){"true"!==localStorage.getItem("IsLoadedBefore")&&(localStorage.setItem("IsLoadedBefore","true"),location.reload())}toggler(t){let o=document.querySelector("#videos"),r=document.querySelector("#notes"),c=document.querySelector("#video-list"),g=document.querySelector("#note-list");"L"===t?(c.classList.remove("hidden"),g.classList.add("hidden"),o.classList.add("disabled"),r.classList.remove("disabled")):"N"===t&&(c.classList.add("hidden"),g.classList.remove("hidden"),o.classList.remove("disabled"),r.classList.add("disabled"))}showCollapse(t){return 0===t?"show":"collapse"}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.K),n.Y36(P.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-topic"]],decls:35,vars:4,consts:[[1,"main-bg"],[1,"topic"],[1,"top-bar","row"],[1,"col-lg-8","col-12"],[3,"href"],["oncontextmenu","return false;",1,"player-section"],[1,"row"],[1,"col-lg-8"],[1,"custom-video-player"],["id","player"],["id","iframe-overlay",1,"iframe-overlay"],[1,"controls"],["id","progress-bar"],["id","progress-juice"],[1,"buttons"],["id","play-button","aria-label","Play-pause"],["id","seek-backward-button","aria-label","<<10s"],["id","seek-forward-button","aria-label","10s>>"],["id","volume-dec-button"],["id","volume"],["id","volume-inc-button"],["id","playback-rate-dec-button"],["id","playbackRate"],["id","playback-rate-inc-button"],["id","fullscreen-button","aria-label","Fullscreen"],["class","col-lg-4",4,"ngIf"],[1,"col-lg-4"],[1,"toggle-bar"],["id","videos",1,"disabled",3,"click"],["id","notes",3,"click"],["id","video-list",1,"accordion"],["class","topic-name",4,"ngFor","ngForOf"],["id","note-list",1,"accordion","hidden"],[1,"topic-name"],["type","button","data-toggle","collapse","aria-expanded","false",3,"id"],["data-parent","#video-list",3,"ngClass","id"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["target","_blank","rel","noopener noreferrer",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"h6"),n._uU(5),n.qZA(),n.TgZ(6,"a",4),n.TgZ(7,"h6"),n._uU(8,"Change Subject"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"h4"),n._uU(10),n.qZA(),n.TgZ(11,"div",5),n.TgZ(12,"div",6),n.TgZ(13,"div",7),n.TgZ(14,"div",8),n._UZ(15,"div",9),n._UZ(16,"div",10),n.TgZ(17,"div",11),n.TgZ(18,"div",12),n._UZ(19,"div",13),n.qZA(),n.TgZ(20,"div",14),n.TgZ(21,"div"),n._UZ(22,"button",15),n._UZ(23,"button",16),n._UZ(24,"button",17),n.qZA(),n.TgZ(25,"div"),n._UZ(26,"button",18),n._UZ(27,"span",19),n._UZ(28,"button",20),n.qZA(),n.TgZ(29,"div"),n._UZ(30,"button",21),n._UZ(31,"span",22),n._UZ(32,"button",23),n.qZA(),n._UZ(33,"button",24),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.YNc(34,k,10,2,"div",25),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(5),n.hij("Course : ",o.cName,""),n.xp6(1),n.MGl("href","video/",o.cName,"",n.LSH),n.xp6(4),n.hij("Subject : ",o.subject,""),n.xp6(24),n.Q6J("ngIf",o.topicList))},directives:[_.O5,_.sg,_.mk],styles:['.main-bg[_ngcontent-%COMP%]{min-height:100vh;min-width:100%;background:linear-gradient(135deg,rgba(0,0,255,.3),rgba(0,0,255,.45)),url(bg-2.ef2b19d92aeab4738af9.png);background-position:center;background-size:cover;background-attachment:fixed}.topic[_ngcontent-%COMP%]{padding:50px;width:100%}.topic[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.topic[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff;font-weight:700;display:inline-block;align-self:center;margin-bottom:0}.topic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin-right:0;background:#ffc300;padding:10px;border-radius:4px}.topic[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;font-weight:900;margin:30px 0}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]{position:unset}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:url(iframe-bg.b6f36d0554f687e157ca.svg);background-position:center;background-size:cover;transition:all .3s}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   #player[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:102}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]:hover + .controls[_ngcontent-%COMP%]{bottom:0}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]:hover + .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]   #progress-juice[_ngcontent-%COMP%]{background:blue}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{position:absolute;bottom:-55px;left:0;right:0;z-index:103;transition:all .3s;background:linear-gradient(transparent,rgba(0,0,0,.8))}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]{height:10px;background:rgba(77,77,77,.5);margin-bottom:5px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]   #progress-juice[_ngcontent-%COMP%]{height:10px;background:rgba(0,0,255,.5);width:0}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;padding:0;margin:0 10px 5px;outline:none;border:none;box-shadow:none}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(play-btn.62a13026f3203e9bccac.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center;transition:all .2s}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.play[_ngcontent-%COMP%]:before{content:"";background:url(play-btn.62a13026f3203e9bccac.svg);background-repeat:no-repeat;background-size:contain;background-position:center}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.pause[_ngcontent-%COMP%]:before{content:"";background:url(pause-btn.369e353b6434e2cb8d48.svg);background-repeat:no-repeat;background-size:contain;background-position:center}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-backward-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(bkwd-ten.a6473b9b5a1adb29760e.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-forward-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(frwd-ten.0dfa2a7ef240109e6cf0.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #fullscreen-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(fullscreen.d09c41e4a6dfa230ca05.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-dec-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(volume-down.a3b11020e884bd435f45.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-inc-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(volume-up.5bf8a2870ab49d839359.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playbackRate[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-dec-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(playback-dec.99e03a886d1b91df5ff6.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-inc-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(playback-inc.3cc67935bcff229e5093.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]:hover{bottom:0}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]{position:fixed;padding-bottom:49%;height:80%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:left;box-shadow:0 0 0 100px #000;transition:all .3s;z-index:101}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .toggle-bar[_ngcontent-%COMP%]{border-radius:4px;overflow:hidden;margin-bottom:10px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .toggle-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;width:50%;padding:10px;background:#0000ff;border:none;font-size:18px;font-weight:500;text-transform:uppercase;color:#fff;transition:all .3s}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .toggle-bar[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background:#bdc2b8}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]{background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:15px;margin-bottom:10px;border-radius:10px;counter-reset:videoItem}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#00f;margin-bottom:0;cursor:pointer}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:20px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:20px;font-weight:500;display:block;margin-bottom:5px;padding:10px;background:rgba(77,77,77,.5);border-radius:4px;cursor:pointer}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{counter-increment:videoItem;content:"Lecture " counter(videoItem) " "}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{counter-increment:videoItem;content:"Document " counter(videoItem) " "}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 500px){.topic[_ngcontent-%COMP%]{padding:80px 15px 15px}.topic[_ngcontent-%COMP%] > h6[_ngcontent-%COMP%]{font-weight:500;margin-bottom:0}.topic[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#ffc300;margin:0}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]{margin-top:50px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]{z-index:90}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{z-index:91}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px 5px;outline:none;border:none;box-shadow:none}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.play[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.pause[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-backward-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-forward-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #fullscreen-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-dec-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-inc-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playbackRate[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-dec-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-inc-button[_ngcontent-%COMP%]:before{width:25px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]{z-index:101;transform:translate(-50%,-50%) rotate(90deg);top:50%;left:50%;height:100vw;width:calc(100vh - 100px);transform-origin:center center;box-shadow:0 0 0 100px #000}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .toggle-bar[_ngcontent-%COMP%]{margin-top:50px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]{margin-top:10px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#ffc300;margin-bottom:10px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#000}}']}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[P.Bz.forChild(x)],P.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[_.ez,w]]}),e})()}}]);