import { Injectable } from '@angular/core';
import { ProductItem } from '../product-item/product-item.model';
import { Product } from '../product/product.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  getCurrentCart(){
    const cart = new Cart()
    const cartData = localStorage.getItem("currentCart")

    if(cartData !== null){
      cart.items = JSON.parse(cartData).items
    }

    return cart
  }

  addToCart(product: Product, quantity: number){
    const cart = this.getCurrentCart()
    const lastId = cart.items.length != 0? cart.items[cart.items.length-1].id : 0
    cart.addItem(new ProductItem(lastId + 1, product, quantity))
    localStorage.setItem("currentCart", JSON.stringify(cart))
  }

  removeFromCart(productItemId: number){
    console.log(productItemId)
    const cart = this.getCurrentCart()
    cart.items = cart.items.filter((productItem) => productItem.id !== productItemId)
    localStorage.setItem("currentCart", JSON.stringify(cart))
  }
}
