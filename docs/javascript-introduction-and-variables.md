---
title: "Introduction and Variables"
slug: "/javascript-introduction-and-variables"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504606565/251f783c19" type="video/mp4" />
</video>

---

# Lecture

[JavaScript is a programming language](https://www.fraudlabspro.com/resources/tutorials/add-fraudlabs-pro-agent-javascript-bigcommerce/) used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript. In the past, Web pages were static, offering little user interaction beyond clicking links and [loading new pages](https://www.bigcommerce.com/blog/site-speed-stability-and-security-the-ecommerce-non-negotiables-all-online-businesses-must-deliver/). For the first time, JavaScript enabled animation, adaptive content and form validation on the page. Initially, JavaScript compatibility was a major issue across the most common platforms.

Some of the dynamic website enhancements performed by JavaScript are:

- Autocomplete
- Loading new content or data onto the page without reloading the page
- Rollover effects and dropdown menus
- Animating page elements such as fading, resizing or relocating
- Playing [audio and video](https://www.bigcommerce.com/blog/product-video-marketing-examples/)
- Validating input from Webforms
- Repairing browser compatibility issues

Duck typing gives a programmer the ability to not worry about the type of an object rather perform the required operations. This allows a programmer to save time and optimize performance. It's been said that duck typing in general cuts down development time. There's less boilerplate code and gives programmers flexibility.

## JavaScript Variables

### Why:

We use variables to provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.

### What:

**Variables** are used to store information to be referenced and manipulated in a computer program.

Naming variables is known as one of the most difficult tasks in computer programming. When you are naming variables, think hard about the names. Try your best to make sure that the name you assign your variable is accurately descriptive and understandable to another reader.

When you assign a variable, you use the `=` symbol.

The name of the variable goes on the left and the value you want to store in the variable goes on the right.

`let x = 7`

The names of variables, called [identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier), conform to certain rules:

- A JavaScript identifier must start with a letter, underscore (\_), or dollar sign ($). Subsequent characters can also be digits (0–9).
- Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) as well as "a" through "z" (lowercase).
- You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers. (For more details, see [this blog post](https://mathiasbynens.be/notes/javascript-identifiers-es6).) You can also use the [Unicode escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) as characters in identifiers.
- Some examples of legal names are: Number_hits, temp99, $credit, and \_name.

#### Data and Structure types

The latest ECMAScript standard defines nine types:

- Six Data Types that are [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), checked by [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator:
  - [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) : typeof instance === "undefined"
  - [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) : typeof instance === "boolean"
  - [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number) : typeof instance === "number"
  - [String](https://developer.mozilla.org/en-US/docs/Glossary/String) : typeof instance === "string"
  - [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) : typeof instance === "bigint"
  - [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) : typeof instance === "symbol"
- Structural Types:
  - [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object) : typeof instance === "object". Special non-data but Structural type for any [constructed](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects#The_Constructor) object instance also used as data structures: new [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), new [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), new [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), new [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), new [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), new [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet), new [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and almost everything made with [new keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new);
  - [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function) : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.
- Structural Root Primitive:
  - [null](https://developer.mozilla.org/en-US/docs/Glossary/Null) : typeof instance === "object". Special [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type having additional usage for its value: if object is not inherited, then null is shown;

[For more information on ECMAscript and JavaScript click here!](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/)

Something that does not yet exist or does not exist anymore is: undefined.

But when we wish to be able to represent something that exists being empty, we have to invent another keyword. And that is what null stands for.

- **Undefined** - undefined is a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/primitive) value automatically assigned to [variables](https://developer.mozilla.org/en-US/docs/Glossary/variable) that have just been declared, or to formal [arguments](https://developer.mozilla.org/en-US/docs/Glossary/Argument) for which there are no actual arguments.

```
let x; // create a variable and assign it no value
console.log("x's value is: ", x); // logs x's value as undefined
```

- **Null** - a null value represents a reference that points, generally intentionally, to a nonexistent or invalid [object](https://developer.mozilla.org/en-US/docs/Glossary/object) or address.

`let myObject = null;`

- **Boolean** - Boolean is a logical data type that can have only the values true or false.

`let isCorrect = true;`

- **Number** - In JavaScript, Number is a numeric data type in the [double-precision 64-bit floating point format (IEEE 754)](http://en.wikipedia.org/wiki/Double_precision_floating-point_format). In other programming languages different numeric types exist; for example, Integers, Floats, Doubles, or Bignums. However, in JavaScript there is only one type of number. Numbers can be written with or without decimals.

```
let y = 3; // an integer
let x = 3.14; // an decimal number
```

- **String** - In any computer programming language, a string is a sequence of characters used to represent text. In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.

```
let x = 'This is a string with single quotes.';
let y = "This is a string with double quotes.";
let z = `This is a template literal string with back ticks.`;
```

- **BigInt** - BigInt is a numeric data type that can represent integers in the arbitrary precision format.

```
let bigNum = 1234567890123456789012345678901234567890n;
let anotherBigNum = BitInt(1234567890123456789012345678901234567890);
```

- **Symbol** - A Symbol value represents a unique identifier (MUST BE UNIQUE)

(we will touch on symbols in a later lesson)

Primitives cannot be altered. Remember that a primitive itself is different from the variable assigned a primitive value.

The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

Using a string method doesn't mutate the string (primitive)
```
let name = "John";
console.log(name); // "John"
name.toUpperCase();
console.log(name) // "John"
```

Using an array method mutates the array (object)
```
const myArray = [];
console.log(myArray); // []
myArray.push("John");
console.log(myArray); // ["John"]
```

_A primitive can be replaced, but it can't be directly altered._

### How:

You can declare a variable in three ways:

- With the keyword [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.
- With the keyword [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) or [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). For example, let y = 13. This syntax can be used to declare a block-scope local variable.

You can also simply assign a value to a variable

For example: `x = 42`.

\*This form creates an [undeclared global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#Description) variable. It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.

#### Data type conversion

**JavaScript is a dynamically typed language.** This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

`let answer = 42;`

And later, you could assign the same variable a string value, for example:

`answer = 'Thanks for all the fish...';`

Because JavaScript is dynamically typed, this assignment does not cause an error message.

If you re-declare a JavaScript variable, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

```
var carName = "Volvo";

var carName;
```

## Duck Typing

### What:

Javascript is an Interpreted language, meaning the interpreter assigns variables a type based on the variable’s value at run-time.

Moreover, Interpreted languages are languages that are not compiled but are parsed on the fly. Javascript and other languages fall into this category as you don’t have a compile step prior to running. Simply save the script and refresh.

When referring to Duck Typing, many use the saying,

_“If it quacks like a duck, walks like a duck...it’s a duck”_

Duck Typing refers to a duck test program. You will test something, if it quacks like a duck, and flies like a duck, it is a duck. If a method responds to any given object call, it passes the **“Duck Test”**.

**Duck Typing** is a feature in javascript where the variable attempts to behave in the manner it is used. So if it’s used as a string, it’s a string, etc.

In C# or other _statically typed_ languages, passing methods into objects is deemed suitable based on its type. With duck typing, however, objects are determined whether or not suitable based on what it does, not what it is. It doesn’t matter the type if both objects do the same thing or better yet, have the same capabilities. If the method responds to the object call, basically as long as the object responds **TYPE DOESN’T MATTER!**

Duck Typing is _polymorphism_ without hierarchy, dynamic dispatch w/o _inheritance_ hierarchy, and no explicit _interfaces_. Essentially checking for capability, not compatibility.

Duck Typing is used in many programming languages, for example, Ruby, Python,.. and it is really useful but sometimes it creates unwanted acts in application because the rules of Duck Typing are too simple and can result in wrong conclusions. You can understand this warning more in examples.

### How:

```
function drive(vehicle) {
    console.log(vehicle + " is now in drive.");
}

let truck = "Tundra";
let car = "Camry";

let vehicles = [truck, car, 1];

for(let i = 0; i < vehicles.length; i++) {
    drive(vehicles[i]);
}
```
Tundra is now in drive.
Camry is now in drive.
1 is now in drive.

1. There is a function called **Drive**
2. There is an array called **vehicles** that contains two strings and an integer.
3. The for-loop calls the Drive function for the array.
4. No matter the **type**, each element of the array is in Drive.

---

### Exercise:

Repo Link: [JavaScript Variables](https://github.com/Bryantellius/JavaScript_Variables)

JavaScript_Variables

#### Steps

1. Fork this repository to start a new project in your repos folder == git clone &lt;your github repo url>
2. cd JavaScript_Variables to navigate into your new repo directory
3. Type the command code . to open VSC with the JavaScript_Variables folder
4. Open the app.js file

##### Exercise 1: Declaring Variables

1. Declare a variable named firstName using the const keyword, and assign your name as the string value
2. Declare a variable named lastName using the let keyword, and assign your name as the string value
3. Declare a variable named age using the var keyword, and assign your age as the number value

##### Exercise 2: Working with Strings

1. Declare a variable named fullName using the let keyword, and assign your firstName plus your lastName as the string value
2. Print the value of fullName to the console (to open you browser console in Google Chrome, right-click and press "Inspect" or fn+F12)
3. BONUS: Complete step two using a template literal instead of concatenation

##### Exercise 3:

1. Declare a variable named myStory using the let keyword, and assign a string with 3 sentences detailing:
   - An introduction using your fullName variable.
   - An introduction using your city variable.
   - An introduction using your favorite passTime variable.
2. Be sure to use variables as the above answers (declare and assign variables if you haven't already)
3. Print the result of myStory to the browser console

```
    let myStory = `\Hello! My name is ${fullName}. I live in ${city}. I enjoy ${passtime} and coding!`;

```

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1K5U9CyzSl49mFt7KjJB-GGBs16guQBLik4WuqUBFHRA/edit?usp=sharing)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504983940/96a22b9cd3" type="video/mp4" />
</video>

---

## Quiz:

[JavaScript Intro Quiz](https://docs.google.com/forms/d/e/1FAIpQLSfQ8xTLTQ7DXc2dJAH9no7AZLeche3L8h75gYveErjwsuz_aQ/viewform?authuser=3)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504983824/a8a564a200" type="video/mp4" />
</video>
