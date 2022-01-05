const registro = document.getElementById("registro");

// registro.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("enviando datos...");

//   const nombres = document.getElementsByName("name")[0];
//   const apellidos = document.getElementsByName("lastname")[0];
//   const correo = document.getElementsByName("email")[0];
//   const edad = document.getElementsByName("age")[0];
//   const stack = document.getElementsByName("stack");
//   const tyc = document.getElementsByName("tyc")[0];
//   const birthdate = document.getElementsByName("birthdate")[0];

//   let selectedStack;

//   stack.forEach((nodo) => {
//     if (nodo.checked) {
//       selectedStack = nodo.defaultValue;
//     }
//   });

//   if (tyc.checked) {
//     const message = document.getElementById("errorName");
//     if (nombres.value.length == 0) {
//       if (message.classList.contains("hidden")) {
//         message.classList.remove("hidden");
//       }
//       message.innerHTML = "Este campo es obligatorio";
//     } else if (nombres.value.length < 3) {
//       if (message.classList.contains("hidden")) {
//         message.classList.remove("hidden");
//       }
//       message.innerHTML = "Tu nombre debe tener mas de 3 letras";
//     } else {
//       message.classList.add("hidden");
//       console.log("Datos: ", {
//         nombres: nombres.value,
//         apellidos: apellidos.value,
//         correo: correo.value,
//         edad: edad.value,
//         stack: selectedStack,
//         tyc: tyc.checked,
//         fechaNacimiento: birthdate.value,
//       });
//     }
//   } else {
//     alert("Debes aceptar los terminos y condiciones!");
//   }
// });

const nombres = document.getElementsByName("name")[0];
const apellidos = document.getElementsByName("lastname")[0];
const edad = document.getElementsByName("age")[0];
const correo = document.getElementsByName("email")[0];
const fechaNacimiento = document.getElementsByName("birthdate")[0];
const tyc = document.getElementsByName("tyc")[0];
const stack = document.getElementsByName("stack");

if (localStorage.getItem("nombres") != "") {
  nombres.value = localStorage.getItem("nombres");
}
let selectedStack;

stack.forEach((nodo) => {
  if (nodo.checked) {
    selectedStack = nodo.defaultValue;
  }
});

nombres.addEventListener("change", () => {
  localStorage.setItem("nombres", nombres.value);
});

apellidos.addEventListener("change", () => {
  localStorage.setItem("apellidos", apellidos.value);
});
