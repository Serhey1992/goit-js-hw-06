function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");


colorBtn.addEventListener("click", () =>{
  let colorChange = getRandomHexColor();
  body.style.backgroundColor = colorChange;
  colorValue.textContent = colorChange;
});
