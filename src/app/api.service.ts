import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlants(){
    return this.http.get ("http://localhost:3000/api/product")
  }

  deletePlants(id){
      const token=localStorage.getItem("token")
      const reqHeaders=new HttpHeaders({
      "Content-Type": 'application/json',
      Authorization: token
    })

    return this.http.delete(`http://localhost:3000/api/product/${id}`, {headers:reqHeaders})
  }
  // loginAdmin(){
  //   return this.http.post ("http://localhost:3000/api/auth/login", )

    }
{}
