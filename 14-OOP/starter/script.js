'use strict';

//CONSTURCTOR FUNCTIONS AND THE NEW OPERATOR

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this);

  //NEVER DO THIS->WE USE PROTOTYPAL INHERITANCE
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

// 1. New {} is created
// 2. function is called, this = {}
//      we set the name and birthYear properties on this, and that will set them on the new object
// 3. the new object is  linked to the constructor functions  prototype property
//      __proto__ is added on the new object __proto__:Person.prototype
// 4. function automatically returns the new object

let geo = new Person('Georgios', 1981);
const vik = new Person('Viktoras', 2021);
const rania = new Person('Rania', 1985);

// console.log(geo instanceof Person);

//PROTOTYPES

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
// vik.calcAge();
// console.log(geo.__proto__);
// console.log(geo.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(geo));

//adding properties on the prototype

Person.prototype.species = 'Homo Sapiens';
// console.log(geo.species);
// console.log(geo.hasOwnProperty('firstName'));
// console.log(geo.hasOwnProperty('species'));

//PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN

// console.log(geo.hasOwnProperty('calcAge'));
// console.log(Person.__proto__);

//PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

//moving up the prototype chain

// console.log(geo.__proto__);
// console.log(geo.__proto__.__proto__);
// console.log(geo.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 4, 5, 6, 2, 33];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

//EXTENDING THE PROTOTYPE
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());
const h1 = document.querySelector('h1');

// console.dir(h1);

// console.dir(x => x + 2);

//ES6 CLASSES

//Class Expression

// const Personcl =class{

// }

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  // is on the constructor and not the prototype
  //not inherited by instances
  static hey() {
    console.log(`Hey there 👋`);
    // console.log(this);
  }
}

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }
PersonCl.prototype.species = 'Homo Sapiens';
const viktoras = new PersonCl('Tsitsikaki PAOK', 2021);
// viktoras.calcAge();
// console.log(viktoras.age);
// console.dir(viktoras.__proto__);

// console.log(viktoras.fullName);
// PersonCl.hey();
// viktoras.hey();
// viktoras.greet();

const walter = new PersonCl('Walter White', 1965);

// 1. Classes are NOT HOISTED
// 2. Classes are FIRST CLASS citizens
// 3. Classes are executed in STRICT MODE

//SETTERS AND GETTERS

//accessor properties

//Object.Create

//no new operator
//no constructor functions

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2000;
// console.log(steven);
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
// console.log(sarah);
// sarah.calcAge();

//

//INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS

// const Person = function (firstName, birthYear) {

//   this.firstName = firstName;
//   this.birthYear = birthYear;

// };
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
// Person.prototype.species = 'Homo Sapiens';

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Student.prototype.constructor = Student;
const mike = new Student('Mike', 2020, 'Computer Sciense');
// console.dir(Student.prototype.constructor);
// console.log(mike);

//INHERITANCE BETWEEN CLASSES: ES6 CLASSES

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //Static method
//   // is on the constructor and not the prototype
//   //not inherited by instances
//   static hey() {
//     console.log(`Hey there 👋`);
//     // console.log(this);
//   }
// }

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, but as a student I feel more like ${
        2023 - this.birthYear + 10
      }`,
    );
  }
}
const martha = new StudentCl('Martha Jones', 2000, 'Computer Sciense');
console.log(martha.species);
martha.introduce();
martha.calcAge();
///////// CODING CHALLENGES/////////////

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  this.report();
};
Car.prototype.report = function () {
  console.log(`${this.make} original speed is ${this.speed}`);
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is goint at ${this.speed} km/h`);
};
// const bmw = new Car('BMW', 100);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// 2.
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ren = new CarClass('Renault', 120);
// console.log(ren);
// console.log(ren.speedUS);
// ren.accelerate();
// console.log(ren.speedUS);
// ren.speedUS = 50;

// console.log(ren);

//3.
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeTo = function (charge) {
  this.charge = charge;
};
EV.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`,
  );
};
EV.prototype.constructor = EV;

// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
