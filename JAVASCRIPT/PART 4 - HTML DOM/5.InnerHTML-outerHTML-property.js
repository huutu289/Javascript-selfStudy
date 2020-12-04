/*1. innerHTML can set: -element node, -attribute node, -text node*/
var divInnerHTML = document.querySelector('.box');

//set element node, attribute node and text  node
divInnerHTML.innerHTML = '<h1 title = "heading">just added </h1>';

//set text node for .box
divInnerHTML.innerHTML = 'text node, heading';

//get 
console.log(divInnerHTML.innerHTML);

//--------------------
/*2. outerHTML - return both node and it's children*/
//get
console.log('outerHTML',divInnerHTML.outerHTML);//string
//set
divInnerHTML.outerHTML = '<a href = "test">replaced div tag</a>';

//sau khi nhận giá trị mới, biến divInnerHTML vẫn chứa giá trị cũ trong bộ nhớ, ko còn trong DOM
console.log('trong bộ nhớ vẫn còn',divInnerHTML.textContent);

//khi get sẽ trả về null div tag was removed from DOM
var divInnerHTML2 = document.querySelector('.box');
console.log('thẻ div đã bị xóa khỏi DOM',divInnerHTML2);

//lấy ra thẻ vừa ghi đè lên thẻ div trong DOM
var divOuterHTML = document.querySelector('a[href="test"]');
console.log(divOuterHTML);