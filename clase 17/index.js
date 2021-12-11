/* 
Sintaxis:
if (condicion) {
    instrucciones;
}; */

/* Ejemplos de condicion */
let bridneys = 11;

console.log(bridneys);

/* 1er ejemplo */
if (bridneys) {
  console.log("Hola!");
}

/* 2do ejemplo */
if (bridneys != 11) {
  console.log("Si es diferente de 11");
} else {
  console.log("Es igual 11");
}

/* 3er ejemplo */
if (bridneys > 11 && bridneys < 21) {
  console.log("es mayor a 11 y menor a 21");
}

/* 4to ejemplo */
if (bridneys > 11 && bridneys < 18 && bridneys > 21) {
  console.log("es mayor a 11 y menor a 21");
}

/* 5to ejemplo */
if (!(bridneys > 11 || bridneys < 18) || bridneys > 21) {
  console.log("es mayor a 11 y menor a 21");
}

/* 
    Operadores binarios:
    > : mayor que
    < : menor que
    >= : mayor igual que
    <= : menor igual que
    == : igual a 
    != : diferente de
    && : y/and
    || : o/or

    Operador unario:
    ! : negacion/not

    Falsy Values:
    undefined, null, NaN, '', 0, false
*/
