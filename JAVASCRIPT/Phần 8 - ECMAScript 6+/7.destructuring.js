/*destructuring: làm việc với mảng và object */
//---------------------1.làm việc với array----------------
var course = ['PHP', 'JavaScript', 'C#'];
//yêu cầu bài toán: lấy ra các phần tử của mảng và lưu vào các biến a,b,c

//cách 1: theo chỉ số của mảng
var a = course[0];
var b = course[1];
var c = course[2];
//cách 2: dùng destructuring
var [a, b, c] = course;
console.log(a, b, c);
//- không lấy phần tử ở giữa
var [a, , c] = course;
console.log('không lấy phần tử giữa: ', a, c);
//- dùng  rest parameters # toán tử spread 
//- rest parameters dùng với function và array
var [a, ...rest] = course;
console.log('phan tu dau tien: ', a);
console.log('cac phan tu con lai:', rest);
//------------------2.làm việc với object----------------
var programmingCourse = {
    name: "PHP",
    price: 100,
    image: 'my-image',//không cần lấy trường này ra
    children: {
        name: 'ReactJS'
    }
};
//--destructuring, lưu ý: lấy đúng tên key của object
// nếu lấy sai sẽ trả về undefined,như gọi thử price2
var { name, price, price2 } = programmingCourse;
console.log(programmingCourse);
console.log('destucturing for object: ', name, price, price2);//price2 =undefined
//--dùng rest parameters với object 
var { name, ...rest } = programmingCourse;
console.log("name: ", name);
console.log("rest: ", rest);
//-- lấy ra 1 object bên trong 1 object và đổi tên key
var { name: parentName, children: { name: childrenName } } = programmingCourse;
console.log("ten cua object cha: ", parentName);
console.log('ten cua object con: ', childrenName);
//lấy giá trị mặc định nếu key đó ko tồn tại trong object
var { image, description = "des default" } = programmingCourse;
console.log(image, description);//nếu description không có thì sẽ in ra des mặc định

//--rest parameters dùng trong tham số của hàm.
function logger(a, b, ...rest)//rest parameters
{
    //tương tự arguments object
    console.log('các tham số: ', arguments);

    console.log('2 phần  tử đầu tiên: ', a, b);
    console.log('còn lại: ', rest);

}
logger(1, 2, 3, 34, 3, '3r4', 3);
//-rest parameters khi đối số là 1 object
function restParams({name, price,...rest}=params) {
    console.log(name, price,rest);
}
var restParameters ={ 
    name: 'test 1',
    price: 'price 1',
    description: "description content",
    image: 'image 1'
}
restParams(restParameters);