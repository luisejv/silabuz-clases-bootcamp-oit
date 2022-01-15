const lista = document.getElementById("lista");

fetch(
  `https://silabuz-api-project.herokuapp.com/products/products/?created_by__username=${localStorage.getItem(
    "username"
  )}`
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    response.forEach((articulo) => {
      const {
        pk,
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
                <button class="btn btn-success editButtons" id=${pk} data-bs-toggle="modal" data-bs-target="#enroll">Editar articulo</button>
            </div>
        </div>
        `;
      lista.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(error);
  });
