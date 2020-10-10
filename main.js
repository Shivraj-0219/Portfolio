const navMenu = document.getElementById("nav-menu"),
  showMenu = document.getElementById("nav-show"),
  closeMenu = document.getElementById("nav-close");

// SHOW
showMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
