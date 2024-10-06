import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/interfaces/iproducts';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsComponent implements OnInit {

  private readonly _ActivatedRoute= inject(ActivatedRoute)
  private readonly _ProductsService= inject(ProductsService)
  private readonly _CartService= inject(CartService)
  private readonly _ToastrService= inject(ToastrService)

  detailProduct: IProducts | null = null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p)=>{
        let idProduct = p.get('id');

        this._ProductsService.getSpecificProducts(idProduct).subscribe({
          next: (res)=>{
            console.log(res.data);
            this.detailProduct = res.data;
            
          },
          error: (err)=>{
            console.log(err);
            
          }
        })
        
      }
    })
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
  
}
