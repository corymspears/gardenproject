import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogin: boolean = true
  showLogout: boolean = false
  LoginUser: any;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("token")){
        this.showLogout = true
        this.showLogin = false
    }
    }
  }