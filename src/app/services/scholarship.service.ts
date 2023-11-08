import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {
  apiUrl: string = 'https://654a2fd6e182221f8d52af1c.mockapi.io/api'

  constructor(private http: HttpClient) { }

  getAppliedScholarshipDetails(): Observable<any>{
    return this.http.get(`${this.apiUrl}/user_applied_scholarship`)
  }

  getUserDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/users/1`)
  }
}
