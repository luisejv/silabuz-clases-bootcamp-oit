/* 1er ejemplo de bucles */
// let continuarBucle = true;
// let contador = 0;
// while (contador < 5) {
//   contador++;
//   console.log("Hola Yefer ", contador);
// }
// console.log(contador);

const nombres = ["Yhonniel", "Marvelys", "Julio", "Carlos"];
let encontrado = false;
let contador = 0;
let persona = "Yefer";

while (!encontrado && contador < 4) {
  if (nombres[contador] == persona) {
    encontrado = true;
  } else {
    contador++;
  }
}

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

/* 3er ejemplo */
// for
