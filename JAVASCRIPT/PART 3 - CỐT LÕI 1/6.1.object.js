var job = 'job';
var myObject = {
    name: 'Tú',
    age: 30,
    address: 'Trần Phú, TP Huế',
    [job]: 'Tour guide',
}

console.log(myObject);
myObject.email = 'huutu289@gmail.com';
console.log(myObject);
myObject['my-email'] = 'test@gmai.com';

//get value of an object
console.log('my name: ',myObject.name);
console.log('my name []: ',myObject['name']);
console.log('my job: ',myObject.job);//return undefined if value doesn't exsit;

var mykey = 'age';
console.log(myObject[mykey]);

//delete a key and a value of an object
delete myObject[job]
console.log(myObject);

//key is a function
var sv = {
    idCard: '123',
    name: 'Tu',
    age: 18,
    getName: function(){//key is a function
        return this.name;// this = sv (return sv.name;)
        /**dùng sv không tiện vì nếu tên object sv thay đổi chúng ta phải thay đổi nhiều chỗ==>this */
    },
    getAge: function(){
        return this.age;
    }
}

console.log('sv object: ',sv);
console.log(sv.getName);
console.log(typeof sv.getName);
console.log('get value of object: ',sv.getName());
