"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[860],{2860:(b,p,s)=>{s.r(p),s.d(p,{AddLectureModule:()=>O});var g=s(8583),d=s(5855),o=s(665),t=s(639),a=s(1105);function m(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"option",15),t.NdJ("value",function(){return t.CHM(n).$implicit.cName}),t._uU(1),t.qZA()}if(2&e){const n=c.$implicit;t.xp6(1),t.Oqu(n.cName)}}function f(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"option",15),t.NdJ("value",function(){return t.CHM(n).$implicit}),t._uU(1),t.qZA()}if(2&e){const n=c.$implicit;t.xp6(1),t.Oqu(n)}}function _(e,c){if(1&e&&(t.TgZ(0,"option",15),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.s9C("value",n.topicId),t.xp6(1),t.Oqu(n.topicName)}}const C=[{path:"",component:(()=>{class e{constructor(n,r){this.lmsCourse=n,this.router=r,this.addLectureForm=new o.cw({courseId:new o.NI("",[o.kI.required]),subjectId:new o.NI("",[o.kI.required]),topicId:new o.NI("",[o.kI.required]),video:new o.NI("",[o.kI.required])})}ngOnInit(){this.getAllCourses()}getAllCourses(){this.lmsCourse.getCourses().subscribe(n=>{this.courseResult=n,this.courseList=this.courseResult.result})}getSubject(n){this.lmsCourse.getSubject(n).subscribe(r=>{this.subjectList=r})}getTopic(n,r){this.lmsCourse.getTopic(n,r).subscribe(i=>{this.topicList=i.result})}addLecture(){this.addLectureForm.valid&&this.lmsCourse.addTopicLecture(this.addLectureForm.value).subscribe(n=>{alert("Lecture added successfully")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.u),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-lecture"]],decls:35,vars:5,consts:[[1,"add-lecture"],[3,"formGroup","ngSubmit"],[1,"form-grp"],["required","","id","course","formControlName","courseId",3,"change"],["course",""],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","course"],["required","","id","subject","formControlName","subjectId",3,"change"],["subject",""],["for","subject"],["required","","id","subject","formControlName","topicId"],["required","","type","text","id","course-name","placeholder","cName","formControlName","video"],["for","course-name"],["type","submit",3,"disabled"],[3,"value"]],template:function(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"h2"),t._uU(2,"Add Video Lecture"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return r.addLecture()}),t.TgZ(4,"div",2),t.TgZ(5,"select",3,4),t.NdJ("change",function(){t.CHM(i);const l=t.MAs(6);return r.getSubject(l.value)}),t._UZ(7,"option",5),t.YNc(8,m,2,1,"option",6),t.qZA(),t.TgZ(9,"label",7),t._uU(10,"Select Course"),t.qZA(),t.qZA(),t.TgZ(11,"div",2),t.TgZ(12,"select",8,9),t.NdJ("change",function(){t.CHM(i);const l=t.MAs(6),P=t.MAs(13);return r.getTopic(l.value,P.value)}),t._UZ(14,"option",5),t.YNc(15,f,2,1,"option",6),t.qZA(),t.TgZ(16,"label",10),t._uU(17,"Select Subject"),t.qZA(),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"select",11),t._UZ(20,"option",5),t.YNc(21,_,2,2,"option",6),t.qZA(),t.TgZ(22,"label",10),t._uU(23,"Select Topic"),t.qZA(),t.qZA(),t.TgZ(24,"div",2),t._UZ(25,"input",12),t.TgZ(26,"label",13),t._uU(27,"Paste Video Id"),t.qZA(),t.qZA(),t.TgZ(28,"p"),t._uU(29,"*** Paste the video url of this formate only ***"),t._UZ(30,"br"),t.TgZ(31,"strong"),t._uU(32,"https://youtu.be/1kyqk2Oa-8c"),t.qZA(),t.qZA(),t.TgZ(33,"button",14),t._uU(34,"Proceed"),t.qZA(),t.qZA(),t.qZA()}2&n&&(t.xp6(3),t.Q6J("formGroup",r.addLectureForm),t.xp6(5),t.Q6J("ngForOf",r.courseList),t.xp6(7),t.Q6J("ngForOf",r.subjectList),t.xp6(6),t.Q6J("ngForOf",r.topicList),t.xp6(12),t.Q6J("disabled",!r.addLectureForm.valid))},directives:[o._Y,o.JL,o.sg,o.EJ,o.Q7,o.JJ,o.u,o.YN,o.Kr,g.sg,o.Fj],styles:["h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;padding:20px 0 0 100px}form[_ngcontent-%COMP%]{width:500px;padding:20px 0 0 100px}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:100px;border:none;background:rgba(77,77,77,.05);padding:20px 10px 5px;margin-bottom:20px}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:35px;font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:0;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000ff;color:#fff;border-color:#00f;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#0000cc;border-color:#00c}form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:auto}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#00f;pointer-events:none;-webkit-user-select:none;user-select:none}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:900;color:#00f}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(C)],d.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,M,o.UX]]}),e})()}}]);