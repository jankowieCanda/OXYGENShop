const contactForm = document.querySelector('.contact__form');
const subscriptionForm = document.getElementById('subscribeForm')
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const checkBox = document.getElementById('consent');
const minLength = 2;
const maxLength = 100;
const regExpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



contactForm.addEventListener('submit', preventDef, false);
contactForm.addEventListener('submit', contactFormValidation);

let checkBoxChecked = true;
checkBox.addEventListener('click', () => {

    if(checkBox.checked) {
        checkBoxChecked = true;
    } else {
        checkBoxChecked = false;
    }
    console.log(checkBoxChecked)
});


function preventDef(event) {
    event.preventDefault();
  }

function contactFormValidation() {
    let contactFormData = {};
    let name = inputName.value;
    console.log(name);
    let email = inputEmail.value;
    console.log(email);
    let nameOK = false;
    let mailOK = false;

    if(name !== '' && name.length >= minLength && name.length <= maxLength){
        nameOK = true;
    } else {
        nameOK = false
        inputName.style.borderBottomColor = 'red';

    }

    if(email !== '' && regExpMail.test(email)){
        mailOK = true;
    } else {
        mailOK = false;
        inputEmail.style.borderBottomColor = 'red';
    }

    if(nameOK && mailOK){
        contactFormData.name = name;
        contactFormData.email = email;
        contactFormData.consent = checkBoxChecked;
        contactForm.reset();
        inputName.style.borderBottomColor = '#95989A';
        inputEmail.style.borderBottomColor = '#95989A';
    }
    
    
    console.log(contactFormData);
    return contactFormData;
}


