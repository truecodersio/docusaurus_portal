---
title: "JS Higher-Order Functions"
slug: "js-higher-order-functions"
---

## Why

In JavaScript, we can define **functions** that contain blocks of code that perform particular tasks. As you begin to create programs, you will begin to realize that your programs can become very large. Large programs are costly in time and size. Size leads to complexity and complexity leads to confusion. As we’ve discussed, the use of functions is a central concept in JavaScript programming.

**Higher-Order Functions** are functions that operate on other functions either by taking them as arguments or by returning them. This allows you to **abstract over actions, not just values.**

This is helpful because we can begin to move large portions of code around our program, limiting mistakes coming from lengthy code snippets.

> REMINDER: _Functions in JavaScript are first-class citizens/objects._

## What

Again, a **higher-order function** is a function that operates on other functions either by _taking them as arguments_ or by _returning them_.

Let’s look at the array’s `reduce` method:

```js
let nums = [1, 2, 3, 4, 5];

nums.reduce((sum, num) => {
  return sum + num;
}, 0);
```

Above, we call the `reduce` method on the `numbers` array. This method is a higher-order function, because it takes a callback function as a parameter, and returns a reduced value from the array.

Arrays have a standard `map` method that takes an array and function callback, and returns a new array with values dependent on the callback:

```js
let nums = [1, 2, 3, 4, 5];

nums.map((num, index, arr) => {
  return num * 2;
});

nums; // [2, 4, 6, 8, 10]
```

Keep in mind that the **map** method returns a **new array**. This is different behavior compared to the `forEach` method that acts on the existing array value.

**Higher-order functions** are great for processing data.

You will often encounter data structures that resemble the following:

```js
let students = [
  {
    firstname: "John",
    lastname: "Doe",
    avg: 81,
    favSubject: "History",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    avg: 94,
    favSubject: "Math",
  },
  ...
];
```

In this case, it is incredibly useful to use higher-order functions to parse the data as needed in your program.

## How

Below is a glance at function syntax for higher-order functions:

```js
function forEach(list, action) {
  for (let i = 0; i < list.length; i++) {
    action(list[i], i, list);
  }
}
```

Using the contacts data structure above (`[{firstname, lastname, avg, favSubject}, ...]`), we pass in students as the first parameter, and `action` as the second parameter.

In this case, we can provide any `action` function as the second parameter to be called on each value of the `list`.

### For In/Of

You may notice that we used a `for` loop that looks different. For an iterable data type, ex: Array, you can use this loop syntax to iterate over each value in the array.

```js
for (let student of students) {
  console.log(student); // would log each { firstname, lastname, avg, favSubject } student obj in the array
}
```

Likewise, you can use the `in` keyword as opposed to the `of` keyword to iterate over each index in the array.

```js
for (let studentIdx in students) {
  console.log(studentIdx); // would log each index/key (0 to n) in the array
}
```

### Function Returning Functions

Now let’s take a look at an example of a function returning another function:

```js
function lessThan(number) {
  return function (testNumber) {
    return number > testNumber;
  };
}

const lessThan100 = lessThan(100);
lessThan100(50); // returns true
lessThan100(150); // returns false
```

To break this down:

1. We first declare a function `lessThan` that takes a number as a parameter.
2. `lessThan` returns a function that uses `number` as a condition in it’s function body.
3. Then we declare a variable `lessThan100` that is initialized to the value of `lessThan` called with `100` passed in.
4. Now `lessThan100` holds a function that takes in a value `testNumber` and returns a boolean depending on a condition.

In this example, we have reached a major tenet in higher-order function usability. We created a new function by a higher-order function.

### Note on Writing Code

As you begin to write more complex functions, think about readability. Think **CCR**: _Clear, Concise, and Readable_.

Write abstract functions for operations to allow for clear intention and design.

## Takeaways

1. Higher-Order functions are functions that _take a function value as a parameter_ or return a _function value_
2. HOF can be used to parse or manipulate values in a array or object structure
3. The _for/in_ loop iterates over object properties; the _for/of_ loop iterates over object values
