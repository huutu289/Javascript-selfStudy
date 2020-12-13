/*
--class là cách viết khác của object constructor
-object construct: 
 1.viết khởi tạo thuộc tính, methods,  khai báo biến cùng cấp  vì vậy
  rất khó nhìn
-class: viết tách biệt 3 phần
  1.khởi tạo thuộc tính
  2. methods
  3. khai báo biến
 */
//cách 1: tạo object bằng object constructor
const Course = function(name, price){
    this.name = name;
    this.price = price;
    getName = function(){
        return this.name;
    }
    var test1;
    const test2;
}
const objectJS = new Course('JavaScript',1000);
const objectPHP = new Course('PHP', 2000);
console.log('tạo object bằng object constructor: ',objectJS, objectPHP);
//cách 2: tạo object bằng class 
class Course1 {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;

    }
    run(){
        isSuccess = false;
        if(true)
        {
            isSuccess = true;
        }
        
    }
}