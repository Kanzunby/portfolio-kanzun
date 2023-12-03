//Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Options
const options = document.querySelector("#options");
const navMenu = document.querySelector("#nav-menu");

options.addEventListener("click", function () {
  options.classList.toggle("options-active");
  navMenu.classList.toggle("hidden");
});
