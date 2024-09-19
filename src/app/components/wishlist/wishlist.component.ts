import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IWishlist } from '../../core/interfaces/iwishlist';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ CurrencyPipe , FormsModule , RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit , OnDestroy {

  private readonly _WishlistService= inject(WishlistService)
  private readonly _ToastrService= inject(ToastrService)
  private readonly _CartService= inject(CartService)


  wishListDetails: IWishlist[] = [];

  getAllWishListSubscription !: Subscription


  ngOnInit(): void {
    this._WishlistService.getProductsWishList().subscribe({
      next: (res)=>{
        console.log(res.data);
        this.wishListDetails = res.data;
        
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }


  addToCart(id:string){
    this._CartService.addProductToCart(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
      }
    })
  }

  removeProductToWishList(id:string): void{
    this._WishlistService.removeProductFromWishList(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.error(res.message, 'Product Removed')
        this._WishlistService.getProductsWishList().subscribe({
          next: (res)=>{
            console.log(res.data);
            this.wishListDetails = res.data;
            
            
          },
          error: (err)=>{
            console.log(err);
            
          }
        })
      },
      error: (err)=>{
        console.log(err);
        this._ToastrService.error(err.massage)        
      }
    })
  }



  ngOnDestroy(): void {
    this.getAllWishListSubscription?.unsubscribe()
  }

}
