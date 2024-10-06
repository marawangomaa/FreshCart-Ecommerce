import './polyfills.server.mjs';
import{a as F}from"./chunk-BOXCCQIZ.mjs";import{a as E,b as k}from"./chunk-WC5GJMLX.mjs";import{j as y}from"./chunk-DYMMFVCW.mjs";import"./chunk-GTSSCL6B.mjs";import"./chunk-WVUI6REW.mjs";import{Aa as C,Ba as s,Ca as n,Da as m,F as d,Ga as b,Hb as D,I as _,Ia as f,Ja as v,P as p,Q as h,Sa as l,Ta as T,Ua as w,_a as W,ea as g,eb as L,ga as c,gb as P,ta as x,va as u,za as S}from"./chunk-EYDXITQF.mjs";import"./chunk-VVCT4QZE.mjs";var O=(o,r)=>r.id;function A(o,r){if(o&1){let a=b();s(0,"div",3)(1,"div",4)(2,"div",5),m(3,"img",6),n(),s(4,"div",7)(5,"h3"),l(6),n(),s(7,"span",8),l(8),L(9,"currency"),n(),s(10,"div",9)(11,"button",10),f("click",function(){let e=p(a).$implicit,i=v();return h(i.removeProductToWishList(e.id))}),m(12,"i",11),l(13," Remove "),n(),s(14,"button",12),f("click",function(){let e=p(a).$implicit,i=v();return h(i.addToCart(e.id))}),m(15,"i",13),l(16," + Add To Cart "),n()()()()()}if(o&2){let a=r.$implicit;c(3),x("src",a.imageCover,g)("alt",a.title),c(3),T(a.title),c(2),w("Price : ",P(9,4,a.price,"GBP"),"")}}var j=(()=>{let r=class r{constructor(){this._WishlistService=d(F),this._ToastrService=d(k),this._CartService=d(E),this.wishListDetails=[]}ngOnInit(){this._WishlistService.getProductsWishList().subscribe({next:t=>{console.log(t.data),this.wishListDetails=t.data},error:t=>{console.log(t)}})}addToCart(t){this._CartService.addProductToCart(t).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message,"FreshCart")}})}removeProductToWishList(t){this._WishlistService.removeProductFromWishList(t).subscribe({next:e=>{console.log(e),this._ToastrService.error(e.message,"Product Removed"),this._WishlistService.getProductsWishList().subscribe({next:i=>{console.log(i.data),this.wishListDetails=i.data},error:i=>{console.log(i)}})},error:e=>{console.log(e),this._ToastrService.error(e.massage)}})}ngOnDestroy(){this.getAllWishListSubscription?.unsubscribe()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=_({type:r,selectors:[["app-wishlist"]],standalone:!0,features:[W],decls:9,vars:4,consts:[[1,"text-center","start-0","end-0","position-fixed","z-n1"],[1,"fs-1","fa-regular","fa-face-smile"],[1,"fw-bolder","text-main"],[1,"my-2"],[1,"bg-main-light","rounded-4","p-4","shadow","d-flex"],[1,"me-2"],[1,"cart-img","w-100","rounded",3,"src","alt"],[1,"ms-2","d-flex","flex-column","justify-content-between"],[1,"my-3","text-muted"],[1,"d-flex"],[1,"btn","btn-danger","me-2",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"btn-main",3,"click"],[1,"fa-solid","fa-cart-plus"]],template:function(e,i){e&1&&(s(0,"div",0),m(1,"i",1),s(2,"p"),l(3,"NO PRODUCTS GO BACK AND GET ONE"),n()(),s(4,"section")(5,"h1",2),l(6,"MY CART :"),n(),S(7,A,17,7,"div",3,O),n()),e&2&&(u("d-none",i.wishListDetails.length>0),c(4),u("d-none",i.wishListDetails.length==0),c(3),C(i.wishListDetails))},dependencies:[D,y]});let o=r;return o})();export{j as WishlistComponent};
