import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ShopGridDefaultService } from '../../services/shop-grid-default.service';
import { ShopLeftSidebarService } from '../../services/shop-left-sidebar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: any = {};
  relatedProducts: Product[] = [];
  products: any;
  isLoaded: boolean = false;

  id: any;
  category: any;
  constructor(
    private route: ActivatedRoute,
    private defaultServ: ShopGridDefaultService,
    private leftServ: ShopLeftSidebarService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.id);
    console.log(this.category);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getProductById();
    this.getRelatedProducts(this.category, 4);
  }

  getProductById() {
    this.defaultServ.getProductsById(this.id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
    });
  }

  getRelatedProducts(value: string, limit: number) {
    this.products = this.leftServ
      .getLimitProductsByCategory(value, limit)
      .subscribe(
        (data) => {
          this.relatedProducts = data;
          this.isLoaded = true;
          console.log(data);
        },
        (error) => {
          alert('Error');
        }
      );
  }
}
