//--cách tạo key trong object
var job = 'job-2';
var myObject = {
    name: 'Tú',//cách 1: tên trực tiếp
    'age': 30,//cách 2; trong dấu nháy
    address: 'Trần Phú, TP Huế',
    [job]: 'Tour guide',//cách 3: tạo key từ biến
}
console.log(myObject);

//--THÊM KEY VÀ VALUE SAU KHI TẠO OBJECT
//cách 1: tên key không vị phạm quy tắc đặt tên
myObject.email = 'huutu289@gmail.com';

//cách 2: tên key vi phạm quy tắc đặt tên biến trong js
myObject['my-email'] = 'test@gmai.com';

//--get value of an object
console.log('my name: ', myObject.name);
console.log('my name []: ', myObject['name']);

//--return undefined if value doesn't exsit;
console.log('my job: ', myObject.job);

var mykey = 'age';
console.log(myObject[mykey]);

//--delete a key and a value of an object
delete myObject[job]//xóa key
console.log(myObject);

//--keys are a functions (methods)
/*
    there 2 types of keys of sv object 
    ---properties
       - idCard
       - lastName
       - firstName
    ---methods
       - getFullName();
       - getAge();
 */

var sv = {
    idCard: '123',
    lastName: 'Tu',
    firstName: 'Cao Huu',
    age: 18,
    getFullName: function () {//key is a function
        return this.firstName + this.lastName;// this = sv (return sv.fullname;)
        /*dùng sv không tiện vì nếu tên object sv thay đổi chúng ta phải thay đổi nhiều chỗ==>this */
    },
    getAge: function () {
        return this.age;
    }
}

console.log('sv object: ', sv);
console.log(sv.getFullName);
console.log(typeof sv.getFullName);
console.log('get value of object: ', sv.getFullName());
