let counterValue = 0
const decrementBtn = document.querySelector("button[data-action = decrement]");
const incrementBtn = document.querySelector("button[data-action = increment]");
const valueEl = document.querySelector("#value");


incrementBtn.addEventListener("click", counterPlus);
decrementBtn.addEventListener("click", counterMinus);

function counterPlus() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

function counterMinus() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};