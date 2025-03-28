let marks1 = 100;
console.log(marks1);
console.log(typeof marks1);//(typeof (marks) ) // number

let marks2 = "100";
console.log(typeof marks2);// string

let valueMarks = Number(marks2);
console.log(typeof valueTMarks);// number

let marks3 = "100abc";
console.log(marks3);// 100abc
console.log(typeof marks3);// string

let valueMarks1 = Number(marks3);
console.log(valueMarks1);// NaN
console.log(typeof valueMarks1);// number

let marks4 = null;
console.log(marks4);// Null
console.log(typeof marks4);// object

// "100" => 100
// "100abc" => NaN
// null => 0
// undefined => NaN

let isLoggedIn = "true";
let isLoggedOff = false;

console.log(isLoggedIn);// true
console.log(typeof isLoggedIn);// string

console.log(isLoggedOff);// false
console.log(typeof isLoggedOff);// boolean

let valueIsLoggedIn = Boolean(isLoggedIn);
console.log(valueIsLoggedIn);// true
console.log(typeof valueIsLoggedIn);// boolean

let valueIsLoggedOff = Number(isLoggedOff);
console.log(valueIsLoggedOff);// 0  
console.log(typeof valueIsLoggedOff);// number

let emptyStr = "";
console.log(emptyStr);//
console.log(typeof emptyStr);// string

let valueEmptyStr = Boolean(emptyStr);
console.log(valueEmptyStr);// false
console.log(typeof valueEmptyStr);// boolean

let spaceStr = " ";
console.log(spaceStr);//
console.log(typeof spaceStr);// string

let valueSpaceStr = Boolean(spaceStr);
console.log(valueSpaceStr);// true
console.log(typeof valueSpaceStr);// boolean

let abcStr = "abc";
console.log(abcStr);// abc
console.log(typeof abcStr);// string

let valueAbcStr = Boolean(abcStr);
console.log(valueAbcStr);// true
console.log(typeof valueAbcStr);// boolean


// "true" => true
// "false" => true
// true => 1
// false => 0
// "abc" => true
// "" => false
// " " => true

let someStr = 100;
let valueSomeStr = String(someStr);
console.log(valueSomeStr);// "100"
console.log(someStr);
console.log(typeof valueSomeStr);// string
console.log(typeof someStr);// number

//==================================  OPERATIONS ==============================================================================================================================

