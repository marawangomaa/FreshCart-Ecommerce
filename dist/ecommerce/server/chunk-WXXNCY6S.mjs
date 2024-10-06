import './polyfills.server.mjs';
import{a as V}from"./chunk-JCAXAWWX.mjs";import{a as T,c as H,d as I,f as P,g as w,h as $,i as j,k as U}from"./chunk-DYMMFVCW.mjs";import{a as u}from"./chunk-WVUI6REW.mjs";import{Aa as D,B as _,Ba as i,Ca as n,Da as c,E as v,F as m,Ga as E,I as g,Ia as f,Ja as h,Ob as N,P as b,Q as S,Sa as a,Ta as p,Ua as x,_a as k,ga as s,ra as C,ta as y,xa as A,za as F}from"./chunk-EYDXITQF.mjs";import"./chunk-VVCT4QZE.mjs";var G=(()=>{let t=class t{constructor(e){this._HttpClient=e,this.myHeaders={token:localStorage.getItem("userToken")}}getUserAddress(){return this._HttpClient.get(`${u.baseUrl}/api/v1/addresses`,{headers:this.myHeaders})}addAddress(e){return this._HttpClient.post(`${u.baseUrl}/api/v1/addresses`,e,{headers:this.myHeaders})}removedAddress(e){return this._HttpClient.delete(`${u.baseUrl}/api/v1/addresses/${e}`,{headers:this.myHeaders})}};t.\u0275fac=function(o){return new(o||t)(v(N))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var M=(r,t)=>t._id;function O(r,t){if(r&1){let l=E();i(0,"tr")(1,"td"),a(2),n(),i(3,"td"),a(4),n(),i(5,"td"),a(6),n(),i(7,"td",13),a(8),i(9,"button",14),f("click",function(){let o=b(l).$implicit,d=h(2);return S(d.removeAddress(o._id))}),c(10,"i",15),n()()()}if(r&2){let l=t.$implicit;s(2),p(l.name),s(2),p(l.details),s(2),p(l.phone),s(2),x("",l.city," ")}}function R(r,t){if(r&1&&(i(0,"table",4)(1,"thead")(2,"tr")(3,"th",12),a(4,"Name :"),n(),i(5,"th",12),a(6,"Details :"),n(),i(7,"th",12),a(8,"Phone :"),n(),i(9,"th",12),a(10,"City :"),n()()(),i(11,"tbody"),F(12,O,11,4,"tr",null,M),n()()),r&2){let l=h();s(12),D(l.addressData)}}var ee=(()=>{let t=class t{constructor(){this._AuthService=m(V),this._FormBuilder=m(j),this._ProfileService=m(G),this.addressForm=this._FormBuilder.group({name:[null],details:[null],phone:[null],city:[null]}),this.addressData=[],this.Token={}}ngOnInit(){this._AuthService.saveUserData(),this.Token=this._AuthService.userData,console.log(this.Token),this._ProfileService.getUserAddress().subscribe({next:e=>{console.log(e.data),this.addressData=e.data},error(e){console.log(e)}})}addAddress(){this._ProfileService.addAddress(this.addressForm.value).subscribe({next:e=>{console.log(e.data),this.addressData=e.data},error:e=>{console.log(e)}})}removeAddress(e){this._ProfileService.removedAddress(e).subscribe({next:o=>{console.log(o),this.addressData=o.data},error:o=>{console.log(o)}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g({type:t,selectors:[["app-profile"]],standalone:!0,features:[k],decls:14,vars:3,consts:[[1,"my-3"],[1,"text-center"],[1,"img","text-center"],["src","./assets/images/istockphoto-1300845620-612x612.jpg","width","100px","alt","",1,"mx-auto"],[1,"table","table-bordered"],[1,"bg-main-light","p-2","shadow",3,"ngSubmit","formGroup"],[1,"d-flex","flex-row","my-2"],["formControlName","name","type","text","placeholder","Name",1,"form-control"],["formControlName","details","type","text","placeholder","details",1,"form-control"],["formControlName","phone","type","tel","placeholder","Phone",1,"form-control"],["formControlName","city","type","text","placeholder","City",1,"form-control"],["type","submit",1,"btn-main"],[1,"bg-info-subtle"],[1,"d-flex","justify-content-between"],[1,"text-danger","btn",3,"click"],[1,"fa-solid","fa-trash-can"]],template:function(o,d){o&1&&(i(0,"section",0)(1,"h1",1),a(2),n(),i(3,"div",2),c(4,"img",3),n(),C(5,R,14,0,"table",4),i(6,"form",5),f("ngSubmit",function(){return d.addAddress()}),i(7,"div",6),c(8,"input",7)(9,"input",8)(10,"input",9)(11,"input",10),n(),i(12,"button",11),a(13,"Submit"),n()()()),o&2&&(s(2),x("Hello ",d.Token.name," "),s(3),A(5,d.addressData.length!=0?5:-1),s(),y("formGroup",d.addressForm))},dependencies:[U,P,T,H,I,w,$]});let r=t;return r})();export{ee as ProfileComponent};