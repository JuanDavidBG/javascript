// let palabra = "Lore, impum culpa 9"

// let regex = /[0-9]/g;

// console.log(regex.test(palabra));
// // console.log(regex.exec(palabra));
// console.log(palabra.match(regex));

// function buscar(regex, palabra){
//     if(palabra.includes(regex)) {
//         respuesta = true
//     } else{
//         respuesta = false
//     }
//     return respuesta
// }
// console.log(buscar(regex, palabra));


let palabra = "123Lore, impum culpa 98a456";
palabra = "1238 vaya y pollito 627329"

let regex = /^[0-9]{2,3}+[a-z]{4,6}/g;

console.log(regex.test(palabra));     
console.log(palabra.match(regex));   
