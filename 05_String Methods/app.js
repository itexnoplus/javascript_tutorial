const firstName = 'William';
const lastName = 'Johnson';
const age = 20;
const str = 'Hello there my name is Kamron';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;


// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Kamron ';
val += 'Fozilov';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('i');
val = firstName.lastIndexOf('i');

// charAt()
val = firstName.charAt('1');

// Get lat char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(0, 4);

// split()
val = str.split(' ');
val = tags.split(',');


// replace()
val = str.replace('Kamron', 'Jasur');

// includes()
val = str.includes('Hello');
val = str.includes('foo');

console.log(val);