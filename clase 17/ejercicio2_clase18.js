// 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23

let numero = 289;
let contador = 2;
let esPrimo = true;

while (esPrimo && contador < numero) {
  if (numero % contador == 0) {
    esPrimo = false;
  } else {
    contador++;
  }
}

if (esPrimo) {
  console.log(`El numero ${numero} es primo.`);
} else {
  console.log(
    `el numero ${numero} no es primo porque es divisible entre ${contador}`
  );
}
