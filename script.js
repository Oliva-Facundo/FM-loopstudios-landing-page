const navbar = document.querySelector(".list");
const btnHamburger = document.getElementById("hamburger");
const btnClose = document.getElementById("close");
const header = document.querySelector(".header");
const body = document.body;
const containerCreations = document.querySelector(".creations");

const openNavbar = () => {
  header.style.background = "black";
  navbar.style.top = "7rem";
  btnHamburger.style.display = "none";
  btnClose.style.display = "block";
  body.style.overflow = "hidden";
};

const closeNavbar = () => {
  header.style.background = "";
  navbar.style.top = "-100%";
  btnClose.style.display = "none";
  btnHamburger.style.display = "block";
  body.style.overflow = "";
};

const medirWidth = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth >= 1024) {
    closeNavbar();
  }
};

btnHamburger.addEventListener("click", openNavbar);
btnClose.addEventListener("click", closeNavbar);
window.addEventListener("resize", medirWidth);
