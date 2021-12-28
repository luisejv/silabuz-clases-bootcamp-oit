/* Ejercicio 1 */
const desplazarElementos = (array, elemento, index) => {
  const repetidos = array.filter((iter) => iter == elemento).length;
  const arraySinRepetidos = array.filter((iter) => iter != elemento);

  for (let i = 0; i < repetidos; i++) {
    arraySinRepetidos.splice(index, 0, elemento);
  }

  return arraySinRepetidos;
};

const array = [1, 2, 2, 3, 4, 2, 5, 6, 7, 8, 9, "hello", "silabuz"];

console.log(desplazarElementos(array, 2, 4));

/* Ejercicio 2 */
const personas = [
  { name: "alexander febres", age: 12, nacionalidad: "Venezolano" },
  { name: "jorge medina", age: 13, nacionalidad: "Peruano" },
  { name: "edwin gonzales", age: 78, nacionalidad: "Chileno" },
  { name: "pedro ramirez", age: 22, nacionalidad: "Mexicano" },
  { name: "juan rojas", age: 12, nacionalidad: "Argentino" },
  { name: "luis paredes", age: 64, nacionalidad: "Canadiense" },
  { name: "Christian guitierrez", age: 55, nacionalidad: "Aleman" },
  { name: "manuel", age: 44, nacionalidad: "Uruguayo" },
  { name: "roberth", age: 32, nacionalidad: "Colombiano" },
];

const categorias = {
  menoresEdad: [],
  mayoresEdad: [],
  terceraEdad: [],
};

personas.forEach((persona) => {
  if (persona.age < 18) {
    categorias.menoresEdad.push(persona);
  } else if (persona.age >= 18 && persona.age <= 59) {
    categorias.mayoresEdad.push(persona);
  } else {
    categorias.terceraEdad.push(persona);
  }
});

console.log(categorias);

Object.keys(categorias).forEach((categoria) => {
  categorias[categoria].sort((a, b) =>
    a.nacionalidad.localeCompare(b.nacionalidad)
  );
});

console.log(categorias);

Object.keys(categorias).forEach((categoria) => {
  categorias[categoria] = categorias[categoria].filter(
    (persona) => persona.name.split(" ").length != 1
  );
});

console.log(categorias);

/* Ejercicio 3 */
const abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const abecedarioRot13 = [
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];

const cesarCypher = (frase) => {
  const fraseMayus = frase.toUpperCase();
  let resultado = "";
  fraseMayus.split("").forEach((letra) => {
    const pos = abecedario.findIndex((iter) => iter == letra);
    if (pos >= 0) {
      resultado += abecedarioRot13[pos];
    } else {
      resultado += letra;
    }
  });
  return resultado;
};

console.log(cesarCypher("HOLA SILABUZ"));
