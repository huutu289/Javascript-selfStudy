
/*var fullName = document.querySelector('#fullname');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var passwordConfirmation = document.querySelector('#password_confirmation');
// console.log(fullName, email, password, passwordConfirmation);

var fullNameM = fullName.parentElement.querySelector('.form-message');
var emailM = email.parentElement.querySelector('.form-message');
var passwordM = password.parentElement.querySelector('.form-message');
var passwordConfirmationM = passwordConfirmation.parentElement.querySelector('.form-message');
// console.log(fullNameM, emailM, passwordM, passwordConfirmationM);

//----------check full name
//cách 1
fullName.onblur = function (e) {

    if (!e.target.value) {
        // console.log('Vui long nhap name');
        fullNameM.innerText = 'vui long nhap ten day du';
        e.target.parentElement.classList.add('invalid');

    }
    else {
        fullNameM.innerText = '';
        e.target.parentElement.classList.remove('invalid');
    }
}
//cách 2
var fullNameTest = function (e) {
    if (!e.target.value) {
        // console.log('Vui long nhap name');
        fullNameM.innerText = 'vui long nhap ten day du';
        e.target.parentElement.classList.add('invalid');

    }
    else {
        fullNameM.innerText = '';
        e.target.parentElement.classList.remove('invalid');
    }
}
var fullNameTyping = function (e) {
    fullNameM.innerText = '';
    e.target.parentElement.classList.remove('invalid');
}

fullName.addEventListener('blur', fullNameTest);//sự kiện 1
fullName.addEventListener('input', fullNameTyping);//sự kiện 2

//----------check email
var emaiTyping = function (e) {
    emailM.innerText = '';
    e.target.parentElement.classList.remove('invalid');
}
var emailValid = function (emailValue) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(emailValue);
}
var emailTest = function (e) {
    if (!e.target.value) {
        emailM.innerText = 'Vui long nhap email';
        e.target.parentElement.classList.add('invalid');
    }
    else {
        var emailResult = emailValid(e.target.value);

        if (!emailResult) {
            emailM.innerText = 'Email khong hop le';
            e.target.parentElement.classList.add('invalid');

        }
        else {
            emailM.innerText = '';
            e.target.parentElement.classList.remove('invalid');
        }

    }
}
email.addEventListener('blur', emailTest);
email.addEventListener('input', emaiTyping);

//-------check password
var passwordTest = function (e) {
    if (!e.target.value) {
        passwordM.innerText = 'vui long nhap password';
        e.target.parentElement.classList.add('invalid');
    }
    else{
         passwordValid(e.target.value);
       
    }
}
var passwordTyping = function (e) {

}
password.addEventListener('blur', passwordTest);
password.addEventListener('input', passwordTyping);

//kiểm tra giá trị đầu vào
//kiểm tra giá trị hợp lệ
//hiển thị lỗi: tên thẻ, mã lỗi: 0: k để trống, -1: lỗi khác
password.addEventListener('blur', passwordTest);
password.addEventListener('input', passwordTyping);
*/


var inputElements1 = document.querySelectorAll('#form-1 input');
var inputElements2 = document.querySelectorAll('#form-2 input');

var blurEvent = function (item) {
    
    var elementType = item.target;
    let checkItemsResult = checkItems(elementType);   
}

var checkItems = function(elementType){
    var _onSubmit =true;    
    var inputTypeElement = elementType.getAttribute('id');
    if (elementType.value === '') {
        showError(elementType);
        _onSubmit = false;
    }
    else if (inputTypeElement === 'email') {
        
        let emailResult = checkEmail(elementType.value);
        if (emailResult === false) {
            
            showError(elementType);
            _onSubmit = false;
        }
    }
    else if (inputTypeElement === 'password') {
        let passwordResult = checkPassowrd(elementType.value);
        // console.log(passwordResult);
        if (passwordResult === false) {
            showError(elementType);
            _onSubmit = false;
        }
    }
    else if (inputTypeElement === 'password_confirmation'){

        let pwConfirmResult = checkPassowrdConfirm(elementType, elementType.value);
        if (pwConfirmResult === false) {
            showError(elementType);
            _onSubmit = false;
        }
    }
    return _onSubmit;
    
}

var inputEvent = function (e) {
    isTyping(e.target);
}
var checkInput = function (item) {
        item.addEventListener('blur', blurEvent);
        item.addEventListener('input', inputEvent);
}
inputElements1.forEach(checkInput);
inputElements2.forEach(checkInput);

var findElementError = function (elementType, child) {
    var parentElementType = elementType.parentElement;
    // console.log(elementType.parentElement);
    while(elementType.parentElement)
    {
        if(elementType.parentElement.matches('.form-group'))
        {
            parentElementType = elementType.parentElement;
            return parentElementType.querySelector(child);
        }
        else
        {
            elementType = elementType.parentElement;;
        }
    }

    
    // return parentElementType.querySelector(child);
}
var showError = function (elementType) {

    var elementError = findElementError(elementType, '.form-message');
    var loaithe = elementType.getAttribute('id');
    elementType.parentElement.classList.add('invalid');
    
    if (elementType.value === '') {
        elementError.innerText = 'Truong nay khong dc de trong';
    }
    else if (loaithe === 'email') {

        elementError.innerText = 'Email khong hop  le';
    }
    else if (loaithe === 'password') {
        elementError.innerText = 'pass lon hon 6 ky tu';

    }
    else if (loaithe === 'password_confirmation') {

        elementError.innerText = 'mat khau xac thuc k dung';
    }
}

var checkEmail = function (value) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value);
}
var checkPassowrd = function (value) {
    return value.trim().length >= 6;

}
var checkPassowrdConfirm = function (elementType, value) {
    var passwordElement = document.querySelector('#password');
    return passwordElement.value === value;


}
var isTyping = function (elementType) {
    var elementError = findElementError(elementType, '.form-message');
    elementError.innerText = '';
    elementType.parentElement.classList.remove('invalid');
}

var formSubmit1 = document.querySelector('#form-1');
var formSubmit2 = document.querySelector('#form-2');

formSubmit1.onsubmit = function(e){
    var data = [];
inputElements1.forEach(function(item,index){
    var a = checkItems(item);
    if(a ===false)
    {
        
        e.preventDefault();
    }
    else{
        data.push(item.value);
    }
        
   
});
console.log(data);
e.preventDefault();
}
