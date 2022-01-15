if (!(localStorage.getItem("token") || sessionStorage.getItem("token"))) {
  window.location.href = "/clase 31/login.html";
}
