const button = document.querySelector(".grocery-btn");
const input = document.querySelector(".grocery-input");
const lista = document.getElementById("list");
const eraseAll = document.getElementById("eraseAll");

let edit = false;
let editProducto;
let contadorBotones = 0;

button.addEventListener("click", () => {
  if (!edit) {
    const producto = document.createElement("div");
    producto.classList = "row align-items-center";
    producto.innerHTML = `
                <div class="col-8">${input.value}</div>
                <div class="col-4">
                  <div class="d-flex">
                   <button class="list-btn" id=${
                     "edit" + contadorBotones
                   }>edit</button>
                    <button class="list-btn" id=${
                      "erase" + contadorBotones
                    }>erase</button>
                  </div>
                </div>`;
    input.value = "";
    lista.appendChild(producto);
    const editButton = document.getElementById(`edit${contadorBotones}`);
    const erase = document.getElementById(`erase${contadorBotones}`);
    erase.addEventListener("click", () => {
      producto.remove();
    });
    editButton.addEventListener("click", () => {
      input.value = producto.firstElementChild.innerText;
      edit = true;
      editProducto = producto;
    });
    contadorBotones++;
  } else {
    editProducto.firstElementChild.innerText = input.value;
    input.value = "";
    edit = false;
  }
});

eraseAll.addEventListener("click", () => {
  lista.innerHTML = ``;
});
