const contactForm = document.querySelector('.contact__form');
const subscriptionForm = document.getElementById('subscribeForm')
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const checkBox = document.getElementById('consent');
const minLength = 2;
const maxLength = 100;
const regExpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let checkBoxChecked = true;
const postUrl = 'https://jsonplaceholder.typicode.com/posts';



// contactForm.addEventListener('submit', preventDef, false);
contactForm.addEventListener('submit', contactFormValidation);

checkBox.addEventListener('click', () => {

    if(checkBox.checked) {
        checkBoxChecked = true;
    } else {
        checkBoxChecked = false;
    }
    // console.log(checkBoxChecked)
});


// function preventDef(event) {
//     event.preventDefault();
// }

function contactFormValidation() {
    let contactFormData = {};
    let name = inputName.value;
    let email = inputEmail.value;
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
        // console(checkBoxChecked);
        inputName.style.borderBottomColor = '#95989A';
        inputEmail.style.borderBottomColor = '#95989A';

        fetch(postUrl, {
            method: 'POST',
            body: JSON.stringify(contactFormData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                // alert('API - Request Fail!');
                console.log(`Request Fail! - ERROR: ${response.status}`);
            }
        })
        .then(data => console.log(data));

        contactForm.reset();
    } else {
        console.log('ERROR! Faltan campos por completar');
    }

    
    // console.log(contactFormData);
    return contactFormData;
}


