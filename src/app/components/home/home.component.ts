import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/interfaces/iproducts';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SalePipe } from '../../core/pipe/sale.pipe';
import { TermtextPipe } from '../../core/pipe/termtext.pipe';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule , CarouselModule , RouterLink , FormsModule , SalePipe , TermtextPipe , SearchPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe , CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {


  private readonly _ProductsService= inject(ProductsService)
  private readonly _CategoriesService= inject(CategoriesService)
  private readonly _CartService= inject(CartService)
  private readonly _WishlistService= inject(WishlistService)
  private readonly _ToastrService= inject(ToastrService)
  private readonly _NgxSpinnerService= inject(NgxSpinnerService)
  private readonly _TranslateService= inject(TranslateService)

  productsList:IProducts[] = [];
  categoriesList:ICategories[] = [];

  text:string = ""; //! search value


  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    items:1,
    nav: false
  }
  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }



  getAllProductsSubscription !: Subscription
  ngOnInit(): void {

    this._CategoriesService.getAllCategories().subscribe({
      next: (res)=>{
        console.log(res.data);
        this.categoriesList = res.data;
        
      }
    })
    
    this.getAllProductsSubscription =  this._ProductsService.getAllProducts().subscribe({
            next: (res)=>{
              console.log(res.data);

              this.productsList = res.data;
              
            }
          })
  }

  ngOnDestroy(): void {
   this.getAllProductsSubscription?.unsubscribe()
  }




  addToCart(id:string){
    this._CartService.addProductToCart(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
        this._CartService.cartNumber.next( res.numOfCartItems )
      }
    })
  }
  addToWishList(id:string){
    this._WishlistService.addProductToWishList(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
      }
    })
  }

}
