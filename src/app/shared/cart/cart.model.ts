import { ProductItem } from "../product-item/product-item.model"

export class Cart{
    items: Array<ProductItem>
   
    constructor(){
       this.items = []
    }

    addItem(item: ProductItem){
        this.items.push(item)
    }

}