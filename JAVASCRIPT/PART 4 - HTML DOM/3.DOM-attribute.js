var h1Element = 
document.querySelector('h1');
//--add attribute to an element--
//cách 1
h1Element.title = 'heading';
h1Element.className = 'class-heading';
h1Element.id = 'id-heading';
h1Element.href = 'data';//lỗi: href attribute không thuộc h1--->setAttribute
//cách 2
h1Element.setAttribute('data','test data');

//--get value of attribute from an element--
//method 1
var valueOfAttribute1 = h1Element.id;//id is belonged to element
console.log('element.id: ',valueOfAttribute1);
//method 2
var valueOfAttribute2  = h1Element.getAttribute('class');
console.log('getAttribute: ',valueOfAttribute2);


// Làm bài tập tại đây

var f8LinkElement = document.querySelectorAll('a')[0];
var f8ShortLink = f8LinkElement.href;

var aElement2 = document.querySelectorAll('a')[1];
aElement2.setAttribute('data-url',f8ShortLink);