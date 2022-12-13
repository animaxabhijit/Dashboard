import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CallApiService {
  constructor(private http: HttpClient) {}

  apiCall() {
    return this.http.get('https://reqres.in/api/users/2');
  }
}
