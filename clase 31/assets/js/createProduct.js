const botonProducto = document.getElementById("submit-product");
const nombreInput = document.getElementById("product-name");
const imagenInput = document.getElementById("product-image-url");
const descriptionInput = document.getElementById("product-description");
const priceInput = document.getElementById("product-price");
const categoryInput = document.getElementById("category-id");

botonProducto.addEventListener("click", (event) => {
  event.preventDefault();
  const body = {
    name: nombreInput.value,
    description: descriptionInput.value,
    category_id: categoryInput.value,
    price: priceInput.value,
    image_url: imagenInput.value,
  };
  if (sessionStorage.getItem("pkProduct")) {
    fetch(
      `https://silabuz-api-project.herokuapp.com/products/products/${sessionStorage.getItem(
        "pkProduct"
      )}/`,
      {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  } else {
    fetch("https://silabuz-api-project.herokuapp.com/products/products/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }
});
