const sabado = (array) => {
  let suma = 0;
  const menor = array[0] < array[1] ? array[0] : array[1];
  const mayor = array[0] > array[1] ? array[0] : array[1];
  let sumaArray = array[0] + array[1];
  for (let i = menor + 1; i <= mayor - 1; i++) {
    suma += i;
  }
  const resultado = {
    sumaArray: sumaArray,
    sumaIntermedia: suma,
  };
  return resultado;
};
