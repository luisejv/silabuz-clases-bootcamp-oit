const newArray = new Array(5);

const newArray2 = new Array("Vivian", "Gariannys", "Guillermo", "Jack");

const newArray3 = [1, 2, 3, 4];

// const numeros = [28, 69, 86, 5, 72, 13, 304];

const miObjeto = {
  nombre: "Luise",
  apellido: "Jauregui",
  amigos_imaginarios: ["Yhonniel"],
};

// console.log(miObjeto.amigos_imaginarios[0]);

const miObjeto2 = {
  nombre: "Bridneys",
  apellido: "Aguilar",
  amigos_imaginarios: ["Carlos"],
};

const personas = [
  {
    nombre: "Luise",
    apellido: "Jauregui",
    amigos_imaginarios: ["Yhonniel", "Fernando", "Vivian"],
  },
  {
    nombre: "Bridneys",
    apellido: "Aguilar",
    amigos_imaginarios: ["Carlos"],
  },
];

for (let j = 0; j < personas.length; j++) {
  console.log(personas[j].nombre);
}

personas.push({
  nombre: "Jack",
  apellido: "Gallardo",
  amigos_imaginarios: ["Daniel", "Guillermo"],
});

console.log(personas);

// const arregloMiguel = Array.from(personas, function (persona) {
//   return persona.nombre;
// });

// const arregloMiguel = personas.map((persona) => persona.nombre);

const arregloMiguel = [];

for (let i = 0; i < personas.length; i++) {
  arregloMiguel.push(personas[i].nombre + " " + personas[i].apellido);
}

console.log(arregloMiguel);

const arregloAmigosImaginarios = [];

for (let i = 0; i < personas.length; i++) {
  for (let j = 0; j < personas[i].amigos_imaginarios.length; j++) {
    arregloAmigosImaginarios.push(personas[i].amigos_imaginarios[j]);
  }
}

console.log(arregloAmigosImaginarios);

// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i].amigos_imaginarios);
// }

const numeros = [28, 69, 86, 5, 72, 13, 304];

/* Slice */
const numeros2 = numeros.slice(2, 4);

/* Concat */
const numeros3 = numeros.concat(numeros2);

/* Splice */
numeros.splice(2, 2);

numeros.splice(2, 0, "Carlos");

/* Join */
console.log(numeros.join("-"));
