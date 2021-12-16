// let miCadena = "Hola chicos, qué tal?";

// console.log(miCadena);

// console.log(miCadena.length);

// const vivian = "Vivian";
// console.log(vivian.length);

// const anthony = "Anthony";
// console.log(anthony.length);

// console.log(vivian[vivian.length - 1]);
// console.log(anthony[anthony.length - 1]);

// console.log(anthony.charAt(anthony.length - 1));

// console.log(miCadena + " " + anthony);
// console.log(miCadena.concat(" ", anthony));

// console.log(anthony.indexOf("n"));
// console.log(anthony.lastIndexOf("n"));

// /* StartsWith */
// console.log(anthony.startsWith("nt"));

const alumnos = [
  "Leonidas Vladimir Alarcon Ramirez",
  "Jack Deyvi Gallardo Cisneros",
  "Luis Guillermo Sanchez Vasquez",
  "Juan Wislee Ccorca Quispe",
  "Daniel Jose Faria Fernández",
  "Vivian Escarlet Chinchilla González",
  "Yosmar Lobo Lobo",
  "Marvelys sollagne Torres flores",
  "Miguel Angel Tenorio Rosales",
  "Yhonniel javier suarez bellorin",
  "Jesus David Rodriguez Castillo",
  "José Daniel Ñaccha Rodríguez",
  "Julio ricardo bolivar campos",
  "Luis Fernando Facundo Vargas",
  "Lesfer Rovier Garcia fernandez",
  "Leyrin Bridneys Aguilar Jorge",
  "Miguel Angel Rojas Diaz",
  "Ingrid Marilyn Cisneros Auccatoma",
  "Anthony Flores Flores",
  "Luis Gaston Valdiviezo Neyra",
  "Jose Alejandro Leon Martinez",
  "Yefer lesvier Garcia fernandez",
  "Anllerlis Perez Cabeza",
  "Carlos Eduardo Gonzales Luque",
  "Gariannys De los Angeles Mariño Martínez",
];

// let sumaPersonas = 0;

// for (let cry = 0; cry < alumnos.length; cry++) {
//   console.log(alumnos[cry].toUpperCase());
//   if (alumnos[cry].startsWith("A")) {
//     sumaPersonas++;
//   }
// }

// console.log(sumaPersonas);

// let sumaPersonas = 0;

for (let i = 0; i < alumnos.length; i++) {
  const personaMayus = alumnos[i].toUpperCase().split(" ");
  //   console.log(personaMayus);
  for (let j = 0; j < personaMayus.length; j++) {
    if (personaMayus[j].includes("EN")) {
      console.log(personaMayus[j]);
      sumaPersonas++;
    }
  }
}

// console.log(sumaPersonas);

const miguel = " 252525 Miguel454525 Angel 245245 Miguel 134513 5135135";

const miguelRepetido = miguel.repeat(4);

const miguelMayusculas = miguel.toUpperCase();
const miguelMinusculas = miguel.toLowerCase();

const yhonniel = "        Yhonniel            ";
const yhonnielCortado = yhonniel.trim();

const nuevaPersona = miguel.replace("Miguel", "Luis");
const nuevaPersona2 = miguel.replaceAll("Miguel", "Luis");
const nuevaPersonaSinNumeros = miguel.replaceAll(/[0-9]*/g, "");

console.log(miguelRepetido);
console.log(miguelMayusculas);
console.log(miguelMinusculas);

console.log(yhonniel);
console.log(yhonnielCortado);

console.log(nuevaPersona);
console.log(nuevaPersona2);
console.log(nuevaPersonaSinNumeros);

/* 10/12/2021 */
/* 9:58:52 */

console.log(miguel.split(":"));

console.log(miguel.substring(8, 14));

console.log(miguel.slice(8, 14));

const preguntas = "preguntas";

console.log(miguel.substring(8, 14) + " contestó bien sus " + preguntas);
console.log(`${miguel.substring(8, 14)} contestó bien sus ${preguntas}`);
