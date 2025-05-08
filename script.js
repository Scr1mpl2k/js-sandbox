const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
};
person.greeting = function() {
    console.log('Hello');
}
person.changeSurname = 'Vanya';
person.name = changeSurname;
console.log(changeSurname)
console.log(name)
greeting();
