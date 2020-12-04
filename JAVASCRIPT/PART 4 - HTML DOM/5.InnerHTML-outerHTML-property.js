/*
1. innerHTML can set:
-element node
- attribute node
-text node
*/
var divInnerHTML = document.querySelector('.box');
divInnerHTML.innerHTML = '<h1 title = "heading">just added </h1>';//set element node, attribute node and text  node

//set text node for .box
// divInnerHTML.innerHTML = 'text node, heading';

//get 
console.log(divInnerHTML.innerHTML);

/*
    2. outerHTML
    - return both node and it's children
 */
//get
console.log('outerHTML',divInnerHTML.outerHTML);//string
//set
divInnerHTML.outerHTML = '<a href = "test">replaced div tag</a>';

console.log('in memory',divInnerHTML.textContent);

var divInnerHTML2 = document.querySelector('.box');
console.log('div 2',divInnerHTML2);//null div tag was removed from DOM

var divOuterHTML = document.querySelector('a[href="test"]');
console.log(divOuterHTML);