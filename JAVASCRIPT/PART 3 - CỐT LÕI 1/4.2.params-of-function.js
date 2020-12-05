//tham số của hàm:
/*1. có thể nhận được tất cả kiểu dữ liệu trong js
  2. params của hàm có tính private (chỉ sử dụng đc trong dấu {} của hàm)
  3. nếu không truyền đối số cho tham số của hàm, thì tham số = undefined
*/
paramsOfFunction(1, '', null, undefined, {}, [], function () { }, true, false);
function paramsOfFunction(msg1,  msg2) {
    for(var i = 0; i< 10; i++)
    {
        console.log(i);
    }
    console.log(msg1, msg2);
    for(var i in arguments)
    {
        console.log(arguments[i]);
    }
    console.log(arguments);
}
//định nghĩa hàm trong hàm
function function1 (){

    function function2(params) {
        console.log(params);
    }
    function2();
}
function1();