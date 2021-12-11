console.log("[");
let contador = 0;
let contador2 = 0;
let lineas = 1;
let linea = "";

while (contador <= 50) {
  if (contador2 < 8) {
    linea += contador + ", ";
    contador2++;
    contador += 2;
    if (contador > 50) {
      console.log(linea);
    }
  } else {
    console.log(linea);
    contador2 = 0;
    linea = "";
    lineas++;
  }
}

console.log("]");

/* 
    [
        0, 2, 4, 6, 8, 10,
        12, 14, 16, 18, 8, 10,
        0, 2, 4, 6, 8, 10,
        0, 2, 4, 6, 8, 50,
    ]
*/
