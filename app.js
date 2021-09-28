const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss (initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100
        showOutput(`Ohh no! you have loss of ${loss} and the percent is ${lossPercentage}% ` );
    } else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/ initial) * 100;
        showOutput(` Yay! You have made profit ${profit} and the percent is ${profitPercentage}% `);
    }else {
        showOutput("No pain No Gain & No Gain No Pain");
    }
}

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message){
    outputBox.innerHTML = message;
}

showBtn.addEventListener("click", submitHandler);

