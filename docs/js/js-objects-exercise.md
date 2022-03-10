---
title: "Exercise: JS Objects"
slug: "js-objects-exercise"
---

## Objective

Your objective is to practice using objects to store and use data within your program.

## Steps

### Getting Started

Exercise Repo: [JavaScript Objects and Arrays](https://github.com/Bryantellius/JavaScript_Objects_Arrays)

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this [template repository](https://github.com/Bryantellius/JavaScript_Objects_Arrays) to start a new project in your repos folder: git clone `<repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1: The Sum of an Array

- The Array Object in JavaScript has a built-in reduce method that iterates over each value in an array and returns a value. It is very useful when calculating sums.
- Write a function that takes an array of numbers as a parameter and returns the sum value of each number in the array. (i.e. write a custom Array.prototype.reduce() function)
- You can use the following array: const numbers = [2, 22, 12, 17, 18, 39, 129];

1. Declare a function arraySum that takes numbers as a parameter
2. Declare a variable sum and initialize sum as 0
3. Inside the arraySum function body, iterate over each number (value) in the numbers array using the array's forEach method
   - The array forEach method takes a callback (function) as a parameter, where you can pass in the value and index of the current array position
   - numbers.forEach((number, index) => {...});
4. Inside the body of the forEach callback function, write code so that each number in the numbers array is added to the value of sum
5. Below the forEach method, then return sum;
6. Call the arraySum(numbers) method inside console.log to print out the returned sum.

### Exercise 2: Favorite Book

- Write a “Book” object. Your book object should have the book’s title, author, the number of pages, and whether or not you have read the book

1. Declare a variable named book, and assign an object ({}) to the variable.
2. Using dot notation:
   - assign the title of your favorite book to a property named title,
   - assign the number of pages to a property named pages,
   - and assign the number of times you've read the book to a property named readCount
3. Using dot notation, add a method named info to the book object that returns a string that combines the title, pages, and readCount as an informational string. Ex: The Hobbit by J.R.R Tolkien, 295 pages, read 3 times.
4. After you have added the properties and method to the object, call the book.info() method inside console.log to print out the returned string.

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1VrthmnNsMheDExqlY700AP2oM4RW5fCNmYtEDw-AulQ/edit?usp=sharing)
