const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

fetch(url)
.then(response => {
    if(response.ok){
        return response.json()
    } else {
        // alert('API - Request Fail!');
        console.log(`Request Fail! ERROR: ${response.status}`);
    }
})
.then(data => {    
    const dataJSON = data;   
    // console.log(dataJSON)
    const gbp = dataJSON.eur.gbp;
    const usd = dataJSON.eur.usd;
    const eur = dataJSON.eur.eur;

    // console.log('EUR:'+eur)
    // console.log('USD:'+usd)
    // console.log('GBP:'+gbp)



    let prices = [{id: 'basic', price: 0}, {id: 'professional', price: 25}, {id: 'premium', price: 60}];
    const simbols = [{id: 'EUR', simbol: '€'}, {id: 'USD', simbol: '$'}, {id: 'GBP', simbol: '£'}];
    const amounts = document.getElementsByClassName('amount');
    // console.log(amounts);
    const currencySelect = document.getElementById('currencySelect');
    let selectedIndex = currencySelect.selectedIndex;
    let selectedOption = currencySelect.value;
    // console.log(selectedOption)
    // console.log(selectedIndex)


    if(selectedOption == simbols[selectedIndex].id){
        for(let i=selectedIndex; i<amounts.length;i++){
            amounts[i].innerHTML = `${simbols[selectedIndex].simbol}${prices[i].price}`
        }
    }

    currencySelect.addEventListener('change', () => {
        let exchange = 0;
        selectedIndex = currencySelect.selectedIndex;
        selectedOption = currencySelect.value;
        // console.log(selectedOption);
        // console.log(selectedIndex);

        prices.forEach(() => {
            // console.log(element.price)
            if(selectedOption == 'EUR'){
                exchange = eur;
                // console.log(exchange)
            } else if(selectedOption == 'USD'){
                exchange = usd;
                // console.log(exchange)
            } else {
                exchange = gbp;
                // console.log(exchange)
            }
        });

        if(selectedOption == simbols[selectedIndex].id){               
            for(let i=0; i<amounts.length;i++){
                if(amounts[i].id == prices[i].id){
                    amounts[i].innerHTML = `${simbols[selectedIndex].simbol}${(prices[i].price * exchange).toFixed(0)}`
                }            
            }
        }
    });
});
