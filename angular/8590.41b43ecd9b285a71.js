"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8590],{8590:(P,l,s)=>{s.r(l),s.d(l,{AddQuestionModule:()=>O});var p=s(6895),a=s(7370),o=s(4719),e=s(6738),g=s(8883);function m(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"option",17),e.NdJ("value",function(){const c=e.CHM(t).$implicit;return e.KtG(c.mName)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.mName)}}function f(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"option",17),e.NdJ("value",function(){const c=e.CHM(t).$implicit;return e.KtG(c)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t)}}function _(n,i){if(1&n&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.s9C("value",t.topicId),e.xp6(1),e.Oqu(t.topicName)}}const C=[{path:"",component:(()=>{class n{constructor(t){this.moduleCourse=t,this.addLectureForm=new o.nJ({moduleId:new o.p4("",[o.kI.required]),subjectId:new o.p4("",[o.kI.required]),topicId:new o.p4("",[o.kI.required]),questionId:new o.p4("",[o.kI.required]),video:new o.p4("",[o.kI.required]),moduleNote:new o.p4("")})}ngOnInit(){this.getAllCourses()}getAllCourses(){this.moduleCourse.getCourses().subscribe(t=>{this.courseResult=t,this.courseList=this.courseResult.result})}getSubject(t){this.moduleCourse.getSubject(t).subscribe(r=>{this.subjectList=r})}getTopic(t,r){this.moduleCourse.getTopic(t,r).subscribe(u=>{this.topicList=u.result})}onFileSeleceted(t){this.addLectureForm.patchValue({moduleNote:t.target.files[0]}),this.addLectureForm.get("moduleNote").updateValueAndValidity()}addLecture(){this.addLectureForm.valid&&this.moduleCourse.addTopicLecture(this.addLectureForm.value).subscribe(t=>{alert("Lecture added successfully")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-question"]],decls:51,vars:5,consts:[[1,"add-lecture"],[3,"formGroup","ngSubmit"],[1,"form-grp"],["required","","id","course","formControlName","moduleId",3,"change"],["course",""],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","course"],["required","","id","subject","formControlName","subjectId",3,"change"],["subject",""],["for","subject"],["required","","id","subject","formControlName","topicId"],["required","","type","text","id","course-name","placeholder","cName","formControlName","questionId"],["for","course-name"],["required","","type","text","id","course-name","placeholder","cName","formControlName","video"],["type","file","name","","id","",3,"change"],["type","submit",3,"disabled"],[3,"value"]],template:function(t,r){if(1&t){const u=e.EpF();e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Add Module Question"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return r.addLecture()}),e.TgZ(4,"div",2)(5,"select",3,4),e.NdJ("change",function(){e.CHM(u);const d=e.MAs(6);return e.KtG(r.getSubject(d.value))}),e._UZ(7,"option",5),e.YNc(8,m,2,1,"option",6),e.qZA(),e.TgZ(9,"label",7),e._uU(10,"Select Course"),e.qZA()(),e.TgZ(11,"div",2)(12,"select",8,9),e.NdJ("change",function(){e.CHM(u);const d=e.MAs(6),b=e.MAs(13);return e.KtG(r.getTopic(d.value,b.value))}),e._UZ(14,"option",5),e.YNc(15,f,2,1,"option",6),e.qZA(),e.TgZ(16,"label",10),e._uU(17,"Select Subject"),e.qZA()(),e.TgZ(18,"div",2)(19,"select",11),e._UZ(20,"option",5),e.YNc(21,_,2,2,"option",6),e.qZA(),e.TgZ(22,"label",10),e._uU(23,"Select Topic"),e.qZA()(),e.TgZ(24,"div",2),e._UZ(25,"input",12),e.TgZ(26,"label",13),e._uU(27,"Paste Question Id"),e.qZA()(),e.TgZ(28,"div",2),e._UZ(29,"input",14),e.TgZ(30,"label",13),e._uU(31,"Paste Video Id"),e.qZA()(),e.TgZ(32,"p"),e._uU(33,"*** Paste the video url of this formate only ***"),e._UZ(34,"br"),e.TgZ(35,"strong"),e._uU(36,"https://youtu.be/1kyqk2Oa-8c"),e.qZA()(),e.TgZ(37,"div",2)(38,"input",15),e.NdJ("change",function(d){return r.onFileSeleceted(d)}),e.qZA()(),e.TgZ(39,"p"),e._uU(40,"*** Upload notes in "),e.TgZ(41,"strong"),e._uU(42,".pdf"),e.qZA(),e._uU(43," format and "),e._UZ(44,"br"),e._uU(45,"the size should be less then "),e.TgZ(46,"strong"),e._uU(47,"15Mb"),e.qZA(),e._uU(48," ***"),e.qZA(),e.TgZ(49,"button",16),e._uU(50,"Proceed"),e.qZA()()()}2&t&&(e.xp6(3),e.Q6J("formGroup",r.addLectureForm),e.xp6(5),e.Q6J("ngForOf",r.courseList),e.xp6(7),e.Q6J("ngForOf",r.subjectList),e.xp6(6),e.Q6J("ngForOf",r.topicList),e.xp6(28),e.Q6J("disabled",!r.addLectureForm.valid))},dependencies:[p.sg,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:["h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;padding:20px 0 0 100px}form[_ngcontent-%COMP%]{width:500px;padding:20px 0 0 100px}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:100px;border:none;background:rgba(77,77,77,.05);padding:20px 10px 5px;margin-bottom:20px}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:35px;font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:0;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000ff;color:#fff;border-color:#00f;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#0000cc;border-color:#00c}form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:auto}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#00f;pointer-events:none;-webkit-user-select:none;user-select:none}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:900;color:#00f}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.Bz.forChild(C),a.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,M,o.UX]}),n})()}}]);