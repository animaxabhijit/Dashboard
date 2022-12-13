import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListApiService {
  constructor(private http: HttpClient) {}

  apiListCall() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
