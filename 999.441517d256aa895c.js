"use strict";(self.webpackChunkmiuform=self.webpackChunkmiuform||[]).push([[999],{8999:(Q,R,r)=>{r.r(R),r.d(R,{ReportsModule:()=>d});var l=r(6895),m=r(9132),a=r(590),s=r(4004),g=r(5577),t=r(4650),v=r(8920),T=r(4859),Z=r(7392),u=r(4633),A=r(4385),F=r(3238),x=r(4463);function O(i,e){if(1&i&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&i){const o=e.$implicit;t.Q6J("value",o._id),t.xp6(1),t.Oqu(o.name)}}function C(i,e){if(1&i&&(t.TgZ(0,"mat-list-item")(1,"p",8)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA()()()),2&i){const o=e.$implicit;t.xp6(3),t.hij(" ",o.content," "),t.xp6(2),t.hij(" ",o.isChecked," ")}}function P(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div")(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"mat-select",3),t.ALo(6,"translate"),t.YNc(7,O,2,2,"mat-option",4),t.qZA()(),t.TgZ(8,"mat-list"),t.YNc(9,C,6,2,"mat-list-item",5),t.qZA(),t.TgZ(10,"button",6),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.generateReport())}),t.TgZ(11,"mat-icon"),t._uU(12,"rebase_edit"),t.qZA()()()()}if(2&i){const o=t.oxw();t.xp6(2),t.Oqu(o.report._id),t.xp6(3),t.s9C("placeholder",t.lcZ(6,4,"REPORTS.FILTER_BY_FACTORIES")),t.xp6(2),t.Q6J("ngForOf",o.factoryItems),t.xp6(2),t.Q6J("ngForOf",o.report.checklist)}}function I(i,e){1&i&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Raport nie istnieje."),t.qZA()())}class c{constructor(e,o,n){this.logger=e,this.activatedRoute=o,this.reportService=n,this.report=void 0,this.factoryItems=[]}ngOnInit(){this.activatedRoute.params.pipe((0,a.P)(),(0,s.U)(e=>e.id),(0,g.z)(e=>(this.logger.debug(`prepare report for id: ${e}`),void 0!==e&&""!==e?this.reportService.getReport(e):this.reportService.createNewReport())),(0,a.P)(),(0,g.z)(e=>(this.report=e,this.reportService.getFactories(!1))),(0,a.P)(),(0,s.U)(e=>this.factoryItems=e)).subscribe()}generateReport(){this.reportService.generateAndSaveReport(this.report).pipe((0,a.P)(),(0,s.U)(e=>e)).subscribe()}static#t=this.\u0275fac=function(o){return new(o||c)(t.Y36(v.Yd),t.Y36(m.gz),t.Y36(v.rM))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-prepare-report"]],decls:5,vars:5,consts:[[4,"ngIf"],["fxLayout","column"],["fxLayout","row"],["multiple","",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"click"],[3,"value"],["matLine",""]],template:function(o,n){1&o&&(t.TgZ(0,"h1"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.YNc(3,P,13,6,"div",0),t.YNc(4,I,3,0,"div",0)),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,3,"PREPARE_REPORT.TITLE")),t.xp6(2),t.Q6J("ngIf",n.report),t.xp6(1),t.Q6J("ngIf",!n.report))},dependencies:[l.sg,l.O5,T.cs,Z.Hw,u.i$,u.Tg,A.gD,F.ey,x.X$]})}var y=r(8505),S=r(6709);function U(i,e){if(1&i&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&i){const o=e.$implicit;t.Q6J("value",o._id),t.xp6(1),t.Oqu(o.name)}}function E(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"mat-list-item")(1,"div",7),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.aaa())}),t._uU(2,"aaaaa"),t.qZA()()}}const J=function(){return["prepare"]};class h{constructor(e){this.reportService=e,this.loadFactoryWithNoActive=!1,this.factoryItems=[],this.items=[]}ngOnInit(){this.reloadFactories(this.loadFactoryWithNoActive).pipe((0,g.z)(e=>this.reloadReports()),(0,a.P)()).subscribe()}reloadReports(){return this.reportService.getReports(!0).pipe((0,y.b)(e=>this.items=e),(0,s.U)(e=>!0))}reloadFactories(e){return this.reportService.getFactories(e).pipe((0,y.b)(o=>this.factoryItems=o),(0,s.U)(o=>!0))}preview(e,o){console.log(`preview ${o}`)}prepare(e,o){console.log(`prepare ${o}`)}aaa(){console.log("aaa")}static#t=this.\u0275fac=function(o){return new(o||h)(t.Y36(v.rM))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-reports"]],decls:18,vars:14,consts:[["multiple","",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"checked","change"],[4,"ngFor","ngForOf"],["mat-button","","typ","button",3,"click"],["mat-fab","","color","primary",1,"mat-fab-bottom-right",3,"routerLink"],[3,"value"],[3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div")(5,"mat-select",0),t.ALo(6,"translate"),t.YNc(7,U,2,2,"mat-option",1),t.qZA(),t.TgZ(8,"mat-checkbox",2),t.NdJ("change",function(Y){return n.reloadFactories(Y.checked)}),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"mat-list"),t.YNc(12,E,3,0,"mat-list-item",3),t.qZA(),t.TgZ(13,"button",4),t.NdJ("click",function(){return n.aaa()}),t._uU(14,"RRR"),t.qZA(),t.TgZ(15,"button",5)(16,"mat-icon"),t._uU(17,"add"),t.qZA()()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,7,"REPORTS.TITLE")),t.xp6(3),t.s9C("placeholder",t.lcZ(6,9,"REPORTS.FILTER_BY_FACTORIES")),t.xp6(2),t.Q6J("ngForOf",n.factoryItems),t.xp6(1),t.Q6J("checked",n.loadFactoryWithNoActive),t.xp6(1),t.hij(" ",t.lcZ(10,11,"REPORTS.LOAD_NOACTIVE_FACTORIES")," "),t.xp6(3),t.Q6J("ngForOf",n.items),t.xp6(3),t.Q6J("routerLink",t.DdM(13,J)))},dependencies:[l.sg,m.rH,T.lW,T.cs,S.oG,Z.Hw,u.i$,u.Tg,A.gD,F.ey,x.X$]})}const L=[{path:"",component:h},{path:"prepare/:id",component:c},{path:"prepare",pathMatch:"full",component:c},{path:"preview",loadChildren:()=>Promise.all([r.e(592),r.e(39)]).then(r.bind(r,39)).then(i=>i.PreviewReportModule)}];class f{static#t=this.\u0275fac=function(o){return new(o||f)};static#e=this.\u0275mod=t.oAB({type:f});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(L),m.Bz]})}var N=r(1913);class d{static#t=this.\u0275fac=function(o){return new(o||d)};static#e=this.\u0275mod=t.oAB({type:d});static#o=this.\u0275inj=t.cJS({imports:[l.ez,f,N.m]})}}}]);