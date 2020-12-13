/*
--sự khác nhau giữa:
1. var vs let, const: scope, hosting
2. const vs var,let: assignment
 */
//block code: những code nằm trong {},  nhưng trong if,else, loop

//-var
{
    var course = 'JavaScript'
}
console.log(course);//không lỗi

//-let or const
{
    let course1 = 'JavaScript'
    const course2 = 'JavaScript'
}
// console.log(course1);//lỗi
// console.log(course2);//lỗi

//-var, let, const: không lỗi vì nằm trong {}
{
    var course3 = 'JavaScript'
    let course4 = 'PHP'
    const course5 = 'C#'
    {
        {
            console.log(course3,course4, course5);
        }
    }
}
//-const: ưu tiên block {} gần nhất
{
    var course3 = 'JavaScript'
    let course4 = 'PHP'
    const course5 = 'C#'//bị ghi đè bởi python
    // const course5 = 'C++'//bị lỗi, trùng (has already been declared)

    {
        {
            const course5 = 'python';
            console.log(course3,course4, course5);
        }
    }
}
//------------------hosting---------------
//var: không lỗi vì hỗ trợ hosting (các khai báo var a sẽ được đưa lên đầu)
a = 1;
var a;
console.log(a);

//let và const: lỗi không có hosting =  Cannot access 'b' before initialization
// b = 1;
// let b;
// console.log(b);

//-const không thể gán lại
const c = 1;
c = 100;//lỗi
console.log(c);
//- var, let: có thể gán lại

//tham biến vẫn gán lại được, thực ra là gán lại thuộc tính name của a, không phải gán lại a
const a = {
    name: 'PHP'
}
a.name = 'JavaScript'
console.log(a.name);
/*
 tổng kết: 
 nếu code thuần (không sử dụng thư viện): dùng var
 nếu có dùng thư viện như Bable thì dùng let, const: vì bable chuyển thành ES5
 */