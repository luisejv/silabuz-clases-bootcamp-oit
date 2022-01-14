const url = "https://silabuz-api-project.herokuapp.com/authentication/login/";

const form = document.getElementById("login-form");
const username = document.getElementsByName("username")[0];
const password = document.getElementsByName("password")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (username.value && password.value) {
    const body = {
      username: username.value,
      password: password.value,
    };

    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if ("detail" in res) {
          form.insertAdjacentHTML(
            "beforeend",
            "<span>Credenciales erroneas</span>"
          );
        } else {
          const { token, username } = res;
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          document.location.href = "/clase%2031/index.html";
        }
      })
      .catch((error) => console.log(error));
  }
});
