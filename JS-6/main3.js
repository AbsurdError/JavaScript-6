function calculate() { 
    let deposit = document.getElementById('deposit').value; 
    let interest = document.getElementById('interest').value; 
    let years = document.getElementById('years').value; 
    let total = deposit * Math.pow((1 + interest/100), years); 
    document.getElementById('result').innerText = `Сумма вклада через ${years} лет будет составлять ${total.toFixed(2)} руб.`; 
} 