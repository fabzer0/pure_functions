/* This is a method in Javascript that adds new item to an existing array to create a new array
   It is different from push() in the sense that push() mutates data, which makes it impure
*/

[1, 2].concat([3, 4]); // [1, 2, 3, 4]
[1, 2, ...[3, 4]]; // [1, 2, 3, 4]

// concat takes in an array;
