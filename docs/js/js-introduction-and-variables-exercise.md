---
title: "Exercise: JS Introduction and Variables"
slug: "/js-introduction-and-variables-exercise"
---

## Objective

Your objective is to begin using variables to store and pass values throughout your program.

## Steps

### Getting Started

Repo Link: [JavaScript Variables](https://github.com/Bryantellius/JavaScript_Variables)

- Fork this repository to start a new project in your repos folder => `git clone <your github repo url>`
- `cd JavaScript_Variables` to navigate into your new repo directory
- Type the command `code .` to open VSC with the `JavaScript_Variables` folder
- Open the `app.js` file
- Complete the exercises below

### Exercise 1: Declaring Variables

- Declare a variable named firstName using the `const` keyword, and assign your name as the **string** value
- Declare a variable named lastName using the `let` keyword, and assign your name as the **string** value
- Declare a variable named age using the `var` keyword, and assign your age as the **number** value

### Exercise 2: Working with Strings

- Declare a variable named `fullName` using the `let` keyword, and assign your `firstName` plus your `lastName` as the **string** value
  - You will need to use **concatenation**, combining two string values with the `+` operator
  - Ex: `"FirstName" + "LastName" // would equal "FirstNameLastName"`
- Print the value of `fullName` to the console (to open you browser console in Google Chrome, right-click and press "Inspect" or <kbd>fn+F12</kbd>)

### Exercise 3

- Declare a variable named `myStory` using the `let` keyword, and assign a **string** with 3 sentences detailing:
  - An introduction using your `fullName` variable.
  - An introduction using your `city` variable.
  - An introduction using your `favorite` pastime variable.
- Be sure to use variables as the above answers (declare and assign variables if you haven't already)
- Print the result of `myStory` to the browser console using `console.log()` (passing any value into the parentheses to be printed)
- Example

```js
let myStory = `Hello! My name is ${fullName}. I live in ${city}. I enjoy ${pastime} and coding!`;
console.log(myStory);
```

- BONUS: Complete step two using a **template literal string** instead of concatenation
  - Template strings can include **placeholders**, `${variableValue}`, where you can inject variable values into a string

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1K5U9CyzSl49mFt7KjJB-GGBs16guQBLik4WuqUBFHRA/edit?usp=sharing)
