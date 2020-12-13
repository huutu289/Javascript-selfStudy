
/*
 innerText, textContent
 ---innerText: 
    + bỏ qua tags
    +không có trong text node, chỉ có trong element node
    + lấy những gì thấy trên trình duyệt
---textContent: 
    + bỏ qua tags 
    +có cả trong text node
    +hiển thị toàn bộ nội dung bên trong thẻ, kể cả khoảng trắng, thuộc tính ẩn (display = none)
 */
var h1InnerText = document.querySelector('h1');
//1. lấy ra
console.log(h1InnerText.innerText);
console.log(h1InnerText.textContent);

//2. thêm vào
h1InnerText.innerText = '<i>new heading</i>';
h1InnerText.textContent = '<i>new heading</i>';

//2.1 innerText: thêm thẻ br vào trước new heading vì có khoảng trắng và xuống dòng
h1InnerText.innerText = `
new heading
`;
console.log(h1InnerText.innerText);


//2.2 innerContent: không thêm thẻ br vào, chỉ thêm khoảng trắng
h1InnerText.textContent = `

new heading
`;
var listItem1 = document.querySelector('.listItem1');

// listItem1.innerHTML = '<li class ="li-1">  text 1 </li> <li>'
// +' text 2 </li>';
console.log(listItem1);
console.log('inner html: ',listItem1.innerHTML);
console.log('inner text: ',listItem1.innerText);//ko in ra displayy = none
console.log('text content: ',listItem1.textContent);//in ra luoon display = none
//để xem giá trị thực click chuột phải chọn edit as html sẽ thấy các ký hiệu được 
//sinh ra bởi browser
listItem1.innerText = '<li> 1 </li> <li> 2 </li>';//browser hiểu ra 1 text, ko phải thẻ


var h1Element = document.querySelector('h1')
//--thêm vào bằng template string: inner text
//-có thêm thẻ br nếu có dấu enter
h1Element.innerText = `
template string
`;
console.log(h1Element.innerText);

//--thêm vào bằng template string: text innerContent
//- không có thẻ br đc thêm vào
h1Element.textContent = `
template string
`;
console.log(h1Element.textContent);