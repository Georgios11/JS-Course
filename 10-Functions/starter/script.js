'use strict';

/////DEFAULT PARAMETERS
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 Default Parameters
  //   numPassengers ||= 1;
  //   price ||= 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// createBooking('LH123');
// createBooking('LH123', 2, 688);

//we can skip a parameter by passing undefined
// createBooking('LH123', undefined, 555);

////HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE

const flight = 'LH234';

const geo = {
  name: 'Georgios Tsompanidis',
  passport: 12345678,
};

const checkIn = function (flight, passenger) {
  //When primitive values are passed into functions, a copy of the value is created in the function, therefore primitive values  can NOT be changed by functions
  flight = 'LH567';

  //Reference values are passed into functions, WE DO NOT PASS BY REFERENCE,  we PASS A REFERENCE reference in memory, therefore reference values CAN be changed by functions
  passenger.name = 'Tsitsikaki';
  if (passenger.passport === 12345678) {
    console.log('Check In');
  } else {
    console.log('Wrong passport');
  }
};
// checkIn(flight, geo);
// console.log(flight);
// console.log(geo);
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
// newPassport(geo);
// console.log(geo);
// checkIn(flight, geo);

//FIRST CLASS FUNCTIONS AND HIGHER-ORDER FUNCTIONS

//First class functions is a FEATURE-CONCEPT that a programming language either has or does not have

//It means that all functions ARE VALUES

//Higher Order functions exist in practice and are possible because JS has first class functions

//HIGHER ORDER FUNCTION is a function that RECEIVES another function as an argument , RETURNS a function or BOTH

////FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-Order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best', oneWord);
// transformer('JavaScript is the best', upperFirstWord);

//FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// const greeterHey = greet(`Hey`);
// greeterHey('Geo');

// greet('Hello')('Viktoras');
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
const hello = greetArrow('Hello');
// hello('Viktoras');

/////THE CALL AND APPLY METHODS
function book(flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
}

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book,
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book.call(eurowings, 234, 'Rania');

// console.log(lufthansa.bookings);
// console.log(eurowings.bookings);
// lufthansa.book(234, 'georgios');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings,
};

// book.call(swiss, '443', 'Tsitsikaki ');

///////THE BIND METHOD

//RETURNS A FUNCTION

const bookEW = book.bind(eurowings);

// bookEW('233', 'Rania');

const bookLH = book.bind(lufthansa);
// bookLH(333, 'Vik');
// console.log(lufthansa.bookings);

//BIND WITH EVENT LISTENERS
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this.planes);
  console.log(this);
  this.planes++;
  console.log(this.planes);
  console.log(this);
};

// lufthansa.buyPlane();
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION

//It is different from default parameters. Bind creates a new, more specific function (based on a more general function) tailored to our needs, ready to use whenever we want
const bookEW233 = book.bind(eurowings, 233);
// bookEW233('Georgios T.');

const addTax = (rate, value) => value + (value * rate) / 100;
// console.log(addTax(23, 100));
const addTax23 = addTax.bind(null, 23);
// console.log(addTax23(200));

const addTax2 = function (rate) {
  return function (value) {
    return value + (value * rate) / 100;
  };
};
// const addTax2 = rate => value => value + (rate * value) / 100;
const addTax25 = addTax2(25);
// console.log(addTax25(100));

///////IIFE's
//A function that executes just once and dissapears

// (function () {
//   console.log('This will never run again');
// })();

///////////CLOSURES///////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

//////MORE CLOSURE EXAMPLES

//We do not need to return a function from another function in order to create a closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 999;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
//Re-assigning f function
h();
f();
// console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 222;
boardPassengers(180, 3);
//CODING CHALLENGE #1

// Test data for bonus:
// § Data 1: [5, 2, 3]
const answers = [5, 2, 3];
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀
const poll = {
  question: 'What is your favourite programming language?',
  options: ['1: JavaScript', '2: Python', '3: Rust', '4: C++'],
  answers: Array.from({ length: 4 }, () => 0),
  // This generates [0, 0, 0, 0]. More in the next section!
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join(
      '\n'
    )} \n Write option number
   `);
    if (!isNaN(answer) && answer >= 1 && answer <= 4) {
      this.answers[answer - 1]++;
    } else {
      alert(`Not a valid answer`);
    }

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    // const type = prompt(
    //   'How would you like to view the results? String or array?'
    // );
    type === 'array' && console.log(this.answers);
    type === 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call(undefined, 'string');
// const answers = [2, 2, 3, 4, 5, 6, 67];
// answers.forEach(answer => console.log(answer));
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
