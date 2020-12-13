//nếu biết trước giá trị của biên nằm trong 1 khoảng nào đó  0...9, month: 0.30 dùng switch case
//nhưng ít hơn 3 case thì nên dùng if else: code dễ nhìn hơn
var day = new Date().getDay();
switch(day)//sử dụng so sánh tuyệt đối ====
{
    case 0:// day === 0
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wendsday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');    
        break;

}
var defaultSwitch = new Date().getDay();
switch(defaultSwitch)
{
    case 0:
        console.log('Sunday');
        break;
    case 6:
        console.log('Sartuday');
        break;
    default:
        console.log('Looking forward at the weekend');
}

var weekend = new Date().getDay();

switch(weekend)
{
    default:
        console.log('a day of week');
        break;
    case 0:
    case 6:
        console.log('at the weekend');
        break;
    case 3://nếu case = 3, đi xuống 4,5 vì không có từ khóa break
    case 4:
    case 5:
        console.log('soon at the weekend');
        break;
}
