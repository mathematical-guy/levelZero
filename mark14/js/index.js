function calculateProfitAndLoss(costprice, quantity, sellingprice){
    let color, text;
    if(costprice === '' || quantity === '' || sellingprice === ''){
        text = 'Please give input';
    }
    else{
    if(costprice > sellingprice){
        let loss = (costprice - sellingprice) * quantity;
        let lossPercentage = (loss / costprice)*100;
        text = `Oops! loss = ${loss} Rs lossPercentage = ${lossPercentage} %`;
        color = "red" ;
    }
    else if(sellingprice > costprice) {
        let profit = (sellingprice - costprice)*quantity;
        let profitPercentage = (profit / costprice)*100;
        text = `Yay! profit = ${profit} Rs profitPercentage = ${profitPercentage} %`;
        color = "green" ;
    }
    else{
        text = "No LOSS neither PROFIT";
        color = "yellow" ;
    }
    }
    result.innerText = text;
}


function submitHandler(){
    let initialprice = initialPrice.value;
    let qty = stocksQuantity.value;
    let currentprice = currentPrice.value;
    calculateProfitAndLoss(initialprice, qty, currentprice);
}




// ---------------------------------------------------------

let initialPrice = document.querySelector('#initial-price');
let stocksQuantity = document.querySelector('#stocks-quantity');
let currentPrice = document.querySelector('#current-price');
let submitBtn = document.querySelector('#submit-btn');
let result = document.getElementById('result')
submitBtn.addEventListener("click", submitHandler);