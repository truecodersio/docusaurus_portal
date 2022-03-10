---
title: "TypeScript Introduction"
slug: "/typescript-intro"
---

## Why

JavaScript is a loosely typed and interpreted programming language. Since we started working with JavaScript, we haven’t had to specify the type to any of our variables, parameters, etc. Because of this (and the interpreted nature of JS), we haven’t gotten succinct feedback for errors and bugs in our code. Enter TypeScript.

TypeScript is an extension to JavaScript that adds types. We’ve worked with JavaScript up to this point, and are well on our way to understanding the different types we’ve used inherently all along. TypeScript will help you catch errors faster with better feedback before and after you execute your code.

## What

TypeScript is an open-source language that extends JavaScript by adding static type definitions.

You use types to describe the intention of your code. TypeScript validates if your code runs correctly based on your design. Are the variables the correct data type at the correct time? Is the object I intend to use the correct type, or does it have the correct properties I will reference with my code?

We can enhance our code with types, but it’s not always required. You have the option to use or skip types when coding with TypeScript. More often than not, you will want to use typings. But there are some portions of your code that do not need them, and will just end up being more unnecessary code for you to type.

Below are a list of helpful tools that we’ll use with TypeScript:

- Code Compilation
- Type Annotations
- Interfaces

So let’s begin!

## How

Since we’re familiar with npm, let’s install typescript globally on our local machines:

```sh
npm install -g typescript
```

We can also download the TypeScript plugin for Visual Studio Code.

First, let’s create a new file named `app.ts` in a new project folder. And yes! Just like our JavaScript files end with a `.js` extension, our TypeScript files end with `.ts`.

TypeScript requires us to explicitly label our data types. We can do this by adding a `:` colon after our variables and labeling our intended data types for the value of our variables.

### Variables

Let’s add some variables in our app.ts.

For example:

```ts
let age: number = 51;
```

Very good! Now this is a small code snippet, but we can still test out the TypeScript annotations. Try reassigning your age variable to a string value like so:

```ts
age = "Fifty-One";
```

You will get the following error from TypeScript:

```txt
Type 'string' is not assignable to type 'number'.
```

TypeScript will enable static type checking for variables, meaning you won't be able to re-assign a variable with a different data type from initialization.

### Functions

Now let’s try function parameters. Consider the following function:

```ts
function add(num1, num2) {
  return num1 + num2;
}
```

Here we have a simple function that takes in two parameters, adds them together, and returns the result. With just JavaScript, there is no correction for either of my parameters being either undefined or of any data type. But I designed this function to work with numbers. So if a string gets passed in, it will concatenate, not add, the parameters together.

TypeScript corrects this issue. Add number types for both of the parameters:

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

Now, when we invoke our `add` function, TypeScript will only allow us to input the correct data type as our function was designed. If a string, or any non-number value gets passed in, you will receive feedback.

```ts
add(1, 2); // 3

add("three", 4); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Objects

When dealing with objects, we specify the data type of our property values, and we use interfaces to describe objects.

Let’s take our Coder example from earlier:

```ts
let coder = {
  name: "Frodo",
  city: "Hobbiton",
  numOfPets: 0,
  hobbies: ["adventuring", "cooking", "ring bearing"],
};
```

We have name, city, numOfPets, and hobbies as our property names, and have declared their respective types. Notice that our hobbies property will be an array of strings. `string[]` specifies that array’s values will be strings. `number[]` declares that an array will be filled with numbers.

We can create an interface by using the `interface` keyword, name of the interface, and properties with associative typings:

```ts
interface ICoder {
  name: string;
  city: string;
  numOfPets: number;
  hobbies: string[];
}
```

Then, we can apply this interface when declaring variables or using objects as parameters. Consider the following code:

```ts
const coder: ICoder = {
  name: "Frodo",
  city: "Hobbiton",
  numOfPets: 0,
  hobbies: ["adventuring", "cooking", "ring bearing"],
};

function displayFeedback(coder: ICoder) {
  console.log(coder.name + " is from " + coder.city + ".");
}
```

Here we have a `displayFeedback` function that takes in a parameter of type Coder. Now intellisense kicks in from our interface for use inside of the function.

Also, TypeScript will not allow us to pass in an object that doesn’t match our Coder interface:

```ts
displayFeedback({ name: "Frodo" }); // Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'ICoder'. Type '{ name: string; }' is missing the following properties from type 'ICoder': city, numOfPets, hobbies
```

Generally, you will see interface names starting with “I” then SomeName by convention. However, this is not a requirement.

### Learn More

There’s definitely more to learn, but from here we’ll learn as we code. As always, dive into their [documentation](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html).

In summary, it’s incredibly useful to add static type checking to JavaScript for better, faster debugging.

## Takeaways

1. TypeScript is an extension to JavaScript that adds **static typings**, error catching and more
2. Many full stacks that use JavaScript also use TypeScript
3. TypeScript can prevent many **type errors** that otherwise would cause a bug in your program
