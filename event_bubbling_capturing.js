// Event bubbling and capturing(trickling) are two ways of event propgation in the DOM tree.

addEventListener(
  "click",
  () => {
    console.log("callback function");
  },
  true
);

// third argument (boolean) --> true -> capturing  , false -> bubbling , by default (no argument) --> bubbling.

// Lets suppose we have three divs '#grandparent','#parent','#child'

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent called");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent called");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child called");
  },
  false
);

// So here we have third argument as false (or you have not pass any arguments),so event bubbling will take place.

// When CHILD is clicked ,the event will bubble up ,and Child called -> Parent called -> GrandParent called will be the output.

// When PARENT is clicked,the event will bubble up ,and Parent called -> GrandParent called will be the output.

// When GRAND PARENT is clicked,the event will bubble up ,and GrandParent called will be the output.

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent called");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent called");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child called");
  },
  true
);

// So here we have third argument as true ,so event capturing will take place.

// When CHILD is clicked ,the event will capture down ,and GrandParent called ->  Parent called -> Child called will be the output.

// When PARENT is clicked,the event will capture down ,and  GrandParent called -> Parent called will be the output.

// When GRAND PARENT is clicked,the event will capture down ,and GrandParent called will be the output.

/* Event bubbling and capturing are quite expensive operations,so we need to find a way to stop event propagation */

// We can use stopProgation method to stop event propagation.

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent called");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent called");
    e.stopPropagation(); /*   stop proagation method used here */
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child called");
  },
  false
);

// So when we click on the parent the output will be ,Child called -> Parent called (and at parent div the event propagation will be stopped.)
