function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector("#controls");
const boxEl = document.querySelector("#boxes");
const inputEl = controlsEl.querySelector("input");
const createBtnEl = controlsEl.querySelector("button[data-create]");
const destroyBtnEl = controlsEl.querySelector("button[data-destroy]");
let divSize = 30;

createBtnEl.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
})

destroyBtnEl.addEventListener("click", () => {
  destroyBoxes();
})

const createBoxes = (amount) => {
  const boxesArray = [];

  while (boxesArray.length < amount) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;
    divEl.classList.add("boxes__box");
    boxesArray.push(divEl);
    divSize += 10;
  }
  boxEl.append(...boxesArray);
}


const destroyBoxes = () => {
  const divEl = boxEl.querySelectorAll(".boxes__box");
  for (const box of divEl) {
    box.remove();
  }
  boxSize = 30;
};