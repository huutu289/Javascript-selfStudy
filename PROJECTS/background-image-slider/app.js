let imgArray = ['contBcg-0', 'contBcg-1', 'contBcg-2', 'contBcg-3', 'contBcg-4'];
const leftElement = document.querySelector('.left');
const rightElement = document.querySelector('.right');
const imgElement = document.querySelector('img');

let count = 0;
function leftClick1(e) {

    if (e.target.className.includes('left')) {
        // console.log(e.target.classList);
        if (count === 0) {
            count = imgArray.length - 1;
        }
        else
            --count;

    }
    else {
        // console.log(e.target.classList);
        if (count === imgArray.length - 1) {
            count = 0;
        }
        else
            ++count;
    }
    imgElement.setAttribute('src', `./imgs/${imgArray[count]}.jpeg`);
    console.log(`./imgs/${imgArray[count]}.jpeg`);
}
leftElement.addEventListener('click', leftClick1);
rightElement.addEventListener('click', leftClick1);

//method 2: immediate invoked function expression
(function () {
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ];

    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('.img-container')
    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0
                }
                imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
            }
        })
    })
})();
