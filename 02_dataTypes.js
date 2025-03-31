/*
Data Types in js
=====================
1. Primitive Data Types (Stored in Stack Memory)
      Value (creates a new copy)
✅ String – Represents text ("Hello", 'World', \JS`) 
✅ **Number** – Represents integers & floating-point numbers (10, 3.14) 
✅ **BigInt** – Represents large numbers beyond Number.MAX_SAFE_INTEGER (123n) 
✅ **Boolean** – Represents true or false values 
✅ **Undefined** – A variable declared but not assigned (let x;) 
✅ **Null** – Represents an empty or unknown value (let x = null;) 
✅ **Symbol** – Unique, immutable value used as object property keys (Symbol("id")`)

2. Reference Data Types (Stored in Heap Memory, Mutable)
       Reference (points to same memory)
✅ Object – Collection of key-value pairs ({ name: "John", age: 30 })
✅ Array – Ordered list of values ([1, 2, 3])
✅ Function – A reusable block of code (function greet() {})
✅ Date – Represents date and time (new Date())
✅ RegExp – Regular expressions (/abc/ for pattern matching)

*/

/*
// String

let str = "Hello World";// always use under double quotes
console.log(str);

// Number 

let num = 10;// 
console.log(num);

// BigInt 

let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum);

// Boolean
let bool = true;
console.log(bool);

// Undefined
let x;
console.log(x);

// Null
let y = null;// standalone value( Represents an empty or unknown value )
console.log(y);

// Symbol
let sym = Symbol("id");
console.log(sym);

// Object
let obj = {
    name: "John",
    age: 30
}
console.log(obj);

// Array
let arr = [1, 2, 3];
console.log(arr);

// Function
function greet() {
    console.log("Hello");
}
greet();

// Date
let date = new Date();
console.log(date);

// RegExp
let regExp = /abc/;
console.log(regExp);

// typeof operator
console.log(typeof str);
console.log(typeof num);
console.log(typeof bigNum);
console.log(typeof bool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof sym);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof greet);
console.log(typeof date);
console.log(typeof regExp);
*/

console.log(typeof null);// object
console.log(typeof NaN);// number
console.log(typeof Infinity);// number
console.log(typeof undefined);// undefined
