/*
 How to learn properties and methods of element node (typenode = 1), Attributes node, text node (typenode =3)
 - khi gặp chức năng mới: thử xem chức yêu cầu gì
 - log element ra: xem các từ tiếng anh để đoán nghĩa các thuộc tính hoặc phương thức sẽ dùng
 - một vài thuộc tính chung cho cả 3 nodes ví dụ: textContent, baseURI,...
 - thuộc tính riêng của từng loại node: ví dụ element node có innerHTML, outerHTML (textNode và Atrribute node k có)
 */

var elementNode = document.querySelector('.box');
//-width and height of element, top, left
console.log('height: ',elementNode.clientHeight, 'width: ',elementNode.clientWidth, 'top: ', elementNode.clientTop, elementNode.clientLeft);
console.log([elementNode]);
//- draggable
// console.log('dragable: '.elementNode.draggable);
//-first child
console.log('first child: ', elementNode.firstChild, 'last child: ', elementNode.lastChild);//text
//- first element child
console.log(elementNode.firstElementChild);//h1
console.log(elementNode.lastElementChild);
//class list, dùng rất nhiều-->tìm hiểu kỹ
console.log('class list: ',elementNode.classList);
//1. thuộc tính attributes
var attributesOfDiv = elementNode.attributes;
console.log('thuộc tính của .box: ',attributesOfDiv);

//2. childElement
console.log('elements node of .box: ',elementNode.childElementCount);
//- child nodes (3 types of nodes)
console.log('3 types of nodes: ',elementNode.childNodes);
//3. base URI
console.log('base URI: ', elementNode.baseURI);
// - chuẩn tài liệu
console.log('chuẩn tài liệu, name space uri: ',elementNode.namespaceURI);
// - next element sibbling
console.log('next element sibbling', elementNode.nextElementSibling);
// next sibbling
var nexSiblingNode = elementNode.nextSibling;
console.log('next sibbling: ', nexSiblingNode);
//- type node of text node
console.log('type node of text node: ',nexSiblingNode.nodeType);
//-type node of element node
console.log('type  node of element node: ',elementNode.nodeType);
//type node of attribute node
var attributeNode = elementNode.attributes;
console.log([attributeNode]);
//- owner document
console.log('owner document: ',elementNode.ownerDocument);
console.log(elementNode.ownerDocument === document);
//- parent element
console.log('parent element node: ',elementNode.parentElement);
//parent node
console.log('parent node: ',elementNode.parentNode);
//scroll height
console.log('scroll height: ',elementNode.scrollHeight);
//check spell
console.log('spell check: ',elementNode.spellcheck);
//style: liên quan đến CSS, dùng nhiều-->học kỹ
console.log('CSS style: ',[elementNode.style]);
//tab index, đánh thứ tự
console.log('tab index: ',elementNode.tabIndex);
 console.log('text node: ',[elementNode]); 

 var lastDivElemnt = document.querySelector('div');
 console.log('fist child: ',lastDivElemnt.firstChild);
 console.log('last child: ',lastDivElemnt.lastChild);
 console.log('first element child: ',lastDivElemnt.firstElementChild);


 console.log([lastDivElemnt]);
 console.log(lastDivElemnt.childNodes);
 var childrenNodes = lastDivElemnt.childNodes;
 var secondTextNode = '';
 var fistTextNode = '';
 for(var i in childrenNodes)
 {
     if(childrenNodes[i].nodeType===3 && childrenNodes[i].nodeValue.trim() ==='Text 1')
     {
         fistTextNode= childrenNodes[i].nodeValue;
         break;
     }
    
 }
 for(var i in childrenNodes)
 {
    if(childrenNodes[i].nodeType===3 && childrenNodes[i].nodeValue.trim() ==='Text 2')
    {
        secondTextNode= childrenNodes[i].nodeValue;
        break;
    }
    
 }
 console.log(fistTextNode,secondTextNode, childrenNodes);


 var node = document.querySelector('div').childNodes;
 var textNode1 = '';
 var textNode2 = '';
 var h1Element = '';

 for(let i = 0; i<node.length;i++) {
     if (node[i].nodeType == 3) {
        if(node[i].textContent.trim() === 'Text 1') {
            textNode1 = node[i]
        }

        if (node[i].textContent.trim() === 'Text 2') {
            textNode2 = node[i]
        }
     }
     if (node[i].nodeType == 1) h1Element = node[i];
 }
console.log(textNode1, textNode2, h1Element);