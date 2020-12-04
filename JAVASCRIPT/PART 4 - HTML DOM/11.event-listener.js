var btn = document.querySelector('#btnEventListener');

/*
    -DOM event
    + đơn giản
    + không muốn gỡ bỏ event
*/
btn.onclick = function (e){
    console.log('---DOM Event---');
}

/*
    -Event listenner
    + phước tạp hơn
    + có thể muốn gỡ bỏ event (xử lý nhiều việc khi event xãy ra)
*/
function f1(){
    console.log('Event Listener: viec 1');
}
function f2(){
    console.log('Event Listener: viec 2');
}
btn.addEventListener('click',f1)
btn.addEventListener('click',f2)

setTimeout(function(){
    btn.removeEventListener('click',f1)
},3000);