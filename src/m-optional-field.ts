

//optional field adalah field yang tidak wajib diisi pada sebuah object ketika object tersebuat akan mau dibuat, untuk membuat optional field cukup menggunakan symbol ?

//contoh cara pembutan object dengan optional field.
export type Category = {
    id: string;
    name: string;
    code?: string
}
//contoh cara pembutan object dengan optional field.
export type Product = {
    id: string;
    name: string;
    price: number;
    status: boolean;
    category: Category;
    code?: string
}





//contoh penggunaan atau pembuatan type data object Alias
const category: Category = {
    id: "2435656",
    name: "barang elektronik",
    code: "nde7834298-dnbjf466-cdjfe3579"
}
const product: Product = {
    id: "12748910",
    name: "Macbook Pro 2023",
    price: 36000000,
    status: true,
    category: category
}