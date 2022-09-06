---
title: "JS Loops"
slug: "/js-loops"
---

## Why

In JavaScript, loops give us an easy way to do repetitive tasks. There are situations where you have to write a statement or execute a set of logic multiple times or display a message with a slight variation in numbers. There are various situations that are more easily served by one type of loop over the others as we will see later.

## What

Types of JavaScript Loops:

- `for` - loops through a block of code a number of times
- `for/in` - loops through the properties of an object
- `for/of` - loops through the values of an iterable object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

We will also cove these keywords:

- The `break` statement
- The `continue` statement

### The `for` Loop

The for loop will repeat until a specified condition evaluates to `false`.

Syntax:

```js
for ([initialization]; [conditional]; [increment / decrement]) {
  // code to repeat
}
```

Example:

```js
for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
  if (bottlesOnTheWall) {
    console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
  } else {
    console.log(`No more bottles of milk on the wall!`);
  }
}
```

#### `for` Loop Variations

`for` loops can be written in a variety of ways. If the need arises, you may omit certain syntax.

- **Initialization**:

```js
// bottlesOnTheWall is defined elsewhere in your code

for (; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
  if (bottlesOnTheWall) {
    console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
  } else {
    console.log(`No more bottles of milk on the wall!`);
  }
}
```

- **Conditional**:

```js
for (let bottlesOnTheWall = 99; ; bottlesOnTheWall--) {
  if (bottlesOnTheWall) {
    console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
  } else {
    console.log(`No more bottles of milk on the wall!`);
    // There is no conditional, so a break keyword is added to
    // ensure that the loop will eventually stop
    break;
  }
}
```

- **Increment/Decrement**:

```js
for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; ) {
  if (bottlesOnTheWall) {
    console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
    bottlesOnTheWall--;
  } else {
    console.log(`No more bottles of milk on the wall!`);
  }
}
```

### The `for/in` Loop

The `for/in` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

Syntax:

```js
for (let property of obj) {
  // property holds the key name as the loop iterates through an object
  // so the resulting code prints each value at a given key on the object
  console.log(obj[property]);
}
```

\* More examples will be covered with the introduction of objects

### The `for/of` Loop

The JavaScript `for/of` statement loops through the values of an iterable object. `for/of` lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

Syntax:

```js
for (let value of arr) {
  // value holds the value as the loop iterates through an array
  // so the resulting code prints each value from the array
  console.log(value);
}
```

\* More examples will be covered with the introduction of objects

### The `while` Loop

The `while` loop will run infinitely until a specified condition is `false`. It can run 0 or more times. (if you don’t have a break statement or some way to make the conditional false.. you will crash your browser)

Syntax:

```js
while ([condition]) {
  // code to repeat
}
```

Example:

```js
while (isOnline) {
  streamData();
}
```

### The `do/while` Loop

The `do/while` loop will execute a specified block of code once, then will run until a condition is false. It will run at least 1 time. (be careful of infinite loops)

Syntax:

```js
do {
  // code to repeat
} while ([condition]);
```

Example:

```js
do {
  sendMessage();
} while (unsentMessage);
```

### The `break` Statement

Use the break statement to terminate a loop.

Example:

```js
while (isOnline) {
  if (lowConnectivity) {
    break;
  }

  transmitData();
}
```

## Takeaways

1. Loops provide a way to iterate over repetitive tasks
2. `while`, `do/while`, and `for` loops are common JS loop structures
3. While loop conditions are _true_, the loops iterations will continue
