var btn = document.querySelector('#btnDomEvent');

/*
    -DOM event
    + đơn giản
    + không muốn gỡ bỏ event
*/
btn.onclick = function (e) {
    console.log('---DOM Event---');
}
//-hủy bỏ lắng nghe
setTimeout(() => {
    btn.onclick = function () { }
}, 3000)

/*
    - lợi ích khi dùng Event listenner
        + phước tạp hơn
        + có thể muốn gỡ bỏ event (xử lý nhiều việc khi event xãy ra)
    */

var btnEventListener = document.querySelector('#btnEventListener');
function f1() {
    console.log('Event Listener: viec 1');
}
function f2() {
    console.log('Event Listener: viec 2');
}
btnEventListener.addEventListener('click', f1)
btnEventListener.addEventListener('click', f2)

setTimeout(function () {
    btnEventListener.removeEventListener('click', f1)
}, 3000);