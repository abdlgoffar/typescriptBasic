//cara membuat function.
function hello(name: string): void {
    console.info(`hello ${name}`);
}


//cara membuat function return value.
function hello2(name: string): string {
   return `hello ${name}`;
}

//cara membuat function default parameter value.
function hello3(name: string = "goffar") {
    console.info(`hello ${name}`);
}


//cara membuat function rest parameter
//function rest parameter adalah function yg parameternya bisa mempunyai banyak value.
function calculation(...number: number[]): number {
    let n = 0;
    for (const i of number) {
        n += i;
    }

    return n;
}
console.info(calculation(1, 2, 3, 4, 5));