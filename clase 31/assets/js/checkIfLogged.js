const navmenu = document.getElementById("navmenu");

if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
  navmenu.insertAdjacentHTML(
    "beforeend",
    `<ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link">Bienvenido, ${localStorage.getItem(
                "username"
              )}</a>
            </li>
          </ul>`
  );
} else {
  navmenu.insertAdjacentHTML(
    "beforeend",
    `
    <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="login.html" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="signup.html" class="nav-link">Sign up</a>
            </li>
          </ul>`
  );
}
