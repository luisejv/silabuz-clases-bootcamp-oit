const crearArregloAleatorio = (tamanio, inicio, fin) => {
  const arrayAleatorio = [];
  for (let i = 0; i < tamanio; i++) {
    arrayAleatorio.push(Math.round(Math.random() * (fin - inicio)) + inicio);
  }
  return arrayAleatorio;
};

// const array = [5, 2, 3, 7, 10, 1, 0, 4, 8, 9, 12, 13, 11];

// console.log(array);

const bubbleSort = (lista) => {
  let n, k, i, aux;
  n = lista.length;

  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (lista[i] < lista[i + 1]) {
        aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
      }
    }
  }
  return lista;
};

const arregloAleatorio = crearArregloAleatorio(100, 0, 1000);

console.log(arregloAleatorio);

console.log(bubbleSort(arregloAleatorio));
