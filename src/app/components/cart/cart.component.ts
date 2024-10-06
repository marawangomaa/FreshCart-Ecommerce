import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { subscribe } from 'diagnostics_channel';
import { ICart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CurrencyPipe , FormsModule , SearchPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit   {

  private readonly _CartService= inject(CartService)
  private readonly _ToastrService= inject(ToastrService)

  cartDetails: ICart = {} as ICart;

  getAllCartSubscription !: Subscription


  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next: (res)=>{
        console.log(res.data);
        this.cartDetails = res.data;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  removeItem(id:string):void {
    this._CartService.deletSpecifecCartItem(id).subscribe({
      next: (res)=>{
        console.log(res);
        this._ToastrService.error('Item deleted successfully')
        this.cartDetails = res.data
        this._CartService.cartNumber.next(res.numOfCartItems)

      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }


  updateCount( id:string , count:number ):void{
    if( count > 0 ){
      this._CartService.updateProductQuantity( id , count ).subscribe({
        next: (res)=>{
          console.log(res);
          this.cartDetails = res.data;
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }
  }

  clearItems():void{
    this._CartService.clearCart().subscribe({
      next: (res)=>{
        console.log(res);
        if( res.message  == "success" ){
          this.cartDetails = {} as ICart;
          this._CartService.cartNumber.next(0)
          this._ToastrService.error('Cart successfully cleared')
        }
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  ngOnDestroy(): void{
    this.getAllCartSubscription?.unsubscribe()
  }
  
}
