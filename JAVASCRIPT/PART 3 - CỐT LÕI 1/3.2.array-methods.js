/**
 * 1. forEach()
 * 2. every()
 */
var courses = [
    {
        id: 1,
        name: 'PHP',
        coin: 20,
    },
    {
        id: 2,
        name: 'Java',
        coin: 10,
    },
    {
        id: 3,
        name: 'JS',
        coin: 20,
    },
    {
        id: 4,
        name: 'HTML',
        coin: 0,
    },
    {
        id: 5,
        name: 'CSS',
        coin: 0,
    },
    {
        id: 4,
        name: 'HTML',
        coin: 20,
    },
]
//forEach()
courses.forEach(function (course, index) {
    console.log(index, course.name);
});
//every() điều kiện đúng mới duyệt tiếp, ngược lại thoát: trả về boolean
const t = courses.every(function (course, index) {
    console.log(index);
    return course.coin !== 0

});
console.log(t);
//some(): trả về boolean
console.log('--array.some()---');
var array2 = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 5

});
console.log(array2);
//find(), trả về phần tử đầu tiên
console.log('--array.find()---');
var array2 = courses.find(function (course, index) {
    console.log(index);
    return course.name === 'HTML'

});
console.log(array2);
//filter(), trả về tất cả phần tử thỏa mãn <> find()
console.log('--array.filter()---');
var array2 = courses.filter(function (course, index) {
    console.log(index);
    return course.name === 'HTML'
});
console.log(array2);
//map(): cách 1: định nghĩa hàm trực tiếp 
/*
- nếu không truyền đối số cho map() thì map sẽ gọi undefined() -->lỗi 
- ứng dụng trong thực tế: render ra view từ mảng (trả về từ backend)
*/
console.log('--array.map()---');
var array2 = courses.map(function (course, index) {
    course.id = course.id;
    course.name = `Javascript ${course.name}`;
    course.coin = `${course.coin} ${course.id}`;
    console.log(course);
    return `<h2> ${course.name}</h2>`

});
console.log(array2.join(''));
//map(): cách 2:  định nghĩa hàm courseHandler bên ngoài
function courseHandler(course) {
    return course.name;
}
var newCourse = courses.map(courseHandler);
console.log(newCourse);


function convertToBoolean(inputs) {

    return inputs.map(function (input) {
        return Boolean(input);
    });
}
var inputs = [1, 'hi', false, 8, undefined, '', NaN];

var result = convertToBoolean(inputs);
console.log(result);

function getRequestBodyFromValues(formValues) {
    var aObject = {};
    for (item of formValues) {
        aObject[item.field] = item.value;
    }
    return aObject;
}
function getRequestBodyFromValues1(formValues) {
    var aObject = {};
    formValues.forEach(function (item, index) {
        aObject[item.field] = item.value;
    });
    return aObject;
}

var inputs = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]
var result = getRequestBodyFromValues1(inputs);
console.log(result);
function checkPositiveNumbers(numbers) {
    return numbers.every(function (item) {
        console.log(item);
        return Number.isInteger(item) && item > 0
    });
}
var numbers = [1, -2, 3, 4];
var result = checkPositiveNumbers(numbers);
console.log(result);

function findAMonsterByAttack(monsters) {
    var test = monsters.find(function (m) {
        return m.attack === 150;
    });
    if (test === undefined) {
        return null;
    }
    else {
        return test;
    }

}

var monsters = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
    // ...
]
var result = findAMonsterByAttack(monsters);
console.log(result);

// Làm bài tập tại đây
function findStringsInArrayByKeyword(keyword, strings) {

    var result = strings.filter(function (item) {
        return item.includes(keyword);
    });
    return result;
}

function findEqualValues(array1, array2) {
    return array2.filter(function (item2, i) {
        return array1.indexOf(item2) > -1
    });
}
var array1 = [1, 3, 4, 5, 6];
var array2 = ['1', '2', '3'];
var array2 = [7, 8, 9];
var result = findEqualValues(array1, array2);
console.log(result);

//reduce()
/*lần chạy trước return kq gì thì lần tiếp theo nhận được đúng kết quả đó
- nếu không truyền giá trị khởi tạo: thì accumulator lấy giá trị đâu tiên của mảng làm giá trị khởi tạo
- total = a[0] (giá trị đầu tiên của mảng)
- currentValue = a[1] (or giá trị thứ 2 trong mảng)
- nếu kiểu dữ liệu mong muốn trả về = kiểu dữ liệu của các giá trị trong mảng,
    chúng ta có thể bỏ giá trị khởi tạo
*/
var getSum = function (accumulator, currentValue, currentIndex, OriginalArray) {
    console.table(currentIndex, accumulator);
    return accumulator + currentValue;
}

var total = array1.reduce(getSum, 0);
console.log(total);
//reduce example
var arr = [1, 2, 3, [4, 5], [8, 9, 10]];

var flatArray = function (total, currentValue) {
    return total.concat(currentValue);
}
var result = arr.reduce(flatArray, []);
console.log(result);
var topics = [
    {
        topic: 'Front-end',
        course: [
            { id: 1, title: 'HTML & CSS' },
            { id: 2, title: 'JavaScript' }
        ]
    },
    {
        topic: 'Back-end',
        course: [
            { id: 1, title: 'PHP' },
            { id: 2, title: 'Java' },
            { id: 3, title: 'C#' },
            { id: 4, title: 'Node JS' }
        ]
    }
]
var getCourse = function(course){
    var aCourse = course.course;
    var title = aCourse.map(function(obj){
        return obj.title;
    });
    return title;
}
var result = topics.map(getCourse);
var flatArray1 = function(accumulator, currentValue, currentIndex, OriginalArray){
    return accumulator.concat( currentValue);
}
var afterFlat = result.reduce(flatArray1, []);
console.log(afterFlat);

var newCourses = topics.reduce(function(accumulator, currentValue){
    return accumulator.concat(currentValue.course);

},[]);
console.log(newCourses);

var afterFlat1 = newCourses.map(function(obj){
    return obj.title;
});
console.log(afterFlat1);