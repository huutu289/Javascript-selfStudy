const images = [
    {
        image_name: 'bananas.jpg',
        number_of_items: 6,
    },
    {
        image_name: 'birthday candles.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'blocks.jpg',
        number_of_items: 6,
    },
    {
        image_name: 'brushes.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'cakes.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'cars.jpg',
        number_of_items: 2,
    },
    {
        image_name: 'crayons.jpg',
        number_of_items: 8,
    },
    {
        image_name: 'cupcakes.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'deer.jpg',
        number_of_items: 3,
    },
    {
        image_name: 'donuts.jpg',
        number_of_items: 6,
    },
    {
        image_name: 'ducks.jpg',
        number_of_items: 6,
    },
    {
        image_name: 'eggs.jpg',
        number_of_items: 8,
    },
    {
        image_name: 'elephants.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'hot air balloons.jpg',
        number_of_items: 5,
    },
    {
        image_name: 'jelly beans.jpg',
        number_of_items: 9,
    },
    {
        image_name: 'macaroons.jpg',
        number_of_items: 7,
    },
    {
        image_name: 'pencils.jpg',
        number_of_items: 12,
    },
    {
        image_name: 'people.jpg',
        number_of_items: 6,
    },
    {
        image_name: 'peppers.jpg',
        number_of_items: 2,
    },
    {
        image_name: 'pizza slices.jpg',
        number_of_items: 8,
    },
]
let currentImageValue = 0, displayNumber = 0, score = 0, totalAvailable = images.length, chosen = false;
const timeDelay = 5000;

document.getElementById('stats-content').style.visibility = 'hidden';
document.getElementById('current-score').innerHTML = score;
document.getElementById('total-available').innerHTML = totalAvailable;
document.getElementById('time-setting').innerHTML = timeDelay/1000;

const setImageSrc =(randomImageName)=>{
    const imageContainer = document.getElementById('images-container');
    if (imageContainer.hasChildNodes()) {
        
        imageContainer.removeChild(imageContainer.firstElementChild);
    }
    const img = document.createElement('img');
    img.src = `images/${randomImageName}`;
    img.classList.add('fade');
    imageContainer.appendChild(img);
    
}
const setImageName = (randomImageName) =>
{
    const imageName = randomImageName.slice(0, randomImageName.length -4);
    document.getElementById('item-name').innerHTML = imageName + " ?";
}

const generatePlusOrMinus = () =>{
    
    const random = Math.random();
    const number0to1Mul2 = random*2;
    const number0to1 = Math.floor(number0to1Mul2);
    
    // console.log(random + ", ",  number0to1Mul2 + ",", number0to1);
    return number0to1 === 0 ? -1: +1;
}

const generateDisplayNumber = (numberOfItems, plusOrMinus)=>
{
    const split = Math.floor(Math.random() *2);
    if(split === 0)
    {
        document.getElementById('number').innerHTML = numberOfItems;
        displayNumber = numberOfItems;
    }
    else{
        document.getElementById('number').innerHTML = `${numberOfItems + plusOrMinus}`;
        displayNumber = numberOfItems + plusOrMinus;
    }
    currentImageValue = numberOfItems;
}
const match = ()=>
{
    if (!chosen) {
        currentImageValue  === displayNumber ? score++ : score --;
        document.getElementById('current-score').innerHTML = score;
        chosen = true;
    }
}
const noMatch = () =>
{
    if (!chosen) {
        currentImageValue  !== displayNumber ? score++ : score --;
        document.getElementById('current-score').innerHTML = score;
        chosen = true;
    }
}
const gennerate = () => {
    if(images.length === 0)
    {
        stopTimer();
        endOfGame();
        return;
    }
    chosen = false;
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageName = images[randomNumber].image_name;
    const numberOfItems = images[randomNumber].number_of_items;

    setImageSrc(randomImageName);
    setImageName(randomImageName);
    const plusOrMinus = generatePlusOrMinus();
    generateDisplayNumber(numberOfItems, plusOrMinus);

    images.splice(randomNumber, 1);//remove 1 element of images array
}
let ref;
const timer = () => {
    ref = setInterval(gennerate, timeDelay);

}
const play = () => {
    document.getElementById('stats-content').style.visibility = 'visible';
    document.getElementById('message').style.display = "none";
    document.getElementById('start-screen').style.display = "none";
    document.getElementById('play-button').style.display = "none";    
    gennerate();
    timer();
}
const endOfGame = ()=>
{
    document.getElementById('stats-content').style.visibility = 'hidden';
    document.getElementById('message').style.display = "block";
    document.getElementById('images-container').style.display = "none";
    document.getElementById('message').innerHTML = `Kết thúc game! điểm = ${score} / ${totalAvailable}`;
    document.getElementById('stats-content').style.display = "none";
    setTimeout(()=>location.reload(),3000)
}
const stopTimer = ()=>
{
    clearInterval(ref);
}