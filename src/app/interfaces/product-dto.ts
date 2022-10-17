import { Product } from './product';

export interface ProductDto {
  products: Product[];
  total: number;
}
