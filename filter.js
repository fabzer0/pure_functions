/* This filters the array. In the expression below, the condition here is a function that gets each item of the
   array, and it should decide whether to keep the item or not and return the truthy boolean value for that.
*/

const filterEven = x = x%2 === 0;
[1, 2, 3].filter(filterEven);
// [2];

// filter takes in a function. The parameter of the function is a single item in the list.
