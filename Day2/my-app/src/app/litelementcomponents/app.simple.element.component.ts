import { Component, OnInit } from '@angular/core';
import { Logic } from '../models/app.logic';

@Component({
  selector: 'app-simple-element-component',
  templateUrl: './app.simple.element.view.html'
})

export class SimpleElementComponent implements OnInit {
  myname: string;
  name: string;
  products: Array<any>;
  headers: Array<string>;
  private logic: Logic;
  constructor() {
     this.logic = new Logic();
     this.products = [
        {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT', IsDeleted: false},
        {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL', IsDeleted: false},
        {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD', IsDeleted: false}
      ];
     this.headers = new Array();
    for(let h in this.products[0]) {
      this.headers.push(h);
    }
  }
  receveData(event) : void {
    console.log(`In Parent ${event.detail.data}`);
  }
  deleteItem(event) : void {
    console.log(`In Parent ${event.detail.data}`);
    this.products = this.logic.deleteProduct(event.detail.data);
  }
  ngOnInit() { 
    
  }
}