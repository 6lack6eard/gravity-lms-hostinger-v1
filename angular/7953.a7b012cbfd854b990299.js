"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7953],{7953:(C,g,s)=>{s.r(g),s.d(g,{CourseModule:()=>m});var i=s(8583),c=s(5855),n=s(639),u=s(4981);function l(t,o){if(1&t&&(n.TgZ(0,"div",7),n.TgZ(1,"h2"),n._uU(2),n.qZA(),n.qZA()),2&t){const e=o.$implicit;n.Q6J("routerLink",e),n.xp6(2),n.hij(" ",e," ")}}function a(t,o){if(1&t&&(n.TgZ(0,"div",2),n.TgZ(1,"h6"),n._uU(2),n.qZA(),n.TgZ(3,"h4"),n._uU(4),n.qZA(),n.TgZ(5,"div",3),n.TgZ(6,"h4"),n._uU(7,"Course Details"),n.qZA(),n.TgZ(8,"div",4),n.TgZ(9,"span"),n._uU(10,"Name"),n.qZA(),n.TgZ(11,"h2"),n._uU(12),n.qZA(),n.qZA(),n.TgZ(13,"div",4),n.TgZ(14,"span"),n._uU(15,"Type"),n.qZA(),n.TgZ(16,"h2"),n._uU(17),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",3),n.TgZ(19,"h4"),n._uU(20,"Start Learning"),n.qZA(),n.TgZ(21,"div",5),n.YNc(22,l,3,2,"div",6),n.qZA(),n.qZA(),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.hij("Course ",e.module.cName,""),n.xp6(2),n.hij("Welcome, ",e.profile.name,""),n.xp6(8),n.hij(" ",e.module.mName," "),n.xp6(5),n.hij(" ",e.module.mType," "),n.xp6(5),n.Q6J("ngForOf",e.module.mSubject)}}const p=[{path:"",component:(()=>{class t{constructor(e,r){this.userService=e,this.activatedRoute=r}ngOnInit(){this.mName=this.activatedRoute.snapshot.paramMap.get("module"),this.viewProfile(),this.getLmsCourse()}viewProfile(){this.userService.viewProfile().subscribe(e=>{this.profile=e})}getLmsCourse(){this.userService.getModuleCourse(this.mName).subscribe(e=>{this.module=e})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(u.K),n.Y36(c.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-course"]],decls:2,vars:1,consts:[[1,"main-bg"],["class","lmscourse",4,"ngIf"],[1,"lmscourse"],[1,"details"],[1,"grp"],[1,"subject-pallet"],["class","subject",3,"routerLink",4,"ngFor","ngForOf"],[1,"subject",3,"routerLink"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.YNc(1,a,23,5,"div",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",r.profile&&r.module))},directives:[i.O5,i.sg,c.rH],styles:['.main-bg[_ngcontent-%COMP%]{min-height:100vh;min-width:100%;background:linear-gradient(135deg,rgba(0,0,255,.3),rgba(0,0,255,.45)),url(bg-2.ef2b19d92aeab4738af9.png);background-position:center;background-size:cover;background-attachment:fixed}.lmscourse[_ngcontent-%COMP%]{padding:50px;width:100%}.lmscourse[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#00f;font-weight:700}.lmscourse[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px;font-weight:900}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 10px -5px #99f;padding:20px;border-radius:20px;margin-top:20px}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#00f;font-size:16px;font-weight:700;text-transform:uppercase}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:before{content:"";display:inline-block;background:#0000ff;height:10px;width:10px;border-radius:50%;margin-right:10px}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .grp[_ngcontent-%COMP%]{margin:24px 0}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .grp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#00f;font-size:16px;font-weight:700}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .grp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:400}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subject-pallet[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subject-pallet[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]{margin-top:10px;margin-right:20px;padding:20px;width:240px;background:#ffc300;border-radius:10px;cursor:pointer}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subject-pallet[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;color:#00f;margin-bottom:0}@media screen and (max-width: 660px){.lmscourse[_ngcontent-%COMP%]{padding:80px 15px 15px}.lmscourse[_ngcontent-%COMP%] > h6[_ngcontent-%COMP%]{font-weight:500;margin-bottom:0;color:#fff}.lmscourse[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#ffc300;margin-bottom:10px}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-bottom:50px}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subject-pallet[_ngcontent-%COMP%]{display:block}.lmscourse[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subject-pallet[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]{margin-bottom:20px}}']}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[i.ez,d]]}),t})()}}]);