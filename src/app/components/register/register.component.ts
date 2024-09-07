import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)

  success:boolean = false;

  errMassage:string = "";
  isLoading:boolean =false;



  registerForm: FormGroup = this._FormBuilder.group({
    name: [null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
    email: [null , [Validators.required , Validators.email]],
    password: [null , [Validators.required , Validators.pattern(/^\w{6,}$/)]],
    rePassword: [null ],
    phone: [null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
  } , { validators: this.confirmPassword })


  registSub !: Subscription

  registerSubmit(): void {
    if(this.registerForm.valid){

      this.isLoading = true;

       this.registSub = this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
        next: (res)=>{

          console.log(res);

          if(res.message == 'success'){
            this.success = true;
            setTimeout(() => {
              this._Router.navigate(['/login'])
            }, 1000);
          }

          this.isLoading = false;
        },
        error: (err:HttpErrorResponse)=>{
          this.errMassage=err.error.message
          console.log(err);
          this.isLoading = false;
          
        }
      })

      
    } else {
      this.registerForm.setErrors({mismatch:true})
      this.registerForm.markAllAsTouched()
    }
  }

  ngOnDestroy(): void {
    this.registSub?.unsubscribe();
  }


  confirmPassword( g:AbstractControl ){
    if(g.get('password')?.value === g.get('rePassword')?.value){
      return null;
    } else {
      return {mismatch:true}
    }
  }


}
