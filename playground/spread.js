// Array spread Syntax


// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Harsimran', 'Simran', 'Harpreet'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Moh', 25];
var personTwo = ['Hitesh', 24];
// Hi Moh, you are 25

function greet (name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var finalArray = ['Moh', ...names];
// Hi Moh

finalArray.forEach((name) => {
  console.log(`Hi ${name}`);
});

finalArray.forEach(function(name) {
  console.log(`Hi ${name}`);
});
