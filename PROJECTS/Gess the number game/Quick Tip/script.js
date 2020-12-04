function formatMoney(value) {
    value = Math.ceil(value*100)/100;
    value = value.toFixed(2);
    return '$ ' + value;
}

function update() {
    console.log('function called');
    let bill = Number(document.getElementById('your-bill').value);
    let tipPercen = document.getElementById('tip-input').value;
    let split = document.getElementById('split-input').value;


    let tipValue = bill * (tipPercen / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;


    document.getElementById('tip-percent').innerHTML = tipPercen + '%';
    document.getElementById('tip-value').innerHTML = formatMoney(tipValue);
    document.getElementById('total-with-tip').innerHTML = bill + tipValue;

    if (split === '1') {
        document.getElementById('bill-each-title').innerHTML = 'Hóa đơn của bạn: ';
        document.getElementById('tip-each-title').innerHTML = 'Tiền bo: ';
    }
    else {
        document.getElementById('bill-each-title').innerHTML = 'Hóa đơn của mỗi người: ';
        document.getElementById('tip-each-title').innerHTML = 'Số tiền bo của mỗi người: ';
    }


    document.getElementById('split-value').innerHTML = split + ' người';

    document.getElementById('bill-each').innerHTML = formatMoney(newBillEach);
    document.getElementById('tip-each').innerHTML = formatMoney(tipEach);
}
let container = document.getElementById('container');
container.addEventListener('input', update);