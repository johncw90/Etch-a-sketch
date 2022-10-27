let grid = document.querySelector(".grid");
let resizeBtn = document.querySelector(".resize");

// for (let i = 0; i < 256; i++) {
//   box.addEventListener("mouseover", () => {
//     box.style.backgroundColor = "red";
//   });
// }

resizeBtn.addEventListener("click", () => {
  let size = getSize();
  createGrid(size);
});

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "red";
    });
  }
}

function getSize() {
  let input = prompt("1-100");
}

createGrid(96);
