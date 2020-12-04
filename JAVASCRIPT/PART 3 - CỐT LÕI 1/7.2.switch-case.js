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
    case 3:
    case 4:
    case 5:
        console.log('soon at the weekend');
        break;
}
