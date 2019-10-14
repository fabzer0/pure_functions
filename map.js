/* map maps each item of array to a function and creates a new array based on the return 
   values of the function calls. In the expression below, mapper is a function that takes an item of an 
   array as input and returns the output.
*/
Array.map(mapper);

const double = x = 2 * x;
[1, 2, 3].map(double);
// [2, 4, 6]

// map takes in a function. The parameter of the function is every single item in the list, on iteration
