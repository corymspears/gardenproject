import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    email: string;
    password: string;

    showLogout: boolean = false
    showLogin: boolean = true

    constructor(private userLogin: ApiService) {}

    ngOnInit() {
    this.LoginUser()
    if (localStorage.getItem("token")){
        this.showLogout = true
        this.showLogin = false
    }
    }
    
LoginUser(){
    this.userLogin.LoginUser(this.email, this.password).subscribe(
        data => {
        console.log("Login is successful", data)
        localStorage.setItem("token", data.token)
        this.email = ""
        this.password =""
        },
        
        error => {
        console.log("error", error)
        }
    )
    }
LogoutUser(){
    localStorage.clear()
}
}