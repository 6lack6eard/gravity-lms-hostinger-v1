"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5799],{5799:(x,c,i)=>{i.r(c),i.d(c,{FilterStudentModule:()=>M});var d=i(6895),g=i(7370),o=i(4719),t=i(6738),a=i(4981),p=i(2192),_=i(1105);function f(e,r){if(1&e&&(t.TgZ(0,"p"),t._uU(1,"Total no. of students : "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&e){const n=t.oxw();t.xp6(3),t.Oqu(n.studentList.length)}}function m(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",16)(1,"table")(2,"tr")(3,"td")(4,"strong"),t._uU(5,"Student Id : "),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"strong"),t._uU(10,"Name : "),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"strong"),t._uU(15,"Password : "),t.qZA(),t.TgZ(16,"span"),t._uU(17),t.qZA()()(),t.TgZ(18,"tr")(19,"td")(20,"strong"),t._uU(21,"Email : "),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"td")(25,"strong"),t._uU(26,"Mobile : "),t.qZA(),t.TgZ(27,"span"),t._uU(28),t.qZA()(),t.TgZ(29,"td")(30,"strong"),t._uU(31,"Student Status : "),t.qZA(),t.TgZ(32,"span"),t._uU(33),t.qZA()()(),t.TgZ(34,"tr")(35,"td")(36,"strong"),t._uU(37,"Class : "),t.qZA(),t.TgZ(38,"span"),t._uU(39),t.qZA()(),t.TgZ(40,"td")(41,"strong"),t._uU(42,"Center : "),t.qZA(),t.TgZ(43,"span"),t._uU(44),t.qZA()(),t.TgZ(45,"td")(46,"strong"),t._uU(47,"Stream : "),t.qZA(),t.TgZ(48,"span"),t._uU(49),t.qZA()()(),t.TgZ(50,"tr")(51,"td")(52,"strong"),t._uU(53,"Session : "),t.qZA(),t.TgZ(54,"span"),t._uU(55),t.qZA()(),t.TgZ(56,"td")(57,"strong"),t._uU(58,"School : "),t.qZA(),t.TgZ(59,"span"),t._uU(60),t.qZA()(),t.TgZ(61,"td")(62,"strong"),t._uU(63,"Address : "),t.qZA(),t.TgZ(64,"span"),t._uU(65),t.qZA()()(),t.TgZ(66,"tr")(67,"td")(68,"strong"),t._uU(69,"LMS Course : "),t.qZA(),t.TgZ(70,"span"),t._uU(71),t.qZA()(),t.TgZ(72,"td")(73,"strong"),t._uU(74,"CBT Course : "),t.qZA(),t.TgZ(75,"span"),t._uU(76),t.qZA()(),t.TgZ(77,"td")(78,"strong"),t._uU(79,"Module : "),t.qZA(),t.TgZ(80,"span"),t._uU(81),t.qZA()()(),t.TgZ(82,"tr"),t._UZ(83,"td"),t.TgZ(84,"td")(85,"button",17),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().$implicit,l=t.oxw();return t.KtG(l.deactivateStudent(u.userId))}),t._uU(86,"Deactivate Student"),t.qZA()(),t.TgZ(87,"td")(88,"button",17),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().$implicit,l=t.oxw();return t.KtG(l.deleteStudent(u.userId))}),t._uU(89,"Delete Student"),t.qZA()()()()()}if(2&e){const n=t.oxw().$implicit;t.xp6(7),t.Oqu(n.userId),t.xp6(5),t.Oqu(n.name),t.xp6(5),t.Oqu(n.pass),t.xp6(6),t.Oqu(n.email),t.xp6(5),t.Oqu(n.mobile),t.xp6(5),t.Oqu(n.status),t.xp6(6),t.Oqu(n.class),t.xp6(5),t.Oqu(n.center),t.xp6(5),t.Oqu(n.stream),t.xp6(6),t.Oqu(n.session),t.xp6(5),t.Oqu(n.school),t.xp6(5),t.Oqu(n.address),t.xp6(6),t.Oqu(n.lmsCourse),t.xp6(5),t.Oqu(n.cbtCourse),t.xp6(5),t.Oqu(n.moduleCourse)}}function Z(e,r){if(1&e&&(t.TgZ(0,"div",14),t.YNc(1,m,90,15,"div",15),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("ngIf",n.userId&&n.email&&n.mobile&&n.class&&n.center&&n.session)}}const C=[{path:"",component:(()=>{class e{constructor(n,s,u){this.userService=n,this.schoolService=s,this.lmsCourse=u,this.filterForm=new o.nJ({class:new o.p4(""),session:new o.p4(""),id:new o.p4("")})}ngOnInit(){this.allSchoolStudent()}allSchoolStudent(){this.schoolService.getSchoolStudent().subscribe(n=>{this.studentList=n.result})}studentByFilter(){this.studentList=[],this.schoolService.filterStudent(this.filterForm.value).subscribe(n=>{this.studentList=n.result,this.filterForm.reset()})}deactivateStudent(n){confirm("You are about to deactivate the student, Press OK to deactivate")&&this.userService.deactivateStudent({userId:n}).subscribe(u=>{alert("Student Deactivated Successfully")})}deleteStudent(n){confirm("You are about to delete the student, Press OK to delete")&&this.userService.deleteStudent({userId:n}).subscribe(u=>{alert("Student Deleted Successfully")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.K),t.Y36(p.E),t.Y36(_.u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-filter-student"]],decls:32,vars:3,consts:[[1,"filter-student"],[1,"filter"],[3,"formGroup","ngSubmit"],[1,"form-grp"],["formControlName","class"],["disabled","","selected",""],["value","11"],["value","12"],["formControlName","session"],["value","2022-23"],["type","text","formControlName","id"],["type","submit"],[4,"ngIf"],["class","student",4,"ngFor","ngForOf"],[1,"student"],["class","student-details",4,"ngIf"],[1,"student-details"],[3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Search by filter"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return s.studentByFilter()}),t.TgZ(5,"div",3)(6,"label"),t._uU(7,"Select Class"),t.qZA(),t.TgZ(8,"select",4)(9,"option",5),t._uU(10,"Select a Class"),t.qZA(),t.TgZ(11,"option",6),t._uU(12,"11"),t.qZA(),t.TgZ(13,"option",7),t._uU(14,"12"),t.qZA()()(),t.TgZ(15,"div",3)(16,"label"),t._uU(17,"Select Session"),t.qZA(),t.TgZ(18,"select",8)(19,"option",5),t._uU(20,"Select a Session"),t.qZA(),t.TgZ(21,"option",9),t._uU(22,"2022-24"),t.qZA()()(),t.TgZ(23,"div",3)(24,"label"),t._uU(25,"Enter Mobile no. or Email id or User id"),t.qZA(),t._UZ(26,"input",10),t.qZA(),t.TgZ(27,"div",3)(28,"button",11),t._uU(29,"Search"),t.qZA()()(),t.YNc(30,f,4,1,"p",12),t.qZA(),t.YNc(31,Z,2,1,"div",13),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",s.filterForm),t.xp6(26),t.Q6J("ngIf",s.studentList),t.xp6(1),t.Q6J("ngForOf",s.studentList))},dependencies:[d.sg,d.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u],styles:[".filter-student[_ngcontent-%COMP%]{min-height:100vh;min-width:100%;background:linear-gradient(135deg,rgba(0,0,255,.3),rgba(0,0,255,.45)),url(bg-2.a24ac65a08650bca.png);background-position:center;background-size:cover;background-attachment:fixed;padding:50px}h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px}.course[_ngcontent-%COMP%]{margin-bottom:50px}.course[_ngcontent-%COMP%]   .course-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.course[_ngcontent-%COMP%]   .course-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;min-width:150px;padding:10px 20px;margin-right:20px;margin-bottom:20px;background:#0000ff;color:#fff;text-align:center;border-radius:4px;font-size:30px;font-weight:700;cursor:pointer}.course[_ngcontent-%COMP%]   .course-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{outline:none;padding:10px;border-radius:4px;border:1px solid #4d4d4d;font-size:20px;font-weight:500}.filter[_ngcontent-%COMP%]{margin-bottom:50px}.filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex}.filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{margin-right:20px}.filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:0;font-weight:700;font-size:20px;color:#00f}.filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;display:block;padding:10px;border:1px solid #4d4d4d;border-radius:4px;outline:none}.filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000ff;display:inline-block;height:100%;width:200px;font-size:20px;font-weight:500;text-transform:uppercase;color:#fff;border-radius:4px;border:none}.filter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;font-size:30px}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]{margin-bottom:20px;background-color:#edf9de;padding:20px;border-radius:15px}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.33%;margin-bottom:10px;font-size:20px}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#00f}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.student[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:4px;background:red;color:#fff;font-weight:500;font-size:18px;padding:5px 20px;margin-top:20px}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(C),g.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,O,o.UX]}),e})()}}]);