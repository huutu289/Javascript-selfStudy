//tạo các đối tượng trực tiếp, không dùng bảng thiết kế (object constructor)
var ObjectGiangVien = {
    firstName: 'Phong',
    lastName: 'Dang',
    avatar: 'avata',
}
var ObjectHocVien = {
    firstName: 'Tu',
    lastName: 'Cao',
    avatar: 'avata',
}
//Nếu dùng cách trên, thêm 1 đối tượng có các thuộc tính giống nhau, chúng ta phải 
//lặp lại nhiều lần các thao tác trên, bổ sung thuộc tính cũng phải làm ở nhiều đối tượng

//----------------dùng object constructor--------------------------------------
//Cách 1
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;//This này là của bảng thiết kế
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;//this này là tên của đối tượng gọi đến
        //có thể là giangVien.firstName or hocVien.firstName
    }
}
//Cách 2 - expression funciton
var User = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;//This này là của bảng thiết kế
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;//this này là tên của đối tượng gọi đến
        //có thể là giangVien.firstName or hocVien.firstName
    }
}
var giangVien = new User('phong', 'Nguyen', 'avatar');
giangVien.title = 'Chia sẽ dạo tại F8';
var hocVien = new User('Tú', 'Cao Hữu', 'avatar hvien');
hocVien.comment = 'bài học rất hay';
console.log('giang vien:', giangVien);
console.log('ten giảng viên:', giangVien.getName());

console.log('hoc vien:', hocVien);
console.log('ten hoc vien:', hocVien.getName());

//object literal
var tom = {
    name: 'Tom',
    stomach: [],
    eat: function (mouse){
        this.stomach.push(mouse);
        return this;
    }
}
var m1= { name: 'm1'};
var m2= { name: 'm2'};
var m3= { name: 'm3'};
tom.eat(m1);
tom.eat(m2);
tom.eat(m3);
console.log(tom);



