function x() {
  const a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// The above written function is closure.
// function along with its lexical scope <-- closure.
// A closure is the combination of a function bundled together with references to its lexical environment.

function outer() {
  const a = 7;
  return function inner() {
    console.log(a);
  };
}
const z = outer(); // here in this line the outer function will be executed and will be removed from the call stack so we no longer have the access to outer function.

z(); // here we have called z ,but we no longer have the access to outer fucntion so we will think that the console value 7 of a will not be printed but the output will be 7.
// Reason is that when the function is returned it returns with a closure which has information of its lexical environment so output will be 7.
