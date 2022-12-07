"use strict";(self.webpackChunkmiuform=self.webpackChunkmiuform||[]).push([[41],{4041:(Te,w,a)=>{a.r(w),a.d(w,{ReportsModule:()=>S});var h=a(6895),v=a(9132),l=a(4006),Z=a(8505),I=a(5577),R=a(4004),q=a(7188),x=a(590),Q=a(9646),A=a(7274),e=a(4650),O=a(4859),y=a(4463);class M{constructor(o,t){this.dialogRef=o,this.data=t,this.title=t.title,this.message=t.message}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}static#e=this.\u0275fac=function(t){return new(t||M)(e.Y36(A.so),e.Y36(A.WI))};static#t=this.\u0275cmp=e.Xpm({type:M,selectors:[["app-confirm-dialog"]],decls:12,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1)(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"div",2)(6,"button",3),e.NdJ("click",function(){return r.onDismiss()}),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"button",4),e.NdJ("click",function(){return r.onConfirm()}),e._uU(10),e.ALo(11,"translate"),e.qZA()()),2&t&&(e.xp6(1),e.hij(" ",r.title,"\n"),e.xp6(3),e.Oqu(r.message),e.xp6(3),e.Oqu(e.lcZ(8,4,"COMMON.NO")),e.xp6(3),e.Oqu(e.lcZ(11,6,"COMMON.YES")))},dependencies:[O.lW,A.uh,A.xY,A.H8,y.X$],styles:["div[mat-dialog-actions][_ngcontent-%COMP%]{justify-content:end}"]})}class K{constructor(o,t){this.title=o,this.message=t}}var $=a(1042);class b{constructor(){this.pointImages=[]}static Create(o){let t=new b;return t.checklistItemId=o._id,t.content=o.content,t.order=o.order,t.isChecked=null,t}}var U=a(1011),g=a(3546),P=a(7392),G=a(284),k=a(9549),B=a(1572),Y=a(4385),H=a(3238),V=a(5861),X=a(1481);const W=function(n){return{"border-width":n}};function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e.NdJ("click",function(){const c=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectImage(c))}),e._UZ(2,"img",9),e.qZA()()}if(2&n){const t=o.$implicit,r=o.index,i=e.oxw();let c;e.Q6J("ngStyle",e.VKq(4,W,!0===(null==(c=t.get("selected"))?null:c.value)?"4px":"1px"))("formArrayName",i.imagesFormArrayName),e.xp6(1),e.Q6J("formGroupName",r),e.xp6(1),e.Q6J("src",t.get("base64").value,e.LSH)}}class E{constructor(o){var t=this;this.domSanitizer=o,this.onFileInput=r=>{console.log("aaa"),r.target.files&&r.target.files.length>0&&(0,q.$)(Array.from(r.target.files).map(i=>this.resizeImage(i,1200,1200))).subscribe({next:i=>{console.log(i),i.forEach(function(){var c=(0,V.Z)(function*(s){return t.imagesFormArray.push(new l.cw({selected:new l.NI(!1),base64:new l.NI(yield(0,U.w8)(s.blob)),size:new l.NI(s.size)}))});return function(s){return c.apply(this,arguments)}}()),console.log(this.imagesFormArray)},error:i=>{console.error(i)}})}}ngOnInit(){}get selectedImages(){return(this.imagesFormArray.controls??[]).map(o=>o).filter(o=>o&&!0===o.get("selected").value)}selectImage(o){const t=o,r=t.get("selected").value??!1;t.get("selected").setValue(!r)}deleteSelected(){this.selectedImages.forEach(o=>{const t=this.imagesFormArray.controls.indexOf(o,0);t>-1&&this.imagesFormArray.controls.splice(t,1)})}resizeImage(o,t,r){return new Promise((i,c)=>{let s=new Image;s.src=URL.createObjectURL(o),s.onload=()=>{let T,_,p=s.width,u=s.height;p<=t&&u<=r&&i({blob:o,size:{width:p,height:u}}),p>u?(_=u*(t/p),T=t):(T=p*(r/u),_=r);let F=document.createElement("canvas");F.width=T,F.height=_,F.getContext("2d").drawImage(s,0,0,T,_),F.toBlob(d=>{i({blob:d,size:{width:T,height:_}})},o.type)},s.onerror=c})}static#e=this.\u0275fac=function(t){return new(t||E)(e.Y36(X.H7))};static#t=this.\u0275cmp=e.Xpm({type:E,selectors:[["app-images-selector"]],inputs:{parentImagesFormGroup:"parentImagesFormGroup",imagesFormArrayName:"imagesFormArrayName",imagesFormArray:"imagesFormArray"},decls:11,vars:3,consts:[[2,"display","flex","flex-direction","row","gap","5px"],["mat-fab","","color","primary",3,"click"],["type","file","accept","image/x-png,image/jpeg,image/gif","multiple","multiple",2,"display","none",3,"change"],["fileInput",""],["mat-fab","","color","warn",3,"disabled","click"],[2,"display","flex","flex-direction","row","flex-flow","wrap",3,"formGroup"],["style","margin: 3px; border: 1px solid black",3,"ngStyle","formArrayName",4,"ngFor","ngForOf"],[2,"margin","3px","border","1px solid black",3,"ngStyle","formArrayName"],[2,"width","200px","height","200px","display","flex","justify-content","center",3,"formGroupName","click"],[2,"display","block","max-width","200px","max-height","200px","width","auto","height","auto","margin","auto",3,"src"]],template:function(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){e.CHM(i);const s=e.MAs(5);return e.KtG(s.click())}),e.TgZ(2,"mat-icon"),e._uU(3,"library_add"),e.qZA(),e.TgZ(4,"input",2,3),e.NdJ("change",function(s){return r.onFileInput(s)}),e.qZA()(),e.TgZ(6,"button",4),e.NdJ("click",function(){return r.deleteSelected()}),e.TgZ(7,"mat-icon"),e._uU(8,"delete"),e.qZA()()(),e.TgZ(9,"div",5),e.YNc(10,ee,3,6,"div",6),e.qZA()}2&t&&(e.xp6(6),e.Q6J("disabled",0===r.selectedImages.length),e.xp6(3),e.Q6J("formGroup",r.parentImagesFormGroup),e.xp6(1),e.Q6J("ngForOf",null==r.imagesFormArray?null:r.imagesFormArray.controls))},dependencies:[h.sg,h.PC,O.cs,P.Hw,l.JL,l.sg,l.x0,l.CE]})}const te=function(n,o,t){return{positive:n,negative:o,notChoose:t}},oe=function(n,o){return{hasDetails:n,doesNotHaveDetails:o}},re=function(n){return{display:n}};class J{constructor(){}ngOnInit(){console.log("checklist item init"),this.detailsShown=this.hasDetails}get hasDetails(){return this.pointImages.controls.length>0||this.comment?.length>0}get pointImages(){return this.checklistItemFormGroup.get("pointImages")}get comment(){return this.checklistItemFormGroup.get("comment").value}get isChecked(){return this.checklistItemFormGroup.get("isChecked").value}set isChecked(o){this.checklistItemFormGroup.get("isChecked").setValue(o)}onClickChecked(){null===this.isChecked?this.isChecked=!1:!1===this.isChecked?this.isChecked=!0:!0===this.isChecked&&(this.isChecked=null)}showDetails(o){this.detailsShown=!this.detailsShown,o.stopPropagation()}static#e=this.\u0275fac=function(t){return new(t||J)};static#t=this.\u0275cmp=e.Xpm({type:J,selectors:[["app-checklist-item"]],inputs:{checklistItemFormGroup:"checklistItemFormGroup"},decls:17,vars:23,consts:[[3,"formGroup"],[2,"display","flex","flex-direction","row","flex-grow","1","gap","5px","min-height","50px",3,"click"],[2,"flex","0 0 40px","transform","scale(1.7)",3,"ngClass"],[2,"flex","1"],[2,"flex","0 0 40px","transform","scale(1.7)","margin-left","auto",3,"ngClass","click"],[3,"ngStyle"],[2,"width","100%"],["matInput","","formControlName","comment",3,"placeholder"],["imagesFormArrayName","pointImages",3,"imagesFormArray","parentImagesFormGroup"]],template:function(t,r){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"div",1),e.NdJ("click",function(){return r.onClickChecked()}),e.TgZ(3,"mat-icon",2),e._uU(4,"check_circle"),e.qZA(),e.TgZ(5,"h4",3),e._uU(6),e.qZA(),e.TgZ(7,"mat-icon",4),e.NdJ("click",function(c){return r.showDetails(c)}),e._uU(8,"assistant"),e.qZA()()(),e.TgZ(9,"mat-card-content",5)(10,"mat-form-field",6)(11,"mat-label"),e._uU(12),e.ALo(13,"translate"),e.qZA(),e._UZ(14,"input",7),e.ALo(15,"translate"),e.qZA(),e._UZ(16,"app-images-selector",8),e.qZA()()),2&t&&(e.Q6J("formGroup",r.checklistItemFormGroup),e.xp6(3),e.Q6J("ngClass",e.kEZ(14,te,!0===r.isChecked,!1===r.isChecked,null===r.isChecked)),e.xp6(3),e.AsE("",r.checklistItemFormGroup.get("order").value+1,". ",r.checklistItemFormGroup.get("content").value,""),e.xp6(1),e.Q6J("ngClass",e.WLB(18,oe,r.hasDetails,!r.hasDetails)),e.xp6(2),e.Q6J("ngStyle",e.VKq(21,re,r.detailsShown?"block":"none")),e.xp6(3),e.Oqu(e.lcZ(13,10,"ITEM.CHECKLISTITEM.COMMENT")),e.xp6(2),e.s9C("placeholder",e.lcZ(15,12,"ITEM.CHECKLISTITEM.COMMENT")),e.xp6(2),e.Q6J("imagesFormArray",r.pointImages)("parentImagesFormGroup",r.checklistItemFormGroup))},dependencies:[h.mk,h.PC,g.a8,g.dn,g.dk,P.Hw,G.Nt,k.KE,k.hX,l.Fj,l.JJ,l.JL,l.sg,l.u,E,y.X$],styles:[".negative[_ngcontent-%COMP%]{color:red}.positive[_ngcontent-%COMP%]{color:green}.notChoose[_ngcontent-%COMP%]{color:#000}.hasDetails[_ngcontent-%COMP%]{color:orange}.doesNotHaveDetails[_ngcontent-%COMP%]{color:#00f}"]})}function ie(n,o){1&n&&e._UZ(0,"mat-spinner")}function ne(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.shortName,"")}}function se(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-checklist-item",16),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("checklistItemFormGroup",t)}}function ae(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"form",1)(2,"mat-form-field")(3,"mat-label"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._UZ(6,"input",2),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"mat-form-field")(9,"mat-label"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e._UZ(12,"input",3),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"mat-form-field")(15,"mat-label"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e._UZ(18,"input",4),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"mat-form-field")(21,"mat-select",5),e.ALo(22,"translate"),e.YNc(23,ne,2,2,"mat-option",6),e.qZA()(),e.TgZ(24,"div",7),e.YNc(25,se,2,1,"div",8),e.qZA(),e.TgZ(26,"mat-card",9)(27,"mat-card-header"),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"mat-card-content"),e._UZ(31,"app-images-selector",10),e.TgZ(32,"mat-form-field",11)(33,"mat-label"),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"input",12),e.ALo(37,"translate"),e.qZA()()()(),e.TgZ(38,"button",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.saveReport())}),e.TgZ(39,"mat-icon"),e._uU(40,"save"),e.qZA()(),e.TgZ(41,"button",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.preview())}),e.TgZ(42,"mat-icon"),e._uU(43,"rebase_edit"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.itemForm),e.xp6(3),e.Oqu(e.lcZ(5,18,"ITEM.REPORT.PRODUCT_NAME")),e.xp6(2),e.s9C("placeholder",e.lcZ(7,20,"ITEM.REPORT.PRODUCT_NAME")),e.xp6(4),e.Oqu(e.lcZ(11,22,"ITEM.REPORT.PRODUCT_COLOR")),e.xp6(2),e.s9C("placeholder",e.lcZ(13,24,"ITEM.REPORT.PRODUCT_COLOR")),e.xp6(4),e.Oqu(e.lcZ(17,26,"ITEM.REPORT.PRODUCT_ID")),e.xp6(2),e.s9C("placeholder",e.lcZ(19,28,"ITEM.REPORT.PRODUCT_ID")),e.xp6(3),e.s9C("placeholder",e.lcZ(22,30,"ITEM.REPORT.FACTORY")),e.xp6(2),e.Q6J("ngForOf",t.factoryItems),e.xp6(1),e.Q6J("formGroup",t.itemForm),e.xp6(1),e.Q6J("ngForOf",t.checklistItemFormGroups),e.xp6(3),e.hij(" ",e.lcZ(29,32,"PREPARE_REPORT.SUMMARY")," "),e.xp6(3),e.Q6J("imagesFormArray",t.images)("parentImagesFormGroup",t.itemForm),e.xp6(3),e.Oqu(e.lcZ(35,34,"ITEM.REPORT.COMMENT")),e.xp6(2),e.s9C("placeholder",e.lcZ(37,36,"ITEM.REPORT.COMMENT")),e.xp6(2),e.Q6J("disabled",!t.itemForm.valid),e.xp6(3),e.Q6J("disabled",!t.itemForm.valid)}}function ce(n,o){1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2,"Raport nie istnieje."),e.qZA()())}var f=(()=>{return(n=f||(f={}))[n.ADDED=0]="ADDED",n[n.REMOVED=1]="REMOVED",n[n.CHANGED=2]="CHANGED",f;var n})();class N{constructor(o,t,r,i,c,s,p){this.formBuilder=o,this.translateService=t,this.logger=r,this.router=i,this.dialog=c,this.activatedRoute=s,this.reportService=p,this.item=void 0,this.factoryItems=[],this.checklistItems=[],this.loading=!1}ngOnInit(){this.loading=!0,this.reportService.getChecklist().pipe((0,Z.b)(o=>this.checklistItems=o),(0,I.z)(o=>this.activatedRoute.params),(0,R.U)(o=>o.id),(0,I.z)(o=>(this.logger.debug(`prepare report for id: ${o}`),void 0!==o&&""!==o?this.reportService.getReport(o).pipe((0,I.z)(t=>{const r=this.compareChecklist(t.checklist,this.checklistItems);return console.log(JSON.stringify(r)),r.length>0?(0,q.$)(this.translateService.get("PREPARE_REPORT.UPDATE_CHECKLIST_QUESTION_TITLE"),this.translateService.get("PREPARE_REPORT.UPDATE_CHECKLIST_QUESTION")).pipe((0,I.z)(i=>{const c=new K(i[0],i[1]);return this.dialog.open(M,{maxWidth:"400px",data:c}).afterClosed()}),(0,R.U)(i=>(!0===i&&(t.checklist=this.updateChecklist(t.checklist,r,this.checklistItems)),t)),(0,R.U)(i=>this.reportService.updateReport(i)),(0,I.z)(i=>this.reportService.getReport(o)),(0,x.P)()):(0,Q.of)(t)})):(0,Q.of)((n=>{let o={};return o._id=`report_${$.Z()}`,o.isActive=!0,o.checklist=n.map(t=>b.Create(t)),o.dateOfCreation=Date.now(),o.images=[],o})(this.checklistItems)))),(0,Z.b)(o=>this.item=o),(0,I.z)(o=>(this.itemForm=this.formBuilder.group({_id:[this.item._id],_rev:[this.item._rev],dateOfCreation:[this.item.dateOfCreation],productId:[this.item.productId,[l.kI.required,l.kI.minLength(3)]],productName:[this.item.productName,[l.kI.required,l.kI.minLength(3)]],productColor:[this.item.productColor,[l.kI.required,l.kI.minLength(3)]],factoryInfoId:[this.item.factoryInfoId,[l.kI.required]],checklist:this.formBuilder.array(this.item.checklist.map(t=>this.formBuilder.group({checklistItemId:[t.checklistItemId],comment:[t.comment],order:[t.order],pointImages:this.formBuilder.array(t.pointImages.map(r=>this.formBuilder.group({selected:!1,...r}))),content:[t.content],isChecked:[t.isChecked]}))),images:this.formBuilder.array(this.item.images.map(t=>this.formBuilder.group({selected:!1,...t}))),comment:[this.item.comment],dateOfDelivery:[this.item.dateOfDelivery]}),this.reportService.getFactories())),(0,Z.b)(o=>this.factoryItems=o),(0,x.P)()).subscribe({next:o=>{console.log("init success"),this.loading=!1},error:o=>{console.error(o),this.loading=!1}})}compareChecklist(o,t){let r=o.map(m=>({order:m.order,_id:m.checklistItemId,content:m.content})),i=t.map(m=>({order:m.order,_id:m._id,content:m.content}));const c=(m,d)=>m._id===d._id,s=(m,d,fe)=>m.filter(Ie=>!d.some(Ce=>fe(Ie,Ce))),p=s(r,i,c),u=s(i,r,c),F=s(r.filter(m=>!p.some(d=>d._id===m._id)&&!u.some(d=>d._id===m._id)),i.filter(m=>!p.some(d=>d._id===m._id)&&!u.some(d=>d._id===m._id)),(m,d)=>m._id===d._id&&m.content===d.content);let C=[];return C=C.concat(p.map(m=>({checkListItem:m,reason:f.REMOVED}))),C=C.concat(u.map(m=>({checkListItem:m,reason:f.ADDED}))),C=C.concat(F.map(m=>({checkListItem:m,reason:f.CHANGED}))),C}updateChecklist(o,t,r){let i=[...o];return t.forEach(c=>{switch(c.reason){case f.ADDED:i.push(b.Create({...c.checkListItem}));break;case f.REMOVED:break;case f.CHANGED:let s=i.find(u=>c.checkListItem._id===u.checklistItemId),p=r.find(u=>c.checkListItem._id===u._id);s&&(s.content=p.content)}}),i}get images(){return this.itemForm.get("images")}get checklistItemFormGroups(){return this.itemForm.get("checklist").controls.map(t=>t)}getFromFormGroup(){return this.itemForm.getRawValue()}preview(){let o=this.getFromFormGroup();this.reportService.updateReport(o).pipe((0,x.P)()).subscribe({next:t=>{this.router.navigate(["/reports/preview",o._id])},error:t=>console.error(t)})}saveReport(){let o=this.getFromFormGroup();this.reportService.updateReport(o).pipe((0,I.z)(t=>this.reportService.getReport(t)),(0,Z.b)(t=>{this.item=t,this.itemForm.get("_id").setValue(this.item._id),this.itemForm.get("_rev").setValue(this.item._rev)}),(0,x.P)()).subscribe({next:t=>console.log("success"),error:t=>console.error(t)})}static#e=this.\u0275fac=function(t){return new(t||N)(e.Y36(l.qu),e.Y36(y.sK),e.Y36(U.Yd),e.Y36(v.F0),e.Y36(A.uw),e.Y36(v.gz),e.Y36(U.rM))};static#t=this.\u0275cmp=e.Xpm({type:N,selectors:[["app-prepare-report"]],decls:6,vars:6,consts:[[4,"ngIf"],[1,"an-flex","an-flex-direction-column",3,"formGroup"],["matInput","","formControlName","productName",3,"placeholder"],["matInput","","formControlName","productColor",3,"placeholder"],["matInput","","formControlName","productId",3,"placeholder"],["formControlName","factoryInfoId",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[2,"display","flex","flex-direction","column","gap","5px",3,"formGroup"],[4,"ngFor","ngForOf"],[2,"margin-top","5px"],["imagesFormArrayName","images",3,"imagesFormArray","parentImagesFormGroup"],[2,"width","100%"],["matInput","","formControlName","comment",3,"placeholder"],["mat-fab","","color","primary",1,"mat-fab-bottom-right-second",3,"disabled","click"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"disabled","click"],[3,"value"],[3,"checklistItemFormGroup"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.YNc(3,ie,1,0,"mat-spinner",0),e.YNc(4,ae,44,38,"div",0),e.YNc(5,ce,3,0,"div",0)),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,4,"PREPARE_REPORT.TITLE")),e.xp6(2),e.Q6J("ngIf",r.loading),e.xp6(1),e.Q6J("ngIf",!r.loading&&r.item),e.xp6(1),e.Q6J("ngIf",!r.item&&!r.loading))},dependencies:[h.sg,h.O5,O.cs,g.a8,g.dn,g.dk,P.Hw,G.Nt,k.KE,k.hX,B.Ou,Y.gD,H.ey,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,E,J,y.X$]})}var z=a(8580),le=a(6709),me=a(4633);function pe(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.shortName,"")}}function de(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",16),e.NdJ("click",function(i){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.preview(i,s._id))}),e.TgZ(1,"div",17)(2,"span"),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.TgZ(6,"span"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"div",18)(10,"mat-icon",19),e.NdJ("click",function(i){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.prepare(i,s._id))}),e._uU(11,"edit"),e.qZA()()()}if(2&n){const t=o.$implicit,r=e.oxw();let i;e.xp6(3),e.lnq("",t.productName," (",t.productId,"), ",t.productColor,""),e.xp6(2),e.AsE("",null==(i=r.selectFactoryInfoConfig(t.factoryInfoId))?null:i.shortName," - ",null==(i=r.selectFactoryInfoConfig(t.factoryInfoId))?null:i.name,""),e.xp6(2),e.Oqu(e.xi3(8,6,t.dateOfCreation,"YYYY-MM-d, H:mm:ss"))}}const ue=function(){return["prepare"]};class D{constructor(o,t){this.reportService=o,this.router=t,this.loadFactoryWithNoActive=!1,this.factoryItems=[],this.items=[],this.productIdFilter=""}ngOnInit(){this.reloadFactories(!1).pipe((0,I.z)(o=>this.reloadReports()),(0,x.P)()).subscribe()}selectFactoryInfoConfig(o){return this.factoryItems.find(t=>t._id===o)}reloadReports(){return this.reportService.getReports(!0).pipe((0,Z.b)(o=>this.items=o),(0,R.U)(o=>!0))}filter(){}clearFilter(){}reloadFactories(o){return this.reportService.getFactories().pipe((0,Z.b)(t=>this.factoryItems=t),(0,R.U)(t=>!0))}preview(o,t){this.router.navigate(["/reports/preview",t])}prepare(o,t){o.stopPropagation(),this.router.navigate(["/reports/prepare",t])}static#e=this.\u0275fac=function(t){return new(t||D)(e.Y36(U.rM),e.Y36(v.F0))};static#t=this.\u0275cmp=e.Xpm({type:D,selectors:[["app-reports"]],decls:40,vars:30,consts:[["role","button","tabindex","0",1,"example-accordion-item"],["accordionItem","cdkAccordionItem"],[1,"example-accordion-item-header",3,"click"],[1,"example-accordion-item-description"],["role","region"],["appearance","outline",2,"width","100%"],["matInput","","type","text","name","value",3,"ngModel","ngModelChange"],["multiple","",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"checked","change"],[2,"margin-left","auto"],["mat-button","","color","secondary",3,"click"],["mat-raised-button","","color","primary",3,"click"],["class","an-list-item",3,"click",4,"ngFor","ngForOf"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"routerLink"],[3,"value"],[1,"an-list-item",3,"click"],[1,"an-list-item-des"],[1,"an-list-item-actions"],[3,"click"]],template:function(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div")(1,"h1"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"cdk-accordion")(5,"cdk-accordion-item",0,1)(7,"div",2),e.NdJ("click",function(){e.CHM(i);const s=e.MAs(6);return e.KtG(s.toggle())}),e.TgZ(8,"h4"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"span",3)(12,"mat-icon"),e._uU(13,"filter_alt"),e.qZA()()(),e.TgZ(14,"mat-card",4)(15,"mat-card-content")(16,"mat-form-field",5)(17,"mat-label"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"input",6),e.NdJ("ngModelChange",function(s){return r.productIdFilter=s}),e.qZA()(),e.TgZ(21,"mat-form-field",5)(22,"mat-select",7),e.ALo(23,"translate"),e.YNc(24,pe,2,2,"mat-option",8),e.qZA()(),e.TgZ(25,"mat-checkbox",9),e.NdJ("change",function(s){return r.reloadFactories(s.checked)}),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.TgZ(28,"mat-card-actions",10)(29,"button",11),e.NdJ("click",function(){return r.filter()}),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"button",12),e.NdJ("click",function(){return r.clearFilter()}),e._uU(33),e.ALo(34,"translate"),e.qZA()()()()(),e.TgZ(35,"mat-list"),e.YNc(36,de,12,9,"div",13),e.qZA(),e.TgZ(37,"button",14)(38,"mat-icon"),e._uU(39,"add"),e.qZA()()()}if(2&t){const i=e.MAs(6);e.xp6(2),e.Oqu(e.lcZ(3,15,"REPORTS.TITLE")),e.xp6(3),e.uIk("aria-expanded",i.expanded),e.xp6(4),e.Oqu(e.lcZ(10,17,"REPORTS.FILTER")),e.xp6(5),e.Udp("display",i.expanded?"":"none"),e.xp6(4),e.Oqu(e.lcZ(19,19,"ITEM.REPORT.PRODUCT_ID")),e.xp6(2),e.Q6J("ngModel",r.productIdFilter),e.xp6(2),e.s9C("placeholder",e.lcZ(23,21,"REPORTS.FILTER_BY_FACTORIES")),e.xp6(2),e.Q6J("ngForOf",r.factoryItems),e.xp6(1),e.Q6J("checked",r.loadFactoryWithNoActive),e.xp6(1),e.hij(" ",e.lcZ(27,23,"REPORTS.LOAD_NOACTIVE_FACTORIES")," "),e.xp6(4),e.Oqu(e.lcZ(31,25,"COMMON.CLEAR_FILTER")),e.xp6(3),e.Oqu(e.lcZ(34,27,"COMMON.FILTER")),e.xp6(3),e.Q6J("ngForOf",r.items),e.xp6(1),e.Q6J("routerLink",e.DdM(29,ue))}},dependencies:[h.sg,v.rH,z.xI,z.dD,O.lW,O.cs,g.a8,g.hq,g.dn,le.oG,P.Hw,G.Nt,k.KE,k.hX,me.i$,Y.gD,H.ey,l.Fj,l.JJ,l.On,h.uU,y.X$],styles:[".filter-select[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:1px solid #666666}.example-accordion-item-header[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:space-between}"]})}const he=[{path:"",component:D},{path:"prepare/:id",component:N},{path:"prepare",pathMatch:"full",component:N},{path:"preview",loadChildren:()=>a.e(992).then(a.bind(a,5992)).then(n=>n.PreviewReportModule)}];class L{static#e=this.\u0275fac=function(t){return new(t||L)};static#t=this.\u0275mod=e.oAB({type:L});static#o=this.\u0275inj=e.cJS({imports:[v.Bz.forChild(he),v.Bz]})}var ge=a(1608);class S{static#e=this.\u0275fac=function(t){return new(t||S)};static#t=this.\u0275mod=e.oAB({type:S});static#o=this.\u0275inj=e.cJS({imports:[h.ez,L,ge.m]})}}}]);