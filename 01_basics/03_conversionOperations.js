/*
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


let fail = 1;

let booleanGrade = Boolean(fail);
console.log(booleanGrade);// true
console.log(typeof booleanGrade);// boolean


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
*/
//==================================  OPERATIONS ==============================================================================================================================
/*
let valueA = 100;
let valueB = 200;

console.log(valueA + valueB);// 300
console.log(valueA - valueB);// -100
console.log(valueA * valueB);// 20000
console.log(valueA / valueB);// 0.5
console.log(valueA % valueB);// 100
console.log(valueA ** valueB);// 1e+200
console.log(valueA++);// 100
console.log(valueA);// 101
console.log(valueA--);// 101
console.log(valueA);// 100
console.log(++valueA);// 101
console.log(--valueA);// 100
console.log(valueA);// 100
console.log(valueA += 10);// 110
console.log(valueA);// 110
console.log(valueA -= 10);// 100


let firstName = "Bimlesh";
let lastName = "Yadav";

let fullName = firstName +" "+ lastName;
console.log(fullName);// Bimlesh Yadav

let a = 1;
let b = 2;

console.log(a + b);
console.log("a" + b);
console.log(a + "b");
console.log("a" + "b");
console.log(a + b + "ab");
console.log("ab" + a + b);
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);


console.log(true);// true
console.log(+true);// 1
console.log(+"");// 0
console.log(+"abc");// NaN
console.log(+"100abc");// NaN

let num1, num2, num3, num4

num1 = num2 = num3 = num4 = 10 + 10;
*/

let token = 10;
let token2 = 20;
token++;
++token2;
console.log(token);// 11
console.log(token2);// 21

//---------x++ (Post-Increment)---------
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);// x:4, y:3
/*
Step 1: let x = 3;

We create x and store 3 in it.

🔹 Step 2: const y = x++;

Here, y = x++ means:
1️⃣ First, y gets the current value of x (y = 3).
2️⃣ Then, x increases by 1 (x becomes 4).
*/

//---------++x (Pre-Increment)---------
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);// a:4, b:4

let failMarks = 32;
let passMarks = failMarks++;

console.log(`failMarks:${failMarks},passMarks:${passMarks}`);
/*
 Step 1: let a = 3;

We create a and store 3 in it.

🔹 Step 2: const b = ++a;

Here, b = ++a means:
1️⃣ First, a increases by 1 (a becomes 4).
2️⃣ Then, b gets the updated value of a (b = 4).
*/

let failMark = 32;
let passMark = ++failMarks;

console.log(`failMark:${failMark},passMark:${passMark}`);

/*
Key Difference Between x++ and ++x  ===>
Operation	                 When Value Changes	         Value Used in Assignment

x++ (Post-Increment)	      After assignment	               Old value
++x (Pre-Increment)	          Before assignment	               New value
*/

