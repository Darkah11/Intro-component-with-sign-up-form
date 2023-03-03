const form = document.querySelector(".form");
const fName = document.querySelector("#f-name");
const lName = document.querySelector("#l-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if(fNameValue === "") {
        setErrorFor(fName, "First Name cannot be empty");
    }else {
        setSuccessFor(fName)
    }

    if(lNameValue === "") {
        setErrorFor(lName, "Last Name cannot be empty");
    }else {
        setSuccessFor(lName)
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    }else {
        setSuccessFor(password)
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        small.innerText = message;
        formControl.classList = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        // formControl.classList.remove("error");
        formControl.classList = "form-control success";
    }

    function isEmail(email) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(email);
    };
};
