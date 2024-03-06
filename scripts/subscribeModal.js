const modalDialog = document.getElementById('modalDialog');
const percentToModal = 25;
let subscription = false;

function createModal() {
    let div = document.createElement('div');
    div.className = 'modal__div';
    div.id = 'subscription';
    let closeIcon = document.createElement('span');
    closeIcon.innerHTML = '&#88;'
    closeIcon.className = "closeIcon";
    closeIcon.id = 'closeModal';
    let title = document.createElement('h1');
    title.className = 'modal__title';
    title.innerHTML = 'Subscribe to Newsletter!!';
    let form = document.createElement('form');
    form.className = 'modal__subscriptionForm'
    form.method = 'post';
    form.action = postUrl;
    form.name = 'subscribeForm';
    form.id = 'subscribeForm';
    let input = document.createElement('input');
    input.type = 'email';
    input.name = 'subscriptMail';
    input.id = 'subscriptMail';
    input.placeholder = 'example@yourmail.com';
    let label = document.createElement('label');
    label.htmlFor = 'subscriptMail';
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.className = 'btn btn-subscribeForm';
    submit.value = 'Subscribe';

    form.append(label, input, submit);
    div.append(closeIcon, title, form);
    
    modalDialog.insertAdjacentElement("afterbegin", div);
};

createModal();

let subscribeForm = document.getElementById('subscribeForm');
let subscriptMail = document.getElementById('subscriptMail');
let modalDiv = document.getElementById('subscription');
let closeModal = document.getElementById('closeModal');

let timeOut = setTimeout(() => {
    window.addEventListener('load', modalDialog.showModal())
}, 5000);

if(localStorage.getItem('modalON') === 'true') {
    clearTimeout(timeOut);
}

window.addEventListener('scroll', () => {
    let scrollPercent = getScrollPercent();

    if(scrollPercent >= percentToModal) {
        if(localStorage.getItem('modalON') !== 'true') {
            modalDialog.showModal()
            clearTimeout(timeOut);
        } 
    }
});

closeModal.addEventListener('click', () => {
    modalDialog.close();
});

modalDialog.addEventListener('close', () => {
    localStorage.setItem('modalON', 'true');
});

// subscribeForm.addEventListener('submit', preventDef, false);
subscribeForm.addEventListener('submit', subscribeFormValidation);

function subscribeFormValidation() {
    let subscribeFormData = {};
    let input = subscriptMail.value;
    if(input !== '' && regExpMail.test(input)) {
        subscribeFormData.email = input;
        subscription = true;
        modalDialog.close();
        
    } else {
        subscription = false;
        subscriptMail.style.borderBottomColor = 'red';
    }

    if(subscription) {
        fetch(postUrl, {
            method: 'POST',
            body: JSON.stringify(subscribeFormData),
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
    }

    subscribeForm.reset();
    // console.log(subscribeFormData);
    return subscribeFormData;
}

if(subscription) {
    window.addEventListener('click', () => {
         modalDialog.close();
    });
}



