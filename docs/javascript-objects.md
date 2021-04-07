---
title: "Objects"
slug: "javascript-objects"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/506288392/c19283183a" type="video/mp4" />
</video>

# Lecture

## Why:

Objects are a very important part of the JavaScript language, and while for the most part you can accomplish simple and even intermediate tasks without worrying about them, any real project that you’re going to attempt is going to feature Objects. In fact, we’ve actually been using objects all along, without even realizing it! The uses of Objects in JavaScript can get deep relatively quickly, so let’s begin with the basics.

## What:

### Arrays

Arrays store **_multiple values in a single variable_**. To store three course names, you need three variables.

```
let course1 = "HTML";
let course2 = "CSS";
let course3 = "JS";
```

But what if you had 500 courses? The solution is an array.

```
const courses = new Array("HTML", "CSS", "JS");
```

But how do we access an Array?

You refer to an array element by referring to the **_index number written in square brackets_**.

This statement accesses the value of the first element in courses and changes the value of the second element.

```
const html = courses[0];
```

```
courses[0] = "C++";
```

Attempting to access an index outside of the array, returns the value undefined.

```
console.log(courses[0]) // undefined
```

You can also declare an array, tell it the number of elements it will store, and add the elements later.

```
const courses = new Array("HTML", "CSS", "JS");
```

OR

```
const courses2 = new Array(3);
courses2[0] = "HTML";
courses2[1] = "CSS";
courses2[2] = "JS";
```

OR you can use **_Array literal syntax_**, which just adds simplicity

```
const courses3 = ["HTML", "CSS", "JS"];
```

JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.

Think of an object as a list of variables that are written as **_name:value pairs_**, with the names and the values separated by colons.

```
const person = {
    name: "John",
    age: 27,
    favColor: "blue"
};
```

You can access object properties in two ways.

**_Dot Notation_**

```
person.age // 27
```

OR **_Bracket Notation_**

```
person["age"] // 27
```

This example demonstrates how to access the age of our person object.

**_Dot notation_** is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it. For example, myObject."obnoxious property" won’t work because that property is a string with a space in it. Likewise, you can not use variables in dot notation:

```
myObject.variable // error
myObject[variable] // success
```

### Objects as a Design Pattern

One of the simplest ways you can begin to organize your code is by simply grouping things into objects. Take these examples from a ‘tic tac toe’ game:

Example 1:

```
const playerOneName = "Tim";
const playerTwoName = "Jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";
```

Example 2:

```
const playerOne = {
    name: "Tim",
    marker: "X"
};

const playerTwo = {
    name: "Jenn",
    marker: "O"
};
```

At first glance, the first doesn’t seem so bad.. and it actually takes fewer lines to write than the example using objects, but the benefits are huge!

```
function printName(player) {
    console.log(player.name)
}
```

This is something that you just could NOT do with the example one setup. Instead, every time you wanted to print a specific player’s name you would have to remember the correct variable name and then manually console.log it:

```
console.log(playerOneName);
```

```
console.log(playerTwoName);
```

### The this Keyword

In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

## How:

Real Life Objects, Properties, and Methods

In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:

![alt_text](assets/lectures/javascript/javascript-objects1.png "image_tooltip")

All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

Objects are variables too. But objects can contain many values. So let’s create the above object in code.

This code assigns many values (Fiat, 500, red) to a variable named car:

```
const car = {
    type: "Fiat",
    model: "500",
    color: "Red"
};

console.log("This car is a " + car.type);
```

Now we can create a method so that our Car object can drive!

```
const car = {
    type: "Fiat",
    model: "500",
    color: "Red",
    drive: function() {
        return this.type + " is now in drive!";
    };
};

console.log(car.drive());
```

### JavaScript Core Objects

JavaScript contains built-in core objects with properties and methods for us to use. I’ve listed a few below:

Below are a few examples of common properties or methods of core objects:

- Array
  - .length, .forEach(), .map(), indexOf(), .concat(), .slice(), .join()
- Math
  - .max(), .min(), .round(), .ceiling(), .floor(), .random()
- String
  - .length, .charAt(), .endsWith(), .includes(), .concat(), .slice(), .split()
- Date
  - .now(), .getTime(), .toLocaleDateString(), .toTimeString()

For a detailed list of predefined Core Objects: [Click Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

## Exercise:

Exercise Repo: [JavaScript Objects and Arrays](https://github.com/Bryantellius/JavaScript_Objects_Arrays)

### Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1: The Sum of an Array

- The Array Object in JavaScript has a built-in reduce method that iterates over each value in an array and returns a value. It is very useful when calculating sums.
- Write a function that takes an array of numbers as a parameter and returns the sum value of each number in the array. (i.e. write a custom Array.prototype.reduce() function)
- You can use the follow array: const numbers = [2, 22, 12, 17, 18, 39, 129];

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

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1VrthmnNsMheDExqlY700AP2oM4RW5fCNmYtEDw-AulQ/edit?usp=sharing)

## Quiz

[JavaScript Objects and Arrays Quiz](https://forms.gle/raAZbghTBmHCFUx86)
