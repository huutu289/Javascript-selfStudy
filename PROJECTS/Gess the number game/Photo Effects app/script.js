const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillText('Hello canvas',100,50);
// ctx.fillRect(0,0, 100, 100);
// ctx.strokeRect(0,0, 100, 100);
// ctx.fillStyle = '#42e9f5';
// ctx.strokeRect(0,0, canvas.width, canvas.height);
// ctx.fillRect(0,0, 50, 50);
// ctx.beginPath();
// ctx.moveTo(canvas.width/2, canvas.height/2);
// ctx.lineTo(300,0);
// ctx.lineTo(300,150);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();
const img = new Image();
const reader = new FileReader();

function uploadImage(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        img.src = reader.result;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.height, canvas.width);
            console.log(imageData);
        }
    }
}
const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage);
const greyscale = () => {
    const imageData = ctx.getImageData(0, 0, canvas.height, canvas.width);
    const data = imageData.data;
    for (let index = 0; index < data.length; index += 4) {
        const grey = data[index] * 0.21 + data[index + 1] * 0.71 + data[index + 2] * 0.07;
        data[index] = grey;
        data[index + 1] = grey;
        data[index + 2] = grey;

    }
    ctx.putImageData(imageData, 0, 0);
}
const sepia = () => {
    const imageData = ctx.getImageData(0, 0, canvas.height, canvas.width);
    const data = imageData.data;
    for (let index = 0; index < data.length; index += 4) {
        const grey = data[index] * 0.21 + data[index + 1] * 0.71 + data[index + 2] * 0.07;
        data[index] = grey + 95;
        data[index + 1] = grey + 58;
        data[index + 2] = grey;

    }
    ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll('button')[0].addEventListener('click', greyscale);
document.querySelectorAll('button')[1].addEventListener('click', sepia);
document.querySelectorAll('button')[2].addEventListener('click', invert);