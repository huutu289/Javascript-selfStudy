/*
destructuring: làm việc với mảng vào object

 */
//làm việc với array

var course = ['PHP', 'JavaScript', 'C#'];
//yêu cầu bài toán: lấy ra các phần tử của mảng và lưu vào các biến a,b,c

//cách 1: theo chỉ số của mảng
var a = course[0];
var b = course[1];
var c = course[2];
//cách 2: dùng destructuring
var [a,b,c] = course;
console.log(a,b,c);
//- không lấy phần tử ở giữa
var [a,,c] = course;
console.log('không lấy phần tử giữa: ',a,c);
//- dùng toán tử rest
var [a,...rest] = course;
console.log('phan tu dau tien: ',a);
console.log('cac phan tu con lai:', rest);