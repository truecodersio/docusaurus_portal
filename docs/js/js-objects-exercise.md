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

### Exercise 3: Reverse a String

You will be give a string sentence. Your task is to reverse _every word_ in the sentence. 

1. Start with the following code:

```js
let sentence = "The quick brown fox jumps over the lazy dog";
```

2. Convert the sentence into an array of words
3. Iterate over each word
4. Convert each word to an array of characters
5. Reverse each array of characters and update the array of words
6. Convert the array of reversed words back into a string

You final result given the starting sentence should be:

```txt
ehT kciuq nworb xof spmuj revo eht yzal god
```

### Exercise 4: Parse a CSV

Your task is to parse a csv string into an object.

> _csv_ stands for "Comma Seperated Values", and is a common file type when working and storing table data. Each data field is seperated by a comma, while each row is seperated by a _newline_ (`\n` escape character)

1. Start with the following code:

```js
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
```

2. Parse the string into an array of rows (split based on`\n` newlines)
3. Split the first row into an array of string headers (result should be `["name", "age"]`)
4. Iterate over each remaining row in the array
5. For each row, split the data values (by `,`)
6. And create an object for each row (or table record)
7. Assign the values from the parsed row values to `name` and `age` values on the object
8. Add each new object to a result array (should be defined before the loop block

Your final result should resemble:

```js
[
   {
      name: "Frodo",
      age: 50
   },
   {
      name: "Sam",
      age: 38
   },
   {
      name: "Merry",
      age: 36
   },
   {
      name: "Pippin",
      age: 36
   },
]
```

---
