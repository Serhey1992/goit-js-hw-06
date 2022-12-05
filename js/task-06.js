const inputEl = document.querySelector("#validation-input");

const inputTextLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onBlurValid);

function onBlurValid(event) {
    if (event.target.value.length === inputTextLength) {
        updateClass("valid", "invalid");
    } else {
        updateClass("invalid", "valid");
    }
}

function updateClass(add, rem) {
  inputEl.classList.add(add);
  inputEl.classList.remove(rem);
}