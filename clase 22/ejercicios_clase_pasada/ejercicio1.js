const numeroAConvertir = 556852458;

/* 1era forma */
const vivian = (x) => {
  //   const numeroAString = "" + numero;

  //   const numerosEnArreglo = numeroAString.split("");

  //   const numerosReverse = numerosEnArreglo.reverse();

  //   const solucion = +numerosReverse.join("");

  return ("" + x).split("").reverse().join("");
};

/* Abreviado */
// const vivian = (x) => ("" + x).split("").reverse().join("");

console.log(+vivian(numeroAConvertir));

/* 2da forma */
const solucion = [];
let numeroVariable = numeroAConvertir;

while (numeroVariable > 0) {
  solucion.push(numeroVariable % 10);
  numeroVariable = Math.floor(numeroVariable / 10);
}

console.log(+solucion.join(""));

/* 3era forma */
const solucion2 = [];
const numeroAString = ("" + numeroAConvertir).split("");

for (let i = numeroAString.length - 1; i >= 0; i--) {
  solucion2.push(numeroAString[i]);
}
console.log(+solucion2.join(""));
