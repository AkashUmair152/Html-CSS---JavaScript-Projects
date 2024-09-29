// Get DOM elements
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

// Open Modal when button is clicked
openModalBtn.addEventListener("click", function () {
  modal.classList.add("active");
});

// Close Modal when close button is clicked
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});

// Close Modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
