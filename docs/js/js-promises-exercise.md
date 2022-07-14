---
title: "Exercise: JS Promises"
slug: "js-promises-exercise"
---

## Objective

Your objective is to turn the given function into a new promise, and handle success or failures from the asynchronous code.

## Getting Started

Repo link: [JavaScript Promises](https://github.com/Bryantellius/JavaScript_Promises)

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type `code .` in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

## Exercise 1

You will start with the following code in your `app.js` file:

```js
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;

  if (userLeft) {
    errorCallback("User left.");
  } else {
    callback("Thumbs up and Subscribe!");
  }
}

watchTutorialCallback(
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
2. Inside of the promise constructor, declare a variable named userLeft.
3. Add a if/else conditional that checks if userLeft is `true`
4. If userLeft is `true`, call the `reject` method with "User left."
5. If `false`, call the resolve method with "Thumbs up and subscribe!"

## Exercise 2

Once you have created your new promise:

1. Call watching and add a promise chain using `.then` and `.catch`
2. Pass in a function callback to `.then` that takes in a message and console.log's the message
3. Pass in a function callback to `.catch` that takes in an error and console.log's the error

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1YQpP1WqzL3xxxYJQVvYkZpwJz2vbMfh7yKqBrT1NE3c/edit?usp=sharing)
