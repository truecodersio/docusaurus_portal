---
title: "Exercise: JS Selection Statements"
slug: "/js-selection-statements-exercise"
---

## Objective

Your objective is to practice JavaScript selection statements with number guessing validation logic. The user should be prompted to give a number guess, and receive feedback whether the number they guessed was the correct number or not.

## Steps

Clone the exercise repo: [JavaScript Selection Statements](https://github.com/Bryantellius/JavaScript_Selection_Statements)

## Prerequisites

JavaScript has a built-in function for taking input from a user on a webpage. `window.prompt`, or simply `prompt`, will display a prompt to the user on a webpage and give them an input box for submitting data. You can store this data in a variable, or use it directly in your program. 

`prompt("What is your name?")` will prompt the user with that question, and return their answer to that point in your program.

Example:

```js
let answer = prompt("What is your name");

console.log("Hello, " + answer); // prints a message using the answer inputted by the user
```

## Exercise 1

1. Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable.
2. Use `window.prompt()` to ask the user to input a number, and store the result in a variable
3. Create an if-statement that if the guessed number is below the initial value, print out `"too low"`.
4. Create an else-if statement that if the number is higher than the initial value, print out `"too high"`.
5. Create an else statement that prints out `"Congratulations!!!"`.

## Exercise 2

Your goal is to take a user's birth month, and print out the season they were born in.

1. Declare a variable named `birthMonth` and set the value as the result of `window.prompt("What is your birth month?")`.
2. Create a switch-case statement with cases and a default case.
3. Print a response to the console that displays the season that the user was born in depending on their birth month input.

## Exercise 3

Given business logic that is written in the form of if/else statements, rewrite the program with switch cases.

Start with the following code:

```js
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
```

After you refactor your program to use switch cases inplace of if/else statements, your output should read:

```txt
Product: Large Purple Tank Top
```
