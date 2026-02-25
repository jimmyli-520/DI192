console.log("JS is running");

const palette = document.getElementById("palette");
const canvas = document.getElementById("canvas");
const clearButton = document.querySelector(".clear-button");

console.log(clearButton);

const colors = [
  "red", "orangered", "orange",
  "yellow", "yellowgreen", "lightgreen",
  "green", "turquoise", "cyan",
  "lightskyblue", "dodgerblue", "blue",
  "darkblue", "indigo", "darkmagenta",
  "violet", "lightpink", "lightgray",
  "gray", "black", "white"
];

colors.forEach(color => {
  const swatch = document.createElement("div");
  swatch.classList.add("swatch");
  swatch.style.backgroundColor = color;
  palette.appendChild(swatch);
});

for (let i = 0; i < 50 * 30; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  canvas.appendChild(cell);
}

let selectedColor = "";

palette.addEventListener("click", (e) => {
  if (e.target.classList.contains("swatch")) {
    selectedColor = e.target.style.backgroundColor;
  }
});

canvas.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = selectedColor;
  }
});

clearButton.addEventListener("click", () => {
  console.log("button clicked");
  document.querySelectorAll(".cell").forEach(cell => {
    cell.style.backgroundColor = "";
  });
});

let isPainting = false;

canvas.addEventListener("mousedown", () => {
  isPainting = true;
});

canvas.addEventListener("mouseup", () => {
  isPainting = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPainting && e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = selectedColor;
  }
});

canvas.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = selectedColor;
  }
});