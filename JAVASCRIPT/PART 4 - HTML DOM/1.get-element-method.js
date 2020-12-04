//cách lấy ra 1 elemnt từ DOM, id, class, tag, CSS selector, HTML collections,

//1.get element by id
console.log('-----------get element by id-----------');
var headingNode = document.getElementById('heading');
//nếu kq trả về null ==> or có 2 id trong HTML DOM or sai tên id
console.log([headingNode]);
console.log(
    heading = {headingNode}
    );
//2. get element by class
console.log('-----------get element by class-----------');
var headingNodes = document.getElementsByClassName('heading');// HTML collections
//kết quả headingNode giống mảng 
//nhưng không có các methods. map(), filter(), find(),...
console.log(headingNodes);
//3. get element by tag name
console.log('-----------get element by tag nam-----------');
var tagName = document.getElementsByTagName('h2');
//kết quả headingNode giống mảng 
//nhưng không có các methods. map(), filter(), find(),...
console.log(tagName);
//4. get element by CSS selector
//lấy ra một phần tử
console.log('-----------get element by CSS selector~ tagname-----------');
var ccsSelector = document.querySelector('h1');//trả về thể đầu tiên
console.log(ccsSelector);
console.log('-----------get element by CSS selector-----------');
var ccsSelector = document.querySelector('.heading');//trả về thể đầu tiên
console.log(ccsSelector);

console.log('---get element by CSS selector (từ cha vào con)---');
var ccsSelector = document.querySelector('.box .heading-2');//trả về thể đầu tiên
console.log(ccsSelector);

console.log('---get element by CSS selector (từ cha vào con)---');
var ccsSelector = document.querySelector('.box .heading-2:nth-child(2)');//trả về phần tử số 2
console.log(ccsSelector);
//lấy ra tất cả các phần tử thõa mãn
console.log('---get element by CSS selector all---');
var ccsSelectors = document.querySelectorAll('.box .heading-2');//all tags
console.log(ccsSelectors); // trả về nodelists, sự khác nhau nodelists <> HTML collections

//5. get element by HTML collections, chỉ một số thẻ có: a, form, img,..
//-thẻ form
console.log('---get element by HTML collections---');
var htmlCollection = document.forms['form-1'];
console.log(htmlCollection);
//tất cả thẻ form
var htmlCollections = document.forms;
console.log(htmlCollections);
//trỏ trực tiếp đến id của form
var htmlCollection = document.forms.formRegister;
console.log(htmlCollection);
//-thẻ a, phải có thuộc tính name
var aTags = document.anchors;
console.log(aTags);
//-thẻ img
var imgTags = document.images
console.log(imgTags);


// Làm bài tập tại đây
var boxHTMLCollection = document.getElementsByClassName('box');
var box1Element = document.querySelector('.box');
var box2Element = document.querySelector('.box:last-child');
var allItemElements = document.getElementsByTagName('li');
var box1ItemElements = document.querySelectorAll('.box:last-child .item');

// Làm bài tập tại đây
var h1Element = document.getElementsByTagName('h1');
var h2Element = document.getElementsByTagName('h2');
var h3Element = document.getElementsByTagName('h3');


var mot = document.querySelectorAll('input[type="checkbox"]');
var hai = document.querySelector('input[type="checkbox"][value="1"]');
var ba = document.querySelector('input[checked]:not([disabled])');
var bon = document.querySelector('input[disabled]:not([checked])');
var nam = document.querySelector('input[checked][disabled]');
console.log(mot,hai,ba,bon,nam);

var listItems1 = document.querySelectorAll('.parent>li');
var listItems2 = document.querySelectorAll('.parent>ul>li');
var listItems3 = document.querySelectorAll('.parent>li, .parent>ul>li');
console.log(listItems1, listItems2, listItems3);

//mở rộng
//sau khi lấy ra được 1 nodelist, chúng ta có thể dùng các phương thức của một node
//id, class, tag, CSS selector, (trừ phương thức này: HTML collections)
console.log('----extention-----');
var children1 = document.querySelector('.parent2');
var children2 = document.querySelectorAll('.parent2');
console.log('query selector: ',children1);
console.log('query selector all: ',children2);
//get by tag name
var pTag = children1.getElementsByTagName('p');
console.log('tags: ',pTag);
//get by class name
var classNames = children1.getElementsByClassName('parentList2');
console.log('class Name: ',classNames);
console.log(classNames[0].getElementsByTagName('li'));
//get by id
var byId = document.getElementById('lastItem');
console.log(byId);

/**
 * 1. getElementById()--> 1 element
 * 2. getElementsByClassName()-->HTML collection
 * 3. getElementsByTagName()-->HTML collection
 * -----
 * 4. querySelector()--> 1 element
 * 5. querySelectorAll()-->NodeList
 * -----
 * 6. document.forms or document.angchors or document.images,...
 * 7.document.write: không chỉ hiện ra ở cuối, nó hiển thị ở vị trí đặt thẻ <script>
 */