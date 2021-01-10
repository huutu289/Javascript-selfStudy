function highlight([first, ...strings], ...values) {
    console.log(first, strings);
    console.log(values);
    return values.reduce(function (acc, curr) {
        return [...acc, `<span> ${curr}</span>`, strings.shift()]
    }, [first]).join('');
}
var course = 'Javascript';
var brand = 'F8';
const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);