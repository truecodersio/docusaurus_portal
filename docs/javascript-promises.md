---
title: "Promises"
slug: "javascript-promises"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984084/bee103445e" type="video/mp4" />
</video>

# Lecture

## Why:

Promises are a cleaner way to do **_callbacks_**. Callbacks are a great way to handle a function execution. If we want to execute a function right after the return of another function, then callbacks can be used. Promises are used to **_handle asynchronous operations in JavaScript_**. They are easy to manage when dealing with multiple asynchronous operations where multiple callbacks can create unmanageable code. Promises also provide better error handling than callbacks.

## What:

Promises are great for when you need to do something that will take a long time in the background (such as downloading an image from a different server). You want to do something after it’s complete instead of other operations waiting for it to finish. If you use the **_async_** keyword before a function definition, you can then use **_await_** within the function. When you await a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown. You can use **_catch_**() to see if it failed so you can retry it or display an error message to the user indicating it did fail.

### What is Async/Await?

- The newest way to write asynchronous code in JavaScript added in 2017.
- It is non-blocking (just like promises and callbacks).
- Async/Await was created to simplify the process of working with and writing chained promises.
- Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.

Writing an async function is quite simple. You just need to add the async keyword prior to function:

```
// Normal Function

function add(x,y){
    return x + y;
}

// Async Function

async function add(x,y){
    return x + y;
}
```

#### Benefits of Promises

- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

A Promise has four states:

- fulfilled: Action related to the promise succeeded
- rejected: Action related to the promise failed
- pending: Promise is still pending i.e not fulfilled or rejected yet
- settled: Promise has fulfilled or rejected

A promise can be created using a _Promise constructor_.

Syntax

```
var promise = new Promise(function(resolve, reject) {
    //do something
});
```

#### Parameters

- Promise constructor takes only one argument, a callback function.
- The callback function takes two arguments, _resolve_ and _reject_
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

#### Promise Consumers

Promises can be consumed by registering functions using _.then_ and _.catch_ methods.

- `then()` is invoked when a promise is either resolved or rejected.

- `then()` method takes two functions as parameters.

1.  The first function is executed if the promise is resolved and a result is received.
2.  The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using _.catch() method_

Syntax:

```
.then(function(result){
    //handle success
}, function(error){
    //handle error
})
```

- `catch()` is invoked when a promise is either rejected or some error has occurred in execution.

- `catch()` method takes one function as a parameter.

3.  Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler). Essentially, .catch() is just a shorthand for .then(null, errorHandler))

Syntax:

```
.catch(function(error){
    //handle error
})
```

- Promises are used for asynchronous handling of events.

- Promises are used to handle asynchronous HTTP requests.

## How:

```
const p = new Promise((resolve, reject) => {
    const a = 1 + 1;
    if(a === 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log("This is in then: " + message);
}).catch((message) => {
    console.log("This is in catch: " + message);
});
```

1. Created a promise.
2. We told it what to do if it succeeds.
3. We told it what action to take if it failed.
4. In our code, then = success, catch = fails.

## Exercise:

Repo link: [JavaScript Promises](https://github.com/Bryantellius/JavaScript_Promises)

### Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1

```
function watchTurorialCallback(callback, errorCallback) {

    let userLeft = false;
    let userWatchingLiveStream = true;

    if (userLeft) {
        errorCallback({
        name: "User Left",
        message: ":(",
        });
    } else if (userWatchingLiveStream) {
        callback("Thumbs up and Subscribe");
    }
}

watchTurorialCallback(
(message) => {
    console.log(message);
},
(error) => {
    console.log(error.name + " " + error.message);
}
);
```

The above function can be replicated as a Promise.

1. Declare a variable watching and assign it a new promise object
2. Inside of the promise constructor, declare a variable named userWatchingLiveStream.
3. Add a if/else conditional that checks if userWatchingLiveStream is true
4. If userWatchingLiveStream is true, call the resolve method with "Thumbs up and Subscribe!"
5. If false, call the reject method with "User left."

Once you have created your new promise:

1. Call watching and add a promise chain using .then and .catch
2. Pass in a function callback to .then that takes in a message and console.log's the message
3. Pass in a function callback to .catch that takes in an error and console.log's the error

Exercise Walkthrough

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/509030409/5f68a8eb7c" type="video/mp4" />
</video>

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1YQpP1WqzL3xxxYJQVvYkZpwJz2vbMfh7yKqBrT1NE3c/edit?usp=sharing)

## Quiz:

[JavaScript Promises Quiz](https://docs.google.com/forms/d/e/1FAIpQLScCBvQYE50NLIEn6lq7qM3cgwINMMNGfxoraJlpth6J-BR0QA/viewform?authuser=3)
