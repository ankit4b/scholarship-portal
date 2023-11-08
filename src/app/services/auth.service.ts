import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  
  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(form: any){
    this.fireauth.signInWithEmailAndPassword(form.email, form.password).then(() => {
      localStorage.setItem('token', 'true');
      console.log("Login Successful")
      this.router.navigate(['dashboard'])
    }, err => {
      console.log("Something went wrong", err);
      this.router.navigate(['/']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/'])
    }, err => {
      alert(err)
    })
  }
}
