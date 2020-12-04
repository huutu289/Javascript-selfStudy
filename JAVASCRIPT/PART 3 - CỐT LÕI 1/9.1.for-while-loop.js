var numbers = [45, 4, 9, 16, 25];
var arrayLength = numbers.length;
for (i = 0; i < arrayLength; i++)//ko để numbers.length vào biểu thức for vì giảm hiệu năng (trình duyệt cũ)
{
    console.log(i);
}
//---for/in==> loop through properties of an object---
//exampel 1
var person = {
    fName: 'Cao',
    lName: 'Tu',
    age: 30,
}
var text = '';
for (const key in person) {
    text += person[key] + " ";
}
console.log(text);
//example 2 - string
var text = 'Javascript';
for (const key in text) {
    console.log(key, ":", text[key]);
}
//exemple 3 - array
var languages = ['English', 'France', 'Italy', 'Vietnamese'];
for (const key in languages) {
    console.log(languages[key]);
}

//-------for/of---------
console.log('---------for/of---------');
var languages = ['English', 'France', 'Italy', 'Vietnamese'];
for (const iterator of languages) {
    console.log(iterator);
}
var text = 'Vietnamese';
for (const iterator of text) {
    console.log(iterator);
}
//loop through keys or values of an object
console.log('--------loop through an object---------');
var person = { name: 'Tu Cao', age: 30, height: 1.68 }
var aPerson = Object.keys(person);
var aPersonValue = Object.values(person);
console.log(aPerson);
for (const iterator of aPerson) {
    console.log(person[iterator]);
}
console.log(aPersonValue);
for (const iterator of aPersonValue) {
    console.log(iterator);
}

//while loop
console.log('---while loop-----');
var i = 0;
while (i < languages.length) {
    console.log(languages[i]);
    i++;
}
//do while, thực hiện khối lệnh trong do, trước khi kiểm tra điều kiện
//vì vậy luôn được chạy 1 lần
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 10)

var isSuccess = false;
i = 0;
do {
    i++;
    console.log('nạp lần thứ: ', i);
    //nap thanh cong
    if (true) {
        isSuccess = true;
    }

} while (!isSuccess && i <= 3)

//break and continue in loop
console.log('--------break-----------');
i = 0;
for (; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}
i = 0;
console.log('--------continue-----------');
for(;i<10;i++)
{
    if(i%2 !==0)
    {
        continue;
    }
    console.log('even numbes: ', i);
}
//nested loop
console.log('--------nested loop-----------');
var myArray = [
    [1,2,3,4],
    [5,6],
    [7,8,9,10]
];
var i = 0;
var j = 0;
for(;i<myArray.length;i++)
{
    for(var j = 0; j < myArray[i].length; j++)
    {
        console.log(myArray[i][j]);
    }

}
//in ngược
console.log('in ngược');
i = 10;
for(;i > 0;i-- )
{
    console.log(i);
}
console.log('step = 5');
for(var i =0; i<=100; i+=5)
{
    console.log(i);
}
console.log('step = 5, 100 - 0');
for(var i =100; i>0; i-=5)
{
    console.log(i);
}