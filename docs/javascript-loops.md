---
title: "Loops"
slug: "/javascript-loops"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/505435531/6d792ef097" type="video/mp4" />
</video>

---

# Lecture

## Why:

In JavaScript, loops give us an easy way to do repetitive tasks. There are situations where you have to write a statement or execute a set of logic multiple times or display a message with a slight variation in numbers. There are various situations that are more easily served by one type of loop over the others as we will see later.

## What:

Types of JavaScript Loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

We will also cove these keywords:

- The **break** statement
- The **continue** statement

### The **for** Loop

The for loop will repeat until a specified condition evaluates to false.

Syntax:

```
for(initialization; conditional; increment/decrement) {
    // execute some code
}
```

Example:

```
for(let i = 0; i < 100; i++) {
    console.log(i)
}
```

### For Loop Variations:

- Initialization:

```
for(let i = 0, let str = ""; i < 10; i++) {
    // execute some code
}
```

You can initialize more than one value during initialization. Above, we initialize **i as 0** and **str as ""**.

```
let i = 0;
let str = "";
for( ; i < 10; i++) {
    // execute some code
}
```

You can also initialize values outside of the **for loop**.

- Conditional:

```
for(let i = 0; ; i++) {
    // execute some code
    break;
}
```

You can leave off the conditional statement, but you must have a **break** keyword within the loop body in order to stop the loop at some point.

- Increment/Decrement:

```
for(let i = 0; i < 10; ) {
    // execute some code
    i += 2;
}
```

You can also leave off the increment/decrement factor, but remember to include some way to eventually end the loop.

### The **for/in** Loop

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

Syntax:

```
for(variable in object) {
    // code to be executed
}
```

Example:

```
const person = {
    isOnline: true,
    user: "johndoe23"
}

for(let property in person) {
    console.log(property);
}
```

### The **for/of** Loop

The JavaScript for/of statement loops through the values of an iterable object. **for/of** lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

```
for(variable of iterable) {
    // code to be executed
}
```

Example:

```
const names = ["Ben", "Martin", "Denise"];

for(let name of names) {
    console.log(name); // logs each name
}
```

Difference between for/of and for/in:

```
const person = {
    firstName: "John",
    lastName: "Doe"
}

for(let property in person) {
    console.log(property);
}
```

The **for/in** loop will print the property names of the person object. If you used a **for/of** with the person object, you would receive a TypeError specifying that _person_ is not an iterable object.

However, when you use an iterable object, such as an array, **for/of** prints the values of the properties:

```
const nums = [0, 4, 8];

for(let num of nums) {
    console.log(num); // logs each value
}
```

If you use a _for/in_ loop on an iterable object such as an array, it would operate on the indices.

### The **while** Loop

The while loop will run infinitely until a specified condition is false. It can run 0 or more times. (if you don’t have a break statement or some way to make the conditional false.. you will crash your browser)

Syntax:

```
while(condition) {
    // code block to be executed
}
```

Example:

```
let x = 1;
while(x < 100) {
    if(x % 2 === 0) {
        console.log("Even");
    }
    x++;
}
```

This while loop prints out all even numbers 0 - 98

### The **do/while** Loop

The do/while loop will execute a specified block of code once, then will run until a condition is false. It will run at least 1 time. (be careful of infinite loops)

Syntax:

```
do {
    // code block to be executed
} while(condition);
```

Example:

```
let x = 1;

do {
    if(x % 2 == 0) {
        console.log("Even");
    }
    x++;
} while(x < 100);
```

### The **break** Statement

Use the break statement to terminate a loop.

Example:

```
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
        console.log(i);
        break;
    }
}
```

The for loop iterates through the array, and if a value matches the value of `target`, then the index is printed to the console and the `break` keyword stops the loop.

---

## Exercise:

Exercise Repo: [JavaScript Loops](https://github.com/Bryantellius/JavaScript_Selections_Loops)

### Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1: Ignore Even

In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

1. Create a for loop that evaluates numbers from 1 to 100.
2. Inside the loop body, write an if/else selection statement that checks whether a number is odd
3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

1

3

5

...

### Exercise 2: FIZZBUZZ

FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:

1. Create a for loop that evaluates numbers from 1 to 100 like the problem above.
2. Write a if/else selection statement inside the body of the the loop that checks the following:
   - If the number is divisible by 3, then console.log 'FIZZ'
   - If the number is divisible by 5, then console.log 'BUZZ'
   - If the number is divisible by both 3 and 5, then console.log 'FIZZBUZZ'

Ex: 15 would print 'FIZZBUZZ', 33 would print 'FIZZ', and 35 would print 'BUZZ'

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1DKeHV3lbtJ9zLACOprUOhXuNoxAHCW78HSwNmdvuEa4/edit?usp=sharing)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/505435636/22b2d8d21b" type="video/mp4" />
</video>

---

## Quiz:

[JS Selection Selection Statements Quiz](https://docs.google.com/forms/d/e/1FAIpQLSeYB7hVbr9eH9S73-M_gBIZbsYOVvZ_kzkjkrMJOeCJUSEv0g/viewform?authuser=3)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/506290132/6a5bd742e8" type="video/mp4" />
</video>
