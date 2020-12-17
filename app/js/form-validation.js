/*
    ------------------------
    ------- Variables ------
    ------------------------
*/
const contactForm = document.getElementById('contactForm');
const namee = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const text = document.getElementById('text');
var hasError;

/*
    ------------------------
    --------- Main ---------
    ------------------------
*/
contactForm.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

/*
    ------------------------
    ------- Functions ------
    ------------------------
*/
function checkInputs(){
    let nameValue = namee.value.trim();
    let emailValue = email.value.trim();
    let subjectValue = subject.value.trim();
    let textValue = text.value.trim();
    hasError = false;

    if (nameValue === ''){
        setErrorFor(namee);
        hasError = true;
    }

    if (emailValue === ''){
        setErrorFor(email);
    } else if (!isValid(emailValue)){
        setErrorFor(email);
        hasError = true;
    }

    if (subjectValue === ''){
        setErrorFor(subject);
        hasError = true;
    }

    if (textValue === ''){
        setErrorFor(text);
        hasError = true;
    }

    if (!hasError){
        clearInputs();
    }

}

function setErrorFor(input){
    const formControl = input.parentElement;

    formControl.classList.toggle('hasError');
}

function clearInputs(){
    namee.value = '';
    email.value = '';
    subject.value = '';
    text.value = '';
    formControls.forEach(formControl => formControl.classList.remove('hasError'));
}

function isValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}