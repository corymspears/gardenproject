import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import {plants } from './mock-products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  plants = plants;

  constructor() { }

  ngOnInit(): void {
  }

}
