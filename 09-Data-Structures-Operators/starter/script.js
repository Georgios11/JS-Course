'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const book = function (flightnum, name) {
  console.log(`${name} has booked a seat on ${this.name}
    flight ${this.iatacode} ${flightnum}`);
  this.bookings.push([{ flight: `${this.iatacode}${flightnum}`, name }]);
};
const lufthansa = {
  name: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
};
book.call(lufthansa, 345, 'Georgios Tsompanidis');
const flightData = [434, 'Rania Siona'];
book.apply(lufthansa, flightData);
console.log(lufthansa);
// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, menuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
//   },
//   orderDelivery: function (time, address, mainIndex, starterIndex) {
//     console.log(
//       `Order placed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Cornelis',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// console.log(restaurant.order(2, 2));
////OBJECT DESTRUCTURING////

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//renamming the properties that we destructure from objects

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//providing default values in case the properties do not exist
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables while destructuring
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//nested objects

// const {
//   sat: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

///ARRAY DESTRUCTURING///

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

// const [first, second] = restaurant.categories;
// console.log(first, second);

//if we want to skip an element,  we leve a blank space between two commas:

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching values would have required a temp variable. not anymore.
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//The for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// //to show the index
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(menu.entries());
// console.log(...menu.entries());
// console.log([...menu.entries()]);

//ENHANCED OBJECT LITERALS////
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, menuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
//   },
//   orderDelivery: function (time, address, mainIndex, starterIndex) {
//     console.log(
//       `Order placed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   openingHours,
// };
// console.log(restaurant);
// const entries = Object.entries(restaurant);
// console.log(entries);
// const [entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8] =
//   entries;
// const [, , , , , , , [hours, { thu: pem, fri: par, sat: sav, sun: kyr }]] =
//   entries;
// console.log(hours, pem, par, sav);

// console.log(entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8);
// const allEntries = [
//   ...entry1,
//   ...entry2,
//   ...entry3,
//   ...entry4,
//   ...entry5,
//   ...entry6,
//   ...entry7,
//   ...entry8,
// ];
// console.log(allEntries);

// console.log(entry8);
