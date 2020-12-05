
//0. tạo ra 1 chuỗi (2 cách)
//-cách 1, nhanh hơn
var createAString = 'test';// data type = string
//-cách 2: không khuyến khích, vì phải tạo ra 1 đối tượng (instance)
var createAStringByObject = new String();// data type = object


//- dùng dấu \ để in ra ký tự đặt biệt, backslash in javascript
var string = 'Tu Cao la \"sieu nhan\", day la dau \\';
//- layout code,  độ dài 1 dòng không nên >80 ký tự
//  + xuống dòng sau toán tử
var layoutCode = 
'cách xuống dòng và trang trí đẹp'; 
// + xuống dòng ở giữa chuỗi
var layoutCode = 'cách xuống dòng'
+'1. và trang trí đẹp'; 
+'2. và trang trí đẹp'; 
+'3. và trang trí đẹp'; 

//- độ dài chuỗi (bao gồm ký tự trắng)
console.log(string.length, string);

//2. temple string (keyword)
// - biến nội suy phải string, nếu không sẽ bị covert sang string
var fullName = 'Tu cao';
 console.log(`Toi tên là: ${fullName}`); 