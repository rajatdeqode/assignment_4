/*
1) Arrow function is also known as fat arrow function.
2) Arrow function allows to write shorter syntex.
3) No binding of ‘this’
*/

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

const addition = (a, b) => a + b;

console.log(addition(10,20));
