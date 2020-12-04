// I. kiến thức cốt lõi
// I.1. chuỗi
// var string = 'Tu Cao la \"sieu nhan\", day la dau \\'
// + 'cách xuống dòng '
// +'và trang trí đẹp'; //layout code
// console.log(string.length, string);

// var fullName = 'Tu cao';
// console.log(`Toi tên là: ${fullName}`); //keyword - temple string

// I.2. làm việc với chuỗi - keyword = JS string methods
var myString = 'Cao Huu Tu';
var string2 = 'javascript';
console.log('length property: ', myString, ", ", myString.length); //1-length property
console.log(myString.indexOf('T', 8));//2 - indexOf(), 8 vị trí bắt đầu tìm kiếm
console.log('lastIndexOf(): ', myString.lastIndexOf('u'));
console.log('Search method: ', myString.search('T')); //index and search phân biệt hoa thường
console.log('Cut string: ', myString.slice(-2));
console.log('Cut string: ', myString.slice(4, 7));
console.log('Cut string: ', myString.slice(0));
console.log('Cut string: ', myString.slice(-3, -1));

console.log('Replace string: ', myString.replace(/Cao/g, 'Phan')); // [/Cao/g:] biểu thức chính quy
console.log('upper case: ', myString.toUpperCase());
console.log('lower case: ', myString.toLowerCase());

console.log('Trim: ', myString.trim());
console.log('check length of string after trim(): ', myString.length);
console.log('split method: ', myString.split(' '));
console.log('split method: ', string2.split(''));

console.log('Chart at: ', typeof string2.charAt(10));
console.log('get string by index: ', string2[1]);
console.log('get string by index: ', string2[10]);


function run(statusText) {
    var result;
    if (typeof statusText === 'string' && statusText.length >= 1) {
        result = true;
    }
    else {
        result = false;
    }
    return result
}
function run(title, description) {
    var jsTitle = title.search('Javascript');
    var jsDes = description.search('Javascript');
    var result = false;
    if (jsTitle != -1 && jsDes != -1) {
        result = true;
    }

    return result;
}

function run(title) {
    var language = '', rest = '';
    language = title.slice(4, 14);
    rest = title.slice(15);
    return `Language is ${language} and rest is ${rest}`;
}

function run(content) {

    return content.replace(/JS/g, 'Javascript')
}
function run(a, b) {
    
    a = a.toLowerCase();
    b = b.toUpperCase();

    return a + '|' + b;
}
const h = run('HI', 'hi');
console.log(h);
// Làm bài tập tại đây
var commentText =  "Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó";
console.log(commentText);


var commentText = "\"Học chưa hiểu là học chưa đủ!\"";
var authorName = "Sơn Đặng";
var fullCommentText = `${authorName} ${commentText}`;
console.log(fullCommentText);


function run(title) {
    var language = title.slice(4,14);
    var rest = title.slice(15);
    console.log(language, rest);
    return `Language is ${language} and rest is ${rest}`;
}
const t = run('Học Javascript tại F8');
console.log(t);