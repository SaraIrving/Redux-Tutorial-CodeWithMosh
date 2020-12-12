import { compose, pipe } from "lodash/fp"; // fp = functional programming
import { Map } from "immutable";
import { produce } from "immer";

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
// let numbers = [1,2,3];
// numbers.map(number => number * 2);

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
//const updated = {...person, name: "Fiona"};
//console.log(updated);

//BEWARE both Object.assign and spread make a SHALLOW COPY!! careful when working with nested objects, will update other sources of the object as well (often unintentionally) 
// solve this issue by doing a DEEP COPY, may need multiple spread operators, then it will not modify the original you are referencing 
// there are libraries you can specifically use for immutability 

//IMMUTABILITY WITH ARRAYS
const numbers = [1,2,3];

const index = numbers.indexOf(2);
// now add in the number 2 and the second position, remember slice returns an array up to but not including the second index position

const added = [...numbers.slice(0, index),
                4, 
                ...numbers.slice(index)];

console.log(added); //[1,4,2,3]

//removing from an array
// filter returns an array with all the elements that evaluate to true in the callback function 
const removed = numbers.filter(n => n !== 2);
console.log(removed); // [1,3]

// updating an array
//Map method
const updated = numbers.map (n => (n === 2 ? 20 : n));
console.log(updated) // [1, 20, 3]


// IMMUTABILITY
// Use Immutable JS library to get access to a bunch of immutable data structures
// Use imported Map function to create a map/hashmap which is like a JS object...a container for key-value pairs, but the MAP object from the IMMUTABLE library is immutable, which means we need to wrap our regular JS objects in the Map function to get a MAP object 




//USING IMMUTABLE
//let book = Map({title: "harry potter"});
// console.log('book = ', book.get("title"));
// //for other libraries that expect regular JS functions, need to use the toJS function to get the original object back 
// console.log('JS book = ', book.toJS().title);

// //now to add a property to an immutable object we need to use the SET method

// function publish(book) {
//   return book.set('isPublished', true);
// }

// book = publish(book);

// console.log('book after published = ', book.toJS())

//USING IMMER
let book = {title: "harry potter"};
function publish() {
  //produce will return the updated object 
  return produce(book, draftBook => {
    // draftBook is a copy of book to which all changes are applied
    // easier than using spread operator 
    draftBook.isPublished = true;
  })
}

let updatedBook = publish(book);
console.log('updatedBook = ', updatedBook)

//REDUX
// stores all state in JS object, cannot directly mutate it because Redux is built on top of functional programming principles, Store will be an immutable object
// instead of directly mutating it you should build a function which takes in the store as an argument and returns the updated store via the spread operator or one of the immutability libraries we used above
// these functions are called **REDUCERS**
  // reducers also need to take in an action so it knows which property of the store to update 
  // may have many reducers that update different slices of the store 
  //reducers are pure functions
// The store object has a dispatch method that takes in the action, this will then call the reducer. We do not work with Reducers directly, we just interact with the store. 
  //then reducer computes the new state and returns it
  //next the store will set the state internally and then notify the UI components about the update
  // UI components will then pull out the updated data and refresh what is being shown on the browser 
// Dispatching the actions allows all events tha occur to enter in via the same place in the store, easier to control, can log every action that has been dispatched, also makes it easy to implement undo/redo mechanisms

/*
REDUX applications: 
1- Design the store
2- Define the actions
3- Create 1+ reducers
4- Set up the store based on your reducers

- add redux to your project, use v 4.0 
*/
