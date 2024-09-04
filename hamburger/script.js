let icon = document.querySelector(".hambergur");
let nav = document.querySelector(".nav-item");

icon.addEventListener("click", () => {
  nav.classList.toggle("showData");
  console.log(nav);
});
