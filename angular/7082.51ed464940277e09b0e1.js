"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7082],{7082:(T,_,g)=>{g.r(_),g.d(_,{EditTopicModule:()=>h});var p=g(8583),u=g(5855),t=g(639),d=g(8883),a=g(9075);function C(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"option",16),t.NdJ("value",function(){return t.CHM(n).$implicit.mName}),t._uU(1),t.qZA()}if(2&o){const n=i.$implicit;t.xp6(1),t.Oqu(n.mName)}}function M(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"option",16),t.NdJ("value",function(){return t.CHM(n).$implicit}),t._uU(1),t.qZA()}if(2&o){const n=i.$implicit;t.xp6(1),t.Oqu(n)}}function O(o,i){if(1&o&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&o){const n=i.$implicit;t.s9C("value",n.topicId),t.xp6(1),t.Oqu(n.topicName)}}function P(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",21),t.TgZ(1,"div"),t.TgZ(2,"h4"),t._uU(3),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(2);return r.deleteLecture(r.topicData.topicId,s[2])}),t._uU(5,"Delete Question"),t.qZA(),t.qZA(),t.TgZ(6,"div",23),t._UZ(7,"iframe",24),t.qZA(),t.qZA()}if(2&o){const n=i.$implicit;t.xp6(3),t.hij("Question Id : ",n[0],""),t.xp6(4),t.Q6J("src",n[1],t.uOi)}}function f(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",17),t.TgZ(1,"h2"),t._uU(2,"Videos of Topic"),t.qZA(),t.TgZ(3,"div",18),t.TgZ(4,"div"),t.TgZ(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"h4"),t._uU(8,"Total no. of videos in the Topic : "),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"button",19),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return c.deleteTopic(c.topicData._id)}),t._uU(12,"Delete Entire Topic"),t.qZA(),t.qZA(),t.YNc(13,P,8,2,"div",20),t.qZA()}if(2&o){const n=t.oxw();t.xp6(6),t.Oqu(n.topicData.topicName),t.xp6(4),t.Oqu(n.topicData.questionList.length),t.xp6(3),t.Q6J("ngForOf",n.safeQuestionList)}}const m=[{path:"",component:(()=>{class o{constructor(n,e){this.moduleCourse=n,this.sanitizer=e,this.safeQuestionList=[]}ngOnInit(){this.getAllCourses()}getAllCourses(){this.moduleCourse.getCourses().subscribe(n=>{this.courseResult=n,this.courseList=this.courseResult.result})}getSubject(n){this.moduleCourse.getSubject(n).subscribe(e=>{this.subjectList=e})}getTopic(n,e){this.moduleCourse.getTopic(n,e).subscribe(c=>{this.topicList=c.result})}deleteTopic(n){1==confirm("You are about to delete this topic")&&this.moduleCourse.deleteTopic(n).subscribe(c=>{alert("Topic Deleted Successfully")})}showLecture(n,e,c){this.safeQuestionList=[],this.moduleCourse.getTopicLecture(n,e,c).subscribe(s=>{this.topicData=s.result,this.questionList=this.topicData.questionList;for(let r=0;r<this.questionList.length;r++)this.safeQuestionList.push([this.questionList[r].questionId,this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.questionList[r].videoId}`),this.questionList[r]._id]);console.log(s)})}deleteLecture(n,e){var c=confirm("You are about to delete this Question Module.");console.log(n,e),1==c&&this.moduleCourse.deleteTopicLecture(n,e).subscribe(s=>{alert("Question module deleted successfully")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.C),t.Y36(a.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-topic"]],decls:31,vars:4,consts:[[1,"add-lecture"],[1,"row"],[1,"col-5"],[1,"form-grp"],["required","","id","course",3,"change"],["course",""],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","course"],["required","","id","subject",3,"change"],["subject",""],["for","subject"],["required","","id","subject"],["topic",""],["type","button",3,"click"],["class","col-7",4,"ngIf"],[3,"value"],[1,"col-7"],[1,"topic-title"],[3,"click"],["class","video",4,"ngFor","ngForOf"],[1,"video"],[1,"delete",3,"click"],[1,"iframe"],["width","560","height","200","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(n,e){if(1&n){const c=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"h2"),t._uU(5,"Edit videos of Topic"),t.qZA(),t.TgZ(6,"form"),t.TgZ(7,"div",3),t.TgZ(8,"select",4,5),t.NdJ("change",function(){t.CHM(c);const r=t.MAs(9);return e.getSubject(r.value)}),t._UZ(10,"option",6),t.YNc(11,C,2,1,"option",7),t.qZA(),t.TgZ(12,"label",8),t._uU(13,"Select Course"),t.qZA(),t.qZA(),t.TgZ(14,"div",3),t.TgZ(15,"select",9,10),t.NdJ("change",function(){t.CHM(c);const r=t.MAs(9),l=t.MAs(16);return e.getTopic(r.value,l.value)}),t._UZ(17,"option",6),t.YNc(18,M,2,1,"option",7),t.qZA(),t.TgZ(19,"label",11),t._uU(20,"Select Subject"),t.qZA(),t.qZA(),t.TgZ(21,"div",3),t.TgZ(22,"select",12,13),t._UZ(24,"option",6),t.YNc(25,O,2,2,"option",7),t.qZA(),t.TgZ(26,"label",11),t._uU(27,"Select Topic"),t.qZA(),t.qZA(),t.TgZ(28,"button",14),t.NdJ("click",function(){t.CHM(c);const r=t.MAs(9),l=t.MAs(16),x=t.MAs(23);return e.showLecture(r.value,l.value,x.value)}),t._uU(29,"Proceed"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(30,f,14,3,"div",15),t.qZA(),t.qZA()}2&n&&(t.xp6(11),t.Q6J("ngForOf",e.courseList),t.xp6(7),t.Q6J("ngForOf",e.subjectList),t.xp6(7),t.Q6J("ngForOf",e.topicList),t.xp6(5),t.Q6J("ngIf",e.topicData))},directives:[p.sg,p.O5],styles:['.row[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]{padding:0}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;padding:20px 0 0 100px}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:500px;padding:20px 0 0 100px}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:100px;border:none;background:rgba(77,77,77,.05);padding:20px 10px 5px;margin-bottom:20px}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:transparent}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:35px;font-size:14px;transition:all .3s}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:0;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000ff;color:#fff;border-color:#00f;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#0000cc;border-color:#00c}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:auto}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]{counter-reset:note}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{padding:20px 0 0 100px;display:flex;justify-content:space-between;align-items:center}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#00f;margin-bottom:0}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:before{counter-increment:note;content:"Pdf " counter(note) ": "}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background:#0000ff;border:none;border-radius:4px;font-size:18px;font-weight:500;color:#fff;text-decoration:none}.row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:red}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]{padding:0 0 0 100px}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;padding:20px 0 0}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:70px}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:unset;font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;color:#4d4d4d}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:red;border:none;border-radius:4px;outline:none;color:#fff;font-weight:500;font-size:18px;padding:5px 20px;margin-left:5px}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{margin-bottom:50px;background-color:#4d4d4d33}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){display:flex;justify-content:space-between;align-items:center}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1)   button[_ngcontent-%COMP%]{background-color:red;color:#fff;font-size:18px;font-weight:500;border:none;border-radius:5px;padding:10px 20px}.row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%]{display:grid;place-items:center;margin-top:10px}']}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,b]]}),o})()}}]);