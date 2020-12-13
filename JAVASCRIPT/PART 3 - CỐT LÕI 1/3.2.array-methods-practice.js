var arr = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
];

var arr1 = [
    { field: 'name', value: 'Sơn Đặng' },
]
var arr2 = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
]

function getRequestBodyFromValues(formValues) {

    var obj = {}
    formValues.forEach(function (formValue) {
        obj[formValue.field] = formValue.value;
    });
    return obj;
}
var result = getRequestBodyFromValues(arr);
console.log(result);

function checkPositiveNumbers(numbers) {
    return numbers.every(function (num) {
        return Number.isInteger(num) && num > 0;
    })

}
var array = [-8, 1, 2];
console.log(checkPositiveNumbers(array));

// Làm bài tập tại đây
function findAMonsterByAttack(monsters) {
    var result;
    result = monsters.find(function (m) {
        return m.attack === 150;
    });

    if (result === undefined)
        return null;
    else
        return result;
}
var array1 = [
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
console.log('monster: ', findAMonsterByAttack(array1));

var array = [1, 2, 6, 2, 8, 9, 9, 88, 8, 1, 2, 1];
var arrayLength = array.length
for (var i = 0; i < arrayLength; i++)
    for (var j = i + 1; j < arrayLength; j++) {
        if (array[i] === array[j]) {
            array.splice(j, 1);
        }
    }
console.log('sau khi xoa', array);

var arr2 = [2, 9, 6];
console.log('compare 2 arrays: ', findEqualValues(arr1, arr2));
function findEqualValues(array1, array2) {
    var result = [];
    array1.forEach(function (item1) {
        array2.forEach(function (item2) {
            if (item1 === item2) {
                result.push(item2);
            }

        })

    });
    return result;
}

// Làm bài tập tại đây
// var arr3 = [1, 2, 'hi', 3];
// var arr3 = [1, 2, function() {}, NaN];
var arr3 = [{}, 1, [], 2, 'hi', 0, 6, null, undefined, true, 1.2, NaN];

console.log('tong: ', sumNumbers(arr3));

//bài 2
function sumNumbers(inputs) {

    return inputs.reduce(function (total, currentValue, index) {
        // console.table(
        //     {
        //         "index": index,
        //         'current value': currentValue,
        //         'total': total + currentValue,
        //     }
        // );

        //1. nếu giá trị là số và số đó không phải là NaN (vì NaN là 1 số)
        if (typeof currentValue === "number" && isNaN(currentValue) === false) {

            console.log('current value: ', currentValue, ' |is integer: ', Number.isInteger(currentValue));
            return total + currentValue;
        }
        else
            return total + 0;


    }, 0)

}
