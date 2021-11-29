import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {
    this.productService.listProducts().subscribe(data => this.products = data)
  }

  ngOnInit(): void {
    
  }

}
