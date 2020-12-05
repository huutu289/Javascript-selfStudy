
//Các loại functions (3 loại : declare, expression, arrow)

//1. declare function: có thể được gọi trước khi định nghĩa vì có tính chất hosting
declareFunction();//gọi trước
function declareFunction() {}//định nghĩa sau

/*
2. expression function: 
2.1. name or not (đặt tên để làm rõ ý  nghĩa or chức năng của hàm)
2.2. name has meaning of function, 
2.3. không được hosting, 
2.4. không thể gọi trước khi định nghĩa
*/
var expressionFunction = function NameOrNot(){}
setInterval(function autoLogin(){//nếu không đặt tên autoLogin thì không hiểu được ý nghĩa
    
}, 3000);
//ví dụ 2
var myObject ={
    myFunction: function NameOrNot(){

    }
}