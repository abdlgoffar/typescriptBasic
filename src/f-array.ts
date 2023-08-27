

export function dataTypeArray(): void {

    //contoh cara pembuatan type data array di typescript.
    const name: string[] = ["Abdul", "Goffar", "East Java"];
    const balance: number[] = [1, 2, 3, 4, 5, 6];


    //contoh cara pembuatan type data array yang tdak bisa di modifikasi lagi.
    const hobbies: ReadonlyArray<string> = ["play football", "watch league football", "play plastation"];


    //contoh cara pembuatan type data array tuple.
    //array tuple adalah data type array yang sudah ditentukan dari awal type datanya dan panjangnya.
    const student: readonly[string, number, boolean] = ["Abdul Goffar", 9002756473, true];

    


    
}