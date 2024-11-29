const esPerfecto = (num) => {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    return suma === num;
}

let num = 28;
let esNumPerfecto = esPerfecto(num);
console.log(esNumPerfecto);
