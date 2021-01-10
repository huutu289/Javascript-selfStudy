let inputElement = document.querySelector('.input');
let buttonElement = document.querySelector('.btn');
let destination = document.querySelector('.delivered-content');

// console.log(destination,inputElement,buttonElement);
function showMessage() {
    let inputValue = inputElement.value;
    if (inputValue === '') {

        let error = document.querySelector('.form>span');
        error.innerHTML = 'please input message!'
        error.classList.add('error');
        setTimeout(function () {
            error.innerHTML = '';
            error.classList.remove('error');
        }, 2000)
    }
    else {
        inputElement.value = '';
        destination.innerHTML = inputValue;

    }
}
buttonElement.addEventListener('click', showMessage);