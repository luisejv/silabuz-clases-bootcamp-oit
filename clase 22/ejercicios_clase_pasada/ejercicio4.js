const crearFibonacci = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array;
};

const sumarImpares = (arrayFibonacci) => {
  let suma = 0;
  for (let i = 0; i < arrayFibonacci.length; i++) {
    if (arrayFibonacci[i] % 2 != 0) {
      suma += arrayFibonacci[i];
    }
  }
  return suma;
};

const size = 10;
// const size = +prompt("Escribir un numero");
const arreglo = crearFibonacci(size);

console.log(arreglo);
console.log(sumarImpares(arreglo));
