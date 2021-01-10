let array = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
let array2 = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let mainElement = document.querySelector('main');
let hexElement = document.querySelector('.hex');
let spanElement = document.querySelector('span')

const buttonElement = document.querySelector('button');

const arrayLength = array.length;
function changingBg() {
    // let randomNumber = Math.floor(Math.random() * arrayLength);
    let firstRandom = Math.random() * arrayLength
    let randomNumber = parseInt(firstRandom);    

    mainElement.style.backgroundColor = array[randomNumber];
    
}
function changingBg2(){
  let hex = '#';

  for (let i = 0; i<6; i++) {
      let index  = parseInt(Math.random()*array2.length);
      hex+=array2[index];
      
      
  }
  spanElement.textContent = hex;

    mainElement.style.backgroundColor = hex;
}
buttonElement.addEventListener('click', changingBg);
hexElement.addEventListener('click', changingBg2);