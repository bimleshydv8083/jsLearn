/*
let myDate = new Date();
console.log(myDate);// 2025-04-01T07:32:47.770Z

console.log(myDate.toString());// Tue Apr 01 2025 07:32:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// Tue Apr 01 2025   
console.log(myDate.toTimeString());// 07:32:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());// 4/1/2025, 7:32:47 AM
console.log(myDate.toLocaleDateString());// 4/1/2025
console.log(myDate.toLocaleTimeString());// 7:32:47 AM
console.log(myDate.toUTCString());// Tue, 01 Apr 2025 07:32:47 GMT
console.log(myDate.toISOString());// 2025-04-01T07:32:47.770Z
console.log(myDate.toJSON());// 2025-04-01T07:32:47.770Z
console.log(myDate.getTime());// 1711963967770
*/

let myNewDate = new Date(2025, 0, 01);
console.log(myNewDate);

let newDate = new Date("2025-01-29");
console.log(newDate);// 
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);// 1711963967770
console.log(typeof myTimeStamp);// number
console.log(myTimeStamp.toString());// 1711963967770

console.log(newDate.getTime());
console.log(newDate.getTime()/1000);// 1711963967.77
console.log(Math.floor(newDate.getTime()/1000));// 1711963967

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'

});
console.log(newDate.toLocaleString());// 1/29/2025, 12:00:00 AM