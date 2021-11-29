export class Product{
    id: number
    name: string
    author: string
    evaluation: number
    price: number
    imageURL: string

    constructor(id: number, name: string, author: string, evaluation: number, price: number, imageURL: string){
        this.id = id
        this.name = name
        this.author = author
        this.price = price
        this.evaluation = evaluation
        this.imageURL = imageURL
    }

}