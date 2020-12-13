//--Định nghĩa 2 Classes
function Tom(CatName) {
    this.name = CatName;
    this.stomach = [];
    this.eat = function(mouse){
        this.stomach.push(mouse);
        return this;
    }   
}
function Mouse(mouseName, mouseWeight, mouseColor) {
    this.name = mouseName;
    this.weight = mouseWeight;
    this.color = mouseColor;
}
//--thêm thuộc tính vào Class bằng prototype
Mouse.prototype.type = 'Chuột cống';

//--thêm phương thức vào Class bằng prototype
Mouse.prototype.sleep = function(){
    console.log('slepping....');
}

//--tạo mới 3 đối tượng, 1 mèo, 2 chuột
var meoTom =  new Tom('meo tom');
var mickey = new Mouse('mickey', 0.2, 'black');
var jerrey = new Mouse('Jerry',0.5, 'white');


meoTom.eat(mickey);
console.log(meoTom);
meoTom.eat(jerrey);
console.log(meoTom);
console.log(Mouse.prototype);
console.log(Mouse.prototype.constructor);
console.log(Mouse.prototype.constructor === Mouse);

//cả 2 loại chuột (mickey, jerry) đều có thể dùng phương thức sleep() vì
// cùng trỏ tới 1 vùng nhớ do Class Mouse tạo ra
mickey.sleep();
jerrey.sleep();

//vì sao không định nghĩa hàm bên trong class?
//cách 1 dùng định nghĩa hàm bằng prototype
//ưu điểm: chỉ tạo ra một vùng nhớ duy nhất cho tất cả các đối tượng ==> tiết kiệm bộ nhớ
function Mouse1(mouseName, mouseWeight, mouseColor) {
    this.name = mouseName;
    this.weight = mouseWeight;
    this.color = mouseColor;
}
Mouse1.prototype.sleep = function(){
    
    console.log(this.color + ' slepping....');
}
//cách 2 dùng định nghĩa hàm bên trong class
//nhược điểm: mỗi lần tạo ra đối tượng mới từ class này, phải tạo ra một vùng nhớ mới
//để lưu hàm sleep==>tốn bộ nhớ
function Mouse2(mouseName, mouseWeight, mouseColor) {
    this.name = mouseName;
    this.weight = mouseWeight;
    this.color = mouseColor;

    this.sleep = function(){
        console.log(this.color);
        console.log('sleeping...');
    }
}
//kiểm tra
var m1 = new Mouse1('m1', 0.2, 'yellow');
var m2 =  new Mouse1('m2', 0.5, 'puple');
//theo m1 và m2 đều có thể dùng chung hàm sleep() vì chúng để trỏ đến hàm này
//==> m1.sleep() = m2.sleep()
console.log(m1.sleep === m2.sleep);
var m3 = new Mouse2('m3', 0.1, 'red');
var m4 = new Mouse2('m4', 0.3, 'blue');
console.log(m3.sleep === m4.sleep);