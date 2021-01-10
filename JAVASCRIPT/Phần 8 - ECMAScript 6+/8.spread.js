/*------- dùng spread để hợp nhất 2 array---------- */
var array1 = ['php', 'JavaScript']
var array2 = ['C#', 'C++', 'Ruby'];
//yêu cầu: tạo 1 array3 = array1 nối với array2
//cách 1: concat()
var array3 = array1.concat(array2);
console.log('dùng concat(): ',array3);
//cách 2: dùng toán tử spread
var array3 = [...array1, ...array2]
console.log("dùng toán tử spread: ",array3);

/*------- dùng spread để hợp nhất 2 object---------- */
var object1 = { name: 'php',}
var object2 = {price: 1000,}
//yêu cầu: hợp nhất 2 object dùng spread
var object3 = { 
    ...object1,
    ...object2
}
console.log(object3);

var array4 = [1,2,3,4,7,8,20,6];
function logger(...rest) {
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        console.log(element);
    }
}

logger(...array4);//toán tử spread