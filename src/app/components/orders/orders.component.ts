import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/services/orders.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule , NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _ActivatedRoute= inject(ActivatedRoute)
  private readonly _OrdersService= inject(OrdersService)


  orders: FormGroup = this._FormBuilder.group({
    details: [null , [Validators.required , Validators.minLength(10) , Validators.maxLength(100)]],
    phone: [null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city: [null , [Validators.required , Validators.pattern(/^[a-zA-Z\u0080-\u024F\s'-]{2,100}$/)]]
  })


  cartId:string | null = "";

  errMassage:string = "";
  isLoading:boolean =false;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p)=>{
        this.cartId = p.get('id');
      }
    })
  }


  orderSubmit():void {
    if (this.orders.valid) {
      console.log(this.orders.value);
    this.isLoading = true;
    
    this._OrdersService.checkOut(this.cartId , this.orders.value).subscribe({
      next: (res)=>{
        console.log(res);

        if(res.status === 'success'){
          window.open(res.session.url , '_self')
        }
        
        this.isLoading = false;

      },
      error: (err)=>{
        this.errMassage=err.error.message
          console.log(err);
          this.isLoading = false;
        
      }
    })
    } else {
      this.orders.setErrors({mismatch:true})
      this.orders.markAllAsTouched()
    }

  }

}
