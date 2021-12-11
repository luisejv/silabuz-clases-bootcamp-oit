// console.log("prueba");
// console.log("Yefer");
// console.log("Yhonniel");
// console.log("Marvelys");

// esto es un comentario de una linea
/* Este es de
    varias
    lineas
*/
// LO SIGUIENTE DA ERROR
// console.log("variable1 ->", variable1);

function scopes() {
  variable1 = 10;
  console.log("variable1 dentro de funcion: ", variable1);
}

let variable1 = 1;
let variable2 = 2;
let variable3 = 3;

console.log("variable1: ", variable1);

if (true) {
  let variable1 = 17;
  console.log("variable1 dentro de if: ", variable1);
  console.log(variable1 + variable1);
}

console.log("variable1: ", variable1);

scopes();

console.log("variable1: ", variable1);


const objeto;