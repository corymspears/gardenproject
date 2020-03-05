import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  plants: any;
  showButton: boolean = false

  constructor(private plantService: ApiService) {}

  ngOnInit() {
    this.getPlants()
    if (localStorage.getItem("token")){
      this.showButton = true
    }
  }

  getPlants(): void{
    this.plantService.getPlants()
    .subscribe(plants => this.plants = plants)
  }

  deletePlant(id){
    console.log(id)
    this.plantService.deletePlants(id)
    .subscribe(plants => this.getPlants())
}
}
