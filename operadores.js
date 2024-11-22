// let a = 25;
// let b = 2;
// let c = 7;

// let resultado = a + (b + (b - a) * a) / c;
// console.log (resultado);

// console.log(typeof a);
// console.log(typeof b);
// if (typeof a === "number" && typeof b === "number") {
// console.log(a % b);
// }

//operadores logicos 
//menor (<) menor que
//mayor (>) mayor que
//(<=) menor igual
//(=>) mayor igual
// (==) igual
// (===) valor y tipo de dato
// (!=) negación

// let a = 5;
// let b = 10;

// console.log(a < b);

// console.log(a !== b);
// console.log(i++);
// console.log(i);
// console.log(i++);
// console.log(i)
// let i = 0;
// console.log(i = i + 4);

// let a = 5;
// let b = 7;

// if(!false && !true) {
//     if (false){
//     console.log("?");
//     }
// }else if (false) {
// console.log("??");
// }else{

// }

// let respuesta = (true) ? "verdadero": "falso";
// console.log(respuesta);
// if (false) {
//     console.log("Respuesta Verdadera");
// } else {
//     console.log("Respuesta falsa");
// }

var diaSemana = 0;  

diaSemana = prompt("Introduce un número entre 1 y 7:"); 

switch (diaSemana) {
  case 1:
    console.log("El día seleccionado es LUNES");
    break;
  case 2:
    console.log("El día seleccionado es MARTES");
    break;
  case 3:
    console.log("El día seleccionado es MIÉRCOLES");
    break;
  case 4:
    console.log("El día seleccionado es JUEVES");
    break;
  case 5:
    console.log("El día seleccionado es VIERNES");
    break;
  case 6:
    console.log("El día seleccionado es SÁBADO");
    break;
  case 7:
    console.log("El día seleccionado es DOMINGO");
    break;
  default:
    console.log("Error: número incorrecto.");
    break;
}
