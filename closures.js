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

// setTimeout and closures interview question.

function func1() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

func1();
// Here the output will be i is 6 and will be logged after 1,2,3,4,5 seconds waiting time but i will be 6 all the time because the loop for run and completed its task before any setTimeout function is ran at when the loop ends i value will be 6 which will be logged inside the setTimeout as due to closure the setTimeout will have the lexical environment of its parent and will be refering to refernce of i .

// but if you will use let variable instead of var the output will be 1,2,3,4,5 after respective seconds because let is block scope so every time the closure wil be formed inside the callback function of setTimeout with a new copy of i varibale will be different every time depending on the iteration.

// How to implement it with var keyword only to print 1,2,3,4,5 after respective seconds.

function funcClose() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
}
funcClose();

// Solution --> i. we just needed to make new copy of i every time we did this by using closures , now every time new value of i will be passed.
