const url = "https://silabuz-api-project.herokuapp.com/products/products/";

const contenedor = document.querySelector("#card-container .container .row");

console.log(contenedor);

/* GET POST DELETE PUT */

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    response.slice(0, 10).forEach((articulo) => {
      const {
        image_url,
        name,
        price,
        category: { name: categoria },
      } = articulo;
      const card = document.createElement("div");
      card.className = "col-3";
      card.innerHTML = `
        <div class="card border-success">
            <img class="card-img-top" src=${image_url} alt=${name}>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${categoria}</p>
                <p class="card-text"><small class="text-danger">${price} $</small></p>
                <button class="btn btn-success"             data-bs-toggle="modal" data-bs-target="#enroll")>Editar articulo</button>
            </div>
        </div>
        `;
      contenedor.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const DTO = {
  availability: "IN_STOCK",
  category: { pk: 5, name: "Jardin" },
  created: "2022-01-12",
  created_by: null,
  description: "1212",
  discount_price: 0,
  image_url:
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-600w-1481369594.jpg",
  is_active: true,
  name: "1212",
  pk: 411,
  price: 12,
  updated: "2022-01-12",
};
