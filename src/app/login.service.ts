import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getLoginToken(email, password) {
    console.log('ABC')
    return this.http.post('https://reqres.in/api/login', {
      email: email,
      password: password,
    });
  }
}
