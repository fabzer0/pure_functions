/* Reduce reduces the array to a single value. Reducer is a function that takes the accumulated 
   value and the next item in the arrau and returns the new value. It is called like this for 
   all values in the array, one after another
*/

Array.reduce(reducer);

const sum = (accumulatedSum, nextArrayItem) => accumulatedSum + nextArrayItem;
[1, 2, 3].reduce(sum); // 5;

// reduce takes in a function and returns a single value; 