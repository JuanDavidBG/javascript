const amigos =  (a,b) => {
let valueA = 0;
let valueB = 0;
for (let i = 1; i < a; i++){
 if(a % i === 0) valueA += i;
 }
 for (let i = 1; i < b; i++){
    if(b % i === 0) valueB += i;
    }
if (valueA === b && valueB === a){
    return true
} else {
    return false
}
}

let a = 220;
let b = 284;
let sonAmigos = amigos(a,b);
console.log(sonAmigos);


//los dividores propios 