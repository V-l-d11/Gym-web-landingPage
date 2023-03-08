

const obj = {
    name: "Max",
    age: 25,
    greet: function () {
        console.log('greet');
    }
}
const person = new Object({
    name:'adsdf',
})

Object.prototype.sayHello = function () {
    console.log("Say Hello");
}
person.sayHello()