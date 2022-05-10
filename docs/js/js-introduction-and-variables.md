---
title: "JS Introduction and Variables"
slug: "/js-introduction-and-variables"
---

## Brief Introduction to JavaScript

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a programming used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript. In the past, Web pages were static, offering little user interaction beyond clicking links and loading new pages. For the first time, JavaScript enabled animation, adaptive content and form validation on the page. Now, most modern browsers support the latest JavaScript updates.

Some of the dynamic website enhancements performed by JavaScript are:

- Autocompletion
- Loading new content or data onto the page without reloading the page
- Rollover effects and dropdown menus
- Animating page elements such as fading, resizing or relocating
- Playing audio and video
- Validating input from Webforms
- Repairing browser compatibility issues

## Why

We use variables to provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.

## What

### Variables

**Variables** are used to store information to be referenced and manipulated in a computer program. A variable is essentially a memory location where a _value_ is stored. A variable is referred to by an _identifier_, or name, and can hold a JavaScript value of any type.

We can create and give a variable a value like so:

```js
let count = 1;
```

In the example, we create, or **declare**, a variable named `count`, and give, or **assign**, it a number value with `= 10`.

We gave the variable the name `count`, which is all-_lowercase letters_. We actually can use _uppercase letters_ and even a few _symbols_ in our variable names. 

Programming languages require certain naming conventions for variable identifiers. JavaScript requires the following rules:

- A JavaScript identifier must start with a letter, underscore (`_`), or dollar sign (`$`). Subsequent characters can also be digits (`0–9`)
- Because JavaScript is **case sensitive**, `apple`, `Apple`, and `APPLE` are all different names
- Multi-word identifiers should be _camel cased_, where each new word is capitalized
  - Ex: `thisIsCamelCased`
- Some examples of valid names are: `Number_hits`, `temp99`, `$credit`, `_name`, and `topScore`

> Although camel casing is popular in JavaScript, it is _not required_. Alternatives to camel casing are _Pascal Casing_ (ex: `ThisIsPascalCasing`) or underscores (ex: `this_uses_underscores_for_each_space`)

Naming variables can be one of the most difficult tasks in computer programming. When you are naming variables, think hard about the names. Try your best to make sure that the name you assign your variable is accurately descriptive and understandable to another reader. A reader should be able to read a variable name and understand its use in your program without supplemental documentation. This is one way to make your code _self documenting_.

Like above, you assign a value to a variable by using the `=` _assignment operator_.

The name of the variable goes on the left-hand side and the value you want to store in the variable goes on the right-hand side of the _assignment operator_.

```js
let name = "Frodo";
```

## How

### Declaring and Assigning Variables

You can declare a variable with one of three **declaration keywords**:

1. `var` - creates a **function**-scoped variable whose value can be reassigned
2. `let` - creates a **block**-scoped variable whose value can be reassigned
3. `const` - creates a **block**-scoped variable whose value cannot be reassigned

Examples:

```js
var age = 36;
let lastName = "Cotton";
const birthHome = "Shire";

age = 37; // var declarations can be reassigned
lastName = "Gamgee"; // let declarations can be reassigned
```

`undefined` values are automatically assigned to variables that have just been declared (but not assigned an initial value), or to formal arguments (parameters) for which there are no actual arguments.

```js
var x; // variable that is declared but not assigned a value
```

### JavaScript Data Types

Now that we know we can create variable to store data in our programs, well introduce the different types of data we can use in our programs.

#### Primitive Data Types

1. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

   - Used as a value that doesn't exist, or no longer exists
   - Ex: `let petName = undefined;`

2. [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

   - Used as a value that is empty, or is an invalid value
   - Ex: `let petName = null;`

3. [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
   - Used for logical values, true or false; yes or no; on or off
   - Ex: `let isOnline = true;`

4. [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

   - Used for any number value; integer, floating point, decimal, etc
   - Ex:

   ```js
   let age = 36;
   let price = 19.99;
   ```

5. [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

   - Used for text values
   - Single or double quotes surround the text values
   - Backticks can be used. Using backticks is referred to as a **template literal string**
   - Ex:

   ```js
   let firstName = "Frodo";
   let lastName = "Baggins";
   let race = `Hobbit`;
   ```

6. [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

   - Used for very large numbers with arbitrary-precision format
   - Ex:

   ```js
   let largeNum = 12345678900987654321n;
   ```

7. [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

   - Used as unique keys as property names on objects
   - Ex:

   ```js
   let symbol = Symbol("id");
   let obj = {};
   obj[symbol] = "Value at key: symbol on object obj";
   ```

> NOTE: Primitives cannot be altered. Remember that a primitive itself is different from the variable assigned a primitive value.

Variables may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

> NOTE: A primitive can be replaced, but it can't be directly altered.

#### Structural (Non-primitive) Data Types

1. [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

   - Used to store complex, related values represented as key/value pairs
   - \*Will be discussed in a later lesson

   ```js
   const person = {
     firstName: "Frodo",
     lastName: "Baggin",
     race: "Hobbit",
   };
   ```

2. [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

   - Used to created callable code blocks
   - \*Will be discussed in a later lesson
   - Ex:

   ```js
   function someFunc() {
     // repeatable code
   }
   ```

### Data Type Conversion

JavaScript is a **dynamically** typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

```js
let answer = 42;
```

And later, you could re-assign the same variable a string value, for example:

```js
answer = "Thanks for all the fish...";
```

Because JavaScript is dynamically typed, this assignment does not cause an error message.

If you re-declare a JavaScript variable, it will **not** lose its value. The variable carName will still have the value "Volvo" after the execution of these statements:

```js
var carName = "Volvo";

var carName;
```

> NOTE: The above example only works if you declare a variable using the keyword `var`. As of ES2015, using `let` or `const` will disable you ability to redeclare variables.

#### Duck Typing

Javascript is an **interpreted language**, meaning the interpreter assigns variables a type based on the variable’s value at _run-time_.

Moreover, _interpreted languages_ are languages that are not compiled but are parsed upon execution. Javascript and other languages fall into this category, as you don’t have a compile step prior to running. Simply save the script and refresh.

When referring to **Duck Typing**, many use the saying, "If it quacks like a duck, walks like a duck...it’s a duck."

Duck Typing refers to a duck test program. You will test something, if it quacks like a duck, and walks like a duck, it is a duck. If a method responds to any given object call, it passes the _"Duck Test"._

Duck Typing is a feature in JavaScript where the variable attempts to behave in the manner it is used. So if it’s used as a string, it’s a string, etc.

In C# or other _statically typed_ languages, passing methods into objects is deemed suitable based on its type. With duck typing, however, objects are determined whether or not suitable based on what it does, not what it is. It doesn’t matter the type if both objects do the same thing or better yet, have the same capabilities. If the method responds to the object call, basically as long as the object responds _type doesn't matter_.

Duck Typing is _polymorphism_ without hierarchy, dynamic dispatch without _inheritance_ hierarchy, and no explicit _interfaces_. Essentially checking for capability, not compatibility.

Duck Typing is used in many programming languages, Ruby and Python for example, and it is really useful. However, sometimes it creates unwanted results in an application because the rules of Duck Typing are too simple and can result in wrong conclusions. You can understand this warning more in examples below.

#### Type Coercion

A central pillar of JavaScript involves the core concept called **Type Coercion**. Type Coercion is the interpreted nature of JavaScript to morph a data type from one to another based on the attempt to complete an action. For example, if you try and perform an arithmetic operation between a number and a string, JavaScript will change of the two values to match the other.

For the most part, it makes sense. You can't perform addition when one of the two values isn't even a number. JavaScript recognizes that and will try and interpret your intention to give a result. Let's take a look:

```js
"12" + 12; // equals "1212", string data type
12 - "7"; // equals 5, number data type
```

Type Coercion is central to how JavaScript will interpret and execute your program. We will cover more examples in a future lesson with JavaScript Operators.

## Takeaways

1. JavaScript is a _dynamically_ typed, _interpreted scripting_ language used to create rich and dynamic user interfaces and experiences on webpages
2. _Variabes_ are containers for values that you can use to pass and reference elsewhere in your program
3. _Type Coercion_ is a feature of JavaScript where values are converted, or _coerced_, to another data type depending on the operations being attempted
