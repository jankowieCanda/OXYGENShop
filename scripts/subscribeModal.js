const modalDialog = document.getElementById('modalDialog');
const percentToModal = 25;

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
    form.method = 'POST';
    form.action = '';
    form.name = 'subscribeForm';
    let input = document.createElement('input');
    input.type = 'email';
    input.name = 'subscriptMail';
    input.id = 'subscriptMail';
    input.placeholder = 'example@yourmail.com';
    let label = document.createElement('label');
    label.htmlFor = 'subscriptMail';
    let submit = document.createElement('input');
    submit.type = 'submit';
    // submit.formMethod = 'dialog';
    submit.className = 'btn btn-subscribeForm';
    submit.value = 'Subscribe';

    form.append(label, input, submit);
    div.append(closeIcon, title, form);
    
    modalDialog.insertAdjacentElement("afterbegin", div);
};

createModal();

let subscriptMail = document.getElementById('subscriptMail');
let modalDiv = document.getElementById('subscription');
let closeModal = document.getElementById('closeModal');

let timeOut = setTimeout(() => {
    window.addEventListener('load', modalDialog.showModal())
}, 5000);

if(localStorage.getItem('modalON') === 'true' || sessionStorage.getItem('modalON') === 'true') {
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

// modalDialog.addEventListener('click', () => {
//     modalDialog.close();
// });

closeModal.addEventListener('click', () => {
    modalDialog.close();
})

modalDialog.addEventListener('close', () => {
    localStorage.setItem('modalON', 'true');
    sessionStorage.setItem('modalON', 'true');
})





