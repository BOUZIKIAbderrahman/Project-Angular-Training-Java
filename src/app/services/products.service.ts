import { HttpClient } from '@angular/common/http';
import { ProductDto } from './../interfaces/product-dto';
import { Injectable } from '@angular/core';
import { map, Observable, toArray } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsLimit(limit: number): Observable<Product[]> {
    const skip = Math.floor(Math.random() * 100);
    return this.http
      .get<ProductDto>(
        'https://dummyjson.com/' + `products?limit=${limit}&skip=${skip}`
      )
      .pipe(map((result) => result.products));
  }
}
