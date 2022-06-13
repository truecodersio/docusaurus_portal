---
title: "Exercise: JS Object-Oriented Programming"
slug: "js-oop-exercise"
---

## Objective

Your objective is to practice OOP concepts and JS class notation syntax.

## Steps

### Getting Started

1. Open your command line and navigate to your `repos` directory (if you do not have a `repos` folder, then you can use `mkdir repos` to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd `repo_name` to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type `code .` in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

### Exercise 1

- Expanding from our exercise example during the lesson, create a parent class `class Person {}` with properties for `name`, `pets`, `residence`, and `hobbies`. The Person class will also have a method `info()` and `soundOff()`.

1. Use class notation to create a class named `Person`
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. The `constructor()` method assigns `this.` properties to each parameter
4. Declare an `addHobby()` method on the class that takes in a new `hobby` (string), and adds it to the object's `hobbies` array property
5. Declare a `removeHobby()` method on the class that takes in a `hobby` (string), and removes the hobby from the object's `hobbies` array property
6. Declare a `greeting()` method that `console.log`'s a generic greeting for a Person... ex: `greeting() {console.log("Hello fellow person!")}`

### Exercise 2

Now we'll create a subclass `Coder` that inherits from our `Person` class

1. Use class notation to create a class named `Coder` that inherits from the `Person` class
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. Call the `super()` method inside the `constructor` method and pass in the given parameters
4. Still inside the `constructor` body, assign `this.occupation` as `"Full Stack Web Developer"`
5. Override the `greeting()` method to `console.log` a custom greeting from a coder...

### Exercise 3

Let's create instances of our classes

1. Create a variable and assign a Person object to it using the `new` keyword followed by the class `constructor`
2. Create a variable and assign a Coder object to it using the `new` keyword followed by the class `constructor`
3. Call the object methods and `console.log` the object properties to test your work

### Exercise 4

In this final exercise, we'll create a class that has the functionality of a basic calculator.

1. Create a class called `Calculator`
2. Initialize a `result` property within the calculator `constructor` with an initial value of `0`
3. Declare methods on the class that represent basic arithmetic: `add()`, `subtract()`, `multiply()`, `divide()`
  - These methods should currently take in 2 parameters, and assign the result of the appropriate arithmetic based on the method name to the object's `result` property
  - Should return the result
  - EXTRA: if only one value is passed in, use the object's current `result` value as the first value in the operation
4. Declare a method called `displayResult()` that will `console.log` the result property stored on the object
5. Test your work by instantiating an object from your class (using the class constructor), and calling some of the calculator methods

---
