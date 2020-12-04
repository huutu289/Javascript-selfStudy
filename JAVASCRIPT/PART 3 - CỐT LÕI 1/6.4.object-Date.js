//dùng Date();
//cách 1
var dateFunction = Date();
console.log('result of Date function: -', dateFunction);

//cách 2
var dateObject = new Date();
console.log('object date: -',dateObject);
/*- có thể truy xuất các phương thức và thuộc tính của Date
    -các phương thức hay dùng
*/
var year = dateObject.getFullYear();
var month = dateObject.getMonth()+1;
var day = dateObject.getDate();
var dayOfweek = dateObject.getDay();

//in ra ngày, tháng, năm hiện tại
var today = `date of today is: - ${day}/${month}/${year}`;
var todayDisplay = document.querySelector('.today');
console.log(todayDisplay);
todayDisplay.innerHTML = today;


//typeof Date();
var typeOfDate = document.querySelector('.typeOfDate');
typeOfDate.innerText = 'type of Date() is: '+typeof dateObject;

// in trực tiếp: sẽ in ra dạng chuỗi
var dateObject1 = new Date();
var directPrint = document.querySelector('.date');
directPrint.textContent = dateObject1;
