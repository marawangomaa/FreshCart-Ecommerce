import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { TermtextPipe } from '../../core/pipe/termtext.pipe';
import { SalePipe } from '../../core/pipe/sale.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/interfaces/iproducts';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ TranslateModule , NgxPaginationModule , CarouselModule , RouterLink , FormsModule , SalePipe , TermtextPipe , SearchPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe , CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit , OnDestroy {

  private readonly _ProductsService= inject(ProductsService)
  private readonly _CartService= inject(CartService)
  private readonly _WishlistService= inject(WishlistService)
  private readonly _ToastrService= inject(ToastrService)


  productsList:IProducts[] = [];


  text:string = "";



  getAllProductsSubscription !: Subscription


  ngOnInit(): void {
    this.getAllProductsSubscription =  this._ProductsService.getAllProducts().subscribe({
      next: (res)=>{
        console.log(res.data);

        this.productsList = res.data;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }


  ngOnDestroy(): void {
    this.getAllProductsSubscription?.unsubscribe()
   }


   addToCart(id:string):void{
    this._CartService.addProductToCart(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
        this._CartService.cartNumber.next(res.numOfCartItems)
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  addToWishList(id:string){
    this._WishlistService.addProductToWishList(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }


pageSize:number = 20 ;
currentPage:number = 1 ;

}
