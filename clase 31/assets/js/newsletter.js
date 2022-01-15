const newsletterInput = document.getElementById("newsletter");
const newsletterButton = document.getElementById("newsletter-btn");

newsletterButton.addEventListener("click", () => {
  if (
    newsletterInput.value.length > 0 &&
    newsletterInput.value.match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    )
  ) {
    fetch("https://silabuz-api-project.herokuapp.com/marketing/subscribe/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newsletterInput.value }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        newsletterInput.value = "";
      })
      .catch((error) => console.log(error));
  } else {
    console.log("Datos erroneos");
  }
});
