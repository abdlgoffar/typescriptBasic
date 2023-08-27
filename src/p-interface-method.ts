


//interface method adalah cara pembuatan sebuah method dengan menggunakan sebuah interface.

import { Calculation } from "./Calculation";



//contoh cara pemanggilan interface method.
const calculation: Calculation =  (value1: number, value2: number, value3: number): number => {
    return value1 + value2 + value3
};

console.info(calculation(3,3,3));

