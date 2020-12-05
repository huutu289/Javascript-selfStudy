//cách tạo mảng
//cách 1
var languages = ['js',
    'php',
    'C++',
];

//Array có thể chứa bất kỳ kiểu dữ liệu gì trong js, number,string,boolean, array, object, ,...
const dataTypeOfArray = ['java',[], {}, true, false, null, undefined, '', 20, function(){}, ];
console.log(dataTypeOfArray);
//cách 2
const array2 = new Array('java',[], {}, true, false, null, undefined, '', 20, function(){},);
//type of an array is an object
console.log('kiểu dữ liệu của Array: ',typeof array2);
//cách kiểm tra biến có phải array không? Array.isArray()
console.log('checking an variable is an array: ',Array.isArray(array2));
console.log('check an object Array.isArray(): ',Array.isArray({}));

var languages2 = ['C#', 'Ruby']
//1. toString()
console.log('---------toString()------------');
console.log(languages.toString());
//2. join(): tách các phần tử của mảng
console.log('---------join()------------');
console.log(languages.join());
console.log(languages.join(' '));//cách  nhau bởi khoảng trắng (space)
console.log(languages.join(' - '));//cách nhau bởi dấu -
// 3. pop() ~ delete the last element of an array
console.log('---------pop()------------');
console.log('pop(): ', languages.pop());//deleted c++
console.log(languages.pop());//deleted php
console.log(languages.pop());//deleted js
console.log(languages.pop());//result undefined
console.log(languages);//empty array
//push ~ add to the last of array
console.log('---------push()------------');
console.log(languages2.push('Ruby'));//appends 1 element to the last of array
console.log(languages2.push('css', 'html'));//appends 2 elements
console.log(languages2);
//shift ~ remove to the first of array, nếu mảng rổng--> trả về undefined
console.log('---------shift()------------');
console.log(languages2.shift());
console.log(languages2);
//unshift ~ add to the last of array
var unShift = ['1', '2'];
console.log('---------Unshift()------------');
console.log(unShift.unshift('0'));
console.log(unShift);
console.log(unShift.unshift('-2', '-1'));
console.log(unShift);

//splice() chèn, xóa [slice() # splice()]
console.log('-------splice()------------');
var splice = [1, 2, 3, 5];
// console.log('splice delete',splice.splice(1,1));
console.log(splice);
console.log('splice insert without delete', splice.splice(1, 0, 'inserted'));
console.log(splice);
var spliceDelInsert = [1, 2, 3, 4];
console.log('splice insert and delete', spliceDelInsert.splice(1, 1, 'replace'));
console.log(spliceDelInsert);

// joining 2 arrays together
console.log('-------concat()------------');
var concatArray = [1, 2, 3];
var concatArray2 = [4, 5, 6];
console.log(concatArray.concat(concatArray2));

// slice() khác splice() ~ trả về 1 phần của mảng
console.log('-------slice()------------');
var slice = [1, 2, 3, 4, 5, 6, 7];
console.log(slice.slice(3, 6));
console.log(slice.slice(3));
console.log(slice.slice(0));//copy all elements of array
console.log(slice.slice(-3, -1));

//bài tập
function run3(anArray) {

    var count = anArray.length;
    console.log(count);
    if (count < 3) {
        anArray.shift();
    }
    else {
        console.log('ádf');
        anArray.splice(count-2, 2);
    }

    return anArray;
}

function run1(animals) {

    var count = animals.length;
    if (count === 0) {
        animals.push('Cat', 'Mouse');
    }
    else if (count === 1) {
        animals.unshift('Elephant');
    }
    else if (count > 2) {

        // console.log(animals.splice(1, 1, 'Monkey', 'Tiger'));//slice # splice
    }
    return animals;
}
var run1Array = [1,2,2,3,3,33,3,3];
var animals = [];
var test = run3(run1Array);
console.log(test);
console.log(run1(animals));


