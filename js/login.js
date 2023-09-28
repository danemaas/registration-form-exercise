const loginForm = document.querySelector("form");
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginInputs = loginForm.querySelectorAll("input");

    loginInputs.forEach((input) => {
        validateLoginDetails(input);
    });
});

function validateLoginDetails(i) {
    const errorMsgs = i.parentElement.querySelectorAll("p");
    const data = i.value;

    errorMsgs.forEach((errorMsg) => {
        if (data === "") {
            errorMsg.classList.remove("d-none");
            i.classList.add("error");
        } else {
            return;
        }
    });
}