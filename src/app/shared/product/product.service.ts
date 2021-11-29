import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  listProducts(){
    return this.httpClient.get<Product[]>(
      `http://localhost:3000/products`
    )
  }

  getProduct(id: number){
    return this.httpClient.get<Product>(
      `http://localhost:3000/products/${id}`
    )
  }
}
