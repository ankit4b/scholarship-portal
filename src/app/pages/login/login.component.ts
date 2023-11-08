
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService){}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]] 
  })

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
    }
    // this.router.navigate(['dashboard'])
  }
}
