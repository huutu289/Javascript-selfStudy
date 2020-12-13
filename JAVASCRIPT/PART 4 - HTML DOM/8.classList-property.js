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
//-length, if there are 2 the same classes name -->1
console.log('length: ',classesOfBoxElement.length);
//-value: kể cả khoảng trắng bên trong class
console.log('value', classesOfBoxElement.value);
//-add: phải có dấu ,
classesOfBoxElement.add('red','blue');
//-remove
setTimeout(()=>{

    classesOfBoxElement.remove('red');
},3000);
//- contains(): kiểm tra xem 1 class có tồn tại trong element node ?
console.log('contain method: ',classesOfBoxElement.contains('red'));
//-toggle: nếu có rồi thì gỡ bỏ, chưa có thêm vào
setInterval(() => {
    classesOfBoxElement.toggle('red');
}, 1000);