


//contoh cara pembuatan type data Alias Union.
export type ID = string | number;



//contoh cara penggunaan type data Alias Union.
export type Category = {
    id: ID;
    name: string
}
//contoh cara penggunaan type data Alias Union.
export type Product = {
    id: ID;
    name: string;
    price: number;
    status: boolean;
    category: Category
}





