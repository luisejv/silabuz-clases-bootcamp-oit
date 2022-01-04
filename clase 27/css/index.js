const boton = document.getElementById("toggle");

const parrafo = document.querySelector("div");

boton.addEventListener("click", () => {
  parrafo.className = parrafo.classList.contains("nueva")
    ? "fondo bordes size"
    : "nueva";
});
