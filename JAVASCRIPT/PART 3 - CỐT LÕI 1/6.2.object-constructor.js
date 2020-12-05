//tạo các đối tượng trực tiếp (object literal), không dùng bảng thiết kế (object constructor)
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
// Bước 1: định nghĩa bảng thiết kế (Class or object constructor)
//Cách 1: declare funcition
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
//Bước 2: tạo đối tượng từ Class (bảng thiết kế or object constructor)
//--tạo 1 giangvien object từ Class User
var giangVien = new User('phong', 'Nguyen', 'avatar');

//- thêm thuộc tính và giá trị RIÊNG cho đối tượng vừa mới tạo
giangVien.title = 'Chia sẽ dạo tại F8';

//--tạo 1 hocvien object từ Class User
var hocVien = new User('Tú', 'Cao Hữu', 'avatar hvien');
//-thêm 1 thuộc tính RIÊNG cho sv object, thuộc tính này không có trên giangvien Object
hocVien.comment = 'bài học rất hay';

//--ừ object chúng ta có thể xem được bảng thiết kế (Class) 
//-một thuộc tính hoặc phương thức nằm trong prototype có thể gọi ra bằng cách dưới đây
console.log('xem constructor of hocvien: ',hocVien.constructor);
//- kiểm tra constructor với bảng thiết kế
console.log('kiểm tra sinhVien.constructor === User: ',hocVien.constructor === User);
//- or
console.log('kiểm tra GiangVien.constructor === User: ',giangVien.constructor === User);

//in ra giảng viên
console.log('giang vien:', giangVien);
console.log('ten giảng viên:', giangVien.getName());

//in ra sinh viên
console.log('hoc vien:', hocVien);
console.log('ten hoc vien:', hocVien.getName());

// thêm ví dụ
// object literal
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



