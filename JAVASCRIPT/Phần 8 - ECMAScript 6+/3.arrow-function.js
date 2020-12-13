/*
--viết ngắn gọn hơn
 */
const arrowFunction = (log) => {
    console.log(log);

}
arrowFunction('arrow function: ');

//-nếu return trên 1 dòng,có thể viết như sau
const sum = (a, b) => {
    return a + b;
}
console.log('viết bình thường: ', sum(2, 3));
//viết gọn, k cần từ khóa return
const sum1 = (a, b) => a + b;
console.log('viết gọn ko cần từ khóa return: ', sum1(3, 3));

//return 1 object, để trong dấu ngoặc tròn
const returnObject = (a, b) => ({ a: a, b: b })
console.log('return 1 object: ', returnObject(1, 3));

//nếu có 1 đối số
const return1Argument = (log) => { console.log(log) }
//có thể viết lại như sau 
const return1Argument2 = log => console.log(log);

//--đặc tính của Arrow function: 
//-ko có context
//- ko thể sử dụng để làm object constructor

//---------------ko có context------------
//ví dụ 1: sử dụng khai báo thông thường, dùng từ khóa this ok.
const course = {
    name: 'JavaScript',
    getName: function(){
        return this.name
    }
}
console.log(course.getName());
//ví dụ 2: sử dụng arrow function, ko dùng từ khóa this được
const course2 = {
    name: 'php',
    getName: ()=>{
        return this;//return undefined
        return this.name;//lỗi vì không có context
    }
}
console.log(course2.getName());
//--------------ko thể sử dụng làm object constructor------------

//ok: nếu sử dụng hàm thông thường
const Course = function(name, price){
    this.name  = name;
    this.price = price;
}
//lỗi: khi sử dụng arrow function
const Course1 = (name, price)=>{
    this.name = name;
    this.price = price;
}
var objectJs =  new Course('JavaScript', 1000);//ok 
var objectPHP = new Course1('PHP',2000);//lỗi
