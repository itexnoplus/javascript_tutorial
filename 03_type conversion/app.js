let val;

// Number to String
val = String(222);
val = String(2 + 2);
val = String(true);
val = String(new Date());

// toString
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');


val = parseInt('100.30');
val = parseFloat('100.30');

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));


const val1 = 5;
const val2 = 6;

const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);