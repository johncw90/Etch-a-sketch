let grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
  });
}
