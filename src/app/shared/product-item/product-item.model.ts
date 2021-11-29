import { Product } from "../product/product.model"

export class ProductItem{
    id: number
    product: Product
    quantity: number

    constructor(id: number, product: Product, quantity: number){
        this.id = id
        this.product = product
        this.quantity = quantity
    }
}