//cách 1
var dateFunction = Date();
console.log('result of Date function: -', dateFunction);

//cách 2
var dateObject = new Date();
console.log('object date: -',dateObject);

//các hàm của Date
var year = dateObject.getFullYear();
var month = dateObject.getMonth()+1;
var day = dateObject.getDate();
var dayOfweek = dateObject.getDay();

//in ra ngày, tháng, năm hiện tại
console.log('date of today is: - ', `${day}/${month}/${year}`);