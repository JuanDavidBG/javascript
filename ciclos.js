// let n = 8;
// let contador = 1;
// while (contador <= n) {
// console.log(contador);
// contador++
// }

// let n = 8;
// let contador = 1;
// do{
//     console.log("?");
// } while (false);

// for (let i = 0; ;i++){
//     console.log
// }

// for (let i = 2; i <= 40; i += 2) {
//     console.log(i);
//   }

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function encontrarPrimerosPrimos(n) {
    let primos = [];
    let numero = 2;
    while (primos.length < n) {
      if (esPrimo(numero)) {
        primos.push(numero);
      }
      numero++;
    }
    return primos;
  }
  
  console.log(encontrarPrimerosPrimos(5));