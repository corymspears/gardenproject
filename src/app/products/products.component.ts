import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // plants = plants;
  plants: any;

  constructor(private plantService: ApiService) {}

  ngOnInit() {
    this.getPlants()
  }

  getPlants(): void{
    this.plantService.getPlants()
    .subscribe(plants => this.plants = plants)
  }

}
