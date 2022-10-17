import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductDto } from '../../app/interfaces/product-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopLeftSidebarService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<ProductDto>(environment.baseApi + `products/category/${category}`)
      .pipe(map((result) => result.products));
  }

  getLimitProductsByCategory(
    category: string,
    limit: number
  ): Observable<Product[]> {
    return this.http
      .get<ProductDto>(
        environment.baseApi + `products/category/${category}?limit=${limit}`
      )
      .pipe(map((result) => result.products));
  }
}
