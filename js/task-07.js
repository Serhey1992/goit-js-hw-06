const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChangeSize);

function onInputChangeSize(evt) {
    textEl.style.fontSize = `${evt.target.value}px`;
}