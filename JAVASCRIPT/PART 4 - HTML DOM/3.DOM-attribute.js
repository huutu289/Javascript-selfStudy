var h1Element = 
document.querySelector('h1');
//--add attribute to an element--
//cách 1: sử dụng setter
h1Element.title = 'heading';
h1Element.className = 'class-heading';
h1Element.id = 'id-heading';
//lỗi: vì thẻ h1 ko có attribute data nên sinh ra lỗi, chúng ta dùng cách 2
h1Element.href = 'data';
//cách 2: dùng phương thức
h1Element.setAttribute('data','test data');

//--get value of attribute from an element--
//method 1: được gọi là setter
var valueOfAttribute1 = h1Element.id;//id is belonged to element
console.log('element.id: ',valueOfAttribute1);
//method 2: được gọi là dùng methods
var valueOfAttribute2  = h1Element.getAttribute('class');
console.log('getAttribute: ',valueOfAttribute2);


// Làm bài tập tại đây

var f8LinkElement = document.querySelectorAll('a')[0];
var f8ShortLink = f8LinkElement.href;

var aElement2 = document.querySelectorAll('a')[1];
aElement2.setAttribute('data-url',f8ShortLink);


// Làm bài tập tại đây
var h1Element = document.querySelector('h1');
// h1Element.setAttribute('title','Học lập trình tại F8');
h1Element.title = 'Học lập trình tại F8';
var divElement = document.querySelector('div');
// divElement.setAttribute('class','box');
divElement.className = 'box';
var imgElement = document.querySelector('img');
// imgElement.setAttribute('width','100px');
imgElement.width = 100;

// Làm bài tập tại đây
var divElements = documnet.querySelectorAll('div');
var theFirstDivElement = divElements[0];
var theSecondDivElement = divElements[1];
theFirstDivElement.textContent = 'Học lập trình tại F8';
theSecondDivElement.textContent = 'Thao tác với DOM qua bài tập tại F8';

