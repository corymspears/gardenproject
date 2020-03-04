import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Login } from '../app/login';
 
@Injectable({ providedIn: 'root' })
export class UserService {
constructor(private http: HttpClient) { }
 
register(user: Login) {
return this.http.post(`auth/register`, user);
}
 
}
