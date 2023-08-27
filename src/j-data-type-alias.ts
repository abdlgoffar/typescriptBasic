

//type data alias adalah cara pembuatan type data object dengan field-field sesuai kebutuhan, supaya object tersebut mempunyai kontrak sesuai field-field tersebut.
//contoh cara pembuatan type data Alias di Typescript.

export type Category = {
    id: string;
    name: string
}
export type Product = {
    id: string;
    name: string;
    price: number;
    status: boolean;
    category: Category
}





//contoh penggunaan type data Alias
const category: Category = {
    id: "2435656",
    name: "barang elektronik"
}
const product: Product = {
    id: "12748910",
    name: "Macbook Pro 2023",
    price: 36000000,
    status: true,
    category: category
}