import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../core/services/auth.service';
import { ProfileService } from '../../core/services/profile.service';
import { IAddress } from '../../core/interfaces/iaddress';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  private readonly _AuthService= inject(AuthService)
  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _ProfileService= inject(ProfileService)



  addressForm: FormGroup = this._FormBuilder.group({
    name: [null],
    details: [null],
    phone: [null],
    city: [null],
  })

  addressData: IAddress [] = [];


  ngOnInit(){
    this._AuthService.saveUserData()
    const token = this._AuthService.userData
    console.log(token);

    this._ProfileService.getUserAddress().subscribe({
      next: (res)=>{
        console.log(res.data);
        this.addressData = res.data;
        
      },
      error(err) {
        console.log(err);
        
      },
    })
    
  }


  addAddress(){
    this._ProfileService.addAddress(this.addressForm.value).subscribe({
      next: (res)=>{
        console.log(res.data);
        this.addressData = res.data;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

}