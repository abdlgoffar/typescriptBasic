
//enum adalah type data yang nilainya sudah pasti.
//contoh cara pembuatan type data enum.
export enum DELIVERY {
    PECKING,
    JOURNEY,
    ARRIVE
}


//contoh cara penggunaan enum.
export type Product = {
    id: string;
    name: string;
    price: number;
    status: boolean;
    delivery: DELIVERY
}

//contoh cara pengisian data enum.
const product: Product = {
    id: "12748910",
    name: "Macbook Pro 2023",
    price: 36000000,
    status: true,
    delivery: DELIVERY.JOURNEY
}