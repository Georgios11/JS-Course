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
  console.log(`Transformed string ${fn(str)}`);
};

transformer('JavaScript is the best', upperFirstWord);
