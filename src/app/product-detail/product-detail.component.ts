import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/cart/cart.service';
import { Product } from '../shared/product/product.model';
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, CartService]
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product(0, "", "", 0, 0, "")
  quantity = 1

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    const id = route.snapshot.params["id"]
    productService.getProduct(id).subscribe(data => this.product = data)
  }

  ngOnInit(): void {
  }

  getStarts(){
    const startState = new Array(5).fill('')
    return startState.map((v, i) => i + 1 <= this.product.evaluation? "fulled": "unfulled" )
  }

  addToCart(){
    this.cartService.addToCart(this.product, this.quantity)
  }

}
