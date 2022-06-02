const form = document.querySelector("#checkoutForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");

function validateForm (event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
   
    if (checkLength(address.value, 0) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(phone.value, 0) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if (checkLength(payment.value, 0) === true) {
        paymentError.style.display = "none";
    } else {
        paymentError.style.display = "block";
    }

    if (checkLength(cardNumber.value, 16) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }

    if (checkLength(mmyy.value, 0) === true) {
        mmyyError.style.display = "none";
    } else {
        mmyyError.style.display = "block";
    }

    if (checkLength(cvc.value, 0) === true) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}