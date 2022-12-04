const inputEl = document.querySelector("#validation-input");

const inputTextLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onBlurValid);

function onBlurValid(event) {
    if (event.target.value.length === inputTextLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}