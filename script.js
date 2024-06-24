let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = function () {
  if (navbar.classList.contains("active")) {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Photographer",
    "Youtuber",
  ],
  typeSpeed: 80,
  backspeed: 80,
  backDelay: 1200,
  loop: true,
});
