import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, toArray } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductDto } from '../../app/interfaces/product-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopGridDefaultService {
  constructor(private http: HttpClient) {}

  getAllproducts(): Observable<Product[]> {
    return this.http
      .get<ProductDto>(environment.baseApi + `products`)
      .pipe(map((result) => result.products));
  }

  getProductsLimit(limit: number): Observable<Product[]> {
    const skip = Math.floor(Math.random() * 100);
    return this.http
      .get<ProductDto>(
        environment.baseApi + `products?limit=${limit}&skip=${skip}`
      )
      .pipe(map((result) => result.products));
  }

  getProductsById(id: number) {
    return this.http.get(environment.baseApi + `products/${id}`);
  }
}
