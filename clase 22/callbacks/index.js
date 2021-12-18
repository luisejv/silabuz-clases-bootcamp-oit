const funcionSuma = (a, b, callback) => {
  const suma = a + b;
  callback(suma);
};

const imprimir = (dato) => {
  console.log("El resultado es ", dato);
};

funcionSuma(14, 27, imprimir);

const imprimir2 = (dato) => {
  console.log("Hola que tal chicos, el resultado es ", dato);
};

funcionSuma(2441, 15231, imprimir2);

setTimeout(() => {
  console.log("Hola Yefer");
}, 2000);
