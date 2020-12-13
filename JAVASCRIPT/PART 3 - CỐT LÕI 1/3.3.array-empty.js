//--cách 1: tạo mảng theo cách bình thường
var array1 = ['PHP', 'JavaScript'];
// var array1 = [];
//độ dài thực của mảng: 2
array1.length//2
// gán độ dài ảo cho mảng: 10
array1.length = 10;
array1.length//10

//--cách 2: tạo mảng bằng từ khóa new
var array1 = new Array(11);//for thường chạy 11 lần
//- nếu push thêm vào thì độ dài tăng thêm 
array1.push('test');
console.log('tạo bằng từ khóa new và puss thêm 1 phần tử vào: new Array(11); push(test) ',array1);//12 phần tử (11 phần tử ảo) (1 phần tử thật)

//-nếu truyền vào 2 đối số thì thành 2 phần tử của mảng
var array1 = new Array(11,12);
console.log('tạo bằng từ khóa new và đưa vào 2 phần tử: new Array(11,12) ',array1);
//nếu dùng vòng for bình thường sẽ chạy 10 lần vì căn cứ vào array.length
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log('for thường: ',element);   
    
}
//để giải quyết vấn đề này chúng ta dùng for/in
for (const key in array1) {
    const element = array1[key];
        console.log('for in: ',element);
    if (array1.hasOwnProperty(key)) {
        
    }
}