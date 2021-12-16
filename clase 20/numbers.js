const numeroPrueba = Number.MIN_VALUE;

console.log(Number.isFinite(Number.POSITIVE_INFINITY));

let variable = 4;

console.log(Number.isInteger(variable));
let variable2 = 4 / "hola";
console.log(variable2);
console.log(Number.isNaN(variable2));

const bridneys = "10000";
console.log(bridneys);
console.log(Number.parseInt(bridneys, 2));

const julio = "10.55";
console.log(julio);
console.log(Number.parseInt(julio));

const yhonniel = "4.5";
console.log(yhonniel);
console.log(Number.parseFloat(yhonniel));

const numeroDecimal = 20 / 3;
console.log(numeroDecimal);
console.log(numeroDecimal.toFixed(2));
console.log(numeroDecimal.toFixed(5));

console.log(numeroDecimal.toExponential());
console.log(numeroDecimal.toPrecision(4));
