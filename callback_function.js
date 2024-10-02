// What is a callback function in javascript

function x() {}

x(function y() {
  console.log("Hi i am an callback fuction");
});

// So here when we have pass a function inside another function call ,this is a callback function.
// Why the name callback function because it can be called somtime else in our program.

// Event Listeners

document.getElementById("randomId").addEventListener("click", () => {
  console.log("I'm again an callback function");
});

// closure demo with event listener

// suppose we want to get the count how many times the button is clicked

// Way 1
let count = 0;
document.getElementById("randomId").addEventListener("click", () => {
  console.log("I'm again an callback function");
  console.log("button count times", ++count);
});

// Here we have one problem and that is the count varibale is not secure it can be modified somewhere else in our code

//Way2

function attachEventLIsterners() {
  let count = 0;
  document.getElementById("randomId").addEventListener("click", () => {
    console.log("I'm again an callback function");
    console.log("button count times", ++count);
  });
}
attachEventLIsterners();

// Now this is a secure way the callback function forms a closure with the count variable and remembers its values.

// Garbage Collections and removeEventListeners

// Event listeners are heavy ,it means that it takes memory and event when we are not using the event listeners then also the memory is not freed up and when we remove event listeners all the memory is garbage collected.
