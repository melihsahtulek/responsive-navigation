const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

window.addEventListener("resize", () => {
  burger.setAttribute("class", "burger open");
  nav.setAttribute("class", "nav mobile__close");
});

burger.addEventListener("click", () => {
  if (burger.getAttribute("class") === "burger open") {
    burger.setAttribute("class", "burger close");
    nav.setAttribute("class", "nav mobile__show");
  } else {
    burger.setAttribute("class", "burger open");
    nav.setAttribute("class", "nav mobile__close");
  }
});

document.addEventListener("scroll", (e) => {
  let scroll = this.scrollY;
  if (scroll >= 100) {
    header.setAttribute("class", "header change__bg");
  } else {
    header.setAttribute("class", "header");
  }
});
