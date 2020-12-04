

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

//9.split(): tách chuỗi
console.log('split method: ', myString.split(' '));
console.log('split method: ', string2.split(''));

//10.charAt():  Returns the character at the specified index.
console.log('Chart at: ', typeof string2.charAt(10));

//11. lấy ký tự trong chuỗi theo index
console.log('get string by index: ', string2[1]);
console.log('get string by index: ', string2[10]);

//bài tập
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