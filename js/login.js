const loginForm = document.querySelector("form");
const loginBtn = document.querySelector('.login-btn');

//once login button is clicked do the validation
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginInputs = loginForm.querySelectorAll("input");

    loginInputs.forEach((input) => {
        validateLoginDetails(input);
    });
});

// this will only check if the input values are empty
// will update once we discussed data retreiving to match from user data
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