import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  data: any;
  latestproducts: Product[] = [];
  trendingProducts: Product[] = [];
  loaded: boolean = false;
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getLatestproducts();
    this.getTrendingProducts();
  }

  getLatestproducts() {
    this.data = this.service.getProductsLimit(6).subscribe((data) => {
      this.latestproducts = data;
      console.log(data);
    });
  }
  getTrendingProducts() {
    this.data = this.service.getProductsLimit(5).subscribe((data) => {
      this.trendingProducts = data;
      console.log(data);
    });
  }
}
