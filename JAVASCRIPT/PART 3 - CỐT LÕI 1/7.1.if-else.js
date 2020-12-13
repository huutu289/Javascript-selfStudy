var date = 2;
var dateElement = document.querySelector('.date');
var selectElemnt = document.querySelector('select');
selectElemnt.oninput = function(e){
    date = e.target.value;
    checkDate(date);
}
const checkDate = function(date){
    
    date = Number(date);
    //cách này không tối ưu vì sau khi thõa mãn điều kiện
    //vẫn chạy xuống kiểm tra cá if phía dưới, chạy nhiều khối code
    if(date ===2)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===3)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===4)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===5)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===6)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===7)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
   if(date ===8)
    dateElement.innerHTML = `Hôm nay là chủ nhật`
    //cách 2: nếu nhiều hơn 3 if else thì dùng switch case
    //chỉ 1 khối code
    if(date === 2)
    dateElement.innerHTML = `Hôm nay là thứ ${date}`
    else if(date === 3)
    {
        dateElement.innerHTML = `Hôm nay là thứ ${date}`
    }
    else if(date ===4)
    {
        dateElement.innerHTML = `Hôm nay là thứ ${date}`
    }
    else//vì dụ date = 5 (chỉ kiểm tra từ thứ 2..5)
    {
        dateElement.innerHTML = `Hôm nay là thứ ${date}`
    }
}



// Làm bài tập tại đây

function run(number) {
    
    if(number%3===0 && number != 15)
    {
        return 'f';
    } else if (number%5===0 && number != 15)
    {
        return 8;
    }
    else if (number%15===0)
    {
        return 'f8';
    }

}
//or
function run(number) {
    
    if(number%15===0)
    {
        return 'f8';
    } else if (number%3===0)
    {
        return 'f';
    }
    else if (number%5===0)
    {
        return 8;
    }

}