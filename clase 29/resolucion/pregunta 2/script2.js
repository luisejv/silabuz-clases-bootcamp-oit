const botones = document.querySelectorAll(".card-btn");
const cards = document.querySelectorAll(".question-row");

botones.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    const parrafo = document.createElement("p");
    const divider = document.createElement("hr");
    divider.style.width = "100%";
    parrafo.innerText =
      "Minim ex occaecat proident occaecat id mollit ea cillum dolore cillum laborum culpa. Aute dolor anim dolor adipisicing mollit tempor irure incididunt aliquip. In mollit fugiat irure laborum incididunt incididunt ipsum id mollit adipisicing pariatur nostrud.";

    const id = event.target.id;

    event.target.innerText = "-";

    cards[+id[id.length - 1] - 1].parentElement.appendChild(divider);
    cards[+id[id.length - 1] - 1].parentElement.appendChild(parrafo);
  });
});
