function myFunction(nombre) {
  console.log("Estoy llamando a myFunction ", nombre);
  console.log(`Hola ${nombre}`);
  function myFunctionInside() {
    console.log("Functioninside");
  }
  myFunctionInside();
}

const myFunction2 = function (parametros) {
  console.log("Estoy llamando a myFunction2");
};

let persona = "Lesfer";

// myFunction(persona);
myFunction2();

const sumarNumeros = function (a, b) {
  return a + b;
};

console.log(sumarNumeros(15, 7));

const sumarORestar = function (a, b, operacion) {
  if (operacion == "+") {
    return a + b;
  } else if (operacion == "-") {
    return a - b;
  } else {
    return a * b;
  }
};

(function myFunction(nombre) {
  console.log("Estoy llamando a myFunction ", nombre);
  console.log(`Hola ${nombre}`);
  function myFunctionInside() {
    console.log("Functioninside");
  }
  myFunctionInside();
})(persona);

const myFunction3 = (function (nombre) {
  console.log("Estoy llamando a myFunction ", nombre);
  console.log(`Hola ${nombre}`);
  function myFunctionInside() {
    console.log("Functioninside");
  }
  myFunctionInside();
})(persona);

/* Funciones flecha */
const arrowFunction = (nombre) => {
  console.log(`Hola ${nombre}`);
};

// const arrowFunction = (nombre) => console.log(`Hola ${nombre}`);
arrowFunction("Yhonniel");
arrowFunction("Marvelys");

const multiplicar = (a, b) => a * b;

const multiplicarODividir = (a, b, signo) => (signo == "*" ? a * b : a / b);

console.log(multiplicar(5, 6));

const funcionFlecha = (parametros) =>
  console.log("Estoy llamando a funcionFlecha");
