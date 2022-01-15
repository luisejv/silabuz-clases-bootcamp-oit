const logoutButton = document.getElementById("logout");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    document.location.href = "/clase 31/index.html";
  });
}
