let bgChange = document.querySelector(".bg-change");
let width = document.querySelector(".width");
let height = document.querySelector(".height");

let displayDimensions = () => {
  width.textContent = window.innerWidth;
  height.textContent = window.innerHeight;
};

window.onload = displayDimensions;
window.onresize = displayDimensions;
