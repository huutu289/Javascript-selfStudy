/*
enhanced object literal có thể:
1. định nghĩa key và value cho đối tượng
2. định nghía method cho object
3. định nghĩa key và value cho object dưới dạng biến
 */


//1. định nghĩa key và value cho đối tượng
var name = 'JavaScript';
var price = 1000;

var course = {
    name: name,
    price: price,
}
//nếu tên key trùng với tên value thì chúng ta có thể viết như sau
var course = { name, price }
console.log(course);

//2. định nghía method cho object
var course = {
    name
    , price,
    //khai báo method bình thường
    getName: function () {
        return this.name;
    },
    //khai báo method ngắn gọn hơn
    getName() {
        return this.name;
    },
    getPrice() {
        return this.price;
    }
}
console.log(course.getName());
//3. định nghĩa key và value cho object dưới dạng biến
var fieldName = 'myName';
var filedPrice = 'myPrice';

var course = {
    [fieldName]: 'PHP',
    [filedPrice]: 1000,
}
console.log(course);