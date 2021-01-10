const customersArr = [];
const imgElement = document.querySelector('.customer>img');
const nameElement = document.querySelector('.infor-name');
const quoteElement = document.querySelector('.infor-quote');
const controlLeft = document.querySelector('.controls .left');
const controlRight = document.querySelector('.controls .right');
// console.log(controlLeft, controlRight);
//Object constructor
function Customer(imgSrc, name, quote) {
    this.avatar = imgSrc;
    this.name = name;
    this.quote = quote;
}
let imgUrl1 = `./imgs/g1.jpeg`;
let imgUrl2 = `./imgs/g2.jpg`;
let imgUrl3 = `./imgs/g3.jpg`;
let imgUrl4 = `./imgs/g4.jpg`;
let imgUrl5 = `./imgs/g5.jpeg`;
//create customers
function createCustomers(img, name, quote) {
    let cus = new Customer(img, name, quote);
    customersArr.push(cus);
}
createCustomers(imgUrl1, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo?');
createCustomers(imgUrl2, 'Tom', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock');
createCustomers(imgUrl3, 'Anna', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text');
createCustomers(imgUrl4, 'Katya', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo?');
createCustomers(imgUrl5, 'Lucia', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?');

let count = 0;
function changing(e) {
    if (e.target.className.includes('left')) {
        if (count === 0) {
            count = customersArr.length - 1;
        }
        else
            --count;
    }
    else {
        if (count === customersArr.length - 1) {
            count = 0;
        }
        else
            ++count;
    }

    imgElement.src = customersArr[count].avatar;
    
    nameElement.innerHTML = customersArr[count].name;
    quoteElement.innerHTML = customersArr[count].quote;

}
controlLeft.addEventListener('click', changing);
controlRight.addEventListener('click', changing);