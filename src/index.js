import { compose, pipe } from "lodash/fp" // fp = functional programming

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

//build small functions which you can use to solve a problem

let input = " Javascript ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();

const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// compose takes functions as arguments and returns a new function which is the composition of all the given functions, is a higher order function
// code must be read R-L to get the right order of functions

//const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap);
transform(input);

// const result = wrapInDiv(toLowerCase(trim(input))); //in functional programming this is called function composition

// use Lodash library to simplify 