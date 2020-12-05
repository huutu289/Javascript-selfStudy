//Cách tạo ra giá trị number
//cách 1: typeof = number
var a = 20 / 11;
var b = 20 / '2';
var c = 20 / 'ab';//NaN (đại diện cho 1 số không hợp lệ do đó typeof = number)

console.log(a);
console.log(b);
console.log(c);//NaN
console.log('type of NaN: ', typeof NaN);
console.log(typeof c);//Number
//không thể so sánh 2 NaN với nhau, mặc dù c trả về NaN 
console.log('so sánh NaN == NaN: ',c == NaN);
//để kiể tra kết quả có phải NaN hay không, dùng hàm isNaN()
console.log(isNaN(c));//true

//cách 2: typeof = object
var a = new Number(1);

//2. làm việc với số: [keyword = number methods in js]
//a. tostring()
console.log(typeof b.toString(), typeof b);
//b. toFixed(): làm tròn dưới < 0.5, >=0.6 tròn lên
var PI = 3.14;//3
var test = 3.75;//4
console.log('toFixed() với số PI: ',PI.toFixed(null));//không truyền tham số or truyền falsy = [0,"",false, null, undefined, NaN] 
// or [ false, 0, -0, 0n, "", null, undefined, NaN], thì được hiểu là số 0
console.log(PI.toFixed(undefined));
console.log('test: ', test.toFixed());
console.log(PI.toFixed(1));
console.log(typeof PI.toFixed(2), typeof PI);
console.log('to fixed 3',PI.toFixed(3));
//c. 1e3
var c = 1e3, b = 2e6;
console.log(c, b);

function run(number) {

    var result = Number.isInteger(number);
    if (result && number > 0)
        return result;
}
const boolean = run('adfas');
console.log(-10, boolean);


function run(input) {
    var output = false, string;
    string = typeof input;
    if (string === 'string')
        output = true
    return output;
}

const t = run('asdfs');
console.log(t);
