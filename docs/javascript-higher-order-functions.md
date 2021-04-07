---
title: "Higher-Order Functions"
slug: "javascript-higher-order-functions"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/507274492/dba36788bf" type="video/mp4" />
</video>

# Lecture

## Why:

In JavaScript, we can define **functions** that contain blocks of code that perform particular tasks. As you begin to create programs, you will begin to realize that your programs can become very large. Large programs are costly in time and size. Size leads to complexity and complexity leads to confusion. As we’ve discussed, the use of functions is a central concept in JavaScript programming.

**_Higher-Order Functions_** are functions that operate on other functions either by taking them as arguments or by returning them. This allows you to **_abstract over actions, not just values._**

This is helpful because we can begin to move large portions of code around our program, limiting mistakes coming from lengthy code snippets.

**_Functions in JavaScript are first-class citizens/objects._**

## What:

Again, a **_higher-order function_** is a function that operates on other functions either by taking them as arguments or by returning them.

Let’s look at the array’s **_reduce_** method:

```
const numbers = [1, 2, 3, 4, 5];

// The reduce method takes all of teh elements of an array and reduces
// them to a single value.

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15
```

Above, we call the `reduce` method on the `numbers` array. This method is a higher-order function, because it takes a callback function as a parameter, and returns a reduced value from the array.

Arrays have a standard `map` method that takes an array and function callback, and returns a new array with values dependent on the callback:

```
const doubleFromNumbers = numbers.map((val) => val * 2);

console.log(doubleFromNumbers); // [1, 4, 6, 8, 10]
```

Keep in mind that the **map** method returns a **new array**. This is different behavior compared to the **forEach** method that acts on the existing array value.

**_Higher-order functions_** are great for processing data.

You will often encounter data structures that resemble the following:

```
const contacts = [
  {
    name: "Ben",
    email: "b@mail.com",
    number: "+1 (123) 456-7890"
  },
  {
    name: "Tanner",
    email: "t@mail.com",
    number: "+1 (321) 654-0987"
  }
];
```

In this case, it is incredibly useful to use higher-order functions to parse the data as needed in your program.

## How:

Below is a glance at function syntax for higher-order functions:

```
function callContact(contactList, action) {
  for(let contact of contactList) {
    action(`Calling ${contact.name} at ${contact.number}`);
  }
}

callContact(contacts, console.log);
```

Using the contacts data structure above ([{name…, email…, number...}]), we pass in contacts as the first parameter, and ‘action’ as the second parameter.

In this case, we can provide any ‘action’ function as the second parameter to be called on each value of the ‘contactList’.

### For In/Of

You may notice that we used a **_for_** loop that looks different. For an iterable data type, ex: Array, you can use this loop syntax to iterate over each value in the array.

Likewise, you can use the **_in_** keyword as opposed to the **_of_** keyword to iterate over each index in the array.

### Function Returning Functions

Now let’s take a look at an example of a function returning another function:

```
function lessThan(number) {
  return (testNumber) => number > testNumber;
};

const lessThan100 = lessThan(100);

console.log(lessThan100(55)); // true
```

To break this down:

1. We first declare a function ‘lessThan’ that takes a number as a parameter.
2. ‘lessThan’ returns a function that uses ‘number’ as a condition in it’s function body.
3. Then we declare a variable ‘lessThan100’ that is initialized to the value of ‘lessThan’ called with 100 passed in.
4. Now lessThan100 holds a function that takes in a value ‘testNumber’ and returns a boolean depending on a condition.

In this example, we have reached a major tenet in higher-order function usability. **_We created a new function by a higher-order function._**

### Note on Writing Code

As you begin to write more complex functions, think about readability. Think CCR: **_Clear, Concise, and Readable._**

Write abstract functions for operations to allow for clear intention and design.

## Exercise:

Exercise Repo: [JavaScript Higher-Order Functions](https://github.com/Bryantellius/JavaScript_HOF)

### Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1:

**_Objective:_** Write a function that takes in a number parameter and returns a function that adds the number parameter with a new number parameter.

1. Declare a function plus that takes in a number parameter.
2. Inside the body of plus, use the return keyword to return an anonymous function
3. The return function will take in a plusNumber parameter, and return the value of plusNumber with the first parameter number
4. Next, declare a variable plus15 that is assigned the value of plus with 15 passed in
5. console.log the result of plus15 with 10 passed in

End result should resemble: `console.log(plus15(10)) // Outputs 25`

Exercise Walkthrough:

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/507274745/d24c33169b" type="video/mp4" />
</video>

[Exercise Documentation Here](https://docs.google.com/document/d/1CiLfJj2PuCMx6iJnrlY7pUjekd4ffsrB-SGr3er4olQ/edit?usp=sharing)

## Quiz:

No Quiz!
