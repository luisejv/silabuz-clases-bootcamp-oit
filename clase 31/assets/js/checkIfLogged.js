const navmenu = document.getElementById("navmenu");
const homeLanding = document.getElementById("home-landing");

if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
  navmenu.insertAdjacentHTML(
    "beforeend",
    `<ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="profile.html">Bienvenido, ${localStorage.getItem(
            "username"
          )}</a>
        </li>
        <li>
          <a class="nav-link" id="logout">Logout</a>
        </li>
      </ul>`
  );
  if (homeLanding) {
    homeLanding.insertAdjacentHTML(
      "beforeend",
      `<button
        class="btn btn-success btn-lg m-3 float-end"
        data-bs-toggle="modal"
        data-bs-target="#enroll"
      >
        Crear Productos
      </button>`
    );
  }
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
