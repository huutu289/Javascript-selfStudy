let lowerCount = document.querySelector('.btn-lower-count');
let addCount = document.querySelector('.btn-add-count');
let numberElement = document.querySelector('.current-number');


function changeNumber(e) {
    let currentNumber = parseInt(numberElement.textContent);
    let newNumber;
    if (e.target.className === 'btn-add-count')
        newNumber = currentNumber + 1;
    else
        newNumber = currentNumber - 1;
    numberElement.innerHTML = newNumber;
    if (newNumber > 0) {
        numberElement.style.color = 'green';
    }
    else if (newNumber === 0) {
        numberElement.style.color = 'gray';
    }
    else {
        numberElement.style.color = 'red';
    }
}
lowerCount.addEventListener('click', changeNumber);
addCount.addEventListener('click', changeNumber);