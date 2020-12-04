let computerGuess;
let userGuesses = [];
let attemps = 0;
let maxGuess;
let low = 1;
let high = 100;

function updateRange() {
    const rangeOutput =  document.getElementById('range-output');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100 - high + "%";
    rangeOutput.classList.add('flash');
    

    const lowValue = document.getElementById('low');
    lowValue.style.flex = low + '%';
    lowValue.style.background = "#ef7b54";

    const spaceValue = document.getElementById('space');
    spaceValue.style.flex = high - low + '%';
    spaceValue.style.background = "#83E1D0";

    const highValue = document.getElementById('high');
    if(highValue == 100) highValue.style.flex = 0;
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = "#ef7b54";

    
}

function inital() {

    computerGuess = Math.floor(Math.random() * 100 + 1);//random number   
    console.log(computerGuess);
    document.getElementById('new-game-button').style.display = 'none';
    document.getElementById('game-area').style.display = 'none';

}
function newGame() {
    window.location.reload();
}
function gameEnded() {

    document.getElementById('new-game-button').style.display = 'inline';
    document.getElementById('input-box').setAttribute('readonly', 'readonly');

}
function startGameView() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';

}
function easyMode() {
    maxGuess = 10;
    startGameView();
}
function hardMode() {
    maxGuess = 5;
    startGameView();
}
function compareGuess() {
    const userGuess = Number(document.getElementById('input-box').value);
    userGuesses.push(" " + userGuess);
    document.getElementById('guesses').innerHTML = userGuesses;
    attemps++;
    document.getElementById('attemps').innerHTML = attemps;
    if (attemps < maxGuess) {
        if (userGuess > computerGuess) {
            if(userGuess < high) high = userGuess;
            document.getElementById('output-text').innerHTML = "Sai, vui lòng chọn số nhỏ hơn!";
            document.getElementById('input-box').value = '';

        }
        else if (userGuess < computerGuess) {
            if(userGuess > low) low = userGuess;
            document.getElementById('output-text').innerHTML = "Sai, vui lòng chọn số lớn hơn!";
            document.getElementById('input-box').value = '';
        }
        else {
            document.getElementById('output-text').innerHTML = "Chúc mừng! bạn mất " + attemps + " lần đoán";
            document.getElementById('input-box').value = '';
            gameEnded();
        }
    }
    else {
        if (userGuess > computerGuess) {
            document.getElementById('output-text').innerHTML = "Bạn thua, số cần đoán là: :  " + computerGuess; ;           
            gameEnded();
        }
        else if (userGuess < computerGuess) {
            document.getElementById('output-text').innerHTML = "Bạn thua, số cần đoán là: :  " + computerGuess; ;  
            gameEnded();                    
        }
        else {
            document.getElementById('output-text').innerHTML = "Chúc mừng! bạn mất " + attemps + " lần đoán";
            gameEnded();
        }
    }
    updateRange();

}