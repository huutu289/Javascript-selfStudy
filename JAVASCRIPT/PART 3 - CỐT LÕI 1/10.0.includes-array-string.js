//includes method chỉ tồn tại trong String và Array 
// khác nhau khi dùng trong String và Array
console.log( String.prototype.includes);
console.log( Array.prototype.includes);

//không tồn tại trong object or Date...
console.log( Object.prototype.includes);//undefined
console.log( Date.prototype.includes);//undefined

function run(input) {
    var check = typeof input;
    var isArray = Array.isArray(input)
    if(check === 'string' || isArray)
    {
        //nếu đối số thứ 2 là số âm: index = array1.length + (-1)
        //nếu index < 0 thì mặc định lại index = 0
        return input.includes('F8',-1);
    }
    else{
        return false;
    }
  
}

var text = 'Học lập trình tại F8';
var text1 = 'Học lập trình tại f8';
var arr = ['F8', 'Học lập trình'];
var array1 = ['F8 website', 'Học lập trình'];

console.log(run(array1));