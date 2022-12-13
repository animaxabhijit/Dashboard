import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor() {}

  canActivate() {
    return !!localStorage.getItem('token');
  }
}
