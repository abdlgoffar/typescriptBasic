import { Category } from "./Category";



//sama seperti type, interface adalah cara pembuatan type data object agar field-field nya menjadi sebuah kontrak ketika object tersebut dibuat.

export interface Product {
    id: string;
    name: string;
    price: number;
    status: boolean;
    category: Category
}


