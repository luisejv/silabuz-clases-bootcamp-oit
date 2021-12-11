/* if (carlos >= 21) {
  console.log("Es mayor de edad en todo el mundo.");
} else if (carlos >= 18) {
  console.log("Es mayor de edad en Peru.");
} else if (carlos >= 16) {
    console.log('Puede tener brevete')
} else if (carlos >= 10) {
    console.log('Adolescente')
} else {
  console.log("Es menor de edad");
}

if (carlos >= 17) {
  console.log("Es mayor de edad en Peru.");
  if (carlos >= 21) {
    console.log("Es mayor de edad en todo el mundo.");
  }
} */

// let carlos = 21;

// switch (carlos) {
//   case 21: {
//     console.log("Es mayor de edad en todo el mundo");
//   }
//   case 20:
//   case 19:
//   case 18: {
//     console.log("Es mayor de edad en Peru");
//   }
//   case 17:
//   case 14: {
//     console.log("Es adolescente");
//     break;
//   }
//   default: {
//     console.log("Esta es la instruccion por defecto");
//   }
// }

// let marvelys = "m";

// switch (marvelys) {
//   case "a": {
//     console.log('Es una "a"');
//     break;
//   }
//   case "m": {
//     console.log('Es una "m"');
//     break;
//   }
//   default: {
//     console.log("no es ninguna");
//   }
// }

// const tarjetaA = "4213 3634 3453 3636";
// const tarjetaB = "4550";

// switch (tarjetaA.substring(0, 4)) {
//   case "4213": {
//     console.log("Es tarjeta Visa");
//     break;
//   }
//   case "4214": {
//     console.log("Es credito visa");
//     break;
//   }
//   case "4550": {
//     console.log("Es mastercard");
//   }
// }

// const myArray = ["miguel", "angel", "rojas"];

// switch (myArray[1]) {
//   case "miguel":
//     console.log("Es Miguel");
//     break;
//   case "angel":
//     console.log("Es Angel");
// }

let confirmacion = true;
let accion = confirmacion ? "Let's do it" : "Not doing anything";

let guillermo = 18;
let mayorDeEdad = guillermo >= 18 ? "Es mayor de edad" : "No es mayor de edad";

/* if (guillermo >= 18) {
  if (guillermo >= 21) {
    mayorDeEdad = "Es mayor de edad en todo el mundo";
  } else {
    mayorDeEdad = "Es mayor de edad";
  }
} else {
  mayorDeEdad = "No es mayor de edad";
} */

console.log(mayorDeEdad);

// if (confirmacion) {
//   accion = "Let's do it";
// } else {
//   accion = "Not doing anything";
// }

// console.log(accion);
