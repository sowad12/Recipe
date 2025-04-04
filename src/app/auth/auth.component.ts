import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../_models/auth/auth-response.model';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoading:boolean=false;
  isLoginMode:boolean=false;
  error:string='';
  authObs=new Observable<AuthResponse>;
  @ViewChild('authForm') form:NgForm;
  constructor(private authService:AuthService,private route:Router){}
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(){
    if(!this.form.valid){
      return;
    }
  
    if(this.isLoginMode){
    this.authObs=this.authService.login(this.form.value.email,this.form.value.password);
    }
    else{
    this.authObs=this.authService.register(this.form.value.email,this.form.value.password);
    }
    this.authObs.subscribe((res)=>{
      console.log("auth res:",res);
      this.route.navigate(['/recipes']);
    },
    (err)=>{
     this.error=err;
    }
  )
  this.form.reset(); 
  
  }
  // ngOnDestroy(): void {
  //   this.authObs.unSubscribe();
    
  // }
  
}
