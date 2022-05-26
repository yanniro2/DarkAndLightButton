const dark = document.querySelector("#dark");
const light = document.querySelector("#light");
const dark_label = document.querySelector(".dark_label");
const container = document.querySelector(".container");

// if (dark_label.checked == true) {
//   console.log("checked");
// }

function add() {
  if (dark.checked == false) {
    container.classList.toggle("dark-mode");
  }
}
