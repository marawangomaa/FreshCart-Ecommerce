import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _HttpClient:HttpClient ) { }

  myHeaders:any = { token : localStorage.getItem('userToken') };

  addProductToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart` , 
      {
        "productId": id
      },
      {
        headers: this.myHeaders
      }
    )
  }


  getProductsCart():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart` , 
      {
        headers: this.myHeaders
      }
    )
  }


  deletSpecifecCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}` ,
      {
        headers: this.myHeaders
      }
    )
  }

  updateProductQuantity(id:string , newCount:number):Observable<any>{
    return  this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}` , 
      {
        "count": newCount
    },
    {
      headers: this.myHeaders
    }
    )
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart` ,
      {
        headers: this.myHeaders
      }
    )
  }

}
