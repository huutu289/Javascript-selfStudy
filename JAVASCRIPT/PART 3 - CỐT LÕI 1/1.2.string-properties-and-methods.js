

//----------- II làm việc với chuỗi [keyword = JS string methods]---------
var myString = 'Cao Huu Tu';
var string2 = 'javascript';
//1.length property (tính cả khoảng trắng trước và sau chuỗi)
console.log('length property: ', myString, ", ", myString.length);

//2.indexOf():  vị trí đầu tiên xuất hiện chuỗi con trong chuỗi mẹ (số 8 vị trí bắt đầu tìm kiếm trong chuỗi)
console.log(myString.indexOf('T', 8));

//3.lastIndexOf(): vị trí cuối cùng xuất hiện chữ cái u
console.log('lastIndexOf(): ', myString.lastIndexOf('u'));

//4. search(): vị trí đầu tiên xuất hiện chuỗi con trong chuỗi mẹ
console.log('Search method: ', myString.search('T'));

//5. slice(): cắt 1 chuỗi con từ chuỗi mẹ
console.log('Cut string: ', myString.slice(-2));
console.log('Cut string: ', myString.slice(4, 7));
console.log('Cut string: ', myString.slice(0));
console.log('Cut string: ', myString.slice(-3, -1));

//6. thay thế 
console.log('Replace string: ', myString.replace(/Cao/g, 'Phan')); // [/Cao/g:] biểu thức chính quy

//7. in hoa và in thường chuỗi
console.log('upper case: ', myString.toUpperCase());
console.log('lower case: ', myString.toLowerCase());

//8.trim(): bỏ khoảng trống trước và sau chuỗi
console.log('Trim: ', myString.trim());
console.log('check length of string after trim(): ', myString.length);

//9.split(): tách chuỗi-->return []
console.log('split method: ', myString.split(' '));
console.log('split method: ', string2.split(''));//trả mảng các ký tự

//10.charAt():  Returns the character at the specified index.
console.log('Chart at: ', typeof string2.charAt(100));//return string


//11. lấy ký tự trong chuỗi theo index
console.log('get string by index: ', string2[1]);
console.log('get string by index: ', string2[10]);

//11.1 nếu dùng dạng []--> trả về undefined nếu không tìm thấy
console.log('dùng dạng []', string2[100]);
//11.2 kiểu dữ liệu undefined
console.log('kiểu dữ liệu nếu dùng [], không tìm thấy', typeof string2[100]);

//----------------------------------bài tập:-----------------------------
// https://fullstack.edu.vn/learning/javascript-co-ban/lam-viec-voi-chuoi

function run1(statusText) {
    var result = false;
    if (typeof statusText === 'string' && statusText.length >= 1) {
        result = true;
    }

    return result;
}
console.log(run1([2000]));

//cách 1: dùng search
function run2Search(title, description) {
    var jsTitle = title.search('Javascript');
    var jsDes = description.search('Javascript');
    var result = false;
    if (jsTitle != -1 && jsDes != -1) {
        result = true;
    }

    return result;
}
//cách 2: dùng includes, cách 3: dùng indexOf
function run2Include(title, description) {
    var jsTitle = title.includes('Javascript');
    var jsDes = description.includes('Javascript');

    return jsDes && jsTitle;
}
console.log(run2Include('toi dang hoc Javascript', 'string trong Javascript'));


function run4Substring(title) {
    var language = title.substr(4, 10);
    var rest = title.substr(14);
    return `Language is ${language} and rest is ${rest}`;
}

console.log(run4('Học Javascript tại F8'));

function run4Slice(title) {
    var language = '', rest = '';
    language = title.slice(4, 14);
    rest = title.slice(14);
    return `Language is ${language} and rest is ${rest}`;
}

function run5(content) {

    return content.replace(/JS/g, 'Javascript')
}
function run6(a, b) {

    a = a.toLowerCase();
    b = b.toUpperCase();

    return a + '|' + b;
}

