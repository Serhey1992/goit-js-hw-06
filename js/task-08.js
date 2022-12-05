const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("Заповнені не усі поля!");
    }
    const formInformation = {
        email: email.value,
        password: password.value,
    };
    
 console.log(formInformation);
  evt.currentTarget.reset();
}