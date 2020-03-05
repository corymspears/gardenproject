import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrls: ['./api-fetch.component.css']
})
export class ApiFetchComponent implements OnInit {

  constructor(private apiFetch: ApiService) { }

  ngOnInit(): void {
  }
  getPlants(){
    this.apiFetch.getPlants().subscribe((data)=>{
      console.log(data)
    })
  }

}
