---
title: "Exercise: JS Higher-Order Functions"
slug: "js-higher-order-functions-exercise"
---

## Objective

Your objective is to write a function that takes in a number parameter and returns a function that adds the number parameter with a new number parameter.

## Steps

### Getting Started

Exercise Repo: [JavaScript Higher-Order Functions](https://github.com/Bryantellius/JavaScript_HOF)

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1

Write a function that takes in a number parameter and returns a function that adds the number parameter with a new number parameter.

1. Declare a function `plus` that takes in a `number` parameter.
2. Inside the body of `plus`, use the `return` keyword to return an anonymous function
3. The return function will take in a `plusNumber` parameter, and return the value of `plusNumber` with the first parameter `number`
4. Next, declare a variable `plus15` that is assigned the value of `plus` with 15 passed in
5. `console.log` the result of `plus15` with 10 passed in

End result should resemble: `console.log(plus15(10)) // Outputs 25`

### Exercise 2: forEach

Use the Array `forEach` method to print the _names_ of each user within the list. Start with the following code:

```js
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
```

### Exercise 3: map

Use the Array `map` method to _return a new array_ just containing objects with _names and scores_. Start with the previously defined `users` array.

### Exercise 4: filter

Use the Array `filter` method to _return a new array_ that only contains users that are listed as _active_. Start with the previously defined `users` array.

### Exercise 5: sort

Use the Array `sort` method to _sort the users array in-place_ with the users sorted _in descending order by score_. Start with the previously defined `users` array.

### Exercise 6: reduce

Use the Array `reduce` method to _return sum of all users' scores_. Once you have the sum of all scores, find the average score from the users. Start with the previously defined `users` array. 

---
