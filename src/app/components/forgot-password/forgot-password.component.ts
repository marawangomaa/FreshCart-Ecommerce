import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule , NgClass],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _AuthService= inject(AuthService)
  private readonly _Router= inject(Router)

  step:number = 1;


  verifyEmail: FormGroup = this._FormBuilder.group({
    email: [null , [Validators.required , Validators.email]]
  })
  verifyCode: FormGroup = this._FormBuilder.group({
    resetCode: [null , [Validators.required , Validators.pattern(/^[0-9]{6}$/)]]
  })
  verifyPassword: FormGroup = this._FormBuilder.group({
    email: [null , [Validators.required , Validators.email]],
    newPassword: [null , [Validators.required , Validators.pattern(/^\w{6,}$/)]]
  })



  verifyEmailSubmit(): void {

    let emailValue = this.verifyEmail.get('email')?.value
    this.verifyPassword.get('email')?.patchValue(emailValue)

    if (this.verifyEmail.valid) {
      this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({
        next: (res)=>{
          console.log(res);
          if(res.statusMsg === 'success'){
            this.step = 2;
          }
          
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }

  }


  verifyCodeSubmit(): void {
    if (this.verifyCode.valid) {
      this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({
        next: (res)=>{
          console.log(res);
          if(res.status === 'Success'){
            this.step = 3;
          }
          
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }
  }


  resetPasswordSubmit(): void {
    if (this.verifyPassword.valid) {
      this._AuthService.setNewPassword(this.verifyPassword.value).subscribe({
        next: (res)=>{
          console.log(res);
          localStorage.setItem('userToken' , res.token)
  
          this._AuthService.saveUserData()
  
          this._Router.navigate(['/home'])
          
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }
  }
}
