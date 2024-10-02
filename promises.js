const GITHUB_API = "https://api.github.com/users/Nikhil1604-up";

const cart = ["shoes", "bags"];

const user = fetch(GITHUB_API);

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise object is immutable.

// Creating a promise

const validateCart = (cart) => false;

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "123456";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

const promise = createOrder(cart);

promise
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => {
    console.log(err.message);
  });
