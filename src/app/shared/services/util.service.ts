import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private http: HttpClient) {}

  get token() {
    const token = localStorage.getItem('tokenLoginAdmin');
    return token;
  }

  get user() {
    const user = localStorage.getItem('userLoginAdmin');
    return user;
  }
}
