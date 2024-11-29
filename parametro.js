// function suma (a, b, ...c) {
//     let resultado = 0;
//     for (let i = 0; i <= c.length; i++){
//         if (typeof (c[i]) === "number") resultado += c[i];
//     }
//     if (typeof (a) === "number") resultado += a;
//     if (typeof (b) === "number") resultado += b;
//     return a + b + c;
// }


// let resultado = suma("dos", 9, 21, 1, 5, "cuatro", 8, 9);
// console.log(resultado);

const arrayA = [1, 2, 3];
const ArrayB = ["a", "b", "c"];

// const arrayC = arrayA + ArrayB;
const arrayC = [...arrayA, ...ArrayB];
console.log(arrayC);