"use strict";(self.webpackChunkmiuform=self.webpackChunkmiuform||[]).push([[501],{5501:(Lt,S,l)=>{l.r(S),l.d(S,{ConfigurationModule:()=>y});var _=l(6895),G=l(9132),t=l(4650),E=l(7392),J=l(3848),d=l(8505),m=l(590),I=l(5577),u=(()=>{return(r=u||(u={}))[r.Create=0]="Create",r[r.Update=1]="Update",r[r.Delete=2]="Delete",u;var r})(),Q=l(1138),h=l(6111),p=l(7274),Z=l(9521),c=l(4006),A=l(4859),g=l(7331),R=l(4144),f=l(9549),C=l(4463);function w(r,o){1&r&&(t.TgZ(0,"h1",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.FACTORIES.EDITOR.CREATE")))}function H(r,o){1&r&&(t.TgZ(0,"h1",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.FACTORIES.EDITOR.UPDATE")))}function K(r,o){1&r&&(t.TgZ(0,"h1",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.FACTORIES.EDITOR.DELETE")))}function P(r,o){1&r&&(t.TgZ(0,"mat-error",15),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"FIELD_ERRORS.REQUIRED")," "))}const j=function(r){return{requiredLength:r}};function B(r,o){if(1&r&&(t.TgZ(0,"mat-error",15),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,"FIELD_ERRORS.REQUIRED_MINLENGTH",t.VKq(4,j,e.itemForm.get("shortName").errors.minlength.requiredLength))," ")}}function $(r,o){1&r&&(t.TgZ(0,"mat-error",15),t._uU(1," This field is required. "),t.qZA())}function V(r,o){if(1&r&&(t.TgZ(0,"mat-error",15),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" The minimum length for this field is ",e.itemForm.get("name").errors.minlength.requiredLength," characters. ")}}function W(r,o){1&r&&(t.TgZ(0,"mat-icon",18),t._uU(1,"cancel"),t.qZA())}function X(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"mat-chip-row",16),t.NdJ("removed",function(){const a=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.removeEmail(a.value))}),t._uU(1),t.YNc(2,W,2,0,"mat-icon",17),t.qZA()}if(2&r){const e=o.$implicit,i=t.oxw();t.Q6J("color",e?"warn":"")("removable",i.data.action!==i.EditorActions.Delete),t.xp6(1),t.hij(" ",e.value," "),t.xp6(1),t.Q6J("ngIf",i.removable)}}function z(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrUpdateItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.itemForm.valid),t.xp6(1),t.Oqu(t.lcZ(2,2,"COMMON.CREATE"))}}function tt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrUpdateItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.itemForm.valid),t.xp6(1),t.Oqu(t.lcZ(2,2,"COMMON.UPDATE"))}}function et(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return n.item.isActive=!0,t.KtG(n.addOrUpdateItem(n.item))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"COMMON.ACTIVATE")))}function ot(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"COMMON.DELETE")))}class F{constructor(o,e,i,n){this.formBuiler=o,this.configurationService=e,this.dialogRef=i,this.data=n,this.EditorActions=u,this.separatorKeysCodes=[Z.K5,Z.OC],this.removable=!0,this.item=n.item,this.item.emails||(this.item.emails=[]),this.itemForm=this.formBuiler.group({_id:[this.item._id],_rev:[this.item._rev],isActive:[this.item.isActive],shortName:[this.item.shortName,[c.kI.required,c.kI.minLength(2)]],name:[this.item.name,[c.kI.required,c.kI.minLength(2)]],order:[this.item.order],address:[this.item.address],emails:this.formBuiler.array(this.item.emails.map(a=>[a]))}),this.itemForm.markAllAsTouched()}onNoClick(){this.dialogRef.close(!1)}getFromFormGroup(){return this.itemForm.getRawValue()}addOrUpdateItem(o){this.configurationService.addOrUpdateFactory(o).pipe((0,m.P)(),(0,d.b)(e=>this.dialogRef.close(!0))).subscribe()}deleteItem(o){o.isActive=!1,this.configurationService.addOrUpdateFactory(o).pipe((0,m.P)(),(0,d.b)(e=>this.dialogRef.close(!0))).subscribe()}get formEmails(){return this.itemForm.get("emails")}addEmail(o){o.value&&(this.validateEmail(o.value.trim())?(this.itemForm.get("emails").push(new c.NI(o.value.trim())),o.input&&(o.input.value="")):console.error("wrong email..."))}removeEmail(o){console.log("Removing "+o);let e=this.formEmails.value.indexOf(o);e>=0&&this.formEmails.removeAt(e)}validateEmail(o){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())}static#t=this.\u0275fac=function(e){return new(e||F)(t.Y36(c.qu),t.Y36(h.eB),t.Y36(p.so),t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:F,selectors:[["app-editor"]],decls:37,vars:32,consts:[["mat-dialog-title","",4,"ngIf"],[1,"an-flex","an-flex-direction-column",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","shortName",3,"readonly"],["class","text-danger",4,"ngIf"],["matInput","","formControlName","name",3,"readonly"],["matInput","","formControlName","address",3,"readonly"],["formArrayName","emails"],["chipList",""],["selected","","required","","name","chips",3,"color","removable","removed",4,"ngFor","ngForOf"],["placeholder","enter item ",3,"readonly","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],["mat-button","","cdkFocusInitial","",3,"click",4,"ngIf"],["mat-dialog-title",""],[1,"text-danger"],["selected","","required","","name","chips",3,"color","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(e,i){if(1&e&&(t.YNc(0,w,3,3,"h1",0),t.YNc(1,H,3,3,"h1",0),t.YNc(2,K,3,3,"h1",0),t.TgZ(3,"mat-dialog-content")(4,"form",1)(5,"mat-form-field",2)(6,"mat-label"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"input",3),t.YNc(10,P,3,3,"mat-error",4),t.YNc(11,B,3,6,"mat-error",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",5),t.YNc(17,$,2,0,"mat-error",4),t.YNc(18,V,2,1,"mat-error",4),t.qZA(),t.TgZ(19,"mat-form-field",2)(20,"mat-label"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"input",6),t.qZA(),t.TgZ(24,"mat-form-field",2)(25,"mat-chip-grid",7,8),t.YNc(27,X,3,4,"mat-chip-row",9),t.qZA(),t.TgZ(28,"input",10),t.NdJ("matChipInputTokenEnd",function(a){return i.addEmail(a)}),t.qZA()()()(),t.TgZ(29,"mat-dialog-actions")(30,"button",11),t.NdJ("click",function(){return i.onNoClick()}),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.YNc(33,z,3,4,"button",12),t.YNc(34,tt,3,4,"button",12),t.YNc(35,et,3,3,"button",13),t.YNc(36,ot,3,3,"button",13),t.qZA()),2&e){const n=t.MAs(26);t.Q6J("ngIf",i.data.action===i.EditorActions.Create),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Delete),t.xp6(2),t.Q6J("formGroup",i.itemForm),t.xp6(3),t.Oqu(t.lcZ(8,24,"ITEM.FACTORY.SHORTNAME")),t.xp6(2),t.Q6J("readonly",i.data.action===i.EditorActions.Delete),t.xp6(1),t.Q6J("ngIf",null==i.itemForm.get("shortName").errors?null:i.itemForm.get("shortName").errors.required),t.xp6(1),t.Q6J("ngIf",null==i.itemForm.get("shortName").errors?null:i.itemForm.get("shortName").errors.minlength),t.xp6(3),t.Oqu(t.lcZ(15,26,"ITEM.FACTORY.NAME")),t.xp6(2),t.Q6J("readonly",i.data.action===i.EditorActions.Delete),t.xp6(1),t.Q6J("ngIf",i.itemForm.get("name").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.itemForm.get("name").hasError("minlength")),t.xp6(3),t.Oqu(t.lcZ(22,28,"ITEM.FACTORY.ADDRESS")),t.xp6(2),t.Q6J("readonly",i.data.action===i.EditorActions.Delete),t.xp6(4),t.Q6J("ngForOf",i.formEmails.controls),t.xp6(1),t.Q6J("readonly",i.data.action===i.EditorActions.Delete)("matChipInputFor",n)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0),t.xp6(3),t.Oqu(t.lcZ(32,30,"COMMON.CANCEL")),t.xp6(2),t.Q6J("ngIf",i.data.action===i.EditorActions.Create),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update&&i.item.isActive),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update&&!i.item.isActive),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Delete)}},dependencies:[_.sg,_.O5,A.lW,g.RA,g.oH,g.qH,g.z3,p.uh,p.xY,p.H8,E.Hw,R.Nt,f.KE,f.hX,f.TO,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,c.CE,C.X$],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-dialog-actions[_ngcontent-%COMP%]{justify-content:end}"]})}var D=l(6709),it=l(4633);class T{transform(o,e){return e?o.filter(i=>!0===i.isActive):o}static#t=this.\u0275fac=function(e){return new(e||T)};static#e=this.\u0275pipe=t.Yjl({name:"hideNoActives",type:T,pure:!0})}function rt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"mat-icon",6),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.deleteItem(n,a._id))}),t._uU(1,"delete"),t.qZA()}}function nt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.updateItem(a._id))}),t.TgZ(1,"div",4)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.YNc(10,rt,2,0,"mat-icon",5),t.qZA()}if(2&r){const e=o.$implicit;t.xp6(3),t.Oqu(e.shortName),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Oqu(e.emails?e.emails.join(", "):""),t.xp6(1),t.Q6J("ngIf",e.isActive)}}class v{constructor(o,e,i){this.logger=o,this.configurationService=e,this.dialog=i,this.loadFactoryWithNoActive=!1,this.items=[]}ngOnInit(){this.reloadFactories()}reloadFactories(){this.configurationService.getFactories(!0).pipe((0,d.b)(o=>this.items=o),(0,m.P)()).subscribe()}loadFactoryWithNoActiveChange(o){this.loadFactoryWithNoActive=o}displayEditor(o,e){return this.dialog.open(F,{width:"90%",data:{item:o,action:e}}).afterClosed().pipe((0,m.P)(),(0,d.b)(i=>this.logger.debug(`The dialog was closed with result ${i}, action ${e}`)),(0,d.b)(i=>{!0===i&&this.reloadFactories()}))}addItem(){this.displayEditor((0,Q.t)(),u.Create).subscribe({next:o=>{},error:o=>{}})}updateItem(o){this.configurationService.getFactory(o).pipe((0,m.P)(),(0,I.z)(i=>this.displayEditor(i,u.Update))).subscribe({next:i=>{},error:i=>{}})}deleteItem(o,e){o.stopPropagation(),console.log("delete factory"),this.configurationService.getFactory(e).pipe((0,m.P)(),(0,I.z)(n=>this.displayEditor(n,u.Delete))).subscribe({next:n=>{},error:n=>{}})}static#t=this.\u0275fac=function(e){return new(e||v)(t.Y36(h.Yd),t.Y36(h.eB),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-factories"]],decls:11,vars:8,consts:[[3,"checked","change"],["class","an-list-item",3,"click",4,"ngFor","ngForOf"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"click"],[1,"an-list-item",3,"click"],[1,"an-list-item-des"],["class","an-list-item-actions",3,"click",4,"ngIf"],[1,"an-list-item-actions",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"div")(2,"mat-checkbox",0),t.NdJ("change",function(a){return i.loadFactoryWithNoActiveChange(a.checked)}),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"mat-list"),t.YNc(6,nt,11,5,"div",1),t.ALo(7,"hideNoActives"),t.qZA(),t.TgZ(8,"button",2),t.NdJ("click",function(){return i.addItem()}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("checked",i.loadFactoryWithNoActive),t.xp6(1),t.hij(" ",t.lcZ(4,3,"CONFIG.FACTORIES.LOAD_NOACTIVE")," "),t.xp6(3),t.Q6J("ngForOf",t.xi3(7,5,i.items,!i.loadFactoryWithNoActive)))},dependencies:[_.sg,_.O5,A.cs,D.oG,E.Hw,it.i$,C.X$,T],styles:[".an-list-item-actions[_ngcontent-%COMP%]{color:red}"]})}var Y=l(4004),at=l(2209);function ct(r,o){1&r&&(t.TgZ(0,"h1",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.CHECKLIST.EDITOR.CREATE")))}function lt(r,o){1&r&&(t.TgZ(0,"h1",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.CHECKLIST.EDITOR.UPDATE")))}function st(r,o){1&r&&(t.TgZ(0,"h1",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.CHECKLIST.EDITOR.DELETE")))}function mt(r,o){1&r&&(t.TgZ(0,"mat-error",9),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"FIELD_ERRORS.REQUIRED")," "))}const dt=function(r){return{requiredLength:r}};function pt(r,o){if(1&r&&(t.TgZ(0,"mat-error",9),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,"FIELD_ERRORS.REQUIRED_MINLENGTH",t.VKq(4,dt,e.itemForm.get("content").errors.minlength.requiredLength))," ")}}function ut(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrUpdateItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.itemForm.valid),t.xp6(1),t.Oqu(t.lcZ(2,2,"COMMON.CREATE"))}}function _t(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrUpdateItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.itemForm.valid),t.xp6(1),t.Oqu(t.lcZ(2,2,"COMMON.UPDATE"))}}function ft(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return n.item.isActive=!0,t.KtG(n.addOrUpdateItem(n.item))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"COMMON.ACTIVATE")))}function gt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteItem(n.getFromFormGroup()))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"COMMON.DELETE")))}class x{constructor(o,e,i,n){this.formBuiler=o,this.configurationService=e,this.dialogRef=i,this.data=n,this.EditorActions=u,this.item=n.item,this.itemForm=this.formBuiler.group({_id:[this.item._id],_rev:[this.item._rev],isActive:[this.item.isActive],content:[this.item.content,[c.kI.required,c.kI.minLength(2)]],order:[this.item.order]}),this.itemForm.markAllAsTouched()}onNoClick(){this.dialogRef.close(!1)}getFromFormGroup(){return this.itemForm.getRawValue()}addOrUpdateItem(o){this.configurationService.addOrUpdateCheckListItem(o).pipe((0,m.P)(),(0,d.b)(e=>this.dialogRef.close(!0))).subscribe()}deleteItem(o){o.isActive=!1,this.configurationService.addOrUpdateCheckListItem(o).pipe((0,m.P)(),(0,d.b)(e=>this.dialogRef.close(!0))).subscribe()}static#t=this.\u0275fac=function(e){return new(e||x)(t.Y36(c.qu),t.Y36(h.eB),t.Y36(p.so),t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-checkitem-editor"]],decls:20,vars:17,consts:[["mat-dialog-title","",4,"ngIf"],[1,"an-flex","an-flex-direction-column",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","content",3,"readonly"],["class","text-danger",4,"ngIf"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],["mat-button","","cdkFocusInitial","",3,"click",4,"ngIf"],["mat-dialog-title",""],[1,"text-danger"],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,ct,3,3,"h1",0),t.YNc(1,lt,3,3,"h1",0),t.YNc(2,st,3,3,"h1",0),t.TgZ(3,"mat-dialog-content")(4,"form",1)(5,"mat-form-field",2)(6,"mat-label"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"input",3),t.YNc(10,mt,3,3,"mat-error",4),t.YNc(11,pt,3,6,"mat-error",4),t.qZA()()(),t.TgZ(12,"mat-dialog-actions")(13,"button",5),t.NdJ("click",function(){return i.onNoClick()}),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.YNc(16,ut,3,4,"button",6),t.YNc(17,_t,3,4,"button",6),t.YNc(18,ft,3,3,"button",7),t.YNc(19,gt,3,3,"button",7),t.qZA()),2&e&&(t.Q6J("ngIf",i.data.action===i.EditorActions.Create),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Delete),t.xp6(2),t.Q6J("formGroup",i.itemForm),t.xp6(3),t.Oqu(t.lcZ(8,13,"ITEM.CHECKLIST.CONTENT")),t.xp6(2),t.Q6J("readonly",i.data.action===i.EditorActions.Delete),t.xp6(1),t.Q6J("ngIf",null==i.itemForm.get("content").errors?null:i.itemForm.get("content").errors.required),t.xp6(1),t.Q6J("ngIf",null==i.itemForm.get("content").errors?null:i.itemForm.get("content").errors.minlength),t.xp6(3),t.Oqu(t.lcZ(15,15,"COMMON.CANCEL")),t.xp6(2),t.Q6J("ngIf",i.data.action===i.EditorActions.Create),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update&&i.item.isActive),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Update&&!i.item.isActive),t.xp6(1),t.Q6J("ngIf",i.data.action===i.EditorActions.Delete))},dependencies:[_.O5,A.lW,p.uh,p.xY,p.H8,R.Nt,f.KE,f.hX,f.TO,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,C.X$],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-dialog-actions[_ngcontent-%COMP%]{justify-content:end}"]})}var N=l(1206);function ht(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"mat-icon",7),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.deleteItem(n,a._id))}),t._uU(1,"delete"),t.qZA()}}function Ct(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.updateItem(a._id))}),t.TgZ(1,"mat-icon",5),t._uU(2," drag_indicator "),t.qZA(),t.TgZ(3,"div")(4,"span"),t._uU(5),t.qZA()(),t.YNc(6,ht,2,0,"mat-icon",6),t.qZA()}if(2&r){const e=o.$implicit;t.Q6J("cdkDragData",e),t.xp6(5),t.Oqu(e.content),t.xp6(1),t.Q6J("ngIf",e.isActive)}}class O{constructor(o,e,i){this.logger=o,this.configurationService=e,this.dialog=i,this.loadFactoryWithNoActive=!1,this.items=[]}ngOnInit(){this.reloadItems()}reloadItems(){this.configurationService.getChecklistItems(!0).pipe((0,Y.U)(o=>o.sort((e,i)=>e.order-i.order)),(0,d.b)(o=>o.forEach((e,i)=>e.order=i)),(0,d.b)(o=>this.items=o),(0,m.P)()).subscribe()}loadChecklistWithNoActiveChange(o){this.loadFactoryWithNoActive=o}dropped(o){(0,N.bA)(this.items,o.previousIndex,o.currentIndex),this.items.forEach((e,i)=>{e.order=i}),this.configurationService.updateAllChecklistItems(this.items).subscribe({next:e=>{this.reloadItems()},error:e=>console.error(e)})}displayEditor(o,e){return this.dialog.open(x,{width:"90%",data:{item:o,action:e}}).afterClosed().pipe((0,m.P)(),(0,d.b)(i=>this.logger.debug(`The dialog was closed with result ${i}, action ${e}`)),(0,d.b)(i=>{!0===i&&this.reloadItems()}))}addItem(){let o=(0,at.Y)();o.order=this.items.length,this.displayEditor(o,u.Create).subscribe({next:e=>{},error:e=>{}})}updateItem(o){this.configurationService.getChecklistItem(o).pipe((0,m.P)(),(0,I.z)(i=>this.displayEditor(i,u.Update))).subscribe({next:i=>{},error:i=>{}})}deleteItem(o,e){o.stopPropagation(),console.log("delete factory"),this.configurationService.getChecklistItem(e).pipe((0,m.P)(),(0,I.z)(n=>this.displayEditor(n,u.Delete))).subscribe({next:n=>{},error:n=>{}})}static#t=this.\u0275fac=function(e){return new(e||O)(t.Y36(h.Yd),t.Y36(h.eB),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:O,selectors:[["app-checklist"]],decls:11,vars:8,consts:[[3,"checked","change"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","","class","an-list-item",3,"cdkDragData","click",4,"ngFor","ngForOf"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"click"],["cdkDrag","",1,"an-list-item",3,"cdkDragData","click"],["cdkDragHandle",""],["class","an-list-item-actions",3,"click",4,"ngIf"],[1,"an-list-item-actions",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"div")(2,"mat-checkbox",0),t.NdJ("change",function(a){return i.loadChecklistWithNoActiveChange(a.checked)}),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"div",1),t.NdJ("cdkDropListDropped",function(a){return i.dropped(a)}),t.YNc(6,Ct,7,3,"div",2),t.ALo(7,"hideNoActives"),t.qZA(),t.TgZ(8,"button",3),t.NdJ("click",function(){return i.addItem()}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("checked",i.loadFactoryWithNoActive),t.xp6(1),t.hij(" ",t.lcZ(4,3,"CONFIG.CHECKLIST.LOAD_NOACTIVE")," "),t.xp6(3),t.Q6J("ngForOf",t.xi3(7,5,i.items,!i.loadFactoryWithNoActive)))},dependencies:[_.sg,_.O5,N.Wj,N.Zt,N.Bh,A.cs,D.oG,E.Hw,C.X$,T],styles:[".an-list-item-actions[_ngcontent-%COMP%]{color:red}"]})}var Et=l(7973),b=l(3546);function At(r,o){1&r&&(t.TgZ(0,"mat-error",17),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"FIELD_ERRORS.REQUIRED")," "))}const Tt=function(r){return{requiredLength:r}};function It(r,o){if(1&r&&(t.TgZ(0,"mat-error",17),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,"FIELD_ERRORS.REQUIRED_MINLENGTH",t.VKq(4,Tt,e.itemForm.get("emailServerSecretCode").errors.minlength.requiredLength))," ")}}function Zt(r,o){1&r&&(t.TgZ(0,"mat-error",17),t._uU(1," This field is required. "),t.qZA())}function Ft(r,o){if(1&r&&(t.TgZ(0,"mat-error",17),t._uU(1),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij(" The minimum length for this field is ",e.itemForm.get("emailServerUrl").errors.minlength.requiredLength," characters. ")}}function vt(r,o){1&r&&(t.TgZ(0,"mat-error",17),t._uU(1," This field is required. "),t.qZA())}function xt(r,o){if(1&r&&(t.TgZ(0,"mat-error",17),t._uU(1),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij(" The minimum length for this field is ",e.itemForm.get("fromUser").errors.minlength.requiredLength," characters. ")}}function Nt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"mat-chip-row",18),t.NdJ("removed",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.removeEmail(a.value))}),t._uU(1),t.TgZ(2,"mat-icon",19),t._uU(3,"cancel"),t.qZA()()}if(2&r){const e=o.$implicit;t.Q6J("color",e?"warn":"")("removable",!0),t.xp6(1),t.hij(" ",e.value," ")}}function Ot(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"form",7)(1,"mat-form-field",8)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",9),t.YNc(6,At,3,3,"mat-error",10),t.YNc(7,It,3,6,"mat-error",10),t.qZA(),t.TgZ(8,"mat-form-field",8)(9,"mat-label"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"input",11),t.YNc(13,Zt,2,0,"mat-error",10),t.YNc(14,Ft,2,1,"mat-error",10),t.qZA(),t.TgZ(15,"mat-form-field",8)(16,"mat-label"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"input",12),t.YNc(20,vt,2,0,"mat-error",10),t.YNc(21,xt,2,1,"mat-error",10),t.qZA(),t.TgZ(22,"mat-form-field",8)(23,"mat-chip-grid",13,14),t.YNc(25,Nt,4,3,"mat-chip-row",15),t.qZA(),t.TgZ(26,"input",16),t.NdJ("matChipInputTokenEnd",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.addEmail(n))}),t.qZA()()()}if(2&r){const e=t.MAs(24),i=t.oxw();t.Q6J("formGroup",i.itemForm),t.xp6(3),t.Oqu(t.lcZ(4,14,"ITEM.DELIVERY.EMAIL_SERVER_SECRET_CODE")),t.xp6(3),t.Q6J("ngIf",null==i.itemForm.get("emailServerSecretCode").errors?null:i.itemForm.get("emailServerSecretCode").errors.required),t.xp6(1),t.Q6J("ngIf",null==i.itemForm.get("emailServerSecretCode").errors?null:i.itemForm.get("emailServerSecretCode").errors.minlength),t.xp6(3),t.Oqu(t.lcZ(11,16,"ITEM.DELIVERY.EMAIL_SERVER_URL")),t.xp6(3),t.Q6J("ngIf",i.itemForm.get("emailServerUrl").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.itemForm.get("emailServerUrl").hasError("minlength")),t.xp6(3),t.Oqu(t.lcZ(18,18,"ITEM.DELIVERY.FROM_USER")),t.xp6(3),t.Q6J("ngIf",i.itemForm.get("fromUser").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.itemForm.get("fromUser").hasError("minlength")),t.xp6(4),t.Q6J("ngForOf",i.formEmails.controls),t.xp6(1),t.Q6J("matChipInputFor",e)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0)}}class q{constructor(o,e){this.formBuiler=o,this.configurationService=e,this.loading=!1,this.loadConfig=i=>{if(i.target.files&&i.target.files.length>0){var n=i.target.files[0],a=new FileReader;a.onloadend=s=>{var M=JSON.parse(a.result);M?this.configurationService.setConfig(M).pipe((0,Y.U)(L=>{window.location.reload()})).subscribe({next:L=>console.log(L),error:L=>console.error(L)}):console.error("Config - No parse correctly.")},a.readAsText(n)}},this.separatorKeysCodes=[Z.K5,Z.OC],this.removable=!0}ngOnInit(){this.loading=!0,this.configurationService.getDelivery().pipe((0,m.P)()).subscribe({next:o=>{this.delivery=o,this.createForm(this.delivery),this.loading=!1},error:o=>{console.error(o),this.delivery=(0,Et.M)(),this.createForm(this.delivery),this.loading=!1}})}createForm(o){console.log("creatForm fun"),this.itemForm=this.formBuiler.group({_id:[o._id],_rev:[o._rev],emailServerSecretCode:[o.emailServerSecretCode],emailServerUrl:[o.emailServerUrl],fromUser:[o.fromUser],deliveryEmails:this.formBuiler.array(o.deliveryEmails.map(e=>[e]))})}getFromFormGroup(){return this.itemForm.getRawValue()}saveDelivery(){let o=this.getFromFormGroup();this.configurationService.updateDelivery(o).pipe((0,m.P)()).subscribe({next:e=>console.log(e),error:e=>console.error(e)})}download(o,e,i){var n=document.createElement("a"),a=new Blob([o],{type:i});n.href=URL.createObjectURL(a),n.download=e,n.click()}saveConfig(){this.configurationService.getConfig().pipe((0,m.P)(),(0,d.b)(o=>{this.download(JSON.stringify(o),"miu_config.json","text/plain")})).subscribe({next:o=>{},error:o=>console.log(o)})}get formEmails(){return this.itemForm.get("deliveryEmails")}addEmail(o){console.log(o.value),o.value&&(this.validateEmail(o.value.trim())?(this.formEmails.push(new c.NI(o.value.trim())),o.input&&(o.input.value="")):console.error("wrong email..."))}removeEmail(o){console.log("Removing "+o);let e=this.formEmails.value.indexOf(o);e>=0&&this.formEmails.removeAt(e)}validateEmail(o){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())}static#t=this.\u0275fac=function(e){return new(e||q)(t.Y36(c.qu),t.Y36(h.eB))};static#e=this.\u0275cmp=t.Xpm({type:q,selectors:[["app-general"]],decls:23,vars:16,consts:[["class","an-flex an-flex-direction-column",3,"formGroup",4,"ngIf"],[2,"margin-left","auto"],["mat-raised-button","","color","primary",3,"click"],[2,"margin-top","15px"],["mat-raised-button","","color","primary",2,"margin-right","5px",3,"click"],["type","file","accept",".json,application/json",2,"display","none",3,"change"],["fileInput",""],[1,"an-flex","an-flex-direction-column",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","emailServerSecretCode"],["class","text-danger",4,"ngIf"],["matInput","","formControlName","emailServerUrl"],["matInput","","formControlName","fromUser"],["formArrayName","deliveryEmails"],["chipList",""],["selected","","required","","name","chips",3,"color","removable","removed",4,"ngFor","ngForOf"],["placeholder","enter item",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[1,"text-danger"],["selected","","required","","name","chips",3,"color","removable","removed"],["matChipRemove",""]],template:function(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card")(1,"mat-card-header"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-card-content"),t.YNc(5,Ot,27,20,"form",0),t.qZA(),t.TgZ(6,"mat-card-actions",1)(7,"button",2),t.NdJ("click",function(){return i.saveDelivery()}),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"mat-card",3)(11,"mat-card-header"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"mat-card-actions",1)(15,"button",4),t.NdJ("click",function(){return i.saveConfig()}),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"button",2),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(22);return t.KtG(s.click())}),t._uU(19),t.ALo(20,"translate"),t.TgZ(21,"input",5,6),t.NdJ("change",function(s){return i.loadConfig(s)}),t.qZA()()()()}2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,6,"CONFIG.GENERAL.DELIVERY.TITLE")),t.xp6(3),t.Q6J("ngIf",!i.loading),t.xp6(3),t.Oqu(t.lcZ(9,8,"COMMON.SAVE")),t.xp6(4),t.Oqu(t.lcZ(13,10,"CONFIG.GENERAL.PERSIST.TITLE")),t.xp6(4),t.Oqu(t.lcZ(17,12,"CONFIG.GENERAL.PERSIST.SAVE_CONFIG")),t.xp6(3),t.hij("",t.lcZ(20,14,"CONFIG.GENERAL.PERSIST.LOAD_CONFIG")," "))},dependencies:[_.sg,_.O5,A.lW,b.a8,b.hq,b.dn,b.dk,g.RA,g.oH,g.qH,g.z3,E.Hw,R.Nt,f.KE,f.hX,f.TO,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,c.CE,C.X$]})}function bt(r,o){1&r&&(t.TgZ(0,"div",1)(1,"mat-icon",2),t._uU(2,"factory"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&r&&(t.xp6(4),t.Oqu(t.lcZ(5,1,"CONFIG.FACTORIES.TITLE")))}function qt(r,o){1&r&&(t.TgZ(0,"div",1)(1,"mat-icon",2),t._uU(2,"format_list_bulleted"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&r&&(t.xp6(4),t.Oqu(t.lcZ(5,1,"CONFIG.CHECKLIST.TITLE")))}function kt(r,o){1&r&&(t.TgZ(0,"div",1)(1,"mat-icon",2),t._uU(2,"tune"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&r&&(t.xp6(4),t.Oqu(t.lcZ(5,1,"CONFIG.GENERAL.TITLE")))}class k{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||k)};static#e=this.\u0275cmp=t.Xpm({type:k,selectors:[["app-configuration"]],decls:13,vars:3,consts:[["mat-tab-label",""],[1,"tab-header"],[1,"example-tab-icon"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"mat-tab-group")(4,"mat-tab"),t.YNc(5,bt,6,3,"ng-template",0),t._UZ(6,"app-factories"),t.qZA(),t.TgZ(7,"mat-tab"),t.YNc(8,qt,6,3,"ng-template",0),t._UZ(9,"app-checklist"),t.qZA(),t.TgZ(10,"mat-tab"),t.YNc(11,kt,6,3,"ng-template",0),t._UZ(12,"app-general"),t.qZA()()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONFIG.TITLE")))},dependencies:[E.Hw,J.uD,J.uX,J.SP,v,O,q,C.X$],styles:[".tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.tab-header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:small}"]})}const Ut=[{path:"",component:k}];class U{static#t=this.\u0275fac=function(e){return new(e||U)};static#e=this.\u0275mod=t.oAB({type:U});static#o=this.\u0275inj=t.cJS({imports:[G.Bz.forChild(Ut),G.Bz]})}var yt=l(1608);class y{static#t=this.\u0275fac=function(e){return new(e||y)};static#e=this.\u0275mod=t.oAB({type:y});static#o=this.\u0275inj=t.cJS({imports:[_.ez,U,yt.m]})}}}]);