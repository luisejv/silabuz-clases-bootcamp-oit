const array = [1, 100, 200, 2, 15, 23, 233, 5, 555, 854, 999, 12];

/* coges el primer valor */
/* ese valor es tu valor maximo por el momento */
let numeroMayor = array[0];
/* comparas ese valor con el siguiente valor y DECIDES si quedarte con esa o con la nueva */
for (let i = 1; i < array.length; i++) {
  if (numeroMayor > array[i]) {
    numeroMayor = array[i];
  }
}
/* Repetir el paso anterior hasta que haya recorrido todo el grupo de valores */
/* Resultado: */
console.log(numeroMayor);

const string =
  "tratemos con una palabra grande a ver su longitud: otorrinolaringología";

const split = string.split(" ");

let palabraMasGrande = split[0];

for (let i = 1; i < split.length; i++) {
  if (palabraMasGrande.length < split[i].length) {
    palabraMasGrande = split[i];
  }
}

console.log(
  `La palabra más larga es ${palabraMasGrande} y su longitud es ${palabraMasGrande.length}`
);

const size = 3;
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const arregloSolucion = [];
let miniArreglo = [];
let i = 0;

while (i < letras.length) {
  if (miniArreglo.length < size) {
    miniArreglo.push(letras[i]);
    i++;
  }
  if (i >= letras.length || miniArreglo.length == size) {
    arregloSolucion.push(miniArreglo);
    miniArreglo = [];
  }
}

console.log(arregloSolucion);
