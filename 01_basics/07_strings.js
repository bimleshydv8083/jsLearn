
//to conacanate the strings 

let firstName = "Bimlesh";
let lastName = " Yadav";

//console.log(firstName + lastName);// BimleshYadav

// string interpolation or template literals or template strings or bacticks

//console.log(`My name is ${firstName} ${lastName}.`)
//console.log(`firstName: ${firstName} lastName: ${lastName}`);

let name = "Bimlesh";

let strName = new String(name);
//console.log(typeof strName);// object
//console.log(strName);// Bimlesh
//console.log(strName.length);// 7

//console.log(strName[2]);// m
//console.log(strName.toLowerCase());

//console.log(strName.charAt(3));// l
//console.log(strName.indexOf("l"));// 3

//-----> substring <---------

// substring = means to get a part of the string
// strName.substring(startIndex, endIndex)

const str = "Hello World";
console.log(str.substring(0, 5));// Hello

//-----> slice <---------

// slice = means to get a part of the string
// strName.slice(startIndex, endIndex)

const newStr = "welcome to the world of JavaScript";
console.log(newStr.slice(0, 7));// welcome

//------> Trim <---------

// trim = means to remove the white spaces from the start and end of the string

const anotherStr = "    Bimlesh        Yadav   "
console.log(anotherStr.trim());

//------> replace <---------
// replace = means to replace a part of the string with another string
// strName.replace(oldString, newString)

const emailId = "bimleshydv@gmail.com";
console.log(emailId.replace("@","." ));

//------> includes <---------
// includes = means to check if a string is present in another string or not
// strName.includes(string)
// returns true or false

console.log(emailId.includes("bimlesh")); 


//------> split <---------
// split = means to split the string into an array of strings
// strName.split(separator)
// returns an array of strings

const str1 = "Hello World";
const str2 = str1.split(" ");// ["Hello", "World"]
console.log(str2);// ["Hello", "World"]