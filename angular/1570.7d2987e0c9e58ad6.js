"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1570],{1570:(f,m,r)=>{r.r(m),r.d(m,{PaymentModule:()=>s});var p=r(6895),i=r(7370),e=r(4719),n=r(6738),l=r(4981);const d=[{path:"",component:(()=>{class t{constructor(o){this.userService=o,this.ampPaymnetForm=new e.nJ({userId:new e.p4("",[e.kI.required]),mobile:new e.p4("",[e.kI.required])})}ngOnInit(){}ampPayment(){this.ampPaymnetForm.valid&&this.userService.paymentAmpInstituteHybrid(this.ampPaymnetForm.value).subscribe(o=>{console.log(o),window.open(o.encUrl,"_blank")},o=>{alert(o.error.message)})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.K))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-payment"]],decls:15,vars:2,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-header"],[1,"form-grp"],["required","","type","text","placeholder","userId","formControlName","userId","id","userId"],["for","userId"],["required","","type","text","placeholder","mobile","formControlName","mobile","id","mobile"],["for","mobile"],["type","submit",3,"disabled"]],template:function(o,c){1&o&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return c.ampPayment()}),n.TgZ(2,"div",2)(3,"h3"),n._uU(4,"Partner Registration"),n.qZA()(),n.TgZ(5,"div",3),n._UZ(6,"input",4),n.TgZ(7,"label",5),n._uU(8,"User Id"),n.qZA()(),n.TgZ(9,"div",3),n._UZ(10,"input",6),n.TgZ(11,"label",7),n._uU(12,"Mobile"),n.qZA()(),n.TgZ(13,"button",8),n._uU(14,"Register"),n.qZA()()()),2&o&&(n.xp6(1),n.Q6J("formGroup",c.ampPaymnetForm),n.xp6(12),n.Q6J("disabled",!c.ampPaymnetForm.valid))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u],styles:[".addNewStud[_ngcontent-%COMP%]{padding:20px 100px}h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px}.container[_ngcontent-%COMP%]{display:grid;place-items:center}form[_ngcontent-%COMP%]{width:500px;padding:20px;background:rgb(191,197,93);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border-radius:15px}form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.5)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.5);color:#fff}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;color:#fff;font-size:18px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#6b921d;color:#fff;border-color:#99cc32;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#7aa328;border-color:#7aa328}form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:not-allowed}h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;color:#4d4d4d}h1[_ngcontent-%COMP%]{font-size:40px;font-weight:400;color:#00f;margin-bottom:50px}@media screen and (max-width: 660px){form[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.Bz.forChild(d),i.Bz]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,g,e.UX]}),t})()}}]);