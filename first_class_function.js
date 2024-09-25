// test();
// value();

// So the above linesof code where we have called function before its creation test() will execute and the value function will throw an reference error.

// Function Statement or Function Declearation

function test() {
  console.log("this is function statement");
}

// Function Expression

const value = function () {
  console.log("this is function expression");
};

// Difference between both of them is of hoisting.

// Anonymous function

// function() {
//     console.log("Hi I'm an anonymous function and i am used inside function expression to store values in some variable as a function")
// }

// Named function expression

const func = function named() {
  console.log("This is named function expression.");
};

// Difference between Parameters & Arguments

// const para = function (param1, param2) {
//     console.log('b called')
// } --> Parameters

// para(arg1,arg2) --> arguments
