/*
    Thuộc tính style của element node
    - generated css inline
    - a property of element node
    - set inline css for tags
 */
//--set
//-method 1
var domCss = document.querySelector('.box');
domCss.style.backgroundColor = 'red';
domCss.style.height = '100px';
domCss.style.width = '100px';
//-method 2
Object.assign(domCss.style, 
    {
        backgroundColor: 'green',
        height: '100px',
        width: '100px',
    });
console.log('style: ',domCss.style);
//--get
console.log('background color of box element: ',domCss.style.backgroundColor);
console.log('background color of box element: ',domCss.style.width);
console.log('background color of box element: ',domCss.style.height);
//--bài tập
var boxElement = document.querySelector('.box');
boxElement.style.backgroundColor = '#F05123';
boxElement.style.fontSize = '2rem';