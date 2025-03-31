
console.log(2 > 1);// true
console.log(2 < 1);// false
console.log(2 >= 1);// true
console.log(2 <= 1);// false
console.log(2 == 1);// false
console.log(2 != 1);// true
console.log(2 === 1);// false
console.log(2 !== 1);// true

console.log("2" > 1);// true
console.log("2" < 1);// false

console.log(null > 0);// false
console.log(null < 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true
console.log(null <= 0);// true

console.log(undefined > 0);// false
console.log(undefined < 0);// false
console.log(undefined == 0);// false
console.log(undefined >= 0);// false
console.log(undefined <= 0);// false
console.log(undefined == null);// true
console.log(undefined === null);// false
console.log(undefined != null);// false
console.log(undefined !== null);// true

console.log(NaN > 0);// false
console.log(NaN < 0);// false
console.log(NaN == 0);// false
console.log(NaN != 0);// true
console.log(NaN >= 0);// false
console.log(NaN <= 0);// false
console.log(NaN === 0);// false
console.log(NaN !== 0);// true
console.log(NaN == NaN);// false
console.log(NaN === NaN);// false
console.log(NaN != NaN);// true
console.log(NaN !== NaN);// true
console.log(NaN == undefined);// false
console.log(NaN == null);// false
console.log(NaN == false);// false
console.log(NaN == true);// false
console.log(NaN == "");// false
console.log(NaN == "abc");// false
console.log(NaN == []);// false
console.log(NaN == {});// false
console.log(NaN == [1]);// false

