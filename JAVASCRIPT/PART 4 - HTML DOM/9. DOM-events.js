/*
    DOM events
    - attribute events
    - assign event using the element node
    - nỗi bọt, click thẻ con, thẻ cha cũng cũng ảnh hưởng
 */
var _divElement = document.querySelector('.stopPoga');
var _buttonElement = document.querySelector('.clickMe');
// console.log(_divElement, _buttonElement);
_divElement.onclick = function(e){
    console.log('div');
}
_buttonElement.onclick = function(e){
    e.stopPropagation();
    console.log('click me');
}




//  var domEvents = document.querySelectorAll('.domEvent>h1');
//  console.log(domEvents);

// for(let i =0; i<domEvents.length; i++)
// {    
//     domEvents[i].onclick = function(e){        
//         console.log(e.target);
//      }

// }
//  document.onkeyup = function(e){
//     console.log(e.which);
//  }
// document.onkeypress = function(e){
//     console.log(Math.random(), e.which);
// }
/*
var _ulElement =  document.querySelector('.testPrevent');
console.log([_ulElement]);
_ulElement.onmousedown = function(e){
   e.preventDefault();   
}
_ulElement.onclick = function(e){
    console.log(e.target);
}

var aElements = document.anchors;//required name attribute
for(var i =0;i<aElements.length;i++)
{
    aElements[i].onclick = function(e){
        console.log(e.target.href);
        if(!e.target.href.startsWith('https://fullstack'))
        {
            e.preventDefault();
        }
    }
}
// var aElements = document.links;
console.log(aElements);

//--input
var $inputElement = document.querySelector('input[type="text"]');
//on change
console.log($inputElement);
$inputElement.onchange = function(e){
    console
    .log(e.target.value);
}

//on input
$inputElement.oninput = function(e){
    console.log(e.target.value);
}
$inputElement.onkeyup = function(e){
    // console.log(e.which);
    switch(e.which)
    {
        case 27:
            console.log('exit');
            break;
    }
}

//--checkbox--
var checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement);
checkboxElement.onchange = function(e){
console.log(e.target.checked);
}
//--select
var a = document.querySelector('select');
a.onchange = function(e){
    console.log(e.target.value);
}*/