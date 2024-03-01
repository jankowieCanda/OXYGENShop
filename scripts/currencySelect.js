const currencyList = ['EUR', 'USD', 'GBP'];
const pricing = document.querySelector('.pricing__title');

function createCurrencySelect() {
    let div = document.createElement('div');
    div.id = 'currencySelectDiv';
    let select = document.createElement('select');
    select.id = 'currencySelect';
    select.name = 'currencySelect';
    let label = document.createElement('label');
    label.htmlFor = 'currencySelect';
    label.innerHTML = 'Choose your Currency!'

    currencyList.map((value) => {
        let option = document.createElement('option');
        option.value = value;
        option.className = 'option'
        option.innerHTML = value;
        // console.log(option)
        select.append(option);
    })
    div.append(label);
    div.append(select);
    pricing.insertAdjacentElement('afterend', div);
}

createCurrencySelect();