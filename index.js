const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

function validate () {
    const emailValue = email.value.trim();

    if(emailValue === "") {
        getErrorMsg(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        getErrorMsg(email, "Email is not valid");
    } else {
        getSuccess(email);
        console.log(emailValue)
    }
}

// function for error email
function getErrorMsg (input, message) {
    const formControl = input.parentElement;
    formControl.className = "form__control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// function for successful email
function getSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = "form__control"
}

// Email Validator
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}