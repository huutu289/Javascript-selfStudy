console.log( String.prototype.includes);
console.log( Array.prototype.includes);
console.log( Object.prototype.includes);
console.log( Date.prototype.includes);

function run(input) {
    var check = typeof input;
    var isArray = Array.isArray(input)
    if(check === 'string' || isArray)
    {
        return input.includes('F8');
    }
    else{
        return false;
    }
  
}

var text = 'Học lập trình tại F8';
var text1 = 'Học lập trình tại f8';
var arr = ['F8', 'Học lập trình'];
var arry1 = ['F8 website', 'Học lập trình'];

console.log(run(arry1));