---
title: "Exercise: JS Loops"
slug: "/js-loops-exercise"
---

## Getting Started

Exercise Repo: [JavaScript Loops](https://github.com/Bryantellius/JavaScript_Selections_Loops)

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. `cd repo_name` to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type `code .` in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the `app.js` file to get started

## Exercise 1: Ignore Even

In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

1. Create a `for` loop that evaluates numbers from 1 to 100.
2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

## Exercise 2: FIZZBUZZ

FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:

1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
   - If the number is divisible by 3, then console.log `'FIZZ'`
   - If the number is divisible by 5, then console.log `'BUZZ'`
   - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`

Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`

## Exercise 3: Repeat with While and Do/While

For exercise 3, repeat both exercise 1 and 2 as `while` and `do/while` loop solutions.

## Exercise 4: Find Value

In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".

1. Start with the following code:

```js
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
```

2. Create a `for` loop that iterates from 0 to n
3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

## Exercise 5: Customized FIZZBUZZ

We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

1. Start with the following code:

```js
let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let n = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);
```

2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.

---
