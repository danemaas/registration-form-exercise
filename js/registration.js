const form = document.querySelector("form");
const loginForm = document.querySelector("form");
const submitBtn = document.querySelector(".button");
const loginBtn = document.querySelector('.login-btn');
const resetBtn = document.querySelector(".reset");

let userData = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

let errorCounter = 0; //initialize error counter to 0

resetBtn.addEventListener('click', () => {
    form.reset();
});

// if register button is clicked. begin validation
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    //get all input elements inside the parent form
    const inputs = form.querySelectorAll("input");
    errorCounter = 0; //this will keep tabs if there are still invalid inputs

    // loop through all inputs and validate its values
    inputs.forEach((input) => {
        userData[input.id] = input.value; //get all input values and 
        validateInput(input); //validate input values
    });

    //if all inputs are all valid. display successful registration
    if(errorCounter === -6) {
        document.getElementById('success').classList.remove('d-none');
        form.reset();
    }
});

//validate if inputs are empty and display error message
function validateInput(inputElement) {
    const errorMsgs = inputElement.parentElement.querySelectorAll("p");
    const data = inputElement.value;

    errorMsgs.forEach((errorMsg) => {
        if (data === "") {
            errorMsg.classList.remove("d-none");
            inputElement.classList.add("error");
            errorCounter++;
        } else {
            if(inputElement.id === "firstName" || inputElement.id === "lastName") {
                errorMsg.classList.add("d-none");
                inputElement.classList.remove("error");
                errorCounter--;
            }
            if(inputElement.id === "email") {
                validateEmail(data);
            }
            if(inputElement.id === "username") {
                validateUserName(data);
            }
            if(inputElement.id === "password") {
                validatePassword(data);
            }
            if(inputElement.id === "confirmPassword") {
                confirmPw(data);
            }
        }
    });
}

//validate if email input is correct base on the regular experession
//display error message if invalid
function validateEmail(e) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailPattern.test(e)) {
        document.getElementById('errorEmail').classList.add('d-none');
        document.getElementById('email').classList.remove('error');
        errorCounter--;
    } else {
        document.getElementById('errorEmail').classList.remove('d-none');
        document.getElementById('email').classList.add('error');
        errorCounter++;
    }
    return;
}

//validate if username input is correct base on the regular experession
//display error message if invalid
function validateUserName(u) {
    const userNameCheck = /^[a-zA-Z0-9\s]*$/;

    if(userNameCheck.test(u)) {
        document.getElementById('errorUN').classList.add('d-none');
        document.getElementById('username').classList.remove('error');
        errorCounter--;
    } else {
        document.getElementById('errorUN').classList.remove('d-none');
        document.getElementById('errorUN').innerHTML = "No special characters";
        document.getElementById('username').classList.add('error');
        errorCounter++;
    }

    return;
}

//validate if password input is correct base on the regular experession
//display error message if invalid
function validatePassword(p) {
    const passwordCheck = /^[a-zA-Z0-9]*$/;

    if(passwordCheck.test(p)) {
        document.getElementById('errorPW').classList.add('d-none');
        document.getElementById('password').classList.remove('error');
        errorCounter--;
    } else {
        document.getElementById('errorPW').classList.remove('d-none');
        document.getElementById('errorPW').innerHTML = "No special characters and whitespaces";
        document.getElementById('password').classList.add('error');
        errorCounter++;
    }

    return;
}

//validate if the input matched with the password inputted above
function confirmPw(confirm) {

    if(confirm === userData.password) {
        document.getElementById('match').classList.add('d-none');
        document.getElementById('confirmPassword').classList.remove('error');
        errorCounter--;
    } else {
        document.getElementById('match').classList.remove('d-none');
        document.getElementById('match').innerHTML = "Did not match to inputted password";
        document.getElementById('confirmPassword').classList.add('error');
        errorCounter++;
    }

    return;
}
