let hamburger = document.getElementById("hamburger");
let navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-links-active");
});
