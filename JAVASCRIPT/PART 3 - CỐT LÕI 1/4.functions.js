function test() {
    console.log('all arguments: ',arguments);
}
function test2() {
    console.log('no arguments: ',arguments);
}
function forOf() {
    var string ='';
    console.log('no arguments: ',arguments);
    for(var i of arguments)
    {
        // string += i + ' - ';
        string += `${i} - `;
        
    }
    console.log(string);
}
function sum(a,b)
{
    
    console.log(typeof a, typeof b);
    

    if(typeof a === 'number' && typeof b ==='number')
    {
        return a + b;
    }
    else
    {
        return false;
    }
}
// test(1,2,3, ['a','b','c']);
// test2();
// forOf(1,2,34,35,32,325,2, ['a','b','c']);
// const t = sum(1,2);
// console.log(t);

//Các loại functions
declareFunction();
//declare function,
/* 1. có thể được gọi trước khi định nghĩa, hosting*/
function declareFunction() {
    
}
//expression function, 
/*
1. name or not, 
2. name has meaning of function, 
3. không được hosting, 
4. không thể gọi trước khi định nghĩa
*/
var expressionFunction = function NameOrNot(){

}
setInterval(function autoLogin(){//đặt tên để làm rõ ý  nghĩa or chức năng của hàm
    
}, 3000);
var myObject ={
    myFunction: function NameOrNot(){

    }
}