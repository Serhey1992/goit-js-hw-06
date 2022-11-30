const inputEl = document.querySelector("#validation-input");

const inputTextLength = Number(inputEl.getAttribute("data-length"));
console.log(inputTextLength);

inputEl.addEventListener("blur", onBlurValid);

function onBlurValid(event) {
    if (event.target.value.length === inputTextLength) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}