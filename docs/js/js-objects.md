---
title: "JS Objects"
slug: "js-objects"
---

<!-- Lecture Video


<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/506288392/c19283183a" type="video/mp4" />
</video>

--- -->

## What

Objects are a very important part of the JavaScript language, and while for the most part you can accomplish simple and even intermediate tasks without worrying about them, any real project that you’re going to attempt is going to feature Objects. In fact, we’ve actually been using objects all along, without even realizing it! The uses of Objects in JavaScript can get deep relatively quickly, so let’s begin with the basics.

### Arrays

Arrays store _multiple values in a single variable_. Up to this point, you've needed three variables to store three course values.

```js
const course1 = "HTML";
const course2 = "CSS";
const course3 = "JavaScript";
```

But what if you had 500 courses? The solution is an array.

```js
const courses = ["HTML", "CSS", "JavaScript"];
```

But how do we access an Array?

You refer to an array element by referring to the **index number written in square brackets**. Arrays are **zero-indexed**. Meaning that the first value listed in the array actually resides at index 0.

The following statement accesses the value of the first element in courses and changes the value of the second element.

```js
courses[0]; // "HTML"

courses[1] = "SASS"; // reassigns the second array
```

Attempting to access an index outside of the array, returns the value undefined.

```js
console.log(courses[3]); // undefined
```

You can create an array with the **array constructor**. Just call `new Array(n)` and pass in a number value for how many items the array should hold. Then, populate (reassign) values in the array using bracket notation.

```js
let scores = new Array(5);

scores[0] = 1;
scores[1] = 2;
scores[2] = 3;
scores[3] = 4;
scores[4] = 5;
```

OR you can create an array as we did in our first courses example, using **Array literal syntax**.

```js
let scores = [1, 2, 3, 4, 5];
```

> Because of the simplicity, we will mostly be defining arrays with literal syntax.

### Objects

JavaScript variables are containers for data values. Objects are values too, but they can contain many values.

Think of an object as a list of variables that are written as **name:value pairs**, with the names and the values separated by colons.

```js
let hobbit = {
  firstName: "Frodo",
  lastName: "Baggins",
  age: 51,
};
```

Now, we have an object structure that contains properties about Frodo the Hobbit, such as his first name, last name, and age.

You can access object properties in two ways:

- **Dot Notation**

  ```js
  hobbit.firstName; // "Frodo"
  ```

- **Bracket Notation**

  ```js
  hobbit["firstName"]; // "Frodo"
  ```

_Dot notation_ is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it. For example, myObject."obnoxious property" won’t work because that property name contains a space. Likewise, you can not use variable values in dot notation:

```js
let propName = "firstName";

hobbit.propName; // undefined, since there is not a property named propName on hobbit

hobbit[propName]; // "Frodo"
```

### Methods

Properties can be assigned any value, _including_ function values. When we assign function values to properties, we call them **methods**. Methods allow us to assign actions to objects.

```js
hobbit.run = function () {
  console.log("Hobbit is running...");
};

hobbit.run(); // "Hobbit is running..."
```

To call a method, we use the same syntax as calling a function.

### Objects as a Design Pattern

One of the simplest ways you can begin to organize your code is by simply grouping things into objects. Take these examples from a ‘tic tac toe’ game:

```js
const player1 = "Ben";
const player2 = "John";
const player1Marker = "X";
const player2Marker = "O";
```

At first glance, the first doesn’t seem so bad.. and it actually takes fewer lines to write than the example using objects, but the benefits are huge!

```js
const player1 = {
  name: "Ben",
  marker: "X",
};

const player2 = {
  name: "John",
  marker: "O",
};
```

This is something that you just could NOT do with the example one setup. Instead, every time you wanted to print a specific player’s name you would have to remember the correct variable name and then manually console.log it:

```js
console.log(`${player1.name} plays ${player1.marker}`);
```

### The `this` Keyword

The `this` keyword refers to the containing object. It can be incredibly useful because, depending on the context of it's reference, it can refer to different values during execution. In a simple example, lets define a function, and then assign it as a method on an object.

```js
function speak(msg) {
  console.log(`${this.name} says, "${msg}".`);
}

hobbit.speak = speak;
```

In the example above, we are using `this` to refer to the containing object (`hobbit`) to access it's `name` property.

## How

Often, it's useful to recreate real life items as objects. One of the easiest examples of this is with representing products.

In real life, a car can be represented as an object.

A car has properties like make, model, type and color, and methods like start and stop:

| Make | Model   | Type | Color      |
| ---- | ------- | ---- | ---------- |
| Ford | Mustang | Coup | Space Gray |

All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times. Objects are variables too, but objects can contain many values. So let’s create the above object in code.

```js
let car = {
  make: "Ford",
  model: "Mustang",
  type: "Coup",
  color: "Space Gray",
};
```

Now we can create a method so that our Car object can drive!

```js
car.drive = function () {
  console.log(`${this.make} ${this.model} is now in drive...`);
};
```

### JavaScript Core Objects

We can create all matter of objects for our programs. On top of that, JavaScript contains built-in core objects with properties and methods for us to use. I’ve listed a few below:

- Arrays

| Name         | Reference                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `.length`    | [MDN Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)   |
| `.forEach()` | [MDN Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) |
| `.map()`     | [MDN Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)         |
| `.indexOf()` | [MDN Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) |
| `.concat()`  | [MDN Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)   |
| `.slice()`   | [MDN Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)     |
| `.join()`    | [MDN Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)       |

- Math

| Name        | Reference                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| `.max()`    | [MDN Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)       |
| `.min()`    | [MDN Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)       |
| `.round()`  | [MDN Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)   |
| `.ceil()`   | [MDN Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)     |
| `.floor()`  | [MDN Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)   |
| `.random()` | [MDN Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) |

- String

| Name          | Reference                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `.length`     | [MDN String.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)     |
| `.charAt()`   | [MDN String.prototype.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)     |
| `.endsWith()` | [MDN String.prototype.endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) |
| `.includes()` | [MDN String.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) |
| `.concat()`   | [MDN String.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)     |
| `.slice()`    | [MDN String.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)       |
| `.split()`    | [MDN String.protorype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)       |

- Date

| Name                    | Reference                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.now()`                | [MDN Date.prototype.now](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)                               |
| `.getTime()`            | [MDN Date.prototype.getTime](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)                       |
| `.toLocaleDateString()` | [MDN Date.prototype.toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) |
| `.toTimeString()`       | [MDN Date.prototype.toTimeString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)             |

For the full list of predefined Core Objects, [visit Mozilla Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

## Takeaways

1. Objects are used to store multiple, related values in a single structure
2. Objects have _key/value_ pairs seperated by a `:`
3. Arrays are objects that store comma seperated values between `[]`
4. Objects can have _methods_, that are functions belonging to objects
