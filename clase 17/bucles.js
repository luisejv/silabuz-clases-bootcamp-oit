/* 1er ejemplo de bucles */
// let continuarBucle = true;
// let contador = 0;
// while (contador < 5) {
//   contador++;
//   console.log("Hola Yefer ", contador);
// }
// console.log(contador);

const nombres = ["Yhonniel", "Marvelys", "Julio", "Carlos"];
const nombre = "Vivian";

const numeros = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let linea = "";

for (let i = 0; i < nombres.length; i++) {
  for (let o = 0; o < nombres[i].length; o++) {
    linea += nombres[i][o] + " ";
    // console.log(nombres[i][o]);
  }
  console.log(linea);
  linea = "";
}

// console.log(numeros[1][2]);
// console.log(nombres[2][4]);

// let encontrado = false;
// let contador = 0;
// let persona = "Marvelys";

// while (!encontrado && contador < 4) {
//   if (nombres[contador] == persona) {
//     encontrado = true;
//   } else {
//     contador++;
//   }
// }

// for (let i = 0; i < 4; i++) {
//   if (nombres[i] == persona) {
//     encontrado = true;
//   }
// }

if (encontrado) {
  console.log(
    `Termine de buscar a ${persona} y lo encontre en la posicion ${contador}`
  );
} else {
  console.log("No encontre a la persona 😔");
}

/* 2do ejemplo de bucles */
// do
// while

let prueba = false;

while (prueba) {
  console.log("Hola Yhonniel");
  prueba = false;
}

let prueba2 = false;

// do {
//   console.log("Hola Miguel");
//   prueba2 = false;
// } while (prueba2);

/* 3er ejemplo */
// for

for (let i = 2; i < 50; i = i ** 2) {
  console.log(i);
}
