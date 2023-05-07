"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2177],{2177:(z,C,g)=>{g.r(C),g.d(C,{TopicModule:()=>Z});var b=g(6895),f=g(7370),i=g(4719),t=g(6738),P=g(4981);function O(o,r){if(1&o&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&o){const n=r.$implicit;t.s9C("value",n.topicId),t.xp6(1),t.hij(" ",n.topicName," ")}}function h(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"table")(1,"tr",44)(2,"th"),t._uU(3,"Question Id"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Video Solution"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"PDF Solution"),t.qZA()(),t.TgZ(8,"tr",45)(9,"td")(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"td")(13,"button",46),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.playVideo(s.filteredVideoId))}),t._uU(14,"Video Solution"),t.qZA()(),t.TgZ(15,"td")(16,"a",47),t._uU(17,"PDF Solution"),t.qZA()()()()}if(2&o){const n=t.oxw(2);t.xp6(11),t.Oqu(n.filteredQuestionId),t.xp6(5),t.Q6J("href",n.filteredNoteLink,t.LSH)}}function x(o,r){if(1&o&&(t.TgZ(0,"div",42),t.YNc(1,h,18,2,"table",43),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.filteredQuestionId)}}function y(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"tr",45)(1,"td")(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"button",46),t.NdJ("click",function(){const e=t.CHM(n).$implicit,l=t.oxw(3);return t.KtG(l.playVideo(e.videoId))}),t._uU(6,"Video Solution"),t.qZA()(),t.TgZ(7,"td")(8,"a",47),t._uU(9,"PDF Solution"),t.qZA()()()}if(2&o){const n=r.$implicit;t.xp6(3),t.Oqu(n.questionId),t.xp6(5),t.Q6J("href",n.note,t.LSH)}}function v(o,r){if(1&o&&(t.TgZ(0,"div",50)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"table")(4,"tr",44)(5,"th"),t._uU(6,"Question Id"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Video Solution"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"PDF Solution"),t.qZA()(),t.YNc(11,y,10,2,"tr",51),t.qZA()()),2&o){const n=r.$implicit;t.xp6(2),t.Oqu(n.topicName),t.xp6(9),t.Q6J("ngForOf",n.questionList)}}function k(o,r){if(1&o&&(t.TgZ(0,"div",48),t.YNc(1,v,12,2,"div",49),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.topicList)}}const w=[{path:"",component:(()=>{class o{constructor(n,c){this.userService=n,this.activatedRoute=c,this.videoId="1iHQEKssgX8",this.searchQuestionForm=new i.nJ({topicId:new i.p4("",[i.kI.required]),questionId:new i.p4("",[i.kI.required])}),this.searchModuleQuestionForm=new i.nJ({questionId:new i.p4("",[i.kI.required])})}ngOnInit(){this.mName=this.activatedRoute.snapshot.paramMap.get("module"),this.subject=this.activatedRoute.snapshot.paramMap.get("topic"),this.getModuleCourseTopic(),this.embedYt(this.videoId)}ngAfterViewInit(){const n=window.document;let c=n.createElement("script");c.type="text/javascript",c.id="playerScript",c.src="https://www.youtube.com/iframe_api",n.body.appendChild(c)}ngOnDestroy(){localStorage.removeItem("IsLoadedBefore")}getModuleCourseTopic(){this.userService.getModuleCourseTopic(this.mName,this.subject).subscribe(n=>{this.topicList=n.result})}playVideo(n){this.videoId=n,this.player.loadVideoById({videoId:this.videoId})}stopVideo(){this.player.stopVideo()}embedYt(n){function c(e){var l=document.getElementById("play-button"),_=document.getElementById("seek-forward-button"),d=document.getElementById("seek-backward-button"),u=document.getElementById("iframe-overlay"),m=document.getElementById("playback-rate-inc-button"),p=document.getElementById("playback-rate-dec-button"),I=document.getElementById("volume-inc-button"),q=document.getElementById("volume-dec-button");function M(){"play"===l.className?(e.target.playVideo(),l.className="pause"):(e.target.pauseVideo(),l.className="play")}document.getElementById("videoModal"),e.target.playVideo(),l.addEventListener("click",function(){M()}),u.addEventListener("click",function(){M()}),_.addEventListener("click",function(){e.target.seekTo(e.target.getCurrentTime()+10,!0)}),d.addEventListener("click",function(){e.target.seekTo(e.target.getCurrentTime()+-10,!0)}),m.addEventListener("click",function(){var a=e.target.getPlaybackRate();a<2&&a>=.25?e.target.setPlaybackRate(a+.25):alert("Video is playing at maximum playback rate")}),p.addEventListener("click",function(){var a=e.target.getPlaybackRate();a<=2&&a>.25?e.target.setPlaybackRate(a-.25):alert("Video is playing at minimum playback rate")}),I.addEventListener("click",function(){var a=e.target.getVolume();a<100&&a>=0?e.target.setVolume(a+10):alert("Video is already playing at maximum volume.")}),q.addEventListener("click",function(){var a=e.target.getVolume();a<=100&&a>0?e.target.setVolume(a-10):alert("Video is already playing at minimum volume.")})}function s(e){var u,l=document.getElementById("progress-bar"),_=document.getElementById("progress-juice"),d=0;e.data==YT.PlayerState.PLAYING?u=setInterval(function(){d=e.target.getDuration();let p=e.target.getCurrentTime()/d*100;_.style.width=`${p}%`,document.getElementById("playbackRate").setAttribute("data-before",e.target.getPlaybackRate()),document.getElementById("volume").setAttribute("data-before",e.target.getVolume())},1e3):(clearTimeout(u),d=0),l.addEventListener("click",m=>{const p=m.offsetX/l.offsetWidth*e.target.getDuration();e.target.seekTo(p)})}window.onYouTubeIframeAPIReady=()=>{this.player=new window.YT.Player("player",{videoId:n,height:"100%",width:"100%",events:{onReady:c,onStateChange:s},playerVars:{showinfo:0,modestbranding:1,rel:0,iv_load_policy:3,controls:0}})},document.getElementById("player").style.position="absolute"}fullscreen(){document.getElementById("fullscreen-button").addEventListener("click",function(){document.getElementsByClassName("custom-video-player")[0].classList.toggle("fullscreen")})}searchQuestionData(){this.searchQuestionForm.valid&&this.userService.searchModuleQuestion(this.searchQuestionForm.value).subscribe(n=>{this.filteredQuestionId=n.result.questionId,this.filteredVideoId=n.result.videoId,this.filteredNoteLink=n.result.note})}searchModuleSubjectQuestion(){this.searchModuleQuestionForm.valid&&this.userService.searchModuleSubjectQuestion({moduleId:this.mName,subjectId:this.subject,questionId:this.searchModuleQuestionForm.value.questionId}).subscribe(n=>{console.log(n),this.moduleSubjectQuestionList=n.result})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(P.K),t.Y36(f.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-topic"]],decls:60,vars:8,consts:[[1,"main-bg"],[1,"topic"],[1,"top-bar","row"],[1,"col-lg-6","col-12"],[3,"href"],[1,"row"],[1,"col-lg-6","order-2","order-sm-1"],[1,"search-form"],[3,"formGroup","ngSubmit"],[1,"form-grp"],["formControlName","topicId","required",""],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","format of question","formControlName","questionId"],["type","submit",3,"disabled"],["class","search-list",4,"ngIf"],["class","topic-list",4,"ngIf"],["id","videoModal","tabindex","-1","aria-labelledby","videoModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header"],["id","videoModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"custom-video-player"],["id","player"],["id","iframe-overlay",1,"iframe-overlay"],[1,"controls"],["id","progress-bar"],["id","progress-juice"],[1,"buttons"],["id","play-button","aria-label","Play-pause"],["id","seek-backward-button","aria-label","<<10s"],["id","seek-forward-button","aria-label","10s>>"],["id","volume-dec-button"],["id","volume"],["id","volume-inc-button"],["id","playback-rate-dec-button"],["id","playbackRate"],["id","playback-rate-inc-button"],[3,"value"],[1,"search-list"],[4,"ngIf"],[1,"question-list-2"],[1,"question-list"],["type","button","data-toggle","modal","data-target","#videoModal",3,"click"],["download","",3,"href"],[1,"topic-list"],["class","topic-list-content",4,"ngFor","ngForOf"],[1,"topic-list-content"],["class","question-list",4,"ngFor","ngForOf"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h6"),t._uU(5),t.qZA(),t.TgZ(6,"a",4)(7,"h6"),t._uU(8,"Change Subject"),t.qZA()()()(),t.TgZ(9,"h4"),t._uU(10),t.qZA(),t.TgZ(11,"div",5)(12,"div",6)(13,"div",7)(14,"form",8),t.NdJ("ngSubmit",function(){return c.searchQuestionData()}),t.TgZ(15,"h2"),t._uU(16,"Search by Question Id"),t.qZA(),t.TgZ(17,"div",9)(18,"select",10),t._UZ(19,"option",11),t.YNc(20,O,2,2,"option",12),t.qZA(),t.TgZ(21,"label"),t._uU(22,"Select Topic"),t.qZA()(),t.TgZ(23,"div",9),t._UZ(24,"input",13),t.TgZ(25,"label"),t._uU(26,"Question Id"),t.qZA()(),t.TgZ(27,"button",14),t._uU(28,"Search"),t.qZA()(),t.YNc(29,x,2,1,"div",15),t.qZA(),t.YNc(30,k,2,1,"div",16),t.qZA()()()(),t.TgZ(31,"div",17)(32,"div",18)(33,"div",19)(34,"div",20)(35,"h5",21),t._uU(36,"Video Solution"),t.qZA(),t.TgZ(37,"button",22),t.NdJ("click",function(){return c.stopVideo()}),t.TgZ(38,"span",23),t._uU(39,"Close \xd7"),t.qZA()()(),t.TgZ(40,"div",24)(41,"div",25),t._UZ(42,"div",26)(43,"div",27),t.TgZ(44,"div",28)(45,"div",29),t._UZ(46,"div",30),t.qZA(),t.TgZ(47,"div",31)(48,"div"),t._UZ(49,"button",32)(50,"button",33)(51,"button",34),t.qZA(),t.TgZ(52,"div"),t._UZ(53,"button",35)(54,"span",36)(55,"button",37),t.qZA(),t.TgZ(56,"div"),t._UZ(57,"button",38)(58,"span",39)(59,"button",40),t.qZA()()()()()()()()),2&n&&(t.xp6(5),t.hij("Module : ",c.mName,""),t.xp6(1),t.MGl("href","moduleSolution/",c.mName,"",t.LSH),t.xp6(4),t.hij("Subject : ",c.subject,""),t.xp6(4),t.Q6J("formGroup",c.searchQuestionForm),t.xp6(6),t.Q6J("ngForOf",c.topicList),t.xp6(7),t.Q6J("disabled",!c.searchQuestionForm.valid),t.xp6(2),t.Q6J("ngIf",c.filteredQuestionId),t.xp6(1),t.Q6J("ngIf",c.topicList))},dependencies:[b.sg,b.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:['.main-bg[_ngcontent-%COMP%]{min-height:100vh;min-width:100%;background:linear-gradient(135deg,rgba(0,0,255,.3),rgba(0,0,255,.45)),url(bg-2.a24ac65a08650bca.png);background-position:center;background-size:cover;background-attachment:fixed}.search-form[_ngcontent-%COMP%]{margin:50px 0}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:500px;width:100%;padding:10px;background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 10px -5px #99f;border-radius:10px}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:100px;border:none;background:rgba(77,77,77,.05);padding:20px 10px 5px;margin-bottom:20px}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:transparent}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:35px;font-size:14px;transition:all .3s}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:0;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000ff;color:#fff;border-color:#00f;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#0000cc;border-color:#00c}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:auto}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{margin-bottom:0;height:70px}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:rgba(77,77,77,.5)}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#000}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#00f}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 0 10px}.topic[_ngcontent-%COMP%]{padding:50px;width:100%}.topic[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.topic[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff;font-weight:700;display:inline-block;align-self:center}.topic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin-right:0;background:#ffc300;padding:10px;border-radius:4px}.topic[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;font-weight:900}.topic[_ngcontent-%COMP%]   .topic-list[_ngcontent-%COMP%]   .topic-list-content[_ngcontent-%COMP%]{margin-bottom:50px;padding:10px;background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 10px -5px #99f;border-radius:10px}.topic[_ngcontent-%COMP%]   .topic-list[_ngcontent-%COMP%]   .topic-list-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#00f;font-size:20px;font-weight:700}.search-list[_ngcontent-%COMP%]{margin-top:15px;padding:10px;background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 10px -5px #99f;border-radius:10px}table[_ngcontent-%COMP%]{width:100%;margin-top:15px}.question-list[_ngcontent-%COMP%]{border-top:1px solid #0000ff;border-bottom:1px solid #0000ff;padding:5px}.question-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 5px}.question-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:100%}.question-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:500}.question-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .question-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;background:#6767ff;border:none;border-radius:4px;padding:5px 10px;color:#fff;font-weight:500;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap}.question-list[_ngcontent-%COMP%]:first-child{background-color:#00f}.question-list[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{color:#fff;padding:10px 0}.question-list[_ngcontent-%COMP%]:last-child{border-bottom:none}.question-list-2[_ngcontent-%COMP%]{border-top:1px solid #0000ff;border-bottom:1px solid #0000ff;padding:5px}.question-list-2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 5px}.question-list-2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#000}.question-list-2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .question-list-2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;background:#0000ff;border:none;border-radius:4px;padding:5px 10px;color:#fff;font-weight:500;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap}.question-list-2[_ngcontent-%COMP%]:first-child{background-color:#00f}.question-list-2[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{color:#fff;padding:10px 0}.modal[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .3s}.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding:0}.custom-video-player[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:url(iframe-bg.70f75e9d948a865e.svg);background-position:center;background-size:cover}.custom-video-player[_ngcontent-%COMP%]   #player[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:102}.custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]:hover + .controls[_ngcontent-%COMP%]{bottom:0}.custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]:hover + .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]   #progress-juice[_ngcontent-%COMP%]{background:rgba(0,0,255,.5)}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{position:absolute;bottom:-55px;left:0;right:0;z-index:103;transition:all .3s}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]{height:10px;background:rgba(77,77,77,.2);margin-bottom:5px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%]   #progress-juice[_ngcontent-%COMP%]{height:10px;background:blue;width:0}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;padding:0;margin:0 10px 5px;outline:none;border:none;box-shadow:none}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(play-btn.a2790d40d7f592e2.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center;transition:all .2s}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.play[_ngcontent-%COMP%]:before{content:"";background:url(play-btn.a2790d40d7f592e2.svg);background-repeat:no-repeat;background-size:contain;background-position:center}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.pause[_ngcontent-%COMP%]:before{content:"";background:url(pause-btn.0197abff8c9bf173.svg);background-repeat:no-repeat;background-size:contain;background-position:center}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-backward-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(bkwd-ten.58d90e4b9e61238e.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-forward-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(frwd-ten.dd7881d528d2b3e0.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #fullscreen-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(fullscreen.da831c2ea5ec1d0a.svg);height:35px;width:35px;background-repeat:no-repeat;background-size:contain;background-position:center}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-dec-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(volume-down.4fb93b2fa3f726ba.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-inc-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(volume-up.e2b3d3e993439c12.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playbackRate[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-dec-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(playback-dec.c8c952093e306cc4.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-inc-button[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:url(playback-inc.aab136e558fcf842.svg);height:30px;width:40px;background-repeat:no-repeat;background-size:contain;background-position:center;margin-top:5px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]:hover{bottom:0}.fullscreen[_ngcontent-%COMP%]{position:absolute;padding-bottom:49%;height:80%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:left;z-index:101}@media screen and (max-width: 660px){.custom-video-player[_ngcontent-%COMP%]   .iframe-overlay[_ngcontent-%COMP%]{z-index:90}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{z-index:91}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px 5px;outline:none;border:none;box-shadow:none}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.play[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #play-button.pause[_ngcontent-%COMP%]:before{width:20px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-backward-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #seek-forward-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #fullscreen-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-dec-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #volume-inc-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playbackRate[_ngcontent-%COMP%]:before{content:attr(data-before);font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;font-size:22px;vertical-align:top;margin-top:3px;display:inline-block}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-dec-button[_ngcontent-%COMP%]:before{width:25px}.custom-video-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   #playback-rate-inc-button[_ngcontent-%COMP%]:before{width:25px}.fullscreen[_ngcontent-%COMP%]{z-index:90}.topic[_ngcontent-%COMP%]{padding:80px 15px 15px}.topic[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:500;margin-bottom:0}.topic[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#ffc300;margin-bottom:10px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]{margin-top:50px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .toggle-bar[_ngcontent-%COMP%]{margin-top:20px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]{margin-top:30px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#ffc300;margin-bottom:10px}.topic[_ngcontent-%COMP%]   .player-section[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.search-form[_ngcontent-%COMP%]{margin:50px 0}.search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}.modal[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{margin:100px 10px}}']}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(w),f.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[b.ez,T,i.UX]}),o})()}}]);