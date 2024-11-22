// function nombre(){
// console.log("esto es la función");
// }
// console.log(nombre());

// function nombre(parametro = 250) {
//     console.log(parametro);
// }
// nombre(4);


// let respuesta = nombre(25);
// function nombre(parametro) {
// return parametro
// }

// let contador = 0;
// for (let i = 1; i < numero; i++) {
//     if (numero % i == 0) {
//         contador++;
//         }
//     }
//     if (contador > 2) {
//         return false;
//     } else {
//         return true;
//     }
    
// esPrimo(6);
// console.log(respuesta);

// const esPrimo = function (numero) {
//     let contador = 0;
// for (let i = 0; i < numero; i++) {
//     if (numero % i == 0) {
//         contador++;
//         }
//     }
// }
// esPrimo(6);
// console.log(respuesta);
// console.log(a[a.length -1]);

// const a = [1, "letras", true, false [1, "Juan"]];
// a.push("Juan");
// a.pop()
// console.log(a[4][1]);

const persona = {
     nombre: "Juan",
     apellido: "Gómez",
     edad: 18,
    saludar: function () {
         return `Hola soy ${this.nombre}`;
     }
}
persona.pais = "Colombia";
persona.genero = "genero";

persona.despedir = function () {
    return `chao se despide ${this.nombre}`;
}

if (Object.keys (persona).indexOf("genero") === -1 ){
    console.log("El atributo no fue definido");
}

console.log (Object.keys(persona).includes(pais));
// console.log(persona.saludar());
// console.log(persona.despedir());

// const personaje = {
//     name: "Oliver",       // Nombre de la persona
//     pais: "Colombia",            // País donde habita
//     despedida: "Adiós",       // Mensaje que dirá
//     toString: function() {
//       return `${this.name} (${this.pais}/${this.despedida})`;
//     }
//   };
  
//   console.log("Mi personaje es " + personaje);       // "Mi personaje es oliver (Colombia/Adiós)"
