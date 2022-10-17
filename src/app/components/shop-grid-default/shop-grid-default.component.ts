import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ShopGridDefaultService } from '../../services/shop-grid-default.service';

@Component({
  selector: 'app-shop-grid-default',
  templateUrl: './shop-grid-default.component.html',
  styleUrls: ['./shop-grid-default.component.css']
})
export class ShopGridDefaultComponent implements OnInit,OnDestroy {

  @Input()
  product!: Product;

  loaded: boolean = false;
  products: Product[] = [];
  data:any ;

  constructor(private service:ShopGridDefaultService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.data = this.service.getProductsLimit(12)
    .subscribe((data) => {
      this.products = data;
      this.loaded = true;
    },error =>{
      alert("Error")
    });
  }

  ngOnDestroy(): void {
    this.data?.unsubscribe();
  }

}
