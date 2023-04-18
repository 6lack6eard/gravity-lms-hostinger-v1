"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9760],{9760:(C,l,a)=>{a.r(l),a.d(l,{InstituteModule:()=>g});var p=a(6895),c=a(7370),t=a(4719),e=a(6738),d=a(4981);const s=[{path:"",component:(()=>{class n{constructor(r){this.userService=r,this.registerAmpInstituteForm=new t.nJ({name:new t.p4("",[t.kI.required]),email:new t.p4("",[t.kI.required]),contact:new t.p4("",[t.kI.required]),contactPersonName:new t.p4("",[t.kI.required]),contactPersonMobile:new t.p4("",[t.kI.required]),address:new t.p4("",[t.kI.required]),city:new t.p4("",[t.kI.required]),state:new t.p4("",[t.kI.required]),pincode:new t.p4("",[t.kI.required]),natureOfInstitute:new t.p4("",[t.kI.required]),infrastrucuture:new t.p4("",[t.kI.required]),board:new t.p4("",[t.kI.required])})}ngOnInit(){}registerAmpInstitute(){this.registerAmpInstituteForm.valid&&this.userService.registerAmpInstitute(this.registerAmpInstituteForm.value).subscribe(r=>{const o=r.info,_=URL.createObjectURL(new Blob([`\n          <html>\n            <body>\n              <form action="${o.payu_url}" method="post" enctype="multipart/form-data" id="payu_form">\n                <input type="hidden" name="firstname" value="${o.first_name}"/>\n                <input type="hidden" name="email" value="${o.email}"/>\n                <input type="hidden" name="phone" value="${o.mobile}"/>\n                <input type="hidden" name="surl" value="${o.call_back_url}"/>\n                <input type="hidden" name="curl" value="${o.payu_cancel_url}"/>\n                <input type="hidden" name="furl" value="${o.payu_fail_url}"/>\n                <input type="hidden" name="key" value="${o.payu_merchant_key}"/>\n                <input type="hidden" name="hash" value="${o.payu_sha_token}"/>\n                <input type="hidden" name="txnid" value="${o.txnId}"/>\n                <input type="hidden" name="productinfo" value="${o.plan_name}"/>\n                <input type="hidden" name="amount" value="${o.amount}"/>\n                <input type="hidden" name="service_provider" value="${o.service_provide}"/>\n                <button type="submit" value="submit" #submitBtn></button>\n              </form>\n              <script type="text/javascript">document.getElementById("payu_form").submit();<\/script>\n            </body>\n          </html>`],{type:"text/html"}));window.location.href=_})}apmInstitutePay(){this.userService.ampPayment({}).subscribe(r=>{console.log(r.paymentUrl),window.location.href=r.paymentUrl})}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(d.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-institute"]],decls:71,vars:2,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-header"],[1,"form-grp"],["required","","type","text","placeholder","name","formControlName","name","id","name"],["for","name"],["required","","type","email","placeholder","email","formControlName","email","id","email"],["for","email"],["required","","type","text","placeholder","contact","formControlName","contact","id","contact"],["for","contact"],["required","","type","text","placeholder","contactPersonName","formControlName","contactPersonName","id","contactPersonName"],["for","contactPersonName"],["required","","type","text","placeholder","contactPersonMobile","formControlName","contactPersonMobile","id","contactPersonMobile"],["for","contactPersonMobile"],["required","","type","text","placeholder","address","formControlName","address","id","address"],["for","address"],["required","","type","text","placeholder","city","formControlName","city","id","city"],["for","city"],["required","","type","text","placeholder","state","formControlName","state","id","state"],["for","state"],["required","","type","text","placeholder","pincode","formControlName","pincode","id","pincode"],["for","pincode"],["required","","id","natureOfInstitute","formControlName","natureOfInstitute"],["value","NGO"],["value","Junior College/School"],["value","Coaching Center"],["for","natureOfInstitute"],["required","","id","infrastrucuture","formControlName","infrastrucuture"],["value","Having - LED Screen, Internet, Sound System"],["value","Don't Have - LED Screen, Internet, Sound System"],["for","infrastrucuture"],["required","","id","board","formControlName","board"],["value","CBSE"],["value","ISE"],["value","OTHER"],["for","board"],["type","submit",3,"disabled"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return o.registerAmpInstitute()}),e.TgZ(2,"div",2)(3,"h3"),e._uU(4,"Partner Registration"),e.qZA()(),e.TgZ(5,"div",3),e._UZ(6,"input",4),e.TgZ(7,"label",5),e._uU(8,"Name"),e.qZA()(),e.TgZ(9,"div",3),e._UZ(10,"input",6),e.TgZ(11,"label",7),e._uU(12,"Email"),e.qZA()(),e.TgZ(13,"div",3),e._UZ(14,"input",8),e.TgZ(15,"label",9),e._uU(16,"Contact"),e.qZA()(),e.TgZ(17,"div",3),e._UZ(18,"input",10),e.TgZ(19,"label",11),e._uU(20,"Contact Person's Name"),e.qZA()(),e.TgZ(21,"div",3),e._UZ(22,"input",12),e.TgZ(23,"label",13),e._uU(24,"Contact Person's Mobile"),e.qZA()(),e.TgZ(25,"div",3),e._UZ(26,"input",14),e.TgZ(27,"label",15),e._uU(28,"Address"),e.qZA()(),e.TgZ(29,"div",3),e._UZ(30,"input",16),e.TgZ(31,"label",17),e._uU(32,"City"),e.qZA()(),e.TgZ(33,"div",3),e._UZ(34,"input",18),e.TgZ(35,"label",19),e._uU(36,"State"),e.qZA()(),e.TgZ(37,"div",3),e._UZ(38,"input",20),e.TgZ(39,"label",21),e._uU(40,"Pincode"),e.qZA()(),e.TgZ(41,"div",3)(42,"select",22)(43,"option",23),e._uU(44,"NGO"),e.qZA(),e.TgZ(45,"option",24),e._uU(46,"Junior College/School"),e.qZA(),e.TgZ(47,"option",25),e._uU(48,"Coaching Center"),e.qZA()(),e.TgZ(49,"label",26),e._uU(50,"Nature Of Institute"),e.qZA()(),e.TgZ(51,"div",3)(52,"select",27)(53,"option",28),e._uU(54,"Having - LED Screen, Internet, Sound System"),e.qZA(),e.TgZ(55,"option",29),e._uU(56,"Don't Have - LED Screen, Internet, Sound System"),e.qZA()(),e.TgZ(57,"label",30),e._uU(58,"Infrastructure (Digital Classes)"),e.qZA()(),e.TgZ(59,"div",3)(60,"select",31)(61,"option",32),e._uU(62,"CBSE"),e.qZA(),e.TgZ(63,"option",33),e._uU(64,"ISE"),e.qZA(),e.TgZ(65,"option",34),e._uU(66,"OTHER"),e.qZA()(),e.TgZ(67,"label",35),e._uU(68,"Board"),e.qZA()(),e.TgZ(69,"button",36),e._uU(70,"Register"),e.qZA()()()),2&r&&(e.xp6(1),e.Q6J("formGroup",o.registerAmpInstituteForm),e.xp6(68),e.Q6J("disabled",!o.registerAmpInstituteForm.valid))},dependencies:[t._Y,t.YN,t.Kr,t.Fj,t.EJ,t.JJ,t.JL,t.Q7,t.sg,t.u],styles:[".addNewStud[_ngcontent-%COMP%]{padding:20px 100px}h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#ffc300;margin-bottom:16px}.container[_ngcontent-%COMP%]{display:grid;place-items:center}form[_ngcontent-%COMP%]{width:500px;padding:20px;background:rgb(191,197,93);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border-radius:15px}form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.5)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.5);color:#fff}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;color:#fff;font-size:18px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#6b921d;color:#fff;border-color:#99cc32;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#7aa328;border-color:#7aa328}form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:not-allowed}h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#00f;margin-bottom:8px;color:#4d4d4d}h1[_ngcontent-%COMP%]{font-size:40px;font-weight:400;color:#00f;margin-bottom:50px}@media screen and (max-width: 660px){form[_ngcontent-%COMP%]{width:100%}}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(s),c.Bz]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,m,t.UX]}),n})()}}]);