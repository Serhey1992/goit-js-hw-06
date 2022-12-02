const formEl = document.querySelector(".login-form");
const formInformation = {};
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Заповнені не усі поля!");
    } else {
        formInformation.email = `${email.value}`
        formInformation.password = `${password.value}`
    }
 console.log(formInformation);
  evt.currentTarget.reset();
}