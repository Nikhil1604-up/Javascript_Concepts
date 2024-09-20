let nameVirat = {
  firstName: "Virat",
  lastName: "Kohli",
};

let printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} , ${state}`);
};

//function borrowing

printFullName.call(nameVirat, "Delhi", "Delhi NCR");

let nameSachin = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(nameSachin, "Mumbai");

// The only difference betwen call and apply method is the way we pass arguments.

printFullName.call(nameSachin, ["Mumbai", "Maharastra"]); // Here we have passed the arguments inside an array.

// bind method

let printMyName = printFullName.bind(nameSachin, "Mumbai", "Maharastra");

printMyName();

// so the bind method which return a function which we can invoke later
// Difference between call and bind is that the call method invokes the function when we write the call method ,but bind will return us a function which can be invoked later.
