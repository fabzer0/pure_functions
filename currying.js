/* Currying means breaking down a function that takes multiple arguments into one or multiple levels
   of HOF
*/

// When we carry it, we re-write it distributing arguments into multiple levels as follows.

const add = a => {
  return b => {
    return a + b;
  };
};

console.log(add(3)(4));
// 7

/* The benefit of currying is memoization. We can now memoize certain arguments in a function call
   so that they can be reused later without duplication and re-computation
*/

// assume getOffsetNumber() call is expensive
const addOffset  = add(getOffsetNumber());
addOffset(4);
// 4 + getOffsetNumber();
addOffset(7);
// 7 + getOffsetNumber();

// The above is certainly better that using both arguments everywhere
// (X) DON'T DO THIS

add(4, getOffsetNumber());
add(7, getOffsetNumber());


// Below is my personal exploitation of the acquired knowledge;
const addition = a => {
  return b => {
    return c => {
      return a + b + c
    }
  }
}

// Using es6, the above function can be shortened or succinct or concise or brief as follows
const sum = a => b => c => a + b + c;

console.log(addition(1)(2)(3)); // 6

// And if we have an argument that is constant i.e;
const even = x => x%2 === 0;
const myVal = [1, 2, 3].filter(even);
console.log(myVal[0]) // 2

// EITHER ^ OR below because here we are declaring a variable for tha addition func with its first arg;

console.log(addition(myVal[0])(8)(1)) // 11
const num = addition(myVal[0]);
console.log(num(6)(5)); // 13

console.log(sum(3)(4)(5)); // 12

