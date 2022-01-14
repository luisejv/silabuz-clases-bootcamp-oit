const form = document.getElementById("signup");

const url = "https://silabuz-api-project.herokuapp.com/authentication/sign-up/";
const username = document.getElementsByName("username")[0];
const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const body = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(body);

  fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.location.href = "/clase%2031/login.html";
    })
    .catch((error) => console.log(error));
});
