import { Person } from "./Person";


//contoh cara pembuatan interface yang extends ke interface lain.
export interface Employee extends Person {

}


//pembuatan object dengan type data interface.
const employee: Employee = {
    id: "758707008",
    name: "Abdul Goffar",
    salary: 35000000
}