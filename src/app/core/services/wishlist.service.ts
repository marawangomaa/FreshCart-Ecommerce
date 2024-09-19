import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  myHeaders:any = { token : localStorage.getItem('userToken') };

  addProductToWishList(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist` , 
      {
        "productId": id
    }
    )
  }

  removeProductFromWishList(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}` ,
      
    )
  }
  
  getProductsWishList():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist` ,
      
    )
  }

}
