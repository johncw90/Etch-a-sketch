let grid = document.querySelector(".grid");
let resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", () => {
  let size = getSize();
  createGrid(size);
});

function createGrid(size) {
  // Clears current grid
  if (grid.innerHTML !== "") {
    grid.innerHTML = "";
  }

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let boxes = size * size;

  for (let i = 0; i < boxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#e17055";
    });
  }
}

function getSize() {
  let input = prompt("1-100");
  if (input > 0 && input < 100) {
    return input;
  } else {
    alert("Pick a number between 1-100");
  }
}

createGrid(16);
