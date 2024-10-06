import './polyfills.server.mjs';
import{a as w,b as _,c as R,d as D,f as B,g as $,h as j,i as G,k as H}from"./chunk-DYMMFVCW.mjs";import{a as O}from"./chunk-WVUI6REW.mjs";import{B as T,Ba as o,Bb as A,Ca as r,Da as y,E as I,F as E,I as F,Ia as M,Ja as S,Ob as N,Sa as a,Ta as L,_a as q,_b as k,bb as b,ga as s,ra as p,ta as v,xa as c}from"./chunk-EYDXITQF.mjs";import"./chunk-VVCT4QZE.mjs";var P=(()=>{let n=class n{constructor(i){this._HttpClient=i,this.myHeaders={token:localStorage.getItem("userToken")}}checkOut(i,g){return this._HttpClient.post(`${O.baseUrl}/api/v1/orders/checkout-session/${i}?url=${O.urlServer}`,{shippingAddress:g})}};n.\u0275fac=function(g){return new(g||n)(I(N))},n.\u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var x=(e,n)=>({"is-valid":e,"is-invalid":n});function z(e,n){e&1&&(o(0,"p",14),a(1,"Details Is Required"),r())}function U(e,n){e&1&&(o(0,"p",14),a(1,"Must Be More Than 10 Litters"),r())}function Z(e,n){e&1&&(o(0,"p",14),a(1,"Must Be More Than 10 Litters"),r())}function J(e,n){if(e&1&&(o(0,"div",6),p(1,z,2,0,"p",14)(2,U,2,0)(3,Z,2,0),r()),e&2){let l,i=S();s(),c(1,(l=i.orders.get("details"))!=null&&l.getError("required")?1:(l=i.orders.get("details"))!=null&&l.getError("minLength")?2:(l=i.orders.get("details"))!=null&&l.getError("minLength")?3:-1)}}function K(e,n){e&1&&(o(0,"p",14),a(1,"Phone Is Required"),r())}function Q(e,n){e&1&&(o(0,"p",14),a(1,"Invalid Phone"),r())}function W(e,n){if(e&1&&(o(0,"div",6),p(1,K,2,0,"p",14)(2,Q,2,0),r()),e&2){let l,i=S();s(),c(1,(l=i.orders.get("phone"))!=null&&l.getError("required")?1:(l=i.orders.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function X(e,n){e&1&&(o(0,"p",14),a(1,"City Is Required"),r())}function Y(e,n){e&1&&(o(0,"p",14),a(1,"Invalid City"),r())}function ee(e,n){if(e&1&&(o(0,"div",6),p(1,X,2,0,"p",14)(2,Y,2,0),r()),e&2){let l,i=S();s(),c(1,(l=i.orders.get("city"))!=null&&l.getError("required")?1:(l=i.orders.get("city"))!=null&&l.getError("pattern")?2:-1)}}function te(e,n){e&1&&y(0,"span",12)}function ne(e,n){if(e&1&&(o(0,"p",13),a(1),r()),e&2){let l=S();s(),L(l.errMassage)}}var ce=(()=>{let n=class n{constructor(){this._FormBuilder=E(G),this._ActivatedRoute=E(k),this._OrdersService=E(P),this.orders=this._FormBuilder.group({details:[null,[_.required,_.minLength(10),_.maxLength(100)]],phone:[null,[_.required,_.pattern(/^01[0125][0-9]{8}$/)]],city:[null,[_.required,_.pattern(/^[a-zA-Z\u0080-\u024F\s'-]{2,100}$/)]]}),this.cartId="",this.errMassage="",this.isLoading=!1}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:i=>{this.cartId=i.get("id")}})}orderSubmit(){this.orders.valid?(console.log(this.orders.value),this.isLoading=!0,this._OrdersService.checkOut(this.cartId,this.orders.value).subscribe({next:i=>{console.log(i),i.status==="success"&&window.open(i.session.url,"_self"),this.isLoading=!1},error:i=>{this.errMassage=i.error.message,console.log(i),this.isLoading=!1}})):(this.orders.setErrors({mismatch:!0}),this.orders.markAllAsTouched())}};n.\u0275fac=function(g){return new(g||n)},n.\u0275cmp=F({type:n,selectors:[["app-orders"]],standalone:!0,features:[q],decls:23,vars:18,consts:[[1,"bg-main-light","rounded-4","shadow","my-4","w-75","mx-auto","px-3","py-2"],[1,"text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["formControlName","details","id","details",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50"],["for","phone"],["formControlName","phone","id","phone","type","tel",1,"form-control",3,"ngClass"],["for","city"],["formControlName","city","id","city","type","text",1,"form-control",3,"ngClass"],["type","submit",1,"btn-main","my-2"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","w-50","mt-2","m-0"],[1,"m-0"]],template:function(g,t){if(g&1&&(o(0,"section",0)(1,"h1",1),a(2,"Shipping Address"),r(),o(3,"form",2),M("ngSubmit",function(){return t.orderSubmit()}),o(4,"div",3)(5,"label",4),a(6,"Details :"),r(),y(7,"textarea",5),p(8,J,4,1,"div",6),r(),o(9,"div",3)(10,"label",7),a(11,"Phone :"),r(),y(12,"input",8),p(13,W,3,1,"div",6),r(),o(14,"div",3)(15,"label",9),a(16,"City :"),r(),y(17,"input",10),p(18,ee,3,1,"div",6),r(),o(19,"button",11),a(20,"Check Out "),p(21,te,1,0,"span",12),r(),p(22,ne,2,1,"p",13),r()()),g&2){let d,f,u,h,m,C;s(3),v("formGroup",t.orders),s(4),v("ngClass",b(9,x,!((d=t.orders.get("details"))!=null&&d.errors)&&(((d=t.orders.get("details"))==null?null:d.touched)||((d=t.orders.get("details"))==null?null:d.dirty)),((d=t.orders.get("details"))==null?null:d.errors)&&(((d=t.orders.get("details"))==null?null:d.touched)||((d=t.orders.get("details"))==null?null:d.dirty)))),s(),c(8,((f=t.orders.get("details"))!=null&&f.touched||(f=t.orders.get("details"))!=null&&f.dirty)&&((f=t.orders.get("details"))!=null&&f.errors)?8:-1),s(4),v("ngClass",b(12,x,!((u=t.orders.get("phone"))!=null&&u.errors)&&(((u=t.orders.get("phone"))==null?null:u.touched)||((u=t.orders.get("phone"))==null?null:u.dirty)),((u=t.orders.get("phone"))==null?null:u.errors)&&(((u=t.orders.get("phone"))==null?null:u.touched)||((u=t.orders.get("phone"))==null?null:u.dirty)))),s(),c(13,((h=t.orders.get("phone"))!=null&&h.touched||(h=t.orders.get("phone"))!=null&&h.dirty)&&((h=t.orders.get("phone"))!=null&&h.errors)?13:-1),s(4),v("ngClass",b(15,x,!((m=t.orders.get("city"))!=null&&m.errors)&&(((m=t.orders.get("city"))==null?null:m.touched)||((m=t.orders.get("city"))==null?null:m.dirty)),((m=t.orders.get("city"))==null?null:m.errors)&&(((m=t.orders.get("city"))==null?null:m.touched)||((m=t.orders.get("city"))==null?null:m.dirty)))),s(),c(18,((C=t.orders.get("city"))!=null&&C.touched||(C=t.orders.get("city"))!=null&&C.dirty)&&((C=t.orders.get("city"))!=null&&C.errors)?18:-1),s(3),c(21,t.isLoading?21:-1),s(),c(22,t.errMassage?22:-1)}},dependencies:[H,B,w,R,D,$,j,A]});let e=n;return e})();export{ce as OrdersComponent};