---
title: "JS Operators"
slug: "/js-operators"
---

## Why

JavaScript includes operators as other languages do. An operator performs some operation on single or multiple operands (values) and produces a result.

For example `1 + 2`, where the (`+`) sign is an operator and `1` is the left **operand** and `2` is the right **operand**.

The (`+`) operator adds two numeric values and produces a result which is 3 in this case.

```js
1 + 2; // 3
20 + 89; // 109
// ...etc operations performed on one or more values
```

## What

JavaScript operators are divided into three main groups based on the number of **operands** and **operators**. There are **unary** and **binary** operators, as well as a special **ternary** (or _conditional_) operator.

### Unary Operators

A unary operator requires a single operand, either before or after the operator:

```js
// operator operand
typeof "Frodo"; // "string"
```

### Binary operators

A binary operator requires two operands, one before the operator and one after the operator:

```js
// operand operator operand;
1 + 1;
```

The primary types of binary operators are:

- Assignment Operators

  Assignment operators are used for assigning values to variables.

  \*The most common assignment operator is the (`=`) sign

  ```js
  let name = "Frodo";
  ```

- Arithmetic Operators

  Often, the logic we write requires and/or is enhanced by common arithmetic. Arithmetic involves one operator between two operands.

  ```js
  12 * 365.25; // 4383
  ```

- Comparison Operators

  A comparison operator compares the operands and returns a value based on whether the comparison is true or false.

  ```js
  1 < 2; // true
  ```

- Logical operators

  A logical operator is used to compare two expressions. This typically returns a boolean value.

  ```js
  isOnline && isActive; // true if both operands are true
  ```

## How

### Arithmetic operators

- Addition

  ```js
  1 + 2; // 3
  ```

- Subtract

  ```js
  1 - 2; // -1
  ```

- Multiplication

  ```js
  1 * 2; // 2
  ```

- Divide

  ```js
  1 / 2; // 0.5
  ```

- Modulus/ Division Remainder

  ```js
  3 % 2; // 1
  ```

- Exponentiation

  ```js
  2 ** 4; // 16
  ```

- Increment (post/pre)

  ```js
  let i = 1;
  let o = 1;
  i++;
  o--;
  i; // 2
  o; // 0
  ```
 
### Concatenation

_Concatenation_ involves combining _two_ strings operands together with the `+` operator.

```js
let firstName = "Bilbo";
let lastName = "Baggins";
let fullName = firstName + " " + lastName; // Results in "Bilbo Baggins" as a single string
```

### Comparison Operators

- Loose Equality `==`

  ```js
  2 == 2; // true
  2 == "2"; // true
  ```

- Loose Inequality `!=`

  ```js
  2 != 2; // false
  1 != "2"; // true
  ```

- Greater Than `>`

  ```js
  2 > 1; // true
  2 > "1"; // true
  ```

- Less Than `<`

  ```js
  2 < 1; // false
  2 < "10"; // true
  ```

- Equal to or Greater Than `<=`

  ```js
  2 >= 1; // true
  2 >= "2"; // true
  ```

- Equal to or Lesser Than `>=`

  ```js
  2 <= 2; // true
  2 <= 20; // true
  ```

- Strict Equality `===`

  The strict equality operator checks whether two operands are equal, returning a Boolean result. Unlike the loose equality operator, the strict equality operator always considers operands of different types to be different.

  ```js
  2 === 2; // true
  2 === "2"; // false
  ```

- Strict Inequality `!==`

  ```js
  2 !== 1; // true
  2 !== "2"; // true
  ```

### Logical operators

- Logical AND `&&`

  Logical AND returns `true` only if both operands equate to `true`. Otherwise, it returns `false`.

  ```js
  true && 2 + 2 == 4; // true
  true && false; // false
  ```

- Logical OR `||`

  Logical OR returns `true` only if one or more operand equates to `true`. Otherwise, it returns `false`.

  ```js
  false || 2 + 3 == 4; // false
  true || false; // true
  ```

- Logical NOT `!`

  Logical NOT returns the opposite Boolean value from what an operand equate to.

  ```js
  !true; // false
  !(2 + 2 == 4); // false
  ```

### Type Coercion, and Truthy and Falsy Values

_Type Coercion_ is the process of converting, or _coercing_, a value type from one data type to another to perform an action. We will see this quite often in JavaScript. In fact, the only operations where type coercion _can not_ happen is with strict equality and strict inequality.

For example, let's say we are attempting to add numbers together. One of the values is as we expect: a number value. However, the other value is a string. This creates a problem. You cannot work arithmetic with strings, because arithmetic must involve _numbers_. So, JavaScript uses type coercion to resolve the problem for you.

```js
let x = 10;
let y = "11";

let result = x + y; // attempting to add a number and a string to get a sum

console.log(result); // Prints "1011" ????
```

But JavaScript gives us a string of `"1011"` as the result? Evidently type coercion changed the one number value to a string to perfom _concatenation_. In fact, type coercion _always_ chooses concatenation if you have two operands (at least one of them a string value) and a `+` operator.

Now let's finish this example by looking at other arithmetic operators.

```js
let x = 10;
let y = "11";

let result = x - y; // attempting to subtract a number and a string to get a result
let comparison = x > y; // attempting to check if x is greater than y

console.log(result); // Prints -1
console.log(comparison); // Prints false
```

We changed the addition to subtraction and we actually get a number result. That's because `-` is used in arithmetic only, and JavaScript clearly knows that you are attempting arithmetic, so both operands need to be numbers.

We also added a comparison operation between `10` and `"11"`. JavaScript correctly changed the data types to perform the comparison.

Now let's take a look at how Javascript uses type coercion when checking equality:

1. Loose Equality, which enables **type coercion**
2. Strict Equality, which disables **type coercion**

For example:

```js
1 == "1"; // true, due to type coercion
1 === "1"; // false, since string values cannot equal number values
```

We cannot do this with arrays however, even if 2 arrays have the same exact contents, both arrays point to different places in memory:

```js
[1, 2, 3] == [1, 2, 3]; // false, two DIFFERENT arrays with the same values
```

As well as a data type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

According to the Mozilla Developer Network,

> A **falsy value** is a value that is considered false when encountered in a Boolean context.

#### Falsy Values

The following all have boolean value of false:

- `false`
- `0`
- `0n`
- `""` , `''` , ``
- `null`
- `undefined`
- `NaN` - Not A Number

For Example:

```js
let num = 0;

if (num) {
  console.log("num is true");
} else {
  console.log("num is false");
}

// Would log "num is false", since 0 is inherently false
```

All other values are considered “truthy”

```js
if (1) {
  console.log("truthy");
} else {
  console.log("falsy");
}

if ([]) {
  console.log("truthy");
} else {
  console.log("falsy");
}

if ("false") {
  console.log("truthy");
} else {
  console.log("falsy");
}

// All of the above examples would log "truthy"
```

Knowing how JavaScript will evaluate values in certain contexts, it can be extremely useful to include truthy/falsy values in our programs.

## Takeaways

1. Operators are symbols that initiate an operation between one or more values
2. JS Operators include _arithmetic_, _assignment_, _logical_ and _comparison_
3. All data types have an inherent Boolean value called _truthy_ or _falsy_
4. Binary operations must be performed on the _same_ data types. JavaScript will use _type coercion_ to change the data types of values in operations if two operands are different. 
