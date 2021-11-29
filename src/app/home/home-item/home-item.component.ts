import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() product: Product = new Product(0, "", "", 0, 0, "")

  constructor() { }

  ngOnInit(): void {
  }

}
