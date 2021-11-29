import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../shared/cart/cart.model';
import { CartService } from '../shared/cart/cart.service';
import { ProductItem } from '../shared/product-item/product-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cart: Cart

  constructor(private cartService: CartService ) {
    this.cart = cartService.getCurrentCart()
  }

  ngOnInit(): void {
  }

  removeItem(item: ProductItem){
    this.cartService.removeFromCart(item.id)
    this.cart.items = this.cart.items.filter(productItem => item.id !== productItem.id)
  }

}
