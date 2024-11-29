// const jeferson = (nombre) => {
//     console.log(nombre);
// }
// console.log(jeferson);

// const anonima = (...a) => {
// console.log(a);
// }
// anonima()

// class Persona{

// }

// const saray = {
//     nombre: "saray",
//     apellido: "Estupiñan",
//     edad: 20
// }
// const kevin = {
//     nombre: "saray",
//     apellido: "Parez",
//     edad: 19
// }

// console.log(Object.keys(saray));
class Persona{
constructor(nombreA, apellidoA, edadA){
this.nombre = nombreA;
this.apellido = apellidoA;
this.edad = edadA;
    }
    //Métodos
    comer(){
        console.log(`${this.nombre} esta comiendo empanada`);
    }
}

class Aprendiz extends Persona{

}

const saray = new Aprendiz("Saray", "Estupiñan", 20);
const kevin = new Aprendiz("Kevin", "Paez", 19);
saray.comer();
kevin.comer();