var languages = [
    'PHP',
    'Java',
    'Javascript',
    null,
    undefined,
    function (){

    },
    123
];

var languages1 = Array('php1', 'java1',123, function(){});

console.log( typeof languages);
console.log(languages);
console.log('kiem tra xem phai la mang khong {} sais?',Array.isArray({}));
console.log('kiem tra xem phai la mang khong? bang ten-->dung',Array.isArray(languages));
console.log('kiem tra xem phai la mang khong?, -->dung',Array.isArray([]));
console.log(typeof languages1);
console.log(languages1);