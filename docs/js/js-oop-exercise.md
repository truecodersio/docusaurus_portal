---
title: "Exercise: JS Object-Oriented Programming"
slug: "js-oop-exercise"
---

## Objective

Your objective is to create two classes, Person and Coder, where the Coder class inherits from the Person class. You will override and add properties to the Coder class.

## Steps

Clone the exercise repo: [JavaScript OOP](https://github.com/Bryantellius/JavaScript_OOP)

### Part 1

1. Use class notation to create a class named `Person`
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. The `constructor()` method assigns this. properties to each parameter
4. Declare an info() method on the class that console.log's a string giving information about the Person object
5. You should display the `name`, number of `pets`, `residence`, and each hobby from the `hobbies` array
6. Declare a `greeting()` method that console.log's the sound of a Person... ex: `greeting() {console.log("Hello fellow person!")}`
7. Now we'll create a subclass `Coder` that inherits from our `Person` class

### Part 2

1. Use class notation to create a class named `Coder` that inherits from the `Person` class
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. Call the `super()` method inside the constructor method and pass in the given parameters
4. Still inside the constructor body, assign `this.occupation` to `"Full Stack Web Developer"`
5. Override the `greeting()` method to `console.log` a custom greeting from a `coder`…
6. Finally, let's create instances of our classes
7. Create a variable and assign a Person object to it using the new keyword followed by the class constructor
8. Create a variable and assign a Coder object to it using the new keyword followed by the class constructor
9. Call the object methods and `console.log` the object properties to test your work

### BONUS

- Refactor the `greeting()` methods to accept a name parameter and uses in to personalize the greeting output
- Now when you call the `coder.greeting()` or `person.greeting()` methods, you can pass in the name property from an instantiated Person or Coder object
