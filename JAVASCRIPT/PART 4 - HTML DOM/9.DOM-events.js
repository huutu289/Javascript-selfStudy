/*
    DOM events
    - attribute events: viết js inline trực tiếp trên thẻ html
    - assign event using the element node: viết trong file js, gán cho element node
    - nỗi bọt:  click thẻ con, thẻ cha cũng cũng ảnh hưởng
    - bao gồm những hành vi của user và trình duyệt (bắt đầu tải trang web, đang tải, tải xong,...)
 */
var _divElement = document.querySelector('.stopPoga');
var _buttonElement = document.querySelector('.clickMe');
console.log(_divElement, _buttonElement);
//--các sự kiện thông dụng
//-onclick
_divElement.onclick = function (e) {
    console.log('div');
}
_buttonElement.onclick = function (e) {
    e.stopPropagation();
    console.log('click me');
}

var domEvents = document.querySelectorAll('.domEvent>h1');
console.log(domEvents);

for (let i = 0; i < domEvents.length; i++) {
    domEvents[i].onclick = function (e) {
        console.log(e.target);
    }

}
//-key up
document.onkeyup = function (e) {
    console.log(e.which);
}
//-key press
document.onkeypress = function (e) {
    console.log(Math.random(), e.which);
}

var _ulElement = document.querySelector('.testPrevent');
console.log([_ulElement]);
//-mouse down
_ulElement.onmousedown = function (e) {
    e.preventDefault();
}
_ulElement.onclick = function (e) {
    console.log(e.target);
}
//--input
var $inputElement = document.querySelector('input[type="text"]');
//-on change: sau khi blur ra khỏi thẻ input (ko focus nữa)
console.log($inputElement);
$inputElement.onchange = function (e) {
    console
        .log(e.target.value);
}

//-on input: lấy ra ngay khi gõ
$inputElement.oninput = function (e) {
    console.log(e.target.value);
}
$inputElement.onkeyup = function (e) {
    console.log(e.which);//mã code của phím vừa nhấn
    switch (e.which) {
        case 27://phím ESC
            console.log('exit');
            break;
        case 13:// phím enter 
            console.log('send chat');
            break;
    }
}

//--checkbox
var checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement);
checkboxElement.onchange = function (e) {
    console.log(e.target.checked);//kiểm tra đã check hay chưa
}

//--select
var a = document.querySelector('select');
a.onchange = function (e) {
    console.log(e.target.value);
}

//--preventDefault(): ngăn chặn sự kiện mặc định
var aElements = document.anchors;//required name attribute on a tag
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        console.log(e.target.href);
        if (!e.target.href.startsWith('https://fullstack')) {
            e.preventDefault();
        }
    }
}
console.log('xem index: ',i);
var aElements = document.links;
console.log('thuộc tính links',aElements);