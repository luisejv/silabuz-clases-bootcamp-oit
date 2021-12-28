// document.querySelectorAll("div");
// document.querySelectorAll(".titulo");
// document.querySelectorAll("#nombre");

// document.querySelector(".titulo");

// document.querySelector("div");

// document.getElementsByClassName("titulo");

const titular = document.getElementsByClassName("titulo");

console.log(titular);

const titulo = document.querySelectorAll("h1");

console.log(titulo);

// titulo.style.color = "green";
// titulo.style.fontFamily = "Helvetica";

const colorRandom = () => {
  return Math.floor(Math.random() * 255);
};

const colores = [
  `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`,
  "blue",
  "green",
];

titulo.forEach((nodo) => {
  nodo.style.color = colores[Math.floor(Math.random() * 3)];
  nodo.style.fontFamily = "Helvetica";
});

const newDiv = document.createElement("div");
newDiv.id = "page";
newDiv.className = "data";
newDiv.style.color = "white";
newDiv.style.backgroundColor = "blue";
// newDiv.textContent = "Officia non occaecat laboris aliqua veniam id.";
// newDiv.style = 'background-color: blue;'
// newDiv.innerHTML = 'Contenido';
newDiv.innerHTML = "<div>Hola Carlos</div>";

document.body.appendChild(newDiv);
