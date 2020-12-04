function callback(course, index) {
   return`${index} - ${course}`;
    
}
Array.prototype.map2 = function(){
    var output = [];
    
    for(var i =0; i< this.length; i++)
    {
        var result = callback(this[i], i);
        output.push(result);     

    }
    return output;
};
var courses = ['JS', 'PHP', 'JAVA'];

// var result  = courses.map2();
// console.log(result);
courses.map(function(item,index){

});

courses.length = 8;
// for in + hasOwnProperty(), không muốn duyệt qua prototype của mảng
console.log('This.hasOwnProperty()');
for(var index in courses)
{
    if(this.hasOwnProperty(index))
        console.log(index); 
}

for(var obj of courses )
{
    console.log(obj);
}
// console.log(Array.prototype); 
// console.log(Number.prototype); 
// console.log(Number.prototype.toFixed()); 
// var testArray = new Array(10);
// testArray.push('JS', 'PHP')
// console.log(testArray);

var courses = ['js', 'php', 'js javascript'];
var courses =[];
Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index],index, this);
            if(result)
            {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var t = courses.filter2(function(course, index, array){
    return course.includes('js');
});
console.log(t);

Array.prototype.some2 = function (callback) {
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var t = callback(this[index],index,this);
            if(t)
            {
                return t;
            }
        }
    }
    return false;
}

var t = courses.some2(function(course, index, array){
    return course === 'JS';
});
console.log(t);