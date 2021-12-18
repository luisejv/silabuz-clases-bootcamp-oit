const digitos = 6;
const numeroAFormatear = 50.23556478145;

const formatear = (numero, size) => {
  const numeroArreglo = numero.toString().split(".");
  return numeroArreglo[0] + "." + numeroArreglo[1].substring(0, size);
};

console.log(+formatear(numeroAFormatear, digitos));
