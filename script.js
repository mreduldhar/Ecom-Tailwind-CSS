const navDialog = document.querySelector("#navDialog");
const bar = document.querySelector("#bar");
const xmark = document.querySelector("#xmark");

function handleMenu() {
  // Toggle visibility of the navDialog
  navDialog.classList.toggle("hidden");

  // Toggle visibility of the buttons
  bar.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
}
