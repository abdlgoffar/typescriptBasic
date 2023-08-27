
//intersection adalah cara untuk membuat sebuah data type bisa mempunyai kontrak field lebih dari satu interface.

export interface HashID {
    id: string;
}

export interface Profile {
    username: string;
    password: string;
}


//contoh cara pembuatan intersection, cukup menggunakan symbol &
export type User = HashID & Profile;




const user: User = {
    id: "897608654",
    username: "Abdul Goffar",
    password: "AbdulGoffar123"
}