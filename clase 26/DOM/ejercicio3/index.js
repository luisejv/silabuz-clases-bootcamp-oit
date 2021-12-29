const boton = document.querySelector("#btn");

const select = document.getElementById("select");

const options = document.querySelectorAll("option");

boton.onclick = () => {
  const valueToRemove = select.value;
  options.forEach((node) => {
    if (node.value == valueToRemove) {
      node.remove();
    }
  });
};
