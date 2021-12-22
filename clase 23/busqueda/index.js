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
  { nombre: "Luis Gaston Valdiviezo Neyra", edad: 27 },
  { nombre: "Luis Guillermo Sanchez Vasquez", edad: 29 },
  { nombre: "Marvelys sollagne Torres flores", edad: 25 },
  { nombre: "Miguel Angel Rojas Diaz", edad: 26 },
  { nombre: "Miguel Angel Tenorio Rosales", edad: 18 },
  { nombre: "Vivian Escarlet Chinchilla González", edad: 28 },
  { nombre: "Yefer lesvier Garcia fernandez", edad: 29 },
  { nombre: "Yhonniel javier suarez bellorin", edad: 23 },
  { nombre: "Yosmar Lobo Lobo", edad: 19 },
];

const binarySearch = (array, busqueda) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid].nombre == busqueda) {
      return array[mid];
    } else if (array[mid].nombre < busqueda) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log("No encontré a la persona 😥");
};

console.log(binarySearch(alumnos, "Yefer lesvier Garcia fernandez"));
