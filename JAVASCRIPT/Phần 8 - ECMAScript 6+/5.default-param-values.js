/*
 thường được gán mặc định sau tham số thứ nhất
 - cho những tham số không bắt buộc truyền vào
 */
function mylog(log, isAlert = false, type = 'log') {
    if (isAlert) {
        alert('this is my alert');
    }
    console[type](log)
}
mylog("message", false, 'warn');