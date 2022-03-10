---
title: "JS Error Handling"
slug: "js-error-handling"
---

<!-- Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/508155630/eb581665ce" type="video/mp4" />
</video>

--- -->

## Why

We’ve been learning our way through the JavaScript language, and by now we’ve encountered an error or three.

Mistakes in code are referred to as **bugs**. The JavaScript language is loosely written, so the computer will not usually throw many errors.

If you:

- Write code that doesn’t follow JavaScript grammar
- Try to call something that is not a function
- Try to access a property from undefined

Your computer will usually throw an error. Other than that, you may never know anything is wrong until you get an unexpected **undefined** value.

Often, you will be spending time finding and fixing mistakes in your program. This is called **debugging**. We’ve already encountered errors, so we’ve already been debugging our code.

Composing error-free code is always the goal, but you need to pay special attention in JavaScript. Flagging mistakes and errors in your code is essential. Unfortunately, JavaScript can be extremely vague when you come across bugs in your code.

So let’s break down the best approach to error handling in JavaScript.

## What

### Common Errors

The most common errors in JavaScript are

1. Syntax Error
2. Type Error
3. Reference Error

**Syntax Errors** will be thrown if you miswrite any JavaScript syntax. You will often receive syntax errors as _early errors_ displayed to you in Visual Studio Code.

**Type Errors** will be thrown if you misuse a value as the wrong data type. For example:

```js
let str = "Baggins";
str.forEach((letter) => console.log(letter)); // TypeError: str does not have method forEach
```

**Reference Errors** will be thrown when you access or reference values from variables that do not exist. For example:

```js
let hobbit = {
  name: "Frodo",
};

obj.name; // ReferenceError: cannot read name of undefined
```

### Strict Mode

You can enable **strict mode** at the top of a file or function declaration for a slightly stricter run of JS code.

Place `"use strict";` either at the top of a code file or a function body, and it will report more bugs/errors in your program.

```js
"use strict";

for (i = 0; i < 10; i++) {
  console.log(i);
}
```

Here we see an example of **Strict Mode** catching an error that JavaScript would solve during run time. JavaScript would normally create a _global variable_ for `i` and use that global variable without throwing an exception. However, with `"use strict";`, the JIT compiler will throw a _reference_ error for variables that you declare without a declaration keyword.

Strict mode also eliminates the ability to pass multiple, same-name parameters to a function.

### Types

JavaScript is _dynammically typed_. This means that variables do not have static data types. You can initialize a variable with a number and then turn around and reassign the variable with a string value. This can lead to unexpected bugs in your program.

- It is helpful to know what data types you expect to use with parameters and function returns
- Since JavaScript evaluates types at runtime, and even then will implicitly convert types to what it expects itself, many bugs can occur
- There are several conventions for annotating JS code:

```js
// (number, number) => number
function add(num1, num2) {
  return num1 + num2;
}
```

Above, I added a comment that displays a simple annotation of the data types of parameters and return value from the defined function.

You can also use [TypeScript](https://www.typescriptlang.org/). I recommend bookmarking TypeScript as a must learn, due to it's wide usage in the industry.

### Debugging

- Analyze your code before random changes
- Console.log to see/create a visual of the error occurring
- Use the `debugger` keyword to make the browser create a breakpoint in the code for inspection

### Error Propagation

- Remember that many end cases for the programs you write are used by someone(s) else.
- With that in mind, you need to write code that corrects user error, either by checking for it, running with it, or simply telling the user that something went wrong.

### Exceptions

- Exceptions allow code that runs into a problem to raise (or throw) an exception. An exception can be any value.
- Use the `throw` keyword to raise an exception (e.g., `throw new Error(“Something went wrong”)`)
- JS has an Error constructor that sets a message property on the created object
- Error objects also contain a _stack-trace_
- Catch the exception with a `try/catch` block that tries code and does something if an exception is caught

```js
try {
  // Try to execute some code
  // If an error occurs, the catch block will receive the error (or whatever value you throw)
} catch (error) {
  // Handle error
  console.error(error.message);
}
```

### Cleaning Up After Exceptions

To reduce side effects, try writing code that creates new values rather than modifying existing values.

Try/catch blocks have a `try/catch/finally` feature to run code after the exception catch no-matter-what.

```js
try {
  // Try to execute some code
  // If an error occurs, the catch block will receive the error (or whatever value you throw)
} catch (error) {
  // Handle error
  console.error(error.message);
} finally {
  // Code to execute that isn't dependent on success or failure
}
```

### Selective Catching

Often, you will want to identify certain exceptions that you expected over those unexpected.

You can create a `class [SpecificType]Error extends Error {}` and then use `error instanceof [SpecificType]Error` in your catch block.

```js
class OutsideRangeError extends Error {}

try {
  // Try to execute some code
  // If an error occurs, the catch block will receive the error (or whatever value you throw)
} catch (error) {
  // Handle error
  if (error instanceof OutsideRangeError) {
    // Handle error specific to OutsideRangeErrors
  } else console.error(error.message);
}
```

## How

Let’s take a look at an example application that allows you to **input** a message, specify how many times you want that message to be **repeated**, and **logs** the message to the **console**.

```js
"use strict";
let countTo;

class UserInputError extends Error {}

function takeUserInput() {
  try {
    countTo = parseInt(prompt("What is the count limit?"));

    if (!countTo) {
      throw new UserInputError("Not a valid number");
    }
  } catch (e) {
    if (e instanceof UserInputError) {
      alert(e.message);
      takeUserInput();
    } else {
      alert("An unexpected error occured");
    }
  }
}

takeUserInput();

for (let i = 0; i <= countTo; i++) {
  console.log(i);
}
```

On line 1, you can see that we’re using **strict mode** (`"use strict";`) to ensure that we’re using proper syntax and acceptable practices throughout the application.

```js
"use strict";
let countTo;
```

Next, we’re using **selective catching** to catch an error that we’d expect some users to make. Keeping in mind what possible errors a user would make is an example of **Error Propagation**.

```js
class UserInputError extends Error {}
```

Now let’s break down the functionality of the application. We want to receive a value from our user and store that information somewhere to manipulate it later. Let’s prompt the user by using the `prompt` method. We’re storing their input inside of our variable `countTo`.

```js
countTo = parseInt(prompt("What is the count limit?"));
```

We will pass the user's input into `parseInt()`, which will return an integer if the input can be converted to a number, or `NaN` if it cannot.

```js
if (!countTo) {
  throw new UserInputError("Not a valid number");
}
```

Next, we'll check to see if `countTo` is a falsy value (meaning `NaN` in this case), and if so, we'll throw a `UserInputError`.

In our catch block, we'll conditionally handle the thrown error depending if the error is an instance of our `UserInputError` class.

```js
if (e instanceof UserInputError) {
  alert(e.message);
  takeUserInput();
} else {
  alert("An unexpected error occured");
}
```

If the user didn't provide a valid input, I'll alert feedback and recursively prompt the user to input a correct value. Otherwise, I'll handle the error generically.

## Takeaways

1. _Bugs_ are errors that occur in our programs; _Debugging_ is the process of finding and fixing bugs
2. _Syntax_, _Reference_ and _Type_ errors are the main errors you will encounter in JavaScript
3. You can use a `try/catch` block to attempt code statements, but catch and handle any errors that occur during that attempt
