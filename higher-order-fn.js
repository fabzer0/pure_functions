/* Higher order functions are functions that accept a function as an argument and return a function.
   Often, they are used to add to the functionality of a function
*/

const withLog = (fn) => {
  return (...args) => {
    console.log(`calling ${fn.name}`);
    return fn(...args);
  }
}

/* In the above example, we create a withLog higher-order function that takes a function and 
   returns a function that logs a message before the wrapped function runs
*/

const add = (a, b) => console.log(a + b);
const addWithLogging = withLog(add);
addWithLogging(3, 4);
// calling add
// 7


/* withLog HOF(higher-order functions) can be used with other functions as well and it works without any
   conflicts or writing extra code. This is the beauty of a HOF.
*/

const hype = s => console.log(s + '!!!');
const hypeWithLogging = withLog(hype);
hypeWithLogging('Fabish');
// calling hype
// Fabish!!!


/* One can also call it without defining a combining function. */
withLog(hype)('Apeli');
// calling hype
// Apeli!!!