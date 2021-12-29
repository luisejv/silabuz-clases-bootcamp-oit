const titulo = document.getElementById("titular");

const parrafo = document.getElementById("parrafo");

const elementosTitulo = document.getElementsByClassName("titulo");

const headers1 = document.getElementsByTagName("h1");

const names = document.getElementsByName("prueba");

const headers2 = document.querySelector("#parrafo");

const divs = document.querySelectorAll("div");

const newDiv = document.createElement("div");

// newDiv.style.color = 'blue';
// newDiv.style.backgroundColor = "green";
newDiv.className = "newClass";
newDiv.textContent = "Hola";
// newDiv.innerHTML = '<div>prueba div interno</div>';
