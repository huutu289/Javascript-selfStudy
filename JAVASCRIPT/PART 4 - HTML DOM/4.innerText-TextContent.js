
/**
 innerText, textContent
 ---innerText: 
    + bỏ qua tags
    +không có trong text node, chỉ có trong element node
    + hiển thị như những gì thấy trên trình duyệt
---textContent: 
    + bỏ qua tags 
    +có cả trong text node
    +hiển thị toàn bộ nội dung bên trong thẻ, kể cả khoảng trắng, thuộc tính ẩn (display = none)
 */
var h1InnerText = document.querySelector('h1');
console.log(h1InnerText.innerText);
console.log(h1InnerText.textContent);
h1InnerText.innerText = '<i>new heading</i>';
h1InnerText.textContent = '<i>new heading</i>';

h1InnerText.innerText = `

new heading
`;//thêm thẻ br vào trước new heading
console.log(h1InnerText.innerText);


h1InnerText.textContent = `

new heading
`;//không thêm thẻ br vào, chỉ thêm khoảng trắng