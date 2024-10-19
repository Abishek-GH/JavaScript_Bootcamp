'use strict';
const bookings = [];
const flightNums = {
  myName: 'Abishek',
};
const createBooking = function (flightNum, numPassengers = 1, price = 999) {
  flightNum.myName = 'Sonu';
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking(flightNums, 'IND120');
console.log(flightNums);
