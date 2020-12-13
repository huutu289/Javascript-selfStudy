var aElemets = document.links;
console.log(aElemets);
for (var i = 0; i < aElemets.length; i++) {
    aElemets[i].onclick = function (e) {

        // cách 1: if(e.target.href.includes('full'))
        if (e.target.href.startsWith('https://full'))//cách 2
        {
            e.preventDefault();
            console.log(e.target);
        }
    }
}

var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault();
}
//mặc dù bắt sự kiện onclick trên thẻ ul  nhưng khi click vào thẻ con của ul
// thì ul vẫn hoạt động vì nỗi bọt progapation
ulElement.onclick = function (e) {
    console.log(e.target.textContent);
}

//-- stop Progapation: dừng nỗi bọt
var stopPropagation = document.querySelector('.stopPropagation');
stopPropagation.onclick = function (e) {
    console.log(e.target);
}

var buttonInDiv = document.querySelector('button');
buttonInDiv.onclick = function (e) {
    e.stopPropagation();
    console.log(e.target);
}