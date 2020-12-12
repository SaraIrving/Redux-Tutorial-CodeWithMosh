console.log("Hello World!");

function sayHello() {
  return function() {
    return "Hello World";
  }
}

let fn = sayHello();
let message = fn();

//higher order functions take a function as an argument, or return a function, or both!

//map is a higher order function 
let numbers = [1,2,3];
numbers.map(number => number * 2);

//setTimeout is also a higher order function because it takes a function as an argument