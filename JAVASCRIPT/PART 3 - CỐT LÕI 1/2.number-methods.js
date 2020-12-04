var a = 20 / 11;
var b = 20 / '2';
var c = 20 / 'ab';

console.log(a);
console.log(b);
console.log(isNaN(c));
//2. làm việc với số
//a. tostring()
console.log(typeof b.toString(), typeof b);
//b. toFixed()
var PI = 3.14;
var test = 3.75;
console.log(PI.toFixed(0));
console.log(PI.toFixed());
console.log('test: ', test.toFixed());
console.log(PI.toFixed(1));
console.log(typeof PI.toFixed(2), typeof PI);
console.log(PI.toFixed(3));
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
