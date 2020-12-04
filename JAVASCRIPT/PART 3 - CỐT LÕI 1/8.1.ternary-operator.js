function greeting(person)
{
    var name = person? person.name: "stranger";
    return 'Howday ' + name;
}
var Aperson = {
    name:'Alice',
};
// console.log(Aperson.name);
var checkName = greeting(Aperson);
console.log(greeting(null));
console.log(checkName);