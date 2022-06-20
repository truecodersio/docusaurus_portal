---
title: "JS Promises"
slug: "js-promises"
---

<!-- Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984084/bee103445e" type="video/mp4" />
</video>

--- -->

## Why

Promises are a cleaner way to execute **callbacks**. Callbacks are a great way to handle a function execution. If we want to execute a function right after the return of another function, then callbacks can be used. Promises are used to **handle asynchronous operations in JavaScript**. They are easy to manage when dealing with multiple asynchronous operations where multiple callbacks can create unmanageable code. Promises also provide better error handling than callbacks.

## What

Promises are great for when you need to do something that will take a long time in the background (such as downloading an image from a different server). You want to do something after it’s completed, but you do not want the rest of your program to wait for its completion. Promises are **asynchronous**. Meaning that they do not block execution of subsequent code in your file. Asynchronous code will begin executing in the order that you specify, but may not be guaranteed to finish executing in the order that they appear in the file. This is useful for many situations, including api requests, event handling, and timers.

Below is a brief example of synchronous and asynchronous code:

```js
// Synchonous
function print(msg) {
  console.log(msg);
}

print("1");
print("2");
print("3");

// "1"
// "2"
// "3"

// Asynchronous
async function print(msg, time) {
  setTimeout(() => console.log(msg), time);
}

print("1", 1000);
print("2", 100);
print("3", 0);

// "3"
// "2"
// "1"
```

Promises are used to define callback functions that will be executed depending on the result of a promise.

A promise can be created using a _Promise constructor_.

Syntax:

```js
let promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(successValue);
  } else {
    reject(errValue);
  }
});
```

The promise constructor takes in a callback function as its parameter. Resolve and reject parameters are functions that, when called, determine the status of a promise, and return a result that will be used in a promise consumer.

### Benefits of Promises

- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

### Promise States

- **resolved**: Action related to the promise succeeded
- **rejected**: Action related to the promise failed
- **pending**: Promise is still pending (i.e not fulfilled or rejected yet)
- **fulfilled**: Promise has fulfilled or rejected

### What is Async/Await?

The newest way to write asynchronous code in JavaScript is with `async/await` syntax, which was introduced in 2017.

- It is non-blocking (just like promises and callbacks).
- Async/Await was created to simplify the process of working with and writing chained promises.
- Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.

Writing an async function is quite simple. You just need to add the async keyword prior to function:

```js
// Normal Function
function add(x, y) {
  return x + y;
}

// Async Function
async function add(x, y) {
  return x + y;
}
```

By returning a value from an asynchronous function, it is the same as calling the `resolve` function inside of a promise. Any error that is thrown in the async function is the same as `reject` being called in the promise. In fact, _async/await syntax is a promise_.

## How

Let's begin to understand how we can define our own promises.

### Parameters

- Promise constructor takes only one argument, a callback function.
- The callback function takes two arguments, _resolve_ and _reject_
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

### Promise Consumers

Promises can be consumed by registering functions using `.then()` and `.catch()` methods.

`then()` is invoked when a promise is either resolved or rejected.

The `then()` method takes two functions as parameters:

1. The first function is executed if the promise is resolved and a result is received.
2. The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle errors using `.catch()` method

Syntax:

```js
promise.then(
  function (result) {
    //handle success
  },
  function (error) {
    //handle error
  }
);
```

`catch()` is invoked when a promise is either rejected or some error has occurred in execution.

The `catch()` method takes one function as a parameter:

1. Function to handle errors or promise rejections (`.catch()` method internally calls `.then(null, errorHandler)`. Essentially, `.catch()` is just a shorthand for `.then(null, errorHandler)`).

Syntax:

```js
promise.catch((error) => {
  //handle error
});
```

A full example may resemble:

```js
const query = (statement, values) => {
  return new Promise((resolve, reject) => {
    database.query(statement, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

query("SELECT * FROM PRODUCTS")
  .then(results => /* use results */)
  .catch(err => /* handle error */)
```

Promises are used for asynchronous handling of events, HTTP requests, and timers. One of the most prominent promises that we will utilize is the **Fetch API** that will be introduced in a the following lesson.

## Takeaways

1. _Asynchronous_ JavaScript completes contrary to the execution order. This is useful for any code that may take a significant amount of time to complete.
2. _Promises_ give us an interface for initiating and handling asynchronous javascript
3. `Async/await` is newer syntax that returns a promise from asynchronous functions
