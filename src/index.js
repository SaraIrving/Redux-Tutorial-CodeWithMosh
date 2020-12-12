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

const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// compose takes functions as arguments and returns a new function which is the composition of all the given functions, is a higher order function
// code must be read R-L to get the right order of functions

//const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap("div"));

// string is showing up as undefined in the browser console, having an issue with the multiple arguments expected at the end of pipe for wrap...solve with "Currying"
console.log(transform(input));

// const result = wrapInDiv(toLowerCase(trim(input))); //in functional programming this is called function composition

// use Lodash library to simplify 

//When updating objects, better to take copy of the original than directly update
//use Object.assign or the spread operator

//With Object.assign, pass an empty object, the object to copy, and then optionally an object with updated values, will return the new updated object
const person = { name: "john"};
const update = Object.assign({}, person, {name: "bob", age: 30});
console.log(update);

//Now using the spread operator 
const updated = {...person, name: "Fiona"};
console.log(updated);

//BEWARE both Object.assign and spread make a SHALLOW COPY!! careful when working with nested objects, will update other sources of the object as well (often unintentionally) 
// solve this issue by doing a DEEP COPY, may need multiple spread operators, then it will not modify the original you are referencing 
// there are libraries you can specifically use for immutability 
