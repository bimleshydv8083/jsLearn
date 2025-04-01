//--------------> NUMs  <---------

const num = 100;
/*
console.log(num);
console.log(typeof num); // number
const number = new Number(num);
console.log(number);
console.log(typeof number);
console.log(number.valueOf());
console.log(typeof number.valueOf());
console.log(number.toString());
console.log(typeof number.toString());
console.log(number.toString(2)); // binary
console.log(number.toString(8)); // octal
console.log(number.toString(10)); // decimal
console.log(number.toString(16)); // hexadecimal
console.log(number.toString(36)); // base 36
console.log(number.toString(2).length); // 7
console.log(number.toString(8).length); // 4

console.log(number.toFixed(2)); // 100.00

const anotherNum = 100.12345;
console.log(anotherNum.toPrecision(5)); // 100.12
console.log(anotherNum.toPrecision(3)); // 100
console.log(anotherNum.toPrecision(2)); // 100
console.log(anotherNum.toPrecision(1)); // 1e+2

const hundreds = 10000000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log(hundreds.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));
*/


// -----------> MATH <-----------

console.log(Math);// Object [Math] {}
console.log(Math.abs(-100)); // 100
console.log(Math.round(100.1234));// 100
console.log(Math.ceil(100.1234)); // 101
console.log(Math.floor(100.1234)); // 100
console.log(Math.sqrt(100)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(100, 200, 300)); // 300
console.log(Math.min(100, 200, 300)); // 100


console.log(Math.random());// values always lies betwn 0 - 1 

console.log(Math.random()*10);// 0 - 10
console.log(Math.floor(Math.random()*10));// 0 - 9
console.log(Math.floor(Math.random()*10) + 1);// 1 - 10
console.log((Math.random()*10) + 1);// 1 - 10
console.log(Math.floor(Math.random()*10) + 1);// 1 - 10
console.log(Math.floor(Math.random()*10));// 0 - 9

const min = 100;
const max = 200;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

