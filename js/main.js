let navBar = document.querySelector(".navBar");
let bxMenu = document.querySelector(".btn_header .bx-menu");
let bxClose = document.querySelector(".clackScreen .bx-x");
bxMenu.addEventListener("click", () => {
  navBar.classList.add("active");
});
bxClose.addEventListener("click", () => {
  navBar.classList.remove("active");
});

// header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", scrollY > 100);
});

// icon top
let iconTop = document.querySelector(".iconTop");
window.addEventListener("scroll", () => {
  iconTop.classList.toggle("active", scrollY > 100);
});
iconTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
