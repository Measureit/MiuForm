"use strict";(self.webpackChunkmiuform=self.webpackChunkmiuform||[]).push([[546],{1546:(O,s,r)=>{r.r(s),r.d(s,{ReportsModule:()=>T});var a=r(6895),c=r(9132),t=r(4650);let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-prepare-report"]],decls:2,vars:0,template:function(o,p){1&o&&(t.TgZ(0,"p"),t._uU(1,"prepare-report works!"),t.qZA())}}),e})(),i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-preview-report"]],decls:2,vars:0,template:function(o,p){1&o&&(t.TgZ(0,"p"),t._uU(1,"preview-report works!"),t.qZA())}}),e})();var m=r(8505),u=r(590),f=r(737),d=r(6709),v=r(4385),R=r(3238),h=r(1576),g=r(4463);function C(e,n){if(1&e&&(t.TgZ(0,"mat-option",5),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o._id),t.xp6(1),t.Oqu(o.name)}}const y=[{path:"",component:(()=>{class e{constructor(o){this.reportService=o,this.loadFactoryWithNoActive=!1,this.factoryList=[]}ngOnInit(){this.reloadFactories(this.loadFactoryWithNoActive)}reloadFactories(o){this.reportService.getFactories(o).pipe((0,m.b)(p=>this.factoryList=p),(0,u.P)()).subscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.rM))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reports"]],decls:8,vars:8,consts:[["fxLayout","column"],["fxLayout","row"],["multiple","",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"checked","change"],[3,"value"]],template:function(o,p){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-select",2),t.ALo(3,"translate"),t.YNc(4,C,2,2,"mat-option",3),t.qZA(),t.TgZ(5,"mat-checkbox",4),t.NdJ("change",function(x){return p.reloadFactories(x.checked)}),t._uU(6),t.ALo(7,"translate"),t.qZA()()()),2&o&&(t.xp6(2),t.s9C("placeholder",t.lcZ(3,4,"REPORTS.FILTER_BY_FACTORIES")),t.xp6(2),t.Q6J("ngForOf",p.factoryList),t.xp6(1),t.Q6J("checked",p.loadFactoryWithNoActive),t.xp6(1),t.hij(" ",t.lcZ(7,6,"REPORTS.LOAD_NOACTIVE_FACTORIES")," "))},dependencies:[a.sg,d.oG,v.gD,R.ey,h.xw,g.X$]}),e})()},{path:"prepare",component:l},{path:"preview",component:i}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]}),e})();var A=r(2796);let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,F,A.m]}),e})()}}]);