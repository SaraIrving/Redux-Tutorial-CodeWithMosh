// function add (a, b) {
//   return a + b;
// }

// refactor a function that expects two parameters to be a function that takes one parameter and then returns a function which takes a second parameter which in turn returns a result involving both parameters 

function add (a) {
  return function(b) {
    return a + b;
  }
}

const add1 = add(1);
//can store function in a variable or just call it with a second set of brackets
add(1)(5); // this is the same as before when the structure was add(1, 5)

//can also define this sort of function using arrow notation 
const add2 = a => b => a + b;