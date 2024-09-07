import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _HttpClient:HttpClient) { }

  myHeaders:any = { token : localStorage.getItem('userToken') };



  getUserAddress():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/addresses` ,
    {
      headers: this.myHeaders
    }
    )
  }

  addAddress(data:{}):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/addresses` ,
      data
      ,
    {
      headers: this.myHeaders
    }
    )
  }

  removedAddress(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/addresses/${id}` ,
      {
        headers: this.myHeaders
      }
    )
  }

}
