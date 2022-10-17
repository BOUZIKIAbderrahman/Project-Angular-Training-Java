import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { ShopGridDefaultService } from '../../services/shop-grid-default.service';
import { ShopLeftSidebarService } from '../../services/shop-left-sidebar.service';

@Component({
  selector: 'app-shop-left-sidebar',
  templateUrl: './shop-left-sidebar.component.html',
  styleUrls: ['./shop-left-sidebar.component.css'],
})
export class ShopLeftSidebarComponent implements OnInit, OnDestroy {
  @Input()
  product!: Product;
  @Input()
  category!: Category;

  products: Product[] = [];
  categories: any[] = [];
  loaded: boolean = false;
  isChecked: boolean = false;
  data: any;
  constructor(
    private service: ShopLeftSidebarService,
    private productServ: ShopGridDefaultService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.data = this.productServ.getProductsLimit(6).subscribe(
      (data) => {
        this.products = data;
        this.loaded = true;
      },
      (error) => {
        alert('Error');
      }
    );
  }

  getProductsByCategory(value: string) {
    this.data = this.service.getProductsByCategory(value).subscribe(
      (data) => {
        this.products = data;
        this.loaded = true;
        console.log(data);
      },
      (error) => {
        alert('Error');
      }
    );
  }

  getCategories() {
    this.data = this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      console.log(res);
    });
  }

  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductsByCategory(value);
    }
  }
  filterCategoryOnCheck(e: any) {
    this.isChecked = e.target.checked;
    console.log(this.isChecked);
    this.isChecked = false;
    console.log(this.isChecked);
  }

  ngOnDestroy(): void {
    this.data?.unsubscribe();
  }
}
