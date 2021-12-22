/* Ejercicio 1 */
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;
arreglo.forEach((numero) => (suma += numero));
// console.log(suma / arreglo.length);

// console.log(
//   arreglo.reduce((promedio, numero) => (promedio += numero / arreglo.length))
// );

/* Ejercicio 2 */
const arr = [
  { name: "person-1", age: 12 },
  { name: "person-2", age: 14 },
  { name: "person-3", age: 16 },
  { name: "person-4", age: 18 },
  { name: "person-5", age: 20 },
  { name: "person-6", age: 22 },
  { name: "person-7", age: 24 },
  { name: "person-8", age: 26 },
  { name: "person-9", age: 28 },
];

// console.log(arr.filter((persona) => persona.age >= 18));

/* Ejercicio 3 */
const arr2 = [
  { name: "person-1", age: 12 },
  { name: "person-2", age: 13 },
  { name: "person-3", age: 12 },
  { name: "person-4", age: 22 },
  { name: "person-5", age: 12 },
  { name: "person-6", age: 22 },
  { name: "person-7", age: 33 },
  { name: "person-8", age: 44 },
  { name: "person-9", age: 11 },
];

const calcularPromEdades = (personas) => {
  let promedio = 0;

  //   const edades = personas.map((persona) => persona.age);

  //   return edades.reduce((a, b) => (a += b)) / edades.length;

  personas.forEach((persona) => {
    promedio += persona.age;
  });

  return promedio / personas.length;
};

/* Ejercicio 4 */
const arr3 = [
  { name: "person-1", age: 12 },
  { name: "person-2", age: 13 },
  { name: "person-3", age: 12 },
  { name: "person-4", age: 22 },
  { name: "person-5", age: 12 },
  { name: "person-6", age: 22 },
  { name: "person-7", age: 33 },
  { name: "person-8", age: 44 },
  { name: "person-9", age: 11 },
];

const resultado = [];

// arr3.forEach((persona) => resultado.push(Object.values(persona)));
// console.log(resultado);

// console.log(arr3.map((persona) => [persona.name, persona.age]));

const filtrados = {
  mayoresDe10MenoresDe20: [],
  mayoresDe30: [],
};

arr3.filter((persona) => {
  persona.age >= 10 && persona.age <= 20;
});

filtrados.mayoresDe10MenoresDe20 = arr3.filter(
  (persona) => persona.age >= 10 && persona.age <= 20
);

filtrados.mayoresDe30 = arr3.filter((persona) => persona.age > 30);

console.log(filtrados);
