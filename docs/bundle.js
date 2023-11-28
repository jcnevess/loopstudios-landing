function toggleNavbar() {
  const hamburguer = document.getElementById("navbar-hamburguer");
  const close = document.getElementById("navbar-close");
  const navbar = document.getElementById("navbar-collapsable");
  const navbarControls = document.getElementById("navbar-nav-collapsable");

  if (close.classList.contains("hidden-sm")) {
    // Open nav
    close.classList.remove("hidden-sm");
    hamburguer.classList.add("hidden-sm");
    navbar.classList.add("navbar-opened-sm");
    navbarControls.classList.remove("hidden-sm");
  } else {
    // Close
    close.classList.add("hidden-sm");
    hamburguer.classList.remove("hidden-sm");
    navbar.classList.remove("navbar-opened-sm");
    navbarControls.classList.add("hidden-sm");
  }
}
