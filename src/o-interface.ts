import { Category } from "./Category"
import { Product } from "./Product"



//congtoh cara pembuatan object dengan type data interface
const category: Category = {
    id: "73823556",
    name: "barang elektronik"
}

const product: Product =  {
    id: "12748910",
    name: "Macbook Pro 2023",
    price: 36000000,
    status: true,
    category: category
}