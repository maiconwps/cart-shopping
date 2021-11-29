import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/shared/cart/cart.service';
import { ProductItem } from 'src/app/shared/product-item/product-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  providers: [CartService]
})
export class CartItemComponent implements OnInit {

  @Input() item: ProductItem | null = null
  @Output() removedItem = new EventEmitter()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onRemove(){
    if (this.item !== null){
      this.removedItem.emit(this.item)
    }
  }

  onChangeInput(inputQuantity: Input){
    
  }

}
