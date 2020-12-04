/*
    - a property of element node
    - 4 commons methods
        1. add
        2. remove
        3. contains
        4. toggle: if a class already exist in element-->remove else add to element
 */
var elementNode = document.querySelector('.box');
var classesOfBoxElement = elementNode.classList;
console.log(classesOfBoxElement);
//length, if there are 2 the same classes name -->1
console.log('length: ',classesOfBoxElement.length);
//value
console.log('value', classesOfBoxElement.value);
//add
classesOfBoxElement.add('red','blue');
//remove
setTimeout(()=>{

    classesOfBoxElement.remove('red');
},3000);

console.log('contain method: ',classesOfBoxElement.contains('red'));
//toggle
setInterval(() => {
    classesOfBoxElement.toggle('red');
}, 1000);