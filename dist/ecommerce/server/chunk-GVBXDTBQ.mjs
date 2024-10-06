import './polyfills.server.mjs';
import{c as A,f as j,g as x,h as E}from"./chunk-KSJCNAUE.mjs";import"./chunk-Z66F2HNP.mjs";import{j as w}from"./chunk-DYMMFVCW.mjs";import"./chunk-GTSSCL6B.mjs";import{c as L,d as O}from"./chunk-HUBBNFLM.mjs";import{a as l}from"./chunk-WVUI6REW.mjs";import{B as d,Ba as o,Ca as a,Cb as M,Da as C,E as g,F as f,I as u,Ia as v,Ib as k,Ma as P,Ob as I,Sa as y,Ua as B,_a as S,bb as F,ea as b,eb as m,fb as _,ga as p,gb as T,ra as h,ta as s}from"./chunk-EYDXITQF.mjs";import"./chunk-VVCT4QZE.mjs";var H=(()=>{let e=class e{constructor(t){this._HttpClient=t}getAllBrands(){return this._HttpClient.get(`${l.baseUrl}/api/v1/brands`)}getSpecifceBrand(t){return this._HttpClient.get(`${l.baseUrl}/api/v1/brands/${t}`)}};e.\u0275fac=function(r){return new(r||e)(g(I))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var z=(i,e)=>({itemsPerPage:i,currentPage:e});function D(i,e){if(i&1&&(o(0,"div",4),C(1,"img",5),a()),i&2){let c=e.$implicit;p(),P("alt",c.name),s("src",c.image,b)}}var ge=(()=>{let e=class e{constructor(){this._BrandsService=f(H),this.brandList=[],this.pageSize=20,this.currentPage=1}ngOnInit(){this.getAllBrandsSubscription=this._BrandsService.getAllBrands().subscribe({next:t=>{console.log(t),this.brandList=t.data},error:t=>{console.log(t)}})}ngOnDestroy(){this.getAllBrandsSubscription?.unsubscribe()}trackByFn(t,r){return t}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-brands"]],standalone:!0,features:[S],decls:8,vars:11,consts:[[1,"text-main","border-top","border-bottom","py-2"],[1,"row","g-4","my-2"],["class","col-md-3",4,"ngFor","ngForOf","ngForTrackBy"],[3,"pageChange"],[1,"col-md-3"],[1,"w-100",3,"src","alt"]],template:function(r,n){r&1&&(o(0,"section")(1,"h2",0),y(2),m(3,"translate"),a(),o(4,"div",1),h(5,D,2,2,"div",2),m(6,"paginate"),a()(),o(7,"pagination-controls",3),v("pageChange",function(U){return n.currentPage=U}),a()),r&2&&(p(2),B(" ",_(3,3,"All Brands")," :"),p(3),s("ngForOf",T(6,5,n.brandList,F(8,z,n.pageSize,n.currentPage)))("ngForTrackBy",n.trackByFn))},dependencies:[O,L,k,M,E,j,x,A,w]});let i=e;return i})();export{ge as BrandsComponent};