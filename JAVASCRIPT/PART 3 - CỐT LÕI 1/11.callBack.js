
/* -------------ứng dụng thực tế của callBack-------------------
Sơn Đặng
Lưu Quang Trí Callback trong thực tế thường được sử dụng với các thao tác xử lý bất đồng bộ như: 
Đọc file, network request (Call API) hoặc sử dụng với một số hàm nhận đối số là một hàm như:
 setTimeout, setInterval, array map / find / filter ... methods.

Ví dụ cho thao tác call API sử dụng callback:

Vì thao tác call API (send network request) là một thao tác bất đồng bộ (asynchronous) nên 
việc xử lý theo cách nghĩ đồng bộ (synchronous) ta sẽ không thể lấy được responseText trong ví dụ dưới đây.

Vì vậy ta có thể sử dụng callback để lấy được responseText sau khi có phản hồi từ request (đọc ví dụ dưới đây):
*/
// hàm send request
function send(url, method, callback, async) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            // khi API có phản hồi thì gọi lại callback
            // và truyền response làm đối số của callback
            if (typeof callback === 'function') {
                callback(xhttp.responseText);
            }
        }
    };

    xhttp.open(method, url, async);
    xhttp.send();
}

// khi gọi hàm, truyền đối số có cho tham số callback
// là một hàm

send(
    'https://jsonplaceholder.typicode.com/todos/1',
    'GET',
    function (responseText) {
        // khi có phản hồi thành công của HTTP request
        // mã trong hàm này sẽ được thực thi

        // Ở đây ta nhận được responseText

        var response = JSON.parse(responseText);

        // viết công việc khác của bạn tại đây
        console.log(response);
    }
);
//--------------------------------CallBack là gì---------------------------------------
/*
    1. nó phải là 1 hàm
    2. được truyền cho hàm khác dưới dạng đối số
 */
function callback(course, index) {
    return `${index} - ${course}`;

}
Array.prototype.map2 = function () {
    var output = [];

    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        output.push(result);

    }
    return output;
};
var courses = ['JS', 'PHP', 'JAVA'];

// var result  = courses.map2();
// console.log(result);
courses.map(function (item, index) {

});

courses.length = 8;
// for in + hasOwnProperty(), không muốn duyệt qua prototype của mảng
console.log('This.hasOwnProperty()');
for (var index in courses) {
    if (this.hasOwnProperty(index))
        console.log(index);
}

for (var obj of courses) {
    console.log(obj);
}
// console.log(Array.prototype); 
// console.log(Number.prototype); 
// console.log(Number.prototype.toFixed()); 
// var testArray = new Array(10);
// testArray.push('JS', 'PHP')
// console.log(testArray);

var courses = ['js', 'php', 'js javascript'];
var courses = [];

//--filter2
Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var t = courses.filter2(function (course, index, array) {
    return course.includes('js');
});
console.log(t);


//--some2
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var t = callback(this[index], index, this);
            if (t) {
                return t;
            }
        }
    }
    return false;
}

var t = courses.some2(function (course, index, array) {
    return course === 'JS';
});
console.log(t);
var i = 0;
function showLog() {
    console.log('log: ', ++i);
}
// setInterval(showLog, 1000);

//-------------------viết lại các hàm của array---------------

var arrayForEach = ['Java', 'ruby', 'C#', 'C++', 'HTML & CSS', 'php', 'JavaScript'];

var arrayInteger = [1, 2, 3, 5, 6, 8];
Array.prototype.forEach2 = function (callback) {
    for (const key in this) {
        //không duyệt thuộc tính được thêm vào trong Array.prototype 
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            callback(element, key, this);
        }
    }
}
Array.prototype.some2 = function (callback) {
    var check = false;
    for (const key in this) {

        if (this.hasOwnProperty(key)) {
            const element = this[key];
            check = callback(element, key, this);
            if (check) {
                return check;
            }

        }
    }
    return check;
}
Array.prototype.find2 = function (callback) {
    var check = false;
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            check = callback(element, key, this);
            if (check) {
                return element;
            }

        }
    }
    if (!check)
        return undefined;
}
Array.prototype.filter2 = function (callback) {
    var check = false;
    var arr = [];
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            check = callback(element, key, this);
            if (check) {
                arr.push(element);
            }

        }
    }
    return arr;
}
Array.prototype.map2 = function (callback) {

    var arr = [];
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            arr.push(callback(element, key, this))
        }
    }
    return arr;
}
Array.prototype.reduce2 = function (callback) {
    var total = 0;
    for (const key in this) {
        
        if (this.hasOwnProperty(key)) {
            
            const element = this[key];
            total =  callback(total, element, key, this);
        }
    }
    return total;
}

console.log('------------------------forEach()---------------------');
arrayForEach.forEach2(function (currentValue, index, ogrinalArray) {
    console.log(currentValue);
});
console.log(Array.prototype);
console.log('------------------------Some()---------------------');
var result = arrayForEach.some2(function (currentValue, index, ogrinalArray) {
    return currentValue.includes('J');
});
console.log(result);
console.log('------------------------find()---------------------');
var result = arrayForEach.find2(function (currentValue, index, ogrinalArray) {
    return currentValue.includes('Jsaf');
});
console.log(result);

console.log('--------------------- filter()---------------------');
var result = arrayForEach.filter2(function (currentValue, index, ogrinalArray) {
    return currentValue.includes('J');
});
console.log(result);

console.log('--------------------- map()---------------------');
var result = arrayInteger.map2(function (currentValue, index, ogrinalArray) {
    return currentValue * 2;
});
console.log(result);

console.log('--------------------- reduce()---------------------');
var result = arrayInteger.reduce2(function (total, currentValue, index, ogrinalArray) {
    return total + currentValue;
},0);
console.log(result);

arrayInteger.forEach2(function(item){
    console.log(item);
});