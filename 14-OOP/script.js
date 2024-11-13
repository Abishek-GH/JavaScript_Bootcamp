// 'use strict';

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };

// // const jonas = new Person('Jonas', 1991);
// // console.log(jonas);
// // // New empty object {} is created
// // // Function is called, this => {}
// // // Linked to Prototype
// // // function automatically return {}

// // const matlida = new Person('Matilda', 1998);
// // console.log(matlida);

// // Person.prototype.calcAge = function () {
// //   console.log(2024 - this.birthYear);
// // };

// // jonas.calcAge();

// // const arr = [1, 2, 3];
// // console.log(arr.__proto__);

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.speed} km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.speed} km/h`);
// // };

// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);

// // bmw.accelerate();
// // mercedes.brake();
// //Class Expression
// // const PersonCl = class {};

// // Class Declaration
// class PersonCl {
//   // Constructor will be called directly when a new object is created using this Class using the new Keyword
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Method
//   // Whatever we write outside the constructor will be in the prototype of this method but not on the oibject it self
//   // -> Prototypal Inheritance
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// // Behind the scenes classes are still a function and so we can use both declaration and expression

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log('Hey, Good Evening');
// };

// jessica.greet();
// // Classes are NOT Hoisted
// // Classes are first class citizens
// // Classes are execute din strict mode

// const account = {
//   owner: 'Jonas',
//   movements: [2500, 45, 65, 4, 654, 6, 6],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
// };

// console.log(account.latest);

// const Person = {
//   sayHello(name) {
//     this.name = name;
//   },
// };

// const abishek = new Person('Abishek');

// const madhavi = Object.create(Person);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}`);
// };

// const mike = new Student('Mike', 2001, 'CSE');
// console.log(mike);
// mike.introduce();
class Account {
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log(acc1.#movements);
