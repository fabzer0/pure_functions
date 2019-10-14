/* Object.assign copies values from the provided object to a new object. Since functional 
   programming is predicated on immutable data, we use it to  make new objects based on existing objects
*/

const obj = { a: 2 };
const newObj = Object.assign({}, obj); // { a: 2 }
newObj.a = 3;
obj.a; // still 2

const anotherObj = { b: 3, c: 5 };
const completeObj = { ...newObj, ...anotherObj }; 
console.log(completeObj); // { a: 2, b: 3, c: 5 };

// object.assign takes in two objects and returns a new object; Just like concat[which takes arrays]
