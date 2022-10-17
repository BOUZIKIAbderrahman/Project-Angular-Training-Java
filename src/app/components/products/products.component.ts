import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data:any ;
  products: Product[] = [];
  loaded: boolean = false;
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.data = this.service.getProductsLimit(12)
    .subscribe((data) => {
      this.products = data;
      this.loaded = true;
    },error =>{
      alert("Error")
    });
  }

}
