

export function checkDataType(data: string | number | boolean): void {
    //contoh cara pengecekan type data di Typescript.

    if (data === "string") {
        console.info("data type is string")
    } else if (data === "number") {
        console.info("data type is number or integer")
    } else {
        console.info("data type is boolean")
    }
    

    
}