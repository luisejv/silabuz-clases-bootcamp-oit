const number = document.querySelector(".contador");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

const container = document.querySelector(".container");

add.addEventListener("click", () => {
  let contador = +number.innerText;
  contador++;
  number.innerText = contador;
  checkIfChanges(contador);
});

reset.addEventListener("click", () => {
  number.innerText = 0;
});

decrease.addEventListener("click", () => {
  let contador = +number.innerText;
  contador--;
  number.innerText = contador;
  checkIfChanges(contador);
});

const checkIfPrime = (numero) => {
  let contador = 2;
  let esPrimo = true;

  while (esPrimo && contador < numero) {
    if (numero % contador == 0) {
      esPrimo = false;
    } else {
      contador++;
    }
  }
  return esPrimo;
};

const checkIfChanges = (numero) => {
  container.style.backgroundColor = numero % 2 == 0 ? "antiquewhite" : "white";
  number.style.color = numero % 3 == 0 ? "blue" : "green";
  number.style.fontFamily = numero % 3 == 0 ? "Comic Sans" : "Helvetica Neue";
  add.style.color = numero % 5 == 0 ? "white" : "black";
  add.style.backgroundColor = numero % 5 != 0 ? "#ccc" : "black";
  reset.style.color = numero % 5 == 0 ? "white" : "black";
  reset.style.backgroundColor = numero % 5 != 0 ? "#ccc" : "black";
  decrease.style.color = numero % 5 == 0 ? "white" : "black";
  decrease.style.backgroundColor = numero % 5 != 0 ? "#ccc" : "black";
  if (checkIfPrime(numero)) {
    alert("Es un numero primo");
  }
};
