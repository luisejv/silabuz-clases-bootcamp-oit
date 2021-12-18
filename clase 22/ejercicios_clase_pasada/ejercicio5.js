const crearArregloAleatorio = (tamanio, inicio, fin) => {
  const arrayAleatorio = [];
  for (let i = 0; i < tamanio; i++) {
    arrayAleatorio.push(Math.round(Math.random() * (fin - inicio)) + inicio);
  }
  return arrayAleatorio;
};

const size1 = +prompt("Escriba el tamanio del primer arreglo: ");
const inicio1 = +prompt("Escriba el inicio: ");
const fin1 = +prompt("Escriba el fin: ");

const size2 = +prompt("Escriba el tamanio del segundo arreglo: ");
const inicio2 = +prompt("Escriba el inicio: ");
const fin2 = +prompt("Escriba el fin: ");

const arr = crearArregloAleatorio(size1, inicio1, fin1).sort((a, b) => a - b);
const arr2 = crearArregloAleatorio(size2, inicio2, fin2).sort((a, b) => a - b);

console.log(arr);
console.log(arr2);

const solucionDiferencia = [];
const solucionIgualdad = [];

let i = 0;
let j = 0;

while (i < arr.length && j < arr2.length) {
  if (arr[i] == arr2[j]) {
    solucionIgualdad.push(arr[i]);
    i++;
    j++;
  } else if (arr[i] < arr2[j]) {
    solucionDiferencia.push(arr[i]);
    i++;
  } else {
    solucionDiferencia.push(arr2[j]);
    j++;
  }
}
while (i < arr.length) {
  solucionDiferencia.push(arr[i]);
  i++;
}
while (j < arr2.length) {
  solucionDiferencia.push(arr2[j]);
  j++;
}
console.log(solucionDiferencia);
console.log(solucionIgualdad);
