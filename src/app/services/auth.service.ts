import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4200'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
   
    const loginEndpoint = `${this.apiUrl}/login`;

    
    const requestBody = {
      email: email,
      password: password,
    };

    // Make a POST request to the login endpoint
    return this.http.post(loginEndpoint, requestBody);
  }
}
