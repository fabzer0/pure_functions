/* In Mathematics, composition is defined as passing the output of one function into input of another 
   so as to create a combined output. The same is possible in functional programming since we are
   using pure functions
*/

// In the example below, the first function is range, which takes a starting number a and an ending number b
// and creates an array consisting of numbers from a to b.

const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];

console.log(range(4, 7)); // [4, 5, 6, 7];

// Then we have a function multiply that takes an array and multiplies all the numbers in it.

const multiply = arr => arr.reduce((x, y) => x * y);
console.log(multiply(range(1, 3))); // 6

// We will use this functions together to compute factorial
// FACTORIAL is the product if an integer and all the integers below it e.g factorial 4 is equal to 24
const factorial = n => multiply(range(1, n));
const i = factorial(5); // 120;
const j = factorial(6); // 720;
const f = factorial(4); // 24;
console.log(i, j, f);

