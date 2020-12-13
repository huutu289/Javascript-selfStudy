
//5 cách lấy ra 1 elemnt từ DOM, id, class, tag, CSS selector, HTML collections,

//1.get element by id
console.log('-----------get element by id-----------');
var headingNode = document.getElementById('heading');
//nếu kq trả về null thì có 2 trường hợp:
// - có 2 id trong HTML DOM
// - sai tên id
//1.1.xuất ra bình thường
//Chrome hiển thị thành thẻ, khi hover vào sẽ thấy highlight trên trình duyệt
console.log(headingNode);

//xuất ra dưới dạng mảng or object để xem được properties and methods
//1.2.xuất ra dưới dạng mảng
console.log([headingNode]);
//1.3.xuất ra dưới dạng object
console.log(heading = { headingNode });

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
//-lấy ra một phần tử
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

//-lấy ra tất cả các phần tử thõa mãn All
console.log('---get element by CSS selector all---');
var ccsSelectors = document.querySelectorAll('.box .heading-2');//all tags
console.log(ccsSelectors); // trả về nodelists, sự khác nhau nodelists <> HTML collections

//5. get element by HTML collections, chỉ một số thẻ có: a, form, img,..
//-thẻ form
console.log('---get element by HTML collections---');
var htmlCollection = document.forms['form-1'];
console.log(htmlCollection);
//lấy tất cả thẻ form
var htmlCollections = document.forms;
console.log(htmlCollections);
//trỏ trực tiếp đến id của form
var htmlCollection = document.forms.formRegister;
console.log(htmlCollection);

//-thẻ a, cách 1: phải có thuộc tính name
var aTags = document.anchors;
console.log(aTags);
//- thẻ a, cách 2: không cần có thuộc tính name
var getATags = document.links;
console.log(getATags);

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
console.log(mot, hai, ba, bon, nam);

var listItems1 = document.querySelectorAll('.parent>li');
var listItems2 = document.querySelectorAll('.parent>ul>li');
var listItems3 = document.querySelectorAll('.parent>li, .parent>ul>li');
console.log(listItems1, listItems2, listItems3);

//--mở rộng
//sau khi lấy ra được 1 nodelist, chúng ta có thể dùng các phương thức của một node
//id, class, tag, CSS selector, (trừ phương thức này: HTML collections)
console.log('----extention-----');
var children1 = document.querySelector('.parent2');
var children2 = document.querySelectorAll('.parent2');
console.log('query selector: ', children1);
console.log('query selector all: ', children2);
//get by tag name
var pTag = children1.getElementsByTagName('p');
console.log('tags: ', pTag);
//get by class name
var classNames = children1.getElementsByClassName('parentList2');
console.log('class Name: ', classNames);
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
/*
sự khác nhau htmlCollection vs nodelist
1. htmlCollection không chứa attribute node và text nodelist (nodelist có)
2. htmlCollection có thể truy xuất các phần tử by id or name (nodelist k có)
 */
var htmlCollection = document.getElementsByClassName('parent2');
console.log('html collection',htmlCollection);

var nodeListElements = document.querySelectorAll('.parent2');
console.log('node list: ',nodeListElements);

//1. truy xuất by index: htmlCollection and nodelist are ok.
console.log('by index html and nodelist: ',htmlCollection[0], nodeListElements[0]);
//2. truy xuất by id
console.log('by id - html : ',htmlCollection['ulid']);//cách 1
console.log('by id - html : ',htmlCollection.ulid);//cách 2
console.log('by id nodelist: ',nodeListElements['ulid']);//return undefined
//2. truy xuất by name
console.log('by name - html : ',htmlCollection['listitem']);
console.log('by name nodelist: ',nodeListElements['listitem']);//return undefined
var boxHTMLCollection = document.querySelectorAll('.box');
console.log(boxHTMLCollection[0].getElementsByTagName('li'));
var box1ItemElements = document.querySelectorAll('.box:first-child ul li');
console.log(box1ItemElements);
var h1Element = document.getElementsByTagName('h1');
var h2Element = document.getElementsByTagName('h2');
var h3Element = document.getElementsByTagName('h3');

//-------------Làm bài tập tại đây--------------
var checkboxNodes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxNodes);
var checkbox1Element = document.querySelector('input[type="checkbox"][value="1"]');
console.log(checkbox1Element);
var checkboxCheckedAndNotDisabled = document.querySelector('input[checked]:not([disabled])');
console.log(checkboxCheckedAndNotDisabled);
var checkboxDisabledAndNotChecked = document.querySelector('input[disabled]:not([checked])');
console.log(checkboxDisabledAndNotChecked);
var checkboxCheckedAndDisabled = document.querySelector('input[disabled][checked]');
console.log(checkboxCheckedAndDisabled);

// Làm bài tập tại đây
var listItems1 = document.querySelector('.parent');
console.log('the cha',listItems1);

var listItems2 = listItems1.querySelectorAll('.parent>li');
console.log('cac li con',listItems2);
var listItems2 = listItems1.querySelectorAll('.parent>ul');
console.log('cac ul con',listItems2);

var listItems3 = document.querySelectorAll('.parent>li, .parent>ul ');
console.log(listItems3);
