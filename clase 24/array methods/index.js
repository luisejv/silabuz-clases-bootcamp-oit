const alumnos = [
  { nombre: "Anllerlis Perez Cabeza", edad: 25 },
  { nombre: "Anthony Flores Flores", edad: 20 },
  { nombre: "Carlos Eduardo Gonzales Luque", edad: 27 },
  { nombre: "Daniel Jose Faria Fernández", edad: 18 },
  { nombre: "Gariannys De los Angeles Mariño Martínez", edad: 28 },
  { nombre: "Ingrid Marilyn Cisneros Auccatoma", edad: 22 },
  { nombre: "Jack Deyvi Gallardo Cisneros", edad: 27 },
  { nombre: "Jesus David Rodriguez Castillo", edad: 27 },
  { nombre: "Jose Alejandro Leon Martinez", edad: 29 },
  { nombre: "José Daniel Ñaccha Rodríguez", edad: 25 },
  { nombre: "Juan Wislee Ccorca Quispe", edad: 27 },
  { nombre: "Julio ricardo bolivar campos", edad: 22 },
  { nombre: "Leonidas Vladimir Alarcon Ramirez", edad: 28 },
  { nombre: "Lesfer Rovier Garcia fernandez", edad: 21 },
  { nombre: "Leyrin Bridneys Aguilar Jorge", edad: 27 },
  { nombre: "Luis Fernando Facundo Vargas", edad: 27 },
  {
    nombre: "Luis Gaston Valdiviezo Neyra",
    edad: 27,
    hobby: "escuchar musica",
  },
  { nombre: "Luis Guillermo Sanchez Vasquez", edad: 29 },
  { nombre: "Marvelys sollagne Torres flores", edad: 25 },
  { nombre: "Miguel Angel Rojas Diaz", edad: 26 },
  { nombre: "Miguel Angel Tenorio Rosales", edad: 18 },
  { nombre: "Vivian Escarlet Chinchilla González", edad: 28 },
  { nombre: "Yefer lesvier Garcia fernandez", edad: 29 },
  { nombre: "Yhonniel javier suarez bellorin", edad: 23 },
  { nombre: "Yosmar Lobo Lobo", edad: 19 },
];

/* ARRAY METHOD MAP */

const alumnosNuevo = [];

// for (let i = 0; i < alumnos.length; i++) {
//   const primerNombre = alumnos[i].nombre.split(" ")[0];
//   alumnosNuevo.push(primerNombre);
// }

// console.log(alumnosNuevo);

// const alumnosNuevo2 = alumnos.map((alumno) => alumno.nombre.split(" ")[0]);
// const alumnosNuevo3 = alumnos.map((alumno) => alumno.edad);

// console.log(alumnosNuevo2);
// console.log(alumnosNuevo3);

/* ARRAY METHOD FOREACH */

// for (let i = 0; i < alumnos.length; i++) {
//   const nombres = alumnos[i].nombre.split(" ");
//   console.log(nombres[nombres.length - 1]);
// }

// alumnos.forEach((alumno) => {
//   const nombres = alumno.nombre.split(" ");
//   console.log(nombres[nombres.length - 1]);
// });

// alumnos.forEach((alumno) => (alumno.edad = 30));

// console.log(alumnos);

/* ARRAY METHOD FILTER */
const alumnosMayoresDeEdad = alumnos.filter((alumno) => alumno.edad >= 25);

// console.log(alumnosMayoresDeEdad);

/* ARRAY METHOD EVERY */
const alumnosMayoresDe5Anhos = alumnos.every(
  // (alumno) => "nombre" in alumno && alumno.edad.length > 0
  (alumno) => alumno.edad > 20
);

// console.log(alumnosMayoresDe5Anhos);
// console.log(
//   alumnos.filter((alumno) => alumno.edad > 20).length == alumnos.length
// );

/* ARRAY METHOD SOME */
const algunoTieneHobby = alumnos.some((alumno) => "hobby" in alumno);

// console.log(algunoTieneHobby);

// console.log(alumnos.filter((alumno) => "hobby" in alumno));
// console.log(alumnos.filter((alumno) => "hobby" in alumno).length > 0);

/* ARRAY METHOD FINDINDEX */
const posicionPersona = alumnos.findIndex((alumno) =>
  alumno.nombre.startsWith("Felipe")
);

// console.log(posicionPersona);

/* ARRAY METHOD FIND */
const persona = alumnos.find((alumno) => alumno.nombre.startsWith("Yhonniel"));

// console.log(persona);

// let suma = 0;

// alumnos.forEach((alumno) => (suma += alumno.edad));

// console.log(suma);

// console.log(
//   alumnos.map((alumno) => alumno.edad).reduce((suma, edad) => (suma += edad))
// );

// console.log(
//   alumnos.reduce((mayorAlumno, alumno) => {
//     if (!mayorAlumno) {
//       mayorAlumno = alumno;
//     } else if (alumno.edad > mayorAlumno.edad) {
//       mayorAlumno = alumno;
//     }
//   })
// );

const person = {
  nombre: "Perico",
  apellidos: "De los Palotes",
  edad: 29,
  colorFavorito: "verde",
  hobby: "Molestar a Yefer",
  bebidaFavorita: "Ronaldinho",
  sexo: "Masculino",
  altura: 1.85,
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
