
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